import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";
import Link from "next/link";
export default function AboutUs() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* HERO */}
        <section className="bg-[#c39617] text-white py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About Perfumes Plus International
          </h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            Wholesale perfume specialists delivering authentic designer
            fragrances with quality, trust, and passion.
          </p>
        </section>

        {/* OUR STORY */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/Perfume-Armaf.jpg"
            alt="Perfume bottles"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-semibold text-left mb-10 uppercase mb-4">
              Our Story
            </h2>

            <p className="mb-4">
              Perfumes Plus International specializes in wholesale perfumes and
              online fragrance retail, delivering authentic designer scents to
              customers worldwide.
            </p>

            <p className="mb-4">
              We are proud sole distributors of Armaf perfumes across the United
              States, Canada, and Latin America. The House of Armaf has years of
              experience in perfumery, known for creating long-lasting,
              high-quality fragrances and gift sets loved across the globe.
            </p>

            <p>
              Today we distribute more than 5000 fragrance products from
              world-famous brands including Creed, Gucci, Armani, Versace, Dolce
              & Gabbana, Calvin Klein and many more.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-semibold text-black">5000+</h3>
              <p>Products Available</p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-black">20+</h3>
              <p>Countries Served</p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-black">100%</h3>
              <p>Authentic Fragrances</p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-black">Fast</h3>
              <p>Shipping</p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold text-center mb-10 uppercase mb-4">
            Our Mission
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Helping our customers",
              "Selling at wholesale prices",
              "Fast shipping",
              "Effective communication",
              "Friendly work environment",
              "Best business practices",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#a07b33] text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore Our Fragrance Collection
          </h2>

          <p className="mb-6 opacity-80">
            Browse thousands of authentic perfumes and discover your perfect
            scent.
          </p>

          <Link
            href="/shop"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            Shop Now
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
