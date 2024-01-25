function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Première étape : commencer par fermer la popup en utilisant un display none
// et dire à ma function d'écouter au click

// Sélectionner le bouton de fermeture

var close_btn = document.querySelector(".close");
close_btn.addEventListener("click", () =>{
  modalbg.style.display = "none"
})


// Deuxième étape : récupérer les input getElementById
// ajouter des écouteurs click, change, input(réagit dès qu'on tape quelquechose),
// submit(sans recharger la page)
// récupérer les valeurs de ce qu'on tape dans les champs console.log(   .value)
// pour y ajouter des vérifications

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Récupérer, écouter et vérifier l'entrée du Prénom
  let baliseFirstName = document.getElementById("first")
  let first = baliseFirstName.value
  function validName(name) {
    return name.length >= 2
  }
  if (validName(first)) {
    document.getElementById("firstNameError").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le prénom est valide.")
    baliseFirstName.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans la div portant l'id "firstNameError"
    document.getElementById("firstNameError").innerText = "Veuillez saisir au moins 2 caractères."
    
    // Ajoute la classe error
    baliseFirstName.classList.add("error")
}

// Récupérer, écouter et vérifier l'entrée du Nom
let baliseLastName = document.getElementById("last")
let last = baliseLastName.value

if (validName(last)) {
  document.getElementById("lastNameError").innerText = "" // Efface le message d'erreur s'il y en a un
  console.log("Le nom est valide.")
  baliseLastName.classList.remove("error")
} else {
  // Affiche un message d'erreur dans la div portant l'id "lastNameError"
  document.getElementById("lastNameError").innerText = "Veuillez saisir au moins 2 caractères."
  
  // Ajoute la classe error
  baliseLastName.classList.add("error")
}

})





//  var emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

//  if (!mymail.value.match(new RegExp)) {
//   mymail.innerHTML = "invalid email"

//  }

  





// let myform = document.querySelector('form')

// myform.addEventListener('submit', (e) => {
 
// var erreur;

// var myinput = document.getElementsByName('input');
// for (var i = 0; i < myinput.length; i++) {
//   if (! myinput[i].value) {
//     erreur.innerHTML = "Veuillez renseigner tous les champs";
   
//   }
  
// }

// if (erreur) {
//   e.preventDefault();
//   document.getElementById('erreur').innerHTML = erreur;
//   return false;
// }



// })