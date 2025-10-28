"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#001F3F] text-white py-6"

    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {currentYear} TERRACRAFT. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
