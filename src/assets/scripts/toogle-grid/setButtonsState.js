import { isExtraSmallScreen } from "../helpers/screenSizeHelpers";

export default function setButtonsState(toggleButton) {
  isExtraSmallScreen()
    ? toggleButton.classList.remove("active")
    : toggleButton.classList.add("active");

  toggleButton.ariaPressed = !isExtraSmallScreen();
}
