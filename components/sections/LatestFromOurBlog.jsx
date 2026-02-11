export const LatestFromOurBlog = () => {
  const blogs = [
    {
      img: "rectangle-17.png",
      title:
        "Find Your Forever Scent Why Customer Service is the Secret Ingredient to Perfume Shopping",
    },
    {
      img: "rectangle-17-1.png",
      title:
        "Beyond the Bottle Discovering Rare and Luxury Fragrances You Won't Find Anywhere Else",
    },
    {
      img: "rectangle-17-2.png",
      title:
        "From Peonies to Pearls: How to Make Your Fragrance Experience a 5-Star Affair",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-14">
          LATEST FROM OUR BLOG
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div key={i} className="relative h-[450px] overflow-hidden group">
              {/* Background Image */}
              <img
                src={`https://c.animaapp.com/mlaoauv707OLn2/img/${blog.img}`}
                alt="Blog"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Title */}
              <p className="absolute bottom-6 left-6 right-6 text-white text-xl font-semibold z-10">
                {blog.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
