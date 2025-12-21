import { Button } from "@/components/ui/button";
import focusLogoWave from "@/assets/focus-logo-wave.png";
import logoEmlyon from "@/assets/logo-emlyon.png";
import AnimatedRealisationsButton from "@/components/AnimatedRealisationsButton";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToRealisations = () => {
    const realisationsSection = document.getElementById('realisations');
    realisationsSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      {/* Cinematic Frame Lines */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-primary/30 z-[2]"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-blue/30 z-[2]"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-orange/30 z-[2]"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-purple/30 z-[2]"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50 z-[3] pointer-events-none"></div>
      
      {/* Content */}
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Glow Effect Behind Logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 via-orange/20 to-blue/20 blur-3xl"></div>
              
              {/* Logo with cinematic frame */}
              <div className="relative p-8 border-2 border-primary/20 rounded-2xl backdrop-blur-sm bg-background/10">
                <img src={focusLogoWave} alt="FOCUS Logo" className="w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl animate-heartbeat" />
                
                {/* Decorative corners on logo frame */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-magenta"></div>
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-blue"></div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-orange"></div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-purple"></div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Text Content */}
          <div className="space-y-8 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            {/* Title with cinematic typography */}
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-none tracking-wider">
                <span className="gradient-text">association audiovisuelle</span>
              </h1>
              
              
            </div>
            
            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-magenta via-orange to-blue"></div>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 leading-relaxed max-w-xl">
              Nous donnons vie à vos projets audiovisuels avec{' '}
              <span className="text-primary font-semibold">créativité</span> et{' '}
              <span className="text-blue font-semibold">professionnalisme</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4 items-start">
              <AnimatedRealisationsButton onClick={scrollToRealisations} />
              <Button size="lg" variant="outline" onClick={scrollToContact} className="border-2 border-foreground/30 text-foreground hover:bg-foreground/10 hover:border-foreground/50 px-[52px] py-5 text-[17px] font-semibold rounded-[56px] transition-all duration-300 hover:scale-105">
                Nous Contacter
              </Button>
            </div>
            
            {/* emlyon branding */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-sm tracking-[0.3em] text-primary font-bold uppercase">UNE ASSOCIATION D'</span>
              </div>
              <img src={logoEmlyon} alt="emlyon business school" className="h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none"></div>
    </section>;
};
export default Hero;