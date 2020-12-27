export function isExtraSmallScreen() {
  return window.innerWidth <= 478;
}

export function isMobile() {
  return window.innerWidth < 768;
}

export function onResize(breakpoint, cb, cbArg) {
  let breakPoint = breakpoint;
  let initialDiffSign = Math.sign(window.innerWidth - breakPoint);

  window.addEventListener("resize", () => {
    let currentDiffSign = Math.sign(window.innerWidth - breakPoint);
    let resizedPastBreakpoint = initialDiffSign !== currentDiffSign;

    //breakpoint change
    if (resizedPastBreakpoint) {
      cb(cbArg);
      initialDiffSign = currentDiffSign;
    }
  });
}
