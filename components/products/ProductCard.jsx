"use client";
import Link from "next/link";
import Image from "next/image";
import { decodeHTML } from "../../lib/woocommerce"; // since you already made this

export const ProductCard = ({ product }) => {
  const regularPrice = Number(product.regular_price || 0);
  const salePrice = Number(product.sale_price || 0);

  const isOnSale =
    regularPrice > 0 && salePrice > 0 && salePrice < regularPrice;

  const discountPercent = isOnSale
    ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
    : 0;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block bg-white border border-gray-200 hover:shadow-lg transition"
    >
      <div className="relative w-full aspect-square">
        {/*SALE BADGE */}
        {isOnSale && (
          <div className="absolute top-2 left-2 bg-[#c39617] text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discountPercent}%
          </div>
        )}
        <Image
          src={product.images?.[0]?.src || "/placeholder.png"}
          alt={decodeHTML(product.name)}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-4 text-center">
        {/* CATEGORY NAME */}
        {/* <p className="text-xs uppercase text-[#C39617] mb-2">
          {product.categories?.map((cat) => decodeHTML(cat.name))?.join(", ") ||
            "Category"}
        </p> */}

        {/* PRODUCT NAME */}
        <h3 className="text-sm min-h-[48px]">{decodeHTML(product.name)}</h3>

        {/* PRICE */}
        <div className="mt-2">
          {isOnSale ? (
            <div className="flex justify-center gap-2">
              <span className="line-through text-gray-500">
                ${regularPrice}
              </span>
              <span className="font-semibold">${salePrice}</span>
            </div>
          ) : (
            <span className="font-semibold">${product.price}</span>
          )}
        </div>
        {/* ADD TO CART BUTTON */}
        <div className="px-4 pb-4 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(product);
            }}
            className="w-full bg-[#c39617] text-white text-sm font-semibold py-2 rounded hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};
