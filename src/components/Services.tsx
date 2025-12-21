import { Card } from "@/components/ui/card";
import { Film, Clapperboard, Briefcase } from "lucide-react";
const services = [{
  icon: Film,
  title: "Inside",
  description: "Courtes vidéos immersives mettant en lumière la vie associative, les initiatives et les moments forts de l'école.",
  details: "Plans d'ambiance + narration dynamique."
}, {
  icon: Clapperboard,
  title: "Créations originales",
  description: "Courts-métrages, fictions, production complète : écriture, tournage, réalisation, post-production.",
  details: "Participation à des concours : CLAC, 48H, Festival Jeunesse en Court."
}, {
  icon: Briefcase,
  title: "Prestations professionnelles",
  description: "Vidéos promotionnelles, aftermovies, interviews pour associations, entreprises et administration.",
  details: "Qualité premium et service sur-mesure."
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
          {services.map((service, index) => {})}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
    </section>;
};
export default Services;