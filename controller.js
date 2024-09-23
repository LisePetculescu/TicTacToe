import * as view from "./view.js";
import * as model from "./model.js";

export { init };

init();

function init() {
  console.log("controller kører");
  view.init();
  model.init();

  // det er fyfy, men det er godt til testning i consollen
  window.model = model;
}
