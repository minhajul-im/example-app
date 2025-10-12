import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import type { ProductType } from "@/type";
import { useAddToCart } from "@/controllers/cartController";
import { Spinner } from "../ui/spinner";
import { cn } from "@/lib/utils";
import { useRemoveFromWishlist } from "@/controllers/wishlistController";
interface Props {
  product: ProductType;
  quantity?: number;
  type: "CARD" | "DETAILS" | "MOVE_TO_CART";
  onShowModal?: (
    type: string,
    title?: string,
    size?: string,
    data?: unknown
  ) => void;
  onHideModal?: () => void;
}

export const CartButton = ({
  product,
  quantity = 1,
  type = "CARD",
  onShowModal,
  onHideModal,
}: Props) => {
  const { isLoading, fnAddToCart } = useAddToCart(product, quantity);
  const { removeLoading, fnRemoveWishlist } = useRemoveFromWishlist(product);
  const style = {
    CARD: {
      size: "xs",
      variant: "default",
      icon: <ShoppingCart className="h-2 w-2" />,
    },
    DETAILS: {
      size: "lg",
      variant: "default",
      icon: <ShoppingCart className="w-4 h-4 mr-2" />,
    },
  } as const;

  if (type === "MOVE_TO_CART") {
    return (
      <Button
        onClick={() => {
          fnAddToCart();
          fnRemoveWishlist();
        }}
        disabled={removeLoading || isLoading}
        className={cn(
          "w-full text-xs",
          isLoading || removeLoading ? "opacity-50 cursor-not-allowed" : ""
        )}
        size="xs">
        <ShoppingCart className="h-4 w-4 md:mr-2" />
        <span className="hidden md:block">Move to Cart</span>
      </Button>
    );
  }

  return (
    <Button
      className="flex-1"
      size={style[type].size}
      variant={style[type].variant}
      onClick={() => {
        if (product?.variant_product === 1) {
          if (onShowModal) {
            onShowModal("DETAILS", product?.name, "max-w-4xl", product?.id);
          }
        } else {
          fnAddToCart();
          if (onHideModal) {
            onHideModal();
          }
        }
      }}
      disabled={isLoading}>
      {isLoading ? (
        <>
          <Spinner /> Processing...
        </>
      ) : (
        <>
          {style[type].icon}
          Add to Cart
        </>
      )}
    </Button>
  );
};
