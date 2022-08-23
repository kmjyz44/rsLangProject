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

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWord\": () => (/* binding */ getWord)\n/* harmony export */ });\nasync function getWord (n){\r\n    const word = document.querySelector('.word');\r\n    let out='';\r\n   await fetch('https://leng-app.herokuapp.com/words?page= '+n+'&group=0')\r\n    .then((data) => {\r\n       \r\n      return data.json();\r\n    })\r\n  .then(data => {\r\n    data.forEach(element => {\r\n     out += '<li class = \"li_case\" data = \"'+element.word+'\">' +element.word+ '<br>'+ element.wordTranslate+'</li>';\r\n   word.innerHTML = out;\r\n        console.log(element); \r\n    });\r\n  \r\n  }) \r\n  }\n\n//# sourceURL=webpack://rslangproject/./src/book.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n\r\nconst wrapper_book = document.querySelector('.wrapper_book');\r\n\r\n\r\nwrapper_book.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\nlet n = event.target.getAttribute('data');\r\nif(n !== null){\r\n  (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n);\r\n}\r\n})\r\nconst next = document.querySelector('.next');\r\nconst pagination = document.querySelectorAll('.pagination');\r\npagination[0].classList.add('pagination_active');\r\n\r\nfunction hide_number(){\r\n  console.log(1);\r\n   if(pagination[0].classList.contains('pagination_active')){\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.add('pagination_active');\r\n    \r\n   }\r\n    else if(pagination[1].classList.contains('pagination_active')){\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.add('pagination_active');\r\n   \r\n   }\r\n   else\r\n   if(pagination[2].classList.contains('pagination_active')){\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.add('pagination_active');\r\n    \r\n   }\r\n  }\r\n\r\n\r\nnext.addEventListener('click', hide_number);\r\n\n\n//# sourceURL=webpack://rslangproject/./src/main.js?");

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