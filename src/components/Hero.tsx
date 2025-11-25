import { Button } from "@/components/ui/button";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import ParticleNetwork from "./ParticleNetwork";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particle Network */}
      <ParticleNetwork />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" style={{ zIndex: 2 }}></div>
      
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0" style={{ zIndex: 3 }}></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4" style={{ zIndex: 10 }}>
        <div className="max-w-5xl mx-auto">
          {/* Logo compact en haut */}
          <div className="mb-16 animate-fade-in text-center">
            <img 
              src={focusLogoWave} 
              alt="FOCUS" 
              className="w-32 md:w-40 mx-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Titre principal avec effet glitch */}
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up">
              <span className="glitch inline-block neon-glow" data-text="FOCUS">
                FOCUS
              </span>
            </h1>
            
            <p className="text-xl md:text-3xl lg:text-4xl font-light text-foreground/90 mb-4 animate-fade-in-up">
              Association Audiovisuelle
            </p>
            
            <p className="text-base md:text-xl lg:text-2xl gradient-text font-semibold mb-12 animate-fade-in-up">
              emlyon business school
            </p>
          </div>
          
          {/* Tagline */}
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-lg md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Créativité • Innovation • Professionnalisme
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-magenta hover:bg-magenta/90 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-magenta/50"
            >
              Nous contacter
            </Button>
            <Button 
              onClick={scrollToRealisations}
              size="lg"
              variant="outline"
              className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              Nos réalisations
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" style={{ zIndex: 5 }}></div>
    </section>
  );
};

export default Hero;
