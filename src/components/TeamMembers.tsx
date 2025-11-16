"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HoverRevealCards() {
  const cards = [
    { title: "Managing Director", reveal: "Amirul Shakir" },
    { title: "License Surveyor I", reveal: "LSr. Dr. Tan Liat Choon" },
    { title: "License Surveyor II", reveal: "LSr. Che Sulaiman" },
    { title: "Director", reveal: "Muhammad Nazrin" },
    { title: "Associate Director", reveal: "Nur Luqman" },
    { title: "Manager Surveyor", reveal: "Mariani" },
    { title: "Manager Architecture", reveal: "Ahmad" },
    { title: "Surveyor Drafter I", reveal: "Aisya" },
    { title: "Surveyor Drafter II", reveal: "Nur Balqis" },
    { title: "Archi Drafter I", reveal: "Elyn" },
    { title: "Archi Drafter I", reveal: "Nureen" },
  ];

  return (
    <section className="w-full py-24 bg-white flex flex-col items-center text-center px-4">
      
      {/* TITLE — follow Services motion */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-[#0a1930] mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Team
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full justify-center">
        {cards.map((card, index) => {
          const [open, setOpen] = useState(false); // Mobile toggle

          return (
            <motion.div
              key={index}
              onClick={() => setOpen(!open)} // Mobile tap reveal
              className="
                group relative bg-[#0a1930] text-white rounded-2xl overflow-hidden 
                shadow-lg p-8 cursor-pointer ]
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Default content */}
              <div
                className={`
                  transition-opacity duration-300
                  ${open ? "opacity-0" : "opacity-100"}
                  md:group-hover:opacity-0
                `}
              >
                <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              </div>

              {/* Reveal content */}
              <div
                className={`
                  absolute inset-0 p-8 flex flex-col justify-center items-center text-center
                  transition-opacity duration-300
                  ${open ? "opacity-100" : "opacity-0"}
                  md:opacity-0 md:group-hover:opacity-100
                `}
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-100 text-xl leading-relaxed"
                >
                  {card.reveal}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
