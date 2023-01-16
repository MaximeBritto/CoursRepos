// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

const ronds1 = document.querySelector(".ronds1");
const ronds2 = document.querySelector(".ronds2");
const ronds3 = document.querySelector(".ronds3");

window.addEventListener("mousemove", (e) => {
  ronds1.style.left = e.pageX + "px";
  ronds1.style.top = e.pageY + "px";

  ronds2.style.left = e.pageX + "px";
  ronds2.style.top = e.pageY + "px";

  ronds3.style.left = e.pageX + "px";
  ronds3.style.top = e.pageY + "px";
});
