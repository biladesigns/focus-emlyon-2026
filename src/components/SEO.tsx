import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEO = ({
  title = "FOCUS | Production Audiovisuelle Lyon",
  description = "FOCUS, association audiovisuelle emlyon business school. Production vidéo professionnelle à Lyon : aftermovies, courts-métrages, captations événementielles, clips.",
  keywords = "production vidéo Lyon, aftermovie Lyon, vidéaste Lyon, FOCUS emlyon",
  canonical = "https://focus-emlyon.com",
  ogImage = "https://focus-emlyon.com/og-image.jpg",
}: SEOProps) => {
  const fullTitle = title.includes("FOCUS") ? title : `${title} | FOCUS emlyon`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

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
