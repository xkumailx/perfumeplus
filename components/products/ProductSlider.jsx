"use client";

import Slider from "react-slick";
import { ProductCard } from "./ProductCard";

export const ProductSlider = ({ title, products }) => {
  if (!products?.length)
    return <div className="py-16 text-center">No products found</div>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280, // small laptops
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024, // tablets landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // tablets portrait
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold text-center mb-10 uppercase">
            {title}
          </h2>
        )}

        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
