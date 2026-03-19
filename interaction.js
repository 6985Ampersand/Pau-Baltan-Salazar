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

  mht: {
    title: "MHT Branding",
    description: "Diagnostic d’accessibilité et accessibilité numérique liés à la communication pour le musée associatif Maison des Hommes et des Techniques. Signalétique et dispositifs d’accessibilité adaptés",
    gallery: [
      "sources/design/Editorial/MHT editorial/15.jpg",
      "sources/design/Editorial/MHT editorial/MHT-02.jpg",
      "sources/design/Editorial/MHT editorial/MHT-03.jpg",
      "sources/design/Editorial/MHT editorial/MHT-04.jpg",
      "sources/design/Editorial/MHT editorial/MHT-05.jpg",
      "sources/design/Editorial/MHT editorial/MHT-10.jpg",
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

// fleches entre projets*/
const projectKeys = Object.keys(projects);
const currentIndex = projectKeys.indexOf(project);

const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

// ← gauche
if (currentIndex > 0) {
    const prevProject = projectKeys[currentIndex - 1];
    prevBtn.href = `zoomproj.html?project=${prevProject}`;
} else {
    prevBtn.style.display = "none";
}

// → droite
if (currentIndex < projectKeys.length - 1) {
    const nextProject = projectKeys[currentIndex + 1];
    nextBtn.href = `zoomproj.html?project=${nextProject}`;
} else {
    nextBtn.style.display = "none";
}
