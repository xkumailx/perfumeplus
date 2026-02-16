import Link from "next/link";
import Image from "next/image";
import { decodeHTML } from "../../lib/woocommerce"; // since you already made this

export const ProductCard = ({ product }) => {
  const regularPrice = parseFloat(product.regular_price);
  const salePrice = parseFloat(product.sale_price);

  const isOnSale = salePrice && regularPrice && salePrice < regularPrice;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block bg-white border border-gray-200 hover:shadow-lg transition"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={product.images?.[0]?.src || "/placeholder.png"}
          alt={decodeHTML(product.name)}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-4 text-center">
        {/* CATEGORY NAME */}
        <p className="text-xs uppercase text-[#C39617] mb-2">
          {product.categories?.map((cat) => decodeHTML(cat.name))?.join(", ") ||
            "Category"}
        </p>

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
      </div>
    </Link>
  );
};
