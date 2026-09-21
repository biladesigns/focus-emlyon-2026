#!/usr/bin/env node
/**
 * Génère public/sitemap.xml avec un lastmod réel par page,
 * pris sur la date du dernier commit touchant la source de la page.
 * Évite les dates écrites en dur qui périment silencieusement.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ORIGIN = 'https://focus-emlyon.com';

// Chaque route et les fichiers dont dépend son contenu.
const ROUTES = [
  { path: '/',                          changefreq: 'weekly',  priority: '1.0', sources: ['src/pages/Index.tsx', 'src/components'] },
  { path: '/prestations',               changefreq: 'monthly', priority: '0.9', sources: ['src/pages/Prestations.tsx'] },
  { path: '/portfolio',                 changefreq: 'weekly',  priority: '0.8', sources: ['src/pages/Portfolio.tsx'] },
  { path: '/contact',                   changefreq: 'monthly', priority: '0.8', sources: ['src/pages/Contact.tsx', 'src/components/Contact.tsx'] },
  { path: '/articles',                  changefreq: 'weekly',  priority: '0.7', sources: ['src/pages/Articles.tsx', 'src/content/articles'] },
  { path: '/mentions-legales',          changefreq: 'yearly',  priority: '0.3', sources: ['src/pages/MentionsLegales.tsx'] },
  { path: '/politique-confidentialite', changefreq: 'yearly',  priority: '0.3', sources: ['src/pages/PolitiqueConfidentialite.tsx'] },
];

const lastModified = (sources) => {
  const dates = sources
    .map((src) => {
      try {
        return execFileSync('git', ['log', '-1', '--format=%cs', '--', src], {
          encoding: 'utf8',
        }).trim();
      } catch {
        return '';
      }
    })
    .filter(Boolean);
  return dates.sort().at(-1) || new Date().toISOString().slice(0, 10);
};

// Articles markdown publies (les brouillons restent hors du sitemap).
const DOSSIER_ARTICLES = 'src/content/articles';
const articles = (() => {
  let fichiers = [];
  try {
    fichiers = readdirSync(DOSSIER_ARTICLES).filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
  return fichiers
    .map((fichier) => {
      const raw = readFileSync(join(DOSSIER_ARTICLES, fichier), 'utf8');
      const bloc = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      const champ = (cle) =>
        bloc.match(new RegExp(`^${cle}:\\s*(.+)$`, 'm'))?.[1].trim().replace(/^["']|["']$/g, '') ?? '';
      if (champ('brouillon') === 'true') return null;
      return {
        path: `/articles/${fichier.replace(/\.md$/, '')}`,
        changefreq: 'monthly',
        priority: '0.7',
        lastmod: champ('date') || lastModified([join(DOSSIER_ARTICLES, fichier)]),
      };
    })
    .filter(Boolean);
})();

const body = [...ROUTES, ...articles].map(({ path, changefreq, priority, sources, lastmod }) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${lastmod ?? lastModified(sources)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
);

console.log(`sitemap.xml genere : ${ROUTES.length} pages + ${articles.length} article(s)`);
