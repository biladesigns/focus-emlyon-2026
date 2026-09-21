/**
 * Rubrique "Ils nous font confiance".
 *
 * Les logos sont poses sur une pastille claire. Ce n'est pas un choix
 * esthetique gratuit : deux des logos (DJI, OJO) sont sombres et deviennent
 * illisibles poses directement sur le bleu nuit du site. La pastille garde
 * chaque marque lisible et fidele a sa charte.
 *
 * Ajouter un partenaire :
 *  1. deposer le logo detoure dans src/assets/ (PNG a fond transparent)
 *  2. l'importer ci-dessous
 *  3. ajouter une ligne dans "partenaires", avec "url" si le partenaire a un site
 * Sans "logo", la carte affiche simplement le nom : c'est le mode placeholder.
 */
import logoDji from "@/assets/partenaire-dji-lyon.png";
import logoAnrh from "@/assets/partenaire-anrh.png";
import logoOjo from "@/assets/partenaire-ojo.png";
import logoRaidHannibal from "@/assets/partenaire-raid-hannibal.png";

interface Partenaire {
  nom: string;
  logo?: string;
  url?: string;
}

const partenaires: Partenaire[] = [
  { nom: "Raid Hannibal", logo: logoRaidHannibal },
  { nom: "DJI Store Lyon", logo: logoDji },
  { nom: "ANRH", logo: logoAnrh },
  { nom: "OJO", logo: logoOjo },
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partenaires.map((partenaire) => {
            const contenu = partenaire.logo ? (
              <img
                src={partenaire.logo}
                alt={partenaire.nom}
                loading="lazy"
                className="max-h-20 max-w-[72%] w-auto object-contain"
              />
            ) : (
              <span className="text-sm font-semibold tracking-wide text-muted-foreground text-center px-3">
                {partenaire.nom}
              </span>
            );

            // Pastille claire pour les logos, carte sombre pour les placeholders :
            // un placeholder est du texte, il reste lisible sur fond sombre.
            const classeCarte = partenaire.logo
              ? "group flex items-center justify-center aspect-[3/2] rounded-2xl bg-white/90 hover:bg-white p-5 ring-1 ring-white/10 hover:ring-primary/40 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-2"
              : "group flex items-center justify-center aspect-[3/2] rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2";

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
