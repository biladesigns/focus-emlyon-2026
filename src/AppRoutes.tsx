import { ComponentType, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export interface Pages {
  Index: ComponentType;
  Prestations: ComponentType;
  Portfolio: ComponentType;
  Contact: ComponentType;
  Articles: ComponentType;
  Article: ComponentType;
  MentionsLegales: ComponentType;
  PolitiqueConfidentialite: ComponentType;
  NotFound: ComponentType;
}

// Partage entre le navigateur (pages chargees a la demande) et le
// pre-rendu du build (pages importees directement) : une seule liste de routes.
const AppRoutes = ({ pages: p }: { pages: Pages }) => (
  <>
    <ScrollToTop />
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <Routes>
        <Route path="/" element={<p.Index />} />
        <Route path="/prestations" element={<p.Prestations />} />
        <Route path="/portfolio" element={<p.Portfolio />} />
        <Route path="/contact" element={<p.Contact />} />
        <Route path="/articles" element={<p.Articles />} />
        <Route path="/articles/:slug" element={<p.Article />} />
        <Route path="/mentions-legales" element={<p.MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<p.PolitiqueConfidentialite />} />
        <Route path="*" element={<p.NotFound />} />
      </Routes>
    </Suspense>
  </>
);

export default AppRoutes;
