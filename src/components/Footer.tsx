import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold">Valentino Janjac</h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <nav className="flex gap-6 text-lg">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/works" className="hover:text-white transition">
            Works
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/JanjacVD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/valentino-janjac-bab165235"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/valentino_janjac"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:valentino.janjac@gmail.com"
            aria-label="Email"
            className="hover:text-white transition"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
}
