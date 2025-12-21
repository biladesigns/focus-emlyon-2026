import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Benefits from "@/components/Benefits";
import ParticleNetwork from "@/components/ParticleNetwork";

const Index = () => {
  return (
    <Layout>
      {/* Global Particle Network Background */}
      <div className="fixed inset-0 bg-background z-0">
        <ParticleNetwork />
      </div>
      
      {/* Content with transparent backgrounds */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Realisations />
        <Benefits />
      </div>
    </Layout>
  );
};

export default Index;
