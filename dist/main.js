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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWord\": () => (/* binding */ getWord),\n/* harmony export */   \"hide_number\": () => (/* binding */ hide_number)\n/* harmony export */ });\n async function getWord (n,i,a='travel'){\r\n  \r\n    const word = document.querySelector('.word');\r\n    const word_card = document.querySelector('.word_card');\r\n    let out='';\r\n    let out_word='';\r\n   await fetch('https://leng-app.herokuapp.com/words?page= '+i+'&group='+n+'')\r\n    .then((data) => {\r\n       \r\n      return data.json();\r\n    })\r\n  .then(data => {\r\n    data.forEach(element => {\r\n     out += '<li class = \"li_case\" data = \"'+element.word+'\">' +element.word+ '<br>'+ element.wordTranslate+'</li>';\r\n   \r\n     word.innerHTML = out;\r\n   //console.log (element);\r\n   if(a == element.word){  \r\n    out_word += '<img class = \"img_word\" src=\"https://leng-app.herokuapp.com/'+element.image+'\"); alt=\"word\"></img>'\r\n    out_word += '<h3>'+element.word+'</h3>'\r\n    out_word += '<h3>'+element.wordTranslate+'</h3>'\r\n    out_word += '<div class=\"voice_div\">'\r\n    out_word += '<h3>'+element.transcription+'</h3>'\r\n   \r\n    out_word += '<audio id=\"myAudio\" controls>'+\r\n  '<source src=\"https://leng-app.herokuapp.com/'+element.audio+'\" type=\"audio/mpeg\">'+\r\n  '</audio>' \r\n    out_word += '</div>'\r\n    out_word += '<h3>Значение</h3>'\r\n    out_word += '<h3>'+element.textMeaning+'</h3>'\r\n    out_word += '<h3>Пример</h3>'\r\n    out_word += '<h3>'+element.textExampleTranslate+'</h3>'\r\n    \r\n    word_card.innerHTML = out_word;\r\n  \r\n   }\r\n   \r\n    }); \r\n    \r\n  }) \r\n  }\r\n  \r\n  const pagination = document.querySelectorAll('.pagination');\r\n  if(pagination[0] !== undefined){\r\n  pagination[0].classList.add('pagination_active');\r\n  }\r\nfunction hide_number(){\r\n  \r\n\r\n   if(pagination[0].classList.contains('pagination_active')){\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.add('pagination_active');\r\n    \r\n   }\r\n    else if(pagination[1].classList.contains('pagination_active')){\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.remove('pagination_active');\r\n    pagination[2].classList.add('pagination_active');\r\n   \r\n   }\r\n   else\r\n   if(pagination[2].classList.contains('pagination_active')){\r\n    pagination[2].classList.remove('pagination_active');\r\n    pagination[1].classList.remove('pagination_active');\r\n    pagination[0].classList.add('pagination_active');\r\n    \r\n   }\r\n  \r\n}\r\n\r\n\r\nconst word = document.querySelector('.word');\r\nconst wrapper_book = document.querySelector('.wrapper_book');\r\nconst card_book = document.querySelectorAll('.card_book')\r\n\r\nconst namber_page = document.querySelector('.namber_page');\r\n\r\nconst prev = document.querySelector('.prev');\r\nconst next = document.querySelector('.next'); \r\nnext.addEventListener('click', hide_number);\r\nprev.addEventListener('click', hide_number);\r\n\r\n\r\nlet n = 0;\r\n let i = 0;\r\n let a ='travel'\r\n getWord(n,i,a);\r\nif(wrapper_book){}\r\nwrapper_book.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\n  card_book.forEach(element => {\r\n    element.classList.remove('book_active')  \r\n   });\r\n   if(event.target.getAttribute('data') !==null){\r\n  event.target.classList.add('book_active');\r\n   }\r\n n = event.target.getAttribute('data');\r\nif(n !== null){\r\n  getWord(n,0);\r\n}\r\nnamber_page.addEventListener('click',function (event)  {\r\n  event.stopPropagation(true);\r\ni = event.target.getAttribute('data');\r\n\r\nif(i !== null && n !== null){\r\n  getWord(n,i,0);\r\n}\r\n})\r\n})\r\nword.addEventListener('click', function(event){\r\n\r\n  const li_case = document.querySelectorAll('.li_case');\r\na = event.target.getAttribute('data');\r\nif(event.target.getAttribute('data') !==null &i !== null && n !== null){\r\n  \r\n\r\ngetWord(n,i,a);\r\n}\r\n})\r\n\r\n  \n\n//# sourceURL=webpack://rslangproject/./src/book.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.js */ \"./src/book.js\");\n/* harmony import */ var _registr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registr.js */ \"./src/registr.js\");\n\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://rslangproject/./src/main.js?");

/***/ }),

/***/ "./src/registr.js":
/*!************************!*\
  !*** ./src/registr.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst email = document.getElementById('#email');\r\nconst pass = document.getElementById('#pass');\r\nconst repass = document.getElementById('#repass');\r\nconst submit_reg = document.querySelector('#submit_reg');\r\nconst reg_user = document.querySelector('#reg_user');\r\n\r\nfunction log(){  \r\n  if (!(/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(reg_user.email.value)))\r\n    {\r\n      alert(\"You have entered an invalid email address!\")\r\n    reg_user.onsubmit = 'return true'\r\n    }\r\nif(reg_user.pass.value.length<8){\r\n  alert (\"Пароль должен содержать не менее 8 символов. \");\r\n  reg_user.onsubmit = 'return true'\r\n  }\r\n  if(reg_user.pass.value !== reg_user.repass.value){\r\n    alert (\"Пароли не совпадают!!!\"); \r\n    reg_user.onsubmit = 'return true'\r\n  }\r\n  else{\r\n    createUser ();\r\n  }\r\n} \r\n    async function  createUser () { \r\n    const rawResponse = await fetch('https://leng-app.herokuapp.com/users', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Accept': 'application/json',\r\n        'Content-Type': 'application/json'\r\n      },\r\n    \r\n      body: JSON.stringify({\"email\": reg_user.email.value , \"password\": reg_user.pass.value })\r\n      \r\n    });\r\n    if(rawResponse.status !=200 ){\r\n      alert('Такой пользователь уже зарегестрирован!')\r\n  }\r\n    const content = await rawResponse.json();\r\n    console.log(content)\r\n    console.log(rawResponse.status)\r\n    \r\n  }\r\n   reg_user.submit_reg.addEventListener('click',log);\r\n \r\n\r\n\r\n\n\n//# sourceURL=webpack://rslangproject/./src/registr.js?");

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