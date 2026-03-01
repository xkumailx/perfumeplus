import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/sections/Header";
import { Footer } from "../../components/sections/Footer";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="bg-white text-gray-800">
        {/* HERO */}
        <section className="bg-[#c39617] text-white py-24 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg opacity-90">
            We'd love to hear from you. Get in touch anytime.
          </p>
        </section>

        {/* CONTACT */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-left mb-10 uppercase mb-4">
              Get in Touch
            </h2>

            <p className="mb-6 text-gray-600">
              If you’re interested in knowing more about our online store or
              have any questions, please contact us by email or phone.
            </p>

            <div className="space-y-4 text-lg">
              <p className="flex items-center gap-3">
                <FontAwesomeIcon
                  className="w-6 h-6 text-[#c39617]"
                  icon={faLocationDot}
                />
                10052 Harwin Dr Suite # C, Houston TX 77036
              </p>

              <p className="flex items-center gap-3">
                <FontAwesomeIcon
                  className="w-6 h-6 text-[#c39617]"
                  icon={faPhone}
                />
                713-532-7373
              </p>

              <p className="flex items-center gap-3">
                <FontAwesomeIcon
                  className="w-6 h-6 text-[#c39617]"
                  icon={faClock}
                />
                Timing: 9am – 8pm
              </p>
            </div>

            {/* SOCIAL */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

              <div className="flex gap-5 text-2xl">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="bg-[#c39617] p-3 rounded-full text-white hover:scale-110 transition"
                  >
                    <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="bg-[#c39617] p-3 rounded-full text-white hover:scale-110 transition"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-gray-100 p-8  shadow-sm">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=10052%20Harwin%20Dr%20Houston&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]  border"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
