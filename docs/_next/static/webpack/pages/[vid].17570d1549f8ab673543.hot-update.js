webpackHotUpdate_N_E("pages/[vid]",{

/***/ "./components/VideoBox.js":
/*!********************************!*\
  !*** ./components/VideoBox.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return VideoBox; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_classes_YoutubeVideoClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/classes/YoutubeVideoClass */ \"./assets/classes/YoutubeVideoClass.js\");\n/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yaml */ \"./node_modules/yaml/browser/index.js\");\n/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(yaml__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\nvar _jsxFileName = \"/home/dean/github/pocketband/components/VideoBox.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar VideoBox = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(VideoBox, _Component);\n\n  var _super = _createSuper(VideoBox);\n\n  function VideoBox(props) {\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, VideoBox);\n\n    return _super.call(this, props);\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(VideoBox, [{\n    key: \"render\",\n    value: function render() {\n      var _details, _details2, _details3;\n\n      // const video = new YoutubeVideoClass(this.props.video);\n      // const details = video?.yaml();\n      // const styles = {\n      //   bgImg: {\n      //     backgroundImage: `url(${video.thumbnails.high.url})`,\n      //   },\n      // };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 7\n        }\n      }, console.log('props', this.props), __jsx(\"div\", {\n        className: \"video-box\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 9\n        }\n      }, __jsx(\"a\", {\n        href: \"https://youtu.be/\".concat(video.id),\n        target: \"_blank\",\n        className: \"youtube-wrapper\",\n        style: styles.bgImg,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }\n      }), __jsx(\"div\", {\n        className: \"info-wrapper\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }\n      }, __jsx(\"div\", {\n        className: \"info-header\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 13\n        }\n      }, __jsx(\"span\", {\n        className: \"author\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 15\n        }\n      }, (_details = details) === null || _details === void 0 ? void 0 : _details.author), __jsx(\"span\", {\n        className: \"po-type\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 15\n        }\n      }, ((_details2 = details) === null || _details2 === void 0 ? void 0 : _details2.po) ? details.po : '...')), __jsx(\"div\", {\n        className: \"info-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 13\n        }\n      }, __jsx(\"span\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 15\n        }\n      }, (_details3 = details) === null || _details3 === void 0 ? void 0 : _details3.title)), __jsx(\"div\", {\n        className: \"info-buttons\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"/\".concat(video.id),\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 15\n        }\n      }, __jsx(\"i\", {\n        className: \"fas fa-info-circle\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 17\n        }\n      })), __jsx(\"a\", {\n        href: details.download,\n        className: \"button\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }\n      }, \"download\")))));\n    }\n  }]);\n\n  return VideoBox;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9WaWRlb0JveC5qcz83YjQzIl0sIm5hbWVzIjpbIlZpZGVvQm94IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwidmlkZW8iLCJpZCIsInN0eWxlcyIsImJnSW1nIiwiZGV0YWlscyIsImF1dGhvciIsInBvIiwidGl0bGUiLCJkb3dubG9hZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVxQkEsUTs7Ozs7QUFDbkIsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWEEsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUFBOztBQUNQO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsYUFDRSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR0MsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQixLQUFLRixLQUExQixDQURILEVBS0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsWUFBSSw2QkFBc0JHLEtBQUssQ0FBQ0MsRUFBNUIsQ0FETjtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBR0UsaUJBQVMsRUFBQyxpQkFIWjtBQUlFLGFBQUssRUFBRUMsTUFBTSxDQUFDQyxLQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsRUFPRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUEwQkMsT0FBMUIsNkNBQTBCLFNBQVNDLE1BQW5DLENBREYsRUFFRTtBQUFNLGlCQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLGNBQUFELE9BQU8sVUFBUCw4Q0FBU0UsRUFBVCxJQUFjRixPQUFPLENBQUNFLEVBQXRCLEdBQTJCLEtBRDlCLENBRkYsQ0FERixFQU9FO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFNLGlCQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUJGLE9BQXpCLDhDQUF5QixVQUFTRyxLQUFsQyxDQURGLENBUEYsRUFVRTtBQUFLLGlCQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBRyxZQUFJLGFBQU1QLEtBQUssQ0FBQ0MsRUFBWixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFHLGlCQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFJRTtBQUFHLFlBQUksRUFBRUcsT0FBTyxDQUFDSSxRQUFqQjtBQUEyQixpQkFBUyxFQUFDLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkYsQ0FWRixDQVBGLENBTEYsQ0FERjtBQW1DRDs7OztFQWxEbUNDLCtDIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9WaWRlb0JveC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFlvdXR1YmVWaWRlb0NsYXNzIGZyb20gJy4uL2Fzc2V0cy9jbGFzc2VzL1lvdXR1YmVWaWRlb0NsYXNzJztcbmltcG9ydCBZQU1MIGZyb20gJ3lhbWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb0JveCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnN0IHZpZGVvID0gbmV3IFlvdXR1YmVWaWRlb0NsYXNzKHRoaXMucHJvcHMudmlkZW8pO1xuICAgIC8vIGNvbnN0IGRldGFpbHMgPSB2aWRlbz8ueWFtbCgpO1xuXG4gICAgLy8gY29uc3Qgc3R5bGVzID0ge1xuICAgIC8vICAgYmdJbWc6IHtcbiAgICAvLyAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dmlkZW8udGh1bWJuYWlscy5oaWdoLnVybH0pYCxcbiAgICAvLyAgIH0sXG4gICAgLy8gfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtjb25zb2xlLmxvZygncHJvcHMnLCB0aGlzLnByb3BzKX1cbiAgICAgICAgey8qIHtjb25zb2xlLmxvZygndmlkZW8nLCB2aWRlbyl9XG4gICAgICAgIHtjb25zb2xlLmxvZygneWFtbCcsIGRldGFpbHMpfSAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlkZW8tYm94Jz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8veW91dHUuYmUvJHt2aWRlby5pZH1gfVxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICBjbGFzc05hbWU9J3lvdXR1YmUtd3JhcHBlcidcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYmdJbWd9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5mby13cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLWhlYWRlcic+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYXV0aG9yJz57ZGV0YWlscz8uYXV0aG9yfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwby10eXBlJz5cbiAgICAgICAgICAgICAgICB7ZGV0YWlscz8ucG8gPyBkZXRhaWxzLnBvIDogJy4uLid9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2luZm8tY29udGVudCc+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGl0bGUnPntkZXRhaWxzPy50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmZvLWJ1dHRvbnMnPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgLyR7dmlkZW8uaWR9YH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdmYXMgZmEtaW5mby1jaXJjbGUnIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17ZGV0YWlscy5kb3dubG9hZH0gY2xhc3NOYW1lPSdidXR0b24nPlxuICAgICAgICAgICAgICAgIGRvd25sb2FkXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/VideoBox.js\n");

/***/ })

})