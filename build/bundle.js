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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.piece = exports.Direction = void 0;\r\nclass Board {\r\n    constructor() {\r\n        this.board =\r\n            [[0, 1, 2, 3, 4],\r\n                [0, 1, 2, 3, 4],\r\n                [0, 1, 2, 3, 4],\r\n                [0, 1, 2, 3, 4],\r\n                [0, 1, 2, 3, 4]];\r\n    }\r\n    ;\r\n    get getBoard() {\r\n        console.log(this.board);\r\n        return this.board;\r\n    }\r\n}\r\nvar Direction;\r\n(function (Direction) {\r\n    Direction[\"N\"] = \"N\";\r\n    Direction[\"S\"] = \"S\";\r\n    Direction[\"E\"] = \"E\";\r\n    Direction[\"W\"] = \"W\";\r\n})(Direction = exports.Direction || (exports.Direction = {}));\r\n;\r\nclass Piece {\r\n    constructor() {\r\n        this.coordX = 0;\r\n        this.coordY = 0;\r\n        this.direction = Direction.N;\r\n    }\r\n    get getCoordinates() {\r\n        console.log(this.coordX, this.coordY, this.direction);\r\n        return `${this.coordX} ${this.coordY} ${this.direction}`;\r\n    }\r\n    set setCoordX(value) {\r\n        this.coordX = value;\r\n    }\r\n    set setCoordY(value) {\r\n        this.coordY = value;\r\n    }\r\n    set setDirection(value) {\r\n        this.direction = value;\r\n    }\r\n    changeDirection(value) {\r\n        if (value === \"R\") {\r\n            if (this.direction === \"N\") {\r\n                this.direction = Direction.E;\r\n                return;\r\n            }\r\n            if (this.direction === \"E\") {\r\n                this.direction = Direction.S;\r\n                return;\r\n            }\r\n            if (this.direction === \"S\") {\r\n                this.direction = Direction.W;\r\n                return;\r\n            }\r\n            if (this.direction === \"W\") {\r\n                this.direction = Direction.N;\r\n                return;\r\n            }\r\n        }\r\n        if (value === \"L\") {\r\n            if (this.direction === \"N\") {\r\n                this.direction = Direction.W;\r\n                return;\r\n            }\r\n            if (this.direction === \"W\") {\r\n                this.direction = Direction.S;\r\n                return;\r\n            }\r\n            if (this.direction === \"S\") {\r\n                this.direction = Direction.E;\r\n                return;\r\n            }\r\n            if (this.direction === \"E\") {\r\n                this.direction = Direction.N;\r\n                return;\r\n            }\r\n        }\r\n    }\r\n    processMovement(value) {\r\n        const movementsArray = value.split(\"\");\r\n        movementsArray.forEach(movement => {\r\n            movement = movement.toUpperCase();\r\n            if (movement === \"M\") {\r\n                if (this.direction == Direction.N) {\r\n                    if (this.coordY + 1 > 4) {\r\n                        return;\r\n                    }\r\n                    this.coordY = this.coordY + 1;\r\n                }\r\n                if (this.direction == Direction.E) {\r\n                    if (this.coordX + 1 > 4) {\r\n                        return;\r\n                    }\r\n                    this.coordX = this.coordX + 1;\r\n                }\r\n                if (this.direction == Direction.S) {\r\n                    if (this.coordY - 1 < 0) {\r\n                        return;\r\n                    }\r\n                    this.coordY = this.coordY - 1;\r\n                }\r\n                if (this.direction == Direction.W) {\r\n                    if (this.coordX - 1, 0) {\r\n                        return;\r\n                    }\r\n                    this.coordX = this.coordX - 1;\r\n                }\r\n            }\r\n            ;\r\n            if (movement === \"L\" || movement === \"R\") {\r\n                this.changeDirection(movement);\r\n            }\r\n        });\r\n        return `${this.coordX} ${this.coordY} ${this.direction}`;\r\n    }\r\n}\r\nconst board = new Board();\r\nexports.piece = new Piece();\r\n\n\n//# sourceURL=webpack://vonage-test/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"](0, __webpack_exports__);
/******/ 	
/******/ })()
;