function generateTable() {
  const tbl = document.createElement("table");
  const tblHead = document.createElement("thead");

  const tblBody = document.createElement("tbody");
  var objini = pokemonData[0];
  var rowini = document.createElement("tr");

  for (var key in objini) {
    const cell = document.createElement("th");
    const cellText = document.createTextNode(`${key}`);
    cell.appendChild(cellText);
    rowini.appendChild(cell);
  }
  tblHead.appendChild(rowini);

  for (let i = 0; i < pokemonData.length; i++) {
    const row = document.createElement("tr");
    const obj = pokemonData[i];
    for (var key in obj) {
      const cell = document.createElement("td");
      const cellText = document.createTextNode(`${obj[key]}`);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }
  tbl.appendChild(tblHead);

  tbl.appendChild(tblBody);
  const divtable = document.getElementById('table');
  divtable.appendChild(tbl) 
}
generateTable()
