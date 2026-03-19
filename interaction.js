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
    description: "Branding pour le Centre for Applied Human Rights de l'Université de York, en Angleterre. Les concepts sont les droits humains, la collaboration et l'activisme, transmis à travers l'élément de l'spirale",
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
    title: "Edition",
    description: "Projet d'édition réalisé pour un livre d'art.",
    gallery: [
      "sources/design/Edition images/Art m_Mesa de trabajo 1.jpg"
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
