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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWord\": () => (/* binding */ getWord),\n/* harmony export */   \"hide_number\": () => (/* binding */ hide_number)\n/* harmony export */ });\nasync function getWord (n,i,a='travel'){\r\n    const word = document.querySelector('.word');\r\n    const word_card = document.querySelector('.word_card');\r\n    let out='';\r\n    let out_word='';\r\n   await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')\r\n    .then((data) => {\r\n       \r\n      return data.json();\r\n    })\r\n  .then(data => {\r\n    data.forEach(element => {\r\n     out += '<li class = \"li_case\" data = \"'+element.word+'\">' +element.word+ '<br>'+ element.wordTranslate+'</li>';\r\n   word.innerHTML = out;\r\n   //console.log (element);\r\n   if(a == element.word){  \r\n    out_word += '<img class = \"img_word\" src=\"https://leng-app.herokuapp.com/'+element.image+'\"); alt=\"word\"></img>'\r\n    out_word += '<h3>'+element.word+'</h3>'\r\n    out_word += '<h3>'+element.wordTranslate+'</h3>'\r\n    out_word += '<div class=\"voice_div\">'\r\n    out_word += '<h3>'+element.transcription+'</h3>'\r\n   \r\n    out_word += '<audio id=\"myAudio\" controls>'+\r\n  '<source src=\"https://leng-app.herokuapp.com/'+element.audio+'\" type=\"audio/mpeg\">'+\r\n  '</audio>' // out_word += '<button class = \"voice_button1\">'+'<?xml   version=\"1.0\" encoding=\"utf-8\"?><!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" width =\"30px\" xml:space=\"preserve\">'+\r\n    // '<path   fill=\"#81D4FA\"  d=\"M28,7.1v2c7.3,1,13,7.3,13,14.9s-5.7,13.9-13,14.9v2c8.4-1,15-8.2,15-16.9S36.4,8.1,28,7.1z\"/>'+\r\n    // '<path fill=\"#546E7A\"  d=\"M14,32H7c-1.1,0-2-0.9-2-2V18c0-1.1,0.9-2,2-2h7V32z\"/>'+\r\n    // '<polygon  fill=\"#78909C\"  points=\"26,42 14,32 14,16 26,6 \"/>'+\r\n    // '<path  fill=\"#03A9F4\" d=\"M28,17.3v2.1c1.8,0.8,3,2.5,3,4.6s-1.2,3.8-3,4.6v2.1c2.9-0.9,5-3.5,5-6.7S30.9,18.2,28,17.3z\"/>'+\r\n    // '<path  fill=\"#4FC3F7\"  d=\"M28,12.2v2c4.6,0.9,8,5,8,9.8s-3.4,8.9-8,9.8v2c5.7-1,10-5.9,10-11.8S33.7,13.1,28,12.2z\"/>'+\r\n    // '</svg>'+'</button>'\r\n    out_word += '</div>'\r\n    out_word += '<h3>Значение</h3>'\r\n    out_word += '<h3>'+element.textMeaning+'</h3>'\r\n    out_word += '<h3>Пример</h3>'\r\n    out_word += '<h3>'+element.textExampleTranslate+'</h3>'\r\n    \r\n    word_card.innerHTML = out_word;\r\n  \r\n   }\r\n   \r\n    }); \r\n    \r\n  }) \r\n  }\r\n  \r\nconst pagination = document.querySelectorAll('.pagination');\r\npagination[0].classList.add('pagination_active');\r\n\r\nfunction hide_number(){\r\n  console.log(1);\r\n   if(pagination[0].classList.contains('pagination_active')){\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.add('pagination_active');\r\n    \r\n   }\r\n    else if(pagination[1].classList.contains('pagination_active')){\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.add('pagination_active');\r\n   \r\n   }\r\n   else\r\n   if(pagination[2].classList.contains('pagination_active')){\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.add('pagination_active');\r\n    \r\n   }\r\n  }\r\n  \n\n//# sourceURL=webpack://rslangproject/./src/book.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n\r\n\r\n\r\n\r\nconst word = document.querySelector('.word');\r\nconst wrapper_book = document.querySelector('.wrapper_book');\r\nconst card_book = document.querySelectorAll('.card_book')\r\nconst prev = document.querySelector('.prev');\r\nconst next = document.querySelector('.next'); \r\nnext.addEventListener('click', _book_js__WEBPACK_IMPORTED_MODULE_0__.hide_number);\r\nprev.addEventListener('click', _book_js__WEBPACK_IMPORTED_MODULE_0__.hide_number);\r\nconst namber_page = document.querySelector('.namber_page');\r\n\r\nlet n =0;\r\n let i = 0;\r\n let a ='travel'\r\n\r\nwrapper_book.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\n  card_book.forEach(element => {\r\n    element.classList.remove('book_active')  \r\n   });\r\n   if(event.target.getAttribute('data') !==null){\r\n  event.target.classList.add('book_active');\r\n   }\r\n n = event.target.getAttribute('data');\r\nif(n !== null){\r\n  (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,0);\r\n}\r\nnamber_page.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\ni = event.target.getAttribute('data');\r\n\r\nif(i !== null && n !== null){\r\n  (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,i,0);\r\n}\r\n})\r\n})\r\nword.addEventListener('click', function(event){\r\n//document.addEventListener('load', (event) => {\r\n  const li_case = document.querySelectorAll('.li_case');\r\na = event.target.getAttribute('data');\r\nif(event.target.getAttribute('data') !==null &i !== null && n !== null){\r\n  \r\n\r\n// li_case.forEach(element => {\r\n//   element.classList.remove('.li_case_active');\r\n// })\r\n// event.target.classList.add('.li_case_active');\r\n(0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,i,a);\r\n}\r\n})\r\nasync function getelementcard(){\r\nawait (0,_book_js__WEBPACK_IMPORTED_MODULE_0__.getWord)(n,i,a);\r\n\r\n}\r\ngetelementcard();\r\n\n\n//# sourceURL=webpack://rslangproject/./src/main.js?");

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