/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var cov_hgdosn600 = function () {\n  var path = \"/Users/paulfalgout/Projects/cypress-coverage-example/index.js\",\n      hash = \"f5abda4294f6a6c39ef6a72cd180fd765ffe0af6\",\n      Function = function () {}.constructor,\n      global = new Function('return this')(),\n      gcv = \"__coverage__\",\n      coverageData = {\n    path: \"/Users/paulfalgout/Projects/cypress-coverage-example/index.js\",\n    statementMap: {\n      \"0\": {\n        start: {\n          line: 2,\n          column: 2\n        },\n        end: {\n          line: 2,\n          column: 23\n        }\n      },\n      \"1\": {\n        start: {\n          line: 5,\n          column: 0\n        },\n        end: {\n          line: 7,\n          column: 2\n        }\n      },\n      \"2\": {\n        start: {\n          line: 6,\n          column: 2\n        },\n        end: {\n          line: 6,\n          column: 20\n        }\n      },\n      \"3\": {\n        start: {\n          line: 9,\n          column: 0\n        },\n        end: {\n          line: 11,\n          column: 2\n        }\n      },\n      \"4\": {\n        start: {\n          line: 10,\n          column: 2\n        },\n        end: {\n          line: 10,\n          column: 26\n        }\n      },\n      \"5\": {\n        start: {\n          line: 13,\n          column: 0\n        },\n        end: {\n          line: 19,\n          column: 2\n        }\n      },\n      \"6\": {\n        start: {\n          line: 14,\n          column: 2\n        },\n        end: {\n          line: 18,\n          column: 3\n        }\n      },\n      \"7\": {\n        start: {\n          line: 15,\n          column: 4\n        },\n        end: {\n          line: 15,\n          column: 23\n        }\n      },\n      \"8\": {\n        start: {\n          line: 17,\n          column: 4\n        },\n        end: {\n          line: 17,\n          column: 35\n        }\n      },\n      \"9\": {\n        start: {\n          line: 21,\n          column: 0\n        },\n        end: {\n          line: 21,\n          column: 19\n        }\n      }\n    },\n    fnMap: {\n      \"0\": {\n        name: \"Test\",\n        decl: {\n          start: {\n            line: 1,\n            column: 9\n          },\n          end: {\n            line: 1,\n            column: 13\n          }\n        },\n        loc: {\n          start: {\n            line: 1,\n            column: 16\n          },\n          end: {\n            line: 3,\n            column: 1\n          }\n        },\n        line: 1\n      },\n      \"1\": {\n        name: \"(anonymous_1)\",\n        decl: {\n          start: {\n            line: 5,\n            column: 24\n          },\n          end: {\n            line: 5,\n            column: 25\n          }\n        },\n        loc: {\n          start: {\n            line: 5,\n            column: 33\n          },\n          end: {\n            line: 7,\n            column: 1\n          }\n        },\n        line: 5\n      },\n      \"2\": {\n        name: \"(anonymous_2)\",\n        decl: {\n          start: {\n            line: 9,\n            column: 28\n          },\n          end: {\n            line: 9,\n            column: 29\n          }\n        },\n        loc: {\n          start: {\n            line: 9,\n            column: 37\n          },\n          end: {\n            line: 11,\n            column: 1\n          }\n        },\n        line: 9\n      },\n      \"3\": {\n        name: \"(anonymous_3)\",\n        decl: {\n          start: {\n            line: 13,\n            column: 30\n          },\n          end: {\n            line: 13,\n            column: 31\n          }\n        },\n        loc: {\n          start: {\n            line: 13,\n            column: 36\n          },\n          end: {\n            line: 19,\n            column: 1\n          }\n        },\n        line: 13\n      }\n    },\n    branchMap: {\n      \"0\": {\n        loc: {\n          start: {\n            line: 14,\n            column: 2\n          },\n          end: {\n            line: 18,\n            column: 3\n          }\n        },\n        type: \"if\",\n        locations: [{\n          start: {\n            line: 14,\n            column: 2\n          },\n          end: {\n            line: 18,\n            column: 3\n          }\n        }, {\n          start: {\n            line: 14,\n            column: 2\n          },\n          end: {\n            line: 18,\n            column: 3\n          }\n        }],\n        line: 14\n      }\n    },\n    s: {\n      \"0\": 0,\n      \"1\": 0,\n      \"2\": 0,\n      \"3\": 0,\n      \"4\": 0,\n      \"5\": 0,\n      \"6\": 0,\n      \"7\": 0,\n      \"8\": 0,\n      \"9\": 0\n    },\n    f: {\n      \"0\": 0,\n      \"1\": 0,\n      \"2\": 0,\n      \"3\": 0\n    },\n    b: {\n      \"0\": [0, 0]\n    },\n    _coverageSchema: \"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c\"\n  },\n      coverage = global[gcv] || (global[gcv] = {});\n\n  if (coverage[path] && coverage[path].hash === hash) {\n    return coverage[path];\n  }\n\n  coverageData.hash = hash;\n  return coverage[path] = coverageData;\n}();\n\nvar _this = this;\n\nfunction Test() {\n  cov_hgdosn600.f[0]++;\n  cov_hgdosn600.s[0]++;\n  this.setFoo('hello');\n}\n\ncov_hgdosn600.s[1]++;\n\nTest.prototype.setFoo = function (msg) {\n  cov_hgdosn600.f[1]++;\n  cov_hgdosn600.s[2]++;\n  _this.foo = 'hello';\n};\n\ncov_hgdosn600.s[3]++;\n\nTest.prototype.notCovered = function (msg) {\n  cov_hgdosn600.f[2]++;\n  cov_hgdosn600.s[4]++;\n  _this.bar = 'not tested';\n};\n\ncov_hgdosn600.s[5]++;\n\nTest.prototype.testBranches = function () {\n  cov_hgdosn600.f[3]++;\n  cov_hgdosn600.s[6]++;\n\n  if (_this.foo === 'hello') {\n    cov_hgdosn600.b[0][0]++;\n    cov_hgdosn600.s[7]++;\n    _this.bar = 'world';\n  } else {\n    cov_hgdosn600.b[0][1]++;\n    cov_hgdosn600.s[8]++;\n    _this.bar = 'Branch not tested';\n  }\n};\n\ncov_hgdosn600.s[9]++;\nwindow.Test = Test;\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });