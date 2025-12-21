import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ServiceProcess from "@/components/ServiceProcess";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Video, Sparkles } from "lucide-react";

const prestationsDetails = [
  {
    icon: Film,
    title: "Aftermovies",
    description: "Capturer l'essence de vos événements en vidéos mémorables. Du montage dynamique aux effets visuels soignés.",
    color: "orange",
  },
  {
    icon: Video,
    title: "Courts-métrages",
    description: "Productions créatives originales, de l'écriture à la post-production. Narration visuelle unique et artistique.",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Projets sur-mesure",
    description: "Réalisation de vos idées audiovisuelles. Clips, publicités, contenus pour réseaux sociaux.",
    color: "orange",
  },
];

const Prestations = () => {
  return (
    <Layout>
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

      {/* Detailed Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-8">
            {prestationsDetails.map((service, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <ServiceProcess />

      {/* Services Component */}
      <Services />
      
      {/* Benefits */}
      <Benefits />

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-magenta/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">
            <span className="gradient-text">UN PROJET EN TÊTE ?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Discutons ensemble de votre vision et donnons-lui vie.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold magenta-glow px-10 py-7 text-lg"
          >
            <Link to="/contact">Nous Contacter</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Prestations;
