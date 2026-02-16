// "use client";

// import Slider from "react-slick";
// import Image from "next/image";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const ProductSlider = ({ title, products }) => {
//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1280, settings: { slidesToShow: 4 } },
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (!products?.length)
//     return <div className="py-16 text-center">No products found</div>;

//   return (
//     <section className="py-16 px-6">
//       <div className="max-w-[1400px] mx-auto">
//         {title && (
//           <h2 className="text-3xl font-semibold text-center mb-10 uppercase">
//             {title}
//           </h2>
//         )}

//         <Slider {...settings}>
//           {products.map((product) => {
//             const regularPrice = parseFloat(product.regular_price);
//             const salePrice = parseFloat(product.sale_price);
//             const isOnSale =
//               salePrice && regularPrice && salePrice < regularPrice;

//             const discountPercent = isOnSale
//               ? Math.round(((regularPrice - salePrice) / regularPrice) * 100)
//               : null;

//             return (
//               <div key={product.id} className="px-2">
//                 <div className="relative border border-gray-200 p-4 bg-white h-full hover:shadow-lg transition duration-300">
//                   {/* SALE BADGE */}
//                   {isOnSale && (
//                     <span className="absolute top-3 left-3 bg-[#C39617] text-white text-xs font-semibold px-2 py-1 rounded z-10">
//                       -{discountPercent}%
//                     </span>
//                   )}

//                   {/* PRODUCT IMAGE */}
//                   <div className="relative w-full h-[260px] mb-4">
//                     <Image
//                       src={product.images?.[0]?.src || "/placeholder.png"}
//                       alt={product.name}
//                       fill
//                       className="object-contain"
//                     />
//                   </div>

//                   {/* BRAND NAME */}
//                   <p className="text-xs text-[#C39617] uppercase text-center font-normal tracking-wide text-gray-500 mb-4">
//                     {product.categories?.map((cat) => cat.name).join(", ") ||
//                       "Category"}
//                   </p>

//                   {/* PRODUCT NAME */}
//                   <h3 className="font-medium min-h-[60px] text-sm text-center">
//                     {product.name}
//                   </h3>

//                   {/* PRICE SECTION */}
//                   <div className="mt-2">
//                     {isOnSale ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <span className="text-[gray] font-light line-through">
//                           ${regularPrice}
//                         </span>
//                         <span className="text-black font-medium text-base">
//                           ${salePrice}
//                         </span>
//                       </div>
//                     ) : (
//                       <span className="text-black font-semibold text-base">
//                         ${product.price}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </Slider>
//       </div>
//     </section>
//   );
// };
