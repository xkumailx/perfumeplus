import Link from 'next/link'
import { Header } from '../components/sections/Header'
import { Footer } from '../components/sections/Footer'

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="max-w-[1640px] mx-auto px-4 py-24 text-center">
        <h1 className="font-semibold text-black text-[60px] mb-4">404</h1>
        <h2 className="font-semibold text-black text-[40px] mb-8">Page Not Found</h2>
        <p className="text-[#767676] text-xl mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white font-bold text-lg py-4 px-8 hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </div>
  )
}
