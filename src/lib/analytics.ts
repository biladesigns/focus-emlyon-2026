/**
 * Mesure d'audience, via Umami.
 *
 * Pourquoi Umami et pas Google Analytics : la politique de confidentialite
 * du site affirme qu'aucun cookie de tracking n'est utilise. Installer GA
 * rendrait cette page fausse et imposerait un bandeau de consentement.
 * Umami ne pose pas de cookie et ne collecte pas de donnee personnelle :
 * pas de bandeau, et la politique reste vraie.
 *
 * MISE EN ROUTE
 * 1. creer un compte sur cloud.umami.is (ou heberger Umami soi-meme)
 * 2. ajouter le site, recuperer le "Website ID"
 * 3. le coller dans UMAMI_WEBSITE_ID ci-dessous
 * Tant que l'identifiant n'est pas renseigne, rien n'est charge : aucune
 * requete inutile, aucune erreur en console.
 *
 * Cet identifiant est public par conception, il part dans le bundle.
 */

const UMAMI_WEBSITE_ID = "REMPLACER_PAR_VOTRE_WEBSITE_ID";
const UMAMI_SRC = "https://cloud.umami.is/script.js";

export const analyticsConfigure = () =>
  !UMAMI_WEBSITE_ID.includes("REMPLACER_PAR_VOTRE_WEBSITE_ID");

declare global {
  interface Window {
    umami?: {
      track: (evenement: string, donnees?: Record<string, unknown>) => void;
    };
  }
}

/** Charge le script une seule fois. Umami suit ensuite les changements
 *  d'URL tout seul, y compris ceux de React Router. */
export const chargerAnalytics = () => {
  if (!analyticsConfigure()) return;
  if (document.querySelector(`script[data-website-id]`)) return;

  const script = document.createElement("script");
  script.src = UMAMI_SRC;
  script.defer = true;
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  document.head.appendChild(script);
};

/**
 * Enregistre un evenement nomme.
 * Silencieux si la mesure n'est pas configuree ou pas encore chargee :
 * un echec de suivi ne doit jamais casser un parcours utilisateur.
 */
export const suivreEvenement = (
  evenement: string,
  donnees?: Record<string, unknown>
) => {
  try {
    window.umami?.track(evenement, donnees);
  } catch {
    /* on ignore volontairement */
  }
};

/** Evenements suivis. Centralises ici pour eviter les fautes de frappe
 *  qui creeraient des evenements fantomes cote Umami. */
export const EVENEMENTS = {
  devisDemande: "devis-demande",
  devisEchoue: "devis-echoue",
} as const;
