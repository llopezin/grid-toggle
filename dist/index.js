parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"zu0D":[function(require,module,exports) {
"use strict";function n(){return window.innerWidth<=478}function e(){return window.innerWidth<768}function i(n,e,i){var t=n,r=Math.sign(window.innerWidth-t);window.addEventListener("resize",function(){var n=Math.sign(window.innerWidth-t);r!==n&&(e(i),r=n)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isExtraSmallScreen=n,exports.isMobile=e,exports.onResize=i;
},{}],"Msb1":[function(require,module,exports) {
"use strict";function e(e){return[].slice.call(e)}function t(e,t){return t?t.querySelector(e):document.querySelector(e)}function r(t,r){return e(r?r.querySelectorAll(t):document.querySelectorAll(t))}function o(e,t){"false"===e[t]?e[t]="true":e[t]="false"}Object.defineProperty(exports,"__esModule",{value:!0}),exports.toArray=e,exports.qs=t,exports.qsa=r,exports.toggleAttribute=o;
},{}],"tegj":[function(require,module,exports) {
"use strict";function c(){return'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">\n    <title>grid</title>\n    <path d="M3 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 4h5v5h-5zM14 2c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 4h5v5h-5zM14 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM15 15h5v5h-5zM3 13c-0.552 0-1 0.448-1 1v7c0 0.552 0.448 1 1 1h7c0.552 0 1-0.448 1-1v-7c0-0.552-0.448-1-1-1zM4 15h5v5h-5z"></path>\n    </svg>\n    '}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;
},{}],"RbRx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("../helpers/screenSizeHelpers");function r(r){(0,e.isExtraSmallScreen)()?r.classList.remove("active"):r.classList.add("active"),r.ariaPressed=!(0,e.isExtraSmallScreen)()}
},{"../helpers/screenSizeHelpers":"zu0D"}],"Q9s1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=r;var e=require("../helpers/screenSizeHelpers"),s=require("../helpers/common");function r(r){var t=(0,s.qs)(".ais-InfiniteHits");(0,e.isExtraSmallScreen)()?t.classList.toggle("secondary-display--xs"):t.classList.toggle("secondary-display--sm"),r.classList.toggle("active"),(0,s.toggleAttribute)(r,"ariaPressed")}
},{"../helpers/screenSizeHelpers":"zu0D","../helpers/common":"Msb1"}],"apAI":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=o;var e=require("../helpers/screenSizeHelpers"),t=require("../helpers/common"),r=l(require("./gridIcon")),n=l(require("./setButtonsState")),i=l(require("./toggleGrid"));function l(e){return e&&e.__esModule?e:{default:e}}function o(){if((0,e.isMobile)()){var l=document.createElement("button");l.id="grid-toggle",l.innerHTML="".concat((0,r.default)(),' <span class="sr-only">Change product list display</span>'),l.onclick=function(e){(0,i.default)(e.currentTarget)},(0,n.default)(l);(0,e.onResize)(480,n.default,l),(0,t.qs)(".algolia-infos").insertAdjacentElement("afterbegin",l)}}
},{"../helpers/screenSizeHelpers":"zu0D","../helpers/common":"Msb1","./gridIcon":"tegj","./setButtonsState":"RbRx","./toggleGrid":"Q9s1"}],"oNsJ":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var s=e(require("./assets/scripts/toogle-grid/addToggleGridButton"));function e(s){return s&&s.__esModule?s:{default:s}}function t(){(0,s.default)()}require("./assets/styles/main.scss"),t();
},{"./assets/scripts/toogle-grid/addToggleGridButton":"apAI","./assets/styles/main.scss":"oNsJ"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map