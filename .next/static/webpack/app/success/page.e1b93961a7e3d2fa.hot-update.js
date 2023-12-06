"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/success/page",{

/***/ "(app-pages-browser)/./app/success/page.tsx":
/*!******************************!*\
  !*** ./app/success/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Nav1 */ \"(app-pages-browser)/./components/Nav1.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./components/Footer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nasync function getData() {\n    const res = await fetch(\"http://localhost:3004/recycle\");\n    return res.json();\n}\nfunction Page() {\n    _s();\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await getData();\n                if (data && data.sumResult) {\n                    const { plastic, aluminumCans, envelope, uht, glass, cardboard, otherPaper } = data.sumResult;\n                    // Define the multiplier for each recycling item\n                    const multiplier = {\n                        plastic: 1.04,\n                        aluminumCans: 9.13,\n                        envelope: 3.55,\n                        uht: 4.08,\n                        glass: 0.28,\n                        cardboard: 3.14,\n                        otherPaper: 2.1\n                    };\n                    // Calculate the total\n                    const calculatedTotal = (plastic || 0) * multiplier.plastic + (aluminumCans || 0) * multiplier.aluminumCans + (envelope || 0) * multiplier.envelope + (uht || 0) * multiplier.uht + (glass || 0) * multiplier.glass + (cardboard || 0) * multiplier.cardboard + (otherPaper || 0) * multiplier.otherPaper;\n                    setTotal(calculatedTotal);\n                } else {\n                    console.error(\"Data or data.sum is undefined.\");\n                }\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []); // Empty dependency array to run the effect once when the component mounts\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"shadow-xl shadow-gray-300\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    background: \"#3F506C\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col w-auto h-screen text-center items-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://project319pic.blob.core.windows.net/picforcs319/gbFhstyENyECIgU6kaqa8.jpg\",\n                            alt: \"sss\",\n                            className: \"text-center h-64 w-auto mx-auto pt-30\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white mx-auto flex flex-col rounded-xl shadow-2xl shadow-green-200 md:px-60 px-8 py-5 h-auto w-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-5xl font-bold text-green-500 md:text-7xl\",\n                                    children: total\n                                }, void 0, false, {\n                                    fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                    className: \"mt-4 h-1 bg-gray-300 border-0 rounded dark:bg-gray-700\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mt-2 md:text-2xl text-black\",\n                                    children: \"ปริมาณการลดการปล่อยก๊าซเรือนกระจก (kgCO2e)ที่เราทำได้\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pisitchaisrithongrungtip/Desktop/nextjs-auth/app/success/page.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Page, \"0EKuc4esRN+N9wgitXap6D0zfec=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9zdWNjZXNzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ2Y7QUFDSztBQUV6QyxlQUFlSztJQUNYLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtJQUN4QixPQUFPRCxJQUFJRSxJQUFJO0FBQ25CO0FBWWUsU0FBU0M7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBUztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxZQUFZO1lBQ2QsSUFBSTtnQkFDQSxNQUFNQyxPQUFPLE1BQU1SO2dCQUVuQixJQUFJUSxRQUFRQSxLQUFLQyxTQUFTLEVBQUU7b0JBQ3hCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFLEdBQUdSLEtBQUtDLFNBQVM7b0JBRTdGLGdEQUFnRDtvQkFDaEQsTUFBTVEsYUFBYTt3QkFDZlAsU0FBUzt3QkFDVEMsY0FBYzt3QkFDZEMsVUFBVTt3QkFDVkMsS0FBSzt3QkFDTEMsT0FBTzt3QkFDUEMsV0FBVzt3QkFDWEMsWUFBWTtvQkFDaEI7b0JBRUEsc0JBQXNCO29CQUN0QixNQUFNRSxrQkFDRixDQUFDUixXQUFXLEtBQUtPLFdBQVdQLE9BQU8sR0FDbkMsQ0FBQ0MsZ0JBQWdCLEtBQUtNLFdBQVdOLFlBQVksR0FDN0MsQ0FBQ0MsWUFBWSxLQUFLSyxXQUFXTCxRQUFRLEdBQ3JDLENBQUNDLE9BQU8sS0FBS0ksV0FBV0osR0FBRyxHQUMzQixDQUFDQyxTQUFTLEtBQUtHLFdBQVdILEtBQUssR0FDL0IsQ0FBQ0MsYUFBYSxLQUFLRSxXQUFXRixTQUFTLEdBQ3ZDLENBQUNDLGNBQWMsS0FBS0MsV0FBV0QsVUFBVTtvQkFFN0NWLFNBQVNZO2dCQUNiLE9BQU87b0JBQ0hDLFFBQVFDLEtBQUssQ0FBQztnQkFDbEI7WUFDSixFQUFFLE9BQU9BLE9BQU87Z0JBQ1pELFFBQVFDLEtBQUssQ0FBQyx3QkFBd0JBO1lBQzFDO1FBQ0o7UUFFQWI7SUFDSixHQUFHLEVBQUUsR0FBRywwRUFBMEU7SUFFbEYscUJBQ0k7OzBCQUNJLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ3hCLHdEQUFHQTs7Ozs7Ozs7OzswQkFFUiw4REFBQ3VCO2dCQUFJRSxPQUFPO29CQUFFQyxZQUFZO2dCQUFVOzBCQUNoQyw0RUFBQ0g7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDRzs0QkFDR0MsS0FBSTs0QkFDSkMsS0FBSTs0QkFDSkwsV0FBVTs7Ozs7O3NDQUVkLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNNO29DQUFHTixXQUFVOzhDQUFpRGpCOzs7Ozs7OENBQy9ELDhEQUFDd0I7b0NBQUdQLFdBQVU7Ozs7Ozs4Q0FDZCw4REFBQ1E7b0NBQUVSLFdBQVU7OENBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJdkQsOERBQUN2QiwwREFBTUE7Ozs7Ozs7QUFHbkI7R0FsRXdCSztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvc3VjY2Vzcy9wYWdlLnRzeD9iNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXYgZnJvbSAnQC9jb21wb25lbnRzL05hdjEnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdAL2NvbXBvbmVudHMvRm9vdGVyJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDA0L3JlY3ljbGUnKTtcbiAgICByZXR1cm4gcmVzLmpzb24oKTtcbn1cblxuaW50ZXJmYWNlIFN1bVJlY3ljbGluZyB7XG4gICAgcGxhc3RpYzogbnVtYmVyO1xuICAgIGFsdW1pbnVtQ2FuczogbnVtYmVyO1xuICAgIGVudmVsb3BlOiBudW1iZXI7XG4gICAgdWh0OiBudW1iZXI7XG4gICAgZ2xhc3M6IG51bWJlcjtcbiAgICBjYXJkYm9hcmQ6IG51bWJlcjtcbiAgICBvdGhlclBhcGVyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gICAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5zdW1SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwbGFzdGljLCBhbHVtaW51bUNhbnMsIGVudmVsb3BlLCB1aHQsIGdsYXNzLCBjYXJkYm9hcmQsIG90aGVyUGFwZXIgfSA9IGRhdGEuc3VtUmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERlZmluZSB0aGUgbXVsdGlwbGllciBmb3IgZWFjaCByZWN5Y2xpbmcgaXRlbVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtdWx0aXBsaWVyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhc3RpYzogMS4wNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdW1pbnVtQ2FuczogOS4xMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudmVsb3BlOiAzLjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgdWh0OiA0LjA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xhc3M6IDAuMjgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkYm9hcmQ6IDMuMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlclBhcGVyOiAyLjEsXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSB0b3RhbFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkVG90YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYXN0aWMgfHwgMCkgKiBtdWx0aXBsaWVyLnBsYXN0aWMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGFsdW1pbnVtQ2FucyB8fCAwKSAqIG11bHRpcGxpZXIuYWx1bWludW1DYW5zICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbnZlbG9wZSB8fCAwKSAqIG11bHRpcGxpZXIuZW52ZWxvcGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKHVodCB8fCAwKSAqIG11bHRpcGxpZXIudWh0ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChnbGFzcyB8fCAwKSAqIG11bHRpcGxpZXIuZ2xhc3MgK1xuICAgICAgICAgICAgICAgICAgICAgICAgKGNhcmRib2FyZCB8fCAwKSAqIG11bHRpcGxpZXIuY2FyZGJvYXJkICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChvdGhlclBhcGVyIHx8IDApICogbXVsdGlwbGllci5vdGhlclBhcGVyO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRvdGFsKGNhbGN1bGF0ZWRUb3RhbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRGF0YSBvciBkYXRhLnN1bSBpcyB1bmRlZmluZWQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgdG8gcnVuIHRoZSBlZmZlY3Qgb25jZSB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgc2hhZG93LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjM0Y1MDZDJyB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1hdXRvIGgtc2NyZWVuIHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3Byb2plY3QzMTlwaWMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3BpY2ZvcmNzMzE5L2diRmhzdHlFTnlFQ0lnVTZrYXFhOC5qcGdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic3NzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGgtNjQgdy1hdXRvIG14LWF1dG8gcHQtMzBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG14LWF1dG8gZmxleCBmbGV4LWNvbCByb3VuZGVkLXhsIHNoYWRvdy0yeGwgc2hhZG93LWdyZWVuLTIwMCBtZDpweC02MCBweC04IHB5LTUgaC1hdXRvIHctYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWdyZWVuLTUwMCBtZDp0ZXh0LTd4bFwiPnt0b3RhbH08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm10LTQgaC0xIGJnLWdyYXktMzAwIGJvcmRlci0wIHJvdW5kZWQgZGFyazpiZy1ncmF5LTcwMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIG1kOnRleHQtMnhsIHRleHQtYmxhY2tcIj7guJvguKPguLTguKHguLLguJPguIHguLLguKPguKXguJTguIHguLLguKPguJvguKXguYjguK3guKLguIHguYrguLLguIvguYDguKPguLfguK3guJnguIHguKPguLDguIjguIEgKGtnQ08yZSnguJfguLXguYjguYDguKPguLLguJfguLPguYTguJTguYk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdiIsIkZvb3RlciIsImdldERhdGEiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJQYWdlIiwidG90YWwiLCJzZXRUb3RhbCIsImZldGNoRGF0YSIsImRhdGEiLCJzdW1SZXN1bHQiLCJwbGFzdGljIiwiYWx1bWludW1DYW5zIiwiZW52ZWxvcGUiLCJ1aHQiLCJnbGFzcyIsImNhcmRib2FyZCIsIm90aGVyUGFwZXIiLCJtdWx0aXBsaWVyIiwiY2FsY3VsYXRlZFRvdGFsIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW1nIiwic3JjIiwiYWx0IiwiaDIiLCJociIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/success/page.tsx\n"));

/***/ })

});