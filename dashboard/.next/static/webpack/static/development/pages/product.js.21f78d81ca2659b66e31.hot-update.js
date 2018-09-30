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
  marginRight: 15,
  hover: {
    color: '#0076ff'
  }
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
    css: ".links.jsx-2537587975 a.jsx-2537587975:hover{color:#0076ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFb0IsQUFHK0IsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3Nhcm9pYm9uL0RvY3VtZW50cy9TYWx2YWRvci9wcm9qZWN0cy93ZS1jYXJyeS1kZXYvd2UtY2FycnkvZGFzaGJvYXJkL2NvbXBvbmVudHMvY29tbW9ucy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IHdyYXBwZXJTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6IDY0LFxuICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICBib3hTaGFkb3c6ICcwcHggNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxufVxuXG5jb25zdCBsaW5rc1N0eWxlcyA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzEuNXJlbScsXG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG59XG5cbmNvbnN0IGFuY2hvclN0eWxlcyA9IHtcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIGNvbG9yOiAnIzc1NzU3NScsXG4gICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xcmVtJyxcbiAgICBtYXJnaW5SaWdodDogMTUsXG4gICAgaG92ZXI6IHtjb2xvcjogJyMwMDc2ZmYnfSxcbn1cblxuY29uc3QgbGlua3NDb250ZW50ID0gW1xuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbmljaW8nLFxuICAgICAgICByb3V0ZTogJy8nLFxuICAgICAgICBpZDogMSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdJbnZlbnRhcmlvJyxcbiAgICAgICAgcm91dGU6ICcvaW52ZW50b3J5JyxcbiAgICAgICAgaWQ6IDIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnUGVkaWRvcycsXG4gICAgICAgIHJvdXRlOiAnL29yZGVycycsXG4gICAgICAgIGlkOiAzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1NvbGljaXR1ZGVzJyxcbiAgICAgICAgcm91dGU6ICcvZW50cmllcycsXG4gICAgICAgIGlkOiA0LFxuICAgIH0sXG4gICAge1xuICAgICAgICBsYWJlbDogJ1JlcG9ydGVzIHkgRXN0YWTDrXN0aWNhcycsXG4gICAgICAgIHJvdXRlOiAnL3JlcG9ydHMnLFxuICAgICAgICBpZDogNSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdDb25maWd1cmFjacOzbicsXG4gICAgICAgIHJvdXRlOiAnL2NvbmZpZ3VyYXRpb24nLFxuICAgICAgICBpZDogNixcbiAgICB9XG5dO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiIHN0eWxlPXt3cmFwcGVyU3R5bGVzfT5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIiBzdHlsZT17bGlua3NTdHlsZXN9PlxuICAgICAgICAgICAge2xpbmtzQ29udGVudC5tYXAoKGxpbmssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGluay5yb3V0ZX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17YW5jaG9yU3R5bGVzfT57bGluay5sYWJlbH08L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmxpbmtzIGE6aG92ZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3NmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=product.js.21f78d81ca2659b66e31.hot-update.js.map