import React from "react";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#C8E6C9] text-[#1E392A] py-10 mt-10 border-t border-[#D8EAD6]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row gap-4 text-sm font-medium">
          <Link
            to="/about"
            className="hover:text-emerald-700 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-emerald-700 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/privacy"
            className="hover:text-emerald-700 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="text-sm text-center">
          © 2025 <span className="font-semibold">GreenNest</span>. All rights
          reserved.
        </p>

        <div className="flex space-x-4 text-[#2E7D32]">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaFacebookF size={18} />
          </a>

          <a
            href="https://www.pinterest.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaPinterestP size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
