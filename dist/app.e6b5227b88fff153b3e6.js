"use strict";
(self["webpackChunkvscode_projects"] = self["webpackChunkvscode_projects"] || []).push([["app"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

*:not(dialog) {
    margin: 0;
    padding: 0;
}

/* Prevent font size inflation */
html {
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
    margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul,
ol {
    list-style: none;
}

/* Set core body defaults */
body {
    /* min-height: 100vh; */
    line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
h1,
h2,
h3,
h4,
button,
input,
label {
    line-height: 1.1;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4 {
    text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
    color: currentColor;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font-family: inherit;
    font-size: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
    min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
    scroll-margin-block: 5ex;
}
`, "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA,gCAAgC;AAChC;IACI,2BAA2B;IAC3B,8BAA8B;IAC9B,sBAAsB;AAC1B;;AAEA,sEAAsE;AACtE;;;;;;;;;;IAUI,mBAAmB;AACvB;;AAEA,2GAA2G;AAC3G;;IAEI,gBAAgB;AACpB;;AAEA,2BAA2B;AAC3B;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA,kEAAkE;AAClE;;;;;;;IAOI,gBAAgB;AACpB;;AAEA,sCAAsC;AACtC;;;;IAII,kBAAkB;AACtB;;AAEA,0DAA0D;AAC1D;IACI,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA,oCAAoC;AACpC;;IAEI,eAAe;IACf,cAAc;AAClB;;AAEA,yCAAyC;AACzC;;;;IAII,oBAAoB;IACpB,kBAAkB;AACtB;;AAEA,8DAA8D;AAC9D;IACI,gBAAgB;AACpB;;AAEA,uEAAuE;AACvE;IACI,wBAAwB;AAC5B","sourcesContent":["/* Box sizing rules */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n*:not(dialog) {\n    margin: 0;\n    padding: 0;\n}\n\n/* Prevent font size inflation */\nhtml {\n    -moz-text-size-adjust: none;\n    -webkit-text-size-adjust: none;\n    text-size-adjust: none;\n}\n\n/* Remove default margin in favour of better control in authored CSS */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n    margin-block-end: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul,\nol {\n    list-style: none;\n}\n\n/* Set core body defaults */\nbody {\n    /* min-height: 100vh; */\n    line-height: 1.5;\n}\n\n/* Set shorter line heights on headings and interactive elements */\nh1,\nh2,\nh3,\nh4,\nbutton,\ninput,\nlabel {\n    line-height: 1.1;\n}\n\n/* Balance text wrapping on headings */\nh1,\nh2,\nh3,\nh4 {\n    text-wrap: balance;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n    text-decoration-skip-ink: auto;\n    color: currentColor;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n    max-width: 100%;\n    display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n    font-family: inherit;\n    font-size: inherit;\n}\n\n/* Make sure textareas without a rows attribute are not tiny */\ntextarea:not([rows]) {\n    min-height: 10em;\n}\n\n/* Anything that has been anchored to should have extra scroll margin */\n:target {\n    scroll-margin-block: 5ex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: #ddd;
}

form > *,
.change-temp {
    margin: 10px;
}

button {
    padding: 10px 20px;
}

.weather-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    max-width: 360px;

    & input {
        padding: 6px;
    }
}

.weather-information-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 1fr 0.6fr;
    min-height: 300px;
    max-width: 360px;
    border: 2px solid black;
    margin: 10px;
}

.weather-location {
    display: flex;
    align-items: center;
    text-align: center;
    grid-column: 1 / span 2;
    justify-self: center;
    font-size: 32px;
    font-weight: bold;
    min-height: 100px;
}

.temperature-container {
    justify-items: center;
    margin: 5px;
    border: 2px solid black;
}

.current-temperature {
    font-size: 48px;
}

.temp-and-conditions {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.weather-max-and-min {
    display: flex;
    align-items: center;
    gap: 20px;

    & .weather-max,
    .weather-min {
        text-align: center;
    }
}

.weather-description {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / span 2;
    justify-self: center;
    margin: 10px;
    min-height: 60px;
    text-align: center;
}

.next-three-days-container {
    grid-column: 1 / span 2;
    display: flex;

    & .next-three-days {
        display: flex;
        flex: 1 0 0;
        flex-direction: column;
        /* justify-content: space-evenly; */
        align-items: center;
        gap: 20px;
        margin: 5px;
        padding-top: 20px;
        border: 2px solid black;

        & .weather-conditions-current {
            text-align: center;
        }
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,aAAa;IACb,gBAAgB;;IAEhB;QACI,YAAY;IAChB;AACJ;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mCAAmC;IACnC,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET;;QAEI,kBAAkB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,oBAAoB;IACpB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,aAAa;;IAEb;QACI,aAAa;QACb,WAAW;QACX,sBAAsB;QACtB,mCAAmC;QACnC,mBAAmB;QACnB,SAAS;QACT,WAAW;QACX,iBAAiB;QACjB,uBAAuB;;QAEvB;YACI,kBAAkB;QACtB;IACJ;AACJ","sourcesContent":["body {\n    background-color: #ddd;\n}\n\nform > *,\n.change-temp {\n    margin: 10px;\n}\n\nbutton {\n    padding: 10px 20px;\n}\n\n.weather-field {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    padding: 20px;\n    max-width: 360px;\n\n    & input {\n        padding: 6px;\n    }\n}\n\n.weather-information-box {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 0.3fr 1fr 0.6fr;\n    min-height: 300px;\n    max-width: 360px;\n    border: 2px solid black;\n    margin: 10px;\n}\n\n.weather-location {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    grid-column: 1 / span 2;\n    justify-self: center;\n    font-size: 32px;\n    font-weight: bold;\n    min-height: 100px;\n}\n\n.temperature-container {\n    justify-items: center;\n    margin: 5px;\n    border: 2px solid black;\n}\n\n.current-temperature {\n    font-size: 48px;\n}\n\n.temp-and-conditions {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.weather-max-and-min {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n\n    & .weather-max,\n    .weather-min {\n        text-align: center;\n    }\n}\n\n.weather-description {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    grid-column: 1 / span 2;\n    justify-self: center;\n    margin: 10px;\n    min-height: 60px;\n    text-align: center;\n}\n\n.next-three-days-container {\n    grid-column: 1 / span 2;\n    display: flex;\n\n    & .next-three-days {\n        display: flex;\n        flex: 1 0 0;\n        flex-direction: column;\n        /* justify-content: space-evenly; */\n        align-items: center;\n        gap: 20px;\n        margin: 5px;\n        padding-top: 20px;\n        border: 2px solid black;\n\n        & .weather-conditions-current {\n            text-align: center;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherApp */ "./src/weatherApp.js");


const locationName = document.querySelector('#location-name');
const getWeather = document.querySelector('#get-weather');

// Event listener for button click to fetch weather data
getWeather.addEventListener('click', () => {
    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.displayWeatherData)(locationName.value);
});

// Event listener for enter key to fetch weather data
locationName.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    (0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.displayWeatherData)(locationName.value);
});

(0,_weatherApp__WEBPACK_IMPORTED_MODULE_0__.changeTempScale)();


/***/ }),

/***/ "./src/tempConverter.js":
/*!******************************!*\
  !*** ./src/tempConverter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertTemperature: () => (/* binding */ convertTemperature)
/* harmony export */ });
function convertTemperature(temp, currentTempScale) {
    if (currentTempScale === 'Fahrenheit') {
        const fahrenheit = temp * (9 / 5) + 32;

        return fahrenheit.toFixed(1);
    } else {
        const celsius = (temp - 32) / (9 / 5);

        return celsius.toFixed(1);
    }
}




/***/ }),

/***/ "./src/toggleTemp.js":
/*!***************************!*\
  !*** ./src/toggleTemp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTempScaleDisplay: () => (/* binding */ changeTempScaleDisplay),
/* harmony export */   toggleTemp: () => (/* binding */ toggleTemp)
/* harmony export */ });
/* harmony import */ var _tempConverter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tempConverter */ "./src/tempConverter.js");


function toggleTemp(currentTempScale) {
    let currentTemp = document.querySelector('.current-temperature');
    let maxTemp = document.querySelectorAll('.temp-max');
    let minTemp = document.querySelectorAll('.temp-min');

    let updatedCurrentTemp = (0,_tempConverter__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(
        Number(currentTemp.textContent),
        currentTempScale
    );

    currentTemp.textContent = updatedCurrentTemp;

    for (let i = 0; i < maxTemp.length; i++) {
        let updatedMaxTemp = (0,_tempConverter__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(
            Number(maxTemp[i].textContent),
            currentTempScale
        );
        let updatedMinTemp = (0,_tempConverter__WEBPACK_IMPORTED_MODULE_0__.convertTemperature)(
            Number(minTemp[i].textContent),
            currentTempScale
        );

        maxTemp[i].textContent = updatedMaxTemp;
        minTemp[i].textContent = updatedMinTemp;
    }
}

function changeTempScaleDisplay(currentTempScaleDisplay) {
    if (currentTempScaleDisplay === 'Celsius') {
        return 'Fahrenheit';
    } else {
        return 'Celsius';
    }
}




/***/ }),

/***/ "./src/weatherApp.js":
/*!***************************!*\
  !*** ./src/weatherApp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeTempScale: () => (/* binding */ changeTempScale),
/* harmony export */   displayWeatherData: () => (/* binding */ displayWeatherData)
/* harmony export */ });
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _toggleTemp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleTemp */ "./src/toggleTemp.js");
/* harmony import */ var _assets_images_weather_condition_icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/clear-day.svg */ "./src/assets/images/weather-condition-icons/clear-day.svg");
/* harmony import */ var _assets_images_weather_condition_icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/clear-night.svg */ "./src/assets/images/weather-condition-icons/clear-night.svg");
/* harmony import */ var _assets_images_weather_condition_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/cloudy.svg */ "./src/assets/images/weather-condition-icons/cloudy.svg");
/* harmony import */ var _assets_images_weather_condition_icons_fog_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/fog.svg */ "./src/assets/images/weather-condition-icons/fog.svg");
/* harmony import */ var _assets_images_weather_condition_icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/partly-cloudy-day.svg */ "./src/assets/images/weather-condition-icons/partly-cloudy-day.svg");
/* harmony import */ var _assets_images_weather_condition_icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/partly-cloudy-night.svg */ "./src/assets/images/weather-condition-icons/partly-cloudy-night.svg");
/* harmony import */ var _assets_images_weather_condition_icons_rain_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/rain.svg */ "./src/assets/images/weather-condition-icons/rain.svg");
/* harmony import */ var _assets_images_weather_condition_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/snow.svg */ "./src/assets/images/weather-condition-icons/snow.svg");
/* harmony import */ var _assets_images_weather_condition_icons_wind_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/weather-condition-icons/wind.svg */ "./src/assets/images/weather-condition-icons/wind.svg");













// Fetches and returns weather data JSON
async function fetchWeatherData(location) {
    const fetchedData = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=LV7GDK42GAYSFKS3SEPANMFJL`
    );

    if (!fetchedData.ok) {
        throw new Error(fetchedData.status);
    }

    const weatherData = await fetchedData.json();

    return {
        weatherInfo: weatherData.days,
        address: weatherData.resolvedAddress
    };
}

// Displays fetched weather
async function displayWeatherData(location) {
    try {
        const fetchedWeatherData = await fetchWeatherData(location);

        console.log(fetchedWeatherData);

        displayWeatherLocationInformation(fetchedWeatherData);
        defaultToCelsius();
    } catch (error) {
        console.log(error);
    }
}

function defaultToCelsius() {
    const tempScale = document.querySelector('#temp-scale');

    tempScale.textContent = (0,_toggleTemp__WEBPACK_IMPORTED_MODULE_2__.changeTempScaleDisplay)();
}

function updateLocationName(name) {
    const locationName = document.querySelector('#weather-location');

    locationName.textContent = name;
}

function updateCurrentTemperature(weatherTempAndIcon) {
    const weatherIcon = document.querySelectorAll('.weather-icon');
    const currentTemperature = document.querySelector('.current-temperature');

    const weatherIcons = {
        'clear-day': _assets_images_weather_condition_icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_3__,
        'clear-night': _assets_images_weather_condition_icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_4__,
        cloudy: _assets_images_weather_condition_icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_5__,
        fog: _assets_images_weather_condition_icons_fog_svg__WEBPACK_IMPORTED_MODULE_6__,
        'partly-cloudy-day': _assets_images_weather_condition_icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_7__,
        'partly-cloudy-night': _assets_images_weather_condition_icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_8__,
        rain: _assets_images_weather_condition_icons_rain_svg__WEBPACK_IMPORTED_MODULE_9__,
        snow: _assets_images_weather_condition_icons_snow_svg__WEBPACK_IMPORTED_MODULE_10__,
        wind: _assets_images_weather_condition_icons_wind_svg__WEBPACK_IMPORTED_MODULE_11__
    };

    for (let i = 0; i < weatherIcon.length; i++) {
        weatherIcon[i].src = weatherIcons[weatherTempAndIcon[i].icon];
    }

    currentTemperature.textContent = weatherTempAndIcon[0].temp;
}

function updateWeatherData(weatherMinMaxConditions) {
    const tempMax = document.querySelectorAll('.temp-max');
    const tempMin = document.querySelectorAll('.temp-min');
    const weatherConditionsCurrent = document.querySelectorAll(
        '.weather-conditions-current'
    );

    for (let i = 0; i < tempMax.length; i++) {
        tempMax[i].textContent = weatherMinMaxConditions[i].tempmax;
        tempMin[i].textContent = weatherMinMaxConditions[i].tempmin;
        weatherConditionsCurrent[i].textContent =
            weatherMinMaxConditions[i].conditions;
    }
}

function updateWeatherDescription(description) {
    const weatherDescription = document.querySelector('.weather-description p');

    weatherDescription.textContent = description[0].description;
}

function displayWeatherLocationInformation(weatherData) {
    // Display weather location name
    updateLocationName(weatherData.address);

    // Display weather location weather condition icon and current temperature
    updateCurrentTemperature(weatherData.weatherInfo);

    // Display min temp, max temp and weather conditions
    updateWeatherData(weatherData.weatherInfo);

    // Display weather description
    updateWeatherDescription(weatherData.weatherInfo);
}

function changeTempScale() {
    const changeTemp = document.querySelector('#change-temp');
    const tempScale = document.querySelector('#temp-scale');

    // Event listener for toggling current temp scale
    changeTemp.addEventListener('click', () => {
        (0,_toggleTemp__WEBPACK_IMPORTED_MODULE_2__.toggleTemp)(tempScale.textContent);
        tempScale.textContent = (0,_toggleTemp__WEBPACK_IMPORTED_MODULE_2__.changeTempScaleDisplay)(tempScale.textContent);
    });
}




/***/ }),

/***/ "./src/assets/images/weather-condition-icons/clear-day.svg":
/*!*****************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/clear-day.svg ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNDQwLTc2MHYtMTYwaDgwdjE2MGgtODBabTI2NiAxMTAtNTUtNTUgMTEyLTExNSA1NiA1Ny0xMTMgMTEzWm01NCAyMTB2LTgwaDE2MHY4MEg3NjBaTTQ0MC00MHYtMTYwaDgwdjE2MGgtODBaTTI1NC02NTIgMTQwLTc2M2w1Ny01NiAxMTMgMTEzLTU2IDU0Wm01MDggNTEyTDY1MS0yNTVsNTQtNTQgMTE0IDExMC01NyA1OVpNNDAtNDQwdi04MGgxNjB2ODBINDBabTE1NyAzMDAtNTYtNTcgMTEyLTExMiAyOSAyNyAyOSAyOC0xMTQgMTE0Wm0yODMtMTAwcS0xMDAgMC0xNzAtNzB0LTcwLTE3MHEwLTEwMCA3MC0xNzB0MTcwLTcwcTEwMCAwIDE3MCA3MHQ3MCAxNzBxMCAxMDAtNzAgMTcwdC0xNzAgNzBabTAtODBxNjYgMCAxMTMtNDd0NDctMTEzcTAtNjYtNDctMTEzdC0xMTMtNDdxLTY2IDAtMTEzIDQ3dC00NyAxMTNxMCA2NiA0NyAxMTN0MTEzIDQ3Wm0wLTE2MFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/clear-night.svg":
/*!*******************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/clear-night.svg ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDg0LTgwcS04NCAwLTE1Ny41LTMydC0xMjgtODYuNVExNDQtMjUzIDExMi0zMjYuNVQ4MC00ODRxMC0xNDYgOTMtMjU3LjVUNDEwLTg4MHEtMTggOTkgMTEgMTkzLjVUNTIxLTUyMXE3MSA3MSAxNjUuNSAxMDBUODgwLTQxMHEtMjYgMTQ0LTEzOCAyMzdUNDg0LTgwWm0wLTgwcTg4IDAgMTYzLTQ0dDExOC0xMjFxLTg2LTgtMTYzLTQzLjVUNDY0LTQ2NXEtNjEtNjEtOTctMTM4dC00My0xNjNxLTc3IDQzLTEyMC41IDExOC41VDE2MC00ODRxMCAxMzUgOTQuNSAyMjkuNVQ0ODQtMTYwWm0tMjAtMzA1WiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/cloudy.svg":
/*!**************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/cloudy.svg ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNMjYwLTE2MHEtOTEgMC0xNTUuNS02M1Q0MC0zNzdxMC03OCA0Ny0xMzl0MTIzLTc4cTI1LTkyIDEwMC0xNDl0MTcwLTU3cTExNyAwIDE5OC41IDgxLjVUNzYwLTUyMHE2OSA4IDExNC41IDU5LjVUOTIwLTM0MHEwIDc1LTUyLjUgMTI3LjVUNzQwLTE2MEgyNjBabTAtODBoNDgwcTQyIDAgNzEtMjl0MjktNzFxMC00Mi0yOS03MXQtNzEtMjloLTYwdi04MHEwLTgzLTU4LjUtMTQxLjVUNDgwLTcyMHEtODMgMC0xNDEuNSA1OC41VDI4MC01MjBoLTIwcS01OCAwLTk5IDQxdC00MSA5OXEwIDU4IDQxIDk5dDk5IDQxWm0yMjAtMjQwWiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/fog.svg":
/*!***********************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/fog.svg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNzIwLTIwMHEtMTcgMC0yOC41LTExLjVUNjgwLTI0MHEwLTE3IDExLjUtMjguNVQ3MjAtMjgwcTE3IDAgMjguNSAxMS41VDc2MC0yNDBxMCAxNy0xMS41IDI4LjVUNzIwLTIwMFpNMjgwLTgwcS0xNyAwLTI4LjUtMTEuNVQyNDAtMTIwcTAtMTcgMTEuNS0yOC41VDI4MC0xNjBxMTcgMCAyOC41IDExLjVUMzIwLTEyMHEwIDE3LTExLjUgMjguNVQyODAtODBabS00MC0xMjBxLTE3IDAtMjguNS0xMS41VDIwMC0yNDBxMC0xNyAxMS41LTI4LjVUMjQwLTI4MGgzNjBxMTcgMCAyOC41IDExLjVUNjQwLTI0MHEwIDE3LTExLjUgMjguNVQ2MDAtMjAwSDI0MFpNNDAwLTgwcS0xNyAwLTI4LjUtMTEuNVQzNjAtMTIwcTAtMTcgMTEuNS0yOC41VDQwMC0xNjBoMjgwcTE3IDAgMjguNSAxMS41VDcyMC0xMjBxMCAxNy0xMS41IDI4LjVUNjgwLTgwSDQwMFpNMzAwLTMyMHEtOTEgMC0xNTUuNS02NC41VDgwLTU0MHEwLTgzIDU1LTE0NXQxMzYtNzNxMzItNTcgODcuNS04OS41VDQ4MC04ODBxOTAgMCAxNTYuNSA1Ny41VDcxNy02NzlxNjkgNiAxMTYgNTd0NDcgMTIycTAgNzUtNTIuNSAxMjcuNVQ3MDAtMzIwSDMwMFptMC04MGg0MDBxNDIgMCA3MS0yOXQyOS03MXEwLTQyLTI5LTcxdC03MS0yOWgtNjB2LTQwcTAtNjYtNDctMTEzdC0xMTMtNDdxLTQ4IDAtODcuNSAyNlQzMzMtNzA0bC0xMCAyNGgtMjVxLTU3IDItOTcuNSA0Mi41VDE2MC01NDBxMCA1OCA0MSA5OXQ5OSA0MVptMTgwLTIwMFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/partly-cloudy-day.svg":
/*!*************************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/partly-cloudy-day.svg ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNDQwLTc2MHYtMTYwaDgwdjE2MGgtODBabTI2NiAxMTAtNTYtNTYgMTEzLTExNCA1NiA1Ny0xMTMgMTEzWm01NCAyMTB2LTgwaDE2MHY4MEg3NjBabTMgMjk5TDY1MC0yNTRsNTYtNTYgMTE0IDExMi01NyA1N1pNMjU0LTY1MCAxNDEtNzYzbDU3LTU3IDExMiAxMTQtNTYgNTZabS0xNCA0NTBoMTgwcTI1IDAgNDIuNS0xNy41VDQ4MC0yNjBxMC0yNS0xNy00Mi41VDQyMS0zMjBoLTUxbC0yMC00OHEtMTQtMzMtNDQtNTIuNVQyNDAtNDQwcS01MCAwLTg1IDM1dC0zNSA4NXEwIDUwIDM1IDg1dDg1IDM1Wm0wIDgwcS04MyAwLTE0MS41LTU4LjVUNDAtMzIwcTAtODMgNTguNS0xNDEuNVQyNDAtNTIwcTYwIDAgMTA5LjUgMzIuNVQ0MjMtNDAwcTU4IDAgOTcuNSA0M1Q1NjAtMjU0cS0yIDU3LTQyLjUgOTUuNVQ0MjAtMTIwSDI0MFptMzIwLTEzNHEtNS0yMC0xMC0zOXQtMTAtMzlxNDUtMTkgNzIuNS01OXQyNy41LTg5cTAtNjYtNDctMTEzdC0xMTMtNDdxLTYwIDAtMTA1IDM5dC01MyA5OXEtMjAtNS00MS05dC00MS05cTE0LTg4IDgyLjUtMTQ0VDQ4MC03MjBxMTAwIDAgMTcwIDcwdDcwIDE3MHEwIDc3LTQ0IDEzOC41VDU2MC0yNTRabS03OS0yMjZaIi8+PC9zdmc+";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/partly-cloudy-night.svg":
/*!***************************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/partly-cloudy-night.svg ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNTA0LTQyNVptMjAgMzg1SDQyMGwyMC0xMi41cTIwLTEyLjUgNDMuNS0yOHQ0My41LTI4bDIwLTEyLjVxODEtNiAxNDkuNS00OVQ4MDUtMjg1cS04Ni04LTE2My00My41VDUwNC00MjVxLTYxLTYxLTk3LTEzOHQtNDMtMTYzcS03NyA0My0xMjAuNSAxMTguNVQyMDAtNDQ0djEybC0xMiA1LjVxLTEyIDUuNS0yNi41IDExLjVUMTM1LTQwMy41bC0xMiA1LjVxLTItMTEtMi41LTIzdC0uNS0yM3EwLTE0NiA5My0yNTcuNVQ0NTAtODQwcS0xOCA5OSAxMSAxOTMuNVQ1NjEtNDgxcTcxIDcxIDE2NS41IDEwMFQ5MjAtMzcwcS0yNiAxNDQtMTM4IDIzN1Q1MjQtNDBabS0yODQtODBoMTgwcTI1IDAgNDIuNS0xNy41VDQ4MC0xODBxMC0yNS0xNy00Mi41VDQyMi0yNDBoLTUybC0yMC00OHEtMTQtMzMtNDQtNTIuNVQyNDAtMzYwcS01MCAwLTg1IDM0LjVUMTIwLTI0MHEwIDUwIDM1IDg1dDg1IDM1Wm0wIDgwcS04MyAwLTE0MS41LTU4LjVUNDAtMjQwcTAtODMgNTguNS0xNDEuNVQyNDAtNDQwcTYwIDAgMTA5LjUgMzIuNVQ0MjMtMzIwcTU3IDIgOTcgNDIuNXQ0MCA5Ny41cTAgNTgtNDEgOTl0LTk5IDQxSDI0MFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/rain.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/rain.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNTU4LTg0cS0xNSA4LTMwLjUgMi41VDUwNC0xMDJsLTYwLTEyMHEtOC0xNS0yLjUtMzAuNVQ0NjItMjc2cTE1LTggMzAuNS0yLjVUNTE2LTI1OGw2MCAxMjBxOCAxNSAyLjUgMzAuNVQ1NTgtODRabTI0MCAwcS0xNSA4LTMwLjUgMi41VDc0NC0xMDJsLTYwLTEyMHEtOC0xNS0yLjUtMzAuNVQ3MDItMjc2cTE1LTggMzAuNS0yLjVUNzU2LTI1OGw2MCAxMjBxOCAxNSAyLjUgMzAuNVQ3OTgtODRabS00ODAgMHEtMTUgOC0zMC41IDIuNVQyNjQtMTAybC02MC0xMjBxLTgtMTUtMi41LTMwLjVUMjIyLTI3NnExNS04IDMwLjUtMi41VDI3Ni0yNThsNjAgMTIwcTggMTUgMi41IDMwLjVUMzE4LTg0Wm0tMTgtMjM2cS05MSAwLTE1NS41LTY0LjVUODAtNTQwcTAtODMgNTUtMTQ1dDEzNi03M3EzMi01NyA4Ny41LTg5LjVUNDgwLTg4MHE5MCAwIDE1Ni41IDU3LjVUNzE3LTY3OXE2OSA2IDExNiA1N3Q0NyAxMjJxMCA3NS01Mi41IDEyNy41VDcwMC0zMjBIMzAwWm0wLTgwaDQwMHE0MiAwIDcxLTI5dDI5LTcxcTAtNDItMjktNzF0LTcxLTI5aC02MHYtNDBxMC02Ni00Ny0xMTN0LTExMy00N3EtNDggMC04Ny41IDI2VDMzMy03MDRsLTEwIDI0aC0yNXEtNTcgMi05Ny41IDQyLjVUMTYwLTU0MHEwIDU4IDQxIDk5dDk5IDQxWm0xODAtMjAwWiIvPjwvc3ZnPg==";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/snow.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/snow.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNMjYwLTIwMHEtMjEgMC0zNS41LTE0LjVUMjEwLTI1MHEwLTIxIDE0LjUtMzUuNVQyNjAtMzAwcTIxIDAgMzUuNSAxNC41VDMxMC0yNTBxMCAyMS0xNC41IDM1LjVUMjYwLTIwMFpNMzgwLTgwcS0yMSAwLTM1LjUtMTQuNVQzMzAtMTMwcTAtMjEgMTQuNS0zNS41VDM4MC0xODBxMjEgMCAzNS41IDE0LjVUNDMwLTEzMHEwIDIxLTE0LjUgMzUuNVQzODAtODBabTEyMC0xMjBxLTIxIDAtMzUuNS0xNC41VDQ1MC0yNTBxMC0yMSAxNC41LTM1LjVUNTAwLTMwMHEyMSAwIDM1LjUgMTQuNVQ1NTAtMjUwcTAgMjEtMTQuNSAzNS41VDUwMC0yMDBabTI0MCAwcS0yMSAwLTM1LjUtMTQuNVQ2OTAtMjUwcTAtMjEgMTQuNS0zNS41VDc0MC0zMDBxMjEgMCAzNS41IDE0LjVUNzkwLTI1MHEwIDIxLTE0LjUgMzUuNVQ3NDAtMjAwWk02MjAtODBxLTIxIDAtMzUuNS0xNC41VDU3MC0xMzBxMC0yMSAxNC41LTM1LjVUNjIwLTE4MHEyMSAwIDM1LjUgMTQuNVQ2NzAtMTMwcTAgMjEtMTQuNSAzNS41VDYyMC04MFpNMzAwLTM2MHEtOTEgMC0xNTUuNS02NC41VDgwLTU4MHEwLTgzIDU1LTE0NXQxMzYtNzNxMzItNTcgODcuNS04OS41VDQ4MC05MjBxOTAgMCAxNTYuNSA1Ny41VDcxNy03MTlxNjkgNiAxMTYgNTd0NDcgMTIycTAgNzUtNTIuNSAxMjcuNVQ3MDAtMzYwSDMwMFptMC04MGg0MDBxNDIgMCA3MS0yOXQyOS03MXEwLTQyLTI5LTcxdC03MS0yOWgtNjB2LTQwcTAtNjYtNDctMTEzdC0xMTMtNDdxLTQ4IDAtODcuNSAyNlQzMzMtNzQ0bC0xMCAyNGgtMjVxLTU3IDItOTcuNSA0Mi41VDE2MC01ODBxMCA1OCA0MSA5OXQ5OSA0MVptMTgwLTEwMFoiLz48L3N2Zz4=";

/***/ }),

/***/ "./src/assets/images/weather-condition-icons/wind.svg":
/*!************************************************************!*\
  !*** ./src/assets/images/weather-condition-icons/wind.svg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjNWY2MzY4Ij48cGF0aCBkPSJNNDYwLTE2MHEtNTAgMC04NS0zNXQtMzUtODVoODBxMCAxNyAxMS41IDI4LjVUNDYwLTI0MHExNyAwIDI4LjUtMTEuNVQ1MDAtMjgwcTAtMTctMTEuNS0yOC41VDQ2MC0zMjBIODB2LTgwaDM4MHE1MCAwIDg1IDM1dDM1IDg1cTAgNTAtMzUgODV0LTg1IDM1Wk04MC01NjB2LTgwaDU0MHEyNiAwIDQzLTE3dDE3LTQzcTAtMjYtMTctNDN0LTQzLTE3cS0yNiAwLTQzIDE3dC0xNyA0M2gtODBxMC01OSA0MC41LTk5LjVUNjIwLTg0MHE1OSAwIDk5LjUgNDAuNVQ3NjAtNzAwcTAgNTktNDAuNSA5OS41VDYyMC01NjBIODBabTY2MCAzMjB2LTgwcTI2IDAgNDMtMTd0MTctNDNxMC0yNi0xNy00M3QtNDMtMTdIODB2LTgwaDY2MHE1OSAwIDk5LjUgNDAuNVQ4ODAtMzgwcTAgNTktNDAuNSA5OS41VDc0MC0yNDBaIi8+PC9zdmc+";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtBQUNsQixjQUFjLDZFQUFJO0FBQ2xCLGNBQWMsNkVBQUk7QUFDbEI7O0FBRUEsb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsdURBQVU7QUFDbEIsZ0NBQWdDLG1FQUFzQjtBQUN0RCxLQUFLO0FBQ0w7O0FBRStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnNjb2RlLXByb2plY3RzLy4vc3JjL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3ZzY29kZS1wcm9qZWN0cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLXByb2plY3RzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLXByb2plY3RzLy4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL3ZzY29kZS1wcm9qZWN0cy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLXByb2plY3RzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdnNjb2RlLXByb2plY3RzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3ZzY29kZS1wcm9qZWN0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3ZzY29kZS1wcm9qZWN0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZzY29kZS1wcm9qZWN0cy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9zcmMvdGVtcENvbnZlcnRlci5qcyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9zcmMvdG9nZ2xlVGVtcC5qcyIsIndlYnBhY2s6Ly92c2NvZGUtcHJvamVjdHMvLi9zcmMvd2VhdGhlckFwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQm94IHNpemluZyBydWxlcyAqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qOm5vdChkaWFsb2cpIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLyogUHJldmVudCBmb250IHNpemUgaW5mbGF0aW9uICovXG5odG1sIHtcbiAgICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiBpbiBmYXZvdXIgb2YgYmV0dGVyIGNvbnRyb2wgaW4gYXV0aG9yZWQgQ1NTICovXG5ib2R5LFxuaDEsXG5oMixcbmgzLFxuaDQsXG5wLFxuZmlndXJlLFxuYmxvY2txdW90ZSxcbmRsLFxuZGQge1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG59XG5cbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xudWwsXG5vbCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xuYm9keSB7XG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLyogU2V0IHNob3J0ZXIgbGluZSBoZWlnaHRzIG9uIGhlYWRpbmdzIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xuaDEsXG5oMixcbmgzLFxuaDQsXG5idXR0b24sXG5pbnB1dCxcbmxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG4vKiBCYWxhbmNlIHRleHQgd3JhcHBpbmcgb24gaGVhZGluZ3MgKi9cbmgxLFxuaDIsXG5oMyxcbmg0IHtcbiAgICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG5cbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXG5hOm5vdChbY2xhc3NdKSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG59XG5cbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cbmltZyxcbnBpY3R1cmUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi8qIE1ha2Ugc3VyZSB0ZXh0YXJlYXMgd2l0aG91dCBhIHJvd3MgYXR0cmlidXRlIGFyZSBub3QgdGlueSAqL1xudGV4dGFyZWE6bm90KFtyb3dzXSkge1xuICAgIG1pbi1oZWlnaHQ6IDEwZW07XG59XG5cbi8qIEFueXRoaW5nIHRoYXQgaGFzIGJlZW4gYW5jaG9yZWQgdG8gc2hvdWxkIGhhdmUgZXh0cmEgc2Nyb2xsIG1hcmdpbiAqL1xuOnRhcmdldCB7XG4gICAgc2Nyb2xsLW1hcmdpbi1ibG9jazogNWV4O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjtBQUNyQjs7O0lBR0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQSxzRUFBc0U7QUFDdEU7Ozs7Ozs7Ozs7SUFVSSxtQkFBbUI7QUFDdkI7O0FBRUEsMkdBQTJHO0FBQzNHOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBLGtFQUFrRTtBQUNsRTs7Ozs7OztJQU9JLGdCQUFnQjtBQUNwQjs7QUFFQSxzQ0FBc0M7QUFDdEM7Ozs7SUFJSSxrQkFBa0I7QUFDdEI7O0FBRUEsMERBQTBEO0FBQzFEO0lBQ0ksOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQ0FBb0M7QUFDcEM7O0lBRUksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUEseUNBQXlDO0FBQ3pDOzs7O0lBSUksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0Qjs7QUFFQSw4REFBOEQ7QUFDOUQ7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUEsdUVBQXVFO0FBQ3ZFO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJveCBzaXppbmcgcnVsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbio6bm90KGRpYWxvZykge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIFByZXZlbnQgZm9udCBzaXplIGluZmxhdGlvbiAqL1xcbmh0bWwge1xcbiAgICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG4gICAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luIGluIGZhdm91ciBvZiBiZXR0ZXIgY29udHJvbCBpbiBhdXRob3JlZCBDU1MgKi9cXG5ib2R5LFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbnAsXFxuZmlndXJlLFxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQge1xcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbn1cXG5cXG4vKiBSZW1vdmUgbGlzdCBzdHlsZXMgb24gdWwsIG9sIGVsZW1lbnRzIHdpdGggYSBsaXN0IHJvbGUsIHdoaWNoIHN1Z2dlc3RzIGRlZmF1bHQgc3R5bGluZyB3aWxsIGJlIHJlbW92ZWQgKi9cXG51bCxcXG5vbCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXG5ib2R5IHtcXG4gICAgLyogbWluLWhlaWdodDogMTAwdmg7ICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi8qIFNldCBzaG9ydGVyIGxpbmUgaGVpZ2h0cyBvbiBoZWFkaW5ncyBhbmQgaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5idXR0b24sXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4vKiBCYWxhbmNlIHRleHQgd3JhcHBpbmcgb24gaGVhZGluZ3MgKi9cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCB7XFxuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxuLyogQSBlbGVtZW50cyB0aGF0IGRvbid0IGhhdmUgYSBjbGFzcyBnZXQgZGVmYXVsdCBzdHlsZXMgKi9cXG5hOm5vdChbY2xhc3NdKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcbmltZyxcXG5waWN0dXJlIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcblxcbi8qIE1ha2Ugc3VyZSB0ZXh0YXJlYXMgd2l0aG91dCBhIHJvd3MgYXR0cmlidXRlIGFyZSBub3QgdGlueSAqL1xcbnRleHRhcmVhOm5vdChbcm93c10pIHtcXG4gICAgbWluLWhlaWdodDogMTBlbTtcXG59XFxuXFxuLyogQW55dGhpbmcgdGhhdCBoYXMgYmVlbiBhbmNob3JlZCB0byBzaG91bGQgaGF2ZSBleHRyYSBzY3JvbGwgbWFyZ2luICovXFxuOnRhcmdldCB7XFxuICAgIHNjcm9sbC1tYXJnaW4tYmxvY2s6IDVleDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG5mb3JtID4gKixcbi5jaGFuZ2UtdGVtcCB7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLndlYXRoZXItZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xuXG4gICAgJiBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICB9XG59XG5cbi53ZWF0aGVyLWluZm9ybWF0aW9uLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAxZnIgMC42ZnI7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgbWF4LXdpZHRoOiAzNjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi53ZWF0aGVyLWxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbn1cblxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4udGVtcC1hbmQtY29uZGl0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWF0aGVyLW1heC1hbmQtbWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuXG4gICAgJiAud2VhdGhlci1tYXgsXG4gICAgLndlYXRoZXItbWluIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLndlYXRoZXItZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgbWluLWhlaWdodDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXh0LXRocmVlLWRheXMtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJiAubmV4dC10aHJlZS1kYXlzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG5cbiAgICAgICAgJiAud2VhdGhlci1jb25kaXRpb25zLWN1cnJlbnQge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGdCQUFnQjs7SUFFaEI7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVDs7UUFFSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTs7SUFFYjtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsU0FBUztRQUNULFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsdUJBQXVCOztRQUV2QjtZQUNJLGtCQUFrQjtRQUN0QjtJQUNKO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbmZvcm0gPiAqLFxcbi5jaGFuZ2UtdGVtcCB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1maWVsZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIG1heC13aWR0aDogMzYwcHg7XFxuXFxuICAgICYgaW5wdXQge1xcbiAgICAgICAgcGFkZGluZzogNnB4O1xcbiAgICB9XFxufVxcblxcbi53ZWF0aGVyLWluZm9ybWF0aW9uLWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjNmciAxZnIgMC42ZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDM2MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4ud2VhdGhlci1sb2NhdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY3VycmVudC10ZW1wZXJhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG59XFxuXFxuLnRlbXAtYW5kLWNvbmRpdGlvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLndlYXRoZXItbWF4LWFuZC1taW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgICYgLndlYXRoZXItbWF4LFxcbiAgICAud2VhdGhlci1taW4ge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi53ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uZXh0LXRocmVlLWRheXMtY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICYgLm5leHQtdGhyZWUtZGF5cyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleDogMSAwIDA7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7ICovXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luOiA1cHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcbiAgICAgICAgJiAud2VhdGhlci1jb25kaXRpb25zLWN1cnJlbnQge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBkaXNwbGF5V2VhdGhlckRhdGEsIGNoYW5nZVRlbXBTY2FsZSB9IGZyb20gJy4vd2VhdGhlckFwcCc7XG5cbmNvbnN0IGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1uYW1lJyk7XG5jb25zdCBnZXRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dldC13ZWF0aGVyJyk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBidXR0b24gY2xpY2sgdG8gZmV0Y2ggd2VhdGhlciBkYXRhXG5nZXRXZWF0aGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRpc3BsYXlXZWF0aGVyRGF0YShsb2NhdGlvbk5hbWUudmFsdWUpO1xufSk7XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciBlbnRlciBrZXkgdG8gZmV0Y2ggd2VhdGhlciBkYXRhXG5sb2NhdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZGlzcGxheVdlYXRoZXJEYXRhKGxvY2F0aW9uTmFtZS52YWx1ZSk7XG59KTtcblxuY2hhbmdlVGVtcFNjYWxlKCk7XG4iLCJmdW5jdGlvbiBjb252ZXJ0VGVtcGVyYXR1cmUodGVtcCwgY3VycmVudFRlbXBTY2FsZSkge1xuICAgIGlmIChjdXJyZW50VGVtcFNjYWxlID09PSAnRmFocmVuaGVpdCcpIHtcbiAgICAgICAgY29uc3QgZmFocmVuaGVpdCA9IHRlbXAgKiAoOSAvIDUpICsgMzI7XG5cbiAgICAgICAgcmV0dXJuIGZhaHJlbmhlaXQudG9GaXhlZCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjZWxzaXVzID0gKHRlbXAgLSAzMikgLyAoOSAvIDUpO1xuXG4gICAgICAgIHJldHVybiBjZWxzaXVzLnRvRml4ZWQoMSk7XG4gICAgfVxufVxuXG5leHBvcnQgeyBjb252ZXJ0VGVtcGVyYXR1cmUgfTtcbiIsImltcG9ydCB7IGNvbnZlcnRUZW1wZXJhdHVyZSB9IGZyb20gJy4vdGVtcENvbnZlcnRlcic7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRlbXAoY3VycmVudFRlbXBTY2FsZSkge1xuICAgIGxldCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRlbXBlcmF0dXJlJyk7XG4gICAgbGV0IG1heFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1tYXgnKTtcbiAgICBsZXQgbWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLW1pbicpO1xuXG4gICAgbGV0IHVwZGF0ZWRDdXJyZW50VGVtcCA9IGNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgICAgTnVtYmVyKGN1cnJlbnRUZW1wLnRleHRDb250ZW50KSxcbiAgICAgICAgY3VycmVudFRlbXBTY2FsZVxuICAgICk7XG5cbiAgICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IHVwZGF0ZWRDdXJyZW50VGVtcDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4VGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdXBkYXRlZE1heFRlbXAgPSBjb252ZXJ0VGVtcGVyYXR1cmUoXG4gICAgICAgICAgICBOdW1iZXIobWF4VGVtcFtpXS50ZXh0Q29udGVudCksXG4gICAgICAgICAgICBjdXJyZW50VGVtcFNjYWxlXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1cGRhdGVkTWluVGVtcCA9IGNvbnZlcnRUZW1wZXJhdHVyZShcbiAgICAgICAgICAgIE51bWJlcihtaW5UZW1wW2ldLnRleHRDb250ZW50KSxcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wU2NhbGVcbiAgICAgICAgKTtcblxuICAgICAgICBtYXhUZW1wW2ldLnRleHRDb250ZW50ID0gdXBkYXRlZE1heFRlbXA7XG4gICAgICAgIG1pblRlbXBbaV0udGV4dENvbnRlbnQgPSB1cGRhdGVkTWluVGVtcDtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRlbXBTY2FsZURpc3BsYXkoY3VycmVudFRlbXBTY2FsZURpc3BsYXkpIHtcbiAgICBpZiAoY3VycmVudFRlbXBTY2FsZURpc3BsYXkgPT09ICdDZWxzaXVzJykge1xuICAgICAgICByZXR1cm4gJ0ZhaHJlbmhlaXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAnQ2Vsc2l1cyc7XG4gICAgfVxufVxuXG5leHBvcnQgeyB0b2dnbGVUZW1wLCBjaGFuZ2VUZW1wU2NhbGVEaXNwbGF5IH07XG4iLCJpbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdG9nZ2xlVGVtcCwgY2hhbmdlVGVtcFNjYWxlRGlzcGxheSB9IGZyb20gJy4vdG9nZ2xlVGVtcCc7XG5pbXBvcnQgY2xlYXJEYXkgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItY29uZGl0aW9uLWljb25zL2NsZWFyLWRheS5zdmcnO1xuaW1wb3J0IGNsZWFyTmlnaHQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItY29uZGl0aW9uLWljb25zL2NsZWFyLW5pZ2h0LnN2Zyc7XG5pbXBvcnQgY2xvdWR5IGZyb20gJy4vYXNzZXRzL2ltYWdlcy93ZWF0aGVyLWNvbmRpdGlvbi1pY29ucy9jbG91ZHkuc3ZnJztcbmltcG9ydCBmb2cgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItY29uZGl0aW9uLWljb25zL2ZvZy5zdmcnO1xuaW1wb3J0IHBhcnRseUNsb3VkeURheSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvd2VhdGhlci1jb25kaXRpb24taWNvbnMvcGFydGx5LWNsb3VkeS1kYXkuc3ZnJztcbmltcG9ydCBwYXJ0eWx5Q2xvdWR5TmlnaHQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItY29uZGl0aW9uLWljb25zL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnJztcbmltcG9ydCByYWluIGZyb20gJy4vYXNzZXRzL2ltYWdlcy93ZWF0aGVyLWNvbmRpdGlvbi1pY29ucy9yYWluLnN2Zyc7XG5pbXBvcnQgc25vdyBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvd2VhdGhlci1jb25kaXRpb24taWNvbnMvc25vdy5zdmcnO1xuaW1wb3J0IHdpbmQgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3dlYXRoZXItY29uZGl0aW9uLWljb25zL3dpbmQuc3ZnJztcblxuLy8gRmV0Y2hlcyBhbmQgcmV0dXJucyB3ZWF0aGVyIGRhdGEgSlNPTlxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgIGNvbnN0IGZldGNoZWREYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT9rZXk9TFY3R0RLNDJHQVlTRktTM1NFUEFOTUZKTGBcbiAgICApO1xuXG4gICAgaWYgKCFmZXRjaGVkRGF0YS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZmV0Y2hlZERhdGEuc3RhdHVzKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoZWREYXRhLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHdlYXRoZXJJbmZvOiB3ZWF0aGVyRGF0YS5kYXlzLFxuICAgICAgICBhZGRyZXNzOiB3ZWF0aGVyRGF0YS5yZXNvbHZlZEFkZHJlc3NcbiAgICB9O1xufVxuXG4vLyBEaXNwbGF5cyBmZXRjaGVkIHdlYXRoZXJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZldGNoZWRXZWF0aGVyRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGZldGNoZWRXZWF0aGVyRGF0YSk7XG5cbiAgICAgICAgZGlzcGxheVdlYXRoZXJMb2NhdGlvbkluZm9ybWF0aW9uKGZldGNoZWRXZWF0aGVyRGF0YSk7XG4gICAgICAgIGRlZmF1bHRUb0NlbHNpdXMoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0VG9DZWxzaXVzKCkge1xuICAgIGNvbnN0IHRlbXBTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLXNjYWxlJyk7XG5cbiAgICB0ZW1wU2NhbGUudGV4dENvbnRlbnQgPSBjaGFuZ2VUZW1wU2NhbGVEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItbG9jYXRpb24nKTtcblxuICAgIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRUZW1wZXJhdHVyZSh3ZWF0aGVyVGVtcEFuZEljb24pIHtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWF0aGVyLWljb24nKTtcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10ZW1wZXJhdHVyZScpO1xuXG4gICAgY29uc3Qgd2VhdGhlckljb25zID0ge1xuICAgICAgICAnY2xlYXItZGF5JzogY2xlYXJEYXksXG4gICAgICAgICdjbGVhci1uaWdodCc6IGNsZWFyTmlnaHQsXG4gICAgICAgIGNsb3VkeTogY2xvdWR5LFxuICAgICAgICBmb2c6IGZvZyxcbiAgICAgICAgJ3BhcnRseS1jbG91ZHktZGF5JzogcGFydGx5Q2xvdWR5RGF5LFxuICAgICAgICAncGFydGx5LWNsb3VkeS1uaWdodCc6IHBhcnR5bHlDbG91ZHlOaWdodCxcbiAgICAgICAgcmFpbjogcmFpbixcbiAgICAgICAgc25vdzogc25vdyxcbiAgICAgICAgd2luZDogd2luZFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJJY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdlYXRoZXJJY29uW2ldLnNyYyA9IHdlYXRoZXJJY29uc1t3ZWF0aGVyVGVtcEFuZEljb25baV0uaWNvbl07XG4gICAgfVxuXG4gICAgY3VycmVudFRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gd2VhdGhlclRlbXBBbmRJY29uWzBdLnRlbXA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEYXRhKHdlYXRoZXJNaW5NYXhDb25kaXRpb25zKSB7XG4gICAgY29uc3QgdGVtcE1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wLW1heCcpO1xuICAgIGNvbnN0IHRlbXBNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGVtcC1taW4nKTtcbiAgICBjb25zdCB3ZWF0aGVyQ29uZGl0aW9uc0N1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnLndlYXRoZXItY29uZGl0aW9ucy1jdXJyZW50J1xuICAgICk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBNYXgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGVtcE1heFtpXS50ZXh0Q29udGVudCA9IHdlYXRoZXJNaW5NYXhDb25kaXRpb25zW2ldLnRlbXBtYXg7XG4gICAgICAgIHRlbXBNaW5baV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyTWluTWF4Q29uZGl0aW9uc1tpXS50ZW1wbWluO1xuICAgICAgICB3ZWF0aGVyQ29uZGl0aW9uc0N1cnJlbnRbaV0udGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgd2VhdGhlck1pbk1heENvbmRpdGlvbnNbaV0uY29uZGl0aW9ucztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJEZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWRlc2NyaXB0aW9uIHAnKTtcblxuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uWzBdLmRlc2NyaXB0aW9uO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlckxvY2F0aW9uSW5mb3JtYXRpb24od2VhdGhlckRhdGEpIHtcbiAgICAvLyBEaXNwbGF5IHdlYXRoZXIgbG9jYXRpb24gbmFtZVxuICAgIHVwZGF0ZUxvY2F0aW9uTmFtZSh3ZWF0aGVyRGF0YS5hZGRyZXNzKTtcblxuICAgIC8vIERpc3BsYXkgd2VhdGhlciBsb2NhdGlvbiB3ZWF0aGVyIGNvbmRpdGlvbiBpY29uIGFuZCBjdXJyZW50IHRlbXBlcmF0dXJlXG4gICAgdXBkYXRlQ3VycmVudFRlbXBlcmF0dXJlKHdlYXRoZXJEYXRhLndlYXRoZXJJbmZvKTtcblxuICAgIC8vIERpc3BsYXkgbWluIHRlbXAsIG1heCB0ZW1wIGFuZCB3ZWF0aGVyIGNvbmRpdGlvbnNcbiAgICB1cGRhdGVXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YS53ZWF0aGVySW5mbyk7XG5cbiAgICAvLyBEaXNwbGF5IHdlYXRoZXIgZGVzY3JpcHRpb25cbiAgICB1cGRhdGVXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckRhdGEud2VhdGhlckluZm8pO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUZW1wU2NhbGUoKSB7XG4gICAgY29uc3QgY2hhbmdlVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuZ2UtdGVtcCcpO1xuICAgIGNvbnN0IHRlbXBTY2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLXNjYWxlJyk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgY3VycmVudCB0ZW1wIHNjYWxlXG4gICAgY2hhbmdlVGVtcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlVGVtcCh0ZW1wU2NhbGUudGV4dENvbnRlbnQpO1xuICAgICAgICB0ZW1wU2NhbGUudGV4dENvbnRlbnQgPSBjaGFuZ2VUZW1wU2NhbGVEaXNwbGF5KHRlbXBTY2FsZS50ZXh0Q29udGVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRpc3BsYXlXZWF0aGVyRGF0YSwgY2hhbmdlVGVtcFNjYWxlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=