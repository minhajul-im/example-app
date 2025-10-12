import { useGetProductDetails } from "@/api/queries/useProducts";
import type { ProductDetailsResponse } from "@/pages/details";
import type { ProductDetailsType, ProductType } from "@/type";
import { useNavigate } from "react-router-dom";
import { VariantCard } from "./variant";
import { ImageSection } from "./image";
import { useState } from "react";
import { Review } from "./review";
import { CartButton } from "../common/cart-button";

interface Props {
  id: string;
  onHideModal: () => void;
}

export const DetailsModal = ({ id, onHideModal }: Props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [displayPrice, setDisplayPrice] = useState<string>("0");
  const [selectedVariantImage, setSelectedVariantImage] = useState<
    string | null
  >(null);

  const navigate = useNavigate();
  const { data, isLoading } = useGetProductDetails(id as string) as {
    data: ProductDetailsResponse | undefined;
    isLoading: boolean;
    error: unknown;
  };

  if (isLoading) return <div>Loading...</div>;

  if (!data?.data?.[0]) navigate("/products");

  const product: ProductDetailsType = data?.data?.[0] as ProductDetailsType;

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-3 bg-background">
      <ImageSection
        height="320px"
        product={product}
        selectedVariantImage={selectedVariantImage}
      />

      <div className="space-y-1.5 md:space-y-2.5">
        <h2 className="text-xl md:text-2xl font-bold">{product?.name}</h2>

        <Review product={product} />
        <h3 className="text-xl md:text-2xl font-bold">{displayPrice}</h3>

        <VariantCard
          product={product}
          quantity={quantity}
          setQuantity={setQuantity}
          setDisplayPrice={setDisplayPrice}
          onVariantImageChange={setSelectedVariantImage}
        />

        <div className="flex">
          <CartButton
            product={product as unknown as ProductType}
            quantity={quantity}
            type="DETAILS"
            onShowModal={onHideModal}
          />
        </div>
      </div>
    </section>
  );
};
