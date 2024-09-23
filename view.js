export { init };

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
}
