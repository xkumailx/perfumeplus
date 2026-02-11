import { getProductBySlug, getProducts } from '../../../lib/woocommerce'
import { Header } from '../../../components/sections/Header'
import { Footer } from '../../../components/sections/Footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
  const product = await getProductBySlug(params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - Perfumes Plus International`,
    description: product.short_description?.replace(/<[^>]*>/g, '') || product.description?.replace(/<[^>]*>/g, '').substring(0, 160),
  }
}

export const revalidate = 3600

export default async function ProductPage({ params }) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = product.categories?.[0]?.id
    ? await getProducts({
        per_page: 4,
        category: product.categories[0].id,
        exclude: [product.id],
      })
    : []

  const mainImage = product.images?.[0]?.src || '/placeholder.png'
  const brand = product.categories?.[0]?.name || 'Brand'

  return (
    <div className="bg-white min-h-screen">
      <Header />

      <div className="max-w-[1640px] mx-auto px-4 py-12">
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="relative aspect-square">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="font-medium text-[#c39617] text-2xl mb-4">{brand}</div>

            <h1 className="font-semibold text-black text-4xl mb-6">{product.name}</h1>

            <div className="flex items-center gap-4 mb-8">
              {product.regular_price && product.sale_price ? (
                <>
                  <span className="font-normal text-[#767676] text-2xl line-through">
                    ${product.regular_price}
                  </span>
                  <span className="font-bold text-black text-3xl">
                    ${product.sale_price}
                  </span>
                  <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium">
                    SALE
                  </span>
                </>
              ) : (
                <div
                  className="font-bold text-black text-3xl"
                  dangerouslySetInnerHTML={{ __html: product.price_html }}
                />
              )}
            </div>

            {product.short_description && (
              <div
                className="mb-8 text-lg"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            )}

            <div className="flex gap-4 mb-8">
              <button className="flex-1 bg-black text-white font-bold text-lg py-4 px-8 hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
              <button className="w-16 h-16 border-2 border-black flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {product.stock_status === 'instock' ? (
              <div className="text-green-600 font-medium text-lg mb-4">✓ In Stock</div>
            ) : (
              <div className="text-red-600 font-medium text-lg mb-4">Out of Stock</div>
            )}

            {product.description && (
              <div className="border-t pt-8">
                <h2 className="font-semibold text-black text-2xl mb-4">
                  Product Description
                </h2>
                <div dangerouslySetInnerHTML={{ __html: product.description }} />
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-semibold text-black text-[40px] text-center mb-12">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-4 gap-4">
              {relatedProducts.map((relProduct) => (
                <Link
                  key={relProduct.id}
                  href={`/product/${relProduct.slug}`}
                  className="block bg-white border border-solid border-[#c5c5c5] hover:shadow-lg transition-shadow"
                >
                  <div className="relative w-full aspect-square">
                    <img
                      src={relProduct.images?.[0]?.src || '/placeholder.png'}
                      alt={relProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <div className="font-medium text-[#c39617] text-lg mb-2">
                      {relProduct.categories?.[0]?.name || 'Brand'}
                    </div>
                    <h3 className="font-normal text-black text-xl mb-4 line-clamp-2 min-h-[56px]">
                      {relProduct.name}
                    </h3>
                    <div
                      className="font-medium text-black text-lg"
                      dangerouslySetInnerHTML={{ __html: relProduct.price_html }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
