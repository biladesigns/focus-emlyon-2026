import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { trouverArticle } from "@/lib/articles";
import { useJsonLd } from "@/lib/useJsonLd";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const ORIGIN = "https://focus-emlyon.com";

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const ArticlePage = () => {
  const { slug } = useParams();
  const article = trouverArticle(slug);

  const url = article ? `${ORIGIN}/articles/${article.slug}` : "";
  const image = article?.image ? `${ORIGIN}${article.image}` : `${ORIGIN}/og-image.jpg`;

  // Appele inconditionnellement : les hooks ne doivent jamais etre
  // derriere un return anticipe. Le hook est inerte si article est absent.
  useJsonLd(
    article
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: article.titre,
              description: article.description,
              datePublished: article.date,
              dateModified: article.date,
              image,
              author: { "@type": "Organization", name: article.auteur, url: ORIGIN },
              publisher: {
                "@type": "Organization",
                name: "FOCUS emlyon",
                logo: { "@type": "ImageObject", url: `${ORIGIN}/logo.png` },
              },
              mainEntityOfPage: { "@type": "WebPage", "@id": url },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Accueil", item: ORIGIN },
                { "@type": "ListItem", position: 2, name: "Articles", item: `${ORIGIN}/articles` },
                { "@type": "ListItem", position: 3, name: article.titre, item: url },
              ],
            },
          ],
        }
      : null
  );

  // Slug inconnu ou brouillon : on renvoie sur l'index plutot que d'exposer une page vide.
  if (!article) return <Navigate to="/articles" replace />;


  return (
    <Layout>
      <SEO
        title={article.titre}
        description={article.description}
        canonical={url}
        ogImage={image}
        type="article"
      />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Tous les articles
            </Link>

            <h1 className="font-display text-4xl md:text-5xl tracking-wider mb-6">
              <span className="gradient-text">{article.titre}</span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground pb-8 mb-10 border-b border-border/50">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.minutes} min de lecture
              </span>
              <span>Par {article.auteur}</span>
            </div>

            <div
              className="article-contenu"
              dangerouslySetInnerHTML={{ __html: article.html }}
            />

            <aside className="mt-16 p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 text-center">
              <h2 className="font-display text-2xl tracking-wide mb-3">
                Un projet vidéo en tête ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Devis gratuit sous 24h, par une équipe basée à Lyon.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-magenta via-purple to-blue text-white font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticlePage;
