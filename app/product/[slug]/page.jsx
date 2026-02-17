import {
  getProductBySlug,
  getProducts,
  decodeHTML,
} from "../../../lib/woocommerce";
import { Header } from "../../../components/sections/Header";
import { Footer } from "../../../components/sections/Footer";
import ProductClient from "../../../components//sections/ProductClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} - Perfumes Plus International`,
    description:
      product.short_description?.replace(/<[^>]*>/g, "") ||
      product.description?.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export const revalidate = 3600;

export default async function ProductPage({ params }) {
  const { slug } = await params; // unwrap once

  const product = await getProductBySlug(slug); // use slug
  if (!product) notFound();

  const relatedProducts = product.categories?.[0]?.id
    ? await getProducts({
        per_page: 4,
        category: product.categories[0].id,
        exclude: [product.id],
      })
    : [];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="max-w-[1400px] mx-auto py-4 px-4">
        <ProductClient product={product} relatedProducts={relatedProducts} />
      </div>

      <Footer />
    </div>
  );
}
