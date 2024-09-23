import * as view from "./view.js";
import * as model from "./model.js";

export { init, setCell };

init();

function init() {
  console.log("controller kører");
  view.init();
  model.init();

  // det er fyfy, men det er godt til testning i consollen
  window.model = model;
}

function setCell(row, col) {
  model.writeToCell(row, col, 1);
  model.dump();

  view.displayBoard(model);
}
