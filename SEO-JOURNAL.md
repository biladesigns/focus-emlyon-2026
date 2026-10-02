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

### 26/09/2026, quatrième article : territoire avant/après la prestation, pas encore un quatrième type d'événement

Territoire exploré : avant et après la prestation (comment briefer un
vidéaste, quoi demander dans un devis, exploitation de la vidéo, durée de
conservation des rushes), différent des trois premiers articles qui
portaient tous sur un type d'événement ou une association (gala, WEI,
recrutement). Choisi pour sortir du seul axe « événement étudiant » et
couvrir un moment du parcours client pas encore traité : celui où un
prospect a déjà compris qu'il veut une vidéo, et cherche comment cadrer sa
demande.

8 requêtes candidates testées en recherche web réelle : « comment briefer
un vidéaste pour un événement étudiant », « quoi demander dans un devis
vidéo événementiel », « combien de temps garder les rushes vidéo après un
tournage », « que faire des vidéos après un événement étudiant réseaux
sociaux », « délai de livraison aftermovie combien de temps », « questions
à poser avant de signer un devis vidéo événementiel », « cahier des
charges vidéo événement associatif », « comment choisir un vidéaste pour
son événement étudiant ». Deux requêtes de vérification supplémentaires :
« brief vidéaste BDE association étudiante modèle » et « cahier des
charges vidéo BDE association étudiante ».

**SERP observée, requête par requête :**

- « quoi demander dans un devis vidéo événementiel », « délai de livraison
  aftermovie combien de temps », « questions à poser avant de signer un
  devis vidéo événementiel », « comment choisir un vidéaste pour son
  événement étudiant » : **mur commercial**, mêmes agences vidéo corporate
  que sur les recherches précédentes (globalfilms, biux, cliple,
  topovideo, leafproduction, videodevis, dm-video, etc.), toutes
  génériques entreprise ou mariage, aucune spécifique étudiant. Abandonné.
- « combien de temps garder les rushes vidéo après un tournage » : SERP
  faible (forums de monteurs, écoles de post-production) mais mauvaise
  intention de requête, l'audience est celle des professionnels de la
  vidéo qui archivent leur travail, pas celle d'une association qui
  embauche un prestataire. Écarté, hors sujet de l'offre FOCUS.
- « que faire des vidéos après un événement réseaux sociaux » : SERP
  occupée par des agences événementielles généralistes (stratégie
  réseaux sociaux d'un événement), intention diffuse, pas centrée sur la
  vidéo elle-même. Signal faible mais peu exploitable en l'état.
- « cahier des charges vidéo événement associatif » : mélange de modèles
  de CDC vidéo génériques et de CDC événementiel générique, aucun des deux
  ne couvre la combinaison vidéo + associatif étudiant. Signal faible,
  retenu comme piste secondaire mais pas prioritaire.
- **« comment briefer un vidéaste pour un événement étudiant » : SERP
  faible, retenue.** La requête générique (« comment briefer un
  vidéaste ») est tenue par des agences corporate (topovideo, braave,
  agence-maverick) qui parlent de charte de marque et de codecs de
  diffusion TV, hors sujet pour un BDE. Vérification complémentaire :
  « brief vidéaste BDE association étudiante modèle » et « cahier des
  charges vidéo BDE association étudiante » ne renvoient QUE des guides
  génériques de création d'association (HelloAsso, AssoConnect,
  L'Étudiant), aucun ne mentionne le brief vidéo. Personne n'a écrit ce
  guide pour une association étudiante.

Article publié : `/articles/briefer-videaste-evenement-etudiant`. Requête
visée : « briefer un vidéaste événement étudiant ». Angle : les cinq
informations à réunir avant le premier contact, le déroulé minute par
minute, les visages à ne pas manquer, le format de sortie à décider avant
le tournage, les références plutôt que des consignes vagues, et le droit
à l'image comme ligne à ne pas oublier dans le brief.

Maillage : liens réciproques ajoutés depuis et vers les trois articles
existants (gala du 23/09, WEI du 24/09, recrutement du 25/09), lien vers
`/contact` en place, `npm ci` puis `npm run build` vérifiés avant push.

**À vérifier à la revue d'octobre**, comme pour les trois premiers
articles : impressions et position sur « briefer un vidéaste événement
étudiant ». Même réserve : une hausse d'impressions sans hausse de
position signifie que Google teste la page, pas qu'elle progresse.

### 27/09/2026, cinquième article : territoire technique et juridique, la musique plutôt que le droit à l'image

Territoire exploré : technique et juridique (droit à l'image, musique et
droits, format et durée, livrables, sous-titres), différent des quatre
premiers articles qui portaient tous sur un type d'événement, une
association, ou le brief en amont. Choisi pour sortir de l'axe « parcours
client » et couvrir un point technique concret que les quatre premiers
articles mentionnent en passant (la musique dans le brief, le format
vertical) sans jamais le traiter au fond.

9 requêtes candidates testées en recherche web réelle : « droit à l'image
événement étudiant vidéo autorisation », « autorisation droit à l'image
étudiant modèle association BDE », « droit à l'image soirée étudiante
alcool photo vidéo », « quelle musique utiliser aftermovie sans droit
d'auteur », « musique libre de droit vidéo événementiel Instagram TikTok »,
« format vertical aftermovie réseaux sociaux », « combien de temps doit
durer un aftermovie », « livrables vidéo événement définition rushes
montage brut », « sous-titres vidéo événementielle réseaux sociaux
obligatoire ». Trois requêtes de vérification supplémentaires sur le
territoire musique : « peut-on utiliser une musique connue dans son
aftermovie droit d'auteur », « SACEM diffusion vidéo événement étudiant
musique », « aftermovie musique connue démonétisé YouTube Instagram coupé
son ».

**SERP observée, requête par requête :**

- « combien de temps doit durer un aftermovie » : **mur commercial**, la
  première page est tenue par des agences vidéo dont une lyonnaise
  (eoprod, studiok7.fr à Lyon, cliple, alfevents, clakprod, oopercast,
  peuplades.tv), toutes avec une page dédiée à la définition et à la durée
  d'un aftermovie. Abandonné.
- « format vertical aftermovie réseaux sociaux » : SERP occupée par des
  guides génériques de formats réseaux sociaux (metricool, digital-passengers,
  youlovewords) et des agences corporate (libelluleproductions, arimedias,
  krangfilms, lesasfrenchies) qui traitent le sujet en général, pas
  spécifiquement pour un aftermovie étudiant. Signal faible mais peu
  différenciant, écarté au profit d'une requête plus nette.
- « sous-titres vidéo événementielle réseaux sociaux obligatoire » : SERP
  tenue par des outils de sous-titrage (checksub, keepitsimple) et des
  agences (videomenthe, axio-formation, clakprod, mygustav, webfrance),
  proche d'un mur commercial d'éditeurs de logiciels. Abandonné.
- « livrables vidéo événement définition rushes montage brut » : mélange de
  sites de définition généralistes et d'agences corporate (aceproductions,
  tulipfilms, studiowebcast), pas d'angle étudiant. Signal faible, écarté
  au profit d'une requête plus nette.
- « droit à l'image événement étudiant » et « autorisation droit à l'image
  étudiant modèle association BDE » : **mur d'autorité et de templates**,
  tenu par des sites institutionnels (associations.gouv.fr, CCI, académies)
  et des mines de modèles génériques (edusign, dpo-partage, associationmodeemploi,
  juristique.org). Trop saturé pour espérer un positionnement, abandonné.
- « droit à l'image soirée étudiante alcool photo vidéo » : SERP faible
  mais matière insuffisante pour un article distinct de ce que l'article
  WEI du 24/09 couvre déjà sur ce point (« droit à l'image plus sensible en
  contexte de soirée »). Écarté pour éviter la cannibalisation.
- **« quelle musique utiliser aftermovie sans droit d'auteur » et ses
  variantes (SACEM, Content ID, « libre de droits ») : SERP faible,
  retenue.** Aucune agence vidéo ni média n'a écrit ce guide pour un
  aftermovie étudiant. Les résultats sont soit des banques de musique
  (envato, pixabay, musicscreen) qui vendent un produit sans expliquer le
  droit, soit des cabinets d'avocats et sites institutionnels (CNC, enssib,
  associations.gouv.fr, alwy-lawyers, kohenavocats.com) qui traitent le
  droit d'auteur musical en général, sans jamais le relier à un aftermovie
  ni à la confusion fréquente entre la déclaration SACEM de la soirée et
  les droits de synchronisation nécessaires pour la vidéo publiée après
  coup. Cette confusion précise, vérifiée via trois recherches
  complémentaires, n'est traitée nulle part.

Article publié : `/articles/musique-aftermovie-droit-auteur`. Requête
visée : « musique aftermovie droit d'auteur ». Angle : les deux droits à
réunir (éditeur et producteur), ce que fait réellement Content ID,
pourquoi la SACEM de la soirée ne couvre pas la vidéo publiée après, ce
que signifie vraiment « libre de droits », et comment vérifier ce point
dans un devis vidéaste.

Maillage : liens réciproques ajoutés depuis et vers les trois articles
événementiels existants (gala du 23/09, WEI du 24/09) et l'article brief
du 26/09, lien vers `/contact` en place, `npm ci` puis `npm run build`
vérifiés avant push.

**À vérifier à la revue d'octobre**, comme pour les quatre premiers
articles : impressions et position sur « musique aftermovie droit
d'auteur ». Même réserve : une hausse d'impressions sans hausse de
position signifie que Google teste la page, pas qu'elle progresse.

### 28/09/2026, territoire entreprises à Lyon : mur commercial confirmé sur toute la ligne, amélioration d'article à la place

Territoire exploré : entreprises à Lyon (séminaire, conférence, salon, film
de recrutement, témoignage client), seul grand territoire de la liste
encore jamais testé. 8 requêtes candidates testées en recherche web
réelle : « captation vidéo séminaire entreprise Lyon prix », « film de
recrutement entreprise Lyon vidéo », « vidéo témoignage client entreprise
Lyon », « captation conférence entreprise vidéaste budget », « vidéaste
étudiant entreprise Lyon », « vidéo entreprise petit budget alternative
agence vidéo », « filmer salon professionnel stand entreprise vidéo
aftermovie », « faire filmer un événement entreprise par une association
étudiante avantages ». Deux requêtes de vérification : « vidéo entreprise
réalisée par des étudiants qualité professionnelle », « pourquoi faire
appel à une école de commerce pour une vidéo entreprise ».

**SERP observée : mur commercial sur toutes les requêtes**, sans
exception. Dès qu'une requête associe « entreprise » et « Lyon » à
« vidéo »/« captation », la première page est occupée par des agences
lyonnaises dédiées avec des pages entières sur le sujet (monolith-video,
lesfilmsdegustave, teazit, kabocharts, bluevista, pioucube,
francoisxavierdriant, lucassajot, awastudio, biux, le-scribe-audio,
ned-photographie), certaines affichant même des tarifs précis (dès 450 à
875 € pour une captation simple, 2 100 € pour une conférence multicaméra).
Même les angles de niche testés (vidéaste étudiant, association étudiante
qui filme pour des entreprises) ne trouvent aucune page vide : soit des
annuaires de freelances génériques, soit rien de spécifique à retenir.
**Aucune requête retenue.** Conclusion cohérente avec le mur déjà
documenté le 23/09 et le 25/09 sur « prix aftermovie » et « budget vidéo
recrutement BDE » : toute requête orientée entreprise + Lyon + budget est
un territoire saturé par des agences professionnelles, à la différence des
requêtes orientées association étudiante qui restent vides.

**Niveau 2 appliqué** sur l'article du 23/09
(`/articles/aftermovie-gala-etudiant-budget-delais`), le premier publié et
le plus exposé à ce mur générique :
1. Comblé un manque de couverture réel : l'article ne mentionnait jamais
   le format vertical (Instagram/TikTok/stories), alors que les deux
   articles voisins (WEI du 24/09, recrutement du 25/09) le traitent
   comme un point important. Ajout d'une section « Pensez au format avant
   même le tournage ».
2. Ajouté un lien interne depuis une page bien plus importante que
   `/articles` : la carte « Aftermovie » de la page `/prestations`
   (composant `Services.tsx`) ne pointait vers aucun article. Elle pointe
   désormais vers cet article. C'est la première fois qu'une page de
   service commerciale relie vers un article de blog, jusqu'ici les
   articles n'étaient atteignables que depuis le lien « Articles » du
   header et entre eux.

Trouvaille utile trouvée en cours de recherche, sans lien direct avec la
tâche du jour mais à connaître : l'association **Ligne 2 Mire (L2M)**,
créée en 1991, était *l'* association audiovisuelle officielle d'emlyon
avant FOCUS. Selon un article de Mediacités (01/10/2024), l'école l'a
dissoute en octobre 2024 après une affaire de vidéos jugées humiliantes et
à caractère sexuel diffusées en interne. Plusieurs pages tierces avec une
autorité réelle référencent encore L2M comme association audiovisuelle
d'emlyon sans mentionner FOCUS : la page officielle
`em-lyon.com/en/student-associations`, `emlyon-alumni.com/en/group/l2m`,
et un article de « Monsieur Écoles de Commerce ». Sur le plan SEO pur,
ça veut dire qu'une recherche du type « association audiovisuelle emlyon »
peut encore renvoyer vers l'ancienne structure dissoute plutôt que vers
FOCUS, et qu'un lien depuis la page officielle de l'école vers
focus-emlyon.com n'existe apparemment pas. Sujet sensible (l'affaire de la
dissolution), à traiter avec Mathieu directement plutôt qu'à documenter
davantage ici : voir le message final.

### 28/09/2026, point hebdomadaire : cadence au seuil de vigilance, mesure d'audience toujours pas branchée

Revue du lundi. Aucun nouvel export Search Console trouvé dans le dépôt
depuis celui du 23/09 : impossible de vérifier positions, impressions ou
indexation cette semaine sans que Mathieu en fournisse un nouveau.

**Accès réseau sortant bloqué pour cette session.** Testé sur
`focus-emlyon.com` et sur `example.com` (témoin neutre) : les deux ont été
refusés par le proxy réseau de l'environnement. Impossible donc de relever
les codes HTTP en production ni de lire `sitemap.xml` en direct, ce que la
routine §2 demande pourtant. Contournement partiel via une recherche web
(`site:focus-emlyon.com`) : seule la page d'accueil ressort, ce qui est
cohérent avec l'état du 23/09 (1 page indexée sur 5 connues) mais n'est pas
une preuve d'indexation fiable, l'opérateur `site:` étant connu pour sous-
compter. **Si ce blocage se reproduit la semaine prochaine**, il faudra que
Mathieu ouvre l'accès réseau de cet environnement (menu de l'environnement
cloud, Modifier, accès réseau) pour que la revue hebdomadaire puisse à
nouveau vérifier le site en direct.

Vérifié localement, sans dépendance réseau : `npm ci` et `npm run build`
passent sans erreur, `dist/sitemap.xml` contient les 7 pages fixes et les
5 articles, `public/.htaccess` est bien copié dans `dist/`. Les 5 articles
publiés ont tous `brouillon: false`, aucun brouillon en attente.

Cadence : 5 articles publiés cinq jours de suite (23 au 27/09), le 28/09
étant une amélioration de l'article existant plutôt qu'un sixième article
neuf. Aucun des cinq n'a la moindre donnée de performance, la période GSC
connue s'arrêtant au 20/09, avant le premier article. C'est exactement le
seuil décrit dans la décision du 21/09 : « si le nombre d'articles publiés
dépasse nettement ce qu'un humain peut relire, ramener la cadence ».
Recommandation transmise à Mathieu dans le point de cette semaine, décision
laissée à sa main, pas prise ici.

Le Website ID Umami est toujours la valeur par défaut
(`REMPLACER_PAR_VOTRE_WEBSITE_ID`) dans `src/lib/analytics.ts`, sept jours
après la décision du 21/09 de l'installer. Tant qu'il n'est pas renseigné,
aucune des cinq publications ne peut être reliée à une visite réelle ni,
in fine, à une demande de devis.

### 29/09/2026, sixième article : territoire événements étudiants, le tournoi sportif plutôt que le gala ou le WEI à nouveau

Territoire exploré : événements étudiants, sous-thème compétition sportive
inter-écoles (tournoi, crit, coupe interne organisée par un Bureau des
Sports), différent des sous-thèmes déjà traités dans ce même grand
territoire (gala le 23/09, WEI le 24/09). Choisi parce que la liste des
territoires cite explicitement « raid sportif, tournoi, soirée
d'intégration, compétition inter-écoles » comme sous-thèmes distincts du
gala et du WEI, et que la saisonnalité de fin septembre correspond au
calendrier réel de plusieurs grands tournois inter-écoles de commerce
(Challenge Ecricome en avril, mais les BDS commencent leur saison sportive
et leurs premiers tournois internes dès la rentrée).

9 requêtes candidates testées en recherche web réelle : « aftermovie
tournoi sportif inter écoles de commerce », « captation vidéo crit inter
école commerce », « vidéaste tournoi sportif étudiant budget »,
« aftermovie compétition inter écoles de commerce », « vidéo soirée
d'intégration étudiante prix », « vidéaste bureau des sports école de
commerce BDS », « comment filmer un tournoi sportif inter-écoles
étudiant », « aftermovie crit business school prix », « vidéaste pour un
tournoi inter-écoles de commerce prix devis ». Trois requêtes de
vérification supplémentaires : « comment trouver un vidéaste pour un
événement sportif étudiant », « captation vidéo tournoi inter écoles
droit à l'image sportifs », « aftermovie tournoi sportif étudiant »
(phrase exacte).

**SERP observée, requête par requête :**

- « aftermovie tournoi sportif inter écoles de commerce », « aftermovie
  compétition inter écoles de commerce », « captation vidéo challenge
  ecricome » : uniquement des pages d'écoles ou d'associations qui
  présentent leur propre tournoi (TGO, LR Beach Cup, Challenge Ecricome,
  TEAMS), et des aftermovies déjà publiés sur YouTube ou Facebook par les
  organisateurs eux-mêmes. Aucun prestataire vidéo n'a de page dédiée à ce
  sujet précis.
- « vidéaste tournoi sportif étudiant budget » et « comment trouver un
  vidéaste pour un événement sportif étudiant » : mêmes symptômes que sur
  le territoire WEI du 24/09, à savoir des annuaires de freelances
  génériques (Linkaband, FlashBiz, ClicSoumission, LesBonsFreelances) et
  des vidéastes sport indépendants qui s'adressent à des clubs amateurs ou
  des marques (corentinbonnin.com, jpradel.com, emilelusant.com), jamais à
  une association étudiante qui organise elle-même la compétition.
- « vidéaste pour un tournoi inter-écoles de commerce prix devis » et
  « aftermovie crit business school prix » : mur de comparateurs
  génériques de tarifs vidéaste (codeur.com, starofservice, flashbiz,
  monpro, videastepro, ecoledesvideastes) et l'agence lyonnaise déjà
  repérée le 27/09 (studiok7.fr) sur une page aftermovie générique, aucune
  n'aborde la spécificité d'un tournoi multi-terrains.
- « captation vidéo crit inter école commerce », « vidéo soirée
  d'intégration étudiante prix », « vidéaste bureau des sports école de
  commerce BDS » : résultats hors sujet (pages pédagogiques,
  présentations institutionnelles de BDS sans angle vidéo) ou déjà
  couverts par l'article WEI existant (soirée étudiante). Écartées.
- « comment filmer un tournoi sportif inter-écoles étudiant » : guides
  techniques génériques de captation sportive (repaire.net, wearefamara,
  vuedestribunes), écrits pour un caméraman, pas pour l'association qui
  cherche à en embaucher un. Signal faible mais peu différenciant seul.
- « captation vidéo tournoi inter écoles droit à l'image sportifs » : mur
  d'autorité juridique (village-justice.com, fff.fr, regimbeau.eu,
  avocats), comme sur le droit à l'image générique déjà écarté le
  27/09. Traité comme sous-partie de l'article plutôt qu'en requête
  principale.

**Mur commercial : aucune agence vidéo avec une page dédiée à ce sujet
précis.** Les seuls murs rencontrés sont génériques (comparateurs de
tarifs vidéaste, annuaires de freelances, guides juridiques), pas
spécifiques à l'intersection tournoi sportif + association étudiante,
exactement le schéma déjà validé sur le territoire WEI. SERP faible
retenue.

Article publié : `/articles/aftermovie-tournoi-sportif-etudiant`. Requête
visée : « aftermovie tournoi sportif étudiant ». Angle : ce qui distingue
un tournoi (plusieurs terrains, plusieurs équipes dont certaines d'écoles
adverses, timing qui échappe à l'organisation) d'un gala ou d'un WEI, le
droit à l'image de participants qui n'appartiennent pas à l'association
organisatrice, et la mise en avant des sponsors, propre à ce format.

Maillage : liens réciproques ajoutés entre ce nouvel article et les
articles gala du 23/09 et brief vidéaste du 26/09 (qui listent déjà les
autres formats d'événements traités), lien interne du nouvel article vers
le WEI du 24/09 et le brief du 26/09, lien vers `/contact` en place.
`npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant push.

**À vérifier à la revue d'octobre**, comme pour les cinq premiers
articles : impressions et position sur « aftermovie tournoi sportif
étudiant ». Même réserve que les fois précédentes : une hausse
d'impressions sans hausse de position signifie que Google teste la page,
pas qu'elle progresse.

### 30/09/2026, septième article : territoire associations et clubs, la vidéo de sponsoring plutôt que le recrutement ou l'événement

Territoire exploré : associations et clubs, sous-thème financement par
les sponsors (junior-entreprises, clubs culturels et humanitaires inclus
dans les candidates testées), différent du recrutement de membres déjà
traité le 25/09 et des types d'événements déjà couverts (gala, WEI,
tournoi). Choisi parce que c'était le dernier grand sous-thème du
territoire « associations et clubs » encore jamais testé.

12 requêtes candidates testées en recherche web réelle : « vidéo junior
entreprise présentation client étudiant », « aftermovie association
humanitaire étudiante vidéo », « vidéo pour convaincre des sponsors
association étudiante », « captation spectacle étudiant théâtre danse
association vidéo », « vidéo bilan de mandat association étudiante
partenaires », « film promotionnel junior entreprise gagner des
missions », « vidéo teaser dossier de sponsoring association étudiante
partenaires », « aftermovie collecte de fonds action humanitaire
étudiante », « vidéo sponsoring association étudiante trouver des
partenaires », « pourquoi ajouter une vidéo à son dossier de sponsoring
BDE », « vidéo teaser édition précédente convaincre sponsor entreprise »,
« dossier de sponsoring vidéo étudiant exemple ».

**SERP observée, requête par requête :**

- « vidéo junior entreprise présentation client » et « film promotionnel
  junior entreprise gagner des missions » : **mur commercial**, mêmes
  agences corporate déjà rencontrées sur les territoires précédents
  (playplay, mvoproduction, kabocharts, cliple, pixmove, mavideocorporate),
  toutes génériques entreprise, aucune angle junior-entreprise étudiante.
  Abandonné.
- « aftermovie association humanitaire étudiante » : **mur commercial**,
  agences aftermovie génériques (and-friends, agencevideocom, i3a,
  cliple, pause-b-films), même profil que le mur déjà documenté le
  23/09 sur « prix aftermovie ». Abandonné.
- « captation spectacle étudiant théâtre danse association » : **mur
  commercial dédié**, plusieurs prestataires ont une page entière sur la
  captation de gala de danse ou de spectacle associatif (xaleo.fr,
  anaphora-productions, video-spectacle.com avec grille tarifaire
  publique, slisproductions, captavideo). Abandonné.
- « vidéo bilan de mandat association étudiante partenaires » et
  « aftermovie collecte de fonds action humanitaire étudiante » :
  mauvaise intention de requête ou sujet hors offre vidéo (reporting
  associatif générique, financement humanitaire sans angle vidéo).
  Écartées.
- « vidéo sponsoring association étudiante trouver des partenaires » et
  « dossier de sponsoring vidéo étudiant exemple » : résultats uniquement
  textuels sur la structure d'un dossier de sponsoring (hubspot,
  helloasso, kisskissbankbank, wweeddoo, cairn) ou des plateformes de
  mise en relation (boostmybde, trouvermonsponsor), aucun ne traite la
  vidéo comme pièce jointe au dossier. Signal faible, confirmé par les
  deux requêtes suivantes.
- **« pourquoi ajouter une vidéo à son dossier de sponsoring BDE » et
  « vidéo teaser dossier de sponsoring association étudiante » : SERP
  faible, retenue.** Un seul résultat proche existe (un billet de blog
  d'une société de production, airvideeteauprod.substack.com, sur la
  vidéo comme outil de financement de projet), mais ce n'est pas une page
  dédiée à ce sujet précis pour une association étudiante, et le reste de
  la page reste tenu par des guides de rédaction du dossier écrit ou par
  des agences de teaser vidéo événementiel générique (topovideo,
  storyfox, picmediaprod, videotelling) qui parlent d'entreprises, pas
  d'associations qui démarchent des sponsors. Personne n'a écrit ce
  guide.

**Mur commercial confirmé sur les angles junior-entreprise, humanitaire et
spectacle culturel testés isolément**, comme sur les territoires
précédents dès qu'une requête ressemble à un format déjà vendu par une
agence dédiée. Signal faible net uniquement sur l'angle vidéo de
sponsoring, transversal à tous les types d'association.

Article publié : `/articles/video-dossier-sponsoring-association-etudiante`.
Requête visée : « vidéo dossier de sponsoring association étudiante ».
Angle : ce que la vidéo apporte que le dossier écrit ne transmet pas,
pourquoi elle diffère d'un aftermovie classique (public, durée, contenu),
le bon moment pour la préparer (à la fin de l'édition précédente, pas au
moment de démarcher), et le droit à l'image des partenaires dont le logo
apparaît.

Maillage : liens réciproques ajoutés depuis et vers les articles gala du
23/09, WEI du 24/09 et brief vidéaste du 26/09, lien simple (non
réciproque, cité pour le droit à l'image) vers l'article musique du
27/09, lien vers `/contact` en place. `npm ci`, `npm run build` et
`tsc --noEmit` vérifiés avant push.

**À vérifier à la revue d'octobre**, comme pour les six premiers
articles : impressions et position sur « vidéo dossier de sponsoring
association étudiante ». Même réserve que les fois précédentes : une
hausse d'impressions sans hausse de position signifie que Google teste la
page, pas qu'elle progresse.

**Rappel cadence, déjà signalé le 28/09** : ceci porte à 7 le nombre
d'articles publiés en 8 jours (23 au 30/09, seul le 28/09 ayant été une
amélioration plutôt qu'une nouvelle publication). Toujours aucune donnée
de performance disponible pour évaluer un seul de ces articles. La
décision de ralentir reste à la main de Mathieu, signalée à nouveau dans
le message final.

### 01/10/2026, huitième article : territoire avant/après la prestation, le cahier des charges plutôt que le brief à nouveau

Territoire exploré : avant et après la prestation, sous-thème cahier des
charges et comparaison de devis, déjà repéré le 26/09 comme « signal faible,
retenu comme piste secondaire mais pas prioritaire » sans avoir été exploité
depuis. Avant de s'y remettre, deux autres sous-thèmes ont été testés en
recherche web réelle et écartés.

**Essai 1, événements étudiants, sous-thème raid sportif** (distinct du
tournoi du 29/09 et du WEI du 24/09, explicitement cité dans la liste des
territoires) : « aftermovie raid étudiant école de commerce », « captation
vidéo raid sportif étudiant budget », « aftermovie 4L Trophy prix vidéaste »,
« vidéaste pour 4L Trophy équipage aftermovie », « comment filmer un raid
humanitaire étudiant ». Aucun mur commercial strict, mais surtout aucune
intention commerciale réelle : un raid étudiant façon 4L Trophy se filme
quasi systématiquement en autoproduction (GoPro par les participants), pas
par un prestataire embauché. Le seul résultat technique trouvé
(technicam.fr, page dédiée captation marathon/trail/raid) s'adresse à des
organisateurs de courses sportives grand public, pas à des associations
étudiantes. Écarté pour mauvais fit avec l'offre FOCUS, pas pour mur
commercial.

**Essai 2, événements étudiants, sous-thème concert/festival étudiant** :
« aftermovie concert étudiant école de commerce », « captation vidéo
festival étudiant association budget », « vidéaste soirée concert étudiante
droit à l'image artiste », « aftermovie passation de bureau association
étudiante ». Mur commercial confirmé sur concert et festival (i3a, eoprod,
stardust-group, biux, jumpstartstudio, slisproductions, komuniweb avec une
page dédiée « tarifs clip vidéo club, concert et festival »), mur d'autorité
générique sur le droit à l'image d'un artiste sur scène, et absence totale
de volume ou d'intention commerciale sur la passation de bureau (sujet
interne à l'association, pas un événement qu'on fait filmer). Écarté.

**Retour au cahier des charges**, confirmé par trois requêtes
supplémentaires : « cahier des charges vidéo événement associatif modèle »,
« modèle cahier des charges aftermovie BDE association étudiante devis »,
« "cahier des charges" vidéo association étudiante BDE », « comment
comparer plusieurs devis vidéaste événementiel association ». La dernière
tombe dans le même mur de comparateurs de tarifs déjà documenté le 26/09
(codeur.com, flashbiz, skiss, aoyos, picmediaprod, videotelling). Les
templates de cahier des charges vidéo existent (mars-videos.fr,
videostorytelling.fr, cahiersdescharges.com) mais tous génériques
entreprise, et les résultats croisant « BDE » ou « association étudiante »
ne renvoient que des guides de création d'association ou de dossiers de
subvention, jamais un cahier des charges vidéo. L'intersection précise
(cahier des charges vidéo + association étudiante qui consulte plusieurs
prestataires) n'est écrite nulle part. SERP faible confirmée, retenue.

Article publié :
`/articles/cahier-des-charges-video-association-etudiante`. Requête visée :
« cahier des charges vidéo association étudiante ». Angle : différence avec
le brief de l'article du 26/09 (le cahier des charges sert à consulter
plusieurs prestataires et comparer des devis, le brief sert à préparer le
tournage avec un vidéaste déjà choisi), ce que le document doit contenir,
comment lire objectivement des devis reçus (durée sur place, niveau de
montage, livrables, droits d'usage), le piège d'un document trop détaillé
qui bride la proposition du prestataire, et les cas où ce document est
inutile (un seul prestataire consulté, relation déjà établie).

Maillage : lien ajouté depuis le nouvel article vers le brief du 26/09, le
dossier de sponsoring du 30/09, le WEI du 24/09 et le tournoi du 29/09, lien
vers `/contact` en place. Lien réciproque ajouté depuis l'article brief du
26/09 vers le nouvel article, pour qu'il ne reste pas accessible uniquement
depuis lui-même. `npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant
push.

**À vérifier à la revue d'octobre**, comme pour les sept premiers articles :
impressions et position sur « cahier des charges vidéo association
étudiante ». Même réserve que les fois précédentes : une hausse
d'impressions sans hausse de position signifie que Google teste la page,
pas qu'elle progresse.

**Rappel cadence, déjà signalé le 28/09 et le 30/09** : ceci porte à 8 le
nombre d'articles publiés en 9 jours (23/09 au 01/10, seul le 28/09 ayant
été une amélioration plutôt qu'une nouvelle publication). Toujours aucune
donnée de performance disponible pour évaluer un seul de ces articles. La
décision de ralentir reste à la main de Mathieu.

### 02/10/2026, neuvième article : territoire événements étudiants, le business game et le hackathon plutôt que le gala, le WEI ou le tournoi à nouveau

Territoire exploré : événements étudiants, sous-thème compétition
académique ou professionnelle inter-écoles (business game, hackathon,
concours de pitch), distinct du tournoi sportif du 29/09 (même grand
territoire, sous-thème sportif) et des trois autres formats déjà couverts
(gala, WEI). Choisi parce que la liste des territoires cite
« compétition inter-écoles » sans la limiter au sport, et que ce sous-thème
n'avait jamais été testé.

10 requêtes candidates testées en recherche web réelle : « aftermovie
business game étudiant école de commerce vidéaste », « captation vidéo
hackathon étudiant prix budget », « vidéo concours de pitch étudiant inter
écoles de commerce », « vidéaste pour un business game étudiant devis
prix », « comment filmer un hackathon étudiant conseils vidéo »,
« "aftermovie" hackathon étudiant » (phrase exacte), « "aftermovie" business
game » (phrase exacte), « captation vidéo business game inter écoles
commerce », « vidéaste événement étudiant Lyon business game hackathon ».

**SERP observée, requête par requête :**

- « aftermovie business game étudiant » et « aftermovie hackathon étudiant »
  (phrases exactes) : uniquement des aftermovies publiés par les écoles ou
  associations organisatrices elles-mêmes sur YouTube et Facebook (UCL
  Business Game, HEC Business Game, Solvay Business Game, TUM Business Game,
  plusieurs hackathons européens), jamais de page expliquant comment ces
  vidéos ont été préparées. Aucun prestataire vidéo n'a de page dédiée à ce
  sujet.
- « captation vidéo hackathon étudiant prix budget » et « vidéaste pour un
  business game étudiant devis prix » : dès que la requête contient
  « prix »/« devis », même mur générique que sur tous les territoires
  précédents (jumpstartstudio, biux, lesfilmsdegustave, weplus, monpro,
  flashbiz, peerspace), pages de tarifs captation ou vidéaste corporate sans
  aucun angle business game ni hackathon. Confirme que ce mur n'est pas
  propre à ce territoire mais générique à toute requête de prix vidéo, comme
  déjà noté le 26/09 et le 01/10.
- « captation vidéo business game inter écoles commerce » : résultats
  uniquement des éditeurs de logiciels de simulation pédagogique
  (urbangaming.fr, agilateur.fr, naodev.net, Galityco), aucun ne traite la
  vidéo. Confirme l'absence de concurrent sur l'intersection précise.
- « vidéaste événement étudiant Lyon business game hackathon » : résultats
  uniquement des pages d'écoles ou d'associations qui annoncent leurs propres
  événements (emlyon elle-même organise le HSIL Hackathon et est partenaire
  du MindFhack, iaelyon organise son Business Game), aucune page vidéaste.
  Fait notable : emlyon organise déjà ce type d'événement en interne, la
  légitimité de FOCUS sur ce sujet est directe.
- « vidéo concours de pitch étudiant inter écoles de commerce » : résultats
  institutionnels (Oteci, Kedge, UCLouvain, Pépite) qui annoncent des
  concours de pitch, aucun lien avec un prestataire vidéo. Signal faible mais
  traité comme sous-partie du format plutôt qu'en requête principale, le
  pitch final étant déjà couvert dans l'article comme le moment le plus
  filmable de l'événement.
- « comment filmer un hackathon étudiant conseils vidéo » : mélange de
  guides d'organisation de hackathon (wheeldogs.fr, cursus.edu) et de tutos
  génériques de prise de vue, aucun destiné à un prestataire ou une
  association qui embauche un vidéaste pour ce format précis.

**Mur commercial : aucun sur l'intersection précise business
game/hackathon + vidéo.** Les seuls murs rencontrés sont les mêmes murs
génériques de prix vidéaste déjà documentés sur tous les territoires
précédents dès qu'une requête contient « prix »/« devis », pas un mur
spécifique à ce format. SERP faible retenue, schéma identique à celui déjà
validé sur WEI (24/09) et tournoi sportif (29/09).

Article publié :
`/articles/aftermovie-business-game-hackathon-etudiant`. Requête visée :
« aftermovie business game étudiant ». Angle : ce qui distingue ce format de
tous les autres (peu d'énergie visuelle continue, moments filmables très
précis à identifier à l'avance comme le lancement, le point d'étape nocturne
et le pitch final), le droit à l'image des intervenants extérieurs
(entreprises partenaires, jury) plutôt que des seuls membres de
l'association, et le double usage de la vidéo (teaser réseaux sociaux et
pièce de conviction pour de futurs sponsors).

Maillage : liens réciproques ajoutés avec l'article tournoi sportif du
29/09 et l'article sponsoring du 30/09, liens simples (non réciproques) vers
le brief vidéaste du 26/09 et le cahier des charges du 01/10, lien vers
`/contact` en place. `npm ci`, `npm run build` et `tsc --noEmit` vérifiés
avant push.

**À vérifier à la revue d'octobre**, comme pour les huit premiers articles :
impressions et position sur « aftermovie business game étudiant ». Même
réserve que les fois précédentes : une hausse d'impressions sans hausse de
position signifie que Google teste la page, pas qu'elle progresse.

**Rappel cadence, déjà signalé le 28/09, le 30/09 et le 01/10** : ceci porte
à 9 le nombre d'articles publiés en 10 jours (23/09 au 02/10, seul le 28/09
ayant été une amélioration plutôt qu'une nouvelle publication). Toujours
aucune donnée de performance disponible pour évaluer un seul de ces
articles. La décision de ralentir reste à la main de Mathieu.

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
| 26/09/2026 | SERP examinée sur le territoire avant/après la prestation (8 requêtes + 2 de vérification) | Quatre requêtes en mur commercial agences corporate, une hors sujet (audience monteurs pro), une signal faible secondaire (CDC vidéo associatif). « Comment briefer un vidéaste pour un événement étudiant » : SERP faible confirmée, retenue. |
| 26/09/2026 | Quatrième article publié | `/articles/briefer-videaste-evenement-etudiant`. Liens internes réciproques ajoutés avec les trois articles existants (gala, WEI, recrutement), `npm ci` puis `npm run build` vérifiés avant push. |
| 27/09/2026 | SERP examinée sur le territoire technique et juridique (9 requêtes + 3 de vérification) | Quatre requêtes en mur commercial ou mur de templates/autorité, une écartée pour cannibalisation avec l'article WEI. « Quelle musique pour un aftermovie / droit d'auteur / SACEM » : SERP faible confirmée, retenue. |
| 27/09/2026 | Cinquième article publié | `/articles/musique-aftermovie-droit-auteur`. Liens internes réciproques ajoutés avec les articles gala, WEI et brief vidéaste, `npm ci` puis `npm run build` vérifiés avant push. |
| 28/09/2026 | SERP examinée sur le territoire entreprises à Lyon (8 requêtes + 2 de vérification) | Mur commercial confirmé sur toutes les requêtes, aucune retenue. Niveau 2 appliqué à la place. |
| 28/09/2026 | Article gala amélioré : section format vertical ajoutée, lien ajouté depuis la carte « Aftermovie » de `/prestations` | `npm ci` puis `npm run build` et `tsc --noEmit` vérifiés avant push. |
| 28/09/2026 | Point hebdomadaire : `npm ci` + `npm run build` relancés, sitemap et `.htaccess` vérifiés en local | Build propre, 5 articles publiés sans brouillon en attente. Vérification live impossible, accès réseau sortant bloqué pour cette session (testé sur focus-emlyon.com et example.com). |
| 28/09/2026 | Point hebdomadaire : demande d'export Search Console envoyée à Mathieu | Aucun export trouvé dans le dépôt depuis celui du 23/09. En attente. |
| 28/09/2026 | Point hebdomadaire : cadence de publication et Website ID Umami signalés à Mathieu | 5 articles en 5 jours sans aucune donnée de performance ; Website ID Umami toujours au placeholder. Décisions laissées à Mathieu. |
| 29/09/2026 | SERP examinée sur le territoire tournoi sportif inter-écoles (9 requêtes + 3 de vérification) | Aucun mur commercial spécifique, seulement des murs génériques (comparateurs de tarifs, annuaires, droit à l'image générique). « Aftermovie tournoi sportif étudiant » : SERP faible confirmée, retenue. |
| 29/09/2026 | Sixième article publié | `/articles/aftermovie-tournoi-sportif-etudiant`. Liens internes réciproques ajoutés avec les articles gala et brief vidéaste, `npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant push. |
| 30/09/2026 | SERP examinée sur le territoire associations et clubs, angle sponsoring (12 requêtes testées) | Mur commercial confirmé sur junior-entreprise, humanitaire et spectacle culturel testés isolément. « Vidéo dossier de sponsoring association étudiante » : SERP faible confirmée, retenue. |
| 30/09/2026 | Septième article publié | `/articles/video-dossier-sponsoring-association-etudiante`. Liens internes réciproques ajoutés avec les articles gala, WEI et brief vidéaste, `npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant push. |
| 01/10/2026 | SERP examinée sur raid sportif puis concert/festival étudiant (9 requêtes), les deux écartés, puis retour au cahier des charges déjà repéré le 26/09 (4 requêtes de confirmation) | Raid : pas de mur mais mauvaise intention commerciale (autoproduction GoPro). Concert/festival : mur commercial confirmé. Cahier des charges vidéo association étudiante : SERP faible confirmée, retenue. |
| 01/10/2026 | Huitième article publié | `/articles/cahier-des-charges-video-association-etudiante`. Lien réciproque ajouté avec l'article brief vidéaste du 26/09, liens vers sponsoring, WEI et tournoi, `npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant push. |
| 02/10/2026 | SERP examinée sur le territoire business game et hackathon étudiant (9 requêtes testées) | Aucun mur commercial sur l'intersection précise, seulement le mur générique de prix vidéaste déjà documenté sur tous les territoires dès qu'une requête contient « prix »/« devis ». « Aftermovie business game étudiant » : SERP faible confirmée, retenue. |
| 02/10/2026 | Neuvième article publié | `/articles/aftermovie-business-game-hackathon-etudiant`. Liens réciproques ajoutés avec les articles tournoi sportif et sponsoring, liens vers brief vidéaste et cahier des charges, `npm ci`, `npm run build` et `tsc --noEmit` vérifiés avant push. |

---

## À traiter au prochain passage

- [x] ~~Confirmer que le `.htaccess` est déployé~~ : fait le 21/09, toutes les routes en 200.
- [x] ~~Soumettre le sitemap~~ : resoumis le 23/09/2026.
- [ ] **Vérifier que « Dernière lecture » du sitemap a dépassé le 20/01/2026.** Tant que cette date ne bouge pas, Google n'est pas repassé et rien ne s'indexera.
- [ ] **Refaire les demandes d'indexation manuelles** (quota dépassé le 23/09) : /portfolio, /prestations, /contact, /articles, /articles/aftermovie-gala-etudiant-budget-delais.
- [ ] Renseigner le Website ID Umami dans `src/lib/analytics.ts`, puis attendre 30 jours de données avant de conclure quoi que ce soit.
- [ ] Seulement ensuite : première vraie revue mensuelle, sur des données valides.
- [ ] **Fournir l'export Search Console demandé le 28/09** (Performances 3 mois + Indexation) pour la revue du 05/10.
- [ ] **Décider si on ralentit la cadence de publication automatique** le temps d'obtenir la première lecture d'indexation des 5 articles publiés du 23 au 27/09.
- [ ] Si l'accès réseau reste bloqué à la prochaine revue hebdomadaire, ouvrir l'accès réseau de l'environnement cloud (menu de l'environnement, Modifier).
