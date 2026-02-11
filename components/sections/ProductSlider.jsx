"use client";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProductSlider = ({ title, products }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  if (!products?.length) return null;

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold text-center mb-10">{title}</h2>
        )}

        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className="border p-4 text-center bg-white h-full">
                <div className="relative w-full h-[260px] mb-4">
                  <Image
                    src={product.images?.[0]?.src || "/placeholder.png"}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="font-medium mt-1 min-h-[48px]">
                  {product.name}
                </h3>

                <div className="mt-2 font-semibold">${product.price}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
