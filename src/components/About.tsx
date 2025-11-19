import { Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden film-grain">
      {/* Animated background orbs for contrast */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo mandat - placeholder */}
          <div className="animate-fade-in">
            <div className="relative w-full max-w-lg mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-muted hover:border-primary transition-all duration-500 group">
              {/* Placeholder pour photo équipe */}
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 via-blue/20 to-orange/20 backdrop-blur-sm flex items-center justify-center z-10">
                <div className="text-center p-8">
                  <Sparkles className="w-16 h-16 text-magenta mx-auto mb-4 animate-pulse" />
                  <p className="text-xl font-bold gradient-text mb-2">Photo du Mandat</p>
                  <p className="text-sm text-muted-foreground">Espace réservé pour votre photo d'équipe</p>
                </div>
              </div>
              
              {/* Image placeholder - vous pouvez remplacer par une vraie photo */}
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" 
                alt="Équipe FOCUS" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
            </div>
          </div>
          
          {/* Texte */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-magenta animate-pulse" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                  <span className="gradient-text glitch" data-text="Qui">Qui</span> sommes-nous ?
                </h2>
              </div>
              <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue"></div>
            </div>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Initiative étudiante récemment lancée à emlyon, <span className="font-bold gradient-text text-xl">FOCUS</span> est avant tout portée par des étudiants motivés, animés par une passion commune pour l'audiovisuel et soucieux de produire du contenu de qualité pour refléter l'énergie et la diversité de leur école.
            </p>
            
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              Ce projet est né de notre volonté de mettre notre <span className="text-magenta font-semibold">créativité</span> et notre <span className="text-blue font-semibold">expertise</span> au service des étudiants, des associations et des entreprises et s'inscrit dans une dynamique de <span className="text-orange font-semibold">professionnalisation</span> et d'<span className="text-purple font-semibold">innovation</span>.
            </p>
            
            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-muted">
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-muted hover:border-magenta transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-magenta mb-1">35</div>
                <div className="text-xs text-muted-foreground">Associations</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-muted hover:border-blue transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue mb-1">9K+</div>
                <div className="text-xs text-muted-foreground">Étudiants</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-muted hover:border-orange transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-orange mb-1">4</div>
                <div className="text-xs text-muted-foreground">Campus</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-muted hover:border-purple transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-purple mb-1">687K</div>
                <div className="text-xs text-muted-foreground">Vues</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
