webpackHotUpdate("static/development/pages/inventory.js",{

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
    css: ".links.jsx-2836350349{width:100%;margin:0 auto;padding:1.5rem;text-align:left;}a.jsx-2836350349{-webkit-text-decoration:none;text-decoration:none;color:#757575;font-size:0.8rem;font-weight:300;-webkit-letter-spacing:0.1rem;-moz-letter-spacing:0.1rem;-ms-letter-spacing:0.1rem;letter-spacing:0.1rem;}a.jsx-2836350349:hover{color:#0076ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEb0IsQUFHNEIsQUFNVSxBQU9QLFdBWkEsR0FhbEIsV0FabUIsZUFDQyxVQUlGLE1BSGxCLFFBSXFCLGlCQUNELGdCQUNNLHlHQUMxQiIsImZpbGUiOiIvVXNlcnMvc2Fyb2lib24vRG9jdW1lbnRzL1NhbHZhZG9yL3Byb2plY3RzL3dlLWNhcnJ5LWRldi93ZS1jYXJyeS9kYXNoYm9hcmQvY29tcG9uZW50cy9jb21tb25zL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiAxNSxcbn07XG5cbmNvbnN0IHdyYXBwZXJTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDY0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICBib3hTaGFkb3c6ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgcG9zaXRpb246IGZpeGVkLFxuICAgIHRvcDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbn1cblxuY29uc3QgbGlua3NDb250ZW50ID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbmljaW8nLFxuICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbnZlbnRhcmlvJyxcbiAgICAgICAgcm91dGU6ICcvaW52ZW50b3J5JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGVkaWRvcycsXG4gICAgICAgIHJvdXRlOiAnL29yZGVycycsXG4gICAgICAgIGlkOiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1NvbGljaXR1ZGVzJyxcbiAgICAgICAgcm91dGU6ICcvZW50cmllcycsXG4gICAgICAgIGlkOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1JlcG9ydGVzIHkgRXN0YWTDrXN0aWNhcycsXG4gICAgICAgIHJvdXRlOiAnL3JlcG9ydHMnLFxuICAgICAgICBpZDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb25maWd1cmFjacOzbicsXG4gICAgICAgIHJvdXRlOiAnL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICBpZDogNixcbiAgICB9XG5dO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgICAge2xpbmtzQ29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5yb3V0ZX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17bGlua1N0eWxlfT57bGluay5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpbmtzIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzc1NzU3NTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=inventory.js.21f4ca6fe95108348752.hot-update.js.map