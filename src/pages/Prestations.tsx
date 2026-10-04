import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ServiceProcess from "@/components/ServiceProcess";

const pagesService = [
  {
    to: "/videaste-evenementiel-lyon",
    titre: "Vidéaste événementiel",
    texte: "Soirées d'entreprise, galas, salons : une équipe et plusieurs angles sur vos moments clés.",
  },
  {
    to: "/aftermovie-lyon",
    titre: "Aftermovie",
    texte: "Le film court de votre événement, d'une soirée à un week-end de plusieurs jours.",
  },
  {
    to: "/videaste-soiree-privee-lyon",
    titre: "Soirée privée et anniversaire",
    texte: "Un film souvenir de votre soirée, tourné avec discrétion, et une version à partager.",
  },
  {
    to: "/aftermovie-soiree-club-lyon",
    titre: "Soirées en club, bar ou péniche",
    texte: "Aftermovies, teasers et vidéos courtes pour remplir vos prochaines soirées.",
  },
];

const Prestations = () => {
  return (
    <Layout>
      <SEO
        title="Prestations Vidéo Lyon | Aftermovie, Clip, Captation"
        description="Découvrez nos prestations audiovisuelles à Lyon : aftermovies, courts-métrages, captations événementielles, clips musicaux, vidéos corporate. Devis gratuit."
        keywords="vidéaste Lyon, vidéaste événementiel Lyon, aftermovie Lyon, captation événement Lyon, vidéaste soirée privée Lyon, devis vidéo Lyon"
        canonical="https://focus-emlyon.com/prestations"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="text-sm tracking-[0.3em] text-primary font-bold uppercase">Nos Services</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
              <span className="gradient-text">PRESTATIONS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Des solutions audiovisuelles complètes pour donner vie à vos projets avec créativité et professionnalisme.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pagesService.map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="group block p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {page.titre} à Lyon
                </h2>
                <p className="text-muted-foreground mb-4">{page.texte}</p>
                <span className="inline-flex items-center gap-2 text-sm text-primary font-bold">
                  Découvrir <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Component - Nos Prestations */}
      <Services />

      {/* Service Process - Notre Processus */}
      <ServiceProcess />
      
      {/* Benefits */}
      <Benefits />


    </Layout>
  );
};

export default Prestations;
