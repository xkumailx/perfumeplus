import axios from "axios";

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
      params: { category: categoryId, ...params },
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
