import { Header } from "../components/sections/Header";
import { ReviewsFromOur } from "../components/sections/ReviewsFromOur";
import { LatestFromOurBlog } from "../components/sections/LatestFromOurBlog";
import { ProductSlider } from "../components/sections/ProductSlider";
import { Footer } from "../components/sections/Footer";
import { getProductsByCategorySlug } from "../lib/woocommerce";
import Image from "next/image";

export default async function HomePage() {
  const perfumes = await getProductsByCategorySlug("valentines-day-deals");
  const testers = await getProductsByCategorySlug("testers");

  return (
    <div className="">
      <Header />
      <div className="relative w-full aspect-[1920/600]">
        <Image
          src="/Perfume-Collection.png"
          alt="Perfume Collection"
          fill
          className="object-cover"
          priority
        />
      </div>

      <ProductSlider title="Perfumes Collection" products={perfumes} />
      <ProductSlider title="Perfumes Collection" products={testers} />

      {/* Banner */}
      <img
        className="w-full object-cover"
        alt="Excellence banner"
        src="https://c.animaapp.com/mlaoauv707OLn2/img/excellence-banner.png"
      />

      {/* Featured Brands */}
      <section className="w-full">
        <div className="max-w-[1400px] mx-auto px-4 py-16">
          <h2 className="text-4xl font-semibold text-center mb-12">
            FEATURED BRANDS
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "rectangle-4.png",
              "rectangle-5.png",
              "rectangle-6.png",
              "rectangle-7.png",
              "rectangle-8.png",
              "rectangle-9.png",
              "rectangle-10.png",
              "rectangle-11.png",
              "rectangle-12.png",
              "rectangle-13.png",
              "rectangle-14.png",
              "rectangle-15.png",
            ].map((img, i) => (
              <div
                key={i}
                className="border border-[#c5c5c5] p-4 flex items-center justify-center bg-white"
              >
                <img
                  src={`https://c.animaapp.com/mlaoauv707OLn2/img/${img}`}
                  alt="Brand"
                  className="max-h-[80px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsFromOur />
      <LatestFromOurBlog />
      <Footer />
    </div>
  );
}
