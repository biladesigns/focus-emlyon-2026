import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";
import thumbnailAdhemar from "@/assets/thumbnail-adhemar-home.webp";
import thumbnailPrologueRaid from "@/assets/thumbnail-prologue-raid.webp";
const realisations = [{
  title: "Séminaire ECHO",
  category: "Captation",
  thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
  views: "Réalisation du making-of d'un séminaire de l'école.",
  videoUrl: "https://www.dropbox.com/scl/fi/2zkxo3fjlx3pu4hdvzwhs/Making-off-s-minaire-ECHO-2025.mp4?rlkey=1duby09766dhd33dm92s9bdg4&st=xeowqtu6&raw=1",
  isDirectVideo: true
}, {
  title: "Aftermovie Raid 2025",
  category: "Aftermovie",
  thumbnail: thumbnailPrologueRaid,
  views: "Captation et réalisation de l'aftermovie d'un des plus grands évènements étudiants de France",
  videoUrl: "https://www.dropbox.com/scl/fi/xkuibtx10u8mfawwqv3uy/Aftermovie-Raid-2025.mp4?rlkey=rdsxbyax7pz1xoys0af9xdmbj&st=ig6idn8h&raw=1",
  isDirectVideo: true
}, {
  title: "Aftermovie Adhémar 2025",
  category: "Aftermovie",
  thumbnail: thumbnailAdhemar,
  views: "Captation et réalisation de l'aftermovie d'un évènement rassemblant plus de 600 personnes.",
  videoUrl: "https://www.dropbox.com/scl/fi/g5zqtinzs1adogetroclf/Aftermovie-Adh-mar-2025.mov?rlkey=hzogfb52haw8aorrcf6hzxdoh&st=iqaz2qmf&raw=1",
  isDirectVideo: true
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
            Plus de <span className="text-magenta font-bold neon-glow">68700 vues</span> sur nos productions
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-magenta via-orange to-blue mx-auto mt-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation, index) => <Card key={index} className="bg-card border-2 border-muted hover:border-magenta transition-all duration-500 overflow-hidden group cursor-pointer animate-fade-in-up relative" style={{
          animationDelay: `${index * 0.15}s`
        }} onClick={() => handlePlayVideo(realisation)}>
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img src={realisation.thumbnail} alt={realisation.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
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
            <Button variant="outline" className="border-2 border-magenta text-foreground hover:bg-magenta hover:text-foreground magenta-glow" asChild>
              <a href="https://www.instagram.com/focus_emlyon/" target="_blank" rel="noopener noreferrer">Instagram</a>
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
                {currentVideo.isDirectVideo ? <video width="100%" height="100%" src={currentVideo.videoUrl} title={currentVideo.title} controls autoPlay className="w-full h-full" /> : <iframe width="100%" height="100%" src={currentVideo.videoUrl} title={currentVideo.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />}
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