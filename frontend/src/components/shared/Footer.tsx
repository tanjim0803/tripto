import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="container-main grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Image
            src="/assets/home/logo.svg"
            alt="Tripto"
            width={128}
            height={48}
            className="brightness-0 invert"
          />
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
            Discover unique stays and create unforgettable memories around the
            world. Your journey begins with Tripto.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-neutral-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Explore Stays
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Trending
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Offers
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Support</h4>
          <ul className="flex flex-col gap-3 text-neutral-400 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">
              Help Center
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Safety Information
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Cancellation Options
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
          <p className="text-neutral-400 text-sm mb-4">
            Get the latest deals and travel inspiration.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-neutral-800 border-none text-white px-4 py-2 rounded-lg text-sm flex-1 focus:ring-2 focus:ring-primary outline-none"
            />
            <button className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="container-main mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-xs">
        <p>© {new Date().getFullYear()} Tripto. All rights reserved.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer transition-colors">
            Privacy Policy
          </span>
          <span className="hover:text-white cursor-pointer transition-colors">
            Cookie Settings
          </span>
        </div>
      </div>
    </footer>
  );
}
