import { Link } from "react-router-dom";
import PagePilier, { Section } from "@/components/PagePilier";

const faq = [
  {
    question: "Quelles soirées filmez-vous ?",
    reponse:
      "Anniversaires, fêtes de famille, fiançailles, soirées entre amis, départs à la retraite, pendaisons de crémaillère : toute soirée privée dont vous voulez garder un film, à Lyon et dans ses environs.",
  },
  {
    question: "Les invités vont-ils se sentir filmés en permanence ?",
    reponse:
      "Non. Une fois les moments prévus filmés, l'équipe travaille en retrait et capte l'ambiance sans mettre la caméra sous le nez des invités. Si certains ne souhaitent pas apparaître, dites-le nous avant la soirée : nous les évitons au tournage et au montage.",
  },
  {
    question: "Peut-on filmer seulement une partie de la soirée ?",
    reponse:
      "Oui. Beaucoup de soirées tiennent en quelques temps forts : l'arrivée, les discours, la surprise, le gâteau, la piste. Une présence de quelques heures autour de ces moments suffit souvent. On en parle ensemble pour ne payer que le temps utile.",
  },
  {
    question: "Combien coûte un vidéaste pour un anniversaire ?",
    reponse:
      "Le prix dépend surtout de la durée de présence et de la longueur du film monté. Indiquez la date, le lieu et les moments à filmer pour recevoir un devis précis.",
  },
  {
    question: "Recevra-t-on une vidéo à partager sur les réseaux ?",
    reponse:
      "Oui si vous le souhaitez : en plus du film souvenir, une version courte et verticale se partage facilement sur Instagram, WhatsApp ou TikTok. Prévoyez-la dès la demande, elle se filme différemment.",
  },
];

const VideasteSoireePriveeLyon = () => (
  <PagePilier
    chemin="/videaste-soiree-privee-lyon"
    titreSeo="Vidéaste pour soirée privée et anniversaire à Lyon"
    descriptionSeo="Faites filmer votre anniversaire ou votre soirée privée à Lyon : discours, surprise, piste de danse. Une équipe discrète, un film souvenir et une version courte à partager."
    service="Vidéaste soirée privée"
    surtitre="Anniversaire · Soirée privée · Lyon"
    titre="Vidéaste pour soirée privée à Lyon"
    chapo="Un anniversaire, des fiançailles, une fête de famille : les photos gardent les visages, la vidéo garde les voix, les discours et l'ambiance. Nous filmons votre soirée avec discrétion et vous livrons un film souvenir, plus une version courte à partager."
    titreRealisations="L'ambiance de nos tournages"
    realisations={["28e édition des Neptuniades - 2025", "The Final Bargain", "COUPE ADHÉMAR"]}
    faq={faq}
    ctaTitre="Votre soirée est bientôt ?"
    ctaTexte="Indiquez la date, le lieu, le nombre d'invités et les moments à ne pas manquer. Vous recevez un devis précis, sans engagement."
  >
    <Section titre="Ce qu'on filme pendant une soirée">
      <p>
        Une soirée réussie tient dans quelques moments que personne ne pourra rejouer : l'arrivée de la personne
        fêtée, les discours des proches, la surprise, le gâteau, la première chanson qui fait se lever tout le
        monde. Ce sont ceux-là que nous filmons en priorité, avec le son, parce que c'est ce que la mémoire perd en
        premier.
      </p>
      <p>
        Entre ces temps forts, l'équipe capte l'ambiance : les retrouvailles, les rires, les détails de la décoration,
        la piste qui se remplit. C'est ce qui fait qu'un film de soirée se regarde comme un souvenir et pas comme un
        enregistrement.
      </p>
    </Section>

    <Section titre="Discrets, pour que la soirée reste la vôtre">
      <p>
        La crainte la plus fréquente avant de faire filmer une fête privée, c'est la caméra qui gêne. Nous filmons
        les moments prévus de façon visible, puis nous travaillons en retrait. Les invités oublient vite l'équipe,
        et c'est à ce moment-là que viennent les meilleures images.
      </p>
      <p>
        Prévenez vos invités sur l'invitation que la soirée sera filmée, et signalez-nous ceux qui ne souhaitent pas
        apparaître : nous les écartons au tournage comme au montage.
      </p>
    </Section>

    <Section titre="Où que se passe votre soirée">
      <p>
        Appartement, salle louée, restaurant privatisé, péniche sur le Rhône ou la Saône, maison dans les Monts d'Or
        : chaque lieu a sa lumière et ses contraintes. Dites-nous où se passe la soirée, et si possible envoyez
        quelques photos du lieu, nous préparons le matériel en conséquence.
      </p>
      <p>
        Vous organisez plutôt un événement professionnel, une soirée d'entreprise ou un gala ? Voir notre page{" "}
        <Link to="/videaste-evenementiel-lyon">vidéaste événementiel à Lyon</Link>. Et pour un événement sur
        plusieurs jours, voir nos <Link to="/aftermovie-lyon">aftermovies</Link>.
      </p>
    </Section>

    <Section titre="Ce que vous recevez">
      <ul>
        <li>
          <strong>Un film souvenir</strong> de votre soirée, monté et mixé, avec les discours et les temps forts.
        </li>
        <li>
          <strong>Une version courte</strong>, verticale si vous le souhaitez, pour la partager avec vos invités.
        </li>
      </ul>
      <p>
        La durée de présence, les films livrés et la date de livraison sont écrits dans le devis.{" "}
        <Link to="/contact">Décrivez-nous votre soirée</Link> pour le recevoir.
      </p>
    </Section>
  </PagePilier>
);

export default VideasteSoireePriveeLyon;
