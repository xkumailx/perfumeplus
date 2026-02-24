"use client";

import Link from "next/link";
import { useState } from "react";

export default function FilterSidebar({ categories, brands }) {
  const [openCats, setOpenCats] = useState({});
  const [visibleBrands, setVisibleBrands] = useState(30);

  const toggleCategory = (id) => {
    setOpenCats((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const parentCategories = categories.filter((c) => c.parent === 0);

  const getChildren = (parentId) =>
    categories.filter((c) => c.parent === parentId);

  return (
    <div>
      <div className="p-4 border rounded-xl h-fit">
        {/* CATEGORIES */}
        <h3 className="font-medium hover:text-[#c39617] cursor-pointer transition-colors text-xl mb-4">
          Categories
        </h3>

        {parentCategories.map((parent) => {
          const children = getChildren(parent.id);
          const hasChildren = children.length > 0;

          return (
            <div key={parent.id} className="mb-2 border-b">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => hasChildren && toggleCategory(parent.id)}
              >
                <Link
                  href={`/category/${parent.slug}`}
                  className="text-sm hover:underline uppercase block pb-3"
                >
                  <span>{parent.name}</span>
                </Link>
                {hasChildren && <span>{openCats[parent.id] ? "−" : "+"}</span>}
              </div>

              {/* CHILDREN */}
              {hasChildren && openCats[parent.id] && (
                <div className="ml-4 mt-2 space-y-1 max-h-96 overflow-y-auto ">
                  {children.map((child) => (
                    <Link
                      key={child.id}
                      href={`/category/${child.slug}`}
                      className="text-sm hover:underline uppercase block !mb-2 pb-3 border-b"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="p-4 border rounded-xl h-fit mt-8">
        {/* BRANDS */}
        <h3 className="font-medium hover:text-[#c39617] cursor-pointer transition-colors text-xl mb-4">
          Brands
        </h3>

        {brands.slice(0, visibleBrands).map((brand) => (
          <div key={parent.id} className="mb-2">
            <Link
              key={brand.id}
              href={`/category/${brand.slug}`}
              className="block text-sm hover:underline mb-1 uppercase pb-3 border-b"
            >
              <span>{brand.name}</span>
            </Link>
          </div>
        ))}

        {visibleBrands < brands.length && (
          <button
            onClick={() => setVisibleBrands((prev) => prev + 30)}
            className="mt-2 text-sm bg-[#c39617] text-white block py-2 px-4 rounded-md hover:bg-[#a87c0f] transition-colors"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
