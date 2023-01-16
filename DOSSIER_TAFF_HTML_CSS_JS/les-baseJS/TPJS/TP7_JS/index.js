// Créer la logique de compte à rebours

let timeS = 60;
let totalSeconds;
let interval;

function counterDown() {
  console.log(totalSeconds);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  let sec = seconds < 10 ? "0" + seconds : seconds;

  countdownDisplay.textContent = minutes + " : " + sec;

  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "c'est terminé";
    clearInterval(interval);
  }
}

// Créer un événement à la validation du form pour lancer le compte à rebours
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("entre un chiffre sur mes mort");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = "";
  }
  clearInterval(interval);
  interval = setInterval(counterDown, 1000);
});
