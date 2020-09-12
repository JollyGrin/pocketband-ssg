webpackHotUpdate_N_E("pages/[vid]",{

/***/ "./assets/classes/YoutubeVideoClass.js":
/*!*********************************************!*\
  !*** ./assets/classes/YoutubeVideoClass.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return YoutubeVideoClass; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yaml */ \"./node_modules/yaml/browser/index.js\");\n/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(yaml__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar YoutubeVideoClass = function YoutubeVideoClass(video) {\n  var _this = this,\n      _video$snippet$resour;\n\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, YoutubeVideoClass);\n\n  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, \"yaml\", function () {\n    var _this$yamlRAW;\n\n    var string = \"---\".concat((_this$yamlRAW = _this.yamlRAW) === null || _this$yamlRAW === void 0 ? void 0 : _this$yamlRAW.split('---')[1]);\n    return yaml__WEBPACK_IMPORTED_MODULE_2___default.a.parse(string);\n  });\n\n  this.id = ((_video$snippet$resour = video.snippet.resourceId) === null || _video$snippet$resour === void 0 ? void 0 : _video$snippet$resour.videoId) ? video.snippet.resourceId.videoId : video.id;\n  this.title = video.snippet.title;\n  this.channelId = video.snippet.channelId;\n  this.channelTitle = video.snippet.channelTitle;\n  this.desc = video.snippet.description;\n  this.yamlRAW = video.snippet.description.split('@pocket.band')[1];\n  this.published = video.snippet.publishedAt;\n  this.thumbnails = video.snippet.thumbnails;\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXNzZXRzL2NsYXNzZXMvWW91dHViZVZpZGVvQ2xhc3MuanM/MDAzNSJdLCJuYW1lcyI6WyJZb3V0dWJlVmlkZW9DbGFzcyIsInZpZGVvIiwic3RyaW5nIiwieWFtbFJBVyIsInNwbGl0IiwiWUFNTCIsInBhcnNlIiwiaWQiLCJzbmlwcGV0IiwicmVzb3VyY2VJZCIsInZpZGVvSWQiLCJ0aXRsZSIsImNoYW5uZWxJZCIsImNoYW5uZWxUaXRsZSIsImRlc2MiLCJkZXNjcmlwdGlvbiIsInB1Ymxpc2hlZCIsInB1Ymxpc2hlZEF0IiwidGh1bWJuYWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7SUFFcUJBLGlCLEdBQ25CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSwwR0FhWixZQUFNO0FBQUE7O0FBQ1gsUUFBTUMsTUFBTSxpQ0FBUyxLQUFJLENBQUNDLE9BQWQsa0RBQVMsY0FBY0MsS0FBZCxDQUFvQixLQUFwQixFQUEyQixDQUEzQixDQUFULENBQVo7QUFDQSxXQUFPQywyQ0FBSSxDQUFDQyxLQUFMLENBQVdKLE1BQVgsQ0FBUDtBQUNELEdBaEJrQjs7QUFDakIsT0FBS0ssRUFBTCxHQUFVLDBCQUFBTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsVUFBZCxnRkFBMEJDLE9BQTFCLElBQ05ULEtBQUssQ0FBQ08sT0FBTixDQUFjQyxVQUFkLENBQXlCQyxPQURuQixHQUVOVCxLQUFLLENBQUNNLEVBRlY7QUFHQSxPQUFLSSxLQUFMLEdBQWFWLEtBQUssQ0FBQ08sT0FBTixDQUFjRyxLQUEzQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUJYLEtBQUssQ0FBQ08sT0FBTixDQUFjSSxTQUEvQjtBQUNBLE9BQUtDLFlBQUwsR0FBb0JaLEtBQUssQ0FBQ08sT0FBTixDQUFjSyxZQUFsQztBQUNBLE9BQUtDLElBQUwsR0FBWWIsS0FBSyxDQUFDTyxPQUFOLENBQWNPLFdBQTFCO0FBQ0EsT0FBS1osT0FBTCxHQUFlRixLQUFLLENBQUNPLE9BQU4sQ0FBY08sV0FBZCxDQUEwQlgsS0FBMUIsQ0FBZ0MsY0FBaEMsRUFBZ0QsQ0FBaEQsQ0FBZjtBQUNBLE9BQUtZLFNBQUwsR0FBaUJmLEtBQUssQ0FBQ08sT0FBTixDQUFjUyxXQUEvQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0JqQixLQUFLLENBQUNPLE9BQU4sQ0FBY1UsVUFBaEM7QUFDRCxDIiwiZmlsZSI6Ii4vYXNzZXRzL2NsYXNzZXMvWW91dHViZVZpZGVvQ2xhc3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWUFNTCBmcm9tICd5YW1sJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWW91dHViZVZpZGVvQ2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih2aWRlbykge1xuICAgIHRoaXMuaWQgPSB2aWRlby5zbmlwcGV0LnJlc291cmNlSWQ/LnZpZGVvSWRcbiAgICAgID8gdmlkZW8uc25pcHBldC5yZXNvdXJjZUlkLnZpZGVvSWRcbiAgICAgIDogdmlkZW8uaWQ7XG4gICAgdGhpcy50aXRsZSA9IHZpZGVvLnNuaXBwZXQudGl0bGU7XG4gICAgdGhpcy5jaGFubmVsSWQgPSB2aWRlby5zbmlwcGV0LmNoYW5uZWxJZDtcbiAgICB0aGlzLmNoYW5uZWxUaXRsZSA9IHZpZGVvLnNuaXBwZXQuY2hhbm5lbFRpdGxlO1xuICAgIHRoaXMuZGVzYyA9IHZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb247XG4gICAgdGhpcy55YW1sUkFXID0gdmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbi5zcGxpdCgnQHBvY2tldC5iYW5kJylbMV07XG4gICAgdGhpcy5wdWJsaXNoZWQgPSB2aWRlby5zbmlwcGV0LnB1Ymxpc2hlZEF0O1xuICAgIHRoaXMudGh1bWJuYWlscyA9IHZpZGVvLnNuaXBwZXQudGh1bWJuYWlscztcbiAgfVxuXG4gIHlhbWwgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3RyaW5nID0gYC0tLSR7dGhpcy55YW1sUkFXPy5zcGxpdCgnLS0tJylbMV19YDtcbiAgICByZXR1cm4gWUFNTC5wYXJzZShzdHJpbmcpO1xuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/classes/YoutubeVideoClass.js\n");

/***/ })

})