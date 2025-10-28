"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "Home", target: "hero" },
    { name: "Vision & Mission", target: "vision" },
    { name: "Services", target: "services" },
    { name: "About Us", target: "about" },
  ];

  const handleScroll = (targetId: string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after clicking
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-[#0a1930] text-white shadow-md z-50"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <h1
        className="text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => handleScroll("hero")}
      >
        Terracraft
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {menu.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleScroll(item.target)}
              className="hover:text-gray-300 transition-colors"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-[64px] left-0 w-full bg-[#0a1930] flex flex-col items-center space-y-4 py-6 shadow-lg md:hidden"
        >
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.target)}
              className="text-lg hover:text-gray-300 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
