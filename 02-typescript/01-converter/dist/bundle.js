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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\r\nconst celInput = document.getElementById(\"cel\");\r\nconst fahInput = document.getElementById(\"fah\");\r\nif (!(celInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'cel' found!\");\r\n}\r\nif (!(fahInput instanceof HTMLInputElement)) {\r\n    throw new Error(\"No input element with id 'fah' found!\");\r\n}\r\nconst celToFahr = (celsius) => {\r\n    const fahrenheit = ((celsius * (9 / 5)) + 32);\r\n    return fahrenheit;\r\n};\r\nconst fahrToCel = (fahrenheit) => {\r\n    const celsius = ((fahrenheit - 32) * (5 / 9));\r\n    return celsius;\r\n};\r\nconst readInt = (input) => {\r\n    const result = parseInt(input.value);\r\n    return isNaN(result) ? 0 : result;\r\n};\r\nconst updateResultforCel = () => {\r\n    const result = celToFahr(readInt(celInput));\r\n    fahInput.value = result.toString();\r\n};\r\nconst updateResultforFahr = () => {\r\n    const result = fahrToCel(readInt(fahInput));\r\n    celInput.value = result.toString();\r\n};\r\ncelInput.addEventListener(\"input\", updateResultforCel);\r\nfahInput.addEventListener(\"input\", updateResultforFahr);\r\n//updateResultforCel();\r\n//updateResultforFahr()\r\n\n\n//# sourceURL=webpack://04-addition/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;