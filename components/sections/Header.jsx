"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setMobileOpen(false);
    }
  };

  return (
    <header className="w-full relative">
      {/* Top Bars */}
      <div className="w-full">
        <div className="bg-[#c39617] text-white text-center py-2 text-xs md:text-sm">
          Free shipping on all orders over $99
        </div>
        <div className="bg-[#a07b33] text-white text-center py-2 text-xs md:text-sm">
          Join free & save upto 20% on every order
        </div>
      </div>

      {/* Main Header */}
      <div className="w-full border-b">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 px-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo */}
          <Link href="/" className="mx-auto md:mx-0">
            <img
              src="https://c.animaapp.com/mlaoauv707OLn2/img/logo.png"
              alt="Logo"
              className="w-[160px] md:w-[220px] h-auto"
            />
          </Link>

          {/* Desktop Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-[#f1f1f1] border px-4 py-2 w-[400px] rounded"
          >
            <input
              name="search"
              placeholder="Search anything..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </form>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-8 text-sm">
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

          {/* Mobile Cart */}
          <div className="md:hidden">🛒</div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block w-full border-b">
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

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-[#f1f1f1] border mx-4 mt-4 px-4 py-2 rounded"
          >
            <input
              name="search"
              placeholder="Search..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </form>

          {/* Navigation Links */}
          <div className="flex flex-col px-6 py-6 gap-4 text-base">
            <Link href="/shop" onClick={() => setMobileOpen(false)}>
              Shop
            </Link>
            <span>Men</span>
            <span>Women</span>
            <span>Gift Sets</span>
            <span>Kids</span>
            <span>Brands</span>

            <hr />

            <span>About Us</span>
            <span>Contact Us</span>
            <span>Blog</span>
            <span>Track Order</span>
          </div>
        </div>
      )}
    </header>
  );
};
