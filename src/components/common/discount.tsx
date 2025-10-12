import type { ProductDetailsType, ProductType } from "@/type";
import { Badge } from "../ui/badge";

interface Props {
  product: ProductType | ProductDetailsType;
}

export const Discount = ({ product }: Props) => {
  const discount = product?.has_discount ? product?.main_price : null;

  return (
    discount && (
      <Badge
        variant="destructive"
        className="absolute top-2 left-2 text-sm font-semibold">
        -{discount}
      </Badge>
    )
  );
};
