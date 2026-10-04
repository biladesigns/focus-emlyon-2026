import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Hero from "@/components/Hero";
import IlsNousFontConfiance from "@/components/IlsNousFontConfiance";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="FOCUS | Vidéaste à Lyon : événements, soirées, aftermovies"
        description="Une équipe de vidéastes basée à Lyon pour filmer vos soirées, galas, événements d'entreprise et soirées privées. Aftermovies, captation multi-caméras, montage. Devis détaillé."
        keywords="production vidéo Lyon, aftermovie Lyon, vidéaste Lyon, court-métrage, captation événement, clip vidéo, FOCUS emlyon, association audiovisuelle, vidéo entreprise Lyon"
        canonical="https://focus-emlyon.com"
      />
      <Hero />
      <IlsNousFontConfiance />
      <About />
      <Services />
      <Realisations />
      <Benefits />
    </Layout>
  );
};

export default Index;
