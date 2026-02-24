import {
  getProducts,
  getProductsPaginated,
  getProductCategories,
} from "../../lib/woocommerce";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";
import Link from "next/link";
import { ProductCard } from "../../components/products/ProductCard";
import FilterSidebar from "../../components/FilterSidebar";
import ProductSearch from "../../components/ProductSearch";

export const metadata = {
  title: "Shop All Products - Perfumes Plus International",
  description:
    "Browse our complete collection of authentic designer fragrances",
};

export const revalidate = 3600; // Revalidate every hour

export default async function ShopPage({ searchParams }) {
  const sp = await searchParams;
  const page = Number(sp?.page || 1);
  const minPrice = sp?.min;
  const maxPrice = sp?.max;
  const brandId = sp?.brand;
  const categoryId = sp?.category;

  // products
  const { products, totalPages } = await getProductsPaginated(categoryId, {
    page,
    minPrice,
    maxPrice,
    brandId,
  });

  // categories + brands
  const allCats = await getProductCategories();
  const brandParent = allCats.find((c) => c.slug === "brands");

  const brands = brandParent
    ? allCats.filter((c) => c.parent === brandParent.id)
    : [];

  // send ALL categories except brands tree
  const categories = allCats.filter(
    (c) => c.id !== brandParent?.id && c.parent !== brandParent?.id,
  );

  return (
    <div className=" bg-white min-h-screen">
      <Header />
      <div className="max-w-[1400px] mx-auto mt-12 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-[30%] xl:w-[25%] w-full">
          <ProductSearch />
          <FilterSidebar
            categories={categories}
            brands={brands}
            searchParams={sp}
          />
        </div>

        {/* Products */}
        <div className="lg:w-[70%] xl:w-[75%] w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-12 flex-wrap max-w-[1400px] mx-auto items-center mb-12">
          {/* PREV */}
          {page > 1 && (
            <Link href={`/shop?page=${page - 1}`} className="px-4 py-2 border">
              Prev
            </Link>
          )}

          {/* PAGE NUMBERS */}
          {(() => {
            const pages = [];
            const delta = 2; // pages before & after current

            const start = Math.max(1, page - delta);
            const end = Math.min(totalPages, page + delta);

            // First page
            if (start > 1) {
              pages.push(
                <Link
                  key={1}
                  href={`/shop?page=1`}
                  className="px-4 py-2 border"
                >
                  1
                </Link>,
              );

              if (start > 2) pages.push(<span key="start-ellipsis">...</span>);
            }

            // Middle pages
            for (let i = start; i <= end; i++) {
              pages.push(
                <Link
                  key={i}
                  href={`/shop?page=${i}`}
                  className={`px-4 py-2 border ${
                    i === page ? "bg-black text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {i}
                </Link>,
              );
            }

            // Last page
            if (end < totalPages) {
              if (end < totalPages - 1)
                pages.push(<span key="end-ellipsis">...</span>);

              pages.push(
                <Link
                  key={totalPages}
                  href={`/shop?page=${totalPages}`}
                  className="px-4 py-2 border"
                >
                  {totalPages}
                </Link>,
              );
            }

            return pages;
          })()}

          {/* NEXT */}
          {page < totalPages && (
            <Link href={`/shop?page=${page + 1}`} className="px-4 py-2 border">
              Next
            </Link>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}
