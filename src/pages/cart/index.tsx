import { BaseLayout } from "@/components/layout/base-layout";
import { useSelector } from "react-redux";
import type { RootStateType } from "@/redux/store";
import { CartItem } from "./item";
import { CartSummary } from "@/components/common/summary";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/common/section-title";
import { Link } from "react-router-dom";
import { useGetCartQuery } from "@/api/queries/useGetCart";

export const CartPage = () => {
  useGetCartQuery();

  const cart = useSelector((state: RootStateType) => state.cart);

  return (
    <BaseLayout>
      <section className="mb-10 md:mb-20 mt-10">
        <SectionTitle title="Shopping Cart" />
        {cart?.items?.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Your cart is empty
            </h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Button asChild>
              <Link to="/products">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-3 lg:space-y-4">
                {cart?.items?.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </section>
    </BaseLayout>
  );
};
