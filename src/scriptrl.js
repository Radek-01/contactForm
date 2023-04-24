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

  const { name, surname, email, message } = data;

  // const addNewRow()

  //   const trEl = document.createElement('tr');
  //   const tdEl = document.createElement('td');
}

console.log(appendRowToTable({}));
