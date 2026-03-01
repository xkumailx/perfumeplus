// "use client";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";
export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      brand: "ARMAF",
      name: "AMBER OUD ARABIA 3.4 OZ FOR MEN",
      price: 33,
      qty: 1,
      image: "/Perfume-Armaf.jpg",
    },
    {
      id: 2,
      brand: "ARMAF",
      name: "AMBER OUD ARABIA 3.4 OZ FOR MEN",
      price: 33,
      qty: 1,
      image: "/Perfume-Armaf.jpg",
    },
  ];

  const total = cartItems.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <>
      <Header />
      <div className=" py-10 max-w-[1400px] mx-auto  py-4 px-4">
        <div className=" bg-white p-8 shadow">
          {/* TITLE */}
          <h1 className="text-3xl font-semibold text-center mb-10 uppercase mb-4">
            MY CART
          </h1>

          {/* CART ITEMS */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-6"
            >
              {/* LEFT */}
              <div className="flex gap-6 items-center">
                <img
                  src={item.image}
                  className="w-24 h-24 object-contain border"
                />

                <div>
                  <p className="text-yellow-600 text-sm font-semibold">
                    {item.brand}
                  </p>
                  <p className="font-semibold">{item.name}</p>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div className="flex items-center gap-3 justify-end">
                  <button className="w-8 h-8 border bg-[#000] text-[#fff] rounded-full">
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button className="w-8 h-8 border bg-[#000] text-[#fff] rounded-full">
                    +
                  </button>
                </div>

                <button className="text-sm underline mt-2">Remove</button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="text-right mt-8">
            <h2 className="text-xl font-semibold">
              Total: ${total.toFixed(2)}
            </h2>

            <button className="bg-[#c39617] p-9 mt-3 text-white text-sm font-semibold py-2 rounded hover:opacity-90 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
