import { useGetBanners } from "@/api/queries/useBanners";
import { NoDataFound } from "@/components/common/no-data-found";
import { Skeleton } from "@/components/common/skeleton";
import { getImageUrl } from "@/helper";
import { Image } from "lucide-react";
import Slider from "react-slick";

type BannerType = {
  photo: string;
  url: string;
  position: number;
};

export const HeroSection = () => {
  const { data, isLoading } = useGetBanners();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 768,

        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const banners = (data?.data as BannerType[]) || [];

  return (
    <div className="w-full mt-2">
      {isLoading ? (
        <div className="w-full h-[280px] md:h-[360px] bg-gray-200">
          <Skeleton className="w-full h-full" />
        </div>
      ) : (
        <Slider {...settings}>
          {banners && banners?.length > 0 ? (
            banners?.map((banner, index) => (
              <div key={index} className="relative">
                {banner?.photo ? (
                  <div className="relative w-full aspect-[16/5] overflow-hidden">
                    <img
                      src={getImageUrl(banner?.photo)}
                      alt={"banner"}
                      className="w-full h-full object-cover cursor-grab"
                    />
                  </div>
                ) : (
                  <div className="w-full h-[280px] flex items-center justify-center md:h-[360px] bg-gray-200">
                    <Image className="w-16 h-16 text-gray-500" />
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="w-full h-[280px] flex items-center justify-center md:h-[360px] bg-gray-200">
              <NoDataFound />
            </div>
          )}
        </Slider>
      )}
    </div>
  );
};
