import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Stats />
      <Benefits />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 FOCUS - Association audiovisuelle d'emlyon business school
          </p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
