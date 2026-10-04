# Roadmap SEO, focus-emlyon.com

Rédigée le 04/10/2026. Remplace toute la stratégie « étudiante » antérieure.
Source de vérité pour les routines automatiques : elles exécutent la
prochaine tâche NON BLOQUÉE de ce fichier, dans l'ordre, et cochent ce
qui est fait.

## Cible

Le marché lyonnais tenu aujourd'hui par les vidéastes indépendants : mariages,
soirées privées et anniversaires, galas, soirées d'entreprise, bars et clubs,
aftermovies d'événements. Plus aucun contenu destiné aux étudiants ou aux
associations étudiantes : ce public passe par son association, il ne cherche
pas un prestataire sur Google.

Hors cible, décidé et à ne pas reproposer :
- séminaire, conférence, film corporate, témoignage client : mur d'agences
  (monolith-video, lesfilmsdegustave, studiok7, teazit, kabocharts, biux) ;
- vidéo immobilière : niche drone et pages spam ;
- Annecy et Isère : déjà tenus par des indépendants locaux ;
- pages « vidéaste + ville » en série avec seul le nom de ville qui change :
  Google les classe en doorway pages, sanction possible sur tout le site ;
- un article de blog par jour : sur des requêtes locales commerciales, une
  page de service bat un article.

## Ce que dit le marché (relevé le 04/10/2026)

Prix publiés par les concurrents, lus dans les extraits de recherche (les
pages elles-mêmes n'ont pas pu être ouvertes, à revérifier avant de citer) :

| Domaine | Offre | Prix affiché |
|---|---|---|
| marcvideo.com | mariage jusqu'au vin d'honneur | dès 799 € TTC |
| itsfugu.com | mariage 5 h, film 8 à 12 min | 1 200 € |
| itsfugu.com | événement 4 h, film 1 à 2 min | 450 € |
| lesasfrenchies.com | mariage 2 h, film 1 à 2 min | dès 1 270 € |
| lesmarieurs.fr | film de mariage | 1 990 € |
| deuxlumieresproduction.fr | mariage journée, 2 vidéastes | 2 200 € |
| mrv-studio-photo.fr | vidéo de mariage seule | dès 3 000 € |
| julienbf.fr | captation simple d'événement | environ 500 € |
| lucassajot.com | aftermovie | dès 2 500 € HT |
| linkaband.com | vidéaste soirée Lyon, 1 h à 3 h | 260 à 560 € |

Constats utiles :
- « vidéaste mariage Lyon » : uniquement des indépendants en page 1, dont
  plusieurs qui ne sont pas lyonnais (sylvainb-videaste.com basé à Arras,
  callenes-films.com à Bordeaux) et compensent par des centaines de pages
  ville. Une équipe réellement locale est un argument et un signal.
- « vidéaste mariage pas cher Lyon », « vidéaste anniversaire Lyon »,
  « vidéaste soirée privée Lyon », « aftermovie soirée club Lyon »,
  « vidéo soirée péniche Lyon » : page 1 faible (annuaires, pages modèles
  nationales, YouTube). Ce sont les portes d'entrée.
- Personne ne promet une livraison rapide du film monté, sauf castillealma.com
  (format court livré en 24 h). Argument fort SI FOCUS peut le tenir.
- Aucun vidéaste n'a de page sur les lieux lyonnais (Halle Tony Garnier,
  péniches, Sucrière, domaines de mariage) : tout est libre.

## Phase 0, cette semaine : débloquer l'indexation

Pourquoi une seule page indexée : jusqu'au 21/09 toutes les routes
renvoyaient une 404 ; le sitemap n'a pas été relu depuis le 20/01/2026 ; et
surtout, le site étant une application React, chaque URL renvoyait le même
HTML vide avec le titre et la description de l'accueil. Pour un domaine sans
autorité, Google voyait sept copies de la même page. **Corrigé le 04/10 :**
chaque page est pré-rendue au build avec son propre titre, sa description,
son canonical et son texte.

- [ ] **Mathieu : déployer.** `npm run build`, puis uploader TOUT le contenu
  de `dist/` sur Hostinger, y compris le dossier `_p/` et le `.htaccess`.
  Contrôle : afficher le code source de focus-emlyon.com/prestations, le
  texte de la page doit y apparaître. /contact/ doit rediriger vers /contact,
  une URL inventée doit renvoyer 404, un ancien article 410.
- [ ] **Mathieu : Search Console, 15 minutes.** Inspection d'URL sur
  /prestations, puis « Tester l'URL en ligne » : vérifier « L'URL peut être
  indexée » et le HTML affiché. Puis « Demander l'indexation ». Refaire pour
  /portfolio, /contact, / (quota d'environ 10 par jour). Dans Sitemaps,
  resoumettre sitemap.xml. Dans Pages, noter la raison exacte de
  non-indexation des URLs (« Détectée, actuellement non indexée » ou
  « Explorée, actuellement non indexée ») et la coller dans le journal.
- [ ] **Mathieu : renseigner le Website ID Umami** dans `src/lib/analytics.ts`.
  Sans lui, aucune demande de devis n'est attribuable à une page.
- [ ] **Mathieu : créer la fiche Google Business Profile.** Levier n°1 sur
  « vidéaste Lyon » : la carte occupe le haut de page sur ces requêtes.
  Nom réel uniquement (« FOCUS »), pas de mot-clé dans le nom (suspension).
  Catégorie principale « Vidéaste », secondaire « Service de production
  vidéo ». Adresse masquée, zone desservie : Lyon et métropole. Vérification
  par vidéo : prévenir emlyon si l'adresse est le campus d'Écully.

## Phase 1, décisions de Mathieu, bloquantes pour la suite

- [ ] **D1, statut et fiscalité.** Les mentions légales décrivent FOCUS comme
  une « initiative étudiante sous la tutelle du Conseil de Corporation des
  Étudiants d'emlyon ». Facturer des mariages à des particuliers, en
  concurrence directe avec des professionnels, est exactement ce que vise la
  règle fiscale des 4P (Produit, Public, Prix, Publicité, BOFIP
  BOI-IS-CHAMP-10-50-10-20) : risque de requalification en activité
  lucrative. La section « Benefits » de l'accueil écrit en clair que des
  subventions institutionnelles permettent des tarifs plus bas qu'une
  agence : c'est l'argument à retirer en premier, il documente la
  concurrence par l'argent public. À valider avec le CCE et un comptable
  avant toute promotion de l'offre mariage. Conditionne aussi le SIRET
  (PagesJaunes) et la facturation.
- [ ] **D2, grille tarifaire réelle.** Formules et prix FOCUS. Sans elle,
  pas de page /tarifs, or les requêtes « prix » sont celles où les annuaires
  seuls occupent le terrain.
- [ ] **D3, premiers films de mariage.** Le site annonce « Mariages » mais le
  portfolio n'en contient aucun. Aucune page mariage crédible sans au moins
  deux films. Piste : deux ou trois mariages de lancement, contre un avis
  Google, l'accord de diffusion des mariés et celui du lieu.
- [ ] **D4, délai de livraison tenable** (teaser sous 72 h ?). À n'afficher
  que s'il est tenu à chaque fois.
- [ ] **D6, une fiche par film du portfolio** : lieu, date, client ou
  organisateur, nombre de cadreurs, durée du tournage, ce qui était difficile,
  et l'accord du client pour être cité. Cinq lignes par film suffisent.
- [ ] **D7, des galas filmés** à ajouter au portfolio, s'il y en a.
- [ ] **D5, drone.** Page ou mention uniquement avec un télépilote déclaré.

## Phase 2, pages piliers (semaines 2 à 6)

Une page par service, 800 à 1 500 mots, avec films du portfolio intégrés,
déroulé de la prestation, formules, FAQ, appel à /contact, et données
structurées Service. /prestations devient la page carrefour qui relie les
piliers.

- [x] (04/10) Titre et description de l'accueil : viser « vidéaste Lyon » et retirer
  « tarifs étudiants ». Non bloqué.
- [x] (04/10) P1 `/videaste-evenementiel-lyon` (soirées, galas, soirées d'entreprise).
  Non bloqué : le portfolio existe.
- [x] (04/10) P2 `/aftermovie-lyon`. Non bloqué : c'est le cœur du portfolio.
- [x] (04/10) P3 `/videaste-soiree-privee-lyon` (anniversaire, soirée privée). SERP
  faible : linkaband et une page modèle nationale (eqwazproduction).
- [ ] P4 `/tarifs`. Bloqué par D2.
- [ ] P5 `/videaste-mariage-lyon`. Bloqué par D1 et D3.

## Phase 3, longue traîne peu disputée (semaines 6 à 12)

- [ ] Une page par film du portfolio, `/realisations/<slug>` : contexte,
  lieu, déroulé, film intégré, données VideoObject. **Bloqué par D6** : le
  portfolio ne donne qu'une ligne par film, écrire ces pages maintenant
  obligerait à inventer le lieu, le client ou le dispositif.
- [x] (04/10) `/aftermovie-soiree-club-lyon` (boîtes, bars, péniches comme Le Sonic
  ou La Marquise) : aucune page dédiée chez les concurrents, et un client
  qui revient chaque mois.
- [ ] `/videaste-gala-lyon`. **Bloqué par D7** : tant qu'aucun gala ne figure
  au portfolio, cette page doublonnerait `/videaste-evenementiel-lyon` (qui
  couvre déjà les galas) et les deux se feraient concurrence.
- [ ] Mariage, après D1 et D3 : mairie seule (`/video-mariage-civil-mairie-lyon`),
  teaser rapide (si D4), ouest lyonnais (Écully, Tassin, Dardilly, Monts
  d'Or : proximité réelle, SERP faible).
- [ ] Pages lieu : seulement après un vrai tournage sur place.
- [ ] Blog, une fois par semaine au plus, uniquement en soutien des piliers :
  « combien coûte un vidéaste de mariage à Lyon », « vidéaste seul ou
  équipe », « aftermovie de soirée : ce qu'il faut prévoir ».

## Phase 4, autorité (en continu)

- [ ] **Page associations d'emlyon** : elle présente encore L2M, dissoute,
  comme association audiovisuelle. Demander à la vie associative de la
  remplacer par FOCUS avec un lien. Meilleur lien possible pour ce site.
- [ ] Partenaires déjà filmés (Raid Hannibal, DJI Lyon, OJO, ANRH,
  Croiz'pak, Neptuniades, Plumes du Lyon) : crédit « vidéo réalisée par
  FOCUS » avec lien, idéalement vers la page réalisation.
- [ ] Annuaires : mariages.net (fiche gratuite), PagesJaunes (SIRET requis),
  Linkaband (commission d'environ 20 % sur les réservations), Bing Places,
  Apple Business Connect. Même nom et mêmes coordonnées partout.
- [ ] Avis : les demander à chaque client à la livraison, même message pour
  tous, lien ou QR code. Aucune contrepartie, aucun avis de membre.

## Comment on mesure

- J+21 après déploiement : au moins 6 pages indexées dans la Search Console.
- J+60 : impressions hors marque sur des requêtes « … Lyon ».
- Fiche Google : appels, clics site, demandes d'itinéraire.
- Umami : demandes de devis par page d'arrivée.
