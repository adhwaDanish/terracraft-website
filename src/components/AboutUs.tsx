"use client";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="bg-[#0a1930] text-white py-16 px-8 text-center"
    >
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>

      <div className="space-y-3 text-lg">
        <p>📍 <strong>TERRACRAFT® Kuala Lumpur</strong></p>
        <p>Email: <a href="mailto:info@terracraftkl.com" className="text-blue-400 hover:underline">info@terracraftkl.com</a></p>
        <p>Phone: <a href="tel:+603" className="text-blue-400 hover:underline">+60 3</a></p>
        </div>

      <p className="mt-8 text-gray-300 italic">
        Thank you for your trust in TERRACRAFT® Kuala Lumpur.
      </p>
    </section>
  );
}
