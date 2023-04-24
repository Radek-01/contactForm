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

  table.append(addNewRow(data));
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
console.log(
  appendRowToTable({
    name: "Oli",
    surname: "Las",
    email: "olasiecka@gmail.com",
    message: "Msg2",
  })
);
