import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";
const realisations = [{
  title: "Séminaire ECHO",
  category: "Captation",
  thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
  views: "12K vues",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
}, {
  title: "Aftermovie Raid 2025",
  category: "Aftermovie",
  thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop",
  views: "18K vues",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
}, {
  title: "Aftermovie Adhémar 2025",
  category: "Aftermovie",
  thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
  views: "15K vues",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
}];
const Realisations = () => {
  const [playerOpen, setPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<typeof realisations[0] | null>(null);
  const handlePlayVideo = (realisation: typeof realisations[0]) => {
    setCurrentVideo(realisation);
    setPlayerOpen(true);
  };
  return <section id="realisations" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nos <span className="gradient-text glitch" data-text="Réalisations">Réalisations récentes </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus de <span className="text-magenta font-bold neon-glow">687 000 vues</span> sur nos productions
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation, index) => <Card key={index} className="bg-card border-2 border-muted hover:border-magenta transition-all duration-500 overflow-hidden group cursor-pointer animate-fade-in-up relative" style={{
          animationDelay: `${index * 0.15}s`
        }} onClick={() => handlePlayVideo(realisation)}>
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img src={realisation.thumbnail} alt={realisation.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
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
            </Card>)}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Suivez-nous sur nos réseaux sociaux pour plus de contenu
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="outline" className="border-2 border-magenta text-foreground hover:bg-magenta hover:text-foreground magenta-glow">
              Instagram
            </Button>
            <Button variant="outline" className="border-2 border-blue text-foreground hover:bg-blue hover:text-foreground blue-glow">
              YouTube
            </Button>
          </div>
        </div>
      </div>

      {/* Video Player Dialog */}
      <Dialog open={playerOpen} onOpenChange={setPlayerOpen}>
        <DialogContent className="bg-card border-2 border-border max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text flex justify-between items-center">
              {currentVideo?.title}
              <Button variant="ghost" size="icon" onClick={() => setPlayerOpen(false)} className="hover:bg-muted">
                <X className="w-5 h-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {currentVideo && <div className="space-y-4">
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                <iframe width="100%" height="100%" src={currentVideo.videoUrl} title={currentVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-gradient-to-r from-blue to-purple rounded-full text-xs font-bold">
                  {currentVideo.category}
                </span>
                <span className="text-muted-foreground">{currentVideo.views}</span>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </section>;
};
export default Realisations;