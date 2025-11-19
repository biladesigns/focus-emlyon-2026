import { Button } from "@/components/ui/button";
import focusLogo from "@/assets/focus-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background film-grain">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
      
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0"></div>
      
      {/* Red accent lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src={focusLogo} 
            alt="FOCUS Logo" 
            className="w-64 md:w-96 mx-auto mb-12 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="glitch inline-block" data-text="FOCUS">
            FOCUS
          </span>
          <br />
          <span className="text-2xl md:text-5xl font-normal text-foreground/90">
            L'Audiovisuel au Service de votre Image
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-muted-foreground mb-12 animate-fade-in-up max-w-3xl mx-auto">
          Association audiovisuelle d'emlyon business school
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glitch-hover red-glow font-bold"
          >
            Nous contacter
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg glitch-hover font-bold"
          >
            Voir nos réalisations
          </Button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
