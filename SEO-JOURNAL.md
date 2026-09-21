# Journal SEO, focus-emlyon.com

Créé le 21/09/2026. À relire **en entier** au début de chaque revue mensuelle,
avant de regarder la moindre donnée (routine §5).

---

## Partie A, décisions engageantes

### 21/09/2026, toute donnée Search Console antérieure est inexploitable

Toutes les URLs sauf `/` renvoyaient une 404 Hostinger : `/contact`,
`/portfolio`, `/prestations`, `/mentions-legales`. Vérifié en relevant les
codes HTTP un par un. La navigation interne masquait le problème, React
Router la gère côté client, donc rien ne se voyait en naviguant sur le site.

Conséquence : Google n'a jamais pu indexer autre chose que la page d'accueil.
Toute analyse de positions ou d'impressions sur les pages internes avant la
correction porte sur des pages que Google ne pouvait pas atteindre.

**Ne pas conclure quoi que ce soit** des données antérieures au redéploiement
du `.htaccess`. Attendre un cycle de recrawl complet avant la première vraie
revue.

### 21/09/2026, pas de publication automatique d'articles

Décision de ne PAS mettre en place un cron publiant un article par jour.

Trois raisons, dans l'ordre d'importance :

1. La politique Google « scaled content abuse » est neutre sur la méthode :
   ce qui compte est le volume, l'intention et la valeur, pas l'outil. Passer
   un site de 7 pages à plus de 300 en un an, en publication automatique et
   sans relecture, avec pour objectif affiché d'obtenir des devis, c'est le
   profil exact des sites désindexés par action manuelle en mars 2024.
2. La routine §2 rend obligatoire l'examen de la SERP avant d'écrire.
   Un cron ne peut pas faire cet arbitrage. Cette règle a été écrite après un
   échec réel, la contourner par automatisation revient à la supprimer.
3. La routine §3.1 impose de vérifier qu'une page n'existe pas déjà. En
   publication automatique, la cannibalisation est une question de semaines.

**Ne repropose pas la publication automatique quotidienne.** Si le sujet
revient, la forme acceptable est : un cron qui prépare des *brouillons*
accompagnés d'un relevé de SERP, validés à la main avant publication, à une
cadence d'un à deux par semaine.

### 21/09/2026, aucune mesure d'audience installée

Le site n'a ni Umami, ni Plausible, ni Matomo, ni GA. La routine §1bis impose
de connaître la part réelle du SEO avant d'y investir. Elle est aujourd'hui
non mesurable.

Tant que ce n'est pas corrigé, toute priorisation SEO est un pari. À traiter
avant la première revue.

---

## Partie B, journal daté

| Date | Action | Résultat |
|---|---|---|
| 21/09/2026 | Relevé des codes HTTP de toutes les routes en production | 404 sur tout sauf `/`. Cause racine trouvée. |
| 21/09/2026 | Ajout de `public/.htaccess` (rewrite SPA, MIME du manifest, cache, compression) | Corrigé en local. **En attente de redéploiement.** |
| 21/09/2026 | Retrait du `canonical` statique de `index.html` | Chaque page avait deux canonical, Google les ignore tous dans ce cas. Une seule balise désormais, la bonne. Vérifié. |
| 21/09/2026 | JSON-LD sorti de react-helmet-async vers un hook | En 2.0.5, un enfant `<script>` dans `<Helmet>` fait échouer tout le bloc en silence : les pages perdaient title, canonical et og:*. |
| 21/09/2026 | Création de `/articles` et `/articles/:slug` | Infrastructure prête, aucun article publié. BlogPosting et BreadcrumbList vérifiés. |

---

## À traiter au prochain passage

- [ ] Confirmer que le `.htaccess` est bien déployé : les routes doivent répondre 200.
- [ ] Soumettre le sitemap dans la Search Console et demander l'indexation des pages internes.
- [ ] Installer une mesure d'audience, puis relever la répartition des sources sur 30 jours.
- [ ] Seulement ensuite : première vraie revue mensuelle, sur des données valides.
