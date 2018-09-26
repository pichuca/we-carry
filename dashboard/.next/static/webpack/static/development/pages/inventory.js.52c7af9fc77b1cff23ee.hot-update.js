webpackHotUpdate("static/development/pages/inventory.js",{

/***/ "./components/commons/Table.js":
/*!*************************************!*\
  !*** ./components/commons/Table.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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

/***/ })

})
//# sourceMappingURL=inventory.js.52c7af9fc77b1cff23ee.hot-update.js.map