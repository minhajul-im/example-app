import { HeroSection } from "./hero";
import { BaseLayout } from "@/components/layout/base-layout";
import { CategoriesSection } from "./categories";
import { BestSellerSection } from "./best";
import { FeaturedProductsSection } from "./feature";
import { TodaysDealSection } from "./today";
// import { CategoryProductsSection } from "./category";

export const HomePage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <CategoriesSection />

      {/* <CategoryProductsSection /> */}

      <BestSellerSection />
      <TodaysDealSection />
      <FeaturedProductsSection />
    </BaseLayout>
  );
};
