import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050716] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Footer Logo or Name */}
          <div className="md:max-w-xs text-center md:text-left">
            <h2 className="text-2xl font-bold">Zija <span className="text-purple"> Yaseen</span> </h2>
            <p className="text-gray-400 text-sm pt-2">
              Web Developer & Designer. Let&apos;s build something great together!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 md:mr-[210px]">
            <Link href="/" className="hover:text-purple transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-purple transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-purple transition">
              Contact
            </Link>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/zija-yaseen-0154722b2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0077b5] transition"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/ZijaYaseen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500 transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="mailto:zijayaseen15@gmail.com"
              className="hover:text-purple transition"
            >
              <FaEnvelope size={24} />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Contact Me: zijayaseen15@gmail.com
          </p>
          <p className="text-gray-400 text-sm">Location: Karachi, Pakistan</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center border-t border-gray-600 pt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Zija Yaseen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
