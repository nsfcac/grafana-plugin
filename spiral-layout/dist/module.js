define(["@grafana/data","@grafana/ui","d3","emotion","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./ColorLegend.tsx":
/*!*************************!*\
  !*** ./ColorLegend.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_3__);





var ColorLegend = function ColorLegend(_a) {
  var colorScale = _a.colorScale,
      range = _a.range,
      _b = _a.height,
      height = _b === void 0 ? 30 : _b,
      _c = _a.barHeight,
      barHeight = _c === void 0 ? 10 : _c,
      _d = _a.style,
      style = _d === void 0 ? {} : _d,
      other = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["colorScale", "range", "height", "barHeight", "style"]);

  var id = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniqueId"])();
  }, []);

  var _e = react__WEBPACK_IMPORTED_MODULE_1___default.a.useMemo(function () {
    var _a, _b, _c, _d;

    var _range = colorScale.domain();

    var newRange = _range[0] > _range[1] ? range.slice().reverse() : range.slice();
    var scale = colorScale.copy().domain([(_a = newRange[0]) !== null && _a !== void 0 ? _a : 0, (_b = newRange[1]) !== null && _b !== void 0 ? _b : 0]);
    var scalep = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().domain([(_c = newRange[0]) !== null && _c !== void 0 ? _c : 0, (_d = newRange[1]) !== null && _d !== void 0 ? _d : 0].sort(function (a, b) {
      return a - b;
    })).range([0, 100]);
    return {
      ticks: scalep.ticks(5).sort(function (a, b) {
        return a - b;
      }).map(function (v) {
        return [v, scalep(v)];
      }),
      cloneColor: scale
    };
  }, [colorScale, range]),
      ticks = _e.ticks,
      cloneColor = _e.cloneColor;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      width: '100%',
      height: height
    }, style)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("linearGradient", {
    id: "linear-gradient" + id
  }, ticks.map(function (t, i, n) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("stop", {
      key: t[0],
      offset: t[1] + "%",
      stopColor: cloneColor(t[0])
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    width: '100%',
    height: barHeight,
    style: {
      fill: "url(#" + ("linear-gradient" + id) + ")"
    }
  }), ticks.map(function (t, i, n) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      key: t[0],
      x: t[1] + "%",
      dy: "1rem",
      y: barHeight,
      fill: "currentColor"
    }, Math.abs(t[0]) > 999 ? Object(d3__WEBPACK_IMPORTED_MODULE_3__["format"])('.2s')(t[0]) : t[0]);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorLegend);

/***/ }),

/***/ "./SimplePanel.tsx":
/*!*************************!*\
  !*** ./SimplePanel.tsx ***!
  \*************************/
/*! exports provided: SimplePanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePanel", function() { return SimplePanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var TimeSelection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! TimeSelection */ "./TimeSelection.tsx");
/* harmony import */ var ColorLegend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ColorLegend */ "./ColorLegend.tsx");



 // import{Timeline} from './Timeline'





;

function createOrder() {
  // @ts-ignore
  var a = new Array();
  a.object = {};
  return a;
}

var SimplePanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SimplePanel, _super);

  function SimplePanel(props) {
    var _this = _super.call(this, props) || this;

    _this.svgRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.trajectory = {
      bandwidth: 10,
      thresholds: 10,
      colorScheme: "interpolateViridis"
    };
    _this.state = {
      data: [],
      datas: [],
      dataByTime: {},
      dimensions: [],
      selectedService: '',
      selectedIndex: 0,
      selectedTime: new Date(),
      timeStamp: [],
      ranking: {
        byComputer: {},
        byMetric: {},
        byUser: {}
      },
      order: createOrder()
    };
    return _this;
  }

  SimplePanel.prototype.widthView = function () {
    var _c;

    return this.props.width * ((_c = this.state.scalezoom) !== null && _c !== void 0 ? _c : 1);
  };

  SimplePanel.prototype.heightView = function () {
    var _c;

    return this.props.height * ((_c = this.state.scalezoom) !== null && _c !== void 0 ? _c : 1);
  };

  SimplePanel.prototype.widthG = function () {
    var _c, _d;

    return this.widthView() - ((_c = this.state.margin) !== null && _c !== void 0 ? _c : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).left - ((_d = this.state.margin) !== null && _d !== void 0 ? _d : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).right;
  };

  SimplePanel.prototype.heightG = function () {
    var _c, _d;

    return this.heightView() - ((_c = this.state.margin) !== null && _c !== void 0 ? _c : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).top - ((_d = this.state.margin) !== null && _d !== void 0 ? _d : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).bottom;
  };

  SimplePanel.prototype.centerX = function () {
    var _c;

    return ((_c = this.state.margin) !== null && _c !== void 0 ? _c : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).left + this.widthG() / 2;
  };

  SimplePanel.prototype.centerY = function () {
    var _c;

    return ((_c = this.state.margin) !== null && _c !== void 0 ? _c : {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    }).top + this.heightG() / 2;
  };

  SimplePanel.prototype.r = function () {
    var _c;

    return ((_c = d3__WEBPACK_IMPORTED_MODULE_4__["min"]([this.props.width, this.props.height])) !== null && _c !== void 0 ? _c : 0) / 2 - 20;
  };

  SimplePanel.prototype.componentDidMount = function () {
    var _c, _d, _e;

    var opt = this.handleData();
    if (opt.dimensions) opt.selectedService = opt.dimensions[0].key;

    if (opt.timeStamp) {
      opt.selectedIndex = 0;
      opt.selectedTime = (_c = opt.timeStamp[opt.selectedIndex]) !== null && _c !== void 0 ? _c : new Date();
    }

    opt.data = this.extractData((_d = opt.dataByTime) !== null && _d !== void 0 ? _d : {}, (_e = opt.selectedTime) !== null && _e !== void 0 ? _e : this.state.selectedTime);
    this.sortByService(opt.data, '' + opt.selectedService);
    this.setState(opt);
  };

  SimplePanel.prototype.onChangeTime = function (selectedIndex) {
    var _this = this;

    var _c, _d;

    var opt = {};
    opt.selectedIndex = selectedIndex;
    opt.selectedTime = (_c = this.state.timeStamp[selectedIndex]) !== null && _c !== void 0 ? _c : new Date();
    opt.data = this.extractData(this.state.dataByTime, (_d = opt.selectedTime) !== null && _d !== void 0 ? _d : this.state.selectedTime);
    this.sortByService(opt.data, this.state.selectedService);

    if (this.state.selectedData) {
      // @ts-ignore
      opt.selectedData = opt.data.find(function (d) {
        return _this.state.selectedData.id === d.id;
      });
    }

    this.setState(opt);
  };

  SimplePanel.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
    var _c, _d, _e;

    if (this.props.data !== prevProps.data) {
      var opt = this.handleData();
      if (opt.dimensions) opt.selectedService = opt.dimensions[0].key;

      if (opt.timeStamp) {
        opt.selectedIndex = 0;
        opt.selectedTime = (_c = opt.timeStamp[opt.selectedIndex]) !== null && _c !== void 0 ? _c : new Date();
      }

      opt.data = this.extractData((_d = opt.dataByTime) !== null && _d !== void 0 ? _d : {}, (_e = opt.selectedTime) !== null && _e !== void 0 ? _e : this.state.selectedTime);
      this.sortByService(opt.data, '' + opt.selectedService);
      this.setState(opt);
    }
  };

  SimplePanel.prototype.sortByService = function (data, service) {
    data.sort(function (a, b) {
      return a[service] - b[service];
    }).forEach(function (d, i) {
      return d.order = i;
    });
  };

  SimplePanel.prototype.draw_trajectory_contours = function (d, data, radius, spiralScale, theta) {
    var _this = this;

    var _c, _d;

    var dataDraw = data; // if (_.isArray(data[0]))
    //     dataDraw = _.flatten(data);

    dataDraw = dataDraw.filter(function (d) {
      return d != undefined;
    });
    var contours = d3__WEBPACK_IMPORTED_MODULE_4__["contourDensity"]().x(function (e) {
      return radius(spiralScale(e)) * Math.sin(theta(spiralScale(e))) + _this.centerX();
    }).y(function (e) {
      return -radius(spiralScale(e)) * Math.cos(theta(spiralScale(e))) + _this.centerY();
    }).size([this.widthG(), this.heightG()]).bandwidth(this.trajectory.bandwidth)(dataDraw);

    var lastbase = lodash__WEBPACK_IMPORTED_MODULE_5__["last"](d3__WEBPACK_IMPORTED_MODULE_4__["contourDensity"]().size([this.widthG(), this.heightG()]).bandwidth(this.trajectory.bandwidth)(dataDraw.map(function (d) {
      return [_this.widthG() / 2, _this.heightG() / 2];
    })));

    if (lastbase) {
      var base_1 = lastbase.value;
      var range = d3__WEBPACK_IMPORTED_MODULE_4__["extent"](contours, function (d) {
        return d.value / base_1 * 100;
      });
      var color_1 = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_4__["interpolateViridis"]).domain([(_c = range[0]) !== null && _c !== void 0 ? _c : 0, (_d = range[1]) !== null && _d !== void 0 ? _d : 0]);
      return contours.map(function (d) {
        var _c;

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
          className: "trajectory trajectoryPath",
          transform: "translate(" + -_this.centerX() + "," + -_this.centerY() + ")",
          d: (_c = d3__WEBPACK_IMPORTED_MODULE_4__["geoPath"]()(d)) !== null && _c !== void 0 ? _c : '',
          style: {
            fill: color_1(d.value / base_1 * 100)
          }
        });
      });
    } else {
      return '';
    } // g.select('g.trajectoryHolder').selectAll('path.trajectory.trajectoryPath')
    //     .data(contours)
    //     .join('path')
    //     .attr('transform',`translate(${-graphicopt.centerX()},${-graphicopt.centerY()})`)
    //     .attr('class','trajectory trajectoryPath')
    //     .attr("d", d3.geoPath())
    //     .style('stroke',null)
    //     .style("fill", d => color(d.points)).style('opacity',null);

  };

  SimplePanel.prototype.handleData = function () {
    var _c;

    var data = this.props.data;
    var dataByTime = {};
    var datas = new Array();
    var nodeLists = new Map();
    var dimensions = [];
    var dimensionObject = {};
    var timeObject = {};
    var ranking = {
      byComputer: {},
      byMetric: {},
      byUser: {}
    };

    function getDim(range, order, dim) {
      var scale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain(range);
      var dimControl = {
        range: range,
        scale: scale,
        order: order,
        key: dim,
        active: new Array(),
        tickFormat: undefined
      };
      return dimControl;
    }

    function handleDataWithname(serie) {
      var _c, _d, _e;

      var dim = (_c = serie.refId) !== null && _c !== void 0 ? _c : '';
      var times = serie.fields.find(function (e) {
        return e.name.trim().toLowerCase() === 'time';
      });
      var values = serie.fields.find(function (e) {
        return e.name === 'value';
      });
      var nodeids = serie.fields.find(function (e) {
        return e.name === 'name';
      });
      var dimTarget = dimensionObject[dim];
      var range = dimTarget ? [(_d = dimTarget.range[0]) !== null && _d !== void 0 ? _d : Infinity, (_e = dimTarget.range[1]) !== null && _e !== void 0 ? _e : -Infinity] : [Infinity, -Infinity];

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

    function extractDimData(id_1, dim_1, d, times) {
      var _a, _b;

      if (!dataByTime[id_1]) {
        dataByTime[id_1] = {};
      }

      var dimTarget = dimensionObject[dim_1];
      var range_1 = dimTarget ? [(_a = dimTarget.range[0]) !== null && _a !== void 0 ? _a : Infinity, (_b = dimTarget.range[1]) !== null && _b !== void 0 ? _b : -Infinity] : [Infinity, -Infinity];
      d.values.toArray().forEach(function (val, i) {
        if (!dataByTime[id_1][times.values.get(i)]) {
          var item = {
            time: times.values.get(i),
            order: 0,
            id: id_1
          };
          datas.push(item);
          nodeLists.set(id_1, true);
          dataByTime[id_1][times.values.get(i)] = item;
        }

        dataByTime[id_1][times.values.get(i)][dim_1] = val;

        if (val !== null) {
          if (val < range_1[0]) range_1[0] = val;
          if (val > range_1[1]) range_1[1] = val;
        }
      });

      if (!dimTarget) // new Dimension
        {
          dimensionObject[dim_1] = getDim(range_1, dimensions.length, dim_1);
          dimensions.push(dimensionObject[dim_1]);
        } else {
        dimTarget.range = range_1;
        dimTarget.scale.domain(range_1);
      }
    }

    function handleDataWithnames(serie) {
      var times = serie.fields.find(function (e) {
        return e.name.trim().toLowerCase() === 'time';
      });

      if (times) {
        serie.fields.filter(function (e) {
          return e.type === 'number';
        }).forEach(function (d) {
          if (d.labels) {
            var dim_1 = d.name;
            var id_1 = '';

            if (dim_1 === 'value') {
              var str = Object.values(d.labels)[0].split('|').map(function (d) {
                return d.trim();
              });
              id_1 = str[0].trim();
              dim_1 = str[1].trim();
            } else {
              id_1 = Object.values(d.labels)[0].replace('|', '').trim();
            }

            extractDimData(id_1, dim_1, d, times);
          } else if (d.name.split('|').length === 2) {
            var str_1 = d.name.split('|');
            var id = str_1[1].trim();
            var dim = str_1[0].trim();
            extractDimData(id, dim, d, times);
          }
        });
      }
    }

    data.series.forEach(function (serie) {
      var time = serie.fields.find(function (e) {
        return e.name.trim().toLowerCase() === 'time';
      });

      if (time) {
        time.values.toArray().forEach(function (t) {
          timeObject[t] = t;
        });
      }

      if (serie.fields.find(function (e) {
        return e.name === 'name';
      })) handleDataWithname(serie);else handleDataWithnames(serie);
    }); // const timeRange: [number,number] |[undefined,undefined] = d3.extent(datas, d => d.time);
    // if (timeRange[0]!==undefined && timeRange[1]!==undefined){
    //     const timeDim = getDim(timeRange, -1, 'time');
    //     timeDim.tickFormat = (d: number) => new Date(d).toLocaleString();
    //     dimensions.push(timeDim);
    // }

    dimensions.sort(function (a, b) {
      return a.order - b.order;
    }).forEach(function (d, i) {
      return d.order = i;
    });
    var timeStamp = (_c = Object.values(timeObject).sort(function (a, b) {
      return +a - +b;
    })) !== null && _c !== void 0 ? _c : [];
    dimensions.forEach(function (s) {
      ranking.byMetric[s.key] = [];
    });
    var hosts = Object.keys(dataByTime);
    timeStamp.forEach(function (t, ti) {
      dimensions.forEach(function (ser) {
        ranking.byMetric[ser.key][ti] = {};
        var sorteddata = hosts.map(function (h) {
          if (!ranking.byComputer[h]) ranking.byComputer[h] = {};
          if (!ranking.byComputer[h][ser.key]) ranking.byComputer[h][ser.key] = [];
          return {
            key: h,
            value: dataByTime[h]['' + t][ser.key]
          };
        }).sort(function (a, b) {
          return -b.value + a.value;
        });
        sorteddata.forEach(function (d, i) {
          ranking.byMetric[ser.key][ti][d.key] = i;
          ranking.byComputer[d.key][ser.key][ti] = i; // d.user.forEach(u=>{
          //     if (!ranking.byUser[u][ser.text][d.key])
          //         ranking.byUser[u][ser.text][d.key] = [];
          //     ranking.byUser[u][ser.text][d.key][ti]=i;
          // });
        });
      });
    });
    return {
      dimensions: dimensions,
      dataByTime: dataByTime,
      timeStamp: timeStamp,
      datas: datas,
      ranking: ranking
    };
  };

  SimplePanel.prototype.extractData = function (dataByTime, time) {
    var data = [];
    Object.values(dataByTime).forEach(function (d) {
      if (d['' + time]) data.push(d['' + time]);
    });
    return data;
  };

  SimplePanel.prototype.render = function () {
    var _this = this;

    var _c, _d;

    var styles = getStyles();
    var _e = this.props,
        width = _e.width,
        height = _e.height; // const {nodeSize,nodePerRing,orderType} = this.props.options;

    var _f = this.props.options,
        nodeSize = _f.nodeSize,
        numberOfRing = _f.numberOfRing,
        orderType = _f.orderType;
    var _g = this.state,
        data = _g.data,
        dimensions = _g.dimensions,
        selectedService = _g.selectedService,
        selectedIndex = _g.selectedIndex,
        timeStamp = _g.timeStamp; // const numNodes = Object.keys(dataByTime).length;

    var r = this.r();
    var start = 0; // const end = Math.PI*2*(numNodes/nodePerRing);

    var end = Math.PI * 2 * numberOfRing;

    var theta = function theta(r) {
      return -(r - start) - start;
    };

    var radius = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain([start, end]).range([r * 0.1, r]);
    var points = d3__WEBPACK_IMPORTED_MODULE_4__["range"](start, end + 0.001, (end - start) / 1000);
    var spiral = d3__WEBPACK_IMPORTED_MODULE_4__["radialLine"]().curve(d3__WEBPACK_IMPORTED_MODULE_4__["curveCardinal"]).angle(theta).radius(radius);
    var selectedDim = dimensions.find(function (d) {
      return d.key === selectedService;
    });
    var range = selectedDim ? [(_c = selectedDim.range[0]) !== null && _c !== void 0 ? _c : 0, (_d = selectedDim.range[1]) !== null && _d !== void 0 ? _d : 0] : [0, 0];
    var color = d3__WEBPACK_IMPORTED_MODULE_4__["scaleSequential"]().interpolator(d3__WEBPACK_IMPORTED_MODULE_4__["interpolateSpectral"]).domain(range.slice().reverse());
    var spiralScale = d3__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"]().domain(orderType === 'rank' ? [0, data.length - 1] : range).range([start, end]);
    var order = orderType === 'rank' ? 'order' : selectedService;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: width + ' px',
        height: height + ' px',
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      className: styles.svg,
      width: width,
      height: height,
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 " + width + " " + height,
      ref: this.svgRef
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
      className: "content",
      transform: "translate(" + this.centerX() + "," + this.centerY() + ")"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      id: "#spiral",
      d: '' + spiral(points),
      style: {
        fill: 'none',
        stroke: 'lightgrey',
        strokeDasharray: "6 5",
        opacity: 0.2
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", null, this.state.selectedData ? this.draw_trajectory_contours(this.state.selectedData, orderType === 'rank' ? this.state.ranking.byComputer[this.state.selectedData.id][selectedService] : Object.values(this.state.dataByTime[this.state.selectedData.id]).map(function (e) {
      return e[selectedService];
    }), radius, spiralScale, theta) : ''), data.map(function (d) {
      var anglePer = spiralScale(d[order !== null && order !== void 0 ? order : '']);
      var a = theta(anglePer); // % distance are on the spiral

      var lineR = radius(anglePer);
      var x = lineR * Math.sin(a); // x postion on the spiral

      var y = -lineR * Math.cos(a); // y position on the spiral

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("circle", {
        cx: x,
        cy: y,
        r: nodeSize,
        fill: '' + color(d[selectedService !== null && selectedService !== void 0 ? selectedService : '']),
        opacity: _this.state.selectedData ? _this.state.selectedData === d ? 1 : 0.1 : 1,
        onMouseOver: function onMouseOver() {
          if (!_this.state.freeze) _this.setState({
            selectedData: d
          });
        },
        onClick: function onClick() {
          if (_this.state.freeze) _this.setState({
            selectedData: undefined
          });

          _this.setState({
            freeze: !_this.state.freeze
          });
        },
        onMouseOut: function onMouseOut() {
          if (!_this.state.freeze) _this.setState({
            selectedData: undefined
          });
        }
      });
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        position: 'absolute'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
      value: selectedService,
      onChange: function onChange(event) {
        _this.sortByService(_this.state.data, '' + event.target.value);

        _this.setState({
          selectedService: event.target.value
        });
      }
    }, dimensions.map(function (d) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        key: d.key,
        value: d.key
      }, d.key);
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TimeSelection__WEBPACK_IMPORTED_MODULE_6__["TimeSelection"], {
      value: selectedIndex,
      timeStamp: timeStamp,
      onChange: this.onChangeTime.bind(this)
    }), selectedDim && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: '270px',
        marginTop: '10px',
        position: 'relative'
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Color legend"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ColorLegend__WEBPACK_IMPORTED_MODULE_7__["default"], {
      colorScale: color,
      range: selectedDim.range
    }))), this.state.selectedData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.tooltip
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Value"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: styles.tableCell
    }, "Node"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: styles.tableCell
    }, this.state.selectedData.id)), dimensions.map(function (d) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        style: {
          fontWeight: d.key === selectedService ? 'bold' : 'normal'
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: styles.tableCell
      }, d.key), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
        className: styles.tableCell
      }, _this.state.selectedData ? d3__WEBPACK_IMPORTED_MODULE_4__["format"]('.2f')(_this.state.selectedData[d.key]) : '-'));
    })))) : '');
  };

  SimplePanel.defaultProps = {
    width: 100,
    height: 100,
    margin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    },
    scalezoom: 1
  };
  return SimplePanel;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    legend: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow-y:auto;\n      max-height: 50%;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow-y:auto;\n      max-height: 50%;\n    "]))),
    legendColor: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      width: 10px;\n      height: 10px;\n      margin-right:2px;\n      display: inline-block;\n    "], ["\n      width: 10px;\n      height: 10px;\n      margin-right:2px;\n      display: inline-block;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    tooltip: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            position: absolute;\n      top: 0;\n      right: 0;\n        "], ["\n            position: absolute;\n      top: 0;\n      right: 0;\n        "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),
    tableCell: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n         padding-left: 5px;\n         padding-right: 5px;\n         "], ["\n         padding-left: 5px;\n         padding-right: 5px;\n         "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

/***/ }),

/***/ "./TimeSelection.tsx":
/*!***************************!*\
  !*** ./TimeSelection.tsx ***!
  \***************************/
/*! exports provided: TimeSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSelection", function() { return TimeSelection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);

 // import { DateTime,dateTime } from '@grafana/data';
// import {IconButton, Slider, stylesFactory,DateTimePicker as DateSelect} from '@grafana/ui';

 // import  DateTimePicker  from '@grafana/ui';



var format = d3__WEBPACK_IMPORTED_MODULE_4__["timeFormat"]('%Y-%m-%dT%H:%M');

var TimeSelection =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TimeSelection, _super);

  function TimeSelection(props) {
    var _this = _super.call(this, props) || this;

    _this.timer = null;
    _this.state = {
      currentIndex: props.value,
      isPlay: false
    };
    return _this;
  }

  TimeSelection.prototype.componentWillUnmount = function () {
    this.onStop();
  };

  TimeSelection.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
    if (this.props.value !== prevProps.value && this.props.value !== this.state.currentIndex) {
      this.setState({
        currentIndex: this.props.value
      });
      this.onStop();
    }
  };

  TimeSelection.prototype.onPlay = function () {
    var _this = this;

    if (!this.state.isPlay) {
      this.setState({
        isPlay: true
      });
      if (this.timer) this.timer.stop();
      this.timer = d3__WEBPACK_IMPORTED_MODULE_4__["interval"](function () {
        var currentIndex = _this.props.value + 1;

        if (_this.props.value + 1 >= _this.props.timeStamp.length - 1) {
          currentIndex = _this.props.timeStamp.length - 1;

          _this.onStop();
        }

        _this.setState({
          currentIndex: currentIndex
        });

        _this.props.onChange(currentIndex);
      }, 1000);
    } else {
      this.onStop();
    }
  };

  TimeSelection.prototype.onStop = function () {
    if (this.timer) this.timer.stop();
    this.setState({
      isPlay: false
    });
  };

  TimeSelection.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        value = _a.value,
        timeStamp = _a.timeStamp;
    var isPlay = this.state.isPlay;
    var styles = getStyles();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.root
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      name: isPlay ? "pause" : "play",
      size: 'xl',
      onClick: this.onPlay.bind(this)
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.progressBarWrapper
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "timePoint",
      css: true,
      value: format(new Date(timeStamp[value])),
      type: 'datetime-local',
      onChange: function onChange(event) {
        // @ts-ignore
        _this.props.onChange(d3__WEBPACK_IMPORTED_MODULE_4__["bisect"](timeStamp, +new Date(event.currentTarget.value)));
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
      value: value,
      key: isPlay ? value : 0,
      min: 0,
      step: 1,
      max: timeStamp.length - 1,
      tooltipAlwaysVisible: false,
      onChange: function onChange(event) {
        return _this.props.onChange(event !== null && event !== void 0 ? event : 0);
      }
    }));
  };

  return TimeSelection;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function () {
  return {
    progressBarWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    root: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    width:270px;\n    & .rc-slider + div \n      {display: none}\n    "], ["\n      display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    width:270px;\n    & .rc-slider + div \n      {display: none}\n    "])))
  };
});
var templateObject_1, templateObject_2;

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
/* harmony import */ var _SimplePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimplePanel */ "./SimplePanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_SimplePanel__WEBPACK_IMPORTED_MODULE_1__["SimplePanel"]).setPanelOptions(function (builder) {
  return builder.addSelect({
    path: 'orderType',
    name: 'Order Type',
    defaultValue: 'rank',
    settings: {
      options: [{
        label: 'Ranking',
        value: 'rank'
      }, {
        label: 'Metric',
        value: 'value'
      }]
    }
  }) // .addNumberInput({
  //     path: 'nodePerRing',
  //     name: '#Node per ring',
  //     defaultValue: 50
  // })
  .addNumberInput({
    path: 'numberOfRing',
    name: '#Ring',
    defaultValue: 5
  }).addNumberInput({
    path: 'nodeSize',
    name: 'Node Size',
    defaultValue: 5
  }); // .addSliderInput({
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