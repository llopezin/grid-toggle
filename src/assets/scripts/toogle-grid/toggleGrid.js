import { isExtraSmallScreen } from "../helpers/screenSizeHelpers";
import { toggleAttribute, qs } from "../helpers/common";

export default function toggleGrid(toggleButton) {
  let productList = qs(".ais-InfiniteHits");

  isExtraSmallScreen()
    ? productList.classList.toggle("secondary-display--xs")
    : productList.classList.toggle("secondary-display--sm");

  toggleButton.classList.toggle("active");
  toggleAttribute(toggleButton, "ariaPressed");
}
