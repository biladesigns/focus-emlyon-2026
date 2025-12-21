import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Play, Eye, ExternalLink } from "lucide-react";
const categories = ["Tous", "Inside", "Aftermovies", "Courts-métrages", "Clips"];
const projects = [{
  id: 1,
  title: "Aftermovie WEI 2024",
  category: "Aftermovies",
  thumbnail: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
  views: "125K",
  videoUrl: "https://www.youtube.com/watch?v=example1"
}, {
  id: 2,
  title: "Inside MUSIC'ALL",
  category: "Inside",
  thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  views: "45K",
  videoUrl: "https://www.youtube.com/watch?v=example2"
}, {
  id: 3,
  title: "Court-métrage 'Décalage'",
  category: "Courts-métrages",
  thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
  views: "32K",
  videoUrl: "https://www.youtube.com/watch?v=example3"
}, {
  id: 4,
  title: "Inside NOISE",
  category: "Inside",
  thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
  views: "28K",
  videoUrl: "https://www.youtube.com/watch?v=example4"
}, {
  id: 5,
  title: "Aftermovie Gala 2024",
  category: "Aftermovies",
  thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=600&h=400&fit=crop",
  views: "89K",
  videoUrl: "https://www.youtube.com/watch?v=example5"
}, {
  id: 6,
  title: "Clip 'Nuit Blanche'",
  category: "Clips",
  thumbnail: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?w=600&h=400&fit=crop",
  views: "156K",
  videoUrl: "https://www.youtube.com/watch?v=example6"
}, {
  id: 7,
  title: "Inside RAID AVENTURE",
  category: "Inside",
  thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=600&h=400&fit=crop",
  views: "67K",
  videoUrl: "https://www.youtube.com/watch?v=example7"
}, {
  id: 8,
  title: "Court-métrage 'Éclipse'",
  category: "Courts-métrages",
  thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
  views: "41K",
  videoUrl: "https://www.youtube.com/watch?v=example8"
}];
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const filteredProjects = activeCategory === "Tous" ? projects : projects.filter(p => p.category === activeCategory);
  return <Layout>
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
              Découvrez nos réalisations audiovisuelles qui cumulent plus de
            </p>
            
            <div className="text-4xl md:text-5xl font-display tracking-wider gradient-text">
              687 000 VUES
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-8">
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
            {filteredProjects.map(project => <div key={project.id} className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center magenta-glow">
                      <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                  
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
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Eye className="w-4 h-4" />
                    <span>{project.views} vues</span>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta/5 via-transparent to-blue/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">
            <span className="gradient-text">VOIR PLUS DE VIDÉOS</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Retrouvez toutes nos productions sur notre compte instagram 
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold magenta-glow px-10 py-7 text-lg">
            <a href="https://www.youtube.com/@focusemlyon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Notre Compte Instagram   
            </a>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Portfolio;