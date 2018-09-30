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



var wrapperStyles = {
  width: '100%',
  height: 64,
  fontFamily: "'Roboto', sans-serif",
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.06)',
  position: 'fixed',
  top: 0,
  backgroundColor: '#FFFFFF'
};
var linksStyles = {
  width: '100%',
  margin: '0 auto',
  padding: '1.5rem',
  textAlign: 'left'
};
var anchorStyles = {
  textDecoration: 'none',
  color: '#757575',
  fontSize: '0.8rem',
  fontWeight: 300,
  letterSpacing: '0.1rem',
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
    style: wrapperStyles,
    className: "jsx-2537587975" + " " + "header-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2537587975"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: linksStyles,
    className: "jsx-2537587975" + " " + "links"
  }, linksContent.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: link.route,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: anchorStyles,
      className: "jsx-2537587975"
    }, link.label));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2537587975",
    css: ".links.jsx-2537587975 a.jsx-2537587975:hover{color:#0076ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFb0IsQUFHK0IsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3Nhcm9pYm9uL0RvY3VtZW50cy9TYWx2YWRvci9wcm9qZWN0cy93ZS1jYXJyeS1kZXYvd2UtY2FycnkvZGFzaGJvYXJkL2NvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHdyYXBwZXJTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDY0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICBib3hTaGFkb3c6ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxufVxuXG5jb25zdCBsaW5rc1N0eWxlcyA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzEuNXJlbScsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG59XG5cbmNvbnN0IGFuY2hvclN0eWxlcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzc1NzU3NScsXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xcmVtJyxcbiAgICBtYXJnaW5SaWdodDogMTUsXG59XG5cbmNvbnN0IGxpbmtzQ29udGVudCA9IFtcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSW5pY2lvJyxcbiAgICAgICAgcm91dGU6ICcvJyxcbiAgICAgICAgaWQ6IDEsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnSW52ZW50YXJpbycsXG4gICAgICAgIHJvdXRlOiAnL2ludmVudG9yeScsXG4gICAgICAgIGlkOiAyLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1BlZGlkb3MnLFxuICAgICAgICByb3V0ZTogJy9vcmRlcnMnLFxuICAgICAgICBpZDogMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdTb2xpY2l0dWRlcycsXG4gICAgICAgIHJvdXRlOiAnL2VudHJpZXMnLFxuICAgICAgICBpZDogNCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdSZXBvcnRlcyB5IEVzdGFkw61zdGljYXMnLFxuICAgICAgICByb3V0ZTogJy9yZXBvcnRzJyxcbiAgICAgICAgaWQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29uZmlndXJhY2nDs24nLFxuICAgICAgICByb3V0ZTogJy9jb25maWd1cmF0aW9uJyxcbiAgICAgICAgaWQ6IDYsXG4gICAgfVxuXTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIiBzdHlsZT17d3JhcHBlclN0eWxlc30+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCIgc3R5bGU9e2xpbmtzU3R5bGVzfT5cbiAgICAgICAgICAgIHtsaW5rc0NvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2xpbmsucm91dGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FuY2hvclN0eWxlc30+e2xpbmsubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5saW5rcyBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.45b896caa349aaa9e1ba.hot-update.js.map