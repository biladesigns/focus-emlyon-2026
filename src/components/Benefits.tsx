import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Le Réseau",
    description: "Bien plus qu'une association, nous nous appuyons sur un écosystème puissant issu d'emlyon business school. Ce réseau nous permet de collaborer avec des profils complémentaires — créatifs, entrepreneurs, managers — et de connecter chaque projet aux bonnes compétences, aux bons partenaires et aux bonnes opportunités. Une force collective au service de productions ambitieuses et structurées.",
  },
  {
    icon: Users,
    title: "L'Agilité",
    description: "Habitués aux terrains exigeants comme le Raid EY, nous sommes capables de nous déployer partout en France. Notre structure nous permet d'être réactifs et de nous adapter à toutes les contraintes logistiques.",
  },
  {
    icon: Award,
    title: "La Créativité",
    description: "Issus de l'écosystème emlyon, nous apportons un regard neuf et dynamique à votre communication. Nous concevons des contenus innovants qui captent l'attention et valorisent durablement votre image de marque.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
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
