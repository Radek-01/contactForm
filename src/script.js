"use strict";
let contacts = [];
const loadContacts = JSON.parse(localStorage.getItem("saveform"));
console.log(loadContacts);
if (loadContacts) {
  contacts = contacts.concat(loadContacts);
  contacts.forEach((contact) => {
    appendRowToTable(contact);
  });
  console.log(contacts);
}

let table = document.querySelector("table");

function save() {
  localStorage.setItem("saveform", JSON.stringify(contacts));
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  handleSubmit(event);
});

function handleSubmit(event) {
  event.preventDefault();
  console.log("click");
  const formData = new FormData(form);
  const name = formData.get("name");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const message = formData.get("message");

  let namewords = name.split(" ");
  let surnameWords = surname.split(" ");
  const regex = /\d/;
  if (
    namewords.length === 1 &&
    !regex.test(name) &&
    surnameWords.length === 1 &&
    !regex.test(surname) &&
    validateEmail(email) &&
    surname.length > 3 &&
    email.length > 1
  ) {
    const contactData = {
      name,
      surname,
      email,
      message,
    };

    appendRowToTable(contactData);
    contacts.push(contactData);
    save();
  }
}
function appendRowToTable(data) {
  const body = document.querySelector("body");
  let table = document.querySelector("table");

  if (!table) {
    table = document.createElement("table");
    body.append(table);
  }
  table.classList.add("table");
  table.classList.add("table-striped");
  table.classList.add("table-bordered");
  //prepare table header and body
  if (!table.innerHTML) {
    const tblHeadEl = document.createElement("thead");
    const tblRowEl = document.createElement("tr");

    const thNameEl = document.createElement("th");
    thNameEl.textContent = "Name";

    const thSurnameEl = document.createElement("th");
    thSurnameEl.textContent = "Surname";

    const thEmailEl = document.createElement("th");
    thEmailEl.textContent = "Email";

    const thMessageEl = document.createElement("th");
    thMessageEl.textContent = "Message";

    tblRowEl.append(thNameEl, thSurnameEl, thEmailEl, thMessageEl);
    tblHeadEl.append(tblRowEl);
    table.append(tblHeadEl);

    table.append(document.createElement("tbody"));
  }

  const addNewRow = ({ name, surname, email, message }) => {
    const dataArray = [name, surname, email, message];
    // const {name, surname, email, message} = data;
    const trow = document.createElement("tr");
    dataArray.forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      trow.append(td);
    });
    return trow;
  };

  table.querySelector("tbody").append(addNewRow(data));

  console.log(contacts);
}

// const button = document.querySelector("#submitButton");

// function objectFromForm() {
//   button.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log("click");
//     createObject();
//   });
// }

// console.log(validateEmail("dlasiecki@gmail.com"));
// function createObject() {
//   const name = document.querySelector("#name").value;
//   const surname = document.querySelector("#surname").value;
//   const email = document.querySelector("#email").value;
//   const message = document.querySelector("#message").value;
//   let user = {};
//   let namewords = name.split(" ");
//   let surnameWords = surname.split(" ");
//   const regex = /\d/;
//   if (
//     !(namewords.length > 2) &&
//     !regex.test(name) &&
//     !(surnameWords.length > 2) &&
//     !regex.test(surname) &&
//     validateEmail(email) === true &&
//     name.length > 2 &&
//     surname.length > 3 &&
//     email.length > 1
//   ) {
//     user = { name, surname, email, message };
//   }

//   console.log(user);
// }

// objectFromForm();
