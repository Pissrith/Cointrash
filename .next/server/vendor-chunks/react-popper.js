"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-popper";
exports.ids = ["vendor-chunks/react-popper"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-popper/lib/esm/usePopper.js":
/*!********************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/usePopper.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePopper: () => (/* binding */ usePopper)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @popperjs/core */ \"(ssr)/./node_modules/@popperjs/core/lib/popper.js\");\n/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fast-compare */ \"(ssr)/./node_modules/react-fast-compare/index.js\");\n/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/react-popper/lib/esm/utils.js\");\n\n\n\n\n\nvar EMPTY_MODIFIERS = [];\nvar usePopper = function usePopper(referenceElement, popperElement, options) {\n    if (options === void 0) {\n        options = {};\n    }\n    var prevOptions = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);\n    var optionsWithDefaults = {\n        onFirstUpdate: options.onFirstUpdate,\n        placement: options.placement || \"bottom\",\n        strategy: options.strategy || \"absolute\",\n        modifiers: options.modifiers || EMPTY_MODIFIERS\n    };\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n        styles: {\n            popper: {\n                position: optionsWithDefaults.strategy,\n                left: \"0\",\n                top: \"0\"\n            },\n            arrow: {\n                position: \"absolute\"\n            }\n        },\n        attributes: {}\n    }), state = _React$useState[0], setState = _React$useState[1];\n    var updateStateModifier = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {\n        return {\n            name: \"updateState\",\n            enabled: true,\n            phase: \"write\",\n            fn: function fn(_ref) {\n                var state = _ref.state;\n                var elements = Object.keys(state.elements);\n                react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(function() {\n                    setState({\n                        styles: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fromEntries)(elements.map(function(element) {\n                            return [\n                                element,\n                                state.styles[element] || {}\n                            ];\n                        })),\n                        attributes: (0,_utils__WEBPACK_IMPORTED_MODULE_3__.fromEntries)(elements.map(function(element) {\n                            return [\n                                element,\n                                state.attributes[element]\n                            ];\n                        }))\n                    });\n                });\n            },\n            requires: [\n                \"computeStyles\"\n            ]\n        };\n    }, []);\n    var popperOptions = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {\n        var newOptions = {\n            onFirstUpdate: optionsWithDefaults.onFirstUpdate,\n            placement: optionsWithDefaults.placement,\n            strategy: optionsWithDefaults.strategy,\n            modifiers: [].concat(optionsWithDefaults.modifiers, [\n                updateStateModifier,\n                {\n                    name: \"applyStyles\",\n                    enabled: false\n                }\n            ])\n        };\n        if (react_fast_compare__WEBPACK_IMPORTED_MODULE_2___default()(prevOptions.current, newOptions)) {\n            return prevOptions.current || newOptions;\n        } else {\n            prevOptions.current = newOptions;\n            return newOptions;\n        }\n    }, [\n        optionsWithDefaults.onFirstUpdate,\n        optionsWithDefaults.placement,\n        optionsWithDefaults.strategy,\n        optionsWithDefaults.modifiers,\n        updateStateModifier\n    ]);\n    var popperInstanceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();\n    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function() {\n        if (popperInstanceRef.current) {\n            popperInstanceRef.current.setOptions(popperOptions);\n        }\n    }, [\n        popperOptions\n    ]);\n    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect)(function() {\n        if (referenceElement == null || popperElement == null) {\n            return;\n        }\n        var createPopper = options.createPopper || _popperjs_core__WEBPACK_IMPORTED_MODULE_4__.createPopper;\n        var popperInstance = createPopper(referenceElement, popperElement, popperOptions);\n        popperInstanceRef.current = popperInstance;\n        return function() {\n            popperInstance.destroy();\n            popperInstanceRef.current = null;\n        };\n    }, [\n        referenceElement,\n        popperElement,\n        options.createPopper\n    ]);\n    return {\n        state: popperInstanceRef.current ? popperInstanceRef.current.state : null,\n        styles: state.styles,\n        attributes: state.attributes,\n        update: popperInstanceRef.current ? popperInstanceRef.current.update : null,\n        forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vdXNlUG9wcGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNPO0FBQytCO0FBQzVCO0FBQ3dCO0FBQ2pFLElBQUlPLGtCQUFrQixFQUFFO0FBQ2pCLElBQUlDLFlBQVksU0FBU0EsVUFBVUMsZ0JBQWdCLEVBQUVDLGFBQWEsRUFBRUMsT0FBTztJQUNoRixJQUFJQSxZQUFZLEtBQUssR0FBRztRQUN0QkEsVUFBVSxDQUFDO0lBQ2I7SUFFQSxJQUFJQyxjQUFjWix5Q0FBWSxDQUFDO0lBQy9CLElBQUljLHNCQUFzQjtRQUN4QkMsZUFBZUosUUFBUUksYUFBYTtRQUNwQ0MsV0FBV0wsUUFBUUssU0FBUyxJQUFJO1FBQ2hDQyxVQUFVTixRQUFRTSxRQUFRLElBQUk7UUFDOUJDLFdBQVdQLFFBQVFPLFNBQVMsSUFBSVg7SUFDbEM7SUFFQSxJQUFJWSxrQkFBa0JuQiwyQ0FBYyxDQUFDO1FBQ25DcUIsUUFBUTtZQUNOQyxRQUFRO2dCQUNOQyxVQUFVVCxvQkFBb0JHLFFBQVE7Z0JBQ3RDTyxNQUFNO2dCQUNOQyxLQUFLO1lBQ1A7WUFDQUMsT0FBTztnQkFDTEgsVUFBVTtZQUNaO1FBQ0Y7UUFDQUksWUFBWSxDQUFDO0lBQ2YsSUFDSUMsUUFBUVQsZUFBZSxDQUFDLEVBQUUsRUFDMUJVLFdBQVdWLGVBQWUsQ0FBQyxFQUFFO0lBRWpDLElBQUlXLHNCQUFzQjlCLDBDQUFhLENBQUM7UUFDdEMsT0FBTztZQUNMZ0MsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsSUFBSSxTQUFTQSxHQUFHQyxJQUFJO2dCQUNsQixJQUFJUixRQUFRUSxLQUFLUixLQUFLO2dCQUN0QixJQUFJUyxXQUFXQyxPQUFPQyxJQUFJLENBQUNYLE1BQU1TLFFBQVE7Z0JBQ3pDcEMsZ0RBQWtCLENBQUM7b0JBQ2pCNEIsU0FBUzt3QkFDUFIsUUFBUWhCLG1EQUFXQSxDQUFDZ0MsU0FBU0ksR0FBRyxDQUFDLFNBQVVDLE9BQU87NEJBQ2hELE9BQU87Z0NBQUNBO2dDQUFTZCxNQUFNUCxNQUFNLENBQUNxQixRQUFRLElBQUksQ0FBQzs2QkFBRTt3QkFDL0M7d0JBQ0FmLFlBQVl0QixtREFBV0EsQ0FBQ2dDLFNBQVNJLEdBQUcsQ0FBQyxTQUFVQyxPQUFPOzRCQUNwRCxPQUFPO2dDQUFDQTtnQ0FBU2QsTUFBTUQsVUFBVSxDQUFDZSxRQUFROzZCQUFDO3dCQUM3QztvQkFDRjtnQkFDRjtZQUNGO1lBQ0FDLFVBQVU7Z0JBQUM7YUFBZ0I7UUFDN0I7SUFDRixHQUFHLEVBQUU7SUFDTCxJQUFJQyxnQkFBZ0I1QywwQ0FBYSxDQUFDO1FBQ2hDLElBQUk2QyxhQUFhO1lBQ2Y5QixlQUFlRCxvQkFBb0JDLGFBQWE7WUFDaERDLFdBQVdGLG9CQUFvQkUsU0FBUztZQUN4Q0MsVUFBVUgsb0JBQW9CRyxRQUFRO1lBQ3RDQyxXQUFXLEVBQUUsQ0FBQzRCLE1BQU0sQ0FBQ2hDLG9CQUFvQkksU0FBUyxFQUFFO2dCQUFDWTtnQkFBcUI7b0JBQ3hFRSxNQUFNO29CQUNOQyxTQUFTO2dCQUNYO2FBQUU7UUFDSjtRQUVBLElBQUk3Qix5REFBT0EsQ0FBQ1EsWUFBWW1DLE9BQU8sRUFBRUYsYUFBYTtZQUM1QyxPQUFPakMsWUFBWW1DLE9BQU8sSUFBSUY7UUFDaEMsT0FBTztZQUNMakMsWUFBWW1DLE9BQU8sR0FBR0Y7WUFDdEIsT0FBT0E7UUFDVDtJQUNGLEdBQUc7UUFBQy9CLG9CQUFvQkMsYUFBYTtRQUFFRCxvQkFBb0JFLFNBQVM7UUFBRUYsb0JBQW9CRyxRQUFRO1FBQUVILG9CQUFvQkksU0FBUztRQUFFWTtLQUFvQjtJQUN2SixJQUFJa0Isb0JBQW9CaEQseUNBQVk7SUFDcENNLGlFQUF5QkEsQ0FBQztRQUN4QixJQUFJMEMsa0JBQWtCRCxPQUFPLEVBQUU7WUFDN0JDLGtCQUFrQkQsT0FBTyxDQUFDRSxVQUFVLENBQUNMO1FBQ3ZDO0lBQ0YsR0FBRztRQUFDQTtLQUFjO0lBQ2xCdEMsaUVBQXlCQSxDQUFDO1FBQ3hCLElBQUlHLG9CQUFvQixRQUFRQyxpQkFBaUIsTUFBTTtZQUNyRDtRQUNGO1FBRUEsSUFBSVIsZUFBZVMsUUFBUVQsWUFBWSxJQUFJQyx3REFBbUJBO1FBQzlELElBQUkrQyxpQkFBaUJoRCxhQUFhTyxrQkFBa0JDLGVBQWVrQztRQUNuRUksa0JBQWtCRCxPQUFPLEdBQUdHO1FBQzVCLE9BQU87WUFDTEEsZUFBZUMsT0FBTztZQUN0Qkgsa0JBQWtCRCxPQUFPLEdBQUc7UUFDOUI7SUFDRixHQUFHO1FBQUN0QztRQUFrQkM7UUFBZUMsUUFBUVQsWUFBWTtLQUFDO0lBQzFELE9BQU87UUFDTDBCLE9BQU9vQixrQkFBa0JELE9BQU8sR0FBR0Msa0JBQWtCRCxPQUFPLENBQUNuQixLQUFLLEdBQUc7UUFDckVQLFFBQVFPLE1BQU1QLE1BQU07UUFDcEJNLFlBQVlDLE1BQU1ELFVBQVU7UUFDNUJ5QixRQUFRSixrQkFBa0JELE9BQU8sR0FBR0Msa0JBQWtCRCxPQUFPLENBQUNLLE1BQU0sR0FBRztRQUN2RUMsYUFBYUwsa0JBQWtCRCxPQUFPLEdBQUdDLGtCQUFrQkQsT0FBTyxDQUFDTSxXQUFXLEdBQUc7SUFDbkY7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWF1dGgvLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vdXNlUG9wcGVyLmpzP2YyNzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IGNyZWF0ZVBvcHBlciBhcyBkZWZhdWx0Q3JlYXRlUG9wcGVyIH0gZnJvbSAnQHBvcHBlcmpzL2NvcmUnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAncmVhY3QtZmFzdC1jb21wYXJlJztcbmltcG9ydCB7IGZyb21FbnRyaWVzLCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IH0gZnJvbSAnLi91dGlscyc7XG52YXIgRU1QVFlfTU9ESUZJRVJTID0gW107XG5leHBvcnQgdmFyIHVzZVBvcHBlciA9IGZ1bmN0aW9uIHVzZVBvcHBlcihyZWZlcmVuY2VFbGVtZW50LCBwb3BwZXJFbGVtZW50LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgcHJldk9wdGlvbnMgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBvcHRpb25zV2l0aERlZmF1bHRzID0ge1xuICAgIG9uRmlyc3RVcGRhdGU6IG9wdGlvbnMub25GaXJzdFVwZGF0ZSxcbiAgICBwbGFjZW1lbnQ6IG9wdGlvbnMucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgIHN0cmF0ZWd5OiBvcHRpb25zLnN0cmF0ZWd5IHx8ICdhYnNvbHV0ZScsXG4gICAgbW9kaWZpZXJzOiBvcHRpb25zLm1vZGlmaWVycyB8fCBFTVBUWV9NT0RJRklFUlNcbiAgfTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIHN0eWxlczoge1xuICAgICAgcG9wcGVyOiB7XG4gICAgICAgIHBvc2l0aW9uOiBvcHRpb25zV2l0aERlZmF1bHRzLnN0cmF0ZWd5LFxuICAgICAgICBsZWZ0OiAnMCcsXG4gICAgICAgIHRvcDogJzAnXG4gICAgICB9LFxuICAgICAgYXJyb3c6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cbiAgICB9LFxuICAgIGF0dHJpYnV0ZXM6IHt9XG4gIH0pLFxuICAgICAgc3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgdXBkYXRlU3RhdGVNb2RpZmllciA9IFJlYWN0LnVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiAndXBkYXRlU3RhdGUnLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnd3JpdGUnLFxuICAgICAgZm46IGZ1bmN0aW9uIGZuKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gT2JqZWN0LmtleXMoc3RhdGUuZWxlbWVudHMpO1xuICAgICAgICBSZWFjdERPTS5mbHVzaFN5bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNldFN0YXRlKHtcbiAgICAgICAgICAgIHN0eWxlczogZnJvbUVudHJpZXMoZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBbZWxlbWVudCwgc3RhdGUuc3R5bGVzW2VsZW1lbnRdIHx8IHt9XTtcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZyb21FbnRyaWVzKGVsZW1lbnRzLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gW2VsZW1lbnQsIHN0YXRlLmF0dHJpYnV0ZXNbZWxlbWVudF1dO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHJlcXVpcmVzOiBbJ2NvbXB1dGVTdHlsZXMnXVxuICAgIH07XG4gIH0sIFtdKTtcbiAgdmFyIHBvcHBlck9wdGlvbnMgPSBSZWFjdC51c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3T3B0aW9ucyA9IHtcbiAgICAgIG9uRmlyc3RVcGRhdGU6IG9wdGlvbnNXaXRoRGVmYXVsdHMub25GaXJzdFVwZGF0ZSxcbiAgICAgIHBsYWNlbWVudDogb3B0aW9uc1dpdGhEZWZhdWx0cy5wbGFjZW1lbnQsXG4gICAgICBzdHJhdGVneTogb3B0aW9uc1dpdGhEZWZhdWx0cy5zdHJhdGVneSxcbiAgICAgIG1vZGlmaWVyczogW10uY29uY2F0KG9wdGlvbnNXaXRoRGVmYXVsdHMubW9kaWZpZXJzLCBbdXBkYXRlU3RhdGVNb2RpZmllciwge1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV0pXG4gICAgfTtcblxuICAgIGlmIChpc0VxdWFsKHByZXZPcHRpb25zLmN1cnJlbnQsIG5ld09wdGlvbnMpKSB7XG4gICAgICByZXR1cm4gcHJldk9wdGlvbnMuY3VycmVudCB8fCBuZXdPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2T3B0aW9ucy5jdXJyZW50ID0gbmV3T3B0aW9ucztcbiAgICAgIHJldHVybiBuZXdPcHRpb25zO1xuICAgIH1cbiAgfSwgW29wdGlvbnNXaXRoRGVmYXVsdHMub25GaXJzdFVwZGF0ZSwgb3B0aW9uc1dpdGhEZWZhdWx0cy5wbGFjZW1lbnQsIG9wdGlvbnNXaXRoRGVmYXVsdHMuc3RyYXRlZ3ksIG9wdGlvbnNXaXRoRGVmYXVsdHMubW9kaWZpZXJzLCB1cGRhdGVTdGF0ZU1vZGlmaWVyXSk7XG4gIHZhciBwb3BwZXJJbnN0YW5jZVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCkge1xuICAgICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5zZXRPcHRpb25zKHBvcHBlck9wdGlvbnMpO1xuICAgIH1cbiAgfSwgW3BvcHBlck9wdGlvbnNdKTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHJlZmVyZW5jZUVsZW1lbnQgPT0gbnVsbCB8fCBwb3BwZXJFbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3JlYXRlUG9wcGVyID0gb3B0aW9ucy5jcmVhdGVQb3BwZXIgfHwgZGVmYXVsdENyZWF0ZVBvcHBlcjtcbiAgICB2YXIgcG9wcGVySW5zdGFuY2UgPSBjcmVhdGVQb3BwZXIocmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwgcG9wcGVyT3B0aW9ucyk7XG4gICAgcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA9IHBvcHBlckluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBwb3BwZXJJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID0gbnVsbDtcbiAgICB9O1xuICB9LCBbcmVmZXJlbmNlRWxlbWVudCwgcG9wcGVyRWxlbWVudCwgb3B0aW9ucy5jcmVhdGVQb3BwZXJdKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudCA/IHBvcHBlckluc3RhbmNlUmVmLmN1cnJlbnQuc3RhdGUgOiBudWxsLFxuICAgIHN0eWxlczogc3RhdGUuc3R5bGVzLFxuICAgIGF0dHJpYnV0ZXM6IHN0YXRlLmF0dHJpYnV0ZXMsXG4gICAgdXBkYXRlOiBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID8gcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC51cGRhdGUgOiBudWxsLFxuICAgIGZvcmNlVXBkYXRlOiBwb3BwZXJJbnN0YW5jZVJlZi5jdXJyZW50ID8gcG9wcGVySW5zdGFuY2VSZWYuY3VycmVudC5mb3JjZVVwZGF0ZSA6IG51bGxcbiAgfTtcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJjcmVhdGVQb3BwZXIiLCJkZWZhdWx0Q3JlYXRlUG9wcGVyIiwiaXNFcXVhbCIsImZyb21FbnRyaWVzIiwidXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCIsIkVNUFRZX01PRElGSUVSUyIsInVzZVBvcHBlciIsInJlZmVyZW5jZUVsZW1lbnQiLCJwb3BwZXJFbGVtZW50Iiwib3B0aW9ucyIsInByZXZPcHRpb25zIiwidXNlUmVmIiwib3B0aW9uc1dpdGhEZWZhdWx0cyIsIm9uRmlyc3RVcGRhdGUiLCJwbGFjZW1lbnQiLCJzdHJhdGVneSIsIm1vZGlmaWVycyIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwic3R5bGVzIiwicG9wcGVyIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIiwiYXJyb3ciLCJhdHRyaWJ1dGVzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlTW9kaWZpZXIiLCJ1c2VNZW1vIiwibmFtZSIsImVuYWJsZWQiLCJwaGFzZSIsImZuIiwiX3JlZiIsImVsZW1lbnRzIiwiT2JqZWN0Iiwia2V5cyIsImZsdXNoU3luYyIsIm1hcCIsImVsZW1lbnQiLCJyZXF1aXJlcyIsInBvcHBlck9wdGlvbnMiLCJuZXdPcHRpb25zIiwiY29uY2F0IiwiY3VycmVudCIsInBvcHBlckluc3RhbmNlUmVmIiwic2V0T3B0aW9ucyIsInBvcHBlckluc3RhbmNlIiwiZGVzdHJveSIsInVwZGF0ZSIsImZvcmNlVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-popper/lib/esm/usePopper.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/react-popper/lib/esm/utils.js":
/*!****************************************************!*\
  !*** ./node_modules/react-popper/lib/esm/utils.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromEntries: () => (/* binding */ fromEntries),\n/* harmony export */   safeInvoke: () => (/* binding */ safeInvoke),\n/* harmony export */   setRef: () => (/* binding */ setRef),\n/* harmony export */   unwrapArray: () => (/* binding */ unwrapArray),\n/* harmony export */   useIsomorphicLayoutEffect: () => (/* binding */ useIsomorphicLayoutEffect)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Takes an argument and if it's an array, returns the first item in the array,\n * otherwise returns the argument. Used for Preact compatibility.\n */ var unwrapArray = function unwrapArray(arg) {\n    return Array.isArray(arg) ? arg[0] : arg;\n};\n/**\n * Takes a maybe-undefined function and arbitrary args and invokes the function\n * only if it is defined.\n */ var safeInvoke = function safeInvoke(fn) {\n    if (typeof fn === \"function\") {\n        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n            args[_key - 1] = arguments[_key];\n        }\n        return fn.apply(void 0, args);\n    }\n};\n/**\n * Sets a ref using either a ref callback or a ref object\n */ var setRef = function setRef(ref, node) {\n    // if its a function call it\n    if (typeof ref === \"function\") {\n        return safeInvoke(ref, node);\n    } else if (ref != null) {\n        ref.current = node;\n    }\n};\n/**\n * Simple ponyfill for Object.fromEntries\n */ var fromEntries = function fromEntries(entries) {\n    return entries.reduce(function(acc, _ref) {\n        var key = _ref[0], value = _ref[1];\n        acc[key] = value;\n        return acc;\n    }, {});\n};\n/**\n * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs\n */ var useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtcG9wcGVyL2xpYi9lc20vdXRpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUUvQjs7O0NBR0MsR0FDTSxJQUFJQyxjQUFjLFNBQVNBLFlBQVlDLEdBQUc7SUFDL0MsT0FBT0MsTUFBTUMsT0FBTyxDQUFDRixPQUFPQSxHQUFHLENBQUMsRUFBRSxHQUFHQTtBQUN2QyxFQUFFO0FBQ0Y7OztDQUdDLEdBRU0sSUFBSUcsYUFBYSxTQUFTQSxXQUFXQyxFQUFFO0lBQzVDLElBQUksT0FBT0EsT0FBTyxZQUFZO1FBQzVCLElBQUssSUFBSUMsT0FBT0MsVUFBVUMsTUFBTSxFQUFFQyxPQUFPLElBQUlQLE1BQU1JLE9BQU8sSUFBSUEsT0FBTyxJQUFJLElBQUlJLE9BQU8sR0FBR0EsT0FBT0osTUFBTUksT0FBUTtZQUMxR0QsSUFBSSxDQUFDQyxPQUFPLEVBQUUsR0FBR0gsU0FBUyxDQUFDRyxLQUFLO1FBQ2xDO1FBRUEsT0FBT0wsR0FBR00sS0FBSyxDQUFDLEtBQUssR0FBR0Y7SUFDMUI7QUFDRixFQUFFO0FBQ0Y7O0NBRUMsR0FFTSxJQUFJRyxTQUFTLFNBQVNBLE9BQU9DLEdBQUcsRUFBRUMsSUFBSTtJQUMzQyw0QkFBNEI7SUFDNUIsSUFBSSxPQUFPRCxRQUFRLFlBQVk7UUFDN0IsT0FBT1QsV0FBV1MsS0FBS0M7SUFDekIsT0FDSyxJQUFJRCxPQUFPLE1BQU07UUFDbEJBLElBQUlFLE9BQU8sR0FBR0Q7SUFDaEI7QUFDSixFQUFFO0FBQ0Y7O0NBRUMsR0FFTSxJQUFJRSxjQUFjLFNBQVNBLFlBQVlDLE9BQU87SUFDbkQsT0FBT0EsUUFBUUMsTUFBTSxDQUFDLFNBQVVDLEdBQUcsRUFBRUMsSUFBSTtRQUN2QyxJQUFJQyxNQUFNRCxJQUFJLENBQUMsRUFBRSxFQUNiRSxRQUFRRixJQUFJLENBQUMsRUFBRTtRQUNuQkQsR0FBRyxDQUFDRSxJQUFJLEdBQUdDO1FBQ1gsT0FBT0g7SUFDVCxHQUFHLENBQUM7QUFDTixFQUFFO0FBQ0Y7O0NBRUMsR0FFTSxJQUFJSSw0QkFBNEIsTUFBaUYsR0FBR3hCLENBQXFCLEdBQUdBLDRDQUFlLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtYXV0aC8uL25vZGVfbW9kdWxlcy9yZWFjdC1wb3BwZXIvbGliL2VzbS91dGlscy5qcz9mYzU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBUYWtlcyBhbiBhcmd1bWVudCBhbmQgaWYgaXQncyBhbiBhcnJheSwgcmV0dXJucyB0aGUgZmlyc3QgaXRlbSBpbiB0aGUgYXJyYXksXG4gKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgYXJndW1lbnQuIFVzZWQgZm9yIFByZWFjdCBjb21wYXRpYmlsaXR5LlxuICovXG5leHBvcnQgdmFyIHVud3JhcEFycmF5ID0gZnVuY3Rpb24gdW53cmFwQXJyYXkoYXJnKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmdbMF0gOiBhcmc7XG59O1xuLyoqXG4gKiBUYWtlcyBhIG1heWJlLXVuZGVmaW5lZCBmdW5jdGlvbiBhbmQgYXJiaXRyYXJ5IGFyZ3MgYW5kIGludm9rZXMgdGhlIGZ1bmN0aW9uXG4gKiBvbmx5IGlmIGl0IGlzIGRlZmluZWQuXG4gKi9cblxuZXhwb3J0IHZhciBzYWZlSW52b2tlID0gZnVuY3Rpb24gc2FmZUludm9rZShmbikge1xuICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH1cbn07XG4vKipcbiAqIFNldHMgYSByZWYgdXNpbmcgZWl0aGVyIGEgcmVmIGNhbGxiYWNrIG9yIGEgcmVmIG9iamVjdFxuICovXG5cbmV4cG9ydCB2YXIgc2V0UmVmID0gZnVuY3Rpb24gc2V0UmVmKHJlZiwgbm9kZSkge1xuICAvLyBpZiBpdHMgYSBmdW5jdGlvbiBjYWxsIGl0XG4gIGlmICh0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNhZmVJbnZva2UocmVmLCBub2RlKTtcbiAgfSAvLyBvdGhlcndpc2Ugd2Ugc2hvdWxkIHRyZWF0IGl0IGFzIGEgcmVmIG9iamVjdFxuICBlbHNlIGlmIChyZWYgIT0gbnVsbCkge1xuICAgICAgcmVmLmN1cnJlbnQgPSBub2RlO1xuICAgIH1cbn07XG4vKipcbiAqIFNpbXBsZSBwb255ZmlsbCBmb3IgT2JqZWN0LmZyb21FbnRyaWVzXG4gKi9cblxuZXhwb3J0IHZhciBmcm9tRW50cmllcyA9IGZ1bmN0aW9uIGZyb21FbnRyaWVzKGVudHJpZXMpIHtcbiAgcmV0dXJuIGVudHJpZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIF9yZWYpIHtcbiAgICB2YXIga2V5ID0gX3JlZlswXSxcbiAgICAgICAgdmFsdWUgPSBfcmVmWzFdO1xuICAgIGFjY1trZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xufTtcbi8qKlxuICogU21hbGwgd3JhcHBlciBhcm91bmQgYHVzZUxheW91dEVmZmVjdGAgdG8gZ2V0IHJpZCBvZiB0aGUgd2FybmluZyBvbiBTU1IgZW52c1xuICovXG5cbmV4cG9ydCB2YXIgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1bndyYXBBcnJheSIsImFyZyIsIkFycmF5IiwiaXNBcnJheSIsInNhZmVJbnZva2UiLCJmbiIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiX2tleSIsImFwcGx5Iiwic2V0UmVmIiwicmVmIiwibm9kZSIsImN1cnJlbnQiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJyZWR1Y2UiLCJhY2MiLCJfcmVmIiwia2V5IiwidmFsdWUiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlRWZmZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-popper/lib/esm/utils.js\n");

/***/ })

};
;