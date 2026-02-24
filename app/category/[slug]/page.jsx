import {
  getCategoryBySlug,
  getProductsByCategory,
  getProductsPaginated,
} from "../../../lib/woocommerce";
import { Header } from "../../../components/sections/Header";
import { Footer } from "../../../components/sections/Footer";
import { ProductCard } from "../../../components/products/ProductCard";

import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params; // unwrap params

  const category = await getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${category.name} - Perfumes Plus International`,
    description:
      category.description?.replace(/<[^>]*>/g, "") ||
      `Shop ${category.name} fragrances`,
  };
}

export const revalidate = 3600;

export default async function CategoryPage({ params, searchParams }) {
  const { slug } = await params; // ✅ unwrap params
  const sp = await searchParams; // ✅ unwrap searchParams
  const page = Number(sp?.page || 1); // use unwrapped value

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { products, totalPages } = await getProductsPaginated(category.id, {
    page,
    per_page: 24,
  });
  console.log("Category:", category);
  console.log("Slug:", slug);

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <h1 className="font-semibold text-black text-[40px] text-center mb-4">
          {category.name.toUpperCase()}
        </h1>

        {category.description && (
          <div
            className="text-center text-[#767676] text-lg mb-12 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: category.description }}
          />
        )}

        {products.length > 0 ? (
          <div className="grid grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-secondary text-xl">
              No products found in this category.
            </p>
          </div>
        )}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-12 flex-wrap items-center">
            {/* PREV */}
            {page > 1 && (
              <Link
                href={`/category/${slug}?page=${page - 1}`}
                className="px-4 py-2 border"
              >
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
                    href={`/category/${slug}?page=1`}
                    className="px-4 py-2 border"
                  >
                    1
                  </Link>,
                );

                if (start > 2) {
                  pages.push(<span key="start-ellipsis">...</span>);
                }
              }

              // Middle pages
              for (let i = start; i <= end; i++) {
                pages.push(
                  <Link
                    key={i}
                    href={`/category/${slug}?page=${i}`}
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
                if (end < totalPages - 1) {
                  pages.push(<span key="end-ellipsis">...</span>);
                }

                pages.push(
                  <Link
                    key={totalPages}
                    href={`/category/${slug}?page=${totalPages}`}
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
              <Link
                href={`/category/${slug}?page=${page + 1}`}
                className="px-4 py-2 border"
              >
                Next
              </Link>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
