"use client";

import Slider from "react-slick";
import { ProductCard } from "./ProductCard";

export const ProductSlider = ({ title, products }) => {
  if (!products?.length)
    return <div className="py-16 text-center">No products found</div>;

  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        {title && (
          <h2 className="text-3xl font-semibold text-center mb-10 uppercase">
            {title}
          </h2>
        )}

        <Slider slidesToShow={4}>
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
