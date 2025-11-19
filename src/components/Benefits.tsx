import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Créer, innover, communiquer en image",
    description: "Nous mettons nos compétences au service d'entreprises partenaires, de l'administration de emlyon, et des 35 associations de l'école afin de répondre à leurs différents besoins en communication audiovisuelle.",
    gradient: "from-magenta to-orange",
  },
  {
    icon: Users,
    title: "Boostez votre visibilité auprès de notre communauté étudiante !",
    description: "Touchez plus de 9000 étudiants répartis sur 4 campus et présents à l'international grâce aux échanges universitaires. Profitez d'une exposition unique amplifiée par notre présence digitale avec plus de 687 000 vues sur l'ensemble de nos plateformes.",
    gradient: "from-blue to-purple",
  },
  {
    icon: Award,
    title: "Une qualité d'image à la hauteur de votre marque",
    description: "Nous capturons chaque instant avec un matériel haut de gamme pour garantir un rendu professionnel. Grâce à la technologie HDR 4K, nos vidéos offrent une qualité d'image exceptionnelle, avec des couleurs éclatantes et des détails précis.",
    gradient: "from-orange to-purple",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden film-grain">
      {/* Subtle static gradient - no flash */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-magenta/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Nos <span className="gradient-text glitch italic" data-text="Atouts">Atouts</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            L'audiovisuel au service de votre image
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card border-2 border-muted hover:border-primary transition-all duration-500 p-8 text-center group relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <div className={`w-24 h-24 bg-gradient-to-br ${benefit.gradient} rounded-full flex items-center justify-center pulse-glow`}>
                    <benefit.icon className="w-12 h-12 text-foreground" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:neon-glow transition-all duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {benefit.description}
                </p>
                
                {/* Animated bottom line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
