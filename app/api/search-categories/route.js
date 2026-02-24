import { NextResponse } from "next/server";
import { getProductCategories } from "../../../lib/woocommerce";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const term = searchParams.get("q") || "";

  if (!term) return NextResponse.json([]);

  const categories = await getProductCategories(term);

  return NextResponse.json(categories.slice(0, 6));
}
