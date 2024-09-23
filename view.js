import * as controller from "./controller.js";
import * as model from "./model.js";
export { init, displayBoard };

function init() {
  console.log("view kører");

  const alleCeller = document.querySelectorAll(".cell");
  alleCeller.forEach((cell) => cell.addEventListener("click", clickCell));
}

function clickCell(event) {
  console.log("cellen er klikket");

  //   console.log("klik på: ", event.target.dataset);
  const row = event.target.dataset["row"];
  const col = event.target.dataset["col"];
  //   console.log("x-cord: ", row);
  //   console.log("y-cord: ", col);
  console.log(`clicked on row: ${row} col: ${col}`);
  controller.setCell(row, col);
}

function displayBoard(model) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const value = model.readFromCell(row, col);
    //   console.log(`row: ${row} col: ${col} value: ${value}`);
      const visuelCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
      visuelCell.textContent = value;
    }
  }
}
