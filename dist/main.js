/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.getMenu)();\r\n \r\n//  import {} from \"./book.js\";\r\n//  import {} from './registr.js'\n\n//# sourceURL=webpack://rslangproject/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMenu\": () => (/* binding */ getMenu)\n/* harmony export */ });\n\r\nfunction getMenu (){\r\n    let log_cooc = '';\r\n    let enter = '';\r\n    if(readCookie('usename')){\r\n        log_cooc = readCookie('usename');\r\n        enter = ''\r\n    }\r\n    else{\r\n    log_cooc = '';\r\n    enter = 'Вход'\r\n    }\r\n  const menu = document.querySelector('.menu-main');\r\n  menu.innerHTML = '<li class=\"left-item\"><a href=\"./index.html\">Главная</a></li>'+\r\n  '<li class=\"left-item\"><a href=\"./book.html\">Учебник</a></li>'+\r\n  '<li class=\"left-item\"><a href=\"\">Аудиовызов</a></li>'+\r\n  '<li class=\"right-item\"><a href=\"./sprint.html\">Спринт</a></li>'+\r\n  '<li class=\"right-item\"><a href=\"\">Статистика</a></li>'+\r\n  '<li class=\"right-item log_in\"><a href=\"./entrance.html\">'+enter+'</a></li>'+\r\n  '<li class=\"right-item class = \"log_out\"><a href=\"./entrance.html\">'+log_cooc+'</a></li>'    \r\n}\r\nlet cooc = document.cookie;\r\nfunction readCookie(name) {\r\n    var nameEQ = name + \"=\";\r\n    var ca = document.cookie.split(';');\r\n    for(var i=0;i < ca.length;i++) {\r\n        var c = ca[i];\r\n        while (c.charAt(0)==' ') c = c.substring(1,c.length);\r\n        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);\r\n    }\r\n\r\n    return null;\r\n}\r\n\n\n//# sourceURL=webpack://rslangproject/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;