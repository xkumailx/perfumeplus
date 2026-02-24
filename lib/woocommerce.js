import axios from "axios";
import Link from "next/link";

// WooCommerce API Configuration
const WC_STORE_URL =
  process.env.NEXT_PUBLIC_WC_STORE_URL ||
  "https://perfumesplusinternational.com";
const WC_CONSUMER_KEY =
  process.env.NEXT_PUBLIC_WC_CONSUMER_KEY ||
  "ck_d48f9ee9429c28bada509ee5aa60f09c6c3a1466";
const WC_CONSUMER_SECRET =
  process.env.NEXT_PUBLIC_WC_CONSUMER_SECRET ||
  "cs_7d3e87b6745ea2d51224c4780d8a564c2957af80";

const wooApi = axios.create({
  baseURL: `${WC_STORE_URL}/wp-json/wc/v3`,
  auth: {
    username: WC_CONSUMER_KEY,
    password: WC_CONSUMER_SECRET,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

// Products API
export const getProducts = async (params = {}) => {
  try {
    const response = await wooApi.get("/products", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const response = await wooApi.get("/products", {
      params: { slug, per_page: 1 },
    });
    return response.data[0] || null;
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await wooApi.get("/products", {
      params: { search: query, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};

// Categories API
export const getCategories = async (params = {}) => {
  try {
    const response = await wooApi.get("/products/categories", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getCategoryBySlug = async (slug) => {
  try {
    const response = await wooApi.get("/products/categories", {
      params: { slug, per_page: 1 },
    });
    return response.data[0] || null;
  } catch (error) {
    console.error("Error fetching category by slug:", error);
    return null;
  }
};

export const getProductsByCategory = async (categoryId, params = {}) => {
  try {
    const response = await wooApi.get("/products", {
      params: {
        category: categoryId,
        stock_status: "instock", // ✅ Only in-stock products
        type: "simple,variable",

        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};

// Featured Products
export const getFeaturedProducts = async (limit = 4) => {
  try {
    const response = await wooApi.get("/products", {
      params: { featured: true, per_page: limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};

// Best Sellers (by popularity)
export const getBestSellers = async (limit = 4) => {
  try {
    const response = await wooApi.get("/products", {
      params: { orderby: "popularity", per_page: limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching best sellers:", error);
    return [];
  }
};

// New Arrivals (recent products)
export const getNewArrivals = async (limit = 4) => {
  try {
    const response = await wooApi.get("/products", {
      params: { orderby: "date", order: "desc", per_page: limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    return [];
  }
};

export default wooApi;

const API_URL =
  process.env.WC_STORE_URL || "https://perfumesplusinternational.com";

const CONSUMER_KEY =
  process.env.WC_CONSUMER_KEY || "ck_d48f9ee9429c28bada509ee5aa60f09c6c3a1466";

const CONSUMER_SECRET =
  process.env.WC_CONSUMER_SECRET ||
  "cs_7d3e87b6745ea2d51224c4780d8a564c2957af80";

export async function getProductsByCategorySlug(slug, perPage = 12) {
  const auth =
    "Basic " +
    Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");

  // 1️⃣ Get category
  const catRes = await fetch(
    `${API_URL}/wp-json/wc/v3/products/categories?slug=${slug}`,
    {
      headers: { Authorization: auth },
      cache: "no-store",
    },
  );

  if (!catRes.ok) {
    console.error("Category fetch failed:", await catRes.text());
    return [];
  }

  const catData = await catRes.json();
  if (!catData.length) return [];

  // 2️⃣ Get products
  const prodRes = await fetch(
    `${API_URL}/wp-json/wc/v3/products?category=${catData[0].id}&per_page=${perPage}`,
    {
      headers: { Authorization: auth },
      cache: "no-store",
    },
  );

  if (!prodRes.ok) {
    console.error("Product fetch failed:", await prodRes.text());
    return [];
  }

  return await prodRes.json();
}

export const Breadcrumbs = ({ product }) => {
  const category = product.categories?.[0];

  return (
    <div className="text-sm mb-6 text-gray-500">
      <Link href="/" className="hover:text-black">
        Home
      </Link>
      {" / "}
      {category && (
        <>
          <Link
            href={`/category/${category.slug}`}
            className="hover:text-black"
          >
            {category.name}
          </Link>
          {" / "}
        </>
      )}
      <span className="text-black">{product.name}</span>
    </div>
  );
};

// Decode HTML entities
export function decodeHTML(text) {
  if (!text) return "";
  return text.replace(/&amp;/g, "&");
}

export const getProductsPaginated = async (
  categoryId = null,
  { page = 1, per_page = 24, minPrice, maxPrice, brandId } = {},
) => {
  try {
    const params = {
      page,
      per_page,
      stock_status: "instock",
    };

    // Category filter
    if (categoryId && categoryId !== "null") {
      params.category = categoryId;
    }

    // Brand filter (brands are categories too)
    if (brandId) {
      params.category = brandId;
    }

    // Price filters
    if (minPrice) params.min_price = minPrice;
    if (maxPrice) params.max_price = maxPrice;

    console.log("Woo Params:", params);

    const response = await wooApi.get("/products", { params });

    return {
      products: response.data,
      totalPages: Number(response.headers["x-wp-totalpages"] || 1),
      totalProducts: Number(response.headers["x-wp-total"] || 0),
    };
  } catch (error) {
    console.error("Pagination fetch error:", error);
    return { products: [], totalPages: 1, totalProducts: 0 };
  }
};

export const getBrandsAndCategories = async () => {
  try {
    let page = 1;
    let allCategories = [];

    while (true) {
      const res = await wooApi.get("/products/categories", {
        params: {
          per_page: 100,
          page,
          hide_empty: false,
        },
      });

      if (!res.data.length) break;

      allCategories = [...allCategories, ...res.data];
      page++;
    }

    const categories = allCategories;

    console.log(
      "All slugs:",
      categories.map((c) => c.slug),
    );

    const brandsParent = categories.find(
      (c) => c.slug.trim().toLowerCase() === "brands",
    );

    if (!brandsParent) {
      console.warn("❌ Brands category not found");
      return { brands: [], normalCategories: categories };
    }

    const brands = categories.filter((c) => c.parent === brandsParent.id);

    const normalCategories = categories.filter(
      (c) => c.id !== brandsParent.id && c.parent !== brandsParent.id,
    );

    return { brands, normalCategories };
  } catch (err) {
    console.error("Category split error:", err);
    return { brands: [], normalCategories: [] };
  }
};

export const getProductsFiltered = async ({
  page = 1,
  per_page = 24,
  categoryId,
  minPrice,
  maxPrice,
}) => {
  try {
    const params = { page, per_page, stock_status: "instock" };
    if (categoryId) params.category = categoryId;
    if (minPrice) params.min_price = minPrice;
    if (maxPrice) params.max_price = maxPrice;

    const res = await wooApi.get("/products", { params });

    return {
      products: res.data,
      totalPages: Number(res.headers["x-wp-totalpages"] || 1),
      totalProducts: Number(res.headers["x-wp-total"] || 0),
    };
  } catch (err) {
    console.error("Pagination fetch error:", err);
    return { products: [], totalPages: 1, totalProducts: 0 };
  }
};

export async function getProductCategories() {
  try {
    let page = 1;
    let all = [];

    while (true) {
      const res = await wooApi.get("/products/categories", {
        params: { per_page: 100, page },
      });

      all = [...all, ...res.data];

      const totalPages = Number(res.headers["x-wp-totalpages"] || 1);

      if (page >= totalPages) break;
      page++;
    }

    return all;
  } catch (error) {
    console.error("Categories fetch error:", error);
    return [];
  }
}

// export const getTopCategories = async ({ page = 1, per_page = 10 } = {}) => {
//   try {
//     const res = await wooApi.get("/products/categories", {
//       params: {
//         parent: 0,
//         per_page,
//         page,
//         hide_empty: true,
//       },
//     });

//     return {
//       categories: res.data.filter((c) => c.slug !== "brands"),
//       totalPages: Number(res.headers["x-wp-totalpages"] || 1),
//     };
//   } catch (err) {
//     console.error("Top categories error:", err);
//     return { categories: [], totalPages: 1 };
//   }
// };

// export const getCategoryChildren = async (
//   parentId,
//   { page = 1, per_page = 10 } = {},
// ) => {
//   try {
//     const res = await wooApi.get("/products/categories", {
//       params: { parent: parentId, per_page, page, hide_empty: true },
//     });

//     return {
//       children: res.data,
//       totalPages: Number(res.headers["x-wp-totalpages"] || 1),
//     };
//   } catch (err) {
//     console.error("Children fetch error:", err);
//     return { children: [], totalPages: 1 };
//   }
// };

// export const getBrands = async ({ page = 1, per_page = 10 } = {}) => {
//   try {
//     // find brands parent first
//     const parentRes = await wooApi.get("/products/categories", {
//       params: { slug: "brands" },
//     });

//     const brandsParent = parentRes.data[0];
//     if (!brandsParent) return { brands: [], totalPages: 1 };

//     const res = await wooApi.get("/products/categories", {
//       params: {
//         parent: brandsParent.id,
//         per_page,
//         page,
//         hide_empty: true,
//       },
//     });

//     return {
//       brands: res.data,
//       totalPages: Number(res.headers["x-wp-totalpages"] || 1),
//     };
//   } catch (err) {
//     console.error("Brands error:", err);
//     return { brands: [], totalPages: 1 };
//   }
// };

// export const getSidebarCategories = async () => {
//   try {
//     const res = await wooApi.get("/products/categories", {
//       params: { per_page: 100, hide_empty: true },
//     });

//     const categories = res.data;

//     // find BRANDS parent
//     const brandsParent = categories.find(
//       (c) => c.slug === "brands" && c.parent === 0,
//     );

//     const brands = brandsParent
//       ? categories.filter((c) => c.parent === brandsParent.id)
//       : [];

//     const normalCategories = categories.filter(
//       (c) =>
//         !brandsParent ||
//         (c.parent !== brandsParent.id && c.id !== brandsParent.id),
//     );

//     return { brands, normalCategories };
//   } catch (err) {
//     console.error("Sidebar category error:", err);
//     return { brands: [], normalCategories: [] };
//   }
// };
