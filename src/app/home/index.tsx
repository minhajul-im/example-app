import { HeroSection } from "./hero";
import { BaseLayout } from "@/components/layout/base-layout";
import { CategoriesSection } from "./categories";
import { ProductCard } from "@/components/card/product";
import { CardLayout } from "@/components/common/card-layout";
import { AnimationWrapper } from "@/components/common/animation-wrapper";
import { SectionTitle } from "@/components/common/section-title";

const products = [
  {
    id: "1",
    name: 'Samsung 55" Crystal UHD 4K Smart TV',
    price: 599.99,
    originalPrice: 799.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    reviews: 234,
  },
  {
    id: "2",
    name: 'LG 65" OLED 4K Smart TV with AI ThinQ',
    price: 1299.99,
    originalPrice: 1599.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.8,
    reviews: 189,
  },
  {
    id: "3",
    name: 'Sony 43" 4K Ultra HD LED Smart TV',
    price: 449.99,
    originalPrice: 549.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.3,
    reviews: 156,
  },
  {
    id: "4",
    name: 'TCL 50" 4K QLED Smart TV with HDR',
    price: 399.99,
    originalPrice: 499.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.6,
    reviews: 312,
  },
  {
    id: "5",
    name: 'Hisense 55" 4K UHD Smart TV',
    price: 379.99,
    originalPrice: 479.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.4,
    reviews: 198,
  },
  {
    id: "6",
    name: 'Panasonic 50" 4K LED Smart TV',
    price: 429.99,
    originalPrice: 529.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.2,
    reviews: 145,
  },
  {
    id: "7",
    name: 'Philips 43" 4K UHD Android TV',
    price: 359.99,
    originalPrice: 449.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.5,
    reviews: 167,
  },
  {
    id: "8",
    name: 'Sharp 55" 4K Smart TV with Alexa',
    price: 469.99,
    originalPrice: 599.99,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    rating: 4.3,
    reviews: 203,
  },
];

export const HomePage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <CategoriesSection />

      <section className="mb-10 md:mb-20 container mx-auto">
        <SectionTitle
          title="New Arrivals"
          linkText="View All"
          href="/products"
        />
        <CardLayout>
          {products?.map((product, i: number) => (
            <AnimationWrapper
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}>
              <ProductCard key={product.id} {...product} />
            </AnimationWrapper>
          ))}
        </CardLayout>
      </section>

      <section className="mb-10 md:mb-20 container mx-auto">
        <SectionTitle
          title="Best Sellers"
          linkText="View All"
          href="/products"
        />
        <CardLayout>
          {products?.map((product, i: number) => (
            <AnimationWrapper
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}>
              <ProductCard key={product.id} {...product} />
            </AnimationWrapper>
          ))}
        </CardLayout>
      </section>
    </BaseLayout>
  );
};
