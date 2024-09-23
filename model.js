export { init, readFromCell, writeToCell, dump };

function init() {
  console.log("model kører");
}

const grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

function writeToCell(row, col, value) {
//   console.log("write");
  grid[row][col] = value;
}

function readFromCell(row, col) {
//   console.log("read");
  return grid[row][col];
}

function dump() {
  console.log("dump");
  console.table(grid);
}
