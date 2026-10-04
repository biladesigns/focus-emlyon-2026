import { Link } from "react-router-dom";
import PagePilier, { Section } from "@/components/PagePilier";

const faq = [
  {
    question: "Quels types d'événements filmez-vous à Lyon ?",
    reponse:
      "Soirées d'entreprise, galas, soirées privées et anniversaires, lancements, salons et rencontres, week-ends et événements sur plusieurs jours. Ce qui compte pour nous n'est pas le nom de l'événement mais ses moments clés, ses lieux et l'usage que vous ferez de la vidéo.",
  },
  {
    question: "Pourquoi une équipe plutôt qu'un vidéaste seul ?",
    reponse:
      "Un vidéaste seul ne peut être qu'à un endroit à la fois. Quand un discours a lieu pendant que l'ambiance se crée au bar ou sur la piste, plusieurs cadreurs permettent d'avoir les deux, et de filmer un même moment sous plusieurs angles.",
  },
  {
    question: "Peut-on diffuser une vidéo pendant l'événement ?",
    reponse:
      "Oui, c'est le principe de notre format JT Express : une partie de l'équipe monte pendant que l'autre filme, pour une diffusion pendant l'événement lui-même, sur écran ou sur vos réseaux. Il se prévoit à l'avance, dites-le dès votre demande.",
  },
  {
    question: "Combien coûte un vidéaste événementiel ?",
    reponse:
      "Le prix dépend de la durée de présence, du nombre de cadreurs, du nombre de lieux à couvrir, du niveau de montage et du nombre de formats livrés. Décrivez votre événement et vous recevez un devis détaillé poste par poste.",
  },
  {
    question: "Faut-il prévenir les invités qu'ils sont filmés ?",
    reponse:
      "Oui. Une information claire avant l'événement, sur l'invitation ou à l'entrée, suffit pour des plans d'ensemble. Une personne identifiable mise en avant dans le film doit avoir donné son accord. Signalez-nous aussi les invités qui ne souhaitent pas apparaître.",
  },
  {
    question: "Vous déplacez-vous en dehors de Lyon ?",
    reponse:
      "Nous sommes basés à Écully, à l'ouest de Lyon, et intervenons dans Lyon et ses environs. Indiquez le lieu exact dans votre demande pour un devis juste.",
  },
];

const VideasteEvenementielLyon = () => (
  <PagePilier
    chemin="/videaste-evenementiel-lyon"
    titreSeo="Vidéaste événementiel à Lyon : soirées, galas, entreprises"
    descriptionSeo="Une équipe de vidéastes pour filmer vos soirées, galas et événements d'entreprise à Lyon. Plusieurs cadreurs, matériel 4K, montage pendant l'événement possible. Devis détaillé."
    service="Vidéaste événementiel"
    surtitre="Vidéaste événementiel · Lyon"
    titre="Vidéaste événementiel à Lyon"
    chapo="Soirées d'entreprise, galas, soirées privées, salons : nous filmons vos événements avec une équipe, pas un cadreur seul. Plusieurs angles sur les moments qui comptent, l'ambiance captée pendant que les discours se déroulent, et des formats prêts pour l'écran comme pour les réseaux."
    titreRealisations="Des événements que nous avons filmés"
    realisations={["Les Plumes du Lyon", "The Final Bargain", "COUPE ADHÉMAR", "Prologue 26ème Raid Hannibal", "28e édition des Neptuniades - 2025", "RAID EY"]}
    faq={faq}
    ctaTitre="Votre événement approche ?"
    ctaTexte="Envoyez-nous la date, le lieu, le nombre d'invités et les moments que vous ne voulez pas manquer. Vous recevez un devis détaillé, sans engagement."
  >
    <Section titre="Ce qu'une équipe change par rapport à un vidéaste seul">
      <p>
        Un événement ne se déroule jamais à un seul endroit. Pendant que la direction prend la parole sur scène,
        l'ambiance se construit au bar, les invités arrivent au photocall, le traiteur dresse le buffet. Un vidéaste
        seul doit choisir, et ce qu'il ne filme pas n'existera pas dans le film.
      </p>
      <p>
        Nous travaillons en équipe. Sur un discours, deux caméras donnent le plan large et le plan serré sans couper
        la prise. Sur une soirée, un cadreur reste sur les temps forts prévus au programme pendant qu'un autre capte
        ce qui ne se prévoit pas : les rires, les retrouvailles, la piste qui se remplit. C'est ce qui donne du rythme
        au montage, et c'est ce qui manque le plus souvent dans une vidéo d'événement filmée seul.
      </p>
    </Section>

    <Section titre="Les événements que nous filmons">
      <ul>
        <li>
          <strong>Soirées d'entreprise et galas</strong> : discours, remises de prix, animations, ambiance de soirée.
        </li>
        <li>
          <strong>Soirées privées et anniversaires</strong> : un film souvenir de la soirée, voir notre page{" "}
          <Link to="/videaste-soiree-privee-lyon">vidéaste pour soirée privée à Lyon</Link>.
        </li>
        <li>
          <strong>Salons, rencontres et lancements</strong> : comme le salon littéraire Les Plumes du Lyon, qui
          réunissait plus de quinze auteurs.
        </li>
        <li>
          <strong>Événements sur plusieurs jours</strong> : week-ends, raids, tournois. Nous avons filmé un tournoi
          de ski réunissant plus de 600 participants, et ce type d'événement est la base de nos{" "}
          <Link to="/aftermovie-lyon">aftermovies à Lyon</Link>.
        </li>
      </ul>
    </Section>

    <Section titre="Comment se passe une prestation">
      <p>
        <strong>D'abord un échange sur votre programme.</strong> Horaires, lieux, moments clés, personnes à ne pas
        manquer, contraintes du lieu. C'est là que se décide le nombre de cadreurs et l'endroit où chacun se place.
      </p>
      <p>
        <strong>Ensuite le tournage</strong>, en 4K, avec une équipe qui connaît le déroulé à l'avance au lieu de le
        découvrir sur place. Si vous voulez une vidéo diffusée pendant l'événement, une partie de l'équipe monte en
        direct pendant que l'autre filme : c'est notre format JT Express.
      </p>
      <p>
        <strong>Enfin le montage</strong> : rythme, étalonnage, son, puis les formats dont vous avez besoin. Un film
        horizontal pour un écran ou votre site, une version courte et verticale pour Instagram, TikTok ou LinkedIn.
        Ces formats se décident avant le tournage, pas après : on ne cadre pas de la même façon pour un écran et pour
        un téléphone.
      </p>
    </Section>

    <Section titre="Ce qui fait varier le devis">
      <p>Cinq postes expliquent presque toute la différence entre deux devis :</p>
      <ul>
        <li>la durée de présence sur place, d'une heure de discours à une soirée entière ;</li>
        <li>le nombre de cadreurs, qui dépend du nombre de lieux et de moments simultanés ;</li>
        <li>le niveau de montage, d'une captation brute à un film rythmé et étalonné ;</li>
        <li>le nombre de formats livrés (film, version courte, extraits pour les réseaux) ;</li>
        <li>les options comme le montage pendant l'événement ou la diffusion en direct.</li>
      </ul>
      <p>
        Pour comparer des devis, vérifiez que chacun répond à la même demande sur ces cinq points. Un devis bien
        moins cher que les autres a souvent prévu moins de présence ou moins de montage, sans le dire. Pour un
        devis précis, <Link to="/contact">décrivez-nous votre événement</Link>.
      </p>
    </Section>
  </PagePilier>
);

export default VideasteEvenementielLyon;
