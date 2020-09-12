webpackHotUpdate_N_E("pages/[vid]",{

/***/ "./pages/[vid].js":
/*!************************!*\
  !*** ./pages/[vid].js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Video */ \"./components/Video.js\");\n/* harmony import */ var _components_VideoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VideoBox */ \"./components/VideoBox.js\");\n/* harmony import */ var _assets_classes_YoutubeVideoClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/classes/YoutubeVideoClass */ \"./assets/classes/YoutubeVideoClass.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\nvar _jsxFileName = \"/home/dean/github/pocketband/pages/[vid].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var vid = _ref.vid,\n      preview = _ref.preview;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 12\n      }\n    }, \"Loading...\");\n  }\n\n  var video = new _assets_classes_YoutubeVideoClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"](vid);\n  var details = video === null || video === void 0 ? void 0 : video.yaml();\n  var styles = {\n    bgImg: {\n      backgroundImage: \"url(\".concat(video.thumbnails.high.url, \")\")\n    }\n  };\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    id: \"vid-hero\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: video.thumbnails.high.url,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZpZF0uanM/YjU2MSJdLCJuYW1lcyI6WyJQb3N0IiwidmlkIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJ2aWRlbyIsIllvdXR1YmVWaWRlb0NsYXNzIiwiZGV0YWlscyIsInlhbWwiLCJzdHlsZXMiLCJiZ0ltZyIsImJhY2tncm91bmRJbWFnZSIsInRodW1ibmFpbHMiLCJoaWdoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQWdDO0FBQUE7O0FBQUEsTUFBaEJDLEdBQWdCLFFBQWhCQSxHQUFnQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUM3QyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUNyQixXQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQVA7QUFDRDs7QUFFRCxNQUFNQyxLQUFLLEdBQUcsSUFBSUMseUVBQUosQ0FBc0JOLEdBQXRCLENBQWQ7QUFDQSxNQUFNTyxPQUFPLEdBQUdGLEtBQUgsYUFBR0EsS0FBSCx1QkFBR0EsS0FBSyxDQUFFRyxJQUFQLEVBQWhCO0FBRUEsTUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFNBQUssRUFBRTtBQUNMQyxxQkFBZSxnQkFBU04sS0FBSyxDQUFDTyxVQUFOLENBQWlCQyxJQUFqQixDQUFzQkMsR0FBL0I7QUFEVjtBQURNLEdBQWY7QUFNQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBUyxNQUFFLEVBQUMsVUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFVCxLQUFLLENBQUNPLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCQyxHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQUZGLENBREY7QUFVRDs7R0F6QnVCZixJO1VBQ1BJLHFEOzs7S0FET0osSSIsImZpbGUiOiIuL3BhZ2VzL1t2aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdCwgZ2V0VmlkZW8gfSBmcm9tICcuLi9hc3NldHMvanMveW91dHViZSc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlbyc7XG5pbXBvcnQgVmlkZW9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb0JveCc7XG5pbXBvcnQgWW91dHViZVZpZGVvQ2xhc3MgZnJvbSAnLi4vYXNzZXRzL2NsYXNzZXMvWW91dHViZVZpZGVvQ2xhc3MnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyB2aWQsIHByZXZpZXcgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IHZpZGVvID0gbmV3IFlvdXR1YmVWaWRlb0NsYXNzKHZpZCk7XG4gIGNvbnN0IGRldGFpbHMgPSB2aWRlbz8ueWFtbCgpO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBiZ0ltZzoge1xuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7dmlkZW8udGh1bWJuYWlscy5oaWdoLnVybH0pYCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxzZWN0aW9uIGlkPSd2aWQtaGVybyc+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxpbWcgc3JjPXt2aWRlby50aHVtYm5haWxzLmhpZ2gudXJsfSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcywgcHJldmlldyA9IGZhbHNlIH0pIHtcbiAgbGV0IG1vY2tpZCA9IGBBNTdOOXhLNEI0d2A7XG4gIGxldCB2aWQgPSBwYXJhbXMudmlkO1xuXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFZpZGVvKHBhcmFtcy52aWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHZpZDogcmVzdWx0LmRhdGEuaXRlbXNbMF0sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwbGF5bGlzdCA9IGBQTEpvOEpJZWtIVThsMzlqdGZ3THNMcHRPbVRxWGMyb2lXYDtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0UGxheWxpc3QocGxheWxpc3QpO1xuXG4gIGNvbnN0IHBhdGhzID0gcmVzdWx0LmRhdGEuaXRlbXMubWFwKCh2aWRlbykgPT4gKHtcbiAgICBwYXJhbXM6IHsgdmlkOiB2aWRlby5zbmlwcGV0LnJlc291cmNlSWQudmlkZW9JZCB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[vid].js\n");

/***/ })

})