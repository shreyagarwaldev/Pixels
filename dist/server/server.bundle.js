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
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/globalConstantsRepository.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__ = __webpack_require__(127);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshopRepository.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("angulartics2");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(17);
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
            _this.total = res.total;
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
    WorkshopsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshops-list',
            template: __webpack_require__(97),
            styles: [__webpack_require__(78)],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object])
    ], WorkshopsListComponent);
    return WorkshopsListComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshops-list.component.js.map

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
            template: __webpack_require__(82),
            styles: [__webpack_require__(65)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/about.component.js.map

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
            template: __webpack_require__(85),
            styles: [__webpack_require__(67)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/contact-us.component.js.map

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
            template: __webpack_require__(88),
            styles: [__webpack_require__(70)]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorComponent);
    return ErrorComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/error.component.js.map

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
            template: __webpack_require__(90),
            styles: [__webpack_require__(72)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/home.component.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
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
    function PageRedirectComponent(angulartics2, route) {
        this.route = route;
        this.angulartics2 = angulartics2;
    }
    PageRedirectComponent.prototype.ngOnInit = function () {
        var url;
        this.sub = this.route.params.subscribe(function (params) {
            url = params['externalUrl'];
        });
        this.angulartics2.eventTrack.next({ action: 'NavigateToExternalUrl', properties: { category: 'NavigationEvent' } });
        // navigate to the URL (Assumes the url is http:// or https://
        window.location.href = url;
    };
    PageRedirectComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(92),
            styles: [__webpack_require__(81)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], PageRedirectComponent);
    return PageRedirectComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/page-redirect.component.js.map

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
            template: __webpack_require__(93),
            styles: [__webpack_require__(74)]
        }), 
        __metadata('design:paramtypes', [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/privacy-policy.component.js.map

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
            template: __webpack_require__(94),
            styles: [__webpack_require__(75)]
        }), 
        __metadata('design:paramtypes', [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/terms-and-conditions.component.js.map

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(4);
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
                label: "Itinerary",
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
            template: __webpack_require__(95),
            styles: [__webpack_require__(76)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object])
    ], WorkshopDetailsComponent);
    return WorkshopDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-details.component.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__ = __webpack_require__(1);
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
    function WorkshopsComponent(globalConstantsRepository) {
        this.globalConstantsRepository = globalConstantsRepository;
        this.workshopsPerPage = 8;
        this.globalConstants = globalConstantsRepository;
        this.hideFilter = true;
    }
    WorkshopsComponent.prototype.toggleFilterDropdown = function (event) {
        this.hideFilter = event;
    };
    WorkshopsComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        this.endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
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
        if (this.query) {
            this.workshopsListChildComp.getWorkshopsData(this.query, 1, this.workshopsPerPage);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]) === 'function' && _a) || Object)
    ], WorkshopsComponent.prototype, "workshopsListChildComp", void 0);
    WorkshopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(98),
            styles: [__webpack_require__(79)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], WorkshopsComponent);
    return WorkshopsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshops.component.js.map

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(50);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(62);










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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/server.js.map

/***/ },
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.focus.directive.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__my_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__my_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__my_week_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__my_options_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__my_locale_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_selector_interface__ = __webpack_require__(43);
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




















//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/index.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-day.interface.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-month.interface.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-view-changed.interface.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-year.interface.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-model.interface.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-range.interface.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date.interface.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-day-labels.interface.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-default-month.interface.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-field-changed.interface.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-focus-blur.interface.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-locale.interface.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-date.interface.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-dates.interface.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month-labels.interface.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month.interface.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-options.interface.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-selector.interface.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-week.interface.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-weekday.interface.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_index__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__ = __webpack_require__(49);
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





var myDpStyles = __webpack_require__(64);
var myDpTpl = __webpack_require__(63);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.component.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__ = __webpack_require__(24);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.module.js.map

/***/ },
/* 48 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.locale.service.js.map

/***/ },
/* 49 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.util.service.js.map

/***/ },
/* 50 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/__2.1.1.workaround.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angulartics2__ = __webpack_require__(3);
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
            template: __webpack_require__(83),
            styles: [__webpack_require__(80)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.component.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_mydatepicker_src_my_date_picker_my_date_picker_module__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_error_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dropdown_menu_dropdown_menu_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__date_picker_date_picker_component__ = __webpack_require__(55);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.node.module.js.map

/***/ },
/* 53 */
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
    { path: 'workshops', component: __WEBPACK_IMPORTED_MODULE_3__workshops_workshops_component__["a" /* WorkshopsComponent */] },
    { path: 'photography-workshop-details/:title/:id', component: __WEBPACK_IMPORTED_MODULE_4__workshop_details_workshop_details_component__["a" /* WorkshopDetailsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'page-redirect/:externalUrl', component: __WEBPACK_IMPORTED_MODULE_6__page_redirect_page_redirect_component__["a" /* PageRedirectComponent */], pathMatch: 'full' },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_2__error_error_component__["a" /* ErrorComponent */], pathMatch: 'full' },
    { path: 'termsandconditions', component: __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__["a" /* TermsAndConditionsComponent */], pathMatch: 'full' },
    { path: 'privacypolicy', component: __WEBPACK_IMPORTED_MODULE_8__privacy_policy_privacy_policy_component__["a" /* PrivacyComponent */], pathMatch: 'full' },
    { path: '**', redirectTo: '/404' }
];
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.routes.js.map

/***/ },
/* 54 */
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
            template: __webpack_require__(84),
            styles: [__webpack_require__(66)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object])
    ], AutocompleteComponent);
    return AutocompleteComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/autocomplete.component.js.map

/***/ },
/* 55 */
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
            template: __webpack_require__(86),
            styles: [__webpack_require__(68)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DatePickerComponent);
    return DatePickerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/date-picker.component.js.map

/***/ },
/* 56 */
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
            template: __webpack_require__(87),
            styles: [__webpack_require__(69)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], DropdownComponent);
    return DropdownComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/dropdown-menu.component.js.map

/***/ },
/* 57 */
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
            template: __webpack_require__(89),
            styles: [__webpack_require__(71)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/footer.component.js.map

/***/ },
/* 58 */
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
            template: __webpack_require__(91),
            styles: [__webpack_require__(73)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/navbar.component.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(3);
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
            template: __webpack_require__(96),
            styles: [__webpack_require__(77)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _c) || Object])
    ], WorkshopFilterComponent);
    return WorkshopFilterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-filter.component.js.map

/***/ },
/* 60 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/environment.js.map

/***/ },
/* 61 */
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
















//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/polyfills.js.map

/***/ },
/* 62 */
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
    'home', 'workshops', 'about', '404', '**', 'photography-workshop-details/:title/:id', 'contact', 'page-redirect/:externalUrl', 'termsandconditions', 'privacypolicy'
];
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/server.routes.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\">\r\n    <div class=\"selectiongroup\" *ngIf=\"!opts.inline\">\r\n        <input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\"\r\n               placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\"\r\n               (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\">\r\n        <div class=\"selbtngroup\" [style.height]=\"opts.height\">\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpleft\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpright\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpremove\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpcalendar\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\r\n        <table class=\"header\">\r\n            <tr>\r\n                <td>\r\n                    <div style=\"float:left\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div>\r\n                        <div class=\"headermonthtxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\">\r\n                        <span class=\"mydpicon icon-mydptoday\"></span>\r\n                        <span>{{opts.todayBtnTxt}}</span>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <div style=\"float:right\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div>\r\n                        <div class=\"headeryeartxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\">\r\n            <thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let w of dates\">\r\n                    <td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n                    <td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\">\r\n                        <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n                        <div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\">\r\n                            <span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"monthtable\" *ngIf=\"selectMonth\">\r\n            <tbody>\r\n                <tr *ngFor=\"let mr of months\">\r\n                    <td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\">\r\n                        <div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"yeartable\" *ngIf=\"selectYear\">\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let yr of years\">\r\n                    <td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\">\r\n                        <div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = ".mydp {\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.mydp * {\r\n    box-sizing: border-box;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.mydp,\r\n.mydp .selectiongroup,\r\n.mydp .selection,\r\n.mydp .selector,\r\n.mydp .headertodaybtn {\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .header {\r\n    border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:first-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:first-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:first-child {\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:last-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:last-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:last-child {\r\n    border-bottom-right-radius: 4px;\r\n}\r\n\r\n.mydp .btnpicker {\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.mydp .btnleftborderradius {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .selector {\r\n    margin-top: 2px;\r\n    margin-left: -1px;\r\n    position: absolute;\r\n    padding: 0;\r\n    border: 1px solid #CCC;\r\n    z-index: 100;\r\n    -webkit-animation: selectorfadein 0.1s;\r\n            animation: selectorfadein 0.1s;\r\n}\r\n\r\n.mydp .selector:focus {\r\n    border: 1px solid #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n@-webkit-keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.mydp .selectorarrow {\r\n    background: #FAFAFA;\r\n    margin-top: 12px;\r\n    padding: 0;\r\n}\r\n\r\n.mydp .selectorarrow:after,\r\n.mydp .selectorarrow:before {\r\n    bottom: 100%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n}\r\n\r\n.mydp .selectorarrow:after {\r\n    border-color: rgba(250, 250, 250, 0);\r\n    border-bottom-color: #FAFAFA;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n\r\n.mydp .selectorarrow:before {\r\n    border-color: rgba(204, 204, 204, 0);\r\n    border-bottom-color: #CCC;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.mydp .selectorarrow:focus:before {\r\n    border-bottom-color: #ADD8E6;\r\n}\r\n\r\n.mydp .selectorarrowleft:after,\r\n.mydp .selectorarrowleft:before {\r\n    left: 24px;\r\n}\r\n\r\n.mydp .selectorarrowright:after,\r\n.mydp .selectorarrowright:before {\r\n    left: 86%;\r\n}\r\n\r\n.mydp .alignselectorright {\r\n    right: -1px;\r\n}\r\n\r\n.mydp .selectiongroup {\r\n    position: relative;\r\n    display: table;\r\n    border: none;\r\n    border-spacing: 0;\r\n    background-color: #FFF;\r\n}\r\n\r\n.mydp .selection {\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: #FFF;\r\n    display: table-cell;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 6px;\r\n    border: none;\r\n    color: #555;\r\n}\r\n\r\n.mydp .invaliddate {\r\n    background-color: #F1DEDE;\r\n}\r\n\r\n.mydp ::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n.mydp .selbtngroup {\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    width: 1%;\r\n    display: table-cell;\r\n    font-size: 0;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease {\r\n    height: 100%;\r\n    width: 26px;\r\n    border: none;\r\n    padding: 0;\r\n    outline: 0;\r\n    font: inherit;\r\n    -moz-user-select: none;\r\n}\r\n\r\n.mydp .btnleftborder {\r\n    border-left: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpickerenabled,\r\n.mydp .btnclearenabled,\r\n.mydp .btndecreaseenabled,\r\n.mydp .btnincreaseenabled,\r\n.mydp .headertodaybtnenabled,\r\n.mydp .headerbtnenabled,\r\n.mydp .yearchangebtnenabled {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .selectiondisabled,\r\n.mydp .btnpickerdisabled,\r\n.mydp .btncleardisabled,\r\n.mydp .btndecreasedisabled,\r\n.mydp .btnincreasedisabled,\r\n.mydp .headertodaybtndisabled,\r\n.mydp .headerbtndisabled,\r\n.mydp .yearchangebtndisabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.65;\r\n}\r\n\r\n.mydp .selectiondisabled {\r\n    background-color: #EEE;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headertodaybtn {\r\n    background: #FFF;\r\n}\r\n\r\n.mydp .header {\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .header td {\r\n    vertical-align: middle;\r\n    border: none;\r\n    line-height: 0;\r\n}\r\n\r\n.mydp .header td:nth-child(1) {\r\n    padding-left: 4px;\r\n}\r\n\r\n.mydp .header td:nth-child(2) {\r\n    text-align: center;\r\n}\r\n\r\n.mydp .header td:nth-child(3) {\r\n    padding-right: 4px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    height: calc(100% - 30px);\r\n    background-color: #FFF;\r\n    font-size: 14px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable,\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    border-collapse: collapse;\r\n    color: #003366;\r\n    line-height: 1.1;\r\n}\r\n\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    padding: 4px;\r\n    text-align: center;\r\n}\r\n\r\n.mydp .weekdaytitle {\r\n    background-color: #DDD;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    max-width: 36px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .weekdaytitleweeknbr {\r\n    width: 20px;\r\n    border-right: 1px solid #BBB;\r\n}\r\n\r\n.mydp .monthcell {\r\n    background-color: #FAFAFA;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .yearcell {\r\n    background-color: #FAFAFA;\r\n    width: 20%;\r\n}\r\n\r\n.mydp .daycell .datevalue {\r\n    background-color: inherit;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycell .datevalue span {\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycellweeknbr {\r\n    font-size: 10px;\r\n    border-right: 1px solid #CCC;\r\n    cursor: default;\r\n    color: #000;\r\n}\r\n\r\n.mydp .inlinedp {\r\n    position: relative;\r\n    margin-top: -1px;\r\n}\r\n\r\n.mydp .prevmonth,\r\n.mydp .nextmonth {\r\n    color: #CCC;\r\n}\r\n\r\n.mydp .disabled {\r\n    cursor: default !important;\r\n    color: #CCC;\r\n    background: #FBEFEF;\r\n}\r\n\r\n.mydp .highlight {\r\n    color: #C30000;\r\n}\r\n\r\n.mydp .dimday {\r\n    opacity: 0.5;\r\n}\r\n\r\n.mydp .currmonth {\r\n    background-color: #F6F6F6;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydp .markdate {\r\n    position: absolute;\r\n    width: 4px;\r\n    height: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .markcurrday,\r\n.mydp .markcurrmonth,\r\n.mydp .markcurryear {\r\n    text-decoration: underline;\r\n}\r\n\r\n.mydp .selectedday .datevalue,\r\n.mydp .selectedmonth .monthvalue,\r\n.mydp .selectedyear .yearvalue {\r\n    border: none;\r\n    background-color: #8EBFFF;\r\n    border-radius: 2px;\r\n}\r\n\r\n.mydp .headerbtncell {\r\n    background-color: #FAFAFA;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .yearchangebtncell {\r\n    text-align: center;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .headerbtn,\r\n.mydp .headerlabelbtn,\r\n.mydp .yearchangebtn {\r\n    background: #FAFAFA;\r\n    border: none;\r\n    height: 22px;\r\n}\r\n\r\n.mydp .headerbtn {\r\n    width: 16px;\r\n}\r\n\r\n.mydp .headerlabelbtn {\r\n    font-size: 14px;\r\n    outline: none;\r\n    cursor: default;\r\n}\r\n\r\n.mydp,\r\n.mydp .headertodaybtn {\r\n    border: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headerbtn,\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt,\r\n.mydp .headertodaybtn,\r\n.mydp .yearchangebtn {\r\n    color: #000;\r\n}\r\n\r\n.mydp .headertodaybtn {\r\n    padding: 0 4px;\r\n    font-size: 11px;\r\n    height: 22px;\r\n    min-width: 60px;\r\n    max-width: 84px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp button::-moz-focus-inner {\r\n    border: 0;\r\n}\r\n\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt {\r\n    text-align: center;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n    height: 26px;\r\n    width: 40px;\r\n    max-width: 40px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .btnclear:focus,\r\n.mydp .btndecrease:focus,\r\n.mydp .btnincrease:focus,\r\n.mydp .btnpicker:focus,\r\n.mydp .headertodaybtn:focus {\r\n    background: #ADD8E6;\r\n}\r\n\r\n.mydp .headerbtn:focus,\r\n.mydp .monthlabel:focus,\r\n.mydp .yearlabel:focus,\r\n.mydp .yearchangebtn:focus {\r\n    color: #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n.mydp .daycell:focus,\r\n.mydp .monthcell:focus,\r\n.mydp .yearcell:focus {\r\n    outline: 1px solid #CCC;\r\n}\r\n\r\n.mydp .icon-mydpcalendar,\r\n.mydp .icon-mydpremove {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydpleft,\r\n.mydp .icon-mydpright,\r\n.mydp .icon-mydpup,\r\n.mydp .icon-mydpdown {\r\n    color: #222;\r\n    font-size: 20px;\r\n}\r\n\r\n.mydp .btndecrease .icon-mydpleft,\r\n.mydp .btnincrease .icon-mydpright {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydptoday {\r\n    color: #222;\r\n    font-size: 11px;\r\n}\r\n\r\n.mydp table {\r\n    display: table;\r\n    border-spacing: 0;\r\n}\r\n\r\n.mydp table td {\r\n    padding: 0;\r\n}\r\n\r\n.mydp table,\r\n.mydp th,\r\n.mydp td {\r\n    border: none;\r\n}\r\n\r\n.mydp .btnpickerenabled:hover,\r\n.mydp .btnclearenabled:hover,\r\n.mydp .btndecreaseenabled:hover,\r\n.mydp .btnincreaseenabled:hover,\r\n.mydp .headertodaybtnenabled:hover {\r\n    background-color: #E6E6E6;\r\n}\r\n\r\n.mydp .tablesingleday:hover,\r\n.mydp .tablesinglemonth:hover,\r\n.mydp .tablesingleyear:hover {\r\n    background-color: #DDD;\r\n}\r\n\r\n.mydp .monthlabel,\r\n.mydp .yearlabel,\r\n.mydp .inputnoteditable,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .headerbtnenabled:hover,\r\n.mydp .yearchangebtnenabled:hover,\r\n.mydp .monthlabel:hover,\r\n.mydp .yearlabel:hover {\r\n    color: #777;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'mydatepicker';\r\n    src: url('data:application/octet-stream;base64,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') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.mydp .mydpicon {\r\n    font-family: 'mydatepicker';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.mydp .icon-mydpright:before {\r\n    content: \"\\e800\";\r\n}\r\n\r\n.mydp .icon-mydpleft:before {\r\n    content: \"\\e801\";\r\n}\r\n\r\n.mydp .icon-mydptoday:before {\r\n    content: \"\\e802\";\r\n}\r\n\r\n.mydp .icon-mydpcalendar:before {\r\n    content: \"\\e803\";\r\n}\r\n\r\n.mydp .icon-mydpup:before {\r\n    content: \"\\e804\";\r\n}\r\n\r\n.mydp .icon-mydpdown:before {\r\n    content: \"\\e805\";\r\n}\r\n\r\n.mydp .icon-mydpremove:before {\r\n    content: \"\\e806\";\r\n}\r\n"

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = ".suggestions {\n  z-index: 99;\n  width: auto;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left;\n  left: 0;\n  margin-left: 1.6rem; }\n  .suggestions ul {\n    padding: 0;\n    margin: 1rem;\n    max-height: 30rem;\n    overflow: scroll; }\n  .suggestions li {\n    list-style: none;\n    cursor: pointer;\n    padding: .5rem;\n    white-space: nowrap;\n    width: auto; }\n\n.dropdown-container {\n  margin: 1.6rem;\n  left: 0;\n  width: 70%;\n  height: 3.4rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.filter-input {\n  color: #333333;\n  width: 100%;\n  height: 100%; }\n\n@media (max-width: 955px) {\n  .suggestions {\n    margin-left: 1rem;\n    width: 100%; }\n    .suggestions li {\n      white-space: inherit; }\n  .dropdown-container {\n    margin: 1rem;\n    width: 100%; } }\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = ".contact-us {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/contact.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.contact-us {\n  margin-top: 6rem;\n  text-align: center;\n  overflow: scroll; }\n  .contact-us input {\n    height: 5rem;\n    padding: 1rem;\n    font-size: 1.8rem; }\n    .contact-us input:required {\n      outline: none; }\n  .contact-us h1 {\n    font-size: 4.5rem;\n    color: white; }\n  .contact-us .message {\n    height: 20rem;\n    vertical-align: top; }\n  .contact-us .message,\n  .contact-us .subject {\n    width: 64rem; }\n\n.static-info {\n  font-size: 2.3rem;\n  width: 100%;\n  color: white;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.form-wrapper {\n  text-align: center;\n  display: inline-block; }\n\n.form-group {\n  width: 60rem;\n  text-align: left; }\n  .form-group .alert {\n    width: inherit;\n    padding: 0;\n    margin: 0; }\n\n.name-group,\n.mail-number-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-box .alert,\n.subject-box .alert {\n  width: 60rem; }\n\n.message-dialog {\n  height: 20%;\n  width: 30%;\n  background: #26181D;\n  position: absolute;\n  top: 45%;\n  left: 35%;\n  color: white;\n  box-shadow: 0 0 0.7px grey;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .message-dialog .wrapper {\n    position: relative;\n    top: 30%; }\n    .message-dialog .wrapper .text {\n      display: block;\n      padding: 1rem; }\n    .message-dialog .wrapper .ok-btn {\n      background: #73656A;\n      color: white;\n      width: 30%; }\n\n#message {\n  height: 20rem;\n  font-size: 1.8rem; }\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.submit-btn {\n  width: 25rem;\n  margin-top: 2rem;\n  height: 4rem;\n  margin-bottom: 5rem; }\n  .submit-btn:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto; }\n\n@media (max-width: 955px) {\n  .form-wrapper {\n    width: 100%; }\n  .form-group {\n    width: 100%; }\n  .name-group,\n  .subject-box,\n  .message-box,\n  .mail-number-group {\n    width: 90%;\n    margin: 2rem; }\n  .contact-us {\n    margin-top: 5rem; } }\n"

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = ".date-picker-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .date-picker-container input {\n    height: 3rem;\n    width: 8rem;\n    border: 0;\n    text-align: center;\n    background-color: transparent;\n    color: white;\n    margin-top: .2rem; }\n    .date-picker-container input::-webkit-input-placeholder {\n      color: white; }\n    .date-picker-container input:-ms-input-placeholder {\n      color: white; }\n    .date-picker-container input::placeholder {\n      color: white; }\n  .date-picker-container label {\n    font-weight: 600;\n    padding-top: .4rem;\n    font-size: 1.5rem;\n    color: gray; }\n  .date-picker-container .from-date,\n  .date-picker-container .to-date {\n    width: 13.5rem;\n    text-align: center;\n    margin-right: 1rem;\n    margin-top: 1.4rem;\n    height: 3.4rem;\n    border: .2px solid #426771;\n    margin-left: 1rem; }\n    .date-picker-container .from-date input,\n    .date-picker-container .to-date input {\n      width: 10rem;\n      border: 0;\n      height: 3.4rem;\n      text-align: center;\n      background-color: transparent;\n      color: white; }\n\n@media (max-width: 955px) {\n  .date-picker-container {\n    margin-bottom: 2.4rem;\n    display: inline-block; }\n    .date-picker-container .from-date,\n    .date-picker-container .to-date {\n      position: relative;\n      display: inline-block;\n      width: 70%; } }\n"

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = ".hide-dropdown {\n  display: none; }\n\n.dropdown-list {\n  z-index: 99;\n  padding: 1.5rem 0 1.5rem 3rem;\n  width: 15rem;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left; }\n\n.dropdown-container {\n  width: 9rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.data-list input {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  margin-right: .8rem;\n  float: left; }\n\n.data-list span {\n  vertical-align: middle;\n  font-size: 1.5rem; }\n\n@media (max-width: 955px) {\n  .dropdown-container {\n    display: block;\n    width: 100%;\n    margin-top: 1rem; }\n    .dropdown-container button {\n      width: 90%;\n      margin: auto;\n      height: 3.4rem; }\n  .dropdown-list {\n    padding-left: 3rem;\n    width: 90%;\n    margin-left: 1rem; } }\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 20rem 0rem 20rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = ".footer {\n  text-align: center;\n  padding: 2% 0;\n  background-color: #26181D;\n  width: 100%;\n  margin-top: 5%; }\n  .footer span,\n  .footer a {\n    color: white;\n    padding: 0 1%; }\n  .footer a {\n    text-decoration: none;\n    cursor: pointer; }\n"

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = ".hero {\n  width: 100%; }\n\n.header {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n.view-all {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #26181D; }\n\n.main-page-container {\n  height: 100%;\n  min-height: 100%; }\n\n.view-all-container {\n  text-align: center; }\n\n.main-heading {\n  font-size: 7rem;\n  color: white; }\n\n.sub-heading {\n  opacity: 1;\n  color: white;\n  top: 1rem;\n  position: relative; }\n\n.content {\n  position: relative;\n  top: 10rem; }\n\nheader {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.btn {\n  color: white;\n  background-color: #26181D;\n  top: 3rem;\n  position: relative;\n  border: none;\n  border-radius: 300px;\n  width: 30rem;\n  font-size: 2rem;\n  cursor: initial;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\nh1.ws-heading {\n  color: #26181D;\n  text-align: center;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif; }\n\n#workshops {\n  padding-top: 5rem; }\n\n@media (max-width: 955px) {\n  .main-heading {\n    font-size: 4.5rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 25rem;\n    font-size: 2.2rem; } }\n\n@media (max-width: 400px) {\n  .main-heading {\n    font-size: 3.8rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 18rem;\n    font-size: 1.6rem; } }\n"

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = ".top-bar-title {\n  font-family: 'Coiny', cursive;\n  font-size: 22px;\n  color: #ffffff; }\n\n.nav-menu a {\n  color: #ffffff; }\n\n.fa-bars {\n  border: 1px solid white;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  border-radius: 4px; }\n\n.filter-header {\n  display: none; }\n\n.navbar-toggle {\n  display: none; }\n\nnav {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 6rem;\n  background-color: #26181D;\n  border: none; }\n  nav img {\n    width: 3rem;\n    height: 3rem;\n    margin-top: 1.2rem;\n    margin-left: 1.5rem;\n    float: left; }\n  nav .navbar-nav a {\n    background-color: transparent;\n    color: white; }\n  nav ul {\n    margin-top: .4rem;\n    font-weight: 200; }\n\n@media (max-width: 955px) {\n  nav {\n    height: 5rem; }\n    nav ul {\n      width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white; }\n  .filter-header {\n    display: inline-block;\n    color: white;\n    margin-top: 1rem;\n    padding-left: 1rem;\n    background: transparent;\n    margin-left: 2rem; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .hideNavbar {\n    display: none; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-nav > li {\n    float: none !important; } }\n\n@media (min-width: 955px) and (max-width: 1140px) {\n  nav ul {\n    width: 100%; }\n  .hideNavbar {\n    display: none; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white;\n    margin-top: 1.5rem;\n    float: right; }\n  .navbar-collapse.collapse {\n    display: none !important; }\n  .navbar-nav {\n    float: none !important;\n    margin-top: 7.5px; }\n  .navbar-nav > li {\n    float: none !important; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .collapse.in {\n    display: block !important; } }\n"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = ".detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-img {\n  width: 12rem;\n  height: 12rem;\n  /*border-radius: 50%;*/\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 2rem;\n  /*border: 3px solid #15424E;*/ }\n\n.profile-photo {\n  float: left; }\n\n.photographer-name h1 {\n  font-size: 2.5rem;\n  color: #73656A; }\n\n.photographer-information h4 {\n  margin-top: 0; }\n\n.detail-location {\n  color: #73656A;\n  opacity: 0.8;\n  margin-bottom: .5rem; }\n\n.website-link {\n  text-decoration: none;\n  margin-bottom: 1rem; }\n\n/* Style the tab */\ndiv.tab {\n  overflow: hidden;\n  margin-top: 5rem;\n  width: 100%; }\n  div.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    border-bottom: 3px solid transparent;\n    font-size: 2rem;\n    color: #73656A; }\n    div.tab button.active {\n      /*background-color: #ccc;*/\n      border-bottom: 3px solid #73656A; }\n\n/* Style the tab content */\n.tabcontent {\n  border-top: none;\n  text-align: left;\n  padding-left: 2rem;\n  height: 40rem;\n  overflow: scroll;\n  width: 100%;\n  background-color: rgba(239, 230, 233, 0.57); }\n\n.detail-tabs {\n  text-align: center;\n  width: 65%;\n  float: left;\n  margin-left: 4rem; }\n\n.details-container {\n  padding-bottom: 5rem; }\n\n.day-wrapper,\n.photographer-information {\n  padding-top: 2rem; }\n\n.day-wrapper .location,\n.photographer-information h4 {\n  color: #73656A; }\n\n#Description p {\n  padding-top: 2rem;\n  margin-right: .4rem; }\n\n#Description h3 {\n  margin-top: 5%; }\n\n#Gallery {\n  text-align: center; }\n  #Gallery img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 35rem;\n    height: 28rem;\n    margin: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.wsd-name {\n  font-size: 3.5rem;\n  color: #73656A;\n  text-align: center;\n  margin-top: 3rem;\n  font-weight: 500; }\n\n.highlights {\n  position: absolute;\n  display: inline-block;\n  margin-top: 10rem;\n  padding-left: 5rem;\n  width: 25%; }\n  .highlights a {\n    color: #73656A; }\n  .highlights div {\n    font-size: 2rem;\n    font-weight: 300;\n    color: #73656A; }\n    .highlights div i {\n      color: #73656A; }\n\n.image-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 5rem;\n  left: 0;\n  top: 5rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n/* Modal Content */\n.image-modal-content {\n  margin: 0;\n  padding: 0; }\n\n.hide-modal {\n  display: none; }\n\n/* The Close Button */\n.close {\n  color: white;\n  opacity: 1;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 35px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer; }\n\n.hideImage {\n  display: none; }\n\n.cursor {\n  cursor: pointer; }\n\n/* Next & previous buttons */\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none; }\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.prev {\n  left: 0; }\n\n.slides {\n  text-align: center; }\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  text-decoration: none; }\n\n.active {\n  opacity: 1; }\n\n.gallery-image.hover-shadow {\n  transition: 0.3s; }\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n@media (max-width: 955px) {\n  #Gallery {\n    padding-left: 0; }\n    #Gallery img {\n      width: 28rem;\n      height: 20rem; }\n  div.tab {\n    text-align: center; }\n    div.tab button {\n      width: 50%;\n      display: block;\n      margin: auto; }\n  .tabContent {\n    text-align: center; }\n    .tabContent p {\n      text-align: justify;\n      padding: 2rem; }\n  .detail-tabs {\n    padding: 0 2rem;\n    display: inline-block;\n    width: 100%;\n    margin-left: 0; }\n  .highlights {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    position: inherit; } }\n"

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = ".autocomplete-filter,\n.dropdown-filter,\n.price-filter,\n.date-picker,\n.get-list-btn {\n  left: 3rem;\n  position: relative;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.autocomplete-filter {\n  display: block; }\n\n*:focus {\n  outline: 0; }\n\n.price-filter {\n  margin-top: 1.6rem;\n  margin-left: 1rem; }\n  .price-filter input {\n    outline: .2px solid #26181D;\n    width: 10rem;\n    border: 0;\n    height: 3.4rem;\n    text-align: center;\n    background-color: white;\n    color: #26181D;\n    margin-right: 1rem; }\n    .price-filter input::-webkit-input-placeholder {\n      color: #26181D; }\n    .price-filter input:-ms-input-placeholder {\n      color: #26181D; }\n    .price-filter input::placeholder {\n      color: #26181D; }\n\n.hide-dropdown {\n  display: none; }\n\n.filters-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.get-list-btn {\n  display: none;\n  width: 10rem;\n  height: 3.7rem;\n  border: none;\n  background-color: #73656A;\n  color: white;\n  margin-top: 1.5rem; }\n\n@media (max-width: 955px) {\n  .filters-container {\n    display: block;\n    text-align: center; }\n  .dropdown-filter,\n  .price-filter,\n  .date-picker,\n  .get-list-btn {\n    left: 0;\n    display: block; }\n  .price-filter input {\n    width: 50%;\n    display: block;\n    margin: 2rem auto; }\n  .get-list-btn {\n    display: inline-block;\n    width: 50%;\n    margin-top: 2rem; }\n  .autocomplete-filter {\n    width: 70%;\n    text-align: center;\n    margin: 1.4rem 1rem 0 1rem; } }\n"

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = ".workshop-list {\n  text-align: center; }\n\n.ws-pages /deep/ ul.ng2-pagination a {\n  text-decoration: none;\n  cursor: pointer;\n  color: #73656A; }\n  .ws-pages /deep/ ul.ng2-pagination a:hover {\n    border-radius: 20%; }\n\n.ws-pages /deep/ ul.ng2-pagination li.current {\n  background: #73656A;\n  border-radius: 20%; }\n\n.entity {\n  width: 30rem;\n  display: inline-block;\n  margin: 2rem;\n  box-shadow: 0rem 0rem 0.2rem 0rem #888888; }\n  .entity img {\n    vertical-align: middle;\n    width: 30rem;\n    height: 20rem;\n    margin-bottom: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.inner {\n  text-align: center;\n  position: relative;\n  padding-bottom: 2rem; }\n\nh1.name {\n  margin-top: 0;\n  font-size: 2rem;\n  color: #26181D;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif;\n  margin-left: 1rem; }\n\n.price {\n  color: #594B50;\n  text-align: left;\n  padding-left: 2rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 2rem; }\n\nhr {\n  width: 10rem;\n  text-align: center;\n  border-color: #594B50;\n  opacity: 0.3;\n  margin-top: 1rem;\n  margin-bottom: .5rem; }\n\n.date {\n  color: #594B50;\n  text-align: left;\n  padding-left: 1rem; }\n\n.location {\n  color: #26181D;\n  padding-bottom: 1rem;\n  opacity: 0.6; }\n\n.truncate {\n  width: 28rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n@media (max-width: 955px) {\n  .entity {\n    width: auto;\n    display: block; }\n    .entity .image {\n      height: 20rem;\n      margin-bottom: 1rem;\n      width: 100%; }\n  h1.name {\n    font-size: 1.8rem;\n    margin: auto; } }\n"

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = ".filters,\n.list {\n  position: absolute;\n  left: 0;\n  width: 100%; }\n\n.filters {\n  position: fixed;\n  z-index: 999;\n  background-color: transparent;\n  height: auto;\n  width: 90rem;\n  padding-bottom: .3rem;\n  left: 5rem; }\n\n.list {\n  top: 10rem;\n  overflow-x: hidden; }\n\n.ws-container nav.navbar.navbar-default {\n  background-color: white;\n  border: none; }\n\n.ws-container .navbar-default .navbar-nav .active a {\n  background-color: transparent; }\n\n@media (max-width: 955px) {\n  .filters {\n    position: fixed;\n    background-color: #26181D;\n    height: 100%;\n    width: 100%;\n    top: 5rem;\n    padding-bottom: 2rem;\n    left: 0;\n    z-index: 99;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); }\n  .list {\n    top: 5rem;\n    position: relative; }\n  .hideFilter {\n    display: none; }\n  .footer {\n    position: relative;\n    bottom: 0; } }\n"

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = ".ws-container nav.navbar.navbar-default {\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.ws-container .navbar-default .navbar-nav .active a {\r\n    background-color: transparent;\r\n}"

/***/ },
/* 82 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>About Us</h2>\r\n    PixelatedPlanet enables aspiring photographers to find workshops and seminars all around the world being conducted by people\r\n    successful in the field of photography. On the other hand, we provide a platform for photographers to showcase their\r\n    photography workshops and reach interested folks.\r\n    <h2>FAQs</h2>\r\n    <b>Do you have workshops of all genres?</b>\r\n    <br/> Of course! You can find everything from Landscape and Food photography to Timelapse and Night Sky photography workshops.\r\n    <br/><br/>\r\n    <b>Does PixelatedPlanet allow me to register for workshops?</b>\r\n    <br/> As of now, we aim to bring all photography workshops in one place. After finding the workshop you like, we will\r\n    redirect you the photographer's website for registration/payment.\r\n    <br/><br/>\r\n    <b>Does PixelatedPlanet charge me for finding workshops?</b>\r\n    <br/> No. All information on our website if freely accessible. No hidden costs.\r\n    <br/><br/>\r\n    <b>I am a photographer. Can I showcase my workshops on your website?</b>\r\n    <br/> We carefully select photographers based on their portfolios to keep quality of workshops high. Please email us\r\n    at hello@thepixelatedplanet.com in order to get in touch with us!\r\n</div>\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <input id=\"country\" type=\"text\" class=\"filter-input\" [(ngModel)]=query (keyup)=filter() placeholder=\"Type a location\">\r\n    <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\r\n        <ul>\r\n            <li *ngFor=\"let item of filteredList\" (click)=\"select(item)\">{{item}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n<div class=\"contact-us\">\r\n    <h1>Let's click together!</h1>\r\n    <div class=\"static-info\">\r\n        <div>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span>hello@thepixelatedplanet.com</span>\r\n        </div>\r\n        <div>\r\n            <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\r\n            <span>425-979-8838</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-wrapper\">\r\n        <form (ngSubmit)=\"onSubmit(); contactForm.reset()\" name=\"contact-form\" #contactForm=\"ngForm\">\r\n            <div class=\"name-group\">\r\n                <div class=\"form-group first-name\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" required [(ngModel)]=\"fname\" name=\"fname\" #firstname=\"ngModel\" placeholder=\"Full name\">\r\n                    <div *ngIf=\"!(firstname.valid || firstname.pristine)\" class=\"alert alert-danger\">\r\n                        Invalid name\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mail-number-group\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\" placeholder=\"Email address\">\r\n                    <div *ngIf=\"!(email.valid || email.pristine)\" class=\"alert alert-danger\">\r\n                        Invalid email address\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group subject-box\">\r\n                <input type=\"text\" class=\"form-control\" id=\"subject\" required [(ngModel)]=\"subjectText\" name=\"subject\" #subject=\"ngModel\"\r\n                    placeholder=\"Subject\">\r\n                <div *ngIf=\"!(subject.valid || subject.pristine)\" class=\"alert alert-danger\">\r\n                    Invalid subject\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group message-box\">\r\n                <textarea class=\"form-control\" id=\"message\" required rows=\"4\" cols=\"50\" name=\"message\" form=\"contact-form\" [(ngModel)]=\"messageText\"\r\n                    #message=\"ngModel\" placeholder=\"How can we help you?\"></textarea>\r\n                <div *ngIf=\"!(message.valid || message.pristine)\" class=\"alert alert-danger\">\r\n                    Invalid message\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"submit-btn btn btn-success\" [disabled]=\"!contactForm.form.valid || invalidDetails\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"message-dialog\" *ngIf=\"submitted && showMessageBox\">\r\n        <div class=\"wrapper\">\r\n            <div class=\"text\">{{submitMessage}}</div>\r\n            <button class=\"ok-btn btn\" (click)=\"hideMessagebox()\">ok</button>\r\n        </div>\r\n    </div>\r\n        <div class=\"footer\">\r\n        <footer></footer>\r\n    </div>\r\n</div>"

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = "<div class=\"date-picker-container\">\r\n    <div class=\"from-date\">\r\n        <my-date-picker (dateChanged)=\"onFromDateChanged($event)\" name=\"from-date\" [placeholder]=\"fromDateLabel\" [options]=\"fromDatePickerOptions\"></my-date-picker>\r\n    </div>\r\n    <div class=\"to-date\">\r\n       <my-date-picker (dateChanged)=\"onToDateChanged($event)\" name=\"to-date\" [placeholder]=\"toDateLabel\" [options]=\"toDatePickerOptions\"></my-date-picker>\r\n    </div>\r\n</div>"

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <button (click)=\"toggleDropdown()\"><span>{{buttonLabel}}</span>\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n</button>\r\n    <div class=\"dropdown-list\" (click)=\"overlay()\" [class.hide-dropdown]=\"isCollapsed\">\r\n        <div class=\"data-list\" *ngFor=\"let data of dataModel;\">\r\n            <input type=\"checkbox\" name=\"{{optionName}}\" value=\"{{data.value}}\">\r\n            <div>{{data.label}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\"/>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h1>404 - Page Not Found</h1>\r\n    <h3>Oops, you landed in a bad place. Let's get out of here quickly before any bad guys come around!</h3>\r\n</div>"

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <a href=\"/termsandconditions\">Terms and conditions</a>\r\n    <a href=\"/privacypolicy\">Privacy Policy</a>\r\n    <span>&copy; 2017 Pixelated Planet</span>\r\n    <a href=\"/contact\">Contact</a>\r\n</div>"

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = "<div class=\"main-page-container\">\r\n    <navi-bar [showFilters]=\"false\"></navi-bar>\r\n    <div class=\"header\">\r\n        <header class=\"masthead\">\r\n            <div class=\"header-content\">\r\n                <div class=\"header-content-inner\">\r\n                    <div class=\"main-heading\" id=\"homeHeading\">Pixelated Planet</div>\r\n                    <!-- <div class=\"sub-heading\">It is a long established fact that a reader will be distracted by the readable content of a page when\r\n                        looking at its layout.</div> -->\r\n                    <a class=\"btn btn-default btn-lg\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">Upcoming Workshops</a>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>\r\n\r\n    <section id=\"workshops\">\r\n        <h1 class=\"ws-heading\">\r\n            Workshops\r\n        </h1>\r\n        <workshops-list></workshops-list>\r\n        <div class=\"view-all-container\">\r\n            <a href=\"/workshops\" class=\"view-all\" angulartics2On=\"click\" angularticsEvent=\"ViewAllEventsClick\" angularticsCategory=\"HomePageInteraction\"><span>View all</span>  <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </section>\r\n\r\n    <div class=\"footer\">\r\n        <footer></footer>\r\n    </div>\r\n</div>"

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = "<nav class=\"nav-container\">\r\n  <a href=\"\"  angulartics2On=\"click\" angularticsEvent=\"GoToHomePageEvent\" angularticsCategory=\"NavBarInteraction\">\r\n    <img class=\"image\" src=\"/assets/img/icon.png\" alt=\"workshop image\">\r\n  </a>\r\n  <div class=\"navbar-header\">\r\n    <button *ngIf=\"showFilters\" type=\"button\" class=\"filter-header btn\" (click)=\"toggleFilter()\">\r\n          <div>Filters <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n    <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\r\n      <div><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"navbar-collapse\" [ngClass]=\"{'hideNavbar': hideNavbar}\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"active\" angulartics2On=\"click\" angularticsEvent=\"GoToWorkshopsPageEvent\" angularticsCategory=\"NavBarInteraction\"><a href=\"/workshops\">Workshops</a></li>\r\n      <li><a href=\"/about\" angulartics2On=\"click\" angularticsEvent=\"GoToAboutPageEvent\" angularticsCategory=\"NavBarInteraction\">About</a></li>\r\n      <li><a href=\"/contact\" angulartics2On=\"click\" angularticsEvent=\"GoToContactPageEvent\" angularticsCategory=\"NavBarInteraction\">Contact</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n\t<navi-bar></navi-bar>\r\n\t<div class=\"list\">\r\n\t\tRedirecting to an external link...\r\n\t</div>\r\n</div>"

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>Privacy Policy</h2>\r\n</div>\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>Terms and conditions</h2>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(workshopDetails.imageLink)\" alt=\"workshop image\"\r\n    />\r\n</div>\r\n\r\n<div class=\"wsd-name\">{{workshopDetails.name}}</div>\r\n\r\n<div class=\"details-container\">\r\n    <div class=\"detail-tabs\">\r\n\r\n        <!--Tab headings-->\r\n        <div class=\"tab\">\r\n            <button class=\"tablinks\" *ngFor=\"let tab of tabs; let i=index;\" [ngClass]=\"{'active': tab.showTab}\" (click)=\"openTabs(i)\">{{tab.label}}</button>\r\n        </div>\r\n\r\n        <!--Description tab-->\r\n        <div id=\"{{tabs[0].label}}\" [hidden]=\"!tabs[0].showTab\" class=\"tabcontent\">\r\n            <h3>{{tabs[0].label}}</h3>\r\n            <p [innerHTML]=\"workshopDetails.description\"></p>\r\n        </div>\r\n\r\n        <!--Itinierary tab-->\r\n        <div id=\"{{tabs[1].label}}\" [hidden]=\"!tabs[1].showTab\" class=\"tabcontent\">\r\n            <h3>{{tabs[1].label}}</h3>\r\n            <div class=\"day-wrapper\" *ngFor=\"let data of workshopDetails.itinerary;\">\r\n                <h5>\r\n                    <span>Day {{data.day}} - </span>\r\n                    <span class=\"location\">{{data.location}}</span>\r\n                </h5>\r\n                <p [innerHTML]=\"data.content\"></p>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Gallery tab-->\r\n        <div id=\"{{tabs[2].label}}\" [hidden]=\"!tabs[2].showTab\" class=\"tabcontent\">\r\n            <h3>{{tabs[2].label}}</h3>\r\n            <img class=\"gallery-image hover-shadow cursor\" *ngFor=\"let image of imagesLink;let i = index\" [src]=\"image.imageLink\" alt=\"workshop image\"\r\n                (click)=\"openModal(i+1)\" />\r\n        </div>\r\n\r\n        <!--Photographer tab-->\r\n        <div id=\"{{tabs[3].label}}\" [hidden]=\"!tabs[3].showTab\" class=\"tabcontent\">\r\n            <h3>{{tabs[3].label}}</h3>\r\n            <div class=\"photographer-information\" *ngFor=\"let photographer of workshopDetails.photographers;\">\r\n                <div class=\"profile-photo\">\r\n                    <img class=\"profile-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(photographer.profilePhotoLink)\" alt=\"workshop image\"\r\n                    />\r\n                </div>\r\n                <h4>\r\n                    <span>{{photographer.firstName}}</span>\r\n                    <span>{{photographer.lastName}}</span>\r\n                </h4>\r\n                <div class=\"detail-location\">\r\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                    <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(photographer.locationId)?.name}}</span>\r\n                </div>\r\n                <div class=\"website-link\">\r\n                    <a href=\"{{photographer?.websiteLink}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website</a>\r\n                </div>\r\n                <p [innerHTML]=\"photographer.moreInformation\"></p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Workshop highlights-->\r\n    <div class=\"highlights\">\r\n        <div class=\"wsd-link\">\r\n            <h4 class=\"highlight-headings\">Workshop Link</h4>\r\n            <a href=\"{{workshopDetails.link}}\" target=\"_blank\"><i class=\"fa fa-link\"></i> Workshop link\r\n        </a>\r\n        </div>\r\n        <div class=\"wsd-location\">\r\n            <h4 class=\"highlight-headings\">Location</h4>\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(workshopDetails.locationId)?.name}}</span>\r\n        </div>\r\n        <div class=\"wsd-price\">\r\n            <h4 class=\"highlight-headings\">Price Range</h4>\r\n            <i class=\"fa fa-usd\"></i> <span *ngIf=\"workshopDetails.minCost !== workshopDetails.maxCost\">{{workshopDetails.minCost}} - </span>{{workshopDetails.maxCost}}\r\n        </div>\r\n        <div class=\"wsd-dates\">\r\n            <h4 class=\"highlight-headings\">Dates</h4>\r\n            <div class=\"dates-information\" *ngFor=\"let detail of workshopDetails.multiWorkshopDetails;\">\r\n                <div>\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                    <span>{{this.formatDate(detail.startDate)}} - {{this.formatDate(detail.endDate)}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!--Image gallery modal-->\r\n    <div id=\"myModal\" [ngClass]=\"{'hide-modal': hideModal}\" class=\"image-modal\">\r\n        <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\r\n        <div class=\"image-modal-content\">\r\n\r\n            <div *ngFor=\"let image of imagesLink;let i = index\" class=\"slides\" [ngClass]=\"{'hideImage': image.hideImage}\">\r\n                <img [src]=\"image.imageLink\" class=\"modal-image\">\r\n            </div>\r\n        </div>\r\n\r\n        <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n        <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = "<div class=\"filters-container\">\r\n    <div class=\"dropdown-filter\">\r\n        <dropdown (selectionChanged)=\"updateCategoryList($event)\" [dataModel]=\"categories\" [buttonLabel]=\"categoryDropdownLabel\"\r\n            [optionName]=\"'categories'\"></dropdown>\r\n    </div>\r\n\r\n    <div class=\"autocomplete-filter\">\r\n        <autocomplete (selectionChanged)=\"updateLocation($event)\"></autocomplete>\r\n    </div>\r\n\r\n    <div class=\"date-picker\">\r\n        <date-picker (selectedFromChanged)=\"getFromDate($event)\" (selectedToChanged)=\"getToDate($event)\"></date-picker>\r\n    </div>\r\n\r\n    <div class=\"price-filter\">\r\n        <input #minPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Min. price\" (blur)=\"updateMinPrice(minPriceInput.value)\"\r\n            (oninput)=\"updateMinPrice(minPriceInput.value)\" (onchange)=\"updateMinPrice(minPriceInput.value)\" (change)=\"updateMinPrice(minPriceInput.value)\"\r\n        />\r\n        <input #maxPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Max. price\" (blur)=\"updateMaxPrice(maxPriceInput.value)\"\r\n            (oninput)=\"updateMaxPrice(maxPriceInput.value)\" (onchange)=\"updateMaxPrice(maxPriceInput.value)\" (change)=\"updateMaxPrice(maxPriceInput.value)\"\r\n        />\r\n    </div>\r\n\r\n    <button class=\"get-list-btn\" (click)=\"toggleFilter()\"><span>Filter</span>  <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button>\r\n</div>"

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = "<div class=\"workshop-list\">\r\n    <div>\r\n        <article class=\"entity\" *ngFor=\"let data of asyncData | async | paginate: { id: 'server', itemsPerPage: itemsPerPage, currentPage: page, totalItems: total }\">\r\n            <a [href]=\"createWorkshopDetailsUrl(data.workshopId, data.name)\">\r\n            <div class=\"inner\">\r\n                <img class=\"image\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(data.imageLink)\" alt=\"workshop image\" />\r\n                <h1 class=\"name truncate\" title=\"{{ data.name }}\">\r\n                    {{ data.name }}\r\n                </h1>\r\n                <hr>\r\n                <div class=\"location\">\r\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                    <span>{{this.formatLocation(data.locationId)}}</span>\r\n                </div>\r\n                <div class=\"date\">\r\n                    <span>{{this.formatDate(data.startDateFirst)}}</span>\r\n                    <span *ngIf=\"data.startDateFirst != data.endDateFirst\">-</span>\r\n                    <span *ngIf=\"data.startDateFirst != data.endDateFirst\"> {{this.formatDate(data.endDateFirst)}} </span>\r\n                </div>\r\n                <div class=\"price\" *ngIf=\"data.minCost == data.maxCost\">{{data.costCurrency}} {{data.minCost}}</div>\r\n                <div class=\"price\" *ngIf=\"data.minCost < data.maxCost\">{{data.costCurrency}} {{data.minCost}}-{{data.maxCost}}</div>\r\n            </div>\r\n            </a>\r\n        </article>\r\n    </div>\r\n    <div *ngIf=\"itemsPerPage > 4\" class=\"ws-pages\"> \r\n        <pagination-controls (pageChange)=\"getWorkshopsData(queryPath,$event, itemsPerPage)\" id=\"server\"></pagination-controls>\r\n    </div>\r\n</div>"

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n    <navi-bar [showFilters]=\"true\" (filtersDropdownToggle)=\"toggleFilterDropdown($event)\"></navi-bar>\r\n    <div class=\"filters\" [ngClass]=\"{'hideFilter': hideFilter}\" id=\"filters\">\r\n        <workshop-filter (minPriceFilterChanged)=\"setMinPrice($event)\" \r\n                         (maxPriceFilterChanged)=\"setMaxPrice($event)\"\r\n                         (fromDateChanged)=\"setFromDate($event)\"\r\n                         (toDateChanged)=\"setToDate($event)\"\r\n                         (locationFilterChanged)=\"setLocationIdList($event)\"\r\n                         (categoryFilterChanged)=\"setCategoryList($event)\"\r\n                         (applyFilters)=\"toggleFilter($event)\"></workshop-filter>\r\n    </div>\r\n\r\n    <div class=\"list\">\r\n        <workshops-list></workshops-list>\r\n        <div class=\"footer\">\r\n            <footer></footer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 99 */,
/* 100 */,
/* 101 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
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

module.exports = require("rxjs/add/observable/empty");

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 131 */,
/* 132 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmRmZDQ4M2I5ODEyYWE5OWRlYTciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2ludGVyZmFjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1wYWdpbmF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM5REEsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFJeEM7SUFjSTtRQUhRLGdCQUFXLEdBQStCLEVBQUUsQ0FBQztRQUM3QyxvQkFBZSxHQUE4QixFQUFFLENBQUM7UUFJcEQsSUFBSSxDQUFDLFVBQVUsR0FBRywwQ0FBMEMsQ0FBQztRQUM3RCxJQUFJLENBQUMsY0FBYyxHQUFHLGtEQUFrRCxDQUFDO1FBQ3pFLElBQUksQ0FBQyxxQkFBcUIs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R0FBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNyRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxJQUFJLE1BQU0sRUFBQyxDQUFDLENBQUM7WUFDMUgsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsUyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFP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RSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQztnQkFDakYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzlJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsU0FBUztnQkFDdEIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUM7Z0JBQ2pGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUMxSSxVQUFVLEVB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QUFrRyxnSEFBZ0gsOENBQThDLDZCQUE2Qix5TEFBeUwsb0VBQW9FLDhGOzs7Ozs7QUNBNW1LLHE5Qzs7Ozs7O0FDQUEsc0pBQXNKLGlGQUFpRix5VUFBeVUsYUFBYSw2QkFBNkIsYUFBYSw0TUFBNE0sc0NBQXNDLHlHQUF5RyxzQ0FBc0Msb0xBQW9MLG9DQUFvQyxvSEFBb0gsbUJBQW1CLEdBQUcsY0FBYyx1RkFBdUYsbUJBQW1CLEdBQUcsY0FBYyxHQUFHLGNBQWMsZ1Q7Ozs7OztBQ0FwK0MsdU1BQXVNLHlCQUF5QixxdkI7Ozs7Ozs7O0FDQWhPLDRDOzs7Ozs7QUNBQSw4Qzs7Ozs7O0FDQUEsMEM7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsd0QiLCJmaWxlIjoic2VydmVyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb3J5IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vcnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMzIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJkZmQ0ODNiOTgxMmFhOTlkZWE3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0lMb2NhdGlvbiwgSVBob3RvZ3JhcGhlcn0gZnJvbSAnLi4vd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnlcclxue1xyXG4gICAgcHJpdmF0ZSBjZG5CYXNlVXJsO1xyXG4gICAgcHJpdmF0ZSBzZXJ2aWNlQmFzZVVybDtcclxuICAgIHByaXZhdGUgcGl4ZWxhdGVkUGxhbmV0QVBJVXJsO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbnNVcmw7XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wVHlwZXNVcmw7XHJcbiAgICBwcml2YXRlIHBob3RvZ3JhcGhlcnNVcmw7XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uczpJTG9jYXRpb25bXTtcclxuICAgIHByaXZhdGUgd29ya3Nob3BUeXBlczpzdHJpbmdbXTtcclxuICAgIHByaXZhdGUgcGhvdG9ncmFwaGVyczpJUGhvdG9ncmFwaGVyW107XHJcbiAgICBwcml2YXRlIGxvY2F0aW9uTWFwOiB7W2tleTogbnVtYmVyXTogSUxvY2F0aW9ufSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbk1hcE5hbWU6e1trZXk6IHN0cmluZ106IElMb2NhdGlvbn0gPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jZG5CYXNlVXJsID0gYGh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXRgO1xyXG4gICAgICAgIHRoaXMuc2VydmljZUJhc2VVcmwgPSBgaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRzZXJ2aWNlLmF6dXJld2Vic2l0ZXMubmV0YDtcclxuICAgICAgICB0aGlzLnBpeGVsYXRlZFBsYW5ldEFQSVVybCA9IGAke3RoaXMuc2VydmljZUJhc2VVcmx9L2FwaS9QaXhlbGF0ZWRgO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25zVXJsID0gYCR7dGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmx9L0xvY2F0aW9uc2A7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFR5cGVzVXJsID0gYCR7dGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmx9L1dvcmtzaG9wVHlwZXNgO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRQaXhlbGF0ZWRQbGFuZXRBUElVcmwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBpeGVsYXRlZFBsYW5ldEFQSVVybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25zVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnNVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdvcmtzaG9wVHlwZXNVcmwoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmtzaG9wVHlwZXNVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc29sdmVJbWFnZVVybChwYXRoOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jZG5CYXNlVXJsICsgcGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25zKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRXb3Jrc2hvcFR5cGVzKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3Jrc2hvcFR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRMb2NhdGlvbnMobG9jYXRpb25zOklMb2NhdGlvbltdKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IDxJTG9jYXRpb24+bG9jYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uTWFwW2xvY2F0aW9uLmlkXSA9IGxvY2F0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uTWFwTmFtZVtsb2NhdGlvbi5uYW1lXSA9IGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9uQnlMb2NhdGlvbklkKHZhbHVlOm51bWJlcikgOiBJTG9jYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5sb2NhdGlvbk1hcCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbk1hcFt2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbkJ5TG9jYXRpb25OYW1lKHZhbHVlOnN0cmluZykgOiBJTG9jYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5sb2NhdGlvbk1hcE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9uTWFwTmFtZVt2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXM6c3RyaW5nW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFR5cGVzID0gd29ya3Nob3BUeXBlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYXRpb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BPdmVydmlldyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXIsXHJcbiAgICB3b3Jrc2hvcFR5cGU6IHN0cmluZyxcclxuICAgIG51bWJlck9mV29ya3Nob3BzOiBudW1iZXIsXHJcbiAgICBzdGFydERhdGVGaXJzdD86IERhdGUsXHJcbiAgICBlbmREYXRlRmlyc3Q/OiBEYXRlLFxyXG4gICAgbWluQ29zdD86IG51bWJlcixcclxuICAgIG1heENvc3Q/OiBudW1iZXIsXHJcbiAgICBjb3N0Q3VycmVuY3k/OiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBpbWFnZUxpbms6IHN0cmluZyxcclxuICAgIGxvY2F0aW9uSWQ6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BEdG8ge1xyXG4gICAgd29ya3Nob3BzOiBJV29ya3Nob3BPdmVydmlld1tdLFxyXG4gICAgdG90YWw6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQaG90b2dyYXBoZXIge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIHByb2ZpbGVQaG90b0xpbms6IHN0cmluZztcclxuICAgIHdlYnNpdGVMaW5rOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkPzogbnVtYmVyO1xyXG4gICAgbW9yZUluZm86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlXb3Jrc2hvcERldGFpbHMge1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxuICAgIGNvc3Q/OiBudW1iZXI7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wRGV0YWlscyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaXRpbmVyYXJ5OiBJSXRpbmVyYXJ5W107XHJcbiAgICBhZGR0aW9uYWxJbmZvcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2VMaW5rOiBzdHJpbmc7XHJcbiAgICBsaW5rPzogc3RyaW5nO1xyXG4gICAgbG9jYXRpb25JZDogbnVtYmVyO1xyXG4gICAgd29ya3Nob3BUeXBlOiBzdHJpbmc7XHJcbiAgICBtdWx0aVdvcmtzaG9wRGV0YWlsczogSU11bHRpV29ya3Nob3BEZXRhaWxzW107XHJcbiAgICBtaW5Db3N0OiBudW1iZXI7XHJcbiAgICBtYXhDb3N0OiBudW1iZXI7XHJcbiAgICBjb3N0Q3VycmVuY3k6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSXRpbmVyYXJ5IHtcclxuICAgIGRheTogbnVtYmVyO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBwdWJsaWMgZ2xvYmFsQ29uc3RhbnRzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5OiBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5nZXRXb3Jrc2hvcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BPdmVydmlldyhwYXRoOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgaXRlbXNQZXJQYWdlOiBudW1iZXIpOiBPYnNlcnZhYmxlPElXb3Jrc2hvcER0bz4ge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IGAke3BhdGh9JnBhZ2VOdW1iZXI9JHtwYWdlfSZudW1iZXJPZlJlc3VsdHM9JHtpdGVtc1BlclBhZ2V9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChxdWVyeSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYXRpb25zSW50ZXJuYWwoKTogUHJvbWlzZTxJTG9jYXRpb25bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uc1VybCgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBJTG9jYXRpb25bXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYXRpb25zKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9ucygpO1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb25zSW50ZXJuYWwoKS50aGVuKGxvY2F0aW9ucyA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxDb25zdGFudHMuc2V0TG9jYXRpb25zKGxvY2F0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFdvcmtzaG9wVHlwZXNJbnRlcm5hbCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0V29ya3Nob3BUeXBlc1VybCgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BUeXBlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRXb3Jrc2hvcFR5cGVzKCk7XHJcbiAgICAgICAgaWYoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgd1R5cGVzID0gdGhpcy5nZXRXb3Jrc2hvcFR5cGVzSW50ZXJuYWwoKS50aGVuKHdvcmtzaG9wVHlwZXMgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzLnNldFdvcmtzaG9wVHlwZXMod29ya3Nob3BUeXBlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya3Nob3BUeXBlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3VHlwZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkOiBzdHJpbmcpOiBQcm9taXNlPElXb3Jrc2hvcERldGFpbHM+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wRGV0YWlscz93b3Jrc2hvcElkPSR7d29ya3Nob3BJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8SVdvcmtzaG9wRGV0YWlscz5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcnRpY3MyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcnRpY3MyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnksIElXb3Jrc2hvcE92ZXJ2aWV3IH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd29ya3Nob3BzLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzTGlzdENvbXBvbmVudCB7XHJcblxyXG4gICAgcXVlcnlQYXRoOiBzdHJpbmc7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBhc3luY0RhdGE6IE9ic2VydmFibGU8SVdvcmtzaG9wT3ZlcnZpZXdbXT47XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgdG90YWw6IG51bWJlcjtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICB3b3Jrc2hvcHM6IElXb3Jrc2hvcE92ZXJ2aWV3W107XHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogYW55O1xyXG4gICAgcHJpdmF0ZSBjZFJlZjphbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYW5ndWxhcnRpY3MyO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BzID0gW107XHJcbiAgICAgICAgdGhpcy5jZFJlZiA9IGNkUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHZhciBtb250aE5hbWVzID0gW1xyXG4gICAgICAgICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLCBcIkRlY1wiXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgZGF0ZVZhbCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlVmFsLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGVWYWwuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGVWYWwuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSAke3llYXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXRMb2NhdGlvbihsb2NhdGlvbklkKSB7XHJcbiAgICAgICAgbGV0IGxvY2F0aW9uT2JqZWN0ID0gdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKGxvY2F0aW9uSWQpO1xyXG4gICAgICAgIGlmIChsb2NhdGlvbk9iamVjdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9jYXRpb25PYmplY3QubmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRCRFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3Jrc2hvcHNEYXRhKHBhdGg6IHN0cmluZywgcGFnZTogbnVtYmVyLCB3c1BlclBhZ2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ0dldFdvcmtzaG9wc0V2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wc0xpc3RDb21wb25lbnQnIH0gfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnF1ZXJ5UGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSB3c1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy5hc3luY0RhdGEgPSB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRXb3Jrc2hvcE92ZXJ2aWV3KHBhdGgsIHBhZ2UsIHdzUGVyUGFnZSlcclxuICAgICAgICAgICAgLmRvKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLnRvdGFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMud29ya3Nob3BzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVdvcmtzaG9wRGV0YWlsc1VybCh3b3Jrc2hvcElkOiBzdHJpbmcsIHdvcmtzaG9wTmFtZTogc3RyaW5nKSA6IHN0cmluZyB7XHJcbiAgICAgICAgd29ya3Nob3BOYW1lID0gd29ya3Nob3BOYW1lLnJlcGxhY2UoLyAvZyxcIi1cIik7XHJcbiAgICAgICAgcmV0dXJuIGAvcGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy8ke3dvcmtzaG9wTmFtZX0vJHt3b3Jrc2hvcElkfWA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkOiBzdHJpbmcsIHdvcmtzaG9wTmFtZTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscycsIHdvcmtzaG9wTmFtZSwgd29ya3Nob3BJZF0pO1xyXG4gICAgLy8gfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hYm91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC11cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC11cy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXNDb21wb25lbnQge1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBmbmFtZTogc3RyaW5nO1xyXG4gIHN1YmplY3RUZXh0OiBzdHJpbmc7XHJcbiAgbWVzc2FnZVRleHQ6IHN0cmluZztcclxuICBlbWFpbElkOiBzdHJpbmc7XHJcbiAgc2hvd01lc3NhZ2VCb3g6IGJvb2xlYW47XHJcbiAgc3VibWl0TWVzc2FnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZmllbGRzOiBzdHJpbmc7XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93TWVzc2FnZUJveCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoaWRlTWVzc2FnZWJveCgpIHtcclxuICAgIHRoaXMuc2hvd01lc3NhZ2VCb3ggPSBmYWxzZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdE1lc3NhZ2UgPSBcIk1lc3NhZ2Ugc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Vycm9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbkBWaWV3Q2hpbGQoV29ya3Nob3BzTGlzdENvbXBvbmVudCkgd29ya3Nob3BzTGlzdENoaWxkQ29tcDpXb3Jrc2hvcHNMaXN0Q29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50cyA6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdGxldCBlbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wcz9zdGFydERhdGVGaWx0ZXI9JHtzdGFydERhdGV9JmVuZERhdGVGaWx0ZXI9JHtlbmREYXRlfWA7XHJcblx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YShxdWVyeSwgMSwgNCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5jc3MnXSAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VSZWRpcmVjdENvbXBvbmVudCB7IFxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcblx0cHJpdmF0ZSBhbmd1bGFydGljczI6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG5cdFx0YW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHRcdFx0dGhpcy5hbmd1bGFydGljczIgPSBhbmd1bGFydGljczI7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHR0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdXJsID0gcGFyYW1zWydleHRlcm5hbFVybCddO1xyXG4gICAgfSk7XHJcblx0XHJcblx0dGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnTmF2aWdhdGVUb0V4dGVybmFsVXJsJywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ05hdmlnYXRpb25FdmVudCcgfX0pO1xyXG5cdFxyXG5cdC8vIG5hdmlnYXRlIHRvIHRoZSBVUkwgKEFzc3VtZXMgdGhlIHVybCBpcyBodHRwOi8vIG9yIGh0dHBzOi8vXHJcblx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJpdmFjeUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5LCBJV29ya3Nob3BEZXRhaWxzIH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VPYmplY3Qge1xyXG4gICAgaW1hZ2VMaW5rOiBzdHJpbmc7XHJcbiAgICBoaWRlSW1hZ2U6IGJvb2xlYW5cclxufVxyXG5cclxuaW50ZXJmYWNlIElUYWJzIHtcclxuICAgIGxhYmVsOiBzdHJpbmc7XHJcbiAgICBzaG93VGFiOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB7XHJcbiAgICB3b3Jrc2hvcERldGFpbHM6IElXb3Jrc2hvcERldGFpbHM7XHJcbiAgICBpbWFnZXNMaW5rOiBJSW1hZ2VPYmplY3RbXTtcclxuICAgIGhpZGVNb2RhbDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgc2xpZGVJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHByaXZhdGUgdGFiczogSVRhYnNbXTtcclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzQWN0aXZlVGFiOiBJVGFicztcclxuICAgIHByaXZhdGUgdGFiY29udGVudDogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XHJcbiAgICBwcml2YXRlIHRhYkxpbmtzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5LFxyXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BEZXRhaWxzID0gPGFueT57fTtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbGlkZUluZGV4ID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nZXRJbWdEYXRhKCk7XHJcbiAgICAgICAgbGV0IHdvcmtzaG9wSWQ6IHN0cmluZztcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB3b3Jrc2hvcElkID0gcGFyYW1zWydpZCddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0V29ya3Nob3BEZXRhaWwod29ya3Nob3BJZCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplVGFicygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BEZXRhaWwod29ya3Nob3BJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0V29ya3Nob3BEZXRhaWxzKHdvcmtzaG9wSWQpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3Jrc2hvcERldGFpbHMgPSBkYXRhO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWwoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsdXNTbGlkZXMobikge1xyXG4gICAgICAgIHRoaXMuc2hvd1NsaWRlcyh0aGlzLnNsaWRlSW5kZXggKz0gbik7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFNsaWRlKG4pIHtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZXModGhpcy5zbGlkZUluZGV4ID0gbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1NsaWRlcyhuKSB7XHJcbiAgICAgICAgY29uc3QgdG90YWxJbWFnZXMgPSB0aGlzLmltYWdlc0xpbmsubGVuZ3RoO1xyXG4gICAgICAgIGlmIChuID4gdG90YWxJbWFnZXMpIHsgdGhpcy5zbGlkZUluZGV4ID0gMSB9XHJcbiAgICAgICAgaWYgKG4gPCAxKSB7IHRoaXMuc2xpZGVJbmRleCA9IHRvdGFsSW1hZ2VzIC0gMSB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbEltYWdlczsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzTGlua1tpXS5oaWRlSW1hZ2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmltYWdlc0xpbmtbdGhpcy5zbGlkZUluZGV4IC0gMV0uaGlkZUltYWdlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEltZ0RhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMaW5rID0gW3tcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL1JpY2tIdWxiZXJ0L2hkci5qcGdcIixcclxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9UaW1Wb2xsbWVyL3BlcnUuanBnXCIsXHJcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvUmlja0h1bGJlcnQvdXJiYW4uanBnXCIsXHJcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvQ3JhaWdNYy90ZXRvbnMuanBnXCIsXHJcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvS2F0aGxlZW5SZWVkZXIvT09BLmpwZ1wiLFxyXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL1JpY2tIdWxiZXJ0L2NoaWNhZ28uanBnXCIsXHJcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxyXG4gICAgICAgIH1dXHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdmFyIG1vbnRoTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsIFwiRGVjXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBkYXRlVmFsID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGVWYWwuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZVZhbC5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZVZhbC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHtkYXl9ICR7eWVhcn1gO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpbml0aWFsaXplVGFicygpIHtcclxuICAgICAgICB0aGlzLnRhYnMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93VGFiOiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJJdGluZXJhcnlcIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdhbGxlcnlcIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBob3RvZ3JhcGhlcnNcIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYi5zaG93VGFiID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuVGFicyh0YWJOdW1iZXI6IG51bWJlcikgeyAgXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYi5zaG93VGFiID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYk51bWJlcl0uc2hvd1RhYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYiA9IHRoaXMudGFic1t0YWJOdW1iZXJdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BzTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3BzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcHNDb21wb25lbnQge1xyXG5cdHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHRwcml2YXRlIHN0YXJ0RGF0ZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgZW5kRGF0ZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgbG9jYXRpb25JZExpc3Q6c3RyaW5nO1xyXG5cdHByaXZhdGUgY2F0ZWdvcnlMaXN0OnN0cmluZztcclxuXHRwcml2YXRlIG1pblByaWNlOm51bWJlcjtcclxuXHRwcml2YXRlIG1heFByaWNlOm51bWJlcjtcclxuICAgIHByaXZhdGUgaGlkZUZpbHRlcjogYm9vbGVhbjtcclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSB3b3Jrc2hvcHNQZXJQYWdlOiBudW1iZXIgPSA4O1x0XHJcblx0XHJcblx0cHJpdmF0ZSBnbG9iYWxDb25zdGFudHM6R2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHRcclxuXHRAVmlld0NoaWxkKFdvcmtzaG9wc0xpc3RDb21wb25lbnQpIHdvcmtzaG9wc0xpc3RDaGlsZENvbXA6V29ya3Nob3BzTGlzdENvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpXHJcblx0e1xyXG5cdFx0dGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG5cdFx0dGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVGaWx0ZXJEcm9wZG93bihldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gZXZlbnQ7XHJcblx0fVxyXG5cdFxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdHRoaXMuc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdHRoaXMuZW5kRGF0ZSA9IGAkeyh0b2RheS5nZXRGdWxsWWVhcigpKzEwKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XHJcblx0XHR9XHJcblx0XHJcblx0dXBkYXRlVXJsKClcclxuXHR7XHJcblx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wcz9zdGFydERhdGVGaWx0ZXI9JHt0aGlzLnN0YXJ0RGF0ZX0mZW5kRGF0ZUZpbHRlcj0ke3RoaXMuZW5kRGF0ZX1gO1xyXG5cdFx0aWYodGhpcy5sb2NhdGlvbklkTGlzdCAhPSBudWxsICYmIHRoaXMubG9jYXRpb25JZExpc3QgIT0gXCJcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMucXVlcnl9JmxvY2F0aW9uSWRGaWx0ZXI9JHt0aGlzLmxvY2F0aW9uSWRMaXN0fWA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuY2F0ZWdvcnlMaXN0ICE9IG51bGwgJiYgdGhpcy5jYXRlZ29yeUxpc3QgIT0gXCJcIilcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMucXVlcnl9JndvcmtzaG9wVHlwZT0ke3RoaXMuY2F0ZWdvcnlMaXN0fWA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKHRoaXMubWluUHJpY2UgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0mbWluUHJpY2U9JHt0aGlzLm1pblByaWNlLnRvU3RyaW5nKCl9YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5tYXhQcmljZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLnF1ZXJ5fSZtYXhQcmljZT0ke3RoaXMubWF4UHJpY2UudG9TdHJpbmcoKX1gO1xyXG5cdFx0fVxyXG4gICAgICAgIFxyXG5cdFx0aWYodGhpcy5xdWVyeSkge1xyXG5cdFx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YSh0aGlzLnF1ZXJ5LCAxLCB0aGlzLndvcmtzaG9wc1BlclBhZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICBzZXRGcm9tRGF0ZShmcm9tRGF0ZTogYW55KVxyXG5cdHtcclxuICAgICAgICBsZXQgcHJldmlvdXNTdGFydERhdGUgPSB0aGlzLnN0YXJ0RGF0ZTtcclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGAke2Zyb21EYXRlLnllYXJ9LyR7ZnJvbURhdGUubW9udGh9LyR7ZnJvbURhdGUuZGF5fWA7XHJcblx0XHRpZih0aGlzLnN0YXJ0RGF0ZSA9PSBcIjAvMC8wXCIpXHJcblx0XHR7XHJcblx0XHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHRoaXMuc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdH1cclxuICAgICAgICBcclxuICAgICAgICBpZihwcmV2aW91c1N0YXJ0RGF0ZSAhPT0gdGhpcy5zdGFydERhdGUpXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhcnREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHRvZ2dsZUZpbHRlcigpIHtcclxuXHRcdHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdHNldFRvRGF0ZSh0b0RhdGU6IGFueSlcclxuXHR7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzRW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBgJHt0b0RhdGUueWVhcn0vJHt0b0RhdGUubW9udGh9LyR7dG9EYXRlLmRheX1gO1xyXG5cdFx0aWYodGhpcy5lbmREYXRlID09IFwiMC8wLzBcIilcclxuXHRcdHtcclxuXHRcdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dGhpcy5lbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICBpZihwcmV2aW91c0VuZERhdGUgIT0gdGhpcy5lbmREYXRlKVxyXG4gICAgICAgIHtcclxuXHRcdCAgICB0aGlzLnVwZGF0ZVVybCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVuZERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRcclxuXHRzZXRMb2NhdGlvbklkTGlzdChsb2NhdGlvbklkTGlzdDogYW55KVxyXG5cdHtcclxuICAgICAgICBpZihsb2NhdGlvbklkTGlzdCAhPSB0aGlzLmxvY2F0aW9uSWRMaXN0KVxyXG4gICAgICAgIHtcclxuXHRcdCAgICB0aGlzLmxvY2F0aW9uSWRMaXN0ID0gbG9jYXRpb25JZExpc3Q7XHJcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbklkTGlzdCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRzZXRDYXRlZ29yeUxpc3QoY2F0ZWdvcnlMaXN0OiBhbnkpXHJcblx0e1xyXG4gICAgICAgIGlmKGNhdGVnb3J5TGlzdCAhPSB0aGlzLmNhdGVnb3J5TGlzdClcclxuICAgICAgICB7XHJcblx0XHQgICAgdGhpcy5jYXRlZ29yeUxpc3QgPSBjYXRlZ29yeUxpc3Q7XHJcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcnlMaXN0KTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdFxyXG5cdHNldE1pblByaWNlKG1pblByaWNlOiBudW1iZXIpXHJcblx0e1xyXG4gICAgICAgIGlmKHRoaXMubWluUHJpY2UgIT0gbWluUHJpY2UpXHJcbiAgICAgICAge1xyXG5cdFx0ICAgIHRoaXMubWluUHJpY2UgPSBtaW5QcmljZTtcclxuXHRcdCAgICB0aGlzLnVwZGF0ZVVybCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtaW5QcmljZSk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRzZXRNYXhQcmljZShtYXhQcmljZTogbnVtYmVyKVxyXG5cdHtcclxuICAgICAgICBpZih0aGlzLm1heFByaWNlICE9IG1heFByaWNlKVxyXG4gICAgICAgIHtcclxuXHRcdCAgICB0aGlzLm1heFByaWNlID0gbWF4UHJpY2U7XHJcblx0XHQgICAgdGhpcy51cGRhdGVVcmwoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWF4UHJpY2UpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXHJcbiAqL1xyXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcclxuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XHJcblxyXG4vLyBBcHBcclxuXHJcbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xyXG5cclxuLyoqXHJcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXHJcbiAqL1xyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHByZXNzIFZpZXdcclxuICovXHJcbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcclxuXHJcbi8qKlxyXG4gKiBFbmFibGUgY29tcHJlc3Npb25cclxuICovXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vKipcclxuICogc2VydmUgc3RhdGljIGZpbGVzXHJcbiAqL1xyXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcclxuXHJcbi8qKlxyXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxyXG4gKi9cclxuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XHJcblxyXG4vKipcclxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuICByZXMucmVuZGVyKCdpbmRleCcsIHtcclxuICAgIHJlcSxcclxuICAgIHJlcyxcclxuICAgIG5nTW9kdWxlOiBBcHBNb2R1bGUsXHJcbiAgICBwcmVib290OiBmYWxzZSxcclxuICAgIGJhc2VVcmw6ICcvJyxcclxuICAgIHJlcXVlc3RVcmw6IHJlcS5vcmlnaW5hbFVybCxcclxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1c2UgdW5pdmVyc2FsIGZvciBzcGVjaWZpYyByb3V0ZXNcclxuICovXHJcbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XHJcbnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XHJcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcclxuICovXHJcblxyXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcclxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XHJcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiBcIltteWRwZm9jdXNdXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KFwibXlkcGZvY3VzXCIpIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gICAgLy8gRm9jdXMgdG8gZWxlbWVudDogaWYgdmFsdWUgMCA9IGRvbid0IHNldCBmb2N1cywgMSA9IHNldCBmb2N1c1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIiwgW10pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGF5LWxhYmVscy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tb250aC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXItZGF5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci1tb250aC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXIteWVhci5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktd2Vlay5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbG9jYWxlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1kYXRlLW1vZGVsLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1pbnB1dC1maWVsZC1jaGFuZ2VkLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1pbnB1dC1mb2N1cy1ibHVyLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS13ZWVrZGF5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW1hcmtlZC1kYXRlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tYXJrZWQtZGF0ZXMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWRlZmF1bHQtbW9udGguaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LXNlbGVjdG9yLmludGVyZmFjZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9pbnRlcmZhY2VzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmLCBSZW5kZXJlciwgVmlld0NoaWxkLCBmb3J3YXJkUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IElNeURhdGUsIElNeURhdGVSYW5nZSwgSU15TW9udGgsIElNeUNhbGVuZGFyRGF5LCBJTXlDYWxlbmRhck1vbnRoLCBJTXlDYWxlbmRhclllYXIsIElNeVdlZWssIElNeURheUxhYmVscywgSU15TW9udGhMYWJlbHMsIElNeU9wdGlvbnMsIElNeURhdGVNb2RlbCwgSU15SW5wdXRGaWVsZENoYW5nZWQsIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsIElNeUlucHV0Rm9jdXNCbHVyLCBJTXlNYXJrZWREYXRlcywgSU15TWFya2VkRGF0ZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLmxvY2FsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlXCI7XHJcblxyXG4vLyB3ZWJwYWNrMV9cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5jb25zdCBteURwU3R5bGVzOiBzdHJpbmcgPSByZXF1aXJlKFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzXCIpO1xyXG5jb25zdCBteURwVHBsOiBzdHJpbmcgPSByZXF1aXJlKFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFwiKTtcclxuLy8gd2VicGFjazJfXHJcblxyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNeURhdGVQaWNrZXIpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmVudW0gQ2FsVG9nZ2xlIHtPcGVuID0gMSwgQ2xvc2VCeURhdGVTZWwgPSAyLCBDbG9zZUJ5Q2FsQnRuID0gMywgQ2xvc2VCeU91dENsaWNrID0gNCwgQ2xvc2VCeUVzYyA9IDUsIENsb3NlQnlBcGkgPSA2fVxyXG5lbnVtIFllYXIge21pbiA9IDExMDAsIG1heCA9IDkxMDB9XHJcbmVudW0gSW5wdXRGb2N1c0JsdXIge2ZvY3VzID0gMSwgYmx1ciA9IDJ9XHJcbmVudW0gS2V5Q29kZSB7ZW50ZXIgPSAxMywgZXNjID0gMjcsIHNwYWNlID0gMzJ9XHJcbmVudW0gTW9udGhJZCB7cHJldiA9IDEsIGN1cnIgPSAyLCBuZXh0ID0gM31cclxuXHJcbmNvbnN0IE1NID0gXCJtbVwiO1xyXG5jb25zdCBNTU0gPSBcIm1tbVwiO1xyXG5jb25zdCBERCA9IFwiZGRcIjtcclxuY29uc3QgWVlZWSA9IFwieXl5eVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1kYXRlLXBpY2tlclwiLFxyXG4gICAgZXhwb3J0QXM6IFwibXlkYXRlcGlja2VyXCIsXHJcbiAgICBzdHlsZXM6IFtteURwU3R5bGVzXSxcclxuICAgIHRlbXBsYXRlOiBteURwVHBsLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE15RGF0ZVBpY2tlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogSU15T3B0aW9ucztcclxuICAgIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWxEYXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VsZWN0b3I6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQE91dHB1dCgpIGRhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15RGF0ZU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15RGF0ZU1vZGVsPigpO1xyXG4gICAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcclxuICAgIEBPdXRwdXQoKSBjYWxlbmRhclZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2FsZW5kYXJUb2dnbGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG4gICAgQFZpZXdDaGlsZChcInNlbGVjdG9yRWxcIikgc2VsZWN0b3JFbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbnB1dEJveEVsXCIpIGlucHV0Qm94RWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICAgIHNob3dTZWxlY3RvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xyXG4gICAgc2VsZWN0ZWRNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgIHNlbGVjdGVkRGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICAgIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBkYXRlczogQXJyYXk8SU15V2Vlaz4gPSBbXTtcclxuICAgIG1vbnRoczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJNb250aD4+ID0gW107XHJcbiAgICB5ZWFyczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJZZWFyPj4gPSBbXTtcclxuICAgIHNlbGVjdGlvbkRheVR4dDogc3RyaW5nID0gXCJcIjtcclxuICAgIGludmFsaWREYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkaXNhYmxlVG9kYXlCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRheUlkeDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZWxlY3RNb250aDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0WWVhcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByZXZNb250aERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBuZXh0TW9udGhEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJldlllYXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbmV4dFllYXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJldlllYXJzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5leHRZZWFyc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJldk1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQucHJldjtcclxuICAgIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgICBuZXh0TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5uZXh0O1xyXG5cclxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xyXG4gICAgb3B0czogSU15T3B0aW9ucyA9IHtcclxuICAgICAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+IHt9LFxyXG4gICAgICAgIG1vbnRoTGFiZWxzOiA8SU15TW9udGhMYWJlbHM+IHt9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IDxzdHJpbmc+IFwiXCIsXHJcbiAgICAgICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICB0b2RheUJ0blR4dDogPHN0cmluZz4gXCJcIixcclxuICAgICAgICBmaXJzdERheU9mV2VlazogPHN0cmluZz4gXCJcIixcclxuICAgICAgICBzYXRIaWdobGlnaHQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBzdW5IaWdobGlnaHQ6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGhpZ2hsaWdodERhdGVzOiA8QXJyYXk8SU15RGF0ZT4+IFtdLFxyXG4gICAgICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtYXJrQ3VycmVudE1vbnRoOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtYXJrQ3VycmVudFllYXI6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVVbnRpbDogPElNeURhdGU+IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfSxcclxuICAgICAgICBkaXNhYmxlU2luY2U6IDxJTXlEYXRlPiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXHJcbiAgICAgICAgZGlzYWJsZURheXM6IDxBcnJheTxJTXlEYXRlPj4gW10sXHJcbiAgICAgICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGU+PiBbXSxcclxuICAgICAgICBtYXJrRGF0ZXM6IDxBcnJheTxJTXlNYXJrZWREYXRlcz4+IFtdLFxyXG4gICAgICAgIG1hcmtXZWVrZW5kczogPElNeU1hcmtlZERhdGU+IHt9LFxyXG4gICAgICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj4gW10sXHJcbiAgICAgICAgZGlzYWJsZVdlZWtlbmRzOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZVdlZWtkYXlzOiA8QXJyYXk8c3RyaW5nPj4gW10sXHJcbiAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0OiA8c3RyaW5nPiBcIjM0cHhcIixcclxuICAgICAgICB3aWR0aDogPHN0cmluZz4gXCIxMDAlXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+IFwiMTRweFwiLFxyXG4gICAgICAgIHNlbGVjdG9ySGVpZ2h0OiA8c3RyaW5nPiBcIjIzMnB4XCIsXHJcbiAgICAgICAgc2VsZWN0b3JXaWR0aDogPHN0cmluZz4gXCIyNTJweFwiLFxyXG4gICAgICAgIGFsbG93RGVzZWxlY3REYXRlOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaW5saW5lOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc2hvd0NsZWFyRGF0ZUJ0bjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgc2hvd0RlY3JlYXNlRGF0ZUJ0bjogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIHNob3dJbmNyZWFzZURhdGVCdG46IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBvcGVuU2VsZWN0b3JUb3BPZklucHV0OiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaW5kaWNhdGVJbnZhbGlkRGF0ZTogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgZWRpdGFibGVEYXRlRmllbGQ6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1vbnRoU2VsZWN0b3I6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHllYXJTZWxlY3RvcjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZUhlYWRlckJ1dHRvbnM6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1pblllYXI6IDxudW1iZXI+IFllYXIubWluLFxyXG4gICAgICAgIG1heFllYXI6IDxudW1iZXI+IFllYXIubWF4LFxyXG4gICAgICAgIGNvbXBvbmVudERpc2FibGVkOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHNob3dJbnB1dEZpZWxkOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBvcGVuU2VsZWN0b3JPbklucHV0Q2xpY2s6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxJbnB1dEZpZWxkOiA8c3RyaW5nPiBcIkRhdGUgaW5wdXQgZmllbGRcIixcclxuICAgICAgICBhcmlhTGFiZWxDbGVhckRhdGU6IDxzdHJpbmc+IFwiQ2xlYXIgRGF0ZVwiLFxyXG4gICAgICAgIGFyaWFMYWJlbERlY3JlYXNlRGF0ZTogPHN0cmluZz4gXCJEZWNyZWFzZSBEYXRlXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsSW5jcmVhc2VEYXRlOiA8c3RyaW5nPiBcIkluY3JlYXNlIERhdGVcIixcclxuICAgICAgICBhcmlhTGFiZWxPcGVuQ2FsZW5kYXI6IDxzdHJpbmc+IFwiT3BlbiBDYWxlbmRhclwiLFxyXG4gICAgICAgIGFyaWFMYWJlbFByZXZNb250aDogPHN0cmluZz4gXCJQcmV2aW91cyBNb250aFwiLFxyXG4gICAgICAgIGFyaWFMYWJlbE5leHRNb250aDogPHN0cmluZz4gXCJOZXh0IE1vbnRoXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsUHJldlllYXI6IDxzdHJpbmc+IFwiUHJldmlvdXMgWWVhclwiLFxyXG4gICAgICAgIGFyaWFMYWJlbE5leHRZZWFyOiA8c3RyaW5nPiBcIk5leHQgWWVhclwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICAgICAgcmVuZGVyZXIubGlzdGVuR2xvYmFsKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IgJiYgZXZlbnQudGFyZ2V0ICYmIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5tb250aFNlbGVjdG9yIHx8IHRoaXMub3B0cy55ZWFyU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRNb250aFllYXJTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9wdHM6IElNeU9wdGlvbnMgPSB0aGlzLmxvY2FsZVNlcnZpY2UuZ2V0TG9jYWxlT3B0aW9ucyh0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAoPElNeU9wdGlvbnM+dGhpcy5vcHRzKVtrXSA9IG9wdHNba107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3B0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAoPElNeU9wdGlvbnM+dGhpcy5vcHRzKVtrXSA9IHRoaXMub3B0aW9uc1trXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdHMubWluWWVhciA8IFllYXIubWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gWWVhci5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA+IFllYXIubWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5tYXhZZWFyID0gWWVhci5tYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0b3JUb3BQb3NpdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMub3BlblNlbGVjdG9yVG9wT2ZJbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldE1vbnRoWWVhclNlbGVjdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RNb250aENsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSAhdGhpcy5zZWxlY3RNb250aDtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW9udGgpIHtcclxuICAgICAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93OiBBcnJheTxJTXlDYWxlbmRhck1vbnRoPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhciwgbW9udGg6IGosIGRheTogdGhpcy5kYXlzSW5Nb250aChqLCB0aGlzLnZpc2libGVNb250aC55ZWFyKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1vbnRoOiBqLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh7bmJyOiBqLCBuYW1lOiB0aGlzLm9wdHMubW9udGhMYWJlbHNbal0sIGN1cnJNb250aDogaiA9PT0gdG9kYXkubW9udGggJiYgdGhpcy52aXNpYmxlTW9udGgueWVhciA9PT0gdG9kYXkueWVhciwgc2VsZWN0ZWQ6IGogPT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkaXNhYmxlZDogZGlzYWJsZWR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJNb250aCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYzogYm9vbGVhbiA9IGNlbGwubmJyICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icjtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQoY2VsbC5uYnIpLCBtb250aE5icjogY2VsbC5uYnIsIHllYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXJ9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihjZWxsLm5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgbWMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhck1vbnRoKSB7XHJcbiAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Nb250aENlbGxDbGlja2VkKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdFllYXJDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSAhdGhpcy5zZWxlY3RZZWFyO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0WWVhcikge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlWWVhcnModGhpcy52aXNpYmxlTW9udGgueWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNlbGxDbGlja2VkKGNlbGw6IElNeUNhbGVuZGFyWWVhcik6IHZvaWQge1xyXG4gICAgICAgIGxldCB5YzogYm9vbGVhbiA9IGNlbGwueWVhciAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcjtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQsIG1vbnRoTmJyOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeWVhcjogY2VsbC55ZWFyfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGNlbGwueWVhciwgeWMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJZZWFyKSB7XHJcbiAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25ZZWFyQ2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldlllYXJzKGV2ZW50OiBhbnksIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh5ZWFyIC0gMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dFllYXJzKGV2ZW50OiBhbnksIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh5ZWFyICsgMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlWWVhcnMoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0geWVhcjsgaSA8PSAyMCArIHllYXI7IGkgKz0gNSkge1xyXG4gICAgICAgICAgICBsZXQgcm93OiBBcnJheTxJTXlDYWxlbmRhclllYXI+ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgaSArIDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogaiwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IHRoaXMuZGF5c0luTW9udGgodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGopfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiBqLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbk1heDogYm9vbGVhbiA9IGogPCB0aGlzLm9wdHMubWluWWVhciB8fCBqID4gdGhpcy5vcHRzLm1heFllYXI7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaCh7eWVhcjogaiwgY3VyclllYXI6IGogPT09IHRvZGF5LnllYXIsIHNlbGVjdGVkOiBqID09PSB0aGlzLnZpc2libGVNb250aC55ZWFyLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgbWluTWF4fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldlllYXJzRGlzYWJsZWQgPSB0aGlzLnllYXJzWzBdWzBdLnllYXIgPD0gdGhpcy5vcHRzLm1pblllYXIgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogdGhpcy55ZWFyc1swXVswXS55ZWFyIC0gMSwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IHRoaXMuZGF5c0luTW9udGgodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMueWVhcnNbMF1bMF0ueWVhciAtIDEpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgICAgdGhpcy5uZXh0WWVhcnNEaXNhYmxlZCA9IHRoaXMueWVhcnNbNF1bNF0ueWVhciA+PSB0aGlzLm9wdHMubWF4WWVhciB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB0aGlzLnllYXJzWzRdWzRdLnllYXIgKyAxLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlckRhdGVJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5tb250aExhYmVscywgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5kYXkgIT09IDAgJiYgZGF0ZS5tb250aCAhPT0gMCAmJiBkYXRlLnllYXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlLCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkSW5wdXRGaWVsZENoYW5nZWQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXNJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHtyZWFzb246IElucHV0Rm9jdXNCbHVyLmZvY3VzLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVySW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgICAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoe3JlYXNvbjogSW5wdXRGb2N1c0JsdXIuYmx1ciwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VTZWxlY3RvcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZXNjICYmIHRoaXMuc2hvd1NlbGVjdG9yICYmICF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUVzYyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHt2YWx1ZTogdmFsdWUsIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LCB2YWxpZDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVG9kYXlEaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVUb2RheUJ0biA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheSh0aGlzLmdldFRvZGF5KCksIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcclxuICAgICAgICBsZXQgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtEYXlzKCk7XHJcbiAgICAgICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQoKTtcclxuICAgICAgICB0aGlzLmRheUlkeCA9IHdlZWtEYXlzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcclxuICAgICAgICBpZiAodGhpcy5kYXlJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHg6IG51bWJlciA9IHRoaXMuZGF5SWR4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtEYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtEYXlzLnB1c2godGhpcy5vcHRzLmRheUxhYmVsc1t3ZWVrRGF5c1tpZHhdXSk7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB3ZWVrRGF5c1tpZHhdID09PSBcInNhXCIgPyAwIDogaWR4ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgKHZhbHVlW1wiZGF0ZVwiXSB8fCB2YWx1ZVtcImpzZGF0ZVwiXSB8fCB2YWx1ZVtcImZvcm1hdHRlZFwiXSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZVtcImRhdGVcIl0gPyB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlW1wiZGF0ZVwiXSkgOiB2YWx1ZVtcImpzZGF0ZVwiXSA/IHRoaXMucGFyc2VTZWxlY3RlZERhdGUodGhpcy5qc0RhdGVUb015RGF0ZSh2YWx1ZVtcImpzZGF0ZVwiXSkpIDogdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVtcImZvcm1hdHRlZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBjdmM6IGJvb2xlYW4gPSB0aGlzLnZpc2libGVNb250aC55ZWFyICE9PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyIHx8IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyICE9PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aDtcclxuICAgICAgICAgICAgaWYgKGN2Yykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0aGlzLnNlbGVjdGVkRGF0ZS5tb250aF0sIG1vbnRoTmJyOiB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCwgeWVhcjogdGhpcy5zZWxlY3RlZERhdGUueWVhcn07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5zZWxlY3RlZERhdGUubW9udGgsIHRoaXMuc2VsZWN0ZWREYXRlLnllYXIsIGN2Yyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRzLmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoe3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wdHMuY29tcG9uZW50RGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBzOiBhbnkgPSBjaGFuZ2VzW1wic2VsZWN0b3JcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLm9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoQ2FsVG9nZ2xlLk9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlBcGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwicGxhY2Vob2xkZXJcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNoYW5nZXNbXCJwbGFjZWhvbGRlclwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcImxvY2FsZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGNoYW5nZXNbXCJsb2NhbGVcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gY2hhbmdlc1tcImRpc2FibGVkXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzW1wib3B0aW9uc1wiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndlZWtEYXlzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgbGV0IGRtQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0TW9udGhcIikpIHtcclxuICAgICAgICAgICAgbGV0IGRtOiBhbnkgPSBjaGFuZ2VzW1wiZGVmYXVsdE1vbnRoXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkbSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgZG0gPSBkbS5kZWZNb250aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZG0gIT09IG51bGwgJiYgZG0gIT09IHVuZGVmaW5lZCAmJiBkbSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5wYXJzZVNlbGVjdGVkTW9udGgoZG0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG1DaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJzZWxEYXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBzZDogYW55ID0gY2hhbmdlc1tcInNlbERhdGVcIl07XHJcbiAgICAgICAgICAgIGlmIChzZC5jdXJyZW50VmFsdWUgIT09IG51bGwgJiYgc2QuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQgJiYgc2QuY3VycmVudFZhbHVlICE9PSBcIlwiICYmIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMucGFyc2VTZWxlY3RlZERhdGUoc2QuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VDYih0aGlzLmdldERhdGVNb2RlbCh0aGlzLnNlbGVjdGVkRGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2xlYXIgb24gaW5pdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFzZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVNb250aC55ZWFyID09PSAwICYmIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyID09PSAwIHx8IGRtQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVNb250aC5tb250aFR4dCA9IHRoaXMub3B0cy5tb250aExhYmVsc1t0aGlzLnZpc2libGVNb250aC5tb250aE5icl07XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlbW92ZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlY3JlYXNlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBEZWNyZWFzZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZUluY3JlYXNlRGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluY3JlYXNlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbmNyZWFzZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZUluY3JlYXNlRGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWxlY3RvciBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoQ2FsVG9nZ2xlLk9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQocmVhc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KHJlYXNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldHMgdmlzaWJsZSBtb250aCBvZiBjYWxlbmRhclxyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSAwLCBtOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyID09PSAwICYmIHRoaXMuc2VsZWN0ZWRNb250aC5tb250aE5iciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgICAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgICAgICAgICBtID0gdG9kYXkubW9udGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZE1vbnRoLnllYXI7XHJcbiAgICAgICAgICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeX07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldk1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuXHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeX07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dE1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5leHQgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmV2WWVhcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBQcmV2aW91cyB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aC55ZWFyLS07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5leHQgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2RheUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVG9kYXkgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5LCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMuaW5saW5lICYmIHRvZGF5LnllYXIgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIgfHwgdG9kYXkubW9udGggIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbdG9kYXkubW9udGhdLCBtb250aE5icjogdG9kYXkubW9udGgsIHllYXI6IHRvZGF5LnllYXJ9O1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodG9kYXkubW9udGgsIHRvZGF5LnllYXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNlbGxDbGlja2VkKGNlbGw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgICAgICBpZiAoY2VsbC5jbW8gPT09IHRoaXMucHJldk1vbnRoSWQpIHtcclxuICAgICAgICAgICAgLy8gUHJldmlvdXMgbW9udGggZGF5XHJcbiAgICAgICAgICAgIHRoaXMub25QcmV2TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hbGxvd0Rlc2VsZWN0RGF0ZSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzU2FtZURhdGUoY2VsbC5kYXRlT2JqLCB0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoY2VsbC5kYXRlT2JqLCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgICAgICAgIHRoaXMub25OZXh0TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhclNlbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAgICAgLy8gQ2VsbCBrZXlib2FyZCBoYW5kbGluZ1xyXG4gICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBDbGVhcnMgdGhlIGRhdGUgYW5kIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtkYXRlOiBkYXRlLCBqc2RhdGU6IG51bGwsIGZvcm1hdHRlZDogXCJcIiwgZXBvYzogMH0pO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvSW5wdXRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZUluY3JlYXNlRGF0ZShkZWNyZWFzZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlcyBvciBpbmNyZWFzZXMgdGhlIGRhdGUgZGVwZW5kaW5nIG9uIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICBkLnNldERhdGUoZGVjcmVhc2UgPyBkLmdldERhdGUoKSAtIDEgOiBkLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgICAgICBkYXRlID0ge3llYXI6IGQuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGQuZ2V0TW9udGgoKSArIDEsIGRheTogZC5nZXREYXRlKCl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUsIENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUsIGNsb3NlUmVhc29uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBEYXRlIHNlbGVjdGVkLCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgICAgIGxldCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdChkYXRlTW9kZWwpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChjbG9zZVJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvSW5wdXRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGb2N1c1RvSW5wdXRCb3goKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJveEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRlVmFsdWUoZGF0ZTogSU15RGF0ZSwgY2xlYXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyBcIlwiIDogdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7dmFsdWU6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LCBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdmFsaWQ6ICFjbGVhcn0pO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlTW9kZWwoZGF0ZTogSU15RGF0ZSk6IElNeURhdGVNb2RlbCB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGRhdGUgbW9kZWwgb2JqZWN0IGZyb20gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICAgIHJldHVybiB7ZGF0ZTogZGF0ZSwganNkYXRlOiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIGZvcm1hdHRlZDogdGhpcy5mb3JtYXREYXRlKGRhdGUpLCBlcG9jOiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKX07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlWmVybyh2YWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWwpIDwgMTAgPyBcIjBcIiArIHZhbCA6IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZXR1cm5zIGZvcm1hdHRlZCBkYXRlIHN0cmluZywgaWYgbW1tIGlzIHBhcnQgb2YgZGF0ZUZvcm1hdCByZXR1cm5zIG1vbnRoIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZDogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQucmVwbGFjZShZWVlZLCB2YWwueWVhcikucmVwbGFjZShERCwgdGhpcy5wcmVaZXJvKHZhbC5kYXkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRzLmRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMSA/IGZvcm1hdHRlZC5yZXBsYWNlKE1NTSwgdGhpcy5tb250aFRleHQodmFsLm1vbnRoKSkgOiBmb3JtYXR0ZWQucmVwbGFjZShNTSwgdGhpcy5wcmVaZXJvKHZhbC5tb250aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbnRoVGV4dChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICAgIH1cclxuXHJcbiAgICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBNb250aCBzdGFydCBpbmRleFxyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldERhdGUoMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChtIC0gMSk7XHJcbiAgICAgICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgICAgICBsZXQgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XHJcbiAgICAgICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aChtOiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheXNJblByZXZNb250aChtOiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHksIG0sIDEpO1xyXG4gICAgICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0N1cnJEYXkoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlciwgY21vOiBudW1iZXIsIHRvZGF5OiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxyXG4gICAgICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kYXkoKTogSU15RGF0ZSB7XHJcbiAgICAgICAgbGV0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKX07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtkYXkoZGF0ZTogSU15RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gR2V0IHdlZWtkYXk6IHN1LCBtbywgdHUsIHdlIC4uLlxyXG4gICAgICAgIGxldCB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla0RheXMoKTtcclxuICAgICAgICByZXR1cm4gd2Vla0RheXNbdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYSBkYXRlIG9iamVjdCBmcm9tIGdpdmVuIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN1bmRheUlkeCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhbGVuZGFyKG06IG51bWJlciwgeTogbnVtYmVyLCBub3RpZnlDaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIGxldCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XHJcbiAgICAgICAgbGV0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xyXG4gICAgICAgIGxldCBkSW5QcmV2TTogbnVtYmVyID0gdGhpcy5kYXlzSW5QcmV2TW9udGgobSwgeSk7XHJcblxyXG4gICAgICAgIGxldCBkYXlOYnI6IG51bWJlciA9IDE7XHJcbiAgICAgICAgbGV0IGNtbzogbnVtYmVyID0gdGhpcy5wcmV2TW9udGhJZDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgd2VlazogQXJyYXk8SU15Q2FsZW5kYXJEYXk+ID0gW107XHJcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCB3ZWVrXHJcbiAgICAgICAgICAgICAgICBsZXQgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBwbTsgaiA8PSBkSW5QcmV2TTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IGp9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGosIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgbW9udGhcclxuICAgICAgICAgICAgICAgIGxldCBkYXlzTGVmdDogbnVtYmVyID0gNyAtIHdlZWsubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZGF5TmJyfTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5TmJyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBtb250aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlOYnIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbW8gPSB0aGlzLm5leHRNb250aElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBjbW8gPT09IHRoaXMubmV4dE1vbnRoSWQgJiYgbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogY21vID09PSB0aGlzLm5leHRNb250aElkICYmIG0gPCAxMiA/IG0gKyAxIDogMSwgZGF5OiBkYXlOYnJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHRoaXMub3B0cy5zdW5IaWdobGlnaHQsIHRoaXMub3B0cy5zYXRIaWdobGlnaHQsIHRoaXMub3B0cy5oaWdobGlnaHREYXRlcyl9KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd2Vla05icjogbnVtYmVyID0gdGhpcy5vcHRzLnNob3dXZWVrTnVtYmVycyAgJiYgdGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrID09PSBcIm1vXCIgPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaCh7d2Vlazogd2Vlaywgd2Vla05icjogd2Vla05icn0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG0sIHkpO1xyXG5cclxuICAgICAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe3llYXI6IHksIG1vbnRoOiBtLCBmaXJzdDoge251bWJlcjogMSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiAxfSl9LCBsYXN0OiB7bnVtYmVyOiBkSW5UaGlzTSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkSW5UaGlzTX0pfX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVNlbGVjdGVkRGF0ZShzZWxEYXRlOiBhbnkpOiBJTXlEYXRlIHtcclxuICAgICAgICAvLyBQYXJzZSBkYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxyXG4gICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge2RheTogMCwgbW9udGg6IDAsIHllYXI6IDB9O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBsZXQgc2Q6IHN0cmluZyA9IDxzdHJpbmc+IHNlbERhdGU7XHJcbiAgICAgICAgICAgIGxldCBkZjogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQ7XHJcblxyXG4gICAgICAgICAgICBkYXRlLm1vbnRoID0gZGYuaW5kZXhPZihNTU0pICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGYsIHNkLCBNTU0sIHRoaXMub3B0cy5tb250aExhYmVscylcclxuICAgICAgICAgICAgICAgIDogdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TnVtYmVyKGRmLCBzZCwgTU0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRmLmluZGV4T2YoTU1NKSAhPT0gLTEgJiYgdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2RhdGUubW9udGhdKSB7XHJcbiAgICAgICAgICAgICAgICBkZiA9IHRoaXMudXRpbFNlcnZpY2UuY2hhbmdlRGF0ZUZvcm1hdChkZiwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2RhdGUubW9udGhdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGUuZGF5ID0gdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TnVtYmVyKGRmLCBzZCwgREQpO1xyXG4gICAgICAgICAgICBkYXRlLnllYXIgPSB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBZWVlZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbERhdGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHNlbERhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGpzRGF0ZVRvTXlEYXRlKGRhdGU6IERhdGUpOiBJTXlEYXRlIHtcclxuICAgICAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU2VsZWN0ZWRNb250aChtczogc3RyaW5nKTogSU15TW9udGgge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG06IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRwbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkcHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgZG5tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRueTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IHRoaXMuZGF5c0luTW9udGgobSA9PT0gMSA/IDEyIDogbSAtIDEsIG0gPT09IDEgPyB5IC0gMSA6IHkpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgICAgICAgIGRweSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHkgLSAxLCBtb250aDogbSwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICAgICAgICBkbm0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSwgbW9udGg6IG0gPT09IDEyID8gMSA6IG0gKyAxLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogeSArIDEsIG1vbnRoOiBtLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IG0gPT09IDEgJiYgeSA9PT0gdGhpcy5vcHRzLm1pblllYXIgfHwgZHBtO1xyXG4gICAgICAgIHRoaXMucHJldlllYXJEaXNhYmxlZCA9IHkgLSAxIDwgdGhpcy5vcHRzLm1pblllYXIgfHwgZHB5O1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSBtID09PSAxMiAmJiB5ID09PSB0aGlzLm9wdHMubWF4WWVhciB8fCBkbm07XHJcbiAgICAgICAgdGhpcy5uZXh0WWVhckRpc2FibGVkID0geSArIDEgPiB0aGlzLm9wdHMubWF4WWVhciB8fCBkbnk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tIFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL215LWRhdGUtcGlja2VyLmZvY3VzLmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURhdGVQaWNrZXJNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5tb2R1bGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU15TG9jYWxlcywgSU15T3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxlczogSU15TG9jYWxlcyA9IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VuXCIsIG1vOiBcIk1vblwiLCB0dTogXCJUdWVcIiwgd2U6IFwiV2VkXCIsIHRoOiBcIlRodVwiLCBmcjogXCJGcmlcIiwgc2E6IFwiU2F0XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwibW0vZGQveXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUb2RheVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhlXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi16jXkFwiLCBtbzogXCLXqdegXCIsIHR1OiBcItep15xcIiwgd2U6IFwi16jXkVwiLCB0aDogXCLXl9eeXCIsIGZyOiBcItep15lcIiwgc2E6IFwi16nXkVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLXmdeg15VcIiwgMjogXCLXpNeR16hcIiwgMzogXCLXnteo16VcIiwgNDogXCLXkNek16hcIiwgNTogXCLXnteQ15lcIiwgNjogXCLXmdeV16BcIiwgNzogXCLXmdeV15xcIiwgODogXCLXkNeV15JcIiwgOTogXCLXodek15hcIiwgMTA6IFwi15DXldenXCIsIDExOiBcIteg15XXkVwiLCAxMjogXCLXk9em155cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi15TXmdeV151cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJqYVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuaXpVwiLCBtbzogXCLmnIhcIiwgdHU6IFwi54GrXCIsIHdlOiBcIuawtFwiLCB0aDogXCLmnKhcIiwgZnI6IFwi6YeRXCIsIHNhOiBcIuWcn1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIu+8keaciFwiLCAyOiBcIu+8kuaciFwiLCAzOiBcIu+8k+aciFwiLCA0OiBcIu+8lOaciFwiLCA1OiBcIu+8leaciFwiLCA2OiBcIu+8luaciFwiLCA3OiBcIu+8l+aciFwiLCA4OiBcIu+8mOaciFwiLCA5OiBcIu+8meaciFwiLCAxMDogXCLvvJHvvJDmnIhcIiwgMTE6IFwi77yR77yR5pyIXCIsIDEyOiBcIu+8ke+8kuaciFwifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5Lm1tLmRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuS7iuaXpVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiRGltXCIsIG1vOiBcIkx1blwiLCB0dTogXCJNYXJcIiwgd2U6IFwiTWVyXCIsIHRoOiBcIkpldVwiLCBmcjogXCJWZW5cIiwgc2E6IFwiU2FtXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiSmFuXCIsIDI6IFwiRsOpdlwiLCAzOiBcIk1hclwiLCA0OiBcIkF2clwiLCA1OiBcIk1haVwiLCA2OiBcIkp1aW5cIiwgNzogXCJKdWlsXCIsIDg6IFwiQW/Du1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkTDqWNcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJBdWpvdXJkJ2h1aVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VcIiwgbW86IFwiTWFcIiwgdHU6IFwiVGlcIiwgd2U6IFwiS2VcIiwgdGg6IFwiVG9cIiwgZnI6IFwiUGVcIiwgc2E6IFwiTGFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJUYW1cIiwgMjogXCJIZWxcIiwgMzogXCJNYWFcIiwgNDogXCJIdWhcIiwgNTogXCJUb3VcIiwgNjogXCJLZXNcIiwgNzogXCJIZWlcIiwgODogXCJFbG9cIiwgOTogXCJTeXlcIiwgMTA6IFwiTG9rXCIsIDExOiBcIk1hclwiLCAxMjogXCJKb3VcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUw6Ruw6TDpG5cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlc1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRvXCIsIG1vOiBcIkx1XCIsIHR1OiBcIk1hXCIsIHdlOiBcIk1pXCIsIHRoOiBcIkp1XCIsIGZyOiBcIlZpXCIsIHNhOiBcIlNhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiRW5lXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQWJyXCIsIDU6IFwiTWF5XCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGljXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSG95XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJWYXNcIiwgbW86IFwiSMOpdFwiLCB0dTogXCJLZWRkXCIsIHdlOiBcIlN6ZVwiLCB0aDogXCJDc8O8XCIsIGZyOiBcIlDDqW5cIiwgc2E6IFwiU3pvXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk3DoXJcIiwgNDogXCLDgXByXCIsIDU6IFwiTcOhalwiLCA2OiBcIkrDum5cIiwgNzogXCJKw7psXCIsIDg6IFwiQXVnXCIsIDk6IFwiU3plcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJNYVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3ZcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTw7ZuXCIsIG1vOiBcIk3DpW5cIiwgdHU6IFwiVGlzXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDtnJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIklkYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJubFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlpvblwiLCBtbzogXCJNYWFcIiwgdHU6IFwiRGluXCIsIHdlOiBcIldvZVwiLCB0aDogXCJEb25cIiwgZnI6IFwiVnJpXCIsIHNhOiBcIlphdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNZWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVmFuZGFhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0JLRgVwiLCBtbzogXCLQn9C9XCIsIHR1OiBcItCS0YJcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQp9GCXCIsIGZyOiBcItCf0YJcIiwgc2E6IFwi0KHQsVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLQr9C90LJcIiwgMjogXCLQpNC10LJcIiwgMzogXCLQnNCw0YDRglwiLCA0OiBcItCQ0L/RgFwiLCA1OiBcItCc0LDQuVwiLCA2OiBcItCY0Y7QvdGMXCIsIDc6IFwi0JjRjtC70YxcIiwgODogXCLQkNCy0LNcIiwgOTogXCLQodC10L3RglwiLCAxMDogXCLQntC60YJcIiwgMTE6IFwi0J3QvtGPXCIsIDEyOiBcItCU0LXQulwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQodC10LPQvtC00L3Rj1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidWtcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLQndC0XCIsIG1vOiBcItCf0L1cIiwgdHU6IFwi0JLRglwiLCB3ZTogXCLQodGAXCIsIHRoOiBcItCn0YJcIiwgZnI6IFwi0J/RglwiLCBzYTogXCLQodCxXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItCh0ZbRh1wiLCAyOiBcItCb0Y7RglwiLCAzOiBcItCR0LXRgFwiLCA0OiBcItCa0LLRllwiLCA1OiBcItCi0YDQsFwiLCA2OiBcItCn0LXRgFwiLCA3OiBcItCb0LjQv1wiLCA4OiBcItCh0LXRgFwiLCA5OiBcItCS0LXRgFwiLCAxMDogXCLQltC+0LJcIiwgMTE6IFwi0JvQuNGBXCIsIDEyOiBcItCT0YDRg1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQodGM0L7Qs9C+0LTQvdGWXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJub1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlPDuG5cIiwgbW86IFwiTWFuXCIsIHR1OiBcIlRpclwiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7hyXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJIGRhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiUGF6XCIsIG1vOiBcIlB6dFwiLCB0dTogXCJTYWxcIiwgd2U6IFwiw4dhclwiLCB0aDogXCJQZXJcIiwgZnI6IFwiQ3VtXCIsIHNhOiBcIkNtdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJPY2FcIiwgMjogXCLFnnViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiTmlzXCIsIDU6IFwiTWF5XCIsIDY6IFwiSGF6XCIsIDc6IFwiVGVtXCIsIDg6IFwiQcSfdVwiLCA5OiBcIkV5bFwiLCAxMDogXCJFa2lcIiwgMTE6IFwiS2FzXCIsIDEyOiBcIkFyYVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJCdWfDvG5cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwdC1iclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRvbVwiLCBtbzogXCJTZWdcIiwgdHU6IFwiVGVyXCIsIHdlOiBcIlF1YVwiLCB0aDogXCJRdWlcIiwgZnI6IFwiU2V4XCIsIHNhOiBcIlNhYlwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZXZcIiwgMzogXCJNYXJcIiwgNDogXCJBYnJcIiwgNTogXCJNYWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBZ29cIiwgOTogXCJTZXRcIiwgMTA6IFwiT3V0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXpcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSG9qZVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTb1wiLCBtbzogXCJNb1wiLCB0dTogXCJEaVwiLCB3ZTogXCJNaVwiLCB0aDogXCJEb1wiLCBmcjogXCJGclwiLCBzYTogXCJTYVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNw6RyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGV6XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhldXRlXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpdFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJEb21cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiR2lvXCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYWJcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkdlblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1hZ1wiLCA2OiBcIkdpdVwiLCA3OiBcIkx1Z1wiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdHRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJPZ2dpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpdC1jaFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJEb21cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiR2lvXCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYWJcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkdlblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1hZ1wiLCA2OiBcIkdpdVwiLCA3OiBcIkx1Z1wiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdHRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJPZ2dpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwbFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOaWVcIiwgbW86IFwiUG9uXCIsIHR1OiBcIld0b1wiLCB3ZTogXCLFmnJvXCIsIHRoOiBcIkN6d1wiLCBmcjogXCJQacSFXCIsIHNhOiBcIlNvYlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiU3R5XCIsIDI6IFwiTHV0XCIsIDM6IFwiTWFyXCIsIDQ6IFwiS3dpXCIsIDU6IFwiTWFqXCIsIDY6IFwiQ3plXCIsIDc6IFwiTGlwXCIsIDg6IFwiU2llXCIsIDk6IFwiV3J6XCIsIDEwOiBcIlBhxbpcIiwgMTE6IFwiTGlzXCIsIDEyOiBcIkdydVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEemlzaWFqXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXlcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLhgJDhgJThgIThgLrhgLnhgILhgJThgL3hgLFcIiwgbW86IFwi4YCQ4YCU4YCE4YC64YC54YCc4YCsXCIsIHR1OiBcIuGAoeGAhOGAuuGAueGAguGAq1wiLCB3ZTogXCLhgJfhgK/hgJLhgLnhgJPhgJ/hgLDhgLhcIiwgdGg6IFwi4YCA4YC84YCe4YCV4YCQ4YCx4YC4XCIsIGZyOiBcIuGAnuGAseGArOGAgOGAvOGArFwiLCBzYTogXCLhgIXhgJThgLFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4YCH4YCU4YC64YCU4YCd4YCr4YCb4YCuXCIsIDI6IFwi4YCW4YCx4YCW4YCx4YCs4YC64YCd4YCr4YCb4YCuXCIsIDM6IFwi4YCZ4YCQ4YC6XCIsIDQ6IFwi4YCn4YCV4YC84YCuXCIsIDU6IFwi4YCZ4YCxXCIsIDY6IFwi4YCH4YC94YCU4YC6XCIsIDc6IFwi4YCH4YCw4YCc4YCt4YCv4YCE4YC6XCIsIDg6IFwi4YCp4YCC4YCv4YCQ4YC6XCIsIDk6IFwi4YCF4YCA4YC64YCQ4YCE4YC64YCY4YCsXCIsIDEwOiBcIuGAoeGAseGArOGAgOGAuuGAkOGAreGAr+GAmOGArFwiLCAxMTogXCLhgJThgK3hgK/hgJ3hgIThgLrhgJjhgKxcIiwgMTI6IFwi4YCS4YCu4YCH4YCE4YC64YCY4YCsXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuGAmuGAlOGAseGAt1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNrXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5lXCIsIG1vOiBcIlBvXCIsIHR1OiBcIlV0XCIsIHdlOiBcIlN0XCIsIHRoOiBcIsWgdFwiLCBmcjogXCJQaVwiLCBzYTogXCJTb1wiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTcOhalwiLCA2OiBcIkrDum5cIiwgNzogXCJKw7psXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkRuZXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzbFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZWRcIiwgbW86IFwiUG9uXCIsIHR1OiBcIlRvclwiLCB3ZTogXCJTcmVcIiwgdGg6IFwixIxldFwiLCBmcjogXCJQZXRcIiwgc2E6IFwiU29iXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWpcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdmdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLiBtbS4geXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEYW5lc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInpoLWNuXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi5pelXCIsIG1vOiBcIuS4gFwiLCB0dTogXCLkuoxcIiwgd2U6IFwi5LiJXCIsIHRoOiBcIuWbm1wiLCBmcjogXCLkupRcIiwgc2E6IFwi5YWtXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIjHmnIhcIiwgMjogXCIy5pyIXCIsIDM6IFwiM+aciFwiLCA0OiBcIjTmnIhcIiwgNTogXCI15pyIXCIsIDY6IFwiNuaciFwiLCA3OiBcIjfmnIhcIiwgODogXCI45pyIXCIsIDk6IFwiOeaciFwiLCAxMDogXCIxMOaciFwiLCAxMTogXCIxMeaciFwiLCAxMjogXCIxMuaciFwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLku4rlpKlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyb1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcImR1XCIsIG1vOiBcImx1XCIsIHR1OiBcIm1hXCIsIHdlOiBcIm1pXCIsIHRoOiBcImpvXCIsIGZyOiBcInZpXCIsIHNhOiBcInNhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcImlhblwiLCAyOiBcImZlYlwiLCAzOiBcIm1hcnRcIiwgNDogXCJhcHJcIiwgNTogXCJtYWlcIiwgNjogXCJpdW5cIiwgNzogXCJpdWxcIiwgODogXCJhdWdcIiwgOTogXCJzZXB0XCIsIDEwOiBcIm9jdFwiLCAxMTogXCJub3ZcIiwgMTI6IFwiZGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkFzdMSDemlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjYVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcImRnXCIsIG1vOiBcImRsXCIsIHR1OiBcImR0XCIsIHdlOiBcImRjXCIsIHRoOiBcImRqXCIsIGZyOiBcImR2XCIsIHNhOiBcImRzXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiR2VuXCIsIDI6IFwiRmViclwiLCAzOiBcIk1hcsOnXCIsIDQ6IFwiQWJyXCIsIDU6IFwiTWFpZ1wiLCA2OiBcIkp1bnlcIiwgNzogXCJKdWxcIiwgODogXCJBZ1wiLCA5OiBcIlNldFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkF2dWlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpZFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIk1pblwiLCBtbzogXCJTZW5cIiwgdHU6IFwiU2VsXCIsIHdlOiBcIlJhYlwiLCB0aDogXCJLYW1cIiwgZnI6IFwiSnVtXCIsIHNhOiBcIlNhYlwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1laVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnc1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhhcmkgaW5pXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlbi1hdVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlN1blwiLCBtbzogXCJNb25cIiwgdHU6IFwiVHVlXCIsIHdlOiBcIldlZFwiLCB0aDogXCJUaHVcIiwgZnI6IFwiRnJpXCIsIHNhOiBcIlNhdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVG9kYXlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFtLWV0XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi4Yql4YiR4Yu1XCIsIG1vOiBcIuGIsOGKnlwiLCB0dTogXCLhiJvhiq3hiLDhip5cIiwgd2U6IFwi4Yio4Ymh4YuVXCIsIHRoOiBcIuGIkOGImeGItVwiLCBmcjogXCLhi5PhiK3hiaVcIiwgc2E6IFwi4YmF4Yuz4YicXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIuGMg+GKleGLqVwiLCAyOiBcIuGNjOGJpeGIqVwiLCAzOiBcIuGIm+GIreGJvVwiLCA0OiBcIuGKpOGNleGIqFwiLCA1OiBcIuGInOGLrVwiLCA2OiBcIuGMgeGKlVwiLCA3OiBcIuGMgeGIi+GLrVwiLCA4OiBcIuGKpuGMiOGItVwiLCA5OiBcIuGItOGNleGJtFwiLCAxMDogXCLhiqbhiq3hibBcIiwgMTE6IFwi4YqW4Yms4YidXCIsIDEyOiBcIuGLsuGItOGInVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLhi5vhiKxcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNzXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5lXCIsIG1vOiBcIlBvXCIsIHR1OiBcIsOadFwiLCB3ZTogXCJTdFwiLCB0aDogXCLEjHRcIiwgZnI6IFwiUMOhXCIsIHNhOiBcIlNvXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJMZWRcIiwgMjogXCLDmm5vXCIsIDM6IFwiQsWZZVwiLCA0OiBcIkR1YlwiLCA1OiBcIkt2xJtcIiwgNjogXCLEjHZuXCIsIDc6IFwixIx2Y1wiLCA4OiBcIlNycFwiLCA5OiBcIlrDocWZXCIsIDEwOiBcIsWYw61qXCIsIDExOiBcIkxpc1wiLCAxMjogXCJQcm9cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiRG5lc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZWxcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwizprPhc+BXCIsIG1vOiBcIs6UzrXPhVwiLCB0dTogXCLOpM+BzrlcIiwgd2U6IFwizqTOtc+EXCIsIHRoOiBcIs6gzrXOvFwiLCBmcjogXCLOoM6xz4FcIiwgc2E6IFwizqPOsc6yXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLOmc6xzr1cIiwgMjogXCLOps61zrJcIiwgMzogXCLOnM6xz4FcIiwgNDogXCLOkc+Az4FcIiwgNTogXCLOnM6xzrlcIiwgNjogXCLOmc6/z4XOvVwiLCA3OiBcIs6Zzr/Phc67XCIsIDg6IFwizpHPhc6zXCIsIDk6IFwizqPOtc+AXCIsIDEwOiBcIs6fzrrPhFwiLCAxMTogXCLOnc6/zrVcIiwgMTI6IFwizpTOtc66XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIs6jzq7OvM61z4HOsVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwia2tcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi0JbQulwiLCBtbzogXCLQlNGBXCIsIHR1OiBcItCh0YFcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQkdGBXCIsIGZyOiBcItCW0LxcIiwgc2E6IFwi0KHQsVwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0prQsNKjXCIsIDI6IFwi0JDSm9C/XCIsIDM6IFwi0J3QsNGDXCIsIDQ6IFwi0KHTmdGDXCIsIDU6IFwi0JzQsNC8XCIsIDY6IFwi0JzQsNGDXCIsIDc6IFwi0KjRltC7XCIsIDg6IFwi0KLQsNC8XCIsIDk6IFwi0prRi9GA0LpcIiwgMTA6IFwi0prQsNC3XCIsIDExOiBcItKa0LDRgFwiLCAxMjogXCLQltC10LvRglwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0JHSr9Cz0ZbQvVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGhcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi4Lit4LiyXCIsIG1vOiBcIuC4iFwiLCB0dTogXCLguK1cIiwgd2U6IFwi4LieXCIsIHRoOiBcIuC4nuC4pFwiLCBmcjogXCLguKhcIiwgc2E6IFwi4LiqXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLguKEu4LiEXCIsIDI6IFwi4LiBLuC4ni5cIiwgMzogXCLguKHguLUu4LiELlwiLCA0OiBcIuC5gOC4oS7guKIuXCIsIDU6IFwi4LieLuC4hC5cIiwgNjogXCLguKHguLQu4LiiLlwiLCA3OiBcIuC4gS7guIQuXCIsIDg6IFwi4LiqLuC4hC5cIiwgOTogXCLguIEu4LiiLlwiLCAxMDogXCLguJUu4LiELlwiLCAxMTogXCLguJ4u4LiiLlwiLCAxMjogXCLguJgu4LiELlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLguKfguLHguJnguJnguLXguYlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImtvLWtyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi7J28XCIsIG1vOiBcIuyblFwiLCB0dTogXCLtmZRcIiwgd2U6IFwi7IiYXCIsIHRoOiBcIuuqqVwiLCBmcjogXCLquIhcIiwgc2E6IFwi7YagXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIjHsm5RcIiwgMjogXCIy7JuUXCIsIDM6IFwiM+yblFwiLCA0OiBcIjTsm5RcIiwgNTogXCI17JuUXCIsIDY6IFwiNuyblFwiLCA3OiBcIjfsm5RcIiwgODogXCI47JuUXCIsIDk6IFwiOeyblFwiLCAxMDogXCIxMOyblFwiLCAxMTogXCIxMeyblFwiLCAxMjogXCIxMuyblFwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eSBtbSBkZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLsmKTriphcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O4blwiLCBtbzogXCJNYW5cIiwgdHU6IFwiVGlyXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDuHJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkkgZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsdFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlNrXCIsIG1vOiBcIlByXCIsIHR1OiBcIkFuXCIsIHdlOiBcIlRyXCIsIHRoOiBcIkt0XCIsIGZyOiBcIlBuXCIsIHNhOiBcIsWgdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTYXVzLlwiLCAyOiBcIlZhcy5cIiwgMzogXCJLb3YuXCIsIDQ6IFwiQmFsLlwiLCA1OiBcIkdlZy5cIiwgNjogXCJCaXLFvi5cIiwgNzogXCJMaWVwLlwiLCA4OiBcIlJ1Z3AuXCIsIDk6IFwiUnVncy5cIiwgMTA6IFwiU2FwbC5cIiwgMTE6IFwiTGFwa3IuXCIsIDEyOiBcIkdydW9kLlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLFoGlhbmllblwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJDTlwiLCBtbzogXCJUMlwiLCB0dTogXCJUM1wiLCB3ZTogXCJUNFwiLCB0aDogXCJUNVwiLCBmcjogXCJUNlwiLCBzYTogXCJUN1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJUSEcgMVwiLCAyOiBcIlRIRyAyXCIsIDM6IFwiVEhHIDNcIiwgNDogXCJUSEcgNFwiLCA1OiBcIlRIRyA1XCIsIDY6IFwiVEhHIDZcIiwgNzogXCJUSEcgN1wiLCA4OiBcIlRIRyA4XCIsIDk6IFwiVEhHIDlcIiwgMTA6IFwiVEhHIDEwXCIsIDExOiBcIlRIRyAxMVwiLCAxMjogXCJUSEcgMTJcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSMO0bSBuYXlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiblwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuCmsOCmrOCmv1wiLCBtbzogXCLgprjgp4vgpq5cIiwgdHU6IFwi4Kau4KaZ4KeN4KaX4KayXCIsIHdlOiBcIuCmrOCngeCmp1wiLCB0aDogXCLgpqzgp4PgprngpoNcIiwgZnI6IFwi4Ka24KeB4KaV4KeN4KawXCIsIHNhOiBcIuCmtuCmqOCmv1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLgppzgpr7gpqjgp4FcIiwgMjogXCLgpqvgp4fgpqzgp43gprDgp4FcIiwgMzogXCLgpq7gpr7gprDgp43gpppcIiwgNDogXCLgpo/gpqrgp43gprDgpr/gprJcIiwgNTogXCLgpq7gp4dcIiwgNjogXCLgppzgp4HgpqhcIiwgNzogXCLgppzgp4HgprLgpr7gpodcIiwgODogXCLgpobgppfgprjgp43gpp9cIiwgOTogXCLgprjgp4fgpqrgp43gpp/gp4dcIiwgMTA6IFwi4KaF4KaV4KeN4Kaf4KeLXCIsIDExOiBcIuCmqOCmreCnh1wiLCAxMjogXCLgpqHgpr/gprjgp4dcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4KaG4KacXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiZ1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcItC90LRcIiwgbW86IFwi0L/QvVwiLCB0dTogXCLQstGCXCIsIHdlOiBcItGB0YBcIiwgdGg6IFwi0YfRglwiLCBmcjogXCLQv9GCXCIsIHNhOiBcItGB0LFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0Y/QvdGDLlwiLCAyOiBcItGE0LXQsi5cIiwgMzogXCLQvNCw0YDRglwiLCA0OiBcItCw0L/RgC5cIiwgNTogXCLQvNCw0LlcIiwgNjogXCLRjtC90LhcIiwgNzogXCLRjtC70LhcIiwgODogXCLQsNCy0LMuXCIsIDk6IFwi0YHQtdC/LlwiLCAxMDogXCLQvtC60YIuXCIsIDExOiBcItC90L7QtS5cIiwgMTI6IFwi0LTQtdC6LlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQtNC90LXRgVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJOZVwiLCBtbzogXCJQb1wiLCB0dTogXCJVbFwiLCB3ZTogXCJTclwiLCB0aDogXCLEjGVcIiwgZnI6IFwiUGVcIiwgc2E6IFwiU3VcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiU2lqXCIsIDI6IFwiVmVsXCIsIDM6IFwiT8W+dVwiLCA0OiBcIlRyYVwiLCA1OiBcIlN2aVwiLCA2OiBcIkxpcFwiLCA3OiBcIlNycFwiLCA4OiBcIktvbFwiLCA5OiBcIlJ1alwiLCAxMDogXCJMaXNcIiwgMTE6IFwiU3R1XCIsIDEyOiBcIlByb1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eS5cIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiZGFuYXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcItin2YTYo9it2K9cIiwgbW86IFwi2KfZhNin2KvZhtmK2YZcIiwgdHU6IFwi2KfZhNir2YTYp9ir2KfYoVwiLCB3ZTogXCLYp9mE2KfYsdio2LnYp9ihXCIsIHRoOiBcItin2YTYrtmF2YrYs1wiLCBmcjogXCLYp9mE2KzZhdi52KlcIiwgc2E6IFwi2KfZhNiz2KjYqlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi2YrZhtin2YrYsVwiLCAyOiBcItmB2KjYsdin2YrYsVwiLCAzOiBcItmF2KfYsdizXCIsIDQ6IFwi2KfYqNix2YrZhFwiLCA1OiBcItmF2KfZitmIXCIsIDY6IFwi2YrZiNmG2YrZiFwiLCA3OiBcItmK2YjZhNmK2YhcIiwgODogXCLYo9i62LPYt9izXCIsIDk6IFwi2LPYqNiq2YXYqNixXCIsIDEwOiBcItij2YPYqtmI2KjYsVwiLCAxMTogXCLZhtmI2YHZhdio2LFcIiwgMTI6IFwi2K/Zitiz2YXYqNixXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItin2YTZitmI2YVcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic2FcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlzXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwic3VuXCIsIG1vOiBcIm3DoW5cIiwgdHU6IFwiw75yaVwiLCB3ZTogXCJtacOwXCIsIHRoOiBcImZpbVwiLCBmcjogXCJmw7ZzXCIsIHNhOiBcImxhdVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJqYW5cIiwgMjogXCJmZWJcIiwgMzogXCJtYXJcIiwgNDogXCJhcHJcIiwgNTogXCJtYcOtXCIsIDY6IFwiasO6blwiLCA3OiBcImrDumxcIiwgODogXCLDoWfDulwiLCA5OiBcInNlcFwiLCAxMDogXCJva3RcIiwgMTE6IFwibsOzdlwiLCAxMjogXCJkZXNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiw40gZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0TG9jYWxlT3B0aW9ucyhsb2NhbGU6IHN0cmluZyk6IElNeU9wdGlvbnMge1xyXG4gICAgICAgIGlmIChsb2NhbGUgJiYgdGhpcy5sb2NhbGVzLmhhc093blByb3BlcnR5KGxvY2FsZSkpIHtcclxuICAgICAgICAgICAgLy8gVXNlciBnaXZlbiBsb2NhbGVcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tsb2NhbGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEZWZhdWx0OiBlblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZXNbXCJlblwiXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIubG9jYWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU15RGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeURhdGVSYW5nZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1vbnRoIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGguaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1vbnRoTGFiZWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1hcmtlZC1kYXRlcy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1hcmtlZC1kYXRlLmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTSA9IFwibVwiO1xyXG5jb25zdCBNTSA9IFwibW1cIjtcclxuY29uc3QgTU1NID0gXCJtbW1cIjtcclxuY29uc3QgREQgPSBcImRkXCI7XHJcbmNvbnN0IFlZWVkgPSBcInl5eXlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuICAgIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW1wic3VcIiwgXCJtb1wiLCBcInR1XCIsIFwid2VcIiwgXCJ0aFwiLCBcImZyXCIsIFwic2FcIl07XHJcblxyXG4gICAgaXNEYXRlVmFsaWQoZGF0ZVN0cjogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyLCBkaXNhYmxlVW50aWw6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSwgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLCBkaXNhYmxlV2Vla0RheXM6IEFycmF5PHN0cmluZz4sIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlPiwgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscywgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZT4pOiBJTXlEYXRlIHtcclxuICAgICAgICBsZXQgcmV0dXJuRGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICBsZXQgZGF5c0luTW9udGg6IEFycmF5PG51bWJlcj4gPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcbiAgICAgICAgbGV0IGlzTW9udGhTdHI6IGJvb2xlYW4gPSBkYXRlRm9ybWF0LmluZGV4T2YoTU1NKSAhPT0gLTE7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvcnM6IEFycmF5PHN0cmluZz4gPSB0aGlzLmdldERhdGVGb3JtYXRTZXBhcmF0b3JzKGRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICBsZXQgbW9udGg6IG51bWJlciA9IGlzTW9udGhTdHIgPyB0aGlzLnBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgTU1NLCBtb250aExhYmVscykgOiB0aGlzLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgTU0pO1xyXG4gICAgICAgIGlmIChpc01vbnRoU3RyICYmIG1vbnRoTGFiZWxzW21vbnRoXSkge1xyXG4gICAgICAgICAgICBkYXRlRm9ybWF0ID0gdGhpcy5jaGFuZ2VEYXRlRm9ybWF0KGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzW21vbnRoXS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZVN0ci5sZW5ndGggIT09IGRhdGVGb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKHNlcGFyYXRvcnNbMF0pICE9PSBkYXRlU3RyLmluZGV4T2Yoc2VwYXJhdG9yc1swXSkgfHwgZGF0ZUZvcm1hdC5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSAhPT0gZGF0ZVN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRheTogbnVtYmVyID0gdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIEREKTtcclxuICAgICAgICBsZXQgeWVhcjogbnVtYmVyID0gdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIFlZWVkpO1xyXG5cclxuICAgICAgICBpZiAobW9udGggIT09IC0xICYmIGRheSAhPT0gLTEgJiYgeWVhciAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHllYXIgPCBtaW5ZZWFyIHx8IHllYXIgPiBtYXhZZWFyIHx8IG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBkYXk6IGRheX07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF5KGRhdGUsIG1pblllYXIsIG1heFllYXIsIGRpc2FibGVVbnRpbCwgZGlzYWJsZVNpbmNlLCBkaXNhYmxlV2Vla2VuZHMsIGRpc2FibGVXZWVrRGF5cywgZGlzYWJsZURheXMsIGRpc2FibGVEYXRlUmFuZ2VzLCBlbmFibGVEYXlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgMTAwICE9PSAwICYmIHllYXIgJSA0ID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0luTW9udGhbMV0gPSAyOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gZGF5c0luTW9udGhbbW9udGggLSAxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkIGRhdGVcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVGb3JtYXRTZXBhcmF0b3JzKGRhdGVGb3JtYXQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBkYXRlRm9ybWF0Lm1hdGNoKC9bXihkbXkpXXsxLH0vZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGF0ZUZvcm1hdChkYXRlRm9ybWF0OiBzdHJpbmcsIGxlbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbXA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBtcCArPSBNO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdC5yZXBsYWNlKE1NTSwgbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW9udGhMYWJlbFZhbGlkKG1vbnRoTGFiZWw6IHN0cmluZywgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgPSAxOyBrZXkgPD0gMTI7IGtleSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtb250aExhYmVsLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNZZWFyTGFiZWxWYWxpZCh5ZWFyTGFiZWw6IG51bWJlciwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh5ZWFyTGFiZWwgPj0gbWluWWVhciAmJiB5ZWFyTGFiZWwgPD0gbWF4WWVhcikge1xyXG4gICAgICAgICAgICByZXR1cm4geWVhckxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVTdHJpbmc6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKHBvcywgcG9zICsgZGF0ZVBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKCEvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtb250aExhYmVsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzdGFydDogbnVtYmVyID0gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5zdWJzdHIoZGF0ZUZvcm1hdC5sZW5ndGggLSAzKSA9PT0gTU1NKSB7XHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWwgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhzdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZW5kOiBudW1iZXIgPSBkYXRlU3RyaW5nLmluZGV4T2YoZGF0ZUZvcm1hdC5jaGFyQXQoc3RhcnQgKyBkYXRlUGFydC5sZW5ndGgpLCBzdGFydCk7XHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWwgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb250aExhYmVsVmFsaWQobW9udGhMYWJlbCwgbW9udGhMYWJlbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURlZmF1bHRNb250aChtb250aFN0cmluZzogc3RyaW5nKTogSU15TW9udGgge1xyXG4gICAgICAgIGxldCBtb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICBpZiAobW9udGhTdHJpbmcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNwbGl0ID0gbW9udGhTdHJpbmcuc3BsaXQobW9udGhTdHJpbmcubWF0Y2goL1teMC05XS8pWzBdKTtcclxuICAgICAgICAgICAgbW9udGgubW9udGhOYnIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFswXSkgOiBwYXJzZUludChzcGxpdFsxXSk7XHJcbiAgICAgICAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSkgOiBwYXJzZUludChzcGxpdFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb250aDtcclxuICAgIH1cclxuXHJcbiAgICBpc0Rpc2FibGVkRGF5KGRhdGU6IElNeURhdGUsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyLCBkaXNhYmxlVW50aWw6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSwgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLCBkaXNhYmxlV2Vla0RheXM6IEFycmF5PHN0cmluZz4sIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlPiwgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sIGVuYWJsZURheXM6IEFycmF5PElNeURhdGU+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBlbmFibGVEYXlzKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnllYXIgPT09IGRhdGUueWVhciAmJiBlLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGUuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZG4gPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUueWVhciA8IG1pblllYXIgJiYgZGF0ZS5tb250aCA9PT0gMTIgfHwgZGF0ZS55ZWFyID4gbWF4WWVhciAmJiBkYXRlLm1vbnRoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJiBkYXRlTXMgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiYgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVTaW5jZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkbiA9PT0gMCB8fCBkbiA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXNhYmxlV2Vla0RheXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB3ZCBvZiBkaXNhYmxlV2Vla0RheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkbiA9PT0gdGhpcy5nZXRXZWVrZGF5SW5kZXgod2QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGQgb2YgZGlzYWJsZURheXMpIHtcclxuICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZCBvZiBkaXNhYmxlRGF0ZVJhbmdlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSAmJiBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZC5iZWdpbikgJiYgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWFya2VkRGF0ZShkYXRlOiBJTXlEYXRlLCBtYXJrZWREYXRlczogQXJyYXk8SU15TWFya2VkRGF0ZXM+LCBtYXJrV2Vla2VuZHM6IElNeU1hcmtlZERhdGUpOiBJTXlNYXJrZWREYXRlIHtcclxuICAgICAgICBmb3IgKGxldCBtZCBvZiBtYXJrZWREYXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIG1kLmRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21hcmtlZDogdHJ1ZSwgY29sb3I6IG1kLmNvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFya1dlZWtlbmRzICYmIG1hcmtXZWVrZW5kcy5tYXJrZWQpIHtcclxuICAgICAgICAgICAgbGV0IGRheU5iciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHttYXJrZWQ6IHRydWUsIGNvbG9yOiBtYXJrV2Vla2VuZHMuY29sb3J9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bWFya2VkOiBmYWxzZSwgY29sb3I6IFwiXCJ9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzSGlnaGxpZ2h0ZWREYXRlKGRhdGU6IElNeURhdGUsIHN1bkhpZ2hsaWdodDogYm9vbGVhbiwgc2F0SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHREYXRlczogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZGF5TmJyOiBudW1iZXIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgICBpZiAoc3VuSGlnaGxpZ2h0ICYmIGRheU5iciA9PT0gMCB8fCBzYXRIaWdobGlnaHQgJiYgZGF5TmJyID09PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGhpZ2hsaWdodERhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKChkLmdldFRpbWUoKSAtIG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgMCwgNCkuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlOiBJTXlEYXRlLCBkaXNhYmxlVW50aWw6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS55ZWFyICE9PSAwICYmIGRhdGUubW9udGggIT09IDAgJiYgZGF0ZS5kYXkgIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTYW1lRGF0ZShkMTogSU15RGF0ZSwgZDI6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZDEueWVhciA9PT0gZDIueWVhciAmJiBkMS5tb250aCA9PT0gZDIubW9udGggJiYgZDEuZGF5ID09PSBkMi5kYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERheU51bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gZC5nZXREYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrRGF5cygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrRGF5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrZGF5SW5kZXgod2Q6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtEYXlzLmluZGV4T2Yod2QpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZS50cyIsIi8qXHJcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xyXG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbn1cclxuXHJcbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcclxuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXHJcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XHJcbmlmIChwYXRjaCkge1xyXG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG5cdGNvbnN0cnVjdG9yKGFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzLCBwcml2YXRlIGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICB9XHJcbiB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBhbmQgYG1haW4uYnJvd3Nlci50c2AgYXJlIGlkZW50aWNhbCwgYXQgdGhlIG1vbWVudCghKVxyXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cclxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcclxuICogWW91IGNhbiBhbHNvIGp1c3QgaGF2ZSAxIGZpbGUsIHRoYXQgaXMgaW1wb3J0ZWQgaW50byBib3RoXHJcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXlEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250YWN0VXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFBhZ2VSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnXHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJpdmFjeUNvbXBvbmVudCB9IGZyb20gJy4vcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50J1xyXG5cclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlLCBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBEcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nMlBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICduZzItcGFnaW5hdGlvbic7XHJcblxyXG4vKipcclxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHRBcHBDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgTmF2Q29tcG9uZW50LCBcclxuICAgIERyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgV29ya3Nob3BzTGlzdENvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wc0NvbXBvbmVudCxcclxuICAgIENvbnRhY3RVc0NvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCxcclxuICAgIFBhZ2VSZWRpcmVjdENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudCxcclxuICAgIEFib3V0Q29tcG9uZW50LFxyXG4gICAgRXJyb3JDb21wb25lbnQsXHJcbiAgICBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQsXHJcbiAgICBGb290ZXJDb21wb25lbnQsXHJcbiAgICBQcml2YWN5Q29tcG9uZW50XHJcblx0XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICAvKipcclxuICAgICAqIE5PVEU6IE5lZWRzIHRvIGJlIHlvdXIgZmlyc3QgaW1wb3J0ICghKVxyXG4gICAgICogTm9kZU1vZHVsZSwgTm9kZUh0dHBNb2R1bGUsIE5vZGVKc29ucE1vZHVsZSBhcmUgaW5jbHVkZWRcclxuICAgICAqL1xyXG4gICAgVW5pdmVyc2FsTW9kdWxlLFxyXG4gICAgRm9ybXNNb2R1bGUsXHJcbiAgICBNeURhdGVQaWNrZXJNb2R1bGUsXHJcbiAgICAvKipcclxuICAgICAqIHVzaW5nIHJvdXRlc1xyXG4gICAgICovXHJcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpLFxyXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvclJvb3QoWyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgXSksXHJcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yQ2hpbGQoKSxcclxuICAgIE5nMlBhZ2luYXRpb25Nb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1dvcmtzaG9wUmVwb3NpdG9yeSwgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSAgZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSAgZnJvbSAnLi9hYm91dC9hYm91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9ICBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250YWN0VXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVkaXJlY3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByaXZhY3lDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgeyBwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ3dvcmtzaG9wcycsIGNvbXBvbmVudDogV29ya3Nob3BzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy86dGl0bGUvOmlkJywgY29tcG9uZW50OiBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjb250YWN0JywgY29tcG9uZW50OiBDb250YWN0VXNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYWdlLXJlZGlyZWN0LzpleHRlcm5hbFVybCcsIGNvbXBvbmVudDogUGFnZVJlZGlyZWN0Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJzQwNCcsIGNvbXBvbmVudDogRXJyb3JDb21wb25lbnQsIHBhdGhNYXRjaDonZnVsbCd9LFxyXG4gIHsgcGF0aDogJ3Rlcm1zYW5kY29uZGl0aW9ucycsIGNvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJ30sXHJcbiAgeyBwYXRoOiAncHJpdmFjeXBvbGljeScsIGNvbXBvbmVudDogUHJpdmFjeUNvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCd9LFxyXG4gIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy80MDQnIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUnLFxyXG4gICAgaG9zdDogeyAnKGRvY3VtZW50OmNsaWNrKSc6ICdoYW5kbGVDbGljaygkZXZlbnQpJyB9LFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBxdWVyeSA9ICcnO1xyXG4gICAgcHVibGljIGNvdW50cmllcyA9IFtdO1xyXG4gICAgcHVibGljIGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgcHVibGljIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG15RWxlbWVudDogRWxlbWVudFJlZiwgd29ya3Nob3BSZXBvOiBXb3Jrc2hvcFJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBteUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkgPSB3b3Jrc2hvcFJlcG87XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0TG9jYXRpb25zKCkudGhlbihsb2MgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChsb2NbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QoaXRlbSkge1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBpdGVtO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICB2YXIgY2xpY2tlZENvbXBvbmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgaW5zaWRlID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCA9PT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xpY2tlZENvbXBvbmVudCA9IGNsaWNrZWRDb21wb25lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9IHdoaWxlIChjbGlja2VkQ29tcG9uZW50KTtcclxuICAgICAgICBpZiAoIWluc2lkZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZWQuZW1pdCh0aGlzLnF1ZXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGZyb21EYXRlUGlja2VyT3B0aW9ucztcclxuICBwcml2YXRlIHRvRGF0ZVBpY2tlck9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBmcm9tRGF0ZUxhYmVsOiBzdHJpbmcgPSBcIkZyb20gZGF0ZVwiO1xyXG4gIHByaXZhdGUgdG9EYXRlTGFiZWw6IHN0cmluZyA9IFwiVG8gZGF0ZVwiO1xyXG4gIHByaXZhdGUgcHJldmlvdXNEYXRlO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGcm9tQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRUb0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBwcmV2aW91cyA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICAgIHRoaXMucHJldmlvdXNEYXRlID0geyB5ZWFyOiBwcmV2aW91cy5nZXRGdWxsWWVhcigpLCBtb250aDogcHJldmlvdXMuZ2V0TW9udGgoKSwgZGF5OiBwcmV2aW91cy5nZXREYXRlKCkgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mcm9tRGF0ZVBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgbWFya0N1cnJlbnREYXk6IHRydWUsXHJcbiAgICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgbW9udGhTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgZGlzYWJsZVVudGlsOiB0aGlzLnByZXZpb3VzRGF0ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRnJvbURhdGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHZhciBzZWxlY3RlZERhdGUgPSBldmVudC5kYXRlO1xyXG4gICAgdGhpcy50b0RhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxyXG4gICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIGRpc2FibGVVbnRpbDoge1xyXG4gICAgICAgIHllYXI6IHNlbGVjdGVkRGF0ZS55ZWFyLFxyXG4gICAgICAgIG1vbnRoOiBzZWxlY3RlZERhdGUubW9udGgsXHJcbiAgICAgICAgZGF5OiBzZWxlY3RlZERhdGUuZGF5XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEZyb21DaGFuZ2VkLmVtaXQoc2VsZWN0ZWREYXRlKTtcclxuICB9XHJcblxyXG4gIG9uVG9EYXRlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB2YXIgc2VsZWN0ZWREYXRlID0gZXZlbnQuZGF0ZTtcclxuICAgIHRoaXMuZnJvbURhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkaXNhYmxlVW50aWw6IHRoaXMucHJldmlvdXNEYXRlLFxyXG4gICAgICBkaXNhYmxlU2luY2U6IHtcclxuICAgICAgICB5ZWFyOiBzZWxlY3RlZERhdGUueWVhcixcclxuICAgICAgICBtb250aDogc2VsZWN0ZWREYXRlLm1vbnRoLFxyXG4gICAgICAgIGRheTogc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvQ2hhbmdlZC5lbWl0KHNlbGVjdGVkRGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGFNb2RlbDogYW55W107XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25OYW1lOiBzdHJpbmc7XHJcbiAgXHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgc2VsZkNsaWNrOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcGFuZWxPdmVybGF5OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZkNsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLnBhbmVsT3ZlcmxheSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXRoYXQuaXNDb2xsYXBzZWQgJiYgIXRoYXQuc2VsZkNsaWNrICYmICF0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICAgIHRoYXQuaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgXHR0aGlzLnNlbGVjdGlvbkNoYW5nZWQuZW1pdChcImNoYW5nZWRcIik7XHJcbiAgICB9XHJcbiAgICAgIHRoYXQuc2VsZkNsaWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFuZWxPdmVybGF5ID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGZDbGljayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvdmVybGF5KCkge1xyXG4gICAgdGhpcy5wYW5lbE92ZXJsYXkgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmb290ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdmktYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGhpZGVOYXZiYXI6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgc2hvd0ZpbHRlcnM6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9ICF0aGlzLmhpZGVGaWx0ZXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpZGVOYXZiYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlTmF2YmFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzRHJvcGRvd25Ub2dnbGUuZW1pdCh0aGlzLmhpZGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSAhdGhpcy5oaWRlTmF2YmFyO1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRlRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlLmVtaXQodGhpcy5oaWRlRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5LCBJTG9jYXRpb24sIElQaG90b2dyYXBoZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5J1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3dvcmtzaG9wLWZpbHRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCB7XHJcblxyXG4gIEBPdXRwdXQoKSBmcm9tRGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHRvRGF0ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGxvY2F0aW9uRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgY2F0ZWdvcnlGaWx0ZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtaW5QcmljZUZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1heFByaWNlRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYXBwbHlGaWx0ZXJzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIFxyXG4gIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczI7XHJcblxyXG4gIHB1YmxpYyBjaXRpZXM6IGFueVtdO1xyXG4gIHB1YmxpYyBjYXRlZ29yaWVzOiBhbnlbXTtcclxuICBcclxuICAvKiogbGFiZWxzIGZvciBmaWx0ZXJzICovXHJcbiAgcHVibGljIGNpdHlEcm9wZG93bkxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIHBob3RvZ3JhcGhlckRyb3Bkb3duTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgY2F0ZWdvcnlEcm9wZG93bkxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21EYXRlTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgdG9EYXRlTGFiZWw6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveEVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAvKiogZGF0ZSBmaWx0ZXJzICovXHJcbiAgcHVibGljIG1pbkZyb21EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBtYXhGcm9tRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgbWluVG9EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBtYXhUb0RhdGU6IERhdGU7XHJcbiAgcHVibGljIGZyb21EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyB0b0RhdGU6IERhdGU7XHJcblxyXG4gIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzOkdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgcHJpdmF0ZSB3b3Jrc2hvcFJlcG8gOiBXb3Jrc2hvcFJlcG9zaXRvcnk7XHJcblxyXG4gIHB1YmxpYyBzaG93RmlsdGVyOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5LCBwcml2YXRlIGE6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYTtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICAgIHRoaXMud29ya3Nob3BSZXBvID0gd29ya3Nob3BSZXBvc2l0b3J5O1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXMoKTtcclxuICAgIFxyXG4gICAgdGhpcy5jaXR5RHJvcGRvd25MYWJlbCA9IFwiTG9jYXRpb25cIjtcclxuICAgIHRoaXMucGhvdG9ncmFwaGVyRHJvcGRvd25MYWJlbCA9IFwiUGhvdG9ncmFwaGVyXCI7XHJcbiAgICB0aGlzLmNhdGVnb3J5RHJvcGRvd25MYWJlbCA9IFwiQ2F0ZWdvcnlcIjtcclxuICAgIHRoaXMuZnJvbURhdGVMYWJlbCA9IFwiRnJvbVwiO1xyXG4gICAgdGhpcy50b0RhdGVMYWJlbCA9IFwiVG9cIjtcclxuXHJcbiAgICB0aGlzLm1pbkZyb21EYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMuc2hvd0ZpbHRlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDYXRlZ29yaWVzKClcclxuICB7XHJcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSBbXTtcclxuICAgIHRoaXMud29ya3Nob3BSZXBvLmdldFdvcmtzaG9wVHlwZXMoKS50aGVuKHdUeXBlcyA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYod1R5cGVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtsYWJlbDp3VHlwZXNbaV0sIHZhbHVlOndUeXBlc1tpXX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZyb21EYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gdmFsdWU7XHJcblx0dGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnRnJvbURhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG4gICAgdGhpcy5mcm9tRGF0ZUNoYW5nZWQuZW1pdCh0aGlzLmZyb21EYXRlKTtcclxuICB9XHJcblxyXG4gIGdldFRvRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy50b0RhdGUgPSB2YWx1ZTtcclxuXHR0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdUb0RhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG5cdHRoaXMudG9EYXRlQ2hhbmdlZC5lbWl0KHRoaXMudG9EYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU1pblByaWNlKHZhbHVlOm51bWJlcilcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNaW5QcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLm1pblByaWNlRmlsdGVyQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdXBkYXRlTWF4UHJpY2UodmFsdWU6bnVtYmVyKVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ01heFByaWNlRmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuICAgIHRoaXMubWF4UHJpY2VGaWx0ZXJDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJzKGlucHV0TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5jaGVja2JveEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbbmFtZT0ke2lucHV0TmFtZX1dOmNoZWNrZWRgKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2JveEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB4ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5jaGVja2JveEVsZW1lbnRzW2ldO1xyXG4gICAgICBzZWxlY3RlZC5wdXNoKHgudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxlY3RlZDtcclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlTG9jYXRpb24odmFsdWU6IGFueSlcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdMb2NhdGlvbkZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICBsZXQgbG9jID0gdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbk5hbWUodmFsdWUpO1xyXG4gICAgaWYoIWxvYylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uRmlsdGVyQ2hhbmdlZC5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25GaWx0ZXJDaGFuZ2VkLmVtaXQobG9jLmlkKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlQ2F0ZWdvcnlMaXN0KHZhbHVlOiBhbnkpXHJcbiAge1xyXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnQ2F0ZWdvcnlGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG5cclxuICAgIGxldCBjYXRlZ29yaWVzID0gdGhpcy5nZXRTZWxlY3RlZEZpbHRlcnMoJ2NhdGVnb3JpZXMnKTtcclxuICAgIGxldCB3b3Jrc2hvcFR5cGVzTGlzdCA9IFwiXCI7XHJcbiAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yKGxldCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKVxyXG4gICAge1xyXG4gICAgICAgIGlmKCFmaXJzdClcclxuICAgICAgICAgICAgd29ya3Nob3BUeXBlc0xpc3QgPSB3b3Jrc2hvcFR5cGVzTGlzdCArIFwiLFwiO1xyXG4gICAgICAgIGZpcnN0PWZhbHNlO1xyXG4gICAgICAgIHdvcmtzaG9wVHlwZXNMaXN0ID0gd29ya3Nob3BUeXBlc0xpc3QrY2F0ZWdvcnk7XHJcbiAgICB9XHJcblx0ICBcclxuICAgIHRoaXMuY2F0ZWdvcnlGaWx0ZXJDaGFuZ2VkLmVtaXQod29ya3Nob3BUeXBlc0xpc3QpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQudHMiLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxyXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXHJcbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXHJcbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLWNsaS5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXHJcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxyXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cclxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cclxuICpcclxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4gKiAnaG9tZScsICdhYm91dCdcclxuICogXTtcclxuICoqL1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuJ2hvbWUnLCAnd29ya3Nob3BzJywnYWJvdXQnLCAnNDA0JywgJyoqJywncGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy86dGl0bGUvOmlkJywnY29udGFjdCcsJ3BhZ2UtcmVkaXJlY3QvOmV4dGVybmFsVXJsJywgJ3Rlcm1zYW5kY29uZGl0aW9ucycsICdwcml2YWN5cG9saWN5J1xyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJteWRwXFxcIiBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNob3dJbnB1dEZpZWxkID8gb3B0cy53aWR0aCA6IG51bGwsICdib3JkZXInOiBvcHRzLmlubGluZSA/ICdub25lJyA6IG51bGx9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0aW9uZ3JvdXBcXFwiICpuZ0lmPVxcXCIhb3B0cy5pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJvcHRzLnNob3dJbnB1dEZpZWxkXFxcIiAjaW5wdXRCb3hFbCBuZ3R5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWxlY3Rpb25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbElucHV0RmllbGRcXFwiIChjbGljayk9XFxcIm9wdHMub3BlblNlbGVjdG9yT25JbnB1dENsaWNrJiYhb3B0cy5lZGl0YWJsZURhdGVGaWVsZCYmb3BlbkJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2ludmFsaWRkYXRlJzogaW52YWxpZERhdGUmJm9wdHMuaW5kaWNhdGVJbnZhbGlkRGF0ZSwgJ2lucHV0bm90ZWRpdGFibGUnOiBvcHRzLm9wZW5TZWxlY3Rvck9uSW5wdXRDbGljayYmIW9wdHMuZWRpdGFibGVEYXRlRmllbGQsICdzZWxlY3Rpb25kaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWR9XFxcIlxcclxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiIFtuZ1N0eWxlXT1cXFwieydoZWlnaHQnOiBvcHRzLmhlaWdodCwgJ2ZvbnQtc2l6ZSc6IG9wdHMuc2VsZWN0aW9uVHh0Rm9udFNpemV9XFxcIiBbbmdNb2RlbF09XFxcInNlbGVjdGlvbkRheVR4dFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvblVzZXJEYXRlSW5wdXQoJGV2ZW50KVxcXCIgW3ZhbHVlXT1cXFwic2VsZWN0aW9uRGF5VHh0XFxcIiAoa2V5dXApPVxcXCJvbkNsb3NlU2VsZWN0b3IoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAoZm9jdXMpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkZvY3VzSW5wdXQoJGV2ZW50KVxcXCIgKGJsdXIpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkJsdXJJbnB1dCgkZXZlbnQpXFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIiBbcmVhZG9ubHldPVxcXCIhb3B0cy5lZGl0YWJsZURhdGVGaWVsZFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhdXRvY29ycmVjdD1cXFwib2ZmXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGJ0bmdyb3VwXFxcIiBbc3R5bGUuaGVpZ2h0XT1cXFwib3B0cy5oZWlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxEZWNyZWFzZURhdGVcXFwiIGNsYXNzPVxcXCJidG5kZWNyZWFzZVxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0blxcXCIgKGNsaWNrKT1cXFwib25EZWNyZWFzZUJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bmRlY3JlYXNlZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRuZGVjcmVhc2VkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsSW5jcmVhc2VEYXRlXFxcIiBjbGFzcz1cXFwiYnRuaW5jcmVhc2VcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dJbmNyZWFzZURhdGVCdG5cXFwiIChjbGljayk9XFxcIm9uSW5jcmVhc2VCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5pbmNyZWFzZWVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmluY3JlYXNlZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByaWdodFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxDbGVhckRhdGVcXFwiIGNsYXNzPVxcXCJidG5jbGVhclxcXCIgKm5nSWY9XFxcInNlbGVjdGlvbkRheVR4dC5sZW5ndGg+MCYmb3B0cy5zaG93Q2xlYXJEYXRlQnRuXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5jbGVhcmVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmNsZWFyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByZW1vdmVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsT3BlbkNhbGVuZGFyXFxcIiBjbGFzcz1cXFwiYnRucGlja2VyXFxcIiAoY2xpY2spPVxcXCJvcGVuQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRucGlja2VyZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRucGlja2VyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dDbGVhckRhdGVCdG4mJiFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfHxzZWxlY3Rpb25EYXlUeHQubGVuZ3RoPT09MCYmIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGNhbGVuZGFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdG9yXFxcIiAjc2VsZWN0b3JFbCBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNlbGVjdG9yV2lkdGgsICdoZWlnaHQnIDogb3B0cy5zZWxlY3RvckhlaWdodCwgJ2JvdHRvbSc6IGdldFNlbGVjdG9yVG9wUG9zaXRpb24oKX1cXFwiICpuZ0lmPVxcXCJzaG93U2VsZWN0b3J8fG9wdHMuaW5saW5lXFxcIiBbbXlkcGZvY3VzXT1cXFwib3B0cy5pbmxpbmU/JzAnOicxJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lubGluZWRwJzogb3B0cy5pbmxpbmUsICdhbGlnbnNlbGVjdG9ycmlnaHQnOiBvcHRzLmFsaWduU2VsZWN0b3JSaWdodCwgJ3NlbGVjdG9yYXJyb3cnOiBvcHRzLnNob3dTZWxlY3RvckFycm93JiYhb3B0cy5pbmxpbmUsICdzZWxlY3RvcmFycm93bGVmdCc6IG9wdHMuc2hvd1NlbGVjdG9yQXJyb3cmJiFvcHRzLmFsaWduU2VsZWN0b3JSaWdodCYmIW9wdHMuaW5saW5lLCAnc2VsZWN0b3JhcnJvd3JpZ2h0Jzogb3B0cy5zaG93U2VsZWN0b3JBcnJvdyYmb3B0cy5hbGlnblNlbGVjdG9yUmlnaHQmJiFvcHRzLmlubGluZX1cXFwiIChrZXl1cCk9XFxcIm9uQ2xvc2VTZWxlY3RvcigkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmbG9hdDpsZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsUHJldk1vbnRoXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiIChjbGljayk9XFxcIm9uUHJldk1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFwcmV2TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogcHJldk1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJtb250aHR4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcmxhYmVsYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtuZ0NsYXNzXT1cXFwieydtb250aGxhYmVsJzogb3B0cy5tb250aFNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy5tb250aFNlbGVjdG9yJiZvblNlbGVjdE1vbnRoQ2xpY2tlZCgkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwie3tvcHRzLm1vbnRoU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgubW9udGhUeHR9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxOZXh0TW9udGhcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwcmlnaHRcXFwiIChjbGljayk9XFxcIm9uTmV4dE1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFuZXh0TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogbmV4dE1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJvcHRzLnNob3dUb2RheUJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiaGVhZGVydG9kYXlidG5cXFwiIChjbGljayk9XFxcIm9uVG9kYXlDbGlja2VkKClcXFwiIFtkaXNhYmxlZF09XFxcImRpc2FibGVUb2RheUJ0blxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcnRvZGF5YnRuZW5hYmxlZCc6ICFkaXNhYmxlVG9kYXlCdG4sICdoZWFkZXJ0b2RheWJ0bmRpc2FibGVkJzogZGlzYWJsZVRvZGF5QnRufVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcHRvZGF5XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tvcHRzLnRvZGF5QnRuVHh0fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiZmxvYXQ6cmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxQcmV2WWVhclxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHBsZWZ0XFxcIiAoY2xpY2spPVxcXCJvblByZXZZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIXByZXZZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IHByZXZZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJ5ZWFydHh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVybGFiZWxidG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW25nQ2xhc3NdPVxcXCJ7J3llYXJsYWJlbCc6IG9wdHMueWVhclNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy55ZWFyU2VsZWN0b3ImJm9uU2VsZWN0WWVhckNsaWNrZWQoJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcInt7b3B0cy55ZWFyU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgueWVhcn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbE5leHRZZWFyXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcHJpZ2h0XFxcIiAoY2xpY2spPVxcXCJvbk5leHRZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIW5leHRZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IG5leHRZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJjYWx0YWJsZVxcXCIgKm5nSWY9XFxcIiFzZWxlY3RNb250aCYmIXNlbGVjdFllYXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGUgd2Vla2RheXRpdGxld2Vla25iclxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd1dlZWtOdW1iZXJzJiZvcHRzLmZpcnN0RGF5T2ZXZWVrPT09J21vJ1xcXCI+IzwvdGg+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiICpuZ0Zvcj1cXFwibGV0IGQgb2Ygd2Vla0RheXNcXFwiPnt7ZH19PC90aD48L3RyPjwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdyBvZiBkYXRlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImRheWNlbGwgZGF5Y2VsbHdlZWtuYnJcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dXZWVrTnVtYmVycyYmb3B0cy5maXJzdERheU9mV2Vlaz09PSdtbydcXFwiPnt7dy53ZWVrTmJyfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJkYXljZWxsXFxcIiAqbmdGb3I9XFxcImxldCBkIG9mIHcud2Vla1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2N1cnJtb250aCc6ZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWQsICdzZWxlY3RlZGRheSc6c2VsZWN0ZWREYXRlLmRheT09PWQuZGF0ZU9iai5kYXkgJiYgc2VsZWN0ZWREYXRlLm1vbnRoPT09ZC5kYXRlT2JqLm1vbnRoICYmIHNlbGVjdGVkRGF0ZS55ZWFyPT09ZC5kYXRlT2JqLnllYXIgJiYgZC5jbW89PT1jdXJyTW9udGhJZCwgJ2Rpc2FibGVkJzogZC5kaXNhYmxlZCwgJ3RhYmxlc2luZ2xlZGF5JzogZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWR9XFxcIiAoY2xpY2spPVxcXCIhZC5kaXNhYmxlZCYmb25DZWxsQ2xpY2tlZChkKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChrZXlkb3duKT1cXFwib25DZWxsS2V5RG93bigkZXZlbnQsIGQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZC5tYXJrZWREYXRlLm1hcmtlZFxcXCIgY2xhc3M9XFxcIm1hcmtkYXRlXFxcIiBbbmdTdHlsZV09XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGQubWFya2VkRGF0ZS5jb2xvcn1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGV2YWx1ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3ByZXZtb250aCc6ZC5jbW89PT1wcmV2TW9udGhJZCwnY3Vycm1vbnRoJzpkLmNtbz09PWN1cnJNb250aElkLCduZXh0bW9udGgnOmQuY21vPT09bmV4dE1vbnRoSWQsJ2hpZ2hsaWdodCc6ZC5oaWdobGlnaHR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVxcXCJ7J21hcmtjdXJyZGF5JzpkLmN1cnJEYXkmJm9wdHMubWFya0N1cnJlbnREYXksICdkaW1kYXknOiBkLmhpZ2hsaWdodCAmJiAoZC5jbW89PT1wcmV2TW9udGhJZCB8fCBkLmNtbz09PW5leHRNb250aElkIHx8IGQuZGlzYWJsZWQpfVxcXCI+e3tkLmRhdGVPYmouZGF5fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJtb250aHRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0TW9udGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IG1yIG9mIG1vbnRoc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIm1vbnRoY2VsbCB0YWJsZXNpbmdsZW1vbnRoXFxcIiBbbmdDbGFzc109XFxcInsnc2VsZWN0ZWRtb250aCc6IG0uc2VsZWN0ZWQsICdkaXNhYmxlZCc6IG0uZGlzYWJsZWR9XFxcIiAqbmdGb3I9XFxcImxldCBtIG9mIG1yXFxcIiAoY2xpY2spPVxcXCIhbS5kaXNhYmxlZCYmb25Nb250aENlbGxDbGlja2VkKG0pOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvbk1vbnRoQ2VsbEtleURvd24oJGV2ZW50LCBtKVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vbnRodmFsdWVcXFwiIFtuZ0NsYXNzXT1cXFwieydtYXJrY3Vycm1vbnRoJzptLmN1cnJNb250aCYmb3B0cy5tYXJrQ3VycmVudE1vbnRofVxcXCI+e3ttLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwieWVhcnRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0WWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG5jZWxsXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0biBteWRwaWNvbiBpY29uLW15ZHB1cFxcXCIgKGNsaWNrKT1cXFwib25QcmV2WWVhcnMoJGV2ZW50LCB5ZWFyc1swXVswXS55ZWFyKVxcXCIgW2Rpc2FibGVkXT1cXFwicHJldlllYXJzRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieyd5ZWFyY2hhbmdlYnRuZW5hYmxlZCc6ICFwcmV2WWVhcnNEaXNhYmxlZCwgJ3llYXJjaGFuZ2VidG5kaXNhYmxlZCc6IHByZXZZZWFyc0Rpc2FibGVkfVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgeXIgb2YgeWVhcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ5ZWFyY2VsbCB0YWJsZXNpbmdsZXllYXJcXFwiIFtuZ0NsYXNzXT1cXFwieydzZWxlY3RlZHllYXInOiB5LnNlbGVjdGVkLCAnZGlzYWJsZWQnOiB5LmRpc2FibGVkfVxcXCIgKm5nRm9yPVxcXCJsZXQgeSBvZiB5clxcXCIgKGNsaWNrKT1cXFwiIXkuZGlzYWJsZWQmJm9uWWVhckNlbGxDbGlja2VkKHkpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvblllYXJDZWxsS2V5RG93bigkZXZlbnQsIHkpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwieWVhcnZhbHVlXFxcIiBbbmdDbGFzc109XFxcInsnbWFya2N1cnJ5ZWFyJzp5LmN1cnJZZWFyJiZvcHRzLm1hcmtDdXJyZW50WWVhcn1cXFwiPnt7eS55ZWFyfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI1XFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0bmNlbGxcXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuIG15ZHBpY29uIGljb24tbXlkcGRvd25cXFwiIChjbGljayk9XFxcIm9uTmV4dFllYXJzKCRldmVudCwgeWVhcnNbMF1bMF0ueWVhcilcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyc0Rpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsneWVhcmNoYW5nZWJ0bmVuYWJsZWQnOiAhbmV4dFllYXJzRGlzYWJsZWQsICd5ZWFyY2hhbmdlYnRuZGlzYWJsZWQnOiBuZXh0WWVhcnNEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5teWRwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCxcXHJcXG4ubXlkcCAuc2VsZWN0aW9uZ3JvdXAsXFxyXFxuLm15ZHAgLnNlbGVjdGlvbixcXHJcXG4ubXlkcCAuc2VsZWN0b3IsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSxcXHJcXG4ubXlkcCAueWVhcnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNikgdGQ6Zmlyc3QtY2hpbGQsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmZpcnN0LWNoaWxkLFxcclxcbi5teWRwIC55ZWFydGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDcpIHRkOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDYpIHRkOmxhc3QtY2hpbGQsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmxhc3QtY2hpbGQsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNykgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmxlZnRib3JkZXJyYWRpdXMge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RvcmZhZGVpbiAwLjFzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2VsZWN0b3JmYWRlaW4gMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FERDhFNjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNlbGVjdG9yZmFkZWluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzZWxlY3RvcmZhZGVpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YmVmb3JlIHtcXHJcXG4gICAgYm90dG9tOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGQUZBRkE7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpiZWZvcmUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNDQ0M7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTFweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpmb2N1czpiZWZvcmUge1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjQUREOEU2O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvd2xlZnQ6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dsZWZ0OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93cmlnaHQ6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dyaWdodDpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA4NiU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5hbGlnbnNlbGVjdG9ycmlnaHQge1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbmdyb3VwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmludmFsaWRkYXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxREVERTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgOjotbXMtY2xlYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsYnRuZ3JvdXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgZm9udC1zaXplOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRubGVmdGJvcmRlciB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcmVuYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyZW5hYmxlZCxcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2VlbmFibGVkLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZWVuYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZW5hYmxlZCxcXHJcXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZCxcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rpb25kaXNhYmxlZCxcXHJcXG4ubXlkcCAuYnRucGlja2VyZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bmRpc2FibGVkLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICBvcGFjaXR5OiAwLjY1O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0aW9uZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHRkIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMikge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIgdGQ6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSxcXHJcXG4ubXlkcCAueWVhcnRhYmxlLFxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGUsXFxyXFxuLm15ZHAgLmRheWNlbGwsXFxyXFxuLm15ZHAgLm1vbnRoY2VsbCxcXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBjb2xvcjogIzAwMzM2NjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLndlZWtkYXl0aXRsZSxcXHJcXG4ubXlkcCAuZGF5Y2VsbCxcXHJcXG4ubXlkcCAubW9udGhjZWxsLFxcclxcbi5teWRwIC55ZWFyY2VsbCB7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAud2Vla2RheXRpdGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBtYXgtd2lkdGg6IDM2cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGV3ZWVrbmJyIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCQkI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tb250aGNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGF5Y2VsbCAuZGF0ZXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGwgLmRhdGV2YWx1ZSBzcGFuIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGx3ZWVrbmJyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaW5saW5lZHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5wcmV2bW9udGgsXFxyXFxuLm15ZHAgLm5leHRtb250aCB7XFxyXFxuICAgIGNvbG9yOiAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNDQ0M7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQkVGRUY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogI0MzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRpbWRheSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmN1cnJtb250aCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tYXJrZGF0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm1hcmtjdXJyZGF5LFxcclxcbi5teWRwIC5tYXJrY3Vycm1vbnRoLFxcclxcbi5teWRwIC5tYXJrY3VycnllYXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGVkZGF5IC5kYXRldmFsdWUsXFxyXFxuLm15ZHAgLnNlbGVjdGVkbW9udGggLm1vbnRodmFsdWUsXFxyXFxuLm15ZHAgLnNlbGVjdGVkeWVhciAueWVhcnZhbHVlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVCRkZGO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG5jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5jZWxsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuLFxcclxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0bixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcclxcbi5teWRwIC5oZWFkZXJidG4sXFxyXFxuLm15ZHAgLmhlYWRlcm1vbnRodHh0LFxcclxcbi5teWRwIC5oZWFkZXJ5ZWFydHh0LFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBwYWRkaW5nOiAwIDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIG1pbi13aWR0aDogNjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJtb250aHR4dCxcXHJcXG4ubXlkcCAuaGVhZGVyeWVhcnR4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5jbGVhcjpmb2N1cyxcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2U6Zm9jdXMsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlOmZvY3VzLFxcclxcbi5teWRwIC5idG5waWNrZXI6Zm9jdXMsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0FERDhFNjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bjpmb2N1cyxcXHJcXG4ubXlkcCAubW9udGhsYWJlbDpmb2N1cyxcXHJcXG4ubXlkcCAueWVhcmxhYmVsOmZvY3VzLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6ICNBREQ4RTY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kYXljZWxsOmZvY3VzLFxcclxcbi5teWRwIC5tb250aGNlbGw6Zm9jdXMsXFxyXFxuLm15ZHAgLnllYXJjZWxsOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNDQ0M7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBjYWxlbmRhcixcXHJcXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwbGVmdCxcXHJcXG4ubXlkcCAuaWNvbi1teWRwcmlnaHQsXFxyXFxuLm15ZHAgLmljb24tbXlkcHVwLFxcclxcbi5teWRwIC5pY29uLW15ZHBkb3duIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlIC5pY29uLW15ZHBsZWZ0LFxcclxcbi5teWRwIC5idG5pbmNyZWFzZSAuaWNvbi1teWRwcmlnaHQge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHB0b2RheSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIHRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCB0YWJsZSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIHRhYmxlLFxcclxcbi5teWRwIHRoLFxcclxcbi5teWRwIHRkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuYnRuY2xlYXJlbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZWVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG5lbmFibGVkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnRhYmxlc2luZ2xlZGF5OmhvdmVyLFxcclxcbi5teWRwIC50YWJsZXNpbmdsZW1vbnRoOmhvdmVyLFxcclxcbi5teWRwIC50YWJsZXNpbmdsZXllYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubW9udGhsYWJlbCxcXHJcXG4ubXlkcCAueWVhcmxhYmVsLFxcclxcbi5teWRwIC5pbnB1dG5vdGVkaXRhYmxlLFxcclxcbi5teWRwIC5kYXljZWxsLFxcclxcbi5teWRwIC5tb250aGNlbGwsXFxyXFxuLm15ZHAgLnllYXJjZWxsIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLm1vbnRobGFiZWw6aG92ZXIsXFxyXFxuLm15ZHAgLnllYXJsYWJlbDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcclxcbiAgICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LEFBRUFBQUFQQUlBQUF3QndSMU5WUWlDTUpYa0FBQUQ4QUFBQVZFOVRMekkrSUVoTkFBQUJVQUFBQUZaamJXRnc2VUtjZndBQUFhZ0FBQUhFWTNaMElBYlYvd1FBQUF6OEFBQUFJR1p3WjIyS2taQlpBQUFOSEFBQUMzQm5ZWE53QUFBQUVBQUFEUFFBQUFBSVoyeDVacWJuN3ljQUFBTnNBQUFGWEdobFlXUU5YMGJMQUFBSXlBQUFBRFpvYUdWaEJ6d0RXUUFBQ1FBQUFBQWthRzEwZUJYQi8vOEFBQWtrQUFBQUlHeHZZMkVHTkFURUFBQUpSQUFBQUJKdFlYaHdBWGdNT2dBQUNWZ0FBQUFnYm1GdFpaS1VGZ01BQUFsNEFBQUMvWEJ2YzNSOU51WmxBQUFNZUFBQUFIcHdjbVZ3NVVFcnZBQUFHSXdBQUFDR0FBRUFBQUFLQURBQVBnQUNiR0YwYmdBT1JFWk1WQUFhQUFRQUFBQUFBQUFBQVFBQUFBUUFBQUFBQUFBQUFRQUFBQUZzYVdkaEFBZ0FBQUFCQUFBQUFRQUVBQVFBQUFBQkFBZ0FBUUFHQUFBQUFRQUFBQUVDdUFHUUFBVUFBQUo2QXJ3QUFBQ01Bbm9DdkFBQUFlQUFNUUVDQUFBQ0FBVURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZCbVJXUUFRT2dBNkFZRFV2OXFBRm9EVWdDV0FBQUFBUUFBQUFBQUFBQUFBQVVBQUFBREFBQUFMQUFBQUFRQUFBRmdBQUVBQUFBQUFGb0FBd0FCQUFBQUxBQURBQW9BQUFGZ0FBUUFMZ0FBQUFRQUJBQUJBQURvQnYvL0FBRG9BUC8vQUFBQUFRQUVBQUFBQVFBQ0FBTUFCQUFGQUFZQUJ3QUFBUVlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEQUFBQUFBQVpBQUFBQUFBQUFBSEFBRG9BQUFBNkFBQUFBQUJBQURvQVFBQTZBRUFBQUFDQUFEb0FnQUE2QUlBQUFBREFBRG9Bd0FBNkFNQUFBQUVBQURvQkFBQTZBUUFBQUFGQUFEb0JRQUE2QVVBQUFBR0FBRG9CZ0FBNkFZQUFBQUhBQUVBQUFBQUFVRUNmUUFPQUFxM0FBQUFaaFFCQlJVckFSUVBBUVlpSmpVUk5ENEJId0VXQVVFSytnc2NGaFljQy9vS0FWNE9DL29MRmc0QjlBOFVBZ3o2Q2dBQUFRQUFBQUFCWndKOEFBMEFGMEFVQUFFQUFRRkhBQUVBQVc4QUFBQm1GeE1DQlJZckFSRVVCaUl2QVNZMFB3RTJNaFlCWlJRZ0Nmb0tDdm9MSEJnQ1dQNE1EaFlMK2dzY0Mvb0xGZ0FBQUFBRkFBRC9hZ09oQTFJQUZBQVlBQ2dBT0FCY0FMZEFFQ29hQWdvRk1pSUNCZ29OQVFBQkEwZExzQXBRV0VBL0Rnd0NDZ1VHQmdwbEFBSUVBUVFDQVcwQUFRQUVBUUJyQUFBREJBQURhd2dCQmdBRUFnWUVYd2NCQlFVTFdBMEJDd3NNU0FBREF3bFlBQWtKRFFsSkcwQkFEZ3dDQ2dVR0JRb0diUUFDQkFFRUFnRnRBQUVBQkFFQWF3QUFBd1FBQTJzSUFRWUFCQUlHQkY4SEFRVUZDMWdOQVFzTERFZ0FBd01KV0FBSkNRMEpTVmxBR0Z0WlZsTlFUMHhKUmtRL1BDWW1KaVFSRlJRWEVnOEZIU3NKQVFZaUx3RW1ORDhCTmpJZkFUYzJNaDhCRmhRQklSRWhOelUwSmlzQklnWWRBUlFXT3dFeU5pVTFOQ1lyQVNJR0hRRVVGanNCTWpZM0VSUUdJeUVpSmpVUk5EWTdBVFUwTmpzQk1oWWRBVE0xTkRZN0FUSVdCeFV6TWhZQzEvN2lCUTRHb1FVRkdnVU9CbnYzQmc0R0dRWDlhd01TL083WENnZ2tDQW9LQ0NRSUNnR3NDZ2dqQ0FvS0NDTUlDdGNzSFB6dUhTb3FIVWcwSlNRbE5OWTJKQ01sTmdGSEhTb0JPUDdpQlFXaEJnNEZHZ1VGZS9nRkJSb0ZEdjV6QWp4cm9RZ0tDZ2loQ0FvS0NLRUlDZ29Jb1FnS0NpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBQVBBQUQvYWdPaEExSUFBd0FIQUFzQUR3QVRBQmNBR3dBZkFDTUFNd0EzQURzQVB3QlBBSE1BbUVDVlFTVUNIUkpKTFNRREV4MENSeUVmQWgwVENSMVVHd0VUR1JjTkF3a0lFd2xmR0JZTUF3Z1ZFUWNEQlFRSUJWNFVFQVlEQkE4TEF3TUJBQVFCWGhvQkVoSWVXQ0FCSGg0TVNBNEtBZ01BQUJ4WUFCd2NEUnhKY25CdGFtZG1ZMkJkVzFaVFRVeEZSRDgrUFR3N09qazROelkxTkRFdktTY2pJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFUkVSRVJFUkVSQWlCUjByRnpNMUl4Y3pOU01uTXpVakZ6TTFJeWN6TlNNQk16VWpKek0xSXdFek5TTW5NelVqQXpVMEppY2pJZ1lIRlJRV056TXlOZ0V6TlNNbk16VWpGek0xSXpjMU5DWW5JeUlHRnhVVUZqY3pNalkzRVJRR0l5RWlKalVSTkRZN0FUVTBOanNCTWhZZEFUTTFORFk3QVRJV0J4VXpNaFpIb2FIRnNyTEZvYUhGc3JMRm9hRUJtN096MXJLeUFheWhvZGF6czhRTUJpUUhDZ0VNQmlRSENnR2JvYUhXczdQV29hRVNDZ2dqQnd3QkNnZ2pDQXJYTEJ6ODdoMHFLaDFJTkNVa0pUVFdOaVFqSlRZQlJ4MHFUNkdob1NTeXNySWtvZjNFb2ZxaC9jU2hKTElCTUtFSENnRU1CcUVIREFFSy9pYXlKS0dob1d1aEJ3b0JEQWFoQnd3QkNpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBSC8vd0FBQWpzQnlRQU9BQkZBRGdBQkFBRnZBQUFBWmhVeUFnVVdLeVVVQmljaElpNEJQd0UyTWg4QkZnSTdGQS8rREE4VUFnejZDaDRLK2dxckRoWUJGQjRMK2dvSytnc0FBQUFCQUFBQUFBSThBZTBBRGdBWFFCUUFBUUFCQVVjQUFRQUJid0FBQUdZMUZBSUZGaXNCRkE4QkJpSXZBU1kwTmpNaE1oWUNPd3I2Q3h3TCtnc1dEZ0gwRGhZQnlRNEwrZ3NMK2dzY0ZoWUFBQUVBQVAvdkF0UUNoZ0FrQUI1QUd5SVpFQWNFQUFJQlJ3TUJBZ0FDYndFQkFBQm1GQndVRkFRRkdDc2xGQThCQmlJdkFRY0dJaThCSmpRL0FTY21ORDhCTmpJZkFUYzJNaDhCRmhRUEFSY1dBdFFQVEJBc0VLU2tFQ3dRVEJBUXBLUVFFRXdRTEJDa3BCQXNFRXdQRDZTa0QzQVdFRXdQRDZXbER3OU1FQ3dRcEtRUUxCQk1FQkNrcEJBUVRBOHVENlNrRHdBQkFBQUFBUUFBYmR5Y3pWOFBQUFVBQ3dQb0FBQUFBTlVzZ1pVQUFBQUExU3lCbGYvLy8yb0Q2QU5TQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU5TLzJvQUFBUG8vLy8vL2dQb0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBSUErZ0FBQUZsQUFBQlpRQUFBK2dBQUFPZ0FBQUNPLy8vQWpzQUFBTVJBQUFBQUFBQUFDSUFTZ0VvQWhZQ1BBSmtBcTRBQUFBQkFBQUFDQUIwQUE4QUFBQUFBQUlBUkFCVUFITUFBQUNwQzNBQUFBQUFBQUFBRWdEZUFBRUFBQUFBQUFBQU5RQUFBQUVBQUFBQUFBRUFEQUExQUFFQUFBQUFBQUlBQndCQkFBRUFBQUFBQUFNQURBQklBQUVBQUFBQUFBUUFEQUJVQUFFQUFBQUFBQVVBQ3dCZ0FBRUFBQUFBQUFZQURBQnJBQUVBQUFBQUFBb0FLd0IzQUFFQUFBQUFBQXNBRXdDaUFBTUFBUVFKQUFBQWFnQzFBQU1BQVFRSkFBRUFHQUVmQUFNQUFRUUpBQUlBRGdFM0FBTUFBUVFKQUFNQUdBRkZBQU1BQVFRSkFBUUFHQUZkQUFNQUFRUUpBQVVBRmdGMUFBTUFBUVFKQUFZQUdBR0xBQU1BQVFRSkFBb0FWZ0dqQUFNQUFRUUpBQXNBSmdINVEyOXdlWEpwWjJoMElDaERLU0F5TURFM0lHSjVJRzl5YVdkcGJtRnNJR0YxZEdodmNuTWdRQ0JtYjI1MFpXeHNieTVqYjIxdGVXUmhkR1Z3YVdOclpYSlNaV2QxYkdGeWJYbGtZWFJsY0dsamEyVnliWGxrWVhSbGNHbGphMlZ5Vm1WeWMybHZiaUF4TGpCdGVXUmhkR1Z3YVdOclpYSkhaVzVsY21GMFpXUWdZbmtnYzNabk1uUjBaaUJtY205dElFWnZiblJsYkd4dklIQnliMnBsWTNRdWFIUjBjRG92TDJadmJuUmxiR3h2TG1OdmJRQkRBRzhBY0FCNUFISUFhUUJuQUdnQWRBQWdBQ2dBUXdBcEFDQUFNZ0F3QURFQU53QWdBR0lBZVFBZ0FHOEFjZ0JwQUdjQWFRQnVBR0VBYkFBZ0FHRUFkUUIwQUdnQWJ3QnlBSE1BSUFCQUFDQUFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFDNEFZd0J2QUcwQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBVWdCbEFHY0FkUUJzQUdFQWNnQnRBSGtBWkFCaEFIUUFaUUJ3QUdrQVl3QnJBR1VBY2dCdEFIa0FaQUJoQUhRQVpRQndBR2tBWXdCckFHVUFjZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURBQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQUFJQUFBQUFBQUFBQ2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDQUVDQVFNQkJBRUZBUVlCQndFSUFRa0FDVzE1WkhCeWFXZG9kQWh0ZVdSd2JHVm1kQWx0ZVdSd2RHOWtZWGtNYlhsa2NHTmhiR1Z1WkdGeUJtMTVaSEIxY0FodGVXUndaRzkzYmdwdGVXUndjbVZ0YjNabEFBQUFBQUFCQUFILy93QVBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlBQmdBR0FBWUExTC9hZ05TLzJxd0FDd2dzQUJWV0VWWklDQkx1QUFPVVV1d0JsTmFXTEEwRzdBb1dXQm1JSXBWV0xBQ0pXRzVDQUFJQUdOakkySWJJU0d3QUZtd0FFTWpSTElBQVFCRFlFSXRzQUVzc0NCZ1ppMndBaXdnWkNDd3dGQ3dCQ1phc2lnQkNrTkZZMFZTVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDeEFRcERSV05GWVdTd0tGQllJYkVCQ2tORlkwVWdzREJRV0NHd01Ga2JJTERBVUZnZ1ppQ0tpbUVnc0FwUVdHQWJJTEFnVUZnaHNBcGdHeUN3TmxCWUliQTJZQnRnV1ZsWkc3QUJLMWxaSTdBQVVGaGxXVmt0c0FNc0lFVWdzQVFsWVdRZ3NBVkRVRml3QlNOQ3NBWWpRaHNoSVZtd0FXQXRzQVFzSXlFaklTQmtzUVZpUWlDd0JpTkNzUUVLUTBWanNRRUtRN0FCWUVWanNBTXFJU0N3QmtNZ2lpQ0tzQUVyc1RBRkpiQUVKbEZZWUZBYllWSlpXQ05aSVNDd1FGTllzQUVyR3lHd1FGa2pzQUJRV0dWWkxiQUZMTEFIUXl1eUFBSUFRMkJDTGJBR0xMQUhJMElqSUxBQUkwSmhzQUppWnJBQlk3QUJZTEFGS2kyd0J5d2dJRVVnc0F0RFk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallFU3dBV0F0c0Fnc3NnY0xBRU5GUWlvaHNnQUJBRU5nUWkyd0NTeXdBRU1qUkxJQUFRQkRZRUl0c0Fvc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaQ0N3SUZCWUliQUFHN0F3VUZpd0lCdXdRRmxaSTdBQVVGaGxXYkFESlNOaFJFU3dBV0F0c0Fzc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaTEFrVUZpd0FCdXdRRmtqc0FCUVdHVlpzQU1sSTJGRVJMQUJZQzJ3REN3Z3NBQWpRcklMQ2dORldDRWJJeUZaS2lFdHNBMHNzUUlDUmJCa1lVUXRzQTRzc0FGZ0lDQ3dERU5Lc0FCUVdDQ3dEQ05DV2JBTlEwcXdBRkpZSUxBTkkwSlpMYkFQTENDd0VHSm1zQUZqSUxnRUFHT0tJMkd3RGtOZ0lJcGdJTEFPSTBJakxiQVFMRXRVV0xFRVpFUlpKTEFOWlNONExiQVJMRXRSV0V0VFdMRUVaRVJaR3lGWkpMQVRaU040TGJBU0xMRUFEME5WV0xFUEQwT3dBV0ZDc0E4cldiQUFRN0FDSlVLeERBSWxRckVOQWlWQ3NBRVdJeUN3QXlWUVdMRUJBRU5nc0FRbFFvcUtJSW9qWWJBT0tpRWpzQUZoSUlvalliQU9LaUVic1FFQVEyQ3dBaVZDc0FJbFliQU9LaUZac0F4RFI3QU5RMGRnc0FKaUlMQUFVRml3UUdCWlpyQUJZeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndFeXdBc1FBQ1JWUllzQThqUWlCRnNBc2pRckFLSTdBQllFSWdZTEFCWWJVUUVBRUFEZ0JDUW9wZ3NSSUdLN0J5S3hzaVdTMndGQ3l4QUJNckxiQVZMTEVCRXlzdHNCWXNzUUlUS3kyd0Z5eXhBeE1yTGJBWUxMRUVFeXN0c0Jrc3NRVVRLeTJ3R2l5eEJoTXJMYkFiTExFSEV5c3RzQndzc1FnVEt5MndIU3l4Q1JNckxiQWVMQUN3RFN1eEFBSkZWRml3RHlOQ0lFV3dDeU5Dc0FvanNBRmdRaUJnc0FGaHRSQVFBUUFPQUVKQ2ltQ3hFZ1lyc0hJckd5SlpMYkFmTExFQUhpc3RzQ0Fzc1FFZUt5MndJU3l4QWg0ckxiQWlMTEVESGlzdHNDTXNzUVFlS3kyd0pDeXhCUjRyTGJBbExMRUdIaXN0c0NZc3NRY2VLeTJ3Snl5eENCNHJMYkFvTExFSkhpc3RzQ2tzSUR5d0FXQXRzQ29zSUdDd0VHQWdReU93QVdCRHNBSWxZYkFCWUxBcEtpRXRzQ3Nzc0NvcnNDb3FMYkFzTENBZ1J5QWdzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUNOaE9DTWdpbFZZSUVjZ0lMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkFqWVRnYklWa3RzQzBzQUxFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDNHNBTEFOSzdFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDOHNJRFd3QVdBdHNEQXNBTEFCUldPNEJBQmlJTEFBVUZpd1FHQlpackFCWTdBQks3QUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZN0FCSzdBQUZyUUFBQUFBQUVRK0l6aXhMd0VWS2kyd01Td2dQQ0JISUxBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlkyQ3dBRU5oT0Myd01pd3VGend0c0RNc0lEd2dSeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NBQkRZYkFCUTJNNExiQTBMTEVDQUJZbElDNGdSN0FBSTBLd0FpVkppb3BISTBjallTQllZaHNoV2JBQkkwS3lNd0VCRlJRcUxiQTFMTEFBRnJBRUpiQUVKVWNqUnlOaHNBbERLMldLTGlNZ0lEeUtPQzJ3Tml5d0FCYXdCQ1d3QkNVZ0xrY2pSeU5oSUxBRUkwS3dDVU1ySUxCZ1VGZ2dzRUJSV0xNQ0lBTWdHN01DSmdNYVdVSkNJeUN3Q0VNZ2lpTkhJMGNqWVNOR1lMQUVRN0FDWWlDd0FGQllzRUJnV1dhd0FXTmdJTEFCS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dBbUlnc0FCUVdMQkFZRmxtc0FGallTTWdJTEFFSmlOR1lUZ2JJN0FJUTBhd0FpV3dDRU5ISTBjallXQWdzQVJEc0FKaUlMQUFVRml3UUdCWlpyQUJZMkFqSUxBQkt5T3dCRU5nc0FFcnNBVWxZYkFGSmJBQ1lpQ3dBRkJZc0VCZ1dXYXdBV093QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkEzTExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNEZ3NzQUFXSUxBSUkwSWdJQ0JHSTBld0FTc2pZVGd0c0Rrc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYmtJQUFnQVkyTWpJRmhpR3lGWlk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallDTXVJeUFnUElvNEl5RlpMYkE2TExBQUZpQ3dDRU1nTGtjalJ5TmhJR0N3SUdCbXNBSmlJTEFBVUZpd1FHQlpackFCWXlNZ0lEeUtPQzJ3T3l3aklDNUdzQUlsUmxKWUlEeFpMckVyQVJRckxiQThMQ01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Qwc0l5QXVSckFDSlVaU1dDQThXU01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Q0c3NEVXJJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLeTJ3UHl5d05pdUtJQ0E4c0FRalFvbzRJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLN0FFUXk2d0t5c3RzRUFzc0FBV3NBUWxzQVFtSUM1SEkwY2pZYkFKUXlzaklEd2dMaU00c1NzQkZDc3RzRUVzc1FnRUpVS3dBQmF3QkNXd0JDVWdMa2NqUnlOaElMQUVJMEt3Q1VNcklMQmdVRmdnc0VCUldMTUNJQU1nRzdNQ0pnTWFXVUpDSXlCSHNBUkRzQUppSUxBQVVGaXdRR0JaWnJBQlkyQWdzQUVySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQUNZaUN3QUZCWXNFQmdXV2F3QVdOaHNBSWxSbUU0SXlBOEl6Z2JJU0FnUmlOSHNBRXJJMkU0SVZteEt3RVVLeTJ3UWl5d05Tc3VzU3NCRkNzdHNFTXNzRFlySVNNZ0lEeXdCQ05DSXppeEt3RVVLN0FFUXk2d0t5c3RzRVFzc0FBVklFZXdBQ05Dc2dBQkFSVVVFeTZ3TVNvdHNFVXNzQUFWSUVld0FDTkNzZ0FCQVJVVUV5NndNU290c0VZc3NRQUJGQk93TWlvdHNFY3NzRFFxTGJCSUxMQUFGa1VqSUM0Z1Jvb2pZVGl4S3dFVUt5MndTU3l3Q0NOQ3NFZ3JMYkJLTExJQUFFRXJMYkJMTExJQUFVRXJMYkJNTExJQkFFRXJMYkJOTExJQkFVRXJMYkJPTExJQUFFSXJMYkJQTExJQUFVSXJMYkJRTExJQkFFSXJMYkJSTExJQkFVSXJMYkJTTExJQUFENHJMYkJUTExJQUFUNHJMYkJVTExJQkFENHJMYkJWTExJQkFUNHJMYkJXTExJQUFFQXJMYkJYTExJQUFVQXJMYkJZTExJQkFFQXJMYkJaTExJQkFVQXJMYkJhTExJQUFFTXJMYkJiTExJQUFVTXJMYkJjTExJQkFFTXJMYkJkTExJQkFVTXJMYkJlTExJQUFEOHJMYkJmTExJQUFUOHJMYkJnTExJQkFEOHJMYkJoTExJQkFUOHJMYkJpTExBM0t5NnhLd0VVS3kyd1l5eXdOeXV3T3lzdHNHUXNzRGNyc0R3ckxiQmxMTEFBRnJBM0s3QTlLeTJ3Wml5d09Dc3VzU3NCRkNzdHNHY3NzRGdyc0RzckxiQm9MTEE0SzdBOEt5MndhU3l3T0N1d1BTc3RzR29zc0RrckxyRXJBUlFyTGJCckxMQTVLN0E3S3kyd2JDeXdPU3V3UENzdHNHMHNzRGtyc0QwckxiQnVMTEE2S3k2eEt3RVVLeTJ3Ynl5d09pdXdPeXN0c0hBc3NEb3JzRHdyTGJCeExMQTZLN0E5S3kyd2NpeXpDUVFDQTBWWUlSc2pJVmxDSzdBSVpiQURKRkI0c0FFVk1DMEFTN2dBeUZKWXNRRUJqbG13QWJrSUFBZ0FZM0N4QUFWQ3NnQUJBQ3F4QUFWQ3N3b0NBUWdxc1FBRlFyTU9BQUVJS3JFQUJrSzZBc0FBQVFBSktyRUFCMEs2QUVBQUFRQUpLckVEQUVTeEpBR0lVVml3UUloWXNRTmtSTEVtQVloUldMb0lnQUFCQkVDSVkxUllzUU1BUkZsWldWbXpEQUlCRENxNEFmK0ZzQVNOc1FJQVJBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm15ZHBpY29uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHByaWdodDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwbGVmdDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDFcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwdG9kYXk6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGNhbGVuZGFyOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwM1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHB1cDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwZG93bjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwNlxcXCI7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN1Z2dlc3Rpb25zIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiAxLjZyZW07IH1cXG4gIC5zdWdnZXN0aW9ucyB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgbWF4LWhlaWdodDogMzByZW07XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5zdWdnZXN0aW9ucyBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEuNnJlbTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogNzAlO1xcbiAgaGVpZ2h0OiAzLjRyZW07IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNnJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5maWx0ZXItaW5wdXQge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLnN1Z2dlc3Rpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5zdWdnZXN0aW9ucyBsaSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRhY3QtdXMge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy9jb250YWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5jb250YWN0LXVzIHtcXG4gIG1hcmdpbi10b3A6IDZyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuICAuY29udGFjdC11cyBpbnB1dCB7XFxuICAgIGhlaWdodDogNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07IH1cXG4gICAgLmNvbnRhY3QtdXMgaW5wdXQ6cmVxdWlyZWQge1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5jb250YWN0LXVzIGgxIHtcXG4gICAgZm9udC1zaXplOiA0LjVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmNvbnRhY3QtdXMgLm1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuICAuY29udGFjdC11cyAubWVzc2FnZSxcXG4gIC5jb250YWN0LXVzIC5zdWJqZWN0IHtcXG4gICAgd2lkdGg6IDY0cmVtOyB9XFxuXFxuLnN0YXRpYy1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDYwcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmZvcm0tZ3JvdXAgLmFsZXJ0IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbi5uYW1lLWdyb3VwLFxcbi5tYWlsLW51bWJlci1ncm91cCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5tZXNzYWdlLWJveCAuYWxlcnQsXFxuLnN1YmplY3QtYm94IC5hbGVydCB7XFxuICB3aWR0aDogNjByZW07IH1cXG5cXG4ubWVzc2FnZS1kaWFsb2cge1xcbiAgaGVpZ2h0OiAyMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogIzI2MTgxRDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMzUlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuN3B4IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbiAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgICAubWVzc2FnZS1kaWFsb2cgLndyYXBwZXIgLnRleHQge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07IH1cXG4gICAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIC5vay1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICM3MzY1NkE7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHdpZHRoOiAzMCU7IH1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cXG5cXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XFxuICAvKiBncmVlbiAqLyB9XFxuXFxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcXG4gIC8qIHJlZCAqLyB9XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07IH1cXG4gIC5zdWJtaXQtYnRuOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGN1cnNvcjogYXV0bzsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZvcm0td3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuZm9ybS1ncm91cCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmFtZS1ncm91cCxcXG4gIC5zdWJqZWN0LWJveCxcXG4gIC5tZXNzYWdlLWJveCxcXG4gIC5tYWlsLW51bWJlci1ncm91cCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMnJlbTsgfVxcbiAgLmNvbnRhY3QtdXMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IC4ycmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nLXRvcDogLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogZ3JheTsgfVxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSB7XFxuICAgIHdpZHRoOiAxMy41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtO1xcbiAgICBoZWlnaHQ6IDMuNHJlbTtcXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkICM0MjY3NzE7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLmZyb20tZGF0ZSBpbnB1dCxcXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBoZWlnaHQ6IDMuNHJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC50by1kYXRlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiA3MCU7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhpZGUtZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kcm9wZG93bi1saXN0IHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOXJlbTsgfVxcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmRhdGEtbGlzdCBpbnB1dCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgbWFyZ2luLXJpZ2h0OiAuOHJlbTtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmRhdGEtbGlzdCBzcGFuIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcbiAgICAuZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiAzLjRyZW07IH1cXG4gIC5kcm9wZG93bi1saXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDIwcmVtIDByZW0gMjByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA1JTsgfVxcbiAgLmZvb3RlciBzcGFuLFxcbiAgLmZvb3RlciBhIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAwIDElOyB9XFxuICAuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaGVybyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udmlldy1hbGwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyNjE4MUQ7IH1cXG5cXG4ubWFpbi1wYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuLnZpZXctYWxsLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5zdWItaGVhZGluZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHJlbTsgfVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgdG9wOiAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XFxuICB3aWR0aDogMzByZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IGluaXRpYWw7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEud3MtaGVhZGluZyB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnSHVybWVHZW9tZXRyaWNTYW5zMy1SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcblxcbiN3b3Jrc2hvcHMge1xcbiAgcGFkZGluZy10b3A6IDVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgdG9wOiAzMCU7IH1cXG4gIC5idG4ge1xcbiAgICB0b3A6IDNyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMy44cmVtOyB9XFxuICBoZWFkZXIge1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgLmJ0biB7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRvcC1iYXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDb2lueScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5uYXYtbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmZhLWJhcnMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IC40cmVtO1xcbiAgcGFkZGluZy1yaWdodDogLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5cXG4uZmlsdGVyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLm5hdmJhci10b2dnbGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBoZWlnaHQ6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuICBuYXYgaW1nIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgbmF2IC5uYXZiYXItbmF2IGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBuYXYgdWwge1xcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgbmF2IHtcXG4gICAgaGVpZ2h0OiA1cmVtOyB9XFxuICAgIG5hdiB1bCB7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5maWx0ZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtOyB9XFxuICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07IH1cXG4gIC5oaWRlTmF2YmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5hdmJhci1oZWFkZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItbmF2ID4gbGkge1xcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTU1cHgpIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuaGlkZU5hdmJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTsgfVxcbiAgLm5hdmJhci1oZWFkZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAubmF2YmFyLW5hdiB7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDcuNXB4OyB9XFxuICAubmF2YmFyLW5hdiA+IGxpIHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG4gIC5jb2xsYXBzZS5pbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDVyZW0gMTByZW0gMHJlbSAxMHJlbTsgfVxcblxcbi5kZXRhaWwtaW1nIHtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblxcbi5wcm9maWxlLWltZyB7XFxuICB3aWR0aDogMTJyZW07XFxuICBoZWlnaHQ6IDEycmVtO1xcbiAgLypib3JkZXItcmFkaXVzOiA1MCU7Ki9cXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICAvKmJvcmRlcjogM3B4IHNvbGlkICMxNTQyNEU7Ki8gfVxcblxcbi5wcm9maWxlLXBob3RvIHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLnBob3RvZ3JhcGhlci1uYW1lIGgxIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIGg0IHtcXG4gIG1hcmdpbi10b3A6IDA7IH1cXG5cXG4uZGV0YWlsLWxvY2F0aW9uIHtcXG4gIGNvbG9yOiAjNzM2NTZBO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07IH1cXG5cXG4ud2Vic2l0ZS1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG5cXG4vKiBTdHlsZSB0aGUgdGFiICovXFxuZGl2LnRhYiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWFyZ2luLXRvcDogNXJlbTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICBkaXYudGFiIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjb2xvcjogIzczNjU2QTsgfVxcbiAgICBkaXYudGFiIGJ1dHRvbi5hY3RpdmUge1xcbiAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2NjYzsqL1xcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNzM2NTZBOyB9XFxuXFxuLyogU3R5bGUgdGhlIHRhYiBjb250ZW50ICovXFxuLnRhYmNvbnRlbnQge1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzMCwgMjMzLCAwLjU3KTsgfVxcblxcbi5kZXRhaWwtdGFicyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjUlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogNHJlbTsgfVxcblxcbi5kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXJlbTsgfVxcblxcbi5kYXktd3JhcHBlcixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtOyB9XFxuXFxuLmRheS13cmFwcGVyIC5sb2NhdGlvbixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIGg0IHtcXG4gIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIHAge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC40cmVtOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIGgzIHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuI0dhbGxlcnkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAjR2FsbGVyeSBpbWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgaGVpZ2h0OiAyOHJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgyMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogc2VwaWEoMjAlKTsgfVxcblxcbi53c2QtbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGNvbG9yOiAjNzM2NTZBO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uaGlnaGxpZ2h0cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG4gIHdpZHRoOiAyNSU7IH1cXG4gIC5oaWdobGlnaHRzIGEge1xcbiAgICBjb2xvcjogIzczNjU2QTsgfVxcbiAgLmhpZ2hsaWdodHMgZGl2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogIzczNjU2QTsgfVxcbiAgICAuaGlnaGxpZ2h0cyBkaXYgaSB7XFxuICAgICAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4uaW1hZ2UtbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiA1cmVtO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7IH1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLmltYWdlLW1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi5oaWRlLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogIzk5OTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5oaWRlSW1hZ2Uge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5jdXJzb3Ige1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogTmV4dCAmIHByZXZpb3VzIGJ1dHRvbnMgKi9cXG4ucHJldixcXG4ubmV4dCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG4vKiBQb3NpdGlvbiB0aGUgXFxcIm5leHQgYnV0dG9uXFxcIiB0byB0aGUgcmlnaHQgKi9cXG4ubmV4dCB7XFxuICByaWdodDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4OyB9XFxuXFxuLnByZXYge1xcbiAgbGVmdDogMDsgfVxcblxcbi5zbGlkZXMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cXG4ucHJldjpob3ZlcixcXG4ubmV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uZ2FsbGVyeS1pbWFnZS5ob3Zlci1zaGFkb3cge1xcbiAgdHJhbnNpdGlvbjogMC4zczsgfVxcblxcbi5ob3Zlci1zaGFkb3c6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgI0dhbGxlcnkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG4gICAgI0dhbGxlcnkgaW1nIHtcXG4gICAgICB3aWR0aDogMjhyZW07XFxuICAgICAgaGVpZ2h0OiAyMHJlbTsgfVxcbiAgZGl2LnRhYiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBkaXYudGFiIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW46IGF1dG87IH1cXG4gIC50YWJDb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC50YWJDb250ZW50IHAge1xcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgICAgcGFkZGluZzogMnJlbTsgfVxcbiAgLmRldGFpbC10YWJzIHtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcbiAgLmhpZ2hsaWdodHMge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0OyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuYXV0b2NvbXBsZXRlLWZpbHRlcixcXG4uZHJvcGRvd24tZmlsdGVyLFxcbi5wcmljZS1maWx0ZXIsXFxuLmRhdGUtcGlja2VyLFxcbi5nZXQtbGlzdC1idG4ge1xcbiAgbGVmdDogM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmF1dG9jb21wbGV0ZS1maWx0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG4ucHJpY2UtZmlsdGVyIHtcXG4gIG1hcmdpbi10b3A6IDEuNnJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuICAucHJpY2UtZmlsdGVyIGlucHV0IHtcXG4gICAgb3V0bGluZTogLjJweCBzb2xpZCAjMjYxODFEO1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAzLjRyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjMjYxODFEO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cXG4gICAgLnByaWNlLWZpbHRlciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMyNjE4MUQ7IH1cXG4gICAgLnByaWNlLWZpbHRlciBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMjYxODFEOyB9XFxuICAgIC5wcmljZS1maWx0ZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzI2MTgxRDsgfVxcblxcbi5oaWRlLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZ2V0LWxpc3QtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDMuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY1NkE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kcm9wZG93bi1maWx0ZXIsXFxuICAucHJpY2UtZmlsdGVyLFxcbiAgLmRhdGUtcGlja2VyLFxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAucHJpY2UtZmlsdGVyIGlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMnJlbSBhdXRvOyB9XFxuICAuZ2V0LWxpc3QtYnRuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtOyB9XFxuICAuYXV0b2NvbXBsZXRlLWZpbHRlciB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxLjRyZW0gMXJlbSAwIDFyZW07IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud29ya3Nob3AtbGlzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3MtcGFnZXMgL2RlZXAvIHVsLm5nMi1wYWdpbmF0aW9uIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG4gIC53cy1wYWdlcyAvZGVlcC8gdWwubmcyLXBhZ2luYXRpb24gYTpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTsgfVxcblxcbi53cy1wYWdlcyAvZGVlcC8gdWwubmcyLXBhZ2luYXRpb24gbGkuY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kOiAjNzM2NTZBO1xcbiAgYm9yZGVyLXJhZGl1czogMjAlOyB9XFxuXFxuLmVudGl0eSB7XFxuICB3aWR0aDogMzByZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDJyZW07XFxuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMC4ycmVtIDByZW0gIzg4ODg4ODsgfVxcbiAgLmVudGl0eSBpbWcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuXFxuLmlubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtOyB9XFxuXFxuaDEubmFtZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICMyNjE4MUQ7XFxuICBmb250LWZhbWlseTogJ0h1cm1lR2VvbWV0cmljU2FuczMtUmVndWxhcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wcmljZSB7XFxuICBjb2xvcjogIzU5NEI1MDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMnJlbTsgfVxcblxcbmhyIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogIzU5NEI1MDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi5kYXRlIHtcXG4gIGNvbG9yOiAjNTk0QjUwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTsgfVxcblxcbi5sb2NhdGlvbiB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgb3BhY2l0eTogMC42OyB9XFxuXFxuLnRydW5jYXRlIHtcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5lbnRpdHkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgLmVudGl0eSAuaW1hZ2Uge1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgaDEubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBtYXJnaW46IGF1dG87IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZpbHRlcnMsXFxuLmxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZpbHRlcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTByZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XFxuICBsZWZ0OiA1cmVtOyB9XFxuXFxuLmxpc3Qge1xcbiAgdG9wOiAxMHJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbi53cy1jb250YWluZXIgbmF2Lm5hdmJhci5uYXZiYXItZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbi53cy1jb250YWluZXIgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5hY3RpdmUgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZpbHRlcnMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAubGlzdCB7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaGlkZUZpbHRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8aDI+QWJvdXQgVXM8L2gyPlxcclxcbiAgICBQaXhlbGF0ZWRQbGFuZXQgZW5hYmxlcyBhc3BpcmluZyBwaG90b2dyYXBoZXJzIHRvIGZpbmQgd29ya3Nob3BzIGFuZCBzZW1pbmFycyBhbGwgYXJvdW5kIHRoZSB3b3JsZCBiZWluZyBjb25kdWN0ZWQgYnkgcGVvcGxlXFxyXFxuICAgIHN1Y2Nlc3NmdWwgaW4gdGhlIGZpZWxkIG9mIHBob3RvZ3JhcGh5LiBPbiB0aGUgb3RoZXIgaGFuZCwgd2UgcHJvdmlkZSBhIHBsYXRmb3JtIGZvciBwaG90b2dyYXBoZXJzIHRvIHNob3djYXNlIHRoZWlyXFxyXFxuICAgIHBob3RvZ3JhcGh5IHdvcmtzaG9wcyBhbmQgcmVhY2ggaW50ZXJlc3RlZCBmb2xrcy5cXHJcXG4gICAgPGgyPkZBUXM8L2gyPlxcclxcbiAgICA8Yj5EbyB5b3UgaGF2ZSB3b3Jrc2hvcHMgb2YgYWxsIGdlbnJlcz88L2I+XFxyXFxuICAgIDxici8+IE9mIGNvdXJzZSEgWW91IGNhbiBmaW5kIGV2ZXJ5dGhpbmcgZnJvbSBMYW5kc2NhcGUgYW5kIEZvb2QgcGhvdG9ncmFwaHkgdG8gVGltZWxhcHNlIGFuZCBOaWdodCBTa3kgcGhvdG9ncmFwaHkgd29ya3Nob3BzLlxcclxcbiAgICA8YnIvPjxici8+XFxyXFxuICAgIDxiPkRvZXMgUGl4ZWxhdGVkUGxhbmV0IGFsbG93IG1lIHRvIHJlZ2lzdGVyIGZvciB3b3Jrc2hvcHM/PC9iPlxcclxcbiAgICA8YnIvPiBBcyBvZiBub3csIHdlIGFpbSB0byBicmluZyBhbGwgcGhvdG9ncmFwaHkgd29ya3Nob3BzIGluIG9uZSBwbGFjZS4gQWZ0ZXIgZmluZGluZyB0aGUgd29ya3Nob3AgeW91IGxpa2UsIHdlIHdpbGxcXHJcXG4gICAgcmVkaXJlY3QgeW91IHRoZSBwaG90b2dyYXBoZXIncyB3ZWJzaXRlIGZvciByZWdpc3RyYXRpb24vcGF5bWVudC5cXHJcXG4gICAgPGJyLz48YnIvPlxcclxcbiAgICA8Yj5Eb2VzIFBpeGVsYXRlZFBsYW5ldCBjaGFyZ2UgbWUgZm9yIGZpbmRpbmcgd29ya3Nob3BzPzwvYj5cXHJcXG4gICAgPGJyLz4gTm8uIEFsbCBpbmZvcm1hdGlvbiBvbiBvdXIgd2Vic2l0ZSBpZiBmcmVlbHkgYWNjZXNzaWJsZS4gTm8gaGlkZGVuIGNvc3RzLlxcclxcbiAgICA8YnIvPjxici8+XFxyXFxuICAgIDxiPkkgYW0gYSBwaG90b2dyYXBoZXIuIENhbiBJIHNob3djYXNlIG15IHdvcmtzaG9wcyBvbiB5b3VyIHdlYnNpdGU/PC9iPlxcclxcbiAgICA8YnIvPiBXZSBjYXJlZnVsbHkgc2VsZWN0IHBob3RvZ3JhcGhlcnMgYmFzZWQgb24gdGhlaXIgcG9ydGZvbGlvcyB0byBrZWVwIHF1YWxpdHkgb2Ygd29ya3Nob3BzIGhpZ2guIFBsZWFzZSBlbWFpbCB1c1xcclxcbiAgICBhdCBoZWxsb0B0aGVwaXhlbGF0ZWRwbGFuZXQuY29tIGluIG9yZGVyIHRvIGdldCBpbiB0b3VjaCB3aXRoIHVzIVxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGlucHV0IGlkPVxcXCJjb3VudHJ5XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZmlsdGVyLWlucHV0XFxcIiBbKG5nTW9kZWwpXT1xdWVyeSAoa2V5dXApPWZpbHRlcigpIHBsYWNlaG9sZGVyPVxcXCJUeXBlIGEgbG9jYXRpb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWdnZXN0aW9uc1xcXCIgKm5nSWY9XFxcImZpbHRlcmVkTGlzdC5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDx1bD5cXHJcXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgaXRlbSBvZiBmaWx0ZXJlZExpc3RcXFwiIChjbGljayk9XFxcInNlbGVjdChpdGVtKVxcXCI+e3tpdGVtfX08L2xpPlxcclxcbiAgICAgICAgPC91bD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhY3QtdXNcXFwiPlxcclxcbiAgICA8aDE+TGV0J3MgY2xpY2sgdG9nZXRoZXIhPC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3RhdGljLWluZm9cXFwiPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+aGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGhvbmUtc3F1YXJlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjQyNS05NzktODgzODwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS13cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KCk7IGNvbnRhY3RGb3JtLnJlc2V0KClcXFwiIG5hbWU9XFxcImNvbnRhY3QtZm9ybVxcXCIgI2NvbnRhY3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWUtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZpcnN0LW5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmbmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImZuYW1lXFxcIiBuYW1lPVxcXCJmbmFtZVxcXCIgI2ZpcnN0bmFtZT1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZ1bGwgbmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKGZpcnN0bmFtZS52YWxpZCB8fCBmaXJzdG5hbWUucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG5hbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsLW51bWJlci1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImVtYWlsSWRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBhZGRyZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEoZW1haWwudmFsaWQgfHwgZW1haWwucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIGVtYWlsIGFkZHJlc3NcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHN1YmplY3QtYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdWJqZWN0XFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwic3ViamVjdFRleHRcXFwiIG5hbWU9XFxcInN1YmplY3RcXFwiICNzdWJqZWN0PVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN1YmplY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKHN1YmplY3QudmFsaWQgfHwgc3ViamVjdC5wcmlzdGluZSlcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgSW52YWxpZCBzdWJqZWN0XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWVzc2FnZS1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJlcXVpcmVkIHJvd3M9XFxcIjRcXFwiIGNvbHM9XFxcIjUwXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBmb3JtPVxcXCJjb250YWN0LWZvcm1cXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICNtZXNzYWdlPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSG93IGNhbiB3ZSBoZWxwIHlvdT9cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEobWVzc2FnZS52YWxpZCB8fCBtZXNzYWdlLnByaXN0aW5lKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG1lc3NhZ2VcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuIGJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIWNvbnRhY3RGb3JtLmZvcm0udmFsaWQgfHwgaW52YWxpZERldGFpbHNcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1kaWFsb2dcXFwiICpuZ0lmPVxcXCJzdWJtaXR0ZWQgJiYgc2hvd01lc3NhZ2VCb3hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dFxcXCI+e3tzdWJtaXRNZXNzYWdlfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJvay1idG4gYnRuXFxcIiAoY2xpY2spPVxcXCJoaWRlTWVzc2FnZWJveCgpXFxcIj5vazwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRhdGUtcGlja2VyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZyb20tZGF0ZVxcXCI+XFxyXFxuICAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Gcm9tRGF0ZUNoYW5nZWQoJGV2ZW50KVxcXCIgbmFtZT1cXFwiZnJvbS1kYXRlXFxcIiBbcGxhY2Vob2xkZXJdPVxcXCJmcm9tRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcImZyb21EYXRlUGlja2VyT3B0aW9uc1xcXCI+PC9teS1kYXRlLXBpY2tlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvLWRhdGVcXFwiPlxcclxcbiAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Ub0RhdGVDaGFuZ2VkKCRldmVudClcXFwiIG5hbWU9XFxcInRvLWRhdGVcXFwiIFtwbGFjZWhvbGRlcl09XFxcInRvRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcInRvRGF0ZVBpY2tlck9wdGlvbnNcXFwiPjwvbXktZGF0ZS1waWNrZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJ0b2dnbGVEcm9wZG93bigpXFxcIj48c3Bhbj57e2J1dHRvbkxhYmVsfX08L3NwYW4+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duXFxcIj48L2k+XFxyXFxuPC9idXR0b24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWxpc3RcXFwiIChjbGljayk9XFxcIm92ZXJsYXkoKVxcXCIgW2NsYXNzLmhpZGUtZHJvcGRvd25dPVxcXCJpc0NvbGxhcHNlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRhLWxpc3RcXFwiICpuZ0Zvcj1cXFwibGV0IGRhdGEgb2YgZGF0YU1vZGVsO1xcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuYW1lPVxcXCJ7e29wdGlvbk5hbWV9fVxcXCIgdmFsdWU9XFxcInt7ZGF0YS52YWx1ZX19XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2Pnt7ZGF0YS5sYWJlbH19PC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIi8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxoMT40MDQgLSBQYWdlIE5vdCBGb3VuZDwvaDE+XFxyXFxuICAgIDxoMz5Pb3BzLCB5b3UgbGFuZGVkIGluIGEgYmFkIHBsYWNlLiBMZXQncyBnZXQgb3V0IG9mIGhlcmUgcXVpY2tseSBiZWZvcmUgYW55IGJhZCBndXlzIGNvbWUgYXJvdW5kITwvaDM+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8YSBocmVmPVxcXCIvdGVybXNhbmRjb25kaXRpb25zXFxcIj5UZXJtcyBhbmQgY29uZGl0aW9uczwvYT5cXHJcXG4gICAgPGEgaHJlZj1cXFwiL3ByaXZhY3lwb2xpY3lcXFwiPlByaXZhY3kgUG9saWN5PC9hPlxcclxcbiAgICA8c3Bhbj4mY29weTsgMjAxNyBQaXhlbGF0ZWQgUGxhbmV0PC9zcGFuPlxcclxcbiAgICA8YSBocmVmPVxcXCIvY29udGFjdFxcXCI+Q29udGFjdDwvYT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWFpbi1wYWdlLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxuYXZpLWJhciBbc2hvd0ZpbHRlcnNdPVxcXCJmYWxzZVxcXCI+PC9uYXZpLWJhcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcIm1hc3RoZWFkXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50LWlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haW4taGVhZGluZ1xcXCIgaWQ9XFxcImhvbWVIZWFkaW5nXFxcIj5QaXhlbGF0ZWQgUGxhbmV0PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XFxcInN1Yi1oZWFkaW5nXFxcIj5JdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb2tpbmcgYXQgaXRzIGxheW91dC48L2Rpdj4gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1xcXCIgaHJlZj1cXFwiI3dvcmtzaG9wc1xcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJVcGNvbWluZ0V2ZW50c0NsaWNrXFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJIb21lUGFnZUludGVyYWN0aW9uXFxcIj5VcGNvbWluZyBXb3Jrc2hvcHM8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9oZWFkZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8c2VjdGlvbiBpZD1cXFwid29ya3Nob3BzXFxcIj5cXHJcXG4gICAgICAgIDxoMSBjbGFzcz1cXFwid3MtaGVhZGluZ1xcXCI+XFxyXFxuICAgICAgICAgICAgV29ya3Nob3BzXFxyXFxuICAgICAgICA8L2gxPlxcclxcbiAgICAgICAgPHdvcmtzaG9wcy1saXN0Pjwvd29ya3Nob3BzLWxpc3Q+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ2aWV3LWFsbC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIi93b3Jrc2hvcHNcXFwiIGNsYXNzPVxcXCJ2aWV3LWFsbFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJWaWV3QWxsRXZlbnRzQ2xpY2tcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIkhvbWVQYWdlSW50ZXJhY3Rpb25cXFwiPjxzcGFuPlZpZXcgYWxsPC9zcGFuPiAgPGkgY2xhc3M9XFxcImZhIGZhLWFycm93LWNpcmNsZS1yaWdodFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2LWNvbnRhaW5lclxcXCI+XFxyXFxuICA8YSBocmVmPVxcXCJcXFwiICBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Ib21lUGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIi9hc3NldHMvaW1nL2ljb24ucG5nXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIj5cXHJcXG4gIDwvYT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICA8YnV0dG9uICpuZ0lmPVxcXCJzaG93RmlsdGVyc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZmlsdGVyLWhlYWRlciBidG5cXFwiIChjbGljayk9XFxcInRvZ2dsZUZpbHRlcigpXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdj5GaWx0ZXJzIDxpIGNsYXNzPVxcXCJmYSBmYS1maWx0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9kaXY+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj5cXHJcXG4gICAgICA8ZGl2PjxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIiBbbmdDbGFzc109XFxcInsnaGlkZU5hdmJhcic6IGhpZGVOYXZiYXJ9XFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Xb3Jrc2hvcHNQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj48YSBocmVmPVxcXCIvd29ya3Nob3BzXFxcIj5Xb3Jrc2hvcHM8L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiL2Fib3V0XFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9BYm91dFBhZ2VFdmVudFxcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiTmF2QmFySW50ZXJhY3Rpb25cXFwiPkFib3V0PC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcIi9jb250YWN0XFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Db250YWN0UGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+Q29udGFjdDwvYT48L2xpPlxcclxcbiAgICA8L3VsPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9uYXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndzLWNvbnRhaW5lclxcXCI+XFxyXFxuXFx0PG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwibGlzdFxcXCI+XFxyXFxuXFx0XFx0UmVkaXJlY3RpbmcgdG8gYW4gZXh0ZXJuYWwgbGluay4uLlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1pbWdcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJkZXRhaWwtaW1nXFxcIiBzcmM9XFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIgLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGgyPlByaXZhY3kgUG9saWN5PC9oMj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8aDI+VGVybXMgYW5kIGNvbmRpdGlvbnM8L2gyPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2aS1iYXI+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgW3NyY109XFxcInRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlSW1hZ2VVcmwod29ya3Nob3BEZXRhaWxzLmltYWdlTGluaylcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiXFxyXFxuICAgIC8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwid3NkLW5hbWVcXFwiPnt7d29ya3Nob3BEZXRhaWxzLm5hbWV9fTwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImRldGFpbHMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsLXRhYnNcXFwiPlxcclxcblxcclxcbiAgICAgICAgPCEtLVRhYiBoZWFkaW5ncy0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJsaW5rc1xcXCIgKm5nRm9yPVxcXCJsZXQgdGFiIG9mIHRhYnM7IGxldCBpPWluZGV4O1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZSc6IHRhYi5zaG93VGFifVxcXCIgKGNsaWNrKT1cXFwib3BlblRhYnMoaSlcXFwiPnt7dGFiLmxhYmVsfX08L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPCEtLURlc2NyaXB0aW9uIHRhYi0tPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzBdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1swXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPnt7dGFic1swXS5sYWJlbH19PC9oMz5cXHJcXG4gICAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cXFwid29ya3Nob3BEZXRhaWxzLmRlc2NyaXB0aW9uXFxcIj48L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS1JdGluaWVyYXJ5IHRhYi0tPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzFdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1sxXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPnt7dGFic1sxXS5sYWJlbH19PC9oMz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXktd3JhcHBlclxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0YSBvZiB3b3Jrc2hvcERldGFpbHMuaXRpbmVyYXJ5O1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoNT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPkRheSB7e2RhdGEuZGF5fX0gLSA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibG9jYXRpb25cXFwiPnt7ZGF0YS5sb2NhdGlvbn19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2g1PlxcclxcbiAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cXFwiZGF0YS5jb250ZW50XFxcIj48L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS1HYWxsZXJ5IHRhYi0tPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzJdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1syXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPnt7dGFic1syXS5sYWJlbH19PC9oMz5cXHJcXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJnYWxsZXJ5LWltYWdlIGhvdmVyLXNoYWRvdyBjdXJzb3JcXFwiICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlc0xpbms7bGV0IGkgPSBpbmRleFxcXCIgW3NyY109XFxcImltYWdlLmltYWdlTGlua1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cXFwib3Blbk1vZGFsKGkrMSlcXFwiIC8+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDwhLS1QaG90b2dyYXBoZXIgdGFiLS0+XFxyXFxuICAgICAgICA8ZGl2IGlkPVxcXCJ7e3RhYnNbM10ubGFiZWx9fVxcXCIgW2hpZGRlbl09XFxcIiF0YWJzWzNdLnNob3dUYWJcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+e3t0YWJzWzNdLmxhYmVsfX08L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBob3RvZ3JhcGhlci1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgcGhvdG9ncmFwaGVyIG9mIHdvcmtzaG9wRGV0YWlscy5waG90b2dyYXBoZXJzO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2ZpbGUtcGhvdG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwicHJvZmlsZS1pbWdcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKHBob3RvZ3JhcGhlci5wcm9maWxlUGhvdG9MaW5rKVxcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5maXJzdE5hbWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cGhvdG9ncmFwaGVyLmxhc3ROYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbC1sb2NhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKHBob3RvZ3JhcGhlci5sb2NhdGlvbklkKT8ubmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vic2l0ZS1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcInt7cGhvdG9ncmFwaGVyPy53ZWJzaXRlTGlua319XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV4dGVybmFsLWxpbmtcXFwiPjwvaT4gV2Vic2l0ZTwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdPVxcXCJwaG90b2dyYXBoZXIubW9yZUluZm9ybWF0aW9uXFxcIj48L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwhLS1Xb3Jrc2hvcCBoaWdobGlnaHRzLS0+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImhpZ2hsaWdodHNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5Xb3Jrc2hvcCBMaW5rPC9oND5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJ7e3dvcmtzaG9wRGV0YWlscy5saW5rfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua1xcXCI+PC9pPiBXb3Jrc2hvcCBsaW5rXFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1sb2NhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkxvY2F0aW9uPC9oND5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPnt7dGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKHdvcmtzaG9wRGV0YWlscy5sb2NhdGlvbklkKT8ubmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3c2QtcHJpY2VcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5QcmljZSBSYW5nZTwvaDQ+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZFxcXCI+PC9pPiA8c3BhbiAqbmdJZj1cXFwid29ya3Nob3BEZXRhaWxzLm1pbkNvc3QgIT09IHdvcmtzaG9wRGV0YWlscy5tYXhDb3N0XFxcIj57e3dvcmtzaG9wRGV0YWlscy5taW5Db3N0fX0gLSA8L3NwYW4+e3t3b3Jrc2hvcERldGFpbHMubWF4Q29zdH19XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1kYXRlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkRhdGVzPC9oND5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlcy1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgZGV0YWlsIG9mIHdvcmtzaG9wRGV0YWlscy5tdWx0aVdvcmtzaG9wRGV0YWlscztcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuZm9ybWF0RGF0ZShkZXRhaWwuc3RhcnREYXRlKX19IC0ge3t0aGlzLmZvcm1hdERhdGUoZGV0YWlsLmVuZERhdGUpfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8IS0tSW1hZ2UgZ2FsbGVyeSBtb2RhbC0tPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJteU1vZGFsXFxcIiBbbmdDbGFzc109XFxcInsnaGlkZS1tb2RhbCc6IGhpZGVNb2RhbH1cXFwiIGNsYXNzPVxcXCJpbWFnZS1tb2RhbFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiY2xvc2UgY3Vyc29yXFxcIiAoY2xpY2spPVxcXCJjbG9zZU1vZGFsKClcXFwiPiZ0aW1lczs8L3NwYW4+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZS1tb2RhbC1jb250ZW50XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlc0xpbms7bGV0IGkgPSBpbmRleFxcXCIgY2xhc3M9XFxcInNsaWRlc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVJbWFnZSc6IGltYWdlLmhpZGVJbWFnZX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVxcXCJpbWFnZS5pbWFnZUxpbmtcXFwiIGNsYXNzPVxcXCJtb2RhbC1pbWFnZVxcXCI+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJwcmV2XFxcIiAoY2xpY2spPVxcXCJwbHVzU2xpZGVzKC0xKVxcXCI+JiMxMDA5NDs8L2E+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwibmV4dFxcXCIgKGNsaWNrKT1cXFwicGx1c1NsaWRlcygxKVxcXCI+JiMxMDA5NTs8L2E+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVycy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1maWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPGRyb3Bkb3duIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlQ2F0ZWdvcnlMaXN0KCRldmVudClcXFwiIFtkYXRhTW9kZWxdPVxcXCJjYXRlZ29yaWVzXFxcIiBbYnV0dG9uTGFiZWxdPVxcXCJjYXRlZ29yeURyb3Bkb3duTGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgW29wdGlvbk5hbWVdPVxcXCInY2F0ZWdvcmllcydcXFwiPjwvZHJvcGRvd24+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJhdXRvY29tcGxldGUtZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxhdXRvY29tcGxldGUgKHNlbGVjdGlvbkNoYW5nZWQpPVxcXCJ1cGRhdGVMb2NhdGlvbigkZXZlbnQpXFxcIj48L2F1dG9jb21wbGV0ZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRhdGUtcGlja2VyXFxcIj5cXHJcXG4gICAgICAgIDxkYXRlLXBpY2tlciAoc2VsZWN0ZWRGcm9tQ2hhbmdlZCk9XFxcImdldEZyb21EYXRlKCRldmVudClcXFwiIChzZWxlY3RlZFRvQ2hhbmdlZCk9XFxcImdldFRvRGF0ZSgkZXZlbnQpXFxcIj48L2RhdGUtcGlja2VyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJpY2UtZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCAjbWluUHJpY2VJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMTAwXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWluLiBwcmljZVxcXCIgKGJsdXIpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICAob25pbnB1dCk9XFxcInVwZGF0ZU1pblByaWNlKG1pblByaWNlSW5wdXQudmFsdWUpXFxcIiAob25jaGFuZ2UpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZU1pblByaWNlKG1pblByaWNlSW5wdXQudmFsdWUpXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgICAgIDxpbnB1dCAjbWF4UHJpY2VJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMTAwXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWF4LiBwcmljZVxcXCIgKGJsdXIpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICAob25pbnB1dCk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIiAob25jaGFuZ2UpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxidXR0b24gY2xhc3M9XFxcImdldC1saXN0LWJ0blxcXCIgKGNsaWNrKT1cXFwidG9nZ2xlRmlsdGVyKClcXFwiPjxzcGFuPkZpbHRlcjwvc3Bhbj4gIDxpIGNsYXNzPVxcXCJmYSBmYS1maWx0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9idXR0b24+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndvcmtzaG9wLWxpc3RcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImVudGl0eVxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0YSBvZiBhc3luY0RhdGEgfCBhc3luYyB8IHBhZ2luYXRlOiB7IGlkOiAnc2VydmVyJywgaXRlbXNQZXJQYWdlOiBpdGVtc1BlclBhZ2UsIGN1cnJlbnRQYWdlOiBwYWdlLCB0b3RhbEl0ZW1zOiB0b3RhbCB9XFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBbaHJlZl09XFxcImNyZWF0ZVdvcmtzaG9wRGV0YWlsc1VybChkYXRhLndvcmtzaG9wSWQsIGRhdGEubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlubmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKGRhdGEuaW1hZ2VMaW5rKVxcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVxcXCJuYW1lIHRydW5jYXRlXFxcIiB0aXRsZT1cXFwie3sgZGF0YS5uYW1lIH19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIHt7IGRhdGEubmFtZSB9fVxcclxcbiAgICAgICAgICAgICAgICA8L2gxPlxcclxcbiAgICAgICAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1tYXAtbWFya2VyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmZvcm1hdExvY2F0aW9uKGRhdGEubG9jYXRpb25JZCl9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmZvcm1hdERhdGUoZGF0YS5zdGFydERhdGVGaXJzdCl9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVxcXCJkYXRhLnN0YXJ0RGF0ZUZpcnN0ICE9IGRhdGEuZW5kRGF0ZUZpcnN0XFxcIj4tPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPiB7e3RoaXMuZm9ybWF0RGF0ZShkYXRhLmVuZERhdGVGaXJzdCl9fSA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcmljZVxcXCIgKm5nSWY9XFxcImRhdGEubWluQ29zdCA9PSBkYXRhLm1heENvc3RcXFwiPnt7ZGF0YS5jb3N0Q3VycmVuY3l9fSB7e2RhdGEubWluQ29zdH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0IDwgZGF0YS5tYXhDb3N0XFxcIj57e2RhdGEuY29zdEN1cnJlbmN5fX0ge3tkYXRhLm1pbkNvc3R9fS17e2RhdGEubWF4Q29zdH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiAqbmdJZj1cXFwiaXRlbXNQZXJQYWdlID4gNFxcXCIgY2xhc3M9XFxcIndzLXBhZ2VzXFxcIj4gXFxyXFxuICAgICAgICA8cGFnaW5hdGlvbi1jb250cm9scyAocGFnZUNoYW5nZSk9XFxcImdldFdvcmtzaG9wc0RhdGEocXVlcnlQYXRoLCRldmVudCwgaXRlbXNQZXJQYWdlKVxcXCIgaWQ9XFxcInNlcnZlclxcXCI+PC9wYWdpbmF0aW9uLWNvbnRyb2xzPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndzLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxuYXZpLWJhciBbc2hvd0ZpbHRlcnNdPVxcXCJ0cnVlXFxcIiAoZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlKT1cXFwidG9nZ2xlRmlsdGVyRHJvcGRvd24oJGV2ZW50KVxcXCI+PC9uYXZpLWJhcj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZmlsdGVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVGaWx0ZXInOiBoaWRlRmlsdGVyfVxcXCIgaWQ9XFxcImZpbHRlcnNcXFwiPlxcclxcbiAgICAgICAgPHdvcmtzaG9wLWZpbHRlciAobWluUHJpY2VGaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TWluUHJpY2UoJGV2ZW50KVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChtYXhQcmljZUZpbHRlckNoYW5nZWQpPVxcXCJzZXRNYXhQcmljZSgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZnJvbURhdGVDaGFuZ2VkKT1cXFwic2V0RnJvbURhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRvRGF0ZUNoYW5nZWQpPVxcXCJzZXRUb0RhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGxvY2F0aW9uRmlsdGVyQ2hhbmdlZCk9XFxcInNldExvY2F0aW9uSWRMaXN0KCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRlZ29yeUZpbHRlckNoYW5nZWQpPVxcXCJzZXRDYXRlZ29yeUxpc3QoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGFwcGx5RmlsdGVycyk9XFxcInRvZ2dsZUZpbHRlcigkZXZlbnQpXFxcIj48L3dvcmtzaG9wLWZpbHRlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImxpc3RcXFwiPlxcclxcbiAgICAgICAgPHdvcmtzaG9wcy1saXN0Pjwvd29ya3Nob3BzLWxpc3Q+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSAxMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDEyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSAxMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItcGFnaW5hdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1wYWdpbmF0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIlxuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==