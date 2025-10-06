import Slider from "react-slick";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1667912925305-629794bdb691?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altKey: "productTitle",
    model: "Ultra HD 4K",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    altKey: "productTitle",
    model: "Smart OLED",
  },
  {
    src: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altKey: "productTitle",
    model: "QLED 8K",
  },
];

export const HeroSection = () => {
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

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images?.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.model}
              className="w-full h-[300px] md:h-[400px] object-cover cursor-grab"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
              <h2 className="text-lg md:text-2xl font-bold">{image.model}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
