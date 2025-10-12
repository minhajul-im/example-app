import type { RootStateType } from "@/redux/store";
import type { ProductType, StateSyncType } from "@/type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartFn,
  removeFromCartFn,
  setCartItemsFn,
  incrementFn,
  decrementFn,
} from "@/redux/slice/cartSlice";
import { toast } from "react-hot-toast";
import { isExistingItem, getUserId, getGuestUserId } from "@/helper";
import { useLoading } from "@/hooks/useLoading";
import {
  useAddToCartMutation,
  useRemoveCartMutation,
  useUpdateCartMutation,
} from "@/api/mutations/useCart";
import { useEffect } from "react";
import { useGetCartQuery } from "@/api/queries/useGetCart";

export const useAddToCart = (item: ProductType, quantity: number = 1) => {
  const dispatch = useDispatch();
  const { mutate } = useAddToCartMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();
  const cart = useSelector((state: RootStateType) => state.cart);

  const fnAddToCart = () => {
    const existingItem = isExistingItem(cart?.items, item);

    if (existingItem) {
      toast.error("Item already in cart");
      return;
    }

    const data: StateSyncType = {
      id: item?.id,
      productId: item?.id,
      name: item?.name,
      mainPrice: item?.calculable_price,
      image: item?.thumbnail_image,
      showPrice: item?.main_price,
      variant: item?.variant || null,
      quantity,
    };

    dispatch(addToCartFn(data));

    const formData = new FormData();
    formData.append("id", item?.id.toString());
    formData.append("quantity", quantity.toString());
    formData.append("variant", item?.variant || "");
    if (getUserId()) {
      formData.append("user_id", getUserId() as string);
    } else {
      formData.append("temp_user_id", getGuestUserId() as string);
    }

    mutate(formData);

    toast.success("Item added to cart");
    stopLoadingFn(item?.id);
  };

  const isLoading = startLoadingFn(item?.id) || false;

  return { isLoading, fnAddToCart };
};

export const useRemoveFromCart = (item: ProductType | StateSyncType) => {
  const dispatch = useDispatch();
  const { mutate } = useRemoveCartMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();

  const cart = useSelector((state: RootStateType) => state.cart);
  const isExisting = isExistingItem(cart?.items, item as ProductType);

  const fnRemoveCart = () => {
    if (isExisting) {
      const id = isExisting?.id;
      dispatch(removeFromCartFn(id as number));
      mutate({ id: id as number | string });
      toast.success("Item removed from cart");
    } else {
      toast.error("Item not found in cart");
    }
    stopLoadingFn(item?.id);
  };

  const removeLoading = startLoadingFn(item?.id) || false;

  return { removeLoading, fnRemoveCart };
};

export const useGetCart = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetCartQuery();

  useEffect(() => {
    if (
      !isLoading &&
      data &&
      data?.length > 0 &&
      data?.[0]?.cart_items?.length > 0
    ) {
      const cart = data?.[0]?.cart_items?.map((item) => {
        const result: StateSyncType = {
          id: item?.id,
          productId: item?.product_id,
          name: item?.product_name,
          image: item?.product_thumbnail_image,
          mainPrice: item?.price,
          showPrice: `${item?.currency_symbol} ${item?.price}`,
          variant: item?.variation,
          quantity: item?.quantity,
        };
        return result;
      });

      dispatch(setCartItemsFn(cart as StateSyncType[]));
    }
  }, [data, isLoading, dispatch]);
};

export const useUpdateCart = (
  item: ProductType | StateSyncType,
  quantity: number = 1
) => {
  const dispatch = useDispatch();
  const { mutate } = useUpdateCartMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();
  const cart = useSelector((state: RootStateType) => state.cart);

  const fnUpdateCart = () => {
    const existingItem = isExistingItem(cart?.items, item as ProductType);

    if (!existingItem) {
      toast.error("Item not found in cart");
      return;
    }

    if (quantity > existingItem.quantity) {
      for (let i = existingItem.quantity; i < quantity; i++) {
        dispatch(incrementFn(existingItem.id as number));
      }
    } else if (quantity < existingItem.quantity) {
      for (let i = existingItem.quantity; i > quantity; i--) {
        dispatch(decrementFn(existingItem.id as number));
      }
    }

    const formData = new FormData();
    formData.append("id", existingItem.id.toString());
    formData.append("quantity", quantity.toString());
    formData.append("variant", existingItem.variant || "");
    mutate(formData);

    toast.success("Item updated in cart");
    stopLoadingFn(item?.id);
  };

  const isLoading = startLoadingFn(item?.id) || false;

  return { isLoading, fnUpdateCart };
};

export const useIncrementCart = (item: ProductType | StateSyncType) => {
  const dispatch = useDispatch();
  const { mutate } = useUpdateCartMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();
  const cart = useSelector((state: RootStateType) => state.cart);

  const fnIncrementCart = () => {
    const existingItem = isExistingItem(cart?.items, item as ProductType);

    if (!existingItem) {
      toast.error("Item not found in cart");
      return;
    }

    dispatch(incrementFn(existingItem.id as number));

    const newQuantity = existingItem.quantity + 1;
    const formData = new FormData();
    formData.append("id", existingItem.id.toString());
    formData.append("quantity", newQuantity.toString());
    formData.append("variant", existingItem.variant || "");
    mutate(formData);

    toast.success("Item incremented in cart");
    stopLoadingFn(item?.id);
  };

  const isLoading = startLoadingFn(item?.id) || false;

  return { isLoading, fnIncrementCart };
};

export const useDecrementCart = (item: ProductType | StateSyncType) => {
  const dispatch = useDispatch();
  const { mutate } = useUpdateCartMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();
  const cart = useSelector((state: RootStateType) => state.cart);

  const fnDecrementCart = () => {
    const existingItem = isExistingItem(cart?.items, item as ProductType);

    if (!existingItem) {
      toast.error("Item not found in cart");
      return;
    }

    if (existingItem.quantity <= 1) {
      toast.error("Cannot decrease quantity below 1");
      return;
    }

    dispatch(decrementFn(existingItem.id as number));

    const newQuantity = existingItem.quantity - 1;
    const formData = new FormData();
    formData.append("id", existingItem.id.toString());
    formData.append("quantity", newQuantity.toString());
    formData.append("variant", existingItem.variant || "");
    mutate(formData);

    toast.success("Item decremented in cart");
    stopLoadingFn(item?.id);
  };

  const isLoading = startLoadingFn(item?.id) || false;

  return { isLoading, fnDecrementCart };
};
