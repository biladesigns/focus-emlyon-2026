import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Créer, innover, communiquer",
    description: "Nous accompagnons les entreprises, étudiants, associations et l'administration avec des productions audiovisuelles adaptées à leurs besoins.",
  },
  {
    icon: Users,
    title: "Une visibilité unique",
    description: "Plus de 9 000 étudiants sur 4 campus, forte présence digitale, plus de 687 000 vues.",
  },
  {
    icon: Award,
    title: "Qualité premium",
    description: "Matériel haut de gamme, image HDR 4K, rendu pro et couleurs éclatantes.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden film-grain">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Atouts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            L'audiovisuel au service de votre image
          </p>
          <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 p-8 text-center group glitch-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
