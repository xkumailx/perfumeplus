import { getProductCategories } from "../../lib/woocommerce";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";
import Link from "next/link";

export const metadata = {
  title: "Shop by Brand - Perfumes Plus International",
};

export default async function BrandsPage() {
  const allCats = await getProductCategories();

  // Find brands parent
  const brandParent = allCats.find((c) => c.slug === "brands");

  const brands = brandParent
    ? allCats.filter((c) => c.parent === brandParent.id)
    : [];

  // Group brands alphabetically
  const grouped = {};

  brands.forEach((brand) => {
    const letter = brand.name.charAt(0).toUpperCase();

    if (!grouped[letter]) grouped[letter] = [];

    grouped[letter].push(brand);
  });

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="max-w-[1400px] mx-auto py-12 px-4">

        {/* Alphabet Menu */}
        <div className="flex flex-wrap gap-3 justify-center mb-10 text-lg font-semibold">
          {alphabet.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className={`px-3 py-1 border rounded ${
                grouped[letter] ? "hover:bg-black hover:text-white" : "opacity-30"
              }`}
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Brand List */}
        {alphabet.map((letter) =>
          grouped[letter] ? (
            <div key={letter} id={letter} className="mb-10">
              <h2 className="text-3xl font-bold mb-4 border-b pb-2">
                {letter}
              </h2>

              <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {grouped[letter]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((brand) => (
                    <li key={brand.id}>
                      <Link
                        href={`/category/${brand.slug}`}
                        className="hover:text-black text-gray-600"
                      >
                        {brand.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ) : null
        )}
      </div>

      <Footer />
    </div>
  );
}