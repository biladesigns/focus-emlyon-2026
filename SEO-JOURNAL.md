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

**Décision révisée le 23/09/2026.** Mathieu a choisi la publication
automatique en connaissance de cause, le risque lui ayant été exposé
explicitement. La décision lui appartient, elle est donc appliquée.

Garde-fous en place, à ne pas retirer sans décision écrite :
- l'agent n'écrit QUE s'il trouve une SERP réellement faible. Ne rien
  publier un jour donné est un résultat attendu, pas un échec ;
- il vérifie l'absence de doublon avant d'écrire ;
- il lui est interdit d'inventer un tarif, un délai, un nombre de clients
  ou une référence FOCUS ;
- il doit faire passer `npm run build` avant de pousser, le build échouant
  volontairement si le frontmatter est incomplet ;
- il journalise ici la SERP observée qui justifie chaque publication.

Fait important qui réduit le risque : **le site se déploie à la main.**
L'agent pousse sur `main`, rien n'atteint la production tant que Mathieu
n'a pas fait `npm run build` puis uploadé `dist/`. La publication reste
donc sous son contrôle de fait.

Le risque résiduel assumé : la politique Google « scaled content abuse »
vise le volume et l'intention, pas l'outil. Si le rythme de publication
devient élevé et que les articles ne sont pas relus, le profil du site se
rapproche de celui des sites désindexés en mars 2024. **À surveiller au
point hebdomadaire :** si le nombre d'articles publiés dépasse nettement
ce qu'un humain peut relire, ramener la cadence.

### 21/09/2026, aucune mesure d'audience installée

Le site n'a ni Umami, ni Plausible, ni Matomo, ni GA. La routine §1bis impose
de connaître la part réelle du SEO avant d'y investir. Elle est aujourd'hui
non mesurable.

Tant que ce n'est pas corrigé, toute priorisation SEO est un pari. À traiter
avant la première revue.

### 21/09/2026, mesure d'audience : Umami, pas Google Analytics

La politique de confidentialité du site affirme qu'aucun cookie de tracking
n'est utilisé. Installer GA rendrait cette page fausse et imposerait un
bandeau de consentement, qui coûte des visiteurs.

Umami est sans cookie et sans donnée personnelle : pas de bandeau, et la
politique reste vraie. **Ne repropose pas GA sur ce site** sans avoir d'abord
réécrit la politique de confidentialité et ajouté un bandeau conforme.

### 21/09/2026, plus aucun chiffre de vues sur le site

« 68 700 vues » mesurait l'audience des clients de FOCUS, pas sa capacité à
livrer. Un prospect n'achète pas des vues, et 68 700 sur dix films fait
environ 7 000 par vidéo : trop peu pour convaincre, et intransférable à son
propre événement.

Remplacé par « 10 productions livrées », calculé depuis les données du
portfolio, donc impossible à laisser périmer. Deux projets portaient aussi
des vues écrites en dur (125K, 89K) qui n'étaient plus affichées nulle part.

**Le bon chiffre reste à trouver** : le délai de livraison d'un aftermovie
est le meilleur candidat, c'est le critère d'achat décisif sur ce produit.
En attente des chiffres réels de Mathieu.

### 23/09/2026, premier article : le creneau etudiant, pas le generique

SERP observee avant d'ecrire, comme l'impose la routine §2.

**« prix aftermovie » : mur commercial, abandonne.** La premiere page est
tenue par des agences video dediees (Global Films, Kactus, Cliple,
Mvoproduction, Komuniweb, WePlus). Elles ont des sites entiers sur ce sujet.
Aucune qualite de redaction ne comble cet ecart. **Ne repropose pas cette
requete** tant que le domaine n'a pas d'autorite.

**« aftermovie + gala etudiant / BDE » : SERP faible, retenu.** La page est
occupee par des prestataires d'evenementiel (salle, animation, photo) qui ne
font pas de video, par des agences corporate qui s'adressent a des marques, et
par des videos YouTube. Personne n'a ecrit le guide destine a une association
etudiante qui veut faire filmer son evenement.

L'angle commercial est net : les agences annoncent 5 000 a 20 000 €, un BDE
n'a pas ce budget. FOCUS est une association etudiante qui filme des
evenements etudiants, la legitimite est reelle et non fabriquee.

Article publie : `/articles/aftermovie-gala-etudiant-budget-delais`.
Requete visee : « aftermovie gala etudiant ». Longue traine assumee, faible
volume, mais trafic qualifie : le lecteur est un prospect.

**A verifier a la revue d'octobre** : impressions et position moyenne sur
cette requete. Si la page monte en impressions sans bouger en position, c'est
que Google la teste, pas qu'elle approche (routine §1). Ne pas conclure trop
tot.

Ce qui invaliderait la decision : zero impression apres six semaines
d'indexation confirmee, ce qui signifierait que la requete n'a pas de volume
reel et qu'il faut viser plus large.

### 23/09/2026, premieres donnees Search Console reelles

Relevees directement dans la GSC, periode 21/06 au 20/09/2026.

- 20 clics, 334 impressions, CTR 6 %, position moyenne 7,2.
- **Pages** : `focus-emlyon.com/` fait 20 clics et 329 impressions. La
  variante `www.` fait 5 impressions. **Aucune autre page n'a jamais recu
  une seule impression.** Ni portfolio, ni prestations, ni contact.
- **Indexation** : 1 page dans l'index, 4 non indexees (2 redirections,
  1 introuvable 404, 1 canonique). Google ne connait que 5 URLs.
- **Sitemap** : soumis le 28/12/2025, **derniere lecture le 20/01/2026**,
  soit huit mois sans relecture.
- **Requetes** : sur 17 requetes nommees, une seule est commerciale
  (« entreprise montage video lyon », 1 impression, 0 clic). Tout le reste
  est navigationnel : focus emlyon, focus lyon, focus association.

Lecture : ces chiffres confirment le diagnostic du 21/09. Google a lu le
sitemap en janvier, a trouve des 404 sur toutes les routes internes, et
n'est jamais revenu. Le site n'a donc jamais capte la moindre demande
commerciale, non par manque de contenu, mais parce qu'il n'y avait rien
d'atteignable a indexer.

Precaution de lecture : la somme des clics par requete nommee (2) est tres
inferieure au total (20), les requetes rares etant anonymisees. La part
marque contre hors-marque n'est donc PAS mesurable ici, conformement au
piege documente dans la routine. Ne pas en tirer de pourcentage.

### 24/09/2026, deuxieme article : le territoire WEI, pas encore le gala a nouveau

Territoire explore : evenements etudiants, sous-theme WEI / voyage
d'integration. Choisi pour deux raisons : different du territoire couvert
la veille (gala), et coherent avec la saisonnalite de fin septembre, periode
ou les WEI se calent pour un depart en octobre.

8 requetes candidates testees en recherche web reelle : « aftermovie WEI
weekend integration prix », « videaste WEI ecole de commerce », « aftermovie
WEI budget association etudiante », « captation video WEI integration BDE »,
« comment trouver un videaste pour son WEI », « budget videaste WEI combien
coute », « filmer voyage integration etudiant conseils », « prix aftermovie »
(deja exclue le 23/09).

**SERP observee, requete par requete :**

- « aftermovie WEI » (variantes) : uniquement des aftermovies YouTube publies
  par des ecoles elles-memes, et des sites d'organisation de sejours WEI
  (planete-wei.com, zetrip.fr, funbreak.fr) qui vendent le voyage, pas la
  video. Aucun prestataire video n'a de page dediee a ce sujet.
- « comment trouver un videaste pour son WEI » : la premiere page renvoie
  des annuaires generalistes de freelances (Gens de Confiance, Linkaband,
  FlashBiz) et des guides pour choisir un videaste de mariage ou
  d'entreprise. Rien ecrit pour une association etudiante qui organise un
  WEI specifiquement.
- « budget videaste WEI combien coute » : melange de guides de prix videaste
  mariage/entreprise (hors sujet pour un BDE) et d'un article funbreak.fr
  sur le cout global du sejour WEI, pas de la video. Aucune page ne repond
  a la question posee.
- Fait interessant trouve en cours de recherche : zetrip.fr, dans son
  article « Tendances WEI 2026 », affirme qu'un videaste ou photographe
  professionnel suit desormais la quasi-totalite des WEI, pour un budget
  moyen annonce de 500 a 800 €. Chiffre attribue explicitement a cette
  source dans l'article, ce n'est pas une donnee FOCUS.

**Mur commercial : aucun.** Pas d'agence video avec un site entier sur ce
sujet, contrairement a « prix aftermovie » generique. SERP faible, retenue.

Article publie : `/articles/aftermovie-wei-budget-videaste`. Requete visee :
« aftermovie WEI ». Angle : ce qui differe d'un gala (duree de presence sur
plusieurs jours, hebergement du videaste, droit a l'image plus sensible en
contexte de soiree, format vertical pour Instagram/TikTok).

Maillage : lien ajoute depuis le nouvel article vers l'article gala du
23/09, et reciproquement, un lien a ete ajoute a la fin de l'article gala
vers le nouvel article WEI, pour qu'aucun des deux ne reste orphelin.

**A verifier a la revue d'octobre**, comme pour l'article du 23/09 :
impressions et position sur « aftermovie WEI ». Meme reserve : une hausse
d'impressions sans hausse de position veut dire que Google teste la page,
pas qu'elle progresse.

### 25/09/2026, troisième article : territoire recrutement, plus l'événementiel

Territoire exploré : associations et clubs, sous thème recrutement de
nouveaux membres, différent des deux premiers articles qui portaient sur
la couverture d'un événement (gala le 23/09, WEI le 24/09). Choisi pour
deux raisons : territoire encore non traité, et cohérent avec la
saisonnalité de fin septembre, période de campagne d'adhésion et de forum
des assos dans la quasi totalité des écoles.

10 requêtes candidates testées en recherche web réelle : « vidéo de
recrutement association étudiante BDE », « comment recruter nouveaux
membres association étudiante avec une vidéo », « film de présentation
junior entreprise », « vidéo teaser recrutement bureau association
étudiante », « vidéo forum des associations étudiantes », « budget vidéo
recrutement BDE combien ça coûte », « vidéaste pour association étudiante
Lyon », « vidéo de présentation club sportif étudiant recrutement »,
« comment faire une vidéo teaser pour candidater au bureau BDE », « teaser
vidéo recrutement BDE prix », « vidéaste association étudiante devis ».

**SERP observée, requête par requête :**

- « film de présentation junior entreprise » et « budget/teaser vidéo
  recrutement BDE prix » : **mur commercial**, mêmes agences vidéo
  corporate que sur « prix aftermovie » (topovideo, playplay, pixmove,
  mavideocorporate, biux.fr, jumpstartstudio, etc.), toutes répondent à
  une entreprise qui recrute des salariés, pas à une association
  étudiante. Dès qu'une requête contient « recrutement » + « vidéo » +
  « prix »/« budget », elle tombe dans ce mur générique marque employeur.
  Abandonné, comme prévu par la décision du 23/09.
- « vidéaste association étudiante devis » : un concurrent direct existe
  (rsfilmmaking.fr/associations, page dédiée « vidéaste et réalisation de
  vidéos associatifs »), mais générique associations, pas spécifique
  étudiant ni recrutement. Signal faible, pas un mur.
- « vidéo de présentation club sportif étudiant recrutement », « comment
  faire une vidéo teaser pour candidater au bureau BDE » : mauvaise
  intention de requête (CV vidéo de sportif pour être recruté par un
  club, candidature individuelle), écartées car hors sujet de l'offre
  FOCUS.
- **« vidéo de recrutement association étudiante » (phrase exacte) : SERP
  faible, retenue.** Résultats seulement institutionnels et génériques
  (Panopto pour l'admission universitaire, CNAM/ESGT, capcampus,
  LaToileScoute), aucune agence vidéo dédiée, aucun média. Personne n'a
  écrit le guide du teaser de recrutement pour une association
  étudiante, à la différence de la vidéo marque employeur d'entreprise
  qui, elle, est un territoire saturé.

Article publié : `/articles/video-recrutement-association-etudiante`.
Requête visée : « vidéo de recrutement association étudiante ». Angle :
distinguer ce format d'un aftermovie d'événement et d'une vidéo marque
employeur corporate, calendrier de tournage en amont de la campagne
(filmer la vie de l'asso plusieurs semaines avant, pas en urgence),
brief, droit à l'image des membres identifiés qui témoignent.

Maillage : liens réciproques ajoutés entre ce nouvel article et les deux
articles événementiels (gala du 23/09, WEI du 24/09), lien vers /contact
en place, `npm run build` vérifié avant push.

**À vérifier à la revue d'octobre**, comme pour les deux premiers
articles : impressions et position sur « vidéo de recrutement association
étudiante ». Même réserve : une hausse d'impressions sans hausse de
position signifie que Google teste la page, pas qu'elle progresse.

---

## Partie B, journal daté

| Date | Action | Résultat |
|---|---|---|
| 21/09/2026 | Relevé des codes HTTP de toutes les routes en production | 404 sur tout sauf `/`. Cause racine trouvée. |
| 21/09/2026 | Ajout de `public/.htaccess` (rewrite SPA, MIME du manifest, cache, compression) | Corrigé en local. **En attente de redéploiement.** |
| 21/09/2026 | Retrait du `canonical` statique de `index.html` | Chaque page avait deux canonical, Google les ignore tous dans ce cas. Une seule balise désormais, la bonne. Vérifié. |
| 21/09/2026 | JSON-LD sorti de react-helmet-async vers un hook | En 2.0.5, un enfant `<script>` dans `<Helmet>` fait échouer tout le bloc en silence : les pages perdaient title, canonical et og:*. |
| 21/09/2026 | Création de `/articles` et `/articles/:slug` | Infrastructure prête, aucun article publié. BlogPosting et BreadcrumbList vérifiés. |
| 21/09/2026 | Correctif `.htaccess` déployé, vérifié en production | Toutes les routes répondent 200. Manifest servi en `application/manifest+json`. |
| 21/09/2026 | Mesure d'audience Umami installée, inerte tant que le Website ID n'est pas renseigné | Vérifié : aucun script, aucune requête, aucun cookie avant configuration. |
| 21/09/2026 | Suivi de conversion sur le formulaire (`devis-demande`, `devis-echoue`) | Vérifié de bout en bout : type de projet et page d'origine remontés. Un envoi raté est tracé, pour qu'une panne ne passe plus inaperçue. |
| 21/09/2026 | Suppression de tous les chiffres de vues | Remplacés par un décompte calculé sur les données. Description SEO du portfolio corrigée. |
| 23/09/2026 | Chiffre de la page portfolio passe a « +100 productions livrées » | Demande de Mathieu. Ce n'est plus un calcul sur les données du site mais une donnée métier revendiquée, à tenir à jour à la main. |
| 23/09/2026 | SERP examinée sur « prix aftermovie » puis « aftermovie gala étudiant » | La première est un mur commercial, abandonnée. La seconde est vide pour cette audience, retenue. |
| 23/09/2026 | Premier article publié | `/articles/aftermovie-gala-etudiant-budget-delais`, BlogPosting et BreadcrumbList vérifiés, lien interne vers `/contact` en place. |
| 23/09/2026 | Deux routines cloud créées | `trig_01TC3KHLCeBxyZMSJWruchNT` article quotidien 7h23 Paris, `trig_01W51ZDy5Qjab2dhbDPHWVVs` point SEO le lundi 9h37 Paris. Les deux lisent ce journal avant d'agir. |
| 23/09/2026 | Relevé Search Console effectué en direct | 20 clics et 334 impressions sur 3 mois, toutes sur la page d'accueil. Sitemap non relu depuis le 20/01/2026. 1 page indexée sur 5 connues. |
| 23/09/2026 | Sitemap resoumis dans la GSC | « URL envoyées » passe du 28/12/2025 au 23/09/2026. « Dernière lecture » reste au 20/01/2026 tant que Google n'est pas repassé : c'est l'indicateur à surveiller. |
| 23/09/2026 | Inspection d'URL sur /portfolio | « Google ne reconnaît pas cette URL », dernière exploration « sans objet ». La page n'a jamais été explorée, preuve directe de l'effet des 404. |
| 23/09/2026 | Demandes d'indexation manuelles : **échec, quota quotidien dépassé** | Aucune demande n'a abouti. À refaire un autre jour pour /portfolio, /prestations, /contact, /articles et l'article. Quota Google d'environ une dizaine d'URLs par jour. |
| 24/09/2026 | SERP examinée sur le territoire WEI (8 requêtes testées) | Aucun mur commercial ni d'autorité : ni agence vidéo dédiée, ni média. SERP faible retenue sur « aftermovie WEI ». |
| 24/09/2026 | Deuxième article publié | `/articles/aftermovie-wei-budget-videaste`. Lien interne réciproque ajouté avec l'article gala du 23/09, `npm run build` vérifié avant push. |
| 25/09/2026 | SERP examinée sur le territoire recrutement associatif (11 requêtes testées) | « prix/teaser recrutement BDE » et « film de présentation junior entreprise » : mur commercial marque employeur, abandonnées. « vidéo de recrutement association étudiante » : SERP faible, retenue. |
| 25/09/2026 | Troisième article publié | `/articles/video-recrutement-association-etudiante`. Liens internes réciproques ajoutés avec les articles gala et WEI, `npm run build` vérifié avant push. |

---

## À traiter au prochain passage

- [x] ~~Confirmer que le `.htaccess` est déployé~~ : fait le 21/09, toutes les routes en 200.
- [x] ~~Soumettre le sitemap~~ : resoumis le 23/09/2026.
- [ ] **Vérifier que « Dernière lecture » du sitemap a dépassé le 20/01/2026.** Tant que cette date ne bouge pas, Google n'est pas repassé et rien ne s'indexera.
- [ ] **Refaire les demandes d'indexation manuelles** (quota dépassé le 23/09) : /portfolio, /prestations, /contact, /articles, /articles/aftermovie-gala-etudiant-budget-delais.
- [ ] Renseigner le Website ID Umami dans `src/lib/analytics.ts`, puis attendre 30 jours de données avant de conclure quoi que ce soit.
- [ ] Seulement ensuite : première vraie revue mensuelle, sur des données valides.
