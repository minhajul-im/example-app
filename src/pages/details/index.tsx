import { useGetProductDetails } from "@/api/queries/useProducts";
import { BaseLayout } from "@/components/layout/base-layout";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/common/skeleton";
import type { ProductDetailsType } from "@/type";
import { RelatedProducts } from "./related";
import { BreadcrumbWrapper } from "@/components/common/breadcrumb-wrapper";
import { ProductTabs } from "@/pages/details/tabs";
import { useNavigate, useParams } from "react-router-dom";
import { ProductDetailsSeo } from "./seo";
import { ImageSection } from "@/components/card/image";
import { ProductInfo } from "./info";
import { useState } from "react";

export interface ProductDetailsResponse {
  data: ProductDetailsType[];
  success: boolean;
  status: number;
}

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedVariantImage, setSelectedVariantImage] = useState<
    string | null
  >(null);
  const { data, isLoading } = useGetProductDetails(id as string) as {
    data: ProductDetailsResponse | undefined;
    isLoading: boolean;
    error: unknown;
  };

  if (isLoading) {
    return (
      <BaseLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Skeleton className="aspect-square w-full rounded-xl" />
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-20 w-20 rounded-lg" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </BaseLayout>
    );
  }

  if (!data?.data?.[0]) navigate("/products");

  const product: ProductDetailsType = data?.data?.[0] as ProductDetailsType;

  return (
    <>
      <ProductDetailsSeo product={product} />
      <BaseLayout>
        <BreadcrumbWrapper
          className="my-10 mx-4 md:mx-auto"
          items={[
            { title: "Products", path: "/products" },
            { title: product?.name },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mx-4 md:mx-auto">
          <div className="md:col-span-7">
            <ImageSection
              product={product}
              selectedVariantImage={selectedVariantImage}
            />
          </div>
          <ProductInfo
            product={product}
            onVariantImageChange={setSelectedVariantImage}
          />
        </div>

        <ProductTabs product={product} />

        {product?.tags && product?.tags?.length > 0 && (
          <div className="mx-4 md:mx-auto mt-4 md:mt-6">
            <div className="mt-8 flex items-center gap-2">
              <span className="text-sm font-medium">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {product?.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}
        <RelatedProducts />
      </BaseLayout>
    </>
  );
};
