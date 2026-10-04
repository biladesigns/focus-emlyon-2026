import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, X } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useJsonLd } from "@/lib/useJsonLd";
import { Realisation, toutesRealisations } from "@/lib/realisations";

const ORIGIN = "https://focus-emlyon.com";

export interface QuestionReponse {
  question: string;
  reponse: string;
}

interface PagePilierProps {
  chemin: string;
  titreSeo: string;
  descriptionSeo: string;
  service: string;
  surtitre: string;
  titre: string;
  chapo: string;
  realisations: string[];
  titreRealisations: string;
  faq: QuestionReponse[];
  ctaTitre: string;
  ctaTexte: string;
  children: ReactNode;
}

export const Section = ({ titre, children }: { titre: string; children: ReactNode }) => (
  <section className="py-10">
    <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6 text-foreground">{titre}</h2>
    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2">
      {children}
    </div>
  </section>
);

const PagePilier = ({
  chemin,
  titreSeo,
  descriptionSeo,
  service,
  surtitre,
  titre,
  chapo,
  realisations,
  titreRealisations,
  faq,
  ctaTitre,
  ctaTexte,
  children,
}: PagePilierProps) => {
  const [video, setVideo] = useState<Realisation | null>(null);
  const url = `${ORIGIN}${chemin}`;
  const films = realisations
    .map((t) => toutesRealisations.find((r) => r.title === t))
    .filter((r): r is Realisation => Boolean(r));

  useJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service,
        serviceType: service,
        url,
        description: descriptionSeo,
        areaServed: { "@type": "City", name: "Lyon" },
        provider: { "@type": "Organization", name: "FOCUS emlyon", url: ORIGIN },
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.reponse },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: ORIGIN },
          { "@type": "ListItem", position: 2, name: "Prestations", item: `${ORIGIN}/prestations` },
          { "@type": "ListItem", position: 3, name: service, item: url },
        ],
      },
    ],
  });

  return (
    <Layout>
      <SEO title={titreSeo} description={descriptionSeo} canonical={url} />

      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <nav aria-label="Fil d'Ariane" className="max-w-3xl mx-auto mb-8 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/prestations" className="hover:text-foreground">Prestations</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service}</span>
          </nav>
          <div className="max-w-3xl mx-auto">
            <span className="text-sm tracking-[0.3em] text-primary font-bold uppercase">{surtitre}</span>
            <h1 className="font-display text-4xl md:text-6xl tracking-wider mt-4 mb-6">
              <span className="gradient-text">{titre}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{chapo}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-magenta to-orange text-foreground font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
              >
                Demander un devis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/60 text-foreground font-bold tracking-wider uppercase text-sm hover:border-primary/60 transition-colors"
              >
                Voir le portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">{children}</div>
      </div>

      {films.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-8 text-center">{titreRealisations}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {films.map((film) => (
                <button
                  key={film.title}
                  type="button"
                  onClick={() => film.videoUrl && setVideo(film)}
                  className="group text-left bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={film.thumbnail} alt={`${film.title}, film réalisé par FOCUS`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1">{film.title}</h3>
                    <p className="text-muted-foreground text-sm">{film.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-6">Questions fréquentes</h2>
            <div className="divide-y divide-border/50 border-y border-border/50">
              {faq.map((f) => (
                <details key={f.question} className="group py-4">
                  <summary className="cursor-pointer list-none flex justify-between gap-4 font-bold text-foreground text-lg">
                    {f.question}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{f.reponse}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center bg-card/50 border border-border/50 rounded-2xl p-8 md:p-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide mb-4">{ctaTitre}</h2>
            <p className="text-lg text-muted-foreground mb-8">{ctaTexte}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-magenta to-orange text-foreground font-bold tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
            >
              Décrire mon événement
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Dialog open={video !== null} onOpenChange={(ouvert) => !ouvert && setVideo(null)}>
        <DialogContent className="bg-card border-2 border-border max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text flex justify-between items-center">
              {video?.title}
              <Button variant="ghost" size="icon" onClick={() => setVideo(null)} className="hover:bg-muted">
                <X className="w-5 h-5" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          {video && (
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
              <video src={video.videoUrl} title={video.title} controls autoPlay className="w-full h-full" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default PagePilier;
