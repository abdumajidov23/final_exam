import googleplay from "../../assets/images/googleplay.png";
import appstore from "../../assets/images/appstore.png";
import send from "../../assets/images/send.png";
import Qrcode from "../../assets/images/Qrcode.png";
import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [isAuthenticated,] = useState(false);
  return (
    <footer className="bg-black text-white py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div >
          <h3 className="text-xl font-semibold">Exclusive</h3>
          <p className="mt-2">Get 10% off your first order</p>
          <div className="mt-4 flex border border-gray-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-3  py-2 bg-black outline-none text-white"
            />
            <button>
              <img src={send} alt="send" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="mt-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p className="mt-2">+88015-88888-9999</p>
        </div>


        <div>
          <h3 className="text-xl font-semibold">Account</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">
              <a href={isAuthenticated ? "/profile" : "/sign-in"}>My Account</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="/sign-in">Login / Register</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="/cart">Cart</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="/wishlist">Wishlist</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="/shop">Shop</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Quick Link</h3>
          <ul className="mt-2 space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Terms Of Use</li>
            <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Download App</h3>
          <p className="mt-2">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4 mt-4">
            <img src={Qrcode} alt="QR Code" className="w-20" />
            <div className="flex flex-col gap-2">
              <img
                src={googleplay}
                alt="Google Play"
                className="w-24 cursor-pointer hover:opacity-80"
              />
              <img
                src={appstore}
                alt="App Store"
                className="w-24 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>
          <div className="flex mt-4 space-x-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-400" />
            <FaTwitter className="cursor-pointer hover:text-gray-400" />
            <FaInstagram className="cursor-pointer hover:text-gray-400" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-8 pt-4 text-gray-400">
        &copy; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
