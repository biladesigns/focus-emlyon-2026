#!/usr/bin/env node
/**
 * Pre-rendu : ecrit un vrai HTML par route, avec son title, sa
 * description, son canonical et son contenu. Sans ca, chaque URL renvoie
 * le meme <div id="root"></div> vide et Google n'indexe que l'accueil.
 *
 * Les pages vont dans dist/_p/ et non a cote d'index.html : un dossier
 * dist/articles/ ferait rediriger /articles vers /articles/ par Apache.
 * Le .htaccess fait la correspondance /contact -> /_p/contact.html.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = "dist";
const { render, articlesPublies } = await import(
  pathToFileURL(join("dist-ssr", "entry-server.js")).href
);

const ROUTES = [
  "/",
  "/prestations",
  "/portfolio",
  "/contact",
  "/videaste-evenementiel-lyon",
  "/aftermovie-lyon",
  "/videaste-soiree-privee-lyon",
  "/aftermovie-soiree-club-lyon",
  "/articles",
  "/mentions-legales",
  "/politique-confidentialite",
  ...articlesPublies.map((a) => `/articles/${a.slug}`),
];

// Balises du gabarit que chaque page redefinit via <SEO> : les garder
// donnerait deux titles, deux descriptions, et un og:url pointant vers
// l'accueil sur toutes les pages.
const REDEFINIES = [
  /\s*<title>[\s\S]*?<\/title>/,
  /\s*<meta name="(description|keywords|robots)"[^>]*>/g,
  /\s*<meta property="og:(type|url|title|description|image)"[^>]*>/g,
  /\s*<meta name="twitter:(url|title|description|image)"[^>]*>/g,
];

let gabarit = readFileSync(join(DIST, "index.html"), "utf8");
for (const motif of REDEFINIES) gabarit = gabarit.replace(motif, "");

const page = (url) => {
  const { html, head } = render(url);
  if (!/<title[^>]*>[^<]+<\/title>/.test(head)) {
    throw new Error(`Pre-rendu : aucun <title> pour ${url}`);
  }
  return gabarit
    .replace("</head>", `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
};

const ecrire = (fichier, contenu) => {
  mkdirSync(dirname(fichier), { recursive: true });
  writeFileSync(fichier, contenu);
};

for (const url of ROUTES) {
  const fichier = url === "/" ? join(DIST, "index.html") : join(DIST, "_p", `${url.slice(1)}.html`);
  ecrire(fichier, page(url));
}
ecrire(join(DIST, "_p", "404.html"), page("/404"));

console.log(`pre-rendu : ${ROUTES.length} pages + 404`);
