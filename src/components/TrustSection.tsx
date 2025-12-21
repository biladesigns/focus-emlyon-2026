const TrustSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-magenta/5 via-transparent to-blue/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
            <span className="gradient-text">ILS NOUS FONT CONFIANCE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nos partenaires et clients qui nous accompagnent dans nos projets
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="w-28 h-28 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl flex items-center justify-center hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-xs font-medium group-hover:text-primary transition-colors">Logo {index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
