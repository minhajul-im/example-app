import { useState } from "react";
import { Heart, ShoppingCart, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviews?: number;
}

export const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  rating = 4.5,
  reviews = 128,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:scale-105 cursor-pointer duration-300">
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-all hover:bg-background hover:scale-110 cursor-pointer"
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
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-3">
        <div className="mb-2 flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviews})</span>
        </div>

        <h3 className="line-clamp-1 text-sm font-medium leading-tight text-foreground duration-300">
          {name}
        </h3>

        <div className="mb-2 flex items-center gap-2 duration-300">
          <span className="text-lg font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
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
