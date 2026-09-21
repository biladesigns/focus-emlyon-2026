import { marked } from "marked";

export interface Article {
  slug: string;
  titre: string;
  description: string;
  date: string;          // ISO, ex. 2026-09-21
  auteur: string;
  motCle: string;        // requete visee, sert au journal SEO
  image?: string;        // chemin public, ex. /og-image.jpg
  brouillon: boolean;
  html: string;
  minutes: number;
}

/**
 * Parseur de frontmatter minimal (cle: valeur), sans dependance.
 * Volontairement strict : une cle inconnue est ignoree, une cle
 * obligatoire manquante fait echouer le build plutot que de
 * publier un article a moitie balise.
 */
const parseFrontmatter = (raw: string, fichier: string) => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`Article sans frontmatter : ${fichier}`);
  }
  const [, bloc, corps] = match;
  const meta: Record<string, string> = {};
  for (const ligne of bloc.split(/\r?\n/)) {
    if (!ligne.trim() || ligne.trimStart().startsWith("#")) continue;
    const sep = ligne.indexOf(":");
    if (sep === -1) continue;
    const cle = ligne.slice(0, sep).trim();
    const valeur = ligne.slice(sep + 1).trim().replace(/^["']|["']$/g, "");
    meta[cle] = valeur;
  }
  return { meta, corps };
};

const OBLIGATOIRES = ["titre", "description", "date", "motCle"] as const;

const fichiers = import.meta.glob("/src/content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const articles: Article[] = Object.entries(fichiers)
  .map(([chemin, raw]) => {
    const slug = chemin.split("/").pop()!.replace(/\.md$/, "");
    const { meta, corps } = parseFrontmatter(raw, chemin);

    for (const cle of OBLIGATOIRES) {
      if (!meta[cle]) throw new Error(`Article "${slug}" : champ "${cle}" manquant`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.date)) {
      throw new Error(`Article "${slug}" : date "${meta.date}" doit etre au format AAAA-MM-JJ`);
    }

    const mots = corps.trim().split(/\s+/).length;

    return {
      slug,
      titre: meta.titre,
      description: meta.description,
      date: meta.date,
      auteur: meta.auteur || "FOCUS emlyon",
      motCle: meta.motCle,
      image: meta.image,
      brouillon: meta.brouillon === "true",
      html: marked.parse(corps, { async: false }) as string,
      minutes: Math.max(1, Math.round(mots / 200)),
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

/** Articles reellement publies : les brouillons ne sortent jamais en prod. */
export const articlesPublies = articles.filter((a) => !a.brouillon);

export const trouverArticle = (slug?: string) =>
  articlesPublies.find((a) => a.slug === slug);
