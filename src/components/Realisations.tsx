import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const realisations = [
  {
    title: "Aftermovie Gala 2024",
    category: "Prestations Pro",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
    views: "15K vues",
  },
  {
    title: "Inside - Vie Associative",
    category: "Inside",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop",
    views: "8K vues",
  },
  {
    title: "Court-métrage CLAC 2024",
    category: "Créations Originales",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
    views: "12K vues",
  },
  {
    title: "Interview Alumni",
    category: "Prestations Pro",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=500&fit=crop",
    views: "6K vues",
  },
  {
    title: "48H Film Challenge",
    category: "Créations Originales",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=500&fit=crop",
    views: "20K vues",
  },
  {
    title: "Promo emlyon 2024",
    category: "Prestations Pro",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    views: "25K vues",
  },
];

const Realisations = () => {
  return (
    <section id="realisations" className="py-24 bg-background relative overflow-hidden film-grain">
      {/* Animated background orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue/20 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-magenta/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="gradient-text glitch" data-text="Réalisations">Réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de <span className="text-magenta font-bold neon-glow">687 000 vues</span> sur nos productions
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation, index) => (
            <Card 
              key={index}
              className="bg-card border-2 border-muted hover:border-magenta transition-all duration-500 overflow-hidden group cursor-pointer animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={realisation.thumbnail} 
                  alt={realisation.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-magenta to-orange flex items-center justify-center pulse-glow">
                    <Play className="w-10 h-10 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue to-purple rounded-full text-sm font-bold backdrop-blur-sm border border-blue/30">
                  {realisation.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-magenta transition-colors duration-300">
                  {realisation.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {realisation.views}
                </p>
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-magenta via-orange to-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Découvrez toutes nos créations sur nos réseaux sociaux
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-2 border-magenta text-foreground hover:bg-magenta hover:text-foreground glitch-hover magenta-glow"
            >
              Instagram
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-blue text-foreground hover:bg-blue hover:text-foreground glitch-hover blue-glow"
            >
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
