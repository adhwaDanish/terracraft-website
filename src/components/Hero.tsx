"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col justify-start items-center text-center  bg-cover bg-center bg-no-repeat pt-32 pb-16 px-4"
    style={{
    backgroundImage: "url('/headerImage.jpg')",
    minHeight: "300px", 
  }}>
  <motion.div
  className="bg-white/70 rounded-2xl px-6 py-4 inline-block mb-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-4xl md:text-5xl font-bold text-[#0a1930]">
    Building a Stronger Tomorrow
  </h2>
  

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        TERRACRAFT® Kuala Lumpur is a multidisciplinary firm specializing in engineering,
        surveying, and property development. We deliver precise, innovative, and reliable
        solutions to clients across Malaysia.
      </motion.p>
    </motion.div>
    </section>
  );
}
