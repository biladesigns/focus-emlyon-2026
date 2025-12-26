import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="FOCUS | Production Audiovisuelle Lyon - Vidéo, Aftermovie, Court-métrage"
        description="FOCUS, association audiovisuelle emlyon business school. Production vidéo professionnelle à Lyon : aftermovies, courts-métrages, captations événementielles, clips. Tarifs étudiants, qualité pro."
        keywords="production vidéo Lyon, aftermovie Lyon, vidéaste Lyon, court-métrage, captation événement, clip vidéo, FOCUS emlyon, association audiovisuelle, vidéo entreprise Lyon"
        canonical="https://focus-emlyon.com"
      />
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Benefits />
    </Layout>
  );
};

export default Index;
