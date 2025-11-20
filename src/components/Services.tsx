import { Card } from "@/components/ui/card";
import { Film, Clapperboard, Briefcase } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Inside",
    description: "Courtes vidéos immersives mettant en lumière la vie associative, les initiatives et les moments forts de l'école.",
    details: "Plans d'ambiance + narration dynamique.",
  },
  {
    icon: Clapperboard,
    title: "Créations originales",
    description: "Courts-métrages, fictions, production complète : écriture, tournage, réalisation, post-production.",
    details: "Participation à des concours : CLAC, 48H, Festival Jeunesse en Court.",
  },
  {
    icon: Briefcase,
    title: "Prestations professionnelles",
    description: "Vidéos promotionnelles, aftermovies, interviews pour associations, entreprises et administration.",
    details: "Qualité premium et service sur-mesure.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden film-grain">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary glitch" data-text="Prestations">Prestations</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 p-8 group glitch-hover animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Red accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <p className="text-sm text-primary font-semibold">
                {service.details}
              </p>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
    </section>
  );
};

export default Services;
