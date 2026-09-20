#!/usr/bin/env node
/**
 * Génère public/sitemap.xml avec un lastmod réel par page,
 * pris sur la date du dernier commit touchant la source de la page.
 * Évite les dates écrites en dur qui périment silencieusement.
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const ORIGIN = 'https://focus-emlyon.com';

// Chaque route et les fichiers dont dépend son contenu.
const ROUTES = [
  { path: '/',                          changefreq: 'weekly',  priority: '1.0', sources: ['src/pages/Index.tsx', 'src/components'] },
  { path: '/prestations',               changefreq: 'monthly', priority: '0.9', sources: ['src/pages/Prestations.tsx'] },
  { path: '/portfolio',                 changefreq: 'weekly',  priority: '0.8', sources: ['src/pages/Portfolio.tsx'] },
  { path: '/contact',                   changefreq: 'monthly', priority: '0.8', sources: ['src/pages/Contact.tsx', 'src/components/Contact.tsx'] },
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

const body = ROUTES.map(({ path, changefreq, priority, sources }) => `  <url>
    <loc>${ORIGIN}${path}</loc>
    <lastmod>${lastModified(sources)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
);

console.log(`sitemap.xml genere : ${ROUTES.length} URLs`);
