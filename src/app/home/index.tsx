import { HeroSection } from "./hero";
import { BaseLayout } from "@/components/layout/base-layout";
import { CategoriesSection } from "./categories";
import { BestSellerSection } from "./best";
import { FeaturedProductsSection } from "./feature";
import { TodaysDealSection } from "./today";

export const HomePage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <CategoriesSection />

      <BestSellerSection />
      <TodaysDealSection />
      <FeaturedProductsSection />
    </BaseLayout>
  );
};
