/**
 * Rubrique "Ils nous font confiance".
 *
 * Pour remplacer un placeholder par un vrai logo :
 *  1. deposer le fichier dans src/assets/ (webp ou png, fond transparent de preference)
 *  2. l'importer en haut de ce fichier
 *  3. renseigner "logo" sur la ligne correspondante, et "url" si le partenaire a un site
 * Le rendu bascule tout seul du placeholder au logo.
 */

interface Partenaire {
  nom: string;
  logo?: string;
  url?: string;
}

const partenaires: Partenaire[] = [
  { nom: "Raid EY" },
  { nom: "Neptuniades" },
  { nom: "Croiz'Pak" },
  { nom: "Salon du Livre" },
  { nom: "Adhémar" },
  { nom: "Bargain" },
];

const IlsNousFontConfiance = () => {
  return (
    <section id="confiance" className="py-24 bg-transparent relative overflow-hidden">
      {/* Halos d'ambiance, comme sur les autres sections */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[150px]"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm tracking-[0.3em] text-primary font-bold uppercase">Nos partenaires</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wider mb-4">
            <span className="gradient-text">ILS NOUS FONT CONFIANCE</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Associations, entreprises et événements qui nous ont confié leurs images.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {partenaires.map((partenaire) => {
            const contenu = partenaire.logo ? (
              <img
                src={partenaire.logo}
                alt={partenaire.nom}
                loading="lazy"
                className="max-h-14 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            ) : (
              <span className="text-sm font-semibold tracking-wide text-muted-foreground/70 group-hover:text-foreground transition-colors duration-300 text-center px-2">
                {partenaire.nom}
              </span>
            );

            const classeCarte =
              "group flex items-center justify-center aspect-[3/2] rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2";

            return partenaire.url ? (
              <a
                key={partenaire.nom}
                href={partenaire.url}
                target="_blank"
                rel="noopener noreferrer"
                className={classeCarte}
              >
                {contenu}
              </a>
            ) : (
              <div key={partenaire.nom} className={classeCarte}>
                {contenu}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IlsNousFontConfiance;
