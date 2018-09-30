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
  label: 'Estadísticas',
  route: '/stats',
  id: 5
}, {
  label: 'Configuración',
  route: '/configuration',
  id: 6
}];

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: wrapperStyles,
    className: "jsx-2192191132" + " " + "header-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-2192191132"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: linksStyles,
    className: "jsx-2192191132" + " " + "links"
  }, linksContent.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: true,
      href: link.route,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      style: anchorStyles,
      className: "jsx-2192191132"
    }, link.label));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2192191132",
    css: ".links.jsx-2192191132 a.jsx-2192191132:hover{color:#0076ff !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Fb0IsQUFHMEMseUJBQzdCIiwiZmlsZSI6Ii9Vc2Vycy9zYXJvaWJvbi9Eb2N1bWVudHMvU2FsdmFkb3IvcHJvamVjdHMvd2UtY2FycnktZGV2L3dlLWNhcnJ5L2Rhc2hib2FyZC9jb21wb25lbnRzL2NvbW1vbnMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5jb25zdCB3cmFwcGVyU3R5bGVzID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiA2NCxcbiAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgYm94U2hhZG93OiAnMHB4IDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGRkZGJyxcbn1cblxuY29uc3QgbGlua3NTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHBhZGRpbmc6ICcxLjVyZW0nLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxufVxuXG5jb25zdCBhbmNob3JTdHlsZXMgPSB7XG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICBjb2xvcjogJyM3NTc1NzUnLFxuICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICBmb250V2VpZ2h0OiAzMDAsXG4gICAgbGV0dGVyU3BhY2luZzogJzAuMXJlbScsXG4gICAgbWFyZ2luUmlnaHQ6IDE1LFxufVxuXG5jb25zdCBsaW5rc0NvbnRlbnQgPSBbXG4gICAge1xuICAgICAgICBsYWJlbDogJ0ludmVudGFyaW8nLFxuICAgICAgICByb3V0ZTogJy9pbnZlbnRvcnknLFxuICAgICAgICBpZDogMixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGFiZWw6ICdQZWRpZG9zJyxcbiAgICAgICAgcm91dGU6ICcvb3JkZXJzJyxcbiAgICAgICAgaWQ6IDMsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnU29saWNpdHVkZXMnLFxuICAgICAgICByb3V0ZTogJy9lbnRyaWVzJyxcbiAgICAgICAgaWQ6IDQsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnRXN0YWTDrXN0aWNhcycsXG4gICAgICAgIHJvdXRlOiAnL3N0YXRzJyxcbiAgICAgICAgaWQ6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxhYmVsOiAnQ29uZmlndXJhY2nDs24nLFxuICAgICAgICByb3V0ZTogJy9jb25maWd1cmF0aW9uJyxcbiAgICAgICAgaWQ6IDYsXG4gICAgfVxuXTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXdyYXBwZXJcIiBzdHlsZT17d3JhcHBlclN0eWxlc30+XG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCIgc3R5bGU9e2xpbmtzU3R5bGVzfT5cbiAgICAgICAgICAgIHtsaW5rc0NvbnRlbnQubWFwKChsaW5rLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIGhyZWY9e2xpbmsucm91dGV9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e2FuY2hvclN0eWxlc30+e2xpbmsubGFiZWx9PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5saW5rcyBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwNzZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/components/commons/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=inventory.js.1bd04873d022107edc3a.hot-update.js.map