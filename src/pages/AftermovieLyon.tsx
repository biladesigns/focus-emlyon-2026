import { Link } from "react-router-dom";
import PagePilier, { Section } from "@/components/PagePilier";

const faq = [
  {
    question: "Combien de temps dure un aftermovie ?",
    reponse:
      "Le plus souvent entre une et trois minutes pour le film principal, et quelques secondes à une minute pour les versions destinées aux réseaux sociaux. La bonne durée dépend de l'événement et de l'endroit où le film sera vu : on la fixe ensemble avant le tournage.",
  },
  {
    question: "Peut-on avoir un aftermovie pendant l'événement ?",
    reponse:
      "Oui, avec notre format JT Express : une partie de l'équipe monte pendant que l'autre filme, pour diffuser une première vidéo avant la fin de l'événement. Le film complet est livré ensuite, à la date écrite dans le devis.",
  },
  {
    question: "Quelle musique peut-on mettre dans un aftermovie ?",
    reponse:
      "Une musique dont les droits couvrent la diffusion en ligne. Un titre connu utilisé sans licence est fréquemment coupé ou bloqué par Instagram, YouTube et TikTok, qui détectent automatiquement les morceaux protégés. On en parle avant le montage pour éviter une vidéo muette le jour de sa publication.",
  },
  {
    question: "Livrez-vous aussi un format vertical pour Instagram et TikTok ?",
    reponse:
      "Oui, à condition de le prévoir avant le tournage. Un plan cadré pour un écran horizontal ne se recadre pas toujours bien en vertical : savoir à l'avance qu'il faut les deux change la façon de filmer.",
  },
  {
    question: "Combien coûte un aftermovie à Lyon ?",
    reponse:
      "Le prix dépend du nombre de jours ou d'heures de tournage, du nombre de cadreurs, de la longueur et du nombre de films livrés, et des options. Décrivez votre événement pour recevoir un devis détaillé poste par poste.",
  },
];

const AftermovieLyon = () => (
  <PagePilier
    chemin="/aftermovie-lyon"
    titreSeo="Aftermovie à Lyon : le film de votre événement"
    descriptionSeo="Aftermovies d'événements à Lyon : soirées, week-ends, raids, tournois, salons. Une équipe qui filme sur plusieurs jours, en extérieur comme de nuit. Film et formats réseaux sociaux."
    service="Aftermovie"
    surtitre="Aftermovie · Lyon"
    titre="Aftermovie à Lyon"
    chapo="Un aftermovie, c'est le film court qui donne envie d'avoir été là. C'est notre format principal : nous en avons tourné sur des raids, des tournois de ski, des week-ends de plusieurs centaines de personnes, en mer et en soirée. Les conditions difficiles, nous connaissons."
    titreRealisations="Nos derniers aftermovies"
    realisations={["RAID EY", "COUPE ADHÉMAR", "33e édition de la Croiz'pak - 2025", "28e édition des Neptuniades - 2025", "Prologue 26ème Raid Hannibal", "Les Plumes du Lyon"]}
    faq={faq}
    ctaTitre="Un événement à filmer ?"
    ctaTexte="Date, lieu, durée, nombre de participants et moments forts : avec ces informations, vous recevez un devis détaillé pour votre aftermovie."
  >
    <Section titre="À quoi sert un aftermovie">
      <p>
        Un aftermovie fait trois choses à la fois. Il donne aux participants un souvenir qu'ils partagent, ce qui
        fait circuler votre événement bien au-delà de ceux qui y étaient. Il montre à ceux qui n'y étaient pas ce
        qu'ils ont manqué, ce qui remplit l'édition suivante. Et il sert de preuve auprès de vos partenaires et
        sponsors, qui voient en une minute ce qu'un dossier écrit décrit en dix pages.
      </p>
      <p>
        C'est pour cela qu'un bon aftermovie se pense avant le tournage : selon que vous visez les participants, le
        public de l'an prochain ou vos partenaires, on ne garde pas les mêmes images.
      </p>
    </Section>

    <Section titre="Filmer là où c'est difficile">
      <p>
        La plupart de nos aftermovies ont été tournés dans des conditions où un tournage improvisé échoue : un tournoi
        de ski réunissant plus de 600 participants, un raid sportif en pleine nature, une croisière en voilier
        jusqu'à l'île d'Elbe, un week-end de plus de 300 personnes, une soirée de débats qui dure toute la nuit.
      </p>
      <p>
        Ces tournages ont en commun ce qui rend un aftermovie difficile : plusieurs jours, plusieurs lieux, une
        lumière qui change, des moments forts qui ne se rejouent pas. Ce qui les rend réussis aussi : connaître le
        programme à l'avance, répartir l'équipe entre les temps forts, et garder de l'énergie pour les images qu'on
        n'avait pas prévues.
      </p>
    </Section>

    <Section titre="Ce que vous recevez">
      <ul>
        <li>
          <strong>Le film principal</strong>, monté, étalonné et mixé, au format horizontal pour un écran, votre site
          ou YouTube.
        </li>
        <li>
          <strong>Une version courte et verticale</strong> pour Instagram, TikTok et les stories, pensée pour être
          comprise sans le son.
        </li>
        <li>
          <strong>Sur demande, une vidéo pendant l'événement</strong> grâce au montage en direct de notre format JT
          Express.
        </li>
      </ul>
      <p>
        La liste exacte des livrables et la date de livraison sont écrites dans le devis, pour qu'il n'y ait pas de
        surprise à l'arrivée.
      </p>
    </Section>

    <Section titre="Bien préparer son aftermovie">
      <p>Quatre informations font la différence, à nous transmettre avant le tournage :</p>
      <ul>
        <li>le programme avec ses horaires, même approximatifs ;</li>
        <li>les trois ou quatre moments à ne manquer sous aucun prétexte ;</li>
        <li>un contact sur place, qui n'est pas l'organisateur débordé ;</li>
        <li>les contraintes du lieu : zones interdites, horaires, autorisations.</li>
      </ul>
      <p>
        Vous organisez une soirée d'entreprise ou un gala plutôt qu'un événement sur plusieurs jours ? Voir aussi
        notre page <Link to="/videaste-evenementiel-lyon">vidéaste événementiel à Lyon</Link>.
      </p>
    </Section>
  </PagePilier>
);

export default AftermovieLyon;
