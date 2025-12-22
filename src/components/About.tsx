const About = () => {
  return <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      {/* Animated background orbs for visual interest */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange/15 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-magenta/15 rounded-full blur-[150px] animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[150px] animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Zone pour photo de mandat en mode paysage */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card/50 backdrop-blur-sm border-2 border-muted hover:border-primary transition-all duration-500 group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-muted-foreground/50 text-sm font-medium">Photo de mandat</div>
                  <div className="text-muted-foreground/30 text-xs">Format paysage 4:3</div>
                </div>
              </div>
              {/* Gradient overlay for visual effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 via-transparent to-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Qui</span> sommes-nous ?
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FOCUS</strong> est une initiative étudiante portée par des passionnés d'audiovisuel.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">Nous réalisons des contenus créatifs et professionnels pour refléter l'énergie, la diversité et les projets de notre école — étudiants, associations, administration et entreprises.


De la stratégie de contenu au tournage, nous mettons notre expertise au service de vos projets partout en France. Nous assurons notamment la couverture audiovisuelle complète du Raid EY, l’un des événements sportifs majeurs du pays.</p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">FOCUS</strong> combine <span className="text-primary font-semibold">professionnalisme</span>, <span className="text-primary font-semibold">innovation</span> et <span className="text-primary font-semibold">créativité</span> au cœur d'emlyon.
            </p>
            
            <div className="h-1 w-24 bg-primary mt-8"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;