/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var inversify_config_1 = __webpack_require__(7);
	/**
	 * Invoking basic @inject
	 */
	console.log(inversify_config_1.default.get("IVehicle").drive());
	console.log("IInjectTest (@inject IVehicle)--> " + inversify_config_1.default.get("IInjectTest").init());


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("reflect-metadata");

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = require("inversify");

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var inversify_1 = __webpack_require__(3);
	var Car_1 = __webpack_require__(8);
	var InjectTest_1 = __webpack_require__(9);
	var kernel = new inversify_1.Kernel();
	//kernel.bind("IVehicle").to(Car);
	kernel.bind("IVehicle").to(Car_1.default).inSingletonScope();
	//kernel.bind<IVehicle>("IVehicle").to(Truck).inSingletonScope();
	kernel.bind("IInjectTest").to(InjectTest_1.default).inSingletonScope();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = kernel;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var inversify_1 = __webpack_require__(3);
	var Car = (function () {
	    function Car() {
	    }
	    Car.prototype.drive = function () {
	        return "Drive Car --> Car instance";
	    };
	    Car = __decorate([
	        inversify_1.injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Car);
	    return Car;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Car;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var inversify_1 = __webpack_require__(3);
	var InjectTest = (function () {
	    function InjectTest(vehicle) {
	        _vehicle = vehicle;
	        // console.log("from test" + this._vehicle);
	    }
	    InjectTest.prototype.init = function () {
	        return _vehicle.drive();
	    };
	    InjectTest = __decorate([
	        inversify_1.injectable(),
	        __param(0, inversify_1.inject("IVehicle")), 
	        __metadata('design:paramtypes', [Object])
	    ], InjectTest);
	    return InjectTest;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InjectTest;
	var _vehicle;


/***/ }
/******/ ]);
//# sourceMappingURL=RunInject.js.map