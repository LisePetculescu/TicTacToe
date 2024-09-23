export { init, readFromCell, writeToCell, dump };

function init() {
  console.log("model kører");
}

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function writeToCell(row, col, value) {
  console.log("write");
  grid[row][col] = value;
}

function readFromCell(row, col) {
  console.log("read");
  return grid[row][col];
}

function dump() {
  console.log("dump");
  console.log(grid);
  for (const cell of grid) {
    console.log(cell);
  }
}
