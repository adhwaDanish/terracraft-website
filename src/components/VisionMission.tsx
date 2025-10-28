"use client";
import { motion } from "framer-motion";

export default function VisionMission() {
  return (
    <section className="bg-[#001F3F] text-white py-20 px-6 md:px-12 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Vision & Mission
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-200">Vision</h3>
          <p className="text-gray-200">
            To be a trusted leader in sustainable engineering and land development.
          </p>
        </motion.div>

        <motion.div
          className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-200">Mission</h3>
          <p className="text-gray-200">
            Deliver quality, accuracy, and value in every project we undertake.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
