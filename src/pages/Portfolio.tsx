import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, ArrowRight, X } from "lucide-react";

import { featuredProjects, projects } from "@/lib/realisations";

const categories = ["Tous", "Aftermovies", "Courts-métrages", "Captation"];

// Chiffre d'activite revendique par l'association, volontairement superieur
// aux projets exposes sur le site : le portfolio n'est qu'une selection.
// A tenir a jour a la main, il ne se deduit pas du contenu.
const nombreDeProductions = "+100";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [playerOpen, setPlayerOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<typeof featuredProjects[0] | null>(null);
  const filteredProjects = activeCategory === "Tous" ? projects : projects.filter(p => p.category === activeCategory);
  const handlePlayVideo = (project: typeof featuredProjects[0]) => {
    setCurrentVideo(project);
    setPlayerOpen(true);
  };
  return <Layout>
      <SEO
        title="Portfolio | Nos Réalisations Vidéo Lyon"
        description="Découvrez nos réalisations vidéo à Lyon : aftermovies événementiels, courts-métrages, captations. Productions réalisées pour des associations, des entreprises et des événements."
        keywords="portfolio vidéo Lyon, aftermovie exemple, court-métrage étudiant, réalisation vidéo emlyon, FOCUS portfolio"
        canonical="https://focus-emlyon.com/portfolio"
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue"></div>
              <span className="text-sm tracking-[0.3em] text-blue font-bold uppercase">Nos Créations</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue"></div>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
              <span className="gradient-text">PORTFOLIO</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              Aftermovies, courts-métrages et captations
            </p>

            <div className="text-4xl md:text-5xl font-display tracking-wider gradient-text">
              {nombreDeProductions} PRODUCTIONS LIVRÉES
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
              <span className="gradient-text">PROJETS PHARES</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Nos réalisations les plus emblématiques
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => <div key={project.id} className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{
            animationDelay: `${index * 150}ms`
          }} onClick={() => handlePlayVideo(project)}>
                {/* Background Gradient Glow */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700`}></div>
                
                {/* Card */}
                <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={project.thumbnail} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-background/20 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-magenta to-orange flex items-center justify-center magenta-glow">
                          <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    
                                      </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Accent Line */}
                    <div className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${project.gradient} opacity-50`}></div>
                    
                    <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                      {project.subtitle}
                    </span>
                    
                    <h3 className="font-display text-2xl md:text-3xl tracking-wider mb-3 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Voir le projet</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8 pt-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "bg-gradient-to-r from-magenta to-orange text-foreground font-bold" : "border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50"}>
                {category}
              </Button>)}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map(project => <div key={project.id} className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer" onClick={() => project.videoUrl && handlePlayVideo({ ...project, id: String(project.id), subtitle: project.category, stats: { duration: "" }, gradient: "from-magenta to-orange" })}>
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>
                  
                  {/* Play Button */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center magenta-glow">
                        <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>



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
                <video width="100%" height="100%" src={currentVideo.videoUrl} title={currentVideo.title} controls autoPlay className="w-full h-full" />
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-3 py-1 bg-gradient-to-r from-blue to-purple rounded-full text-xs font-bold">
                  {currentVideo.subtitle}
                </span>
                <span className="text-muted-foreground">{currentVideo.description}</span>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </Layout>;
};
export default Portfolio;