import thumbnailRaidEy from "@/assets/thumbnail-raid-ey.webp";
import thumbnailAdhemarPortfolio from "@/assets/thumbnail-adhemar-portfolio.webp";
import thumbnailPrologueRaid from "@/assets/thumbnail-prologue-raid.webp";
import thumbnailCroizpak from "@/assets/thumbnail-croizpak.webp";
import thumbnailBargain from "@/assets/thumbnail-bargain.webp";
import thumbnailNeptuniade from "@/assets/thumbnail-neptuniade.webp";
import thumbnailPlumesLyon from "@/assets/thumbnail-plumes-lyon.webp";
export const featuredProjects = [{
  id: "raid-ey",
  title: "RAID EY",
  subtitle: "Aftermovie",
  description: "Captation et montage de l'aftermovie officiel du Raid EY, une aventure sportive intense capturée dans toute sa splendeur.",
  thumbnail: thumbnailRaidEy,
  videoUrl: "https://www.dropbox.com/scl/fi/xkuibtx10u8mfawwqv3uy/Aftermovie-Raid-2025.mp4?rlkey=rdsxbyax7pz1xoys0af9xdmbj&st=ig6idn8h&raw=1",
  stats: {
    duration: "4:32"
  },
  gradient: "from-orange via-magenta to-purple"
}, {
  id: "coupe-adhemar",
  title: "COUPE ADHÉMAR",
  subtitle: "Aftermovie",
  description: "L'intensité et l'esprit collectif d'un grand tournoi de ski réunissant plus de 600 étudiants.",
  thumbnail: thumbnailAdhemarPortfolio,
  videoUrl: "https://www.dropbox.com/scl/fi/g5zqtinzs1adogetroclf/Aftermovie-Adh-mar-2025.mov?rlkey=hzogfb52haw8aorrcf6hzxdoh&st=iqaz2qmf&raw=1",
  stats: {
    duration: "5:15"
  },
  gradient: "from-blue via-purple to-magenta"
}];
export const projects = [{
  id: 10,
  title: "The Final Bargain",
  category: "Aftermovies",
  thumbnail: thumbnailBargain,
  description: "Une nuit, des débats, des images",
  videoUrl: "https://www.dropbox.com/scl/fi/ue1tpo413wehqkrnrplbv/Final-Bargain-2025.mov?rlkey=mg8v1r72ga9jor7imzf0q2x0o&st=d6e0mmk6&raw=1"
}, {
  id: 11,
  title: "Les Plumes du Lyon",
  category: "Aftermovies",
  thumbnail: thumbnailPlumesLyon,
  description: "Plus de 15 auteurs étaient réunis pour célébrer la richesse de la littérature lyonnaise",
  videoUrl: "https://www.dropbox.com/scl/fi/sqxq2mlsjjksj0rhuabtv/Salon-du-livre-2025.mp4?rlkey=byfm9n2pbi20lxek60rikvrpq&st=dy64pny0&raw=1"
}, {
  id: 12,
  title: "Prologue 26ème Raid Hannibal",
  category: "Aftermovies",
  thumbnail: thumbnailPrologueRaid,
  description: "Journée marquant le début de l'aventure tant attendue du Raid Hannibal",
  videoUrl: "https://www.dropbox.com/scl/fi/hxfm2rz3w22cich5lvyol/Prologue-Raid-2025.mov?rlkey=3ptbmuix3kp2jk41g57l7krow&st=ljctvwje&raw=1"
}, {
  id: 13,
  title: "33e édition de la Croiz'pak - 2025",
  category: "Aftermovies",
  thumbnail: thumbnailCroizpak,
  description: "Du 10 au 17 mai derniers, le clubvoile_emlyon nous a embarqués vers l'Isola d'Elba",
  videoUrl: "https://www.dropbox.com/scl/fi/ceugk9hsesqxm0r3e9cos/Aftermovie-CP-2025.mp4?rlkey=vmi66jb6ky3ogee4umtrurfxi&st=4zk6qq3x&raw=1"
}, {
  id: 14,
  title: "28e édition des Neptuniades - 2025",
  category: "Aftermovies",
  thumbnail: thumbnailNeptuniade,
  description: "Week-end rassemblant plus de 300 étudiants de l'école",
  videoUrl: "https://www.dropbox.com/scl/fi/b90re0lcbh8txdpz83x7i/Aftermovie-Neptuniades-2025.mov?rlkey=30gq5nifng37wwl80bwbwxl21&st=0a8v8e3g&raw=1"
}, {
  id: 3,
  title: "CENA",
  category: "Courts-métrages",
  thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&h=400&fit=crop",
  description: "Court-métrage réalisé en 2025",
  videoUrl: "https://www.dropbox.com/scl/fi/sp4160tlg5v99jc10zzh7/CENA-2025.mp4?rlkey=pehnssapqpemkohy0cfhcsgcs&st=usl74xlh&raw=1"
}, {
  id: 7,
  title: "Making Of Séminaire ECHO",
  category: "Captation",
  thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  description: "Coulisses d'un séminaire d'école",
  videoUrl: "https://www.dropbox.com/scl/fi/2zkxo3fjlx3pu4hdvzwhs/Making-off-s-minaire-ECHO-2025.mp4?rlkey=1duby09766dhd33dm92s9bdg4&st=xeowqtu6&raw=1"
}, {
  id: 9,
  title: "Expérience en scène",
  category: "Captation",
  thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  description: "Bientôt disponible",
  videoUrl: ""
}];

export interface Realisation {
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export const toutesRealisations: Realisation[] = [
  ...featuredProjects.map((p) => ({ ...p, category: "Aftermovies" })),
  ...projects,
].map(({ title, category, description, thumbnail, videoUrl }) => ({
  title,
  category,
  description,
  thumbnail,
  videoUrl,
}));
