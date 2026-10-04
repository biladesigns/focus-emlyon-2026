import { Link } from "react-router-dom";
import PagePilier, { Section } from "@/components/PagePilier";

const faq = [
  {
    question: "Vous filmez dans des lieux très sombres ?",
    reponse:
      "Oui, c'est le cas de la plupart des soirées. On travaille avec la lumière du lieu (jeux de lumière, écrans, néons) plutôt que de l'écraser avec un projecteur qui casse l'ambiance. Prévenez-nous si la salle est particulièrement sombre, on adapte le matériel.",
  },
  {
    question: "Peut-on avoir des vidéos chaque semaine ou chaque mois ?",
    reponse:
      "Oui. Pour un bar, un club ou une péniche, le plus utile est souvent une série de vidéos courtes publiées régulièrement plutôt qu'un seul film. Décrivez votre rythme de soirées et vos réseaux, on vous propose un format récurrent.",
  },
  {
    question: "Et la musique du DJ dans la vidéo ?",
    reponse:
      "Un morceau joué dans un set reste une œuvre protégée. Publié sur Instagram ou TikTok, il peut être coupé ou bloqué. On en parle avant le montage : bibliothèque musicale de la plateforme, morceau dont l'artiste autorise l'usage, ou son d'ambiance.",
  },
  {
    question: "Faut-il prévenir le public qu'il est filmé ?",
    reponse:
      "Oui. Un affichage visible à l'entrée et sur la billetterie suffit pour des plans d'ensemble. Une personne reconnaissable mise en avant doit avoir donné son accord, et une personne qui ne veut pas apparaître doit pouvoir le dire à l'équipe.",
  },
  {
    question: "Combien coûte un aftermovie de soirée ?",
    reponse:
      "Le prix dépend de la durée de présence, du nombre de cadreurs, du nombre de vidéos livrées et de la fréquence si vous voulez un suivi régulier. Décrivez votre soirée ou votre programmation pour recevoir un devis détaillé.",
  },
];

const AftermovieSoireeClubLyon = () => (
  <PagePilier
    chemin="/aftermovie-soiree-club-lyon"
    titreSeo="Aftermovie de soirée à Lyon : clubs, bars, péniches"
    descriptionSeo="Vidéos de soirées pour clubs, bars, péniches et organisateurs à Lyon : aftermovie, teaser de la prochaine date, vidéos courtes pour Instagram et TikTok. Une équipe habituée à filmer de nuit."
    service="Aftermovie de soirée"
    surtitre="Clubs · Bars · Péniches · Lyon"
    titre="Aftermovie de soirée à Lyon"
    chapo="Une soirée réussie dure une nuit, sa vidéo fait venir le public de la suivante. Nous filmons les soirées des clubs, bars, péniches et organisateurs lyonnais : l'aftermovie de la nuit, le teaser de la prochaine date et les vidéos courtes qui font vivre vos réseaux entre deux événements."
    titreRealisations="Des tournages de nuit"
    realisations={["The Final Bargain", "28e édition des Neptuniades - 2025", "COUPE ADHÉMAR"]}
    faq={faq}
    ctaTitre="Votre prochaine soirée se prépare ?"
    ctaTexte="Date, lieu, capacité, line-up et réseaux à alimenter : avec ces informations, vous recevez un devis pour une soirée ou pour un suivi régulier."
  >
    <Section titre="Une vidéo pour remplir la prochaine soirée">
      <p>
        Pour un lieu de nuit, la vidéo d'une soirée n'est pas un souvenir, c'est de la promotion. Le public décide
        de venir en voyant ce qu'il a manqué : une salle pleine, un DJ qui fait lever les bras, une ambiance qu'il
        reconnaît comme la sienne. Une affiche annonce une date, une vidéo donne envie d'y être.
      </p>
      <p>
        C'est pour cela que nous pensons chaque tournage pour vos réseaux : des plans courts et verticaux qui
        fonctionnent dans les premières secondes, une version plus longue pour la page de l'événement, et des extraits
        réutilisables pour annoncer la date suivante.
      </p>
    </Section>

    <Section titre="Ce qu'on livre">
      <ul>
        <li>
          <strong>L'aftermovie de la soirée</strong>, monté sur le rythme de la nuit, en vertical pour Instagram et
          TikTok et en horizontal si vous en avez l'usage.
        </li>
        <li>
          <strong>Le teaser de la prochaine date</strong>, monté à partir des meilleures images, pour lancer la
          billetterie.
        </li>
        <li>
          <strong>Des vidéos courtes</strong> à publier au fil des semaines : le DJ, la foule, le bar, les
          coulisses.
        </li>
        <li>
          <strong>Sur demande, une vidéo pendant la soirée</strong>, grâce au montage en direct de notre format JT
          Express, à publier en story avant la fermeture.
        </li>
      </ul>
    </Section>

    <Section titre="Filmer de nuit, sans casser l'ambiance">
      <p>
        Une soirée filmée au flash ou avec un projecteur braqué sur la piste ne ressemble plus à la soirée. Nous
        travaillons avec la lumière du lieu, les jeux de lumière, les écrans, les néons, et nous nous déplaçons dans
        la foule sans la bloquer. Le public oublie vite la caméra, et c'est là que viennent les images qui donnent
        envie.
      </p>
      <p>
        À plusieurs cadreurs, on couvre en même temps la cabine du DJ, la piste et les espaces plus calmes, bar ou
        terrasse. Sur une péniche, ça compte : l'ambiance n'est pas la même sur le pont et dans la cale.
      </p>
    </Section>

    <Section titre="Une soirée ponctuelle ou un suivi régulier">
      <p>
        Un organisateur qui lance un concept a besoin d'un aftermovie fort pour la première date. Un lieu qui ouvre
        tous les week-ends a plutôt besoin d'un flux régulier de contenu. Les deux se font, et le devis n'est pas le
        même : dites-nous votre rythme de soirées et les réseaux que vous voulez alimenter.
      </p>
      <p>
        Vous organisez un événement privé ou d'entreprise dans un lieu de nuit ? Voir aussi notre page{" "}
        <Link to="/videaste-evenementiel-lyon">vidéaste événementiel à Lyon</Link>, ou nos{" "}
        <Link to="/aftermovie-lyon">aftermovies d'événements</Link>.
      </p>
    </Section>
  </PagePilier>
);

export default AftermovieSoireeClubLyon;
