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
    document.getElementById("name_error").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log(first.dataset.data-error)
    baliseFirstName.classList.remove("error")
 
  } else if(first==null || first==""){
    document.getElementById("name_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
    console.log("Le prénom est valide.")
    baliseFirstName.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans le span portant l'id "name_error"
    document.getElementById("name_error").innerText = "Veuillez saisir au moins 2 caractères."
    
    // Ajoute la classe error
    baliseFirstName.classList.add("error")
}

// Récupérer, écouter et vérifier l'entrée du Nom
let baliseLastName = document.getElementById("last")
let last = baliseLastName.value

if (validName(last)) {
  document.getElementById("lastname_error").innerText = "" // Efface le message d'erreur s'il y en a un
  console.log("Le nom est valide.")
  baliseLastName.classList.remove("error")
}

 else if(last==null || last==""){
  document.getElementById("lastname_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
  console.log("Le prénom est valide.")
  baliseFirstName.classList.remove("error")
}
else {
  // Affiche un message d'erreur dans le span portant l'id "lastname_error"
  document.getElementById("lastname_error").innerText = "Veuillez saisir au moins 2 caractères."
  
  // Ajoute la classe error
  baliseLastName.classList.add("error")
}

 // Récupérer, écouter et vérifier l'entrée de l'Email
 let baliseEmail = document.getElementById("email")
 let email = baliseEmail.value
 function validEmail(email) {
   let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
   if (emailRegExp.test(email)) {
     return true
   }
   return false
 }
 if (validEmail(email)) {
   document.getElementById("email_error").innerText = "" // Efface le message d'erreur s'il y en a un
   
   baliseEmail.classList.remove("error")
 } 

 else if(email==null || email==""){
  document.getElementById("email_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
  
  baliseFirstName.classList.remove("error")
}
 
 else {
   // Affiche un message d'erreur dans la div portant l'id "email_error"
   document.getElementById("email_error").innerText = "L'adresse e-mail est invalide."
   console.error("L'adresse e-mail est invalide.")
   // Ajoute la classe error
   baliseEmail.classList.add("error")
 }


})
