import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Benefits />
    </Layout>
  );
};

export default Index;
