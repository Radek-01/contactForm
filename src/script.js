"use strict";
"use strict";

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const button = document.querySelector("#submitButton");

function objectFromForm() {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("click");
    createObject();
  });
}

console.log(validateEmail("dlasiecki@gmail.com"));
function createObject() {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;
  let user = {};
  let namewords = name.split(' ');
  let surnameWords = surname.split(' ');
  const regex = /\d/
  if (!(namewords.length > 2) && !regex.test(name) && !(surnameWords.length > 2) && !regex.test(surname) && validateEmail(email) === true && name.length > 2 && surname.length > 3 && email.length > 1) {
     user = {name, surname, email, message};
  }

  console.log(user);
}

objectFromForm();
