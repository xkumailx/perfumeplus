import { getProducts } from "../../lib/woocommerce";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";
// import Link from "next/link";
import { ProductCard } from "../../components/products/ProductCard";

export const metadata = {
  title: "Shop All Products - Perfumes Plus International",
  description:
    "Browse our complete collection of authentic designer fragrances",
};

export const revalidate = 3600; // Revalidate every hour

export default async function ShopPage() {
  const products = await getProducts({ per_page: 24 });

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* <div className="max-w-[1640px] mx-auto px-4 py-12">
        <h1 className="font-semibold text-black text-[40px] text-center mb-12">
          SHOP ALL PRODUCTS
        </h1>

        {products.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="block bg-white border border-solid border-[#c5c5c5] hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full aspect-square">
                  <img
                    src={product.images?.[0]?.src || "/placeholder.png"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <div className="font-medium text-[#c39617] text-lg mb-2">
                    {product.categories?.[0]?.name || "Brand"}
                  </div>

                  <h3 className="font-normal text-black text-xl mb-4 line-clamp-2 min-h-[56px]">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-center gap-3">
                    {product.regular_price && product.sale_price ? (
                      <>
                        <span className="font-normal text-[#767676] text-lg line-through">
                          ${product.regular_price}
                        </span>
                        <span className="font-medium text-black text-lg">
                          ${product.sale_price}
                        </span>
                      </>
                    ) : (
                      <div
                        className="font-medium text-black text-lg"
                        dangerouslySetInnerHTML={{ __html: product.price_html }}
                      />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary text-xl">No products found.</p>
          </div>
        )}
      </div> */}
      <div className="flex flex-col gap-4 md:grid md:grid-cols-4 max-w-[1400px] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
