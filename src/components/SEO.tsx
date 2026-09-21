import { Helmet } from "react-helmet-async";

const ORIGIN = "https://focus-emlyon.com";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  /** "article" pour un billet, "website" partout ailleurs. */
  type?: "website" | "article";
}

/**
 * ATTENTION : ne jamais ajouter ici d'enfant <script>, d'enfant conditionnel
 * ({x && <meta/>}) ni de tableau issu de .map(). react-helmet-async 2.0.5
 * abandonne alors TOUT le bloc en silence et la page perd title, canonical
 * et og:*. Pour les donnees structurees, utiliser le hook useJsonLd.
 */
const SEO = ({
  title = "FOCUS | Production Audiovisuelle Lyon",
  description = "FOCUS, association audiovisuelle emlyon business school. Production vidéo professionnelle à Lyon : aftermovies, courts-métrages, captations événementielles, clips.",
  keywords = "production vidéo Lyon, aftermovie Lyon, vidéaste Lyon, FOCUS emlyon",
  canonical = ORIGIN,
  ogImage = `${ORIGIN}/og-image.jpg`,
  type = "website",
}: SEOProps) => {
  const fullTitle = title.includes("FOCUS") ? title : `${title} | FOCUS emlyon`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
