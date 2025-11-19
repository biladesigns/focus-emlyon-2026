import focusLogoWave from "@/assets/focus-logo-wave.png";

const About = () => {
  return (
    <section className="py-24 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img 
              src={focusLogoWave} 
              alt="FOCUS Wave Logo" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Qui</span> sommes-nous ?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FOCUS</strong> est une initiative étudiante portée par des passionnés d'audiovisuel.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous réalisons des contenus créatifs et professionnels pour refléter l'énergie, la diversité et les projets de notre école — étudiants, associations, administration et entreprises.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FOCUS</strong> combine <span className="text-primary font-semibold">professionnalisme</span>, <span className="text-primary font-semibold">innovation</span> et <span className="text-primary font-semibold">créativité</span> au cœur d'emlyon.
            </p>
            
            <div className="h-1 w-24 bg-primary mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
