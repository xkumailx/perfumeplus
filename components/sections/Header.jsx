"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="w-full">
      {/* Top Bars */}
      <div className="w-full">
        <div className="bg-[#c39617] text-white text-center py-2 text-sm">
          Free shipping on all orders over $99
        </div>
        <div className="bg-[#a07b33] text-white text-center py-2 text-sm">
          Join free & save upto 20% on every order
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full border-b">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link href="/">
            <img
              src="https://c.animaapp.com/mlaoauv707OLn2/img/logo.png"
              alt="Logo"
              className="w-[220px] h-auto"
            />
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-[#f1f1f1] border px-4 py-2 w-[400px] rounded"
          >
            <input
              name="search"
              placeholder="Search anything..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </form>

          {/* Icons */}
          <div className="flex items-center gap-8 text-sm">
            <div className="text-center cursor-pointer">
              <div>👤</div>
              <span>Sign In</span>
            </div>

            <div className="text-center cursor-pointer">
              <div>❤</div>
              <span>Wishlist</span>
            </div>

            <div className="text-center cursor-pointer">
              <div>🛒</div>
              <span>$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full border-b">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3 text-[17px]">
          <div className="flex gap-8">
            <Link href="/shop" className="hover:text-[#c39617]">
              Shop
            </Link>
            <span className="hover:text-[#c39617] cursor-pointer">Men</span>
            <span className="hover:text-[#c39617] cursor-pointer">Women</span>
            <span className="hover:text-[#c39617] cursor-pointer">
              Gift Sets
            </span>
            <span className="hover:text-[#c39617] cursor-pointer">Kids</span>
            <span className="hover:text-[#c39617] cursor-pointer">Brands</span>
          </div>

          <div className="flex gap-8">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Blog</span>
            <span>Track Order</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
