"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  const [cats, setCats] = useState([]);

  // search categories while typing
  useEffect(() => {
    if (!query) {
      setCats([]);
      return;
    }

    const t = setTimeout(async () => {
      const res = await fetch(`/api/search-categories?q=${query}`);
      const data = await res.json();
      setCats(data);
    }, 400);

    return () => clearTimeout(t);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/shop?search=${query}`);
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full border rounded-xl px-4 py-2"
        />
      </form>

      {/* Category Suggestions */}
      {cats.length > 0 && (
        <div className="absolute bg-white shadow-xl rounded-xl mt-2 w-full z-50 p-3">
          <p className="text-sm text-gray-500 mb-2">Categories</p>

          {cats.map((c) => (
            <Link
              key={c.id}
              href={`/shop?category=${c.slug}&search=${query}`}
              className="block px-2 py-1 hover:bg-gray-100 rounded"
            >
              {c.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
