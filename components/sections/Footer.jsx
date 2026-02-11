export const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] pt-16">
      {/* Logo */}
      <div className="flex justify-center">
        <img
          src="https://c.animaapp.com/mlaoauv707OLn2/img/logo-1.png"
          alt="Logo"
          className="w-[280px] md:w-[380px]"
        />
      </div>

      {/* Newsletter */}
      <div className="text-center mt-8 px-4">
        <p className="text-xl md:text-2xl font-medium">
          Be The First To Discover New Fragrance and Offers
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 max-w-3xl mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="flex-1 h-14 px-6 border border-gray-300 bg-white"
          />
          <button className="h-14 px-10 bg-black text-white font-bold">
            Submit
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-14 max-w-6xl mx-auto" />

      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <p className="text-lg">
            If you're interested in knowing more about our online store or have
            any questions please get in touch with us by email or by dialing our
            hotline.
          </p>

          <img
            src="https://c.animaapp.com/mlaoauv707OLn2/img/social-1.png"
            alt="Social"
            className="mt-6 w-24"
          />
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Categories</h3>
          <ul className="space-y-4 text-lg">
            <li>Shop</li>
            <li>Men</li>
            <li>Women</li>
            <li>Gift Sets</li>
            <li>Kids</li>
            <li>Brands</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Perfume International</h3>
          <ul className="space-y-4 text-lg">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Track Order</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Contact Us</h3>

          <p className="text-lg mb-4">713-532-7373</p>
          <p className="text-lg">0052 Harwin Dr Suite #C Houston TX | 77036</p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-300 mt-14" />

      {/* Copyright */}
      <div className="text-center py-6 text-base">
        ©Perfumes Plus International 2025
      </div>
    </footer>
  );
};
