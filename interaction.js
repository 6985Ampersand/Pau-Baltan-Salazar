let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < lastScrollTop) {
    // Scroll vers le haut → navbar blanche
    header.classList.add("nav-scrolled");
  } else {
    // Scroll vers le bas → navbar transparente
    header.classList.remove("nav-scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/*Galerie Dreamz*/
let images = document.querySelectorAll(".galerie");
let lightbox = document.getElementById("lightbox");
let imageGrande = document.getElementById("imageGrande");

let indexImage = 0;

images.forEach((img, index) => {

img.addEventListener("click", () => {
indexImage = index;
lightbox.style.display = "flex";
imageGrande.src = img.src;
});

});

document.querySelector(".fermer").onclick = () => {
lightbox.style.display = "none";
};

document.querySelector(".next").onclick = () => {
indexImage++;

if(indexImage >= images.length){
indexImage = 0;
}

imageGrande.src = images[indexImage].src;
};

document.querySelector(".prev").onclick = () => {
indexImage--;

if(indexImage < 0){
indexImage = images.length - 1;
}

imageGrande.src = images[indexImage].src;
};

/*Project Zoom*/
const params = new URLSearchParams(window.location.search);
const project = params.get("project");

const projects = {
    cahr: {
        title: "CAHR Branding",
        image: "sources/design/Branding/CAHR/CAHR-03.jpg",
        description: "Projet de branding réalisé pour CAHR."
    },

    antigona: {
        title: "Antígona Tropical",
        image: "sources/design/Editorial/Antígona/Antígona_Mesa de trabajo 1.jpg",
        description: "Projet éditorial Antígona."
    }
};

if (projects[project]) {
    document.getElementById("project-title").textContent = projects[project].title;
    document.getElementById("project-image").src = projects[project].image;
    document.getElementById("project-description").textContent = projects[project].description;
}

