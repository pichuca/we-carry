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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_inventory_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/inventory.css */ "./pages/css/inventory.css");
/* harmony import */ var _css_inventory_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_inventory_css__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var headerStyle = {
  color: '#0076ff',
  fontWeight: 600
};
var buttonStyles = {
  color: '#0076ff',
  border: '0',
  marginRight: '15px',
  textDecoration: 'capitalize'
};
var inventoryColumns = [{
  dataField: 'image',
  text: ''
}, {
  dataField: 'SKU',
  text: 'SKU o # de referencia'
}, {
  dataField: 'name',
  text: 'Nombre'
}, {
  dataField: 'availability',
  text: 'Disponibilidad'
}, {
  dataField: 'ordered',
  text: 'Pedidos'
}];
var inventoryProducts = [{
  SKU: '12345',
  name: 'Remera dryfit [ADIDAS]',
  availability: '32/76',
  orders: '11'
}];
var emptyMessage = 'No hay productos para mostrar en su inventario.';

var Inventory =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Inventory, _React$Component);

  function Inventory(props) {
    var _this;

    _classCallCheck(this, Inventory);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Inventory).call(this, props));
    _this.state = {
      clickedFilter: null
    };
    return _this;
  }

  _createClass(Inventory, [{
    key: "handleFilterClick",
    value: function handleFilterClick(event) {
      var clickedFilterID = event.currentTarget.id;
      this.setState({
        clicked: clickedFilterID
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var Filter = function Filter() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ui-filter"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ui-filter-buttons"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          id: "all",
          style: buttonStyles,
          className: _this2.state.clicked === 'all' ? 'selected' : '',
          variant: "outlined",
          onClick: _this2.handleFilterClick.bind(_this2)
        }, "Todos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          id: "withStock",
          style: buttonStyles,
          className: _this2.state.clicked === 'withStock' ? 'selected' : '',
          variant: "outlined",
          onClick: _this2.handleFilterClick.bind(_this2)
        }, "Con Stock"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          id: "lastInStock",
          style: buttonStyles,
          className: _this2.state.clicked === 'lastInStock' ? 'selected' : '',
          variant: "outlined",
          onClick: _this2.handleFilterClick.bind(_this2)
        }, "Por agotarse"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
          id: "noStock",
          style: buttonStyles,
          className: _this2.state.clicked === 'noStock' ? 'selected' : '',
          variant: "outlined",
          onClick: _this2.handleFilterClick.bind(_this2)
        }, "Sin Stock")));
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Layout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        style: headerStyle
      }, "Inventario"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Filter, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_commons_Table_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tableHeads: inventoryColumns,
        cols: inventoryProducts,
        type: 'inventory'
      }));
    }
  }]);

  return Inventory;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Inventory);
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
//# sourceMappingURL=inventory.js.9a9720ea542f6d893446.hot-update.js.map