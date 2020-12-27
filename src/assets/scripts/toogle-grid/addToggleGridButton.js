import { isMobile, onResize } from "../helpers/screenSizeHelpers";
import { qs } from "../helpers/common";
import gridIcon from "./gridIcon";
import setButtonsState from "./setButtonsState";
import toggleGrid from "./toggleGrid";

export default function addToggleGridButton() {
  if (!isMobile()) return; //avoids adding button on non mobile devices

  let toggleButton = document.createElement("button");

  toggleButton.id = "grid-toggle";
  toggleButton.innerHTML = `${gridIcon()} <span class="sr-only">Change product list display</span>`; //.sr-only - screen reader only content
  toggleButton.onclick = (e) => {
    toggleGrid(e.currentTarget);
  };

  //Sets buttons classes and aria attibutes depending
  //currents device default display
  setButtonsState(toggleButton);

  let breakPoint = 480; //xs <=> sm screen break point
  onResize(breakPoint, setButtonsState, toggleButton); // breakpoint, callback, callback argument

  let controllersContainer = qs(".algolia-infos");
  controllersContainer.insertAdjacentElement("afterbegin", toggleButton);
}
