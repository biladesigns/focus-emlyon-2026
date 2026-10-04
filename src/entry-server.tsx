import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes, { Pages } from "./AppRoutes";
import { JsonLdCollector } from "@/lib/useJsonLd";
import Index from "./pages/Index";
import Prestations from "./pages/Prestations";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import VideasteEvenementielLyon from "./pages/VideasteEvenementielLyon";
import AftermovieLyon from "./pages/AftermovieLyon";
import VideasteSoireePriveeLyon from "./pages/VideasteSoireePriveeLyon";
import AftermovieSoireeClubLyon from "./pages/AftermovieSoireeClubLyon";
export { articlesPublies } from "@/lib/articles";

const pages: Pages = {
  Index,
  Prestations,
  Portfolio,
  Contact,
  Articles,
  Article,
  MentionsLegales,
  PolitiqueConfidentialite,
  NotFound,
  VideasteEvenementielLyon,
  AftermovieLyon,
  VideasteSoireePriveeLyon,
  AftermovieSoireeClubLyon,
};

export const render = (url: string) => {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const jsonLd: string[] = [];

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <JsonLdCollector.Provider value={jsonLd}>
        <QueryClientProvider client={new QueryClient()}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <StaticRouter location={url}>
              <AppRoutes pages={pages} />
            </StaticRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </JsonLdCollector.Provider>
    </HelmetProvider>,
  );

  const h = helmetContext.helmet;
  const head = [
    h?.title.toString(),
    h?.meta.toString(),
    h?.link.toString(),
    ...jsonLd.map(
      (s) => `<script type="application/ld+json" data-jsonld-ssr>${s.replace(/</g, "\\u003c")}</script>`,
    ),
  ]
    .filter(Boolean)
    .join("\n    ");

  return { html, head };
};
