
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const Nav = document.querySelector(".icon");


Nav.addEventListener("click", editNav);

function editNav(e) {
  e.preventDefault();
  console.log("click me")
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


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
close_btn.addEventListener("click", () => {
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
  let firstname = baliseFirstName.value
  function validName(firstname) {
    return firstname.length >= 2
  }

  if (validName(firstname.trim())) {
    document.getElementById("firstname_error").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le Prenom est valide.")

    baliseFirstName.classList.remove("error")

  } else if (firstname === null || firstname == "") {
    document.getElementById("firstname_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
    console.log("Veuillez renseigner le champ prenom.")
    baliseFirstName.classList.remove("error")
  } else {
    // Affiche un message d'erreur dans le span portant l'id "name_error"
    document.getElementById("firstname_error").innerText = "Veuillez saisir au moins 2 caractères."

    // Ajoute la classe error
    baliseFirstName.classList.add("error")
  }

  // Récupérer, écouter et vérifier l'entrée du Nom
  let baliseLastName = document.getElementById("last")
  let last = baliseLastName.value

  if (validName(last.trim())) {
    document.getElementById("lastname_error").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le nom est valide.")
    baliseLastName.classList.remove("error")
  }

  else if (last === null || last == "") {
    document.getElementById("lastname_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
    console.log("Veuillez renseigner le champ Nom.")
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
    console.log("Le mail est valide.")

    baliseEmail.classList.remove("error")
  }

  else if (email === null || email == "") {
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


  // Récupérer, écouter et vérifier l'entrée du nombre de participation
  let baliseNumberParticipation = document.getElementById("quantity")


  if (baliseNumberParticipation.value === null || baliseNumberParticipation.value == "") {
    document.getElementById("quantity_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
    console.log("Veuillez renseigner le champ.")
    baliseFirstName.classList.remove("error")
  }

  else if (baliseNumberParticipation.value <= 9) {
    document.getElementById("quantity_error").innerText = "" // Efface le message d'erreur s'il y en a un
    console.log("Le nombre de participation est valide.")
    baliseNumberParticipation.classList.remove("error")
  }
  else {
    // Affiche un message d'erreur dans le span portant l'id "quantity_errorr"
    document.getElementById("quantity_error").innerText = "Veuillez saisir au moins un nombre."
    console.error("Veuillez saisir au moins un nombre.")
    // Ajoute la classe error
    baliseNumberParticipation.classList.add("error")
  }
  // Troisième étape : vérifier si un des boutons radio est coché et si oui lequel

  let listBtnRadio = document.querySelectorAll(".formData input[type=radio]")

  // Converti la collection NodeList en un tableau
  let listBtnRadioArray = Array.from(listBtnRadio)

  // Initialise une variable pour savoir si un bouton radio est coché
  let isRadioButtonChecked = false

  for (let index = 0; index < listBtnRadioArray.length; index++) {
    if (listBtnRadioArray[index].checked) {
      // Affiche le choix sélectionné
      document.getElementById("location_error").innerText = "" // Efface le message d'erreur si nécessaire
      console.log("Ville souhaitée : ", listBtnRadioArray[index].value)
      listBtnRadioArray[index].classList.remove("error-checkbox")
      isRadioButtonChecked = true
      break
    }
  }

  // Afficher un message d'erreur si aucun bouton radio n'est coché
  if (!isRadioButtonChecked) {
    // Affiche un message d'erreur dans la div portant l'id "cityError"
    document.getElementById("location_error").innerText = "Veuillez sélectionner une ville."
    console.log("Veuillez sélectionner une ville.")

    for (let index = 0; index < listBtnRadioArray.length; index++) {
      // Supprime la classe checkbox-label

      listBtnRadioArray[index].classList.remove("checkbox-label")

      // Ajoute la classe error-checkbox
      listBtnRadioArray[index].classList.add("error-checkbox")
    }
  }

  // Quatrième étape : vérifier si les checks sont cochés ou non.

  // Récupérer la checkbox "Conditions d'utilisation" est cochée
  let checkboxConditions = document.getElementById("checkbox1")

  // Vérifier si la checkbox "Conditions d'utilisation" est cochée
  let isCheckboxConditionsChecked = checkboxConditions.checked

  if (isCheckboxConditionsChecked) {
    document.getElementById("checkbox_error").innerText = ""
    console.log("La condition est valide .")

  } else {
    // Affiche un message d'erreur dans le span portant l'id "checkbox_error"
    document.getElementById("checkbox_error").innerText = "Veuillez accepter les conditions d'utilisation."
  }

  // Dernière étape : Vérification du formulaire et affichage de la fenêtre de remerciement
  // Affichage de la fênetre de confirmation du formulaire

   // Récupérer, écouter et vérifier l'entrée de la date de naissance

   function isDateValid(dateString) {
    // Vérifier si dateString est une chaîne de caractères
    if (typeof dateString !== 'string') {
      return false
    }

    // Vérifier si la chaîne de date n'est pas vide
    if (dateString.trim() === '') {
      return false
    }

    // Créer une instance de Date en utilisant la chaîne fournie
    const currentDate = new Date(dateString).toDateString();


    // Vérifier si la date est valide (et que la chaîne n'était pas invalide)
    return !isNaN(currentDate.getTime())
  }

  // let baliseBirthdate = document.getElementById('birthdate').value;  

  // let currentDate = new Date();
  // let selectedDate = new Date(baliseBirthdate);

  // if (selectedDate > currentDate) {
  //   // Affiche un message d'erreur dans la div portant l'id "birthError"
  //   document.getElementById("birthdate_error").innerText = "La date de naissance est invalide."
  //   console.error("La date de naissance est invalide.")
  //   // Ajoute la classe error
  //   baliseBirthdate.classList.add("error")

  // }
    
  // else if (baliseBirthdate === null || baliseBirthdate == "") {
  //   document.getElementById("birthdate_error").innerText = "Veuillez renseigner le champ" // Efface le message d'erreur s'il y en a un
  //   console.log("Veuillez renseigner le champ.")
  //   baliseFirstName.classList.remove("error")
  // }


  //  else {
  //   document.getElementById("birthdate_error").innerText = "" // Efface le message d'erreur s'il y en a un
  //   console.log("La date de naissance est valide.")
  //   baliseBirthdate.classList.remove("error")
  // }

  // Vérifie si tous les champs sont valides
  if (
    (first)
    && (last)
    && (email)
    // && isDateValid(birthdateValue)
    && (quantity)
    && isRadioButtonChecked
    && isCheckboxConditionsChecked
  ) {
    console.log(baliseFirstName.value)
    console.log("Nom : ", baliseLastName.value)
    console.log("Email : ", baliseEmail.value)
    console.log("Nombre de participation : ", baliseNumberParticipation.value)
    console.log("Les conditions générales d'utilisation sont acceptés.")

    form.reset();
    form.style.display = "none"

    let messageThanks = document.querySelector(".thanks")
    messageThanks.style.display = "flex"

    document.querySelector(".thanks button ")
      .addEventListener("click", () => {
        modalbg.style.display = "none"
        console.log("background")
        form.style.display = "block"
        messageThanks.style.display = "none"
      })
  }

  else {
    console.log("Certains champs ne sont pas valides")
  }


})