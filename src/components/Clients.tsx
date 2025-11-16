"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ClientsSection() {
  return (
    <section className="w-full py-20 px-6 bg-[#f7f9fc]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#0a1930]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Collaborations & Clients
        </motion.h2>

        <motion.p
          className="text-gray-600 mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by brands and partners across various industries.
        </motion.p>
      </div>

      {/* Logo Wrapper */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 place-items-center">
        <motion.div
          className="w-32 h-16 bg-white/70 backdrop-blur-sm rounded-xl shadow flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 font-semibold">Logo 1</span>
        </motion.div>

        <motion.div
          className="w-32 h-16 bg-white/70 backdrop-blur-sm rounded-xl shadow flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 font-semibold">Logo 2</span>
        </motion.div>

        <motion.div
          className="w-32 h-16 bg-white/70 backdrop-blur-sm rounded-xl shadow flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 font-semibold">Logo 3</span>
        </motion.div>

        <motion.div
          className="w-32 h-16 bg-white/70 backdrop-blur-sm rounded-xl shadow flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-gray-400 font-semibold">Logo 4</span>
        </motion.div>
      </div>
    </section>
  );
}
