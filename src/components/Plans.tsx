"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Plans() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  const plans = [
    {
      title: "Package A — RM2,000/month",
      briefDescription: "Best for small projects needing consistent monthly drawings",
      description:
        "Includes 8 Plans per Month Ideal for companies or individuals who require consistent support with a moderate number of drawings. This package provides accurate, well-structured plans prepared according to industry standards—perfect for small to medium-scale projects.",
      image: "/packageA.png",
    },
    {
      title: "Package B — RM2,500/month",
      briefDescription: "Ideal for busier workflows requiring more frequent plan submissions.",
      description:
        "Includes 11 Plans per Month Designed for clients with more active project workflows who need drawings delivered more frequently. With a higher monthly quota, this package offers greater flexibility and faster turnaround to ensure all submissions meet your deadlines.",
      image: "/packageB.png",
    },
    {
      title: "Package C — Custom / Tailored",
      briefDescription: "Fully customizable plan for complex needs and higher drawing volumes.",
      description:
        "Contact Us for a Quotation A fully customizable package based on your project scope, drawing volume, and specific requirements. Ideal for organisations needing more complex solutions, higher plan volumes, or deeper integration. We will review your needs and provide the most suitable proposal.",
      image: "/australiaPlan.png",
    },
  ];

  return (
    <section className="py-20 px-6 flex flex-col items-center bg-[#001F3F] text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Plans
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-white/10 text-black rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-blue-200 text-2xl font-bold mb-3">{plan.title}</h3>
            <p className="text-gray-200 mb-6">{plan.briefDescription}</p>

            <button
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
              onClick={() => {
                setSelectedPlan(plan);
                setOpen(true);
              }}
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* Animated Modal */}
      {open && selectedPlan && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
<motion.div
  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 max-w-md w-full z-10 text-center relative"
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 50, scale: 0.95 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>
  {/* Accent Top Bar */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 rounded-full bg-blue-500/70 shadow-md"></div>

  {/* Plan Title */}
  <h3 className="text-2xl text-white font-bold mb-4">{selectedPlan.title}</h3>

  {/* Star Rating */}
  <div className="flex justify-center mb-6">
    {Array.from({ length: 3 }).map((_, i) => (
      <svg
        key={i}
        className={`w-6 h-6 ${
          i < (selectedPlan.title.includes("A") ? 1 : selectedPlan.title.includes("B") ? 2 : 3)
            ? "text-yellow-400"
            : "text-gray-500/50"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.951c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.951a1 1 0 00-.364-1.118L2.077 9.378c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.95z" />
      </svg>
    ))}
  </div>

  {/* Plan Description */}
  <p className="text-gray-200 mb-6">{selectedPlan.description}</p>

  <button
    onClick={() => setOpen(false)}
    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
  >
    Close
  </button>
</motion.div>


        </motion.div>
      )}
    </section>
  );
}
