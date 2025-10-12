import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CreditCard } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootStateType } from "@/redux/store";
import { ButtonGroup } from "../ui/button-group";

export const CartSummary = () => {
  const cart = useSelector((state: RootStateType) => state.cart);

  return (
    <Card className="p-4 md:p-6 sticky top-4 bg-card">
      <h2 className="text-xl font-bold text-foreground mb-4">ORDER SUMMERY</h2>

      <ButtonGroup className="w-full h-10 mb-4">
        <Input placeholder="Enter Coupon code" className="h-10" />
        <Button aria-label="Search" className="h-10 text-white">
          Apply
        </Button>
      </ButtonGroup>

      <div className="space-y-3 mb-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">
            Items ({cart.items.length}):
          </span>
          <span className="font-medium">234234</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping to:</span>
          <span className="text-green-600 font-semibold">Free</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span className="text-muted-foreground">Your savings:</span>
          <span className="font-medium">-234234</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Estimated sales tax:</span>
          <span className="font-medium">-234234</span>
        </div>
      </div>

      <Separator />

      <div className="flex justify-between text-lg font-bold">
        <span>Sub Total</span>
        <span>234234</span>
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
