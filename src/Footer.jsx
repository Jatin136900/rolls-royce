import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#161615] text-white">
      {/* Top Divider */}
      <hr className="border-gray-700 mb-6 mx-6" />

      {/* Logo and Subtitle */}
      <div className="text-center mb-8">
        <div className="text-3xl tracking-wide font-light hover:text-gray-300 transition duration-300 cursor-pointer">
          ROLLS-ROYCE
        </div>
        <div className="text-sm tracking-widest mt-1 text-gray-400">
          MOTOR CARS
        </div>
      </div>

      {/* Navigation Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-10 text-center md:text-left mb-8 px-6">
        <ul className="space-y-2">
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            PRE-OWNED
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            FIND A DEALER
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            PRIVACY
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            COOKIES
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            EU TYRE LABELS
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            CAREERS
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            PRESSCLUB
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            BATTERY REGULATION
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            SITE MAP
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            LEGAL
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            FAQS
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            WHISPERS
          </li>
        </ul>
        <ul className="space-y-2">
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            COMPLAINTS
          </li>
          <li className="font-medium tracking-wide hover:text-gray-300 cursor-pointer">
            CONTACT
          </li>
          <li className="font-medium tracking-wide flex items-center justify-center md:justify-start hover:text-gray-300 cursor-pointer">
            LANGUAGE <span className="ml-2 text-xl">🇬🇧</span>
          </li>
        </ul>
      </div>

      {/* Middle Divider */}
      <hr className="border-gray-700 mb-6 mx-6" />

      {/* Social Icons */}
      <div className="flex justify-center md:justify-end items-center gap-6 px-6 md:px-14 mb-6">
        <FaYoutube className="text-xl opacity-80 hover:opacity-100 hover:text-red-600 cursor-pointer transition duration-300" />
        <FaFacebookF className="text-xl opacity-80 hover:opacity-100 hover:text-blue-600 cursor-pointer transition duration-300" />
        <FaInstagram className="text-xl opacity-80 hover:opacity-100 hover:text-pink-500 cursor-pointer transition duration-300" />
        <FaLinkedinIn className="text-xl opacity-80 hover:opacity-100 hover:text-blue-500 cursor-pointer transition duration-300" />
        <FaTimes className="text-xl opacity-80 hover:opacity-100 hover:text-gray-400 cursor-pointer transition duration-300" />
      </div>

      {/* Bottom Divider */}
      <hr className="border-gray-700 mx-6" />
    </footer>
  );
}
