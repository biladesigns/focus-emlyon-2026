import { lazy, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes, { Pages } from "./AppRoutes";
import { chargerAnalytics } from "@/lib/analytics";

const pages: Pages = {
  Index: lazy(() => import("./pages/Index")),
  Prestations: lazy(() => import("./pages/Prestations")),
  Portfolio: lazy(() => import("./pages/Portfolio")),
  Contact: lazy(() => import("./pages/Contact")),
  Articles: lazy(() => import("./pages/Articles")),
  Article: lazy(() => import("./pages/Article")),
  MentionsLegales: lazy(() => import("./pages/MentionsLegales")),
  PolitiqueConfidentialite: lazy(() => import("./pages/PolitiqueConfidentialite")),
  NotFound: lazy(() => import("./pages/NotFound")),
  VideasteEvenementielLyon: lazy(() => import("./pages/VideasteEvenementielLyon")),
  AftermovieLyon: lazy(() => import("./pages/AftermovieLyon")),
  VideasteSoireePriveeLyon: lazy(() => import("./pages/VideasteSoireePriveeLyon")),
};

const queryClient = new QueryClient();

const App = () => {
  // Chargee une seule fois au montage. Inerte tant que le Website ID
  // n'est pas renseigne dans src/lib/analytics.ts.
  useEffect(() => {
    chargerAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes pages={pages} />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
