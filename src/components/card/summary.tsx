import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootStateType } from "@/redux/store";
import { Coupon } from "./coupon";
import { useGetCartSummaryQuery } from "@/api/queries/useGetCart";

interface CartSummaryType {
  sub_total: string;
  tax: string;
  shipping_cost: string;
  discount: string;
  grand_total: string;
  grand_total_value: number;
  coupon_code: string;
  coupon_applied: boolean;
}

export const CartSummary = () => {
  const cart = useSelector((state: RootStateType) => state.cart);

  const { data } = useGetCartSummaryQuery();

  const cartSummary = (data as unknown as CartSummaryType) || {};

  return (
    <Card className="p-4 md:p-6 sticky top-4 bg-card">
      <h2 className="text-xl font-bold text-foreground mb-4">ORDER SUMMERY</h2>

      <Coupon couponCode={cartSummary?.coupon_code} />

      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Items ({cart?.items?.length}):
          </span>
          <span className="font-medium">{cartSummary?.sub_total}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping to:</span>
          <span className="text-green-600 font-semibold">
            {cartSummary?.shipping_cost}
          </span>
        </div>

        <div className="flex justify-between text-green-600">
          <span className="text-muted-foreground">Your savings:</span>
          <span className="font-medium">{cartSummary?.discount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimated sales tax:</span>
          <span className="font-medium">{cartSummary?.tax}</span>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between text-lg font-bold">
        <span>Sub Total</span>
        <span>{cartSummary?.grand_total}</span>
      </div>

      <Button className="w-full mb-4" size="lg">
        <CreditCard className="h-5 w-5 mr-2" />
        CHECK OUT
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        Purchase protected by emox Money Back Guarantee
      </div>
    </Card>
  );
};
