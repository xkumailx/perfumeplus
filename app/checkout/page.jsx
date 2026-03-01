import Image from "next/image";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";

export default function CheckoutPage() {
  const cartItems = [
    {
      id: 1,
      name: "AMBER OUD ARABIA 3.4 OZ FOR MEN",
      price: 33,
      qty: 1,
      image: "/Perfume-Armaf.jpg",
    },
    {
      id: 2,
      name: "AMBER OUD ARABIA 3.4 OZ FOR MEN",
      price: 33,
      qty: 1,
      image: "/Perfume-Armaf.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  const shipping = 1;
  const total = subtotal + shipping;

  return (
    <>
      <Header />
      <div className="min-h-screen  flex justify-center items-center py-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="p-10 border-r">
            {/* LOGO */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/Perfume-Plus.png"
                  alt="Logo"
                  width={300}
                  height={200}
                />
              </div>
              {/* <h1 className="text-2xl font-semibold tracking-widest">
                PERFUMES PLUS
              </h1>
              <p className="text-xs text-yellow-600">
                EXCLUSIVE ARMAF DISTRIBUTER
              </p> */}
            </div>

            {/* EXPRESS CHECKOUT */}
            <div className="mb-6">
              <p className="text-center text-sm mb-3">Express Checkout</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-black text-white py-2 rounded">
                  Pay with Google
                </button>
                <button className="flex-1 bg-black text-white py-2 rounded">
                  Pay with Link
                </button>
              </div>
            </div>

            <div className="border-t my-6"></div>

            {/* LOGIN */}
            <div className="mb-6">
              <p className="text-center text-sm mb-4">
                Already have an account?
              </p>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-2 mb-3 bg-[#F2F2F2]"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-3 bg-[#F2F2F2"
              />
              <button className="w-full bg-black text-white py-2">Login</button>
            </div>

            <div className="border-t my-6"></div>

            {/* BILLING DETAILS */}
            <h2 className="text-sm font-semibold mb-4 text-center">
              Enter Your Details
            </h2>

            <div className="grid grid-cols-2 gap-3">
              <input
                className="border p-2 bg-[#F2F2F2]"
                placeholder="First Name"
              />
              <input
                className="border p-2 bg-[#F2F2F2]"
                placeholder="Last Name"
              />
              <input
                className="border p-2 col-span-2 bg-[#F2F2F2]"
                placeholder="Email Address"
              />
              <input
                className="border p-2 col-span-2 bg-[#F2F2F2]"
                placeholder="Phone Number"
              />
              <input
                className="border p-2 bg-[#F2F2F2]"
                placeholder="Country"
              />
              <input className="border p-2 bg-[#F2F2F2]" placeholder="State" />
              <input
                className="border p-2 col-span-2 bg-[#F2F2F2]"
                placeholder="Address"
              />
              <input
                className="border p-2 bg-[#F2F2F2]"
                placeholder="Apartment, Suite, etc."
              />
              <input
                className="border p-2 bg-[#F2F2F2]"
                placeholder="ZIP Code"
              />
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Create an account?
              </label>

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Ship to a different address?
              </label>
            </div>

            <textarea
              placeholder="Order notes (Optional)"
              className="w-full border p-2 mt-4 h-24 bg-[#F2F2F2]"
            ></textarea>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-10 bg-gray-50">
            {/* CART SUMMARY */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.image}
                      className="w-16 h-16 object-contain border"
                    />
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <span className="text-sm">x{item.qty}</span>
                </div>
              ))}
            </div>

            {/* DISCOUNT */}
            <div className="flex gap-3 mt-6">
              <input
                type="text"
                placeholder="Enter Discount Code"
                className="flex-1 border p-2 bg-[#F2F2F2]"
              />
              <button className="bg-black text-white px-6">Apply</button>
            </div>

            {/* TOTALS */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* PAYMENT */}
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Credit/Debit Card</h3>

              <input
                className="w-full border p-2 mb-3 "
                placeholder="Card Number"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  className="border p-2 "
                  placeholder="Expiration Date (MM/YY)"
                />
                <input className="border p-2 " placeholder="Security Code" />
              </div>

              <input
                className="w-full border p-2 mt-3 "
                placeholder="Name on Card"
              />

              <button className="w-full bg-black text-white py-3 mt-6">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
