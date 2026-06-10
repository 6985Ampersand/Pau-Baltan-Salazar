/* =========================
   HEADER SCROLL
========================= */
let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (header) {
    if (scrollTop < lastScrollTop) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


/* =========================
   LIGHTBOX
========================= */
const lightbox = document.getElementById("lightbox");
const imageGrande = document.getElementById("imageGrande");
const fermerBtn = document.querySelector(".fermer");
const nextLightbox = document.querySelector(".next");
const prevLightbox = document.querySelector(".prev");

let galleryImages = [];
let currentGalleryIndex = -1;

function ouvrirLightbox(index) {
  if (!lightbox || !imageGrande || galleryImages.length === 0) return;

  currentGalleryIndex = index;
  imageGrande.src = galleryImages[currentGalleryIndex].src;
  lightbox.style.display = "flex";
}

function fermerLightbox() {
  if (!lightbox) return;
  lightbox.style.display = "none";
}

function defilerLightbox(direction) {
  if (galleryImages.length === 0) return;

  currentGalleryIndex =
    (currentGalleryIndex + direction + galleryImages.length) %
    galleryImages.length;

  imageGrande.src = galleryImages[currentGalleryIndex].src;
}

// événements lightbox
if (fermerBtn) fermerBtn.addEventListener("click", fermerLightbox);

if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) fermerLightbox();
  });
}

if (nextLightbox) nextLightbox.addEventListener("click", () => defilerLightbox(1));
if (prevLightbox) prevLightbox.addEventListener("click", () => defilerLightbox(-1));


/* =========================
   PROJECT DATA
========================= */
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
    description: "Projet éditorial Antígona pour la thèse de licence de l'artiste pplastique Richard Bravo.",
    gallery: [
      "sources/design/Editorial/Antigona/Antigona-4.jpg",
      "sources/design/Editorial/Antigona/Antigona-2.jpg", 
      "sources/design/Editorial/Antigona/Antigona-5.jpg",
      "sources/design/Editorial/Antigona/Antigona-3.jpg",
      "sources/design/Editorial/Antigona/Antigona-6.jpg",
      "sources/design/Editorial/Antigona/Antigona-portada.jpg"
    ]
  },

  edition: {
    title: "Montage expérimental",
    description: "Montages d’œuvres d’art numériques réalisés comme exercice avec l’outil Photoshop...",
    gallery: [
      "sources/design/Edition images/Art m_Mesa de trabajo 1.jpg",
      "sources/design/Edition images/Art m-02.jpg",
      "sources/design/Edition images/Art m-03.jpg"
    ]
  },

  paris8: {
    title: "Paris8 Branding",
    description: "Refonte du logo de l'Université Paris 8 comme un exercice de marque.",
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
    description: "Ce projet de marque a été réalisé afin de transmettre la qualité de vie offerte aux animaux et leur proximité à l'humain.",
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
    description: "Projet de design d'un outil de médiation pour le musée Chronographe. Le projet comprend un tableau de jeu, un jeu de cartes, une liste d'activités, une affiche et une présentation numérique.",
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
    description: "Publications numériques pour le Musée de l'or de Bogota, en Colombie. Le projet comprend une série de publications pour les réseaux sociaux.",
    gallery: [
      "sources/design/Musee_or/credits.jpg",
      "sources/design/Musee_or/deux.jpg",
      "sources/design/Musee_or/portrait.jpg",
      "sources/design/Musee_or/pub.jpg"
    ]
  },

  miraflores: {
    title: "Miraflores",
    description: "Présentation numérique pour Lina, pour sa présentation finale de licence en architecture communautaire participative",
    gallery: [
      "sources/design/miraflores/ligne.jpg",
      "sources/design/miraflores/bleu.jpg",
      "sources/design/miraflores/entrada.jpg",
      "sources/design/miraflores/extrait.jpg",
      "sources/design/miraflores/rose.jpg",
      "sources/design/miraflores/portada.jpg"
    ]
  },

    femmes: {
    title: "Les femmes dans l'industrie",
    description: "Les femmes dans l'industrie: contenu interactif pour la Maison des Hommes et des Techniques, musée associatif à Nantes.",
    gallery: [
      "sources/numerique/mht_musee/ex1.jpg",
      "sources/numerique/mht_musee/explication.png",
      "sources/numerique/mht_musee/manif.png",
      "sources/numerique/mht_musee/accueil.png",
      "sources/numerique/mht_musee/deux.jpg"
    ]
  },

  laureat: {
    title: "Espace lauréat- SEMSIRH",
    description: "Refonte de l'espace lauréat pour l'accès au corps du personnel de direction et d'inspection. Travail de design d'interfaces et d'UX design",
    gallery: [
      "sources/numerique/semsirh/laureat/ecrans-05.jpg",
      "sources/numerique/semsirh/laureat/ecrans-03.jpg",
      "sources/numerique/semsirh/laureat/ecrans-02.jpg",
      "sources/numerique/semsirh/laureat/ecrans-04.jpg"
    ]
  },

  mprh: {
    title: "Mon portail RH: portail unique des systèmes d'information RH",
    description: "Design du portail unique des systèmes d'information RH pour le Service de Modernisation des Systèmes d'Information des Ressources Humaines. Travail de design d'interfaces et d'UX design",
    gallery: [
      "sources/numerique/semsirh/mprh/portada.jpg",
      "sources/numerique/semsirh/mprh/flow.jpg",
      "sources/numerique/semsirh/mprh/interno.jpg",
      "sources/numerique/semsirh/mprh/identite.jpg",
      "sources/numerique/semsirh/mprh/identitedeux.jpg",
      "sources/numerique/semsirh/mprh/charte.jpg"
    ]
  },

  mht: {
    title: "MHT design",
    description: "Diagnostic d'accessibilité et accessibilité numérique en lien avec la communication, pour le musée associatif Maison des Hommes et des techniques. Signalétique et accessibilité en adaptation.",
    gallery: [
      "sources/numerique/mht/video.png",
      "sources/numerique/mht/MHT-01.jpg",
      "sources/numerique/mht/MHT-03.jpg",
      "sources/numerique/mht/MHT-09.png",
      "sources/numerique/mht/MHT-05.jpg",
      "sources/numerique/mht/MHT-08.png",
      "sources/numerique/mht/MHT-02.jpg",
      "sources/numerique/mht/MHT-04.jpg"
    ]
  },

  femmesnature: {
    title: "Femmes & nature",
    description: "L’objectif de ce projet est d’explorer les liens entre les affiches japonaises et européennes en mettant en évidence la manière dont elles abordent les thématiques de la nature et de la figure féminine.",
    gallery: [
      "sources/numerique/Femmes_nature/femmesn_couleurs.jpg",
      "sources/numerique/Femmes_nature/femmesn_dialogue.jpg",
      "sources/numerique/Femmes_nature/moodboard.jpg",
      "sources/numerique/Femmes_nature/personaun.jpg",
      "sources/numerique/Femmes_nature/femmesn_userf.jpg",
      "sources/numerique/Femmes_nature/composition.png",
      "sources/numerique/Femmes_nature/ecran-05.jpg",
      "sources/numerique/Femmes_nature/ecran-06.jpg"
    ]
  },

  locosporlatipo: {
    title: "Locos por la tipo",
    description: "Site pour le groupe de recherche Locos por latipo dans lequel on peut trouver les différents projets réalisés par le groupe, ainsi que des ressources et des références sur la typographie. Le projet comprend une page d'accueil, une page de projets, une page de zoom sur un projet et une page de ressources.",
    gallery: [
      "sources/numerique/locosporlatipo/credits.jpg",
      "sources/numerique/locosporlatipo/page_projets.jpg",
      "sources/numerique/locosporlatipo/page_zoom.jpg",
      "sources/numerique/locosporlatipo/scroll.png"
    ]
  },

  entreplomos: {
    title: "Entreplomos",
    description: "Site web pour le projet Entre Plomos du Groupe de Recherche en Études Typographiques de l'Université du Cauca.",
    gallery: [
      "sources/numerique/entreplomos/machine.jpg",
      "sources/numerique/entreplomos/tout.png",
      "sources/numerique/entreplomos/portada.jpg",
      "sources/numerique/entreplomos/violet.jpg",
      "sources/numerique/entreplomos/invitation.png",
      "sources/numerique/entreplomos/catalogue.png",
      "sources/numerique/entreplomos/carateres.jpg"
    ]
  },

  osmoz: {
    title: "Osmoz",
    description: "Osmoz est une application de récits érotiques interactifs, pensée pour élargir le champs de ses fantasmes et désirs, stimuler son imaginaire, découvrir son corps et s’éduquer à son plaisir, de manière récréative, afin de vivre des moments d’intimité jouissifs et de développer une sexualité libre et épanouie.",
    gallery: [
      "sources/numerique/Osmoz/Moodboard.jpeg",
      "sources/numerique/Osmoz/ecrans.jpg",
      "sources/numerique/Osmoz/livret.jpg",
      "sources/numerique/Osmoz/pages.jpg",
      "sources/numerique/Osmoz/portada.jpg",
      "sources/numerique/Osmoz/vis.png"
    ]
  },

  villenantes: {
    title: "Communication Quartier de Breil",
    description: "Diagnostic de communication pour le quartier de Breil à Nantes, en France. Le projet comprend une série de propositions de communication pour le quartier établis à partir de la recherche avec les habitants, ainsi que des recommandations pour la mise en œuvre de ces propositions.",
    gallery: [
      "sources/design/Villenantes/pages.jpg",
      "sources/design/Villenantes/portada.jpg",
      "sources/design/Villenantes/carte.jpg",
      "sources/design/Villenantes/schema.jpg"
    ]
  },

  alo: {
    title: "Alo radio",
    description: 
    "Alo radio est une plateforme multimédia pensée pour valoriser et faire rayonner la culture des classes populaires au sein de la francophonie.",
    gallery: [
      "sources/numerique/aloradio/ecran.jpg",
      "sources/numerique/aloradio/des.jpg",
      "sources/numerique/aloradio/mock.png",
      "sources/numerique/aloradio/mockup.jpg",
      "sources/numerique/aloradio/mood.jpg",
      "sources/numerique/aloradio/web.jpg",
      "sources/numerique/aloradio/motifs.png",
      "sources/numerique/aloradio/zoom.jpg"
    ]
  },

  sasha: {
    title: "Backup simulation",
    description: "À travers une simulation narrative interactive, le public est invité à suivre et même à se mettre à la place d’un personnage qui est chargé de s’occuper des actifs numériques de sa meilleure amie récemment décédée. Cette histoire permet aux joueurs d’explorer, de manière engageante et accessible, les enjeux émotionnels, éthiques et juridiques liés à la gestion des données et de l’identité numérique d’une personne décédée.Le projet combine une réflexion philosophique sur l’identité, le soi et la mémoire avec des connaissances pratiques portant sur les droits, les responsabilités et les solutions existantes.",
    gallery: [
      "sources/numerique/sasha/backup-05.jpg",
      "sources/numerique/sasha/backup-06.jpg",
      "sources/numerique/sasha/backup-07.jpg",
      "sources/numerique/sasha/mockup.jpg",
      "sources/numerique/sasha/boite.gif",
      "sources/numerique/sasha/ecran.jpg",
      "sources/numerique/sasha/autre.jpg",
      "sources/numerique/sasha/chambre_jeu.png",
      "sources/numerique/sasha/couleur.jpg",
      "sources/numerique/sasha/user.jpg",
      "sources/numerique/sasha/identite.jpg",
      "sources/numerique/sasha/Intro.png",
      "sources/numerique/sasha/pub.jpg",
      "sources/numerique/sasha/ui.jpg",
      "sources/numerique/sasha/logo.jpg",
      "sources/numerique/sasha/objets.png",
      "sources/numerique/sasha/ordi.jpg",
      "sources/numerique/sasha/typo.jpg"
    ]
  }

};


/* =========================
   PROJECT DISPLAY
========================= */
const titleEl = document.getElementById("project-title");
const descEl = document.getElementById("project-description");
const galleryContainer = document.getElementById("project-gallery");

if (project && titleEl && descEl && galleryContainer) {

  if (!projects[project]) {
    titleEl.textContent = "Projet introuvable";
  } else {

    titleEl.textContent = projects[project].title;
    descEl.textContent = projects[project].description || "";

    galleryContainer.innerHTML = "";

    projects[project].gallery.forEach((imgSrc, index) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = projects[project].title;
      img.classList.add("galerie");

      galleryContainer.appendChild(img);
    });

    galleryImages = Array.from(document.querySelectorAll("#project-gallery img"));

    galleryImages.forEach((img, index) => {
      img.addEventListener("click", () => ouvrirLightbox(index));
    });
  }
}


/* =========================
   NAVIGATION PROJETS
========================= */
const isZoomProjetDeux = window.location.pathname.includes("zoomprojdeux.html");

const numeriqueProjectOrder = [
  "laureat",
  "entreplomos",
  "mht",
  "osmoz",
  "sasha",
  "femmesnature",
  "locosporlatipo",
  "alo"
];

const designProjectOrder = [
  "mprh",
  "cahr",
  "antigona",
  "edition",
  "paris8",
  "pets",
  "chronographe",
  "miraflores",
  "villenantes"
];

const zoomDeuxDesignProjectOrder = ["museeor"];

let projectOrder;
if (isZoomProjetDeux) {
  if (numeriqueProjectOrder.includes(project)) {
    projectOrder = numeriqueProjectOrder;
  } else if (zoomDeuxDesignProjectOrder.includes(project)) {
    projectOrder = zoomDeuxDesignProjectOrder;
  } else {
    projectOrder = [];
  }
} else {
  projectOrder = designProjectOrder;
}

const currentIndex = projectOrder.indexOf(project);

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

if (prevBtn && nextBtn) {
  if (currentIndex !== -1) {
    if (currentIndex > 0) {
      const prevProject = projectOrder[currentIndex - 1];
      prevBtn.href = isZoomProjetDeux
        ? `zoomprojdeux.html?project=${prevProject}`
        : `zoomproj.html?project=${prevProject}`;
      prevBtn.textContent = "← Projet précédent";
      prevBtn.title = "Projet précédent";
    } else {
      prevBtn.style.display = "none";
    }

    if (currentIndex < projectOrder.length - 1) {
      const nextProject = projectOrder[currentIndex + 1];
      nextBtn.href = isZoomProjetDeux
        ? `zoomprojdeux.html?project=${nextProject}`
        : `zoomproj.html?project=${nextProject}`;
      nextBtn.textContent = "Projet suivant →";
      nextBtn.title = "Projet suivant";
    } else {
      nextBtn.style.display = "none";
    }
  } else {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  }
}


/* =========================
   MENU MOBILE
========================= */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

