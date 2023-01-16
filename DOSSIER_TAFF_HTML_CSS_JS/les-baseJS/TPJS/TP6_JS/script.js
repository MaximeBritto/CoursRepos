const form = document.querySelector("form");

function storageList() {
  window.localStorage.maBoite = list.innerHTML;
}

function getStorageList() {
  if (window.localStorage.maBoite) {
    list.innerHTML = window.localStorage.maBoite;
  } else {
    list.innerHTML = `<li>Cliquer pour supprimer un TODO</li>`;
  }
}

getStorageList();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storageList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  storageList();
  //e.target.remove();
});
