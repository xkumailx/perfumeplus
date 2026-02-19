"use client";

import { useState } from "react";
import Link from "next/link";
import { decodeHTML } from "../../lib/woocommerce";
import { ProductCard } from "../products/ProductCard";

export default function ProductClient({ product, relatedProducts }) {
  const [activeImg, setActiveImg] = useState(
    product.images?.[0]?.src || "/placeholder.png",
  );
  const [qty, setQty] = useState(1);

  const brand = product.categories?.[0]?.name || "Brand";
  return (
    <>
      {/* Breadcrumbs */}
      <div className="text-sm mb-6 text-gray-600">
        Home / {brand} / {product.name}
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Images */}
        <div>
          <img
            src={activeImg}
            className="w-full aspect-square object-cover border"
          />

          {/* <div className="flex gap-3 mt-4">
            {product.images?.map((img) => (
              <img
                key={img.id}
                src={img.src}
                onClick={() => setActiveImg(img.src)}
                className="w-20 h-20 object-cover border cursor-pointer"
              />
            ))}
          </div> */}
        </div>

        {/* Info */}
        <div>
          <div className="text-[#c39617] text-base mb-2">{brand}</div>

          <h1 className="text-2xl uppercase font-semibold mb-4">
            {product.name}
          </h1>

          {/* <div
            className="text-3xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: product.price_html }}
          /> */}
          <div className="flex items-center gap-4 mb-6">
            {product.sale_price ? (
              <>
                <span className="line-through text-gray-500 font-normal text-xl">
                  ${product.regular_price}
                </span>
                <span className="text-black text-xl font-normal">
                  ${product.sale_price}
                </span>
              </>
            ) : (
              <span className="text-black text-3xl font-bold">
                ${product.price}
              </span>
            )}
          </div>

          {product.short_description && (
            <div
              className="mb-6 text-lg"
              dangerouslySetInnerHTML={{ __html: product.short_description }}
            />
          )}

          {/* Qty */}
          <div className="flex items-center gap-2 border w-full mb-6">
            {/* Quantity */}
            <div className="w-1/2 flex items-center justify-between">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4"
              >
                -
              </button>
              <span className="px-6">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4">
                +
              </button>
            </div>

            {/* Add To Cart */}
            <button className="w-1/2 bg-[#C39617] text-white py-4 font-normal">
              Add to Cart
            </button>
          </div>
          {/* SKU */}
          {product.sku && (
            <p className="mb-2">
              <span className="font-medium">SKU :</span> {product.sku}
            </p>
          )}

          {/* Stock */}
          <p className="mb-2">
            <span className="font-medium">Stock :</span>{" "}
            {product.stock_quantity
              ? `${product.stock_quantity} available`
              : product.stock_status === "instock"
                ? "In Stock"
                : "Out of Stock"}
          </p>

          {/* Brand Child Category */}
          <p className="mb-2">
            <span className="font-medium">Brand :</span>{" "}
            {product.categories
              ?.filter((cat) => cat.parent !== 0) // child category
              ?.map((cat) => decodeHTML(cat.name))
              ?.join(", ") || "N/A"}
          </p>
        </div>
      </div>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <>
          <h2 className="text-3xl font-semibold text-center mb-10">
            YOU MAY ALSO LIKE
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              // <Link key={p.id} href={`/product/${p.slug}`}>
              //   <div className="border p-4 hover:shadow-lg">
              //     <img
              //       src={p.images?.[0]?.src || "/placeholder.png"}
              //       className="aspect-square object-cover mb-4"
              //     />
              //     <div className="text-sm text-[#c39617]">
              //       {p.categories?.[0]?.name}
              //     </div>
              //     <div className="font-semibold">{p.name}</div>
              //   </div>
              // </Link>
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
