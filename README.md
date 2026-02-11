# Perfumes Plus International - Next.js Headless E-commerce

A modern headless e-commerce application built with **Next.js 14** and **WooCommerce REST API**.

## 🚀 Features

- **Next.js 14 App Router**: Server-side rendering for optimal SEO
- **Headless Architecture**: React frontend + WooCommerce backend API
- **Slug-based Routing**: All routes use slugs, not IDs
- **Server Components**: Fast page loads with automatic data fetching
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Reusable Components**: Clean JSX component structure
- **Image Optimization**: Next.js automatic image optimization

## 📁 Project Structure

```
├── app/
│   ├── layout.jsx             # Root layout with metadata
│   ├── page.jsx               # Homepage
│   ├── shop/page.jsx          # Shop page (all products)
│   ├── product/[slug]/page.jsx # Product detail page
│   ├── category/[slug]/page.jsx # Category page
│   ├── search/page.jsx        # Search results page
│   └── not-found.jsx          # 404 page
├── components/
│   ├── sections/              # Page sections (Header, Footer, etc.)
│   └── Banner.jsx             # Banner component
├── lib/
│   └── woocommerce.js         # WooCommerce API client
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies
```

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure WooCommerce API

1. Go to your WooCommerce store: `https://perfumesplusinternational.com/wp-admin`
2. Navigate to **WooCommerce → Settings → Advanced → REST API**
3. Click **Add Key** and generate API credentials
4. Set permissions to **Read** (or Read/Write if you need cart functionality)
5. Copy the **Consumer Key** and **Consumer Secret**

### 3. Update Environment Variables

Edit `.env.local` and replace with your actual credentials:

```env
NEXT_PUBLIC_WC_STORE_URL=https://perfumesplusinternational.com
NEXT_PUBLIC_WC_CONSUMER_KEY=ck_your_actual_consumer_key_here
NEXT_PUBLIC_WC_CONSUMER_SECRET=cs_your_actual_consumer_secret_here
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Build for Production

```bash
npm run build
npm start
```

## 🛠 WooCommerce API Endpoints Used

| Endpoint | Purpose |
|----------|---------|
| `/wp-json/wc/v3/products` | Fetch all products |
| `/wp-json/wc/v3/products?slug={slug}` | Get product by slug |
| `/wp-json/wc/v3/products?search={query}` | Search products |
| `/wp-json/wc/v3/products?category={id}` | Get products by category |
| `/wp-json/wc/v3/products/categories` | Fetch categories |
| `/wp-json/wc/v3/products?featured=true` | Get featured products |
| `/wp-json/wc/v3/products?orderby=popularity` | Get best sellers |

## 📄 Page Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with sliders and featured products |
| `/shop` | All products grid |
| `/product/[slug]` | Product detail page (e.g., `/product/amber-oud-arabia`) |
| `/category/[slug]` | Category page (e.g., `/category/men`) |
| `/search?q={query}` | Search results page |

## 🎯 Key Features

✅ **Server-side rendering** - Better SEO and performance  
✅ **Automatic revalidation** - Pages refresh data every hour  
✅ **Slug-based routing** - No IDs in URLs  
✅ **Image optimization** - Next.js automatic optimization  
✅ **Responsive product grids** - 4 columns on desktop, adaptive on mobile  
✅ **WooCommerce as headless backend** - Complete API integration  
✅ **Dynamic metadata** - SEO-optimized titles and descriptions  

## 📚 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.3.1
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Backend**: WooCommerce REST API

## 🔐 Security Notes

- Keep WooCommerce API keys secure in `.env.local`
- Use read-only API keys if possible
- Enable HTTPS on your WooCommerce store
- Never commit `.env.local` to version control

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Deploy to Other Platforms

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Ensure environment variables are set

---

Built with Next.js 14 and WooCommerce REST API 🚀
