module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GlobalConstantsRepository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlobalConstantsRepository = (function () {
    function GlobalConstantsRepository() {
        this.locationMap = {};
        this.locationMapName = {};
        this.cdnBaseUrl = "https://pixelatedplanetcdn.azureedge.net";
        this.serviceBaseUrl = "https://pixelatedplanetservice.azurewebsites.net";
        this.pixelatedPlanetAPIUrl = this.serviceBaseUrl + "/api/Pixelated";
        this.locationsUrl = this.pixelatedPlanetAPIUrl + "/Locations";
        this.workshopTypesUrl = this.pixelatedPlanetAPIUrl + "/WorkshopTypes";
    }
    GlobalConstantsRepository.prototype.getPixelatedPlanetAPIUrl = function () {
        return this.pixelatedPlanetAPIUrl;
    };
    GlobalConstantsRepository.prototype.getLocationsUrl = function () {
        return this.locationsUrl;
    };
    GlobalConstantsRepository.prototype.getWorkshopTypesUrl = function () {
        return this.workshopTypesUrl;
    };
    GlobalConstantsRepository.prototype.resolveImageUrl = function (path) {
        return this.cdnBaseUrl + path;
    };
    GlobalConstantsRepository.prototype.getLocations = function () {
        return this.locations;
    };
    GlobalConstantsRepository.prototype.getWorkshopTypes = function () {
        return this.workshopTypes;
    };
    GlobalConstantsRepository.prototype.setLocations = function (locations) {
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i];
            this.locationMap[location.id] = location;
            this.locationMapName[location.name] = location;
        }
        this.locations = locations;
    };
    GlobalConstantsRepository.prototype.getLocationByLocationId = function (value) {
        if (!this.locationMap) {
            return null;
        }
        else {
            return this.locationMap[value];
        }
    };
    GlobalConstantsRepository.prototype.getLocationByLocationName = function (value) {
        if (!this.locationMapName) {
            return null;
        }
        else {
            return this.locationMapName[value];
        }
    };
    GlobalConstantsRepository.prototype.setWorkshopTypes = function (workshopTypes) {
        this.workshopTypes = workshopTypes;
    };
    GlobalConstantsRepository = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GlobalConstantsRepository);
    return GlobalConstantsRepository;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/globalConstantsRepository.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopRepository; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkshopRepository = (function () {
    function WorkshopRepository(http, globalConstantsRepository) {
        this.http = http;
        this.globalConstantsRepository = globalConstantsRepository;
        this.globalConstants = globalConstantsRepository;
        this.getLocations();
        this.getWorkshopTypes();
    }
    WorkshopRepository.prototype.getWorkshopOverview = function (path, page, itemsPerPage) {
        var query = path + "&pageNumber=" + page + "&numberOfResults=" + itemsPerPage;
        return this.http.get(query)
            .map(function (response) { return response.json(); });
    };
    WorkshopRepository.prototype.getLocationsInternal = function () {
        return this.http.get(this.globalConstants.getLocationsUrl())
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    WorkshopRepository.prototype.getLocations = function () {
        var _this = this;
        var data = this.globalConstants.getLocations();
        if (data) {
            return new Promise(function (resolve, reject) {
                resolve(data);
            });
        }
        else {
            return this.getLocationsInternal().then(function (locations) {
                _this.globalConstants.setLocations(locations);
                return locations;
            });
        }
    };
    WorkshopRepository.prototype.getWorkshopTypesInternal = function () {
        return this.http.get(this.globalConstants.getWorkshopTypesUrl())
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    WorkshopRepository.prototype.getWorkshopTypes = function () {
        var _this = this;
        var data = this.globalConstants.getWorkshopTypes();
        if (data) {
            return new Promise(function (resolve, reject) {
                resolve(data);
            });
        }
        else {
            var wTypes = this.getWorkshopTypesInternal().then(function (workshopTypes) {
                _this.globalConstants.setWorkshopTypes(workshopTypes);
                return workshopTypes;
            });
            return wTypes;
        }
    };
    WorkshopRepository.prototype.getWorkshopDetails = function (workshopId) {
        var url = this.globalConstants.getPixelatedPlanetAPIUrl() + "/WorkshopDetails?workshopId=" + workshopId;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    WorkshopRepository = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], WorkshopRepository);
    return WorkshopRepository;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/workshopRepository.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("angulartics2");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkshopsListComponent = (function () {
    function WorkshopsListComponent(angulartics2, workshopRepository, router, cdRef) {
        this.workshopRepository = workshopRepository;
        this.router = router;
        this.page = 1;
        this.angulartics2 = angulartics2;
        this.workshops = [];
        this.cdRef = cdRef;
    }
    WorkshopsListComponent.prototype.ngOnInit = function () {
    };
    WorkshopsListComponent.prototype.formatDate = function (date) {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var dateVal = new Date(date);
        var day = dateVal.getDate();
        var monthIndex = dateVal.getMonth();
        var year = dateVal.getFullYear();
        return monthNames[monthIndex] + " " + day + " " + year;
    };
    WorkshopsListComponent.prototype.formatLocation = function (locationId) {
        var locationObject = this.workshopRepository.globalConstants.getLocationByLocationId(locationId);
        if (locationObject) {
            return locationObject.name;
        }
        else {
            return "TBD";
        }
    };
    WorkshopsListComponent.prototype.getWorkshopsData = function (path, page, wsPerPage) {
        var _this = this;
        this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' } });
        this.loading = true;
        this.queryPath = path;
        this.itemsPerPage = wsPerPage;
        this.asyncData = this.workshopRepository.getWorkshopOverview(path, page, wsPerPage)
            .do(function (res) {
            _this.pageNumbers = Array(Math.ceil(res.total / wsPerPage)).fill(0).map(function (x, i) { return i + 1; });
            _this.page = page;
            _this.loading = false;
        })
            .map(function (res) { return res.workshops; });
        this.cdRef.detectChanges();
    };
    WorkshopsListComponent.prototype.createWorkshopDetailsUrl = function (workshopId, workshopName) {
        workshopName = workshopName.replace(/ /g, "-");
        return "/photography-workshop-details/" + workshopName + "/" + workshopId;
    };
    WorkshopsListComponent.prototype.createPageLink = function (pageNumber) {
        return "/workshops/" + pageNumber;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], WorkshopsListComponent.prototype, "activePage", void 0);
    WorkshopsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshops-list',
            template: __webpack_require__(98),
            styles: [__webpack_require__(79)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], WorkshopsListComponent);
    return WorkshopsListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/workshops-list.component.js.map

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(83),
            styles: [__webpack_require__(66)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/about.component.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
        this.submitted = false;
        this.submitMessage = "Message submitted successfully";
    }
    ContactUsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.showMessageBox = true;
    };
    ContactUsComponent.prototype.hideMessagebox = function () {
        this.showMessageBox = false;
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(86),
            styles: [__webpack_require__(68)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/contact-us.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(89),
            styles: [__webpack_require__(71)]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorComponent);
    return ErrorComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/error.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(globalConstantsRepository) {
        this.globalConstantsRepository = globalConstantsRepository;
        this.globalConstants = globalConstantsRepository;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var today = new Date();
        var startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        var endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        var query = this.globalConstants.getPixelatedPlanetAPIUrl() + "/Workshops?startDateFilter=" + startDate + "&endDateFilter=" + endDate;
        this.workshopsListChildComp.getWorkshopsData(query, 1, 4);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]) === 'function' && _a) || Object)
    ], HomeComponent.prototype, "workshopsListChildComp", void 0);
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(91),
            styles: [__webpack_require__(73)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/home.component.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageRedirectComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PageRedirectComponent = (function () {
    function PageRedirectComponent(angulartics2, route, location, ngZone) {
        this.route = route;
        this.location = location;
        this.ngZone = ngZone;
        this.angulartics2 = angulartics2;
    }
    PageRedirectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url;
        this.sub = this.route.params.subscribe(function (params) {
            url = params['externalUrl'];
        });
        this.angulartics2.eventTrack.next({ action: 'NavigateToExternalUrl', properties: { category: 'NavigationEvent' } });
        this.ngZone.runOutsideAngular(function () {
            _this.timer = __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].interval(5000).subscribe({
                next: function (result) {
                    // navigate to the URL (Assumes the url is http:// or https://
                    window.location.href = url;
                }
            });
        });
    };
    PageRedirectComponent.prototype.goBack = function () {
        this.location.back();
    };
    PageRedirectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(93),
            styles: [__webpack_require__(82)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === 'function' && _d) || Object])
    ], PageRedirectComponent);
    return PageRedirectComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/page-redirect.component.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PrivacyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(94),
            styles: [__webpack_require__(75)]
        }), 
        __metadata('design:paramtypes', [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/privacy-policy.component.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TermsAndConditionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsAndConditionsComponent = (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(95),
            styles: [__webpack_require__(76)]
        }), 
        __metadata('design:paramtypes', [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/terms-and-conditions.component.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkshopDetailsComponent = (function () {
    function WorkshopDetailsComponent(workshopRepository, elementRef, route) {
        this.workshopRepository = workshopRepository;
        this.elementRef = elementRef;
        this.route = route;
        this.workshopDetails = {};
        this.hideModal = true;
        this.slideIndex = 1;
    }
    WorkshopDetailsComponent.prototype.ngOnInit = function () {
        this.hideModal = true;
        this.getImgData();
        var workshopId;
        this.sub = this.route.params.subscribe(function (params) {
            workshopId = params['id'];
        });
        this.getWorkshopDetail(workshopId);
        this.initializeTabs();
    };
    WorkshopDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    WorkshopDetailsComponent.prototype.getWorkshopDetail = function (workshopId) {
        var _this = this;
        this.workshopRepository.getWorkshopDetails(workshopId)
            .then(function (data) {
            _this.workshopDetails = data;
        });
    };
    WorkshopDetailsComponent.prototype.closeModal = function () {
        this.hideModal = true;
    };
    WorkshopDetailsComponent.prototype.openModal = function (index) {
        this.hideModal = false;
        this.currentSlide(index);
    };
    WorkshopDetailsComponent.prototype.plusSlides = function (n) {
        this.showSlides(this.slideIndex += n);
    };
    WorkshopDetailsComponent.prototype.currentSlide = function (n) {
        this.showSlides(this.slideIndex = n);
    };
    WorkshopDetailsComponent.prototype.showSlides = function (n) {
        var totalImages = this.imagesLink.length;
        if (n > totalImages) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = totalImages - 1;
        }
        for (var i = 0; i < totalImages; i++) {
            this.imagesLink[i].hideImage = true;
        }
        this.imagesLink[this.slideIndex - 1].hideImage = false;
    };
    WorkshopDetailsComponent.prototype.getImgData = function () {
        this.imagesLink = [{
                imageLink: "assets/img/workshops/RickHulbert/hdr.jpg",
                hideImage: true
            },
            {
                imageLink: "assets/img/workshops/TimVollmer/peru.jpg",
                hideImage: true
            },
            {
                imageLink: "assets/img/workshops/RickHulbert/urban.jpg",
                hideImage: true
            },
            {
                imageLink: "assets/img/workshops/CraigMc/tetons.jpg",
                hideImage: true
            },
            {
                imageLink: "assets/img/workshops/KathleenReeder/OOA.jpg",
                hideImage: true
            },
            {
                imageLink: "assets/img/workshops/RickHulbert/chicago.jpg",
                hideImage: true
            }];
    };
    WorkshopDetailsComponent.prototype.formatDate = function (date) {
        var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
        ];
        var dateVal = new Date(date);
        var day = dateVal.getDate();
        var monthIndex = dateVal.getMonth();
        var year = dateVal.getFullYear();
        return monthNames[monthIndex] + " " + day + " " + year;
    };
    WorkshopDetailsComponent.prototype.initializeTabs = function () {
        this.tabs = [
            {
                label: "Description",
                showTab: false
            },
            {
                label: "Gallery",
                showTab: false
            },
            {
                label: "Photographers",
                showTab: false
            }
        ];
        this.previousActiveTab = this.tabs[0];
        this.previousActiveTab.showTab = true;
    };
    WorkshopDetailsComponent.prototype.openTabs = function (tabNumber) {
        this.previousActiveTab.showTab = false;
        this.tabs[tabNumber].showTab = true;
        this.previousActiveTab = this.tabs[tabNumber];
    };
    WorkshopDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(96),
            styles: [__webpack_require__(77)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object])
    ], WorkshopDetailsComponent);
    return WorkshopDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/workshop-details.component.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkshopsComponent = (function () {
    function WorkshopsComponent(globalConstantsRepository, route) {
        this.globalConstantsRepository = globalConstantsRepository;
        this.route = route;
        this.workshopsPerPage = 8;
        this.globalConstants = globalConstantsRepository;
        this.hideFilter = true;
    }
    WorkshopsComponent.prototype.toggleFilterDropdown = function (event) {
        this.hideFilter = event;
    };
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var today = new Date();
        this.startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        this.endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        var sub = this.route.params.subscribe(function (params) {
            _this.pageNumber = params['pageNumber'];
        });
        this.updateUrl();
    };
    WorkshopsComponent.prototype.updateUrl = function () {
        this.query = this.globalConstants.getPixelatedPlanetAPIUrl() + "/Workshops?startDateFilter=" + this.startDate + "&endDateFilter=" + this.endDate;
        if (this.locationIdList != null && this.locationIdList != "") {
            this.query = this.query + "&locationIdFilter=" + this.locationIdList;
        }
        if (this.categoryList != null && this.categoryList != "") {
            this.query = this.query + "&workshopType=" + this.categoryList;
        }
        if (this.minPrice > 0) {
            this.query = this.query + "&minPrice=" + this.minPrice.toString();
        }
        if (this.maxPrice > 0) {
            this.query = this.query + "&maxPrice=" + this.maxPrice.toString();
        }
        if (this.query && this.pageNumber) {
            this.workshopsListChildComp.getWorkshopsData(this.query, this.pageNumber, this.workshopsPerPage);
        }
    };
    WorkshopsComponent.prototype.setFromDate = function (fromDate) {
        var previousStartDate = this.startDate;
        this.startDate = fromDate.year + "/" + fromDate.month + "/" + fromDate.day;
        if (this.startDate == "0/0/0") {
            var today = new Date();
            this.startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        if (previousStartDate !== this.startDate) {
            this.updateUrl();
            console.log(this.startDate);
        }
    };
    WorkshopsComponent.prototype.toggleFilter = function () {
        this.hideFilter = true;
    };
    WorkshopsComponent.prototype.setToDate = function (toDate) {
        var previousEndDate = this.endDate;
        this.endDate = toDate.year + "/" + toDate.month + "/" + toDate.day;
        if (this.endDate == "0/0/0") {
            var today = new Date();
            this.endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        if (previousEndDate != this.endDate) {
            this.updateUrl();
            console.log(this.endDate);
        }
    };
    WorkshopsComponent.prototype.setLocationIdList = function (locationIdList) {
        if (locationIdList != this.locationIdList) {
            this.locationIdList = locationIdList;
            this.updateUrl();
            console.log(this.locationIdList);
        }
    };
    WorkshopsComponent.prototype.setCategoryList = function (categoryList) {
        if (categoryList != this.categoryList) {
            this.categoryList = categoryList;
            this.updateUrl();
            console.log(categoryList);
        }
    };
    WorkshopsComponent.prototype.setMinPrice = function (minPrice) {
        if (this.minPrice != minPrice) {
            this.minPrice = minPrice;
            this.updateUrl();
            console.log(minPrice);
        }
    };
    WorkshopsComponent.prototype.setMaxPrice = function (maxPrice) {
        if (this.maxPrice != maxPrice) {
            this.maxPrice = maxPrice;
            this.updateUrl();
            console.log(maxPrice);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]) === 'function' && _a) || Object)
    ], WorkshopsComponent.prototype, "workshopsListChildComp", void 0);
    WorkshopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(99),
            styles: [__webpack_require__(80)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object])
    ], WorkshopsComponent);
    return WorkshopsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/workshops.component.js.map

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(63);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/server.js.map

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FocusDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusDirective = (function () {
    function FocusDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    // Focus to element: if value 0 = don't set focus, 1 = set focus
    FocusDirective.prototype.ngAfterViewInit = function () {
        if (this.value === "0") {
            return;
        }
        this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("mydpfocus"), 
        __metadata('design:type', String)
    ], FocusDirective.prototype, "value", void 0);
    FocusDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: "[mydpfocus]"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _b) || Object])
    ], FocusDirective);
    return FocusDirective;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-picker.focus.directive.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__my_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__my_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__my_week_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__my_options_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__my_locale_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_selector_interface__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_selector_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__my_selector_interface__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__my_date_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_0__my_date_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_4__my_month_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_4__my_month_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_8__my_week_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_8__my_week_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9__my_options_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_9__my_options_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_10__my_locale_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_10__my_locale_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__["IMyOptions"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_19__my_selector_interface__, "IMyOptions")) __webpack_require__.d(exports, "IMyOptions", function() { return __WEBPACK_IMPORTED_MODULE_19__my_selector_interface__["IMyOptions"]; });




















//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/index.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-calendar-day.interface.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-calendar-month.interface.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-calendar-view-changed.interface.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-calendar-year.interface.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-model.interface.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-range.interface.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date.interface.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-day-labels.interface.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-default-month.interface.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-input-field-changed.interface.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-input-focus-blur.interface.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-locale.interface.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-marked-date.interface.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-marked-dates.interface.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-month-labels.interface.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-month.interface.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-options.interface.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-selector.interface.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-week.interface.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-weekday.interface.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_index__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__ = __webpack_require__(50);
/* unused harmony export MYDP_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyDatePicker; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var myDpStyles = __webpack_require__(65);
var myDpTpl = __webpack_require__(64);
// webpack2_
var MYDP_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return MyDatePicker; }),
    multi: true
};
var CalToggle;
(function (CalToggle) {
    CalToggle[CalToggle["Open"] = 1] = "Open";
    CalToggle[CalToggle["CloseByDateSel"] = 2] = "CloseByDateSel";
    CalToggle[CalToggle["CloseByCalBtn"] = 3] = "CloseByCalBtn";
    CalToggle[CalToggle["CloseByOutClick"] = 4] = "CloseByOutClick";
    CalToggle[CalToggle["CloseByEsc"] = 5] = "CloseByEsc";
    CalToggle[CalToggle["CloseByApi"] = 6] = "CloseByApi";
})(CalToggle || (CalToggle = {}));
var Year;
(function (Year) {
    Year[Year["min"] = 1100] = "min";
    Year[Year["max"] = 9100] = "max";
})(Year || (Year = {}));
var InputFocusBlur;
(function (InputFocusBlur) {
    InputFocusBlur[InputFocusBlur["focus"] = 1] = "focus";
    InputFocusBlur[InputFocusBlur["blur"] = 2] = "blur";
})(InputFocusBlur || (InputFocusBlur = {}));
var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["enter"] = 13] = "enter";
    KeyCode[KeyCode["esc"] = 27] = "esc";
    KeyCode[KeyCode["space"] = 32] = "space";
})(KeyCode || (KeyCode = {}));
var MonthId;
(function (MonthId) {
    MonthId[MonthId["prev"] = 1] = "prev";
    MonthId[MonthId["curr"] = 2] = "curr";
    MonthId[MonthId["next"] = 3] = "next";
})(MonthId || (MonthId = {}));
var MM = "mm";
var MMM = "mmm";
var DD = "dd";
var YYYY = "yyyy";
var MyDatePicker = (function () {
    function MyDatePicker(elem, renderer, cdr, localeService, utilService) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.cdr = cdr;
        this.localeService = localeService;
        this.utilService = utilService;
        this.dateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFieldChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarViewChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calendarToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.inputFocusBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.showSelector = false;
        this.visibleMonth = { monthTxt: "", monthNbr: 0, year: 0 };
        this.selectedMonth = { monthTxt: "", monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.months = [];
        this.years = [];
        this.selectionDayTxt = "";
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.selectMonth = false;
        this.selectYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevYearsDisabled = false;
        this.nextYearsDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        // Default options
        this.opts = {
            dayLabels: {},
            monthLabels: {},
            dateFormat: "",
            showTodayBtn: true,
            todayBtnTxt: "",
            firstDayOfWeek: "",
            satHighlight: false,
            sunHighlight: true,
            highlightDates: [],
            markCurrentDay: true,
            markCurrentMonth: true,
            markCurrentYear: true,
            disableUntil: { year: 0, month: 0, day: 0 },
            disableSince: { year: 0, month: 0, day: 0 },
            disableDays: [],
            enableDays: [],
            markDates: [],
            markWeekends: {},
            disableDateRanges: [],
            disableWeekends: false,
            disableWeekdays: [],
            showWeekNumbers: false,
            height: "34px",
            width: "100%",
            selectionTxtFontSize: "14px",
            selectorHeight: "232px",
            selectorWidth: "252px",
            allowDeselectDate: false,
            inline: false,
            showClearDateBtn: true,
            showDecreaseDateBtn: false,
            showIncreaseDateBtn: false,
            alignSelectorRight: false,
            openSelectorTopOfInput: false,
            indicateInvalidDate: true,
            editableDateField: true,
            monthSelector: true,
            yearSelector: true,
            disableHeaderButtons: true,
            minYear: Year.min,
            maxYear: Year.max,
            componentDisabled: false,
            showSelectorArrow: true,
            showInputField: true,
            openSelectorOnInputClick: false,
            ariaLabelInputField: "Date input field",
            ariaLabelClearDate: "Clear Date",
            ariaLabelDecreaseDate: "Decrease Date",
            ariaLabelIncreaseDate: "Increase Date",
            ariaLabelOpenCalendar: "Open Calendar",
            ariaLabelPrevMonth: "Previous Month",
            ariaLabelNextMonth: "Next Month",
            ariaLabelPrevYear: "Previous Year",
            ariaLabelNextYear: "Next Year"
        };
        this.setLocaleOptions();
        renderer.listenGlobal("document", "click", function (event) {
            if (_this.showSelector && event.target && _this.elem.nativeElement !== event.target && !_this.elem.nativeElement.contains(event.target)) {
                _this.showSelector = false;
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (_this.opts.monthSelector || _this.opts.yearSelector) {
                _this.resetMonthYearSelect();
            }
        });
    }
    MyDatePicker.prototype.setLocaleOptions = function () {
        var _this = this;
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    MyDatePicker.prototype.setOptions = function () {
        var _this = this;
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
            });
        }
        if (this.opts.minYear < Year.min) {
            this.opts.minYear = Year.min;
        }
        if (this.opts.maxYear > Year.max) {
            this.opts.maxYear = Year.max;
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
    };
    MyDatePicker.prototype.getSelectorTopPosition = function () {
        if (this.opts.openSelectorTopOfInput) {
            return this.elem.nativeElement.children[0].offsetHeight + "px";
        }
    };
    MyDatePicker.prototype.resetMonthYearSelect = function () {
        this.selectMonth = false;
        this.selectYear = false;
    };
    MyDatePicker.prototype.onSelectMonthClicked = function (event) {
        event.stopPropagation();
        this.selectMonth = !this.selectMonth;
        this.selectYear = false;
        this.cdr.detectChanges();
        if (this.selectMonth) {
            var today = this.getToday();
            this.months.length = 0;
            for (var i = 1; i <= 12; i += 3) {
                var row = [];
                for (var j = i; j < i + 3; j++) {
                    var disabled = this.utilService.isMonthDisabledByDisableUntil({ year: this.visibleMonth.year, month: j, day: this.daysInMonth(j, this.visibleMonth.year) }, this.opts.disableUntil)
                        || this.utilService.isMonthDisabledByDisableSince({ year: this.visibleMonth.year, month: j, day: 1 }, this.opts.disableSince);
                    row.push({ nbr: j, name: this.opts.monthLabels[j], currMonth: j === today.month && this.visibleMonth.year === today.year, selected: j === this.visibleMonth.monthNbr, disabled: disabled });
                }
                this.months.push(row);
            }
        }
    };
    MyDatePicker.prototype.onMonthCellClicked = function (cell) {
        var mc = cell.nbr !== this.visibleMonth.monthNbr;
        this.visibleMonth = { monthTxt: this.monthText(cell.nbr), monthNbr: cell.nbr, year: this.visibleMonth.year };
        this.generateCalendar(cell.nbr, this.visibleMonth.year, mc);
        this.selectMonth = false;
        this.selectorEl.nativeElement.focus();
    };
    MyDatePicker.prototype.onMonthCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onMonthCellClicked(cell);
        }
    };
    MyDatePicker.prototype.onSelectYearClicked = function (event) {
        event.stopPropagation();
        this.selectYear = !this.selectYear;
        this.selectMonth = false;
        this.cdr.detectChanges();
        if (this.selectYear) {
            this.generateYears(this.visibleMonth.year);
        }
    };
    MyDatePicker.prototype.onYearCellClicked = function (cell) {
        var yc = cell.year !== this.visibleMonth.year;
        this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: cell.year };
        this.generateCalendar(this.visibleMonth.monthNbr, cell.year, yc);
        this.selectYear = false;
        this.selectorEl.nativeElement.focus();
    };
    MyDatePicker.prototype.onYearCellKeyDown = function (event, cell) {
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onYearCellClicked(cell);
        }
    };
    MyDatePicker.prototype.onPrevYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(year - 25);
    };
    MyDatePicker.prototype.onNextYears = function (event, year) {
        event.stopPropagation();
        this.generateYears(year + 25);
    };
    MyDatePicker.prototype.generateYears = function (year) {
        this.years.length = 0;
        var today = this.getToday();
        for (var i = year; i <= 20 + year; i += 5) {
            var row = [];
            for (var j = i; j < i + 5; j++) {
                var disabled = this.utilService.isMonthDisabledByDisableUntil({ year: j, month: this.visibleMonth.monthNbr, day: this.daysInMonth(this.visibleMonth.monthNbr, j) }, this.opts.disableUntil)
                    || this.utilService.isMonthDisabledByDisableSince({ year: j, month: this.visibleMonth.monthNbr, day: 1 }, this.opts.disableSince);
                var minMax = j < this.opts.minYear || j > this.opts.maxYear;
                row.push({ year: j, currYear: j === today.year, selected: j === this.visibleMonth.year, disabled: disabled || minMax });
            }
            this.years.push(row);
        }
        this.prevYearsDisabled = this.years[0][0].year <= this.opts.minYear || this.utilService.isMonthDisabledByDisableUntil({ year: this.years[0][0].year - 1, month: this.visibleMonth.monthNbr, day: this.daysInMonth(this.visibleMonth.monthNbr, this.years[0][0].year - 1) }, this.opts.disableUntil);
        this.nextYearsDisabled = this.years[4][4].year >= this.opts.maxYear || this.utilService.isMonthDisabledByDisableSince({ year: this.years[4][4].year + 1, month: this.visibleMonth.monthNbr, day: 1 }, this.opts.disableSince);
    };
    MyDatePicker.prototype.onUserDateInput = function (value) {
        if (value.length === 0) {
            if (this.utilService.isInitializedDate(this.selectedDate)) {
                this.clearDate();
            }
            else {
                this.invalidInputFieldChanged(value);
            }
        }
        else {
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (date.day !== 0 && date.month !== 0 && date.year !== 0) {
                this.selectDate(date, CalToggle.CloseByDateSel);
            }
            else {
                this.invalidInputFieldChanged(value);
            }
        }
    };
    MyDatePicker.prototype.onFocusInput = function (event) {
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
    };
    MyDatePicker.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    MyDatePicker.prototype.onCloseSelector = function (event) {
        if (event.keyCode === KeyCode.esc && this.showSelector && !this.opts.inline) {
            this.calendarToggle.emit(CalToggle.CloseByEsc);
            this.showSelector = false;
        }
    };
    MyDatePicker.prototype.invalidInputFieldChanged = function (value) {
        this.invalidDate = value.length > 0;
        this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: false });
        this.onChangeCb(null);
        this.onTouchedCb();
    };
    MyDatePicker.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    MyDatePicker.prototype.parseOptions = function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        var weekDays = this.utilService.getWeekDays();
        this.isTodayDisabled();
        this.dayIdx = weekDays.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var idx = this.dayIdx;
            for (var i = 0; i < weekDays.length; i++) {
                this.weekDays.push(this.opts.dayLabels[weekDays[idx]]);
                idx = weekDays[idx] === "sa" ? 0 : idx + 1;
            }
        }
    };
    MyDatePicker.prototype.writeValue = function (value) {
        if (value && (value["date"] || value["jsdate"] || value["formatted"])) {
            this.selectedDate = value["date"] ? this.parseSelectedDate(value["date"]) : value["jsdate"] ? this.parseSelectedDate(this.jsDateToMyDate(value["jsdate"])) : this.parseSelectedDate(value["formatted"]);
            var cvc = this.visibleMonth.year !== this.selectedDate.year || this.visibleMonth.monthNbr !== this.selectedDate.month;
            if (cvc) {
                this.visibleMonth = { monthTxt: this.opts.monthLabels[this.selectedDate.month], monthNbr: this.selectedDate.month, year: this.selectedDate.year };
                this.generateCalendar(this.selectedDate.month, this.selectedDate.year, cvc);
            }
            if (!this.opts.inline) {
                this.updateDateValue(this.selectedDate, false);
            }
        }
        else if (value === null || value === "") {
            if (!this.opts.inline) {
                this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
            }
            else {
                this.selectedDate = { year: 0, month: 0, day: 0 };
            }
        }
    };
    MyDatePicker.prototype.setDisabledState = function (disabled) {
        this.opts.componentDisabled = disabled;
    };
    MyDatePicker.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    MyDatePicker.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    MyDatePicker.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty("selector")) {
            var s = changes["selector"].currentValue;
            if (typeof s === "object") {
                if (s.open) {
                    this.showSelector = true;
                    this.openSelector(CalToggle.Open);
                }
                else {
                    this.showSelector = false;
                    this.closeSelector(CalToggle.CloseByApi);
                }
            }
            else if (s > 0) {
                this.openBtnClicked();
            }
        }
        if (changes.hasOwnProperty("placeholder")) {
            this.placeholder = changes["placeholder"].currentValue;
        }
        if (changes.hasOwnProperty("locale")) {
            this.locale = changes["locale"].currentValue;
        }
        if (changes.hasOwnProperty("disabled")) {
            this.disabled = changes["disabled"].currentValue;
        }
        if (changes.hasOwnProperty("options")) {
            this.options = changes["options"].currentValue;
        }
        this.weekDays.length = 0;
        this.parseOptions();
        var dmChange = false;
        if (changes.hasOwnProperty("defaultMonth")) {
            var dm = changes["defaultMonth"].currentValue;
            if (typeof dm === "object") {
                dm = dm.defMonth;
            }
            if (dm !== null && dm !== undefined && dm !== "") {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: "", monthNbr: 0, year: 0 };
            }
            dmChange = true;
        }
        if (changes.hasOwnProperty("selDate")) {
            var sd = changes["selDate"];
            if (sd.currentValue !== null && sd.currentValue !== undefined && sd.currentValue !== "" && Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                });
            }
            else {
                // Do not clear on init
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.visibleMonth.year === 0 && this.visibleMonth.monthNbr === 0 || dmChange) {
            this.setVisibleMonth();
        }
        else {
            this.visibleMonth.monthTxt = this.opts.monthLabels[this.visibleMonth.monthNbr];
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    MyDatePicker.prototype.removeBtnClicked = function () {
        // Remove date button clicked
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.showSelector = false;
    };
    MyDatePicker.prototype.onDecreaseBtnClicked = function () {
        // Decrease date button clicked
        this.decreaseIncreaseDate(true);
    };
    MyDatePicker.prototype.onIncreaseBtnClicked = function () {
        // Increase date button clicked
        this.decreaseIncreaseDate(false);
    };
    MyDatePicker.prototype.openBtnClicked = function () {
        // Open selector button clicked
        this.showSelector = !this.showSelector;
        this.cdr.detectChanges();
        if (this.showSelector) {
            this.openSelector(CalToggle.Open);
        }
        else {
            this.closeSelector(CalToggle.CloseByCalBtn);
        }
    };
    MyDatePicker.prototype.openSelector = function (reason) {
        this.setVisibleMonth();
        this.calendarToggle.emit(reason);
    };
    MyDatePicker.prototype.closeSelector = function (reason) {
        this.calendarToggle.emit(reason);
    };
    MyDatePicker.prototype.setVisibleMonth = function () {
        // Sets visible month of calendar
        var y = 0, m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        // Create current month
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onPrevMonth = function () {
        // Previous month from calendar
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onNextMonth = function () {
        // Next month from calendar
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var y = d.getFullYear();
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    MyDatePicker.prototype.onPrevYear = function () {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MyDatePicker.prototype.onNextYear = function () {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    MyDatePicker.prototype.onTodayClicked = function () {
        // Today button clicked
        var today = this.getToday();
        this.selectDate(today, CalToggle.CloseByDateSel);
        if (this.opts.inline && today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    MyDatePicker.prototype.onCellClicked = function (cell) {
        // Cell clicked on the calendar
        if (cell.cmo === this.prevMonthId) {
            // Previous month day
            this.onPrevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            // Current month day - if date is already selected clear it
            if (this.opts.allowDeselectDate && this.utilService.isSameDate(cell.dateObj, this.selectedDate)) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj, CalToggle.CloseByDateSel);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            // Next month day
            this.onNextMonth();
        }
        this.resetMonthYearSelect();
    };
    MyDatePicker.prototype.onCellKeyDown = function (event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.onCellClicked(cell);
        }
    };
    MyDatePicker.prototype.clearDate = function () {
        // Clears the date and notifies parent using callbacks and value accessor
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: "", epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.setFocusToInputBox();
    };
    MyDatePicker.prototype.decreaseIncreaseDate = function (decrease) {
        // Decreases or increases the date depending on the parameter
        var date = this.selectedDate;
        if (this.utilService.isInitializedDate(date)) {
            var d = this.getDate(date.year, date.month, date.day);
            d.setDate(decrease ? d.getDate() - 1 : d.getDate() + 1);
            date = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        }
        else {
            date = this.getToday();
        }
        this.selectDate(date, CalToggle.CloseByCalBtn);
    };
    MyDatePicker.prototype.selectDate = function (date, closeReason) {
        // Date selected, notifies parent using callbacks and value accessor
        var dateModel = this.getDateModel(date);
        this.dateChanged.emit(dateModel);
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(closeReason);
        }
        this.showSelector = false;
        this.setFocusToInputBox();
    };
    MyDatePicker.prototype.setFocusToInputBox = function () {
        var _this = this;
        if (!this.opts.inline) {
            setTimeout(function () {
                _this.inputBoxEl.nativeElement.focus();
            }, 10);
        }
    };
    MyDatePicker.prototype.updateDateValue = function (date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.selectionDayTxt = clear ? "" : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    };
    MyDatePicker.prototype.getDateModel = function (date) {
        // Creates a date model object from the given parameter
        return { date: date, jsdate: this.getDate(date.year, date.month, date.day), formatted: this.formatDate(date), epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0) };
    };
    MyDatePicker.prototype.preZero = function (val) {
        // Prepend zero if smaller than 10
        return parseInt(val) < 10 ? "0" + val : val;
    };
    MyDatePicker.prototype.formatDate = function (val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        var formatted = this.opts.dateFormat.replace(YYYY, val.year).replace(DD, this.preZero(val.day));
        return this.opts.dateFormat.indexOf(MMM) !== -1 ? formatted.replace(MMM, this.monthText(val.month)) : formatted.replace(MM, this.preZero(val.month));
    };
    MyDatePicker.prototype.monthText = function (m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    };
    MyDatePicker.prototype.monthStartIdx = function (y, m) {
        // Month start index
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    MyDatePicker.prototype.daysInMonth = function (m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    };
    MyDatePicker.prototype.daysInPrevMonth = function (m, y) {
        // Return number of days of the previous month
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    MyDatePicker.prototype.isCurrDay = function (d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    MyDatePicker.prototype.getToday = function () {
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MyDatePicker.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    MyDatePicker.prototype.getWeekday = function (date) {
        // Get weekday: su, mo, tu, we ...
        var weekDays = this.utilService.getWeekDays();
        return weekDays[this.utilService.getDayNumber(date)];
    };
    MyDatePicker.prototype.getDate = function (year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    MyDatePicker.prototype.sundayIdx = function () {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    MyDatePicker.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var today = this.getToday();
        var monthStart = this.monthStartIdx(y, m);
        var dInThisM = this.daysInMonth(m, y);
        var dInPrevM = this.daysInPrevMonth(m, y);
        var dayNbr = 1;
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            var week = [];
            if (i === 1) {
                // First week
                var pm = dInPrevM - monthStart + 1;
                // Previous month
                for (var j = pm; j <= dInPrevM; j++) {
                    var date = { year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: j };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                }
                cmo = this.currMonthId;
                // Current month
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    var date = { year: cmo === this.nextMonthId && m === 12 ? y + 1 : y, month: cmo === this.currMonthId ? m : cmo === this.nextMonthId && m < 12 ? m + 1 : 1, day: dayNbr };
                    week.push({ dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        disabled: this.utilService.isDisabledDay(date, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableWeekdays, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                        highlight: this.utilService.isHighlightedDate(date, this.opts.sunHighlight, this.opts.satHighlight, this.opts.highlightDates) });
                    dayNbr++;
                }
            }
            var weekNbr = this.opts.showWeekNumbers && this.opts.firstDayOfWeek === "mo" ? this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged.emit({ year: y, month: m, first: { number: 1, weekday: this.getWeekday({ year: y, month: m, day: 1 }) }, last: { number: dInThisM, weekday: this.getWeekday({ year: y, month: m, day: dInThisM }) } });
        }
    };
    MyDatePicker.prototype.parseSelectedDate = function (selDate) {
        // Parse date value - it can be string or IMyDate object
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === "string") {
            var sd = selDate;
            var df = this.opts.dateFormat;
            date.month = df.indexOf(MMM) !== -1
                ? this.utilService.parseDatePartMonthName(df, sd, MMM, this.opts.monthLabels)
                : this.utilService.parseDatePartNumber(df, sd, MM);
            if (df.indexOf(MMM) !== -1 && this.opts.monthLabels[date.month]) {
                df = this.utilService.changeDateFormat(df, this.opts.monthLabels[date.month].length);
            }
            date.day = this.utilService.parseDatePartNumber(df, sd, DD);
            date.year = this.utilService.parseDatePartNumber(df, sd, YYYY);
        }
        else if (typeof selDate === "object") {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    MyDatePicker.prototype.jsDateToMyDate = function (date) {
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    MyDatePicker.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    MyDatePicker.prototype.setHeaderBtnDisabledState = function (m, y) {
        var dpm = false;
        var dpy = false;
        var dnm = false;
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({ year: m === 1 ? y - 1 : y, month: m === 1 ? 12 : m - 1, day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y) }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({ year: y - 1, month: m, day: this.daysInMonth(m, y - 1) }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({ year: m === 12 ? y + 1 : y, month: m === 12 ? 1 : m + 1, day: 1 }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__interfaces_index__["IMyOptions"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__interfaces_index__["IMyOptions"]) === 'function' && _a) || Object)
    ], MyDatePicker.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MyDatePicker.prototype, "locale", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MyDatePicker.prototype, "defaultMonth", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MyDatePicker.prototype, "selDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MyDatePicker.prototype, "placeholder", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MyDatePicker.prototype, "selector", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], MyDatePicker.prototype, "disabled", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _b) || Object)
    ], MyDatePicker.prototype, "dateChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _c) || Object)
    ], MyDatePicker.prototype, "inputFieldChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], MyDatePicker.prototype, "calendarViewChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], MyDatePicker.prototype, "calendarToggle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], MyDatePicker.prototype, "inputFocusBlur", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("selectorEl"), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _g) || Object)
    ], MyDatePicker.prototype, "selectorEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("inputBoxEl"), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _h) || Object)
    ], MyDatePicker.prototype, "inputBoxEl", void 0);
    MyDatePicker = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "my-date-picker",
            exportAs: "mydatepicker",
            styles: [myDpStyles],
            template: myDpTpl,
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__["a" /* LocaleService */], __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__["a" /* UtilService */], MYDP_VALUE_ACCESSOR],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__["a" /* LocaleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__["a" /* LocaleService */]) === 'function' && _m) || Object, (typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__["a" /* UtilService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__["a" /* UtilService */]) === 'function' && _o) || Object])
    ], MyDatePicker);
    return MyDatePicker;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-picker.component.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MyDatePickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyDatePickerModule = (function () {
    function MyDatePickerModule() {
    }
    MyDatePickerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__["a" /* MyDatePicker */], __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__["a" /* FocusDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__["a" /* MyDatePicker */], __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__["a" /* FocusDirective */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MyDatePickerModule);
    return MyDatePickerModule;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-picker.module.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LocaleService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocaleService = (function () {
    function LocaleService() {
        this.locales = {
            "en": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "mm/dd/yyyy",
                todayBtnTxt: "Today",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "he": {
                dayLabels: { su: "רא", mo: "שנ", tu: "של", we: "רב", th: "חמ", fr: "שי", sa: "שב" },
                monthLabels: { 1: "ינו", 2: "פבר", 3: "מרץ", 4: "אפר", 5: "מאי", 6: "יונ", 7: "יול", 8: "אוג", 9: "ספט", 10: "אוק", 11: "נוב", 12: "דצמ" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "היום",
                firstDayOfWeek: "su",
                sunHighlight: false
            },
            "ja": {
                dayLabels: { su: "日", mo: "月", tu: "火", we: "水", th: "木", fr: "金", sa: "土" },
                monthLabels: { 1: "１月", 2: "２月", 3: "３月", 4: "４月", 5: "５月", 6: "６月", 7: "７月", 8: "８月", 9: "９月", 10: "１０月", 11: "１１月", 12: "１２月" },
                dateFormat: "yyyy.mm.dd",
                todayBtnTxt: "今日",
                sunHighlight: false
            },
            "fr": {
                dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
                monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Aujourd'hui",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "fi": {
                dayLabels: { su: "Su", mo: "Ma", tu: "Ti", we: "Ke", th: "To", fr: "Pe", sa: "La" },
                monthLabels: { 1: "Tam", 2: "Hel", 3: "Maa", 4: "Huh", 5: "Tou", 6: "Kes", 7: "Hei", 8: "Elo", 9: "Syy", 10: "Lok", 11: "Mar", 12: "Jou" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Tänään",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "es": {
                dayLabels: { su: "Do", mo: "Lu", tu: "Ma", we: "Mi", th: "Ju", fr: "Vi", sa: "Sa" },
                monthLabels: { 1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Hoy",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "hu": {
                dayLabels: { su: "Vas", mo: "Hét", tu: "Kedd", we: "Sze", th: "Csü", fr: "Pén", sa: "Szo" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Már", 4: "Ápr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Szep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Ma",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "sv": {
                dayLabels: { su: "Sön", mo: "Mån", tu: "Tis", we: "Ons", th: "Tor", fr: "Fre", sa: "Lör" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Idag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "nl": {
                dayLabels: { su: "Zon", mo: "Maa", tu: "Din", we: "Woe", th: "Don", fr: "Vri", sa: "Zat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "Vandaag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "ru": {
                dayLabels: { su: "Вс", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Янв", 2: "Фев", 3: "Март", 4: "Апр", 5: "Май", 6: "Июнь", 7: "Июль", 8: "Авг", 9: "Сент", 10: "Окт", 11: "Ноя", 12: "Дек" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Сегодня",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "uk": {
                dayLabels: { su: "Нд", mo: "Пн", tu: "Вт", we: "Ср", th: "Чт", fr: "Пт", sa: "Сб" },
                monthLabels: { 1: "Січ", 2: "Лют", 3: "Бер", 4: "Кві", 5: "Тра", 6: "Чер", 7: "Лип", 8: "Сер", 9: "Вер", 10: "Жов", 11: "Лис", 12: "Гру" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Сьогодні",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "no": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "I dag",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "tr": {
                dayLabels: { su: "Paz", mo: "Pzt", tu: "Sal", we: "Çar", th: "Per", fr: "Cum", sa: "Cmt" },
                monthLabels: { 1: "Oca", 2: "Şub", 3: "Mar", 4: "Nis", 5: "May", 6: "Haz", 7: "Tem", 8: "Ağu", 9: "Eyl", 10: "Eki", 11: "Kas", 12: "Ara" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Bugün",
                firstDayOfWeek: "mo",
                sunHighlight: false
            },
            "pt-br": {
                dayLabels: { su: "Dom", mo: "Seg", tu: "Ter", we: "Qua", th: "Qui", fr: "Sex", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Fev", 3: "Mar", 4: "Abr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Ago", 9: "Set", 10: "Out", 11: "Nov", 12: "Dez" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Hoje",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "de": {
                dayLabels: { su: "So", mo: "Mo", tu: "Di", we: "Mi", th: "Do", fr: "Fr", sa: "Sa" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mär", 4: "Apr", 5: "Mai", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dez" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Heute",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Oggi",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "it-ch": {
                dayLabels: { su: "Dom", mo: "Lun", tu: "Mar", we: "Mer", th: "Gio", fr: "Ven", sa: "Sab" },
                monthLabels: { 1: "Gen", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mag", 6: "Giu", 7: "Lug", 8: "Ago", 9: "Set", 10: "Ott", 11: "Nov", 12: "Dic" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Oggi",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "pl": {
                dayLabels: { su: "Nie", mo: "Pon", tu: "Wto", we: "Śro", th: "Czw", fr: "Pią", sa: "Sob" },
                monthLabels: { 1: "Sty", 2: "Lut", 3: "Mar", 4: "Kwi", 5: "Maj", 6: "Cze", 7: "Lip", 8: "Sie", 9: "Wrz", 10: "Paź", 11: "Lis", 12: "Gru" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Dzisiaj",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "my": {
                dayLabels: { su: "တနင်္ဂနွေ", mo: "တနင်္လာ", tu: "အင်္ဂါ", we: "ဗုဒ္ဓဟူး", th: "ကြသပတေး", fr: "သောကြာ", sa: "စနေ" },
                monthLabels: { 1: "ဇန်နဝါရီ", 2: "ဖေဖော်ဝါရီ", 3: "မတ်", 4: "ဧပြီ", 5: "မေ", 6: "ဇွန်", 7: "ဇူလိုင်", 8: "ဩဂုတ်", 9: "စက်တင်ဘာ", 10: "အောက်တိုဘာ", 11: "နိုဝင်ဘာ", 12: "ဒီဇင်ဘာ" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "ယနေ့",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sk": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ut", we: "St", th: "Št", fr: "Pi", sa: "So" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Máj", 6: "Jún", 7: "Júl", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Dnes",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "sl": {
                dayLabels: { su: "Ned", mo: "Pon", tu: "Tor", we: "Sre", th: "Čet", fr: "Pet", sa: "Sob" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Avg", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd. mm. yyyy",
                todayBtnTxt: "Danes",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "zh-cn": {
                dayLabels: { su: "日", mo: "一", tu: "二", we: "三", th: "四", fr: "五", sa: "六" },
                monthLabels: { 1: "1月", 2: "2月", 3: "3月", 4: "4月", 5: "5月", 6: "6月", 7: "7月", 8: "8月", 9: "9月", 10: "10月", 11: "11月", 12: "12月" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "今天",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ro": {
                dayLabels: { su: "du", mo: "lu", tu: "ma", we: "mi", th: "jo", fr: "vi", sa: "sa" },
                monthLabels: { 1: "ian", 2: "feb", 3: "mart", 4: "apr", 5: "mai", 6: "iun", 7: "iul", 8: "aug", 9: "sept", 10: "oct", 11: "nov", 12: "dec" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Astăzi",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "ca": {
                dayLabels: { su: "dg", mo: "dl", tu: "dt", we: "dc", th: "dj", fr: "dv", sa: "ds" },
                monthLabels: { 1: "Gen", 2: "Febr", 3: "Març", 4: "Abr", 5: "Maig", 6: "Juny", 7: "Jul", 8: "Ag", 9: "Set", 10: "Oct", 11: "Nov", 12: "Des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Avui",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "id": {
                dayLabels: { su: "Min", mo: "Sen", tu: "Sel", we: "Rab", th: "Kam", fr: "Jum", sa: "Sab" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Mei", 6: "Jun", 7: "Jul", 8: "Ags", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Des" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "Hari ini",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "en-au": {
                dayLabels: { su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Today",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "am-et": {
                dayLabels: { su: "እሑድ", mo: "ሰኞ", tu: "ማክሰኞ", we: "ረቡዕ", th: "ሐሙስ", fr: "ዓርብ", sa: "ቅዳሜ" },
                monthLabels: { 1: "ጃንዩ", 2: "ፌብሩ", 3: "ማርች", 4: "ኤፕረ", 5: "ሜይ", 6: "ጁን", 7: "ጁላይ", 8: "ኦገስ", 9: "ሴፕቴ", 10: "ኦክተ", 11: "ኖቬም", 12: "ዲሴም" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "ዛሬ",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "cs": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Út", we: "St", th: "Čt", fr: "Pá", sa: "So" },
                monthLabels: { 1: "Led", 2: "Úno", 3: "Bře", 4: "Dub", 5: "Kvě", 6: "Čvn", 7: "Čvc", 8: "Srp", 9: "Zář", 10: "Říj", 11: "Lis", 12: "Pro" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Dnes",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "el": {
                dayLabels: { su: "Κυρ", mo: "Δευ", tu: "Τρι", we: "Τετ", th: "Πεμ", fr: "Παρ", sa: "Σαβ" },
                monthLabels: { 1: "Ιαν", 2: "Φεβ", 3: "Μαρ", 4: "Απρ", 5: "Μαι", 6: "Ιουν", 7: "Ιουλ", 8: "Αυγ", 9: "Σεπ", 10: "Οκτ", 11: "Νοε", 12: "Δεκ" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Σήμερα",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "kk": {
                dayLabels: { su: "Жк", mo: "Дс", tu: "Сс", we: "Ср", th: "Бс", fr: "Жм", sa: "Сб" },
                monthLabels: { 1: "Қаң", 2: "Ақп", 3: "Нау", 4: "Сәу", 5: "Мам", 6: "Мау", 7: "Шіл", 8: "Там", 9: "Қырк", 10: "Қаз", 11: "Қар", 12: "Желт" },
                dateFormat: "dd-mmm-yyyy",
                todayBtnTxt: "Бүгін",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "th": {
                dayLabels: { su: "อา", mo: "จ", tu: "อ", we: "พ", th: "พฤ", fr: "ศ", sa: "ส" },
                monthLabels: { 1: "ม.ค", 2: "ก.พ.", 3: "มี.ค.", 4: "เม.ย.", 5: "พ.ค.", 6: "มิ.ย.", 7: "ก.ค.", 8: "ส.ค.", 9: "ก.ย.", 10: "ต.ค.", 11: "พ.ย.", 12: "ธ.ค." },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "วันนี้",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ko-kr": {
                dayLabels: { su: "일", mo: "월", tu: "화", we: "수", th: "목", fr: "금", sa: "토" },
                monthLabels: { 1: "1월", 2: "2월", 3: "3월", 4: "4월", 5: "5월", 6: "6월", 7: "7월", 8: "8월", 9: "9월", 10: "10월", 11: "11월", 12: "12월" },
                dateFormat: "yyyy mm dd",
                todayBtnTxt: "오늘",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "da": {
                dayLabels: { su: "Søn", mo: "Man", tu: "Tir", we: "Ons", th: "Tor", fr: "Fre", sa: "Lør" },
                monthLabels: { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "Maj", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Okt", 11: "Nov", 12: "Dec" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "I dag",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "lt": {
                dayLabels: { su: "Sk", mo: "Pr", tu: "An", we: "Tr", th: "Kt", fr: "Pn", sa: "Št" },
                monthLabels: { 1: "Saus.", 2: "Vas.", 3: "Kov.", 4: "Bal.", 5: "Geg.", 6: "Birž.", 7: "Liep.", 8: "Rugp.", 9: "Rugs.", 10: "Sapl.", 11: "Lapkr.", 12: "Gruod." },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "Šianien",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "vi": {
                dayLabels: { su: "CN", mo: "T2", tu: "T3", we: "T4", th: "T5", fr: "T6", sa: "T7" },
                monthLabels: { 1: "THG 1", 2: "THG 2", 3: "THG 3", 4: "THG 4", 5: "THG 5", 6: "THG 6", 7: "THG 7", 8: "THG 8", 9: "THG 9", 10: "THG 10", 11: "THG 11", 12: "THG 12" },
                dateFormat: "dd/mm/yyyy",
                todayBtnTxt: "Hôm nay",
                firstDayOfWeek: "mo",
                sunHighlight: true,
            },
            "bn": {
                dayLabels: { su: "রবি", mo: "সোম", tu: "মঙ্গল", we: "বুধ", th: "বৃহঃ", fr: "শুক্র", sa: "শনি" },
                monthLabels: { 1: "জানু", 2: "ফেব্রু", 3: "মার্চ", 4: "এপ্রিল", 5: "মে", 6: "জুন", 7: "জুলাই", 8: "আগস্ট", 9: "সেপ্টে", 10: "অক্টো", 11: "নভে", 12: "ডিসে" },
                dateFormat: "dd-mm-yyyy",
                todayBtnTxt: "আজ",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "bg": {
                dayLabels: { su: "нд", mo: "пн", tu: "вт", we: "ср", th: "чт", fr: "пт", sa: "сб" },
                monthLabels: { 1: "яну.", 2: "фев.", 3: "март", 4: "апр.", 5: "май", 6: "юни", 7: "юли", 8: "авг.", 9: "сеп.", 10: "окт.", 11: "ное.", 12: "дек." },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "днес",
                firstDayOfWeek: "mo",
                sunHighlight: true
            },
            "hr": {
                dayLabels: { su: "Ne", mo: "Po", tu: "Ul", we: "Sr", th: "Če", fr: "Pe", sa: "Su" },
                monthLabels: { 1: "Sij", 2: "Vel", 3: "Ožu", 4: "Tra", 5: "Svi", 6: "Lip", 7: "Srp", 8: "Kol", 9: "Ruj", 10: "Lis", 11: "Stu", 12: "Pro" },
                dateFormat: "dd.mm.yyyy.",
                todayBtnTxt: "danas",
                firstDayOfWeek: "su",
                sunHighlight: true
            },
            "ar": {
                dayLabels: { su: "الأحد", mo: "الاثنين", tu: "الثلاثاء", we: "الاربعاء", th: "الخميس", fr: "الجمعة", sa: "السبت" },
                monthLabels: { 1: "يناير", 2: "فبراير", 3: "مارس", 4: "ابريل", 5: "مايو", 6: "يونيو", 7: "يوليو", 8: "أغسطس", 9: "سبتمبر", 10: "أكتوبر", 11: "نوفمبر", 12: "ديسمبر" },
                dateFormat: "yyyy-mm-dd",
                todayBtnTxt: "اليوم",
                firstDayOfWeek: "sa",
                sunHighlight: true
            },
            "is": {
                dayLabels: { su: "sun", mo: "mán", tu: "þri", we: "mið", th: "fim", fr: "fös", sa: "lau" },
                monthLabels: { 1: "jan", 2: "feb", 3: "mar", 4: "apr", 5: "maí", 6: "jún", 7: "júl", 8: "ágú", 9: "sep", 10: "okt", 11: "nóv", 12: "des" },
                dateFormat: "dd.mm.yyyy",
                todayBtnTxt: "Í dag",
                firstDayOfWeek: "su",
                sunHighlight: true
            }
        };
    }
    LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales["en"];
    };
    LocaleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], LocaleService);
    return LocaleService;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-picker.locale.service.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UtilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var M = "m";
var MM = "mm";
var MMM = "mmm";
var DD = "dd";
var YYYY = "yyyy";
var UtilService = (function () {
    function UtilService() {
        this.weekDays = ["su", "mo", "tu", "we", "th", "fr", "sa"];
    }
    UtilService.prototype.isDateValid = function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, monthLabels, enableDays) {
        var returnDate = { day: 0, month: 0, year: 0 };
        var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var isMonthStr = dateFormat.indexOf(MMM) !== -1;
        var separators = this.getDateFormatSeparators(dateFormat);
        var month = isMonthStr ? this.parseDatePartMonthName(dateFormat, dateStr, MMM, monthLabels) : this.parseDatePartNumber(dateFormat, dateStr, MM);
        if (isMonthStr && monthLabels[month]) {
            dateFormat = this.changeDateFormat(dateFormat, monthLabels[month].length);
        }
        if (dateStr.length !== dateFormat.length) {
            return returnDate;
        }
        if (dateFormat.indexOf(separators[0]) !== dateStr.indexOf(separators[0]) || dateFormat.lastIndexOf(separators[1]) !== dateStr.lastIndexOf(separators[1])) {
            return returnDate;
        }
        var day = this.parseDatePartNumber(dateFormat, dateStr, DD);
        var year = this.parseDatePartNumber(dateFormat, dateStr, YYYY);
        if (month !== -1 && day !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            var date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    };
    UtilService.prototype.getDateFormatSeparators = function (dateFormat) {
        return dateFormat.match(/[^(dmy)]{1,}/g);
    };
    UtilService.prototype.changeDateFormat = function (dateFormat, len) {
        var mp = "";
        for (var i = 0; i < len; i++) {
            mp += M;
        }
        return dateFormat.replace(MMM, mp);
    };
    UtilService.prototype.isMonthLabelValid = function (monthLabel, monthLabels) {
        for (var key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    UtilService.prototype.isYearLabelValid = function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    UtilService.prototype.parseDatePartNumber = function (dateFormat, dateString, datePart) {
        var pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            var value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value);
        }
        return -1;
    };
    UtilService.prototype.parseDatePartMonthName = function (dateFormat, dateString, datePart, monthLabels) {
        var monthLabel = "";
        var start = dateFormat.indexOf(datePart);
        if (dateFormat.substr(dateFormat.length - 3) === MMM) {
            monthLabel = dateString.substring(start);
        }
        else {
            var end = dateString.indexOf(dateFormat.charAt(start + datePart.length), start);
            monthLabel = dateString.substring(start, end);
        }
        return this.isMonthLabelValid(monthLabel, monthLabels);
    };
    UtilService.prototype.getDatePartIndex = function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    UtilService.prototype.parseDefaultMonth = function (monthString) {
        var month = { monthTxt: "", monthNbr: 0, year: 0 };
        if (monthString !== "") {
            var split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0]) : parseInt(split[1]);
            month.year = split[0].length === 2 ? parseInt(split[1]) : parseInt(split[0]);
        }
        return month;
    };
    UtilService.prototype.isDisabledDay = function (date, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableWeekDays, disableDays, disableDateRanges, enableDays) {
        for (var _i = 0, enableDays_1 = enableDays; _i < enableDays_1.length; _i++) {
            var e = enableDays_1[_i];
            if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        var dn = this.getDayNumber(date);
        if (date.year < minYear && date.month === 12 || date.year > maxYear && date.month === 1) {
            return true;
        }
        var dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        if (disableWeekDays.length > 0) {
            for (var _a = 0, disableWeekDays_1 = disableWeekDays; _a < disableWeekDays_1.length; _a++) {
                var wd = disableWeekDays_1[_a];
                if (dn === this.getWeekdayIndex(wd)) {
                    return true;
                }
            }
        }
        for (var _b = 0, disableDays_1 = disableDays; _b < disableDays_1.length; _b++) {
            var d = disableDays_1[_b];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (var _c = 0, disableDateRanges_1 = disableDateRanges; _c < disableDateRanges_1.length; _c++) {
            var d = disableDateRanges_1[_c];
            if (this.isInitializedDate(d.begin) && this.isInitializedDate(d.end) && dateMs >= this.getTimeInMilliseconds(d.begin) && dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    };
    UtilService.prototype.isMarkedDate = function (date, markedDates, markWeekends) {
        for (var _i = 0, markedDates_1 = markedDates; _i < markedDates_1.length; _i++) {
            var md = markedDates_1[_i];
            for (var _a = 0, _b = md.dates; _a < _b.length; _a++) {
                var d = _b[_a];
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            var dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: "" };
    };
    UtilService.prototype.isHighlightedDate = function (date, sunHighlight, satHighlight, highlightDates) {
        var dayNbr = this.getDayNumber(date);
        if (sunHighlight && dayNbr === 0 || satHighlight && dayNbr === 6) {
            return true;
        }
        for (var _i = 0, highlightDates_1 = highlightDates; _i < highlightDates_1.length; _i++) {
            var d = highlightDates_1[_i];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        return false;
    };
    UtilService.prototype.getWeekNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    UtilService.prototype.isMonthDisabledByDisableUntil = function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    UtilService.prototype.isMonthDisabledByDisableSince = function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    UtilService.prototype.isInitializedDate = function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    UtilService.prototype.isSameDate = function (d1, d2) {
        return d1.year === d2.year && d1.month === d2.month && d1.day === d2.day;
    };
    UtilService.prototype.getTimeInMilliseconds = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    UtilService.prototype.getDayNumber = function (date) {
        var d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    UtilService.prototype.getWeekDays = function () {
        return this.weekDays;
    };
    UtilService.prototype.getWeekdayIndex = function (wd) {
        return this.weekDays.indexOf(wd);
    };
    UtilService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UtilService);
    return UtilService;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/my-date-picker.util.service.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(102);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(105);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/__2.1.1.workaround.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(angulartics2GoogleAnalytics, globalConstantsRepository) {
        this.globalConstantsRepository = globalConstantsRepository;
        this.globalConstants = globalConstantsRepository;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(84),
            styles: [__webpack_require__(81)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/app.component.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_mydatepicker_src_my_date_picker_my_date_picker_module__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_error_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dropdown_menu_dropdown_menu_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__date_picker_date_picker_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_pagination__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_pagination__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



























/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_24__dropdown_menu_dropdown_menu_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_25__date_picker_date_picker_component__["a" /* DatePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__["a" /* WorkshopFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__["a" /* WorkshopsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__["a" /* WorkshopDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__["a" /* PageRedirectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__error_error_component__["a" /* ErrorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__["a" /* PrivacyComponent */]
            ],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_7__node_modules_mydatepicker_src_my_date_picker_my_date_picker_module__["a" /* MyDatePickerModule */],
                /**
                 * using routes
                 */
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_23_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_23_angulartics2__["Angulartics2GoogleAnalytics"]]),
                __WEBPACK_IMPORTED_MODULE_23_angulartics2__["Angulartics2Module"].forChild(),
                __WEBPACK_IMPORTED_MODULE_26_ng2_pagination__["Ng2PaginationModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__["a" /* WorkshopRepository */], __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/app.node.module.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workshops_workshops_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workshop_details_workshop_details_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_redirect_page_redirect_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privacy_policy_privacy_policy_component__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */], pathMatch: 'full' },
    { path: 'workshops/:pageNumber', component: __WEBPACK_IMPORTED_MODULE_3__workshops_workshops_component__["a" /* WorkshopsComponent */] },
    { path: 'photography-workshop-details/:title/:id', component: __WEBPACK_IMPORTED_MODULE_4__workshop_details_workshop_details_component__["a" /* WorkshopDetailsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'page-redirect/:externalUrl', component: __WEBPACK_IMPORTED_MODULE_6__page_redirect_page_redirect_component__["a" /* PageRedirectComponent */], pathMatch: 'full' },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */], pathMatch: 'full' },
    { path: 'termsandconditions', component: __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */], pathMatch: 'full' },
    { path: 'privacypolicy', component: __WEBPACK_IMPORTED_MODULE_8__privacy_policy_privacy_policy_component__["a" /* PrivacyComponent */], pathMatch: 'full' },
    { path: 'workshops', redirectTo: '/workshops/1' },
    { path: '**', redirectTo: '/404' }
];
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/app.routes.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteComponent = (function () {
    function AutocompleteComponent(myElement, workshopRepo) {
        this.query = '';
        this.countries = [];
        this.filteredList = [];
        this.selectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.elementRef = myElement;
        this.workshopRepository = workshopRepo;
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.workshopRepository.getLocations().then(function (loc) {
            for (var i = 0; i < loc.length; i++) {
                _this.countries.push(loc[i].name);
            }
        });
    };
    AutocompleteComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.countries.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    AutocompleteComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    AutocompleteComponent.prototype.handleClick = function (event) {
        var clickedComponent = event.target;
        var inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
            }
            clickedComponent = clickedComponent.parentNode;
        } while (clickedComponent);
        if (!inside) {
            this.filteredList = [];
            this.selectionChanged.emit(this.query);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AutocompleteComponent.prototype, "selectionChanged", void 0);
    AutocompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'autocomplete',
            host: { '(document:click)': 'handleClick($event)' },
            template: __webpack_require__(85),
            styles: [__webpack_require__(67)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object])
    ], AutocompleteComponent);
    return AutocompleteComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/autocomplete.component.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DatePickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatePickerComponent = (function () {
    function DatePickerComponent(element) {
        this.element = element;
        this.fromDateLabel = "From date";
        this.toDateLabel = "To date";
        this.selectedFromChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectedToChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var currentDate = new Date();
        var previous = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() - 1);
        this.previousDate = { year: previous.getFullYear(), month: previous.getMonth(), day: previous.getDate() };
    }
    DatePickerComponent.prototype.ngOnInit = function () {
        this.fromDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            markCurrentDay: true,
            yearSelector: true,
            monthSelector: true,
            disableUntil: this.previousDate
        };
    };
    DatePickerComponent.prototype.onFromDateChanged = function (event) {
        console.log(event);
        var selectedDate = event.date;
        this.toDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            markCurrentDay: true,
            yearSelector: true,
            monthSelector: true,
            disableUntil: {
                year: selectedDate.year,
                month: selectedDate.month,
                day: selectedDate.day
            }
        };
        this.selectedFromChanged.emit(selectedDate);
    };
    DatePickerComponent.prototype.onToDateChanged = function (event) {
        console.log(event);
        var selectedDate = event.date;
        this.fromDatePickerOptions = {
            disableUntil: this.previousDate,
            disableSince: {
                year: selectedDate.year,
                month: selectedDate.month,
                day: selectedDate.day
            }
        };
        this.selectedToChanged.emit(selectedDate);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "selectedFromChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DatePickerComponent.prototype, "selectedToChanged", void 0);
    DatePickerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'date-picker',
            template: __webpack_require__(87),
            styles: [__webpack_require__(69)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DatePickerComponent);
    return DatePickerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/date-picker.component.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownComponent = (function () {
    function DropdownComponent(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.selectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isCollapsed = true;
        this.selfClick = false;
        this.panelOverlay = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (!that.isCollapsed && !that.selfClick && !_this.panelOverlay) {
                that.isCollapsed = true;
                _this.selectionChanged.emit("changed");
            }
            that.selfClick = false;
            _this.panelOverlay = false;
        });
    };
    DropdownComponent.prototype.toggleDropdown = function () {
        if (!this.panelOverlay) {
            this.isCollapsed = !this.isCollapsed;
        }
        this.selfClick = true;
    };
    DropdownComponent.prototype.overlay = function () {
        this.panelOverlay = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "dataModel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "buttonLabel", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], DropdownComponent.prototype, "optionName", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], DropdownComponent.prototype, "selectionChanged", void 0);
    DropdownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dropdown',
            template: __webpack_require__(88),
            styles: [__webpack_require__(70)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], DropdownComponent);
    return DropdownComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/dropdown-menu.component.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__(90),
            styles: [__webpack_require__(72)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/footer.component.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
        this.filtersDropdownToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hideFilter = true;
        this.hideNavbar = true;
    }
    NavComponent.prototype.toggleFilter = function () {
        this.hideFilter = !this.hideFilter;
        if (!this.hideNavbar) {
            this.hideNavbar = true;
        }
        this.filtersDropdownToggle.emit(this.hideFilter);
    };
    NavComponent.prototype.toggleNavbar = function () {
        this.hideNavbar = !this.hideNavbar;
        if (!this.hideFilter) {
            this.hideFilter = true;
            this.filtersDropdownToggle.emit(this.hideFilter);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], NavComponent.prototype, "filtersDropdownToggle", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], NavComponent.prototype, "showFilters", void 0);
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navi-bar',
            template: __webpack_require__(92),
            styles: [__webpack_require__(74)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/navbar.component.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return WorkshopFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkshopFilterComponent = (function () {
    function WorkshopFilterComponent(workshopRepository, a, globalConstantsRepository) {
        this.workshopRepository = workshopRepository;
        this.a = a;
        this.globalConstantsRepository = globalConstantsRepository;
        this.fromDateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toDateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.locationFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.categoryFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.minPriceFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.maxPriceFilterChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.applyFilters = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.angulartics2 = a;
        this.globalConstants = globalConstantsRepository;
        this.workshopRepo = workshopRepository;
        this.updateCategories();
        this.cityDropdownLabel = "Location";
        this.photographerDropdownLabel = "Photographer";
        this.categoryDropdownLabel = "Category";
        this.fromDateLabel = "From";
        this.toDateLabel = "To";
        this.minFromDate = new Date();
        this.showFilter = true;
    }
    WorkshopFilterComponent.prototype.updateCategories = function () {
        var _this = this;
        this.categories = [];
        this.workshopRepo.getWorkshopTypes().then(function (wTypes) {
            if (wTypes) {
                for (var i = 0; i < wTypes.length; i++) {
                    _this.categories.push({ label: wTypes[i], value: wTypes[i] });
                }
            }
        });
    };
    WorkshopFilterComponent.prototype.getFromDate = function (value) {
        this.fromDate = value;
        this.angulartics2.eventTrack.next({ action: 'FromDateFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        this.fromDateChanged.emit(this.fromDate);
    };
    WorkshopFilterComponent.prototype.getToDate = function (value) {
        this.toDate = value;
        this.angulartics2.eventTrack.next({ action: 'ToDateFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        this.toDateChanged.emit(this.toDate);
    };
    WorkshopFilterComponent.prototype.toggleFilter = function () {
        this.applyFilters.emit(true);
    };
    WorkshopFilterComponent.prototype.updateMinPrice = function (value) {
        this.angulartics2.eventTrack.next({ action: 'MinPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        this.minPriceFilterChanged.emit(value);
    };
    WorkshopFilterComponent.prototype.updateMaxPrice = function (value) {
        this.angulartics2.eventTrack.next({ action: 'MaxPriceFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        this.maxPriceFilterChanged.emit(value);
    };
    WorkshopFilterComponent.prototype.getSelectedFilters = function (inputName) {
        var selected = [];
        this.checkboxElements = document.querySelectorAll("input[name=" + inputName + "]:checked");
        for (var i = 0; i < this.checkboxElements.length; i++) {
            var x = this.checkboxElements[i];
            selected.push(x.value);
        }
        return selected;
    };
    WorkshopFilterComponent.prototype.updateLocation = function (value) {
        this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        var loc = this.workshopRepository.globalConstants.getLocationByLocationName(value);
        if (!loc) {
            this.locationFilterChanged.emit(null);
        }
        else {
            this.locationFilterChanged.emit(loc.id);
        }
    };
    WorkshopFilterComponent.prototype.updateCategoryList = function (value) {
        this.angulartics2.eventTrack.next({ action: 'CategoryFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        var categories = this.getSelectedFilters('categories');
        var workshopTypesList = "";
        var first = true;
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            if (!first)
                workshopTypesList = workshopTypesList + ",";
            first = false;
            workshopTypesList = workshopTypesList + category;
        }
        this.categoryFilterChanged.emit(workshopTypesList);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "fromDateChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "toDateChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "locationFilterChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "categoryFilterChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "minPriceFilterChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "maxPriceFilterChanged", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], WorkshopFilterComponent.prototype, "applyFilters", void 0);
    WorkshopFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshop-filter',
            template: __webpack_require__(97),
            styles: [__webpack_require__(78)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _c) || Object])
    ], WorkshopFilterComponent);
    return WorkshopFilterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/workshop-filter.component.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/environment.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
















//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/polyfills.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [
    'home', 'workshops', 'about', '404', '**', 'photography-workshop-details/', 'contact', 'page-redirect/', 'termsandconditions', 'privacypolicy'
];
//# sourceMappingURL=/Users/sugandhasingh/Documents/Pixels2/Pixels/src/server.routes.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\">\n    <div class=\"selectiongroup\" *ngIf=\"!opts.inline\">\n        <input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\"\n               placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\"\n               (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\">\n        <div class=\"selbtngroup\" [style.height]=\"opts.height\">\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\n                <span class=\"mydpicon icon-mydpleft\"></span>\n            </button>\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\n                <span class=\"mydpicon icon-mydpright\"></span>\n            </button>\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\n                <span class=\"mydpicon icon-mydpremove\"></span>\n            </button>\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\n                <span class=\"mydpicon icon-mydpcalendar\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\n        <table class=\"header\">\n            <tr>\n                <td>\n                    <div style=\"float:left\">\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div>\n                        <div class=\"headermonthtxt\">\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button>\n                        </div>\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div>\n                    </div>\n                </td>\n                <td>\n                    <button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\">\n                        <span class=\"mydpicon icon-mydptoday\"></span>\n                        <span>{{opts.todayBtnTxt}}</span>\n                    </button>\n                </td>\n                <td>\n                    <div style=\"float:right\">\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div>\n                        <div class=\"headeryeartxt\">\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button>\n                        </div>\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        <table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\">\n            <thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead>\n            <tbody>\n                <tr *ngFor=\"let w of dates\">\n                    <td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\n                    <td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\">\n                        <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\n                        <div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\">\n                            <span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <table class=\"monthtable\" *ngIf=\"selectMonth\">\n            <tbody>\n                <tr *ngFor=\"let mr of months\">\n                    <td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\">\n                        <div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        <table class=\"yeartable\" *ngIf=\"selectYear\">\n            <tbody>\n                <tr>\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button>\n                    </td>\n                </tr>\n                <tr *ngFor=\"let yr of years\">\n                    <td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\">\n                        <div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div>\n                    </td>\n                </tr>\n                <tr>\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n"

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = ".mydp {\n    line-height: 1.1;\n    display: inline-block;\n    position: relative;\n}\n\n.mydp * {\n    box-sizing: border-box;\n    font-family: Arial, Helvetica, sans-serif;\n    padding: 0;\n    margin: 0;\n}\n\n.mydp,\n.mydp .selectiongroup,\n.mydp .selection,\n.mydp .selector,\n.mydp .headertodaybtn {\n    border-radius: 4px;\n}\n\n.mydp .header {\n    border-radius: 4px 4px 0 0;\n}\n\n.mydp .caltable,\n.mydp .monthtable,\n.mydp .yeartable {\n    border-radius: 0 0 4px 4px;\n}\n\n.mydp .caltable tbody tr:nth-child(6) td:first-child,\n.mydp .monthtable tbody tr:nth-child(4) td:first-child,\n.mydp .yeartable tbody tr:nth-child(7) td:first-child {\n    border-bottom-left-radius: 4px;\n}\n\n.mydp .caltable tbody tr:nth-child(6) td:last-child,\n.mydp .monthtable tbody tr:nth-child(4) td:last-child,\n.mydp .yeartable tbody tr:nth-child(7) td:last-child {\n    border-bottom-right-radius: 4px;\n}\n\n.mydp .btnpicker {\n    border-radius: 0 4px 4px 0;\n}\n\n.mydp .btnleftborderradius {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.mydp .selector {\n    margin-top: 2px;\n    margin-left: -1px;\n    position: absolute;\n    padding: 0;\n    border: 1px solid #CCC;\n    z-index: 100;\n    -webkit-animation: selectorfadein 0.1s;\n            animation: selectorfadein 0.1s;\n}\n\n.mydp .selector:focus {\n    border: 1px solid #ADD8E6;\n    outline: none;\n}\n\n@-webkit-keyframes selectorfadein {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes selectorfadein {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n.mydp .selectorarrow {\n    background: #FAFAFA;\n    margin-top: 12px;\n    padding: 0;\n}\n\n.mydp .selectorarrow:after,\n.mydp .selectorarrow:before {\n    bottom: 100%;\n    border: solid transparent;\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n}\n\n.mydp .selectorarrow:after {\n    border-color: rgba(250, 250, 250, 0);\n    border-bottom-color: #FAFAFA;\n    border-width: 10px;\n    margin-left: -10px;\n}\n\n.mydp .selectorarrow:before {\n    border-color: rgba(204, 204, 204, 0);\n    border-bottom-color: #CCC;\n    border-width: 11px;\n    margin-left: -11px;\n}\n\n.mydp .selectorarrow:focus:before {\n    border-bottom-color: #ADD8E6;\n}\n\n.mydp .selectorarrowleft:after,\n.mydp .selectorarrowleft:before {\n    left: 24px;\n}\n\n.mydp .selectorarrowright:after,\n.mydp .selectorarrowright:before {\n    left: 86%;\n}\n\n.mydp .alignselectorright {\n    right: -1px;\n}\n\n.mydp .selectiongroup {\n    position: relative;\n    display: table;\n    border: none;\n    border-spacing: 0;\n    background-color: #FFF;\n}\n\n.mydp .selection {\n    width: 100%;\n    outline: none;\n    background-color: #FFF;\n    display: table-cell;\n    position: absolute;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 6px;\n    border: none;\n    color: #555;\n}\n\n.mydp .invaliddate {\n    background-color: #F1DEDE;\n}\n\n.mydp ::-ms-clear {\n    display: none;\n}\n\n.mydp .selbtngroup {\n    position: relative;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 1%;\n    display: table-cell;\n    font-size: 0;\n}\n\n.mydp .btnpicker,\n.mydp .btnclear,\n.mydp .btndecrease,\n.mydp .btnincrease {\n    height: 100%;\n    width: 26px;\n    border: none;\n    padding: 0;\n    outline: 0;\n    font: inherit;\n    -moz-user-select: none;\n}\n\n.mydp .btnleftborder {\n    border-left: 1px solid #CCC;\n}\n\n.mydp .btnpickerenabled,\n.mydp .btnclearenabled,\n.mydp .btndecreaseenabled,\n.mydp .btnincreaseenabled,\n.mydp .headertodaybtnenabled,\n.mydp .headerbtnenabled,\n.mydp .yearchangebtnenabled {\n    cursor: pointer;\n}\n\n.mydp .selectiondisabled,\n.mydp .btnpickerdisabled,\n.mydp .btncleardisabled,\n.mydp .btndecreasedisabled,\n.mydp .btnincreasedisabled,\n.mydp .headertodaybtndisabled,\n.mydp .headerbtndisabled,\n.mydp .yearchangebtndisabled {\n    cursor: not-allowed;\n    opacity: 0.65;\n}\n\n.mydp .selectiondisabled {\n    background-color: #EEE;\n}\n\n.mydp .btnpicker,\n.mydp .btnclear,\n.mydp .btndecrease,\n.mydp .btnincrease,\n.mydp .headertodaybtn {\n    background: #FFF;\n}\n\n.mydp .header {\n    width: 100%;\n    height: 30px;\n    background-color: #FAFAFA;\n}\n\n.mydp .header td {\n    vertical-align: middle;\n    border: none;\n    line-height: 0;\n}\n\n.mydp .header td:nth-child(1) {\n    padding-left: 4px;\n}\n\n.mydp .header td:nth-child(2) {\n    text-align: center;\n}\n\n.mydp .header td:nth-child(3) {\n    padding-right: 4px;\n}\n\n.mydp .caltable,\n.mydp .monthtable,\n.mydp .yeartable {\n    table-layout: fixed;\n    width: 100%;\n    height: calc(100% - 30px);\n    background-color: #FFF;\n    font-size: 14px;\n}\n\n.mydp .caltable,\n.mydp .monthtable,\n.mydp .yeartable,\n.mydp .weekdaytitle,\n.mydp .daycell,\n.mydp .monthcell,\n.mydp .yearcell {\n    border-collapse: collapse;\n    color: #003366;\n    line-height: 1.1;\n}\n\n.mydp .weekdaytitle,\n.mydp .daycell,\n.mydp .monthcell,\n.mydp .yearcell {\n    padding: 4px;\n    text-align: center;\n}\n\n.mydp .weekdaytitle {\n    background-color: #DDD;\n    font-size: 11px;\n    font-weight: normal;\n    vertical-align: middle;\n    max-width: 36px;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.mydp .weekdaytitleweeknbr {\n    width: 20px;\n    border-right: 1px solid #BBB;\n}\n\n.mydp .monthcell {\n    background-color: #FAFAFA;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.mydp .yearcell {\n    background-color: #FAFAFA;\n    width: 20%;\n}\n\n.mydp .daycell .datevalue {\n    background-color: inherit;\n    vertical-align: middle;\n}\n\n.mydp .daycell .datevalue span {\n    vertical-align: middle;\n}\n\n.mydp .daycellweeknbr {\n    font-size: 10px;\n    border-right: 1px solid #CCC;\n    cursor: default;\n    color: #000;\n}\n\n.mydp .inlinedp {\n    position: relative;\n    margin-top: -1px;\n}\n\n.mydp .prevmonth,\n.mydp .nextmonth {\n    color: #CCC;\n}\n\n.mydp .disabled {\n    cursor: default !important;\n    color: #CCC;\n    background: #FBEFEF;\n}\n\n.mydp .highlight {\n    color: #C30000;\n}\n\n.mydp .dimday {\n    opacity: 0.5;\n}\n\n.mydp .currmonth {\n    background-color: #F6F6F6;\n    font-weight: normal;\n}\n\n.mydp .markdate {\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    border-radius: 4px;\n}\n\n.mydp .markcurrday,\n.mydp .markcurrmonth,\n.mydp .markcurryear {\n    text-decoration: underline;\n}\n\n.mydp .selectedday .datevalue,\n.mydp .selectedmonth .monthvalue,\n.mydp .selectedyear .yearvalue {\n    border: none;\n    background-color: #8EBFFF;\n    border-radius: 2px;\n}\n\n.mydp .headerbtncell {\n    background-color: #FAFAFA;\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.mydp .yearchangebtncell {\n    text-align: center;\n    background-color: #FAFAFA;\n}\n\n.mydp .headerbtn,\n.mydp .headerlabelbtn,\n.mydp .yearchangebtn {\n    background: #FAFAFA;\n    border: none;\n    height: 22px;\n}\n\n.mydp .headerbtn {\n    width: 16px;\n}\n\n.mydp .headerlabelbtn {\n    font-size: 14px;\n    outline: none;\n    cursor: default;\n}\n\n.mydp,\n.mydp .headertodaybtn {\n    border: 1px solid #CCC;\n}\n\n.mydp .btnpicker,\n.mydp .btnclear,\n.mydp .btndecrease,\n.mydp .btnincrease,\n.mydp .headerbtn,\n.mydp .headermonthtxt,\n.mydp .headeryeartxt,\n.mydp .headertodaybtn,\n.mydp .yearchangebtn {\n    color: #000;\n}\n\n.mydp .headertodaybtn {\n    padding: 0 4px;\n    font-size: 11px;\n    height: 22px;\n    min-width: 60px;\n    max-width: 84px;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.mydp button::-moz-focus-inner {\n    border: 0;\n}\n\n.mydp .headermonthtxt,\n.mydp .headeryeartxt {\n    text-align: center;\n    display: table-cell;\n    vertical-align: middle;\n    font-size: 14px;\n    height: 26px;\n    width: 40px;\n    max-width: 40px;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.mydp .btnclear:focus,\n.mydp .btndecrease:focus,\n.mydp .btnincrease:focus,\n.mydp .btnpicker:focus,\n.mydp .headertodaybtn:focus {\n    background: #ADD8E6;\n}\n\n.mydp .headerbtn:focus,\n.mydp .monthlabel:focus,\n.mydp .yearlabel:focus,\n.mydp .yearchangebtn:focus {\n    color: #ADD8E6;\n    outline: none;\n}\n\n.mydp .daycell:focus,\n.mydp .monthcell:focus,\n.mydp .yearcell:focus {\n    outline: 1px solid #CCC;\n}\n\n.mydp .icon-mydpcalendar,\n.mydp .icon-mydpremove {\n    font-size: 16px;\n}\n\n.mydp .icon-mydpleft,\n.mydp .icon-mydpright,\n.mydp .icon-mydpup,\n.mydp .icon-mydpdown {\n    color: #222;\n    font-size: 20px;\n}\n\n.mydp .btndecrease .icon-mydpleft,\n.mydp .btnincrease .icon-mydpright {\n    font-size: 16px;\n}\n\n.mydp .icon-mydptoday {\n    color: #222;\n    font-size: 11px;\n}\n\n.mydp table {\n    display: table;\n    border-spacing: 0;\n}\n\n.mydp table td {\n    padding: 0;\n}\n\n.mydp table,\n.mydp th,\n.mydp td {\n    border: none;\n}\n\n.mydp .btnpickerenabled:hover,\n.mydp .btnclearenabled:hover,\n.mydp .btndecreaseenabled:hover,\n.mydp .btnincreaseenabled:hover,\n.mydp .headertodaybtnenabled:hover {\n    background-color: #E6E6E6;\n}\n\n.mydp .tablesingleday:hover,\n.mydp .tablesinglemonth:hover,\n.mydp .tablesingleyear:hover {\n    background-color: #DDD;\n}\n\n.mydp .monthlabel,\n.mydp .yearlabel,\n.mydp .inputnoteditable,\n.mydp .daycell,\n.mydp .monthcell,\n.mydp .yearcell {\n    cursor: pointer;\n}\n\n.mydp .headerbtnenabled:hover,\n.mydp .yearchangebtnenabled:hover,\n.mydp .monthlabel:hover,\n.mydp .yearlabel:hover {\n    color: #777;\n}\n\n@font-face {\n    font-family: 'mydatepicker';\n    src: url('data:application/octet-stream;base64,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') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n.mydp .mydpicon {\n    font-family: 'mydatepicker';\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.mydp .icon-mydpright:before {\n    content: \"\\e800\";\n}\n\n.mydp .icon-mydpleft:before {\n    content: \"\\e801\";\n}\n\n.mydp .icon-mydptoday:before {\n    content: \"\\e802\";\n}\n\n.mydp .icon-mydpcalendar:before {\n    content: \"\\e803\";\n}\n\n.mydp .icon-mydpup:before {\n    content: \"\\e804\";\n}\n\n.mydp .icon-mydpdown:before {\n    content: \"\\e805\";\n}\n\n.mydp .icon-mydpremove:before {\n    content: \"\\e806\";\n}\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = ".suggestions {\n  z-index: 99;\n  width: auto;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left;\n  left: 0;\n  margin-left: 1.6rem; }\n  .suggestions ul {\n    padding: 0;\n    margin: 1rem;\n    max-height: 30rem;\n    overflow: scroll; }\n  .suggestions li {\n    list-style: none;\n    cursor: pointer;\n    padding: .5rem;\n    white-space: nowrap;\n    width: auto; }\n\n.dropdown-container {\n  margin: 1.6rem;\n  left: 0;\n  width: 70%;\n  height: 3.4rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.filter-input {\n  color: #333333;\n  width: 100%;\n  height: 100%; }\n\n@media (max-width: 955px) {\n  .suggestions {\n    margin-left: 1rem;\n    width: 100%; }\n    .suggestions li {\n      white-space: inherit; }\n  .dropdown-container {\n    margin: 1rem;\n    width: 100%; } }\n"

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = ".contact-us {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/contact.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.contact-us {\n  margin-top: 6rem;\n  text-align: center;\n  overflow: scroll; }\n  .contact-us input {\n    height: 5rem;\n    padding: 1rem;\n    font-size: 1.8rem; }\n    .contact-us input:required {\n      outline: none; }\n  .contact-us h1 {\n    font-size: 4.5rem;\n    color: white; }\n  .contact-us .message {\n    height: 20rem;\n    vertical-align: top; }\n  .contact-us .message,\n  .contact-us .subject {\n    width: 64rem; }\n\n.static-info {\n  font-size: 2.3rem;\n  width: 100%;\n  color: white;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.form-wrapper {\n  text-align: center;\n  display: inline-block; }\n\n.form-group {\n  width: 60rem;\n  text-align: left; }\n  .form-group .alert {\n    width: inherit;\n    padding: 0;\n    margin: 0; }\n\n.name-group,\n.mail-number-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-box .alert,\n.subject-box .alert {\n  width: 60rem; }\n\n.message-dialog {\n  height: 20%;\n  width: 30%;\n  background: #26181D;\n  position: absolute;\n  top: 45%;\n  left: 35%;\n  color: white;\n  box-shadow: 0 0 0.7px grey;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .message-dialog .wrapper {\n    position: relative;\n    top: 30%; }\n    .message-dialog .wrapper .text {\n      display: block;\n      padding: 1rem; }\n    .message-dialog .wrapper .ok-btn {\n      background: #73656A;\n      color: white;\n      width: 30%; }\n\n#message {\n  height: 20rem;\n  font-size: 1.8rem; }\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.submit-btn {\n  width: 25rem;\n  margin-top: 2rem;\n  height: 4rem;\n  margin-bottom: 5rem; }\n  .submit-btn:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto; }\n\n@media (max-width: 955px) {\n  .form-wrapper {\n    width: 100%; }\n  .form-group {\n    width: 100%; }\n  .name-group,\n  .subject-box,\n  .message-box,\n  .mail-number-group {\n    width: 90%;\n    margin: 2rem; }\n  .contact-us {\n    margin-top: 5rem; } }\n"

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = ".date-picker-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .date-picker-container input {\n    height: 3rem;\n    width: 8rem;\n    border: 0;\n    text-align: center;\n    background-color: transparent;\n    color: white;\n    margin-top: .2rem; }\n    .date-picker-container input::-webkit-input-placeholder {\n      color: white; }\n    .date-picker-container input:-ms-input-placeholder {\n      color: white; }\n    .date-picker-container input::placeholder {\n      color: white; }\n  .date-picker-container label {\n    font-weight: 600;\n    padding-top: .4rem;\n    font-size: 1.5rem;\n    color: gray; }\n  .date-picker-container .from-date,\n  .date-picker-container .to-date {\n    width: 13.5rem;\n    text-align: center;\n    margin-right: 1rem;\n    margin-top: 1.4rem;\n    height: 3.4rem;\n    border: .2px solid #426771;\n    margin-left: 1rem; }\n    .date-picker-container .from-date input,\n    .date-picker-container .to-date input {\n      width: 10rem;\n      border: 0;\n      height: 3.4rem;\n      text-align: center;\n      background-color: transparent;\n      color: white; }\n\n@media (max-width: 955px) {\n  .date-picker-container {\n    margin-bottom: 2.4rem;\n    display: inline-block; }\n    .date-picker-container .from-date,\n    .date-picker-container .to-date {\n      position: relative;\n      display: inline-block;\n      width: 70%; } }\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = ".hide-dropdown {\n  display: none; }\n\n.dropdown-list {\n  z-index: 99;\n  padding: 1.5rem 0 1.5rem 3rem;\n  width: 15rem;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left; }\n\n.dropdown-container {\n  width: 9rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.data-list input {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  margin-right: .8rem;\n  float: left; }\n\n.data-list span {\n  vertical-align: middle;\n  font-size: 1.5rem; }\n\n@media (max-width: 955px) {\n  .dropdown-container {\n    display: block;\n    width: 100%;\n    margin-top: 1rem; }\n    .dropdown-container button {\n      width: 90%;\n      margin: auto;\n      height: 3.4rem; }\n  .dropdown-list {\n    padding-left: 3rem;\n    width: 90%;\n    margin-left: 1rem; } }\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 20rem 0rem 20rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = ".footer {\n  text-align: center;\n  padding: 2% 0;\n  width: 100%;\n  margin-top: 5%;\n  border-top: 1px solid #D3D3D3; }\n  .footer span,\n  .footer a {\n    color: #73656A;\n    padding: 0 1%;\n    white-space: nowrap; }\n  .footer a {\n    text-decoration: none;\n    cursor: pointer; }\n\n@media (max-width: 955px) {\n  .footer a, .footer span {\n    display: block; } }\n"

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = ".hero {\n  width: 100%; }\n\n.header {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n.view-all {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #26181D; }\n\n.main-page-container {\n  height: 100%;\n  min-height: 100%; }\n\n.view-all-container {\n  text-align: center; }\n\n.main-heading {\n  font-size: 7rem;\n  color: white; }\n\n.sub-heading {\n  opacity: 1;\n  color: white;\n  top: 1rem;\n  position: relative; }\n\n.content {\n  position: relative;\n  top: 10rem; }\n\nheader {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.btn {\n  color: white;\n  background-color: #26181D;\n  top: 3rem;\n  position: relative;\n  border: none;\n  border-radius: 300px;\n  width: 30rem;\n  font-size: 2rem;\n  cursor: initial;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\nh1.ws-heading {\n  color: #26181D;\n  text-align: center;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif; }\n\n#workshops {\n  padding-top: 5rem; }\n\n@media (max-width: 955px) {\n  .main-heading {\n    font-size: 4.5rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 25rem;\n    font-size: 2.2rem; } }\n\n@media (max-width: 400px) {\n  .main-heading {\n    font-size: 3.8rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 18rem;\n    font-size: 1.6rem; } }\n"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = ".top-bar-title {\n  font-family: 'Coiny', cursive;\n  font-size: 22px;\n  color: #ffffff; }\n\n.nav-menu a {\n  color: #ffffff; }\n\n.fa-bars {\n  border: 1px solid white;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  border-radius: 4px; }\n\n.filter-header {\n  display: none; }\n\n.navbar-toggle {\n  display: none; }\n\nnav {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 6rem;\n  background-color: #26181D;\n  border: none; }\n  nav img {\n    width: 3rem;\n    height: 3rem;\n    margin-top: 1.2rem;\n    margin-left: 1.5rem;\n    float: left; }\n  nav .navbar-nav a {\n    background-color: transparent;\n    color: white; }\n  nav ul {\n    margin-top: .4rem;\n    font-weight: 200; }\n\n@media (max-width: 955px) {\n  nav {\n    height: 5rem; }\n    nav ul {\n      width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white; }\n  .filter-header {\n    display: inline-block;\n    color: white;\n    margin-top: 1rem;\n    padding-left: 1rem;\n    background: transparent;\n    margin-left: 2rem; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .hideNavbar {\n    display: none; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-nav > li {\n    float: none !important; } }\n\n@media (min-width: 955px) and (max-width: 1140px) {\n  nav ul {\n    width: 100%; }\n  .hideNavbar {\n    display: none; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white;\n    margin-top: 1.5rem;\n    float: right; }\n  .navbar-collapse.collapse {\n    display: none !important; }\n  .navbar-nav {\n    float: none !important;\n    margin-top: 7.5px; }\n  .navbar-nav > li {\n    float: none !important; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .collapse.in {\n    display: block !important; } }\n"

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = ".detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-img {\n  width: 12rem;\n  height: 12rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 2rem; }\n\n.profile-photo {\n  float: left; }\n\n.photographer-name h1 {\n  font-size: 2.5rem;\n  color: #73656A; }\n\n.photographer-information h4 {\n  margin-top: 0; }\n\n.detail-location {\n  color: #73656A;\n  opacity: 0.8;\n  margin-bottom: .5rem; }\n\n.website-link {\n  text-decoration: none;\n  margin-bottom: 1rem; }\n\n/* Style the tab */\ndiv.tab {\n  overflow: hidden;\n  margin-top: 5rem;\n  width: 100%; }\n  div.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    border-bottom: 3px solid transparent;\n    font-size: 2rem;\n    color: #73656A; }\n    div.tab button.active {\n      border-bottom: 3px solid #73656A; }\n\n/* Style the tab content */\n.tabcontent {\n  border-top: none;\n  text-align: left;\n  padding-left: 2rem;\n  height: 40rem;\n  overflow: scroll;\n  width: 100%;\n  background-color: rgba(239, 230, 233, 0.57); }\n\n.detail-tabs {\n  text-align: center;\n  width: 65%;\n  margin-left: 4rem;\n  left: 0; }\n\n.details-container {\n  position: relative; }\n\n.day-wrapper,\n.photographer-information {\n  padding-top: 2rem; }\n\n.day-wrapper .location,\n.photographer-information h4 {\n  color: #73656A; }\n\n#Description p {\n  padding-top: 2rem;\n  margin-right: .4rem; }\n\n#Description h3 {\n  margin-top: 5%; }\n\n#Gallery {\n  text-align: center; }\n  #Gallery img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 35rem;\n    height: 28rem;\n    margin: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.wsd-name {\n  font-size: 3.5rem;\n  color: #73656A;\n  text-align: center;\n  margin-top: 3rem;\n  font-weight: 500; }\n\n.highlights {\n  position: absolute;\n  display: inline-block;\n  margin-top: 10rem;\n  padding-left: 5rem;\n  width: 25%;\n  top: 0;\n  right: 0; }\n  .highlights a {\n    color: #73656A; }\n  .highlights div {\n    font-size: 2rem;\n    font-weight: 300;\n    color: #73656A; }\n    .highlights div i {\n      color: #73656A; }\n\n.image-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 5rem;\n  left: 0;\n  top: 5rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n/* Modal Content */\n.image-modal-content {\n  margin: 0;\n  padding: 0; }\n\n.hide-modal {\n  display: none; }\n\n/* The Close Button */\n.close {\n  color: white;\n  opacity: 1;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 35px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer; }\n\n.hideImage {\n  display: none; }\n\n.cursor {\n  cursor: pointer; }\n\n/* Next & previous buttons */\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none; }\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.prev {\n  left: 0; }\n\n.slides {\n  text-align: center; }\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  text-decoration: none; }\n\n.active {\n  opacity: 1; }\n\n.gallery-image.hover-shadow {\n  transition: 0.3s; }\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n@media (max-width: 955px) {\n  #Gallery {\n    padding-left: 0; }\n    #Gallery img {\n      width: 28rem;\n      height: 20rem; }\n  div.tab {\n    text-align: center; }\n    div.tab button {\n      width: 50%;\n      display: block;\n      margin: auto; }\n  .tabContent {\n    text-align: center; }\n    .tabContent p {\n      text-align: justify;\n      padding: 2rem; }\n  .detail-tabs {\n    padding: 0 2rem;\n    display: inline-block;\n    width: 100%;\n    margin-left: 0; }\n  .highlights {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    position: inherit; } }\n"

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = ".autocomplete-filter,\n.dropdown-filter,\n.price-filter,\n.date-picker,\n.get-list-btn {\n  left: 3rem;\n  position: relative;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.autocomplete-filter {\n  display: block; }\n\n*:focus {\n  outline: 0; }\n\n.price-filter {\n  margin-top: 1.6rem;\n  margin-left: 1rem; }\n  .price-filter input {\n    outline: .2px solid #26181D;\n    width: 10rem;\n    border: 0;\n    height: 3.4rem;\n    text-align: center;\n    background-color: white;\n    color: #26181D;\n    margin-right: 1rem; }\n    .price-filter input::-webkit-input-placeholder {\n      color: #26181D; }\n    .price-filter input:-ms-input-placeholder {\n      color: #26181D; }\n    .price-filter input::placeholder {\n      color: #26181D; }\n\n.hide-dropdown {\n  display: none; }\n\n.filters-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.get-list-btn {\n  display: none;\n  width: 10rem;\n  height: 3.7rem;\n  border: none;\n  background-color: #73656A;\n  color: white;\n  margin-top: 1.5rem; }\n\n@media (max-width: 955px) {\n  .filters-container {\n    display: block;\n    text-align: center; }\n  .dropdown-filter,\n  .price-filter,\n  .date-picker,\n  .get-list-btn {\n    left: 0;\n    display: block; }\n  .price-filter input {\n    width: 50%;\n    display: block;\n    margin: 2rem auto; }\n  .get-list-btn {\n    display: inline-block;\n    width: 50%;\n    margin-top: 2rem; }\n  .autocomplete-filter {\n    width: 70%;\n    text-align: center;\n    margin: 1.4rem 1rem 0 1rem; } }\n"

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = ".workshop-list {\n  text-align: center; }\n\n.ws-pages /deep/ {\n  margin-top: 3rem; }\n  .ws-pages /deep/ ul li {\n    display: inline;\n    background: #dddddd;\n    border-radius: 20%;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    padding: 1rem 1rem 1rem 1rem; }\n    .ws-pages /deep/ ul li a {\n      text-decoration: none;\n      color: #222222;\n      width: 100%;\n      height: 100%; }\n      .ws-pages /deep/ ul li a:hover {\n        border-radius: 20%; }\n\n.entity {\n  width: 30rem;\n  display: inline-block;\n  margin: 2rem;\n  box-shadow: 0rem 0rem 0.2rem 0rem #888888; }\n  .entity img {\n    vertical-align: middle;\n    width: 30rem;\n    height: 20rem;\n    margin-bottom: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n  .entity a {\n    text-decoration: none; }\n\n.inner {\n  text-align: center;\n  position: relative;\n  padding-bottom: 2rem; }\n\nh1.name {\n  margin-top: 0;\n  font-size: 2rem;\n  color: #26181D;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif;\n  margin-left: 1rem; }\n\n.price {\n  color: #594B50;\n  text-align: left;\n  padding-left: 2rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 2rem; }\n\nhr {\n  width: 10rem;\n  text-align: center;\n  border-color: #594B50;\n  opacity: 0.3;\n  margin-top: 1rem;\n  margin-bottom: .5rem; }\n\n.date {\n  color: #594B50;\n  text-align: left;\n  padding-left: 1rem; }\n\n.location {\n  color: #26181D;\n  padding-bottom: 1rem;\n  opacity: 0.6; }\n\n.truncate {\n  width: 28rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.page-numbers {\n  padding: 1rem;\n  margin: .2rem;\n  color: #73656A;\n  border-radius: 5px;\n  text-decoration: none; }\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5; }\n\na.active-page.page-numbers {\n  background-color: #73656A;\n  color: white; }\n\n@media (max-width: 955px) {\n  .entity {\n    width: auto;\n    max-width: 30rem; }\n    .entity .image {\n      height: 20rem;\n      margin-bottom: 1rem;\n      width: 100%; }\n  h1.name {\n    font-size: 1.8rem;\n    margin: auto; } }\n"

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = ".filters,\n.list {\n  position: absolute;\n  left: 0;\n  width: 100%; }\n\n.filters {\n  position: fixed;\n  z-index: 999;\n  background-color: transparent;\n  height: auto;\n  width: 90rem;\n  padding-bottom: .3rem;\n  left: 5rem; }\n\n.list {\n  top: 10rem;\n  overflow-x: hidden; }\n\n.ws-container nav.navbar.navbar-default {\n  background-color: white;\n  border: none; }\n\n.ws-container .navbar-default .navbar-nav .active a {\n  background-color: transparent; }\n\n@media (max-width: 955px) {\n  .filters {\n    position: fixed;\n    background-color: #26181D;\n    height: 100%;\n    width: 100%;\n    top: 5rem;\n    padding-bottom: 2rem;\n    left: 0;\n    z-index: 99;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); }\n  .list {\n    top: 5rem;\n    position: relative; }\n  .hideFilter {\n    display: none; }\n  .footer {\n    position: relative;\n    bottom: 0; } }\n"

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports = ".ws-container nav.navbar.navbar-default {\n    background-color: white;\n    border: none;\n}\n\n.ws-container .navbar-default .navbar-nav .active a {\n    background-color: transparent;\n}\n\n.list {\n    margin-left: 10rem;\n}"

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n\n<div class=\"header-img\">\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\n</div>\n\n<div class=\"content\">\n    <h2>About Us</h2>\n    PixelatedPlanet enables aspiring photographers to find workshops and seminars all around the world being conducted by people\n    successful in the field of photography. On the other hand, we provide a platform for photographers to showcase their\n    photography workshops and reach interested folks.\n    <h2>FAQs</h2>\n    <b>Do you have workshops of all genres?</b>\n    <br/> Of course! You can find everything from Landscape and Food photography to Timelapse and Night Sky photography workshops.\n    <br/><br/>\n    <b>Does PixelatedPlanet allow me to register for workshops?</b>\n    <br/> As of now, we aim to bring all photography workshops in one place. After finding the workshop you like, we will\n    redirect you the photographer's website for registration/payment.\n    <br/><br/>\n    <b>Does PixelatedPlanet charge me for finding workshops?</b>\n    <br/> No. All information on our website if freely accessible. No hidden costs.\n    <br/><br/>\n    <b>I am a photographer. Can I showcase my workshops on your website?</b>\n    <br/> We carefully select photographers based on their portfolios to keep quality of workshops high. Please email us\n    at hello@thepixelatedplanet.com in order to get in touch with us!\n</div>\n<div class=\"footer\">\n    <footer></footer>\n</div>"

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\n    <input id=\"country\" type=\"text\" class=\"filter-input\" [(ngModel)]=query (keyup)=filter() placeholder=\"Type a location\">\n    <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\n        <ul>\n            <li *ngFor=\"let item of filteredList\" (click)=\"select(item)\">{{item}}</li>\n        </ul>\n    </div>\n</div>"

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n<div class=\"contact-us\">\n    <h1>Let's click together!</h1>\n    <div class=\"static-info\">\n        <div>\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n            <span>hello@thepixelatedplanet.com</span>\n        </div>\n        <div>\n            <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n            <span>425-979-8838</span>\n        </div>\n    </div>\n    <div class=\"form-wrapper\">\n        <form (ngSubmit)=\"onSubmit(); contactForm.reset()\" name=\"contact-form\" #contactForm=\"ngForm\">\n            <div class=\"name-group\">\n                <div class=\"form-group first-name\">\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" required [(ngModel)]=\"fname\" name=\"fname\" #firstname=\"ngModel\" placeholder=\"Full name\">\n                    <div *ngIf=\"!(firstname.valid || firstname.pristine)\" class=\"alert alert-danger\">\n                        Invalid name\n                    </div>\n                </div>\n            </div>\n            <div class=\"mail-number-group\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\" placeholder=\"Email address\">\n                    <div *ngIf=\"!(email.valid || email.pristine)\" class=\"alert alert-danger\">\n                        Invalid email address\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group subject-box\">\n                <input type=\"text\" class=\"form-control\" id=\"subject\" required [(ngModel)]=\"subjectText\" name=\"subject\" #subject=\"ngModel\"\n                    placeholder=\"Subject\">\n                <div *ngIf=\"!(subject.valid || subject.pristine)\" class=\"alert alert-danger\">\n                    Invalid subject\n                </div>\n            </div>\n            <div class=\"form-group message-box\">\n                <textarea class=\"form-control\" id=\"message\" required rows=\"4\" cols=\"50\" name=\"message\" form=\"contact-form\" [(ngModel)]=\"messageText\"\n                    #message=\"ngModel\" placeholder=\"How can we help you?\"></textarea>\n                <div *ngIf=\"!(message.valid || message.pristine)\" class=\"alert alert-danger\">\n                    Invalid message\n                </div>\n            </div>\n            <button type=\"submit\" class=\"submit-btn btn btn-success\" [disabled]=\"!contactForm.form.valid || invalidDetails\">Submit</button>\n        </form>\n    </div>\n\n    <div class=\"message-dialog\" *ngIf=\"submitted && showMessageBox\">\n        <div class=\"wrapper\">\n            <div class=\"text\">{{submitMessage}}</div>\n            <button class=\"ok-btn btn\" (click)=\"hideMessagebox()\">ok</button>\n        </div>\n    </div>\n        <div class=\"footer\">\n        <footer></footer>\n    </div>\n</div>"

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = "<div class=\"date-picker-container\">\n    <div class=\"from-date\">\n        <my-date-picker (dateChanged)=\"onFromDateChanged($event)\" name=\"from-date\" [placeholder]=\"fromDateLabel\" [options]=\"fromDatePickerOptions\"></my-date-picker>\n    </div>\n    <div class=\"to-date\">\n       <my-date-picker (dateChanged)=\"onToDateChanged($event)\" name=\"to-date\" [placeholder]=\"toDateLabel\" [options]=\"toDatePickerOptions\"></my-date-picker>\n    </div>\n</div>"

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\n    <button (click)=\"toggleDropdown()\"><span>{{buttonLabel}}</span>\n        <i class=\"fa fa-chevron-down\"></i>\n</button>\n    <div class=\"dropdown-list\" (click)=\"overlay()\" [class.hide-dropdown]=\"isCollapsed\">\n        <div class=\"data-list\" *ngFor=\"let data of dataModel;\">\n            <input type=\"checkbox\" name=\"{{optionName}}\" value=\"{{data.value}}\">\n            <div>{{data.label}}</div>\n        </div>\n    </div>\n</div>"

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n\n<div class=\"header-img\">\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\"/>\n</div>\n\n<div class=\"content\">\n    <h1>404 - Page Not Found</h1>\n    <h3>Oops, you landed in a bad place. Let's get out of here quickly before any bad guys come around!</h3>\n</div>"

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = "<div class=\"footer\">\n    <a href=\"/termsandconditions\">Terms and conditions</a>\n    <a href=\"/privacypolicy\">Privacy Policy</a>\n    <span>&copy; 2017 Pixelated Planet</span>\n    <a href=\"/contact\">Contact</a>\n</div>"

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = "<div class=\"main-page-container\">\n    <navi-bar [showFilters]=\"false\"></navi-bar>\n    <div class=\"header\">\n        <header class=\"masthead\">\n            <div class=\"header-content\">\n                <div class=\"header-content-inner\">\n                    <div class=\"main-heading\" id=\"homeHeading\">Pixelated Planet</div>\n                    <!-- <div class=\"sub-heading\">It is a long established fact that a reader will be distracted by the readable content of a page when\n                        looking at its layout.</div> -->\n                    <a class=\"btn btn-default btn-lg\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">Upcoming Workshops</a>\n                </div>\n            </div>\n        </header>\n    </div>\n\n    <section id=\"workshops\">\n        <h1 class=\"ws-heading\">\n            Workshops\n        </h1>\n        <workshops-list></workshops-list>\n        <div class=\"view-all-container\">\n            <a href=\"/workshops\" class=\"view-all\" angulartics2On=\"click\" angularticsEvent=\"ViewAllEventsClick\" angularticsCategory=\"HomePageInteraction\"><span>View all</span>  <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\n        </div>\n    </section>\n\n    <div class=\"footer\">\n        <footer></footer>\n    </div>\n</div>"

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = "<nav class=\"nav-container\">\n  <a href=\"\"  angulartics2On=\"click\" angularticsEvent=\"GoToHomePageEvent\" angularticsCategory=\"NavBarInteraction\">\n    <img class=\"image\" src=\"/assets/img/icon.png\" alt=\"workshop image\">\n  </a>\n  <div class=\"navbar-header\">\n    <button *ngIf=\"showFilters\" type=\"button\" class=\"filter-header btn\" (click)=\"toggleFilter()\">\n          <div>Filters <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\n    </button>\n    <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\n      <div><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\n    </button>\n\n  </div>\n\n  <div class=\"navbar-collapse\" [ngClass]=\"{'hideNavbar': hideNavbar}\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"active\" angulartics2On=\"click\" angularticsEvent=\"GoToWorkshopsPageEvent\" angularticsCategory=\"NavBarInteraction\"><a href=\"/workshops\">Workshops</a></li>\n      <li><a href=\"/about\" angulartics2On=\"click\" angularticsEvent=\"GoToAboutPageEvent\" angularticsCategory=\"NavBarInteraction\">About</a></li>\n      <li><a href=\"/contact\" angulartics2On=\"click\" angularticsEvent=\"GoToContactPageEvent\" angularticsCategory=\"NavBarInteraction\">Contact</a></li>\n    </ul>\n  </div>\n</nav>"

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\n\t<navi-bar></navi-bar>\n\t<div class=\"list\">\n        <br/><br/><br/>\n        <br/><br/><br/>\n        <br/><br/><br/>\n\t\tRedirecting to an external link in 5 seconds... If you would rather not leave us, <a style=\"cursor:hand\" (click)=\"goBack()\">click here to go back</a>.\n\t</div>\n</div>"

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n\n<div class=\"header-img\">\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\n</div>\n\n<div class=\"content\">\n    <h2>Privacy Policy</h2>\n<div class='innerText'>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.<br></div><span id='infoCo'></span><br><div class='grayText'><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></div><br /><div class='innerText'>When ordering or registering on our site, as appropriate, you may be asked to enter your email address, phone number  or other details to help you with your experience.</div><br><div class='grayText'><strong>When do we collect information?</strong></div><br /><div class='innerText'>We collect information from you when you fill out a form or enter information on our site.</div><br>Provide us with feedback on our products or services  <span id='infoUs'></span><br><div class='grayText'><strong>How do we use your information? </strong></div><br /><div class='innerText'> We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br><br></div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To improve our website in order to better serve you.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To allow us to better service you in responding to your customer service requests.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To ask for ratings and reviews of services or products</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To follow up with them after correspondence (live chat, email or phone inquiries)</div><span id='infoPro'></span><br><div class='grayText'><strong>How do we protect your information?</strong></div><br /><div class='innerText'>We do not use vulnerability scanning and/or scanning to PCI standards.</div><div class='innerText'>We only provide articles and information. We never ask for credit card numbers.</div><div class='innerText'>We use regular Malware Scanning.<br><br></div><div class='innerText'>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. </div><br><div class='innerText'>We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</div><br><div class='innerText'>All transactions are processed through a gateway provider and are not stored or processed on our servers.</div><span id='coUs'></span><br><div class='grayText'><strong>Do we use 'cookies'?</strong></div><br /><div class='innerText'>We do not use cookies for tracking purposes </div><div class='innerText'><br>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.<br></div><br><div class='innerText'>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.that make your site experience more efficient and may not function properly.</div><br><span id='trDi'></span><br><div class='grayText'><strong>Third-party disclosure</strong></div><br /><div class='innerText'>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</div><span id='trLi'></span><br><div class='grayText'><strong>Third-party links</strong></div><br /><div class='innerText'>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</div><span id='gooAd'></span><br><div class='blueText'><strong>Google</strong></div><br /><div class='innerText'>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en <br><br></div><div class='innerText'>We use Google AdSense Advertising on our website.</div><div class='innerText'><br>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.<br></div><div class='innerText'><br><strong>We have implemented the following:</strong></div><br><div class='innerText'>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together <div class='innerText'>analyze website usage</div><div class='innerText'><br><strong>Opting out:</strong><br>\n                    Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</div><span id='calOppa'></span><br><div class='blueText'><strong>California Online Privacy Protection Act</strong></div><br /><div class='innerText'>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.  The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. -  See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf<br></div><div class='innerText'><br><strong>According to CalOPPA, we agree to the following:</strong><br></div><div class='innerText'>Users can visit our site anonymously.</div><div class='innerText'>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.<br></div><div class='innerText'>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</div><div class='innerText'><br>You will be notified of any Privacy Policy changes:</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> On our Privacy Policy Page<br></div><div class='innerText'>Can change your personal information:</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> By logging in to your account</div><div class='innerText'><br><strong>How does our site handle Do Not Track signals?</strong><br></div><div class='innerText'>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. </div><div class='innerText'><br><strong>Does our site allow third-party behavioral tracking?</strong><br></div><div class='innerText'>It's also important to note that we allow third-party behavioral tracking</div><span id='coppAct'></span><br><div class='blueText'><strong>COPPA (Children Online Privacy Protection Act)</strong></div><br /><div class='innerText'>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control.  The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.<br><br></div><div class='innerText'>We do not specifically market to children under the age of 13 years old.</div><div class='innerText'>Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</div><span id='ftcFip'></span><br><div class='blueText'><strong>Fair Information Practices</strong></div><br /><div class='innerText'>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.<br><br></div><div class='innerText'><strong>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</strong></div><div class='innerText'>We will notify you via email</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Within 1 business day</div><div class='innerText'><br>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</div><span id='canSpam'></span><br><div class='blueText'><strong>CAN SPAM Act</strong></div><br /><div class='innerText'>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.<br><br></div><div class='innerText'><strong>We collect your email address in order to:</strong></div><div class='innerText'><br><strong>To be in accordance with CANSPAM, we agree to the following:</strong></div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Not use false or misleading subjects or email addresses.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Identify the message as an advertisement in some reasonable way.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Include the physical address of our business or site headquarters.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Monitor third-party email marketing services for compliance, if one is used.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Honor opt-out/unsubscribe requests quickly.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Allow users to unsubscribe by using the link at the bottom of each email.</div><div class='innerText'><strong><br>If at any time you would like to unsubscribe from receiving future emails, you can email us at</strong></div><div class='innerText'>hello@thepixelatedplanet.com and we will promptly remove you from <strong>ALL</strong> correspondence.</div><br><br><strong><div class='blueText'>Photographers</div></strong><br /><div class='innerText'>All photographers featured in our website willingly agree to us showing information about their workshops on the website and use data from their websites.</div><span id='ourCon'></span><br><div class='blueText'><br>Last Edited on 2017-09-17</div></div>\n</div>\n<div class=\"footer\">\n    <footer></footer>\n</div>"

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n\n<div class=\"header-img\">\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\n</div>\n\n<div class=\"content\">\n    <h2>Terms and conditions</h2><br/>\n    <br/>\n<b>OVERVIEW</b><br/>\n<br/>\nThis website is operated by The Pixelated Planet. Throughout the site, the terms “we”, “us” and “our” refer to The Pixelated Planet. The Pixelated Planet offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.<br/>\n<br/>\nBy visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.<br/>\n<br/>\nPlease read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br/>\n<br/>\nAny new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br/>\n<br/>\n<b>SECTION 1 - ONLINE STORE TERMS</b><br/>\n<br/>\nBy agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br/>\n<br/>\nYou may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br/>\n<br/>\nYou must not transmit any worms or viruses or any code of a destructive nature.<br/>\n<br/>\nA breach or violation of any of the Terms will result in an immediate termination of your Services.<br/>\n<br/>\n<br/>\n<b>SECTION 2 - GENERAL CONDITIONS</b><br/>\n<br/>\nWe reserve the right to refuse service to anyone for any reason at any time.<br/>\n<br/>\nYou understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br/>\n<br/>\nYou agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br/>\n<br/>\nThe headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.<br/>\n<br/>\n<br/>\n<b>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</b><br/>\n<br/>\nWe are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br/>\n<br/>\nThis site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.<br/>\n<br/>\n<br/>\n<b>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</b><br/>\n<br/>\nPrices for our products are subject to change without notice.<br/>\n<br/>\nWe reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br/>\n<br/>\nWe shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.<br/>\n<br/>\n<br/>\n<b>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</b><br/>\n<br/>\nCertain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.<br/>\n<br/>\nWe have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.<br/>\n<br/>\nWe reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br/>\n<br/>\nWe do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.<br/>\n<br/>\n<br/>\n<b>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</b><br/>\n<br/>\nWe reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<br/>\n<br/>\nYou agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.<br/>\n<br/>\nFor more detail, please review our Returns Policy.<br/>\n<br/>\n<br/>\n<b>SECTION 7 - OPTIONAL TOOLS</b><br/>\n<br/>\nWe may provide you with access to third-party tools over which we neither monitor nor have any control nor input.<br/>\n<br/>\nYou acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br/>\n<br/>\nAny use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).<br/>\n<br/>\nWe may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.<br/>\n<br/>\n<br/>\n<b>SECTION 8 - THIRD-PARTY LINKS</b><br/>\n<br/>\nCertain content, products and services available via our Service may include materials from third-parties.<br/>\n<br/>\nThird-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.<br/>\n<br/>\nWe are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.<br/>\n<br/>\n<br/>\n<b>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</b><br/>\n<br/>\nIf, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.<br/>\n<br/>\nWe may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.<br/>\n<br/>\nYou agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.<br/>\n<br/>\n<br/>\n<b>SECTION 10 - PERSONAL INFORMATION</b><br/>\n<br/>\nYour submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.<br/>\n<br/>\n<br/>\n<b>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</b><br/>\n<br/>\nOccasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).<br/>\n<br/>\nWe undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.<br/>\n<br/>\n<br/>\n<b>SECTION 12 - PROHIBITED USES</b><br/>\n<br/>\nIn addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.<br/>\n<br/>\n<br/>\n<b>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</b><br/>\n<br/>\nWe do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.<br/>\n<br/>\nWe do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br/>\n<br/>\nYou agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.<br/>\n<br/>\nYou expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br/>\n<br/>\nIn no case shall The Pixelated Planet, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.<br/>\n<br/>\n<br/>\n<b>SECTION 14 - INDEMNIFICATION</b><br/>\n<br/>\nYou agree to indemnify, defend and hold harmless The Pixelated Planet and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.<br/>\n<br/>\n<br/>\n<b>SECTION 15 - SEVERABILITY</b><br/>\n<br/>\nIn the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.<br/>\n<br/>\n<br/>\n<b>SECTION 16 - TERMINATION</b><br/>\n<br/>\nThe obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br/>\n<br/>\nThese Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.<br/>\n<br/>\nIf in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).<br/>\n<br/>\n<br/>\n<b>SECTION 17 - ENTIRE AGREEMENT</b><br/>\n<br/>\nThe failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br/>\n<br/>\nThese Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br/>\n<br/>\nAny ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.<br/>\n<br/>\n<br/>\n<b>SECTION 18 - GOVERNING LAW</b><br/>\n<br/>\nThese Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 2515 4th Ave, Seattle, WA, 98121, United States.<br/>\n<br/>\n<br/>\n<b>SECTION 19 - CHANGES TO TERMS OF SERVICE</b><br/>\n<br/>\nYou can review the most current version of the Terms of Service at any time at this page.<br/>\n<br/>\nWe reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.<br/>\n<br/>\n<br/>\n<b>SECTION 20 - CONTACT INFORMATION</b><br/>\n<br/>\nQuestions about the Terms of Service should be sent to us at hello@thepixelatedplanet.com.<br/><br/>\n</div>\n\n<div class=\"footer\">\n    <footer></footer>\n</div>"

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\n\n<div class=\"header-img\">\n    <img class=\"detail-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(workshopDetails.imageLink)\" alt=\"workshop image\"\n    />\n</div>\n\n<div class=\"wsd-name\">{{workshopDetails.name}}</div>\n\n<div class=\"details-container\">\n    <div>\n        <div class=\"detail-tabs\">\n\n            <!--Tab headings-->\n            <div class=\"tab\">\n                <button class=\"tablinks\" *ngFor=\"let tab of tabs; let i=index;\" [ngClass]=\"{'active': tab.showTab}\" (click)=\"openTabs(i)\">{{tab.label}}</button>\n            </div>\n\n            <!--Description tab-->\n            <div id=\"{{tabs[0].label}}\" [hidden]=\"!tabs[0].showTab\" class=\"tabcontent\">\n                <h3>{{tabs[0].label}}</h3>\n                <p [innerHTML]=\"workshopDetails.description\"></p>\n            </div>\n\n            <!--Itinierary tab-->\n            <!--<div id=\"{{tabs[1].label}}\" [hidden]=\"!tabs[1].showTab\" class=\"tabcontent\">\n                <h3>{{tabs[1].label}}</h3>\n                <div class=\"day-wrapper\" *ngFor=\"let data of workshopDetails.itinerary;\">\n                    <h5>\n                        <span>Day {{data.day}} - </span>\n                        <span class=\"location\">{{data.location}}</span>\n                    </h5>\n                    <p [innerHTML]=\"data.content\"></p>\n                </div>\n            </div>-->\n\n            <!--Gallery tab-->\n            <div id=\"{{tabs[1].label}}\" [hidden]=\"!tabs[1].showTab\" class=\"tabcontent\">\n                <h3>{{tabs[1].label}}</h3>\n                <img class=\"gallery-image hover-shadow cursor\" *ngFor=\"let image of imagesLink;let i = index\" [src]=\"image.imageLink\" alt=\"workshop image\"\n                    (click)=\"openModal(i+1)\" />\n            </div>\n\n            <!--Photographer tab-->\n            <div id=\"{{tabs[2].label}}\" [hidden]=\"!tabs[2].showTab\" class=\"tabcontent\">\n                <h3>{{tabs[2].label}}</h3>\n                <div class=\"photographer-information\" *ngFor=\"let photographer of workshopDetails.photographers;\">\n                    <div class=\"profile-photo\">\n                        <img class=\"profile-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(photographer.profilePhotoLink)\" alt=\"workshop image\"\n                        />\n                    </div>\n                    <h4>\n                        <span>{{photographer.firstName}}</span>\n                        <span>{{photographer.lastName}}</span>\n                    </h4>\n                    <div class=\"detail-location\">\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                        <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(photographer.locationId)?.name}}</span>\n                    </div>\n                    <div class=\"website-link\">\n                        <a href=\"{{photographer?.websiteLink}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website</a>\n                    </div>\n                    <p [innerHTML]=\"photographer.moreInformation\"></p>\n                </div>\n            </div>\n        </div>\n\n        <!--Workshop highlights-->\n        <div class=\"highlights\">\n            <div class=\"wsd-link\">\n                <h4 class=\"highlight-headings\">Workshop Link</h4>\n                <a href=\"{{workshopDetails.link}}\" target=\"_blank\"><i class=\"fa fa-link\"></i> Workshop link\n        </a>\n            </div>\n            <div class=\"wsd-location\">\n                <h4 class=\"highlight-headings\">Location</h4>\n                <i class=\"fa fa-map-marker\"></i>\n                <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(workshopDetails.locationId)?.name}}</span>\n            </div>\n            <div class=\"wsd-price\">\n                <h4 class=\"highlight-headings\">Price Range</h4>\n                <i class=\"fa fa-usd\"></i> <span *ngIf=\"workshopDetails.minCost !== workshopDetails.maxCost\">{{workshopDetails.minCost}} - </span>{{workshopDetails.maxCost}}\n            </div>\n            <div class=\"wsd-dates\">\n                <h4 class=\"highlight-headings\">Dates</h4>\n                <div class=\"dates-information\" *ngFor=\"let detail of workshopDetails.multiWorkshopDetails;\">\n                    <div>\n                        <i class=\"fa fa-calendar\"></i>\n                        <span>{{this.formatDate(detail.startDate)}} - {{this.formatDate(detail.endDate)}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <!--Image gallery modal-->\n        <div id=\"myModal\" [ngClass]=\"{'hide-modal': hideModal}\" class=\"image-modal\">\n            <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\n            <div class=\"image-modal-content\">\n\n                <div *ngFor=\"let image of imagesLink;let i = index\" class=\"slides\" [ngClass]=\"{'hideImage': image.hideImage}\">\n                    <img [src]=\"image.imageLink\" class=\"modal-image\">\n                </div>\n            </div>\n\n            <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\n            <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\n        </div>\n    </div>\n    <div>\n        <div class=\"footer\">\n            <footer></footer>\n        </div>\n    </div>\n</div>"

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = "<div class=\"filters-container\">\n    <div class=\"dropdown-filter\">\n        <dropdown (selectionChanged)=\"updateCategoryList($event)\" [dataModel]=\"categories\" [buttonLabel]=\"categoryDropdownLabel\"\n            [optionName]=\"'categories'\"></dropdown>\n    </div>\n\n    <div class=\"autocomplete-filter\">\n        <autocomplete (selectionChanged)=\"updateLocation($event)\"></autocomplete>\n    </div>\n\n    <div class=\"date-picker\">\n        <date-picker (selectedFromChanged)=\"getFromDate($event)\" (selectedToChanged)=\"getToDate($event)\"></date-picker>\n    </div>\n\n    <div class=\"price-filter\">\n        <input #minPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Min. price\" (blur)=\"updateMinPrice(minPriceInput.value)\"\n            (oninput)=\"updateMinPrice(minPriceInput.value)\" (onchange)=\"updateMinPrice(minPriceInput.value)\" (change)=\"updateMinPrice(minPriceInput.value)\"\n        />\n        <input #maxPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Max. price\" (blur)=\"updateMaxPrice(maxPriceInput.value)\"\n            (oninput)=\"updateMaxPrice(maxPriceInput.value)\" (onchange)=\"updateMaxPrice(maxPriceInput.value)\" (change)=\"updateMaxPrice(maxPriceInput.value)\"\n        />\n    </div>\n\n    <button class=\"get-list-btn\" (click)=\"toggleFilter()\"><span>Filter</span>  <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button>\n</div>"

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = "<div class=\"workshop-list\">\n    <div *ngIf=\"asyncData\">\n        <article class=\"entity\" *ngFor=\"let data of asyncData | async\">\n            <a [href]=\"createWorkshopDetailsUrl(data.workshopId, data.name)\">\n                <div class=\"inner\">\n                    <img class=\"image\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(data.imageLink)\" alt=\"workshop image\" />\n                    <h1 class=\"name truncate\" title=\"{{ data.name }}\">\n                        {{ data.name }}\n                    </h1>\n                    <hr>\n                    <div class=\"location\">\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                        <span>{{this.formatLocation(data.locationId)}}</span>\n                    </div>\n                    <div class=\"date\">\n                        <span>{{this.formatDate(data.startDateFirst)}}</span>\n                        <span *ngIf=\"data.startDateFirst != data.endDateFirst\">-</span>\n                        <span *ngIf=\"data.startDateFirst != data.endDateFirst\"> {{this.formatDate(data.endDateFirst)}} </span>\n                    </div>\n                    <div class=\"price\" *ngIf=\"data.minCost == data.maxCost\">{{data.costCurrency}} {{data.minCost}}</div>\n                    <div class=\"price\" *ngIf=\"data.minCost < data.maxCost\">{{data.costCurrency}} {{data.minCost}}-{{data.maxCost}}</div>\n                </div>\n            </a>\n        </article>\n    </div>\n    <div *ngIf=\"itemsPerPage > 4\" class=\"ws-pages\">\n        <a class=\"page-numbers\" *ngIf=\"pageNumbers\" [ngClass]=\"{'disabled': activePage <=1 }\" [href]=\"createPageLink(activePage-1)\">Previous</a>\n        <a class=\"page-numbers\" [ngClass]=\"{'active-page': activePage == page}\" *ngFor=\"let page of pageNumbers;\" [href]=\"createPageLink(page)\">{{page}}</a>\n        <a class=\"page-numbers\" *ngIf=\"pageNumbers\" [ngClass]=\"{'disabled': activePage == pageNumbers.length }\"[href]=\"createPageLink(activePage-1+2)\">Next</a>\n    </div>\n</div>"

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\n    <navi-bar [showFilters]=\"true\" (filtersDropdownToggle)=\"toggleFilterDropdown($event)\"></navi-bar>\n    <div class=\"filters\" [ngClass]=\"{'hideFilter': hideFilter}\" id=\"filters\">\n        <workshop-filter (minPriceFilterChanged)=\"setMinPrice($event)\" (maxPriceFilterChanged)=\"setMaxPrice($event)\" (fromDateChanged)=\"setFromDate($event)\"\n            (toDateChanged)=\"setToDate($event)\" (locationFilterChanged)=\"setLocationIdList($event)\" (categoryFilterChanged)=\"setCategoryList($event)\"\n            (applyFilters)=\"toggleFilter($event)\"></workshop-filter>\n    </div>\n    <div>\n        <div class=\"list\">\n            <workshops-list [activePage]=\"pageNumber\"></workshops-list>\n            <div class=\"footer\">\n                <footer></footer>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ },
/* 100 */,
/* 101 */,
/* 102 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 103 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 104 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 118 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 119 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 120 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports = require("ng2-pagination");

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports = require("rxjs");

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/empty");

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 132 */,
/* 133 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmVjMzNlZGZlM2IxYmEwZWU4ODQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2ludGVyZmFjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1wYWdpbmF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBSXhDO0lBY0k7UUFIUSxnQkFBVyxHQUErQixFQUFFLENBQUM7UUFDN0Msb0JBQWUsR0FBOEIsRUFBRSxDQUFDO1FBSXBELElBQUksQ0FBQyxVQUFVLEdBQUcsMENBQTBDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxrREFB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Q0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLElBQUksTUFBTSxFQUFDLENBQUMsQ0FBQztZQUMxSCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2xTLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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SyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2SSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hKLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLDZCQUE2QixDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsSCxDQUFDO1FBQ0QsSUFB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QUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDMUYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVB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QXlGLG1CQUFtQixHQUFHLGNBQWMsR0FBRyxjQUFjLGdOQUFnTiw0QkFBNEIsd0dBQXdHLGtDQUFrQyxvQ0FBb0MscUNBQXFDLE1BQU0sMkVBQTJFLDhDQUE4Qyx5RTs7Ozs7O0FDQW4vRCxtTUFBbU0seUJBQXlCLDZwQjs7Ozs7Ozs7QUNBNU4sOEM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSx3RCIsImZpbGUiOiJzZXJ2ZXIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vcnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9yeSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0fSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEzMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmVjMzNlZGZlM2IxYmEwZWU4ODQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0lMb2NhdGlvbiwgSVBob3RvZ3JhcGhlcn0gZnJvbSAnLi4vd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnlcbntcbiAgICBwcml2YXRlIGNkbkJhc2VVcmw7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlQmFzZVVybDtcbiAgICBwcml2YXRlIHBpeGVsYXRlZFBsYW5ldEFQSVVybDtcbiAgICBwcml2YXRlIGxvY2F0aW9uc1VybDtcbiAgICBwcml2YXRlIHdvcmtzaG9wVHlwZXNVcmw7XG4gICAgcHJpdmF0ZSBwaG90b2dyYXBoZXJzVXJsO1xuICAgIHByaXZhdGUgbG9jYXRpb25zOklMb2NhdGlvbltdO1xuICAgIHByaXZhdGUgd29ya3Nob3BUeXBlczpzdHJpbmdbXTtcbiAgICBwcml2YXRlIHBob3RvZ3JhcGhlcnM6SVBob3RvZ3JhcGhlcltdO1xuICAgIHByaXZhdGUgbG9jYXRpb25NYXA6IHtba2V5OiBudW1iZXJdOiBJTG9jYXRpb259ID0ge307XG4gICAgcHJpdmF0ZSBsb2NhdGlvbk1hcE5hbWU6e1trZXk6IHN0cmluZ106IElMb2NhdGlvbn0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMuY2RuQmFzZVVybCA9IGBodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0YDtcbiAgICAgICAgdGhpcy5zZXJ2aWNlQmFzZVVybCA9IGBodHRwczovL3BpeGVsYXRlZHBsYW5ldHNlcnZpY2UuYXp1cmV3ZWJzaXRlcy5uZXRgO1xuICAgICAgICB0aGlzLnBpeGVsYXRlZFBsYW5ldEFQSVVybCA9IGAke3RoaXMuc2VydmljZUJhc2VVcmx9L2FwaS9QaXhlbGF0ZWRgO1xuICAgICAgICB0aGlzLmxvY2F0aW9uc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Mb2NhdGlvbnNgO1xuICAgICAgICB0aGlzLndvcmtzaG9wVHlwZXNVcmwgPSBgJHt0aGlzLnBpeGVsYXRlZFBsYW5ldEFQSVVybH0vV29ya3Nob3BUeXBlc2A7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBpeGVsYXRlZFBsYW5ldEFQSVVybCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2F0aW9uc1VybCgpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnNVcmw7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFdvcmtzaG9wVHlwZXNVcmwoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud29ya3Nob3BUeXBlc1VybDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzb2x2ZUltYWdlVXJsKHBhdGg6c3RyaW5nKVxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2RuQmFzZVVybCArIHBhdGg7XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2F0aW9ucygpXG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnM7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRXb3Jrc2hvcFR5cGVzKClcbiAgICB7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmtzaG9wVHlwZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldExvY2F0aW9ucyhsb2NhdGlvbnM6SUxvY2F0aW9uW10pXG4gICAge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gPElMb2NhdGlvbj5sb2NhdGlvbnNbaV07XG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uTWFwW2xvY2F0aW9uLmlkXSA9IGxvY2F0aW9uO1xuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbk1hcE5hbWVbbG9jYXRpb24ubmFtZV0gPSBsb2NhdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gbG9jYXRpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbkJ5TG9jYXRpb25JZCh2YWx1ZTpudW1iZXIpIDogSUxvY2F0aW9uXG4gICAge1xuICAgICAgICBpZighdGhpcy5sb2NhdGlvbk1hcCl7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25NYXBbdmFsdWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2F0aW9uQnlMb2NhdGlvbk5hbWUodmFsdWU6c3RyaW5nKSA6IElMb2NhdGlvblxuICAgIHtcbiAgICAgICAgaWYoIXRoaXMubG9jYXRpb25NYXBOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25NYXBOYW1lW3ZhbHVlXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXM6c3RyaW5nW10pXG4gICAge1xuICAgICAgICB0aGlzLndvcmtzaG9wVHlwZXMgPSB3b3Jrc2hvcFR5cGVzO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCdcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5JztcblxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xuXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhdGlvbiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wT3ZlcnZpZXcge1xuICAgIHdvcmtzaG9wSWQ6IG51bWJlcixcbiAgICB3b3Jrc2hvcFR5cGU6IHN0cmluZyxcbiAgICBudW1iZXJPZldvcmtzaG9wczogbnVtYmVyLFxuICAgIHN0YXJ0RGF0ZUZpcnN0PzogRGF0ZSxcbiAgICBlbmREYXRlRmlyc3Q/OiBEYXRlLFxuICAgIG1pbkNvc3Q/OiBudW1iZXIsXG4gICAgbWF4Q29zdD86IG51bWJlcixcbiAgICBjb3N0Q3VycmVuY3k/OiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGltYWdlTGluazogc3RyaW5nLFxuICAgIGxvY2F0aW9uSWQ6IG51bWJlcixcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BEdG8ge1xuICAgIHdvcmtzaG9wczogSVdvcmtzaG9wT3ZlcnZpZXdbXSxcbiAgICB0b3RhbDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVBob3RvZ3JhcGhlciB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIHByb2ZpbGVQaG90b0xpbms6IHN0cmluZztcbiAgICB3ZWJzaXRlTGluazogc3RyaW5nO1xuICAgIGxvY2F0aW9uSWQ/OiBudW1iZXI7XG4gICAgbW9yZUluZm86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlXb3Jrc2hvcERldGFpbHMge1xuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcbiAgICBlbmREYXRlOiBEYXRlO1xuICAgIGNvc3Q/OiBudW1iZXI7XG4gICAgbGluazogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXb3Jrc2hvcERldGFpbHMge1xuICAgIHdvcmtzaG9wSWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBpdGluZXJhcnk6IElJdGluZXJhcnlbXTtcbiAgICBhZGR0aW9uYWxJbmZvcm1hdGlvbjogc3RyaW5nO1xuICAgIGltYWdlTGluazogc3RyaW5nO1xuICAgIGxpbms/OiBzdHJpbmc7XG4gICAgbG9jYXRpb25JZDogbnVtYmVyO1xuICAgIHdvcmtzaG9wVHlwZTogc3RyaW5nO1xuICAgIG11bHRpV29ya3Nob3BEZXRhaWxzOiBJTXVsdGlXb3Jrc2hvcERldGFpbHNbXTtcbiAgICBtaW5Db3N0OiBudW1iZXI7XG4gICAgbWF4Q29zdDogbnVtYmVyO1xuICAgIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGluZXJhcnkge1xuICAgIGRheTogbnVtYmVyO1xuICAgIGxvY2F0aW9uOiBzdHJpbmc7XG4gICAgY29udGVudDogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV29ya3Nob3BSZXBvc2l0b3J5IHtcblxuICAgIHB1YmxpYyBnbG9iYWxDb25zdGFudHM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTogR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSkge1xuICAgICAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb25zKCk7XG4gICAgICAgIHRoaXMuZ2V0V29ya3Nob3BUeXBlcygpO1xuICAgIH1cblxuICAgIGdldFdvcmtzaG9wT3ZlcnZpZXcocGF0aDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxJV29ya3Nob3BEdG8+IHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7cGF0aH0mcGFnZU51bWJlcj0ke3BhZ2V9Jm51bWJlck9mUmVzdWx0cz0ke2l0ZW1zUGVyUGFnZX1gO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChxdWVyeSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldExvY2F0aW9uc0ludGVybmFsKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0TG9jYXRpb25zVXJsKCkpXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpIGFzIElMb2NhdGlvbltdO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0TG9jYXRpb25zKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRMb2NhdGlvbnMoKTtcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb25zSW50ZXJuYWwoKS50aGVuKGxvY2F0aW9ucyA9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbENvbnN0YW50cy5zZXRMb2NhdGlvbnMobG9jYXRpb25zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdvcmtzaG9wVHlwZXNJbnRlcm5hbCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFdvcmtzaG9wVHlwZXNVcmwoKSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW107XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRXb3Jrc2hvcFR5cGVzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRXb3Jrc2hvcFR5cGVzKCk7XG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHdUeXBlcyA9IHRoaXMuZ2V0V29ya3Nob3BUeXBlc0ludGVybmFsKCkudGhlbih3b3Jrc2hvcFR5cGVzID0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzLnNldFdvcmtzaG9wVHlwZXMod29ya3Nob3BUeXBlcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtzaG9wVHlwZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIHdUeXBlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkOiBzdHJpbmcpOiBQcm9taXNlPElXb3Jrc2hvcERldGFpbHM+IHtcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFBpeGVsYXRlZFBsYW5ldEFQSVVybCgpfS9Xb3Jrc2hvcERldGFpbHM/d29ya3Nob3BJZD0ke3dvcmtzaG9wSWR9YDtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJV29ya3Nob3BEZXRhaWxzPnJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFydGljczJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFydGljczJcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnksIElXb3Jrc2hvcE92ZXJ2aWV3IH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3b3Jrc2hvcHMtbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wc0xpc3RDb21wb25lbnQge1xuXG4gICAgQElucHV0KCkgYWN0aXZlUGFnZTogbnVtYmVyO1xuXG4gICAgcXVlcnlQYXRoOiBzdHJpbmc7XG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XG5cbiAgICBhc3luY0RhdGE6IE9ic2VydmFibGU8SVdvcmtzaG9wT3ZlcnZpZXdbXT47XG4gICAgcGFnZTogbnVtYmVyID0gMTtcbiAgICB0b3RhbDogbnVtYmVyO1xuICAgIHBhZ2VOdW1iZXJzOiBudW1iZXJbXTtcbiAgICBsb2FkaW5nOiBib29sZWFuO1xuICAgIHdvcmtzaG9wczogSVdvcmtzaG9wT3ZlcnZpZXdbXTtcblxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBhbnk7XG4gICAgcHJpdmF0ZSBjZFJlZjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMiA9IGFuZ3VsYXJ0aWNzMjtcbiAgICAgICAgdGhpcy53b3Jrc2hvcHMgPSBbXTtcbiAgICAgICAgdGhpcy5jZFJlZiA9IGNkUmVmO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICB2YXIgbW9udGhOYW1lcyA9IFtcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXG4gICAgICAgICAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLFxuICAgICAgICAgICAgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIixcbiAgICAgICAgICAgIFwiTm92XCIsIFwiRGVjXCJcbiAgICAgICAgXTtcbiAgICAgICAgdmFyIGRhdGVWYWwgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgdmFyIGRheSA9IGRhdGVWYWwuZ2V0RGF0ZSgpO1xuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGVWYWwuZ2V0TW9udGgoKTtcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlVmFsLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSAke3llYXJ9YDtcbiAgICB9XG5cbiAgICBmb3JtYXRMb2NhdGlvbihsb2NhdGlvbklkKSB7XG4gICAgICAgIGxldCBsb2NhdGlvbk9iamVjdCA9IHRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5nZXRMb2NhdGlvbkJ5TG9jYXRpb25JZChsb2NhdGlvbklkKTtcbiAgICAgICAgaWYgKGxvY2F0aW9uT2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25PYmplY3QubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIlRCRFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0V29ya3Nob3BzRGF0YShwYXRoOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgd3NQZXJQYWdlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnR2V0V29ya3Nob3BzRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BzTGlzdENvbXBvbmVudCcgfSB9KTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5xdWVyeVBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHdzUGVyUGFnZTtcbiAgICAgICAgdGhpcy5hc3luY0RhdGEgPSB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRXb3Jrc2hvcE92ZXJ2aWV3KHBhdGgsIHBhZ2UsIHdzUGVyUGFnZSlcbiAgICAgICAgICAgIC5kbyhyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZU51bWJlcnMgPSBBcnJheShNYXRoLmNlaWwocmVzLnRvdGFsIC8gd3NQZXJQYWdlKSkuZmlsbCgwKS5tYXAoKHgsIGkpID0+IGkgKyAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy53b3Jrc2hvcHMpO1xuXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIGNyZWF0ZVdvcmtzaG9wRGV0YWlsc1VybCh3b3Jrc2hvcElkOiBzdHJpbmcsIHdvcmtzaG9wTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgd29ya3Nob3BOYW1lID0gd29ya3Nob3BOYW1lLnJlcGxhY2UoLyAvZywgXCItXCIpO1xuICAgICAgICByZXR1cm4gYC9waG90b2dyYXBoeS13b3Jrc2hvcC1kZXRhaWxzLyR7d29ya3Nob3BOYW1lfS8ke3dvcmtzaG9wSWR9YDtcbiAgICB9XG5cbiAgICBjcmVhdGVQYWdlTGluayhwYWdlTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYC93b3Jrc2hvcHMvJHtwYWdlTnVtYmVyfWA7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Fib3V0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC11cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0VXNDb21wb25lbnQge1xuXG4gIHN1Ym1pdHRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBmbmFtZTogc3RyaW5nO1xuICBzdWJqZWN0VGV4dDogc3RyaW5nO1xuICBtZXNzYWdlVGV4dDogc3RyaW5nO1xuICBlbWFpbElkOiBzdHJpbmc7XG4gIHNob3dNZXNzYWdlQm94OiBib29sZWFuO1xuICBzdWJtaXRNZXNzYWdlOiBzdHJpbmc7XG4gIHByaXZhdGUgZmllbGRzOiBzdHJpbmc7XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc2hvd01lc3NhZ2VCb3ggPSB0cnVlO1xuICB9XG5cbiAgaGlkZU1lc3NhZ2Vib3goKSB7XG4gICAgdGhpcy5zaG93TWVzc2FnZUJveCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3VibWl0TWVzc2FnZSA9IFwiTWVzc2FnZSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XCI7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2Vycm9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50J1xuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5AVmlld0NoaWxkKFdvcmtzaG9wc0xpc3RDb21wb25lbnQpIHdvcmtzaG9wc0xpc3RDaGlsZENvbXA6V29ya3Nob3BzTGlzdENvbXBvbmVudDtcblxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50cyA6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCBzdGFydERhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xuXHRcdGxldCBlbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xuXHRcdGxldCBxdWVyeSA9IGAke3RoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFBpeGVsYXRlZFBsYW5ldEFQSVVybCgpfS9Xb3Jrc2hvcHM/c3RhcnREYXRlRmlsdGVyPSR7c3RhcnREYXRlfSZlbmREYXRlRmlsdGVyPSR7ZW5kRGF0ZX1gO1xuXHRcdHRoaXMud29ya3Nob3BzTGlzdENoaWxkQ29tcC5nZXRXb3Jrc2hvcHNEYXRhKHF1ZXJ5LCAxLCA0KTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50LmNzcyddICAgIFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlUmVkaXJlY3RDb21wb25lbnQgeyBcblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IGFueVxuICAgIHByaXZhdGUgdGltZXI6YW55O1xuXG4gICAgY29uc3RydWN0b3IoXG5cdFx0YW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uLFxuICAgICAgICBwcml2YXRlIG5nWm9uZTpOZ1pvbmUpIHtcblx0XHRcdHRoaXMuYW5ndWxhcnRpY3MyID0gYW5ndWxhcnRpY3MyO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgbGV0IHVybDogc3RyaW5nO1xuXHRcdHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgdXJsID0gcGFyYW1zWydleHRlcm5hbFVybCddO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdOYXZpZ2F0ZVRvRXh0ZXJuYWxVcmwnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnTmF2aWdhdGlvbkV2ZW50JyB9fSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gT2JzZXJ2YWJsZS5pbnRlcnZhbCg1MDAwKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdmlnYXRlIHRvIHRoZSBVUkwgKEFzc3VtZXMgdGhlIHVybCBpcyBodHRwOi8vIG9yIGh0dHBzOi8vXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBQcml2YWN5Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSwgSVdvcmtzaG9wRGV0YWlscyB9IGZyb20gJy4uL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlT2JqZWN0IHtcbiAgICBpbWFnZUxpbms6IHN0cmluZztcbiAgICBoaWRlSW1hZ2U6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIElUYWJzIHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHNob3dUYWI6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQge1xuICAgIHdvcmtzaG9wRGV0YWlsczogSVdvcmtzaG9wRGV0YWlscztcbiAgICBpbWFnZXNMaW5rOiBJSW1hZ2VPYmplY3RbXTtcbiAgICBoaWRlTW9kYWw6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzbGlkZUluZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBwcml2YXRlIHRhYnM6IElUYWJzW107XG5cbiAgICBwcml2YXRlIHByZXZpb3VzQWN0aXZlVGFiOiBJVGFicztcbiAgICBwcml2YXRlIHRhYmNvbnRlbnQ6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xuICAgIHByaXZhdGUgdGFiTGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgdGhpcy53b3Jrc2hvcERldGFpbHMgPSA8YW55Pnt9O1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2xpZGVJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRJbWdEYXRhKCk7XG4gICAgICAgIGxldCB3b3Jrc2hvcElkOiBzdHJpbmc7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB3b3Jrc2hvcElkID0gcGFyYW1zWydpZCddO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXRXb3Jrc2hvcERldGFpbCh3b3Jrc2hvcElkKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFicygpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGdldFdvcmtzaG9wRGV0YWlsKHdvcmtzaG9wSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRXb3Jrc2hvcERldGFpbHMod29ya3Nob3BJZClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMud29ya3Nob3BEZXRhaWxzID0gZGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvcGVuTW9kYWwoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZShpbmRleCk7XG4gICAgfVxuXG4gICAgcGx1c1NsaWRlcyhuKSB7XG4gICAgICAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXggKz0gbik7XG4gICAgfVxuXG4gICAgY3VycmVudFNsaWRlKG4pIHtcbiAgICAgICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCA9IG4pO1xuICAgIH1cblxuICAgIHNob3dTbGlkZXMobikge1xuICAgICAgICBjb25zdCB0b3RhbEltYWdlcyA9IHRoaXMuaW1hZ2VzTGluay5sZW5ndGg7XG4gICAgICAgIGlmIChuID4gdG90YWxJbWFnZXMpIHsgdGhpcy5zbGlkZUluZGV4ID0gMSB9XG4gICAgICAgIGlmIChuIDwgMSkgeyB0aGlzLnNsaWRlSW5kZXggPSB0b3RhbEltYWdlcyAtIDEgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvdGFsSW1hZ2VzOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzTGlua1tpXS5oaWRlSW1hZ2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1hZ2VzTGlua1t0aGlzLnNsaWRlSW5kZXggLSAxXS5oaWRlSW1hZ2UgPSBmYWxzZTtcbiAgICB9XG5cblxuICAgIGdldEltZ0RhdGEoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzTGluayA9IFt7XG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvUmlja0h1bGJlcnQvaGRyLmpwZ1wiLFxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9UaW1Wb2xsbWVyL3BlcnUuanBnXCIsXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL1JpY2tIdWxiZXJ0L3VyYmFuLmpwZ1wiLFxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9DcmFpZ01jL3RldG9ucy5qcGdcIixcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvS2F0aGxlZW5SZWVkZXIvT09BLmpwZ1wiLFxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9SaWNrSHVsYmVydC9jaGljYWdvLmpwZ1wiLFxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXG4gICAgICAgIH1dXG4gICAgfVxuXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIHZhciBtb250aE5hbWVzID0gW1xuICAgICAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcbiAgICAgICAgICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsXG4gICAgICAgICAgICBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLFxuICAgICAgICAgICAgXCJOb3ZcIiwgXCJEZWNcIlxuICAgICAgICBdO1xuICAgICAgICB2YXIgZGF0ZVZhbCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgICAgICB2YXIgZGF5ID0gZGF0ZVZhbC5nZXREYXRlKCk7XG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZVZhbC5nZXRNb250aCgpO1xuICAgICAgICB2YXIgeWVhciA9IGRhdGVWYWwuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICByZXR1cm4gYCR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHtkYXl9ICR7eWVhcn1gO1xuICAgIH1cblxuXG4gICAgaW5pdGlhbGl6ZVRhYnMoKSB7XG4gICAgICAgIHRoaXMudGFicyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdhbGxlcnlcIixcbiAgICAgICAgICAgICAgICBzaG93VGFiOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJQaG90b2dyYXBoZXJzXCIsXG4gICAgICAgICAgICAgICAgc2hvd1RhYjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIuc2hvd1RhYiA9IHRydWU7XG4gICAgfVxuXG4gICAgb3BlblRhYnModGFiTnVtYmVyOiBudW1iZXIpIHsgIFxuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiLnNob3dUYWIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50YWJzW3RhYk51bWJlcl0uc2hvd1RhYiA9IHRydWU7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB0aGlzLnRhYnNbdGFiTnVtYmVyXTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXG5cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wc0NvbXBvbmVudCB7XG5cdHByaXZhdGUgcXVlcnk6IHN0cmluZztcblx0cHJpdmF0ZSBzdGFydERhdGU6IHN0cmluZztcblx0cHJpdmF0ZSBlbmREYXRlOiBzdHJpbmc7XG5cdHByaXZhdGUgbG9jYXRpb25JZExpc3Q6c3RyaW5nO1xuXHRwcml2YXRlIGNhdGVnb3J5TGlzdDpzdHJpbmc7XG5cdHByaXZhdGUgbWluUHJpY2U6bnVtYmVyO1xuXHRwcml2YXRlIG1heFByaWNlOm51bWJlcjtcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBwYWdlTnVtYmVyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSB3b3Jrc2hvcHNQZXJQYWdlOiBudW1iZXIgPSA4O1x0XG5cdFxuXHRwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xuXHRcblx0QFZpZXdDaGlsZChXb3Jrc2hvcHNMaXN0Q29tcG9uZW50KSB3b3Jrc2hvcHNMaXN0Q2hpbGRDb21wOldvcmtzaG9wc0xpc3RDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnksIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUpXG5cdHtcblx0XHR0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XG5cdFx0dGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVGaWx0ZXJEcm9wZG93bihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IGV2ZW50O1xuXHR9XG5cdFxuXHRuZ09uSW5pdCgpIHtcblx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdHRoaXMuc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xuICAgICAgICBsZXQgc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYXJhbXNbJ3BhZ2VOdW1iZXInXTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XG5cdFx0fVxuXHRcblx0dXBkYXRlVXJsKClcblx0e1xuXHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRQaXhlbGF0ZWRQbGFuZXRBUElVcmwoKX0vV29ya3Nob3BzP3N0YXJ0RGF0ZUZpbHRlcj0ke3RoaXMuc3RhcnREYXRlfSZlbmREYXRlRmlsdGVyPSR7dGhpcy5lbmREYXRlfWA7XG5cdFx0aWYodGhpcy5sb2NhdGlvbklkTGlzdCAhPSBudWxsICYmIHRoaXMubG9jYXRpb25JZExpc3QgIT0gXCJcIilcblx0XHR7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0mbG9jYXRpb25JZEZpbHRlcj0ke3RoaXMubG9jYXRpb25JZExpc3R9YDtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5jYXRlZ29yeUxpc3QgIT0gbnVsbCAmJiB0aGlzLmNhdGVnb3J5TGlzdCAhPSBcIlwiKVxuXHRcdHtcblx0XHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLnF1ZXJ5fSZ3b3Jrc2hvcFR5cGU9JHt0aGlzLmNhdGVnb3J5TGlzdH1gO1xuXHRcdH1cblx0XHRcblx0XHRpZih0aGlzLm1pblByaWNlID4gMClcblx0XHR7XG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0mbWluUHJpY2U9JHt0aGlzLm1pblByaWNlLnRvU3RyaW5nKCl9YDtcblx0XHR9XG5cdFx0XG5cdFx0aWYodGhpcy5tYXhQcmljZSA+IDApXG5cdFx0e1xuXHRcdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMucXVlcnl9Jm1heFByaWNlPSR7dGhpcy5tYXhQcmljZS50b1N0cmluZygpfWA7XG5cdFx0fVxuICAgICAgICBcblx0XHRpZih0aGlzLnF1ZXJ5ICYmIHRoaXMucGFnZU51bWJlcikge1xuXHRcdFx0dGhpcy53b3Jrc2hvcHNMaXN0Q2hpbGRDb21wLmdldFdvcmtzaG9wc0RhdGEodGhpcy5xdWVyeSwgdGhpcy5wYWdlTnVtYmVyLCB0aGlzLndvcmtzaG9wc1BlclBhZ2UpO1xuXHRcdH1cblx0fVxuXG4gICAgc2V0RnJvbURhdGUoZnJvbURhdGU6IGFueSlcblx0e1xuICAgICAgICBsZXQgcHJldmlvdXNTdGFydERhdGUgPSB0aGlzLnN0YXJ0RGF0ZTtcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBgJHtmcm9tRGF0ZS55ZWFyfS8ke2Zyb21EYXRlLm1vbnRofS8ke2Zyb21EYXRlLmRheX1gO1xuXHRcdGlmKHRoaXMuc3RhcnREYXRlID09IFwiMC8wLzBcIilcblx0XHR7XG5cdFx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0dGhpcy5zdGFydERhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xuXHRcdH1cbiAgICAgICAgXG4gICAgICAgIGlmKHByZXZpb3VzU3RhcnREYXRlICE9PSB0aGlzLnN0YXJ0RGF0ZSlcbiAgICAgICAge1xuXHRcdCAgICB0aGlzLnVwZGF0ZVVybCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydERhdGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cdHRvZ2dsZUZpbHRlcigpIHtcblx0XHR0aGlzLmhpZGVGaWx0ZXIgPSB0cnVlO1xuXHR9XG5cdFxuXHRzZXRUb0RhdGUodG9EYXRlOiBhbnkpXG5cdHtcbiAgICAgICAgbGV0IHByZXZpb3VzRW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZTtcbiAgICAgICAgdGhpcy5lbmREYXRlID0gYCR7dG9EYXRlLnllYXJ9LyR7dG9EYXRlLm1vbnRofS8ke3RvRGF0ZS5kYXl9YDtcblx0XHRpZih0aGlzLmVuZERhdGUgPT0gXCIwLzAvMFwiKVxuXHRcdHtcblx0XHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdFx0XHR0aGlzLmVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XG5cdFx0fVxuXG4gICAgICAgIGlmKHByZXZpb3VzRW5kRGF0ZSAhPSB0aGlzLmVuZERhdGUpXG4gICAgICAgIHtcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZW5kRGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cdFxuXHRzZXRMb2NhdGlvbklkTGlzdChsb2NhdGlvbklkTGlzdDogYW55KVxuXHR7XG4gICAgICAgIGlmKGxvY2F0aW9uSWRMaXN0ICE9IHRoaXMubG9jYXRpb25JZExpc3QpXG4gICAgICAgIHtcblx0XHQgICAgdGhpcy5sb2NhdGlvbklkTGlzdCA9IGxvY2F0aW9uSWRMaXN0O1xuXHRcdCAgICB0aGlzLnVwZGF0ZVVybCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbklkTGlzdCk7XG4gICAgICAgIH1cblx0fVxuXHRcblx0c2V0Q2F0ZWdvcnlMaXN0KGNhdGVnb3J5TGlzdDogYW55KVxuXHR7XG4gICAgICAgIGlmKGNhdGVnb3J5TGlzdCAhPSB0aGlzLmNhdGVnb3J5TGlzdClcbiAgICAgICAge1xuXHRcdCAgICB0aGlzLmNhdGVnb3J5TGlzdCA9IGNhdGVnb3J5TGlzdDtcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5TGlzdCk7XG4gICAgICAgIH1cblx0fVxuXHRcblx0c2V0TWluUHJpY2UobWluUHJpY2U6IG51bWJlcilcblx0e1xuICAgICAgICBpZih0aGlzLm1pblByaWNlICE9IG1pblByaWNlKVxuICAgICAgICB7XG5cdFx0ICAgIHRoaXMubWluUHJpY2UgPSBtaW5QcmljZTtcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1pblByaWNlKTtcbiAgICAgICAgfVxuXHR9XG5cdFxuXHRzZXRNYXhQcmljZShtYXhQcmljZTogbnVtYmVyKVxuXHR7XG4gICAgICAgIGlmKHRoaXMubWF4UHJpY2UgIT0gbWF4UHJpY2UpXG4gICAgICAgIHtcblx0XHQgICAgdGhpcy5tYXhQcmljZSA9IG1heFByaWNlO1xuXHRcdCAgICB0aGlzLnVwZGF0ZVVybCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobWF4UHJpY2UpO1xuICAgICAgICB9XG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDIwMDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiBcIltteWRwZm9jdXNdXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dChcIm15ZHBmb2N1c1wiKSB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XG5cbiAgICAvLyBGb2N1cyB0byBlbGVtZW50OiBpZiB2YWx1ZSAwID0gZG9uJ3Qgc2V0IGZvY3VzLCAxID0gc2V0IGZvY3VzXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIsIFtdKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1kYXktbGFiZWxzLmludGVyZmFjZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbXktbW9udGguaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci1kYXkuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci1tb250aC5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LWNhbGVuZGFyLXllYXIuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS13ZWVrLmludGVyZmFjZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LWxvY2FsZS5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LWRhdGUtbW9kZWwuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1pbnB1dC1maWVsZC1jaGFuZ2VkLmludGVyZmFjZVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbXktaW5wdXQtZm9jdXMtYmx1ci5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LXdlZWtkYXkuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1tYXJrZWQtZGF0ZS5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LW1hcmtlZC1kYXRlcy5pbnRlcmZhY2VcIjtcbmV4cG9ydCAqIGZyb20gXCIuL215LWRlZmF1bHQtbW9udGguaW50ZXJmYWNlXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9teS1zZWxlY3Rvci5pbnRlcmZhY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvaW50ZXJmYWNlcy9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgUmVuZGVyZXIsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IElNeURhdGUsIElNeURhdGVSYW5nZSwgSU15TW9udGgsIElNeUNhbGVuZGFyRGF5LCBJTXlDYWxlbmRhck1vbnRoLCBJTXlDYWxlbmRhclllYXIsIElNeVdlZWssIElNeURheUxhYmVscywgSU15TW9udGhMYWJlbHMsIElNeU9wdGlvbnMsIElNeURhdGVNb2RlbCwgSU15SW5wdXRGaWVsZENoYW5nZWQsIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsIElNeUlucHV0Rm9jdXNCbHVyLCBJTXlNYXJrZWREYXRlcywgSU15TWFya2VkRGF0ZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvaW5kZXhcIjtcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci51dGlsLnNlcnZpY2VcIjtcblxuLy8gd2VicGFjazFfXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5jb25zdCBteURwU3R5bGVzOiBzdHJpbmcgPSByZXF1aXJlKFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzXCIpO1xuY29uc3QgbXlEcFRwbDogc3RyaW5nID0gcmVxdWlyZShcIi4vbXktZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWxcIik7XG4vLyB3ZWJwYWNrMl9cblxuZXhwb3J0IGNvbnN0IE1ZRFBfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNeURhdGVQaWNrZXIpLFxuICAgIG11bHRpOiB0cnVlXG59O1xuXG5lbnVtIENhbFRvZ2dsZSB7T3BlbiA9IDEsIENsb3NlQnlEYXRlU2VsID0gMiwgQ2xvc2VCeUNhbEJ0biA9IDMsIENsb3NlQnlPdXRDbGljayA9IDQsIENsb3NlQnlFc2MgPSA1LCBDbG9zZUJ5QXBpID0gNn1cbmVudW0gWWVhciB7bWluID0gMTEwMCwgbWF4ID0gOTEwMH1cbmVudW0gSW5wdXRGb2N1c0JsdXIge2ZvY3VzID0gMSwgYmx1ciA9IDJ9XG5lbnVtIEtleUNvZGUge2VudGVyID0gMTMsIGVzYyA9IDI3LCBzcGFjZSA9IDMyfVxuZW51bSBNb250aElkIHtwcmV2ID0gMSwgY3VyciA9IDIsIG5leHQgPSAzfVxuXG5jb25zdCBNTSA9IFwibW1cIjtcbmNvbnN0IE1NTSA9IFwibW1tXCI7XG5jb25zdCBERCA9IFwiZGRcIjtcbmNvbnN0IFlZWVkgPSBcInl5eXlcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktZGF0ZS1waWNrZXJcIixcbiAgICBleHBvcnRBczogXCJteWRhdGVwaWNrZXJcIixcbiAgICBzdHlsZXM6IFtteURwU3R5bGVzXSxcbiAgICB0ZW1wbGF0ZTogbXlEcFRwbCxcbiAgICBwcm92aWRlcnM6IFtMb2NhbGVTZXJ2aWNlLCBVdGlsU2VydmljZSwgTVlEUF9WQUxVRV9BQ0NFU1NPUl0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcblxuZXhwb3J0IGNsYXNzIE15RGF0ZVBpY2tlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAgIEBJbnB1dCgpIG9wdGlvbnM6IElNeU9wdGlvbnM7XG4gICAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2VsZWN0b3I6IG51bWJlcjtcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+KCk7XG4gICAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcbiAgICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPigpO1xuICAgIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xuICAgIEBWaWV3Q2hpbGQoXCJzZWxlY3RvckVsXCIpIHNlbGVjdG9yRWw6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImlucHV0Qm94RWxcIikgaW5wdXRCb3hFbDogRWxlbWVudFJlZjtcblxuICAgIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XG4gICAgb25Ub3VjaGVkQ2I6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICBzaG93U2VsZWN0b3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICB2aXNpYmxlTW9udGg6IElNeU1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XG4gICAgc2VsZWN0ZWRNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcbiAgICBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XG4gICAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBkYXRlczogQXJyYXk8SU15V2Vlaz4gPSBbXTtcbiAgICBtb250aHM6IEFycmF5PEFycmF5PElNeUNhbGVuZGFyTW9udGg+PiA9IFtdO1xuICAgIHllYXJzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhclllYXI+PiA9IFtdO1xuICAgIHNlbGVjdGlvbkRheVR4dDogc3RyaW5nID0gXCJcIjtcbiAgICBpbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRpc2FibGVUb2RheUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGRheUlkeDogbnVtYmVyID0gMDtcblxuICAgIHNlbGVjdE1vbnRoOiBib29sZWFuID0gZmFsc2U7XG4gICAgc2VsZWN0WWVhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJldk1vbnRoRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBuZXh0TW9udGhEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByZXZZZWFyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBuZXh0WWVhckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJldlllYXJzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBuZXh0WWVhcnNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJldk1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQucHJldjtcbiAgICBjdXJyTW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5jdXJyO1xuICAgIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XG5cbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgICBvcHRzOiBJTXlPcHRpb25zID0ge1xuICAgICAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+IHt9LFxuICAgICAgICBtb250aExhYmVsczogPElNeU1vbnRoTGFiZWxzPiB7fSxcbiAgICAgICAgZGF0ZUZvcm1hdDogPHN0cmluZz4gXCJcIixcbiAgICAgICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj4gdHJ1ZSxcbiAgICAgICAgdG9kYXlCdG5UeHQ6IDxzdHJpbmc+IFwiXCIsXG4gICAgICAgIGZpcnN0RGF5T2ZXZWVrOiA8c3RyaW5nPiBcIlwiLFxuICAgICAgICBzYXRIaWdobGlnaHQ6IDxib29sZWFuPiBmYWxzZSxcbiAgICAgICAgc3VuSGlnaGxpZ2h0OiA8Ym9vbGVhbj4gdHJ1ZSxcbiAgICAgICAgaGlnaGxpZ2h0RGF0ZXM6IDxBcnJheTxJTXlEYXRlPj4gW10sXG4gICAgICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj4gdHJ1ZSxcbiAgICAgICAgbWFya0N1cnJlbnRNb250aDogPGJvb2xlYW4+IHRydWUsXG4gICAgICAgIG1hcmtDdXJyZW50WWVhcjogPGJvb2xlYW4+IHRydWUsXG4gICAgICAgIGRpc2FibGVVbnRpbDogPElNeURhdGU+IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfSxcbiAgICAgICAgZGlzYWJsZVNpbmNlOiA8SU15RGF0ZT4ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxuICAgICAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGU+PiBbXSxcbiAgICAgICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGU+PiBbXSxcbiAgICAgICAgbWFya0RhdGVzOiA8QXJyYXk8SU15TWFya2VkRGF0ZXM+PiBbXSxcbiAgICAgICAgbWFya1dlZWtlbmRzOiA8SU15TWFya2VkRGF0ZT4ge30sXG4gICAgICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj4gW10sXG4gICAgICAgIGRpc2FibGVXZWVrZW5kczogPGJvb2xlYW4+IGZhbHNlLFxuICAgICAgICBkaXNhYmxlV2Vla2RheXM6IDxBcnJheTxzdHJpbmc+PiBbXSxcbiAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiA8Ym9vbGVhbj4gZmFsc2UsXG4gICAgICAgIGhlaWdodDogPHN0cmluZz4gXCIzNHB4XCIsXG4gICAgICAgIHdpZHRoOiA8c3RyaW5nPiBcIjEwMCVcIixcbiAgICAgICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+IFwiMTRweFwiLFxuICAgICAgICBzZWxlY3RvckhlaWdodDogPHN0cmluZz4gXCIyMzJweFwiLFxuICAgICAgICBzZWxlY3RvcldpZHRoOiA8c3RyaW5nPiBcIjI1MnB4XCIsXG4gICAgICAgIGFsbG93RGVzZWxlY3REYXRlOiA8Ym9vbGVhbj4gZmFsc2UsXG4gICAgICAgIGlubGluZTogPGJvb2xlYW4+IGZhbHNlLFxuICAgICAgICBzaG93Q2xlYXJEYXRlQnRuOiA8Ym9vbGVhbj4gdHJ1ZSxcbiAgICAgICAgc2hvd0RlY3JlYXNlRGF0ZUJ0bjogPGJvb2xlYW4+IGZhbHNlLFxuICAgICAgICBzaG93SW5jcmVhc2VEYXRlQnRuOiA8Ym9vbGVhbj4gZmFsc2UsXG4gICAgICAgIGFsaWduU2VsZWN0b3JSaWdodDogPGJvb2xlYW4+IGZhbHNlLFxuICAgICAgICBvcGVuU2VsZWN0b3JUb3BPZklucHV0OiA8Ym9vbGVhbj4gZmFsc2UsXG4gICAgICAgIGluZGljYXRlSW52YWxpZERhdGU6IDxib29sZWFuPiB0cnVlLFxuICAgICAgICBlZGl0YWJsZURhdGVGaWVsZDogPGJvb2xlYW4+IHRydWUsXG4gICAgICAgIG1vbnRoU2VsZWN0b3I6IDxib29sZWFuPiB0cnVlLFxuICAgICAgICB5ZWFyU2VsZWN0b3I6IDxib29sZWFuPiB0cnVlLFxuICAgICAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogPGJvb2xlYW4+IHRydWUsXG4gICAgICAgIG1pblllYXI6IDxudW1iZXI+IFllYXIubWluLFxuICAgICAgICBtYXhZZWFyOiA8bnVtYmVyPiBZZWFyLm1heCxcbiAgICAgICAgY29tcG9uZW50RGlzYWJsZWQ6IDxib29sZWFuPiBmYWxzZSxcbiAgICAgICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPiB0cnVlLFxuICAgICAgICBzaG93SW5wdXRGaWVsZDogPGJvb2xlYW4+IHRydWUsXG4gICAgICAgIG9wZW5TZWxlY3Rvck9uSW5wdXRDbGljazogPGJvb2xlYW4+IGZhbHNlLFxuICAgICAgICBhcmlhTGFiZWxJbnB1dEZpZWxkOiA8c3RyaW5nPiBcIkRhdGUgaW5wdXQgZmllbGRcIixcbiAgICAgICAgYXJpYUxhYmVsQ2xlYXJEYXRlOiA8c3RyaW5nPiBcIkNsZWFyIERhdGVcIixcbiAgICAgICAgYXJpYUxhYmVsRGVjcmVhc2VEYXRlOiA8c3RyaW5nPiBcIkRlY3JlYXNlIERhdGVcIixcbiAgICAgICAgYXJpYUxhYmVsSW5jcmVhc2VEYXRlOiA8c3RyaW5nPiBcIkluY3JlYXNlIERhdGVcIixcbiAgICAgICAgYXJpYUxhYmVsT3BlbkNhbGVuZGFyOiA8c3RyaW5nPiBcIk9wZW4gQ2FsZW5kYXJcIixcbiAgICAgICAgYXJpYUxhYmVsUHJldk1vbnRoOiA8c3RyaW5nPiBcIlByZXZpb3VzIE1vbnRoXCIsXG4gICAgICAgIGFyaWFMYWJlbE5leHRNb250aDogPHN0cmluZz4gXCJOZXh0IE1vbnRoXCIsXG4gICAgICAgIGFyaWFMYWJlbFByZXZZZWFyOiA8c3RyaW5nPiBcIlByZXZpb3VzIFllYXJcIixcbiAgICAgICAgYXJpYUxhYmVsTmV4dFllYXI6IDxzdHJpbmc+IFwiTmV4dCBZZWFyXCJcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSwgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbkdsb2JhbChcImRvY3VtZW50XCIsIFwiY2xpY2tcIiwgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3RvciAmJiBldmVudC50YXJnZXQgJiYgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5T3V0Q2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5tb250aFNlbGVjdG9yIHx8IHRoaXMub3B0cy55ZWFyU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyU2VsZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGxldCBvcHRzOiBJTXlPcHRpb25zID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xuICAgICAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAoPElNeU9wdGlvbnM+dGhpcy5vcHRzKVtrXSA9IG9wdHNba107XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgICAgICAgICAgKDxJTXlPcHRpb25zPnRoaXMub3B0cylba10gPSB0aGlzLm9wdGlvbnNba107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRzLm1pblllYXIgPCBZZWFyLm1pbikge1xuICAgICAgICAgICAgdGhpcy5vcHRzLm1pblllYXIgPSBZZWFyLm1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRzLm1heFllYXIgPiBZZWFyLm1heCkge1xuICAgICAgICAgICAgdGhpcy5vcHRzLm1heFllYXIgPSBZZWFyLm1heDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9wdHMuY29tcG9uZW50RGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0b3JUb3BQb3NpdGlvbigpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5vcHRzLm9wZW5TZWxlY3RvclRvcE9mSW5wdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXNldE1vbnRoWWVhclNlbGVjdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvblNlbGVjdE1vbnRoQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gIXRoaXMuc2VsZWN0TW9udGg7XG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE1vbnRoKSB7XG4gICAgICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XG4gICAgICAgICAgICB0aGlzLm1vbnRocy5sZW5ndGggPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkgKz0gMykge1xuICAgICAgICAgICAgICAgIGxldCByb3c6IEFycmF5PElNeUNhbGVuZGFyTW9udGg+ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgMzsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1vbnRoOiBqLCBkYXk6IHRoaXMuZGF5c0luTW9udGgoaiwgdGhpcy52aXNpYmxlTW9udGgueWVhcil9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhciwgbW9udGg6IGosIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh7bmJyOiBqLCBuYW1lOiB0aGlzLm9wdHMubW9udGhMYWJlbHNbal0sIGN1cnJNb250aDogaiA9PT0gdG9kYXkubW9udGggJiYgdGhpcy52aXNpYmxlTW9udGgueWVhciA9PT0gdG9kYXkueWVhciwgc2VsZWN0ZWQ6IGogPT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkaXNhYmxlZDogZGlzYWJsZWR9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tb250aHMucHVzaChyb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb250aENlbGxDbGlja2VkKGNlbGw6IElNeUNhbGVuZGFyTW9udGgpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1jOiBib29sZWFuID0gY2VsbC5uYnIgIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyO1xuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQoY2VsbC5uYnIpLCBtb250aE5icjogY2VsbC5uYnIsIHllYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXJ9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoY2VsbC5uYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1jKTtcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIG9uTW9udGhDZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhck1vbnRoKSB7XG4gICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMub25Nb250aENlbGxDbGlja2VkKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25TZWxlY3RZZWFyQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSAhdGhpcy5zZWxlY3RZZWFyO1xuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0WWVhcikge1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHRoaXMudmlzaWJsZU1vbnRoLnllYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25ZZWFyQ2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJZZWFyKTogdm9pZCB7XG4gICAgICAgIGxldCB5YzogYm9vbGVhbiA9IGNlbGwueWVhciAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcjtcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0LCBtb250aE5icjogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHllYXI6IGNlbGwueWVhcn07XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgY2VsbC55ZWFyLCB5Yyk7XG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIG9uWWVhckNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyWWVhcikge1xuICAgICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm9uWWVhckNlbGxDbGlja2VkKGNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QcmV2WWVhcnMoZXZlbnQ6IGFueSwgeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhcnMoeWVhciAtIDI1KTtcbiAgICB9XG5cbiAgICBvbk5leHRZZWFycyhldmVudDogYW55LCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh5ZWFyICsgMjUpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlWWVhcnMoeWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMueWVhcnMubGVuZ3RoID0gMDtcbiAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuICAgICAgICBmb3IgKGxldCBpID0geWVhcjsgaSA8PSAyMCArIHllYXI7IGkgKz0gNSkge1xuICAgICAgICAgICAgbGV0IHJvdzogQXJyYXk8SU15Q2FsZW5kYXJZZWFyPiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgNTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogaiwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IHRoaXMuZGF5c0luTW9udGgodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGopfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbClcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogaiwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcbiAgICAgICAgICAgICAgICBsZXQgbWluTWF4OiBib29sZWFuID0gaiA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGogPiB0aGlzLm9wdHMubWF4WWVhcjtcbiAgICAgICAgICAgICAgICByb3cucHVzaCh7eWVhcjogaiwgY3VyclllYXI6IGogPT09IHRvZGF5LnllYXIsIHNlbGVjdGVkOiBqID09PSB0aGlzLnZpc2libGVNb250aC55ZWFyLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgbWluTWF4fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnllYXJzLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZZZWFyc0Rpc2FibGVkID0gdGhpcy55ZWFyc1swXVswXS55ZWFyIDw9IHRoaXMub3B0cy5taW5ZZWFyIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHRoaXMueWVhcnNbMF1bMF0ueWVhciAtIDEsIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnllYXJzWzBdWzBdLnllYXIgLSAxKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xuICAgICAgICB0aGlzLm5leHRZZWFyc0Rpc2FibGVkID0gdGhpcy55ZWFyc1s0XVs0XS55ZWFyID49IHRoaXMub3B0cy5tYXhZZWFyIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHRoaXMueWVhcnNbNF1bNF0ueWVhciArIDEsIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XG4gICAgfVxuXG4gICAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZElucHV0RmllbGRDaGFuZ2VkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5tb250aExhYmVscywgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xuICAgICAgICAgICAgaWYgKGRhdGUuZGF5ICE9PSAwICYmIGRhdGUubW9udGggIT09IDAgJiYgZGF0ZS55ZWFyICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUsIENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZvY3VzSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoe3JlYXNvbjogSW5wdXRGb2N1c0JsdXIuZm9jdXMsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG5cbiAgICBvbkJsdXJJbnB1dChldmVudDogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XG4gICAgICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7cmVhc29uOiBJbnB1dEZvY3VzQmx1ci5ibHVyLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuXG4gICAgb25DbG9zZVNlbGVjdG9yKGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZXNjICYmIHRoaXMuc2hvd1NlbGVjdG9yICYmICF0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlFc2MpO1xuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSB2YWx1ZS5sZW5ndGggPiAwO1xuICAgICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoe3ZhbHVlOiB2YWx1ZSwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiBmYWxzZX0pO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcbiAgICB9XG5cbiAgICBpc1RvZGF5RGlzYWJsZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZVRvZGF5QnRuID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KHRoaXMuZ2V0VG9kYXkoKSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xuICAgIH1cblxuICAgIHBhcnNlT3B0aW9ucygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcbiAgICAgICAgbGV0IHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXRXZWVrRGF5cygpO1xuICAgICAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCgpO1xuICAgICAgICB0aGlzLmRheUlkeCA9IHdlZWtEYXlzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICAgICAgaWYgKHRoaXMuZGF5SWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgbGV0IGlkeDogbnVtYmVyID0gdGhpcy5kYXlJZHg7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtEYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrRGF5cy5wdXNoKHRoaXMub3B0cy5kYXlMYWJlbHNbd2Vla0RheXNbaWR4XV0pO1xuICAgICAgICAgICAgICAgIGlkeCA9IHdlZWtEYXlzW2lkeF0gPT09IFwic2FcIiA/IDAgOiBpZHggKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAodmFsdWVbXCJkYXRlXCJdIHx8IHZhbHVlW1wianNkYXRlXCJdIHx8IHZhbHVlW1wiZm9ybWF0dGVkXCJdKSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZVtcImRhdGVcIl0gPyB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlW1wiZGF0ZVwiXSkgOiB2YWx1ZVtcImpzZGF0ZVwiXSA/IHRoaXMucGFyc2VTZWxlY3RlZERhdGUodGhpcy5qc0RhdGVUb015RGF0ZSh2YWx1ZVtcImpzZGF0ZVwiXSkpIDogdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVtcImZvcm1hdHRlZFwiXSk7XG4gICAgICAgICAgICBsZXQgY3ZjOiBib29sZWFuID0gdGhpcy52aXNpYmxlTW9udGgueWVhciAhPT0gdGhpcy5zZWxlY3RlZERhdGUueWVhciB8fCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciAhPT0gdGhpcy5zZWxlY3RlZERhdGUubW9udGg7XG4gICAgICAgICAgICBpZiAoY3ZjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0aGlzLnNlbGVjdGVkRGF0ZS5tb250aF0sIG1vbnRoTmJyOiB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCwgeWVhcjogdGhpcy5zZWxlY3RlZERhdGUueWVhcn07XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoLCB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyLCBjdmMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoe3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLm9wdHMuY29tcG9uZW50RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG5cbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XG4gICAgICAgICAgICBsZXQgczogYW55ID0gY2hhbmdlc1tcInNlbGVjdG9yXCJdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGlmIChzLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TZWxlY3RvcihDYWxUb2dnbGUuT3Blbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlBcGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJwbGFjZWhvbGRlclwiKSkge1xuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNoYW5nZXNbXCJwbGFjZWhvbGRlclwiXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBjaGFuZ2VzW1wibG9jYWxlXCJdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwiZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBjaGFuZ2VzW1wiZGlzYWJsZWRcIl0uY3VycmVudFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzW1wib3B0aW9uc1wiXS5jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndlZWtEYXlzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XG5cbiAgICAgICAgbGV0IGRtQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdE1vbnRoXCIpKSB7XG4gICAgICAgICAgICBsZXQgZG06IGFueSA9IGNoYW5nZXNbXCJkZWZhdWx0TW9udGhcIl0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIGRtID0gZG0uZGVmTW9udGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZG0gIT09IG51bGwgJiYgZG0gIT09IHVuZGVmaW5lZCAmJiBkbSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMucGFyc2VTZWxlY3RlZE1vbnRoKGRtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG1DaGFuZ2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJzZWxEYXRlXCIpKSB7XG4gICAgICAgICAgICBsZXQgc2Q6IGFueSA9IGNoYW5nZXNbXCJzZWxEYXRlXCJdO1xuICAgICAgICAgICAgaWYgKHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJiBzZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzZC5jdXJyZW50VmFsdWUgIT09IFwiXCIgJiYgT2JqZWN0LmtleXMoc2QuY3VycmVudFZhbHVlKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMucGFyc2VTZWxlY3RlZERhdGUoc2QuY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2xlYXIgb24gaW5pdFxuICAgICAgICAgICAgICAgIGlmICghc2QuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnZpc2libGVNb250aC55ZWFyID09PSAwICYmIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyID09PSAwIHx8IGRtQ2hhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQgPSB0aGlzLm9wdHMubW9udGhMYWJlbHNbdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnJdO1xuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVCdG5DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICAvLyBSZW1vdmUgZGF0ZSBidXR0b24gY2xpY2tlZFxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkRlY3JlYXNlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgLy8gRGVjcmVhc2UgZGF0ZSBidXR0b24gY2xpY2tlZFxuICAgICAgICB0aGlzLmRlY3JlYXNlSW5jcmVhc2VEYXRlKHRydWUpO1xuICAgIH1cblxuICAgIG9uSW5jcmVhc2VCdG5DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICAvLyBJbmNyZWFzZSBkYXRlIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIHRoaXMuZGVjcmVhc2VJbmNyZWFzZURhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xuICAgICAgICAvLyBPcGVuIHNlbGVjdG9yIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoQ2FsVG9nZ2xlLk9wZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9wZW5TZWxlY3RvcihyZWFzb246IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQocmVhc29uKTtcbiAgICB9XG5cbiAgICBjbG9zZVNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChyZWFzb24pO1xuICAgIH1cblxuICAgIHNldFZpc2libGVNb250aCgpOiB2b2lkIHtcbiAgICAgICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSAwLCBtOiBudW1iZXIgPSAwO1xuICAgICAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuICAgICAgICAgICAgICAgIHkgPSB0b2RheS55ZWFyO1xuICAgICAgICAgICAgICAgIG0gPSB0b2RheS5tb250aDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyO1xuICAgICAgICAgICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcbiAgICAgICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeX07XG5cbiAgICAgICAgLy8gQ3JlYXRlIGN1cnJlbnQgbW9udGhcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xuICAgIH1cblxuICAgIG9uUHJldk1vbnRoKCk6IHZvaWQge1xuICAgICAgICAvLyBQcmV2aW91cyBtb250aCBmcm9tIGNhbGVuZGFyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcbiAgICAgICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcblxuICAgICAgICBsZXQgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcblxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xuICAgIH1cblxuICAgIG9uTmV4dE1vbnRoKCk6IHZvaWQge1xuICAgICAgICAvLyBOZXh0IG1vbnRoIGZyb20gY2FsZW5kYXJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xuXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xuXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgb25QcmV2WWVhcigpOiB2b2lkIHtcbiAgICAgICAgLy8gUHJldmlvdXMgeWVhciBmcm9tIGNhbGVuZGFyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcbiAgICB9XG5cbiAgICBvbk5leHRZZWFyKCk6IHZvaWQge1xuICAgICAgICAvLyBOZXh0IHllYXIgZnJvbSBjYWxlbmRhclxuICAgICAgICB0aGlzLnZpc2libGVNb250aC55ZWFyKys7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgb25Ub2RheUNsaWNrZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIFRvZGF5IGJ1dHRvbiBjbGlja2VkXG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5LCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xuICAgICAgICBpZiAodGhpcy5vcHRzLmlubGluZSAmJiB0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xuICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0b2RheS5tb250aF0sIG1vbnRoTmJyOiB0b2RheS5tb250aCwgeWVhcjogdG9kYXkueWVhcn07XG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodG9kYXkubW9udGgsIHRvZGF5LnllYXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gQ2VsbCBjbGlja2VkIG9uIHRoZSBjYWxlbmRhclxuICAgICAgICBpZiAoY2VsbC5jbW8gPT09IHRoaXMucHJldk1vbnRoSWQpIHtcbiAgICAgICAgICAgIC8vIFByZXZpb3VzIG1vbnRoIGRheVxuICAgICAgICAgICAgdGhpcy5vblByZXZNb250aCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLmN1cnJNb250aElkKSB7XG4gICAgICAgICAgICAvLyBDdXJyZW50IG1vbnRoIGRheSAtIGlmIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZCBjbGVhciBpdFxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hbGxvd0Rlc2VsZWN0RGF0ZSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzU2FtZURhdGUoY2VsbC5kYXRlT2JqLCB0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKGNlbGwuZGF0ZU9iaiwgQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCkge1xuICAgICAgICAgICAgLy8gTmV4dCBtb250aCBkYXlcbiAgICAgICAgICAgIHRoaXMub25OZXh0TW9udGgoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyU2VsZWN0KCk7XG4gICAgfVxuXG4gICAgb25DZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBhbnkpIHtcbiAgICAgICAgLy8gQ2VsbCBrZXlib2FyZCBoYW5kbGluZ1xuICAgICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2VsbENsaWNrZWQoY2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckRhdGUoKTogdm9pZCB7XG4gICAgICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7ZGF0ZTogZGF0ZSwganNkYXRlOiBudWxsLCBmb3JtYXR0ZWQ6IFwiXCIsIGVwb2M6IDB9KTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIHRydWUpO1xuICAgICAgICB0aGlzLnNldEZvY3VzVG9JbnB1dEJveCgpO1xuICAgIH1cblxuICAgIGRlY3JlYXNlSW5jcmVhc2VEYXRlKGRlY3JlYXNlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIC8vIERlY3JlYXNlcyBvciBpbmNyZWFzZXMgdGhlIGRhdGUgZGVwZW5kaW5nIG9uIHRoZSBwYXJhbWV0ZXJcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcbiAgICAgICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpO1xuICAgICAgICAgICAgZC5zZXREYXRlKGRlY3JlYXNlID8gZC5nZXREYXRlKCkgLSAxIDogZC5nZXREYXRlKCkgKyAxKTtcbiAgICAgICAgICAgIGRhdGUgPSB7eWVhcjogZC5nZXRGdWxsWWVhcigpLCBtb250aDogZC5nZXRNb250aCgpICsgMSwgZGF5OiBkLmdldERhdGUoKX07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRlID0gdGhpcy5nZXRUb2RheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlLCBDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XG4gICAgfVxuXG4gICAgc2VsZWN0RGF0ZShkYXRlOiBJTXlEYXRlLCBjbG9zZVJlYXNvbjogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIC8vIERhdGUgc2VsZWN0ZWQsIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXG4gICAgICAgIGxldCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xuICAgICAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoZGF0ZU1vZGVsKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChjbG9zZVJlYXNvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvSW5wdXRCb3goKTtcbiAgICB9XG5cbiAgICBzZXRGb2N1c1RvSW5wdXRCb3goKTogdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5vcHRzLmlubGluZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJveEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURhdGVWYWx1ZShkYXRlOiBJTXlEYXRlLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBjbGVhciA/IFwiXCIgOiB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7dmFsdWU6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LCBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdmFsaWQ6ICFjbGVhcn0pO1xuICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0RGF0ZU1vZGVsKGRhdGU6IElNeURhdGUpOiBJTXlEYXRlTW9kZWwge1xuICAgICAgICAvLyBDcmVhdGVzIGEgZGF0ZSBtb2RlbCBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gcGFyYW1ldGVyXG4gICAgICAgIHJldHVybiB7ZGF0ZTogZGF0ZSwganNkYXRlOiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIGZvcm1hdHRlZDogdGhpcy5mb3JtYXREYXRlKGRhdGUpLCBlcG9jOiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKX07XG4gICAgfVxuXG4gICAgcHJlWmVybyh2YWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCkgPCAxMCA/IFwiMFwiICsgdmFsIDogdmFsO1xuICAgIH1cblxuICAgIGZvcm1hdERhdGUodmFsOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAvLyBSZXR1cm5zIGZvcm1hdHRlZCBkYXRlIHN0cmluZywgaWYgbW1tIGlzIHBhcnQgb2YgZGF0ZUZvcm1hdCByZXR1cm5zIG1vbnRoIGFzIGEgc3RyaW5nXG4gICAgICAgIGxldCBmb3JtYXR0ZWQ6IHN0cmluZyA9IHRoaXMub3B0cy5kYXRlRm9ybWF0LnJlcGxhY2UoWVlZWSwgdmFsLnllYXIpLnJlcGxhY2UoREQsIHRoaXMucHJlWmVybyh2YWwuZGF5KSk7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5pbmRleE9mKE1NTSkgIT09IC0xID8gZm9ybWF0dGVkLnJlcGxhY2UoTU1NLCB0aGlzLm1vbnRoVGV4dCh2YWwubW9udGgpKSA6IGZvcm1hdHRlZC5yZXBsYWNlKE1NLCB0aGlzLnByZVplcm8odmFsLm1vbnRoKSk7XG4gICAgfVxuXG4gICAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XG4gICAgICAgIHJldHVybiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV07XG4gICAgfVxuXG4gICAgbW9udGhTdGFydElkeCh5OiBudW1iZXIsIG06IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcbiAgICAgICAgZC5zZXREYXRlKDEpO1xuICAgICAgICBkLnNldE1vbnRoKG0gLSAxKTtcbiAgICAgICAgZC5zZXRGdWxsWWVhcih5KTtcbiAgICAgICAgbGV0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xuICAgICAgICByZXR1cm4gaWR4ID49IDcgPyBpZHggLSA3IDogaWR4O1xuICAgIH1cblxuICAgIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIDApLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgdGhlIHByZXZpb3VzIG1vbnRoXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHksIG0sIDEpO1xuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChkLmdldE1vbnRoKCkgKyAxLCBkLmdldEZ1bGxZZWFyKCkpO1xuICAgIH1cblxuICAgIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICAgICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxuICAgICAgICByZXR1cm4gZCA9PT0gdG9kYXkuZGF5ICYmIG0gPT09IHRvZGF5Lm1vbnRoICYmIHkgPT09IHRvZGF5LnllYXIgJiYgY21vID09PSB0aGlzLmN1cnJNb250aElkO1xuICAgIH1cblxuICAgIGdldFRvZGF5KCk6IElNeURhdGUge1xuICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHJldHVybiB7eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKX07XG4gICAgfVxuXG4gICAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLmdldFRpbWUoKTtcbiAgICB9XG5cbiAgICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xuICAgICAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXG4gICAgICAgIGxldCB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla0RheXMoKTtcbiAgICAgICAgcmV0dXJuIHdlZWtEYXlzW3RoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpXTtcbiAgICB9XG5cbiAgICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGRhdGUgb2JqZWN0IGZyb20gZ2l2ZW4geWVhciwgbW9udGggYW5kIGRheVxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xuICAgIH1cblxuICAgIHN1bmRheUlkeCgpOiBudW1iZXIge1xuICAgICAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XG4gICAgICAgIHJldHVybiB0aGlzLmRheUlkeCA+IDAgPyA3IC0gdGhpcy5kYXlJZHggOiAwO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcbiAgICAgICAgbGV0IG1vbnRoU3RhcnQ6IG51bWJlciA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcbiAgICAgICAgbGV0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xuICAgICAgICBsZXQgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xuXG4gICAgICAgIGxldCBkYXlOYnI6IG51bWJlciA9IDE7XG4gICAgICAgIGxldCBjbW86IG51bWJlciA9IHRoaXMucHJldk1vbnRoSWQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgd2VlazogQXJyYXk8SU15Q2FsZW5kYXJEYXk+ID0gW107XG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIEZpcnN0IHdlZWtcbiAgICAgICAgICAgICAgICBsZXQgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xuICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IHBtOyBqIDw9IGRJblByZXZNOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IGp9O1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLnN1bkhpZ2hsaWdodCwgdGhpcy5vcHRzLnNhdEhpZ2hsaWdodCwgdGhpcy5vcHRzLmhpZ2hsaWdodERhdGVzKX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNtbyA9IHRoaXMuY3Vyck1vbnRoSWQ7XG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudCBtb250aFxuICAgICAgICAgICAgICAgIGxldCBkYXlzTGVmdDogbnVtYmVyID0gNyAtIHdlZWsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF5c0xlZnQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkYXlOYnJ9O1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XG4gICAgICAgICAgICAgICAgICAgIGRheU5icisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgdGhlIHdlZWtzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA4OyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IG1vbnRoXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlOYnIgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBjbW8gPT09IHRoaXMubmV4dE1vbnRoSWQgJiYgbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogY21vID09PSB0aGlzLm5leHRNb250aElkICYmIG0gPCAxMiA/IG0gKyAxIDogMSwgZGF5OiBkYXlOYnJ9O1xuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyksXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XG4gICAgICAgICAgICAgICAgICAgIGRheU5icisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB3ZWVrTmJyOiBudW1iZXIgPSB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICAmJiB0aGlzLm9wdHMuZmlyc3REYXlPZldlZWsgPT09IFwibW9cIiA/IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla051bWJlcih3ZWVrWzBdLmRhdGVPYmopIDogMDtcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaCh7d2Vlazogd2Vlaywgd2Vla05icjogd2Vla05icn0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG0sIHkpO1xuXG4gICAgICAgIGlmIChub3RpZnlDaGFuZ2UpIHtcbiAgICAgICAgICAgIC8vIE5vdGlmeSBwYXJlbnRcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJWaWV3Q2hhbmdlZC5lbWl0KHt5ZWFyOiB5LCBtb250aDogbSwgZmlyc3Q6IHtudW1iZXI6IDEsIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7eWVhcjogeSwgbW9udGg6IG0sIGRheTogMX0pfSwgbGFzdDoge251bWJlcjogZEluVGhpc00sIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZEluVGhpc019KX19KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhcnNlU2VsZWN0ZWREYXRlKHNlbERhdGU6IGFueSk6IElNeURhdGUge1xuICAgICAgICAvLyBQYXJzZSBkYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxuICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBsZXQgc2Q6IHN0cmluZyA9IDxzdHJpbmc+IHNlbERhdGU7XG4gICAgICAgICAgICBsZXQgZGY6IHN0cmluZyA9IHRoaXMub3B0cy5kYXRlRm9ybWF0O1xuXG4gICAgICAgICAgICBkYXRlLm1vbnRoID0gZGYuaW5kZXhPZihNTU0pICE9PSAtMVxuICAgICAgICAgICAgICAgID8gdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRmLCBzZCwgTU1NLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBNTSk7XG5cbiAgICAgICAgICAgIGlmIChkZi5pbmRleE9mKE1NTSkgIT09IC0xICYmIHRoaXMub3B0cy5tb250aExhYmVsc1tkYXRlLm1vbnRoXSkge1xuICAgICAgICAgICAgICAgIGRmID0gdGhpcy51dGlsU2VydmljZS5jaGFuZ2VEYXRlRm9ybWF0KGRmLCB0aGlzLm9wdHMubW9udGhMYWJlbHNbZGF0ZS5tb250aF0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0ZS5kYXkgPSB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBERCk7XG4gICAgICAgICAgICBkYXRlLnllYXIgPSB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBZWVlZKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZGF0ZSA9IHNlbERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cblxuICAgIGpzRGF0ZVRvTXlEYXRlKGRhdGU6IERhdGUpOiBJTXlEYXRlIHtcbiAgICAgICAgcmV0dXJuIHt5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpfTtcbiAgICB9XG5cbiAgICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbFNlcnZpY2UucGFyc2VEZWZhdWx0TW9udGgobXMpO1xuICAgIH1cblxuICAgIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGRwbTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgZHB5OiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIGxldCBkbm06IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IGRueTogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5vcHRzLmRpc2FibGVIZWFkZXJCdXR0b25zKSB7XG4gICAgICAgICAgICBkcG0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LCBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsIGRheTogdGhpcy5kYXlzSW5Nb250aChtID09PSAxID8gMTIgOiBtIC0gMSwgbSA9PT0gMSA/IHkgLSAxIDogeSl9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKTtcbiAgICAgICAgICAgIGRweSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHkgLSAxLCBtb250aDogbSwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xuICAgICAgICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XG4gICAgICAgICAgICBkbnkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB5ICsgMSwgbW9udGg6IG0sIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldk1vbnRoRGlzYWJsZWQgPSBtID09PSAxICYmIHkgPT09IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRwbTtcbiAgICAgICAgdGhpcy5wcmV2WWVhckRpc2FibGVkID0geSAtIDEgPCB0aGlzLm9wdHMubWluWWVhciB8fCBkcHk7XG4gICAgICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSBtID09PSAxMiAmJiB5ID09PSB0aGlzLm9wdHMubWF4WWVhciB8fCBkbm07XG4gICAgICAgIHRoaXMubmV4dFllYXJEaXNhYmxlZCA9IHkgKyAxID4gdGhpcy5vcHRzLm1heFllYXIgfHwgZG55O1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTXlEYXRlUGlja2VyIH0gZnJvbSBcIi4vbXktZGF0ZS1waWNrZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmVdLFxuICAgIGV4cG9ydHM6IFtNeURhdGVQaWNrZXIsIEZvY3VzRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBNeURhdGVQaWNrZXJNb2R1bGUge1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSU15TG9jYWxlcywgSU15T3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2luZGV4XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGxvY2FsZXM6IElNeUxvY2FsZXMgPSB7XG4gICAgICAgIFwiZW5cIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VuXCIsIG1vOiBcIk1vblwiLCB0dTogXCJUdWVcIiwgd2U6IFwiV2VkXCIsIHRoOiBcIlRodVwiLCBmcjogXCJGcmlcIiwgc2E6IFwiU2F0XCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJtbS9kZC95eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUb2RheVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJoZVwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLXqNeQXCIsIG1vOiBcItep16BcIiwgdHU6IFwi16nXnFwiLCB3ZTogXCLXqNeRXCIsIHRoOiBcIteX155cIiwgZnI6IFwi16nXmVwiLCBzYTogXCLXqdeRXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLXmdeg15VcIiwgMjogXCLXpNeR16hcIiwgMzogXCLXnteo16VcIiwgNDogXCLXkNek16hcIiwgNTogXCLXnteQ15lcIiwgNjogXCLXmdeV16BcIiwgNzogXCLXmdeV15xcIiwgODogXCLXkNeV15JcIiwgOTogXCLXodek15hcIiwgMTA6IFwi15DXldenXCIsIDExOiBcIteg15XXkVwiLCAxMjogXCLXk9em155cIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLXlNeZ15XXnVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJqYVwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLml6VcIiwgbW86IFwi5pyIXCIsIHR1OiBcIueBq1wiLCB3ZTogXCLmsLRcIiwgdGg6IFwi5pyoXCIsIGZyOiBcIumHkVwiLCBzYTogXCLlnJ9cIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwi77yR5pyIXCIsIDI6IFwi77yS5pyIXCIsIDM6IFwi77yT5pyIXCIsIDQ6IFwi77yU5pyIXCIsIDU6IFwi77yV5pyIXCIsIDY6IFwi77yW5pyIXCIsIDc6IFwi77yX5pyIXCIsIDg6IFwi77yY5pyIXCIsIDk6IFwi77yZ5pyIXCIsIDEwOiBcIu+8ke+8kOaciFwiLCAxMTogXCLvvJHvvJHmnIhcIiwgMTI6IFwi77yR77yS5pyIXCJ9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5Lm1tLmRkXCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLku4rml6VcIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJmclwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJEaW1cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiSmV1XCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYW1cIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiSmFuXCIsIDI6IFwiRsOpdlwiLCAzOiBcIk1hclwiLCA0OiBcIkF2clwiLCA1OiBcIk1haVwiLCA2OiBcIkp1aW5cIiwgNzogXCJKdWlsXCIsIDg6IFwiQW/Du1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkTDqWNcIn0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkF1am91cmQnaHVpXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcImZpXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlN1XCIsIG1vOiBcIk1hXCIsIHR1OiBcIlRpXCIsIHdlOiBcIktlXCIsIHRoOiBcIlRvXCIsIGZyOiBcIlBlXCIsIHNhOiBcIkxhXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIlRhbVwiLCAyOiBcIkhlbFwiLCAzOiBcIk1hYVwiLCA0OiBcIkh1aFwiLCA1OiBcIlRvdVwiLCA2OiBcIktlc1wiLCA3OiBcIkhlaVwiLCA4OiBcIkVsb1wiLCA5OiBcIlN5eVwiLCAxMDogXCJMb2tcIiwgMTE6IFwiTWFyXCIsIDEyOiBcIkpvdVwifSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVMOkbsOkw6RuXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcImVzXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRvXCIsIG1vOiBcIkx1XCIsIHR1OiBcIk1hXCIsIHdlOiBcIk1pXCIsIHRoOiBcIkp1XCIsIGZyOiBcIlZpXCIsIHNhOiBcIlNhXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkVuZVwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFiclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnb1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wifSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSG95XCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcImh1XCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlZhc1wiLCBtbzogXCJIw6l0XCIsIHR1OiBcIktlZGRcIiwgd2U6IFwiU3plXCIsIHRoOiBcIkNzw7xcIiwgZnI6IFwiUMOpblwiLCBzYTogXCJTem9cIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk3DoXJcIiwgNDogXCLDgXByXCIsIDU6IFwiTcOhalwiLCA2OiBcIkrDum5cIiwgNzogXCJKw7psXCIsIDg6IFwiQXVnXCIsIDk6IFwiU3plcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIk1hXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwic3ZcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O2blwiLCBtbzogXCJNw6VuXCIsIHR1OiBcIlRpc1wiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7ZyXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWpcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJZGFnXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBcIm5sXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlpvblwiLCBtbzogXCJNYWFcIiwgdHU6IFwiRGluXCIsIHdlOiBcIldvZVwiLCB0aDogXCJEb25cIiwgZnI6IFwiVnJpXCIsIHNhOiBcIlphdFwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWVpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVmFuZGFhZ1wiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJydVwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLQktGBXCIsIG1vOiBcItCf0L1cIiwgdHU6IFwi0JLRglwiLCB3ZTogXCLQodGAXCIsIHRoOiBcItCn0YJcIiwgZnI6IFwi0J/RglwiLCBzYTogXCLQodCxXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLQr9C90LJcIiwgMjogXCLQpNC10LJcIiwgMzogXCLQnNCw0YDRglwiLCA0OiBcItCQ0L/RgFwiLCA1OiBcItCc0LDQuVwiLCA2OiBcItCY0Y7QvdGMXCIsIDc6IFwi0JjRjtC70YxcIiwgODogXCLQkNCy0LNcIiwgOTogXCLQodC10L3RglwiLCAxMDogXCLQntC60YJcIiwgMTE6IFwi0J3QvtGPXCIsIDEyOiBcItCU0LXQulwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItCh0LXQs9C+0LTQvdGPXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidWtcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0J3QtFwiLCBtbzogXCLQn9C9XCIsIHR1OiBcItCS0YJcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQp9GCXCIsIGZyOiBcItCf0YJcIiwgc2E6IFwi0KHQsVwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0KHRltGHXCIsIDI6IFwi0JvRjtGCXCIsIDM6IFwi0JHQtdGAXCIsIDQ6IFwi0JrQstGWXCIsIDU6IFwi0KLRgNCwXCIsIDY6IFwi0KfQtdGAXCIsIDc6IFwi0JvQuNC/XCIsIDg6IFwi0KHQtdGAXCIsIDk6IFwi0JLQtdGAXCIsIDEwOiBcItCW0L7QslwiLCAxMTogXCLQm9C40YFcIiwgMTI6IFwi0JPRgNGDXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0KHRjNC+0LPQvtC00L3RllwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcIm5vXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlPDuG5cIiwgbW86IFwiTWFuXCIsIHR1OiBcIlRpclwiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7hyXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJIGRhZ1wiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0clwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJQYXpcIiwgbW86IFwiUHp0XCIsIHR1OiBcIlNhbFwiLCB3ZTogXCLDh2FyXCIsIHRoOiBcIlBlclwiLCBmcjogXCJDdW1cIiwgc2E6IFwiQ210XCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJPY2FcIiwgMjogXCLFnnViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiTmlzXCIsIDU6IFwiTWF5XCIsIDY6IFwiSGF6XCIsIDc6IFwiVGVtXCIsIDg6IFwiQcSfdVwiLCA5OiBcIkV5bFwiLCAxMDogXCJFa2lcIiwgMTE6IFwiS2FzXCIsIDEyOiBcIkFyYVwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkJ1Z8O8blwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgXCJwdC1iclwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJEb21cIiwgbW86IFwiU2VnXCIsIHR1OiBcIlRlclwiLCB3ZTogXCJRdWFcIiwgdGg6IFwiUXVpXCIsIGZyOiBcIlNleFwiLCBzYTogXCJTYWJcIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZldlwiLCAzOiBcIk1hclwiLCA0OiBcIkFiclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdXRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlelwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhvamVcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJkZVwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTb1wiLCBtbzogXCJNb1wiLCB0dTogXCJEaVwiLCB3ZTogXCJNaVwiLCB0aDogXCJEb1wiLCBmcjogXCJGclwiLCBzYTogXCJTYVwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTcOkclwiLCA0OiBcIkFwclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlelwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhldXRlXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaXRcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIkRvbVwiLCBtbzogXCJMdW5cIiwgdHU6IFwiTWFyXCIsIHdlOiBcIk1lclwiLCB0aDogXCJHaW9cIiwgZnI6IFwiVmVuXCIsIHNhOiBcIlNhYlwiIH0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkdlblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1hZ1wiLCA2OiBcIkdpdVwiLCA3OiBcIkx1Z1wiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdHRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIk9nZ2lcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJpdC1jaFwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiRG9tXCIsIG1vOiBcIkx1blwiLCB0dTogXCJNYXJcIiwgd2U6IFwiTWVyXCIsIHRoOiBcIkdpb1wiLCBmcjogXCJWZW5cIiwgc2E6IFwiU2FiXCIgfSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiR2VuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFnXCIsIDY6IFwiR2l1XCIsIDc6IFwiTHVnXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2V0XCIsIDEwOiBcIk90dFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGljXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiT2dnaVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInBsXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOaWVcIiwgbW86IFwiUG9uXCIsIHR1OiBcIld0b1wiLCB3ZTogXCLFmnJvXCIsIHRoOiBcIkN6d1wiLCBmcjogXCJQacSFXCIsIHNhOiBcIlNvYlwiIH0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlN0eVwiLCAyOiBcIkx1dFwiLCAzOiBcIk1hclwiLCA0OiBcIkt3aVwiLCA1OiBcIk1halwiLCA2OiBcIkN6ZVwiLCA3OiBcIkxpcFwiLCA4OiBcIlNpZVwiLCA5OiBcIldyelwiLCAxMDogXCJQYcW6XCIsIDExOiBcIkxpc1wiLCAxMjogXCJHcnVcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEemlzaWFqXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcIm15XCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuGAkOGAlOGAhOGAuuGAueGAguGAlOGAveGAsVwiLCBtbzogXCLhgJDhgJThgIThgLrhgLnhgJzhgKxcIiwgdHU6IFwi4YCh4YCE4YC64YC54YCC4YCrXCIsIHdlOiBcIuGAl+GAr+GAkuGAueGAk+GAn+GAsOGAuFwiLCB0aDogXCLhgIDhgLzhgJ7hgJXhgJDhgLHhgLhcIiwgZnI6IFwi4YCe4YCx4YCs4YCA4YC84YCsXCIsIHNhOiBcIuGAheGAlOGAsVwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4YCH4YCU4YC64YCU4YCd4YCr4YCb4YCuXCIsIDI6IFwi4YCW4YCx4YCW4YCx4YCs4YC64YCd4YCr4YCb4YCuXCIsIDM6IFwi4YCZ4YCQ4YC6XCIsIDQ6IFwi4YCn4YCV4YC84YCuXCIsIDU6IFwi4YCZ4YCxXCIsIDY6IFwi4YCH4YC94YCU4YC6XCIsIDc6IFwi4YCH4YCw4YCc4YCt4YCv4YCE4YC6XCIsIDg6IFwi4YCp4YCC4YCv4YCQ4YC6XCIsIDk6IFwi4YCF4YCA4YC64YCQ4YCE4YC64YCY4YCsXCIsIDEwOiBcIuGAoeGAseGArOGAgOGAuuGAkOGAreGAr+GAmOGArFwiLCAxMTogXCLhgJThgK3hgK/hgJ3hgIThgLrhgJjhgKxcIiwgMTI6IFwi4YCS4YCu4YCH4YCE4YC64YCY4YCsXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4YCa4YCU4YCx4YC3XCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcInNrXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZVwiLCBtbzogXCJQb1wiLCB0dTogXCJVdFwiLCB3ZTogXCJTdFwiLCB0aDogXCLFoHRcIiwgZnI6IFwiUGlcIiwgc2E6IFwiU29cIiB9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNw6FqXCIsIDY6IFwiSsO6blwiLCA3OiBcIkrDumxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEbmVzXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcInNsXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZWRcIiwgbW86IFwiUG9uXCIsIHR1OiBcIlRvclwiLCB3ZTogXCJTcmVcIiwgdGg6IFwixIxldFwiLCBmcjogXCJQZXRcIiwgc2E6IFwiU29iXCIgfSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXZnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQuIG1tLiB5eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEYW5lc1wiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJ6aC1jblwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLml6VcIiwgbW86IFwi5LiAXCIsIHR1OiBcIuS6jFwiLCB3ZTogXCLkuIlcIiwgdGg6IFwi5ZubXCIsIGZyOiBcIuS6lFwiLCBzYTogXCLlha1cIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIjHmnIhcIiwgMjogXCIy5pyIXCIsIDM6IFwiM+aciFwiLCA0OiBcIjTmnIhcIiwgNTogXCI15pyIXCIsIDY6IFwiNuaciFwiLCA3OiBcIjfmnIhcIiwgODogXCI45pyIXCIsIDk6IFwiOeaciFwiLCAxMDogXCIxMOaciFwiLCAxMTogXCIxMeaciFwiLCAxMjogXCIxMuaciFwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuS7iuWkqVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJyb1wiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJkdVwiLCBtbzogXCJsdVwiLCB0dTogXCJtYVwiLCB3ZTogXCJtaVwiLCB0aDogXCJqb1wiLCBmcjogXCJ2aVwiLCBzYTogXCJzYVwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiaWFuXCIsIDI6IFwiZmViXCIsIDM6IFwibWFydFwiLCA0OiBcImFwclwiLCA1OiBcIm1haVwiLCA2OiBcIml1blwiLCA3OiBcIml1bFwiLCA4OiBcImF1Z1wiLCA5OiBcInNlcHRcIiwgMTA6IFwib2N0XCIsIDExOiBcIm5vdlwiLCAxMjogXCJkZWNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJBc3TEg3ppXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcImNhXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcImRnXCIsIG1vOiBcImRsXCIsIHR1OiBcImR0XCIsIHdlOiBcImRjXCIsIHRoOiBcImRqXCIsIGZyOiBcImR2XCIsIHNhOiBcImRzXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkdlblwiLCAyOiBcIkZlYnJcIiwgMzogXCJNYXLDp1wiLCA0OiBcIkFiclwiLCA1OiBcIk1haWdcIiwgNjogXCJKdW55XCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdcIiwgOTogXCJTZXRcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXNcIn0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkF2dWlcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiTWluXCIsIG1vOiBcIlNlblwiLCB0dTogXCJTZWxcIiwgd2U6IFwiUmFiXCIsIHRoOiBcIkthbVwiLCBmcjogXCJKdW1cIiwgc2E6IFwiU2FiXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1laVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnc1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wifSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSGFyaSBpbmlcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbi1hdVwiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTdW5cIiwgbW86IFwiTW9uXCIsIHR1OiBcIlR1ZVwiLCB3ZTogXCJXZWRcIiwgdGg6IFwiVGh1XCIsIGZyOiBcIkZyaVwiLCBzYTogXCJTYXRcIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIlRvZGF5XCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiYW0tZXRcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi4Yql4YiR4Yu1XCIsIG1vOiBcIuGIsOGKnlwiLCB0dTogXCLhiJvhiq3hiLDhip5cIiwgd2U6IFwi4Yio4Ymh4YuVXCIsIHRoOiBcIuGIkOGImeGItVwiLCBmcjogXCLhi5PhiK3hiaVcIiwgc2E6IFwi4YmF4Yuz4YicXCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLhjIPhipXhi6lcIiwgMjogXCLhjYzhiaXhiKlcIiwgMzogXCLhiJvhiK3hib1cIiwgNDogXCLhiqThjZXhiKhcIiwgNTogXCLhiJzhi61cIiwgNjogXCLhjIHhipVcIiwgNzogXCLhjIHhiIvhi61cIiwgODogXCLhiqbhjIjhiLVcIiwgOTogXCLhiLThjZXhibRcIiwgMTA6IFwi4Yqm4Yqt4YmwXCIsIDExOiBcIuGKluGJrOGInVwiLCAxMjogXCLhi7LhiLThiJ1cIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLhi5vhiKxcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJjc1wiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiTmVcIiwgbW86IFwiUG9cIiwgdHU6IFwiw5p0XCIsIHdlOiBcIlN0XCIsIHRoOiBcIsSMdFwiLCBmcjogXCJQw6FcIiwgc2E6IFwiU29cIiB9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJMZWRcIiwgMjogXCLDmm5vXCIsIDM6IFwiQsWZZVwiLCA0OiBcIkR1YlwiLCA1OiBcIkt2xJtcIiwgNjogXCLEjHZuXCIsIDc6IFwixIx2Y1wiLCA4OiBcIlNycFwiLCA5OiBcIlrDocWZXCIsIDEwOiBcIsWYw61qXCIsIDExOiBcIkxpc1wiLCAxMjogXCJQcm9cIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEbmVzXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZWxcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIs6az4XPgVwiLCBtbzogXCLOlM61z4VcIiwgdHU6IFwizqTPgc65XCIsIHdlOiBcIs6kzrXPhFwiLCB0aDogXCLOoM61zrxcIiwgZnI6IFwizqDOsc+BXCIsIHNhOiBcIs6jzrHOslwiIH0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIs6ZzrHOvVwiLCAyOiBcIs6mzrXOslwiLCAzOiBcIs6czrHPgVwiLCA0OiBcIs6Rz4DPgVwiLCA1OiBcIs6czrHOuVwiLCA2OiBcIs6Zzr/Phc69XCIsIDc6IFwizpnOv8+FzrtcIiwgODogXCLOkc+FzrNcIiwgOTogXCLOo861z4BcIiwgMTA6IFwizp/Ous+EXCIsIDExOiBcIs6dzr/OtVwiLCAxMjogXCLOlM61zrpcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLOo86uzrzOtc+BzrFcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJra1wiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi0JbQulwiLCBtbzogXCLQlNGBXCIsIHR1OiBcItCh0YFcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQkdGBXCIsIGZyOiBcItCW0LxcIiwgc2E6IFwi0KHQsVwiIH0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItKa0LDSo1wiLCAyOiBcItCQ0pvQv1wiLCAzOiBcItCd0LDRg1wiLCA0OiBcItCh05nRg1wiLCA1OiBcItCc0LDQvFwiLCA2OiBcItCc0LDRg1wiLCA3OiBcItCo0ZbQu1wiLCA4OiBcItCi0LDQvFwiLCA5OiBcItKa0YvRgNC6XCIsIDEwOiBcItKa0LDQt1wiLCAxMTogXCLSmtCw0YBcIiwgMTI6IFwi0JbQtdC70YJcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbW0teXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0JHSr9Cz0ZbQvVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcInRoXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCLguK3guLJcIiwgbW86IFwi4LiIXCIsIHR1OiBcIuC4rVwiLCB3ZTogXCLguJ5cIiwgdGg6IFwi4Lie4LikXCIsIGZyOiBcIuC4qFwiLCBzYTogXCLguKpcIiB9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLguKEu4LiEXCIsIDI6IFwi4LiBLuC4ni5cIiwgMzogXCLguKHguLUu4LiELlwiLCA0OiBcIuC5gOC4oS7guKIuXCIsIDU6IFwi4LieLuC4hC5cIiwgNjogXCLguKHguLQu4LiiLlwiLCA3OiBcIuC4gS7guIQuXCIsIDg6IFwi4LiqLuC4hC5cIiwgOTogXCLguIEu4LiiLlwiLCAxMDogXCLguJUu4LiELlwiLCAxMTogXCLguJ4u4LiiLlwiLCAxMjogXCLguJgu4LiELlwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuC4p+C4seC4meC4meC4teC5iVwiLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBcImtvLWtyXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuydvFwiLCBtbzogXCLsm5RcIiwgdHU6IFwi7ZmUXCIsIHdlOiBcIuyImFwiLCB0aDogXCLrqqlcIiwgZnI6IFwi6riIXCIsIHNhOiBcIu2GoFwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiMeyblFwiLCAyOiBcIjLsm5RcIiwgMzogXCIz7JuUXCIsIDQ6IFwiNOyblFwiLCA1OiBcIjXsm5RcIiwgNjogXCI27JuUXCIsIDc6IFwiN+yblFwiLCA4OiBcIjjsm5RcIiwgOTogXCI57JuUXCIsIDEwOiBcIjEw7JuUXCIsIDExOiBcIjEx7JuUXCIsIDEyOiBcIjEy7JuUXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eSBtbSBkZFwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi7Jik64qYXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiZGFcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O4blwiLCBtbzogXCJNYW5cIiwgdHU6IFwiVGlyXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDuHJcIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1halwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkkgZGFnXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwibHRcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU2tcIiwgbW86IFwiUHJcIiwgdHU6IFwiQW5cIiwgd2U6IFwiVHJcIiwgdGg6IFwiS3RcIiwgZnI6IFwiUG5cIiwgc2E6IFwixaB0XCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTYXVzLlwiLCAyOiBcIlZhcy5cIiwgMzogXCJLb3YuXCIsIDQ6IFwiQmFsLlwiLCA1OiBcIkdlZy5cIiwgNjogXCJCaXLFvi5cIiwgNzogXCJMaWVwLlwiLCA4OiBcIlJ1Z3AuXCIsIDk6IFwiUnVncy5cIiwgMTA6IFwiU2FwbC5cIiwgMTE6IFwiTGFwa3IuXCIsIDEyOiBcIkdydW9kLlwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIsWgaWFuaWVuXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwidmlcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiQ05cIiwgbW86IFwiVDJcIiwgdHU6IFwiVDNcIiwgd2U6IFwiVDRcIiwgdGg6IFwiVDVcIiwgZnI6IFwiVDZcIiwgc2E6IFwiVDdcIn0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlRIRyAxXCIsIDI6IFwiVEhHIDJcIiwgMzogXCJUSEcgM1wiLCA0OiBcIlRIRyA0XCIsIDU6IFwiVEhHIDVcIiwgNjogXCJUSEcgNlwiLCA3OiBcIlRIRyA3XCIsIDg6IFwiVEhHIDhcIiwgOTogXCJUSEcgOVwiLCAxMDogXCJUSEcgMTBcIiwgMTE6IFwiVEhHIDExXCIsIDEyOiBcIlRIRyAxMlwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkjDtG0gbmF5XCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBcImJuXCI6IHtcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuCmsOCmrOCmv1wiLCBtbzogXCLgprjgp4vgpq5cIiwgdHU6IFwi4Kau4KaZ4KeN4KaX4KayXCIsIHdlOiBcIuCmrOCngeCmp1wiLCB0aDogXCLgpqzgp4PgprngpoNcIiwgZnI6IFwi4Ka24KeB4KaV4KeN4KawXCIsIHNhOiBcIuCmtuCmqOCmv1wifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4Kac4Ka+4Kao4KeBXCIsIDI6IFwi4Kar4KeH4Kas4KeN4Kaw4KeBXCIsIDM6IFwi4Kau4Ka+4Kaw4KeN4KaaXCIsIDQ6IFwi4KaP4Kaq4KeN4Kaw4Ka/4KayXCIsIDU6IFwi4Kau4KeHXCIsIDY6IFwi4Kac4KeB4KaoXCIsIDc6IFwi4Kac4KeB4Kay4Ka+4KaHXCIsIDg6IFwi4KaG4KaX4Ka44KeN4KafXCIsIDk6IFwi4Ka44KeH4Kaq4KeN4Kaf4KeHXCIsIDEwOiBcIuCmheCmleCnjeCmn+Cni1wiLCAxMTogXCLgpqjgpq3gp4dcIiwgMTI6IFwi4Kah4Ka/4Ka44KeHXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4KaG4KacXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmdcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0L3QtFwiLCBtbzogXCLQv9C9XCIsIHR1OiBcItCy0YJcIiwgd2U6IFwi0YHRgFwiLCB0aDogXCLRh9GCXCIsIGZyOiBcItC/0YJcIiwgc2E6IFwi0YHQsVwifSxcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0Y/QvdGDLlwiLCAyOiBcItGE0LXQsi5cIiwgMzogXCLQvNCw0YDRglwiLCA0OiBcItCw0L/RgC5cIiwgNTogXCLQvNCw0LlcIiwgNjogXCLRjtC90LhcIiwgNzogXCLRjtC70LhcIiwgODogXCLQsNCy0LMuXCIsIDk6IFwi0YHQtdC/LlwiLCAxMDogXCLQvtC60YIuXCIsIDExOiBcItC90L7QtS5cIiwgMTI6IFwi0LTQtdC6LlwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItC00L3QtdGBXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiaHJcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiTmVcIiwgbW86IFwiUG9cIiwgdHU6IFwiVWxcIiwgd2U6IFwiU3JcIiwgdGg6IFwixIxlXCIsIGZyOiBcIlBlXCIsIHNhOiBcIlN1XCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTaWpcIiwgMjogXCJWZWxcIiwgMzogXCJPxb51XCIsIDQ6IFwiVHJhXCIsIDU6IFwiU3ZpXCIsIDY6IFwiTGlwXCIsIDc6IFwiU3JwXCIsIDg6IFwiS29sXCIsIDk6IFwiUnVqXCIsIDEwOiBcIkxpc1wiLCAxMTogXCJTdHVcIiwgMTI6IFwiUHJvXCIgfSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eS5cIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcImRhbmFzXCIsXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIFwiYXJcIjoge1xuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcItin2YTYo9it2K9cIiwgbW86IFwi2KfZhNin2KvZhtmK2YZcIiwgdHU6IFwi2KfZhNir2YTYp9ir2KfYoVwiLCB3ZTogXCLYp9mE2KfYsdio2LnYp9ihXCIsIHRoOiBcItin2YTYrtmF2YrYs1wiLCBmcjogXCLYp9mE2KzZhdi52KlcIiwgc2E6IFwi2KfZhNiz2KjYqlwiIH0sXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItmK2YbYp9mK2LFcIiwgMjogXCLZgdio2LHYp9mK2LFcIiwgMzogXCLZhdin2LHYs1wiLCA0OiBcItin2KjYsdmK2YRcIiwgNTogXCLZhdin2YrZiFwiLCA2OiBcItmK2YjZhtmK2YhcIiwgNzogXCLZitmI2YTZitmIXCIsIDg6IFwi2KPYutiz2LfYs1wiLCA5OiBcItiz2KjYqtmF2KjYsVwiLCAxMDogXCLYo9mD2KrZiNio2LFcIiwgMTE6IFwi2YbZiNmB2YXYqNixXCIsIDEyOiBcItiv2YrYs9mF2KjYsVwiIH0sXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItin2YTZitmI2YVcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInNhXCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgXCJpc1wiOiB7XG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJzdW5cIiwgbW86IFwibcOhblwiLCB0dTogXCLDvnJpXCIsIHdlOiBcIm1pw7BcIiwgdGg6IFwiZmltXCIsIGZyOiBcImbDtnNcIiwgc2E6IFwibGF1XCJ9LFxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJqYW5cIiwgMjogXCJmZWJcIiwgMzogXCJtYXJcIiwgNDogXCJhcHJcIiwgNTogXCJtYcOtXCIsIDY6IFwiasO6blwiLCA3OiBcImrDumxcIiwgODogXCLDoWfDulwiLCA5OiBcInNlcFwiLCAxMDogXCJva3RcIiwgMTE6IFwibsOzdlwiLCAxMjogXCJkZXNcIiB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLDjSBkYWdcIixcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRMb2NhbGVPcHRpb25zKGxvY2FsZTogc3RyaW5nKTogSU15T3B0aW9ucyB7XG4gICAgICAgIGlmIChsb2NhbGUgJiYgdGhpcy5sb2NhbGVzLmhhc093blByb3BlcnR5KGxvY2FsZSkpIHtcbiAgICAgICAgICAgIC8vIFVzZXIgZ2l2ZW4gbG9jYWxlXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVzW2xvY2FsZV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdDogZW5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tcImVuXCJdO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSU15RGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTXlEYXRlUmFuZ2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1kYXRlLXJhbmdlLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU15TW9udGggfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tb250aC5pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElNeU1vbnRoTGFiZWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgSU15TWFya2VkRGF0ZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tYXJrZWQtZGF0ZXMuaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbWFya2VkLWRhdGUuaW50ZXJmYWNlXCI7XG5cbmNvbnN0IE0gPSBcIm1cIjtcbmNvbnN0IE1NID0gXCJtbVwiO1xuY29uc3QgTU1NID0gXCJtbW1cIjtcbmNvbnN0IEREID0gXCJkZFwiO1xuY29uc3QgWVlZWSA9IFwieXl5eVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xuICAgIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW1wic3VcIiwgXCJtb1wiLCBcInR1XCIsIFwid2VcIiwgXCJ0aFwiLCBcImZyXCIsIFwic2FcIl07XG5cbiAgICBpc0RhdGVWYWxpZChkYXRlU3RyOiBzdHJpbmcsIGRhdGVGb3JtYXQ6IHN0cmluZywgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIsIGRpc2FibGVVbnRpbDogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLCBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sIGRpc2FibGVXZWVrRGF5czogQXJyYXk8c3RyaW5nPiwgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGU+LCBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPiwgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzLCBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlPik6IElNeURhdGUge1xuICAgICAgICBsZXQgcmV0dXJuRGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuICAgICAgICBsZXQgaXNNb250aFN0cjogYm9vbGVhbiA9IGRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMTtcbiAgICAgICAgbGV0IHNlcGFyYXRvcnM6IEFycmF5PHN0cmluZz4gPSB0aGlzLmdldERhdGVGb3JtYXRTZXBhcmF0b3JzKGRhdGVGb3JtYXQpO1xuXG4gICAgICAgIGxldCBtb250aDogbnVtYmVyID0gaXNNb250aFN0ciA/IHRoaXMucGFyc2VEYXRlUGFydE1vbnRoTmFtZShkYXRlRm9ybWF0LCBkYXRlU3RyLCBNTU0sIG1vbnRoTGFiZWxzKSA6IHRoaXMucGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0LCBkYXRlU3RyLCBNTSk7XG4gICAgICAgIGlmIChpc01vbnRoU3RyICYmIG1vbnRoTGFiZWxzW21vbnRoXSkge1xuICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IHRoaXMuY2hhbmdlRGF0ZUZvcm1hdChkYXRlRm9ybWF0LCBtb250aExhYmVsc1ttb250aF0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZVN0ci5sZW5ndGggIT09IGRhdGVGb3JtYXQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKHNlcGFyYXRvcnNbMF0pICE9PSBkYXRlU3RyLmluZGV4T2Yoc2VwYXJhdG9yc1swXSkgfHwgZGF0ZUZvcm1hdC5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSAhPT0gZGF0ZVN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRheTogbnVtYmVyID0gdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIEREKTtcbiAgICAgICAgbGV0IHllYXI6IG51bWJlciA9IHRoaXMucGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0LCBkYXRlU3RyLCBZWVlZKTtcblxuICAgICAgICBpZiAobW9udGggIT09IC0xICYmIGRheSAhPT0gLTEgJiYgeWVhciAhPT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhciB8fCBtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIGRheTogZGF5fTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZERheShkYXRlLCBtaW5ZZWFyLCBtYXhZZWFyLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgZGlzYWJsZVdlZWtlbmRzLCBkaXNhYmxlV2Vla0RheXMsIGRpc2FibGVEYXlzLCBkaXNhYmxlRGF0ZVJhbmdlcywgZW5hYmxlRGF5cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSAxMDAgIT09IDAgJiYgeWVhciAlIDQgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgZGF5c0luTW9udGhbMV0gPSAyOTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gZGF5c0luTW9udGhbbW9udGggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBWYWxpZCBkYXRlXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcbiAgICB9XG5cbiAgICBnZXREYXRlRm9ybWF0U2VwYXJhdG9ycyhkYXRlRm9ybWF0OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQubWF0Y2goL1teKGRteSldezEsfS9nKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VEYXRlRm9ybWF0KGRhdGVGb3JtYXQ6IHN0cmluZywgbGVuOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICBsZXQgbXA6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIG1wICs9IE07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQucmVwbGFjZShNTU0sIG1wKTtcbiAgICB9XG5cbiAgICBpc01vbnRoTGFiZWxWYWxpZChtb250aExhYmVsOiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XG4gICAgICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcbiAgICAgICAgICAgIGlmIChtb250aExhYmVsLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIGlzWWVhckxhYmVsVmFsaWQoeWVhckxhYmVsOiBudW1iZXIsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgaWYgKHllYXJMYWJlbCA+PSBtaW5ZZWFyICYmIHllYXJMYWJlbCA8PSBtYXhZZWFyKSB7XG4gICAgICAgICAgICByZXR1cm4geWVhckxhYmVsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcocG9zLCBwb3MgKyBkYXRlUGFydC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKCEvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XG4gICAgICAgIGxldCBtb250aExhYmVsOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlciA9IGRhdGVGb3JtYXQuaW5kZXhPZihkYXRlUGFydCk7XG4gICAgICAgIGlmIChkYXRlRm9ybWF0LnN1YnN0cihkYXRlRm9ybWF0Lmxlbmd0aCAtIDMpID09PSBNTU0pIHtcbiAgICAgICAgICAgIG1vbnRoTGFiZWwgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgZW5kOiBudW1iZXIgPSBkYXRlU3RyaW5nLmluZGV4T2YoZGF0ZUZvcm1hdC5jaGFyQXQoc3RhcnQgKyBkYXRlUGFydC5sZW5ndGgpLCBzdGFydCk7XG4gICAgICAgICAgICBtb250aExhYmVsID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb250aExhYmVsVmFsaWQobW9udGhMYWJlbCwgbW9udGhMYWJlbHMpO1xuICAgIH1cblxuICAgIGdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQuaW5kZXhPZihkYXRlUGFydCk7XG4gICAgfVxuXG4gICAgcGFyc2VEZWZhdWx0TW9udGgobW9udGhTdHJpbmc6IHN0cmluZyk6IElNeU1vbnRoIHtcbiAgICAgICAgbGV0IG1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xuICAgICAgICBpZiAobW9udGhTdHJpbmcgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IG1vbnRoU3RyaW5nLnNwbGl0KG1vbnRoU3RyaW5nLm1hdGNoKC9bXjAtOV0vKVswXSk7XG4gICAgICAgICAgICBtb250aC5tb250aE5iciA9IHNwbGl0WzBdLmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzBdKSA6IHBhcnNlSW50KHNwbGl0WzFdKTtcbiAgICAgICAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSkgOiBwYXJzZUludChzcGxpdFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vbnRoO1xuICAgIH1cblxuICAgIGlzRGlzYWJsZWREYXkoZGF0ZTogSU15RGF0ZSwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIsIGRpc2FibGVVbnRpbDogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLCBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sIGRpc2FibGVXZWVrRGF5czogQXJyYXk8c3RyaW5nPiwgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGU+LCBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPiwgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcbiAgICAgICAgZm9yIChsZXQgZSBvZiBlbmFibGVEYXlzKSB7XG4gICAgICAgICAgICBpZiAoZS55ZWFyID09PSBkYXRlLnllYXIgJiYgZS5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBlLmRheSA9PT0gZGF0ZS5kYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZG4gPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcblxuICAgICAgICBpZiAoZGF0ZS55ZWFyIDwgbWluWWVhciAmJiBkYXRlLm1vbnRoID09PSAxMiB8fCBkYXRlLnllYXIgPiBtYXhZZWFyICYmIGRhdGUubW9udGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XG4gICAgICAgICAgICBpZiAoZG4gPT09IDAgfHwgZG4gPT09IDYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlV2Vla0RheXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgd2Qgb2YgZGlzYWJsZVdlZWtEYXlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRuID09PSB0aGlzLmdldFdlZWtkYXlJbmRleCh3ZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgZCBvZiBkaXNhYmxlRGF5cykge1xuICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBkIG9mIGRpc2FibGVEYXRlUmFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSAmJiBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZC5iZWdpbikgJiYgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc01hcmtlZERhdGUoZGF0ZTogSU15RGF0ZSwgbWFya2VkRGF0ZXM6IEFycmF5PElNeU1hcmtlZERhdGVzPiwgbWFya1dlZWtlbmRzOiBJTXlNYXJrZWREYXRlKTogSU15TWFya2VkRGF0ZSB7XG4gICAgICAgIGZvciAobGV0IG1kIG9mIG1hcmtlZERhdGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIG1kLmRhdGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bWFya2VkOiB0cnVlLCBjb2xvcjogbWQuY29sb3J9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWFya1dlZWtlbmRzICYmIG1hcmtXZWVrZW5kcy5tYXJrZWQpIHtcbiAgICAgICAgICAgIGxldCBkYXlOYnIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcbiAgICAgICAgICAgIGlmIChkYXlOYnIgPT09IDAgfHwgZGF5TmJyID09PSA2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHttYXJrZWQ6IHRydWUsIGNvbG9yOiBtYXJrV2Vla2VuZHMuY29sb3J9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7bWFya2VkOiBmYWxzZSwgY29sb3I6IFwiXCJ9O1xuICAgIH1cblxuICAgIGlzSGlnaGxpZ2h0ZWREYXRlKGRhdGU6IElNeURhdGUsIHN1bkhpZ2hsaWdodDogYm9vbGVhbiwgc2F0SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHREYXRlczogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGRheU5icjogbnVtYmVyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XG4gICAgICAgIGlmIChzdW5IaWdobGlnaHQgJiYgZGF5TmJyID09PSAwIHx8IHNhdEhpZ2hsaWdodCAmJiBkYXlOYnIgPT09IDYpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGQgb2YgaGlnaGxpZ2h0RGF0ZXMpIHtcbiAgICAgICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXRXZWVrTnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xuICAgICAgICBsZXQgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcbiAgICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCgoZC5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIDAsIDQpLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgLyA3KSArIDE7XG4gICAgfVxuXG4gICAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVVudGlsOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKTtcbiAgICB9XG5cbiAgICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpO1xuICAgIH1cblxuICAgIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIGRhdGUueWVhciAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUuZGF5ICE9PSAwO1xuICAgIH1cblxuICAgIGlzU2FtZURhdGUoZDE6IElNeURhdGUsIGQyOiBJTXlEYXRlKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBkMS55ZWFyID09PSBkMi55ZWFyICYmIGQxLm1vbnRoID09PSBkMi5tb250aCAmJiBkMS5kYXkgPT09IGQyLmRheTtcbiAgICB9XG5cbiAgICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIGdldERheU51bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkLmdldERheSgpO1xuICAgIH1cblxuICAgIGdldFdlZWtEYXlzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWVrRGF5cztcbiAgICB9XG5cbiAgICBnZXRXZWVrZGF5SW5kZXgod2Q6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy53ZWVrRGF5cy5pbmRleE9mKHdkKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZS50cyIsIi8qXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXG4gKi9cblxuLyogdHNsaW50OmRpc2FibGUgKi9cbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XG5cbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcbiAgICBwYXRjaCA9IHRydWU7XG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XG59XG5cbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICB9XG59XG5cbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcbmlmIChwYXRjaCkge1xuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJpbXBvcnQgeyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgfSBmcm9tICdhbmd1bGFydGljczInO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xuXHRjb25zdHJ1Y3Rvcihhbmd1bGFydGljczJHb29nbGVBbmFseXRpY3M6IEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcywgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5OiBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xuICB9XG4gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXG4gKi9cblxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNeURhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGFjdFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknO1xuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnZVJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcml2YWN5Q29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQnXG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSwgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZzJQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmcyLXBhZ2luYXRpb24nO1xuXG4vKipcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXG4gKi9cbkBOZ01vZHVsZSh7XG4gIC8qKiBSb290IEFwcCBDb21wb25lbnQgKi9cbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cbiAgZGVjbGFyYXRpb25zOiBbXG5cdEFwcENvbXBvbmVudCxcbiAgICBIb21lQ29tcG9uZW50LFxuICAgIE5hdkNvbXBvbmVudCwgXG4gICAgRHJvcGRvd25Db21wb25lbnQsXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCxcbiAgICBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50LFxuICAgIFdvcmtzaG9wc0NvbXBvbmVudCxcbiAgICBDb250YWN0VXNDb21wb25lbnQsXG4gICAgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50LFxuICAgIFBhZ2VSZWRpcmVjdENvbXBvbmVudCxcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQsXG4gICAgQWJvdXRDb21wb25lbnQsXG4gICAgRXJyb3JDb21wb25lbnQsXG4gICAgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50LFxuICAgIEZvb3RlckNvbXBvbmVudCxcbiAgICBQcml2YWN5Q29tcG9uZW50XG5cdF0sXG4gIGltcG9ydHM6IFtcbiAgICAvKipcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcbiAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxuICAgICAqL1xuICAgIFVuaXZlcnNhbE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNeURhdGVQaWNrZXJNb2R1bGUsXG4gICAgLyoqXG4gICAgICogdXNpbmcgcm91dGVzXG4gICAgICovXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yUm9vdChbIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyBdKSxcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBOZzJQYWdpbmF0aW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1dvcmtzaG9wUmVwb3NpdG9yeSwgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gIGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9ICBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9ICBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcbmltcG9ydCB7IFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250YWN0VXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGFnZVJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFByaXZhY3lDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudCdcblxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIHsgcGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnd29ya3Nob3BzLzpwYWdlTnVtYmVyJywgY29tcG9uZW50OiBXb3Jrc2hvcHNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAncGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy86dGl0bGUvOmlkJywgY29tcG9uZW50OiBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnY29udGFjdCcsIGNvbXBvbmVudDogQ29udGFjdFVzQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3BhZ2UtcmVkaXJlY3QvOmV4dGVybmFsVXJsJywgY29tcG9uZW50OiBQYWdlUmVkaXJlY3RDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gIHsgcGF0aDogJzQwNCcsIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsIHBhdGhNYXRjaDonZnVsbCd9LFxuICB7IHBhdGg6ICd0ZXJtc2FuZGNvbmRpdGlvbnMnLCBjb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCd9LFxuICB7IHBhdGg6ICdwcml2YWN5cG9saWN5JywgY29tcG9uZW50OiBQcml2YWN5Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJ30sXG4gIHsgcGF0aDogJ3dvcmtzaG9wcycsIHJlZGlyZWN0VG86ICcvd29ya3Nob3BzLzEnIH0sXG4gIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy80MDQnIH1cbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5J1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZScsXG4gICAgaG9zdDogeyAnKGRvY3VtZW50OmNsaWNrKSc6ICdoYW5kbGVDbGljaygkZXZlbnQpJyB9LFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XG4gICAgcHVibGljIHF1ZXJ5ID0gJyc7XG4gICAgcHVibGljIGNvdW50cmllcyA9IFtdO1xuICAgIHB1YmxpYyBmaWx0ZXJlZExpc3QgPSBbXTtcbiAgICBwdWJsaWMgZWxlbWVudFJlZjtcbiAgICBwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5O1xuXG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcihteUVsZW1lbnQ6IEVsZW1lbnRSZWYsIHdvcmtzaG9wUmVwbzogV29ya3Nob3BSZXBvc2l0b3J5KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IG15RWxlbWVudDtcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkgPSB3b3Jrc2hvcFJlcG87XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldExvY2F0aW9ucygpLnRoZW4obG9jID0+IHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChsb2NbaV0ubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbSkge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gaXRlbTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhldmVudCkge1xuICAgICAgICB2YXIgY2xpY2tlZENvbXBvbmVudCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGluc2lkZSA9IGZhbHNlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCA9PT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudCA9IGNsaWNrZWRDb21wb25lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfSB3aGlsZSAoY2xpY2tlZENvbXBvbmVudCk7XG4gICAgICAgIGlmICghaW5zaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGhpcy5xdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE15RGF0ZVBpY2tlciB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudCdcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlckNvbXBvbmVudCB7XG4gIHByaXZhdGUgZnJvbURhdGVQaWNrZXJPcHRpb25zO1xuICBwcml2YXRlIHRvRGF0ZVBpY2tlck9wdGlvbnM7XG4gIHByaXZhdGUgZnJvbURhdGVMYWJlbDogc3RyaW5nID0gXCJGcm9tIGRhdGVcIjtcbiAgcHJpdmF0ZSB0b0RhdGVMYWJlbDogc3RyaW5nID0gXCJUbyBkYXRlXCI7XG4gIHByaXZhdGUgcHJldmlvdXNEYXRlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEZyb21DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWRUb0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcHJldmlvdXMgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSwgY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgdGhpcy5wcmV2aW91c0RhdGUgPSB7IHllYXI6IHByZXZpb3VzLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBwcmV2aW91cy5nZXRNb250aCgpLCBkYXk6IHByZXZpb3VzLmdldERhdGUoKSB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mcm9tRGF0ZVBpY2tlck9wdGlvbnMgPSB7XG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXG4gICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcbiAgICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcbiAgICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXG4gICAgICBkaXNhYmxlVW50aWw6IHRoaXMucHJldmlvdXNEYXRlXG4gICAgfTtcbiAgfVxuXG4gIG9uRnJvbURhdGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgdmFyIHNlbGVjdGVkRGF0ZSA9IGV2ZW50LmRhdGU7XG4gICAgdGhpcy50b0RhdGVQaWNrZXJPcHRpb25zID0ge1xuICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW0tZGQnLFxuICAgICAgbWFya0N1cnJlbnREYXk6IHRydWUsXG4gICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXG4gICAgICBtb250aFNlbGVjdG9yOiB0cnVlLFxuICAgICAgZGlzYWJsZVVudGlsOiB7XG4gICAgICAgIHllYXI6IHNlbGVjdGVkRGF0ZS55ZWFyLFxuICAgICAgICBtb250aDogc2VsZWN0ZWREYXRlLm1vbnRoLFxuICAgICAgICBkYXk6IHNlbGVjdGVkRGF0ZS5kYXlcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3RlZEZyb21DaGFuZ2VkLmVtaXQoc2VsZWN0ZWREYXRlKTtcbiAgfVxuXG4gIG9uVG9EYXRlQ2hhbmdlZChldmVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIHZhciBzZWxlY3RlZERhdGUgPSBldmVudC5kYXRlO1xuICAgIHRoaXMuZnJvbURhdGVQaWNrZXJPcHRpb25zID0ge1xuICAgICAgZGlzYWJsZVVudGlsOiB0aGlzLnByZXZpb3VzRGF0ZSxcbiAgICAgIGRpc2FibGVTaW5jZToge1xuICAgICAgICB5ZWFyOiBzZWxlY3RlZERhdGUueWVhcixcbiAgICAgICAgbW9udGg6IHNlbGVjdGVkRGF0ZS5tb250aCxcbiAgICAgICAgZGF5OiBzZWxlY3RlZERhdGUuZGF5XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkVG9DaGFuZ2VkLmVtaXQoc2VsZWN0ZWREYXRlKTtcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQge1xuICBASW5wdXQoKSBkYXRhTW9kZWw6IGFueVtdO1xuICBASW5wdXQoKSBidXR0b25MYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25OYW1lOiBzdHJpbmc7XG4gIFxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBpc0NvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBzZWxmQ2xpY2s6IGJvb2xlYW47XG4gIHByaXZhdGUgcGFuZWxPdmVybGF5OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcbiAgICB0aGlzLnNlbGZDbGljayA9IGZhbHNlO1xuICAgIHRoaXMucGFuZWxPdmVybGF5ID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhhdC5pc0NvbGxhcHNlZCAmJiAhdGhhdC5zZWxmQ2xpY2sgJiYgIXRoaXMucGFuZWxPdmVybGF5KSB7XG4gICAgICAgIHRoYXQuaXNDb2xsYXBzZWQgPSB0cnVlO1xuICAgIFx0dGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoXCJjaGFuZ2VkXCIpO1xuICAgIH1cbiAgICAgIHRoYXQuc2VsZkNsaWNrID0gZmFsc2U7XG4gICAgICB0aGlzLnBhbmVsT3ZlcmxheSA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgaWYgKCF0aGlzLnBhbmVsT3ZlcmxheSkge1xuICAgICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIH1cbiAgICB0aGlzLnNlbGZDbGljayA9IHRydWU7XG4gIH1cblxuICBvdmVybGF5KCkge1xuICAgIHRoaXMucGFuZWxPdmVybGF5ID0gdHJ1ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25hdmktYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQge1xuICAgIHByaXZhdGUgaGlkZUZpbHRlcjogYm9vbGVhbjtcbiAgICBwcml2YXRlIGhpZGVOYXZiYXI6IGJvb2xlYW47XG4gICAgQE91dHB1dCgpIGZpbHRlcnNEcm9wZG93blRvZ2dsZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBASW5wdXQoKSBzaG93RmlsdGVyczogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSB0cnVlO1xuICAgIH1cbiAgICB0b2dnbGVGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9ICF0aGlzLmhpZGVGaWx0ZXI7XG4gICAgICAgIGlmICghdGhpcy5oaWRlTmF2YmFyKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlLmVtaXQodGhpcy5oaWRlRmlsdGVyKTtcbiAgICB9XG5cbiAgICB0b2dnbGVOYXZiYXIoKSB7XG4gICAgICAgIHRoaXMuaGlkZU5hdmJhciA9ICF0aGlzLmhpZGVOYXZiYXI7XG4gICAgICAgIGlmICghdGhpcy5oaWRlRmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJzRHJvcGRvd25Ub2dnbGUuZW1pdCh0aGlzLmhpZGVGaWx0ZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSwgSUxvY2F0aW9uLCBJUGhvdG9ncmFwaGVyIH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dvcmtzaG9wLWZpbHRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50IHtcblxuICBAT3V0cHV0KCkgZnJvbURhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgdG9EYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvY2F0aW9uRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1pblByaWNlRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG1heFByaWNlRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGFwcGx5RmlsdGVycyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgXG4gIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczI7XG5cbiAgcHVibGljIGNpdGllczogYW55W107XG4gIHB1YmxpYyBjYXRlZ29yaWVzOiBhbnlbXTtcbiAgXG4gIC8qKiBsYWJlbHMgZm9yIGZpbHRlcnMgKi9cbiAgcHVibGljIGNpdHlEcm9wZG93bkxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBwaG90b2dyYXBoZXJEcm9wZG93bkxhYmVsOiBzdHJpbmc7XG4gIHB1YmxpYyBjYXRlZ29yeURyb3Bkb3duTGFiZWw6IHN0cmluZztcbiAgcHVibGljIGZyb21EYXRlTGFiZWw6IHN0cmluZztcbiAgcHVibGljIHRvRGF0ZUxhYmVsOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjaGVja2JveEVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xuXG4gIC8qKiBkYXRlIGZpbHRlcnMgKi9cbiAgcHVibGljIG1pbkZyb21EYXRlOiBEYXRlO1xuICBwdWJsaWMgbWF4RnJvbURhdGU6IERhdGU7XG4gIHB1YmxpYyBtaW5Ub0RhdGU6IERhdGU7XG4gIHB1YmxpYyBtYXhUb0RhdGU6IERhdGU7XG4gIHB1YmxpYyBmcm9tRGF0ZTogRGF0ZTtcbiAgcHVibGljIHRvRGF0ZTogRGF0ZTtcblxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xuICBwcml2YXRlIHdvcmtzaG9wUmVwbyA6IFdvcmtzaG9wUmVwb3NpdG9yeTtcblxuICBwdWJsaWMgc2hvd0ZpbHRlcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5LCBwcml2YXRlIGE6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMiA9IGE7XG4gICAgdGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xuICAgIHRoaXMud29ya3Nob3BSZXBvID0gd29ya3Nob3BSZXBvc2l0b3J5O1xuICAgIFxuICAgIHRoaXMudXBkYXRlQ2F0ZWdvcmllcygpO1xuICAgIFxuICAgIHRoaXMuY2l0eURyb3Bkb3duTGFiZWwgPSBcIkxvY2F0aW9uXCI7XG4gICAgdGhpcy5waG90b2dyYXBoZXJEcm9wZG93bkxhYmVsID0gXCJQaG90b2dyYXBoZXJcIjtcbiAgICB0aGlzLmNhdGVnb3J5RHJvcGRvd25MYWJlbCA9IFwiQ2F0ZWdvcnlcIjtcbiAgICB0aGlzLmZyb21EYXRlTGFiZWwgPSBcIkZyb21cIjtcbiAgICB0aGlzLnRvRGF0ZUxhYmVsID0gXCJUb1wiO1xuXG4gICAgdGhpcy5taW5Gcm9tRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdGhpcy5zaG93RmlsdGVyID0gdHJ1ZTtcbiAgfVxuXG4gIHVwZGF0ZUNhdGVnb3JpZXMoKVxuICB7XG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XG4gICAgdGhpcy53b3Jrc2hvcFJlcG8uZ2V0V29ya3Nob3BUeXBlcygpLnRoZW4od1R5cGVzID0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHdUeXBlcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd1R5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtsYWJlbDp3VHlwZXNbaV0sIHZhbHVlOndUeXBlc1tpXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEZyb21EYXRlKHZhbHVlOiBEYXRlKSB7XG4gICAgdGhpcy5mcm9tRGF0ZSA9IHZhbHVlO1xuXHR0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdGcm9tRGF0ZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG4gICAgdGhpcy5mcm9tRGF0ZUNoYW5nZWQuZW1pdCh0aGlzLmZyb21EYXRlKTtcbiAgfVxuXG4gIGdldFRvRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMudG9EYXRlID0gdmFsdWU7XG5cdHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ1RvRGF0ZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG5cdHRoaXMudG9EYXRlQ2hhbmdlZC5lbWl0KHRoaXMudG9EYXRlKTtcbiAgfVxuXG4gIHRvZ2dsZUZpbHRlcigpIHtcbiAgICB0aGlzLmFwcGx5RmlsdGVycy5lbWl0KHRydWUpO1xuICB9XG4gIFxuICB1cGRhdGVNaW5QcmljZSh2YWx1ZTpudW1iZXIpXG4gIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNaW5QcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG4gICAgdGhpcy5taW5QcmljZUZpbHRlckNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gIH1cbiAgXG4gIFxuICB1cGRhdGVNYXhQcmljZSh2YWx1ZTpudW1iZXIpXG4gIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNYXhQcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG4gICAgdGhpcy5tYXhQcmljZUZpbHRlckNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBnZXRTZWxlY3RlZEZpbHRlcnMoaW5wdXROYW1lOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdO1xuICAgIHRoaXMuY2hlY2tib3hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9JHtpbnB1dE5hbWV9XTpjaGVja2VkYCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoZWNrYm94RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciB4ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5jaGVja2JveEVsZW1lbnRzW2ldO1xuICAgICAgc2VsZWN0ZWQucHVzaCh4LnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cbiAgXG4gIHVwZGF0ZUxvY2F0aW9uKHZhbHVlOiBhbnkpXG4gIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdMb2NhdGlvbkZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG4gICAgbGV0IGxvYyA9IHRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5nZXRMb2NhdGlvbkJ5TG9jYXRpb25OYW1lKHZhbHVlKTtcbiAgICBpZighbG9jKVxuICAgIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbkZpbHRlckNoYW5nZWQuZW1pdChudWxsKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbkZpbHRlckNoYW5nZWQuZW1pdChsb2MuaWQpO1xuICAgIH1cbiAgfVxuICBcbiAgdXBkYXRlQ2F0ZWdvcnlMaXN0KHZhbHVlOiBhbnkpXG4gIHtcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdDYXRlZ29yeUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XG5cbiAgICBsZXQgY2F0ZWdvcmllcyA9IHRoaXMuZ2V0U2VsZWN0ZWRGaWx0ZXJzKCdjYXRlZ29yaWVzJyk7XG4gICAgbGV0IHdvcmtzaG9wVHlwZXNMaXN0ID0gXCJcIjtcbiAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcylcbiAgICB7XG4gICAgICAgIGlmKCFmaXJzdClcbiAgICAgICAgICAgIHdvcmtzaG9wVHlwZXNMaXN0ID0gd29ya3Nob3BUeXBlc0xpc3QgKyBcIixcIjtcbiAgICAgICAgZmlyc3Q9ZmFsc2U7XG4gICAgICAgIHdvcmtzaG9wVHlwZXNMaXN0ID0gd29ya3Nob3BUeXBlc0xpc3QrY2F0ZWdvcnk7XG4gICAgfVxuXHQgIFxuICAgIHRoaXMuY2F0ZWdvcnlGaWx0ZXJDaGFuZ2VkLmVtaXQod29ya3Nob3BUeXBlc0xpc3QpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XG5cbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXG4gKlxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuICogJ2hvbWUnLCAnYWJvdXQnXG4gKiBdO1xuICoqL1xuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXG4naG9tZScsICd3b3Jrc2hvcHMnLCdhYm91dCcsICc0MDQnLCAnKionLCdwaG90b2dyYXBoeS13b3Jrc2hvcC1kZXRhaWxzLycsJ2NvbnRhY3QnLCdwYWdlLXJlZGlyZWN0LycsICd0ZXJtc2FuZGNvbmRpdGlvbnMnLCAncHJpdmFjeXBvbGljeSdcbl07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJteWRwXFxcIiBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNob3dJbnB1dEZpZWxkID8gb3B0cy53aWR0aCA6IG51bGwsICdib3JkZXInOiBvcHRzLmlubGluZSA/ICdub25lJyA6IG51bGx9XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0aW9uZ3JvdXBcXFwiICpuZ0lmPVxcXCIhb3B0cy5pbmxpbmVcXFwiPlxcbiAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJvcHRzLnNob3dJbnB1dEZpZWxkXFxcIiAjaW5wdXRCb3hFbCBuZ3R5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWxlY3Rpb25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbElucHV0RmllbGRcXFwiIChjbGljayk9XFxcIm9wdHMub3BlblNlbGVjdG9yT25JbnB1dENsaWNrJiYhb3B0cy5lZGl0YWJsZURhdGVGaWVsZCYmb3BlbkJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2ludmFsaWRkYXRlJzogaW52YWxpZERhdGUmJm9wdHMuaW5kaWNhdGVJbnZhbGlkRGF0ZSwgJ2lucHV0bm90ZWRpdGFibGUnOiBvcHRzLm9wZW5TZWxlY3Rvck9uSW5wdXRDbGljayYmIW9wdHMuZWRpdGFibGVEYXRlRmllbGQsICdzZWxlY3Rpb25kaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWR9XFxcIlxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiIFtuZ1N0eWxlXT1cXFwieydoZWlnaHQnOiBvcHRzLmhlaWdodCwgJ2ZvbnQtc2l6ZSc6IG9wdHMuc2VsZWN0aW9uVHh0Rm9udFNpemV9XFxcIiBbbmdNb2RlbF09XFxcInNlbGVjdGlvbkRheVR4dFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvblVzZXJEYXRlSW5wdXQoJGV2ZW50KVxcXCIgW3ZhbHVlXT1cXFwic2VsZWN0aW9uRGF5VHh0XFxcIiAoa2V5dXApPVxcXCJvbkNsb3NlU2VsZWN0b3IoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAoZm9jdXMpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkZvY3VzSW5wdXQoJGV2ZW50KVxcXCIgKGJsdXIpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkJsdXJJbnB1dCgkZXZlbnQpXFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIiBbcmVhZG9ubHldPVxcXCIhb3B0cy5lZGl0YWJsZURhdGVGaWVsZFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhdXRvY29ycmVjdD1cXFwib2ZmXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGJ0bmdyb3VwXFxcIiBbc3R5bGUuaGVpZ2h0XT1cXFwib3B0cy5oZWlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxEZWNyZWFzZURhdGVcXFwiIGNsYXNzPVxcXCJidG5kZWNyZWFzZVxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0blxcXCIgKGNsaWNrKT1cXFwib25EZWNyZWFzZUJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bmRlY3JlYXNlZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRuZGVjcmVhc2VkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsSW5jcmVhc2VEYXRlXFxcIiBjbGFzcz1cXFwiYnRuaW5jcmVhc2VcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dJbmNyZWFzZURhdGVCdG5cXFwiIChjbGljayk9XFxcIm9uSW5jcmVhc2VCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5pbmNyZWFzZWVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmluY3JlYXNlZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByaWdodFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxDbGVhckRhdGVcXFwiIGNsYXNzPVxcXCJidG5jbGVhclxcXCIgKm5nSWY9XFxcInNlbGVjdGlvbkRheVR4dC5sZW5ndGg+MCYmb3B0cy5zaG93Q2xlYXJEYXRlQnRuXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5jbGVhcmVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmNsZWFyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByZW1vdmVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsT3BlbkNhbGVuZGFyXFxcIiBjbGFzcz1cXFwiYnRucGlja2VyXFxcIiAoY2xpY2spPVxcXCJvcGVuQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRucGlja2VyZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRucGlja2VyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dDbGVhckRhdGVCdG4mJiFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfHxzZWxlY3Rpb25EYXlUeHQubGVuZ3RoPT09MCYmIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGNhbGVuZGFyXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdG9yXFxcIiAjc2VsZWN0b3JFbCBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNlbGVjdG9yV2lkdGgsICdoZWlnaHQnIDogb3B0cy5zZWxlY3RvckhlaWdodCwgJ2JvdHRvbSc6IGdldFNlbGVjdG9yVG9wUG9zaXRpb24oKX1cXFwiICpuZ0lmPVxcXCJzaG93U2VsZWN0b3J8fG9wdHMuaW5saW5lXFxcIiBbbXlkcGZvY3VzXT1cXFwib3B0cy5pbmxpbmU/JzAnOicxJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lubGluZWRwJzogb3B0cy5pbmxpbmUsICdhbGlnbnNlbGVjdG9ycmlnaHQnOiBvcHRzLmFsaWduU2VsZWN0b3JSaWdodCwgJ3NlbGVjdG9yYXJyb3cnOiBvcHRzLnNob3dTZWxlY3RvckFycm93JiYhb3B0cy5pbmxpbmUsICdzZWxlY3RvcmFycm93bGVmdCc6IG9wdHMuc2hvd1NlbGVjdG9yQXJyb3cmJiFvcHRzLmFsaWduU2VsZWN0b3JSaWdodCYmIW9wdHMuaW5saW5lLCAnc2VsZWN0b3JhcnJvd3JpZ2h0Jzogb3B0cy5zaG93U2VsZWN0b3JBcnJvdyYmb3B0cy5hbGlnblNlbGVjdG9yUmlnaHQmJiFvcHRzLmlubGluZX1cXFwiIChrZXl1cCk9XFxcIm9uQ2xvc2VTZWxlY3RvcigkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmbG9hdDpsZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsUHJldk1vbnRoXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiIChjbGljayk9XFxcIm9uUHJldk1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFwcmV2TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogcHJldk1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJtb250aHR4dFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcmxhYmVsYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtuZ0NsYXNzXT1cXFwieydtb250aGxhYmVsJzogb3B0cy5tb250aFNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy5tb250aFNlbGVjdG9yJiZvblNlbGVjdE1vbnRoQ2xpY2tlZCgkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwie3tvcHRzLm1vbnRoU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgubW9udGhUeHR9fTwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxOZXh0TW9udGhcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwcmlnaHRcXFwiIChjbGljayk9XFxcIm9uTmV4dE1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFuZXh0TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogbmV4dE1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJvcHRzLnNob3dUb2RheUJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiaGVhZGVydG9kYXlidG5cXFwiIChjbGljayk9XFxcIm9uVG9kYXlDbGlja2VkKClcXFwiIFtkaXNhYmxlZF09XFxcImRpc2FibGVUb2RheUJ0blxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcnRvZGF5YnRuZW5hYmxlZCc6ICFkaXNhYmxlVG9kYXlCdG4sICdoZWFkZXJ0b2RheWJ0bmRpc2FibGVkJzogZGlzYWJsZVRvZGF5QnRufVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcHRvZGF5XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tvcHRzLnRvZGF5QnRuVHh0fX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiZmxvYXQ6cmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxQcmV2WWVhclxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHBsZWZ0XFxcIiAoY2xpY2spPVxcXCJvblByZXZZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIXByZXZZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IHByZXZZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJ5ZWFydHh0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVybGFiZWxidG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW25nQ2xhc3NdPVxcXCJ7J3llYXJsYWJlbCc6IG9wdHMueWVhclNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy55ZWFyU2VsZWN0b3ImJm9uU2VsZWN0WWVhckNsaWNrZWQoJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcInt7b3B0cy55ZWFyU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgueWVhcn19PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbE5leHRZZWFyXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcHJpZ2h0XFxcIiAoY2xpY2spPVxcXCJvbk5leHRZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIW5leHRZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IG5leHRZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJjYWx0YWJsZVxcXCIgKm5nSWY9XFxcIiFzZWxlY3RNb250aCYmIXNlbGVjdFllYXJcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGUgd2Vla2RheXRpdGxld2Vla25iclxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd1dlZWtOdW1iZXJzJiZvcHRzLmZpcnN0RGF5T2ZXZWVrPT09J21vJ1xcXCI+IzwvdGg+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiICpuZ0Zvcj1cXFwibGV0IGQgb2Ygd2Vla0RheXNcXFwiPnt7ZH19PC90aD48L3RyPjwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdyBvZiBkYXRlc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImRheWNlbGwgZGF5Y2VsbHdlZWtuYnJcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dXZWVrTnVtYmVycyYmb3B0cy5maXJzdERheU9mV2Vlaz09PSdtbydcXFwiPnt7dy53ZWVrTmJyfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJkYXljZWxsXFxcIiAqbmdGb3I9XFxcImxldCBkIG9mIHcud2Vla1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2N1cnJtb250aCc6ZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWQsICdzZWxlY3RlZGRheSc6c2VsZWN0ZWREYXRlLmRheT09PWQuZGF0ZU9iai5kYXkgJiYgc2VsZWN0ZWREYXRlLm1vbnRoPT09ZC5kYXRlT2JqLm1vbnRoICYmIHNlbGVjdGVkRGF0ZS55ZWFyPT09ZC5kYXRlT2JqLnllYXIgJiYgZC5jbW89PT1jdXJyTW9udGhJZCwgJ2Rpc2FibGVkJzogZC5kaXNhYmxlZCwgJ3RhYmxlc2luZ2xlZGF5JzogZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWR9XFxcIiAoY2xpY2spPVxcXCIhZC5kaXNhYmxlZCYmb25DZWxsQ2xpY2tlZChkKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChrZXlkb3duKT1cXFwib25DZWxsS2V5RG93bigkZXZlbnQsIGQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZC5tYXJrZWREYXRlLm1hcmtlZFxcXCIgY2xhc3M9XFxcIm1hcmtkYXRlXFxcIiBbbmdTdHlsZV09XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGQubWFya2VkRGF0ZS5jb2xvcn1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGV2YWx1ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3ByZXZtb250aCc6ZC5jbW89PT1wcmV2TW9udGhJZCwnY3Vycm1vbnRoJzpkLmNtbz09PWN1cnJNb250aElkLCduZXh0bW9udGgnOmQuY21vPT09bmV4dE1vbnRoSWQsJ2hpZ2hsaWdodCc6ZC5oaWdobGlnaHR9XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVxcXCJ7J21hcmtjdXJyZGF5JzpkLmN1cnJEYXkmJm9wdHMubWFya0N1cnJlbnREYXksICdkaW1kYXknOiBkLmhpZ2hsaWdodCAmJiAoZC5jbW89PT1wcmV2TW9udGhJZCB8fCBkLmNtbz09PW5leHRNb250aElkIHx8IGQuZGlzYWJsZWQpfVxcXCI+e3tkLmRhdGVPYmouZGF5fX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJtb250aHRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0TW9udGhcXFwiPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IG1yIG9mIG1vbnRoc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIm1vbnRoY2VsbCB0YWJsZXNpbmdsZW1vbnRoXFxcIiBbbmdDbGFzc109XFxcInsnc2VsZWN0ZWRtb250aCc6IG0uc2VsZWN0ZWQsICdkaXNhYmxlZCc6IG0uZGlzYWJsZWR9XFxcIiAqbmdGb3I9XFxcImxldCBtIG9mIG1yXFxcIiAoY2xpY2spPVxcXCIhbS5kaXNhYmxlZCYmb25Nb250aENlbGxDbGlja2VkKG0pOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvbk1vbnRoQ2VsbEtleURvd24oJGV2ZW50LCBtKVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vbnRodmFsdWVcXFwiIFtuZ0NsYXNzXT1cXFwieydtYXJrY3Vycm1vbnRoJzptLmN1cnJNb250aCYmb3B0cy5tYXJrQ3VycmVudE1vbnRofVxcXCI+e3ttLm5hbWV9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwieWVhcnRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0WWVhclxcXCI+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG5jZWxsXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0biBteWRwaWNvbiBpY29uLW15ZHB1cFxcXCIgKGNsaWNrKT1cXFwib25QcmV2WWVhcnMoJGV2ZW50LCB5ZWFyc1swXVswXS55ZWFyKVxcXCIgW2Rpc2FibGVkXT1cXFwicHJldlllYXJzRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieyd5ZWFyY2hhbmdlYnRuZW5hYmxlZCc6ICFwcmV2WWVhcnNEaXNhYmxlZCwgJ3llYXJjaGFuZ2VidG5kaXNhYmxlZCc6IHByZXZZZWFyc0Rpc2FibGVkfVxcXCI+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgeXIgb2YgeWVhcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ5ZWFyY2VsbCB0YWJsZXNpbmdsZXllYXJcXFwiIFtuZ0NsYXNzXT1cXFwieydzZWxlY3RlZHllYXInOiB5LnNlbGVjdGVkLCAnZGlzYWJsZWQnOiB5LmRpc2FibGVkfVxcXCIgKm5nRm9yPVxcXCJsZXQgeSBvZiB5clxcXCIgKGNsaWNrKT1cXFwiIXkuZGlzYWJsZWQmJm9uWWVhckNlbGxDbGlja2VkKHkpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvblllYXJDZWxsS2V5RG93bigkZXZlbnQsIHkpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwieWVhcnZhbHVlXFxcIiBbbmdDbGFzc109XFxcInsnbWFya2N1cnJ5ZWFyJzp5LmN1cnJZZWFyJiZvcHRzLm1hcmtDdXJyZW50WWVhcn1cXFwiPnt7eS55ZWFyfX08L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI1XFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0bmNlbGxcXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuIG15ZHBpY29uIGljb24tbXlkcGRvd25cXFwiIChjbGljayk9XFxcIm9uTmV4dFllYXJzKCRldmVudCwgeWVhcnNbMF1bMF0ueWVhcilcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyc0Rpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsneWVhcmNoYW5nZWJ0bmVuYWJsZWQnOiAhbmV4dFllYXJzRGlzYWJsZWQsICd5ZWFyY2hhbmdlYnRuZGlzYWJsZWQnOiBuZXh0WWVhcnNEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5teWRwIHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5teWRwICoge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubXlkcCxcXG4ubXlkcCAuc2VsZWN0aW9uZ3JvdXAsXFxuLm15ZHAgLnNlbGVjdGlvbixcXG4ubXlkcCAuc2VsZWN0b3IsXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcblxcbi5teWRwIC5jYWx0YWJsZSxcXG4ubXlkcCAubW9udGh0YWJsZSxcXG4ubXlkcCAueWVhcnRhYmxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxufVxcblxcbi5teWRwIC5jYWx0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNikgdGQ6Zmlyc3QtY2hpbGQsXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmZpcnN0LWNoaWxkLFxcbi5teWRwIC55ZWFydGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDcpIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcbn1cXG5cXG4ubXlkcCAuY2FsdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDYpIHRkOmxhc3QtY2hpbGQsXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmxhc3QtY2hpbGQsXFxuLm15ZHAgLnllYXJ0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNykgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcblxcbi5teWRwIC5idG5waWNrZXIge1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXG59XFxuXFxuLm15ZHAgLmJ0bmxlZnRib3JkZXJyYWRpdXMge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdG9yIHtcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RvcmZhZGVpbiAwLjFzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2VsZWN0b3JmYWRlaW4gMC4xcztcXG59XFxuXFxuLm15ZHAgLnNlbGVjdG9yOmZvY3VzIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FERDhFNjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNlbGVjdG9yZmFkZWluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBvcGFjaXR5OiAwO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzZWxlY3RvcmZhZGVpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxufVxcblxcbi5teWRwIC5zZWxlY3RvcmFycm93IHtcXG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIsXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YmVmb3JlIHtcXG4gICAgYm90dG9tOiAxMDAlO1xcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIGhlaWdodDogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGQUZBRkE7XFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMCk7XFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNDQ0M7XFxuICAgIGJvcmRlci13aWR0aDogMTFweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xcbn1cXG5cXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpmb2N1czpiZWZvcmUge1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjQUREOEU2O1xcbn1cXG5cXG4ubXlkcCAuc2VsZWN0b3JhcnJvd2xlZnQ6YWZ0ZXIsXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dsZWZ0OmJlZm9yZSB7XFxuICAgIGxlZnQ6IDI0cHg7XFxufVxcblxcbi5teWRwIC5zZWxlY3RvcmFycm93cmlnaHQ6YWZ0ZXIsXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dyaWdodDpiZWZvcmUge1xcbiAgICBsZWZ0OiA4NiU7XFxufVxcblxcbi5teWRwIC5hbGlnbnNlbGVjdG9ycmlnaHQge1xcbiAgICByaWdodDogLTFweDtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdGlvbmdyb3VwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdGlvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogIzU1NTtcXG59XFxuXFxuLm15ZHAgLmludmFsaWRkYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxREVERTtcXG59XFxuXFxuLm15ZHAgOjotbXMtY2xlYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubXlkcCAuc2VsYnRuZ3JvdXAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgZm9udC1zaXplOiAwO1xcbn1cXG5cXG4ubXlkcCAuYnRucGlja2VyLFxcbi5teWRwIC5idG5jbGVhcixcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxuLm15ZHAgLmJ0bmluY3JlYXNlIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubXlkcCAuYnRubGVmdGJvcmRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQztcXG59XFxuXFxuLm15ZHAgLmJ0bnBpY2tlcmVuYWJsZWQsXFxuLm15ZHAgLmJ0bmNsZWFyZW5hYmxlZCxcXG4ubXlkcCAuYnRuZGVjcmVhc2VlbmFibGVkLFxcbi5teWRwIC5idG5pbmNyZWFzZWVuYWJsZWQsXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZW5hYmxlZCxcXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZCxcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5teWRwIC5zZWxlY3Rpb25kaXNhYmxlZCxcXG4ubXlkcCAuYnRucGlja2VyZGlzYWJsZWQsXFxuLm15ZHAgLmJ0bmNsZWFyZGlzYWJsZWQsXFxuLm15ZHAgLmJ0bmRlY3JlYXNlZGlzYWJsZWQsXFxuLm15ZHAgLmJ0bmluY3JlYXNlZGlzYWJsZWQsXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZGlzYWJsZWQsXFxuLm15ZHAgLmhlYWRlcmJ0bmRpc2FibGVkLFxcbi5teWRwIC55ZWFyY2hhbmdlYnRuZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBvcGFjaXR5OiAwLjY1O1xcbn1cXG5cXG4ubXlkcCAuc2VsZWN0aW9uZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcbn1cXG5cXG4ubXlkcCAuYnRucGlja2VyLFxcbi5teWRwIC5idG5jbGVhcixcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxufVxcblxcbi5teWRwIC5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVyIHRkIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG59XFxuXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMSkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMikge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5teWRwIC5oZWFkZXIgdGQ6bnRoLWNoaWxkKDMpIHtcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcbn1cXG5cXG4ubXlkcCAuY2FsdGFibGUsXFxuLm15ZHAgLm1vbnRodGFibGUsXFxuLm15ZHAgLnllYXJ0YWJsZSB7XFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5teWRwIC5jYWx0YWJsZSxcXG4ubXlkcCAubW9udGh0YWJsZSxcXG4ubXlkcCAueWVhcnRhYmxlLFxcbi5teWRwIC53ZWVrZGF5dGl0bGUsXFxuLm15ZHAgLmRheWNlbGwsXFxuLm15ZHAgLm1vbnRoY2VsbCxcXG4ubXlkcCAueWVhcmNlbGwge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBjb2xvcjogIzAwMzM2NjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuLm15ZHAgLndlZWtkYXl0aXRsZSxcXG4ubXlkcCAuZGF5Y2VsbCxcXG4ubXlkcCAubW9udGhjZWxsLFxcbi5teWRwIC55ZWFyY2VsbCB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubXlkcCAud2Vla2RheXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBtYXgtd2lkdGg6IDM2cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5teWRwIC53ZWVrZGF5dGl0bGV3ZWVrbmJyIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCQkI7XFxufVxcblxcbi5teWRwIC5tb250aGNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubXlkcCAueWVhcmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4ubXlkcCAuZGF5Y2VsbCAuZGF0ZXZhbHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm15ZHAgLmRheWNlbGwgLmRhdGV2YWx1ZSBzcGFuIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm15ZHAgLmRheWNlbGx3ZWVrbmJyIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubXlkcCAuaW5saW5lZHAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxufVxcblxcbi5teWRwIC5wcmV2bW9udGgsXFxuLm15ZHAgLm5leHRtb250aCB7XFxuICAgIGNvbG9yOiAjQ0NDO1xcbn1cXG5cXG4ubXlkcCAuZGlzYWJsZWQge1xcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICNDQ0M7XFxuICAgIGJhY2tncm91bmQ6ICNGQkVGRUY7XFxufVxcblxcbi5teWRwIC5oaWdobGlnaHQge1xcbiAgICBjb2xvcjogI0MzMDAwMDtcXG59XFxuXFxuLm15ZHAgLmRpbWRheSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuLm15ZHAgLmN1cnJtb250aCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5teWRwIC5tYXJrZGF0ZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDRweDtcXG4gICAgaGVpZ2h0OiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm15ZHAgLm1hcmtjdXJyZGF5LFxcbi5teWRwIC5tYXJrY3Vycm1vbnRoLFxcbi5teWRwIC5tYXJrY3VycnllYXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLm15ZHAgLnNlbGVjdGVkZGF5IC5kYXRldmFsdWUsXFxuLm15ZHAgLnNlbGVjdGVkbW9udGggLm1vbnRodmFsdWUsXFxuLm15ZHAgLnNlbGVjdGVkeWVhciAueWVhcnZhbHVlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVCRkZGO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi5teWRwIC5oZWFkZXJidG5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5jZWxsIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVyYnRuLFxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0bixcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVyYnRuIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxufVxcblxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4ubXlkcCxcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcbn1cXG5cXG4ubXlkcCAuYnRucGlja2VyLFxcbi5teWRwIC5idG5jbGVhcixcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcbi5teWRwIC5oZWFkZXJidG4sXFxuLm15ZHAgLmhlYWRlcm1vbnRodHh0LFxcbi5teWRwIC5oZWFkZXJ5ZWFydHh0LFxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bixcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbiAgICBoZWlnaHQ6IDIycHg7XFxuICAgIG1pbi13aWR0aDogNjBweDtcXG4gICAgbWF4LXdpZHRoOiA4NHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubXlkcCBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5teWRwIC5oZWFkZXJtb250aHR4dCxcXG4ubXlkcCAuaGVhZGVyeWVhcnR4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5teWRwIC5idG5jbGVhcjpmb2N1cyxcXG4ubXlkcCAuYnRuZGVjcmVhc2U6Zm9jdXMsXFxuLm15ZHAgLmJ0bmluY3JlYXNlOmZvY3VzLFxcbi5teWRwIC5idG5waWNrZXI6Zm9jdXMsXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZDogI0FERDhFNjtcXG59XFxuXFxuLm15ZHAgLmhlYWRlcmJ0bjpmb2N1cyxcXG4ubXlkcCAubW9udGhsYWJlbDpmb2N1cyxcXG4ubXlkcCAueWVhcmxhYmVsOmZvY3VzLFxcbi5teWRwIC55ZWFyY2hhbmdlYnRuOmZvY3VzIHtcXG4gICAgY29sb3I6ICNBREQ4RTY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5teWRwIC5kYXljZWxsOmZvY3VzLFxcbi5teWRwIC5tb250aGNlbGw6Zm9jdXMsXFxuLm15ZHAgLnllYXJjZWxsOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNDQ0M7XFxufVxcblxcbi5teWRwIC5pY29uLW15ZHBjYWxlbmRhcixcXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlIHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4ubXlkcCAuaWNvbi1teWRwbGVmdCxcXG4ubXlkcCAuaWNvbi1teWRwcmlnaHQsXFxuLm15ZHAgLmljb24tbXlkcHVwLFxcbi5teWRwIC5pY29uLW15ZHBkb3duIHtcXG4gICAgY29sb3I6ICMyMjI7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm15ZHAgLmJ0bmRlY3JlYXNlIC5pY29uLW15ZHBsZWZ0LFxcbi5teWRwIC5idG5pbmNyZWFzZSAuaWNvbi1teWRwcmlnaHQge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5teWRwIC5pY29uLW15ZHB0b2RheSB7XFxuICAgIGNvbG9yOiAjMjIyO1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi5teWRwIHRhYmxlIHtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4ubXlkcCB0YWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5teWRwIHRhYmxlLFxcbi5teWRwIHRoLFxcbi5teWRwIHRkIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubXlkcCAuYnRucGlja2VyZW5hYmxlZDpob3ZlcixcXG4ubXlkcCAuYnRuY2xlYXJlbmFibGVkOmhvdmVyLFxcbi5teWRwIC5idG5kZWNyZWFzZWVuYWJsZWQ6aG92ZXIsXFxuLm15ZHAgLmJ0bmluY3JlYXNlZW5hYmxlZDpob3ZlcixcXG4ubXlkcCAuaGVhZGVydG9kYXlidG5lbmFibGVkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcXG59XFxuXFxuLm15ZHAgLnRhYmxlc2luZ2xlZGF5OmhvdmVyLFxcbi5teWRwIC50YWJsZXNpbmdsZW1vbnRoOmhvdmVyLFxcbi5teWRwIC50YWJsZXNpbmdsZXllYXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcbn1cXG5cXG4ubXlkcCAubW9udGhsYWJlbCxcXG4ubXlkcCAueWVhcmxhYmVsLFxcbi5teWRwIC5pbnB1dG5vdGVkaXRhYmxlLFxcbi5teWRwIC5kYXljZWxsLFxcbi5teWRwIC5tb250aGNlbGwsXFxuLm15ZHAgLnllYXJjZWxsIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZDpob3ZlcixcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQ6aG92ZXIsXFxuLm15ZHAgLm1vbnRobGFiZWw6aG92ZXIsXFxuLm15ZHAgLnllYXJsYWJlbDpob3ZlciB7XFxuICAgIGNvbG9yOiAjNzc3O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcbiAgICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LEFBRUFBQUFQQUlBQUF3QndSMU5WUWlDTUpYa0FBQUQ4QUFBQVZFOVRMekkrSUVoTkFBQUJVQUFBQUZaamJXRnc2VUtjZndBQUFhZ0FBQUhFWTNaMElBYlYvd1FBQUF6OEFBQUFJR1p3WjIyS2taQlpBQUFOSEFBQUMzQm5ZWE53QUFBQUVBQUFEUFFBQUFBSVoyeDVacWJuN3ljQUFBTnNBQUFGWEdobFlXUU5YMGJMQUFBSXlBQUFBRFpvYUdWaEJ6d0RXUUFBQ1FBQUFBQWthRzEwZUJYQi8vOEFBQWtrQUFBQUlHeHZZMkVHTkFURUFBQUpSQUFBQUJKdFlYaHdBWGdNT2dBQUNWZ0FBQUFnYm1GdFpaS1VGZ01BQUFsNEFBQUMvWEJ2YzNSOU51WmxBQUFNZUFBQUFIcHdjbVZ3NVVFcnZBQUFHSXdBQUFDR0FBRUFBQUFLQURBQVBnQUNiR0YwYmdBT1JFWk1WQUFhQUFRQUFBQUFBQUFBQVFBQUFBUUFBQUFBQUFBQUFRQUFBQUZzYVdkaEFBZ0FBQUFCQUFBQUFRQUVBQVFBQUFBQkFBZ0FBUUFHQUFBQUFRQUFBQUVDdUFHUUFBVUFBQUo2QXJ3QUFBQ01Bbm9DdkFBQUFlQUFNUUVDQUFBQ0FBVURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZCbVJXUUFRT2dBNkFZRFV2OXFBRm9EVWdDV0FBQUFBUUFBQUFBQUFBQUFBQVVBQUFBREFBQUFMQUFBQUFRQUFBRmdBQUVBQUFBQUFGb0FBd0FCQUFBQUxBQURBQW9BQUFGZ0FBUUFMZ0FBQUFRQUJBQUJBQURvQnYvL0FBRG9BUC8vQUFBQUFRQUVBQUFBQVFBQ0FBTUFCQUFGQUFZQUJ3QUFBUVlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEQUFBQUFBQVpBQUFBQUFBQUFBSEFBRG9BQUFBNkFBQUFBQUJBQURvQVFBQTZBRUFBQUFDQUFEb0FnQUE2QUlBQUFBREFBRG9Bd0FBNkFNQUFBQUVBQURvQkFBQTZBUUFBQUFGQUFEb0JRQUE2QVVBQUFBR0FBRG9CZ0FBNkFZQUFBQUhBQUVBQUFBQUFVRUNmUUFPQUFxM0FBQUFaaFFCQlJVckFSUVBBUVlpSmpVUk5ENEJId0VXQVVFSytnc2NGaFljQy9vS0FWNE9DL29MRmc0QjlBOFVBZ3o2Q2dBQUFRQUFBQUFCWndKOEFBMEFGMEFVQUFFQUFRRkhBQUVBQVc4QUFBQm1GeE1DQlJZckFSRVVCaUl2QVNZMFB3RTJNaFlCWlJRZ0Nmb0tDdm9MSEJnQ1dQNE1EaFlMK2dzY0Mvb0xGZ0FBQUFBRkFBRC9hZ09oQTFJQUZBQVlBQ2dBT0FCY0FMZEFFQ29hQWdvRk1pSUNCZ29OQVFBQkEwZExzQXBRV0VBL0Rnd0NDZ1VHQmdwbEFBSUVBUVFDQVcwQUFRQUVBUUJyQUFBREJBQURhd2dCQmdBRUFnWUVYd2NCQlFVTFdBMEJDd3NNU0FBREF3bFlBQWtKRFFsSkcwQkFEZ3dDQ2dVR0JRb0diUUFDQkFFRUFnRnRBQUVBQkFFQWF3QUFBd1FBQTJzSUFRWUFCQUlHQkY4SEFRVUZDMWdOQVFzTERFZ0FBd01KV0FBSkNRMEpTVmxBR0Z0WlZsTlFUMHhKUmtRL1BDWW1KaVFSRlJRWEVnOEZIU3NKQVFZaUx3RW1ORDhCTmpJZkFUYzJNaDhCRmhRQklSRWhOelUwSmlzQklnWWRBUlFXT3dFeU5pVTFOQ1lyQVNJR0hRRVVGanNCTWpZM0VSUUdJeUVpSmpVUk5EWTdBVFUwTmpzQk1oWWRBVE0xTkRZN0FUSVdCeFV6TWhZQzEvN2lCUTRHb1FVRkdnVU9CbnYzQmc0R0dRWDlhd01TL083WENnZ2tDQW9LQ0NRSUNnR3NDZ2dqQ0FvS0NDTUlDdGNzSFB6dUhTb3FIVWcwSlNRbE5OWTJKQ01sTmdGSEhTb0JPUDdpQlFXaEJnNEZHZ1VGZS9nRkJSb0ZEdjV6QWp4cm9RZ0tDZ2loQ0FvS0NLRUlDZ29Jb1FnS0NpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBQVBBQUQvYWdPaEExSUFBd0FIQUFzQUR3QVRBQmNBR3dBZkFDTUFNd0EzQURzQVB3QlBBSE1BbUVDVlFTVUNIUkpKTFNRREV4MENSeUVmQWgwVENSMVVHd0VUR1JjTkF3a0lFd2xmR0JZTUF3Z1ZFUWNEQlFRSUJWNFVFQVlEQkE4TEF3TUJBQVFCWGhvQkVoSWVXQ0FCSGg0TVNBNEtBZ01BQUJ4WUFCd2NEUnhKY25CdGFtZG1ZMkJkVzFaVFRVeEZSRDgrUFR3N09qazROelkxTkRFdktTY2pJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFUkVSRVJFUkVSQWlCUjByRnpNMUl4Y3pOU01uTXpVakZ6TTFJeWN6TlNNQk16VWpKek0xSXdFek5TTW5NelVqQXpVMEppY2pJZ1lIRlJRV056TXlOZ0V6TlNNbk16VWpGek0xSXpjMU5DWW5JeUlHRnhVVUZqY3pNalkzRVJRR0l5RWlKalVSTkRZN0FUVTBOanNCTWhZZEFUTTFORFk3QVRJV0J4VXpNaFpIb2FIRnNyTEZvYUhGc3JMRm9hRUJtN096MXJLeUFheWhvZGF6czhRTUJpUUhDZ0VNQmlRSENnR2JvYUhXczdQV29hRVNDZ2dqQnd3QkNnZ2pDQXJYTEJ6ODdoMHFLaDFJTkNVa0pUVFdOaVFqSlRZQlJ4MHFUNkdob1NTeXNySWtvZjNFb2ZxaC9jU2hKTElCTUtFSENnRU1CcUVIREFFSy9pYXlKS0dob1d1aEJ3b0JEQWFoQnd3QkNpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBSC8vd0FBQWpzQnlRQU9BQkZBRGdBQkFBRnZBQUFBWmhVeUFnVVdLeVVVQmljaElpNEJQd0UyTWg4QkZnSTdGQS8rREE4VUFnejZDaDRLK2dxckRoWUJGQjRMK2dvSytnc0FBQUFCQUFBQUFBSThBZTBBRGdBWFFCUUFBUUFCQVVjQUFRQUJid0FBQUdZMUZBSUZGaXNCRkE4QkJpSXZBU1kwTmpNaE1oWUNPd3I2Q3h3TCtnc1dEZ0gwRGhZQnlRNEwrZ3NMK2dzY0ZoWUFBQUVBQVAvdkF0UUNoZ0FrQUI1QUd5SVpFQWNFQUFJQlJ3TUJBZ0FDYndFQkFBQm1GQndVRkFRRkdDc2xGQThCQmlJdkFRY0dJaThCSmpRL0FTY21ORDhCTmpJZkFUYzJNaDhCRmhRUEFSY1dBdFFQVEJBc0VLU2tFQ3dRVEJBUXBLUVFFRXdRTEJDa3BCQXNFRXdQRDZTa0QzQVdFRXdQRDZXbER3OU1FQ3dRcEtRUUxCQk1FQkNrcEJBUVRBOHVENlNrRHdBQkFBQUFBUUFBYmR5Y3pWOFBQUFVBQ3dQb0FBQUFBTlVzZ1pVQUFBQUExU3lCbGYvLy8yb0Q2QU5TQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU5TLzJvQUFBUG8vLy8vL2dQb0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBSUErZ0FBQUZsQUFBQlpRQUFBK2dBQUFPZ0FBQUNPLy8vQWpzQUFBTVJBQUFBQUFBQUFDSUFTZ0VvQWhZQ1BBSmtBcTRBQUFBQkFBQUFDQUIwQUE4QUFBQUFBQUlBUkFCVUFITUFBQUNwQzNBQUFBQUFBQUFBRWdEZUFBRUFBQUFBQUFBQU5RQUFBQUVBQUFBQUFBRUFEQUExQUFFQUFBQUFBQUlBQndCQkFBRUFBQUFBQUFNQURBQklBQUVBQUFBQUFBUUFEQUJVQUFFQUFBQUFBQVVBQ3dCZ0FBRUFBQUFBQUFZQURBQnJBQUVBQUFBQUFBb0FLd0IzQUFFQUFBQUFBQXNBRXdDaUFBTUFBUVFKQUFBQWFnQzFBQU1BQVFRSkFBRUFHQUVmQUFNQUFRUUpBQUlBRGdFM0FBTUFBUVFKQUFNQUdBRkZBQU1BQVFRSkFBUUFHQUZkQUFNQUFRUUpBQVVBRmdGMUFBTUFBUVFKQUFZQUdBR0xBQU1BQVFRSkFBb0FWZ0dqQUFNQUFRUUpBQXNBSmdINVEyOXdlWEpwWjJoMElDaERLU0F5TURFM0lHSjVJRzl5YVdkcGJtRnNJR0YxZEdodmNuTWdRQ0JtYjI1MFpXeHNieTVqYjIxdGVXUmhkR1Z3YVdOclpYSlNaV2QxYkdGeWJYbGtZWFJsY0dsamEyVnliWGxrWVhSbGNHbGphMlZ5Vm1WeWMybHZiaUF4TGpCdGVXUmhkR1Z3YVdOclpYSkhaVzVsY21GMFpXUWdZbmtnYzNabk1uUjBaaUJtY205dElFWnZiblJsYkd4dklIQnliMnBsWTNRdWFIUjBjRG92TDJadmJuUmxiR3h2TG1OdmJRQkRBRzhBY0FCNUFISUFhUUJuQUdnQWRBQWdBQ2dBUXdBcEFDQUFNZ0F3QURFQU53QWdBR0lBZVFBZ0FHOEFjZ0JwQUdjQWFRQnVBR0VBYkFBZ0FHRUFkUUIwQUdnQWJ3QnlBSE1BSUFCQUFDQUFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFDNEFZd0J2QUcwQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBVWdCbEFHY0FkUUJzQUdFQWNnQnRBSGtBWkFCaEFIUUFaUUJ3QUdrQVl3QnJBR1VBY2dCdEFIa0FaQUJoQUhRQVpRQndBR2tBWXdCckFHVUFjZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURBQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQUFJQUFBQUFBQUFBQ2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDQUVDQVFNQkJBRUZBUVlCQndFSUFRa0FDVzE1WkhCeWFXZG9kQWh0ZVdSd2JHVm1kQWx0ZVdSd2RHOWtZWGtNYlhsa2NHTmhiR1Z1WkdGeUJtMTVaSEIxY0FodGVXUndaRzkzYmdwdGVXUndjbVZ0YjNabEFBQUFBQUFCQUFILy93QVBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlBQmdBR0FBWUExTC9hZ05TLzJxd0FDd2dzQUJWV0VWWklDQkx1QUFPVVV1d0JsTmFXTEEwRzdBb1dXQm1JSXBWV0xBQ0pXRzVDQUFJQUdOakkySWJJU0d3QUZtd0FFTWpSTElBQVFCRFlFSXRzQUVzc0NCZ1ppMndBaXdnWkNDd3dGQ3dCQ1phc2lnQkNrTkZZMFZTVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDeEFRcERSV05GWVdTd0tGQllJYkVCQ2tORlkwVWdzREJRV0NHd01Ga2JJTERBVUZnZ1ppQ0tpbUVnc0FwUVdHQWJJTEFnVUZnaHNBcGdHeUN3TmxCWUliQTJZQnRnV1ZsWkc3QUJLMWxaSTdBQVVGaGxXVmt0c0FNc0lFVWdzQVFsWVdRZ3NBVkRVRml3QlNOQ3NBWWpRaHNoSVZtd0FXQXRzQVFzSXlFaklTQmtzUVZpUWlDd0JpTkNzUUVLUTBWanNRRUtRN0FCWUVWanNBTXFJU0N3QmtNZ2lpQ0tzQUVyc1RBRkpiQUVKbEZZWUZBYllWSlpXQ05aSVNDd1FGTllzQUVyR3lHd1FGa2pzQUJRV0dWWkxiQUZMTEFIUXl1eUFBSUFRMkJDTGJBR0xMQUhJMElqSUxBQUkwSmhzQUppWnJBQlk3QUJZTEFGS2kyd0J5d2dJRVVnc0F0RFk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallFU3dBV0F0c0Fnc3NnY0xBRU5GUWlvaHNnQUJBRU5nUWkyd0NTeXdBRU1qUkxJQUFRQkRZRUl0c0Fvc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaQ0N3SUZCWUliQUFHN0F3VUZpd0lCdXdRRmxaSTdBQVVGaGxXYkFESlNOaFJFU3dBV0F0c0Fzc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaTEFrVUZpd0FCdXdRRmtqc0FCUVdHVlpzQU1sSTJGRVJMQUJZQzJ3REN3Z3NBQWpRcklMQ2dORldDRWJJeUZaS2lFdHNBMHNzUUlDUmJCa1lVUXRzQTRzc0FGZ0lDQ3dERU5Lc0FCUVdDQ3dEQ05DV2JBTlEwcXdBRkpZSUxBTkkwSlpMYkFQTENDd0VHSm1zQUZqSUxnRUFHT0tJMkd3RGtOZ0lJcGdJTEFPSTBJakxiQVFMRXRVV0xFRVpFUlpKTEFOWlNONExiQVJMRXRSV0V0VFdMRUVaRVJaR3lGWkpMQVRaU040TGJBU0xMRUFEME5WV0xFUEQwT3dBV0ZDc0E4cldiQUFRN0FDSlVLeERBSWxRckVOQWlWQ3NBRVdJeUN3QXlWUVdMRUJBRU5nc0FRbFFvcUtJSW9qWWJBT0tpRWpzQUZoSUlvalliQU9LaUVic1FFQVEyQ3dBaVZDc0FJbFliQU9LaUZac0F4RFI3QU5RMGRnc0FKaUlMQUFVRml3UUdCWlpyQUJZeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndFeXdBc1FBQ1JWUllzQThqUWlCRnNBc2pRckFLSTdBQllFSWdZTEFCWWJVUUVBRUFEZ0JDUW9wZ3NSSUdLN0J5S3hzaVdTMndGQ3l4QUJNckxiQVZMTEVCRXlzdHNCWXNzUUlUS3kyd0Z5eXhBeE1yTGJBWUxMRUVFeXN0c0Jrc3NRVVRLeTJ3R2l5eEJoTXJMYkFiTExFSEV5c3RzQndzc1FnVEt5MndIU3l4Q1JNckxiQWVMQUN3RFN1eEFBSkZWRml3RHlOQ0lFV3dDeU5Dc0FvanNBRmdRaUJnc0FGaHRSQVFBUUFPQUVKQ2ltQ3hFZ1lyc0hJckd5SlpMYkFmTExFQUhpc3RzQ0Fzc1FFZUt5MndJU3l4QWg0ckxiQWlMTEVESGlzdHNDTXNzUVFlS3kyd0pDeXhCUjRyTGJBbExMRUdIaXN0c0NZc3NRY2VLeTJ3Snl5eENCNHJMYkFvTExFSkhpc3RzQ2tzSUR5d0FXQXRzQ29zSUdDd0VHQWdReU93QVdCRHNBSWxZYkFCWUxBcEtpRXRzQ3Nzc0NvcnNDb3FMYkFzTENBZ1J5QWdzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUNOaE9DTWdpbFZZSUVjZ0lMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkFqWVRnYklWa3RzQzBzQUxFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDNHNBTEFOSzdFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDOHNJRFd3QVdBdHNEQXNBTEFCUldPNEJBQmlJTEFBVUZpd1FHQlpackFCWTdBQks3QUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZN0FCSzdBQUZyUUFBQUFBQUVRK0l6aXhMd0VWS2kyd01Td2dQQ0JISUxBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlkyQ3dBRU5oT0Myd01pd3VGend0c0RNc0lEd2dSeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NBQkRZYkFCUTJNNExiQTBMTEVDQUJZbElDNGdSN0FBSTBLd0FpVkppb3BISTBjallTQllZaHNoV2JBQkkwS3lNd0VCRlJRcUxiQTFMTEFBRnJBRUpiQUVKVWNqUnlOaHNBbERLMldLTGlNZ0lEeUtPQzJ3Tml5d0FCYXdCQ1d3QkNVZ0xrY2pSeU5oSUxBRUkwS3dDVU1ySUxCZ1VGZ2dzRUJSV0xNQ0lBTWdHN01DSmdNYVdVSkNJeUN3Q0VNZ2lpTkhJMGNqWVNOR1lMQUVRN0FDWWlDd0FGQllzRUJnV1dhd0FXTmdJTEFCS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dBbUlnc0FCUVdMQkFZRmxtc0FGallTTWdJTEFFSmlOR1lUZ2JJN0FJUTBhd0FpV3dDRU5ISTBjallXQWdzQVJEc0FKaUlMQUFVRml3UUdCWlpyQUJZMkFqSUxBQkt5T3dCRU5nc0FFcnNBVWxZYkFGSmJBQ1lpQ3dBRkJZc0VCZ1dXYXdBV093QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkEzTExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNEZ3NzQUFXSUxBSUkwSWdJQ0JHSTBld0FTc2pZVGd0c0Rrc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYmtJQUFnQVkyTWpJRmhpR3lGWlk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallDTXVJeUFnUElvNEl5RlpMYkE2TExBQUZpQ3dDRU1nTGtjalJ5TmhJR0N3SUdCbXNBSmlJTEFBVUZpd1FHQlpackFCWXlNZ0lEeUtPQzJ3T3l3aklDNUdzQUlsUmxKWUlEeFpMckVyQVJRckxiQThMQ01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Qwc0l5QXVSckFDSlVaU1dDQThXU01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Q0c3NEVXJJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLeTJ3UHl5d05pdUtJQ0E4c0FRalFvbzRJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLN0FFUXk2d0t5c3RzRUFzc0FBV3NBUWxzQVFtSUM1SEkwY2pZYkFKUXlzaklEd2dMaU00c1NzQkZDc3RzRUVzc1FnRUpVS3dBQmF3QkNXd0JDVWdMa2NqUnlOaElMQUVJMEt3Q1VNcklMQmdVRmdnc0VCUldMTUNJQU1nRzdNQ0pnTWFXVUpDSXlCSHNBUkRzQUppSUxBQVVGaXdRR0JaWnJBQlkyQWdzQUVySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQUNZaUN3QUZCWXNFQmdXV2F3QVdOaHNBSWxSbUU0SXlBOEl6Z2JJU0FnUmlOSHNBRXJJMkU0SVZteEt3RVVLeTJ3UWl5d05Tc3VzU3NCRkNzdHNFTXNzRFlySVNNZ0lEeXdCQ05DSXppeEt3RVVLN0FFUXk2d0t5c3RzRVFzc0FBVklFZXdBQ05Dc2dBQkFSVVVFeTZ3TVNvdHNFVXNzQUFWSUVld0FDTkNzZ0FCQVJVVUV5NndNU290c0VZc3NRQUJGQk93TWlvdHNFY3NzRFFxTGJCSUxMQUFGa1VqSUM0Z1Jvb2pZVGl4S3dFVUt5MndTU3l3Q0NOQ3NFZ3JMYkJLTExJQUFFRXJMYkJMTExJQUFVRXJMYkJNTExJQkFFRXJMYkJOTExJQkFVRXJMYkJPTExJQUFFSXJMYkJQTExJQUFVSXJMYkJRTExJQkFFSXJMYkJSTExJQkFVSXJMYkJTTExJQUFENHJMYkJUTExJQUFUNHJMYkJVTExJQkFENHJMYkJWTExJQkFUNHJMYkJXTExJQUFFQXJMYkJYTExJQUFVQXJMYkJZTExJQkFFQXJMYkJaTExJQkFVQXJMYkJhTExJQUFFTXJMYkJiTExJQUFVTXJMYkJjTExJQkFFTXJMYkJkTExJQkFVTXJMYkJlTExJQUFEOHJMYkJmTExJQUFUOHJMYkJnTExJQkFEOHJMYkJoTExJQkFUOHJMYkJpTExBM0t5NnhLd0VVS3kyd1l5eXdOeXV3T3lzdHNHUXNzRGNyc0R3ckxiQmxMTEFBRnJBM0s3QTlLeTJ3Wml5d09Dc3VzU3NCRkNzdHNHY3NzRGdyc0RzckxiQm9MTEE0SzdBOEt5MndhU3l3T0N1d1BTc3RzR29zc0RrckxyRXJBUlFyTGJCckxMQTVLN0E3S3kyd2JDeXdPU3V3UENzdHNHMHNzRGtyc0QwckxiQnVMTEE2S3k2eEt3RVVLeTJ3Ynl5d09pdXdPeXN0c0hBc3NEb3JzRHdyTGJCeExMQTZLN0E5S3kyd2NpeXpDUVFDQTBWWUlSc2pJVmxDSzdBSVpiQURKRkI0c0FFVk1DMEFTN2dBeUZKWXNRRUJqbG13QWJrSUFBZ0FZM0N4QUFWQ3NnQUJBQ3F4QUFWQ3N3b0NBUWdxc1FBRlFyTU9BQUVJS3JFQUJrSzZBc0FBQVFBSktyRUFCMEs2QUVBQUFRQUpLckVEQUVTeEpBR0lVVml3UUloWXNRTmtSTEVtQVloUldMb0lnQUFCQkVDSVkxUllzUU1BUkZsWldWbXpEQUlCRENxNEFmK0ZzQVNOc1FJQVJBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLm15ZHAgLm15ZHBpY29uIHtcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxufVxcblxcbi5teWRwIC5pY29uLW15ZHByaWdodDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDBcXFwiO1xcbn1cXG5cXG4ubXlkcCAuaWNvbi1teWRwbGVmdDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDFcXFwiO1xcbn1cXG5cXG4ubXlkcCAuaWNvbi1teWRwdG9kYXk6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAyXFxcIjtcXG59XFxuXFxuLm15ZHAgLmljb24tbXlkcGNhbGVuZGFyOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwM1xcXCI7XFxufVxcblxcbi5teWRwIC5pY29uLW15ZHB1cDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDRcXFwiO1xcbn1cXG5cXG4ubXlkcCAuaWNvbi1teWRwZG93bjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDVcXFwiO1xcbn1cXG5cXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwNlxcXCI7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN1Z2dlc3Rpb25zIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxLjZyZW07IH1cXG4gIC5zdWdnZXN0aW9ucyB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgbWF4LWhlaWdodDogMzByZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5zdWdnZXN0aW9ucyBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEuNnJlbTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAzLjRyZW07IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5maWx0ZXItaW5wdXQge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLnN1Z2dlc3Rpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5zdWdnZXN0aW9ucyBsaSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRhY3QtdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy9jb250YWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb250YWN0LXVzIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAuY29udGFjdC11cyBpbnB1dCB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07IH1cXG4gICAgLmNvbnRhY3QtdXMgaW5wdXQ6cmVxdWlyZWQge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5jb250YWN0LXVzIGgxIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmNvbnRhY3QtdXMgLm1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuICAuY29udGFjdC11cyAubWVzc2FnZSxcXG4gIC5jb250YWN0LXVzIC5zdWJqZWN0IHtcXG4gICAgd2lkdGg6IDY0cmVtOyB9XFxuXFxuLnN0YXRpYy1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDYwcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmZvcm0tZ3JvdXAgLmFsZXJ0IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbi5uYW1lLWdyb3VwLFxcbi5tYWlsLW51bWJlci1ncm91cCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5tZXNzYWdlLWJveCAuYWxlcnQsXFxuLnN1YmplY3QtYm94IC5hbGVydCB7XFxuICB3aWR0aDogNjByZW07IH1cXG5cXG4ubWVzc2FnZS1kaWFsb2cge1xcbiAgaGVpZ2h0OiAyMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogIzI2MTgxRDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMzUlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuN3B4IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbiAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgICAubWVzc2FnZS1kaWFsb2cgLndyYXBwZXIgLnRleHQge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07IH1cXG4gICAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIC5vay1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICM3MzY1NkE7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHdpZHRoOiAzMCU7IH1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cXG5cXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XFxuICAvKiBncmVlbiAqLyB9XFxuXFxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcXG4gIC8qIHJlZCAqLyB9XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07IH1cXG4gIC5zdWJtaXQtYnRuOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGN1cnNvcjogYXV0bzsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZvcm0td3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuZm9ybS1ncm91cCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmFtZS1ncm91cCxcXG4gIC5zdWJqZWN0LWJveCxcXG4gIC5tZXNzYWdlLWJveCxcXG4gIC5tYWlsLW51bWJlci1ncm91cCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMnJlbTsgfVxcbiAgLmNvbnRhY3QtdXMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IC4ycmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nLXRvcDogLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogZ3JheTsgfVxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSB7XFxuICAgIHdpZHRoOiAxMy41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgICBoZWlnaHQ6IDMuNHJlbTtcXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkICM0MjY3NzE7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLmZyb20tZGF0ZSBpbnB1dCxcXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBoZWlnaHQ6IDMuNHJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC50by1kYXRlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiA3MCU7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhpZGUtZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kcm9wZG93bi1saXN0IHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOXJlbTsgfVxcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmRhdGEtbGlzdCBpbnB1dCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuOHJlbTtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmRhdGEtbGlzdCBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcbiAgICAuZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiAzLjRyZW07IH1cXG4gIC5kcm9wZG93bi1saXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDIwcmVtIDByZW0gMjByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEM0QzRDM7IH1cXG4gIC5mb290ZXIgc3BhbixcXG4gIC5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjNzM2NTZBO1xcbiAgICBwYWRkaW5nOiAwIDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZvb3RlciBhLCAuZm9vdGVyIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oZXJvIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi52aWV3LWFsbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzI2MTgxRDsgfVxcblxcbi5tYWluLXBhZ2UtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cXG5cXG4udmlldy1hbGwtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tYWluLWhlYWRpbmcge1xcbiAgZm9udC1zaXplOiA3cmVtO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0b3A6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcmVtOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICB0b3A6IDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMDBweDtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGN1cnNvcjogaW5pdGlhbDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG5cXG5oMS53cy1oZWFkaW5nIHtcXG4gIGNvbG9yOiAjMjYxODFEO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdIdXJtZUdlb21ldHJpY1NhbnMzLVJlZ3VsYXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuI3dvcmtzaG9wcyB7XFxuICBwYWRkaW5nLXRvcDogNXJlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtOyB9XFxuICBoZWFkZXIge1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgLmJ0biB7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDI1cmVtO1xcbiAgICBmb250LXNpemU6IDIuMnJlbTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWFpbi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzLjhyZW07IH1cXG4gIGhlYWRlciB7XFxuICAgIHRvcDogMzAlOyB9XFxuICAuYnRuIHtcXG4gICAgdG9wOiAzcmVtO1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIudG9wLWJhci10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0NvaW55JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLm5hdi1tZW51IGEge1xcbiAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG4uZmEtYmFycyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogLjRyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAuNHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcblxcbi5maWx0ZXItaGVhZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4ubmF2YmFyLXRvZ2dsZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxubmF2IHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGhlaWdodDogNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICBib3JkZXI6IG5vbmU7IH1cXG4gIG5hdiBpbWcge1xcbiAgICB3aWR0aDogM3JlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICBuYXYgLm5hdmJhci1uYXYgYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIG5hdiB1bCB7XFxuICAgIG1hcmdpbi10b3A6IC40cmVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICBuYXYge1xcbiAgICBoZWlnaHQ6IDVyZW07IH1cXG4gICAgbmF2IHVsIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmZpbHRlci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07IH1cXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTsgfVxcbiAgLmhpZGVOYXZiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmF2YmFyLWhlYWRlciB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci1uYXYgPiBsaSB7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5NTVweCkgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgbmF2IHVsIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5oaWRlTmF2YmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtOyB9XFxuICAubmF2YmFyLWhlYWRlciB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5uYXZiYXItbmF2IHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXRvcDogNy41cHg7IH1cXG4gIC5uYXZiYXItbmF2ID4gbGkge1xcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAubmF2YmFyLW5hdiA+IGxpID4gYSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcbiAgLmNvbGxhcHNlLmluIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDEwcmVtIDByZW0gMTByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXFxuLnByb2ZpbGUtaW1nIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMTJyZW07XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtOyB9XFxuXFxuLnByb2ZpbGUtcGhvdG8ge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ucGhvdG9ncmFwaGVyLW5hbWUgaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogIzczNjU2QTsgfVxcblxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24gaDQge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5kZXRhaWwtbG9jYXRpb24ge1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi53ZWJzaXRlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgKi9cXG5kaXYudGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi50YWIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAgIGRpdi50YWIgYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3MzY1NkE7IH1cXG5cXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXG4udGFiY29udGVudCB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGhlaWdodDogNDByZW07XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjMwLCAyMzMsIDAuNTcpOyB9XFxuXFxuLmRldGFpbC10YWJzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmRheS13cmFwcGVyLFxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24ge1xcbiAgcGFkZGluZy10b3A6IDJyZW07IH1cXG5cXG4uZGF5LXdyYXBwZXIgLmxvY2F0aW9uLFxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24gaDQge1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4jRGVzY3JpcHRpb24gcCB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogLjRyZW07IH1cXG5cXG4jRGVzY3JpcHRpb24gaDMge1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG5cXG4jR2FsbGVyeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICNHYWxsZXJ5IGltZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDI4cmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuXFxuLndzZC1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbi5oaWdobGlnaHRzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgd2lkdGg6IDI1JTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwOyB9XFxuICAuaGlnaGxpZ2h0cyBhIHtcXG4gICAgY29sb3I6ICM3MzY1NkE7IH1cXG4gIC5oaWdobGlnaHRzIGRpdiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgY29sb3I6ICM3MzY1NkE7IH1cXG4gICAgLmhpZ2hsaWdodHMgZGl2IGkge1xcbiAgICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuLmltYWdlLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogNXJlbTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpOyB9XFxuXFxuLyogTW9kYWwgQ29udGVudCAqL1xcbi5pbWFnZS1tb2RhbC1jb250ZW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uaGlkZS1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxuICBmb250LXNpemU6IDM1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uaGlkZUltYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uY3Vyc29yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXYsXFxuLm5leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuLyogUG9zaXRpb24gdGhlIFxcXCJuZXh0IGJ1dHRvblxcXCIgdG8gdGhlIHJpZ2h0ICovXFxuLm5leHQge1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDsgfVxcblxcbi5wcmV2IHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc2xpZGVzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLnByZXY6aG92ZXIsXFxuLm5leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmdhbGxlcnktaW1hZ2UuaG92ZXItc2hhZG93IHtcXG4gIHRyYW5zaXRpb246IDAuM3M7IH1cXG5cXG4uaG92ZXItc2hhZG93OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gICNHYWxsZXJ5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgICNHYWxsZXJ5IGltZyB7XFxuICAgICAgd2lkdGg6IDI4cmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07IH1cXG4gIGRpdi50YWIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgZGl2LnRhYiBidXR0b24ge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luOiBhdXRvOyB9XFxuICAudGFiQ29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAudGFiQ29udGVudCBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICAgIHBhZGRpbmc6IDJyZW07IH1cXG4gIC5kZXRhaWwtdGFicyB7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5oaWdobGlnaHRzIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmF1dG9jb21wbGV0ZS1maWx0ZXIsXFxuLmRyb3Bkb3duLWZpbHRlcixcXG4ucHJpY2UtZmlsdGVyLFxcbi5kYXRlLXBpY2tlcixcXG4uZ2V0LWxpc3QtYnRuIHtcXG4gIGxlZnQ6IDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5hdXRvY29tcGxldGUtZmlsdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuLnByaWNlLWZpbHRlciB7XFxuICBtYXJnaW4tdG9wOiAxLjZyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcbiAgLnByaWNlLWZpbHRlciBpbnB1dCB7XFxuICAgIG91dGxpbmU6IC4ycHggc29saWQgIzI2MTgxRDtcXG4gICAgd2lkdGg6IDEwcmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMy40cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzI2MTgxRDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XFxuICAgIC5wcmljZS1maWx0ZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMjYxODFEOyB9XFxuICAgIC5wcmljZS1maWx0ZXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzI2MTgxRDsgfVxcbiAgICAucHJpY2UtZmlsdGVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMyNjE4MUQ7IH1cXG5cXG4uaGlkZS1kcm9wZG93biB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmdldC1saXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAzLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2NTZBO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZmlsdGVycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZHJvcGRvd24tZmlsdGVyLFxcbiAgLnByaWNlLWZpbHRlcixcXG4gIC5kYXRlLXBpY2tlcixcXG4gIC5nZXQtbGlzdC1idG4ge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnByaWNlLWZpbHRlciBpbnB1dCB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDJyZW0gYXV0bzsgfVxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxcbiAgLmF1dG9jb21wbGV0ZS1maWx0ZXIge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS40cmVtIDFyZW0gMCAxcmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndvcmtzaG9wLWxpc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLndzLXBhZ2VzIC9kZWVwLyB7XFxuICBtYXJnaW4tdG9wOiAzcmVtOyB9XFxuICAud3MtcGFnZXMgL2RlZXAvIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07IH1cXG4gICAgLndzLXBhZ2VzIC9kZWVwLyB1bCBsaSBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICMyMjIyMjI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgLndzLXBhZ2VzIC9kZWVwLyB1bCBsaSBhOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTsgfVxcblxcbi5lbnRpdHkge1xcbiAgd2lkdGg6IDMwcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDAuMnJlbSAwcmVtICM4ODg4ODg7IH1cXG4gIC5lbnRpdHkgaW1nIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgyMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogc2VwaWEoMjAlKTsgfVxcbiAgLmVudGl0eSBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmlubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtOyB9XFxuXFxuaDEubmFtZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICMyNjE4MUQ7XFxuICBmb250LWZhbWlseTogJ0h1cm1lR2VvbWV0cmljU2FuczMtUmVndWxhcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wcmljZSB7XFxuICBjb2xvcjogIzU5NEI1MDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMnJlbTsgfVxcblxcbmhyIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogIzU5NEI1MDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi5kYXRlIHtcXG4gIGNvbG9yOiAjNTk0QjUwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTsgfVxcblxcbi5sb2NhdGlvbiB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgb3BhY2l0eTogMC42OyB9XFxuXFxuLnRydW5jYXRlIHtcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG5cXG4ucGFnZS1udW1iZXJzIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW46IC4ycmVtO1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbmEuYWN0aXZlLXBhZ2UucGFnZS1udW1iZXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY1NkE7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5lbnRpdHkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTsgfVxcbiAgICAuZW50aXR5IC5pbWFnZSB7XFxuICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICBoMS5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIG1hcmdpbjogYXV0bzsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmlsdGVycyxcXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZmlsdGVycyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5MHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcXG4gIGxlZnQ6IDVyZW07IH1cXG5cXG4ubGlzdCB7XFxuICB0b3A6IDEwcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZmlsdGVycyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gIC5saXN0IHtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5oaWRlRmlsdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud3MtY29udGFpbmVyIG5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ud3MtY29udGFpbmVyIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAuYWN0aXZlIGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmxpc3Qge1xcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDI+QWJvdXQgVXM8L2gyPlxcbiAgICBQaXhlbGF0ZWRQbGFuZXQgZW5hYmxlcyBhc3BpcmluZyBwaG90b2dyYXBoZXJzIHRvIGZpbmQgd29ya3Nob3BzIGFuZCBzZW1pbmFycyBhbGwgYXJvdW5kIHRoZSB3b3JsZCBiZWluZyBjb25kdWN0ZWQgYnkgcGVvcGxlXFxuICAgIHN1Y2Nlc3NmdWwgaW4gdGhlIGZpZWxkIG9mIHBob3RvZ3JhcGh5LiBPbiB0aGUgb3RoZXIgaGFuZCwgd2UgcHJvdmlkZSBhIHBsYXRmb3JtIGZvciBwaG90b2dyYXBoZXJzIHRvIHNob3djYXNlIHRoZWlyXFxuICAgIHBob3RvZ3JhcGh5IHdvcmtzaG9wcyBhbmQgcmVhY2ggaW50ZXJlc3RlZCBmb2xrcy5cXG4gICAgPGgyPkZBUXM8L2gyPlxcbiAgICA8Yj5EbyB5b3UgaGF2ZSB3b3Jrc2hvcHMgb2YgYWxsIGdlbnJlcz88L2I+XFxuICAgIDxici8+IE9mIGNvdXJzZSEgWW91IGNhbiBmaW5kIGV2ZXJ5dGhpbmcgZnJvbSBMYW5kc2NhcGUgYW5kIEZvb2QgcGhvdG9ncmFwaHkgdG8gVGltZWxhcHNlIGFuZCBOaWdodCBTa3kgcGhvdG9ncmFwaHkgd29ya3Nob3BzLlxcbiAgICA8YnIvPjxici8+XFxuICAgIDxiPkRvZXMgUGl4ZWxhdGVkUGxhbmV0IGFsbG93IG1lIHRvIHJlZ2lzdGVyIGZvciB3b3Jrc2hvcHM/PC9iPlxcbiAgICA8YnIvPiBBcyBvZiBub3csIHdlIGFpbSB0byBicmluZyBhbGwgcGhvdG9ncmFwaHkgd29ya3Nob3BzIGluIG9uZSBwbGFjZS4gQWZ0ZXIgZmluZGluZyB0aGUgd29ya3Nob3AgeW91IGxpa2UsIHdlIHdpbGxcXG4gICAgcmVkaXJlY3QgeW91IHRoZSBwaG90b2dyYXBoZXIncyB3ZWJzaXRlIGZvciByZWdpc3RyYXRpb24vcGF5bWVudC5cXG4gICAgPGJyLz48YnIvPlxcbiAgICA8Yj5Eb2VzIFBpeGVsYXRlZFBsYW5ldCBjaGFyZ2UgbWUgZm9yIGZpbmRpbmcgd29ya3Nob3BzPzwvYj5cXG4gICAgPGJyLz4gTm8uIEFsbCBpbmZvcm1hdGlvbiBvbiBvdXIgd2Vic2l0ZSBpZiBmcmVlbHkgYWNjZXNzaWJsZS4gTm8gaGlkZGVuIGNvc3RzLlxcbiAgICA8YnIvPjxici8+XFxuICAgIDxiPkkgYW0gYSBwaG90b2dyYXBoZXIuIENhbiBJIHNob3djYXNlIG15IHdvcmtzaG9wcyBvbiB5b3VyIHdlYnNpdGU/PC9iPlxcbiAgICA8YnIvPiBXZSBjYXJlZnVsbHkgc2VsZWN0IHBob3RvZ3JhcGhlcnMgYmFzZWQgb24gdGhlaXIgcG9ydGZvbGlvcyB0byBrZWVwIHF1YWxpdHkgb2Ygd29ya3Nob3BzIGhpZ2guIFBsZWFzZSBlbWFpbCB1c1xcbiAgICBhdCBoZWxsb0B0aGVwaXhlbGF0ZWRwbGFuZXQuY29tIGluIG9yZGVyIHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzIVxcbjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgIDxmb290ZXI+PC9mb290ZXI+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGFpbmVyXFxcIj5cXG4gICAgPGlucHV0IGlkPVxcXCJjb3VudHJ5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZmlsdGVyLWlucHV0XFxcIiBbKG5nTW9kZWwpXT1xdWVyeSAoa2V5dXApPWZpbHRlcigpIHBsYWNlaG9sZGVyPVxcXCJUeXBlIGEgbG9jYXRpb25cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWdnZXN0aW9uc1xcXCIgKm5nSWY9XFxcImZpbHRlcmVkTGlzdC5sZW5ndGggPiAwXFxcIj5cXG4gICAgICAgIDx1bD5cXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBmaWx0ZXJlZExpc3RcXFwiIChjbGljayk9XFxcInNlbGVjdChpdGVtKVxcXCI+e3tpdGVtfX08L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcbjxkaXYgY2xhc3M9XFxcImNvbnRhY3QtdXNcXFwiPlxcbiAgICA8aDE+TGV0J3MgY2xpY2sgdG9nZXRoZXIhPC9oMT5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3RhdGljLWluZm9cXFwiPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxuICAgICAgICAgICAgPHNwYW4+aGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbTwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGhvbmUtc3F1YXJlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgIDxzcGFuPjQyNS05NzktODgzODwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS13cmFwcGVyXFxcIj5cXG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KCk7IGNvbnRhY3RGb3JtLnJlc2V0KClcXFwiIG5hbWU9XFxcImNvbnRhY3QtZm9ybVxcXCIgI2NvbnRhY3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWUtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZpcnN0LW5hbWVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmbmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImZuYW1lXFxcIiBuYW1lPVxcXCJmbmFtZVxcXCIgI2ZpcnN0bmFtZT1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZ1bGwgbmFtZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKGZpcnN0bmFtZS52YWxpZCB8fCBmaXJzdG5hbWUucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG5hbWVcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsLW51bWJlci1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImVtYWlsSWRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBhZGRyZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEoZW1haWwudmFsaWQgfHwgZW1haWwucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIGVtYWlsIGFkZHJlc3NcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHN1YmplY3QtYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdWJqZWN0XFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwic3ViamVjdFRleHRcXFwiIG5hbWU9XFxcInN1YmplY3RcXFwiICNzdWJqZWN0PVxcXCJuZ01vZGVsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN1YmplY3RcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKHN1YmplY3QudmFsaWQgfHwgc3ViamVjdC5wcmlzdGluZSlcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgSW52YWxpZCBzdWJqZWN0XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWVzc2FnZS1ib3hcXFwiPlxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJlcXVpcmVkIHJvd3M9XFxcIjRcXFwiIGNvbHM9XFxcIjUwXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBmb3JtPVxcXCJjb250YWN0LWZvcm1cXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlVGV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICNtZXNzYWdlPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSG93IGNhbiB3ZSBoZWxwIHlvdT9cXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEobWVzc2FnZS52YWxpZCB8fCBtZXNzYWdlLnByaXN0aW5lKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG1lc3NhZ2VcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuIGJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIWNvbnRhY3RGb3JtLmZvcm0udmFsaWQgfHwgaW52YWxpZERldGFpbHNcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcbiAgICAgICAgPC9mb3JtPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1kaWFsb2dcXFwiICpuZ0lmPVxcXCJzdWJtaXR0ZWQgJiYgc2hvd01lc3NhZ2VCb3hcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3JhcHBlclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dFxcXCI+e3tzdWJtaXRNZXNzYWdlfX08L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJvay1idG4gYnRuXFxcIiAoY2xpY2spPVxcXCJoaWRlTWVzc2FnZWJveCgpXFxcIj5vazwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRhdGUtcGlja2VyLWNvbnRhaW5lclxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZyb20tZGF0ZVxcXCI+XFxuICAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Gcm9tRGF0ZUNoYW5nZWQoJGV2ZW50KVxcXCIgbmFtZT1cXFwiZnJvbS1kYXRlXFxcIiBbcGxhY2Vob2xkZXJdPVxcXCJmcm9tRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcImZyb21EYXRlUGlja2VyT3B0aW9uc1xcXCI+PC9teS1kYXRlLXBpY2tlcj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRvLWRhdGVcXFwiPlxcbiAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Ub0RhdGVDaGFuZ2VkKCRldmVudClcXFwiIG5hbWU9XFxcInRvLWRhdGVcXFwiIFtwbGFjZWhvbGRlcl09XFxcInRvRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcInRvRGF0ZVBpY2tlck9wdGlvbnNcXFwiPjwvbXktZGF0ZS1waWNrZXI+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGFpbmVyXFxcIj5cXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJ0b2dnbGVEcm9wZG93bigpXFxcIj48c3Bhbj57e2J1dHRvbkxhYmVsfX08L3NwYW4+XFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duXFxcIj48L2k+XFxuPC9idXR0b24+XFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWxpc3RcXFwiIChjbGljayk9XFxcIm92ZXJsYXkoKVxcXCIgW2NsYXNzLmhpZGUtZHJvcGRvd25dPVxcXCJpc0NvbGxhcHNlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWxpc3RcXFwiICpuZ0Zvcj1cXFwibGV0IGRhdGEgb2YgZGF0YU1vZGVsO1xcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJ7e29wdGlvbk5hbWV9fVxcXCIgdmFsdWU9XFxcInt7ZGF0YS52YWx1ZX19XFxcIj5cXG4gICAgICAgICAgICA8ZGl2Pnt7ZGF0YS5sYWJlbH19PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIi8+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgIDxoMT40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDE+XFxuICAgIDxoMz5Pb3BzLCB5b3UgbGFuZGVkIGluIGEgYmFkIHBsYWNlLiBMZXQncyBnZXQgb3V0IG9mIGhlcmUgcXVpY2tseSBiZWZvcmUgYW55IGJhZCBndXlzIGNvbWUgYXJvdW5kITwvaDM+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICA8YSBocmVmPVxcXCIvdGVybXNhbmRjb25kaXRpb25zXFxcIj5UZXJtcyBhbmQgY29uZGl0aW9uczwvYT5cXG4gICAgPGEgaHJlZj1cXFwiL3ByaXZhY3lwb2xpY3lcXFwiPlByaXZhY3kgUG9saWN5PC9hPlxcbiAgICA8c3Bhbj4mY29weTsgMjAxNyBQaXhlbGF0ZWQgUGxhbmV0PC9zcGFuPlxcbiAgICA8YSBocmVmPVxcXCIvY29udGFjdFxcXCI+Q29udGFjdDwvYT5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWFpbi1wYWdlLWNvbnRhaW5lclxcXCI+XFxuICAgIDxuYXZpLWJhciBbc2hvd0ZpbHRlcnNdPVxcXCJmYWxzZVxcXCI+PC9uYXZpLWJhcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcIm1hc3RoZWFkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50LWlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW4taGVhZGluZ1xcXCIgaWQ9XFxcImhvbWVIZWFkaW5nXFxcIj5QaXhlbGF0ZWQgUGxhbmV0PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInN1Yi1oZWFkaW5nXFxcIj5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlblxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1xcXCIgaHJlZj1cXFwiI3dvcmtzaG9wc1xcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJVcGNvbWluZ0V2ZW50c0NsaWNrXFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJIb21lUGFnZUludGVyYWN0aW9uXFxcIj5VcGNvbWluZyBXb3Jrc2hvcHM8L2E+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9oZWFkZXI+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8c2VjdGlvbiBpZD1cXFwid29ya3Nob3BzXFxcIj5cXG4gICAgICAgIDxoMSBjbGFzcz1cXFwid3MtaGVhZGluZ1xcXCI+XFxuICAgICAgICAgICAgV29ya3Nob3BzXFxuICAgICAgICA8L2gxPlxcbiAgICAgICAgPHdvcmtzaG9wcy1saXN0Pjwvd29ya3Nob3BzLWxpc3Q+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWV3LWFsbC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIi93b3Jrc2hvcHNcXFwiIGNsYXNzPVxcXCJ2aWV3LWFsbFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJWaWV3QWxsRXZlbnRzQ2xpY2tcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIkhvbWVQYWdlSW50ZXJhY3Rpb25cXFwiPjxzcGFuPlZpZXcgYWxsPC9zcGFuPiAgPGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWNpcmNsZS1yaWdodFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9zZWN0aW9uPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2LWNvbnRhaW5lclxcXCI+XFxuICA8YSBocmVmPVxcXCJcXFwiICBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Ib21lUGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIi9hc3NldHMvaW1nL2ljb24ucG5nXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIj5cXG4gIDwvYT5cXG4gIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcbiAgICA8YnV0dG9uICpuZ0lmPVxcXCJzaG93RmlsdGVyc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZmlsdGVyLWhlYWRlciBidG5cXFwiIChjbGljayk9XFxcInRvZ2dsZUZpbHRlcigpXFxcIj5cXG4gICAgICAgICAgPGRpdj5GaWx0ZXJzIDxpIGNsYXNzPVxcXCJmYSBmYS1maWx0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9kaXY+XFxuICAgIDwvYnV0dG9uPlxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj5cXG4gICAgICA8ZGl2PjxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcbiAgICA8L2J1dHRvbj5cXG5cXG4gIDwvZGl2PlxcblxcbiAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIiBbbmdDbGFzc109XFxcInsnaGlkZU5hdmJhcic6IGhpZGVOYXZiYXJ9XFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcbiAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Xb3Jrc2hvcHNQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj48YSBocmVmPVxcXCIvd29ya3Nob3BzXFxcIj5Xb3Jrc2hvcHM8L2E+PC9saT5cXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiL2Fib3V0XFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9BYm91dFBhZ2VFdmVudFxcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiTmF2QmFySW50ZXJhY3Rpb25cXFwiPkFib3V0PC9hPjwvbGk+XFxuICAgICAgPGxpPjxhIGhyZWY9XFxcIi9jb250YWN0XFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Db250YWN0UGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+Q29udGFjdDwvYT48L2xpPlxcbiAgICA8L3VsPlxcbiAgPC9kaXY+XFxuPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndzLWNvbnRhaW5lclxcXCI+XFxuXFx0PG5hdmktYmFyPjwvbmF2aS1iYXI+XFxuXFx0PGRpdiBjbGFzcz1cXFwibGlzdFxcXCI+XFxuICAgICAgICA8YnIvPjxici8+PGJyLz5cXG4gICAgICAgIDxici8+PGJyLz48YnIvPlxcbiAgICAgICAgPGJyLz48YnIvPjxici8+XFxuXFx0XFx0UmVkaXJlY3RpbmcgdG8gYW4gZXh0ZXJuYWwgbGluayBpbiA1IHNlY29uZHMuLi4gSWYgeW91IHdvdWxkIHJhdGhlciBub3QgbGVhdmUgdXMsIDxhIHN0eWxlPVxcXCJjdXJzb3I6aGFuZFxcXCIgKGNsaWNrKT1cXFwiZ29CYWNrKClcXFwiPmNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT4uXFxuXFx0PC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxuXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcbjwvZGl2PlxcblxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICA8aDI+UHJpdmFjeSBQb2xpY3k8L2gyPlxcbjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+VGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXIgJ1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJyAoUElJKSBpcyBiZWluZyB1c2VkIG9ubGluZS4gUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG8gaWRlbnRpZnkgYW4gaW5kaXZpZHVhbCBpbiBjb250ZXh0LiBQbGVhc2UgcmVhZCBvdXIgcHJpdmFjeSBwb2xpY3kgY2FyZWZ1bGx5IHRvIGdldCBhIGNsZWFyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLjxicj48L2Rpdj48c3BhbiBpZD0naW5mb0NvJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2dyYXlUZXh0Jz48c3Ryb25nPldoYXQgcGVyc29uYWwgaW5mb3JtYXRpb24gZG8gd2UgY29sbGVjdCBmcm9tIHRoZSBwZW9wbGUgdGhhdCB2aXNpdCBvdXIgYmxvZywgd2Vic2l0ZSBvciBhcHA/PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XaGVuIG9yZGVyaW5nIG9yIHJlZ2lzdGVyaW5nIG9uIG91ciBzaXRlLCBhcyBhcHByb3ByaWF0ZSwgeW91IG1heSBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MsIHBob25lIG51bWJlciAgb3Igb3RoZXIgZGV0YWlscyB0byBoZWxwIHlvdSB3aXRoIHlvdXIgZXhwZXJpZW5jZS48L2Rpdj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgY29sbGVjdCBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSBmaWxsIG91dCBhIGZvcm0gb3IgZW50ZXIgaW5mb3JtYXRpb24gb24gb3VyIHNpdGUuPC9kaXY+PGJyPlByb3ZpZGUgdXMgd2l0aCBmZWVkYmFjayBvbiBvdXIgcHJvZHVjdHMgb3Igc2VydmljZXMgIDxzcGFuIGlkPSdpbmZvVXMnPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+SG93IGRvIHdlIHVzZSB5b3VyIGluZm9ybWF0aW9uPyA8L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiBXZSBtYXkgdXNlIHRoZSBpbmZvcm1hdGlvbiB3ZSBjb2xsZWN0IGZyb20geW91IHdoZW4geW91IHJlZ2lzdGVyLCBtYWtlIGEgcHVyY2hhc2UsIHNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyLCByZXNwb25kIHRvIGEgc3VydmV5IG9yIG1hcmtldGluZyBjb21tdW5pY2F0aW9uLCBzdXJmIHRoZSB3ZWJzaXRlLCBvciB1c2UgY2VydGFpbiBvdGhlciBzaXRlIGZlYXR1cmVzIGluIHRoZSBmb2xsb3dpbmcgd2F5czo8YnI+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IFRvIHBlcnNvbmFsaXplIHlvdXIgZXhwZXJpZW5jZSBhbmQgdG8gYWxsb3cgdXMgdG8gZGVsaXZlciB0aGUgdHlwZSBvZiBjb250ZW50IGFuZCBwcm9kdWN0IG9mZmVyaW5ncyBpbiB3aGljaCB5b3UgYXJlIG1vc3QgaW50ZXJlc3RlZC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBUbyBpbXByb3ZlIG91ciB3ZWJzaXRlIGluIG9yZGVyIHRvIGJldHRlciBzZXJ2ZSB5b3UuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gYWxsb3cgdXMgdG8gYmV0dGVyIHNlcnZpY2UgeW91IGluIHJlc3BvbmRpbmcgdG8geW91ciBjdXN0b21lciBzZXJ2aWNlIHJlcXVlc3RzLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IFRvIGFzayBmb3IgcmF0aW5ncyBhbmQgcmV2aWV3cyBvZiBzZXJ2aWNlcyBvciBwcm9kdWN0czwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IFRvIGZvbGxvdyB1cCB3aXRoIHRoZW0gYWZ0ZXIgY29ycmVzcG9uZGVuY2UgKGxpdmUgY2hhdCwgZW1haWwgb3IgcGhvbmUgaW5xdWlyaWVzKTwvZGl2PjxzcGFuIGlkPSdpbmZvUHJvJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2dyYXlUZXh0Jz48c3Ryb25nPkhvdyBkbyB3ZSBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24/PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBvbmx5IHByb3ZpZGUgYXJ0aWNsZXMgYW5kIGluZm9ybWF0aW9uLiBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5Zb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGNvbnRhaW5lZCBiZWhpbmQgc2VjdXJlZCBuZXR3b3JrcyBhbmQgaXMgb25seSBhY2Nlc3NpYmxlIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUvY3JlZGl0IGluZm9ybWF0aW9uIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuIDwvZGl2Pjxicj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpciBpbmZvcm1hdGlvbiB0byBtYWludGFpbiB0aGUgc2FmZXR5IG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uPC9kaXY+PGJyPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+QWxsIHRyYW5zYWN0aW9ucyBhcmUgcHJvY2Vzc2VkIHRocm91Z2ggYSBnYXRld2F5IHByb3ZpZGVyIGFuZCBhcmUgbm90IHN0b3JlZCBvciBwcm9jZXNzZWQgb24gb3VyIHNlcnZlcnMuPC9kaXY+PHNwYW4gaWQ9J2NvVXMnPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+RG8gd2UgdXNlICdjb29raWVzJz88L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIGRvIG5vdCB1c2UgY29va2llcyBmb3IgdHJhY2tpbmcgcHVycG9zZXMgPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+WW91IGNhbiBjaG9vc2UgdG8gaGF2ZSB5b3VyIGNvbXB1dGVyIHdhcm4geW91IGVhY2ggdGltZSBhIGNvb2tpZSBpcyBiZWluZyBzZW50LCBvciB5b3UgY2FuIGNob29zZSB0byB0dXJuIG9mZiBhbGwgY29va2llcy4gWW91IGRvIHRoaXMgdGhyb3VnaCB5b3VyIGJyb3dzZXIgc2V0dGluZ3MuIFNpbmNlIGJyb3dzZXIgaXMgYSBsaXR0bGUgZGlmZmVyZW50LCBsb29rIGF0IHlvdXIgYnJvd3NlcidzIEhlbHAgTWVudSB0byBsZWFybiB0aGUgY29ycmVjdCB3YXkgdG8gbW9kaWZ5IHlvdXIgY29va2llcy48YnI+PC9kaXY+PGJyPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+SWYgeW91IHR1cm4gY29va2llcyBvZmYsIFNvbWUgb2YgdGhlIGZlYXR1cmVzIHRoYXQgbWFrZSB5b3VyIHNpdGUgZXhwZXJpZW5jZSBtb3JlIGVmZmljaWVudCBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LnRoYXQgbWFrZSB5b3VyIHNpdGUgZXhwZXJpZW5jZSBtb3JlIGVmZmljaWVudCBhbmQgbWF5IG5vdCBmdW5jdGlvbiBwcm9wZXJseS48L2Rpdj48YnI+PHNwYW4gaWQ9J3RyRGknPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZSBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uPC9kaXY+PHNwYW4gaWQ9J3RyTGknPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+VGhpcmQtcGFydHkgbGlua3M8L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPk9jY2FzaW9uYWxseSwgYXQgb3VyIGRpc2NyZXRpb24sIHdlIG1heSBpbmNsdWRlIG9yIG9mZmVyIHRoaXJkLXBhcnR5IHByb2R1Y3RzIG9yIHNlcnZpY2VzIG9uIG91ciB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLiBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZCBhY3Rpdml0aWVzIG9mIHRoZXNlIGxpbmtlZCBzaXRlcy4gTm9uZXRoZWxlc3MsIHdlIHNlZWsgdG8gcHJvdGVjdCB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy48L2Rpdj48c3BhbiBpZD0nZ29vQWQnPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nYmx1ZVRleHQnPjxzdHJvbmc+R29vZ2xlPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5Hb29nbGUncyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieSBHb29nbGUncyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG8gcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuIDxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSB1c2UgR29vZ2xlIEFkU2Vuc2UgQWR2ZXJ0aXNpbmcgb24gb3VyIHdlYnNpdGUuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+R29vZ2xlLCBhcyBhIHRoaXJkLXBhcnR5IHZlbmRvciwgdXNlcyBjb29raWVzIHRvIHNlcnZlIGFkcyBvbiBvdXIgc2l0ZS4gR29vZ2xlJ3MgdXNlIG9mIHRoZSBEQVJUIGNvb2tpZSBlbmFibGVzIGl0IHRvIHNlcnZlIGFkcyB0byBvdXIgdXNlcnMgYmFzZWQgb24gcHJldmlvdXMgdmlzaXRzIHRvIG91ciBzaXRlIGFuZCBvdGhlciBzaXRlcyBvbiB0aGUgSW50ZXJuZXQuIFVzZXJzIG1heSBvcHQtb3V0IG9mIHRoZSB1c2Ugb2YgdGhlIERBUlQgY29va2llIGJ5IHZpc2l0aW5nIHRoZSBHb29nbGUgQWQgYW5kIENvbnRlbnQgTmV0d29yayBwcml2YWN5IHBvbGljeS48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5XZSBoYXZlIGltcGxlbWVudGVkIHRoZSBmb2xsb3dpbmc6PC9zdHJvbmc+PC9kaXY+PGJyPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UsIGFsb25nIHdpdGggdGhpcmQtcGFydHkgdmVuZG9ycyBzdWNoIGFzIEdvb2dsZSB1c2UgZmlyc3QtcGFydHkgY29va2llcyAoc3VjaCBhcyB0aGUgR29vZ2xlIEFuYWx5dGljcyBjb29raWVzKSBhbmQgdGhpcmQtcGFydHkgY29va2llcyAoc3VjaCBhcyB0aGUgRG91YmxlQ2xpY2sgY29va2llKSBvciBvdGhlciB0aGlyZC1wYXJ0eSBpZGVudGlmaWVycyB0b2dldGhlciA8ZGl2IGNsYXNzPSdpbm5lclRleHQnPmFuYWx5emUgd2Vic2l0ZSB1c2FnZTwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPjxzdHJvbmc+T3B0aW5nIG91dDo8L3N0cm9uZz48YnI+XFxuICAgICAgICAgICAgICAgICAgICBVc2VycyBjYW4gc2V0IHByZWZlcmVuY2VzIGZvciBob3cgR29vZ2xlIGFkdmVydGlzZXMgdG8geW91IHVzaW5nIHRoZSBHb29nbGUgQWQgU2V0dGluZ3MgcGFnZS4gQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBvcHQgb3V0IGJ5IHZpc2l0aW5nIHRoZSBOZXR3b3JrIEFkdmVydGlzaW5nIEluaXRpYXRpdmUgT3B0IE91dCBwYWdlIG9yIGJ5IHVzaW5nIHRoZSBHb29nbGUgQW5hbHl0aWNzIE9wdCBPdXQgQnJvd3NlciBhZGQgb24uPC9kaXY+PHNwYW4gaWQ9J2NhbE9wcGEnPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nYmx1ZVRleHQnPjxzdHJvbmc+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Q2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LiAgVGhlIGxhdydzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55IGluIHRoZSBVbml0ZWQgU3RhdGVzIChhbmQgY29uY2VpdmFibHkgdGhlIHdvcmxkKSB0aGF0IG9wZXJhdGVzIHdlYnNpdGVzIGNvbGxlY3RpbmcgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXMgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kIHRob3NlIGluZGl2aWR1YWxzIG9yIGNvbXBhbmllcyB3aXRoIHdob20gaXQgaXMgYmVpbmcgc2hhcmVkLiAtICBTZWUgbW9yZSBhdDogaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmPGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPjxzdHJvbmc+QWNjb3JkaW5nIHRvIENhbE9QUEEsIHdlIGFncmVlIHRvIHRoZSBmb2xsb3dpbmc6PC9zdHJvbmc+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+VXNlcnMgY2FuIHZpc2l0IG91ciBzaXRlIGFub255bW91c2x5LjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+T25jZSB0aGlzIHByaXZhY3kgcG9saWN5IGlzIGNyZWF0ZWQsIHdlIHdpbGwgYWRkIGEgbGluayB0byBpdCBvbiBvdXIgaG9tZSBwYWdlIG9yIGFzIGEgbWluaW11bSwgb24gdGhlIGZpcnN0IHNpZ25pZmljYW50IHBhZ2UgYWZ0ZXIgZW50ZXJpbmcgb3VyIHdlYnNpdGUuPGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+T3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJ1ByaXZhY3knIGFuZCBjYW4gZWFzaWx5IGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5Zb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczo8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZTxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkNhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjo8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBCeSBsb2dnaW5nIGluIHRvIHlvdXIgYWNjb3VudDwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPjxzdHJvbmc+SG93IGRvZXMgb3VyIHNpdGUgaGFuZGxlIERvIE5vdCBUcmFjayBzaWduYWxzPzwvc3Ryb25nPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIGhvbm9yIERvIE5vdCBUcmFjayBzaWduYWxzIGFuZCBEbyBOb3QgVHJhY2ssIHBsYW50IGNvb2tpZXMsIG9yIHVzZSBhZHZlcnRpc2luZyB3aGVuIGEgRG8gTm90IFRyYWNrIChETlQpIGJyb3dzZXIgbWVjaGFuaXNtIGlzIGluIHBsYWNlLiA8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj48c3Ryb25nPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L3N0cm9uZz48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5JdCdzIGFsc28gaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPC9kaXY+PHNwYW4gaWQ9J2NvcHBBY3QnPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nYmx1ZVRleHQnPjxzdHJvbmc+Q09QUEEgKENoaWxkcmVuIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KTwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLCB0aGUgQ2hpbGRyZW4ncyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiAgVGhlIEZlZGVyYWwgVHJhZGUgQ29tbWlzc2lvbiwgVW5pdGVkIFN0YXRlcycgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXQgb3BlcmF0b3JzIG9mIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgbXVzdCBkbyB0byBwcm90ZWN0IGNoaWxkcmVuJ3MgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS48YnI+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5EbyB3ZSBsZXQgdGhpcmQtcGFydGllcywgaW5jbHVkaW5nIGFkIG5ldHdvcmtzIG9yIHBsdWctaW5zIGNvbGxlY3QgUElJIGZyb20gY2hpbGRyZW4gdW5kZXIgMTM/PC9kaXY+PHNwYW4gaWQ9J2Z0Y0ZpcCc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+VGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIFByaW5jaXBsZXMgZm9ybSB0aGUgYmFja2JvbmUgb2YgcHJpdmFjeSBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudCByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nIHRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlIFByaW5jaXBsZXMgYW5kIGhvdyB0aGV5IHNob3VsZCBiZSBpbXBsZW1lbnRlZCBpcyBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48c3Ryb25nPkluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlIGZvbGxvd2luZyByZXNwb25zaXZlIGFjdGlvbiwgc2hvdWxkIGEgZGF0YSBicmVhY2ggb2NjdXI6PC9zdHJvbmc+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSB3aWxsIG5vdGlmeSB5b3UgdmlhIGVtYWlsPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gV2l0aGluIDEgYnVzaW5lc3MgZGF5PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+V2UgYWxzbyBhZ3JlZSB0byB0aGUgSW5kaXZpZHVhbCBSZWRyZXNzIFByaW5jaXBsZSB3aGljaCByZXF1aXJlcyB0aGF0IGluZGl2aWR1YWxzIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9ycyBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHkgdGhhdCBpbmRpdmlkdWFscyBoYXZlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgdXNlcnMsIGJ1dCBhbHNvIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZSBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy48L2Rpdj48c3BhbiBpZD0nY2FuU3BhbSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5DQU4gU1BBTSBBY3Q8L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPlRoZSBDQU4tU1BBTSBBY3QgaXMgYSBsYXcgdGhhdCBzZXRzIHRoZSBydWxlcyBmb3IgY29tbWVyY2lhbCBlbWFpbCwgZXN0YWJsaXNoZXMgcmVxdWlyZW1lbnRzIGZvciBjb21tZXJjaWFsIG1lc3NhZ2VzLCBnaXZlcyByZWNpcGllbnRzIHRoZSByaWdodCB0byBoYXZlIGVtYWlscyBzdG9wcGVkIGZyb20gYmVpbmcgc2VudCB0byB0aGVtLCBhbmQgc3BlbGxzIG91dCB0b3VnaCBwZW5hbHRpZXMgZm9yIHZpb2xhdGlvbnMuPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxzdHJvbmc+V2UgY29sbGVjdCB5b3VyIGVtYWlsIGFkZHJlc3MgaW4gb3JkZXIgdG86PC9zdHJvbmc+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5UbyBiZSBpbiBhY2NvcmRhbmNlIHdpdGggQ0FOU1BBTSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBOb3QgdXNlIGZhbHNlIG9yIG1pc2xlYWRpbmcgc3ViamVjdHMgb3IgZW1haWwgYWRkcmVzc2VzLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IElkZW50aWZ5IHRoZSBtZXNzYWdlIGFzIGFuIGFkdmVydGlzZW1lbnQgaW4gc29tZSByZWFzb25hYmxlIHdheS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBJbmNsdWRlIHRoZSBwaHlzaWNhbCBhZGRyZXNzIG9mIG91ciBidXNpbmVzcyBvciBzaXRlIGhlYWRxdWFydGVycy48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBNb25pdG9yIHRoaXJkLXBhcnR5IGVtYWlsIG1hcmtldGluZyBzZXJ2aWNlcyBmb3IgY29tcGxpYW5jZSwgaWYgb25lIGlzIHVzZWQuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gSG9ub3Igb3B0LW91dC91bnN1YnNjcmliZSByZXF1ZXN0cyBxdWlja2x5LjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IEFsbG93IHVzZXJzIHRvIHVuc3Vic2NyaWJlIGJ5IHVzaW5nIHRoZSBsaW5rIGF0IHRoZSBib3R0b20gb2YgZWFjaCBlbWFpbC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxzdHJvbmc+PGJyPklmIGF0IGFueSB0aW1lIHlvdSB3b3VsZCBsaWtlIHRvIHVuc3Vic2NyaWJlIGZyb20gcmVjZWl2aW5nIGZ1dHVyZSBlbWFpbHMsIHlvdSBjYW4gZW1haWwgdXMgYXQ8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPmhlbGxvQHRoZXBpeGVsYXRlZHBsYW5ldC5jb20gYW5kIHdlIHdpbGwgcHJvbXB0bHkgcmVtb3ZlIHlvdSBmcm9tIDxzdHJvbmc+QUxMPC9zdHJvbmc+IGNvcnJlc3BvbmRlbmNlLjwvZGl2Pjxicj48YnI+PHN0cm9uZz48ZGl2IGNsYXNzPSdibHVlVGV4dCc+UGhvdG9ncmFwaGVyczwvZGl2Pjwvc3Ryb25nPjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+QWxsIHBob3RvZ3JhcGhlcnMgZmVhdHVyZWQgaW4gb3VyIHdlYnNpdGUgd2lsbGluZ2x5IGFncmVlIHRvIHVzIHNob3dpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlaXIgd29ya3Nob3BzIG9uIHRoZSB3ZWJzaXRlIGFuZCB1c2UgZGF0YSBmcm9tIHRoZWlyIHdlYnNpdGVzLjwvZGl2PjxzcGFuIGlkPSdvdXJDb24nPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nYmx1ZVRleHQnPjxicj5MYXN0IEVkaXRlZCBvbiAyMDE3LTA5LTE3PC9kaXY+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcblxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1pbWdcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJkZXRhaWwtaW1nXFxcIiBzcmM9XFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIgLz5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgPGgyPlRlcm1zIGFuZCBjb25kaXRpb25zPC9oMj48YnIvPlxcbiAgICA8YnIvPlxcbjxiPk9WRVJWSUVXPC9iPjxici8+XFxuPGJyLz5cXG5UaGlzIHdlYnNpdGUgaXMgb3BlcmF0ZWQgYnkgVGhlIFBpeGVsYXRlZCBQbGFuZXQuIFRocm91Z2hvdXQgdGhlIHNpdGUsIHRoZSB0ZXJtcyDigJx3ZeKAnSwg4oCcdXPigJ0gYW5kIOKAnG91cuKAnSByZWZlciB0byBUaGUgUGl4ZWxhdGVkIFBsYW5ldC4gVGhlIFBpeGVsYXRlZCBQbGFuZXQgb2ZmZXJzIHRoaXMgd2Vic2l0ZSwgaW5jbHVkaW5nIGFsbCBpbmZvcm1hdGlvbiwgdG9vbHMgYW5kIHNlcnZpY2VzIGF2YWlsYWJsZSBmcm9tIHRoaXMgc2l0ZSB0byB5b3UsIHRoZSB1c2VyLCBjb25kaXRpb25lZCB1cG9uIHlvdXIgYWNjZXB0YW5jZSBvZiBhbGwgdGVybXMsIGNvbmRpdGlvbnMsIHBvbGljaWVzIGFuZCBub3RpY2VzIHN0YXRlZCBoZXJlLjxici8+XFxuPGJyLz5cXG5CeSB2aXNpdGluZyBvdXIgc2l0ZSBhbmQvIG9yIHB1cmNoYXNpbmcgc29tZXRoaW5nIGZyb20gdXMsIHlvdSBlbmdhZ2UgaW4gb3VyIOKAnFNlcnZpY2XigJ0gYW5kIGFncmVlIHRvIGJlIGJvdW5kIGJ5IHRoZSBmb2xsb3dpbmcgdGVybXMgYW5kIGNvbmRpdGlvbnMgKOKAnFRlcm1zIG9mIFNlcnZpY2XigJ0sIOKAnFRlcm1z4oCdKSwgaW5jbHVkaW5nIHRob3NlIGFkZGl0aW9uYWwgdGVybXMgYW5kIGNvbmRpdGlvbnMgYW5kIHBvbGljaWVzIHJlZmVyZW5jZWQgaGVyZWluIGFuZC9vciBhdmFpbGFibGUgYnkgaHlwZXJsaW5rLiBUaGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGFwcGx5ICB0byBhbGwgdXNlcnMgb2YgdGhlIHNpdGUsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdXNlcnMgd2hvIGFyZSBicm93c2VycywgdmVuZG9ycywgY3VzdG9tZXJzLCBtZXJjaGFudHMsIGFuZC8gb3IgY29udHJpYnV0b3JzIG9mIGNvbnRlbnQuPGJyLz5cXG48YnIvPlxcblBsZWFzZSByZWFkIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgY2FyZWZ1bGx5IGJlZm9yZSBhY2Nlc3Npbmcgb3IgdXNpbmcgb3VyIHdlYnNpdGUuIEJ5IGFjY2Vzc2luZyBvciB1c2luZyBhbnkgcGFydCBvZiB0aGUgc2l0ZSwgeW91IGFncmVlIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UuIElmIHlvdSBkbyBub3QgYWdyZWUgdG8gYWxsIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGlzIGFncmVlbWVudCwgdGhlbiB5b3UgbWF5IG5vdCBhY2Nlc3MgdGhlIHdlYnNpdGUgb3IgdXNlIGFueSBzZXJ2aWNlcy4gSWYgdGhlc2UgVGVybXMgb2YgU2VydmljZSBhcmUgY29uc2lkZXJlZCBhbiBvZmZlciwgYWNjZXB0YW5jZSBpcyBleHByZXNzbHkgbGltaXRlZCB0byB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLjxici8+XFxuPGJyLz5cXG5BbnkgbmV3IGZlYXR1cmVzIG9yIHRvb2xzIHdoaWNoIGFyZSBhZGRlZCB0byB0aGUgY3VycmVudCBzdG9yZSBzaGFsbCBhbHNvIGJlIHN1YmplY3QgdG8gdGhlIFRlcm1zIG9mIFNlcnZpY2UuIFlvdSBjYW4gcmV2aWV3IHRoZSBtb3N0IGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgVGVybXMgb2YgU2VydmljZSBhdCBhbnkgdGltZSBvbiB0aGlzIHBhZ2UuIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHVwZGF0ZSwgY2hhbmdlIG9yIHJlcGxhY2UgYW55IHBhcnQgb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBieSBwb3N0aW5nIHVwZGF0ZXMgYW5kL29yIGNoYW5nZXMgdG8gb3VyIHdlYnNpdGUuIEl0IGlzIHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gY2hlY2sgdGhpcyBwYWdlIHBlcmlvZGljYWxseSBmb3IgY2hhbmdlcy4gWW91ciBjb250aW51ZWQgdXNlIG9mIG9yIGFjY2VzcyB0byB0aGUgd2Vic2l0ZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgYW55IGNoYW5nZXMgY29uc3RpdHV0ZXMgYWNjZXB0YW5jZSBvZiB0aG9zZSBjaGFuZ2VzLjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDEgLSBPTkxJTkUgU1RPUkUgVEVSTVM8L2I+PGJyLz5cXG48YnIvPlxcbkJ5IGFncmVlaW5nIHRvIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UsIHlvdSByZXByZXNlbnQgdGhhdCB5b3UgYXJlIGF0IGxlYXN0IHRoZSBhZ2Ugb2YgbWFqb3JpdHkgaW4geW91ciBzdGF0ZSBvciBwcm92aW5jZSBvZiByZXNpZGVuY2UsIG9yIHRoYXQgeW91IGFyZSB0aGUgYWdlIG9mIG1ham9yaXR5IGluIHlvdXIgc3RhdGUgb3IgcHJvdmluY2Ugb2YgcmVzaWRlbmNlIGFuZCB5b3UgaGF2ZSBnaXZlbiB1cyB5b3VyIGNvbnNlbnQgdG8gYWxsb3cgYW55IG9mIHlvdXIgbWlub3IgZGVwZW5kZW50cyB0byB1c2UgdGhpcyBzaXRlLjxici8+XFxuPGJyLz5cXG5Zb3UgbWF5IG5vdCB1c2Ugb3VyIHByb2R1Y3RzIGZvciBhbnkgaWxsZWdhbCBvciB1bmF1dGhvcml6ZWQgcHVycG9zZSBub3IgbWF5IHlvdSwgaW4gdGhlIHVzZSBvZiB0aGUgU2VydmljZSwgdmlvbGF0ZSBhbnkgbGF3cyBpbiB5b3VyIGp1cmlzZGljdGlvbiAoaW5jbHVkaW5nIGJ1dCBub3QgbGltaXRlZCB0byBjb3B5cmlnaHQgbGF3cykuPGJyLz5cXG48YnIvPlxcbllvdSBtdXN0IG5vdCB0cmFuc21pdCBhbnkgd29ybXMgb3IgdmlydXNlcyBvciBhbnkgY29kZSBvZiBhIGRlc3RydWN0aXZlIG5hdHVyZS48YnIvPlxcbjxici8+XFxuQSBicmVhY2ggb3IgdmlvbGF0aW9uIG9mIGFueSBvZiB0aGUgVGVybXMgd2lsbCByZXN1bHQgaW4gYW4gaW1tZWRpYXRlIHRlcm1pbmF0aW9uIG9mIHlvdXIgU2VydmljZXMuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAyIC0gR0VORVJBTCBDT05ESVRJT05TPC9iPjxici8+XFxuPGJyLz5cXG5XZSByZXNlcnZlIHRoZSByaWdodCB0byByZWZ1c2Ugc2VydmljZSB0byBhbnlvbmUgZm9yIGFueSByZWFzb24gYXQgYW55IHRpbWUuPGJyLz5cXG48YnIvPlxcbllvdSB1bmRlcnN0YW5kIHRoYXQgeW91ciBjb250ZW50IChub3QgaW5jbHVkaW5nIGNyZWRpdCBjYXJkIGluZm9ybWF0aW9uKSwgbWF5IGJlIHRyYW5zZmVycmVkIHVuZW5jcnlwdGVkIGFuZCBpbnZvbHZlIChhKSB0cmFuc21pc3Npb25zIG92ZXIgdmFyaW91cyBuZXR3b3JrczsgYW5kIChiKSBjaGFuZ2VzIHRvIGNvbmZvcm0gYW5kIGFkYXB0IHRvIHRlY2huaWNhbCByZXF1aXJlbWVudHMgb2YgY29ubmVjdGluZyBuZXR3b3JrcyBvciBkZXZpY2VzLiBDcmVkaXQgY2FyZCBpbmZvcm1hdGlvbiBpcyBhbHdheXMgZW5jcnlwdGVkIGR1cmluZyB0cmFuc2ZlciBvdmVyIG5ldHdvcmtzLjxici8+XFxuPGJyLz5cXG5Zb3UgYWdyZWUgbm90IHRvIHJlcHJvZHVjZSwgZHVwbGljYXRlLCBjb3B5LCBzZWxsLCByZXNlbGwgb3IgZXhwbG9pdCBhbnkgcG9ydGlvbiBvZiB0aGUgU2VydmljZSwgdXNlIG9mIHRoZSBTZXJ2aWNlLCBvciBhY2Nlc3MgdG8gdGhlIFNlcnZpY2Ugb3IgYW55IGNvbnRhY3Qgb24gdGhlIHdlYnNpdGUgdGhyb3VnaCB3aGljaCB0aGUgc2VydmljZSBpcyBwcm92aWRlZCwgd2l0aG91dCBleHByZXNzIHdyaXR0ZW4gcGVybWlzc2lvbiBieSB1cy48YnIvPlxcbjxici8+XFxuVGhlIGhlYWRpbmdzIHVzZWQgaW4gdGhpcyBhZ3JlZW1lbnQgYXJlIGluY2x1ZGVkIGZvciBjb252ZW5pZW5jZSBvbmx5IGFuZCB3aWxsIG5vdCBsaW1pdCBvciBvdGhlcndpc2UgYWZmZWN0IHRoZXNlIFRlcm1zLjxici8+XFxuPGJyLz5cXG48YnIvPlxcbjxiPlNFQ1RJT04gMyAtIEFDQ1VSQUNZLCBDT01QTEVURU5FU1MgQU5EIFRJTUVMSU5FU1MgT0YgSU5GT1JNQVRJT048L2I+PGJyLz5cXG48YnIvPlxcbldlIGFyZSBub3QgcmVzcG9uc2libGUgaWYgaW5mb3JtYXRpb24gbWFkZSBhdmFpbGFibGUgb24gdGhpcyBzaXRlIGlzIG5vdCBhY2N1cmF0ZSwgY29tcGxldGUgb3IgY3VycmVudC4gVGhlIG1hdGVyaWFsIG9uIHRoaXMgc2l0ZSBpcyBwcm92aWRlZCBmb3IgZ2VuZXJhbCBpbmZvcm1hdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbGllZCB1cG9uIG9yIHVzZWQgYXMgdGhlIHNvbGUgYmFzaXMgZm9yIG1ha2luZyBkZWNpc2lvbnMgd2l0aG91dCBjb25zdWx0aW5nIHByaW1hcnksIG1vcmUgYWNjdXJhdGUsIG1vcmUgY29tcGxldGUgb3IgbW9yZSB0aW1lbHkgc291cmNlcyBvZiBpbmZvcm1hdGlvbi4gQW55IHJlbGlhbmNlIG9uIHRoZSBtYXRlcmlhbCBvbiB0aGlzIHNpdGUgaXMgYXQgeW91ciBvd24gcmlzay48YnIvPlxcbjxici8+XFxuVGhpcyBzaXRlIG1heSBjb250YWluIGNlcnRhaW4gaGlzdG9yaWNhbCBpbmZvcm1hdGlvbi4gSGlzdG9yaWNhbCBpbmZvcm1hdGlvbiwgbmVjZXNzYXJpbHksIGlzIG5vdCBjdXJyZW50IGFuZCBpcyBwcm92aWRlZCBmb3IgeW91ciByZWZlcmVuY2Ugb25seS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gbW9kaWZ5IHRoZSBjb250ZW50cyBvZiB0aGlzIHNpdGUgYXQgYW55IHRpbWUsIGJ1dCB3ZSBoYXZlIG5vIG9ibGlnYXRpb24gdG8gdXBkYXRlIGFueSBpbmZvcm1hdGlvbiBvbiBvdXIgc2l0ZS4gWW91IGFncmVlIHRoYXQgaXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBtb25pdG9yIGNoYW5nZXMgdG8gb3VyIHNpdGUuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiA0IC0gTU9ESUZJQ0FUSU9OUyBUTyBUSEUgU0VSVklDRSBBTkQgUFJJQ0VTPC9iPjxici8+XFxuPGJyLz5cXG5QcmljZXMgZm9yIG91ciBwcm9kdWN0cyBhcmUgc3ViamVjdCB0byBjaGFuZ2Ugd2l0aG91dCBub3RpY2UuPGJyLz5cXG48YnIvPlxcbldlIHJlc2VydmUgdGhlIHJpZ2h0IGF0IGFueSB0aW1lIHRvIG1vZGlmeSBvciBkaXNjb250aW51ZSB0aGUgU2VydmljZSAob3IgYW55IHBhcnQgb3IgY29udGVudCB0aGVyZW9mKSB3aXRob3V0IG5vdGljZSBhdCBhbnkgdGltZS48YnIvPlxcbjxici8+XFxuV2Ugc2hhbGwgbm90IGJlIGxpYWJsZSB0byB5b3Ugb3IgdG8gYW55IHRoaXJkLXBhcnR5IGZvciBhbnkgbW9kaWZpY2F0aW9uLCBwcmljZSBjaGFuZ2UsIHN1c3BlbnNpb24gb3IgZGlzY29udGludWFuY2Ugb2YgdGhlIFNlcnZpY2UuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiA1IC0gUFJPRFVDVFMgT1IgU0VSVklDRVMgKGlmIGFwcGxpY2FibGUpPC9iPjxici8+XFxuPGJyLz5cXG5DZXJ0YWluIHByb2R1Y3RzIG9yIHNlcnZpY2VzIG1heSBiZSBhdmFpbGFibGUgZXhjbHVzaXZlbHkgb25saW5lIHRocm91Z2ggdGhlIHdlYnNpdGUuIFRoZXNlIHByb2R1Y3RzIG9yIHNlcnZpY2VzIG1heSBoYXZlIGxpbWl0ZWQgcXVhbnRpdGllcyBhbmQgYXJlIHN1YmplY3QgdG8gcmV0dXJuIG9yIGV4Y2hhbmdlIG9ubHkgYWNjb3JkaW5nIHRvIG91ciBSZXR1cm4gUG9saWN5Ljxici8+XFxuPGJyLz5cXG5XZSBoYXZlIG1hZGUgZXZlcnkgZWZmb3J0IHRvIGRpc3BsYXkgYXMgYWNjdXJhdGVseSBhcyBwb3NzaWJsZSB0aGUgY29sb3JzIGFuZCBpbWFnZXMgb2Ygb3VyIHByb2R1Y3RzIHRoYXQgYXBwZWFyIGF0IHRoZSBzdG9yZS4gV2UgY2Fubm90IGd1YXJhbnRlZSB0aGF0IHlvdXIgY29tcHV0ZXIgbW9uaXRvcidzIGRpc3BsYXkgb2YgYW55IGNvbG9yIHdpbGwgYmUgYWNjdXJhdGUuPGJyLz5cXG48YnIvPlxcbldlIHJlc2VydmUgdGhlIHJpZ2h0LCBidXQgYXJlIG5vdCBvYmxpZ2F0ZWQsIHRvIGxpbWl0IHRoZSBzYWxlcyBvZiBvdXIgcHJvZHVjdHMgb3IgU2VydmljZXMgdG8gYW55IHBlcnNvbiwgZ2VvZ3JhcGhpYyByZWdpb24gb3IganVyaXNkaWN0aW9uLiBXZSBtYXkgZXhlcmNpc2UgdGhpcyByaWdodCBvbiBhIGNhc2UtYnktY2FzZSBiYXNpcy4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gbGltaXQgdGhlIHF1YW50aXRpZXMgb2YgYW55IHByb2R1Y3RzIG9yIHNlcnZpY2VzIHRoYXQgd2Ugb2ZmZXIuIEFsbCBkZXNjcmlwdGlvbnMgb2YgcHJvZHVjdHMgb3IgcHJvZHVjdCBwcmljaW5nIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSBhdCBhbnl0aW1lIHdpdGhvdXQgbm90aWNlLCBhdCB0aGUgc29sZSBkaXNjcmV0aW9uIG9mIHVzLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBkaXNjb250aW51ZSBhbnkgcHJvZHVjdCBhdCBhbnkgdGltZS4gQW55IG9mZmVyIGZvciBhbnkgcHJvZHVjdCBvciBzZXJ2aWNlIG1hZGUgb24gdGhpcyBzaXRlIGlzIHZvaWQgd2hlcmUgcHJvaGliaXRlZC48YnIvPlxcbjxici8+XFxuV2UgZG8gbm90IHdhcnJhbnQgdGhhdCB0aGUgcXVhbGl0eSBvZiBhbnkgcHJvZHVjdHMsIHNlcnZpY2VzLCBpbmZvcm1hdGlvbiwgb3Igb3RoZXIgbWF0ZXJpYWwgcHVyY2hhc2VkIG9yIG9idGFpbmVkIGJ5IHlvdSB3aWxsIG1lZXQgeW91ciBleHBlY3RhdGlvbnMsIG9yIHRoYXQgYW55IGVycm9ycyBpbiB0aGUgU2VydmljZSB3aWxsIGJlIGNvcnJlY3RlZC48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDYgLSBBQ0NVUkFDWSBPRiBCSUxMSU5HIEFORCBBQ0NPVU5UIElORk9STUFUSU9OPC9iPjxici8+XFxuPGJyLz5cXG5XZSByZXNlcnZlIHRoZSByaWdodCB0byByZWZ1c2UgYW55IG9yZGVyIHlvdSBwbGFjZSB3aXRoIHVzLiBXZSBtYXksIGluIG91ciBzb2xlIGRpc2NyZXRpb24sIGxpbWl0IG9yIGNhbmNlbCBxdWFudGl0aWVzIHB1cmNoYXNlZCBwZXIgcGVyc29uLCBwZXIgaG91c2Vob2xkIG9yIHBlciBvcmRlci4gVGhlc2UgcmVzdHJpY3Rpb25zIG1heSBpbmNsdWRlIG9yZGVycyBwbGFjZWQgYnkgb3IgdW5kZXIgdGhlIHNhbWUgY3VzdG9tZXIgYWNjb3VudCwgdGhlIHNhbWUgY3JlZGl0IGNhcmQsIGFuZC9vciBvcmRlcnMgdGhhdCB1c2UgdGhlIHNhbWUgYmlsbGluZyBhbmQvb3Igc2hpcHBpbmcgYWRkcmVzcy4gSW4gdGhlIGV2ZW50IHRoYXQgd2UgbWFrZSBhIGNoYW5nZSB0byBvciBjYW5jZWwgYW4gb3JkZXIsIHdlIG1heSBhdHRlbXB0IHRvIG5vdGlmeSB5b3UgYnkgY29udGFjdGluZyB0aGUgZS1tYWlsIGFuZC9vciBiaWxsaW5nIGFkZHJlc3MvcGhvbmUgbnVtYmVyIHByb3ZpZGVkIGF0IHRoZSB0aW1lIHRoZSBvcmRlciB3YXMgbWFkZS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gbGltaXQgb3IgcHJvaGliaXQgb3JkZXJzIHRoYXQsIGluIG91ciBzb2xlIGp1ZGdtZW50LCBhcHBlYXIgdG8gYmUgcGxhY2VkIGJ5IGRlYWxlcnMsIHJlc2VsbGVycyBvciBkaXN0cmlidXRvcnMuPGJyLz5cXG48YnIvPlxcbllvdSBhZ3JlZSB0byBwcm92aWRlIGN1cnJlbnQsIGNvbXBsZXRlIGFuZCBhY2N1cmF0ZSBwdXJjaGFzZSBhbmQgYWNjb3VudCBpbmZvcm1hdGlvbiBmb3IgYWxsIHB1cmNoYXNlcyBtYWRlIGF0IG91ciBzdG9yZS4gWW91IGFncmVlIHRvIHByb21wdGx5IHVwZGF0ZSB5b3VyIGFjY291bnQgYW5kIG90aGVyIGluZm9ybWF0aW9uLCBpbmNsdWRpbmcgeW91ciBlbWFpbCBhZGRyZXNzIGFuZCBjcmVkaXQgY2FyZCBudW1iZXJzIGFuZCBleHBpcmF0aW9uIGRhdGVzLCBzbyB0aGF0IHdlIGNhbiBjb21wbGV0ZSB5b3VyIHRyYW5zYWN0aW9ucyBhbmQgY29udGFjdCB5b3UgYXMgbmVlZGVkLjxici8+XFxuPGJyLz5cXG5Gb3IgbW9yZSBkZXRhaWwsIHBsZWFzZSByZXZpZXcgb3VyIFJldHVybnMgUG9saWN5Ljxici8+XFxuPGJyLz5cXG48YnIvPlxcbjxiPlNFQ1RJT04gNyAtIE9QVElPTkFMIFRPT0xTPC9iPjxici8+XFxuPGJyLz5cXG5XZSBtYXkgcHJvdmlkZSB5b3Ugd2l0aCBhY2Nlc3MgdG8gdGhpcmQtcGFydHkgdG9vbHMgb3ZlciB3aGljaCB3ZSBuZWl0aGVyIG1vbml0b3Igbm9yIGhhdmUgYW55IGNvbnRyb2wgbm9yIGlucHV0Ljxici8+XFxuPGJyLz5cXG5Zb3UgYWNrbm93bGVkZ2UgYW5kIGFncmVlIHRoYXQgd2UgcHJvdmlkZSBhY2Nlc3MgdG8gc3VjaCB0b29scyDigJ1hcyBpc+KAnSBhbmQg4oCcYXMgYXZhaWxhYmxl4oCdIHdpdGhvdXQgYW55IHdhcnJhbnRpZXMsIHJlcHJlc2VudGF0aW9ucyBvciBjb25kaXRpb25zIG9mIGFueSBraW5kIGFuZCB3aXRob3V0IGFueSBlbmRvcnNlbWVudC4gV2Ugc2hhbGwgaGF2ZSBubyBsaWFiaWxpdHkgd2hhdHNvZXZlciBhcmlzaW5nIGZyb20gb3IgcmVsYXRpbmcgdG8geW91ciB1c2Ugb2Ygb3B0aW9uYWwgdGhpcmQtcGFydHkgdG9vbHMuPGJyLz5cXG48YnIvPlxcbkFueSB1c2UgYnkgeW91IG9mIG9wdGlvbmFsIHRvb2xzIG9mZmVyZWQgdGhyb3VnaCB0aGUgc2l0ZSBpcyBlbnRpcmVseSBhdCB5b3VyIG93biByaXNrIGFuZCBkaXNjcmV0aW9uIGFuZCB5b3Ugc2hvdWxkIGVuc3VyZSB0aGF0IHlvdSBhcmUgZmFtaWxpYXIgd2l0aCBhbmQgYXBwcm92ZSBvZiB0aGUgdGVybXMgb24gd2hpY2ggdG9vbHMgYXJlIHByb3ZpZGVkIGJ5IHRoZSByZWxldmFudCB0aGlyZC1wYXJ0eSBwcm92aWRlcihzKS48YnIvPlxcbjxici8+XFxuV2UgbWF5IGFsc28sIGluIHRoZSBmdXR1cmUsIG9mZmVyIG5ldyBzZXJ2aWNlcyBhbmQvb3IgZmVhdHVyZXMgdGhyb3VnaCB0aGUgd2Vic2l0ZSAoaW5jbHVkaW5nLCB0aGUgcmVsZWFzZSBvZiBuZXcgdG9vbHMgYW5kIHJlc291cmNlcykuIFN1Y2ggbmV3IGZlYXR1cmVzIGFuZC9vciBzZXJ2aWNlcyBzaGFsbCBhbHNvIGJlIHN1YmplY3QgdG8gdGhlc2UgVGVybXMgb2YgU2VydmljZS48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDggLSBUSElSRC1QQVJUWSBMSU5LUzwvYj48YnIvPlxcbjxici8+XFxuQ2VydGFpbiBjb250ZW50LCBwcm9kdWN0cyBhbmQgc2VydmljZXMgYXZhaWxhYmxlIHZpYSBvdXIgU2VydmljZSBtYXkgaW5jbHVkZSBtYXRlcmlhbHMgZnJvbSB0aGlyZC1wYXJ0aWVzLjxici8+XFxuPGJyLz5cXG5UaGlyZC1wYXJ0eSBsaW5rcyBvbiB0aGlzIHNpdGUgbWF5IGRpcmVjdCB5b3UgdG8gdGhpcmQtcGFydHkgd2Vic2l0ZXMgdGhhdCBhcmUgbm90IGFmZmlsaWF0ZWQgd2l0aCB1cy4gV2UgYXJlIG5vdCByZXNwb25zaWJsZSBmb3IgZXhhbWluaW5nIG9yIGV2YWx1YXRpbmcgdGhlIGNvbnRlbnQgb3IgYWNjdXJhY3kgYW5kIHdlIGRvIG5vdCB3YXJyYW50IGFuZCB3aWxsIG5vdCBoYXZlIGFueSBsaWFiaWxpdHkgb3IgcmVzcG9uc2liaWxpdHkgZm9yIGFueSB0aGlyZC1wYXJ0eSBtYXRlcmlhbHMgb3Igd2Vic2l0ZXMsIG9yIGZvciBhbnkgb3RoZXIgbWF0ZXJpYWxzLCBwcm9kdWN0cywgb3Igc2VydmljZXMgb2YgdGhpcmQtcGFydGllcy48YnIvPlxcbjxici8+XFxuV2UgYXJlIG5vdCBsaWFibGUgZm9yIGFueSBoYXJtIG9yIGRhbWFnZXMgcmVsYXRlZCB0byB0aGUgcHVyY2hhc2Ugb3IgdXNlIG9mIGdvb2RzLCBzZXJ2aWNlcywgcmVzb3VyY2VzLCBjb250ZW50LCBvciBhbnkgb3RoZXIgdHJhbnNhY3Rpb25zIG1hZGUgaW4gY29ubmVjdGlvbiB3aXRoIGFueSB0aGlyZC1wYXJ0eSB3ZWJzaXRlcy4gUGxlYXNlIHJldmlldyBjYXJlZnVsbHkgdGhlIHRoaXJkLXBhcnR5J3MgcG9saWNpZXMgYW5kIHByYWN0aWNlcyBhbmQgbWFrZSBzdXJlIHlvdSB1bmRlcnN0YW5kIHRoZW0gYmVmb3JlIHlvdSBlbmdhZ2UgaW4gYW55IHRyYW5zYWN0aW9uLiBDb21wbGFpbnRzLCBjbGFpbXMsIGNvbmNlcm5zLCBvciBxdWVzdGlvbnMgcmVnYXJkaW5nIHRoaXJkLXBhcnR5IHByb2R1Y3RzIHNob3VsZCBiZSBkaXJlY3RlZCB0byB0aGUgdGhpcmQtcGFydHkuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiA5IC0gVVNFUiBDT01NRU5UUywgRkVFREJBQ0sgQU5EIE9USEVSIFNVQk1JU1NJT05TPC9iPjxici8+XFxuPGJyLz5cXG5JZiwgYXQgb3VyIHJlcXVlc3QsIHlvdSBzZW5kIGNlcnRhaW4gc3BlY2lmaWMgc3VibWlzc2lvbnMgKGZvciBleGFtcGxlIGNvbnRlc3QgZW50cmllcykgb3Igd2l0aG91dCBhIHJlcXVlc3QgZnJvbSB1cyB5b3Ugc2VuZCBjcmVhdGl2ZSBpZGVhcywgc3VnZ2VzdGlvbnMsIHByb3Bvc2FscywgcGxhbnMsIG9yIG90aGVyIG1hdGVyaWFscywgd2hldGhlciBvbmxpbmUsIGJ5IGVtYWlsLCBieSBwb3N0YWwgbWFpbCwgb3Igb3RoZXJ3aXNlIChjb2xsZWN0aXZlbHksICdjb21tZW50cycpLCB5b3UgYWdyZWUgdGhhdCB3ZSBtYXksIGF0IGFueSB0aW1lLCB3aXRob3V0IHJlc3RyaWN0aW9uLCBlZGl0LCBjb3B5LCBwdWJsaXNoLCBkaXN0cmlidXRlLCB0cmFuc2xhdGUgYW5kIG90aGVyd2lzZSB1c2UgaW4gYW55IG1lZGl1bSBhbnkgY29tbWVudHMgdGhhdCB5b3UgZm9yd2FyZCB0byB1cy4gV2UgYXJlIGFuZCBzaGFsbCBiZSB1bmRlciBubyBvYmxpZ2F0aW9uICgxKSB0byBtYWludGFpbiBhbnkgY29tbWVudHMgaW4gY29uZmlkZW5jZTsgKDIpIHRvIHBheSBjb21wZW5zYXRpb24gZm9yIGFueSBjb21tZW50czsgb3IgKDMpIHRvIHJlc3BvbmQgdG8gYW55IGNvbW1lbnRzLjxici8+XFxuPGJyLz5cXG5XZSBtYXksIGJ1dCBoYXZlIG5vIG9ibGlnYXRpb24gdG8sIG1vbml0b3IsIGVkaXQgb3IgcmVtb3ZlIGNvbnRlbnQgdGhhdCB3ZSBkZXRlcm1pbmUgaW4gb3VyIHNvbGUgZGlzY3JldGlvbiBhcmUgdW5sYXdmdWwsIG9mZmVuc2l2ZSwgdGhyZWF0ZW5pbmcsIGxpYmVsb3VzLCBkZWZhbWF0b3J5LCBwb3Jub2dyYXBoaWMsIG9ic2NlbmUgb3Igb3RoZXJ3aXNlIG9iamVjdGlvbmFibGUgb3IgdmlvbGF0ZXMgYW55IHBhcnR54oCZcyBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3IgdGhlc2UgVGVybXMgb2YgU2VydmljZS48YnIvPlxcbjxici8+XFxuWW91IGFncmVlIHRoYXQgeW91ciBjb21tZW50cyB3aWxsIG5vdCB2aW9sYXRlIGFueSByaWdodCBvZiBhbnkgdGhpcmQtcGFydHksIGluY2x1ZGluZyBjb3B5cmlnaHQsIHRyYWRlbWFyaywgcHJpdmFjeSwgcGVyc29uYWxpdHkgb3Igb3RoZXIgcGVyc29uYWwgb3IgcHJvcHJpZXRhcnkgcmlnaHQuIFlvdSBmdXJ0aGVyIGFncmVlIHRoYXQgeW91ciBjb21tZW50cyB3aWxsIG5vdCBjb250YWluIGxpYmVsb3VzIG9yIG90aGVyd2lzZSB1bmxhd2Z1bCwgYWJ1c2l2ZSBvciBvYnNjZW5lIG1hdGVyaWFsLCBvciBjb250YWluIGFueSBjb21wdXRlciB2aXJ1cyBvciBvdGhlciBtYWx3YXJlIHRoYXQgY291bGQgaW4gYW55IHdheSBhZmZlY3QgdGhlIG9wZXJhdGlvbiBvZiB0aGUgU2VydmljZSBvciBhbnkgcmVsYXRlZCB3ZWJzaXRlLiBZb3UgbWF5IG5vdCB1c2UgYSBmYWxzZSBlLW1haWwgYWRkcmVzcywgcHJldGVuZCB0byBiZSBzb21lb25lIG90aGVyIHRoYW4geW91cnNlbGYsIG9yIG90aGVyd2lzZSBtaXNsZWFkIHVzIG9yIHRoaXJkLXBhcnRpZXMgYXMgdG8gdGhlIG9yaWdpbiBvZiBhbnkgY29tbWVudHMuIFlvdSBhcmUgc29sZWx5IHJlc3BvbnNpYmxlIGZvciBhbnkgY29tbWVudHMgeW91IG1ha2UgYW5kIHRoZWlyIGFjY3VyYWN5LiBXZSB0YWtlIG5vIHJlc3BvbnNpYmlsaXR5IGFuZCBhc3N1bWUgbm8gbGlhYmlsaXR5IGZvciBhbnkgY29tbWVudHMgcG9zdGVkIGJ5IHlvdSBvciBhbnkgdGhpcmQtcGFydHkuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAxMCAtIFBFUlNPTkFMIElORk9STUFUSU9OPC9iPjxici8+XFxuPGJyLz5cXG5Zb3VyIHN1Ym1pc3Npb24gb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gdGhyb3VnaCB0aGUgc3RvcmUgaXMgZ292ZXJuZWQgYnkgb3VyIFByaXZhY3kgUG9saWN5LiBUbyB2aWV3IG91ciBQcml2YWN5IFBvbGljeS48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDExIC0gRVJST1JTLCBJTkFDQ1VSQUNJRVMgQU5EIE9NSVNTSU9OUzwvYj48YnIvPlxcbjxici8+XFxuT2NjYXNpb25hbGx5IHRoZXJlIG1heSBiZSBpbmZvcm1hdGlvbiBvbiBvdXIgc2l0ZSBvciBpbiB0aGUgU2VydmljZSB0aGF0IGNvbnRhaW5zIHR5cG9ncmFwaGljYWwgZXJyb3JzLCBpbmFjY3VyYWNpZXMgb3Igb21pc3Npb25zIHRoYXQgbWF5IHJlbGF0ZSB0byBwcm9kdWN0IGRlc2NyaXB0aW9ucywgcHJpY2luZywgcHJvbW90aW9ucywgb2ZmZXJzLCBwcm9kdWN0IHNoaXBwaW5nIGNoYXJnZXMsIHRyYW5zaXQgdGltZXMgYW5kIGF2YWlsYWJpbGl0eS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gY29ycmVjdCBhbnkgZXJyb3JzLCBpbmFjY3VyYWNpZXMgb3Igb21pc3Npb25zLCBhbmQgdG8gY2hhbmdlIG9yIHVwZGF0ZSBpbmZvcm1hdGlvbiBvciBjYW5jZWwgb3JkZXJzIGlmIGFueSBpbmZvcm1hdGlvbiBpbiB0aGUgU2VydmljZSBvciBvbiBhbnkgcmVsYXRlZCB3ZWJzaXRlIGlzIGluYWNjdXJhdGUgYXQgYW55IHRpbWUgd2l0aG91dCBwcmlvciBub3RpY2UgKGluY2x1ZGluZyBhZnRlciB5b3UgaGF2ZSBzdWJtaXR0ZWQgeW91ciBvcmRlcikuPGJyLz5cXG48YnIvPlxcbldlIHVuZGVydGFrZSBubyBvYmxpZ2F0aW9uIHRvIHVwZGF0ZSwgYW1lbmQgb3IgY2xhcmlmeSBpbmZvcm1hdGlvbiBpbiB0aGUgU2VydmljZSBvciBvbiBhbnkgcmVsYXRlZCB3ZWJzaXRlLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBwcmljaW5nIGluZm9ybWF0aW9uLCBleGNlcHQgYXMgcmVxdWlyZWQgYnkgbGF3LiBObyBzcGVjaWZpZWQgdXBkYXRlIG9yIHJlZnJlc2ggZGF0ZSBhcHBsaWVkIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUsIHNob3VsZCBiZSB0YWtlbiB0byBpbmRpY2F0ZSB0aGF0IGFsbCBpbmZvcm1hdGlvbiBpbiB0aGUgU2VydmljZSBvciBvbiBhbnkgcmVsYXRlZCB3ZWJzaXRlIGhhcyBiZWVuIG1vZGlmaWVkIG9yIHVwZGF0ZWQuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAxMiAtIFBST0hJQklURUQgVVNFUzwvYj48YnIvPlxcbjxici8+XFxuSW4gYWRkaXRpb24gdG8gb3RoZXIgcHJvaGliaXRpb25zIGFzIHNldCBmb3J0aCBpbiB0aGUgVGVybXMgb2YgU2VydmljZSwgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gdXNpbmcgdGhlIHNpdGUgb3IgaXRzIGNvbnRlbnQ6IChhKSBmb3IgYW55IHVubGF3ZnVsIHB1cnBvc2U7IChiKSB0byBzb2xpY2l0IG90aGVycyB0byBwZXJmb3JtIG9yIHBhcnRpY2lwYXRlIGluIGFueSB1bmxhd2Z1bCBhY3RzOyAoYykgdG8gdmlvbGF0ZSBhbnkgaW50ZXJuYXRpb25hbCwgZmVkZXJhbCwgcHJvdmluY2lhbCBvciBzdGF0ZSByZWd1bGF0aW9ucywgcnVsZXMsIGxhd3MsIG9yIGxvY2FsIG9yZGluYW5jZXM7IChkKSB0byBpbmZyaW5nZSB1cG9uIG9yIHZpb2xhdGUgb3VyIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb3IgdGhlIGludGVsbGVjdHVhbCBwcm9wZXJ0eSByaWdodHMgb2Ygb3RoZXJzOyAoZSkgdG8gaGFyYXNzLCBhYnVzZSwgaW5zdWx0LCBoYXJtLCBkZWZhbWUsIHNsYW5kZXIsIGRpc3BhcmFnZSwgaW50aW1pZGF0ZSwgb3IgZGlzY3JpbWluYXRlIGJhc2VkIG9uIGdlbmRlciwgc2V4dWFsIG9yaWVudGF0aW9uLCByZWxpZ2lvbiwgZXRobmljaXR5LCByYWNlLCBhZ2UsIG5hdGlvbmFsIG9yaWdpbiwgb3IgZGlzYWJpbGl0eTsgKGYpIHRvIHN1Ym1pdCBmYWxzZSBvciBtaXNsZWFkaW5nIGluZm9ybWF0aW9uOyAoZykgdG8gdXBsb2FkIG9yIHRyYW5zbWl0IHZpcnVzZXMgb3IgYW55IG90aGVyIHR5cGUgb2YgbWFsaWNpb3VzIGNvZGUgdGhhdCB3aWxsIG9yIG1heSBiZSB1c2VkIGluIGFueSB3YXkgdGhhdCB3aWxsIGFmZmVjdCB0aGUgZnVuY3Rpb25hbGl0eSBvciBvcGVyYXRpb24gb2YgdGhlIFNlcnZpY2Ugb3Igb2YgYW55IHJlbGF0ZWQgd2Vic2l0ZSwgb3RoZXIgd2Vic2l0ZXMsIG9yIHRoZSBJbnRlcm5ldDsgKGgpIHRvIGNvbGxlY3Qgb3IgdHJhY2sgdGhlIHBlcnNvbmFsIGluZm9ybWF0aW9uIG9mIG90aGVyczsgKGkpIHRvIHNwYW0sIHBoaXNoLCBwaGFybSwgcHJldGV4dCwgc3BpZGVyLCBjcmF3bCwgb3Igc2NyYXBlOyAoaikgZm9yIGFueSBvYnNjZW5lIG9yIGltbW9yYWwgcHVycG9zZTsgb3IgKGspIHRvIGludGVyZmVyZSB3aXRoIG9yIGNpcmN1bXZlbnQgdGhlIHNlY3VyaXR5IGZlYXR1cmVzIG9mIHRoZSBTZXJ2aWNlIG9yIGFueSByZWxhdGVkIHdlYnNpdGUsIG90aGVyIHdlYnNpdGVzLCBvciB0aGUgSW50ZXJuZXQuIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHRlcm1pbmF0ZSB5b3VyIHVzZSBvZiB0aGUgU2VydmljZSBvciBhbnkgcmVsYXRlZCB3ZWJzaXRlIGZvciB2aW9sYXRpbmcgYW55IG9mIHRoZSBwcm9oaWJpdGVkIHVzZXMuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAxMyAtIERJU0NMQUlNRVIgT0YgV0FSUkFOVElFUzsgTElNSVRBVElPTiBPRiBMSUFCSUxJVFk8L2I+PGJyLz5cXG48YnIvPlxcbldlIGRvIG5vdCBndWFyYW50ZWUsIHJlcHJlc2VudCBvciB3YXJyYW50IHRoYXQgeW91ciB1c2Ugb2Ygb3VyIHNlcnZpY2Ugd2lsbCBiZSB1bmludGVycnVwdGVkLCB0aW1lbHksIHNlY3VyZSBvciBlcnJvci1mcmVlLjxici8+XFxuPGJyLz5cXG5XZSBkbyBub3Qgd2FycmFudCB0aGF0IHRoZSByZXN1bHRzIHRoYXQgbWF5IGJlIG9idGFpbmVkIGZyb20gdGhlIHVzZSBvZiB0aGUgc2VydmljZSB3aWxsIGJlIGFjY3VyYXRlIG9yIHJlbGlhYmxlLjxici8+XFxuPGJyLz5cXG5Zb3UgYWdyZWUgdGhhdCBmcm9tIHRpbWUgdG8gdGltZSB3ZSBtYXkgcmVtb3ZlIHRoZSBzZXJ2aWNlIGZvciBpbmRlZmluaXRlIHBlcmlvZHMgb2YgdGltZSBvciBjYW5jZWwgdGhlIHNlcnZpY2UgYXQgYW55IHRpbWUsIHdpdGhvdXQgbm90aWNlIHRvIHlvdS48YnIvPlxcbjxici8+XFxuWW91IGV4cHJlc3NseSBhZ3JlZSB0aGF0IHlvdXIgdXNlIG9mLCBvciBpbmFiaWxpdHkgdG8gdXNlLCB0aGUgc2VydmljZSBpcyBhdCB5b3VyIHNvbGUgcmlzay4gVGhlIHNlcnZpY2UgYW5kIGFsbCBwcm9kdWN0cyBhbmQgc2VydmljZXMgZGVsaXZlcmVkIHRvIHlvdSB0aHJvdWdoIHRoZSBzZXJ2aWNlIGFyZSAoZXhjZXB0IGFzIGV4cHJlc3NseSBzdGF0ZWQgYnkgdXMpIHByb3ZpZGVkICdhcyBpcycgYW5kICdhcyBhdmFpbGFibGUnIGZvciB5b3VyIHVzZSwgd2l0aG91dCBhbnkgcmVwcmVzZW50YXRpb24sIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBhbnkga2luZCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZCwgaW5jbHVkaW5nIGFsbCBpbXBsaWVkIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIG1lcmNoYW50YWJsZSBxdWFsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXIgcHVycG9zZSwgZHVyYWJpbGl0eSwgdGl0bGUsIGFuZCBub24taW5mcmluZ2VtZW50Ljxici8+XFxuPGJyLz5cXG5JbiBubyBjYXNlIHNoYWxsIFRoZSBQaXhlbGF0ZWQgUGxhbmV0LCBvdXIgZGlyZWN0b3JzLCBvZmZpY2VycywgZW1wbG95ZWVzLCBhZmZpbGlhdGVzLCBhZ2VudHMsIGNvbnRyYWN0b3JzLCBpbnRlcm5zLCBzdXBwbGllcnMsIHNlcnZpY2UgcHJvdmlkZXJzIG9yIGxpY2Vuc29ycyBiZSBsaWFibGUgZm9yIGFueSBpbmp1cnksIGxvc3MsIGNsYWltLCBvciBhbnkgZGlyZWN0LCBpbmRpcmVjdCwgaW5jaWRlbnRhbCwgcHVuaXRpdmUsIHNwZWNpYWwsIG9yIGNvbnNlcXVlbnRpYWwgZGFtYWdlcyBvZiBhbnkga2luZCwgaW5jbHVkaW5nLCB3aXRob3V0IGxpbWl0YXRpb24gbG9zdCBwcm9maXRzLCBsb3N0IHJldmVudWUsIGxvc3Qgc2F2aW5ncywgbG9zcyBvZiBkYXRhLCByZXBsYWNlbWVudCBjb3N0cywgb3IgYW55IHNpbWlsYXIgZGFtYWdlcywgd2hldGhlciBiYXNlZCBpbiBjb250cmFjdCwgdG9ydCAoaW5jbHVkaW5nIG5lZ2xpZ2VuY2UpLCBzdHJpY3QgbGlhYmlsaXR5IG9yIG90aGVyd2lzZSwgYXJpc2luZyBmcm9tIHlvdXIgdXNlIG9mIGFueSBvZiB0aGUgc2VydmljZSBvciBhbnkgcHJvZHVjdHMgcHJvY3VyZWQgdXNpbmcgdGhlIHNlcnZpY2UsIG9yIGZvciBhbnkgb3RoZXIgY2xhaW0gcmVsYXRlZCBpbiBhbnkgd2F5IHRvIHlvdXIgdXNlIG9mIHRoZSBzZXJ2aWNlIG9yIGFueSBwcm9kdWN0LCBpbmNsdWRpbmcsIGJ1dCBub3QgbGltaXRlZCB0bywgYW55IGVycm9ycyBvciBvbWlzc2lvbnMgaW4gYW55IGNvbnRlbnQsIG9yIGFueSBsb3NzIG9yIGRhbWFnZSBvZiBhbnkga2luZCBpbmN1cnJlZCBhcyBhIHJlc3VsdCBvZiB0aGUgdXNlIG9mIHRoZSBzZXJ2aWNlIG9yIGFueSBjb250ZW50IChvciBwcm9kdWN0KSBwb3N0ZWQsIHRyYW5zbWl0dGVkLCBvciBvdGhlcndpc2UgbWFkZSBhdmFpbGFibGUgdmlhIHRoZSBzZXJ2aWNlLCBldmVuIGlmIGFkdmlzZWQgb2YgdGhlaXIgcG9zc2liaWxpdHkuIEJlY2F1c2Ugc29tZSBzdGF0ZXMgb3IganVyaXNkaWN0aW9ucyBkbyBub3QgYWxsb3cgdGhlIGV4Y2x1c2lvbiBvciB0aGUgbGltaXRhdGlvbiBvZiBsaWFiaWxpdHkgZm9yIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCBpbiBzdWNoIHN0YXRlcyBvciBqdXJpc2RpY3Rpb25zLCBvdXIgbGlhYmlsaXR5IHNoYWxsIGJlIGxpbWl0ZWQgdG8gdGhlIG1heGltdW0gZXh0ZW50IHBlcm1pdHRlZCBieSBsYXcuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAxNCAtIElOREVNTklGSUNBVElPTjwvYj48YnIvPlxcbjxici8+XFxuWW91IGFncmVlIHRvIGluZGVtbmlmeSwgZGVmZW5kIGFuZCBob2xkIGhhcm1sZXNzIFRoZSBQaXhlbGF0ZWQgUGxhbmV0IGFuZCBvdXIgcGFyZW50LCBzdWJzaWRpYXJpZXMsIGFmZmlsaWF0ZXMsIHBhcnRuZXJzLCBvZmZpY2VycywgZGlyZWN0b3JzLCBhZ2VudHMsIGNvbnRyYWN0b3JzLCBsaWNlbnNvcnMsIHNlcnZpY2UgcHJvdmlkZXJzLCBzdWJjb250cmFjdG9ycywgc3VwcGxpZXJzLCBpbnRlcm5zIGFuZCBlbXBsb3llZXMsIGhhcm1sZXNzIGZyb20gYW55IGNsYWltIG9yIGRlbWFuZCwgaW5jbHVkaW5nIHJlYXNvbmFibGUgYXR0b3JuZXlz4oCZIGZlZXMsIG1hZGUgYnkgYW55IHRoaXJkLXBhcnR5IGR1ZSB0byBvciBhcmlzaW5nIG91dCBvZiB5b3VyIGJyZWFjaCBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIG9yIHRoZSBkb2N1bWVudHMgdGhleSBpbmNvcnBvcmF0ZSBieSByZWZlcmVuY2UsIG9yIHlvdXIgdmlvbGF0aW9uIG9mIGFueSBsYXcgb3IgdGhlIHJpZ2h0cyBvZiBhIHRoaXJkLXBhcnR5Ljxici8+XFxuPGJyLz5cXG48YnIvPlxcbjxiPlNFQ1RJT04gMTUgLSBTRVZFUkFCSUxJVFk8L2I+PGJyLz5cXG48YnIvPlxcbkluIHRoZSBldmVudCB0aGF0IGFueSBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBpcyBkZXRlcm1pbmVkIHRvIGJlIHVubGF3ZnVsLCB2b2lkIG9yIHVuZW5mb3JjZWFibGUsIHN1Y2ggcHJvdmlzaW9uIHNoYWxsIG5vbmV0aGVsZXNzIGJlIGVuZm9yY2VhYmxlIHRvIHRoZSBmdWxsZXN0IGV4dGVudCBwZXJtaXR0ZWQgYnkgYXBwbGljYWJsZSBsYXcsIGFuZCB0aGUgdW5lbmZvcmNlYWJsZSBwb3J0aW9uIHNoYWxsIGJlIGRlZW1lZCB0byBiZSBzZXZlcmVkIGZyb20gdGhlc2UgVGVybXMgb2YgU2VydmljZSwgc3VjaCBkZXRlcm1pbmF0aW9uIHNoYWxsIG5vdCBhZmZlY3QgdGhlIHZhbGlkaXR5IGFuZCBlbmZvcmNlYWJpbGl0eSBvZiBhbnkgb3RoZXIgcmVtYWluaW5nIHByb3Zpc2lvbnMuPGJyLz5cXG48YnIvPlxcbjxici8+XFxuPGI+U0VDVElPTiAxNiAtIFRFUk1JTkFUSU9OPC9iPjxici8+XFxuPGJyLz5cXG5UaGUgb2JsaWdhdGlvbnMgYW5kIGxpYWJpbGl0aWVzIG9mIHRoZSBwYXJ0aWVzIGluY3VycmVkIHByaW9yIHRvIHRoZSB0ZXJtaW5hdGlvbiBkYXRlIHNoYWxsIHN1cnZpdmUgdGhlIHRlcm1pbmF0aW9uIG9mIHRoaXMgYWdyZWVtZW50IGZvciBhbGwgcHVycG9zZXMuPGJyLz5cXG48YnIvPlxcblRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYXJlIGVmZmVjdGl2ZSB1bmxlc3MgYW5kIHVudGlsIHRlcm1pbmF0ZWQgYnkgZWl0aGVyIHlvdSBvciB1cy4gWW91IG1heSB0ZXJtaW5hdGUgdGhlc2UgVGVybXMgb2YgU2VydmljZSBhdCBhbnkgdGltZSBieSBub3RpZnlpbmcgdXMgdGhhdCB5b3Ugbm8gbG9uZ2VyIHdpc2ggdG8gdXNlIG91ciBTZXJ2aWNlcywgb3Igd2hlbiB5b3UgY2Vhc2UgdXNpbmcgb3VyIHNpdGUuPGJyLz5cXG48YnIvPlxcbklmIGluIG91ciBzb2xlIGp1ZGdtZW50IHlvdSBmYWlsLCBvciB3ZSBzdXNwZWN0IHRoYXQgeW91IGhhdmUgZmFpbGVkLCB0byBjb21wbHkgd2l0aCBhbnkgdGVybSBvciBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSwgd2UgYWxzbyBtYXkgdGVybWluYXRlIHRoaXMgYWdyZWVtZW50IGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlIGFuZCB5b3Ugd2lsbCByZW1haW4gbGlhYmxlIGZvciBhbGwgYW1vdW50cyBkdWUgdXAgdG8gYW5kIGluY2x1ZGluZyB0aGUgZGF0ZSBvZiB0ZXJtaW5hdGlvbjsgYW5kL29yIGFjY29yZGluZ2x5IG1heSBkZW55IHlvdSBhY2Nlc3MgdG8gb3VyIFNlcnZpY2VzIChvciBhbnkgcGFydCB0aGVyZW9mKS48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDE3IC0gRU5USVJFIEFHUkVFTUVOVDwvYj48YnIvPlxcbjxici8+XFxuVGhlIGZhaWx1cmUgb2YgdXMgdG8gZXhlcmNpc2Ugb3IgZW5mb3JjZSBhbnkgcmlnaHQgb3IgcHJvdmlzaW9uIG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2Ugc2hhbGwgbm90IGNvbnN0aXR1dGUgYSB3YWl2ZXIgb2Ygc3VjaCByaWdodCBvciBwcm92aXNpb24uPGJyLz5cXG48YnIvPlxcblRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYW5kIGFueSBwb2xpY2llcyBvciBvcGVyYXRpbmcgcnVsZXMgcG9zdGVkIGJ5IHVzIG9uIHRoaXMgc2l0ZSBvciBpbiByZXNwZWN0IHRvIFRoZSBTZXJ2aWNlIGNvbnN0aXR1dGVzIHRoZSBlbnRpcmUgYWdyZWVtZW50IGFuZCB1bmRlcnN0YW5kaW5nIGJldHdlZW4geW91IGFuZCB1cyBhbmQgZ292ZXJuIHlvdXIgdXNlIG9mIHRoZSBTZXJ2aWNlLCBzdXBlcnNlZGluZyBhbnkgcHJpb3Igb3IgY29udGVtcG9yYW5lb3VzIGFncmVlbWVudHMsIGNvbW11bmljYXRpb25zIGFuZCBwcm9wb3NhbHMsIHdoZXRoZXIgb3JhbCBvciB3cml0dGVuLCBiZXR3ZWVuIHlvdSBhbmQgdXMgKGluY2x1ZGluZywgYnV0IG5vdCBsaW1pdGVkIHRvLCBhbnkgcHJpb3IgdmVyc2lvbnMgb2YgdGhlIFRlcm1zIG9mIFNlcnZpY2UpLjxici8+XFxuPGJyLz5cXG5BbnkgYW1iaWd1aXRpZXMgaW4gdGhlIGludGVycHJldGF0aW9uIG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2Ugc2hhbGwgbm90IGJlIGNvbnN0cnVlZCBhZ2FpbnN0IHRoZSBkcmFmdGluZyBwYXJ0eS48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDE4IC0gR09WRVJOSU5HIExBVzwvYj48YnIvPlxcbjxici8+XFxuVGhlc2UgVGVybXMgb2YgU2VydmljZSBhbmQgYW55IHNlcGFyYXRlIGFncmVlbWVudHMgd2hlcmVieSB3ZSBwcm92aWRlIHlvdSBTZXJ2aWNlcyBzaGFsbCBiZSBnb3Zlcm5lZCBieSBhbmQgY29uc3RydWVkIGluIGFjY29yZGFuY2Ugd2l0aCB0aGUgbGF3cyBvZiAyNTE1IDR0aCBBdmUsIFNlYXR0bGUsIFdBLCA5ODEyMSwgVW5pdGVkIFN0YXRlcy48YnIvPlxcbjxici8+XFxuPGJyLz5cXG48Yj5TRUNUSU9OIDE5IC0gQ0hBTkdFUyBUTyBURVJNUyBPRiBTRVJWSUNFPC9iPjxici8+XFxuPGJyLz5cXG5Zb3UgY2FuIHJldmlldyB0aGUgbW9zdCBjdXJyZW50IHZlcnNpb24gb2YgdGhlIFRlcm1zIG9mIFNlcnZpY2UgYXQgYW55IHRpbWUgYXQgdGhpcyBwYWdlLjxici8+XFxuPGJyLz5cXG5XZSByZXNlcnZlIHRoZSByaWdodCwgYXQgb3VyIHNvbGUgZGlzY3JldGlvbiwgdG8gdXBkYXRlLCBjaGFuZ2Ugb3IgcmVwbGFjZSBhbnkgcGFydCBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGJ5IHBvc3RpbmcgdXBkYXRlcyBhbmQgY2hhbmdlcyB0byBvdXIgd2Vic2l0ZS4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBjaGVjayBvdXIgd2Vic2l0ZSBwZXJpb2RpY2FsbHkgZm9yIGNoYW5nZXMuIFlvdXIgY29udGludWVkIHVzZSBvZiBvciBhY2Nlc3MgdG8gb3VyIHdlYnNpdGUgb3IgdGhlIFNlcnZpY2UgZm9sbG93aW5nIHRoZSBwb3N0aW5nIG9mIGFueSBjaGFuZ2VzIHRvIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgY29uc3RpdHV0ZXMgYWNjZXB0YW5jZSBvZiB0aG9zZSBjaGFuZ2VzLjxici8+XFxuPGJyLz5cXG48YnIvPlxcbjxiPlNFQ1RJT04gMjAgLSBDT05UQUNUIElORk9STUFUSU9OPC9iPjxici8+XFxuPGJyLz5cXG5RdWVzdGlvbnMgYWJvdXQgdGhlIFRlcm1zIG9mIFNlcnZpY2Ugc2hvdWxkIGJlIHNlbnQgdG8gdXMgYXQgaGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbS48YnIvPjxici8+XFxuPC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcblxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1pbWdcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJkZXRhaWwtaW1nXFxcIiBbc3JjXT1cXFwidGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLnJlc29sdmVJbWFnZVVybCh3b3Jrc2hvcERldGFpbHMuaW1hZ2VMaW5rKVxcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXG4gICAgLz5cXG48L2Rpdj5cXG5cXG48ZGl2IGNsYXNzPVxcXCJ3c2QtbmFtZVxcXCI+e3t3b3Jrc2hvcERldGFpbHMubmFtZX19PC9kaXY+XFxuXFxuPGRpdiBjbGFzcz1cXFwiZGV0YWlscy1jb250YWluZXJcXFwiPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsLXRhYnNcXFwiPlxcblxcbiAgICAgICAgICAgIDwhLS1UYWIgaGVhZGluZ3MtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJcXFwiPlxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJsaW5rc1xcXCIgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpPWluZGV4O1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHRhYi5zaG93VGFifVxcXCIgKGNsaWNrKT1cXFwib3BlblRhYnMoaSlcXFwiPnt7dGFiLmxhYmVsfX08L2J1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tRGVzY3JpcHRpb24gdGFiLS0+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzBdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1swXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoMz57e3RhYnNbMF0ubGFiZWx9fTwvaDM+XFxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdPVxcXCJ3b3Jrc2hvcERldGFpbHMuZGVzY3JpcHRpb25cXFwiPjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tSXRpbmllcmFyeSB0YWItLT5cXG4gICAgICAgICAgICA8IS0tPGRpdiBpZD1cXFwie3t0YWJzWzFdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1sxXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxoMz57e3RhYnNbMV0ubGFiZWx9fTwvaDM+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheS13cmFwcGVyXFxcIiAqbmdGb3I9XFxcImxldCBkYXRhIG9mIHdvcmtzaG9wRGV0YWlscy5pdGluZXJhcnk7XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5EYXkge3tkYXRhLmRheX19IC0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsb2NhdGlvblxcXCI+e3tkYXRhLmxvY2F0aW9ufX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF09XFxcImRhdGEuY29udGVudFxcXCI+PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj4tLT5cXG5cXG4gICAgICAgICAgICA8IS0tR2FsbGVyeSB0YWItLT5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJ7e3RhYnNbMV0ubGFiZWx9fVxcXCIgW2hpZGRlbl09XFxcIiF0YWJzWzFdLnNob3dUYWJcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGgzPnt7dGFic1sxXS5sYWJlbH19PC9oMz5cXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiZ2FsbGVyeS1pbWFnZSBob3Zlci1zaGFkb3cgY3Vyc29yXFxcIiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZXNMaW5rO2xldCBpID0gaW5kZXhcXFwiIFtzcmNdPVxcXCJpbWFnZS5pbWFnZUxpbmtcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVxcXCJvcGVuTW9kYWwoaSsxKVxcXCIgLz5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgICAgICA8IS0tUGhvdG9ncmFwaGVyIHRhYi0tPlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInt7dGFic1syXS5sYWJlbH19XFxcIiBbaGlkZGVuXT1cXFwiIXRhYnNbMl0uc2hvd1RhYlxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDM+e3t0YWJzWzJdLmxhYmVsfX08L2gzPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaG90b2dyYXBoZXItaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IHBob3RvZ3JhcGhlciBvZiB3b3Jrc2hvcERldGFpbHMucGhvdG9ncmFwaGVycztcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvZmlsZS1waG90b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwicHJvZmlsZS1pbWdcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKHBob3RvZ3JhcGhlci5wcm9maWxlUGhvdG9MaW5rKVxcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8aDQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twaG90b2dyYXBoZXIuZmlyc3ROYW1lfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twaG90b2dyYXBoZXIubGFzdE5hbWV9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWwtbG9jYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1tYXAtbWFya2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKHBob3RvZ3JhcGhlci5sb2NhdGlvbklkKT8ubmFtZX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3ZWJzaXRlLWxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcInt7cGhvdG9ncmFwaGVyPy53ZWJzaXRlTGlua319XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV4dGVybmFsLWxpbmtcXFwiPjwvaT4gV2Vic2l0ZTwvYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF09XFxcInBob3RvZ3JhcGhlci5tb3JlSW5mb3JtYXRpb25cXFwiPjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwhLS1Xb3Jrc2hvcCBoaWdobGlnaHRzLS0+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoaWdobGlnaHRzXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3c2QtbGlua1xcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5Xb3Jrc2hvcCBMaW5rPC9oND5cXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwie3t3b3Jrc2hvcERldGFpbHMubGlua319XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWxpbmtcXFwiPjwvaT4gV29ya3Nob3AgbGlua1xcbiAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1sb2NhdGlvblxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5Mb2NhdGlvbjwvaDQ+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1tYXAtbWFya2VyXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKHdvcmtzaG9wRGV0YWlscy5sb2NhdGlvbklkKT8ubmFtZX19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1wcmljZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5QcmljZSBSYW5nZTwvaDQ+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11c2RcXFwiPjwvaT4gPHNwYW4gKm5nSWY9XFxcIndvcmtzaG9wRGV0YWlscy5taW5Db3N0ICE9PSB3b3Jrc2hvcERldGFpbHMubWF4Q29zdFxcXCI+e3t3b3Jrc2hvcERldGFpbHMubWluQ29zdH19IC0gPC9zcGFuPnt7d29ya3Nob3BEZXRhaWxzLm1heENvc3R9fVxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1kYXRlc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5EYXRlczwvaDQ+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVzLWluZm9ybWF0aW9uXFxcIiAqbmdGb3I9XFxcImxldCBkZXRhaWwgb2Ygd29ya3Nob3BEZXRhaWxzLm11bHRpV29ya3Nob3BEZXRhaWxzO1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhclxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy5mb3JtYXREYXRlKGRldGFpbC5zdGFydERhdGUpfX0gLSB7e3RoaXMuZm9ybWF0RGF0ZShkZXRhaWwuZW5kRGF0ZSl9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPCEtLUltYWdlIGdhbGxlcnkgbW9kYWwtLT5cXG4gICAgICAgIDxkaXYgaWQ9XFxcIm15TW9kYWxcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRlLW1vZGFsJzogaGlkZU1vZGFsfVxcXCIgY2xhc3M9XFxcImltYWdlLW1vZGFsXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2UgY3Vyc29yXFxcIiAoY2xpY2spPVxcXCJjbG9zZU1vZGFsKClcXFwiPiZ0aW1lczs8L3NwYW4+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW1hZ2UtbW9kYWwtY29udGVudFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVxcXCJsZXQgaW1hZ2Ugb2YgaW1hZ2VzTGluaztsZXQgaSA9IGluZGV4XFxcIiBjbGFzcz1cXFwic2xpZGVzXFxcIiBbbmdDbGFzc109XFxcInsnaGlkZUltYWdlJzogaW1hZ2UuaGlkZUltYWdlfVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZS5pbWFnZUxpbmtcXFwiIGNsYXNzPVxcXCJtb2RhbC1pbWFnZVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwcmV2XFxcIiAoY2xpY2spPVxcXCJwbHVzU2xpZGVzKC0xKVxcXCI+JiMxMDA5NDs8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcIm5leHRcXFwiIChjbGljayk9XFxcInBsdXNTbGlkZXMoMSlcXFwiPiYjMTAwOTU7PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZpbHRlcnMtY29udGFpbmVyXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tZmlsdGVyXFxcIj5cXG4gICAgICAgIDxkcm9wZG93biAoc2VsZWN0aW9uQ2hhbmdlZCk9XFxcInVwZGF0ZUNhdGVnb3J5TGlzdCgkZXZlbnQpXFxcIiBbZGF0YU1vZGVsXT1cXFwiY2F0ZWdvcmllc1xcXCIgW2J1dHRvbkxhYmVsXT1cXFwiY2F0ZWdvcnlEcm9wZG93bkxhYmVsXFxcIlxcbiAgICAgICAgICAgIFtvcHRpb25OYW1lXT1cXFwiJ2NhdGVnb3JpZXMnXFxcIj48L2Ryb3Bkb3duPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiYXV0b2NvbXBsZXRlLWZpbHRlclxcXCI+XFxuICAgICAgICA8YXV0b2NvbXBsZXRlIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlTG9jYXRpb24oJGV2ZW50KVxcXCI+PC9hdXRvY29tcGxldGU+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlLXBpY2tlclxcXCI+XFxuICAgICAgICA8ZGF0ZS1waWNrZXIgKHNlbGVjdGVkRnJvbUNoYW5nZWQpPVxcXCJnZXRGcm9tRGF0ZSgkZXZlbnQpXFxcIiAoc2VsZWN0ZWRUb0NoYW5nZWQpPVxcXCJnZXRUb0RhdGUoJGV2ZW50KVxcXCI+PC9kYXRlLXBpY2tlcj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWZpbHRlclxcXCI+XFxuICAgICAgICA8aW5wdXQgI21pblByaWNlSW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjEwMFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1pbi4gcHJpY2VcXFwiIChibHVyKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiXFxuICAgICAgICAgICAgKG9uaW5wdXQpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uY2hhbmdlKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCJcXG4gICAgICAgIC8+XFxuICAgICAgICA8aW5wdXQgI21heFByaWNlSW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjEwMFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1heC4gcHJpY2VcXFwiIChibHVyKT1cXFwidXBkYXRlTWF4UHJpY2UobWF4UHJpY2VJbnB1dC52YWx1ZSlcXFwiXFxuICAgICAgICAgICAgKG9uaW5wdXQpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uY2hhbmdlKT1cXFwidXBkYXRlTWF4UHJpY2UobWF4UHJpY2VJbnB1dC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCJcXG4gICAgICAgIC8+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJnZXQtbGlzdC1idG5cXFwiIChjbGljayk9XFxcInRvZ2dsZUZpbHRlcigpXFxcIj48c3Bhbj5GaWx0ZXI8L3NwYW4+ICA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsdGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYnV0dG9uPlxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3b3Jrc2hvcC1saXN0XFxcIj5cXG4gICAgPGRpdiAqbmdJZj1cXFwiYXN5bmNEYXRhXFxcIj5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJlbnRpdHlcXFwiICpuZ0Zvcj1cXFwibGV0IGRhdGEgb2YgYXN5bmNEYXRhIHwgYXN5bmNcXFwiPlxcbiAgICAgICAgICAgIDxhIFtocmVmXT1cXFwiY3JlYXRlV29ya3Nob3BEZXRhaWxzVXJsKGRhdGEud29ya3Nob3BJZCwgZGF0YS5uYW1lKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBbc3JjXT1cXFwidGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLnJlc29sdmVJbWFnZVVybChkYXRhLmltYWdlTGluaylcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm5hbWUgdHJ1bmNhdGVcXFwiIHRpdGxlPVxcXCJ7eyBkYXRhLm5hbWUgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGEubmFtZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuZm9ybWF0TG9jYXRpb24oZGF0YS5sb2NhdGlvbklkKX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuZm9ybWF0RGF0ZShkYXRhLnN0YXJ0RGF0ZUZpcnN0KX19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJkYXRhLnN0YXJ0RGF0ZUZpcnN0ICE9IGRhdGEuZW5kRGF0ZUZpcnN0XFxcIj4tPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJkYXRhLnN0YXJ0RGF0ZUZpcnN0ICE9IGRhdGEuZW5kRGF0ZUZpcnN0XFxcIj4ge3t0aGlzLmZvcm1hdERhdGUoZGF0YS5lbmREYXRlRmlyc3QpfX0gPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZVxcXCIgKm5nSWY9XFxcImRhdGEubWluQ29zdCA9PSBkYXRhLm1heENvc3RcXFwiPnt7ZGF0YS5jb3N0Q3VycmVuY3l9fSB7e2RhdGEubWluQ29zdH19PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZVxcXCIgKm5nSWY9XFxcImRhdGEubWluQ29zdCA8IGRhdGEubWF4Q29zdFxcXCI+e3tkYXRhLmNvc3RDdXJyZW5jeX19IHt7ZGF0YS5taW5Db3N0fX0te3tkYXRhLm1heENvc3R9fTwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2ICpuZ0lmPVxcXCJpdGVtc1BlclBhZ2UgPiA0XFxcIiBjbGFzcz1cXFwid3MtcGFnZXNcXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgKm5nSWY9XFxcInBhZ2VOdW1iZXJzXFxcIiBbbmdDbGFzc109XFxcInsnZGlzYWJsZWQnOiBhY3RpdmVQYWdlIDw9MSB9XFxcIiBbaHJlZl09XFxcImNyZWF0ZVBhZ2VMaW5rKGFjdGl2ZVBhZ2UtMSlcXFwiPlByZXZpb3VzPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZS1wYWdlJzogYWN0aXZlUGFnZSA9PSBwYWdlfVxcXCIgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlTnVtYmVycztcXFwiIFtocmVmXT1cXFwiY3JlYXRlUGFnZUxpbmsocGFnZSlcXFwiPnt7cGFnZX19PC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgKm5nSWY9XFxcInBhZ2VOdW1iZXJzXFxcIiBbbmdDbGFzc109XFxcInsnZGlzYWJsZWQnOiBhY3RpdmVQYWdlID09IHBhZ2VOdW1iZXJzLmxlbmd0aCB9XFxcIltocmVmXT1cXFwiY3JlYXRlUGFnZUxpbmsoYWN0aXZlUGFnZS0xKzIpXFxcIj5OZXh0PC9hPlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndzLWNvbnRhaW5lclxcXCI+XFxuICAgIDxuYXZpLWJhciBbc2hvd0ZpbHRlcnNdPVxcXCJ0cnVlXFxcIiAoZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlKT1cXFwidG9nZ2xlRmlsdGVyRHJvcGRvd24oJGV2ZW50KVxcXCI+PC9uYXZpLWJhcj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVGaWx0ZXInOiBoaWRlRmlsdGVyfVxcXCIgaWQ9XFxcImZpbHRlcnNcXFwiPlxcbiAgICAgICAgPHdvcmtzaG9wLWZpbHRlciAobWluUHJpY2VGaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TWluUHJpY2UoJGV2ZW50KVxcXCIgKG1heFByaWNlRmlsdGVyQ2hhbmdlZCk9XFxcInNldE1heFByaWNlKCRldmVudClcXFwiIChmcm9tRGF0ZUNoYW5nZWQpPVxcXCJzZXRGcm9tRGF0ZSgkZXZlbnQpXFxcIlxcbiAgICAgICAgICAgICh0b0RhdGVDaGFuZ2VkKT1cXFwic2V0VG9EYXRlKCRldmVudClcXFwiIChsb2NhdGlvbkZpbHRlckNoYW5nZWQpPVxcXCJzZXRMb2NhdGlvbklkTGlzdCgkZXZlbnQpXFxcIiAoY2F0ZWdvcnlGaWx0ZXJDaGFuZ2VkKT1cXFwic2V0Q2F0ZWdvcnlMaXN0KCRldmVudClcXFwiXFxuICAgICAgICAgICAgKGFwcGx5RmlsdGVycyk9XFxcInRvZ2dsZUZpbHRlcigkZXZlbnQpXFxcIj48L3dvcmtzaG9wLWZpbHRlcj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsaXN0XFxcIj5cXG4gICAgICAgICAgICA8d29ya3Nob3BzLWxpc3QgW2FjdGl2ZVBhZ2VdPVxcXCJwYWdlTnVtYmVyXFxcIj48L3dvcmtzaG9wcy1saXN0PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tcGlsZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIlxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29tcHJlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZGF0ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIlxuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIlxuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIlxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L251bWJlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCJcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIlxuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDExOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWdleHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIlxuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3NldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zeW1ib2xcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIlxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM3L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDEyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmcyLXBhZ2luYXRpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJuZzItcGFnaW5hdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAxMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gMTI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzXCJcbi8vIG1vZHVsZSBpZCA9IDEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9