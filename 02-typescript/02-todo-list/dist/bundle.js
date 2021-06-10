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

eval("\r\nconst appDiv = document.getElementById(\"app\");\r\nif (!(appDiv instanceof HTMLDivElement)) {\r\n    throw new Error(\"No div with id 'app' found\");\r\n}\r\nlet states = [\r\n    { title: \"eat lunch\", done: true },\r\n    { title: \"learn TypeScript\", done: false },\r\n    { title: \"create object\", done: false }\r\n];\r\nconst renderList = () => {\r\n    appDiv.innerHTML = \"\";\r\n    const list = document.createElement(\"ul\");\r\n    const addInput = document.createElement(\"input\");\r\n    const addButton = document.createElement(\"input\");\r\n    addButton.setAttribute(\"type\", \"submit\");\r\n    addButton.setAttribute(\"value\", \"Add to-do #\" + (states.length + 1));\r\n    const readInputInteger = (input) => {\r\n        const result = states.value;\r\n        return result;\r\n    };\r\n    for (const state of states) {\r\n        const itemLi = document.createElement(\"li\");\r\n        const addCheck = document.createElement(\"input\");\r\n        addCheck.setAttribute(\"type\", \"checkbox\");\r\n        addCheck.checked = state.done;\r\n        itemLi.textContent = state.title;\r\n        list.appendChild(itemLi);\r\n        itemLi.appendChild(addCheck);\r\n        //addInput.setAttribute(\"type\", \"text\");\r\n        const addForm = document.createElement(\"form\");\r\n        addForm.appendChild(list);\r\n        addForm.appendChild(addButton);\r\n        addForm.addEventListener(\"submit\", (event) => {\r\n            event.preventDefault();\r\n            states.push(readInputInteger(addInput));\r\n        });\r\n    }\r\n    ;\r\n    appDiv.appendChild(list);\r\n    appDiv.appendChild(addInput);\r\n    appDiv.appendChild(addButton);\r\n};\r\n// Render the app on page load.\r\nrenderList();\r\n\n\n//# sourceURL=webpack://05-array-sum/./src/main.ts?");

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