import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { articlesPublies } from "@/lib/articles";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const ArticlesPage = () => {
  return (
    <Layout>
      <SEO
        title="Articles | Conseils Vidéo & Production Audiovisuelle"
        description="Nos conseils sur la production vidéo à Lyon : aftermovies, captations d'événements, courts-métrages. Retours d'expérience de l'équipe FOCUS."
        keywords="conseils vidéo Lyon, blog production audiovisuelle, aftermovie conseils, FOCUS emlyon articles"
        canonical="https://focus-emlyon.com/articles"
      />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue"></div>
              <span className="text-sm tracking-[0.3em] text-blue font-bold uppercase">Nos conseils</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue"></div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wider mb-6">
              <span className="gradient-text">ARTICLES</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ce qu'on apprend sur le terrain, en tournage comme en montage.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          {articlesPublies.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center py-16">
              <p className="text-muted-foreground text-lg">
                Les premiers articles arrivent très bientôt.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-magenta via-purple to-blue text-white font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
              >
                Parler de votre projet
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articlesPublies.map((article) => (
                <Link
                  key={article.slug}
                  to={`/articles/${article.slug}`}
                  className="group flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2"
                >
                  {article.image && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.minutes} min
                      </span>
                    </div>

                    <h2 className="font-display text-xl tracking-wide mb-3 text-foreground group-hover:text-primary transition-colors">
                      {article.titre}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {article.description}
                    </p>

                    <span className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-primary">
                      Lire l'article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
