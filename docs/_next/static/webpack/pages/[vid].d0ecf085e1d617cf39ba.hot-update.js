webpackHotUpdate_N_E("pages/[vid]",{

/***/ "./pages/[vid].js":
/*!************************!*\
  !*** ./pages/[vid].js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Video */ \"./components/Video.js\");\n/* harmony import */ var _components_VideoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VideoBox */ \"./components/VideoBox.js\");\n/* harmony import */ var _assets_classes_YoutubeVideoClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/classes/YoutubeVideoClass */ \"./assets/classes/YoutubeVideoClass.js\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var _components_HowToPlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HowToPlay */ \"./components/HowToPlay.js\");\nvar _jsxFileName = \"/home/dean/github/pocketband/pages/[vid].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(_ref) {\n  _s();\n\n  var vid = _ref.vid,\n      preview = _ref.preview;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  if (router.isFallback) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 12\n      }\n    }, \"Loading...\");\n  }\n\n  var video = new _assets_classes_YoutubeVideoClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"](vid);\n  var details = video === null || video === void 0 ? void 0 : video.yaml();\n  var styles = {\n    bgImg: {\n      backgroundImage: \"url(\".concat(video.thumbnails.high.url, \")\")\n    }\n  };\n  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }), __jsx(\"section\", {\n    id: \"vid-wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"iframe-wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"iframe\", {\n    id: \"ytplayer\",\n    type: \"text/html\",\n    width: \"640\",\n    height: \"360\",\n    src: \"https://www.youtube.com/embed/\".concat(video.id, \"?autoplay=1&fs=0&origin=http://pocket.band\"),\n    frameBorder: \"0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"content-wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"content-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, details.title), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, details.author)), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }\n  }, \"PO: \", details.po ? details.po : 'n/a')), __jsx(\"div\", {\n    className: \"button-wrapper\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    href: details.download,\n    className: \"button black\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }\n  }, \"download\")), __jsx(_components_HowToPlay__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    po: details.po,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Post;\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW3ZpZF0uanM/YjU2MSJdLCJuYW1lcyI6WyJQb3N0IiwidmlkIiwicHJldmlldyIsInJvdXRlciIsInVzZVJvdXRlciIsImlzRmFsbGJhY2siLCJ2aWRlbyIsIllvdXR1YmVWaWRlb0NsYXNzIiwiZGV0YWlscyIsInlhbWwiLCJzdHlsZXMiLCJiZ0ltZyIsImJhY2tncm91bmRJbWFnZSIsInRodW1ibmFpbHMiLCJoaWdoIiwidXJsIiwiaWQiLCJ0aXRsZSIsImF1dGhvciIsInBvIiwiZG93bmxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBZ0M7QUFBQTs7QUFBQSxNQUFoQkMsR0FBZ0IsUUFBaEJBLEdBQWdCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzdDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBSUQsTUFBTSxDQUFDRSxVQUFYLEVBQXVCO0FBQ3JCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBUDtBQUNEOztBQUVELE1BQU1DLEtBQUssR0FBRyxJQUFJQyx5RUFBSixDQUFzQk4sR0FBdEIsQ0FBZDtBQUNBLE1BQU1PLE9BQU8sR0FBR0YsS0FBSCxhQUFHQSxLQUFILHVCQUFHQSxLQUFLLENBQUVHLElBQVAsRUFBaEI7QUFFQSxNQUFNQyxNQUFNLEdBQUc7QUFDYkMsU0FBSyxFQUFFO0FBQ0xDLHFCQUFlLGdCQUFTTixLQUFLLENBQUNPLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCQyxHQUEvQjtBQURWO0FBRE0sR0FBZjtBQU1BLFNBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFTLE1BQUUsRUFBQyxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFFBQUksRUFBQyxXQUZQO0FBR0UsU0FBSyxFQUFDLEtBSFI7QUFJRSxVQUFNLEVBQUMsS0FKVDtBQUtFLE9BQUcsMENBQW1DVCxLQUFLLENBQUNVLEVBQXpDLCtDQUxMO0FBTUUsZUFBVyxFQUFDLEdBTmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFXRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtSLE9BQU8sQ0FBQ1MsS0FBYixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLVCxPQUFPLENBQUNVLE1BQWIsQ0FGRixDQURGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFXVixPQUFPLENBQUNXLEVBQVIsR0FBYVgsT0FBTyxDQUFDVyxFQUFyQixHQUEwQixLQUFyQyxDQUxGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVYLE9BQU8sQ0FBQ1ksUUFBakI7QUFBMkIsYUFBUyxFQUFDLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FSRixFQWFFLE1BQUMsNkRBQUQ7QUFBVyxNQUFFLEVBQUVaLE9BQU8sQ0FBQ1csRUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLENBWEYsQ0FGRixDQURGO0FBZ0NEOztHQS9DdUJuQixJO1VBQ1BJLHFEOzs7S0FET0osSSIsImZpbGUiOiIuL3BhZ2VzL1t2aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBnZXRQbGF5bGlzdCwgZ2V0VmlkZW8gfSBmcm9tICcuLi9hc3NldHMvanMveW91dHViZSc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlbyc7XG5pbXBvcnQgVmlkZW9Cb3ggZnJvbSAnLi4vY29tcG9uZW50cy9WaWRlb0JveCc7XG5pbXBvcnQgWW91dHViZVZpZGVvQ2xhc3MgZnJvbSAnLi4vYXNzZXRzL2NsYXNzZXMvWW91dHViZVZpZGVvQ2xhc3MnO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgSG93VG9QbGF5IGZyb20gJy4uL2NvbXBvbmVudHMvSG93VG9QbGF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHZpZCwgcHJldmlldyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgdmlkZW8gPSBuZXcgWW91dHViZVZpZGVvQ2xhc3ModmlkKTtcbiAgY29uc3QgZGV0YWlscyA9IHZpZGVvPy55YW1sKCk7XG5cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIGJnSW1nOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2aWRlby50aHVtYm5haWxzLmhpZ2gudXJsfSlgLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPE5hdiAvPlxuICAgICAgPHNlY3Rpb24gaWQ9J3ZpZC13cmFwcGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lmcmFtZS13cmFwcGVyJz5cbiAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICBpZD0neXRwbGF5ZXInXG4gICAgICAgICAgICB0eXBlPSd0ZXh0L2h0bWwnXG4gICAgICAgICAgICB3aWR0aD0nNjQwJ1xuICAgICAgICAgICAgaGVpZ2h0PSczNjAnXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvLmlkfT9hdXRvcGxheT0xJmZzPTAmb3JpZ2luPWh0dHA6Ly9wb2NrZXQuYmFuZGB9XG4gICAgICAgICAgICBmcmFtZUJvcmRlcj0nMCdcbiAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC13cmFwcGVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1oZWFkZXInPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPntkZXRhaWxzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgIDxoMj57ZGV0YWlscy5hdXRob3J9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+UE86IHtkZXRhaWxzLnBvID8gZGV0YWlscy5wbyA6ICduL2EnfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uLXdyYXBwZXInPlxuICAgICAgICAgICAgPGEgaHJlZj17ZGV0YWlscy5kb3dubG9hZH0gY2xhc3NOYW1lPSdidXR0b24gYmxhY2snPlxuICAgICAgICAgICAgICBkb3dubG9hZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxIb3dUb1BsYXkgcG89e2RldGFpbHMucG99IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMsIHByZXZpZXcgPSBmYWxzZSB9KSB7XG4gIGxldCBtb2NraWQgPSBgQTU3Tjl4SzRCNHdgO1xuICBsZXQgdmlkID0gcGFyYW1zLnZpZDtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRWaWRlbyhwYXJhbXMudmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB2aWQ6IHJlc3VsdC5kYXRhLml0ZW1zWzBdLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGxheWxpc3QgPSBgUExKbzhKSWVrSFU4bDM5anRmd0xzTHB0T21UcVhjMm9pV2A7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFBsYXlsaXN0KHBsYXlsaXN0KTtcblxuICBjb25zdCBwYXRocyA9IHJlc3VsdC5kYXRhLml0ZW1zLm1hcCgodmlkZW8pID0+ICh7XG4gICAgcGFyYW1zOiB7IHZpZDogdmlkZW8uc25pcHBldC5yZXNvdXJjZUlkLnZpZGVvSWQgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[vid].js\n");

/***/ })

})