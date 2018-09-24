webpackHotUpdate("static/development/pages/inventory.js",{

/***/ "./pages/inventory.js":
/*!****************************!*\
  !*** ./pages/inventory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/commons/Layout.js */ "./components/commons/Layout.js");
/* harmony import */ var _components_commons_Table_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/commons/Table.js */ "./components/commons/Table.js");
var _jsxFileName = "/Users/saroibon/Documents/Salvador/projects/we-carry-dev/we-carry/dashboard/pages/inventory.js";



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
  buyer: 'Antonio Sanchez',
  products: ['producto 1', 'producto 2', 'producto 3'],
  tracking: 'Link a pagina de tracking',
  status: 'En camino',
  key: 1
}];
var defaultSorted = [{
  dataField: 'SKU',
  order: 'desc'
}];
var emptyMessage = 'No hay productos para mostrar en su inventario.';
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: headerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Inventario"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Table_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    tableHeader: inventoryColumns,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/inventory")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=inventory.js.7a9cb7eeb8e5a9ab1511.hot-update.js.map