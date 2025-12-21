import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Film, Clapperboard, Briefcase } from "lucide-react";
const services = [{
  icon: Film,
  title: "Montage",
  description: "Confiez-nous vos rushes et nous transformerons vos images en une vidéo percutante et professionnelle. Colorimétrie, sound design, effets visuels : nous maîtrisons chaque étape de la post-production.",
  details: "Formats adaptés à tous vos supports."
}, {
  icon: Clapperboard,
  title: "Captation",
  description: "Notre équipe se déplace pour capturer vos moments clés avec un équipement professionnel. Conférences, événements d'entreprise, spectacles : nous réalisons des vidéos sur-mesure, courtes ou longues, selon vos besoins.",
  details: "Multi-caméras et qualité cinématographique."
}, {
  icon: Briefcase,
  title: "Aftermovie",
  description: "Mariages, galas, soirées de prestige : nous immortalisons vos événements les plus précieux. Un film soigné qui capture l'émotion et l'atmosphère pour revivre ces instants à l'infini.",
  details: "Des souvenirs qui traversent le temps."
}];
const Services = () => {
  return <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">Prestations</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => <Card key={index} className="p-6 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-2">{service.description}</p>
              <p className="text-sm text-primary/70">{service.details}</p>
            </Card>)}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold px-8 py-6">
            
          </Button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
    </section>;
};
export default Services;