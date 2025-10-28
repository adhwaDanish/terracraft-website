import Navbar from "../../components/Navbar";

export default function Home2Page() {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-4xl font-bold text-[#0a1930]">Home 2</h1>
        <p className="text-gray-600 mt-4 max-w-md">
          This is a placeholder section. You can replace this with your company’s
          services, mission, or any other info.
        </p>
      </section>
    </main>
  );
}
