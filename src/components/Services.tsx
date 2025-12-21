import { Card } from "@/components/ui/card";
import { Film, Clapperboard, Briefcase } from "lucide-react";
const services = [{
  icon: Film,
  title: "Montage",
  description: "On peut s'occuper du montage de votre projet.",
  details: "Post-production professionnelle."
}, {
  icon: Clapperboard,
  title: "Captation",
  description: "On vient filmer votre évènement pour réaliser une vidéo professionnelle : courte ou longue selon votre envie.",
  details: "Équipement professionnel et équipe dédiée."
}, {
  icon: Briefcase,
  title: "Aftermovie",
  description: "On filme un évènement : mariage... et on en fait un film mémorable qui vous fera vous souvenir de nous.",
  details: "Souvenirs inoubliables garantis."
}];
const Services = () => {
  return <section className="py-24 bg-background relative overflow-hidden film-grain">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Prestations</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-2">{service.description}</p>
              <p className="text-sm text-primary/70">{service.details}</p>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
    </section>;
};
export default Services;