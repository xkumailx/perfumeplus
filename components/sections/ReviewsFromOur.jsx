export const ReviewsFromOur = () => {
  const reviews = [
    {
      text: "Great store and they have amazing employees. They helped me find what I needed. Overall a great experience.",
      name: "Berth J.",
    },
    {
      text: "I've finally found my signature scent! The selection here is unbelievable, and the website's descriptions made it so easy to pick. My order arrived quickly and the packaging was beautiful. A truly five-star experience from browsing to spritzing!",
      name: "Riana K.",
    },
    {
      text: "This is the only place I buy my fragrances now. Their range of hard-to-find perfumes is fantastic, and the customer support is top-notch. They answered my questions almost instantly. If you're a perfume lover, this site is a must-visit.",
      name: "Miguel S.",
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-center mb-4">
          REVIEWS FROM OUR CLIENTS
        </h2>
        <p className="text-center text-2xl mb-14">
          4.9 stars on google from 1,400+ happy shoppers
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-[#f1f1f1] p-10 text-center flex flex-col items-center justify-between min-h-[420px]"
            >
              <img
                src="https://c.animaapp.com/mlaoauv707OLn2/img/frame-3.svg"
                alt="Stars"
                className="mb-8"
              />

              <p className="text-lg mb-10">{review.text}</p>

              <div className="mt-auto">
                <h4 className="text-xl font-medium mb-4">{review.name}</h4>
                <img
                  src="https://c.animaapp.com/mlaoauv707OLn2/img/image-1-2.png"
                  alt="User"
                  className="w-[58px] h-[58px] object-cover mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
