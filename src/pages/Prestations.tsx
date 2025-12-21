import Layout from "@/components/Layout";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ServiceProcess from "@/components/ServiceProcess";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

      {/* Services Component - Nos Prestations */}
      <Services />

      {/* Service Process - Notre Processus */}
      <ServiceProcess />
      
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
