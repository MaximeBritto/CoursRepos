// Créer un événement au scroll
const imgToSlide = document.querySelector("#imgImprovise");
const popUp = document.querySelector(".pop-up");

let playOnce = true;

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 5) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgToSlide.style.opacity = 1;
    imgToSlide.style.transform = "translateX(-200px)";
  } else {
    imgToSlide.style.opacity = 0;
  }

  if (scrollValue > 0.85 && playOnce) {
    popUp.style.opacity = 1;
    popUp.style.transform = "translateX(0px)";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popUp.style.opacity = 0;
  popUp.style.transform = "translateX(500px)";
});
// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours
