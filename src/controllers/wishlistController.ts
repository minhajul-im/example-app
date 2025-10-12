import type { RootStateType } from "@/redux/store";
import type { ProductType, StateSyncType } from "@/type";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlistFn,
  removeFromWishlistFn,
  setWishlistItemsFn,
} from "@/redux/slice/wishlistSlice";
import { toast } from "react-hot-toast";
import {
  extractNumericValue,
  getUserId,
  isAuthenticated,
  isExistingItem,
} from "@/helper";
import { useLoading } from "@/hooks/useLoading";
import {
  useAddToWishlistMutation,
  useRemoveWishlistMutation,
} from "@/api/mutations/useWishlist";
import { useNavigate } from "react-router-dom";
import { useGetWishlistQuery } from "@/api/queries/useGetWishlist";
import { useEffect } from "react";

export const useAddToWishlist = (item: ProductType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useAddToWishlistMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();
  const wishlist = useSelector((state: RootStateType) => state.wishlist);

  const fnAddToWishlist = () => {
    if (!isAuthenticated()) {
      toast.error("Please login to add item to wishlist");
      navigate("/signin");
      return;
    }

    const existingItem = isExistingItem(wishlist?.items, item);

    if (existingItem) {
      toast.error("Item already in wishlist");
      return;
    }

    const data: StateSyncType = {
      id: item?.id,
      productId: item?.id,
      name: item?.name,
      image: item?.thumbnail_image,
      mainPrice: item?.calculable_price,
      showPrice: item?.main_price,
      variant: item?.variant || null,
      quantity: 1,
    };
    dispatch(addToWishlistFn(data));
    const formData = new FormData();
    formData.append("product_id", item?.id.toString());
    formData.append("variant", item?.variant || "");
    if (getUserId()) {
      formData.append("user_id", getUserId() as string);
    }
    mutate(formData);
    toast.success("Item added to wishlist");
    stopLoadingFn(item?.id);
  };

  const addLoading = startLoadingFn(item?.id) || false;

  return { addLoading, fnAddToWishlist };
};

export const useRemoveFromWishlist = (item: ProductType | StateSyncType) => {
  const dispatch = useDispatch();
  const { mutate } = useRemoveWishlistMutation();
  const { startLoadingFn, stopLoadingFn } = useLoading();

  const wishlist = useSelector((state: RootStateType) => state.wishlist);
  const isWishListed = isExistingItem(wishlist?.items, item as ProductType);

  const fnRemoveWishlist = () => {
    if (!isAuthenticated()) {
      toast.error("Please login to remove item from wishlist");
      return;
    }

    if (isWishListed) {
      const id = isWishListed?.id;
      dispatch(removeFromWishlistFn(id as number));
      mutate({ id: id as number | string });
      toast.success("Item removed from wishlist");

      stopLoadingFn(item?.id);
    } else {
      toast.error("Item not found in wishlist");
    }
  };

  const removeLoading = startLoadingFn(item?.id) || false;

  return { removeLoading, fnRemoveWishlist };
};

export const useGetWishlist = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetWishlistQuery();

  useEffect(() => {
    if (
      !isLoading &&
      data &&
      data?.data &&
      Array.isArray(data?.data) &&
      data?.data?.length > 0
    ) {
      const wishlist = data?.data?.map((item) => {
        const result: StateSyncType = {
          id: item?.id,
          productId: item?.product?.id,
          name: item?.product?.name,
          image: item?.product?.thumbnail_image,
          mainPrice: extractNumericValue(item?.product?.base_price),
          showPrice: item?.product?.main_price,
          variant: item?.product?.variant,
          quantity: item?.quantity,
        };
        return result;
      });

      dispatch(setWishlistItemsFn(wishlist as StateSyncType[]));
    }
  }, [data, isLoading, dispatch]);
};
