import { useEffect } from "react";

/**
 * Injecte un bloc JSON-LD dans le <head>, le retire au demontage.
 *
 * Pourquoi pas react-helmet-async : en 2.0.5, un enfant <script> dans
 * <Helmet> fait echouer silencieusement TOUT le bloc, la page perd alors
 * title, canonical et og:*. Verifie sur ce projet. Helmet garde les metas,
 * le JSON-LD passe par ici.
 *
 * Passer `null` est autorise : le hook est alors inerte. Cela permet de
 * l'appeler inconditionnellement, avant tout return anticipe, comme
 * l'exigent les regles des hooks.
 */
export const useJsonLd = (schema: unknown | null) => {
  // On depend de la chaine, pas de l'objet : un objet litteral change
  // d'identite a chaque rendu et relancerait l'effet en boucle.
  const serialise = schema ? JSON.stringify(schema) : null;

  useEffect(() => {
    if (!serialise) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = serialise;
    document.head.appendChild(script);

    return () => script.remove();
  }, [serialise]);
};
