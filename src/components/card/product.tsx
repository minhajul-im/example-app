import { useState } from "react";
import { Heart, ShoppingCart, ClipboardCheck, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import type { ProductType } from "@/type";
import { Skeleton } from "../common/skeleton";
import { getImageUrl } from "@/helper";

interface Props {
  product: ProductType;
}

export const ProductCard = ({ product }: Props) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = product.has_discount
    ? Math.round(
        ((parseFloat(product.stroked_price) - parseFloat(product.main_price)) /
          parseFloat(product.stroked_price)) *
          100
      )
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:scale-105 cursor-pointer duration-300">
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-accent backdrop-blur-sm transition-all hover:bg-background hover:scale-110 cursor-pointer"
        aria-label="Add to wishlist">
        <Heart
          className={cn(
            "h-4 w-4 transition-all",
            isWishlisted
              ? "fill-red-500 text-red-500"
              : "text-muted-foreground hover:text-red-500"
          )}
        />
      </button>

      {discount > 0 && (
        <Badge className="absolute left-2 top-2 z-10" variant="destructive">
          -{discount}%
        </Badge>
      )}

      <div className="relative aspect-[16/12] overflow-hidden bg-muted">
        {product?.thumbnail_image ? (
          <img
            src={getImageUrl(product?.thumbnail_image) || "/placeholder.svg"}
            alt={product?.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <Image className="w-6 h-6 text-muted" />
          </div>
        )}
      </div>

      <div className="p-3">
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product?.sales})
          </span>
        </div>

        <h3 className="line-clamp-1 text-sm font-medium leading-tight text-foreground duration-300">
          {product?.name}
        </h3>

        <div className="mb-2 flex items-center gap-2 duration-300">
          <span className="text-lg font-bold text-foreground">
            {product?.main_price}
          </span>
          {product.has_discount && (
            <span className="text-sm text-muted-foreground line-through">
              {product?.stroked_price}
            </span>
          )}
        </div>

        <div className="flex gap-2 duration-300">
          <Button className="flex-1" size="xs">
            <ShoppingCart className="h-3 w-3" />
            Add to Cart
          </Button>
          <Button className="flex-1 border" size="xs" variant="secondary">
            <ClipboardCheck className="h-3 w-3" />
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:scale-105 cursor-pointer duration-300">
      <div className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm">
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <div className="absolute left-2 top-2 z-10">
        <Skeleton className="h-5 w-8 rounded-full" />
      </div>

      <div className="relative aspect-[16/12] overflow-hidden bg-muted">
        <Skeleton className="h-full w-full" />
      </div>

      <div className="p-3">
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-4" />
            ))}
          </div>
          <Skeleton className="h-3 w-8" />
        </div>

        <Skeleton className="h-4 w-full mb-2" />

        <div className="mb-2 flex items-center gap-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="flex-1 h-8" />
          <Skeleton className="flex-1 h-8" />
        </div>
      </div>
    </div>
  );
};
