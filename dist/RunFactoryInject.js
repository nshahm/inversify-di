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
	var inversify_config_1 = __webpack_require__(2);
	/**
	 * Named binding
	 */
	/**
	 * Invoking basic @inject
	 */
	console.log(inversify_config_1.default.getNamed("IVehicle", "truck").drive());
	console.log("IFactoryInjectTest (@inject IVehicle)--> " + inversify_config_1.default.get("IFactoryInjectTest").init());


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("reflect-metadata");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var inversify_1 = __webpack_require__(3);
	var Car_1 = __webpack_require__(4);
	var Truck_1 = __webpack_require__(5);
	var FactoryInjectTest_1 = __webpack_require__(6);
	var kernel = new inversify_1.Kernel();
	kernel.bind("IVehicle").to(Car_1.default).whenTargetNamed("car");
	kernel.bind("IVehicle").to(Truck_1.default).whenTargetNamed("truck");
	kernel.bind("IFactoryInjectTest").to(FactoryInjectTest_1.default).inSingletonScope();
	kernel.bind("IFactory<IVehicle>").toFactory(function (context) {
	    return function (named) {
	        if (named === "car") {
	            return context.kernel.getNamed("IVehicle", "car");
	        }
	        else {
	            return context.kernel.getNamed("IVehicle", "truck");
	        }
	    };
	});
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = kernel;


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("inversify");

/***/ },
/* 4 */
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
/* 5 */
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
	var Truck = (function () {
	    function Truck() {
	    }
	    Truck.prototype.drive = function () {
	        return "Drive Truck --> Truck instance";
	    };
	    Truck = __decorate([
	        inversify_1.injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Truck);
	    return Truck;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Truck;


/***/ },
/* 6 */
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
	var FactoryInjectTest = (function () {
	    function FactoryInjectTest(vehicleFactory) {
	        this.car = "truck";
	        _vehicle = vehicleFactory(this.car);
	        console.log("instance", _vehicle);
	        // _vehicle = factory(this.car);
	    }
	    FactoryInjectTest.prototype.init = function () {
	        return _vehicle.drive();
	    };
	    FactoryInjectTest = __decorate([
	        inversify_1.injectable(),
	        __param(0, inversify_1.inject("IFactory<IVehicle>")), 
	        __metadata('design:paramtypes', [Function])
	    ], FactoryInjectTest);
	    return FactoryInjectTest;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = FactoryInjectTest;
	var _vehicle;


/***/ }
/******/ ]);
//# sourceMappingURL=RunFactoryInject.js.map