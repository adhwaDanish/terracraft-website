import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "@/components/Footer";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Plans from "@/components/Plans";
import TeamMembers from "@/components/TeamMembers";
import Clients from "@/components/Clients";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <div className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="vision">
          <VisionMission />
        </section>
        <section id="services">
          <Services />
        </section>
         <section id="plans">
          <Plans />
        </section>
        <section id="team">
          <TeamMembers />
        </section>
        <section id="team">
          <Clients />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        
       
      </div>
      <Footer />
    </main>
  );
}
