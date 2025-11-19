import { Button } from "@/components/ui/button";
import focusLogoWave from "@/assets/focus-logo-wave.png";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRealisations = () => {
    const realisationsSection = document.getElementById('realisations');
    realisationsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg film-grain pb-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magenta/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0"></div>
      
      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-magenta via-orange to-blue"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue via-purple to-magenta"></div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="mb-12 animate-fade-in float">
          <img 
            src={focusLogoWave} 
            alt="FOCUS Logo" 
            className="w-80 md:w-[600px] mx-auto drop-shadow-2xl pulse-glow"
          />
        </div>
        
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in-up">
          <span className="glitch inline-block neon-glow" data-text="FOCUS">
            FOCUS
          </span>
          <br />
          <span className="text-xl md:text-4xl lg:text-5xl font-normal text-foreground/90 mt-4 block">
            L'Audiovisuel au Service de votre Image
          </span>
        </h1>
        
        <p className="text-base md:text-xl lg:text-2xl gradient-text font-semibold mb-12 animate-fade-in-up max-w-3xl mx-auto">
          Association audiovisuelle d'emlyon business school
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-magenta/50 text-foreground hover:bg-magenta/10 hover:border-magenta px-6 py-2 text-sm glitch-hover transition-all duration-300"
          >
            Nous contacter
          </Button>
          <Button 
            onClick={scrollToRealisations}
            variant="outline"
            className="border-2 border-blue/50 text-foreground hover:bg-blue/10 hover:border-blue px-6 py-2 text-sm glitch-hover transition-all duration-300"
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
