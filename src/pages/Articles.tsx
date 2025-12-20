import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Les secrets d'un aftermovie réussi",
    excerpt: "Découvrez les techniques et astuces pour créer des aftermovies qui captivent votre audience et immortalisent vos événements.",
    category: "Tutoriel",
    date: "15 Dec 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "L'évolution de la vidéo associative",
    excerpt: "Comment les associations étudiantes révolutionnent leur communication grâce à l'audiovisuel professionnel.",
    category: "Tendances",
    date: "10 Dec 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Matériel essentiel pour débutants",
    excerpt: "Guide complet du matériel audiovisuel indispensable pour démarrer dans la production vidéo de qualité.",
    category: "Guide",
    date: "5 Dec 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Coulisses du WEI 2024",
    excerpt: "Retour sur la production de l'aftermovie le plus ambitieux de l'année avec l'équipe FOCUS.",
    category: "Behind the Scenes",
    date: "28 Nov 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Montage vidéo : les bases",
    excerpt: "Apprenez les fondamentaux du montage vidéo avec les logiciels professionnels utilisés par FOCUS.",
    category: "Tutoriel",
    date: "20 Nov 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Interview : La passion audiovisuelle",
    excerpt: "Rencontre avec les membres du bureau FOCUS et leur vision pour l'avenir de l'association.",
    category: "Interview",
    date: "15 Nov 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
  },
];

const Articles = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange"></div>
              <span className="text-sm tracking-[0.3em] text-orange font-bold uppercase">Blog & Actualités</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange"></div>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
              <span className="gradient-text">ARTICLES</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Tutoriels, coulisses, tendances : plongez dans l'univers audiovisuel avec FOCUS.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:block hidden"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                  {articles[0].category}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {articles[0].readTime}
                  </span>
                </div>
                
                <Button
                  variant="outline"
                  className="w-fit border-primary/50 text-primary hover:bg-primary/10 group/btn"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-primary">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta/5 via-transparent to-orange/5 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl tracking-wider mb-6">
            <span className="gradient-text">RESTEZ INFORMÉS</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Suivez nos actualités et ne manquez aucun de nos nouveaux articles.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-magenta to-orange hover:from-magenta/90 hover:to-orange/90 text-foreground font-bold magenta-glow px-10 py-7 text-lg"
          >
            <a
              href="https://www.instagram.com/focus_music_club/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Suivre sur Instagram
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
