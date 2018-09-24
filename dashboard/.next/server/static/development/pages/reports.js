module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/commons/Header.js":
/*!**************************************!*\
  !*** ./components/commons/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js";



var linkStyle = {
  marginRight: 15
};
var linksContent = [{
  label: 'Inicio',
  route: '/',
  id: 1
}, {
  label: 'Inventario',
  route: '/inventory',
  id: 2
}, {
  label: 'Pedidos',
  route: '/orders',
  id: 3
}, {
  label: 'Solicitudes',
  route: '/entries',
  id: 4
}, {
  label: 'Reportes y Estadísticas',
  route: '/reports',
  id: 5
}, {
  label: 'Configuración',
  route: '/configuration',
  id: 6
}];

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-745115243" + " " + "header-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-745115243",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-745115243" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, linksContent.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link.route,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: linkStyle,
      className: "jsx-745115243",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, link.label));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "745115243",
    css: ".header-wrapper.jsx-745115243{width:100%;height:64px;font-family:'Roboto',sans-serif;box-shadow:0px 6px 20px rgba(0,0,0,0.06);position:fixed;top:0px;background-color:#FFFFFF;}.links.jsx-745115243{width:100%;margin:0 auto;padding:1.5rem;text-align:left;}a.jsx-745115243{-webkit-text-decoration:none;text-decoration:none;color:#757575;font-size:0.8rem;font-weight:300;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;}a.jsx-745115243:hover{color:#0076ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Eb0IsQUFHNEIsQUFTQSxBQU1VLEFBT1AsV0FyQkYsQUFTRSxHQWFsQixTQXJCcUMsRUFTbEIsZUFDQyxVQUlGLEtBYjhCLENBVWhELFFBSXFCLGlCQUNELGVBZEQsQ0FlTyxjQWRkLFFBQ2lCLHlCQUM3QiwwREFhQSIsImZpbGUiOiIvVXNlcnMvc2Fyb2lib24vRG9jdW1lbnRzL1NhbHZhZG9yL3Byb2plY3RzL3dlLWNhcnJ5LWRldi93ZS1jYXJyeS9kYXNoYm9hcmQvY29tcG9uZW50cy9jb21tb25zL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNSxcbn07XG5cbmNvbnN0IGxpbmtzQ29udGVudCA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSW5pY2lvJyxcbiAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSW52ZW50YXJpbycsXG4gICAgICAgIHJvdXRlOiAnL2ludmVudG9yeScsXG4gICAgICAgIGlkOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1BlZGlkb3MnLFxuICAgICAgICByb3V0ZTogJy9vcmRlcnMnLFxuICAgICAgICBpZDogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdTb2xpY2l0dWRlcycsXG4gICAgICAgIHJvdXRlOiAnL2VudHJpZXMnLFxuICAgICAgICBpZDogNCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZXBvcnRlcyB5IEVzdGFkw61zdGljYXMnLFxuICAgICAgICByb3V0ZTogJy9yZXBvcnRzJyxcbiAgICAgICAgaWQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29uZmlndXJhY2nDs24nLFxuICAgICAgICByb3V0ZTogJy9jb25maWd1cmF0aW9uJyxcbiAgICAgICAgaWQ6IDYsXG4gICAgfVxuXTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgIHtsaW5rc0NvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+e2xpbmsubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5oZWFkZXItd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDc2ZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/commons/Layout.js":
/*!**************************************!*\
  !*** ./components/commons/Layout.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.js */ "./components/commons/Header.js");
/* harmony import */ var _Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section.js */ "./components/commons/Section.js");
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Layout.js";



var layoutStyle = {
  margin: 0,
  padding: 0
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/commons/Section.js":
/*!***************************************!*\
  !*** ./components/commons/Section.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Section.js";


var sectionStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Section = function Section(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    style: sectionStyle,
    className: "jsx-452749316",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "452749316",
    css: "section.jsx-452749316{font-family:'Roboto',sans-serif;margin:78px 10px 10px !important;border-radius:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvU2VjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVZ0IsQUFHMEMsZ0NBQ0EsaUNBQ2Ysa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qgc2VjdGlvblN0eWxlID0ge1xuICBtYXJnaW46IDIwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59O1xuXG5jb25zdCBTZWN0aW9uID0gKHByb3BzKSA9PiAoXG4gIDxzZWN0aW9uIHN0eWxlPXtzZWN0aW9uU3R5bGV9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBtYXJnaW46IDc4cHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Section.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Section);

/***/ }),

/***/ "./pages/reports.js":
/*!**************************!*\
  !*** ./pages/reports.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/commons/Layout.js */ "./components/commons/Layout.js");
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/pages/reports.js";


var headerStyle = {
  color: '#0076ff',
  fontWeight: 600
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Reportes y Configuraci\xF3n"));
});

/***/ }),

/***/ 7:
/*!********************************!*\
  !*** multi ./pages/reports.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/reports.js */"./pages/reports.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=reports.js.map