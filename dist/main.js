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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWord\": () => (/* binding */ getWord),\n/* harmony export */   \"hide_number\": () => (/* binding */ hide_number)\n/* harmony export */ });\nasync function getWord (n,i){\r\n    const word = document.querySelector('.word');\r\n    let out='';\r\n   await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')\r\n    .then((data) => {\r\n       \r\n      return data.json();\r\n    })\r\n  .then(data => {\r\n    data.forEach(element => {\r\n     out += '<li class = \"li_case\" data = \"'+element.word+'\">' +element.word+ '<br>'+ element.wordTranslate+'</li>';\r\n   word.innerHTML = out;\r\n       \r\n    }); \r\n    \r\n  }) \r\n  }\r\n \r\nconst pagination = document.querySelectorAll('.pagination');\r\npagination[0].classList.add('pagination_active');\r\n\r\nfunction hide_number(){\r\n  console.log(1);\r\n   if(pagination[0].classList.contains('pagination_active')){\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.add('pagination_active');\r\n    \r\n   }\r\n    else if(pagination[1].classList.contains('pagination_active')){\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.add('pagination_active');\r\n   \r\n   }\r\n   else\r\n   if(pagination[2].classList.contains('pagination_active')){\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.add('pagination_active');\r\n    \r\n   }\r\n  }\r\n\n\n//# sourceURL=webpack://rslangproject/./src/book.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n\r\n\r\n\r\n\r\nconst word = document.querySelector('.word');\r\nconst wrapper_book = document.querySelector('.wrapper_book');\r\nconst card_book = document.querySelectorAll('.card_book')\r\nconst prev = document.querySelector('.prev');\r\nconst next = document.querySelector('.next'); \r\nnext.addEventListener('click', _book_js__WEBPACK_IMPORTED_MODULE_0__.hide_number);\r\nprev.addEventListener('click', _book_js__WEBPACK_IMPORTED_MODULE_0__.hide_number);\r\nconst namber_page = document.querySelector('.namber_page');\r\nlet n =0;\r\n let i = 0;\r\n(0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,i);\r\nwrapper_book.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\n  card_book.forEach(element => {\r\n    element.classList.remove('book_active')  \r\n   });\r\n   if(event.target.getAttribute('data') !==null){\r\n  event.target.classList.add('book_active');\r\n   }\r\n n = event.target.getAttribute('data');\r\nif(n !== null){\r\n  (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,0);\r\n}\r\nnamber_page.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\ni = event.target.getAttribute('data');\r\n\r\nif(i !== null && n !== null){\r\n  (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,i);\r\n}\r\n})\r\n})\r\nword.addEventListener('click', function(event){\r\n//document.addEventListener('load', (event) => {\r\n  const li_case = document.querySelectorAll('.li_case');\r\n  li_case.forEach(element => {\r\n    element.classList.remove('.li_case_active');\r\n})\r\nevent.target.classList.add('.li_case_active');\r\n})\r\n//})\r\n\n\n//# sourceURL=webpack://rslangproject/./src/main.js?");

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