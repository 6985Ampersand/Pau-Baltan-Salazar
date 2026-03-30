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
    description: "Projet éditorial Antígona.",
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
    description: "Branding pour l’Université Paris 8...",
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
    description: "Ce projet de marque a été réalisé afin de transmettre la qualité de vie offerte aux animaux...",
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
    description: "Projet de design d'un outil de médiation...",
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
    description: "Publications numériques pour le Musée de l'or de Bogota...",
    gallery: [
      "sources/design/Musee_or/credits.jpg",
      "sources/design/Musee_or/deux.jpg",
      "sources/design/Musee_or/portrait.jpg",
      "sources/design/Musee_or/pub.jpg"
    ]
  },

  miraflores: {
    title: "Miraflores",
    description: "Présentation numérique...",
    gallery: [
      "sources/design/miraflores/ligne.jpg",
      "sources/design/miraflores/bleu.jpg",
      "sources/design/miraflores/entrada.jpg",
      "sources/design/miraflores/extrait.jpg",
      "sources/design/miraflores/rose.jpg",
      "sources/design/miraflores/portada.jpg"
    ]
  },

  mht: {
    title: "MHT design",
    description: "Adaptation d'un service...",
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
    description: "Explorer les liens entre les affiches...",
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
    description: "Site pour le groupe de recherche...",
    gallery: [
      "sources/numerique/locosporlatipo/credits.jpg",
      "sources/numerique/locosporlatipo/page_projets.jpg",
      "sources/numerique/locosporlatipo/page_zoom.jpg",
      "sources/numerique/locosporlatipo/scroll.png"
    ]
  },

  entreplomos: {
    title: "Entreplomos",
    description: "Site web pour le projet...",
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
    description: "Application de récits érotiques interactifs...",
    gallery: [
      "sources/numerique/Osmoz/Moodboard.jpeg",
      "sources/numerique/Osmoz/ecrans.jpg",
      "sources/numerique/Osmoz/livret.jpg",
      "sources/numerique/Osmoz/pages.jpg",
      "sources/numerique/Osmoz/portada.jpg",
      "sources/numerique/Osmoz/vis.png"
    ]
  },

  backup: {
    title: "Backup simulation",
    description: "Simulation d'une expérience de backup...",
    gallery: [
      "sources/numerique/backup/chambree.png",
      "sources/numerique/backup/ecran.jpg",
      "sources/numerique/backup/mockup.jpg",
      "sources/numerique/backup/ecrand.jpg",
      "sources/numerique/backup/identite.jpg",
      "sources/numerique/backup/marque.jpg",
      "sources/numerique/backup/mood.jpg",
      "sources/numerique/backup/objets.png",
      "sources/numerique/backup/ordi.jpg",
      "sources/numerique/backup/user.jpg",
      "sources/numerique/backup/ui.jpg",
      "sources/numerique/backup/typo.jpg",
      "sources/numerique/backup/promo.jpg"
    ]
  },

  villenantes: {
    title: "Communication Quartier de Breil",
    description: "Diagnostic de communication...",
    gallery: [
      "sources/design/Villenantes/pages.jpg",
      "sources/design/Villenantes/portada.jpg",
      "sources/design/Villenantes/carte.jpg",
      "sources/design/Villenantes/schema.jpg"
    ]
  },

  alo: {
    title: "Alo radio",
    description: "Plateforme multimédia...",
    gallery: [
      "sources/numerique/aloradio/ecran.jpg",
      "sources/numerique/aloradio/app.png",
      "sources/numerique/aloradio/mockup.jpg",
      "sources/numerique/aloradio/mood.jpg",
      "sources/numerique/aloradio/web.jpg",
      "sources/numerique/aloradio/motifs.png"
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
const isNumeriquePage = window.location.pathname.includes("zoomprojdeux.html");

const projectOrder = isNumeriquePage
  ? ["entreplomos","mht","osmoz","backup","femmesnature","locosporlatipo","alo"]
  : ["cahr","antigona","edition","museeor","paris8","pets","chronographe","miraflores","villenantes"];

const currentIndex = projectOrder.indexOf(project);

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

if (currentIndex !== -1 && prevBtn && nextBtn) {

  if (currentIndex > 0) {
    const prevProject = projectOrder[currentIndex - 1];
    prevBtn.href = isNumeriquePage
      ? `zoomprojdeux.html?project=${prevProject}`
      : `zoomproj.html?project=${prevProject}`;
  } else {
    prevBtn.style.display = "none";
  }

  if (currentIndex < projectOrder.length - 1) {
    const nextProject = projectOrder[currentIndex + 1];
    nextBtn.href = isNumeriquePage
      ? `zoomprojdeux.html?project=${nextProject}`
      : `zoomproj.html?project=${nextProject}`;
  } else {
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