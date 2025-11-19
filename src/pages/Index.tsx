import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Realisations from "@/components/Realisations";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Realisations />
      <Benefits />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background border-t-2 border-muted py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-magenta/5 to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <p className="text-muted-foreground mb-2">
              © 2025 FOCUS - Association audiovisuelle d'emlyon business school
            </p>
            <p className="text-sm text-muted-foreground/70">
              Créativité • Innovation • Professionnalisme
            </p>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
