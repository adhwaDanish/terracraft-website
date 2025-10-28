"use client";
import { motion } from "framer-motion";
import { Wrench, Map, Building2, Ruler, ClipboardCheck, Headphones } from "lucide-react";

const services = [
  {
    title: "Land & Engineering Survey",
    icon: Map,
    description:
      "Comprehensive surveying services ensuring precision and reliability for engineering and development projects.",
  },
  {
    title: "Construction & Civil Works",
    icon: Building2,
    description:
      "Delivering durable and efficient construction solutions that meet industry standards and client expectations.",
  },
  {
    title: "Structural & Infrastructure Design",
    icon: Ruler,
    description:
      "Innovative structural and infrastructure designs focused on safety, sustainability, and performance.",
  },
  {
    title: "Property Development & Project Management",
    icon: ClipboardCheck,
    description:
      "From planning to execution, we manage projects with integrity, efficiency, and excellence.",
  },
  {
    title: "Drafting & Mapping Services",
    icon: Wrench,
    description:
      "Providing accurate technical drawings and detailed mapping services using advanced CAD tools.",
  },
  {
    title: "Consultation & Technical Support",
    icon: Headphones,
    description:
      "Expert consultancy and technical assistance tailored to meet specific engineering and development needs.",
  },
];

export default function Services() {
  return (
    <section className="bg-white text-[#0a1930] py-20 px-6 md:px-12">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="bg-[#001F3F]/90 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-4">
                <Icon className="w-10 h-10 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
              <p className="text-gray-200 text-center">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
