import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const CategoriesSection = () => {
  const categories = [
    {
      name: "Minutes",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center",
      href: "#minutes",
    },
    {
      name: "Mobiles & Tablets",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop&crop=center",
      href: "#mobiles",
    },
    {
      name: "TVs & Appliances",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=100&h=100&fit=crop&crop=center",
      href: "#tvs",
    },
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=100&h=100&fit=crop&crop=center",
      href: "#electronics",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop&crop=center",
      href: "#fashion",
    },
    {
      name: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=100&h=100&fit=crop&crop=center",
      href: "#home",
    },
    {
      name: "Beauty & Toys",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center",
      href: "#beauty",
    },
    {
      name: "Furniture",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop&crop=center",
      href: "#furniture",
    },
    {
      name: "Flight Bookings",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=center",
      href: "#flights",
    },
    {
      name: "Grocery",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=100&h=100&fit=crop&crop=center",
      href: "#grocery",
    },
    {
      name: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=100&h=100&fit=crop&crop=center",
      href: "#new-arrivals",
    },
    {
      name: "Best Sellers",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?w=100&h=100&fit=crop&crop=center",
      href: "#best-sellers",
    },
    {
      name: "Trending Now",
      image:
        "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=100&h=100&fit=crop&crop=center",
      href: "#trending-now",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-10 md:py-16">
      <Slider {...settings}>
        {categories.map((category) => (
          <a
            key={category.name}
            href={category.href}
            className="flex flex-col items-center px-2"
            aria-label={`Explore ${category.name}`}>
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden shadow-md hover:bg-primary/30 transition-colors duration-300">
              <img
                src={category.image}
                alt={category.name}
                className="w-12 h-12 object-contain"
                loading="lazy"
              />
            </div>
            <span className="mt-2 text-xs md:text-sm font-medium text-gray-700 hover:text-primary max-w-[120px] line-clamp-1">
              {category.name}
            </span>
          </a>
        ))}
      </Slider>
    </section>
  );
};
