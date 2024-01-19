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


var close_btn = document.querySelector(".close");
console.log(close_btn);

close_btn.addEventListener("click", () =>{
  modalbg.style.display = "none"
})

let myform = document.querySelector('form')
myform.addEventListener('submit', (e) =>{
  e.preventDefault()




})

