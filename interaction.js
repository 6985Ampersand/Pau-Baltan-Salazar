let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    header.classList.add("nav-scrolled");
  } else {
    header.classList.remove("nav-scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


/* Project Zoom */
const params = new URLSearchParams(window.location.search);
const project = params.get("project");

const projects = {

  cahr: {
    title: "CAHR Branding",
    description: "Branding pour le Centre for Applied Human Rights de l’Université de York, en Angleterre. Les concepts sont les droits humains, la collaboration et l’activisme, transmis à travers l’élément de la spirale",
    gallery: [
      "sources/design/Branding/CAHR/CAHR-02.jpg",
      "sources/design/Branding/CAHR/CAHR-03.jpg",
      "sources/design/Branding/CAHR/CAHR13.jpg",
      "sources/design/Branding/CAHR/CAHR14.jpg"
    ]
  },

  antigona: {
    title: "Antígona Tropical",
    description: "Projet éditorial Antígona.",
    gallery: [
      "sources/design/Editorial/Antigona/Antigona-4.jpg",
      "sources/design/Editorial/Antigona/Antigona-5.jpg",
      "sources/design/Editorial/Antigona/Antigona-6.jpg",
      "sources/design/Editorial/Antigona/Antigona-3.jpg",
      "sources/design/Editorial/Antigona/Antigona-2.jpg"       
    ]
  },

  edition: {
    title: "Montage expérimental",
    description: "Montages d’œuvres d’art numériques réalisés comme exercice avec l’outil Photoshop. Le concept pose la question suivante : pourquoi ne pas mélanger des éléments dénués de sens avec quelque chose d’aussi classique que l’art ?",
    gallery: [
      "sources/design/Edition images/Art m_Mesa de trabajo 1.jpg",
      "sources/design/Edition images/Art m-02.jpg",
      "sources/design/Edition images/Art m-03.jpg"
    ]
  },


  paris8: {
    title: "Paris8 Branding",
    description: "Branding pour l’Université Paris 8, réalisé comme exercice dans le cadre de la formation en création et édition numériques",
    gallery: [
      "sources/design/Branding/Paris8/guide.jpg",
      "sources/design/Branding/Paris8/Textures.jpg",
      "sources/design/Branding/Paris8/Livre.jpg",
      "sources/design/Branding/Paris8/Couleurs.jpg",
      "sources/design/Branding/Paris8/lettre.jpg",
      "sources/design/Branding/Paris8/Pub.jpg",
      "sources/design/Branding/Paris8/portrait.jpg"
    ]
  },

  pets: {
    title: "Pets Branding",
    description: "Ce projet de marque a été réalisé afin de transmettre la qualité de vie offerte aux animaux par la nouvelle clinique vétérinaire Pet’s Company. Les couleurs ont été choisies pour refléter la chaleur humaine et le dynamisme du lieu.",
    gallery: [
      "sources/design/Branding/Pets-company/logo.jpg",
      "sources/design/Branding/Pets-company/charte.jpg",
      "sources/design/Branding/Pets-company/ouvert.jpg",
      "sources/design/Branding/Pets-company/pub.jpg",
      "sources/design/Branding/Pets-company/taille.jpg",
      "sources/design/Branding/Pets-company/variations.jpg",
      "sources/design/Branding/Pets-company/val.jpg"
    ]
  },

  chronographe: {
    title: "Chronographe",
    description: "Projet de design d'un outil de médiation pour le musée Chronographe",
    gallery: [
      "sources/design/Editorial/Chronographe/carte.jpg",
      "sources/design/Editorial/Chronographe/jeu.jpg",
      "sources/design/Editorial/Chronographe/liste.jpg",
      "sources/design/Editorial/Chronographe/cartes.jpg",
      "sources/design/Editorial/Chronographe/portada.jpg",
      "sources/design/Editorial/Chronographe/pres.jpg"
    ]

  },

      museeor: {
      title: "Musée de l'or",
      description: "Publications numériques pour le Musée de l'or de Bogota, en Colombie. Le projet comprend la création d'une série de publications numériques interactives qui mettent en valeur les collections du musée. Les publications sont conçues pour être accessibles sur différents appareils, offrant une expérience éducative aux visiteurs du musée.",
      gallery: [
        "sources/numerique/Musee_or/credits.jpg",
        "sources/numerique/Musee_or/deux.jpg",
        "sources/numerique/Musee_or/portrait.jpg",
        "sources/numerique/Musee_or/pub.jpg",
      ]
    },

    miraflores: {
      title: "Miraflores",
      description: "Présentation numérique pour le travail final de licence en architecture communautaire participative",
      gallery: [
        "sources/numerique/miraflores/ligne.jpg",
        "sources/numerique/miraflores/bleu.jpg",
        "sources/numerique/miraflores/entrada.jpg",
        "sources/numerique/miraflores/extrait.jpg",
        "sources/numerique/miraflores/rose.jpg",
        "sources/numerique/miraflores/portada.jpg"
      ]
    },

  dreamz: {
    title: "Dreamz app",
    description: "Dreamz est une expérience immersive et personnalisée qui stimule l’imagination et le développement des enfants en proposant des histoires interactives adaptées à leurs goûts et besoins",
    gallery: [
      "sources/numerique/Dreamz/dreamz_m.jpg",
      "sources/numerique/Dreamz/dreamz_ecrans.jpg",

    ]
  },

    mht: {
    title: "MHT design",
    description: "Adaptation d'un service : design graphique, stratégie de communication, diagnostic d’accessibilité et accessibilité numérique et UI design pour le site web du musée associatif Maison des Hommes et des Techniques. Signalétique et dispositifs d’accessibilité adaptés",
    gallery: [
      "sources/numerique/mht/video.png",
      "sources/numerique/mht/MHT-03.jpg",
      "sources/numerique/mht/MHT-09.png",
      "sources/numerique/mht/MHT-05.jpg",
      "sources/numerique/mht/MHT-08.png",
      "sources/numerique/mht/MHT-02.jpg",
      "sources/numerique/mht/MHT-04.jpg"

    ]
  },

    backup: {
    title: "Backup simulation",
    description: "Simulation d'une expérience de backup pour un projet de design d'expérience utilisateur. L'objectif était de créer une interface intuitive et engageante qui guide les utilisateurs à travers le processus de sauvegarde de leurs données, tout en mettant en avant les avantages et les fonctionnalités du service proposé.",
    gallery: [
      "sources/numerique/backup/retour-ux2.png",
      "sources/numerique/backup/projet.png",
      "sources/numerique/backup/cg_1.png",
      "sources/numerique/backup/cg_2.png",
      "sources/numerique/backup/cg_3.png",
      "sources/numerique/backup/cg_4.png",
      "sources/numerique/backup/Intro.png"
    ]
  },

    femmesnature: {
    title: "Femmes & nature",
    description: "Explorer les liens entre les affiches japonaises et européennes en mettant en évidence la manière dont elles abordent les thématiques de la nature et de la figure féminine, dans une expérience numérique.",
    gallery: [
      "sources/numerique/Femmes_nature/femmesn_couleurs.jpg",
      "sources/numerique/Femmes_nature/femmesn_dialogue.jpg",
      "sources/numerique/Femmes_nature/moodboard.jpg",
      "sources/numerique/Femmes_nature/personaun.jpg",
      "sources/numerique/Femmes_nature/femmesn_userf.jpg",
      "sources/numerique/Femmes_nature/composition.png",
      "sources/numerique/Femmes_nature/Accueil.jpg"
    ]
  },

  locosporlatipo: {
  title: "Locos por la tipo site web CMS",
  description: ""
  }

};


// 🔒 sécurité AVANT tout
if (!projects[project]) {
  document.getElementById("project-title").textContent = "Projet introuvable";
} else {

  // titre + description
  document.getElementById("project-title").textContent = projects[project].title;
  document.getElementById("project-description").textContent = projects[project].description;

  // galerie
  const galleryContainer = document.getElementById("project-gallery");
  galleryContainer.innerHTML = "";

  projects[project].gallery.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = projects[project].title;

    galleryContainer.appendChild(img);
  });

}

/* Navigation entre les projets */

// détecter la page actuelle
const isNumeriquePage = window.location.pathname.includes("zoomprojdeux.html");

// ordre des projets
const projectOrder = isNumeriquePage
  ? ["mht", "entreplomos", "dreamz","backup","femmesnature"]   // 👉 projets NUMÉRIQUE
  : ["cahr", "antigona", "edition", "museeor","paris8","pets","chronographe","miraflores"]; // 👉 projets DESIGN

const currentIndex = projectOrder.indexOf(project);

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

if (currentIndex !== -1) {

    // précédent
    if (currentIndex > 0) {
        const prevProject = projectOrder[currentIndex - 1];
        prevBtn.href = isNumeriquePage
            ? `zoomprojdeux.html?project=${prevProject}`
            : `zoomproj.html?project=${prevProject}`;
        prevBtn.textContent = "← Projet précédent";
    } else {
        prevBtn.style.display = "none";
    }

    // suivant
    if (currentIndex < projectOrder.length - 1) {
        const nextProject = projectOrder[currentIndex + 1];
        nextBtn.href = isNumeriquePage
            ? `zoomprojdeux.html?project=${nextProject}`
            : `zoomproj.html?project=${nextProject}`;
        nextBtn.textContent = "Projet suivant →";
    } else {
        nextBtn.style.display = "none";
    }

}
