import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/use-config";
import { SectionTitle } from "@/components/common/section-title";

export const CategoryProductsSection = () => {
  const config = useConfig();
  const configValue = getConfig(config, "home_categories")?.value;

  const categories = configValue ? (configValue as unknown[]) : [];

  console.log("Categories:", categories);

  return (
    <section>
      <SectionTitle title="Category Products" />

      <div>{JSON.stringify(categories)}</div>
    </section>
  );
};
