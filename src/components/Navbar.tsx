"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  const menu = [
    { name: "Home", target: "hero" },
    { name: "Vision & Mission", target: "vision" },
    { name: "Services", target: "services" },
    { name: "About Us", target: "about" },
  ];

  const handleScroll = (targetId:string) => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-[#0a1930] text-white shadow-md z-50"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer" onClick={() => handleScroll("hero")}>
        Terracraft
      </h1>
      <ul className="flex gap-8">
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
    </motion.nav>
  );
}
