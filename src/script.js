"use strict";

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function appendRowToTable(data) {
  const body = document.querySelector("body");
  let table = document.querySelector("table");

  if (!table) {
    table = document.createElement("table");
    body.append(table);
  }
  //prepare table header
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
  }

  //   const { name, surname, email, message } = data;

  const addNewRow = ({ name, surname, email, message }) => {
    // const {name, surname, email, message} = data;
    const trow = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = name;
    const tdSurname = document.createElement("td");
    tdSurname.textContent = surname;
    const tdEmail = document.createElement("td");
    tdEmail.textContent = email;
    const tdMessage = document.createElement("td");
    tdMessage.textContent = message;

    trow.append(tdName, tdSurname, tdEmail, tdMessage);
    return trow;
  };
  table.append(addNewRow(data));

  //   const trEl = document.createElement('tr');
  //   const tdEl = document.createElement('td');
}

console.log(
  appendRowToTable({
    name: "Rad",
    surname: "Las",
    email: "rlasiecki@gmail.com",
    message: "Msg",
  })
);
console.log(
  appendRowToTable({
    name: "Daw",
    surname: "Las",
    email: "dlasiecki@gmail.com",
    message: "Msg1",
  })
);
