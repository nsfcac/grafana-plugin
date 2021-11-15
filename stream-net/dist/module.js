define(["@emotion/css","@grafana/data","@grafana/ui","d3","emotion","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__emotion_css__, __WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./mapviz.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./mapviz.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".onhighlight2 .linkg .links, .onhighlight2 .linkg .links.highlight2.hide {\n  transition: opacity 2s;\n  opacity: 0;\n  display: none;\n}\n\n.onhighlight2 .nodeg .node {\n  transition: opacity 2s;\n  opacity: 0.1;\n  pointer-events: none !important;\n}\n\n.onhighlight2 .nodeg .node .userNodeImg {\n  pointer-events: none !important;\n}\n\n.onhighlight2 .nodeg .node.highlight2 .userNodeImg {\n  pointer-events: auto;\n}\n\n.onhighlight2 .nodeg .node.fade, .onhighlight2 .nodeg .node.highlight2.fade {\n  opacity: 0;\n}\n\n.onhighlight2 .linkg .links.highlight2 {\n  transition: opacity 2s;\n  display: block;\n  opacity: 1;\n}\n\n.onhighlight2 .nodeg .node.highlight2, .onhighlight2 .nodeg .node.highlight2.highlight {\n  transition: opacity 2s;\n  opacity: 1;\n  pointer-events: all !important;\n}", "",{"version":3,"sources":["mapviz.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,+BAA+B;AACjC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,8BAA8B;AAChC","file":"mapviz.css","sourcesContent":[".onhighlight2 .linkg .links, .onhighlight2 .linkg .links.highlight2.hide {\n  transition: opacity 2s;\n  opacity: 0;\n  display: none;\n}\n\n.onhighlight2 .nodeg .node {\n  transition: opacity 2s;\n  opacity: 0.1;\n  pointer-events: none !important;\n}\n\n.onhighlight2 .nodeg .node .userNodeImg {\n  pointer-events: none !important;\n}\n\n.onhighlight2 .nodeg .node.highlight2 .userNodeImg {\n  pointer-events: auto;\n}\n\n.onhighlight2 .nodeg .node.fade, .onhighlight2 .nodeg .node.highlight2.fade {\n  opacity: 0;\n}\n\n.onhighlight2 .linkg .links.highlight2 {\n  transition: opacity 2s;\n  display: block;\n  opacity: 1;\n}\n\n.onhighlight2 .nodeg .node.highlight2, .onhighlight2 .nodeg .node.highlight2.highlight {\n  transition: opacity 2s;\n  opacity: 1;\n  pointer-events: all !important;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./MainViz.tsx":
/*!*********************!*\
  !*** ./MainViz.tsx ***!
  \*********************/
/*! exports provided: MainViz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViz", function() { return MainViz; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapViz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapViz */ "./MapViz.tsx");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawer */ "./drawer.tsx");
/* harmony import */ var StreamLegend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! StreamLegend */ "./StreamLegend.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // import {stylesFactory} from '@grafana/ui';

 // import{Timeline} from './Timeline'







;
var MainViz = /*#__PURE__*/function (_React$Component) {
  _inherits(MainViz, _React$Component);

  var _super = _createSuper(MainViz);

  function MainViz(props) {
    var _this;

    _classCallCheck(this, MainViz);

    _this = _super.call(this, props);
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      data: [],
      datas: [],
      dataByTime: {},
      dimensions: [],
      selectedService: 0,
      timeStamp: [],
      scheme: {
        computers: {},
        emptyMap: {},
        jobArr: {},
        jobs: {},
        minMaxData: {},
        timespan: [],
        tsnedata: {},
        userArr: {},
        users: {}
      },
      drawThreshold: 650 / 700
    };
    return _this;
  }

  _createClass(MainViz, [{
    key: "widthView",
    value: function widthView() {
      var _a;

      return this.props.width * ((_a = this.state.scalezoom) !== null && _a !== void 0 ? _a : 1);
    }
  }, {
    key: "heightView",
    value: function heightView() {
      var _a;

      return this.props.height * ((_a = this.state.scalezoom) !== null && _a !== void 0 ? _a : 1);
    }
  }, {
    key: "widthG",
    value: function widthG() {
      var _a, _b;

      return this.widthView() - ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).left - ((_b = this.state.margin) !== null && _b !== void 0 ? _b : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).right;
    }
  }, {
    key: "heightG",
    value: function heightG() {
      var _a, _b;

      return this.heightView() - ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).top - ((_b = this.state.margin) !== null && _b !== void 0 ? _b : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).bottom;
    }
  }, {
    key: "centerX",
    value: function centerX() {
      var _a;

      return ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).left + this.widthG() / 2;
    }
  }, {
    key: "centerY",
    value: function centerY() {
      var _a;

      return ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).top + this.heightG() / 2;
    }
  }, {
    key: "r",
    value: function r() {
      var _a;

      return ((_a = d3__WEBPACK_IMPORTED_MODULE_3__["min"]([this.props.width, this.props.height])) !== null && _a !== void 0 ? _a : 0) / 2 - 20;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var opt = this.handleData();
      if (opt.dimensions) opt.selectedService = 0;
      this.setState(opt);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.data !== prevProps.data) {
        var opt = this.handleData();
        if (opt.dimensions) opt.selectedService = 0;
        this.setState(opt);
      }
    }
  }, {
    key: "sorByService",
    value: function sorByService(data, service) {
      data.sort(function (a, b) {
        return a[service] - b[service];
      }).forEach(function (d, i) {
        return d.order = i;
      });
    }
  }, {
    key: "handleData",
    value: function handleData() {
      var _a;

      var data = this.props.data;
      var userEncoded = this.props.options.userEncoded;
      var dataByTime = {};
      var datas = new Array();
      var nodeLists = new Map();
      var dimensions = [];
      var dimensionObject = {};
      var timeObject = {};
      var scheme = {
        computers: {},
        emptyMap: {},
        jobArr: {},
        jobs: {},
        minMaxData: {},
        timespan: [],
        tsnedata: {},
        userArr: {},
        users: {}
      };

      function getDim(range, order, dim) {
        var scale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain(range);
        var dimControl = {
          range: range,
          scale: scale,
          order: order,
          text: dim,
          active: new Array(),
          tickFormat: undefined
        };
        return dimControl;
      }

      function handleDataWithname(serie) {
        var _a, _b, _c;

        var dim = (_a = serie.refId) !== null && _a !== void 0 ? _a : '';
        var times = serie.fields.find(function (e) {
          return e.name === 'time';
        });
        var values = serie.fields.find(function (e) {
          return e.name === 'value';
        });
        var nodeids = serie.fields.find(function (e) {
          return e.name === 'name';
        });
        var dimTarget = dimensionObject[dim];
        var range = dimTarget ? [(_b = dimTarget.range[0]) !== null && _b !== void 0 ? _b : Infinity, (_c = dimTarget.range[1]) !== null && _c !== void 0 ? _c : -Infinity] : [Infinity, -Infinity];

        if (nodeids && nodeids.values && times && times.values && values && values.values) {
          var nodeid = nodeids.values.toArray();
          nodeid.forEach(function (id, i) {
            if (!dataByTime.hasOwnProperty(id)) {
              dataByTime[id] = {};
            }

            var val = values.values.get(i);

            if (!dataByTime[id][times.values.get(i)]) {
              var item = {
                time: times.values.get(i),
                order: 0,
                id: id
              };
              datas.push(item);
              nodeLists.set(id, true);
              dataByTime[id][times.values.get(i)] = item;
            }

            dataByTime[id][times.values.get(i)][dim] = val;
            if (val < range[0]) range[0] = val;
            if (val > range[1]) range[1] = val;
          });
        }

        if (!dimTarget) // new Dimension
          {
            dimensionObject[dim] = getDim(range, dimensions.length, dim);
            dimensions.push(dimensionObject[dim]);
          } else {
          dimTarget.range = range;
          dimTarget.scale.domain(range);
        }
      }

      function handleDataWithnames(serie) {
        var times = serie.fields.find(function (e) {
          return e.name === 'time';
        });

        if (times) {
          serie.fields.filter(function (e) {
            return e.type === 'number';
          }).forEach(function (d) {
            var _a, _b;

            if (d.labels) {
              var dim = d.name;
              var id = '';

              if (dim === 'value') {
                var str = Object.values(d.labels)[0].split('|');
                id = str[0].trim();
                dim = str[1].trim();
              } else {
                id = Object.values(d.labels)[0].replace('|', '').trim();
              }

              if (!dataByTime[id]) {
                dataByTime[id] = {};
              }

              var dimTarget = dimensionObject[dim];
              var range = dimTarget ? [(_a = dimTarget.range[0]) !== null && _a !== void 0 ? _a : Infinity, (_b = dimTarget.range[1]) !== null && _b !== void 0 ? _b : -Infinity] : [Infinity, -Infinity];
              d.values.toArray().forEach(function (val, i) {
                if (!dataByTime[id][times.values.get(i)]) {
                  var item = {
                    time: times.values.get(i),
                    order: 0,
                    id: id
                  };
                  datas.push(item);
                  nodeLists.set(id, true);
                  dataByTime[id][times.values.get(i)] = item;
                }

                dataByTime[id][times.values.get(i)][dim] = val;

                if (val !== null) {
                  if (val < range[0]) range[0] = val;
                  if (val > range[1]) range[1] = val;
                }
              });

              if (!dimTarget) // new Dimension
                {
                  dimensionObject[dim] = getDim(range, dimensions.length, dim);
                  dimensions.push(dimensionObject[dim]);
                } else {
                dimTarget.range = range;
                dimTarget.scale.domain(range);
              }
            }
          });
        }
      }

      function handleJobData(serie, userEncoded) {
        var job_ids = serie.fields.find(function (e) {
          return e.name === 'job_id';
        });
        var job_names = serie.fields.find(function (e) {
          return e.name === 'name';
        });
        var node_lists = serie.fields.find(function (e) {
          return e.name === 'nodes';
        });
        var user_names = serie.fields.find(function (e) {
          return e.name === 'user_name';
        });
        var start_times = serie.fields.find(function (e) {
          return e.name === 'start_time';
        });
        var end_times = serie.fields.find(function (e) {
          return e.name === 'end_time';
        }); // console.log(serie)

        var jobs = {};
        var userEncode = {};

        if (user_names) {
          if (userEncoded) {
            var userCodecount = 1;
            user_names.values.toArray().forEach(function (name, i) {
              if (!userEncode[name]) {
                userEncode[name] = 'user' + userCodecount;
                userCodecount++;
              }
            });
          } else {
            user_names.values.toArray().forEach(function (name, i) {
              userEncode[name] = name;
            });
          }
        }

        if (job_ids && job_names && node_lists && user_names && start_times && end_times) {
          job_ids.values.toArray().map(function (job_id, i) {
            var user_name = userEncode[user_names.values.get(i)];
            var job_name = job_names.values.get(i);
            var start_time = start_times.values.get(i) * 1000;
            var end_time = end_times.values.get(i) * 1000;
            var nodestring = node_lists.values.get(i).replace(/\{|\}/g, '');
            var node_list = nodestring === '' ? [] : nodestring.split(',');
            var node_list_obj = {};
            node_list.forEach(function (n) {
              return node_list_obj[n] = 1;
            });
            if (node_list.length) jobs[job_id] = {
              job_id: job_id,
              user_name: user_name,
              job_name: job_name,
              node_list: node_list,
              node_list_obj: node_list_obj,
              _node_list: node_list.slice(),
              _node_list_obj: Object.assign({}, node_list_obj),
              summary: [],
              start_time: start_time,
              finish_time: end_time
            };
          });
        }

        return jobs;
      }

      data.series.forEach(function (serie) {
        if (serie.fields.length) {
          var time = serie.fields.find(function (e) {
            return e.name === 'time';
          });

          if (time) {
            if (!(serie.fields.find(function (e) {
              return e.name === 'jobs';
            }) && serie.fields.find(function (e) {
              return e.name === 'cpus';
            }))) {
              time.values.toArray().forEach(function (t) {
                timeObject[t] = t;
              });
              if (serie.fields.find(function (e) {
                return e.name === 'name';
              })) handleDataWithname(serie);else handleDataWithnames(serie);
            }
          } else {
            scheme.jobs = handleJobData(serie, userEncoded);
          }
        }
      });
      var timeStamp = (_a = Object.values(timeObject).sort(function (a, b) {
        return +a - +b;
      })) !== null && _a !== void 0 ? _a : [];
      dimensions.sort(function (a, b) {
        return a.order - b.order;
      }).forEach(function (d, i) {
        d.order = i;
        d.angle = i / dimensions.length * 2 * Math.PI;
      });
      var jobs = scheme.jobs; //add none value node

      Object.keys(jobs).forEach(function (k) {
        var d = jobs[k];
        d._node_list = d.node_list.slice();

        d._node_list.forEach(function (id) {
          if (!dataByTime[id]) {
            dataByTime[id] = {};
            timeStamp.forEach(function (_t) {
              var t = '' + _t;
              var val = undefined;
              var item = {
                time: t,
                order: 0,
                id: id
              };
              datas.push(item);
              nodeLists.set(id, true);
              dataByTime[id][t] = item;
              dimensions.forEach(function (dim) {
                dataByTime[id][t][dim.text] = val;
              });
            });
          }
        });
      });

      var _this$handleSmalldata = this.handleSmalldata(dimensions, dataByTime, timeStamp),
          computers = _this$handleSmalldata.computers,
          tsnedata = _this$handleSmalldata.tsnedata;

      scheme.computers = computers; // remove not exist comp

      Object.keys(jobs).forEach(function (k) {
        var d = jobs[k];
        d.node_list = [];

        d._node_list.forEach(function (comp) {
          if (computers[comp]) d.node_list.push(comp);else delete d.node_list_obj[comp];
        });

        if (d.node_list.length === 0) delete jobs[k];
      });

      var _this$handleCUJ = this.handleCUJ(scheme, timeStamp),
          users = _this$handleCUJ.users;

      var result = this.handleDataComputeByUser(computers, jobs, timeStamp);
      var jobCompTimeline = result.data;
      var noJobMap = result.noJobMap;

      var _this$handleDataCompu = this.handleDataComputeByJob({
        tsnedata: tsnedata,
        computers: computers,
        jobs: jobs,
        users: users,
        timespan: timeStamp
      }),
          jobTimeline = _this$handleDataCompu.jobTimeline,
          jobarrdata = _this$handleDataCompu.jobarrdata,
          userarrdata = _this$handleDataCompu.userarrdata,
          minMaxDataCompJob = _this$handleDataCompu.minMaxDataCompJob,
          minMaxDataUser = _this$handleDataCompu.minMaxDataUser;

      Object.values(jobs).forEach(function (d) {
        d.summary = dimensions.map(function (s, si) {
          var val = {
            mean: jobarrdata[d.job_id] ? d3__WEBPACK_IMPORTED_MODULE_3__["mean"](jobarrdata[d.job_id], function (d) {
              return d ? d[si] : undefined;
            }) : null,
            min: minMaxDataCompJob[d.job_id] ? d3__WEBPACK_IMPORTED_MODULE_3__["min"](minMaxDataCompJob[d.job_id], function (d) {
              return d ? d[0][si] : undefined;
            }) : null,
            max: minMaxDataCompJob[d.job_id] ? d3__WEBPACK_IMPORTED_MODULE_3__["max"](minMaxDataCompJob[d.job_id], function (d) {
              return d ? d[1][si] : undefined;
            }) : null,
            num: jobarrdata[d.job_id].filter(function (d) {
              return (d ? d[si] : undefined) !== undefined;
            }).length
          };
          return val;
        });
      });
      Object.keys(users).forEach(function (k) {
        var d = users[k];
        d.total_nodes = d.node.length;
        d.summary = dimensions.map(function (s, si) {
          var val = {
            mean: userarrdata[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["mean"](userarrdata[k], function (d) {
              return d ? d[si] : undefined;
            }) : null,
            min: minMaxDataUser[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["min"](minMaxDataUser[k], function (d) {
              return d ? d[0][si] : undefined;
            }) : null,
            max: minMaxDataUser[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["max"](minMaxDataUser[k], function (d) {
              return d ? d[1][si] : undefined;
            }) : null,
            num: userarrdata[k].filter(function (d) {
              return (d ? d[si] : undefined) !== undefined;
            }).length
          };
          return val;
        });
      });
      Object.keys(computers).forEach(function (k) {
        var d = computers[k];
        d.summary = dimensions.map(function (s, si) {
          var val = {
            mean: tsnedata[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["mean"](tsnedata[k], function (d) {
              return d ? d[si] : undefined;
            }) : null,
            min: tsnedata[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["min"](tsnedata[k], function (d) {
              return d ? d[si] : undefined;
            }) : null,
            max: tsnedata[k] ? d3__WEBPACK_IMPORTED_MODULE_3__["max"](tsnedata[k], function (d) {
              return d ? d[si] : undefined;
            }) : null,
            num: tsnedata[k] ? tsnedata[k].filter(function (d) {
              return (d ? d[si] : undefined) !== undefined;
            }).length : 0
          };
          return val;
        });
      });
      scheme.users = users;
      scheme.timespan = timeStamp;
      scheme.tsnedata = tsnedata;
      scheme.emptyMap = noJobMap;
      scheme.jobArr = jobarrdata;
      scheme.userArr = userarrdata;
      console.log(scheme);
      return {
        dimensions: dimensions,
        dataByTime: dataByTime,
        timeStamp: timeStamp,
        datas: datas,
        jobCompTimeline: jobCompTimeline,
        jobTimeline: jobTimeline,
        scheme: scheme
      };
    }
  }, {
    key: "handleSmalldata",
    value: function handleSmalldata(dimensions, dataByTime, timeStamp) {
      var tsnedata = {};
      var computers = {};
      Object.keys(dataByTime).forEach(function (comp) {
        var compData = dataByTime[comp];
        tsnedata[comp] = [];
        computers[comp] = {
          job_id: [],
          key: comp,
          user: [],
          drawData: []
        };
        dimensions.forEach(function (dim) {
          return computers[comp][dim.text] = [];
        });
        timeStamp.forEach(function (t, ti) {
          var current = compData['' + t];
          var d = dimensions.map(function (dim) {
            if (current && current[dim.text] !== null) {
              computers[comp][dim.text][ti] = current[dim.text];
              return dim.scale(current[dim.text]);
            }

            return null;
          });
          d.name = comp;
          d.timestep = ti;
          tsnedata[comp][ti] = d;
        });
      });
      return {
        computers: computers,
        tsnedata: tsnedata
      };
    }
  }, {
    key: "handleDataComputeByJob",
    value: function handleDataComputeByJob(input) {
      var _a, _b, _c, _d, _e;

      var tsnedata = (_a = input.tsnedata) !== null && _a !== void 0 ? _a : {};
      var computers = (_b = input.computers) !== null && _b !== void 0 ? _b : {};

      var _jobs = (_c = input.jobs) !== null && _c !== void 0 ? _c : {};

      var _users = (_d = input.users) !== null && _d !== void 0 ? _d : {};

      var jobs = {};
      var users = {};
      var jobarrdata = {};
      var _jobarrdata = {};
      var userarrdata = {};
      var _userarrdata = {};
      var minMaxDataCompJob = {};
      var minMaxDataUser = {};
      var timespan = (_e = input.timespan) !== null && _e !== void 0 ? _e : [];
      Object.keys(_jobs).forEach(function (k) {
        // if (_jobs[k].total_nodes>1){
        jobs[k] = _jobs[k];
        _jobarrdata[k] = [];
        jobarrdata[k] = [];
        minMaxDataCompJob[k] = [];

        if (!jobs[k].isJobarray) {
          users[_jobs[k].user_name] = _users[_jobs[k].user_name];
          userarrdata[_jobs[k].user_name] = [];
          _userarrdata[_jobs[k].user_name] = [];
          minMaxDataUser[_jobs[k].user_name] = [];
        } else {
          jobs[k].comp = {};
        } // }

      });
      var data = [];

      var _loop = function _loop(comp) {
        var item = {
          key: comp,
          values: [],
          range: [Infinity, -Infinity],
          data: computers[comp]
        };
        var job = {};
        computers[comp].job_id.forEach(function (jIDs, i) {
          var jobArr = jIDs.map(function (j) {
            return jobs[j];
          }).filter(function (d) {
            if (d) {
              if (!_jobarrdata[d.job_id][i]) {
                var empty = [];
                empty.name = '';
                empty.timestep = 0;
                _jobarrdata[d.job_id][i] = empty;
              }

              var tsne_comp = tsnedata[comp];
              if (tsne_comp) _jobarrdata[d.job_id][i].push(tsne_comp[i]);

              if (!_userarrdata[d.user_name][i]) {
                var _empty = [];
                _empty.name = '';
                _empty.timestep = 0;
                _userarrdata[d.user_name][i] = _empty;
              }

              if (tsne_comp) _userarrdata[d.user_name][i].push(tsne_comp[i]);

              if (d.job_array_id) {
                if (!_jobarrdata[d.job_array_id][i]) {
                  var _empty2 = [];
                  _empty2.name = '';
                  _empty2.timestep = 0;
                  _jobarrdata[d.job_array_id][i] = _empty2;
                }

                if (!jobs[d.job_array_id].comp[i]) jobs[d.job_array_id].comp[i] = {};

                if (!jobs[d.job_array_id].comp[i][comp]) {
                  jobs[d.job_array_id].comp[i][comp] = 1;

                  _jobarrdata[d.job_array_id][i].push(tsnedata[comp][i]);
                }
              }

              return true;
            }

            return false;
          });
          var key = jobArr.map(function (d) {
            return d.job_id;
          }).toString();
          if (!job[key]) job[key] = true;else jobArr = [];

          if (jobArr.length) {
            var username = d3__WEBPACK_IMPORTED_MODULE_3__["nest"]().key(function (d) {
              return d.job_id;
            }).rollup(function (d) {
              return d3__WEBPACK_IMPORTED_MODULE_3__["sum"](d, function (e) {
                return e.node_list_obj[comp];
              });
            }).entries(jobArr); // username.total = d3.sum(username,e=>e.value)

            username.sort(function (a, b) {
              return d3__WEBPACK_IMPORTED_MODULE_3__["ascending"](a.key, b.key);
            });
            item.values.push(username);
          } else item.values.push(null);

          item['' + timespan[i]] = item.values[i];
        });
        data.push(item);
      };

      for (var comp in computers) {
        _loop(comp);
      }

      Object.keys(_jobarrdata).forEach(function (k) {
        _jobarrdata[k].forEach(function (d, i) {
          var timestep = _jobarrdata[k][i][0].timestep;
          var valueMin = [];
          var valueMax = [];

          var value = _jobarrdata[k][i][0].map(function (d, si) {
            var vals = _jobarrdata[k][i].map(function (d) {
              return d[si];
            });

            valueMin.push(d3__WEBPACK_IMPORTED_MODULE_3__["min"](vals));
            valueMax.push(d3__WEBPACK_IMPORTED_MODULE_3__["max"](vals));
            return d3__WEBPACK_IMPORTED_MODULE_3__["mean"](vals);
          });

          value.name = k;
          valueMin.name = k;
          valueMax.name = k;
          value.timestep = timestep;
          valueMin.timestep = timestep;
          valueMax.timestep = timestep;
          minMaxDataCompJob[k][i] = [valueMin, valueMax];
          jobarrdata[k][i] = value;
        });
      });
      Object.keys(_userarrdata).forEach(function (k) {
        _userarrdata[k].forEach(function (d, i) {
          var timestep = _userarrdata[k][i][0].timestep;
          var valueMin = [];
          var valueMax = [];

          var value = _userarrdata[k][i][0].map(function (d, si) {
            var vals = _userarrdata[k][i].map(function (d) {
              return d[si];
            });

            valueMin.push(d3__WEBPACK_IMPORTED_MODULE_3__["min"](vals));
            valueMax.push(d3__WEBPACK_IMPORTED_MODULE_3__["max"](vals));
            return d3__WEBPACK_IMPORTED_MODULE_3__["mean"](vals);
          });

          value.name = k;
          valueMin.name = k;
          valueMax.name = k;
          value.timestep = timestep;
          valueMin.timestep = timestep;
          valueMax.timestep = timestep;
          minMaxDataUser[k][i] = [valueMin, valueMax];
          userarrdata[k][i] = value;
        });
      });
      data.sort(function (a, b) {
        return +a.range[0] - b.range[0];
      });
      return {
        jobTimeline: data,
        jobarrdata: jobarrdata,
        userarrdata: userarrdata,
        minMaxDataCompJob: minMaxDataCompJob,
        minMaxDataUser: minMaxDataUser
      };
    }
  }, {
    key: "handleDataComputeByUser",
    value: function handleDataComputeByUser(computers, jobs, timeStamp) {
      //start
      var data = [];
      var obj = {};
      var noJobMap = {};

      for (var j in jobs) {
        obj[j] = {
          key: j,
          values: timeStamp.map(function (t) {
            return null;
          }),
          range: [Infinity, -Infinity],
          data: jobs[j],
          arr: []
        };
        data.push(obj[j]);
      }

      var _loop2 = function _loop2(comp) {
        var jonj = {};
        noJobMap[comp] = [];
        computers[comp].job_id.forEach(function (jIDs, i) {
          if (jIDs.length) {
            jIDs.forEach(function (j) {
              var _a;

              if (!jonj[j]) {
                var item = obj[j];

                if (!item.values[i]) {
                  item.values[i] = []; // @ts-ignore

                  item.values[i].total = 0;
                }

                var compData = {
                  key: comp,
                  type: 'compute',
                  value: 1
                };
                var userData = {
                  key: jobs[j].user_name,
                  type: 'user',
                  value: 1
                };
                var current = item.values[i];

                if (current !== null && current.length) {
                  current.push(compData); // item.values[i].push(userData);

                  current.total = ((_a = current.total) !== null && _a !== void 0 ? _a : 0) + jobs[j].node_list_obj[comp]; // item.arr.push({time:Layout.timespan[i],value:[compData,{key:j,type:'job',value:1},userData]});

                  item.arr.push({
                    time: timeStamp[i],
                    value: [{
                      key: j,
                      type: 'job',
                      value: 1
                    }, userData]
                  });
                  item.arr.push({
                    time: timeStamp[i],
                    value: [compData, {
                      key: j,
                      type: 'job',
                      value: 1
                    }]
                  });

                  if (jobs[j].job_array_id) {
                    // item.arr.push({time:Layout.timespan[i],value:[compData,{key:jobs[j].job_array_id,type:'job',value:1},userData]});
                    item.arr.push({
                      time: timeStamp[i],
                      value: [compData, {
                        key: jobs[j].job_array_id,
                        type: 'job',
                        value: 1
                      }]
                    });
                    item.arr.push({
                      time: timeStamp[i],
                      value: [{
                        key: jobs[j].job_array_id,
                        type: 'job',
                        value: 1
                      }, userData]
                    });
                  }
                }

                jonj[j] = true;
              }
            });
          } else {
            noJobMap[comp][i] = 1;
          }
        });
      };

      for (var comp in computers) {
        _loop2(comp);
      } // data.sort((a,b)=>+a.range[0]-b.range[0])


      return {
        data: data,
        noJobMap: noJobMap
      };
    } // @ts-ignore

  }, {
    key: "handleCUJ",
    value: function handleCUJ(_ref, timestamp) {
      var computers = _ref.computers,
          jobs = _ref.jobs;
      var users = {};
      Object.keys(computers).forEach(function (k) {
        var d = computers[k];
        d.user = timestamp.map(function () {
          return [];
        });
        d.jobName = timestamp.map(function () {
          return [];
        });
        d.job_id = timestamp.map(function () {
          return [];
        });
      });
      var jobData = d3__WEBPACK_IMPORTED_MODULE_3__["entries"](jobs);

      if (timestamp.length) {
        jobData.forEach(function (j) {
          j.value.start_Index = timestamp.findIndex(function (t) {
            return t > j.value.start_time;
          });
          if (j.value.start_Index > 0) j.value.start_Index--;else if (j.value.start_Index === -1) j.value.start_Index = timestamp.length - 1;
          j.value.finish_Index = j.value.finish_time ? timestamp.findIndex(function (t) {
            return t > j.value.finish_time;
          }) : -1;
          if (j.value.finish_Index > 0) j.value.finish_Index--;else if (j.value.finish_Index === -1) j.value.finish_Index = timestamp.length - 1;
          j.value.node_list.forEach(function (comp) {
            if (computers[comp]) {
              for (var t = j.value.start_Index; t < j.value.finish_Index + 1; t++) {
                computers[comp].job_id[t].push(j.key);
              }
            }
          });
        });
      }

      var user_job = d3__WEBPACK_IMPORTED_MODULE_3__["nest"]().key(function (d) {
        return d.value['user_name'];
      }) //user
      .key(function (d) {
        return d.key.split('.')[0];
      }) //job array
      .object(jobData);
      Object.keys(user_job).forEach(function (k, i) {
        var u = user_job[k];
        var job = [];
        var totalCore = 0; // @ts-ignore

        var node = lodash__WEBPACK_IMPORTED_MODULE_4__["uniq"](lodash__WEBPACK_IMPORTED_MODULE_4__["flattenDeep"](lodash__WEBPACK_IMPORTED_MODULE_4__["values"](u).map(function (d) {
          return d.map(function (d) {
            return job.push(d.key), totalCore += d.value.cpu_cores, d.value.node_list;
          });
        })));

        node.forEach(function (c) {
          return computers[c] ? computers[c].user.push(i) : '';
        });
        users[k] = {
          node: node,
          job: job,
          totalCore: totalCore
        };
      });
      return {
        users: users
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var styles = getStyles();
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
      var _this$state = this.state,
          dimensions = _this$state.dimensions,
          drawThreshold = _this$state.drawThreshold,
          selectedService = _this$state.selectedService;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer, null, function (theme) {
        var _a, _b;

        return dimensions[0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            width: width + ' px',
            height: height + ' px',
            position: 'relative'
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapViz__WEBPACK_IMPORTED_MODULE_2__["default"], {
          width: width,
          height: height,
          data: _this2.state.scheme,
          serviceSelected: selectedService !== null && selectedService !== void 0 ? selectedService : 0,
          drawThreshold: drawThreshold,
          dimensions: _this2.state.dimensions,
          highlightStream: 'none',
          theme: theme,
          scaleService: []
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_drawer__WEBPACK_IMPORTED_MODULE_6__["Drawer"], {
          open: true,
          className: styles.legend
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
          onChange: function onChange(event) {
            _this2.setState({
              selectedService: +event.target.value
            });
          }
        }, dimensions.map(function (d) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
            key: d.text,
            value: d.order
          }, d.text);
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            position: 'relative',
            padding: 5
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StreamLegend__WEBPACK_IMPORTED_MODULE_7__["StreamLegend"], {
          style: {
            marginTop: 10
          },
          min: (_a = dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0].range[0]) !== null && _a !== void 0 ? _a : 0,
          max: (_b = dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0].range[1]) !== null && _b !== void 0 ? _b : 0,
          drawThreshold: drawThreshold,
          width: 300,
          theme: theme
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            position: 'absolute',
            top: 0,
            left: 2
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Threshold: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: 'number',
          style: {
            width: 70
          },
          value: dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0] ? d3__WEBPACK_IMPORTED_MODULE_3__["format"]('.2f')(dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0].scale.invert(drawThreshold)) : 0,
          onChange: function onChange(event) {
            _this2.setState({
              drawThreshold: dimensions[selectedService !== null && selectedService !== void 0 ? selectedService : 0].scale(+event.target.value)
            });
          }
        }))) : '')) : 'No data';
      });
    }
  }]);

  return MainViz;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
MainViz.defaultProps = {
  width: 100,
  height: 100,
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  scalezoom: 1 // nodePerRing: 50,
  // nodeSize:5

};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      position: relative;\n    "]))),
    legend: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow-y:auto;\n      height: 145px;\n    "])))
  };
});

/***/ }),

/***/ "./MapViz.tsx":
/*!********************!*\
  !*** ./MapViz.tsx ***!
  \********************/
/*! exports provided: yUpperScale, yDownerScale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yUpperScale", function() { return yUpperScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yDownerScale", function() { return yDownerScale; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ "./Text.tsx");
/* harmony import */ var NodeElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! NodeElement */ "./NodeElement.tsx");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mapviz_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapviz.css */ "./mapviz.css");
/* harmony import */ var _mapviz_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mapviz_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // import * as _ from "lodash"




 // function moveToFront (path:Selection<any, any, any, any>) {
//     return path.each(function (this:SVGElement) {
//         if(this.parentNode)
//             this.parentNode.appendChild(this);
//     });
// };

var userIcon = __webpack_require__(/*! ./img/u.png */ "./img/u.png");

var userpicNoBorder = __webpack_require__(/*! ./img/uNoBorder.png */ "./img/uNoBorder.png");

var graphicopt = {
  svg: '#Chartcontent',
  margin: {
    top: 40,
    right: 10,
    bottom: 0,
    left: 100
  },
  offset: {
    top: 0
  },
  width: 1500,
  height: 700,
  scalezoom: 1,
  widthView: function widthView() {
    return this.width * this.scalezoom;
  },
  heightView: function heightView() {
    return this.height * this.scalezoom;
  },
  widthG: function widthG() {
    return this.widthView() - this.margin.left - this.margin.right;
  },
  heightG: function heightG() {
    return this.heightView() - this.margin.top - this.margin.bottom;
  },
  userPos: function userPos() {
    return this.widthG() - 420;
  },
  jobPos: function jobPos() {
    return this.userPos() - 120;
  },
  computePos: function computePos() {
    return this.jobPos() - 120;
  },
  display: {
    links: {
      'stroke-opacity': 0.7
    },
    stream: {
      yScale: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, 20]),
      yScaleUp: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 1 - 650 / 800]).range([0, 10]),
      yScaleDown: d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([-650 / 800, 0]).range([-5, 0])
    }
  },
  user: {
    r: 10
  },
  job: {
    r: 10,
    r_inside: 2
  },
  radaropt: {
    // summary:{quantile:true},
    mini: true,
    levels: 6,
    gradient: true,
    w: 20,
    h: 20,
    showText: false,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  userStreamMode: 'Power'
};
;
;
var yUpperScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, 1 - 650 / 800]).range([0, 20]);
var yDownerScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([-650 / 800, 0]).range([-15, 0]);

var MapViz = /*#__PURE__*/function (_React$Component) {
  _inherits(MapViz, _React$Component);

  var _super = _createSuper(MapViz);

  function MapViz(props) {
    var _this;

    _classCallCheck(this, MapViz);

    _this = _super.call(this, props);
    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this._height = 0;
    _this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]();
    _this.scaleNode_y_middle = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]();

    _this.contrastColor = function () {
      return _this.props.theme.colors.text.primary;
    };

    _this.area_compute_up = d3__WEBPACK_IMPORTED_MODULE_1__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveCatmullRom"]).x(function (d) {
      return _this.xScale(d.timestep);
    }).y0(function (d) {
      var val = d.value[0];
      return val !== undefined ? -yUpperScale(val) : 0;
    }).y1(function (d) {
      var val = d.value[1];
      return val !== undefined ? -yUpperScale(val) : 0;
    }).defined(function (d) {
      return d && d.value[0] !== undefined;
    });
    _this.area_compute_down = d3__WEBPACK_IMPORTED_MODULE_1__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveCatmullRom"]).x(function (d) {
      return _this.xScale(d.timestep);
    }).y0(function (d) {
      var val = d.value[0];
      return val !== undefined ? -yDownerScale(val) : 0;
    }).y1(function (d) {
      var val = d.value[1];
      return val !== undefined ? -yDownerScale(val) : 0;
    }).defined(function (d) {
      return d && d.value[0] !== undefined;
    });
    _this.animation_time = 2000;
    _this.yscale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]();
    _this.scaleJob = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]();
    _this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](null);
    _this.g = d3__WEBPACK_IMPORTED_MODULE_1__["select"](null);
    _this.linkg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](null);
    _this.nodeg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](null);
    _this.table_headerNode = d3__WEBPACK_IMPORTED_MODULE_1__["select"](null);
    _this.state = {
      freezing: false,
      // data: {
      //     computers: {},
      //     emptyMap: {},
      //     jobArr: {},
      //     jobs: {},
      //     minMaxData: {},
      //     timespan: [],
      //     tsnedata: {},
      //     userArr: {},
      //     users: {},
      // },
      // datas: [],
      // dataByTime: {},
      dimensions: [],
      selectedService: '',
      scalezoom: 1,
      margin: {
        top: 40,
        right: 10,
        bottom: 0,
        left: 100
      },
      fisheye_scale: {
        x: function x(d) {
          return d;
        },
        y: function y(d) {
          return d;
        }
      },
      // selectedTime: new Date(),
      // timeStamp:[]
      _computers: [],
      jobsObj: {},
      computersObj: {},
      usersObj: {},
      linkob: {},
      tableData: {},
      users: [],
      jobs: [],
      computers: [],
      linkdata: [],
      tableHeader: [],
      tableLayout: {
        row: {
          width: 500,
          height: 20,
          'graph-width': 85
        },
        column: {
          'UserID': {
            id: 'UserID',
            type: 'text',
            x: 10,
            y: 20,
            width: 60
          },
          'Hosts': {
            id: 'Hosts',
            text: '#Computes',
            type: 'num',
            x: 120,
            y: 20,
            width: 60
          },
          'Jobs': {
            id: 'Jobs',
            text: '#Jobs',
            type: 'num',
            x: 170,
            y: 20,
            width: 52
          }
        }
      }
    };
    return _this;
  }

  _createClass(MapViz, [{
    key: "widthView",
    value: function widthView() {
      var _a;

      return this.props.width * ((_a = this.state.scalezoom) !== null && _a !== void 0 ? _a : 1);
    }
  }, {
    key: "heightView",
    value: function heightView() {
      var _a;

      return this.props.height * ((_a = this.state.scalezoom) !== null && _a !== void 0 ? _a : 1);
    }
  }, {
    key: "widthG",
    value: function widthG() {
      var _a, _b;

      return this.widthView() - ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).left - ((_b = this.state.margin) !== null && _b !== void 0 ? _b : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).right;
    }
  }, {
    key: "heightG",
    value: function heightG() {
      var _a, _b;

      return this.heightView() - ((_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).top - ((_b = this.state.margin) !== null && _b !== void 0 ? _b : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      }).bottom;
    }
  }, {
    key: "userPos",
    value: function userPos() {
      return this.widthG() - 420;
    }
  }, {
    key: "jobPos",
    value: function jobPos() {
      return this.userPos() - 120;
    }
  }, {
    key: "computePos",
    value: function computePos() {
      return this.jobPos() - 120;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _a;

      var opt = this.handleData();
      var margin = (_a = this.state.margin) !== null && _a !== void 0 ? _a : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };
      if (opt.dimensions && opt.dimensions.length) opt.selectedService = opt.dimensions[0].key;
      this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](this.svgRef.current);
      this.g = this.svg.select('.pannel');
      this.linkg = this.g.select('.linkg');
      this.nodeg = this.g.select('.nodeg');
      this.table_headerNode = this.g.select('.table.header');
      var zoomFunc = d3__WEBPACK_IMPORTED_MODULE_1__["zoom"]().on("zoom", function () {
        _this2.svg.select('g.pannel').attr("transform", d3__WEBPACK_IMPORTED_MODULE_1__["event"].transform);
      });
      this.svg.select('rect.pantarget').call(zoomFunc).call(zoomFunc.transform, d3__WEBPACK_IMPORTED_MODULE_1__["zoomIdentity"].translate(margin.left, margin.top));

      if (this.props.data) {
        var _opt = this.handleData();

        if (_opt.dimensions && _opt.dimensions[0]) _opt.selectedService = _opt.dimensions[0].key;
        var tableResult = this.updateLayout(_opt);
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, this.props.data.timespan.length - 1]).range([0, graphicopt.computePos()]);
        _opt = Object.assign(Object.assign({}, _opt), {
          tableHeader: tableResult.tableHeader,
          tableLayout: tableResult.tableLayout
        });

        var _this$draw = this.draw(_opt),
            computers = _this$draw.computers,
            computersObj = _this$draw.computersObj,
            users = _this$draw.users,
            usersObj = _this$draw.usersObj,
            jobs = _this$draw.jobs,
            tableHeader = _this$draw.tableHeader,
            tableData = _this$draw.tableData,
            tableLayout = _this$draw.tableLayout,
            linkdata = _this$draw.linkdata,
            freezing = _this$draw.freezing,
            highlight = _this$draw.highlight,
            highlight2 = _this$draw.highlight2;

        _opt = Object.assign(Object.assign({}, _opt), {
          computers: computers,
          computersObj: computersObj,
          users: users,
          usersObj: usersObj,
          jobs: jobs,
          tableHeader: tableHeader,
          tableData: tableData,
          tableLayout: tableLayout,
          linkdata: linkdata,
          freezing: freezing,
          highlight: highlight,
          highlight2: highlight2
        });
        this.setState(_opt);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.data !== prevProps.data) {
        var opt = this.handleData();
        if (opt.dimensions && opt.dimensions[0]) opt.selectedService = opt.dimensions[0].key;
        var tableResult = this.updateLayout(opt);
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().domain([0, this.props.data.timespan.length - 1]).range([0, graphicopt.computePos()]);
        opt = Object.assign(Object.assign({}, opt), {
          tableHeader: tableResult.tableHeader,
          tableLayout: tableResult.tableLayout
        });

        var _this$draw2 = this.draw(opt),
            computers = _this$draw2.computers,
            computersObj = _this$draw2.computersObj,
            users = _this$draw2.users,
            usersObj = _this$draw2.usersObj,
            jobs = _this$draw2.jobs,
            tableHeader = _this$draw2.tableHeader,
            tableData = _this$draw2.tableData,
            tableLayout = _this$draw2.tableLayout,
            linkdata = _this$draw2.linkdata,
            freezing = _this$draw2.freezing,
            highlight = _this$draw2.highlight,
            highlight2 = _this$draw2.highlight2;

        opt = Object.assign(Object.assign({}, opt), {
          computers: computers,
          computersObj: computersObj,
          users: users,
          usersObj: usersObj,
          jobs: jobs,
          tableHeader: tableHeader,
          tableData: tableData,
          tableLayout: tableLayout,
          linkdata: linkdata,
          freezing: freezing,
          highlight: highlight,
          highlight2: highlight2
        });
        this.setState(opt);
      } else if (this.props.drawThreshold !== prevProps.drawThreshold) {
        var _computers2 = this.state.computers;
        var _opt2 = {
          computers: _computers2
        };

        var _this$drawComp = this.drawComp({
          computers: _computers2
        }),
            _highlight = _this$drawComp.highlight2;

        _opt2.highlight2 = _highlight;
        this.setState(_opt2);
      } else if (this.props.serviceSelected !== prevProps.serviceSelected) {
        var _this$state = this.state,
            _tableHeader2 = _this$state.tableHeader,
            _users = _this$state.users,
            _computers3 = _this$state.computers,
            _linkdata = _this$state.linkdata,
            _tableData = _this$state.tableData,
            _jobs = _this$state.jobs,
            _usersObj = _this$state.usersObj,
            _computersObj = _this$state.computersObj;
        this.handleSort({
          tableHeader: _tableHeader2,
          users: _users,
          computers: _computers3,
          linkdata: _linkdata,
          tableData: _tableData,
          jobs: _jobs,
          usersObj: _usersObj,
          computersObj: _computersObj
        });

        var _this$drawComp2 = this.drawComp({
          computers: _computers3
        }),
            _highlight2 = _this$drawComp2.highlight2;

        this.setState({
          tableHeader: _tableHeader2,
          users: _users,
          computers: _computers3,
          linkdata: _linkdata,
          tableData: _tableData,
          jobs: _jobs,
          usersObj: _usersObj,
          computersObj: _computersObj,
          highlight2: _highlight2
        });
      }
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var freezing = this.state.freezing;

      if (freezing) {
        // g.selectAll('.node').style('pointer-events', 'auto').classed('fade', false).classed('hide', false).classed('highlight', false);
        // linkg.selectAll('.links').classed('hide', false).classed('highlight', false);
        this.setState({
          freezing: !freezing
        });
      }
    }
  }, {
    key: "handleData",
    value: function handleData() {
      var _this3 = this;

      var dimensions = this.props.dimensions;
      var serviceFullList = dimensions;
      var jobsObj = {};
      var computersObj = {};
      var usersObj = {};
      var linkob = {};
      var tableData = {};
      Object.keys(this.props.data.jobs).forEach(function (j) {
        if (!_this3.props.data.jobs[j].isJobarray) {
          var user_name = _this3.props.data.jobs[j].user_name;

          if (!usersObj[user_name]) {
            usersObj[user_name] = _this3.props.data.users[_this3.props.data.jobs[j].user_name];
            usersObj[user_name].key = user_name;
            usersObj[user_name].type = 'user';
            usersObj[user_name]._currentjobs = [];
            usersObj[user_name].links = {};
            usersObj[user_name].timePoints = {};
          } // @ts-ignore


          usersObj[user_name]._currentjobs.push(j);

          jobsObj[j] = _this3.props.data.jobs[j];
          jobsObj[j].key = j;
          jobsObj[j].type = 'job';
          jobsObj[j].timePoints = {};

          _this3.props.data.jobArr[j].forEach(function (d, ti) {
            if (d) {
              usersObj[user_name].timePoints[ti] = 1;
              jobsObj[j].timePoints[ti] = 1;
            }
          });

          linkob[j + '|' + user_name] = {
            source: jobsObj[j],
            target: usersObj[user_name]
          };
          if (!jobsObj[j].links) jobsObj[j].links = {};
          jobsObj[j].links[user_name] = j + '|' + user_name;
          usersObj[user_name].links[j] = j + '|' + user_name;

          _this3.props.data.jobs[j].node_list.forEach(function (comp) {
            computersObj[comp] = _this3.props.data.computers[comp];
            computersObj[comp].key = comp;
            linkob[comp + '|' + j] = {
              source: computersObj[comp],
              target: jobsObj[j]
            };
            if (!computersObj[comp].links) computersObj[comp].links = {};
            computersObj[comp].links[j] = comp + '|' + j;
            jobsObj[j].links[comp] = comp + '|' + j;
          });
        }
      });

      var _computers = d3__WEBPACK_IMPORTED_MODULE_1__["keys"](computersObj); //group jobs


      var users = d3__WEBPACK_IMPORTED_MODULE_1__["values"](usersObj);
      users.forEach(function (u) {
        if (u._currentjobs && u._currentjobs.length > 10) {
          u.isOpen = false;

          _this3.handleCollapseJobs(u, {
            jobsObj: jobsObj,
            computersObj: computersObj,
            usersObj: usersObj,
            linkob: linkob
          });
        } else {
          u.isOpen = true;
        }
      });
      var jobs = d3__WEBPACK_IMPORTED_MODULE_1__["values"](jobsObj);
      var computers = d3__WEBPACK_IMPORTED_MODULE_1__["values"](computersObj);
      var linkdata = d3__WEBPACK_IMPORTED_MODULE_1__["values"](linkob);
      users.forEach(function (d, i) {
        tableData[d.key] = tableData[d.key] || [{
          key: 'Hosts',
          value: 0
        }, {
          key: 'Jobs',
          value: 0
        }];
        tableData[d.key][0].value = d.node.length;
        tableData[d.key][1].value = d.job.length;
        d.summary.forEach(function (s, i) {
          if (serviceFullList[i] !== undefined) {
            serviceFullList[i].range[1];
            tableData[d.key][i + 2] = {
              key: serviceFullList[i].text,
              value: Math.round((serviceFullList[i].range[1] - serviceFullList[i].range[0]) * s.mean + serviceFullList[i].range[0])
            };
          }
        });
        tableData[d.key].id = d.key;
        d.order = i;
      });
      jobs.forEach(function (d) {
        if (d.summary && !d.radarData) d.radarData = _this3.getradarData(dimensions, d.summary.map(function (d) {
          return d.mean;
        }), d.key);

        if (d.radarData) {
          d.radarData.color = d.job_ids ? _this3.contrastColor() : 'gray';
        }
      });
      return {
        _computers: _computers,
        jobsObj: jobsObj,
        computersObj: computersObj,
        usersObj: usersObj,
        linkob: linkob,
        tableData: tableData,
        users: users,
        jobs: jobs,
        computers: computers,
        linkdata: linkdata,
        dimensions: dimensions
      };
    }
  }, {
    key: "getradarData",
    value: function getradarData(dimensions, a, name) {
      var temp = a.map(function (d, i) {
        var _a;

        return {
          axis: dimensions[i].text,
          value: d,
          enable: dimensions[i].enable,
          angle: (_a = dimensions[i].angle) !== null && _a !== void 0 ? _a : 0
        };
      });
      temp.sort(function (a, b) {
        return a.angle - b.angle;
      });
      temp.name = name;
      return temp;
    }
  }, {
    key: "handleCollapseJobs",
    value: function handleCollapseJobs(u) {
      var _this4 = this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var _a, _b, _c, _d, _e;

      var serviceFullList = this.props.dimensions;
      var usersObj = option ? (_a = option.usersObj) !== null && _a !== void 0 ? _a : this.state.usersObj : this.state.usersObj;
      var computersObj = option ? (_b = option.computersObj) !== null && _b !== void 0 ? _b : this.state.computersObj : this.state.computersObj;
      var jobsObj = option ? (_c = option.jobsObj) !== null && _c !== void 0 ? _c : this.state.jobsObj : this.state.jobsObj;
      var linkob = option ? (_d = option.linkob) !== null && _d !== void 0 ? _d : this.state.linkob : this.state.linkob;
      var _this$props = this.props,
          data = _this$props.data,
          dimensions = _this$props.dimensions;
      var user_name = u.key;

      if (u.isOpen) {
        (u._currentjobs ? u._currentjobs : []).forEach(function (j) {
          jobsObj[j] = _this4.props.data.jobs[j];
          jobsObj[j].key = j;
          jobsObj[j].type = 'job';
          if (!jobsObj[j].links) jobsObj[j].links = {};
          jobsObj[j].type = 'job';
          linkob[j + '|' + user_name] = {
            source: jobsObj[j],
            target: usersObj[user_name]
          };
          jobsObj[j].links[user_name] = j + '|' + user_name;
          u.links[j] = j + '|' + user_name;
          data.jobs[j].node_list.forEach(function (comp) {
            // if compute collapse
            if (!computersObj[comp]) {
              computersObj[comp] = data.computers[comp];
              computersObj[comp].key = comp;
              computersObj[comp].links = {};
            } else {
              if (!computersObj[comp].links) computersObj[comp].links = {};
            }

            computersObj[comp].links[j] = comp + '|' + j;
            linkob[comp + '|' + j] = {
              source: computersObj[comp],
              target: jobsObj[j]
            };
            jobsObj[j].links[comp] = comp + '|' + j;
            if (jobsObj[j].summary && !jobsObj[j].radarData) jobsObj[j].radarData = _this4.getradarData(dimensions, jobsObj[j].summary.map(function (d) {
              return d.mean;
            }), jobsObj[j].key);

            if (jobsObj[j].radarData) {
              jobsObj[j].radarData.color = jobsObj[j].job_ids ? _this4.contrastColor() : 'gray';
            }
          });
        });
        var jobKey = u.key + 'jobColapse';
        jobsObj[jobKey].node_list.forEach(function (comp) {
          delete linkob[comp + '|' + jobKey];
        });
        delete jobsObj[jobKey];
        delete linkob[jobKey + '|' + user_name];
        var compKey = u.key + ' summary';
        delete computersObj[compKey];
        delete linkob[compKey + '|' + jobKey];
      } else {
        var node_listO = {};
        var job_ids = {};
        var timePoints = {};
        var compute_ids = {};
        var compute_tsnedata = [];
        ((_e = u._currentjobs) !== null && _e !== void 0 ? _e : []).forEach(function (j) {
          delete jobsObj[j];
          delete linkob[j + '|' + user_name];

          if (data.jobs[j].isJobarray) {
            Object.keys(data.jobs[j].job_ids).forEach(function (k) {
              return job_ids[k] = data.jobs[k];
            });
          } else job_ids[j] = data.jobs[j];

          data.jobs[j].node_list.forEach(function (comp) {
            node_listO[comp] = true;
            delete linkob[comp + '|' + j]; // handle for compute collapse

            compute_ids[comp] = data.computers[comp];
            delete computersObj[comp].links[j];

            if (!Object.keys(computersObj[comp].links).length) {
              delete computersObj[comp];
            }

            data.jobArr[j].forEach(function (d, ti) {
              if (d) {
                timePoints[ti] = 1;

                if (data.tsnedata[comp][ti]) {
                  if (!compute_tsnedata[ti]) {
                    var newData = [];
                    newData.name = '';
                    newData.timestep = 0;
                    compute_tsnedata[ti] = newData;
                  }

                  compute_tsnedata[ti].push(data.tsnedata[comp][ti]);
                }
              }
            });
          });
        });
        var summary = serviceFullList.map(function (s, si) {
          var min = Infinity;
          var max = -Infinity;
          var mean = 0;
          var num = 0;
          Object.values(job_ids).forEach(function (j) {
            min = Math.min(j.summary[si].min, min);
            max = Math.max(j.summary[si].min, max);

            if (j.summary[si].mean) {
              mean += j.summary[si].mean * j.summary[si].num;
              num += j.summary[si].num;
            }
          });
          return {
            min: min,
            max: max,
            mean: mean / num,
            num: num
          };
        });

        var _jobKey = u.key + 'jobColapse';

        jobsObj[_jobKey] = {};
        jobsObj[_jobKey].user_name = u.key;
        jobsObj[_jobKey].node_list = Object.keys(node_listO);
        jobsObj[_jobKey].key = _jobKey;
        jobsObj[_jobKey].type = 'job';
        jobsObj[_jobKey].job_ids = job_ids;
        jobsObj[_jobKey].summary = summary;
        jobsObj[_jobKey].isjobColapse = true;
        jobsObj[_jobKey].links = {};
        jobsObj[_jobKey].timePoints = timePoints;
        linkob[_jobKey + '|' + user_name] = {
          source: jobsObj[_jobKey],
          target: usersObj[u.key]
        };
        jobsObj[_jobKey].links[user_name] = linkob[_jobKey + '|' + user_name]; // if compute not collapse
        // jobsObj[jobKey].node_list.forEach(comp => {
        //     linkob[comp + '|' + jobKey] = {source: computersObj[comp], target: jobsObj[jobKey]};
        // })

        var _compKey = u.key + ' summary';

        var comptsnedata = compute_tsnedata.map(function (t, ti) {
          var d = serviceFullList.map(function (s, si) {
            return d3__WEBPACK_IMPORTED_MODULE_1__["mean"](t, function (f) {
              return f[si];
            });
          });
          d.name = _compKey;
          d.timestep = ti;
          return d;
        });
        var compSummary = serviceFullList.map(function (s, si) {
          var min = Infinity;
          var max = -Infinity;
          var mean = 0;
          var num = 0;
          Object.values(compute_ids).forEach(function (j) {
            min = Math.min(j.summary[si].min, min);
            max = Math.max(j.summary[si].min, max);

            if (j.summary[si].mean) {
              mean += j.summary[si].mean * j.summary[si].num;
              num += j.summary[si].num;
            }
          });
          return {
            min: min,
            max: max,
            mean: mean / num,
            num: num
          };
        });
        computersObj[_compKey] = {};
        computersObj[_compKey].user = [u.key];
        computersObj[_compKey].key = _compKey;
        computersObj[_compKey].compute_ids = compute_ids;
        computersObj[_compKey].summary = compSummary;
        computersObj[_compKey].tsnedata = comptsnedata;
        computersObj[_compKey].iscomputeCollapse = true;
        computersObj[_compKey].links = {};
        linkob[_compKey + '|' + _jobKey] = {
          source: computersObj[_compKey],
          target: jobsObj[_jobKey]
        };
        computersObj[_compKey].links[_jobKey] = _compKey + '|' + _jobKey; // add link to job

        jobsObj[_jobKey]._node_list = jobsObj[_jobKey].node_list.slice();
        jobsObj[_jobKey].node_list = [_compKey];
        jobsObj[_jobKey].links[_compKey] = _compKey + '|' + _jobKey;
        if (jobsObj[_jobKey].summary && !jobsObj[_jobKey].radarData) jobsObj[_jobKey].radarData = this.getradarData(dimensions, jobsObj[_jobKey].summary.map(function (d) {
          return d.mean;
        }), jobsObj[_jobKey].key);

        if (jobsObj[_jobKey].radarData) {
          jobsObj[_jobKey].radarData.color = jobsObj[_jobKey].job_ids ? this.contrastColor() : 'gray';
        }
      }

      var jobs = d3__WEBPACK_IMPORTED_MODULE_1__["values"](jobsObj);
      var computers = d3__WEBPACK_IMPORTED_MODULE_1__["values"](computersObj);
      var linkdata = d3__WEBPACK_IMPORTED_MODULE_1__["values"](linkob);
      return {
        jobs: jobs,
        computers: computers,
        linkdata: linkdata
      };
    }
  }, {
    key: "pathRound",
    value: function pathRound(opt) {
      opt.ctl = opt.ctl || 0;
      opt.ctr = opt.ctr || 0;
      opt.cbl = opt.cbl || 0;
      opt.cbr = opt.cbr || 0;
      var bpath = '';
      if (opt.ctl) bpath += "M0,-".concat(opt.ctl, " q0,-").concat(opt.ctl, " ").concat(opt.ctl, ",-").concat(opt.ctl);else bpath += "M0,0";
      bpath += " h".concat(opt.width - opt.ctr - opt.ctl);
      if (opt.ctr) bpath += "q".concat(opt.ctr, ",0 ").concat(opt.ctr, ",").concat(opt.ctr);
      bpath += "v".concat(opt.height - opt.ctr - opt.cbr);
      if (opt.cbr) bpath += "q0,".concat(opt.cbr, " -").concat(opt.cbr, ",").concat(opt.cbr);
      bpath += "h-".concat(opt.width - opt.cbr - opt.cbl);
      if (opt.cbl) bpath += "q-".concat(opt.cbl, ",0 -").concat(opt.cbl, ",-").concat(opt.cbl);
      bpath += "z";
      return bpath;
    }
  }, {
    key: "onClickHeaderCell",
    value: function onClickHeaderCell(d) {
      var _this$state2 = this.state,
          tableHeader = _this$state2.tableHeader,
          users = _this$state2.users,
          computers = _this$state2.computers,
          linkdata = _this$state2.linkdata,
          tableData = _this$state2.tableData,
          jobs = _this$state2.jobs,
          usersObj = _this$state2.usersObj,
          computersObj = _this$state2.computersObj;
      if (d.key !== tableHeader.currentsort) tableHeader.filter(function (e) {
        return e.key === tableHeader.currentsort;
      }).forEach(function (e) {
        e.direction = undefined;
      });
      tableHeader.currentsort = d.key;
      tableHeader.direction = d.direction = !d.direction;
      this.handleSort({
        tableHeader: tableHeader,
        users: users,
        computers: computers,
        linkdata: linkdata,
        tableData: tableData,
        jobs: jobs,
        usersObj: usersObj,
        computersObj: computersObj
      });
      this.setState({
        tableHeader: tableHeader,
        users: users,
        computers: computers,
        linkdata: linkdata,
        tableData: tableData,
        jobs: jobs,
        usersObj: usersObj,
        computersObj: computersObj
      });
    }
  }, {
    key: "updateLayout",
    value: function updateLayout() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _a, _b, _c;

      var tableLayout = (_a = opt.tableLayout) !== null && _a !== void 0 ? _a : this.state.tableLayout;
      var tableHeader = (_b = opt.tableHeader) !== null && _b !== void 0 ? _b : this.state.tableHeader;
      var dimensions = (_c = opt.dimensions) !== null && _c !== void 0 ? _c : this.state.dimensions;
      var currentsort = tableHeader.currentsort;
      var currentdirection = tableHeader.direction;
      var _tableHeader = [{
        key: 'UserID',
        value: 'UserID'
      }, {
        key: 'Hosts',
        value: '#Computes'
      }, {
        key: 'Jobs',
        value: '#Jobs'
      }];
      tableLayout.column = {
        'UserID': {
          id: 'UserID',
          type: 'text',
          x: 10,
          y: 20,
          width: 60
        },
        'Hosts': {
          id: 'Hosts',
          text: '#Computes',
          type: 'num',
          x: 60,
          y: 20,
          width: 90
        },
        'Jobs': {
          id: 'Jobs',
          text: '#Jobs',
          type: 'num',
          x: 165,
          y: 20,
          width: 60
        }
      };
      var offset = tableLayout.column['Jobs'].x + tableLayout.column['Jobs'].width;
      var padding = 15; // if (showtable)

      dimensions.forEach(function (d, i) {
        tableLayout.column[d.text] = {
          id: d.text,
          type: 'graph',
          x: offset + i * tableLayout.row["graph-width"] + padding,
          y: 20,
          width: tableLayout.row["graph-width"]
        };
        tableLayout.row.width = offset + i * (tableLayout.row["graph-width"] + padding);

        _tableHeader.push({
          key: d.text,
          value: d.text
        });
      });
      tableLayout.row.width += tableLayout.row["graph-width"] / 2;
      _tableHeader.currentsort = currentsort;
      _tableHeader.direction = currentdirection;
      return {
        tableHeader: _tableHeader,
        tableLayout: tableLayout
      };
    }
  }, {
    key: "handleSort",
    value: function handleSort(_ref) {
      var _this5 = this;

      var tableHeader = _ref.tableHeader,
          users = _ref.users,
          computers = _ref.computers,
          linkdata = _ref.linkdata,
          tableData = _ref.tableData,
          jobs = _ref.jobs,
          usersObj = _ref.usersObj,
          computersObj = _ref.computersObj;

      // const {tableHeader,users,tableData} = this.state;
      if (tableHeader.currentsort !== undefined) {
        var direction = tableHeader.direction ? 1 : -1;

        switch (tableHeader.currentsort) {
          case 'UserID':
            users.sort(function (a, b) {
              return a.key.localeCompare(b.key) * direction;
            });
            break;

          default:
            var indexf = tableHeader.findIndex(function (d) {
              return d.key === tableHeader.currentsort;
            }) - 1;
            users.sort(function (a, b) {
              return (tableData[b.key][indexf].value - tableData[a.key][indexf].value) * direction;
            });
            break;
        }
      }

      users.forEach(function (d, i) {
        // delete d.jobStart_order;
        d.order = i;
        d.orderlink = i;
        d.fx = graphicopt.userPos();
        d.fy = _this5.yscale(d.order);
        d.x = d.fx;
        d.y = d.fy;
      });
      this.renderManual({
        computers: computers,
        jobs: jobs,
        linkdata: linkdata,
        usersObj: usersObj,
        computersObj: computersObj,
        users: users
      });
      return {
        computers: computers,
        jobs: jobs,
        linkdata: linkdata,
        usersObj: usersObj,
        computersObj: computersObj,
        users: users
      };
    }
  }, {
    key: "drawComp",
    value: function drawComp(_ref2) {
      var computers = _ref2.computers;
      var getDrawData = this.getDrawData,
          gettsnedata = this.gettsnedata;
      var self = this;
      computers.forEach(function (d) {
        d.drawData = getDrawData.bind(self)(gettsnedata.bind(self)(d));
      });

      var _this$drawEmbedding_t = this.drawEmbedding_timeline(),
          highlight2 = _this$drawEmbedding_t.highlight2;

      return {
        highlight2: highlight2
      };
    }
  }, {
    key: "handleHightlight",
    value: function handleHightlight() {
      var _this6 = this;

      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _a, _b, _c;

      var computersObj = (_a = opt.computersObj) !== null && _a !== void 0 ? _a : this.state.computersObj;
      var computers = (_b = opt.computers) !== null && _b !== void 0 ? _b : this.state.computers;
      var _this$props2 = this.props,
          serviceSelected = _this$props2.serviceSelected,
          highlightStream = _this$props2.highlightStream;
      var listCompHighlight = {};

      if (highlightStream === 'highValue') {
        // find top 10
        var alldataPoint = [];
        computers.forEach(function (d) {
          d.highlightData = d.drawData.map(function (d) {
            return {
              value: [],
              "class": d["class"],
              up: d.up
            };
          });

          if (d.highlightData) {
            d.highlightData.displayText = [];
            d.highlightData.displayLine = [];
            d.highlightData.timesteps = [];
          }

          _this6.gettsnedata(d).forEach(function (e) {
            alldataPoint.push(e);
          });
        });
        alldataPoint.sort(function (a, b) {
          return b[serviceSelected] - a[serviceSelected];
        });

        var _loop = function _loop(i) {
          var step = alldataPoint[i].timestep;
          var currentcomputersObj = computersObj[alldataPoint[i].name];

          if (currentcomputersObj !== undefined && currentcomputersObj.highlightData !== undefined) {
            currentcomputersObj.highlightData.notEmpty = true;
            listCompHighlight[alldataPoint[i].name] = true;
            currentcomputersObj.highlightData.forEach(function (d, j) {
              if (currentcomputersObj.drawData[j].value[step - 1]) {
                d.value[step - 1] = currentcomputersObj.drawData[j].value[step - 1];

                if (currentcomputersObj.drawData[j].value[step - 1][serviceSelected] !== undefined) {
                  if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.displayLine !== undefined) {
                    currentcomputersObj.highlightData.displayLine[step - 1] = Object.assign(Object.assign({}, d.value[step - 1]), {
                      up: currentcomputersObj.drawData[j].up
                    });
                  }
                }
              }

              if (currentcomputersObj.drawData[j].value[step][serviceSelected] !== undefined) {
                d.value[step] = currentcomputersObj.drawData[j].value[step];

                if (currentcomputersObj.highlightData) {
                  if (currentcomputersObj.highlightData.displayLine) {
                    currentcomputersObj.highlightData.displayLine[step] = Object.assign(Object.assign({}, d.value[step]), {
                      up: currentcomputersObj.drawData[j].up
                    });
                  }

                  if (currentcomputersObj.highlightData.displayText) {
                    var text = '' + Math.round(_this6.props.scaleService[serviceSelected].invert(d.value[step][serviceSelected]));
                    currentcomputersObj.highlightData.displayText.push(Object.assign(Object.assign({}, currentcomputersObj.drawData[j].value[step]), {
                      up: currentcomputersObj.drawData[j].up,
                      text: text
                    }));
                  }

                  if (currentcomputersObj.highlightData.timesteps) currentcomputersObj.highlightData.timesteps.push(step);
                }
              }

              if (currentcomputersObj.drawData[j].value[step + 1]) {
                d.value[step + 1] = currentcomputersObj.drawData[j].value[step + 1];

                if (currentcomputersObj.drawData[j].value[step + 1][serviceSelected] !== undefined) {
                  if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.displayLine) {
                    currentcomputersObj.highlightData.displayLine[step + 1] = Object.assign(Object.assign({}, d.value[step + 1]), {
                      up: currentcomputersObj.drawData[j].up
                    });
                  }
                }
              }
            }); // currentcomputersObj.highlightData.displayLine.sort((a,b)=>a.timestep-b.timestep)
          }
        };

        for (var i = 0; i < 10; i++) {
          _loop(i);
        }
      } else if (highlightStream === 'suddenChange') {
        (function () {
          // find top 10
          var alldataPoint = [];
          computers.forEach(function (d) {
            d.highlightData = d.drawData.map(function (d) {
              return {
                value: [],
                "class": d["class"],
                up: d.up
              };
            });
            d.highlightData.displayText = [];
            d.highlightData.displayLine = [];
            d.highlightData.timesteps = [];

            var arr = _this6.gettsnedata(d);

            for (var _i = 1; _i < arr.length; _i++) {
              if (arr[_i - 1] !== undefined && arr[_i] !== undefined) {
                var pre = arr[_i - 1][serviceSelected] === 0 ? 0 : arr[_i - 1][serviceSelected] - 1;
                var current = arr[_i][serviceSelected] === 0 ? 0 : arr[_i][serviceSelected] - 1;
                var sudden = (current + 1) / (pre + 1);
                alldataPoint.push({
                  name: d.key,
                  timestep: _i,
                  value: sudden,
                  valueRaw: arr[_i][serviceSelected] - arr[_i - 1][serviceSelected]
                });
              }
            }
          });
          alldataPoint.sort(function (a, b) {
            return Math.abs(b.value) - Math.abs(a.value);
          });

          var _loop2 = function _loop2(_i2) {
            var step = alldataPoint[_i2].timestep;
            var currentcomputersObj = computersObj[alldataPoint[_i2].name];

            if (currentcomputersObj.highlightData) {
              currentcomputersObj.highlightData.notEmpty = true;
              listCompHighlight[alldataPoint[_i2].name] = true;
              currentcomputersObj.highlightData.forEach(function (d, j) {
                var up = currentcomputersObj.drawData[j].up;

                if (currentcomputersObj.drawData[j].value[step - 1]) {
                  d.value[step - 1] = currentcomputersObj.drawData[j].value[step - 1];

                  if (currentcomputersObj.drawData[j].value[step - 1][serviceSelected] !== undefined) {
                    if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.displayLine) currentcomputersObj.highlightData.displayLine[step - 1] = Object.assign(Object.assign({}, d.value[step - 1]), {
                      up: up
                    });
                  }
                }

                if (currentcomputersObj.drawData[j].value[step][serviceSelected] !== undefined) {
                  d.value[step] = currentcomputersObj.drawData[j].value[step];
                  if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.displayLine) currentcomputersObj.highlightData.displayLine[step] = Object.assign(Object.assign({}, d.value[step]), {
                    up: up
                  });
                  if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.displayText) currentcomputersObj.highlightData.displayText.push(Object.assign(Object.assign({}, currentcomputersObj.drawData[j].value[step]), {
                    up: currentcomputersObj.drawData[j].up,
                    text: '' + Math.round(_this6.props.scaleService[serviceSelected].invert(alldataPoint[_i2].valueRaw))
                  }));
                  if (currentcomputersObj.highlightData && currentcomputersObj.highlightData.timesteps) currentcomputersObj.highlightData.timesteps.push(step);
                }
              });
            } // currentcomputersObj.highlightData.displayLine.sort((a,b)=>a.timestep-b.timestep)

          };

          for (var _i2 = 0; _i2 < 10; _i2++) {
            _loop2(_i2);
          }
        })();
      } else {
        computers.forEach(function (d) {
          return d.highlightData = undefined;
        });
      }

      if (highlightStream === undefined || highlightStream !== 'none') {
        var listUserHighlight = {};
        var listJobHighlight = {};
        var listLinkHighlight = {};
        var link = (_c = opt.linkdata) !== null && _c !== void 0 ? _c : this.state.linkdata;
        computers.forEach(function (d) {
          if (listCompHighlight[d.key]) {
            var joblist = {};

            if (d.highlightData && d.highlightData.timesteps) {
              d.highlightData.timesteps.forEach(function (i) {
                return d.job_id[i].forEach(function (j) {
                  return joblist[j] = true;
                });
              });
              var joblists = Object.keys(joblist);
              var samesourceObj = {};
              link.filter(function (f) {
                if (d.key === f.source.key && (f.target.job_ids ? joblists.find(function (j) {
                  return f.target.job_ids[j];
                }) !== undefined : joblist[f.target.key])) {
                  var keys = '' + f.target.key + f.source.key;
                  listLinkHighlight[keys] = true;
                  samesourceObj[f.target.key] = true;
                  listJobHighlight[f.target.key] = true;
                }
              });
              link.filter(function (f) {
                if (samesourceObj[f.source.key]) {
                  listUserHighlight[f.target.key] = true;
                }
              });
            }
          }
        });
        return {
          comp: listCompHighlight,
          job: listJobHighlight,
          user: listUserHighlight,
          link: listLinkHighlight
        };
      } else {
        return undefined;
      }
    }
  }, {
    key: "drawEmbedding_timeline",
    value: function drawEmbedding_timeline() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _a, _b;

      var handleHightlight = this.handleHightlight;
      var computersObj = (_a = opt.computersObj) !== null && _a !== void 0 ? _a : this.state.computersObj;
      var computers = (_b = opt.computers) !== null && _b !== void 0 ? _b : this.state.computers;
      var highlight2 = handleHightlight.bind(this)({
        computers: computers,
        computersObj: computersObj
      });
      return {
        highlight2: highlight2
      };
    }
  }, {
    key: "getDrawData",
    value: function getDrawData(n) {
      var _this7 = this;

      var _this$props3 = this.props,
          serviceSelected = _this$props3.serviceSelected,
          drawThreshold = _this$props3.drawThreshold;
      var scheme = this.props;
      var drawData = [{
        value: n.map(function (d, ti) {
          if (_this7.props.data.emptyMap[d.name] && _this7.props.data.emptyMap[d.name][ti] || d[serviceSelected] === undefined) return Object.assign(Object.assign({}, d), {
            value: [undefined, undefined]
          });

          if (d[serviceSelected] - drawThreshold > 0) {
            return Object.assign(Object.assign({}, d), {
              value: [0, d[serviceSelected] - drawThreshold]
            });
          }

          return {
            value: [0, 0],
            timestep: d.timestep
          };
        }),
        "class": "upStream",
        up: true
      }, {
        value: n.map(function (d, ti) {
          if (scheme.data.emptyMap[d.name] && scheme.data.emptyMap[d.name][ti] || d[serviceSelected] === undefined) return Object.assign(Object.assign({}, d), {
            value: [undefined, undefined]
          });
          if (d[serviceSelected] - drawThreshold < 0) return Object.assign(Object.assign({}, d), {
            value: [d[serviceSelected] - drawThreshold, 0]
          });
          return {
            value: [0, 0],
            timestep: d.timestep
          };
        }),
        "class": "downStream",
        up: false
      }];

      if (n[0]) {
        var name = n[0].name;

        if (scheme.data.emptyMap[name]) {
          drawData.push({
            value: n.map(function (d, ti) {
              if (!scheme.data.emptyMap[name][ti] || d[serviceSelected] === undefined) return Object.assign(Object.assign({}, d), {
                value: [undefined, undefined]
              });

              if (d[serviceSelected] - drawThreshold > 0) {
                return Object.assign(Object.assign({}, d), {
                  value: [0, d[serviceSelected] - drawThreshold]
                });
              }

              return {
                value: [0, 0],
                timestep: d.timestep
              };
            }),
            "class": "emptyStream",
            up: true
          }, {
            value: n.map(function (d, ti) {
              if (!scheme.data.emptyMap[name][ti] || d[serviceSelected] === undefined) return Object.assign(Object.assign({}, d), {
                value: [undefined, undefined]
              });
              if (d[serviceSelected] - drawThreshold < 0) return Object.assign(Object.assign({}, d), {
                value: [d[serviceSelected] - drawThreshold, 0]
              });
              return {
                value: [0, 0],
                timestep: d.timestep
              };
            }),
            "class": "emptyStream",
            up: false
          });
        }
      } // n.drawData = drawData;


      return drawData;
    }
  }, {
    key: "gettsnedata",
    value: function gettsnedata(d) {
      var _a;

      return (_a = d.tsnedata) !== null && _a !== void 0 ? _a : this.props.data.tsnedata[d.key];
    }
  }, {
    key: "draw",
    value: function draw() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;

      var computersObj = (_a = opt.computersObj) !== null && _a !== void 0 ? _a : this.state.computersObj;
      var usersObj = (_b = opt.usersObj) !== null && _b !== void 0 ? _b : this.state.usersObj;
      var jobs = (_c = opt.jobs) !== null && _c !== void 0 ? _c : this.state.jobs;
      var tableHeader = (_d = opt.tableHeader) !== null && _d !== void 0 ? _d : this.state.tableHeader;
      var tableData = (_e = opt.tableData) !== null && _e !== void 0 ? _e : this.state.tableData;
      var tableLayout = (_f = opt.tableLayout) !== null && _f !== void 0 ? _f : this.state.tableLayout;
      var users = (_g = opt.users) !== null && _g !== void 0 ? _g : this.state.users;
      var computers = (_h = opt.computers) !== null && _h !== void 0 ? _h : this.state.computers;
      var linkdata = (_j = opt.linkdata) !== null && _j !== void 0 ? _j : this.state.linkdata;
      var yscale = this.yscale,
          scaleJob = this.scaleJob;
      yscale.domain([-1, Object.keys(users).length]).range([0, this.heightG()]);
      var deltey = ((_k = yscale(1)) !== null && _k !== void 0 ? _k : 0) - ((_l = yscale(0)) !== null && _l !== void 0 ? _l : 0);
      scaleJob.domain([0, Object.keys(users).length - 1]).range(yscale.range());
      tableLayout.row.height = Math.min(deltey, 30); // table

      this.handleSort({
        tableHeader: tableHeader,
        users: users,
        computers: computers,
        linkdata: linkdata,
        tableData: tableData,
        jobs: jobs,
        usersObj: usersObj,
        computersObj: computersObj
      });

      var _this$drawComp3 = this.drawComp({
        computers: computers
      }),
          highlight2 = _this$drawComp3.highlight2;

      return {
        computers: computers,
        computersObj: computersObj,
        users: users,
        usersObj: usersObj,
        jobs: jobs,
        tableHeader: tableHeader,
        tableData: tableData,
        tableLayout: tableLayout,
        linkdata: linkdata,
        freezing: false,
        highlight: undefined,
        highlight2: highlight2
      };
    }
  }, {
    key: "updatelayerpath",
    value: function updatelayerpath(d) {
      var _a;

      var area_compute_up = this.area_compute_up,
          area_compute_down = this.area_compute_down;
      return {
        "d": (_a = d.up ? area_compute_up(d.value) : area_compute_down(d.value)) !== null && _a !== void 0 ? _a : ''
      };
    }
  }, {
    key: "updatelayerline",
    value: function updatelayerline(v) {
      var _a;

      var xScale = this.xScale;
      var linecompute = d3__WEBPACK_IMPORTED_MODULE_1__["line"]().curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveCatmullRom"]).x(function (d) {
        return xScale(d.timestep);
      }).y(function (d) {
        if (d.up) return -yUpperScale(d.value[1]);else return -yDownerScale(d.value[0]);
      }).defined(function (d) {
        return d && (d.up ? d.value[0] : d.value[1]) !== undefined;
      });
      var renderpath = (_a = linecompute(v)) !== null && _a !== void 0 ? _a : '';
      return {
        'stroke': this.contrastColor(),
        'fill': 'none',
        'd': renderpath
      };
    }
  }, {
    key: "updatelayerText",
    value: function updatelayerText(d) {
      var xScale = this.xScale;
      return {
        'fill': this.contrastColor(),
        'textAnchor': 'middle',
        'x': xScale(d.timestep),
        'y': d.up ? -(d.value[1] ? yUpperScale(d.value[1]) : 0) : -(d.value[0] ? yDownerScale(d.value[0]) : 0),
        'dy': d.up ? -3 : 3
      };
    }
  }, {
    key: "onFilterComputeHighlight",
    value: function onFilterComputeHighlight(d, timePoint, isall) {
      var _this8 = this;

      if (isall) {
        d.highlightRange = d.drawData.map(function (d) {
          return {
            value: d.value,
            "class": d["class"],
            up: d.up
          };
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, d.highlightRange.map(function (d) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", Object.assign({
            className: 'durationHighlight ' + d["class"]
          }, _this8.updatelayerpath(d)));
        }));
      } else {
        if (timePoint) {
          d.highlightRange = d.drawData.map(function (d) {
            return {
              value: [],
              "class": d["class"],
              up: d.up
            };
          });
          timePoint.forEach(function (t) {
            d.highlightRange.forEach(function (h, i) {
              // if (d.drawData[i].value[t][serviceSelected] !== undefined) {
              h.value[t] = d.drawData[i].value[t]; // }
            });
          });
          d.highlightRange.forEach(function (h, i) {
            if (h.value.length) {
              var last = h.value[h.value.length - 1];

              if (!last.sub) {
                if (!h.value[h.value.length - 2]) {
                  var t = last.timestep + 1;

                  if (d.drawData[i].value[t]) {
                    var sub = Object.assign({}, d.drawData[i].value[t]);
                    sub.name = d.drawData[i].value[t].name;
                    sub.timestep = d.drawData[i].value[t].timestep - 0.5; // @ts-ignore

                    sub.value = sub.value.map(function (v, j) {
                      return (d.drawData[i].value[t - 1].value[j] + v) / 2;
                    });
                    sub.sub = true;
                    h.value.push(sub);
                  }
                }
              }
            }
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, d.highlightRange.map(function (d) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", Object.assign({
              className: 'durationHighlight ' + d["class"]
            }, _this8.updatelayerpath(d)));
          }));
        } else {
          delete d.highlightRange;
          return '';
        }
      }
    }
  }, {
    key: "renderManual",
    value: function renderManual(_ref3) {
      var computers = _ref3.computers,
          jobs = _ref3.jobs,
          usersObj = _ref3.usersObj,
          computersObj = _ref3.computersObj,
          linkdata = _ref3.linkdata;
      var scaleJob = this.scaleJob,
          yscale = this.yscale,
          scaleNode_y_middle = this.scaleNode_y_middle;
      var _this$props4 = this.props,
          serviceSelected = _this$props4.serviceSelected,
          data = _this$props4.data;
      jobs.sort(function (a, b) {
        return usersObj[a.user_name].order - usersObj[b.user_name].order;
      });
      var jobCount = 0;
      var jobNum = jobs.length;
      jobs.forEach(function (d, i) {
        d.order = jobCount;
        jobCount += 0.5;

        if (i < jobNum - 2) {
          if (jobs[i + 1].user_name !== d.user_name) jobCount += 1;
        }
      });
      scaleJob.domain([0, jobCount]);
      this._height = scaleJob.range()[1];
      jobs.forEach(function (d) {
        d.x2 = graphicopt.jobPos();
        d.y = scaleJob(d.order);
      });
      var temp_link = linkdata.filter(function (d) {
        return d.target.type === 'job';
      }); // computers.data().forEach(d => d.y = d3.mean(temp_link.filter(e => e.source.key === d.key), f => f.target.y));

      computers.forEach(function (d) {
        return d.y = d3__WEBPACK_IMPORTED_MODULE_1__["min"](temp_link.filter(function (e) {
          return e.source.key === d.key;
        }), function (f) {
          return f.target.y;
        });
      });
      var comps = computers.slice().sort(function (a, b) {
        return a.y - b.y;
      });
      comps.forEach(function (d, i) {
        return d.order = i;
      });
      var checkComp = {};
      var checkCompNum = 0;
      var computerNum = comps.length;
      var computeCount = 0;
      jobs.find(function (j) {
        var _a, _b;

        var node_list = j.node_list.filter(function (comp) {
          return !checkComp[comp];
        });

        if (node_list.length > 2) {
          (function () {
            var nodeo = {};
            var min = {
              value: Infinity,
              key: undefined
            };

            for (var i = 0; i < node_list.length; i++) {
              nodeo[node_list[i]] = {
                el: computersObj[node_list[i]],
                mse: {},
                min: {
                  value: Infinity,
                  key: undefined
                }
              };
              checkComp[node_list[i]] = true;
              checkCompNum++;
            }

            for (var _i3 = 0; _i3 < node_list.length - 1; _i3++) {
              var _loop3 = function _loop3(z) {
                var mse = (_a = d3__WEBPACK_IMPORTED_MODULE_1__["mean"](data.tsnedata[node_list[_i3]].map(function (d, ti) {
                  return Math.pow(d[serviceSelected] - data.tsnedata[node_list[z]][ti][serviceSelected], 2);
                }))) !== null && _a !== void 0 ? _a : 0;
                nodeo[node_list[_i3]].mse[node_list[z]] = {
                  key: computersObj[node_list[z]],
                  value: mse
                };

                if (mse < nodeo[node_list[_i3]].min.value) {
                  nodeo[node_list[_i3]].min.value = mse;
                  nodeo[node_list[_i3]].min.key = computersObj[node_list[z]];

                  if (mse < min.value) {
                    min.value = mse;
                    min.key = computersObj[node_list[_i3]];
                  }
                }

                nodeo[node_list[z]].mse[node_list[_i3]] = {
                  key: computersObj[node_list[_i3]],
                  value: mse
                };

                if (mse < nodeo[node_list[_i3]].min.value) {
                  nodeo[node_list[z]].min.value = mse;
                  nodeo[node_list[z]].min.key = computersObj[node_list[_i3]];

                  if (mse < min.value) {
                    min.value = mse;
                    min.key = computersObj[node_list[z]];
                  }
                }
              };

              for (var z = _i3 + 1; z < node_list.length; z++) {
                _loop3(z);
              }
            }

            if (!min.key) min.key = computersObj[node_list[0]];
            var current = (_b = min.key) !== null && _b !== void 0 ? _b : {};
            var count = 0;
            current.order = computeCount;
            computeCount += 0.5;
            count++;

            var _loop4 = function _loop4() {
              // find the lowest mse
              var min = {
                value: Infinity,
                key: undefined
              };

              if (current) {
                Object.values(nodeo[current.key].mse).forEach(function (d) {
                  if (d.value < min.value) {
                    min = Object.assign({}, d);
                  } // @ts-ignore


                  delete nodeo[d.key.key].mse[current.key];
                });
                if (min.key === undefined) min = Object.assign({}, Object.values(nodeo[current.key].mse)[0]);
              }

              current = min.key;
              if (current) current.order = computeCount;
              computeCount += 0.5;
              count++;
            };

            while (count < node_list.length) {
              _loop4();
            }

            computeCount += 1;
          })();
        } else if (node_list.length) {
          node_list.forEach(function (n) {
            computersObj[n].order = computeCount;
            computeCount += 0.5;
            checkComp[n] = true;
            checkCompNum++;
          });
          computeCount += 1;
        }

        return checkCompNum === computerNum;
      });
      scaleNode_y_middle.range(yscale.range()).domain([0, computeCount]);
      computers.forEach(function (d) {
        d.x2 = graphicopt.computePos();
        d.y2 = scaleNode_y_middle(d.order);
      });
    }
  }, {
    key: "onClickUser",
    value: function onClickUser(u, e) {
      if (e) e.stopPropagation(); // (d3.event as Event).stopPropagation();

      if (u._currentjobs && u._currentjobs.length > 1) {
        u.isOpen = !u.isOpen;
        var _this$state3 = this.state,
            jobsObj = _this$state3.jobsObj,
            computersObj = _this$state3.computersObj,
            usersObj = _this$state3.usersObj,
            linkob = _this$state3.linkob;

        var _this$handleCollapseJ = this.handleCollapseJobs(u, {
          jobsObj: jobsObj,
          computersObj: computersObj,
          usersObj: usersObj,
          linkob: linkob
        }),
            jobs = _this$handleCollapseJ.jobs,
            computers = _this$handleCollapseJ.computers,
            linkdata = _this$handleCollapseJ.linkdata;

        var opt = {
          jobsObj: jobsObj,
          computersObj: computersObj,
          usersObj: usersObj,
          linkob: linkob,
          computers: computers,
          jobs: jobs,
          linkdata: linkdata
        };

        var _this$draw3 = this.draw(opt),
            users = _this$draw3.users,
            tableHeader = _this$draw3.tableHeader,
            tableData = _this$draw3.tableData,
            tableLayout = _this$draw3.tableLayout,
            freezing = _this$draw3.freezing,
            highlight = _this$draw3.highlight,
            highlight2 = _this$draw3.highlight2;

        opt = Object.assign(Object.assign({}, opt), {
          computers: computers,
          computersObj: computersObj,
          users: users,
          usersObj: usersObj,
          jobs: jobs,
          tableHeader: tableHeader,
          tableData: tableData,
          tableLayout: tableLayout,
          linkdata: linkdata,
          freezing: freezing,
          highlight: highlight,
          highlight2: highlight2
        });
        this.setState(opt);
      }
    }
  }, {
    key: "onMouseOverCompute",
    value: function onMouseOverCompute(d) {
      var highlight = {
        comp: {},
        user: {},
        job: {},
        link: {}
      };
      highlight.comp[d.key] = true;
      var link = this.state.linkdata;
      var samesourceObj = {};
      link.filter(function (f) {
        if (d.key === f.source.key) {
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true;
          samesourceObj[f.target.key] = true;
          highlight.job[f.target.key] = true;
        }
      });
      link.filter(function (f) {
        if (samesourceObj[f.source.key]) {
          highlight.user[f.target.key] = true;
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true;
        }
      });
      this.setState({
        highlight: highlight
      });
    }
  }, {
    key: "onMouseOverUser",
    value: function onMouseOverUser(d) {
      var computers = this.state.computers;
      var highlight = {
        comp: {},
        user: {},
        job: {},
        link: {}
      };
      highlight.user[d.key] = true;
      var link = this.state.linkdata;
      var sametargetObj = {};
      link.filter(function (f) {
        if (d.key === f.target.key) {
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true;
          sametargetObj[f.source.key] = true;
          highlight.job[f.source.key] = true;
          return true;
        }

        return false;
      });
      var samesource = link.filter(function (f) {
        if (sametargetObj[f.target.key]) {
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true; // highlight.comp[f.source.key]=[];

          return true;
        }

        return false;
      });
      computers.forEach(function (f) {
        var link = samesource.filter(function (e) {
          return e.source.key === f.key;
        });

        if (link.length) {
          var timePoints = {};
          link.forEach(function (l) {
            Object.keys(l.target.timePoints).forEach(function (t) {
              return timePoints[t] = 1;
            });
          });
          highlight.comp[f.key] = Object.keys(timePoints);
        }
      });
      this.setState({
        highlight: highlight
      });
    }
  }, {
    key: "onMouseOverJob",
    value: function onMouseOverJob(d) {
      var computers = this.state.computers;
      var highlight = {
        comp: {},
        user: {},
        job: {},
        link: {}
      };
      highlight.job[d.key] = true;
      var link = this.state.linkdata;
      link.filter(function (f) {
        if (d.key === f.source.key) {
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true;
          highlight.user[f.target.key] = true;
        }
      });
      var sametarget = link.filter(function (f) {
        if (d.key === f.target.key) {
          var keys = f.source.key + '-' + f.target.key;
          highlight.link[keys] = true;
          highlight.comp[f.source.key] = [];
          return true;
        }

        return false;
      });
      computers.forEach(function (f) {
        if (highlight.comp[f.key]) {
          var _link = sametarget.filter(function (e) {
            return e.source.key === f.key;
          });

          if (_link.length) {
            var timePoints = {};

            _link.forEach(function (l) {
              // debugger
              // this.props.data.emptyMap[l.source.key]
              Object.keys(l.target.timePoints).forEach(function (t) {
                return timePoints[t] = 1;
              });
            });

            highlight.comp[f.key] = Object.keys(timePoints);
          }
        }
      });
      this.setState({
        highlight: highlight
      });
    }
  }, {
    key: "onRelease",
    value: function onRelease() {
      this.setState({
        highlight: undefined
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var styles = getStyles(this.props.theme);
      var _this$props5 = this.props,
          width = _this$props5.width,
          height = _this$props5.height;
      var timespan = this.props.data.timespan;
      var _this$state4 = this.state,
          computers = _this$state4.computers,
          jobs = _this$state4.jobs,
          users = _this$state4.users,
          linkdata = _this$state4.linkdata,
          tableLayout = _this$state4.tableLayout,
          tableHeader = _this$state4.tableHeader,
          tableData = _this$state4.tableData,
          highlight2 = _this$state4.highlight2,
          highlight = _this$state4.highlight,
          fisheye_scale = _this$state4.fisheye_scale;
      var scaleNode_y_middle = this.scaleNode_y_middle,
          yscale = this.yscale,
          xScale = this.xScale;
      var linkHorizontal = d3__WEBPACK_IMPORTED_MODULE_1__["linkHorizontal"]().x(function (d) {
        return d.x;
      }).y(function (d) {
        return d.y;
      });
      var delta_h = Math.max(tableLayout.row.height / 2, 15);
      var limitTime = [timespan[0], timespan[timespan.length - 1]];
      var rangey = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](computers, function (d) {
        return d.y2 === undefined ? d.y : d.y2;
      });

      var heightRate = Math.max(this.heightG(), yscale.domain()[1] * 100) / this._height;

      var scale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]().range(xScale.domain()).domain(limitTime);
      var rScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, graphicopt.radaropt.w / 2]);
      var radarLine = d3__WEBPACK_IMPORTED_MODULE_1__["radialLine"]() // .interpolate("linear-closed")
      .curve(d3__WEBPACK_IMPORTED_MODULE_1__["curveCardinalClosed"].tension(0.7)).radius(function (d) {
        return rScale(d.value);
      }).angle(function (d) {
        return d.angle;
      }); // const yUpperScale = graphicopt.display.stream.yScaleUp;
      // const yDownerScale = graphicopt.display.stream.yScaleDown;
      // const scaleJob = d3.scaleLinear().domain([0, Object.keys(data.users).length - 1]).range(yscale.range());
      // tableLayout.row.height = Math.min(deltey, 30);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: width + ' px',
          height: height + ' px',
          position: 'relative'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: width,
        height: height,
        viewBox: "0 0 ".concat(width, " ").concat(height),
        style: {
          position: 'absolute',
          top: 0,
          left: 0 // backgroundColor:'white'

        },
        className: styles.svg,
        ref: this.svgRef
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
        id: "userpic",
        width: '100%',
        height: '100%',
        patternContentUnits: 'objectBoundingBox'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        height: 1,
        width: 1,
        preserveAspectRatio: 'none',
        href: userIcon["default"]
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pattern", {
        id: "userpicNoBorder",
        width: '100%',
        height: '100%',
        patternContentUnits: 'objectBoundingBox'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
        height: 1,
        width: 1,
        preserveAspectRatio: 'none',
        href: userpicNoBorder["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        className: "pantarget",
        width: width,
        height: height,
        onClick: function onClick() {
          return _this9.onClick();
        },
        opacity: "0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "pannel ".concat(highlight2 ? 'onhighlight2' : '')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        className: "job_title {jobs.length?'':'hide'}",
        textAnchor: "middle",
        // x={this.jobPos()}
        x: jobs[0] ? jobs[0].x2 : 0,
        dy: -20,
        fill: this.contrastColor(),
        style: {
          fontWeight: 'bold'
        }
      }, "Jobs"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        className: "host_title hide",
        textAnchor: "end",
        x: this.computePos(),
        dy: -20,
        style: {
          fontWeight: 'bold'
        }
      }, "Nodes's timeline"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "gNodeaxis",
        transform: computers[0] ? "translate(".concat((computers[0].x2 || computers[0].x) - graphicopt.computePos(), ",").concat(rangey[0], ")") : "translate(200,0)"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: 'gMainaxis'
      }, scale.ticks(10).map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: 'ticks',
          transform: "translate(".concat(xScale(scale(d)), ",", 0, ")")
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          dy: '-0.5rem',
          textAnchor: 'middle',
          fill: _this9.contrastColor()
        }, multiFormat(d)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
          y2: -5,
          vectorEffect: "non-scaling-stroke",
          style: {
            stroke: _this9.contrastColor(),
            strokeWidth: 0.2,
            strokeDasharray: '1'
          }
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "annotation_back annotation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "majorbar"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        className: "tablemessage hide"
      }, "LOADING TABLE DATA")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "linkg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", null), linkdata.map(function (d) {
        var _a;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: "links ".concat(highlight ? highlight.link[d.source.key + "-" + d.target.key] ? 'highlight' : 'hide' : ''),
          fill: 'none',
          key: d.source.key + "-" + d.target.key
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: (_a = linkHorizontal({
            source: {
              x: (d.source.x2 === undefined ? d.source.y : d.source.x2) + (d.source.type === 'job' ? graphicopt.job.r : 0),
              y: (d.source.y2 === undefined ? d.source.y : d.source.y2) * heightRate
            },
            target: {
              x: (d.target.x2 === undefined ? d.target.x : d.target.x2) - (d.target.type === 'job' || d.source.type === 'job' ? graphicopt.job.r : 0),
              y: (d.target.y2 === undefined ? d.target.y : d.target.y2) * (d.target.type === 'job' ? heightRate : 1)
            }
          })) !== null && _a !== void 0 ? _a : '',
          strokeWidth: 0.3,
          strokeOpacity: 0.7,
          stroke: _this9.contrastColor()
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          textAnchor: 'middle',
          transform: "translate(".concat([((d.source.x2 || d.source.x) + (d.target.x2 || d.target.x)) / 2, ((d.source.y2 === undefined ? d.source.y : d.source.y2) + (d.target.y2 === undefined ? d.target.y : d.target.y2)) / 2 * heightRate], ")")
        }, d.links ? d.links : ''));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "nodeg"
      }, computers.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "node computeNode ".concat(fixName2Class(fixstr(d.key)), " ").concat(highlight2 && highlight2.comp[d.key] ? 'highlight2' : '', " ").concat(highlight ? highlight.comp[d.key] ? 'highlight' : 'fade' : ''),
          key: d.key,
          transform: "translate(".concat(d.x2, ",0)"),
          freezing: _this9.state.freezing,
          setfreezing: function setfreezing(freezing) {
            return _this9.setState({
              freezing: freezing
            });
          },
          mouseOver: function mouseOver() {
            return _this9.onMouseOverCompute(d);
          },
          mouseLeave: function mouseLeave() {
            return _this9.onRelease();
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: "computeSig",
          transform: "translate(".concat(-xScale.range()[1], ",").concat(fisheye_scale.y(scaleNode_y_middle(d.order)) * heightRate, ")")
        }, d.drawData.map(function (e) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", Object.assign({
            className: 'linegg ' + e["class"] + (highlight && highlight.comp[d.key] ? ' fade' : '')
          }, _this9.updatelayerpath(e)));
        }), highlight && highlight.comp[d.key] ? _this9.onFilterComputeHighlight(d, typeof highlight.comp[d.key] === 'boolean' ? undefined : highlight.comp[d.key], typeof highlight.comp[d.key] === 'boolean' ? true : undefined) : ''), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          className: "computeSig_label",
          textAnchor: "end",
          dx: -10,
          dy: '0.5rem',
          fill: _this9.contrastColor(),
          width: 200,
          transform: "translate(".concat(-xScale.range()[1], ",").concat(fisheye_scale.y(scaleNode_y_middle(d.order)) * heightRate, ")")
        }, d.key));
      }), jobs.map(function (d) {
        var _a;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "node jobNode ".concat(fixName2Class(fixstr(d.key)), " ").concat(highlight2 && highlight2.job[d.key] ? 'highlight2' : '', " ").concat(highlight ? highlight.job[d.key] ? 'highlight' : 'hide' : ''),
          key: d.key,
          transform: "translate(".concat(d.x2, ",").concat(d.y * heightRate, ")"),
          freezing: _this9.state.freezing,
          setfreezing: function setfreezing(freezing) {
            return _this9.setState({
              freezing: freezing
            });
          },
          mouseOver: function mouseOver() {
            return _this9.onMouseOverJob(d);
          },
          mouseLeave: function mouseLeave() {
            return _this9.onRelease();
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          className: "computeSig_b",
          r: graphicopt.radaropt.w / 2,
          fill: '#ddd',
          opacity: 0.2,
          strokeWidth: 0
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: "jobradar",
          fill: 'none'
        }, d.radarData ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          d: (_a = radarLine(d.radarData)) !== null && _a !== void 0 ? _a : '',
          // transform={`translate(${this.xScale(d.time)},${this.yScale(d.mean)})`}
          fill: d.radarData.color,
          fillOpacity: 0.8,
          // stroke={this.state.colorLevels(d.mean)}
          stroke: 'black',
          strokeWidth: 0.5
        }) : ''), highlight && highlight.job[d.key] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          className: "lelftext label",
          textAnchor: "end",
          x: -graphicopt.job.r
        }, "#Computes: ".concat(d.node_list.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          className: "righttext label",
          x: graphicopt.job.r
        }, d.values ? "#Jobs: ".concat(d.values.length) : d.key)) : '');
      }), users.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NodeElement__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "node userNode ".concat(fixName2Class(fixstr(d.key)), " ").concat(highlight2 && highlight2.user[d.key] ? 'highlight2' : '', " ").concat(highlight ? highlight.user[d.key] ? 'highlight' : 'fade' : ''),
          key: d.key,
          fill: 'white',
          transform: "translate(".concat(d.fx, ",").concat(d.fy, ")"),
          freezing: _this9.state.freezing,
          setfreezing: function setfreezing(freezing) {
            return _this9.setState({
              freezing: freezing
            });
          },
          mouseOver: function mouseOver() {
            return _this9.onMouseOverUser(d);
          },
          mouseLeave: function mouseLeave() {
            return _this9.onRelease();
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          className: "userNodeSig",
          r: graphicopt.user.r
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          className: "userNodeImg",
          r: graphicopt.user.r * 0.8,
          fill: d.isOpen ? "url(#userpicNoBorder)" : "url(#userpic)",
          onClick: function onClick(e) {
            return _this9.onClickUser(d, e);
          }
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          className: "userNodeSig_label",
          dy: '0.35rem',
          x: graphicopt.user.r + 4,
          style: {
            pointerEvents: 'all'
          }
        }, d.key), tableData[d.key] ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: 'row',
          transform: "translate(0,".concat(-delta_h, ")")
        }, tableData[d.key].map(function (d) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
            className: "cell ".concat(tableLayout.column[d.key].type),
            key: d.key,
            transform: "translate(".concat(tableLayout.column[d.key].x + (d.key !== 'UserID' ? tableLayout.column[d.key].width / 2 : 0), ",").concat(tableLayout.column[d.key].y, ")")
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
            style: {
              textAnchor: d.key !== 'UserID' ? 'middle' : 'start'
            }
          }, tableLayout.column[d.key].format ? d3__WEBPACK_IMPORTED_MODULE_1__["format"](tableLayout.column[d.key].format)(d.value) : d.value));
        })) : '');
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "table header",
        transform: "translate(".concat(users[0] ? users[0].x : this.userPos(), ",").concat(-15, ")")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "back",
        transform: "translate(0,".concat(10, ")")
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: '#ddd',
        d: this.pathRound({
          width: tableLayout.row.width,
          height: 25,
          ctl: 10,
          ctr: 10
        })
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: 'row',
        transform: "translate(0,".concat(-tableLayout.row.height / 2, ")")
      }, tableHeader.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
          className: "cell ".concat(tableLayout.column[d.key].type),
          transform: "translate(".concat(tableLayout.column[d.key].x + (d.key !== 'UserID' ? tableLayout.column[d.key].width / 2 : 0), ",20)"),
          onClick: function onClick() {
            return _this9.onClickHeaderCell(d);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__["default"], {
          text: d.value,
          width: tableLayout.column[d.key].width,
          endsymbol: d.direction ? '▲' : d.direction === undefined ? '↕' : '▼',
          style: {
            fontWeight: 'bold',
            textAnchor: d.key !== 'UserID' ? 'middle' : 'start',
            pointerEvents: 'all',
            fill: 'black'
          }
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
        className: "fisheyeLayer",
        width: xScale.range()[1] - xScale.range()[0],
        height: (yscale.range()[1] - yscale.range()[0]) * heightRate,
        transform: "translate(".concat(-graphicopt.computePos() + (xScale.range()[1] - xScale.range()[0]), " ,").concat(yscale.range()[0] * heightRate, ")"),
        style: {
          display: "none",
          opacity: 0
        }
      }))));
    }
  }]);

  return MapViz;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MapViz.defaultProps = {
  width: 100,
  height: 100
};
/* harmony default export */ __webpack_exports__["default"] = (MapViz);
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["stylesFactory"])(function (theme) {
  var upStreamColor = "rgba(252, 141, 89, 0.7)";
  var downStreamColor = "#4682b482";
  var emptyStreamColor = "rgba(0,0,0,0.5)"; //"rgba(112,112,112,0.5)";

  var upStreamColorHighlight = "rgba(252, 141, 89, 1)";
  var downStreamColorHighlight = "#4682b4";
  var emptyStreamColorHighlight = "rgb(0,0,0)";
  return {
    svg: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            & .fade \n            {opacity: 0.2;}\n            & text\n            {fill: ", "}\n            & .upStream\n            {fill:", "}\n            & .downStream\n            {fill:", "}\n            & .emptyStream\n            {fill:", "}\n            & .durationHighlight.upStream\n            {fill:", "}\n            & .durationHighlight.downStream\n            {fill:", "}\n            & .durationHighlight.emptyStream\n            {fill:", "}\n            "])), theme.colors.text.primary, upStreamColor, downStreamColor, emptyStreamColor, upStreamColorHighlight, downStreamColorHighlight, emptyStreamColorHighlight)
  };
});

function fixName2Class(s) {
  return 'h' + s.replace(/ |#|\./gi, ''); //avoid . and number format
}

function fixstr(s) {
  return s.replace(/ |#/gi, '');
}

var formatMillisecond = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"](".%L"),
    formatSecond = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"](":%S"),
    formatMinute = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%I:%M"),
    formatHour = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%I %p"),
    formatDay = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%a %d"),
    formatWeek = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%b %d"),
    formatMonth = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%B"),
    formatYear = d3__WEBPACK_IMPORTED_MODULE_1__["timeFormat"]("%Y");

function multiFormat(date) {
  return (d3__WEBPACK_IMPORTED_MODULE_1__["timeSecond"](date) < date ? formatMillisecond : d3__WEBPACK_IMPORTED_MODULE_1__["timeMinute"](date) < date ? formatSecond : d3__WEBPACK_IMPORTED_MODULE_1__["timeHour"](date) < date ? formatMinute : d3__WEBPACK_IMPORTED_MODULE_1__["timeDay"](date) < date ? formatHour : d3__WEBPACK_IMPORTED_MODULE_1__["timeMonth"](date) < date ? d3__WEBPACK_IMPORTED_MODULE_1__["timeWeek"](date) < date ? formatDay : formatWeek : d3__WEBPACK_IMPORTED_MODULE_1__["timeYear"](date) < date ? formatMonth : formatYear)(date);
}

/***/ }),

/***/ "./NodeElement.tsx":
/*!*************************!*\
  !*** ./NodeElement.tsx ***!
  \*************************/
/*! exports provided: NodeElement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeElement", function() { return NodeElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NodeElement = /*#__PURE__*/function (_React$Component) {
  _inherits(NodeElement, _React$Component);

  var _super = _createSuper(NodeElement);

  function NodeElement() {
    _classCallCheck(this, NodeElement);

    return _super.apply(this, arguments);
  }

  _createClass(NodeElement, [{
    key: "onHandleClick",
    value: function onHandleClick() {
      var _freezing = this.props.freezing;
      var freezing = !_freezing; // d3.select('.tippannel').select('.freezing').text(freezing ? 'unfreeze' : 'freeze')

      this.props.setfreezing(freezing);
    }
  }, {
    key: "onMouseOver",
    value: function onMouseOver() {
      if (!this.props.freezing) {
        this.props.mouseOver();
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      if (!this.props.freezing) {
        this.props.mouseLeave();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _a = this.props,
          children = _a.children,
          className = _a.className,
          other = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "className"]);

      var freezing = this.props.freezing;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", Object.assign({}, other, {
        onClick: function onClick() {
          return _this.onHandleClick();
        },
        className: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["cx"])(className, freezing ? Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n                  &:not(.highlight) \n                  {pointerEvents: 'none';}"]))) : Object(_emotion_css__WEBPACK_IMPORTED_MODULE_2__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n                  &:not(.highlight) \n                  {pointerEvents: 'auto';}"])))),
        onMouseOver: !freezing ? this.onMouseOver.bind(this) : undefined,
        onMouseLeave: !freezing ? this.onMouseLeave.bind(this) : undefined
      }), this.props.children);
    }
  }]);

  return NodeElement;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (NodeElement);

/***/ }),

/***/ "./StreamLegend.tsx":
/*!**************************!*\
  !*** ./StreamLegend.tsx ***!
  \**************************/
/*! exports provided: StreamLegend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamLegend", function() { return StreamLegend; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapViz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapViz */ "./MapViz.tsx");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/css */ "@emotion/css");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var StreamLegend = /*#__PURE__*/function (_React$Component) {
  _inherits(StreamLegend, _React$Component);

  var _super = _createSuper(StreamLegend);

  function StreamLegend() {
    _classCallCheck(this, StreamLegend);

    return _super.apply(this, arguments);
  }

  _createClass(StreamLegend, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _a, _b, _c, _d, _e;

      var _f = this.props,
          drawThreshold = _f.drawThreshold,
          min = _f.min,
          max = _f.max,
          width = _f.width,
          theme = _f.theme,
          other = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_f, ["drawThreshold", "min", "max", "width", "theme"]);

      var upScale = _MapViz__WEBPACK_IMPORTED_MODULE_2__["yUpperScale"];
      var downScale = _MapViz__WEBPACK_IMPORTED_MODULE_2__["yDownerScale"];
      var streamPos = +0 + 0 + upScale.range()[1];
      var streamxOffset = 80;
      var streamxScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().range([streamxOffset, width - 30]);
      var scaleService = d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"]().domain([min, max]);
      var area_up = d3__WEBPACK_IMPORTED_MODULE_3__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRom"]).x(function (d) {
        return streamxScale(d.x);
      }).y0(function (d) {
        return -upScale(d.y[0]);
      }).y1(function (d) {
        return -upScale(d.y[1]);
      });
      var area_down = d3__WEBPACK_IMPORTED_MODULE_3__["area"]().curve(d3__WEBPACK_IMPORTED_MODULE_3__["curveCatmullRom"]).x(function (d) {
        return streamxScale(d.x);
      }).y0(function (d) {
        return -downScale(d.y[0]);
      }).y1(function (d) {
        return -downScale(d.y[1]);
      });
      var threshold = this.props.drawThreshold;
      var data = [{
        values: getUpdtream(d3__WEBPACK_IMPORTED_MODULE_3__["range"](0, 21).map(function (d) {
          return d / 50;
        })),
        render: area_up,
        "class": 'upStream'
      }, {
        values: getDowndtream(d3__WEBPACK_IMPORTED_MODULE_3__["range"](20, 41).map(function (d) {
          return d / 50;
        })),
        render: area_down,
        "class": 'downStream'
      }, {
        values: getUpdtream(d3__WEBPACK_IMPORTED_MODULE_3__["range"](40, 46).map(function (d) {
          return d / 50;
        })),
        render: area_up,
        "class": 'emptyStream'
      }, {
        values: getDowndtream(d3__WEBPACK_IMPORTED_MODULE_3__["range"](45, 51).map(function (d) {
          return d / 50;
        })),
        render: area_down,
        "class": 'emptyStream'
      }];

      function getUpdtream(range) {
        var upStream = range.map(function (d) {
          return {
            x: d,
            y: [0, Math.random() * (1 - threshold)]
          };
        });
        upStream.push({
          x: range[range.length - 1],
          y: [0, 0]
        });
        upStream[0].y[1] = 1 - threshold;
        upStream[1].y[1] = 1 - threshold;
        return upStream;
      }

      function getDowndtream(range) {
        var downStream = range.map(function (d) {
          return {
            x: d,
            y: [Math.random() * -threshold, 0]
          };
        });
        downStream.push({
          x: range[range.length - 1],
          y: [-threshold, 0]
        });
        downStream[downStream.length - 2].y[0] = -threshold;
        return downStream;
      }

      var styles = getStyles(theme);
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object.assign({
        width: width,
        height: ((_a = downScale(1)) !== null && _a !== void 0 ? _a : 0) + 45,
        className: styles.svg
      }, other), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("marker", {
        id: "arrow",
        viewBox: "0 -5 10 10",
        refX: "5",
        refY: "0",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M0,-5L10,0L0,5",
        className: "arrowHead",
        fill: theme.colors.text.primary
      }))), [1 - threshold, -threshold].map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
          className: 'streamMarker streamlegendItem',
          transform: "translate(0,".concat(streamPos - (d > 0 ? upScale : downScale)(d), ")")
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
          className: 'threshold streamlegendItem',
          strokeDasharray: '2 1',
          stroke: _this.props.theme.colors.text.primary,
          strokeWidth: 0.5,
          x1: streamxScale(0),
          x2: streamxScale(1)
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
          className: 'streamlegendItem',
          fill: _this.props.theme.colors.text.primary,
          x: streamxScale(0.5),
          dy: d < 0 ? '1rem' : '0',
          textAnchor: 'middle'
        }, +d3__WEBPACK_IMPORTED_MODULE_3__["format"]('.2f')(scaleService.invert(d + threshold))));
      }), data.map(function (d) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
          className: 'stream streamlegendItem ' + d["class"],
          transform: "translate(0,".concat(streamPos, ")"),
          d: '' + d.render(d.values)
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        className: 'streamMid streamlegendItem',
        transform: "translate(".concat(streamxOffset - 20, ",").concat(streamPos, ")"),
        x2: 20,
        stroke: this.props.theme.colors.text.primary,
        markerEnd: 'url(#arrowhead)'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        className: 'nojob streamlegendItem',
        transform: "translate(0,".concat(streamPos, ")"),
        x1: streamxScale(40 / 50),
        x2: streamxScale(40 / 50),
        y1: downScale(0),
        y2: ((_b = downScale(1)) !== null && _b !== void 0 ? _b : 0) + 12,
        strokeDasharray: '2 1',
        stroke: this.props.theme.colors.text.primary
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        className: 'nojob streamlegendItem',
        transform: "translate(0,".concat(streamPos, ")"),
        x1: streamxScale(1),
        x2: streamxScale(1),
        y1: downScale(0),
        y2: ((_c = downScale(1)) !== null && _c !== void 0 ? _c : 0) + 12,
        strokeDasharray: '2 1',
        stroke: this.props.theme.colors.text.primary
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
        className: 'nojob streamlegendItem',
        transform: "translate(0,".concat(streamPos + ((_d = downScale(1)) !== null && _d !== void 0 ? _d : 0) + 5, ")"),
        x1: streamxScale(40 / 50),
        x2: streamxScale(1),
        markerEnd: 'url(#arrowhead)',
        markerStart: 'url(#arrowhead)',
        stroke: this.props.theme.colors.text.primary
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        className: 'nojob streamlegendItem',
        transform: "translate(0,".concat(streamPos + ((_e = downScale(1)) !== null && _e !== void 0 ? _e : 0) + 5, ")"),
        x: streamxScale(45 / 50),
        dy: 14,
        textAnchor: 'middle'
      }, "no running jobs"));
    }
  }]);

  return StreamLegend;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_4__["stylesFactory"])(function (theme) {
  var upStreamColor = "rgb(252,141,89)";
  var downStreamColor = "#4682b4";
  var emptyStreamColor = "rgb(0,0,0)"; //"rgba(112,112,112,0.5)";

  return {
    svg: Object(_emotion_css__WEBPACK_IMPORTED_MODULE_5__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n            & .fade \n            {opacity: 0.2;}\n            & text\n            {fill: ", "}\n            & .upStream\n            {fill:", "}\n            & .downStream\n            {fill:", "}\n            & .emptyStream\n            {fill:", "}\n           "])), theme.colors.text.primary, upStreamColor, downStreamColor, emptyStreamColor)
  };
});

/***/ }),

/***/ "./Text.tsx":
/*!******************!*\
  !*** ./Text.tsx ***!
  \******************/
/*! exports provided: Text, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Text = /*#__PURE__*/function (_React$Component) {
  _inherits(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text() {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.apply(this, arguments);
    _this.textRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.tspanRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.ellipsisRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.state = {
      words: [],
      text: '',
      elip: true,
      old_words: '',
      numWords: 0,
      isDone: false,
      isDoneL: false
    };
    return _this;
  }

  _createClass(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var words = this.props.text.trim().split(/\s+/);
      this.setState({
        words: words,
        text: words.join(' '),
        elip: true,
        old_words: '',
        numWords: words.length,
        isDone: false,
        isDoneL: false
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _a;

      if (this.props.text !== prevProps.text) {
        var words = this.props.text.trim().split(/\s+/);
        this.setState({
          words: words,
          elip: true,
          old_words: '',
          numWords: words.length,
          isDone: false,
          isDoneL: false
        });
      } else if (!this.state.isDone) {
        var isDone = this.state.isDone;

        var _words = this.state.words.slice();

        if (this.tspanRef && this.tspanRef.current && !isDone) {
          var opt = {
            isDone: false
          };

          if (this.tspanRef.current.getComputedTextLength() > this.props.width - 5 && _words.length) {
            opt.old_words = (_a = _words.pop()) !== null && _a !== void 0 ? _a : '';
            opt.text = _words.join(' ');
            opt.words = _words;
          } else {
            if (this.state.old_words !== '') opt.text = (_words ? _words.join(' ') + ' ' : '') + this.state.old_words;else opt.text = _words.join(' ');
            opt.isDone = true;
          }

          this.setState(opt);
        }
      } else if (this.tspanRef.current && this.state.isDone && !this.state.isDoneL) {
        var width = this.props.width;
        var _this$state = this.state,
            _words2 = _this$state.words,
            numWords = _this$state.numWords,
            old_words = _this$state.old_words;
        var _opt = {};
        if (_words2.length === numWords) _opt.elip = false;else {
          var _old_words = [];

          if (old_words !== '') {
            _old_words = old_words.split('');

            if (this.tspanRef.current.getComputedTextLength() > width - 5 && _old_words.length) {
              _old_words.pop();

              _opt.old_words = _old_words.join('');
              _opt.text = (_words2 ? _words2.join(' ') + ' ' : '') + _opt.old_words;
            } else {
              _opt.isDoneL = true;
            }
          } else {
            _opt.isDoneL = true;
          }
        }
        this.setState(_opt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          text = _a.text,
          endsymbol = _a.endsymbol,
          other = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["text", "endsymbol"]);

      var _text = this.state.text;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", Object.assign({
        ref: this.textRef
      }, other), this.state.elip ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
        ref: this.tspanRef
      }, _text + (!this.state.elip ? endsymbol || '' : '')) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", null, text + (endsymbol || '')), this.state.elip ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tspan", {
        className: 'elip'
      }, '...' + (endsymbol || '')) : '');
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./drawer.tsx":
/*!********************!*\
  !*** ./drawer.tsx ***!
  \********************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Drawer = /*#__PURE__*/function (_React$Component) {
  _inherits(Drawer, _React$Component);

  var _super = _createSuper(Drawer);

  function Drawer(props) {
    var _this;

    _classCallCheck(this, Drawer);

    _this = _super.call(this, props);

    _this.onOpen = function () {
      var open = !_this.state.open;

      _this.setState({
        open: open
      });
    };

    _this.state = {
      open: !!props.open
    };
    return _this;
  }

  _createClass(Drawer, [{
    key: "render",
    value: function render() {
      var styles = getStyles(Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["getTheme"])());
      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["cx"])(this.props.className, styles.wapper)
      }, open ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.props.title && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: styles.innerHolder,
        style: {
          height: this.props.title ? 'calc(100% - 20px)' : '100%'
        }
      }, this.props.children)) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        className: styles.drawButton,
        name: open ? 'arrow-left' : 'arrow-right',
        size: 'xl',
        onClick: this.onOpen
      }));
    }
  }]);

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["stylesFactory"])(function (theme) {
  var wapper_color = d3__WEBPACK_IMPORTED_MODULE_2__["color"](theme.colors.bg1);
  if (wapper_color) wapper_color.opacity = 0.8;
  return {
    wapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        background-color: ", ";\n        padding: 10px;\n        "])), '' + wapper_color),
    innerHolder: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        overflow: auto;\n       \n        margin-right: 12px\n        "]))),
    tableCell: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n         padding-left: 5px;\n         padding-right: 5px;\n         "]))),
    drawButton: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        position: absolute;\n        top: 50%;\n        right: 0;\n        // transform: translateX(50%)\n        "])))
  };
});

/***/ }),

/***/ "./img/u.png":
/*!*******************!*\
  !*** ./img/u.png ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./img/uNoBorder.png":
/*!***************************!*\
  !*** ./img/uNoBorder.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nO3debTdRZnu8eeFMIQEAgIBBWyZlKllHkUGGRTvZRZBoRUV0YZuFNsJh0bvFb2gdGurKNoMiopMioCCgDZDA8YwzxCGAEFkCFOYM7x31aKAdDxJzvnl7H3eqvp+1torLP0n+313dj27qn5V5u4CAABtWYh+AwDQHgIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANIgAAANAgAgAAAA0iAAAA0CACAAAADSIAAADQIAIAAAANGkXTgTqZ2SKSxkhaYi5/pn//Lmm6pJckvSDpWUnPSHpK0uPu/iIfD6BO5u60FiiImY2TtKakN0paUdIK+c/Z/3u8pNHD8K5SGHhE0kOSpki6T9K9kiZJusPdp/DZAcpEAAACMrOFJa0lae082L95tj+XD/Q3flrSTZKukzRR0lXuPinA3wvAfBAAgADMbA1Jm8722jBP05foYUmXSrpY0vnMEgAxEQCAEWBm60naWdKOkraQtEzFfbhe0pmSfunudwf4+wDNEwEA6A8zS2vyO8026L+h0dJfKemEHAaeC/D3AZpFAAB6xMzSWv0+kvaTtHX6n6j1q56Q9CNJ33H3h4L8nYCmEACAYZR36O+ZB/0deNR2vtJjhsdLOsrdHwn+dwWqQgAAhoGZbSLpsPyLf3FqOmTTJH1N0r+7+/TC/u5AkQgAQEf5oJ335IF/C+o4LG6R9CF3n1jBewFCIwAAQ2RmS+ZB/1BJr6d+w26GpCMlfcP5ggJ6hgAADJKZLZ4H/c9LWo669dx5kvZ396crf5/AiCAAAPORp/o/IulLklaiXn11o6R38aQAMPwIAMA8mNkukr4raXXqNGLukrStu/+l0fcP9AQBABiAmaW1/e/kXf0YebemsxTc/Ql6AQyPhagj8BozW8jM0jr/7Qz+oawj6Yx8SRKAYUAAADIzW1XSFZK+J2kp6hJOOljpK60XARguLAEALw/+e+cz6sdRj9BmSnqbu09ovRDAgmIGAE0zs8XM7Pv5tjoG//jSEsDxZraZmS3RejGABcEMAJqVp/zPynfvozyzJE3KjwrekF9XsFEQGBwCAJqUz+5PB82swCegKmmJ4M+SLsivq919VutFAQZCAEBzzOzdkk6XNIbuV29qDnonufulrRcDmB0BAE0xs49K+kFeS0Zb7pR0oqST3f1heo/WEQDQDDP7rKSj6XjzZuS9H19199taLwbaRQBAE8zssHyyH/CKtDfgF+lsAXe/m6qgNQQAVM/MDpL0o/SfdBsDSDMCJ0n6ors/SoHQCgIAqmZm+0v6KWdeYBAek3SYu59KsdACAgCqZWY75EfBRtFlDMFvJP0jVxCjdgQAVMnMVpM0UdLr6DA6eFLSB9z9XIqHWjEtiuqY2dj8K47BH10tLelsMzuCCqJWzACgKmaWNvr9StIedBbDJD0p8BF3f4GCoibMAKA2n2XwxzB7v6RLzGxpCouaMAOAapjZ+vkc+EXpKnogfbZ2cvenKS5qwAwAqmBmi+bH/Rj80SubpadKzGxJKowaEABQi69KeivdRI9tKel3ZrYEhUbpWAJA8cxs83QPPBf8oI9Odff3U3CUjBkAFC3v+v8+gz/67H1m9imKjpIRAFC6D0namC5iBByTT5sEisQSAIqVN2NNkrQCXcQImSppPXf/Kw1AaZgBQMm+xOCPEbaspONoAkrEDACKZGYrS7qbx/4QxL7ufjrNQEmYAUCpPsPgj0C+a2bL0hCUhACA4pjZeEkfpXMIJH0mj6YhKAkBACU6XNJoOodgDjSztWkKSsEeABQlX8hyn6Sl6BwCOtvd96QxKAEzACjNQQz+CGwPM9uCBqEEzACgKGZ2p6Q16RoC+4O770iDEB0zACiGmW3H4I8C7GBmf0+jEB0BACU5mG6hEIfRKETHEgCKkJ+xflDSYnQMBXhe0iruPpVmISpmAFCK/Rj8UZDRnFWB6AgAKMXedAqF+SANQ2QsASC8PP3/MHf+o0Abuvv1NA4RMQOAEuzO4I9CvY/GISoCAEqwF11CofY1M6N5iIglAIRmZktIepwNgCjYZu4+kQYiGmYAEN3WDP4o3DtpICIiACC67ekQCrczDUREBABERwBA6bYws7F0EdEQABCWmS0paWM6hMItQpBFRAQARPZ2SaPoECrwdpqIaAgAiIx71VGLzegkoiEAILIN6Q4qsbGZ8X2LUPhAIrKN6A4qkTYBrkUzEQkBACGZ2XhJb6A7qMimNBOREAAQFdP/qM16dBSREAAQ1QZ0BpV5Cw1FJAQARPVmOoPKEAAQCgEAUa1BZ1CZVc2Mcy0QBgEAUa1OZ1CZdCLgajQVURAAEI6ZjeYJAFTqjTQWURAAEFH6lWR0BhUi2CIMAgAiWpWuoFIEAIRBAEBEK9IVVGolGosoCACIaAW6gkoxA4AwCACIaDxdQaVeR2MRBQEAETEDgFotRWcRBQEAETEDgFoRABAGAQARLUdXUCkCAMIgACCisXQFlRpHYxEFAQARjaErqNRiNBZREAAQ0RJ0BbXiQiBEQQBARAQA1GwRuosICAAIxcwW53OJyjEDgBD4okU0/PpH7QgACIEAgGj4TAJAH/BlCwD99RL1RgQEAETjdASVm06DEQEBAAD6iwCAEAgAANA/M92dWS6EQABANHw5ombP011EQQBANEyPombT6C6iIAAgmufoCCr2NM1FFAQAhOLuM3lMChVjBgBhEAAQEbMAqBUzAAiDAICICACo1VN0FlEQABARAQC1eoTOIgoCACJ6hq6gUo/SWERBAEBEj9MVVIoZAIRBAEBEU+kKKsUMAMIgACCix+gKKvUwjUUUBABExAwAavUAnUUUBABExAwAajWFziIKAgAiIgCgRo+5+wt0FlEQABAR66SoEb/+EQoBABHxRYka3U9XEQkBABERAFCju+kqIiEAIBx3f4Yz01EhAgBCIQAgKmYBUJu76CgiIQAgKgIAasMMAEIhACAqDkxBTaZLuo+OIhICAKK6h86gIne5+3QaikgIAIiK9VLU5Da6iWgIAIiKAICa3Eo3EQ0BAFERAFATZgAQDgEAIbn7NI4ERkVuppmIhgCAyJgFQA1eYgYAEREAENmddAcVuJUnABARAQCRsXEKNbieLiIiAgAiu4XuoAIEAIREAEBkbJxCDa6hi4jI3J3GICwze1LSODqEQs2UtJS7P0cDEQ0zAIiOfQAo2W0M/oiKAIDoWAZAySbSPURFAEB0N9EhFGwCzUNUBABEdy0dQsGupHmIik2ACM3Mxkh6mrCKAj0l6XXuPovmISK+VBGauz8r6Q66hAJNYPBHZAQAlIBlAJToCrqGyAgAKAEHqaBEl9I1REYAQAmYAUBpXuQJAERHAEAJUgBgLRUl+bO7v0DHEBkBAOG5+zQuBkJhLqFhiI4AgFJcRadQkD/QLERHAEApOFAFpXiWwIoSEABQCr5QUYrL3f0luoXoCAAogrvfKWkq3UIBLqRJKAEBACVhFgAlOJ8uoQQEAJSEfQCIbrK7306XUAICAErCyWqI7gI6hFIQAFCSiZKeo2MI7Fyag1IQAFAMd5/OMgACS+H0jzQIpSAAoDQsAyCqizj+FyUhAKA0HLGKqH5NZ1ASc3cahmKY2aKSnpQ0mq4hkBmSxrv7EzQFpWAGAKVJifVeuoZg0kFVz9AUlIQAgGKY2cp5E+A6dA3BpM/kf5vZG2gMSsESAIpgZqvl9f9V6BgCmyxpe3efTJMQHQEA4ZnZcpImSFqNbqEAkyRt4e6P0yxExhIAQjMzk/QLBn8UZE1Jp+TPLhAWAQDRHSJpJ7qEwrxb0sE0DZGxBICwzGxZSXdLGkeXUKD0SOAaLAUgKmYAENlnGPxRsGUk/QsNRFTMACAkMxsraQoBAIVLh1at5O5cYoVwmAFAVPsw+KMCS0vam0YiIgIAotqXzqASfJYREksACMfM0jn/aePU4nQHFXg+7Qdw9xdpJiJhBgARbcrgj4qkQLsxDUU0BABEtBFdQWX4TCMcAgAiWpOuoDJvpqGIhgCAiP6OrqAyXGKFcAgAiGgZuoLKLEtDEQ0BABGNoSuozGgaimgIAIhoFl0BgN4iACCil+gKKvMCDUU0BABENJWuoDJP0lBEQwBARA/TFVTmIRqKaAgAiOh+uoLK3EdDEQ0BABHdQ1dQmbtpKKIhACCiSXQFlbmThiIabgNEOGaW7lB/gs6gEulLdkl3f5aGIhJmABCOu6cd0w/SGVTiHgZ/REQAQFTX0xlU4gYaiYgIAIjqGjqDSlxNIxERAQBR/YnOoBITaCQiYhMgQjKzcZIeJ6SicNMlLe3uz9FIRMOXK0Jy96ckXUd3ULiJDP6IigCAyC6kOygcn2GERQBAZOfRHRTutzQQUbEHAGGZ2UL5PIAV6RIKNEXSG50vWQTFDADCcvdZks6gQyjU6Qz+iIwAgOh+SodQqJ/QOERGAEBo7n41pwKiQH929xtpHCIjAKAE/0GXUBg+swiPTYAIz8wWTReqSFqJbqEAkyWt6e4zaBYiYwYA4bn7S5KOolMoxNcY/FECZgBQBDMbJekmSWvRMQR2s6QN3H0mTUJ0zACgCPkX1aF0C4GlX1OHMPijFAQAFMPd/yjph3QMQX3P3S+nOSgFSwAoipmNlnSVpPXpHAK5VtJW7v4iTUEpmAFAUdz9eUm7SfoLnUMQD0jancEfpSEAoDjufr+kHSU9RPcwwtJdFTu6+xQagdIQAFAkd78tTbnmJwOAkXB9nva/k+qjRAQAFMvd04Erm+dT12bRSfRJ2uX/b5K2zLNRQJHYBIgqmNnfS/qCpL0kLUpX0QNpjf9MSV9391spMEpHAEBVzGwZSTtJ2ljS/hwfjAWUNvidKmmipIvd/UkKiloQAFAtM0vXsX6ADmMBnODuB1FA1Ig9AKjZZLqLBXQvBUStCACo2SS6iwXEDn9UiwCAmt1Gd7GAbqeAqBV7AFCtfGzwNEkL02V0MF3S2HwdNVAdZgBQrXxsMFO46Op2Bn/UjACA2l1Dh9ERnx1UjQCA2k2gw+hoIoVDzQgAqN0VdBgdXUnhUDM2AaJqZpZC7uOSxtFpDMHTkpZxd+6YQLWYAUDV8hf4ZXQZQ3QZgz9qRwBACy6iyxiiP1Iw1I4AgBb8ni5jiC6kYKgdewDQBDNLxwKvQbcxCFPcfRUKhdoxA4BWnEunMUi/pVBoAQEArfg1ncYgERbRBJYA0IT8OOCDklak45iHdHfE8u7+IkVC7ZgBQBPyI11n0W3Mx3kM/mgFAQAtOZVuYz5+SYHQCpYA0BQzu0fSqnQdA3hS0grcAIhWMAOA1vyUjmMuTmPwR0uYAUBTzOxNktIsgNF5zGErd7+KoqAVzACgKe4+maOBMYDbGfzRGgIAWnQ8XcccTqAgaA1LAGiOmY2SdK+klek+JL2QPgvuPpVioCXMAKA57j5D0g/oPLIzGPzRImYA0CQzW1bSA5JG8wlo3qbufnXrRUB7mAFAk/Ivvp/Q/eZdyeCPVhEA0LJvSZrJJ6Bpx7ZeALSLAIBmufvdaf2XT0CzJkk6u/UioF0EALTuaykLtF6ERh2TL4kCmsQmQDTPzE6XtE/rdWhM2gC6Bkf/omXMAADSkZL4JdiWrzP4o3UEADTP3W+TdErrdWjIvZz8BxAAgFd8OZ8Ih/od6e7T6TNaRwAAXp4FSGvC36YW1bte0s9bLwIgNgECrzGzJSXdIen1lKVaO7r7H1ovAiBmAIDXuPs0SZ+jJNU6h8EfeA0zAMAczOwSSdtSl6qk/R3ruPu9rRcCeAUzAMDf+rikF6lLVY5i8Af+JwIAMAd3v13SV6lLNW6RdHTrRQDmxBIAMAAzW1jSFZI2pz5FS5c9benuE1svBDAnZgCAAbh7Gjj+QdIz1KdoRzH4AwNjBgCYBzM7gFMCi3Vl2szp7jNaLwQwEGYAgHlw959JOo4aFecRSfsy+ANzxwwAMB9mtoikCyS9g1oV4aV84M/lrRcCmBdmAID5yOfG7yXpBmoVXvpFcyCDPzB/BABgENz9KUk7EQJCS1c6H+zup7ZeCGAwCADAILn7o/mEwN9Ts3DS0xr7uPt/tl4IYLAIAMAQ5JmAXSQdTt3CSLMyG7r7r1ovBDAUBABgiPzlnbMnU7cwLnf3u1ovAjBUBAAApeNRJqADAgDQDYNOHLNaLwDQBQEA6IYAEAe9ADogAADdMOjEQS+ADggAQDczqVsYBACgAwIA0A2DThyEMaADAgDQDYNOHGwCBDogAADdMAMQBwEA6IAAAHTDDEAcBACgAwIA0IG7M+jEQS+ADggAQHcsA8RAAAA6IAAA3REAYiAAAB0QAIDuGHhiYD8G0AEBAOiOABADfQA6IAAA3THwxMBSDNABAQAAgAYRAAAAaBABAOiOqWcAxSIAAN0ZtQNQKgIA0B0BIAa+x4AO+IcDdMe/nxjoA9AB/3CA7kZRuxD4HgM64B8O0IGZGUsAYSzcegGALggAQDf8+o+DXgAdEACAbhahbmHQC6ADAgDQzaLULQx6AXRAAAC6WYy6hUEvgA4IAEA3i1O3MAgAQAcEAKCb0dQtDHoBdEAAALph0IljidYLAHRBAAC6YdCJY0zrBQC6IAAA3SxJ3cIgAAAdEACAbggAcdALoAMCANDNUtQtDHoBdEAAALoZR93CIAAAHRAAgG4IAHEsZWZ8lwFDxD8aoJvXUbcw0q2MS7deBGCoCABAN8tQt1AIZMAQEQCAbpalbqHQD2CICABAN8tTt1DoBzBEBACgm+WoWyjjWy8AMFQEAGCIzMz4xRnOiq0XABgqAgAwdLtwF0A4e7deAGCoCADA0H2CmoWzkZm9rfUiAENBAACGwMzWlrQzNQvpsNYLAAwFAQAYmq9Qr7D2NrN1Wy8CMFgEAGCQzGwLSe+lXmEtLOmbrRcBGCwCADB4x1Kr8HYxs51aLwIwGAQAYBDM7OOStqJWRTjOzMa0XgRgfggAwHyY2RqSvkWdirEGSwHA/Jm7UyZgLsxslKRL+fVfpF3c/YLWiwDMDTMAwLx9m8G/WD83s9VbLwIwNwQAYC7yuv+h1KdY6Yrgc8xsqdYLAQyEJQBgAGaWDvs5T9Ii1Kd4aRlgN3ef3nohgNkxAwDMwczeIelsBv9qvEvSaXk/B4CMAADMxsy2kXSupNHUpSp75j0BC7deCOAVBAAgM7NdJZ3PTX/VSqc4/srMCHdonggAwMvyhr9fM/hXbzdJfzSz5VovBEAAQNPSlLCZHSPpB/ksedQv3elwhZmtRa/RMp4CQLPMbLykX0rank9Bk6ZJ+rC7n9l6IdAmZgDQJDN7m6RrGfybtqSkM8zsWDPjiQ80hwCApqQvejP7hqTLJK1E9yHpU5ImmNm6FAMtYQkAzchf8KdI2pCuYwAvSvpCOv7Z3WdRINSOGQBULz32ZWZHSbqOwR/zsJikYyVdaWbrUyjUjhkAVM3M3pnuh5e0Gp3GEMzIF0F9xd2fpXCoEQEAVTKzt+Q7/P83HcYCeFDSEZJ+5nxZojIEAFTFzJaRdKSkQzjLH8NooqTD3f0KiopaEABQBTMbK+mTkj4taRxdRY+cI+lL7n4TBUbpCAAompktLunjeff28nQTfZCeEDhN0r+6+10UHKUiAKBIZjYmD/zpF/+KdBEjYKakUyUd5e630wCUhgCAopjZuLy+nw5v4UIXRJBmBM7KQeAGOoJSEABQBDNbJa/xfzQf4QpEdKGkb7r7xXQH0REAEJqZbZR2X0val139KMh1+VCh0919Oo1DRAQAhJOu6JW0p6RPSNqaDqFgD+Wrpn/o7o/SSERCAEAYZpbW9A/Km/v+js6gIi/kDYPfd/draCwiIABgxJnZFpIOlbRPPo8dqNkESd9LVxG7+4t0GiOFAIARkQ/u2V/Sx7igB41KSwInSzre3e/mQ4B+IwCgr8zsrZL+MQ/+7OYHpPQlfHHeK3Cuu8+gJugHAgB6Lv/a30/SwZI2peLAXKVNgydJ+rG7T6ZM6CUCAHrGzDbJz+2/j1/7wJC8MitwfLp/gEcJ0QsEAAyrfFLfAXk3/wZUF1hgj+S9Av/p7pMoJ4YLAQDDwsy2zr/23yNpCaoK9MQlaXkgHT3MEwRYUAQAdJaf2/9A/rW/NpUE+maqpFPyXoFbKTu6IABgSMzMJG2fN/Sl0/oWpYLAiLpC0o/yscMv0AoMFgEAg5J/7R+YB/41qRoQzhN5VuB4ZgUwGAQAzJOZbZOP5t2bX/tAMS7P5wqkvQIv0TYMhACAv2FmS0n6YB7416FCQLHSaYMn5suIOFcA/wMBAK8ys3Ul/VN+jG8slQGqMUvSb/MdBBc5X/zNEwEA+erd3SX9s6Ttmi8IUL870q2E6cRBd3+GfreLANAoM1s6P773T1y9CzTpqbw88B8sD7SJANAYM1td0uF5R/+Y1usBQDMl/UbSse5+JeVoBwGgEWa2maTPSNpL0kKt1wPAgFIA+GYKBOwTqB8BoHJmtoukz0vapvVaABi0O3IQ+CkXEdWLAFAhM1so/9I/QtJGrdcDQGcP5CDwY04ZrA8BoCJ54H+/pC9KWqv1egAYNn9NewQkHefuz1HWOhAAKpDP599X0pEM/AB66GFJ/y+dMshthOUjABTOzNKFPP9H0nqt1wJA30yRdJSkE9gjUC4CQKHM7O2SjpG0Reu1ADBi7kp7jdz9TFpQHgJAYcws3bt/tKRdW68FgDD+JOnT7n4FLSkHAaAQZraMpP+bL+hZuPV6AAjpLEmfcvf7aU98BIDg8s7+g/Pgv1zr9QAQ3vN5o+AxPDoYGwEgMDPbPN/pvWHrtQBQnHslfcLdz6V1MXEkbEBmtqSZfTcfy8ngD6BEq0o6x8xON7MV6GA8zAAEY2a75zu7V269FgCq8UTeJHgiLY2DABBE3uSX7uh+X+u1AFCtiyV9yN2n0OKRxxJAAGa2s6SbGPwBVG5HSTea2X6vvM280RkjgMKPIDNb3MzSdP8FklZqthAAWpJmO081s1+Y2XL50jKMAJYARoiZnSwprfcv3WQBAEBKFws96u5vohb9RwAYAXnw/2BzbxwABuDuRl36jyWAPjOzbzP4A8Br8o8i9BkzAH1kZgdKOqmZNwwAg5eeDiAI9BEBoE8Y/AFgnp6StJ27X0+Z+oMlgD5g8AeA+Ron6WQzY2N0nxAAeszM9mDwB4BBWT+FAErVHwSAHjKzDfgwA8CQ7G5mn6RkvccegB7Jg/8leVoLADA0G7IfoLcIAD3A4A8ACyxtCnyTuz9JKXuDJYBhZmZvYvAHgAWWvkPPpoy9QwAYRnn36tkM/gAwLLY1s69Qyt5gCWCY5MH/kryLFQAwfPZ0d2YDhhkBYBiY2SKS/lvSZsW/GQCIJ+0H2MDdJ9Ob4cMSwDBw9+mSPi3p6eLfDADEw36AHiAADBN3vzwdYynpkSreEADE8hj9GF4EgGHk7tdJepuku6t5UwAw8n4jaWf6MLzYA9ADZjZe0m8lbVLdmwOA/rpI0rvdfQZ1H17MAPSAu6dlgO0lnV/dmwOA/vmFpHcx+PcGAaBH3P2ZdKa1pBOrfIMA0FvHSTrA3WdR594gAPRQfjrgIElfrvZNAsDwSuvSn3X3Q5016p5iD0CfmNl7Jf1E0uJNvGEAGLrnJO3PoT/9QQDoIzPbXNI5ksY386YBYHD+ImlXd7+WevUHSwB95O4T8mmBNzfzpgFg/tIj1Jsx+PcXAaDP3P0+SVvl51oBoHVnSHq7uz/YeiH6jQAwAtx9mqS9JHHLFYBWpfXnIyTt6+7P8inoP/YAjDAz20PSKZLGNl0IAC1Jl/u8391/R9dHDgEgADNbN190sUbrtQBQvdvTGSnufietHlksAQTg7rdI2pR9AQAqd0be7MfgHwABIAh3f1LSnpI+J4mTrwDUJB3l+8m83j+NzsbAEkBAZratpNMkrdB6LQAUL+3uf6+7X0krY2EGICB3v1TShpIubb0WAIp2saSNGPxjIgAE5e4PSdohPyrIkgCAksyU9AVJ78y3oyIglgAKkJcEfi5ppdZrASC8+/IjfvzqD44ZgALkJYENJJ3Xei0AhHZW+q5i8C8DAaAQ7v6YpN0kHSbphdbrASCUdIvfxyTtk59oQgFYAiiQma2TTw/cqPVaABhx6ZKzf3D3SbSiLMwAFMjdb5W0paSj2CAIYISkjX5HStqawb9MzAAUzsy2yrMBq7VeCwB9kwb8A9z9z5S8XMwAFC5vtllf0ndbrwWAnku/GP8tb/Rj8C8cMwAVMbNtJJ0oafXWawFg2KVLfD7s7ldR2jowA1ARd79M0lsl/XtO6gCwoNI+o6PT6aQM/nVhBqBSZpY2Cf5Y0rqt1wJAZzdI+qi7T6SE9WEGoFI5qafHBL8o6cXW6wFgSNJz/Z+RtAmDf72YAWiAma0h6Yf5bgEAmJfzJR3i7pOpUt2YAWiAu98laSdJH5DExRwABpIuINtP0v9i8G8DAaAR/rJ0XsBbJH0nH+IBADMkfSt9N7j7ac60cDNYAmiUmb01n7bA2xUAAAR4SURBVB2wTeu1ABr2B0n/7O638SFoDzMAjXL3GyVtl67tlPSX1usBNOaBdHFPWhpk8G8XMwBIswFjJH1a0mclLUFFgGo9I+kb6awQd3+eNreNAIBXmdlK+YKhD1IVoCrpMJ8TJP2ru/+V1kIEAAzEzDaWdKykbSkQULyLJf1LXvYDXsUeAPwNd79G0vaS3p1PAgNQnmvyGv9ODP4YCDMAmCczSyFxX0lf48phoAh35BNAf8UjfZgXAgAGxcwWlfQRSV+W9HqqBoQzRdJXJZ3s7jNoD+aHAIAhMbPR6XIQSUdIWpHqASMuDfxfT1eBuzv3fmDQCADoJAeBgyV9niAAjIgH88B/AgM/uiAAYIHkIPCxfI7ASlQT6Ln7JR2TB/4XKDe6IgBgWJjZYpL2l/Q5SW+mqsCwu1XS0ZJOdffplBcLigCAYWVmC0vaM+8R2IjqAgtsQj6971x3n0U5MVwIAOgJMzNJ75B0eLpelCoDQ5K+mM9JR/ZKuozH+dALBAD0nJmtJekT+Yjh0VQcmKtnJZ2Urux297soE3qJAIC+MbNl85MDh0hamcoDr0ob+74v6cfu/gRlQT8QANB3ZjYqLwukILAzHUCj0pfvBZKOk3S+u8/kg4B+IgBgRJnZmvkxwg9LWoZuoAFT8818x7v7PTQcI4UAgBDyeQJ75uOG30FXUJn0RXtROq1P0m94fh8REAAQjpmtKulDkg6UtAodQsEm50196Xz++2kkIiEAIKx8psAOkg6QtJekMXQLBZgm6SxJP5P0Xzy7j6gIACiCmaXBf7d82uA7JY2icwgkncz3O0k/l3Seuz9PcxAdAQDFMbPlJe0j6T2StpW0EF3ECEi79v9L0hmSznT3x2kCSkIAQNHMbLykPXIg2F7SwnQUPZTu2b84Dfh5M99jFBulIgCgGma2XF4m2DWfL7AE3cUweEbShflo3nP5pY9aEABQJTNbPD9OuGt+cVUxhiLt2D83vy7hvn3UiACA6uWLidbPswJpA+HWkhal85hNGuAvk/T7/Gv/Zi7gQe0IAGhOfqJgmxwGUihYm09Bk27Og30a9C9n5z5aQwBA88xshRwI0hMF20lat/WaVOrGNJ0v6dJ8xS4b+NA0AgAwh/yY4dslbSVpC0mbSFqMOhUl/Zq/WtJV+ZV+4U9tvSjA7AgAwHyYWdovsIGkLfNrY0lrULdQ7pxtwP+TpBvcfXrrRQHmhQAAdGBm4/LGwo3ya8O8l4BzCHorPYd/q6TrJF2bX2mwn1bzmwZ6gQAADBMzS8sEb8l7CF55rSdp9fR/U+chSefn35U36t2SX+m/J7n7SwW9DyAsAgDQYzkYrJaXDdac489VGp41SL/mH0iDeh7sZ/9zMs/eA71FAABGUL7x8PWS3jjbK4WClSWtMNurtJsQ0+l5D8/2mpIP15n99bC7zwzwdwWaRAAACmBmY3MYSHcfLCNp6fzn7P89Nh9/PNBr4XyD4qg5/tvzL/GZA/z53Fxeab39CUlPzvFnej2SB/Zn+VwBgUn6/3dexp/NV/e8AAAAAElFTkSuQmCC");

/***/ }),

/***/ "./mapviz.css":
/*!********************!*\
  !*** ./mapviz.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./mapviz.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./mapviz.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainViz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainViz */ "./MainViz.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_MainViz__WEBPACK_IMPORTED_MODULE_1__["MainViz"]).setPanelOptions(function (builder) {
  return builder.addBooleanSwitch({
    path: 'userEncoded',
    name: 'Encoded username',
    defaultValue: true
  }); // .addNumberInput({
  //     path: 'nodePerRing',
  //     name: '#Node per ring',
  //     defaultValue: 50
  // })
  // .addNumberInput({
  //     path: 'nodeSize',
  //     name:'Node Size',
  //     defaultValue: 5
  // })
  // .addSliderInput({
  //     path: 'lineOpacity',
  //     name:'Line Opacity',
  //     defaultValue: 0.5,
  //     settings: {min:0,
  //         max:1,
  //         step: 0.01}
  // })
  // .addSelect({
  //     path: 'axisDisplay',
  //     name: 'Axis display',
  //     defaultValue: 'left',
  //     settings:{
  //         options: [{value: 'none',label:'Hidden'},
  //             {value: 'left',label:'Left'},
  //             {value: 'right',label:'Right'}]
  //     }
  // })
});

/***/ }),

/***/ "@emotion/css":
/*!*******************************!*\
  !*** external "@emotion/css" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__emotion_css__;

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map