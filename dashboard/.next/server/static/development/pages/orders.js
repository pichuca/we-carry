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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/commons/Avatar.js":
/*!**************************************!*\
  !*** ./components/commons/Avatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Avatar.js";




var styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    margin: 10,
    backgroundColor: '#E7E7E7'
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

function ImageAvatar(props) {
  var classes = props.classes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    alt: "",
    src: "",
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
}

ImageAvatar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(ImageAvatar));

/***/ }),

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

/***/ "./components/commons/Table.js":
/*!*************************************!*\
  !*** ./components/commons/Table.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Avatar_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Avatar.js */ "./components/commons/Avatar.js");
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Table.js";











var CustomTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: '#0076ff',
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14,
      color: '#757575'
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default.a);

var styles = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      fontFamily: 'Roboto, sans-serif'
    },
    table: {
      minWidth: 700
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default
      },
      height: 84
    }
  };
};

var CustomTable = function CustomTable(props) {
  var classes = props.classes,
      tableHeads = props.tableHeads,
      cols = props.cols,
      type = props.type;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.table,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, tableHeads.map(function (head, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, head.text);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, cols.map(function (row, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: classes.row,
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, type === 'inventory' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/product?sku=".concat(row.SKU, "&name=").concat(row.name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, row.SKU))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, row.products || row.availability), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, row.tracking || row.orders), type === 'orders' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTableCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, row.status) : null);
  }))));
};

CustomTable.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CustomTable));

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/commons/Layout.js */ "./components/commons/Layout.js");
/* harmony import */ var _components_commons_Table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commons/Table.js */ "./components/commons/Table.js");
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/pages/orders.js";



var headerStyle = {
  color: '#0076ff',
  fontWeight: 600
};
var inventoryColumns = [{
  dataField: 'SKU',
  text: 'SKU o # de referencia'
}, {
  dataField: 'buyer',
  text: 'Comprador'
}, {
  dataField: 'products',
  text: 'Productos'
}, {
  dataField: 'tracking',
  text: 'Tracking'
}, {
  dataField: 'status',
  text: 'Estado'
}];
var inventoryProducts = [{
  SKU: '12345',
  buyer: {
    name: 'Antonio Sanchez',
    email: 'antoniosanchez@gmail.com'
  },
  products: ['producto 1', 'producto 2', 'producto 3'],
  tracking: 'Link a pagina de tracking',
  status: 'En camino',
  key: 1
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Pedidos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Table_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableHeads: inventoryColumns,
    cols: inventoryProducts,
    type: 'orders',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/orders.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/orders.js */"./pages/orders.js");


/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=orders.js.map