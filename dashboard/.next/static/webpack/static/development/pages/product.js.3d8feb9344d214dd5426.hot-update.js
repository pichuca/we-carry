webpackHotUpdate("static/development/pages/product.js",{

/***/ "./components/commons/Header.js":
/*!**************************************!*\
  !*** ./components/commons/Header.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/next/node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var linkStyle = {
  marginRight: 15
};
var wrapperStyles = {
  width: '100%',
  height: 64,
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)',
  position: fixed,
  top: 0,
  backgroundColor: '#FFFFFF'
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
    style: wrapperStyles,
    className: "jsx-2836350349" + " " + "header-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2836350349"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2836350349" + " " + "links"
  }, linksContent.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link.route,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: linkStyle,
      className: "jsx-2836350349"
    }, link.label));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2836350349",
    css: ".links.jsx-2836350349{width:100%;margin:0 auto;padding:1.5rem;text-align:left;}a.jsx-2836350349{-webkit-text-decoration:none;text-decoration:none;color:#757575;font-size:0.8rem;font-weight:300;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;}a.jsx-2836350349:hover{color:#0076ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEb0IsQUFHNEIsQUFNVSxBQU9QLFdBWkEsR0FhbEIsV0FabUIsZUFDQyxVQUlGLE1BSGxCLFFBSXFCLGlCQUNELGdCQUNNLHlHQUMxQiIsImZpbGUiOiIvVXNlcnMvc2Fyb2lib24vRG9jdW1lbnRzL1NhbHZhZG9yL3Byb2plY3RzL3dlLWNhcnJ5LWRldi93ZS1jYXJyeS9kYXNoYm9hcmQvY29tcG9uZW50cy9jb21tb25zL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNSxcbn07XG5cbmNvbnN0IHdyYXBwZXJTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDY0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICBib3hTaGFkb3c6ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgcG9zaXRpb246IGZpeGVkLFxuICAgIHRvcDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbn1cblxuY29uc3QgbGlua3NDb250ZW50ID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbmljaW8nLFxuICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbnZlbnRhcmlvJyxcbiAgICAgICAgcm91dGU6ICcvaW52ZW50b3J5JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGVkaWRvcycsXG4gICAgICAgIHJvdXRlOiAnL29yZGVycycsXG4gICAgICAgIGlkOiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1NvbGljaXR1ZGVzJyxcbiAgICAgICAgcm91dGU6ICcvZW50cmllcycsXG4gICAgICAgIGlkOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1JlcG9ydGVzIHkgRXN0YWTDrXN0aWNhcycsXG4gICAgICAgIHJvdXRlOiAnL3JlcG9ydHMnLFxuICAgICAgICBpZDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb25maWd1cmFjacOzbicsXG4gICAgICAgIHJvdXRlOiAnL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICBpZDogNixcbiAgICB9XG5dO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiIHN0eWxlPXt3cmFwcGVyU3R5bGVzfT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICAgIHtsaW5rc0NvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+e2xpbmsubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5saW5rcyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDc2ZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.3d8feb9344d214dd5426.hot-update.js.map