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
/******/ 	return __webpack_require__(__webpack_require__.s = 115);
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
        this.locationMap = new Map();
        for (var i = 0; i < locations.length; i++) {
            var location = locations[i];
            this.locationMap[location.id] = location;
        }
        this.locations = locations;
    };
    GlobalConstantsRepository.prototype.getLocationByLocationId = function (value) {
        if (typeof this.locationMap == "undefined" || this.locationMap == null) {
            return null;
        }
        else {
            return this.locationMap[value];
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
/***/ function(module, exports) {

module.exports = require("@angular/router");

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("angulartics2");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__ = __webpack_require__(110);
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
        var loc = this.globalConstants.getLocations();
        if (typeof loc == "undefined") {
            loc = this.getLocationsInternal();
            loc.then(function (locations) {
                return _this.globalConstants.setLocations(locations);
            });
        }
        return loc;
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
        var wTypes = this.globalConstants.getWorkshopTypes();
        if (typeof wTypes == "undefined") {
            wTypes = this.getWorkshopTypesInternal();
            wTypes.then(function (workshopTypes) {
                return _this.globalConstants.setWorkshopTypes(workshopTypes);
            });
        }
        return wTypes;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(13);
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
    function WorkshopsListComponent(angulartics2, workshopRepository, router) {
        this.workshopRepository = workshopRepository;
        this.router = router;
        this.page = 1;
        this.angulartics2 = angulartics2;
        this.workshops = [];
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
    };
    WorkshopsListComponent.prototype.loadWorkshopDetails = function (workshopId, workshopName) {
        workshopName = workshopName.replace(/ /g, "-");
        this.router.navigate(['/photography-workshop-details', workshopName, workshopId]);
    };
    WorkshopsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshops-list',
            template: __webpack_require__(80),
            styles: [__webpack_require__(67)],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === 'function' && _c) || Object])
    ], WorkshopsListComponent);
    return WorkshopsListComponent;
    var _a, _b, _c;
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
        this.fname = "";
    }
    ContactUsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log(this.fname);
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(73),
            styles: [__webpack_require__(61)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/contact-us.component.js.map

/***/ },
/* 8 */
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
            template: __webpack_require__(76),
            styles: [__webpack_require__(64)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/home.component.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(2);
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
            template: __webpack_require__(78),
            styles: [__webpack_require__(70)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object])
    ], PageRedirectComponent);
    return PageRedirectComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/page-redirect.component.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(2);
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
    }
    WorkshopDetailsComponent.prototype.ngOnInit = function () {
        var workshopId;
        this.sub = this.route.params.subscribe(function (params) {
            workshopId = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        this.getWorkshopDetail(workshopId);
        this.tabLinks = this.elementRef.nativeElement.querySelectorAll(".tablinks");
        this.tabcontent = this.elementRef.nativeElement.querySelectorAll(".tabcontent");
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
    WorkshopDetailsComponent.prototype.initializeTabs = function () {
        var i;
        for (i = 0; i < this.tabcontent.length; i++) {
            this.tabcontent[i].style.display = "none";
        }
        for (i = 0; i < this.tabLinks.length; i++) {
            this.tabLinks[i].classList.remove("active");
        }
        this.previousActiveTab = {
            content: this.tabcontent[0],
            link: this.tabLinks[0]
        };
        this.openTabs(null, 0);
    };
    WorkshopDetailsComponent.prototype.openTabs = function (evt, tabName) {
        if (evt !== null && this.previousActiveTab.content === this.tabcontent[tabName]) {
            return;
        }
        // Show the current tab, and add an "active" class to the button that opened the tab
        this.tabcontent[tabName].style.display = "block";
        this.tabLinks[tabName].classList.add("active");
        if (evt !== null) {
            this.previousActiveTab.content.style.display = "none";
            this.previousActiveTab.link.classList.remove("active");
        }
        this.previousActiveTab = {
            content: this.tabcontent[tabName],
            link: this.tabLinks[tabName]
        };
    };
    WorkshopDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(79),
            styles: [__webpack_require__(66)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object])
    ], WorkshopDetailsComponent);
    return WorkshopDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-details.component.js.map

/***/ },
/* 11 */
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
        this.startDate = fromDate.year + "/" + fromDate.month + "/" + fromDate.day;
        if (this.startDate == "0/0/0") {
            var today = new Date();
            this.startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        this.updateUrl();
        console.log(this.startDate);
    };
    WorkshopsComponent.prototype.setToDate = function (toDate) {
        this.endDate = toDate.year + "/" + toDate.month + "/" + toDate.day;
        if (this.endDate == "0/0/0") {
            var today = new Date();
            this.endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        this.updateUrl();
        console.log(this.endDate);
    };
    WorkshopsComponent.prototype.setLocationIdList = function (locationIdList) {
        this.locationIdList = locationIdList;
        this.updateUrl();
        console.log(this.locationIdList);
    };
    WorkshopsComponent.prototype.setCategoryList = function (categoryList) {
        this.categoryList = categoryList;
        this.updateUrl();
        console.log(categoryList);
    };
    WorkshopsComponent.prototype.setMinPrice = function (minPrice) {
        this.minPrice = minPrice;
        this.updateUrl();
        console.log(minPrice);
    };
    WorkshopsComponent.prototype.setMaxPrice = function (maxPrice) {
        this.maxPrice = maxPrice;
        this.updateUrl();
        console.log(maxPrice);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]) === 'function' && _a) || Object)
    ], WorkshopsComponent.prototype, "workshopsListChildComp", void 0);
    WorkshopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(81),
            styles: [__webpack_require__(68)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], WorkshopsComponent);
    return WorkshopsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshops.component.js.map

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(57);










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
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__my_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__my_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__my_week_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__my_options_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__my_locale_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_selector_interface__ = __webpack_require__(39);
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
/* 22 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-day.interface.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-month.interface.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-view-changed.interface.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-year.interface.js.map

/***/ },
/* 26 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-model.interface.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-range.interface.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date.interface.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-day-labels.interface.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-default-month.interface.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-field-changed.interface.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-focus-blur.interface.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-locale.interface.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-date.interface.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-dates.interface.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month-labels.interface.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month.interface.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-options.interface.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-selector.interface.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-week.interface.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-weekday.interface.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_index__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__ = __webpack_require__(45);
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





var myDpStyles = __webpack_require__(59);
var myDpTpl = __webpack_require__(58);
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__ = __webpack_require__(20);
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
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(85);
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
var __universal__ = __webpack_require__(88);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/__2.1.1.workaround.js.map

/***/ },
/* 47 */
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
            template: __webpack_require__(71),
            styles: [__webpack_require__(69)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angulartics2__["Angulartics2GoogleAnalytics"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.component.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_mydatepicker_src_my_date_picker_my_date_picker_module__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angulartics2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dropdown_menu_dropdown_menu_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__date_picker_date_picker_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_pagination__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_pagination__);
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
                __WEBPACK_IMPORTED_MODULE_19__dropdown_menu_dropdown_menu_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_20__date_picker_date_picker_component__["a" /* DatePickerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__["a" /* WorkshopFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__["a" /* WorkshopsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__["a" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__["a" /* WorkshopDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__["a" /* PageRedirectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
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
                __WEBPACK_IMPORTED_MODULE_18_angulartics2__["Angulartics2Module"].forRoot([__WEBPACK_IMPORTED_MODULE_18_angulartics2__["Angulartics2GoogleAnalytics"]]),
                __WEBPACK_IMPORTED_MODULE_18_angulartics2__["Angulartics2Module"].forChild(),
                __WEBPACK_IMPORTED_MODULE_21_ng2_pagination__["Ng2PaginationModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__["a" /* WorkshopRepository */], __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.node.module.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workshops_workshops_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workshop_details_workshop_details_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_redirect_page_redirect_component__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
    { path: 'workshops', component: __WEBPACK_IMPORTED_MODULE_1__workshops_workshops_component__["a" /* WorkshopsComponent */] },
    { path: 'photography-workshop-details/:title/:id', component: __WEBPACK_IMPORTED_MODULE_2__workshop_details_workshop_details_component__["a" /* WorkshopDetailsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'page-redirect/:externalUrl', component: __WEBPACK_IMPORTED_MODULE_4__page_redirect_page_redirect_component__["a" /* PageRedirectComponent */], pathMatch: 'full' }
];
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.routes.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(4);
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
        var _this = this;
        this.query = '';
        this.countries = [];
        this.filteredList = [];
        this.elementRef = myElement;
        var locations = workshopRepo.getLocations().then(function (loc) {
            for (var i = 0; i < loc.length; i++) {
                _this.countries.push(loc[i].name);
            }
        });
    }
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
        }
    };
    AutocompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'autocomplete',
            host: { '(document:click)': 'handleClick($event)' },
            template: __webpack_require__(72),
            styles: [__webpack_require__(60)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object])
    ], AutocompleteComponent);
    return AutocompleteComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/autocomplete.component.js.map

/***/ },
/* 51 */
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
            template: __webpack_require__(74),
            styles: [__webpack_require__(62)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], DatePickerComponent);
    return DatePickerComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/date-picker.component.js.map

/***/ },
/* 52 */
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
            template: __webpack_require__(75),
            styles: [__webpack_require__(63)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], DropdownComponent);
    return DropdownComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/dropdown-menu.component.js.map

/***/ },
/* 53 */
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
            template: __webpack_require__(77),
            styles: [__webpack_require__(65)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/navbar.component.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(4);
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
        this.angulartics2 = a;
        this.globalConstants = globalConstantsRepository;
        this.updateLocations();
        this.updateCategories();
        this.cityDropdownLabel = "Location";
        this.photographerDropdownLabel = "Photographer";
        this.categoryDropdownLabel = "Category";
        this.fromDateLabel = "From";
        this.toDateLabel = "To";
        this.minFromDate = new Date();
    }
    WorkshopFilterComponent.prototype.updateLocations = function () {
        var _this = this;
        this.cities = [];
        this.workshopRepository.getLocations().then(function (locations) {
            if (locations) {
                for (var i = 0; i < locations.length; i++) {
                    var x = locations[i];
                    _this.cities.push({ label: x.name, value: x.id });
                }
            }
        });
    };
    WorkshopFilterComponent.prototype.updateCategories = function () {
        var _this = this;
        this.categories = [];
        this.workshopRepository.getWorkshopTypes().then(function (wTypes) {
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
    WorkshopFilterComponent.prototype.updateLocationList = function (value) {
        this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        var locations = this.getSelectedFilters('location');
        var locationIdList = "";
        var first = true;
        for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
            var location = locations_1[_i];
            if (!first)
                locationIdList = locationIdList + ",";
            first = false;
            locationIdList = locationIdList + location;
        }
        this.locationFilterChanged.emit(locationIdList);
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
    WorkshopFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshop-filter',
            template: __webpack_require__(122),
            styles: [__webpack_require__(121)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _c) || Object])
    ], WorkshopFilterComponent);
    return WorkshopFilterComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-filter.component.js.map

/***/ },
/* 55 */
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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
















//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/polyfills.js.map

/***/ },
/* 57 */
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
    'home', 'workshops', 'photography-workshop-details/:title/:id', 'contact', 'page-redirect/:externalUrl'
];
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/server.routes.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

module.exports = "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\">\r\n    <div class=\"selectiongroup\" *ngIf=\"!opts.inline\">\r\n        <input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\"\r\n               placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\"\r\n               (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\">\r\n        <div class=\"selbtngroup\" [style.height]=\"opts.height\">\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpleft\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpright\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpremove\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpcalendar\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\r\n        <table class=\"header\">\r\n            <tr>\r\n                <td>\r\n                    <div style=\"float:left\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div>\r\n                        <div class=\"headermonthtxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\">\r\n                        <span class=\"mydpicon icon-mydptoday\"></span>\r\n                        <span>{{opts.todayBtnTxt}}</span>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <div style=\"float:right\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div>\r\n                        <div class=\"headeryeartxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\">\r\n            <thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let w of dates\">\r\n                    <td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n                    <td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\">\r\n                        <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n                        <div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\">\r\n                            <span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"monthtable\" *ngIf=\"selectMonth\">\r\n            <tbody>\r\n                <tr *ngFor=\"let mr of months\">\r\n                    <td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\">\r\n                        <div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"yeartable\" *ngIf=\"selectYear\">\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let yr of years\">\r\n                    <td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\">\r\n                        <div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = ".mydp {\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.mydp * {\r\n    box-sizing: border-box;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.mydp,\r\n.mydp .selectiongroup,\r\n.mydp .selection,\r\n.mydp .selector,\r\n.mydp .headertodaybtn {\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .header {\r\n    border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:first-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:first-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:first-child {\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:last-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:last-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:last-child {\r\n    border-bottom-right-radius: 4px;\r\n}\r\n\r\n.mydp .btnpicker {\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.mydp .btnleftborderradius {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .selector {\r\n    margin-top: 2px;\r\n    margin-left: -1px;\r\n    position: absolute;\r\n    padding: 0;\r\n    border: 1px solid #CCC;\r\n    z-index: 100;\r\n    -webkit-animation: selectorfadein 0.1s;\r\n            animation: selectorfadein 0.1s;\r\n}\r\n\r\n.mydp .selector:focus {\r\n    border: 1px solid #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n@-webkit-keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.mydp .selectorarrow {\r\n    background: #FAFAFA;\r\n    margin-top: 12px;\r\n    padding: 0;\r\n}\r\n\r\n.mydp .selectorarrow:after,\r\n.mydp .selectorarrow:before {\r\n    bottom: 100%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n}\r\n\r\n.mydp .selectorarrow:after {\r\n    border-color: rgba(250, 250, 250, 0);\r\n    border-bottom-color: #FAFAFA;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n\r\n.mydp .selectorarrow:before {\r\n    border-color: rgba(204, 204, 204, 0);\r\n    border-bottom-color: #CCC;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.mydp .selectorarrow:focus:before {\r\n    border-bottom-color: #ADD8E6;\r\n}\r\n\r\n.mydp .selectorarrowleft:after,\r\n.mydp .selectorarrowleft:before {\r\n    left: 24px;\r\n}\r\n\r\n.mydp .selectorarrowright:after,\r\n.mydp .selectorarrowright:before {\r\n    left: 86%;\r\n}\r\n\r\n.mydp .alignselectorright {\r\n    right: -1px;\r\n}\r\n\r\n.mydp .selectiongroup {\r\n    position: relative;\r\n    display: table;\r\n    border: none;\r\n    border-spacing: 0;\r\n    background-color: #FFF;\r\n}\r\n\r\n.mydp .selection {\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: #FFF;\r\n    display: table-cell;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 6px;\r\n    border: none;\r\n    color: #555;\r\n}\r\n\r\n.mydp .invaliddate {\r\n    background-color: #F1DEDE;\r\n}\r\n\r\n.mydp ::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n.mydp .selbtngroup {\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    width: 1%;\r\n    display: table-cell;\r\n    font-size: 0;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease {\r\n    height: 100%;\r\n    width: 26px;\r\n    border: none;\r\n    padding: 0;\r\n    outline: 0;\r\n    font: inherit;\r\n    -moz-user-select: none;\r\n}\r\n\r\n.mydp .btnleftborder {\r\n    border-left: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpickerenabled,\r\n.mydp .btnclearenabled,\r\n.mydp .btndecreaseenabled,\r\n.mydp .btnincreaseenabled,\r\n.mydp .headertodaybtnenabled,\r\n.mydp .headerbtnenabled,\r\n.mydp .yearchangebtnenabled {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .selectiondisabled,\r\n.mydp .btnpickerdisabled,\r\n.mydp .btncleardisabled,\r\n.mydp .btndecreasedisabled,\r\n.mydp .btnincreasedisabled,\r\n.mydp .headertodaybtndisabled,\r\n.mydp .headerbtndisabled,\r\n.mydp .yearchangebtndisabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.65;\r\n}\r\n\r\n.mydp .selectiondisabled {\r\n    background-color: #EEE;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headertodaybtn {\r\n    background: #FFF;\r\n}\r\n\r\n.mydp .header {\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .header td {\r\n    vertical-align: middle;\r\n    border: none;\r\n    line-height: 0;\r\n}\r\n\r\n.mydp .header td:nth-child(1) {\r\n    padding-left: 4px;\r\n}\r\n\r\n.mydp .header td:nth-child(2) {\r\n    text-align: center;\r\n}\r\n\r\n.mydp .header td:nth-child(3) {\r\n    padding-right: 4px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    height: calc(100% - 30px);\r\n    background-color: #FFF;\r\n    font-size: 14px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable,\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    border-collapse: collapse;\r\n    color: #003366;\r\n    line-height: 1.1;\r\n}\r\n\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    padding: 4px;\r\n    text-align: center;\r\n}\r\n\r\n.mydp .weekdaytitle {\r\n    background-color: #DDD;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    max-width: 36px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .weekdaytitleweeknbr {\r\n    width: 20px;\r\n    border-right: 1px solid #BBB;\r\n}\r\n\r\n.mydp .monthcell {\r\n    background-color: #FAFAFA;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .yearcell {\r\n    background-color: #FAFAFA;\r\n    width: 20%;\r\n}\r\n\r\n.mydp .daycell .datevalue {\r\n    background-color: inherit;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycell .datevalue span {\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycellweeknbr {\r\n    font-size: 10px;\r\n    border-right: 1px solid #CCC;\r\n    cursor: default;\r\n    color: #000;\r\n}\r\n\r\n.mydp .inlinedp {\r\n    position: relative;\r\n    margin-top: -1px;\r\n}\r\n\r\n.mydp .prevmonth,\r\n.mydp .nextmonth {\r\n    color: #CCC;\r\n}\r\n\r\n.mydp .disabled {\r\n    cursor: default !important;\r\n    color: #CCC;\r\n    background: #FBEFEF;\r\n}\r\n\r\n.mydp .highlight {\r\n    color: #C30000;\r\n}\r\n\r\n.mydp .dimday {\r\n    opacity: 0.5;\r\n}\r\n\r\n.mydp .currmonth {\r\n    background-color: #F6F6F6;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydp .markdate {\r\n    position: absolute;\r\n    width: 4px;\r\n    height: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .markcurrday,\r\n.mydp .markcurrmonth,\r\n.mydp .markcurryear {\r\n    text-decoration: underline;\r\n}\r\n\r\n.mydp .selectedday .datevalue,\r\n.mydp .selectedmonth .monthvalue,\r\n.mydp .selectedyear .yearvalue {\r\n    border: none;\r\n    background-color: #8EBFFF;\r\n    border-radius: 2px;\r\n}\r\n\r\n.mydp .headerbtncell {\r\n    background-color: #FAFAFA;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .yearchangebtncell {\r\n    text-align: center;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .headerbtn,\r\n.mydp .headerlabelbtn,\r\n.mydp .yearchangebtn {\r\n    background: #FAFAFA;\r\n    border: none;\r\n    height: 22px;\r\n}\r\n\r\n.mydp .headerbtn {\r\n    width: 16px;\r\n}\r\n\r\n.mydp .headerlabelbtn {\r\n    font-size: 14px;\r\n    outline: none;\r\n    cursor: default;\r\n}\r\n\r\n.mydp,\r\n.mydp .headertodaybtn {\r\n    border: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headerbtn,\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt,\r\n.mydp .headertodaybtn,\r\n.mydp .yearchangebtn {\r\n    color: #000;\r\n}\r\n\r\n.mydp .headertodaybtn {\r\n    padding: 0 4px;\r\n    font-size: 11px;\r\n    height: 22px;\r\n    min-width: 60px;\r\n    max-width: 84px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp button::-moz-focus-inner {\r\n    border: 0;\r\n}\r\n\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt {\r\n    text-align: center;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n    height: 26px;\r\n    width: 40px;\r\n    max-width: 40px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .btnclear:focus,\r\n.mydp .btndecrease:focus,\r\n.mydp .btnincrease:focus,\r\n.mydp .btnpicker:focus,\r\n.mydp .headertodaybtn:focus {\r\n    background: #ADD8E6;\r\n}\r\n\r\n.mydp .headerbtn:focus,\r\n.mydp .monthlabel:focus,\r\n.mydp .yearlabel:focus,\r\n.mydp .yearchangebtn:focus {\r\n    color: #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n.mydp .daycell:focus,\r\n.mydp .monthcell:focus,\r\n.mydp .yearcell:focus {\r\n    outline: 1px solid #CCC;\r\n}\r\n\r\n.mydp .icon-mydpcalendar,\r\n.mydp .icon-mydpremove {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydpleft,\r\n.mydp .icon-mydpright,\r\n.mydp .icon-mydpup,\r\n.mydp .icon-mydpdown {\r\n    color: #222;\r\n    font-size: 20px;\r\n}\r\n\r\n.mydp .btndecrease .icon-mydpleft,\r\n.mydp .btnincrease .icon-mydpright {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydptoday {\r\n    color: #222;\r\n    font-size: 11px;\r\n}\r\n\r\n.mydp table {\r\n    display: table;\r\n    border-spacing: 0;\r\n}\r\n\r\n.mydp table td {\r\n    padding: 0;\r\n}\r\n\r\n.mydp table,\r\n.mydp th,\r\n.mydp td {\r\n    border: none;\r\n}\r\n\r\n.mydp .btnpickerenabled:hover,\r\n.mydp .btnclearenabled:hover,\r\n.mydp .btndecreaseenabled:hover,\r\n.mydp .btnincreaseenabled:hover,\r\n.mydp .headertodaybtnenabled:hover {\r\n    background-color: #E6E6E6;\r\n}\r\n\r\n.mydp .tablesingleday:hover,\r\n.mydp .tablesinglemonth:hover,\r\n.mydp .tablesingleyear:hover {\r\n    background-color: #DDD;\r\n}\r\n\r\n.mydp .monthlabel,\r\n.mydp .yearlabel,\r\n.mydp .inputnoteditable,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .headerbtnenabled:hover,\r\n.mydp .yearchangebtnenabled:hover,\r\n.mydp .monthlabel:hover,\r\n.mydp .yearlabel:hover {\r\n    color: #777;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'mydatepicker';\r\n    src: url('data:application/octet-stream;base64,AAEAAAAPAIAAAwBwR1NVQiCMJXkAAAD8AAAAVE9TLzI+IEhNAAABUAAAAFZjbWFw6UKcfwAAAagAAAHEY3Z0IAbV/wQAAAz8AAAAIGZwZ22KkZBZAAANHAAAC3BnYXNwAAAAEAAADPQAAAAIZ2x5Zqbn7ycAAANsAAAFXGhlYWQNX0bLAAAIyAAAADZoaGVhBzwDWQAACQAAAAAkaG10eBXB//8AAAkkAAAAIGxvY2EGNATEAAAJRAAAABJtYXhwAXgMOgAACVgAAAAgbmFtZZKUFgMAAAl4AAAC/XBvc3R9NuZlAAAMeAAAAHpwcmVw5UErvAAAGIwAAACGAAEAAAAKADAAPgACbGF0bgAOREZMVAAaAAQAAAAAAAAAAQAAAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAECuAGQAAUAAAJ6ArwAAACMAnoCvAAAAeAAMQECAAACAAUDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBmRWQAQOgA6AYDUv9qAFoDUgCWAAAAAQAAAAAAAAAAAAUAAAADAAAALAAAAAQAAAFgAAEAAAAAAFoAAwABAAAALAADAAoAAAFgAAQALgAAAAQABAABAADoBv//AADoAP//AAAAAQAEAAAAAQACAAMABAAFAAYABwAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAZAAAAAAAAAAHAADoAAAA6AAAAAABAADoAQAA6AEAAAACAADoAgAA6AIAAAADAADoAwAA6AMAAAAEAADoBAAA6AQAAAAFAADoBQAA6AUAAAAGAADoBgAA6AYAAAAHAAEAAAAAAUECfQAOAAq3AAAAZhQBBRUrARQPAQYiJjURND4BHwEWAUEK+gscFhYcC/oKAV4OC/oLFg4B9A8UAgz6CgAAAQAAAAABZwJ8AA0AF0AUAAEAAQFHAAEAAW8AAABmFxMCBRYrAREUBiIvASY0PwE2MhYBZRQgCfoKCvoLHBgCWP4MDhYL+gscC/oLFgAAAAAFAAD/agOhA1IAFAAYACgAOABcALdAECoaAgoFMiICBgoNAQABA0dLsApQWEA/DgwCCgUGBgplAAIEAQQCAW0AAQAEAQBrAAADBAADawgBBgAEAgYEXwcBBQULWA0BCwsMSAADAwlYAAkJDQlJG0BADgwCCgUGBQoGbQACBAEEAgFtAAEABAEAawAAAwQAA2sIAQYABAIGBF8HAQUFC1gNAQsLDEgAAwMJWAAJCQ0JSVlAGFtZVlNQT0xJRkQ/PCYmJiQRFRQXEg8FHSsJAQYiLwEmND8BNjIfATc2Mh8BFhQBIREhNzU0JisBIgYdARQWOwEyNiU1NCYrASIGHQEUFjsBMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhYC1/7iBQ4GoQUFGgUOBnv3Bg4GGQX9awMS/O7XCggkCAoKCCQICgGsCggjCAoKCCMICtcsHPzuHSoqHUg0JSQlNNY2JCMlNgFHHSoBOP7iBQWhBg4FGgUFe/gFBRoFDv5zAjxroQgKCgihCAoKCKEICgoIoQgKCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAAPAAD/agOhA1IAAwAHAAsADwATABcAGwAfACMAMwA3ADsAPwBPAHMAmECVQSUCHRJJLSQDEx0CRyEfAh0TCR1UGwETGRcNAwkIEwlfGBYMAwgVEQcDBQQIBV4UEAYDBA8LAwMBAAQBXhoBEhIeWCABHh4MSA4KAgMAABxYABwcDRxJcnBtamdmY2BdW1ZTTUxFRD8+PTw7Ojk4NzY1NDEvKScjIiEgHx4dHBsaGRgXFhUUExIRERERERERERAiBR0rFzM1IxczNSMnMzUjFzM1IyczNSMBMzUjJzM1IwEzNSMnMzUjAzU0JicjIgYHFRQWNzMyNgEzNSMnMzUjFzM1Izc1NCYnIyIGFxUUFjczMjY3ERQGIyEiJjURNDY7ATU0NjsBMhYdATM1NDY7ATIWBxUzMhZHoaHFsrLFoaHFsrLFoaEBm7Oz1rKyAayhodazs8QMBiQHCgEMBiQHCgGboaHWs7PWoaESCggjBwwBCggjCArXLBz87h0qKh1INCUkJTTWNiQjJTYBRx0qT6GhoSSysrIkof3Eofqh/cShJLIBMKEHCgEMBqEHDAEK/iayJKGhoWuhBwoBDAahBwwBCiz9NR0qKh0Cyx0qNiU0NCU2NiU0NCU2KgAAAAH//wAAAjsByQAOABFADgABAAFvAAAAZhUyAgUWKyUUBichIi4BPwE2Mh8BFgI7FA/+DA8UAgz6Ch4K+gqrDhYBFB4L+goK+gsAAAABAAAAAAI8Ae0ADgAXQBQAAQABAUcAAQABbwAAAGY1FAIFFisBFA8BBiIvASY0NjMhMhYCOwr6CxwL+gsWDgH0DhYByQ4L+gsL+gscFhYAAAEAAP/vAtQChgAkAB5AGyIZEAcEAAIBRwMBAgACbwEBAABmFBwUFAQFGCslFA8BBiIvAQcGIi8BJjQ/AScmND8BNjIfATc2Mh8BFhQPARcWAtQPTBAsEKSkECwQTBAQpKQQEEwQLBCkpBAsEEwPD6SkD3AWEEwPD6WlDw9MECwQpKQQLBBMEBCkpBAQTA8uD6SkDwABAAAAAQAAbdyczV8PPPUACwPoAAAAANUsgZUAAAAA1SyBlf///2oD6ANSAAAACAACAAAAAAAAAAEAAANS/2oAAAPo/////gPoAAEAAAAAAAAAAAAAAAAAAAAIA+gAAAFlAAABZQAAA+gAAAOgAAACO///AjsAAAMRAAAAAAAAACIASgEoAhYCPAJkAq4AAAABAAAACAB0AA8AAAAAAAIARABUAHMAAACpC3AAAAAAAAAAEgDeAAEAAAAAAAAANQAAAAEAAAAAAAEADAA1AAEAAAAAAAIABwBBAAEAAAAAAAMADABIAAEAAAAAAAQADABUAAEAAAAAAAUACwBgAAEAAAAAAAYADABrAAEAAAAAAAoAKwB3AAEAAAAAAAsAEwCiAAMAAQQJAAAAagC1AAMAAQQJAAEAGAEfAAMAAQQJAAIADgE3AAMAAQQJAAMAGAFFAAMAAQQJAAQAGAFdAAMAAQQJAAUAFgF1AAMAAQQJAAYAGAGLAAMAAQQJAAoAVgGjAAMAAQQJAAsAJgH5Q29weXJpZ2h0IChDKSAyMDE3IGJ5IG9yaWdpbmFsIGF1dGhvcnMgQCBmb250ZWxsby5jb21teWRhdGVwaWNrZXJSZWd1bGFybXlkYXRlcGlja2VybXlkYXRlcGlja2VyVmVyc2lvbiAxLjBteWRhdGVwaWNrZXJHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuaHR0cDovL2ZvbnRlbGxvLmNvbQBDAG8AcAB5AHIAaQBnAGgAdAAgACgAQwApACAAMgAwADEANwAgAGIAeQAgAG8AcgBpAGcAaQBuAGEAbAAgAGEAdQB0AGgAbwByAHMAIABAACAAZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AbQB5AGQAYQB0AGUAcABpAGMAawBlAHIAUgBlAGcAdQBsAGEAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBtAHkAZABhAHQAZQBwAGkAYwBrAGUAcgBWAGUAcgBzAGkAbwBuACAAMQAuADAAbQB5AGQAYQB0AGUAcABpAGMAawBlAHIARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAAIAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAECAQMBBAEFAQYBBwEIAQkACW15ZHByaWdodAhteWRwbGVmdAlteWRwdG9kYXkMbXlkcGNhbGVuZGFyBm15ZHB1cAhteWRwZG93bgpteWRwcmVtb3ZlAAAAAAABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAYABgAGAAYA1L/agNS/2qwACwgsABVWEVZICBLuAAOUUuwBlNaWLA0G7AoWWBmIIpVWLACJWG5CAAIAGNjI2IbISGwAFmwAEMjRLIAAQBDYEItsAEssCBgZi2wAiwgZCCwwFCwBCZasigBCkNFY0VSW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCxAQpDRWNFYWSwKFBYIbEBCkNFY0UgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7ABK1lZI7AAUFhlWVktsAMsIEUgsAQlYWQgsAVDUFiwBSNCsAYjQhshIVmwAWAtsAQsIyEjISBksQViQiCwBiNCsQEKQ0VjsQEKQ7ABYEVjsAMqISCwBkMgiiCKsAErsTAFJbAEJlFYYFAbYVJZWCNZISCwQFNYsAErGyGwQFkjsABQWGVZLbAFLLAHQyuyAAIAQ2BCLbAGLLAHI0IjILAAI0JhsAJiZrABY7ABYLAFKi2wBywgIEUgsAtDY7gEAGIgsABQWLBAYFlmsAFjYESwAWAtsAgssgcLAENFQiohsgABAENgQi2wCSywAEMjRLIAAQBDYEItsAosICBFILABKyOwAEOwBCVgIEWKI2EgZCCwIFBYIbAAG7AwUFiwIBuwQFlZI7AAUFhlWbADJSNhRESwAWAtsAssICBFILABKyOwAEOwBCVgIEWKI2EgZLAkUFiwABuwQFkjsABQWGVZsAMlI2FERLABYC2wDCwgsAAjQrILCgNFWCEbIyFZKiEtsA0ssQICRbBkYUQtsA4ssAFgICCwDENKsABQWCCwDCNCWbANQ0qwAFJYILANI0JZLbAPLCCwEGJmsAFjILgEAGOKI2GwDkNgIIpgILAOI0IjLbAQLEtUWLEEZERZJLANZSN4LbARLEtRWEtTWLEEZERZGyFZJLATZSN4LbASLLEAD0NVWLEPD0OwAWFCsA8rWbAAQ7ACJUKxDAIlQrENAiVCsAEWIyCwAyVQWLEBAENgsAQlQoqKIIojYbAOKiEjsAFhIIojYbAOKiEbsQEAQ2CwAiVCsAIlYbAOKiFZsAxDR7ANQ0dgsAJiILAAUFiwQGBZZrABYyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsQAAEyNEsAFDsAA+sgEBAUNgQi2wEywAsQACRVRYsA8jQiBFsAsjQrAKI7ABYEIgYLABYbUQEAEADgBCQopgsRIGK7ByKxsiWS2wFCyxABMrLbAVLLEBEystsBYssQITKy2wFyyxAxMrLbAYLLEEEystsBkssQUTKy2wGiyxBhMrLbAbLLEHEystsBwssQgTKy2wHSyxCRMrLbAeLACwDSuxAAJFVFiwDyNCIEWwCyNCsAojsAFgQiBgsAFhtRAQAQAOAEJCimCxEgYrsHIrGyJZLbAfLLEAHistsCAssQEeKy2wISyxAh4rLbAiLLEDHistsCMssQQeKy2wJCyxBR4rLbAlLLEGHistsCYssQceKy2wJyyxCB4rLbAoLLEJHistsCksIDywAWAtsCosIGCwEGAgQyOwAWBDsAIlYbABYLApKiEtsCsssCorsCoqLbAsLCAgRyAgsAtDY7gEAGIgsABQWLBAYFlmsAFjYCNhOCMgilVYIEcgILALQ2O4BABiILAAUFiwQGBZZrABY2AjYTgbIVktsC0sALEAAkVUWLABFrAsKrABFTAbIlktsC4sALANK7EAAkVUWLABFrAsKrABFTAbIlktsC8sIDWwAWAtsDAsALABRWO4BABiILAAUFiwQGBZZrABY7ABK7ALQ2O4BABiILAAUFiwQGBZZrABY7ABK7AAFrQAAAAAAEQ+IzixLwEVKi2wMSwgPCBHILALQ2O4BABiILAAUFiwQGBZZrABY2CwAENhOC2wMiwuFzwtsDMsIDwgRyCwC0NjuAQAYiCwAFBYsEBgWWawAWNgsABDYbABQ2M4LbA0LLECABYlIC4gR7AAI0KwAiVJiopHI0cjYSBYYhshWbABI0KyMwEBFRQqLbA1LLAAFrAEJbAEJUcjRyNhsAlDK2WKLiMgIDyKOC2wNiywABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyCwCEMgiiNHI0cjYSNGYLAEQ7ACYiCwAFBYsEBgWWawAWNgILABKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwAmIgsABQWLBAYFlmsAFjYSMgILAEJiNGYTgbI7AIQ0awAiWwCENHI0cjYWAgsARDsAJiILAAUFiwQGBZZrABY2AjILABKyOwBENgsAErsAUlYbAFJbACYiCwAFBYsEBgWWawAWOwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbA3LLAAFiAgILAFJiAuRyNHI2EjPDgtsDgssAAWILAII0IgICBGI0ewASsjYTgtsDkssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbkIAAgAY2MjIFhiGyFZY7gEAGIgsABQWLBAYFlmsAFjYCMuIyAgPIo4IyFZLbA6LLAAFiCwCEMgLkcjRyNhIGCwIGBmsAJiILAAUFiwQGBZZrABYyMgIDyKOC2wOywjIC5GsAIlRlJYIDxZLrErARQrLbA8LCMgLkawAiVGUFggPFkusSsBFCstsD0sIyAuRrACJUZSWCA8WSMgLkawAiVGUFggPFkusSsBFCstsD4ssDUrIyAuRrACJUZSWCA8WS6xKwEUKy2wPyywNiuKICA8sAQjQoo4IyAuRrACJUZSWCA8WS6xKwEUK7AEQy6wKystsEAssAAWsAQlsAQmIC5HI0cjYbAJQysjIDwgLiM4sSsBFCstsEEssQgEJUKwABawBCWwBCUgLkcjRyNhILAEI0KwCUMrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyBHsARDsAJiILAAUFiwQGBZZrABY2AgsAErIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbACYiCwAFBYsEBgWWawAWNhsAIlRmE4IyA8IzgbISAgRiNHsAErI2E4IVmxKwEUKy2wQiywNSsusSsBFCstsEMssDYrISMgIDywBCNCIzixKwEUK7AEQy6wKystsEQssAAVIEewACNCsgABARUUEy6wMSotsEUssAAVIEewACNCsgABARUUEy6wMSotsEYssQABFBOwMiotsEcssDQqLbBILLAAFkUjIC4gRoojYTixKwEUKy2wSSywCCNCsEgrLbBKLLIAAEErLbBLLLIAAUErLbBMLLIBAEErLbBNLLIBAUErLbBOLLIAAEIrLbBPLLIAAUIrLbBQLLIBAEIrLbBRLLIBAUIrLbBSLLIAAD4rLbBTLLIAAT4rLbBULLIBAD4rLbBVLLIBAT4rLbBWLLIAAEArLbBXLLIAAUArLbBYLLIBAEArLbBZLLIBAUArLbBaLLIAAEMrLbBbLLIAAUMrLbBcLLIBAEMrLbBdLLIBAUMrLbBeLLIAAD8rLbBfLLIAAT8rLbBgLLIBAD8rLbBhLLIBAT8rLbBiLLA3Ky6xKwEUKy2wYyywNyuwOystsGQssDcrsDwrLbBlLLAAFrA3K7A9Ky2wZiywOCsusSsBFCstsGcssDgrsDsrLbBoLLA4K7A8Ky2waSywOCuwPSstsGossDkrLrErARQrLbBrLLA5K7A7Ky2wbCywOSuwPCstsG0ssDkrsD0rLbBuLLA6Ky6xKwEUKy2wbyywOiuwOystsHAssDorsDwrLbBxLLA6K7A9Ky2wciyzCQQCA0VYIRsjIVlCK7AIZbADJFB4sAEVMC0AS7gAyFJYsQEBjlmwAbkIAAgAY3CxAAVCsgABACqxAAVCswoCAQgqsQAFQrMOAAEIKrEABkK6AsAAAQAJKrEAB0K6AEAAAQAJKrEDAESxJAGIUViwQIhYsQNkRLEmAYhRWLoIgAABBECIY1RYsQMARFlZWVmzDAIBDCq4Af+FsASNsQIARAAA') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.mydp .mydpicon {\r\n    font-family: 'mydatepicker';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.mydp .icon-mydpright:before {\r\n    content: \"\\e800\";\r\n}\r\n\r\n.mydp .icon-mydpleft:before {\r\n    content: \"\\e801\";\r\n}\r\n\r\n.mydp .icon-mydptoday:before {\r\n    content: \"\\e802\";\r\n}\r\n\r\n.mydp .icon-mydpcalendar:before {\r\n    content: \"\\e803\";\r\n}\r\n\r\n.mydp .icon-mydpup:before {\r\n    content: \"\\e804\";\r\n}\r\n\r\n.mydp .icon-mydpdown:before {\r\n    content: \"\\e805\";\r\n}\r\n\r\n.mydp .icon-mydpremove:before {\r\n    content: \"\\e806\";\r\n}\r\n"

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = ".suggestions {\n  z-index: 99;\n  padding: 1.5rem 0 1.5rem 3rem;\n  width: 15rem;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left; }\n\n.dropdown-container {\n  width: 9rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.filter-input {\n  color: #333333; }\n"

/***/ },
/* 61 */
/***/ function(module, exports) {

module.exports = ".contact-us {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/contact.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.contact-us {\n  margin-top: 6rem;\n  text-align: center;\n  overflow: scroll; }\n  .contact-us input {\n    height: 5rem;\n    padding: 1rem;\n    font-size: 1.8rem; }\n    .contact-us input:required {\n      outline: none; }\n  .contact-us h1 {\n    font-size: 4.5rem;\n    color: white; }\n  .contact-us .message {\n    height: 20rem;\n    vertical-align: top; }\n  .contact-us .message,\n  .contact-us .subject {\n    width: 64rem; }\n\n.static-info {\n  font-size: 2.3rem;\n  width: 100%;\n  color: white;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.form-wrapper {\n  text-align: center;\n  display: inline-block; }\n\n.form-group {\n  width: 60rem;\n  text-align: left; }\n  .form-group .alert {\n    width: inherit;\n    padding: 0;\n    margin: 0; }\n\n.name-group,\n.mail-number-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-box .alert,\n.subject-box .alert {\n  width: 60rem; }\n\n#message {\n  height: 20rem;\n  font-size: 1.8rem; }\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.submit-btn {\n  width: 25rem;\n  margin-top: 2rem;\n  height: 4rem;\n  margin-bottom: 5rem; }\n  .submit-btn:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto; }\n"

/***/ },
/* 62 */
/***/ function(module, exports) {

module.exports = ".date-picker-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .date-picker-container input {\n    height: 3rem;\n    width: 8rem;\n    border: 0;\n    text-align: center;\n    background-color: transparent;\n    color: white;\n    margin-top: .2rem; }\n    .date-picker-container input::-webkit-input-placeholder {\n      color: white; }\n    .date-picker-container input:-ms-input-placeholder {\n      color: white; }\n    .date-picker-container input::placeholder {\n      color: white; }\n  .date-picker-container label {\n    font-weight: 600;\n    padding-top: .4rem;\n    font-size: 1.5rem;\n    color: gray; }\n  .date-picker-container .from-date,\n  .date-picker-container .to-date {\n    width: 13.5rem;\n    text-align: center;\n    margin-right: 1rem;\n    margin-top: 1.4rem;\n    height: 3.4rem;\n    border: .2px solid #426771;\n    margin-left: 1rem; }\n    .date-picker-container .from-date input,\n    .date-picker-container .to-date input {\n      width: 10rem;\n      border: 0;\n      height: 3.4rem;\n      text-align: center;\n      background-color: transparent;\n      color: white; }\n\n@media (max-width: 955px) {\n  .from-date,\n  .to-date {\n    position: relative;\n    display: inline-block; }\n  .date-picker-container {\n    margin-top: 1.4rem;\n    display: inline-block; } }\n"

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = ".hide-dropdown {\n  display: none; }\n\n.dropdown-list {\n  z-index: 99;\n  padding: 1.5rem 0 1.5rem 3rem;\n  width: 15rem;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left; }\n\n.dropdown-container {\n  width: 9rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.data-list input {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  margin-right: .8rem;\n  float: left; }\n\n.data-list span {\n  vertical-align: middle;\n  font-size: 1.5rem; }\n\n@media (max-width: 955px) {\n  .dropdown-container {\n    display: inline-block;\n    width: 30%;\n    margin-left: 1rem;\n    margin-right: 1rem; } }\n"

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = ".hero {\n  width: 100%; }\n\n.header {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n.view-all {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #26181D; }\n\n.main-page-container {\n  height: 100%;\n  min-height: 100%; }\n\n.view-all-container {\n  text-align: center; }\n\n.main-heading {\n  font-size: 7rem;\n  color: white; }\n\n.sub-heading {\n  opacity: 1;\n  color: white;\n  top: 1rem;\n  position: relative; }\n\n.content {\n  position: relative;\n  top: 10rem; }\n\nheader {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.btn {\n  color: white;\n  background-color: #26181D;\n  top: 3rem;\n  position: relative;\n  border: none;\n  border-radius: 300px;\n  width: 30rem;\n  font-size: 2rem;\n  cursor: initial;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\nh1.ws-heading {\n  color: #26181D;\n  text-align: center;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif; }\n\n#workshops {\n  padding-top: 5rem; }\n\n@media (max-width: 955px) {\n  .main-heading {\n    font-size: 4.5rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 25rem;\n    font-size: 2.2rem; } }\n\n@media (max-width: 400px) {\n  .main-heading {\n    font-size: 3.8rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 18rem;\n    font-size: 1.6rem; } }\n"

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = ".top-bar-title {\n  font-family: 'Coiny', cursive;\n  font-size: 22px;\n  color: #ffffff; }\n\n.nav-menu a {\n  color: #ffffff; }\n\n.fa-bars {\n  border: 1px solid white;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  border-radius: 4px; }\n\n.filter-header {\n  display: none; }\n\n.navbar-toggle {\n  display: none; }\n\nnav {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 6rem;\n  background-color: #26181D;\n  border: none; }\n  nav img {\n    width: 3rem;\n    height: 3rem;\n    margin-top: 1.2rem;\n    margin-left: 1.5rem;\n    float: left; }\n  nav .navbar-nav a {\n    background-color: transparent;\n    color: white; }\n  nav ul {\n    margin-top: .4rem;\n    font-weight: 200; }\n\n@media (max-width: 955px) {\n  nav {\n    height: 5rem; }\n    nav ul {\n      width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white; }\n  .filter-header {\n    display: inline-block;\n    color: white;\n    margin-top: 1rem;\n    padding-left: 1rem;\n    background: transparent;\n    margin-left: 2rem; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .hideNavbar {\n    display: none; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-nav > li {\n    float: none !important; } }\n\n@media (min-width: 955px) and (max-width: 1140px) {\n  nav ul {\n    width: 100%; }\n  .hideNavbar {\n    display: none; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white;\n    margin-top: 1.5rem;\n    float: right; }\n  .navbar-collapse.collapse {\n    display: none !important; }\n  .navbar-nav {\n    float: none !important;\n    margin-top: 7.5px; }\n  .navbar-nav > li {\n    float: none !important; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .collapse.in {\n    display: block !important; } }\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = ".detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-img {\n  width: 12rem;\n  height: 12rem;\n  /*border-radius: 50%;*/\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 2rem;\n  /*border: 3px solid #15424E;*/ }\n\n.profile-photo {\n  float: left; }\n\n.photographer-name h1 {\n  font-size: 2.5rem;\n  color: #73656A; }\n\n.photographer-information h4 {\n  margin-top: 0; }\n\n.detail-location {\n  color: #73656A;\n  opacity: 0.8;\n  margin-bottom: .5rem; }\n\n.website-link {\n  text-decoration: none;\n  margin-bottom: 1rem; }\n\n/* Style the tab */\ndiv.tab {\n  overflow: hidden;\n  margin-top: 5rem;\n  width: 100%; }\n  div.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    border-bottom: 3px solid transparent;\n    font-size: 2rem;\n    color: #73656A; }\n    div.tab button.active {\n      /*background-color: #ccc;*/\n      border-bottom: 3px solid #73656A; }\n\n/* Style the tab content */\n.tabcontent {\n  display: none;\n  border-top: none;\n  text-align: left;\n  padding-left: 2rem;\n  height: 40rem;\n  overflow: scroll;\n  width: 100%;\n  background-color: rgba(239, 230, 233, 0.57); }\n\n.detail-tabs {\n  text-align: center;\n  width: 65%;\n  float: left;\n  margin-left: 4rem; }\n\n.day-wrapper,\n.photographer-information {\n  padding-top: 2rem; }\n\n.day-wrapper .location,\n.photographer-information h4 {\n  color: #73656A; }\n\n#Description p {\n  padding-top: 2rem;\n  margin-right: .4rem; }\n\n#Description h3 {\n  margin-top: 5%; }\n\n#Gallery img {\n  display: inline-block;\n  vertical-align: middle;\n  width: 25rem;\n  height: 28rem;\n  margin: 2rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: sepia(20%);\n          filter: sepia(20%); }\n\n.wsd-name {\n  font-size: 3.5rem;\n  color: #73656A;\n  text-align: center;\n  margin-top: 3rem;\n  font-weight: 500; }\n\n.highlights {\n  margin-top: 3rem;\n  display: inline-block;\n  margin-top: 10rem;\n  padding-left: 5rem;\n  width: 30%; }\n  .highlights a {\n    color: #73656A; }\n  .highlights div {\n    font-size: 2rem;\n    font-weight: 300;\n    color: #73656A; }\n    .highlights div i {\n      color: #73656A;\n      padding-left: 1rem; }\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = ".workshop-list {\n  text-align: center; }\n\n.ws-pages /deep/ ul.ng2-pagination a {\n  text-decoration: none;\n  cursor: pointer;\n  color: #73656A; }\n  .ws-pages /deep/ ul.ng2-pagination a:hover {\n    border-radius: 20%; }\n\n.ws-pages /deep/ ul.ng2-pagination li.current {\n  background: #73656A;\n  border-radius: 20%; }\n\n.entity {\n  width: 30rem;\n  display: inline-block;\n  margin: 2rem;\n  box-shadow: 0rem 0rem 0.2rem 0rem #888888; }\n  .entity img {\n    vertical-align: middle;\n    width: 30rem;\n    height: 20rem;\n    margin-bottom: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.inner {\n  text-align: center;\n  position: relative;\n  padding-bottom: 2rem; }\n\nh1.name {\n  margin-top: 0;\n  font-size: 2rem;\n  color: #26181D;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif;\n  margin-left: 1rem; }\n\n.price {\n  color: #594B50;\n  text-align: left;\n  padding-left: 2rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 2rem; }\n\nhr {\n  width: 10rem;\n  text-align: center;\n  border-color: #594B50;\n  opacity: 0.3;\n  margin-top: 1rem;\n  margin-bottom: .5rem; }\n\n.date {\n  color: #594B50;\n  text-align: left;\n  padding-left: 1rem; }\n\n.location {\n  color: #26181D;\n  padding-bottom: 1rem;\n  opacity: 0.6; }\n\n.truncate {\n  width: 28rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n@media (max-width: 955px) {\n  .entity .image {\n    height: 15rem;\n    margin-bottom: 1rem;\n    width: 22.5rem; }\n  h1.name {\n    font-size: 1.8rem; } }\n"

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = ".filters,\n.list {\n  position: absolute;\n  left: 0;\n  width: 100%; }\n\n.filters {\n  position: fixed;\n  z-index: 999;\n  background-color: transparent;\n  height: auto;\n  width: 90rem;\n  padding-bottom: .3rem;\n  left: 5rem; }\n\n.list {\n  top: 10rem;\n  overflow-x: hidden; }\n\n.ws-container nav.navbar.navbar-default {\n  background-color: white;\n  border: none; }\n\n.ws-container .navbar-default .navbar-nav .active a {\n  background-color: transparent; }\n\n@media (max-width: 955px) {\n  .filters {\n    position: absolute;\n    background-color: #15424E;\n    height: auto;\n    width: 100%;\n    top: 5rem;\n    padding-bottom: 2rem;\n    left: 0;\n    z-index: 99;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1); }\n  .list {\n    top: 5rem;\n    position: relative; }\n  .hideFilter {\n    display: none; } }\n"

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = ".ws-container nav.navbar.navbar-default {\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.ws-container .navbar-default .navbar-nav .active a {\r\n    background-color: transparent;\r\n}"

/***/ },
/* 71 */
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },
/* 72 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <div>\r\n        <input id=\"country\" type=\"text\" class=\"filter-input\" [(ngModel)]=query (keyup)=filter() value=\"Type a location\">\r\n    </div>\r\n    <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\r\n        <ul *ngFor=\"let item of filteredList\" >\r\n            <span >\r\n                <a (click)=\"select(item)\">{{item}}</a>\r\n            </span>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ },
/* 73 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n<div class=\"contact-us\">\r\n    <h1>Let's click together!</h1>\r\n    <div class=\"static-info\">\r\n        <div>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span>hello@pixelatedplanet.com</span>\r\n        </div>\r\n        <div>\r\n            <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\r\n            <span>425-979-8838</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-wrapper\">\r\n        <form (ngSubmit)=\"onSubmit()\" name=\"contact-form\" #contactForm=\"ngForm\">\r\n            <div class=\"name-group\">\r\n                <div class=\"form-group first-name\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" required [(ngModel)]=\"fname\" name=\"fname\" #firstname=\"ngModel\" placeholder=\"Full name\">\r\n                    <div [hidden]=\"firstname.valid || firstname.pristine\" class=\"alert alert-danger\">\r\n                        Name is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mail-number-group\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"email\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\" placeholder=\"Email address\">\r\n                    <div [hidden]=\"email.valid || email.pristine\" class=\"alert alert-danger\">\r\n                        Email address is required\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group subject-box\">\r\n                <input type=\"text\" class=\"form-control\" id=\"subject\" required [(ngModel)]=\"subjectText\" name=\"subject\" #subject=\"ngModel\"\r\n                    placeholder=\"Subject\">\r\n                <div [hidden]=\"subject.valid || subject.pristine\" class=\"alert alert-danger\">\r\n                    Subject is required\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group message-box\">\r\n                <textarea class=\"form-control\" id=\"message\" required rows=\"4\" cols=\"50\" name=\"message\" form=\"contact-form\" [(ngModel)]=\"messageText\"\r\n                    #message=\"ngModel\" placeholder=\"How can we help you?\"></textarea>\r\n                <!--<input type=\"text\" class=\"form-control\" id=\"message\" required [(ngModel)]=\"messageText\" name=\"message\" #message=\"ngModel\">-->\r\n                <div [hidden]=\"message.valid || message.pristine\" class=\"alert alert-danger\">\r\n                    Message is required\r\n                </div>\r\n            </div>\r\n        </form>\r\n                    <button type=\"submit\" class=\"submit-btn btn btn-success\" [disabled]=\"!contactForm.form.valid\">Submit</button>\r\n    </div>\r\n</div>"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = "<div class=\"date-picker-container\">\r\n    <div class=\"from-date\">\r\n        <my-date-picker (dateChanged)=\"onFromDateChanged($event)\" name=\"from-date\" [placeholder]=\"fromDateLabel\" [options]=\"fromDatePickerOptions\"></my-date-picker>\r\n    </div>\r\n    <div class=\"to-date\">\r\n       <my-date-picker (dateChanged)=\"onToDateChanged($event)\" name=\"to-date\" [placeholder]=\"toDateLabel\" [options]=\"toDatePickerOptions\"></my-date-picker>\r\n    </div>\r\n</div>"

/***/ },
/* 75 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <button (click)=\"toggleDropdown()\"><span>{{buttonLabel}}</span>\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n</button>\r\n    <div class=\"dropdown-list\" (click)=\"overlay()\" [class.hide-dropdown]=\"isCollapsed\">\r\n        <div class=\"data-list\" *ngFor=\"let data of dataModel;\">\r\n            <input type=\"checkbox\" name=\"{{optionName}}\" value=\"{{data.value}}\">\r\n            <div>{{data.label}}</div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 76 */
/***/ function(module, exports) {

module.exports = "<div class=\"main-page-container\">\r\n    <navi-bar [showFilters]=\"false\"></navi-bar>\r\n    <div class=\"header\">\r\n        <header class=\"masthead\">\r\n            <div class=\"header-content\">\r\n                <div class=\"header-content-inner\">\r\n                    <div class=\"main-heading\" id=\"homeHeading\">Pixelated Planet</div>\r\n                    <!-- <div class=\"sub-heading\">It is a long established fact that a reader will be distracted by the readable content of a page when\r\n                        looking at its layout.</div> -->\r\n                    <a class=\"btn btn-default btn-lg\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">Upcoming Workshops</a>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>\r\n\r\n    <section id=\"workshops\">\r\n        <h1 class=\"ws-heading\">\r\n            Workshops\r\n        </h1>\r\n        <workshops-list></workshops-list>\r\n        <div class=\"view-all-container\">\r\n            <a href=\"/workshops\" class=\"view-all\" angulartics2On=\"click\" angularticsEvent=\"ViewAllEventsClick\" angularticsCategory=\"HomePageInteraction\"><span>View all</span>  <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </section>\r\n</div>"

/***/ },
/* 77 */
/***/ function(module, exports) {

module.exports = "<nav class=\"nav-container\">\r\n  <a href=\"\"  angulartics2On=\"click\" angularticsEvent=\"GoToHomePageEvent\" angularticsCategory=\"NavBarInteraction\">\r\n    <img class=\"image\" src=\"/assets/img/icon.png\" alt=\"workshop image\">\r\n  </a>\r\n  <div class=\"navbar-header\">\r\n    <button *ngIf=\"showFilters\" type=\"button\" class=\"filter-header btn\" (click)=\"toggleFilter()\">\r\n          <div>Filters <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n    <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\r\n      <div><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"navbar-collapse\" [ngClass]=\"{'hideNavbar': hideNavbar}\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"active\" angulartics2On=\"click\" angularticsEvent=\"GoToWorkshopsPageEvent\" angularticsCategory=\"NavBarInteraction\"><a href=\"/workshops\">Workshops</a></li>\r\n      <li><a href=\"#\" angulartics2On=\"click\" angularticsEvent=\"GoToAboutPageEvent\" angularticsCategory=\"NavBarInteraction\">About</a></li>\r\n      <li><a href=\"/contact\" angulartics2On=\"click\" angularticsEvent=\"GoToContactPageEvent\" angularticsCategory=\"NavBarInteraction\">Contact</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n\t<navi-bar></navi-bar>\r\n\t<div class=\"list\">\r\n\t\tRedirecting to an external link...\r\n\t</div>\r\n</div>"

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(workshopDetails.imageLink)\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"wsd-name\">{{workshopDetails.name}}</div>\r\n<div class=\"details-container\">\r\n    <div class=\"detail-tabs\">\r\n        <div class=\"tab\">\r\n            <button class=\"tablinks active\" (click)=\"openTabs($event, 0)\">Description</button>\r\n            <button class=\"tablinks\" (click)=\"openTabs($event, 1)\">Itinerary</button>\r\n            <button class=\"tablinks\" (click)=\"openTabs($event, 2)\">Gallery</button>\r\n            <button class=\"tablinks\" (click)=\"openTabs($event, 3)\">Photographers</button>\r\n        </div>\r\n\r\n        <div id=\"Description\" class=\"tabcontent\">\r\n            <h3>Description</h3>\r\n            <p>{{workshopDetails.description}}</p>\r\n        </div>\r\n\r\n        <div id=\"Itinerary\" class=\"tabcontent\">\r\n            <h3>Itinerary</h3>\r\n            <div class=\"day-wrapper\" *ngFor=\"let data of workshopDetails.itinerary;\">\r\n                <h5>\r\n                    <span>Day {{data.day}} - </span>\r\n                    <span class=\"location\">{{data.location}}</span>\r\n                </h5>\r\n                <p>{{data.content}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"Gallery\" class=\"tabcontent\">\r\n            <!-- <img class=\"image\" *ngFor=\"let image of workshopDetails[0].gallery;\" [src]=\"image\" alt=\"workshop image\" /> -->\r\n        </div>\r\n\r\n        <div id=\"Photographer\" class=\"tabcontent\">\r\n            <h3>Photographers</h3>\r\n            <div class=\"photographer-information\" *ngFor=\"let photographer of workshopDetails.photographers;\">\r\n                <div class=\"profile-photo\">\r\n                    <img class=\"profile-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(photographer.profilePhotoLink)\" alt=\"workshop image\" />\r\n                </div>\r\n                <h4>\r\n                    <span>{{photographer.firstName}}</span>\r\n                    <span>{{photographer.lastName}}</span>\r\n                </h4>\r\n                <div class=\"detail-location\">\r\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                    <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(photographer.locationId)?.name}}</span>\r\n                </div>\r\n                <div class=\"website-link\">\r\n                    <a href=\"{{photographer?.websiteLink}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website\r\n                </a>\r\n                </div>\r\n                <p>{{photographer.moreInformation}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"highlights\">\r\n        <div class=\"wsd-link\">\r\n            <h4 class=\"highlight-headings\">Workshop Link</h4>\r\n            <a href=\"{{workshopDetails.link}}\" target=\"_blank\"><i class=\"fa fa-link\"></i> Workshop link\r\n        </a>\r\n        </div>\r\n        <div class=\"wsd-location\">\r\n            <h4 class=\"highlight-headings\">Location</h4>\r\n            <i class=\"fa fa-map-marker\"></i>\r\n            <span>{{this.workshopRepository.globalConstants.getLocationByLocationId(workshopDetails.locationId)?.name}}</span>\r\n        </div>\r\n        <div class=\"wsd-price\">\r\n            <h4 class=\"highlight-headings\">Price Range</h4>\r\n            <i class=\"fa fa-usd\"></i> {{workshopDetails.minCost}} - {{workshopDetails.maxCost}}\r\n        </div>\r\n        <div class=\"wsd-dates\">\r\n            <h4 class=\"highlight-headings\">Dates</h4>\r\n            <div class=\"dates-information\" *ngFor=\"let detail of workshopDetails.multiWorkshopDetails;\">\r\n                <div>\r\n                    <i class=\"fa fa-calendar\"></i>\r\n                    <span>{{detail.startDate}} - {{detail.endDate}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 80 */
/***/ function(module, exports) {

module.exports = "<div class=\"workshop-list\">\r\n    <div>\r\n        <article class=\"entity\" *ngFor=\"let data of asyncData | async | paginate: { id: 'server', itemsPerPage: itemsPerPage, currentPage: page, totalItems: total }\">\r\n            <div class=\"inner\" (click)=\"loadWorkshopDetails(data.workshopId, data.name)\">\r\n                <img class=\"image\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(data.imageLink)\" alt=\"workshop image\" />\r\n                <h1 class=\"name truncate\" title=\"{{ data.name }}\">\r\n                    {{ data.name }}\r\n                </h1>\r\n                <hr>\r\n                <div class=\"location\">\r\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                    <span>{{this.formatLocation(data.locationId)}}</span>\r\n                </div>\r\n                <div class=\"date\">\r\n                    <span>{{this.formatDate(data.startDateFirst)}}</span>\r\n                    <span *ngIf=\"data.startDateFirst != data.endDateFirst\">-</span>\r\n                    <span *ngIf=\"data.startDateFirst != data.endDateFirst\"> {{this.formatDate(data.endDateFirst)}} </span>\r\n                </div>\r\n                <div class=\"price\" *ngIf=\"data.minCost == data.maxCost\">{{data.costCurrency}} {{data.minCost}}</div>\r\n                <div class=\"price\" *ngIf=\"data.minCost < data.maxCost\">{{data.costCurrency}} {{data.minCost}}-{{data.maxCost}}</div>\r\n            </div>\r\n        </article>\r\n    </div>\r\n    <div *ngIf=\"itemsPerPage > 4\" class=\"ws-pages\"> \r\n        <pagination-controls (pageChange)=\"getWorkshopsData(queryPath,$event, itemsPerPage)\" id=\"server\"></pagination-controls>\r\n    </div>\r\n</div>"

/***/ },
/* 81 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n<navi-bar  [showFilters]=\"true\" (filtersDropdownToggle)=\"toggleFilterDropdown($event)\"></navi-bar>\r\n<div class=\"filters\" [ngClass]=\"{'hideFilter': hideFilter}\" id=\"filters\">\r\n        <workshop-filter (minPriceFilterChanged)=\"setMinPrice($event)\" (maxPriceFilterChanged)=\"setMaxPrice($event)\" (fromDateChanged)=\"setFromDate($event)\" (toDateChanged)=\"setToDate($event)\" (locationFilterChanged)=\"setLocationIdList($event)\" (categoryFilterChanged)=\"setCategoryList($event)\"></workshop-filter>\r\n</div>\r\n\r\n    <div class=\"list\">\r\n        <workshops-list></workshops-list>\r\n    </div>\r\n</div>"

/***/ },
/* 82 */,
/* 83 */,
/* 84 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = require("@angular/http");

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 100 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 101 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 102 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 103 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 104 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = require("ng2-pagination");

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/empty");

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 114 */,
/* 115 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ },
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ function(module, exports) {

module.exports = ".autocomplete-filter,\n.dropdown-filter,\n.price-filter,\n.date-picker,\n.get-list-btn {\n  /*top:20%;*/\n  left: 3rem;\n  position: relative;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*margin-right: 3rem;*/ }\n\n*:focus {\n  outline: 0; }\n\n.price-filter {\n  margin-top: 1.6rem;\n  margin-left: 1rem; }\n  .price-filter input {\n    outline: .2px solid #26181D;\n    width: 10rem;\n    border: 0;\n    height: 3.4rem;\n    text-align: center;\n    background-color: white;\n    color: #26181D;\n    margin-right: 1rem; }\n    .price-filter input::-webkit-input-placeholder {\n      color: #26181D; }\n    .price-filter input:-ms-input-placeholder {\n      color: #26181D; }\n    .price-filter input::placeholder {\n      color: #26181D; }\n\n.hide-dropdown {\n  display: none; }\n\n.filters-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.get-list-btn {\n  width: 10rem;\n  height: 3.7rem;\n  border: none;\n  background-color: #73656A;\n  color: white;\n  display: block;\n  margin-top: 1.5rem; }\n\n@media (max-width: 955px) {\n  .filters-container {\n    display: block;\n    text-align: center; }\n  .dropdown-filter,\n  .price-filter,\n  .date-picker,\n  .get-list-btn {\n    left: 0;\n    display: block; }\n  .price-filter {\n    margin-left: 0; }\n    .price-filter input {\n      width: 30%;\n      margin-left: 1rem; }\n  .get-list-btn {\n    display: inline-block;\n    width: 50%; } }\n"

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports = "<div class=\"filters-container\">\r\n    <div class=\"autocomplete-filter\">\r\n            <autocomplete></autocomplete>\r\n    </div>\r\n    <div class=\"dropdown-filter\">\r\n        <dropdown (selectionChanged)=\"updateCategoryList($event)\" [dataModel]=\"categories\" [buttonLabel]=\"categoryDropdownLabel\" [optionName]=\"'categories'\"></dropdown>\r\n    </div>\r\n\r\n    <div class=\"price-filter\">\r\n        <input #minPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Min. price\" (blur)=\"updateMinPrice(minPriceInput.value)\" (oninput)=\"updateMinPrice(minPriceInput.value)\" (onchange)=\"updateMinPrice(minPriceInput.value)\" (change)=\"updateMinPrice(minPriceInput.value)\"/>\r\n        <input #maxPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Max. price\" (blur)=\"updateMaxPrice(maxPriceInput.value)\" (oninput)=\"updateMaxPrice(maxPriceInput.value)\" (onchange)=\"updateMaxPrice(maxPriceInput.value)\" (change)=\"updateMaxPrice(maxPriceInput.value)\"/>\r\n    </div>\r\n\r\n     <div class=\"date-picker\">\r\n         <date-picker (selectedFromChanged)=\"getFromDate($event)\" (selectedToChanged)=\"getToDate($event)\"></date-picker> \r\n    </div> \r\n    <button class=\"get-list-btn\" (click)=\"getResult()\"><span>Filter</span>  <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button>\r\n</div>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTk2YmVlYmE1MTdlOGQyZTY5MTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcnRpY3MyXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2ludGVyZmFjZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLnJvdXRlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcG9seWZpbGxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21waWxlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmcyLXBhZ2luYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDOURBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBSXhDO0lBYUk7UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLDBDQUEwQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsa0RBQWtELENBQUM7UUFDekUsSUFBSSxDQUFDLHFCQUFxQixHQUFNLElBQUksQ0FBQyxjQUFjLG1CQUFnQixDQUFDO1FBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQU0sSUFBSSxDQUFDLHFCQUFxQixlQUFZLENBQUM7UUFDOUQsSUFBSSxDQUFDLGdCQUFnQixHQUFNLElBQUksQ0FBQyxxQkFBcUIsbUJBQWdCLENBQUM7SUFDMUUsQ0FBQztJQUVNLDREQUF3QixHQUEvQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDdEMsQ0FBQztJQUVNLG1EQUFlLEdBQXRCO1FBRUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVNLHVEQUFtQixHQUExQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVNLG1EQUFlLEdBQXRCLFVBQXVCLElBQVc7UUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFTSxnREFBWSxHQUFuQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxvREFBZ0IsR0FBdkI7UUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsU0FBcUI7UUFFckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksUUFBUSxHQUFjLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDN0MsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFTSwyREFBdUIsR0FBOUIsVUFBK0IsS0FBUztRQUVwQyxFQUFFLEVBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFDO1lBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksRUFBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDTCxDQUFDO0lBRU0sb0RBQWdCLEdBQXZCLFVBQXdCLGFBQXNCO1FBRTFDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUE3RUw7UUFBQyxnRkFBVSxFQUFFOztpQ0FBQTtJQThFYixnQ0FBQztBQUFELENBQUM7Ozs7Ozs7QUNqRkQsNEM7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDSTtBQUVWO0FBQ047QUFDRTtBQUNFO0FBRTZDO0FBa0UvRTtJQUlJLDRCQUFvQixJQUFVLEVBQVUseUJBQW9EO1FBQXhFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3hGLElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnREFBbUIsR0FBbkIsVUFBb0IsSUFBWSxFQUFFLElBQVksRUFBRSxZQUFvQjtRQUNoRSxJQUFJLEtBQUssR0FBTSxJQUFJLG9CQUFlLElBQUkseUJBQW9CLFlBQWMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxrQkFBUSxJQUFJLGVBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8saURBQW9CLEdBQTVCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDdkQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLGtCQUFRO1lBQ1YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQWlCLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQseUNBQVksR0FBWjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUNsQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFTO2dCQUNkLFlBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztZQUE1QyxDQUE0QyxDQUMvQyxDQUFDO1FBQ04sQ0FBQztRQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRU8scURBQXdCLEdBQWhDO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUMzRCxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsa0JBQVE7WUFDVixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBYyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDZDQUFnQixHQUFoQjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3JELEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQWE7Z0JBQ3JCLFlBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1lBQXBELENBQW9ELENBQ3ZELENBQUM7UUFDTixDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsK0NBQWtCLEdBQWxCLFVBQW1CLFVBQWtCO1FBQ2pDLElBQUksR0FBRyxHQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsb0NBQStCLFVBQVksQ0FBQztRQUN4RyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO2FBQ3BCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxrQkFBUTtZQUNWLE1BQU0sQ0FBbUIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQWhFTDtRQUFDLGdGQUFVLEVBQUU7OzBCQUFBO0lBaUViLHlCQUFDOztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlnRjtBQUNlO0FBQ3hEO0FBQ0c7QUFFZDtBQUNDO0FBUzlCO0lBWUksZ0NBQVksWUFBMEIsRUFBVSxrQkFBc0MsRUFBVSxNQUFjO1FBQTlELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTjlHLFNBQUksR0FBVyxDQUFDLENBQUM7UUFPYixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNYLElBQUksVUFBVSxHQUFHO1lBQ2IsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO1lBQ25CLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7WUFDMUIsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO1lBQ25CLEtBQUssRUFBRSxLQUFLO1NBQ2YsQ0FBQztRQUNGLElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWpDLE1BQU0sQ0FBSSxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQUksR0FBRyxTQUFJLElBQU0sQ0FBQztJQUN0RCxDQUFDO0lBRUQsK0NBQWMsR0FBZCxVQUFlLFVBQVU7UUFDckIsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLElBQVksRUFBRSxTQUFpQjtRQUE5RCxpQkFZQztRQVhHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdkgsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUM7YUFDOUUsRUFBRSxDQUFDLGFBQUc7WUFDSCxLQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLGFBQUcsSUFBSSxVQUFHLENBQUMsU0FBUyxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxvREFBbUIsR0FBbkIsVUFBb0IsVUFBa0IsRUFBRSxZQUFvQjtRQUN4RCxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQywrQkFBK0IsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBckVMO1FBQUMsK0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsaUNBQThDO1lBQzlDLGlDQUE4QztZQUM5QyxlQUFlLEVBQUUsc0VBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDOzs4QkFBQTtJQWlFRjs7QUFBQTs7Ozs7OztBQzlFQSwyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQU16QztJQVlFO1FBVkEsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVdoQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBTkQscUNBQVEsR0FBUjtRQUNBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFmSDtRQUFDLCtFQUFTLENBQUM7WUFDVCxpQ0FBMEM7WUFDMUMsaUNBQTBDO1NBQzNDLENBQUM7OzBCQUFBO0lBZ0JGLHlCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CMkQ7QUFDdUI7QUFDSztBQU94RjtJQU1FLHVCQUFvQix5QkFBbUQ7UUFBbkQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQUNyRSxJQUFJLENBQUMsZUFBZSxHQUFHLHlCQUF5QixDQUFDO0lBQ25ELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLFNBQVMsR0FBTSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFNBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBSSxDQUFDO1FBQ3JILElBQUksT0FBTyxHQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUN4SCxJQUFJLEtBQUssR0FBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixFQUFFLG1DQUE4QixTQUFTLHVCQUFrQixPQUFTLENBQUM7UUFDakksSUFBSSxDQUFDLHNCQUFzQixDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWRIO1FBQUMsK0VBQVMsQ0FBQyx3R0FBc0IsQ0FBQzs7aUVBQUE7SUFQbEM7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUNBQW9DO1lBQ3BDLGlDQUFvQztTQUNyQyxDQUFDOztxQkFBQTtJQW1CRixvQkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QndDO0FBQ087QUFDTDtBQU0zQztJQUlJLCtCQUNGLFlBQTBCLEVBQ1osS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDaEMsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDSSxJQUFJLEdBQVcsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUN4QyxHQUFHLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRU4sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxFQUFDLENBQUMsQ0FBQztRQUVuSCw4REFBOEQ7UUFDOUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUF2QkY7UUFBQywrRUFBUyxDQUFDO1lBQ1AsaUNBQTZDO1lBQzdDLGlDQUE0QztTQUMvQyxDQUFDOzs2QkFBQTtJQXFCRjs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjZEO0FBQ2tDO0FBQy9DO0FBT2hEO0lBYUksa0NBQ1ksa0JBQXNDLEVBQ3RDLFVBQXNCLEVBQ3RCLEtBQXFCO1FBRnJCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLElBQUksVUFBa0IsQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBTTtZQUNsRCxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsdUNBQXVDO1lBRWxFLDJEQUEyRDtRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFrQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRyxJQUFJLENBQUMsVUFBVSxHQUFrQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVDLDhDQUFXLEdBQVg7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFQyxvREFBaUIsR0FBakIsVUFBa0IsVUFBa0I7UUFBcEMsaUJBS0M7UUFKRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDO2FBQ2pELElBQUksQ0FBQyxjQUFJO1lBQ04sS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaURBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxDQUFDO1FBRU4sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlDLENBQUM7UUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQVEsR0FBUixVQUFTLEdBQVEsRUFBRSxPQUFlO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RSxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0Qsb0ZBQW9GO1FBQ3BGLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQWpGTDtRQUFDLCtFQUFTLENBQUM7WUFDUCxpQ0FBZ0Q7WUFDaEQsaUNBQWdEO1NBQ25ELENBQUM7O2dDQUFBO0lBK0VGOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZvRDtBQUMrQjtBQUNLO0FBTXhGO0lBZ0JDLDRCQUFvQix5QkFBbUQ7UUFBbkQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEwQjtRQU50RCxxQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFRN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyx5QkFBeUIsQ0FBQztRQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsaURBQW9CLEdBQXBCLFVBQXFCLEtBQVU7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDQyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQU0sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUN0SCxJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUN6SCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVGLHNDQUFTLEdBQVQ7UUFFQyxJQUFJLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLEVBQUUsbUNBQThCLElBQUksQ0FBQyxTQUFTLHVCQUFrQixJQUFJLENBQUMsT0FBUyxDQUFDO1FBQzVJLEVBQUUsRUFBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUM1RCxDQUFDO1lBQ0EsSUFBSSxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsS0FBSywwQkFBcUIsSUFBSSxDQUFDLGNBQWdCLENBQUM7UUFDdEUsQ0FBQztRQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUN4RCxDQUFDO1lBQ0EsSUFBSSxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsS0FBSyxzQkFBaUIsSUFBSSxDQUFDLFlBQWMsQ0FBQztRQUNoRSxDQUFDO1FBRUQsRUFBRSxFQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQ3JCLENBQUM7WUFDQSxJQUFJLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxLQUFLLGtCQUFhLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDbkUsQ0FBQztRQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUNyQixDQUFDO1lBQ0EsSUFBSSxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsS0FBSyxrQkFBYSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBSSxDQUFDO1FBQ25FLENBQUM7UUFFRCxFQUFFLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEYsQ0FBQztJQUNGLENBQUM7SUFFRSx3Q0FBVyxHQUFYLFVBQVksUUFBYTtRQUVyQixJQUFJLENBQUMsU0FBUyxHQUFNLFFBQVEsQ0FBQyxJQUFJLFNBQUksUUFBUSxDQUFDLEtBQUssU0FBSSxRQUFRLENBQUMsR0FBSyxDQUFDO1FBQzVFLEVBQUUsRUFBQyxJQUFJLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUM3QixDQUFDO1lBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFNLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsU0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDdkgsQ0FBQztRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUosc0NBQVMsR0FBVCxVQUFVLE1BQVc7UUFFZCxJQUFJLENBQUMsT0FBTyxHQUFNLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEtBQUssU0FBSSxNQUFNLENBQUMsR0FBSyxDQUFDO1FBQ3BFLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUMzQixDQUFDO1lBQ0EsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxTQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUksQ0FBQztRQUMxSCxDQUFDO1FBRUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFSiw4Q0FBaUIsR0FBakIsVUFBa0IsY0FBbUI7UUFFcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0Q0FBZSxHQUFmLFVBQWdCLFlBQWlCO1FBRWhDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCx3Q0FBVyxHQUFYLFVBQVksUUFBZ0I7UUFFM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxRQUFnQjtRQUUzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBbkdEO1FBQUMsK0VBQVMsQ0FBQyx3R0FBc0IsQ0FBQzs7c0VBQUE7SUFsQm5DO1FBQUMsK0VBQVMsQ0FBQztZQUNQLGlDQUF5QztZQUN6QyxpQ0FBeUM7U0FDNUMsQ0FBQzs7MEJBQUE7SUFtSEY7O0FBQUE7Ozs7Ozs7O0FDMUhBLGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNHdUI7QUFDUztBQUNKO0FBQ007QUFDUTtBQUNZO0FBQ1I7QUFDRztBQUNPO0FBQ2hCO0FBRXhDLE1BQU07QUFFTixJQUFNLEdBQUcsR0FBSSxxQ0FBTyxFQUFFLENBQUM7QUFDdkIsSUFBTSxJQUFJLEdBQUcsMENBQVMsQ0FBQyw2Q0FBWSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RELElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztBQUV0Qzs7R0FFRztBQUNILEVBQUUsQ0FBQyxDQUFDLDhFQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMzQixvRkFBYyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUVEOztHQUVHO0FBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsNEZBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLDBDQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDNUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFL0I7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLHlDQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRXZCOztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsK0NBQWMsQ0FBQywwQ0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEU7O0dBRUc7QUFDSCx3QkFBd0I7QUFFeEI7Ozs7R0FJRztBQUNILGVBQWUsR0FBUSxFQUFFLEdBQVE7SUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDbEIsUUFBRztRQUNILFFBQUc7UUFDSCxRQUFRLEVBQUUsdUVBQVM7UUFDbkIsT0FBTyxFQUFFLEtBQUs7UUFDZCxPQUFPLEVBQUUsR0FBRztRQUNaLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVztRQUMzQixTQUFTLEVBQUUsR0FBRyxDQUFDLFFBQVE7S0FDeEIsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEIsOERBQU0sQ0FBQyxPQUFPLENBQUMsZUFBSztJQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQUksS0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBSSxLQUFLLE9BQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxHQUFRLEVBQUUsR0FBUTtJQUN2QyxHQUFHLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2xELElBQU0sSUFBSSxHQUFHLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLENBQUM7SUFDbEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUFxQixJQUFNLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGa0Y7QUFNckY7SUFHSSx3QkFBb0IsRUFBYyxFQUFVLFFBQWtCO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQUcsQ0FBQztJQUVsRSxnRUFBZ0U7SUFDaEUsd0NBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQVZEO1FBQUMsMkVBQUssQ0FBQyxXQUFXLENBQUM7O2lEQUFBO0lBTHZCO1FBQUMsK0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1NBQzFCLENBQUM7O3NCQUFBO0lBY0YscUJBQUM7O0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm1DO0FBQ007QUFDQTtBQUNFO0FBQ1A7QUFDTztBQUNFO0FBQ0Q7QUFDVDtBQUNHO0FBQ0Q7QUFDSTtBQUNTO0FBQ0g7QUFDVDtBQUNjO0FBQ1Y7QUFDQztBQUNDO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkIySTtBQUMzRztBQUNnTjtBQUNoTjtBQUNKO0FBSXBFLElBQU0sVUFBVSxHQUFXLG1CQUFPLENBQUMsRUFBZ0MsQ0FBQyxDQUFDO0FBQ3JFLElBQU0sT0FBTyxHQUFXLG1CQUFPLENBQUMsRUFBaUMsQ0FBQyxDQUFDO0FBQ25FLFlBQVk7QUFFTCxJQUFNLG1CQUFtQixHQUFRO0lBQ3BDLE9BQU8sRUFBRSxpRUFBaUI7SUFDMUIsV0FBVyxFQUFFLGdGQUFVLENBQUMsY0FBTSxtQkFBWSxFQUFaLENBQVksQ0FBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRixJQUFLLFNBQWdIO0FBQXJILFdBQUssU0FBUztJQUFFLHlDQUFRO0lBQUUsNkRBQWtCO0lBQUUsMkRBQWlCO0lBQUUsK0RBQW1CO0lBQUUscURBQWM7SUFBRSxxREFBYztBQUFBLENBQUMsRUFBaEgsU0FBUyxLQUFULFNBQVMsUUFBdUc7QUFDckgsSUFBSyxJQUE2QjtBQUFsQyxXQUFLLElBQUk7SUFBRSxnQ0FBVTtJQUFFLGdDQUFVO0FBQUEsQ0FBQyxFQUE3QixJQUFJLEtBQUosSUFBSSxRQUF5QjtBQUNsQyxJQUFLLGNBQW9DO0FBQXpDLFdBQUssY0FBYztJQUFFLHFEQUFTO0lBQUUsbURBQVE7QUFBQSxDQUFDLEVBQXBDLGNBQWMsS0FBZCxjQUFjLFFBQXNCO0FBQ3pDLElBQUssT0FBMEM7QUFBL0MsV0FBSyxPQUFPO0lBQUUsd0NBQVU7SUFBRSxvQ0FBUTtJQUFFLHdDQUFVO0FBQUEsQ0FBQyxFQUExQyxPQUFPLEtBQVAsT0FBTyxRQUFtQztBQUMvQyxJQUFLLE9BQXNDO0FBQTNDLFdBQUssT0FBTztJQUFFLHFDQUFRO0lBQUUscUNBQVE7SUFBRSxxQ0FBUTtBQUFBLENBQUMsRUFBdEMsT0FBTyxLQUFQLE9BQU8sUUFBK0I7QUFFM0MsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQztBQUNsQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDaEIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBV3BCO0lBd0dJLHNCQUFtQixJQUFnQixFQUFVLFFBQWtCLEVBQVUsR0FBc0IsRUFBVSxhQUE0QixFQUFVLFdBQXdCO1FBeEczSyxpQkF3eEJDO1FBaHJCc0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFoRzdKLGdCQUFXLEdBQStCLElBQUksMkRBQVksRUFBZ0IsQ0FBQztRQUMzRSxzQkFBaUIsR0FBdUMsSUFBSSwyREFBWSxFQUF3QixDQUFDO1FBQ2pHLHdCQUFtQixHQUF5QyxJQUFJLDJEQUFZLEVBQTBCLENBQUM7UUFDdkcsbUJBQWMsR0FBeUIsSUFBSSwyREFBWSxFQUFVLENBQUM7UUFDbEUsbUJBQWMsR0FBb0MsSUFBSSwyREFBWSxFQUFxQixDQUFDO1FBSWxHLGVBQVUsR0FBcUIsY0FBUSxDQUFDLENBQUM7UUFDekMsZ0JBQVcsR0FBZSxjQUFRLENBQUMsQ0FBQztRQUVwQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixpQkFBWSxHQUFhLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUM5RCxrQkFBYSxHQUFhLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUMvRCxpQkFBWSxHQUFZLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUNwRCxhQUFRLEdBQWtCLEVBQUUsQ0FBQztRQUM3QixVQUFLLEdBQW1CLEVBQUUsQ0FBQztRQUMzQixXQUFNLEdBQW1DLEVBQUUsQ0FBQztRQUM1QyxVQUFLLEdBQWtDLEVBQUUsQ0FBQztRQUMxQyxvQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM3QixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUNuQyxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsZ0JBQVcsR0FBVyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ25DLGdCQUFXLEdBQVcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNuQyxnQkFBVyxHQUFXLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFFbkMsa0JBQWtCO1FBQ2xCLFNBQUksR0FBZTtZQUNmLFNBQVMsRUFBaUIsRUFBRTtZQUM1QixXQUFXLEVBQW1CLEVBQUU7WUFDaEMsVUFBVSxFQUFXLEVBQUU7WUFDdkIsWUFBWSxFQUFZLElBQUk7WUFDNUIsV0FBVyxFQUFXLEVBQUU7WUFDeEIsY0FBYyxFQUFXLEVBQUU7WUFDM0IsWUFBWSxFQUFZLEtBQUs7WUFDN0IsWUFBWSxFQUFZLElBQUk7WUFDNUIsY0FBYyxFQUFtQixFQUFFO1lBQ25DLGNBQWMsRUFBWSxJQUFJO1lBQzlCLGdCQUFnQixFQUFZLElBQUk7WUFDaEMsZUFBZSxFQUFZLElBQUk7WUFDL0IsWUFBWSxFQUFZLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUM7WUFDbkQsWUFBWSxFQUFZLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUM7WUFDbkQsV0FBVyxFQUFtQixFQUFFO1lBQ2hDLFVBQVUsRUFBbUIsRUFBRTtZQUMvQixTQUFTLEVBQTBCLEVBQUU7WUFDckMsWUFBWSxFQUFrQixFQUFFO1lBQ2hDLGlCQUFpQixFQUF3QixFQUFFO1lBQzNDLGVBQWUsRUFBWSxLQUFLO1lBQ2hDLGVBQWUsRUFBa0IsRUFBRTtZQUNuQyxlQUFlLEVBQVksS0FBSztZQUNoQyxNQUFNLEVBQVcsTUFBTTtZQUN2QixLQUFLLEVBQVcsTUFBTTtZQUN0QixvQkFBb0IsRUFBVyxNQUFNO1lBQ3JDLGNBQWMsRUFBVyxPQUFPO1lBQ2hDLGFBQWEsRUFBVyxPQUFPO1lBQy9CLGlCQUFpQixFQUFZLEtBQUs7WUFDbEMsTUFBTSxFQUFZLEtBQUs7WUFDdkIsZ0JBQWdCLEVBQVksSUFBSTtZQUNoQyxtQkFBbUIsRUFBWSxLQUFLO1lBQ3BDLG1CQUFtQixFQUFZLEtBQUs7WUFDcEMsa0JBQWtCLEVBQVksS0FBSztZQUNuQyxzQkFBc0IsRUFBWSxLQUFLO1lBQ3ZDLG1CQUFtQixFQUFZLElBQUk7WUFDbkMsaUJBQWlCLEVBQVksSUFBSTtZQUNqQyxhQUFhLEVBQVksSUFBSTtZQUM3QixZQUFZLEVBQVksSUFBSTtZQUM1QixvQkFBb0IsRUFBWSxJQUFJO1lBQ3BDLE9BQU8sRUFBVyxJQUFJLENBQUMsR0FBRztZQUMxQixPQUFPLEVBQVcsSUFBSSxDQUFDLEdBQUc7WUFDMUIsaUJBQWlCLEVBQVksS0FBSztZQUNsQyxpQkFBaUIsRUFBWSxJQUFJO1lBQ2pDLGNBQWMsRUFBWSxJQUFJO1lBQzlCLHdCQUF3QixFQUFZLEtBQUs7WUFDekMsbUJBQW1CLEVBQVcsa0JBQWtCO1lBQ2hELGtCQUFrQixFQUFXLFlBQVk7WUFDekMscUJBQXFCLEVBQVcsZUFBZTtZQUMvQyxxQkFBcUIsRUFBVyxlQUFlO1lBQy9DLHFCQUFxQixFQUFXLGVBQWU7WUFDL0Msa0JBQWtCLEVBQVcsZ0JBQWdCO1lBQzdDLGtCQUFrQixFQUFXLFlBQVk7WUFDekMsaUJBQWlCLEVBQVcsZUFBZTtZQUMzQyxpQkFBaUIsRUFBVyxXQUFXO1NBQzFDLENBQUM7UUFHRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBQyxLQUFVO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25JLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDcEQsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDaEMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHVDQUFnQixHQUFoQjtRQUFBLGlCQUtDO1FBSkcsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQ1gsS0FBSSxDQUFDLElBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUFBLGlCQWVDO1FBZEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7Z0JBQ25CLEtBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2pDLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQXNCLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25FLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixLQUFVO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksS0FBSyxHQUFZLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUM5QixJQUFJLEdBQUcsR0FBNEIsRUFBRSxDQUFDO2dCQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxRQUFRLEdBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7MkJBQ25MLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDaEksR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7Z0JBQzlMLENBQUM7Z0JB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LGNBQWMscUJBQXFCLEVBQUUsbUJBQW1CLHFCQUFxQixFQUFFLDJCQUEyQixtQkFBbUIsMEJBQTBCLEVBQUUsbUJBQW1CLDRCQUE0QixpQkFBaUIsRUFBRSxFQUFFLEc7Ozs7OztBQ0E5OUMsKzFDIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhOTZiZWViYTUxN2U4ZDJlNjkxNSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJTG9jYXRpb24sIElQaG90b2dyYXBoZXJ9IGZyb20gJy4uL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5XHJcbntcclxuICAgIHByaXZhdGUgY2RuQmFzZVVybDtcclxuICAgIHByaXZhdGUgc2VydmljZUJhc2VVcmw7XHJcbiAgICBwcml2YXRlIHBpeGVsYXRlZFBsYW5ldEFQSVVybDtcclxuICAgIHByaXZhdGUgbG9jYXRpb25zVXJsO1xyXG4gICAgcHJpdmF0ZSB3b3Jrc2hvcFR5cGVzVXJsO1xyXG4gICAgcHJpdmF0ZSBwaG90b2dyYXBoZXJzVXJsO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbnM6SUxvY2F0aW9uW107XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wVHlwZXM6c3RyaW5nW107XHJcbiAgICBwcml2YXRlIHBob3RvZ3JhcGhlcnM6SVBob3RvZ3JhcGhlcltdO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbk1hcDphbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2RuQmFzZVVybCA9IGBodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0YDtcclxuICAgICAgICB0aGlzLnNlcnZpY2VCYXNlVXJsID0gYGh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0c2VydmljZS5henVyZXdlYnNpdGVzLm5ldGA7XHJcbiAgICAgICAgdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmwgPSBgJHt0aGlzLnNlcnZpY2VCYXNlVXJsfS9hcGkvUGl4ZWxhdGVkYDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Mb2NhdGlvbnNgO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BUeXBlc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Xb3Jrc2hvcFR5cGVzYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9uc1VybCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXb3Jrc2hvcFR5cGVzVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3Jrc2hvcFR5cGVzVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlSW1hZ2VVcmwocGF0aDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2RuQmFzZVVybCArIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0V29ya3Nob3BUeXBlcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ya3Nob3BUeXBlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TG9jYXRpb25zKGxvY2F0aW9uczpJTG9jYXRpb25bXSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2NhdGlvbiA9IDxJTG9jYXRpb24+bG9jYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uTWFwW2xvY2F0aW9uLmlkXSA9IGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbnMgPSBsb2NhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9uQnlMb2NhdGlvbklkKHZhbHVlOmFueSkgOiBJTG9jYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZih0eXBlb2YgdGhpcy5sb2NhdGlvbk1hcCA9PSBcInVuZGVmaW5lZFwiIHx8IHRoaXMubG9jYXRpb25NYXAgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbk1hcFt2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXM6c3RyaW5nW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFR5cGVzID0gd29ya3Nob3BUeXBlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFydGljczJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFydGljczJcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYXRpb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BPdmVydmlldyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXIsXHJcbiAgICB3b3Jrc2hvcFR5cGU6IHN0cmluZyxcclxuICAgIG51bWJlck9mV29ya3Nob3BzOiBudW1iZXIsXHJcbiAgICBzdGFydERhdGVGaXJzdD86IERhdGUsXHJcbiAgICBlbmREYXRlRmlyc3Q/OiBEYXRlLFxyXG4gICAgbWluQ29zdD86IG51bWJlcixcclxuICAgIG1heENvc3Q/OiBudW1iZXIsXHJcbiAgICBjb3N0Q3VycmVuY3k/OiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBpbWFnZUxpbms6IHN0cmluZyxcclxuICAgIGxvY2F0aW9uSWQ6IG51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BEdG8ge1xyXG4gICAgd29ya3Nob3BzOiBJV29ya3Nob3BPdmVydmlld1tdLFxyXG4gICAgdG90YWw6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQaG90b2dyYXBoZXIge1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIHByb2ZpbGVQaG90b0xpbms6IHN0cmluZztcclxuICAgIHdlYnNpdGVMaW5rOiBzdHJpbmc7XHJcbiAgICBsb2NhdGlvbklkPzogbnVtYmVyO1xyXG4gICAgbW9yZUluZm86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlXb3Jrc2hvcERldGFpbHMge1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxuICAgIGNvc3Q/OiBudW1iZXI7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wRGV0YWlscyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaXRpbmVyYXJ5OiBJSXRpbmVyYXJ5W107XHJcbiAgICBhZGR0aW9uYWxJbmZvcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2VMaW5rOiBzdHJpbmc7XHJcbiAgICBsaW5rPzogc3RyaW5nO1xyXG4gICAgbG9jYXRpb25JZDogbnVtYmVyO1xyXG4gICAgd29ya3Nob3BUeXBlOiBzdHJpbmc7XHJcbiAgICBtdWx0aVdvcmtzaG9wRGV0YWlsczogSU11bHRpV29ya3Nob3BEZXRhaWxzW107XHJcbiAgICBtaW5Db3N0OiBudW1iZXI7XHJcbiAgICBtYXhDb3N0OiBudW1iZXI7XHJcbiAgICBjb3N0Q3VycmVuY3k6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSXRpbmVyYXJ5IHtcclxuICAgIGRheTogbnVtYmVyO1xyXG4gICAgbG9jYXRpb246IHN0cmluZztcclxuICAgIGNvbnRlbnQ6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BSZXBvc2l0b3J5IHtcclxuXHJcbiAgICBwdWJsaWMgZ2xvYmFsQ29uc3RhbnRzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5OiBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb25zKCk7XHJcbiAgICAgICAgdGhpcy5nZXRXb3Jrc2hvcFR5cGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BPdmVydmlldyhwYXRoOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgaXRlbXNQZXJQYWdlOiBudW1iZXIpOiBPYnNlcnZhYmxlPElXb3Jrc2hvcER0bz4ge1xyXG4gICAgICAgIGxldCBxdWVyeSA9IGAke3BhdGh9JnBhZ2VOdW1iZXI9JHtwYWdlfSZudW1iZXJPZlJlc3VsdHM9JHtpdGVtc1BlclBhZ2V9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChxdWVyeSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYXRpb25zSW50ZXJuYWwoKTogUHJvbWlzZTxJTG9jYXRpb25bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uc1VybCgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBJTG9jYXRpb25bXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYXRpb25zKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcclxuICAgICAgICBsZXQgbG9jID0gdGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0TG9jYXRpb25zKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBsb2MgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBsb2MgPSB0aGlzLmdldExvY2F0aW9uc0ludGVybmFsKCk7XHJcbiAgICAgICAgICAgIGxvYy50aGVuKGxvY2F0aW9ucyA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxDb25zdGFudHMuc2V0TG9jYXRpb25zKGxvY2F0aW9ucylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsb2M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRXb3Jrc2hvcFR5cGVzSW50ZXJuYWwoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFdvcmtzaG9wVHlwZXNVcmwoKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wVHlwZXMoKTogUHJvbWlzZTxJTG9jYXRpb25bXT4ge1xyXG4gICAgICAgIGxldCB3VHlwZXMgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRXb3Jrc2hvcFR5cGVzKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3VHlwZXMgPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB3VHlwZXMgPSB0aGlzLmdldFdvcmtzaG9wVHlwZXNJbnRlcm5hbCgpO1xyXG4gICAgICAgICAgICB3VHlwZXMudGhlbih3b3Jrc2hvcFR5cGVzID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbENvbnN0YW50cy5zZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd1R5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkOiBzdHJpbmcpOiBQcm9taXNlPElXb3Jrc2hvcERldGFpbHM+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wRGV0YWlscz93b3Jrc2hvcElkPSR7d29ya3Nob3BJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8SVdvcmtzaG9wRGV0YWlscz5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnksIElXb3Jrc2hvcE92ZXJ2aWV3IH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd29ya3Nob3BzLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wc0xpc3RDb21wb25lbnQge1xyXG5cclxuICAgIHF1ZXJ5UGF0aDogc3RyaW5nO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgYXN5bmNEYXRhOiBPYnNlcnZhYmxlPElXb3Jrc2hvcE92ZXJ2aWV3W10+O1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgd29ya3Nob3BzOiBJV29ya3Nob3BPdmVydmlld1tdO1xyXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSB3b3Jrc2hvcFJlcG9zaXRvcnk6IFdvcmtzaG9wUmVwb3NpdG9yeSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYW5ndWxhcnRpY3MyO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdmFyIG1vbnRoTmFtZXMgPSBbXHJcbiAgICAgICAgICAgIFwiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsXHJcbiAgICAgICAgICAgIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsXHJcbiAgICAgICAgICAgIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsXHJcbiAgICAgICAgICAgIFwiTm92XCIsIFwiRGVjXCJcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBkYXRlVmFsID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgdmFyIGRheSA9IGRhdGVWYWwuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHZhciBtb250aEluZGV4ID0gZGF0ZVZhbC5nZXRNb250aCgpO1xyXG4gICAgICAgIHZhciB5ZWFyID0gZGF0ZVZhbC5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7bW9udGhOYW1lc1ttb250aEluZGV4XX0gJHtkYXl9ICR7eWVhcn1gO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdExvY2F0aW9uKGxvY2F0aW9uSWQpIHtcclxuICAgICAgICBsZXQgbG9jYXRpb25PYmplY3QgPSB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMuZ2V0TG9jYXRpb25CeUxvY2F0aW9uSWQobG9jYXRpb25JZCk7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2NhdGlvbk9iamVjdC5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVEJEXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wc0RhdGEocGF0aDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIHdzUGVyUGFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnR2V0V29ya3Nob3BzRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BzTGlzdENvbXBvbmVudCcgfSB9KTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucXVlcnlQYXRoID0gcGF0aDtcclxuICAgICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHdzUGVyUGFnZTtcclxuICAgICAgICB0aGlzLmFzeW5jRGF0YSA9IHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldFdvcmtzaG9wT3ZlcnZpZXcocGF0aCwgcGFnZSwgd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAuZG8ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXMudG90YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy53b3Jrc2hvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRXb3Jrc2hvcERldGFpbHMod29ya3Nob3BJZDogc3RyaW5nLCB3b3Jrc2hvcE5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHdvcmtzaG9wTmFtZSA9IHdvcmtzaG9wTmFtZS5yZXBsYWNlKC8gL2csXCItXCIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3Bob3RvZ3JhcGh5LXdvcmtzaG9wLWRldGFpbHMnLCB3b3Jrc2hvcE5hbWUsIHdvcmtzaG9wSWRdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvZm9ybXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QtdXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzQ29tcG9uZW50IHtcclxuXHJcbiAgc3VibWl0dGVkID0gZmFsc2U7XHJcbiAgZm5hbWU6IHN0cmluZztcclxuICBzdWJqZWN0VGV4dDogc3RyaW5nO1xyXG4gIG1lc3NhZ2VUZXh0OiBzdHJpbmc7XHJcbiAgZW1haWxJZDogc3RyaW5nO1xyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZuYW1lKTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmZuYW1lID0gXCJcIjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbkBWaWV3Q2hpbGQoV29ya3Nob3BzTGlzdENvbXBvbmVudCkgd29ya3Nob3BzTGlzdENoaWxkQ29tcDpXb3Jrc2hvcHNMaXN0Q29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50cyA6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdGxldCBlbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wcz9zdGFydERhdGVGaWx0ZXI9JHtzdGFydERhdGV9JmVuZERhdGVGaWx0ZXI9JHtlbmREYXRlfWA7XHJcblx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YShxdWVyeSwgMSwgNCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5jc3MnXSAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VSZWRpcmVjdENvbXBvbmVudCB7IFxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcblx0cHJpdmF0ZSBhbmd1bGFydGljczI6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG5cdFx0YW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuXHRcdFx0dGhpcy5hbmd1bGFydGljczIgPSBhbmd1bGFydGljczI7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHR0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdXJsID0gcGFyYW1zWydleHRlcm5hbFVybCddO1xyXG4gICAgfSk7XHJcblx0XHJcblx0dGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnTmF2aWdhdGVUb0V4dGVybmFsVXJsJywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ05hdmlnYXRpb25FdmVudCcgfX0pO1xyXG5cdFxyXG5cdC8vIG5hdmlnYXRlIHRvIHRoZSBVUkwgKEFzc3VtZXMgdGhlIHVybCBpcyBodHRwOi8vIG9yIGh0dHBzOi8vXHJcblx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5LCBJV29ya3Nob3BEZXRhaWxzIH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQge1xyXG4gICAgd29ya3Nob3BEZXRhaWxzOiBJV29ya3Nob3BEZXRhaWxzO1xyXG4gICAgdGFiczogYW55O1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuXHJcbiAgICBwcml2YXRlIHByZXZpb3VzQWN0aXZlVGFiOiB7XHJcbiAgICAgICAgY29udGVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbGluazogSFRNTEVsZW1lbnRcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB0YWJjb250ZW50OiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgdGFiTGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcERldGFpbHMgPSA8YW55Pnt9O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCB3b3Jrc2hvcElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICB3b3Jrc2hvcElkID0gcGFyYW1zWydpZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuXHJcbiAgICAgICAvLyBJbiBhIHJlYWwgYXBwOiBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCB0aGUgZGV0YWlscyBoZXJlLlxyXG4gICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRXb3Jrc2hvcERldGFpbCh3b3Jrc2hvcElkKTtcclxuICAgICAgICB0aGlzLnRhYkxpbmtzID0gPEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+PnRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGlua3NcIik7XHJcbiAgICAgICAgdGhpcy50YWJjb250ZW50ID0gPEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+PnRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiY29udGVudFwiKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wRGV0YWlsKHdvcmtzaG9wSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud29ya3Nob3BEZXRhaWxzID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZVRhYnMoKSB7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudGFiY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYmNvbnRlbnRbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50YWJMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnRhYkxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudGFiY29udGVudFswXSxcclxuICAgICAgICAgICAgbGluazogdGhpcy50YWJMaW5rc1swXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW5UYWJzKG51bGwsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5UYWJzKGV2dDogYW55LCB0YWJOYW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoZXZ0ICE9PSBudWxsICYmIHRoaXMucHJldmlvdXNBY3RpdmVUYWIuY29udGVudCA9PT0gdGhpcy50YWJjb250ZW50W3RhYk5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2hvdyB0aGUgY3VycmVudCB0YWIsIGFuZCBhZGQgYW4gXCJhY3RpdmVcIiBjbGFzcyB0byB0aGUgYnV0dG9uIHRoYXQgb3BlbmVkIHRoZSB0YWJcclxuICAgICAgICB0aGlzLnRhYmNvbnRlbnRbdGFiTmFtZV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB0aGlzLnRhYkxpbmtzW3RhYk5hbWVdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgaWYgKGV2dCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiLmNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiLmxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudGFiY29udGVudFt0YWJOYW1lXSxcclxuICAgICAgICAgICAgbGluazogdGhpcy50YWJMaW5rc1t0YWJOYW1lXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnXHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzQ29tcG9uZW50IHtcclxuXHRwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBzdGFydERhdGU6IHN0cmluZztcclxuXHRwcml2YXRlIGVuZERhdGU6IHN0cmluZztcclxuXHRwcml2YXRlIGxvY2F0aW9uSWRMaXN0OnN0cmluZztcclxuXHRwcml2YXRlIGNhdGVnb3J5TGlzdDpzdHJpbmc7XHJcblx0cHJpdmF0ZSBtaW5QcmljZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBtYXhQcmljZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XHJcblxyXG5cdHByaXZhdGUgcmVhZG9ubHkgd29ya3Nob3BzUGVyUGFnZTogbnVtYmVyID0gODtcdFxyXG5cdFxyXG5cdHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzOkdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcblx0XHJcblx0QFZpZXdDaGlsZChXb3Jrc2hvcHNMaXN0Q29tcG9uZW50KSB3b3Jrc2hvcHNMaXN0Q2hpbGRDb21wOldvcmtzaG9wc0xpc3RDb21wb25lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KVxyXG5cdHtcclxuXHRcdHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHRcdHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmlsdGVyRHJvcGRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IGV2ZW50O1xyXG5cdH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHR0aGlzLnN0YXJ0RGF0ZSA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcblx0XHR0aGlzLmVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcblx0XHR0aGlzLnVwZGF0ZVVybCgpO1xyXG5cdFx0fVxyXG5cdFxyXG5cdHVwZGF0ZVVybCgpXHJcblx0e1xyXG5cdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFBpeGVsYXRlZFBsYW5ldEFQSVVybCgpfS9Xb3Jrc2hvcHM/c3RhcnREYXRlRmlsdGVyPSR7dGhpcy5zdGFydERhdGV9JmVuZERhdGVGaWx0ZXI9JHt0aGlzLmVuZERhdGV9YDtcclxuXHRcdGlmKHRoaXMubG9jYXRpb25JZExpc3QgIT0gbnVsbCAmJiB0aGlzLmxvY2F0aW9uSWRMaXN0ICE9IFwiXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLnF1ZXJ5fSZsb2NhdGlvbklkRmlsdGVyPSR7dGhpcy5sb2NhdGlvbklkTGlzdH1gO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZih0aGlzLmNhdGVnb3J5TGlzdCAhPSBudWxsICYmIHRoaXMuY2F0ZWdvcnlMaXN0ICE9IFwiXCIpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLnF1ZXJ5fSZ3b3Jrc2hvcFR5cGU9JHt0aGlzLmNhdGVnb3J5TGlzdH1gO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZih0aGlzLm1pblByaWNlID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMucXVlcnl9Jm1pblByaWNlPSR7dGhpcy5taW5QcmljZS50b1N0cmluZygpfWA7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKHRoaXMubWF4UHJpY2UgPiAwKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0mbWF4UHJpY2U9JHt0aGlzLm1heFByaWNlLnRvU3RyaW5nKCl9YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5xdWVyeSkge1xyXG5cdFx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YSh0aGlzLnF1ZXJ5LCAxLCB0aGlzLndvcmtzaG9wc1BlclBhZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbiAgICBzZXRGcm9tRGF0ZShmcm9tRGF0ZTogYW55KVxyXG5cdHtcclxuICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IGAke2Zyb21EYXRlLnllYXJ9LyR7ZnJvbURhdGUubW9udGh9LyR7ZnJvbURhdGUuZGF5fWA7XHJcblx0XHRpZih0aGlzLnN0YXJ0RGF0ZSA9PSBcIjAvMC8wXCIpXHJcblx0XHR7XHJcblx0XHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdHRoaXMuc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy51cGRhdGVVcmwoKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhcnREYXRlKTtcclxuICAgIH1cclxuXHRcclxuXHRzZXRUb0RhdGUodG9EYXRlOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIHRoaXMuZW5kRGF0ZSA9IGAke3RvRGF0ZS55ZWFyfS8ke3RvRGF0ZS5tb250aH0vJHt0b0RhdGUuZGF5fWA7XHJcblx0XHRpZih0aGlzLmVuZERhdGUgPT0gXCIwLzAvMFwiKVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHR0aGlzLmVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51cGRhdGVVcmwoKTtcclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZW5kRGF0ZSk7XHJcbiAgICB9XHJcblx0XHJcblx0c2V0TG9jYXRpb25JZExpc3QobG9jYXRpb25JZExpc3Q6IGFueSlcclxuXHR7XHJcblx0XHR0aGlzLmxvY2F0aW9uSWRMaXN0ID0gbG9jYXRpb25JZExpc3Q7XHJcblx0XHR0aGlzLnVwZGF0ZVVybCgpO1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5sb2NhdGlvbklkTGlzdCk7XHJcblx0fVxyXG5cdFxyXG5cdHNldENhdGVnb3J5TGlzdChjYXRlZ29yeUxpc3Q6IGFueSlcclxuXHR7XHJcblx0XHR0aGlzLmNhdGVnb3J5TGlzdCA9IGNhdGVnb3J5TGlzdDtcclxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XHJcblx0XHRjb25zb2xlLmxvZyhjYXRlZ29yeUxpc3QpO1xyXG5cdH1cclxuXHRcclxuXHRzZXRNaW5QcmljZShtaW5QcmljZTogbnVtYmVyKVxyXG5cdHtcclxuXHRcdHRoaXMubWluUHJpY2UgPSBtaW5QcmljZTtcclxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XHJcblx0XHRjb25zb2xlLmxvZyhtaW5QcmljZSk7XHJcblx0fVxyXG5cdFxyXG5cdHNldE1heFByaWNlKG1heFByaWNlOiBudW1iZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5tYXhQcmljZSA9IG1heFByaWNlO1xyXG5cdFx0dGhpcy51cGRhdGVVcmwoKTtcclxuXHRcdGNvbnNvbGUubG9nKG1heFByaWNlKTtcclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiB0aGUgcG9seWZpbGxzIG11c3QgYmUgdGhlIGZpcnN0IHRoaW5nIGltcG9ydGVkXHJcbiAqL1xyXG5pbXBvcnQgJy4vcG9seWZpbGxzLnRzJztcclxuaW1wb3J0ICcuL19fMi4xLjEud29ya2Fyb3VuZC50cyc7IC8vIHRlbXBvcmFyeSB1bnRpbCAyLjEuMSB0aGluZ3MgYXJlIHBhdGNoZWQgaW4gQ29yZVxyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xyXG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm5vZGUubW9kdWxlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vc2VydmVyLnJvdXRlcyc7XHJcblxyXG4vLyBBcHBcclxuXHJcbmNvbnN0IGFwcCAgPSBleHByZXNzKCk7XHJcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA0MjAwO1xyXG5cclxuLyoqXHJcbiAqIGVuYWJsZSBwcm9kIG1vZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzXHJcbiAqL1xyXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xyXG4gIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHByZXNzIFZpZXdcclxuICovXHJcbmFwcC5lbmdpbmUoJy5odG1sJywgY3JlYXRlRW5naW5lKHt9KSk7XHJcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSk7XHJcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcclxuXHJcbi8qKlxyXG4gKiBFbmFibGUgY29tcHJlc3Npb25cclxuICovXHJcbmFwcC51c2UoY29tcHJlc3Npb24oKSk7XHJcblxyXG4vKipcclxuICogc2VydmUgc3RhdGljIGZpbGVzXHJcbiAqL1xyXG5hcHAudXNlKCcvJywgZXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKFJPT1QsICdjbGllbnQnKSwge2luZGV4OiBmYWxzZX0pKTtcclxuXHJcbi8qKlxyXG4gKiBwbGFjZSB5b3VyIGFwaSByb3V0ZXMgaGVyZVxyXG4gKi9cclxuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XHJcblxyXG4vKipcclxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG5mdW5jdGlvbiBuZ0FwcChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuICByZXMucmVuZGVyKCdpbmRleCcsIHtcclxuICAgIHJlcSxcclxuICAgIHJlcyxcclxuICAgIG5nTW9kdWxlOiBBcHBNb2R1bGUsXHJcbiAgICBwcmVib290OiBmYWxzZSxcclxuICAgIGJhc2VVcmw6ICcvJyxcclxuICAgIHJlcXVlc3RVcmw6IHJlcS5vcmlnaW5hbFVybCxcclxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiB1c2UgdW5pdmVyc2FsIGZvciBzcGVjaWZpYyByb3V0ZXNcclxuICovXHJcbmFwcC5nZXQoJy8nLCBuZ0FwcCk7XHJcbnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XHJcbiAgYXBwLmdldChgLyR7cm91dGV9LypgLCBuZ0FwcCk7XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIGlmIHlvdSB3YW50IHRvIHVzZSB1bml2ZXJzYWwgZm9yIGFsbCByb3V0ZXMsIHlvdSBjYW4gdXNlIHRoZSAnKicgd2lsZGNhcmRcclxuICovXHJcblxyXG5hcHAuZ2V0KCcqJywgZnVuY3Rpb24gKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgY29uc3QgcG9qbyA9IHtzdGF0dXM6IDQwNCwgbWVzc2FnZTogJ05vIENvbnRlbnQnfTtcclxuICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkocG9qbywgbnVsbCwgMik7XHJcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XHJcbn0pO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKTtcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBBZnRlclZpZXdJbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiBcIltteWRwZm9jdXNdXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgQElucHV0KFwibXlkcGZvY3VzXCIpIHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XHJcblxyXG4gICAgLy8gRm9jdXMgdG8gZWxlbWVudDogaWYgdmFsdWUgMCA9IGRvbid0IHNldCBmb2N1cywgMSA9IHNldCBmb2N1c1xyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSBcIjBcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIFwiZm9jdXNcIiwgW10pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlLnRzIiwiZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGF5LWxhYmVscy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tb250aC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXItZGF5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci1tb250aC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXIteWVhci5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktd2Vlay5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktb3B0aW9ucy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbG9jYWxlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1kYXRlLW1vZGVsLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1pbnB1dC1maWVsZC1jaGFuZ2VkLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1pbnB1dC1mb2N1cy1ibHVyLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS13ZWVrZGF5LmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci12aWV3LWNoYW5nZWQuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW1hcmtlZC1kYXRlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tYXJrZWQtZGF0ZXMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWRlZmF1bHQtbW9udGguaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LXNlbGVjdG9yLmludGVyZmFjZVwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9pbnRlcmZhY2VzL2luZGV4LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdG9yUmVmLCBSZW5kZXJlciwgVmlld0NoaWxkLCBmb3J3YXJkUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IElNeURhdGUsIElNeURhdGVSYW5nZSwgSU15TW9udGgsIElNeUNhbGVuZGFyRGF5LCBJTXlDYWxlbmRhck1vbnRoLCBJTXlDYWxlbmRhclllYXIsIElNeVdlZWssIElNeURheUxhYmVscywgSU15TW9udGhMYWJlbHMsIElNeU9wdGlvbnMsIElNeURhdGVNb2RlbCwgSU15SW5wdXRGaWVsZENoYW5nZWQsIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsIElNeUlucHV0Rm9jdXNCbHVyLCBJTXlNYXJrZWREYXRlcywgSU15TWFya2VkRGF0ZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvaW5kZXhcIjtcclxuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLmxvY2FsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlXCI7XHJcblxyXG4vLyB3ZWJwYWNrMV9cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5jb25zdCBteURwU3R5bGVzOiBzdHJpbmcgPSByZXF1aXJlKFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzXCIpO1xyXG5jb25zdCBteURwVHBsOiBzdHJpbmcgPSByZXF1aXJlKFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFwiKTtcclxuLy8gd2VicGFjazJfXHJcblxyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNeURhdGVQaWNrZXIpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmVudW0gQ2FsVG9nZ2xlIHtPcGVuID0gMSwgQ2xvc2VCeURhdGVTZWwgPSAyLCBDbG9zZUJ5Q2FsQnRuID0gMywgQ2xvc2VCeU91dENsaWNrID0gNCwgQ2xvc2VCeUVzYyA9IDUsIENsb3NlQnlBcGkgPSA2fVxyXG5lbnVtIFllYXIge21pbiA9IDExMDAsIG1heCA9IDkxMDB9XHJcbmVudW0gSW5wdXRGb2N1c0JsdXIge2ZvY3VzID0gMSwgYmx1ciA9IDJ9XHJcbmVudW0gS2V5Q29kZSB7ZW50ZXIgPSAxMywgZXNjID0gMjcsIHNwYWNlID0gMzJ9XHJcbmVudW0gTW9udGhJZCB7cHJldiA9IDEsIGN1cnIgPSAyLCBuZXh0ID0gM31cclxuXHJcbmNvbnN0IE1NID0gXCJtbVwiO1xyXG5jb25zdCBNTU0gPSBcIm1tbVwiO1xyXG5jb25zdCBERCA9IFwiZGRcIjtcclxuY29uc3QgWVlZWSA9IFwieXl5eVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJteS1kYXRlLXBpY2tlclwiLFxyXG4gICAgZXhwb3J0QXM6IFwibXlkYXRlcGlja2VyXCIsXHJcbiAgICBzdHlsZXM6IFtteURwU3R5bGVzXSxcclxuICAgIHRlbXBsYXRlOiBteURwVHBsLFxyXG4gICAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE15RGF0ZVBpY2tlciBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gICAgQElucHV0KCkgb3B0aW9uczogSU15T3B0aW9ucztcclxuICAgIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWxEYXRlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VsZWN0b3I6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gICAgQE91dHB1dCgpIGRhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15RGF0ZU1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15RGF0ZU1vZGVsPigpO1xyXG4gICAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcclxuICAgIEBPdXRwdXQoKSBjYWxlbmRhclZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2FsZW5kYXJUb2dnbGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG4gICAgQFZpZXdDaGlsZChcInNlbGVjdG9yRWxcIikgc2VsZWN0b3JFbDogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoXCJpbnB1dEJveEVsXCIpIGlucHV0Qm94RWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICAgIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICAgIHNob3dTZWxlY3RvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xyXG4gICAgc2VsZWN0ZWRNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgIHNlbGVjdGVkRGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICAgIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgICBkYXRlczogQXJyYXk8SU15V2Vlaz4gPSBbXTtcclxuICAgIG1vbnRoczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJNb250aD4+ID0gW107XHJcbiAgICB5ZWFyczogQXJyYXk8QXJyYXk8SU15Q2FsZW5kYXJZZWFyPj4gPSBbXTtcclxuICAgIHNlbGVjdGlvbkRheVR4dDogc3RyaW5nID0gXCJcIjtcclxuICAgIGludmFsaWREYXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkaXNhYmxlVG9kYXlCdG46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRheUlkeDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBzZWxlY3RNb250aDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VsZWN0WWVhcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByZXZNb250aERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBuZXh0TW9udGhEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJldlllYXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbmV4dFllYXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJldlllYXJzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5leHRZZWFyc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJldk1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQucHJldjtcclxuICAgIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgICBuZXh0TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5uZXh0O1xyXG5cclxuICAgIC8vIERlZmF1bHQgb3B0aW9uc1xyXG4gICAgb3B0czogSU15T3B0aW9ucyA9IHtcclxuICAgICAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+IHt9LFxyXG4gICAgICAgIG1vbnRoTGFiZWxzOiA8SU15TW9udGhMYWJlbHM+IHt9LFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IDxzdHJpbmc+IFwiXCIsXHJcbiAgICAgICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICB0b2RheUJ0blR4dDogPHN0cmluZz4gXCJcIixcclxuICAgICAgICBmaXJzdERheU9mV2VlazogPHN0cmluZz4gXCJcIixcclxuICAgICAgICBzYXRIaWdobGlnaHQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBzdW5IaWdobGlnaHQ6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGhpZ2hsaWdodERhdGVzOiA8QXJyYXk8SU15RGF0ZT4+IFtdLFxyXG4gICAgICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtYXJrQ3VycmVudE1vbnRoOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtYXJrQ3VycmVudFllYXI6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVVbnRpbDogPElNeURhdGU+IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfSxcclxuICAgICAgICBkaXNhYmxlU2luY2U6IDxJTXlEYXRlPiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXHJcbiAgICAgICAgZGlzYWJsZURheXM6IDxBcnJheTxJTXlEYXRlPj4gW10sXHJcbiAgICAgICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGU+PiBbXSxcclxuICAgICAgICBtYXJrRGF0ZXM6IDxBcnJheTxJTXlNYXJrZWREYXRlcz4+IFtdLFxyXG4gICAgICAgIG1hcmtXZWVrZW5kczogPElNeU1hcmtlZERhdGU+IHt9LFxyXG4gICAgICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj4gW10sXHJcbiAgICAgICAgZGlzYWJsZVdlZWtlbmRzOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgZGlzYWJsZVdlZWtkYXlzOiA8QXJyYXk8c3RyaW5nPj4gW10sXHJcbiAgICAgICAgc2hvd1dlZWtOdW1iZXJzOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaGVpZ2h0OiA8c3RyaW5nPiBcIjM0cHhcIixcclxuICAgICAgICB3aWR0aDogPHN0cmluZz4gXCIxMDAlXCIsXHJcbiAgICAgICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+IFwiMTRweFwiLFxyXG4gICAgICAgIHNlbGVjdG9ySGVpZ2h0OiA8c3RyaW5nPiBcIjIzMnB4XCIsXHJcbiAgICAgICAgc2VsZWN0b3JXaWR0aDogPHN0cmluZz4gXCIyNTJweFwiLFxyXG4gICAgICAgIGFsbG93RGVzZWxlY3REYXRlOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaW5saW5lOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc2hvd0NsZWFyRGF0ZUJ0bjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgc2hvd0RlY3JlYXNlRGF0ZUJ0bjogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIHNob3dJbmNyZWFzZURhdGVCdG46IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBvcGVuU2VsZWN0b3JUb3BPZklucHV0OiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgaW5kaWNhdGVJbnZhbGlkRGF0ZTogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgZWRpdGFibGVEYXRlRmllbGQ6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1vbnRoU2VsZWN0b3I6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHllYXJTZWxlY3RvcjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZUhlYWRlckJ1dHRvbnM6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1pblllYXI6IDxudW1iZXI+IFllYXIubWluLFxyXG4gICAgICAgIG1heFllYXI6IDxudW1iZXI+IFllYXIubWF4LFxyXG4gICAgICAgIGNvbXBvbmVudERpc2FibGVkOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHNob3dJbnB1dEZpZWxkOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBvcGVuU2VsZWN0b3JPbklucHV0Q2xpY2s6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBhcmlhTGFiZWxJbnB1dEZpZWxkOiA8c3RyaW5nPiBcIkRhdGUgaW5wdXQgZmllbGRcIixcclxuICAgICAgICBhcmlhTGFiZWxDbGVhckRhdGU6IDxzdHJpbmc+IFwiQ2xlYXIgRGF0ZVwiLFxyXG4gICAgICAgIGFyaWFMYWJlbERlY3JlYXNlRGF0ZTogPHN0cmluZz4gXCJEZWNyZWFzZSBEYXRlXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsSW5jcmVhc2VEYXRlOiA8c3RyaW5nPiBcIkluY3JlYXNlIERhdGVcIixcclxuICAgICAgICBhcmlhTGFiZWxPcGVuQ2FsZW5kYXI6IDxzdHJpbmc+IFwiT3BlbiBDYWxlbmRhclwiLFxyXG4gICAgICAgIGFyaWFMYWJlbFByZXZNb250aDogPHN0cmluZz4gXCJQcmV2aW91cyBNb250aFwiLFxyXG4gICAgICAgIGFyaWFMYWJlbE5leHRNb250aDogPHN0cmluZz4gXCJOZXh0IE1vbnRoXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsUHJldlllYXI6IDxzdHJpbmc+IFwiUHJldmlvdXMgWWVhclwiLFxyXG4gICAgICAgIGFyaWFMYWJlbE5leHRZZWFyOiA8c3RyaW5nPiBcIk5leHQgWWVhclwiXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICAgICAgcmVuZGVyZXIubGlzdGVuR2xvYmFsKFwiZG9jdW1lbnRcIiwgXCJjbGlja1wiLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IgJiYgZXZlbnQudGFyZ2V0ICYmIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiYgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5tb250aFNlbGVjdG9yIHx8IHRoaXMub3B0cy55ZWFyU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRNb250aFllYXJTZWxlY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9wdHM6IElNeU9wdGlvbnMgPSB0aGlzLmxvY2FsZVNlcnZpY2UuZ2V0TG9jYWxlT3B0aW9ucyh0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAoPElNeU9wdGlvbnM+dGhpcy5vcHRzKVtrXSA9IG9wdHNba107XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3B0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAoPElNeU9wdGlvbnM+dGhpcy5vcHRzKVtrXSA9IHRoaXMub3B0aW9uc1trXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdHMubWluWWVhciA8IFllYXIubWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gWWVhci5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA+IFllYXIubWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5tYXhZZWFyID0gWWVhci5tYXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VsZWN0b3JUb3BQb3NpdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMub3BlblNlbGVjdG9yVG9wT2ZJbnB1dCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldE1vbnRoWWVhclNlbGVjdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RNb250aENsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSAhdGhpcy5zZWxlY3RNb250aDtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW9udGgpIHtcclxuICAgICAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93OiBBcnJheTxJTXlDYWxlbmRhck1vbnRoPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgMzsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhciwgbW9udGg6IGosIGRheTogdGhpcy5kYXlzSW5Nb250aChqLCB0aGlzLnZpc2libGVNb250aC55ZWFyKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1vbnRoOiBqLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICByb3cucHVzaCh7bmJyOiBqLCBuYW1lOiB0aGlzLm9wdHMubW9udGhMYWJlbHNbal0sIGN1cnJNb250aDogaiA9PT0gdG9kYXkubW9udGggJiYgdGhpcy52aXNpYmxlTW9udGgueWVhciA9PT0gdG9kYXkueWVhciwgc2VsZWN0ZWQ6IGogPT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkaXNhYmxlZDogZGlzYWJsZWR9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubW9udGhzLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJNb250aCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBtYzogYm9vbGVhbiA9IGNlbGwubmJyICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icjtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQoY2VsbC5uYnIpLCBtb250aE5icjogY2VsbC5uYnIsIHllYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXJ9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihjZWxsLm5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgbWMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhck1vbnRoKSB7XHJcbiAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Nb250aENlbGxDbGlja2VkKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdFllYXJDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSAhdGhpcy5zZWxlY3RZZWFyO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0WWVhcikge1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlWWVhcnModGhpcy52aXNpYmxlTW9udGgueWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNlbGxDbGlja2VkKGNlbGw6IElNeUNhbGVuZGFyWWVhcik6IHZvaWQge1xyXG4gICAgICAgIGxldCB5YzogYm9vbGVhbiA9IGNlbGwueWVhciAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcjtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQsIG1vbnRoTmJyOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeWVhcjogY2VsbC55ZWFyfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGNlbGwueWVhciwgeWMpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJZZWFyKSB7XHJcbiAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25ZZWFyQ2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldlllYXJzKGV2ZW50OiBhbnksIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh5ZWFyIC0gMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dFllYXJzKGV2ZW50OiBhbnksIHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh5ZWFyICsgMjUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlWWVhcnMoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0geWVhcjsgaSA8PSAyMCArIHllYXI7IGkgKz0gNSkge1xyXG4gICAgICAgICAgICBsZXQgcm93OiBBcnJheTxJTXlDYWxlbmRhclllYXI+ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgaSArIDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpc2FibGVkOiBib29sZWFuID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogaiwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IHRoaXMuZGF5c0luTW9udGgodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGopfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbClcclxuICAgICAgICAgICAgICAgICB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiBqLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbk1heDogYm9vbGVhbiA9IGogPCB0aGlzLm9wdHMubWluWWVhciB8fCBqID4gdGhpcy5vcHRzLm1heFllYXI7XHJcbiAgICAgICAgICAgICAgICByb3cucHVzaCh7eWVhcjogaiwgY3VyclllYXI6IGogPT09IHRvZGF5LnllYXIsIHNlbGVjdGVkOiBqID09PSB0aGlzLnZpc2libGVNb250aC55ZWFyLCBkaXNhYmxlZDogZGlzYWJsZWQgfHwgbWluTWF4fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy55ZWFycy5wdXNoKHJvdyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldlllYXJzRGlzYWJsZWQgPSB0aGlzLnllYXJzWzBdWzBdLnllYXIgPD0gdGhpcy5vcHRzLm1pblllYXIgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogdGhpcy55ZWFyc1swXVswXS55ZWFyIC0gMSwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IHRoaXMuZGF5c0luTW9udGgodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMueWVhcnNbMF1bMF0ueWVhciAtIDEpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgICAgdGhpcy5uZXh0WWVhcnNEaXNhYmxlZCA9IHRoaXMueWVhcnNbNF1bNF0ueWVhciA+PSB0aGlzLm9wdHMubWF4WWVhciB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB0aGlzLnllYXJzWzRdWzRdLnllYXIgKyAxLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVXNlckRhdGVJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5tb250aExhYmVscywgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZS5kYXkgIT09IDAgJiYgZGF0ZS5tb250aCAhPT0gMCAmJiBkYXRlLnllYXIgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlLCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkSW5wdXRGaWVsZENoYW5nZWQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXNJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHtyZWFzb246IElucHV0Rm9jdXNCbHVyLmZvY3VzLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25CbHVySW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgICAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoe3JlYXNvbjogSW5wdXRGb2N1c0JsdXIuYmx1ciwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xvc2VTZWxlY3RvcihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZXNjICYmIHRoaXMuc2hvd1NlbGVjdG9yICYmICF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUVzYyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHZhbHVlLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHt2YWx1ZTogdmFsdWUsIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LCB2YWxpZDogZmFsc2V9KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVG9kYXlEaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVUb2RheUJ0biA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheSh0aGlzLmdldFRvZGF5KCksIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE9wdGlvbnMoKTtcclxuICAgICAgICBsZXQgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtEYXlzKCk7XHJcbiAgICAgICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQoKTtcclxuICAgICAgICB0aGlzLmRheUlkeCA9IHdlZWtEYXlzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcclxuICAgICAgICBpZiAodGhpcy5kYXlJZHggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHg6IG51bWJlciA9IHRoaXMuZGF5SWR4O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtEYXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlZWtEYXlzLnB1c2godGhpcy5vcHRzLmRheUxhYmVsc1t3ZWVrRGF5c1tpZHhdXSk7XHJcbiAgICAgICAgICAgICAgICBpZHggPSB3ZWVrRGF5c1tpZHhdID09PSBcInNhXCIgPyAwIDogaWR4ICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUgJiYgKHZhbHVlW1wiZGF0ZVwiXSB8fCB2YWx1ZVtcImpzZGF0ZVwiXSB8fCB2YWx1ZVtcImZvcm1hdHRlZFwiXSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB2YWx1ZVtcImRhdGVcIl0gPyB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlW1wiZGF0ZVwiXSkgOiB2YWx1ZVtcImpzZGF0ZVwiXSA/IHRoaXMucGFyc2VTZWxlY3RlZERhdGUodGhpcy5qc0RhdGVUb015RGF0ZSh2YWx1ZVtcImpzZGF0ZVwiXSkpIDogdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVtcImZvcm1hdHRlZFwiXSk7XHJcbiAgICAgICAgICAgIGxldCBjdmM6IGJvb2xlYW4gPSB0aGlzLnZpc2libGVNb250aC55ZWFyICE9PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyIHx8IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyICE9PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aDtcclxuICAgICAgICAgICAgaWYgKGN2Yykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0aGlzLnNlbGVjdGVkRGF0ZS5tb250aF0sIG1vbnRoTmJyOiB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCwgeWVhcjogdGhpcy5zZWxlY3RlZERhdGUueWVhcn07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy5zZWxlY3RlZERhdGUubW9udGgsIHRoaXMuc2VsZWN0ZWREYXRlLnllYXIsIGN2Yyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnNlbGVjdGVkRGF0ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRzLmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoe3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wdHMuY29tcG9uZW50RGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcInNlbGVjdG9yXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBzOiBhbnkgPSBjaGFuZ2VzW1wic2VsZWN0b3JcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHMgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzLm9wZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoQ2FsVG9nZ2xlLk9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlBcGkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwicGxhY2Vob2xkZXJcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNoYW5nZXNbXCJwbGFjZWhvbGRlclwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcImxvY2FsZVwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGNoYW5nZXNbXCJsb2NhbGVcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gY2hhbmdlc1tcImRpc2FibGVkXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwib3B0aW9uc1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzW1wib3B0aW9uc1wiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndlZWtEYXlzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgbGV0IGRtQ2hhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0TW9udGhcIikpIHtcclxuICAgICAgICAgICAgbGV0IGRtOiBhbnkgPSBjaGFuZ2VzW1wiZGVmYXVsdE1vbnRoXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkbSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgZG0gPSBkbS5kZWZNb250aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZG0gIT09IG51bGwgJiYgZG0gIT09IHVuZGVmaW5lZCAmJiBkbSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5wYXJzZVNlbGVjdGVkTW9udGgoZG0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZG1DaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJzZWxEYXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBzZDogYW55ID0gY2hhbmdlc1tcInNlbERhdGVcIl07XHJcbiAgICAgICAgICAgIGlmIChzZC5jdXJyZW50VmFsdWUgIT09IG51bGwgJiYgc2QuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQgJiYgc2QuY3VycmVudFZhbHVlICE9PSBcIlwiICYmIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMucGFyc2VTZWxlY3RlZERhdGUoc2QuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2VDYih0aGlzLmdldERhdGVNb2RlbCh0aGlzLnNlbGVjdGVkRGF0ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgY2xlYXIgb24gaW5pdFxyXG4gICAgICAgICAgICAgICAgaWYgKCFzZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZpc2libGVNb250aC55ZWFyID09PSAwICYmIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyID09PSAwIHx8IGRtQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVNb250aC5tb250aFR4dCA9IHRoaXMub3B0cy5tb250aExhYmVsc1t0aGlzLnZpc2libGVNb250aC5tb250aE5icl07XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlbW92ZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlY3JlYXNlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBEZWNyZWFzZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZUluY3JlYXNlRGF0ZSh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluY3JlYXNlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbmNyZWFzZSBkYXRlIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5kZWNyZWFzZUluY3JlYXNlRGF0ZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWxlY3RvciBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuU2VsZWN0b3IoQ2FsVG9nZ2xlLk9wZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQocmVhc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVNlbGVjdG9yKHJlYXNvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KHJlYXNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFNldHMgdmlzaWJsZSBtb250aCBvZiBjYWxlbmRhclxyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSAwLCBtOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyID09PSAwICYmIHRoaXMuc2VsZWN0ZWRNb250aC5tb250aE5iciA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgICAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgICAgICAgICBtID0gdG9kYXkubW9udGg7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZE1vbnRoLnllYXI7XHJcbiAgICAgICAgICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeX07XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldk1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuXHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeX07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dE1vbnRoKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5leHQgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmV2WWVhcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBQcmV2aW91cyB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aC55ZWFyLS07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5leHQgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub2RheUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVG9kYXkgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5LCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMuaW5saW5lICYmIHRvZGF5LnllYXIgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIgfHwgdG9kYXkubW9udGggIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbdG9kYXkubW9udGhdLCBtb250aE5icjogdG9kYXkubW9udGgsIHllYXI6IHRvZGF5LnllYXJ9O1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodG9kYXkubW9udGgsIHRvZGF5LnllYXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNlbGxDbGlja2VkKGNlbGw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgICAgICBpZiAoY2VsbC5jbW8gPT09IHRoaXMucHJldk1vbnRoSWQpIHtcclxuICAgICAgICAgICAgLy8gUHJldmlvdXMgbW9udGggZGF5XHJcbiAgICAgICAgICAgIHRoaXMub25QcmV2TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5hbGxvd0Rlc2VsZWN0RGF0ZSAmJiB0aGlzLnV0aWxTZXJ2aWNlLmlzU2FtZURhdGUoY2VsbC5kYXRlT2JqLCB0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoY2VsbC5kYXRlT2JqLCBDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgICAgICAgIHRoaXMub25OZXh0TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhclNlbGVjdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAgICAgLy8gQ2VsbCBrZXlib2FyZCBoYW5kbGluZ1xyXG4gICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBDbGVhcnMgdGhlIGRhdGUgYW5kIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtkYXRlOiBkYXRlLCBqc2RhdGU6IG51bGwsIGZvcm1hdHRlZDogXCJcIiwgZXBvYzogMH0pO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvSW5wdXRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZUluY3JlYXNlRGF0ZShkZWNyZWFzZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlcyBvciBpbmNyZWFzZXMgdGhlIGRhdGUgZGVwZW5kaW5nIG9uIHRoZSBwYXJhbWV0ZXJcclxuICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHRoaXMuc2VsZWN0ZWREYXRlO1xyXG4gICAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpO1xyXG4gICAgICAgICAgICBkLnNldERhdGUoZGVjcmVhc2UgPyBkLmdldERhdGUoKSAtIDEgOiBkLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgICAgICBkYXRlID0ge3llYXI6IGQuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGQuZ2V0TW9udGgoKSArIDEsIGRheTogZC5nZXREYXRlKCl9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUsIENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUsIGNsb3NlUmVhc29uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBEYXRlIHNlbGVjdGVkLCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgICAgIGxldCBkYXRlTW9kZWw6IElNeURhdGVNb2RlbCA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdChkYXRlTW9kZWwpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChjbG9zZVJlYXNvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZXRGb2N1c1RvSW5wdXRCb3goKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGb2N1c1RvSW5wdXRCb3goKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dEJveEVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRlVmFsdWUoZGF0ZTogSU15RGF0ZSwgY2xlYXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBkYXRlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyBcIlwiIDogdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7dmFsdWU6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LCBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdmFsaWQ6ICFjbGVhcn0pO1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlTW9kZWwoZGF0ZTogSU15RGF0ZSk6IElNeURhdGVNb2RlbCB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGRhdGUgbW9kZWwgb2JqZWN0IGZyb20gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgICAgIHJldHVybiB7ZGF0ZTogZGF0ZSwganNkYXRlOiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksIGZvcm1hdHRlZDogdGhpcy5mb3JtYXREYXRlKGRhdGUpLCBlcG9jOiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKX07XHJcbiAgICB9XHJcblxyXG4gICAgcHJlWmVybyh2YWw6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh2YWwpIDwgMTAgPyBcIjBcIiArIHZhbCA6IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZXR1cm5zIGZvcm1hdHRlZCBkYXRlIHN0cmluZywgaWYgbW1tIGlzIHBhcnQgb2YgZGF0ZUZvcm1hdCByZXR1cm5zIG1vbnRoIGFzIGEgc3RyaW5nXHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZDogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQucmVwbGFjZShZWVlZLCB2YWwueWVhcikucmVwbGFjZShERCwgdGhpcy5wcmVaZXJvKHZhbC5kYXkpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRzLmRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMSA/IGZvcm1hdHRlZC5yZXBsYWNlKE1NTSwgdGhpcy5tb250aFRleHQodmFsLm1vbnRoKSkgOiBmb3JtYXR0ZWQucmVwbGFjZShNTSwgdGhpcy5wcmVaZXJvKHZhbC5tb250aCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbnRoVGV4dChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICAgIH1cclxuXHJcbiAgICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBNb250aCBzdGFydCBpbmRleFxyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldERhdGUoMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChtIC0gMSk7XHJcbiAgICAgICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgICAgICBsZXQgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XHJcbiAgICAgICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5Nb250aChtOiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRheXNJblByZXZNb250aChtOiBudW1iZXIsIHk6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHksIG0sIDEpO1xyXG4gICAgICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0N1cnJEYXkoZDogbnVtYmVyLCBtOiBudW1iZXIsIHk6IG51bWJlciwgY21vOiBudW1iZXIsIHRvZGF5OiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxyXG4gICAgICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kYXkoKTogSU15RGF0ZSB7XHJcbiAgICAgICAgbGV0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiB7eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKX07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtkYXkoZGF0ZTogSU15RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gR2V0IHdlZWtkYXk6IHN1LCBtbywgdHUsIHdlIC4uLlxyXG4gICAgICAgIGxldCB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla0RheXMoKTtcclxuICAgICAgICByZXR1cm4gd2Vla0RheXNbdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSldO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcik6IERhdGUge1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYSBkYXRlIG9iamVjdCBmcm9tIGdpdmVuIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN1bmRheUlkeCgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUNhbGVuZGFyKG06IG51bWJlciwgeTogbnVtYmVyLCBub3RpZnlDaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIGxldCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XHJcbiAgICAgICAgbGV0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xyXG4gICAgICAgIGxldCBkSW5QcmV2TTogbnVtYmVyID0gdGhpcy5kYXlzSW5QcmV2TW9udGgobSwgeSk7XHJcblxyXG4gICAgICAgIGxldCBkYXlOYnI6IG51bWJlciA9IDE7XHJcbiAgICAgICAgbGV0IGNtbzogbnVtYmVyID0gdGhpcy5wcmV2TW9udGhJZDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgd2VlazogQXJyYXk8SU15Q2FsZW5kYXJEYXk+ID0gW107XHJcbiAgICAgICAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBGaXJzdCB3ZWVrXHJcbiAgICAgICAgICAgICAgICBsZXQgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xyXG4gICAgICAgICAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBwbTsgaiA8PSBkSW5QcmV2TTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IGp9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGosIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnQgbW9udGhcclxuICAgICAgICAgICAgICAgIGxldCBkYXlzTGVmdDogbnVtYmVyID0gNyAtIHdlZWsubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZGF5TmJyfTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5TmJyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA4OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTmV4dCBtb250aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlOYnIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbW8gPSB0aGlzLm5leHRNb250aElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBjbW8gPT09IHRoaXMubmV4dE1vbnRoSWQgJiYgbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogY21vID09PSB0aGlzLm5leHRNb250aElkICYmIG0gPCAxMiA/IG0gKyAxIDogMSwgZGF5OiBkYXlOYnJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHRoaXMub3B0cy5zdW5IaWdobGlnaHQsIHRoaXMub3B0cy5zYXRIaWdobGlnaHQsIHRoaXMub3B0cy5oaWdobGlnaHREYXRlcyl9KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgd2Vla05icjogbnVtYmVyID0gdGhpcy5vcHRzLnNob3dXZWVrTnVtYmVycyAgJiYgdGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrID09PSBcIm1vXCIgPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKSA6IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZXMucHVzaCh7d2Vlazogd2Vlaywgd2Vla05icjogd2Vla05icn0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG0sIHkpO1xyXG5cclxuICAgICAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgICAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe3llYXI6IHksIG1vbnRoOiBtLCBmaXJzdDoge251bWJlcjogMSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiAxfSl9LCBsYXN0OiB7bnVtYmVyOiBkSW5UaGlzTSwgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkSW5UaGlzTX0pfX0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVNlbGVjdGVkRGF0ZShzZWxEYXRlOiBhbnkpOiBJTXlEYXRlIHtcclxuICAgICAgICAvLyBQYXJzZSBkYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxyXG4gICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge2RheTogMCwgbW9udGg6IDAsIHllYXI6IDB9O1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICBsZXQgc2Q6IHN0cmluZyA9IDxzdHJpbmc+IHNlbERhdGU7XHJcbiAgICAgICAgICAgIGxldCBkZjogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQ7XHJcblxyXG4gICAgICAgICAgICBkYXRlLm1vbnRoID0gZGYuaW5kZXhPZihNTU0pICE9PSAtMVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGYsIHNkLCBNTU0sIHRoaXMub3B0cy5tb250aExhYmVscylcclxuICAgICAgICAgICAgICAgIDogdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TnVtYmVyKGRmLCBzZCwgTU0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRmLmluZGV4T2YoTU1NKSAhPT0gLTEgJiYgdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2RhdGUubW9udGhdKSB7XHJcbiAgICAgICAgICAgICAgICBkZiA9IHRoaXMudXRpbFNlcnZpY2UuY2hhbmdlRGF0ZUZvcm1hdChkZiwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2RhdGUubW9udGhdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRhdGUuZGF5ID0gdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TnVtYmVyKGRmLCBzZCwgREQpO1xyXG4gICAgICAgICAgICBkYXRlLnllYXIgPSB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBZWVlZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHNlbERhdGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHNlbERhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGpzRGF0ZVRvTXlEYXRlKGRhdGU6IERhdGUpOiBJTXlEYXRlIHtcclxuICAgICAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU2VsZWN0ZWRNb250aChtczogc3RyaW5nKTogSU15TW9udGgge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG06IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGRwbTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkcHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgZG5tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRueTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSwgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLCBkYXk6IHRoaXMuZGF5c0luTW9udGgobSA9PT0gMSA/IDEyIDogbSAtIDEsIG0gPT09IDEgPyB5IC0gMSA6IHkpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgICAgICAgIGRweSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHkgLSAxLCBtb250aDogbSwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICAgICAgICBkbm0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSwgbW9udGg6IG0gPT09IDEyID8gMSA6IG0gKyAxLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogeSArIDEsIG1vbnRoOiBtLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IG0gPT09IDEgJiYgeSA9PT0gdGhpcy5vcHRzLm1pblllYXIgfHwgZHBtO1xyXG4gICAgICAgIHRoaXMucHJldlllYXJEaXNhYmxlZCA9IHkgLSAxIDwgdGhpcy5vcHRzLm1pblllYXIgfHwgZHB5O1xyXG4gICAgICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSBtID09PSAxMiAmJiB5ID09PSB0aGlzLm9wdHMubWF4WWVhciB8fCBkbm07XHJcbiAgICAgICAgdGhpcy5uZXh0WWVhckRpc2FibGVkID0geSArIDEgPiB0aGlzLm9wdHMubWF4WWVhciB8fCBkbnk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tIFwiLi9teS1kYXRlLXBpY2tlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tIFwiLi9kaXJlY3RpdmVzL215LWRhdGUtcGlja2VyLmZvY3VzLmRpcmVjdGl2ZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcclxuICAgIGRlY2xhcmF0aW9uczogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmVdLFxyXG4gICAgZXhwb3J0czogW015RGF0ZVBpY2tlciwgRm9jdXNEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeURhdGVQaWNrZXJNb2R1bGUge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5tb2R1bGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU15TG9jYWxlcywgSU15T3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9jYWxlczogSU15TG9jYWxlcyA9IHtcclxuICAgICAgICBcImVuXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VuXCIsIG1vOiBcIk1vblwiLCB0dTogXCJUdWVcIiwgd2U6IFwiV2VkXCIsIHRoOiBcIlRodVwiLCBmcjogXCJGcmlcIiwgc2E6IFwiU2F0XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwibW0vZGQveXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUb2RheVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhlXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi16jXkFwiLCBtbzogXCLXqdegXCIsIHR1OiBcItep15xcIiwgd2U6IFwi16jXkVwiLCB0aDogXCLXl9eeXCIsIGZyOiBcItep15lcIiwgc2E6IFwi16nXkVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLXmdeg15VcIiwgMjogXCLXpNeR16hcIiwgMzogXCLXnteo16VcIiwgNDogXCLXkNek16hcIiwgNTogXCLXnteQ15lcIiwgNjogXCLXmdeV16BcIiwgNzogXCLXmdeV15xcIiwgODogXCLXkNeV15JcIiwgOTogXCLXodek15hcIiwgMTA6IFwi15DXldenXCIsIDExOiBcIteg15XXkVwiLCAxMjogXCLXk9em155cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi15TXmdeV151cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJqYVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuaXpVwiLCBtbzogXCLmnIhcIiwgdHU6IFwi54GrXCIsIHdlOiBcIuawtFwiLCB0aDogXCLmnKhcIiwgZnI6IFwi6YeRXCIsIHNhOiBcIuWcn1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIu+8keaciFwiLCAyOiBcIu+8kuaciFwiLCAzOiBcIu+8k+aciFwiLCA0OiBcIu+8lOaciFwiLCA1OiBcIu+8leaciFwiLCA2OiBcIu+8luaciFwiLCA3OiBcIu+8l+aciFwiLCA4OiBcIu+8mOaciFwiLCA5OiBcIu+8meaciFwiLCAxMDogXCLvvJHvvJDmnIhcIiwgMTE6IFwi77yR77yR5pyIXCIsIDEyOiBcIu+8ke+8kuaciFwifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5Lm1tLmRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuS7iuaXpVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiRGltXCIsIG1vOiBcIkx1blwiLCB0dTogXCJNYXJcIiwgd2U6IFwiTWVyXCIsIHRoOiBcIkpldVwiLCBmcjogXCJWZW5cIiwgc2E6IFwiU2FtXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiSmFuXCIsIDI6IFwiRsOpdlwiLCAzOiBcIk1hclwiLCA0OiBcIkF2clwiLCA1OiBcIk1haVwiLCA2OiBcIkp1aW5cIiwgNzogXCJKdWlsXCIsIDg6IFwiQW/Du1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkTDqWNcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJBdWpvdXJkJ2h1aVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImZpXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VcIiwgbW86IFwiTWFcIiwgdHU6IFwiVGlcIiwgd2U6IFwiS2VcIiwgdGg6IFwiVG9cIiwgZnI6IFwiUGVcIiwgc2E6IFwiTGFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJUYW1cIiwgMjogXCJIZWxcIiwgMzogXCJNYWFcIiwgNDogXCJIdWhcIiwgNTogXCJUb3VcIiwgNjogXCJLZXNcIiwgNzogXCJIZWlcIiwgODogXCJFbG9cIiwgOTogXCJTeXlcIiwgMTA6IFwiTG9rXCIsIDExOiBcIk1hclwiLCAxMjogXCJKb3VcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUw6Ruw6TDpG5cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlc1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRvXCIsIG1vOiBcIkx1XCIsIHR1OiBcIk1hXCIsIHdlOiBcIk1pXCIsIHRoOiBcIkp1XCIsIGZyOiBcIlZpXCIsIHNhOiBcIlNhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiRW5lXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQWJyXCIsIDU6IFwiTWF5XCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGljXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSG95XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJWYXNcIiwgbW86IFwiSMOpdFwiLCB0dTogXCJLZWRkXCIsIHdlOiBcIlN6ZVwiLCB0aDogXCJDc8O8XCIsIGZyOiBcIlDDqW5cIiwgc2E6IFwiU3pvXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk3DoXJcIiwgNDogXCLDgXByXCIsIDU6IFwiTcOhalwiLCA2OiBcIkrDum5cIiwgNzogXCJKw7psXCIsIDg6IFwiQXVnXCIsIDk6IFwiU3plcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJNYVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic3ZcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTw7ZuXCIsIG1vOiBcIk3DpW5cIiwgdHU6IFwiVGlzXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDtnJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIklkYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJubFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlpvblwiLCBtbzogXCJNYWFcIiwgdHU6IFwiRGluXCIsIHdlOiBcIldvZVwiLCB0aDogXCJEb25cIiwgZnI6IFwiVnJpXCIsIHNhOiBcIlphdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNZWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVmFuZGFhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJ1XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0JLRgVwiLCBtbzogXCLQn9C9XCIsIHR1OiBcItCS0YJcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQp9GCXCIsIGZyOiBcItCf0YJcIiwgc2E6IFwi0KHQsVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLQr9C90LJcIiwgMjogXCLQpNC10LJcIiwgMzogXCLQnNCw0YDRglwiLCA0OiBcItCQ0L/RgFwiLCA1OiBcItCc0LDQuVwiLCA2OiBcItCY0Y7QvdGMXCIsIDc6IFwi0JjRjtC70YxcIiwgODogXCLQkNCy0LNcIiwgOTogXCLQodC10L3RglwiLCAxMDogXCLQntC60YJcIiwgMTE6IFwi0J3QvtGPXCIsIDEyOiBcItCU0LXQulwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQodC10LPQvtC00L3Rj1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidWtcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLQndC0XCIsIG1vOiBcItCf0L1cIiwgdHU6IFwi0JLRglwiLCB3ZTogXCLQodGAXCIsIHRoOiBcItCn0YJcIiwgZnI6IFwi0J/RglwiLCBzYTogXCLQodCxXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItCh0ZbRh1wiLCAyOiBcItCb0Y7RglwiLCAzOiBcItCR0LXRgFwiLCA0OiBcItCa0LLRllwiLCA1OiBcItCi0YDQsFwiLCA2OiBcItCn0LXRgFwiLCA3OiBcItCb0LjQv1wiLCA4OiBcItCh0LXRgFwiLCA5OiBcItCS0LXRgFwiLCAxMDogXCLQltC+0LJcIiwgMTE6IFwi0JvQuNGBXCIsIDEyOiBcItCT0YDRg1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQodGM0L7Qs9C+0LTQvdGWXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJub1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlPDuG5cIiwgbW86IFwiTWFuXCIsIHR1OiBcIlRpclwiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7hyXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJIGRhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiUGF6XCIsIG1vOiBcIlB6dFwiLCB0dTogXCJTYWxcIiwgd2U6IFwiw4dhclwiLCB0aDogXCJQZXJcIiwgZnI6IFwiQ3VtXCIsIHNhOiBcIkNtdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJPY2FcIiwgMjogXCLFnnViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiTmlzXCIsIDU6IFwiTWF5XCIsIDY6IFwiSGF6XCIsIDc6IFwiVGVtXCIsIDg6IFwiQcSfdVwiLCA5OiBcIkV5bFwiLCAxMDogXCJFa2lcIiwgMTE6IFwiS2FzXCIsIDEyOiBcIkFyYVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJCdWfDvG5cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwdC1iclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRvbVwiLCBtbzogXCJTZWdcIiwgdHU6IFwiVGVyXCIsIHdlOiBcIlF1YVwiLCB0aDogXCJRdWlcIiwgZnI6IFwiU2V4XCIsIHNhOiBcIlNhYlwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZXZcIiwgMzogXCJNYXJcIiwgNDogXCJBYnJcIiwgNTogXCJNYWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBZ29cIiwgOTogXCJTZXRcIiwgMTA6IFwiT3V0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXpcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSG9qZVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTb1wiLCBtbzogXCJNb1wiLCB0dTogXCJEaVwiLCB3ZTogXCJNaVwiLCB0aDogXCJEb1wiLCBmcjogXCJGclwiLCBzYTogXCJTYVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNw6RyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGV6XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhldXRlXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpdFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJEb21cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiR2lvXCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYWJcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkdlblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1hZ1wiLCA2OiBcIkdpdVwiLCA3OiBcIkx1Z1wiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdHRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJPZ2dpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpdC1jaFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJEb21cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiR2lvXCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYWJcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkdlblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1hZ1wiLCA2OiBcIkdpdVwiLCA3OiBcIkx1Z1wiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdHRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJPZ2dpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJwbFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOaWVcIiwgbW86IFwiUG9uXCIsIHR1OiBcIld0b1wiLCB3ZTogXCLFmnJvXCIsIHRoOiBcIkN6d1wiLCBmcjogXCJQacSFXCIsIHNhOiBcIlNvYlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiU3R5XCIsIDI6IFwiTHV0XCIsIDM6IFwiTWFyXCIsIDQ6IFwiS3dpXCIsIDU6IFwiTWFqXCIsIDY6IFwiQ3plXCIsIDc6IFwiTGlwXCIsIDg6IFwiU2llXCIsIDk6IFwiV3J6XCIsIDEwOiBcIlBhxbpcIiwgMTE6IFwiTGlzXCIsIDEyOiBcIkdydVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEemlzaWFqXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibXlcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLhgJDhgJThgIThgLrhgLnhgILhgJThgL3hgLFcIiwgbW86IFwi4YCQ4YCU4YCE4YC64YC54YCc4YCsXCIsIHR1OiBcIuGAoeGAhOGAuuGAueGAguGAq1wiLCB3ZTogXCLhgJfhgK/hgJLhgLnhgJPhgJ/hgLDhgLhcIiwgdGg6IFwi4YCA4YC84YCe4YCV4YCQ4YCx4YC4XCIsIGZyOiBcIuGAnuGAseGArOGAgOGAvOGArFwiLCBzYTogXCLhgIXhgJThgLFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4YCH4YCU4YC64YCU4YCd4YCr4YCb4YCuXCIsIDI6IFwi4YCW4YCx4YCW4YCx4YCs4YC64YCd4YCr4YCb4YCuXCIsIDM6IFwi4YCZ4YCQ4YC6XCIsIDQ6IFwi4YCn4YCV4YC84YCuXCIsIDU6IFwi4YCZ4YCxXCIsIDY6IFwi4YCH4YC94YCU4YC6XCIsIDc6IFwi4YCH4YCw4YCc4YCt4YCv4YCE4YC6XCIsIDg6IFwi4YCp4YCC4YCv4YCQ4YC6XCIsIDk6IFwi4YCF4YCA4YC64YCQ4YCE4YC64YCY4YCsXCIsIDEwOiBcIuGAoeGAseGArOGAgOGAuuGAkOGAreGAr+GAmOGArFwiLCAxMTogXCLhgJThgK3hgK/hgJ3hgIThgLrhgJjhgKxcIiwgMTI6IFwi4YCS4YCu4YCH4YCE4YC64YCY4YCsXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuGAmuGAlOGAseGAt1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNrXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5lXCIsIG1vOiBcIlBvXCIsIHR1OiBcIlV0XCIsIHdlOiBcIlN0XCIsIHRoOiBcIsWgdFwiLCBmcjogXCJQaVwiLCBzYTogXCJTb1wiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTcOhalwiLCA2OiBcIkrDum5cIiwgNzogXCJKw7psXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkRuZXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzbFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZWRcIiwgbW86IFwiUG9uXCIsIHR1OiBcIlRvclwiLCB3ZTogXCJTcmVcIiwgdGg6IFwixIxldFwiLCBmcjogXCJQZXRcIiwgc2E6IFwiU29iXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWpcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdmdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLiBtbS4geXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEYW5lc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInpoLWNuXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi5pelXCIsIG1vOiBcIuS4gFwiLCB0dTogXCLkuoxcIiwgd2U6IFwi5LiJXCIsIHRoOiBcIuWbm1wiLCBmcjogXCLkupRcIiwgc2E6IFwi5YWtXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIjHmnIhcIiwgMjogXCIy5pyIXCIsIDM6IFwiM+aciFwiLCA0OiBcIjTmnIhcIiwgNTogXCI15pyIXCIsIDY6IFwiNuaciFwiLCA3OiBcIjfmnIhcIiwgODogXCI45pyIXCIsIDk6IFwiOeaciFwiLCAxMDogXCIxMOaciFwiLCAxMTogXCIxMeaciFwiLCAxMjogXCIxMuaciFwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLku4rlpKlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJyb1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcImR1XCIsIG1vOiBcImx1XCIsIHR1OiBcIm1hXCIsIHdlOiBcIm1pXCIsIHRoOiBcImpvXCIsIGZyOiBcInZpXCIsIHNhOiBcInNhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcImlhblwiLCAyOiBcImZlYlwiLCAzOiBcIm1hcnRcIiwgNDogXCJhcHJcIiwgNTogXCJtYWlcIiwgNjogXCJpdW5cIiwgNzogXCJpdWxcIiwgODogXCJhdWdcIiwgOTogXCJzZXB0XCIsIDEwOiBcIm9jdFwiLCAxMTogXCJub3ZcIiwgMTI6IFwiZGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkFzdMSDemlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjYVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcImRnXCIsIG1vOiBcImRsXCIsIHR1OiBcImR0XCIsIHdlOiBcImRjXCIsIHRoOiBcImRqXCIsIGZyOiBcImR2XCIsIHNhOiBcImRzXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiR2VuXCIsIDI6IFwiRmViclwiLCAzOiBcIk1hcsOnXCIsIDQ6IFwiQWJyXCIsIDU6IFwiTWFpZ1wiLCA2OiBcIkp1bnlcIiwgNzogXCJKdWxcIiwgODogXCJBZ1wiLCA5OiBcIlNldFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkF2dWlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpZFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIk1pblwiLCBtbzogXCJTZW5cIiwgdHU6IFwiU2VsXCIsIHdlOiBcIlJhYlwiLCB0aDogXCJLYW1cIiwgZnI6IFwiSnVtXCIsIHNhOiBcIlNhYlwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1laVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnc1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlc1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhhcmkgaW5pXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlbi1hdVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlN1blwiLCBtbzogXCJNb25cIiwgdHU6IFwiVHVlXCIsIHdlOiBcIldlZFwiLCB0aDogXCJUaHVcIiwgZnI6IFwiRnJpXCIsIHNhOiBcIlNhdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVG9kYXlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFtLWV0XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi4Yql4YiR4Yu1XCIsIG1vOiBcIuGIsOGKnlwiLCB0dTogXCLhiJvhiq3hiLDhip5cIiwgd2U6IFwi4Yio4Ymh4YuVXCIsIHRoOiBcIuGIkOGImeGItVwiLCBmcjogXCLhi5PhiK3hiaVcIiwgc2E6IFwi4YmF4Yuz4YicXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIuGMg+GKleGLqVwiLCAyOiBcIuGNjOGJpeGIqVwiLCAzOiBcIuGIm+GIreGJvVwiLCA0OiBcIuGKpOGNleGIqFwiLCA1OiBcIuGInOGLrVwiLCA2OiBcIuGMgeGKlVwiLCA3OiBcIuGMgeGIi+GLrVwiLCA4OiBcIuGKpuGMiOGItVwiLCA5OiBcIuGItOGNleGJtFwiLCAxMDogXCLhiqbhiq3hibBcIiwgMTE6IFwi4YqW4Yms4YidXCIsIDEyOiBcIuGLsuGItOGInVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLhi5vhiKxcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNzXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5lXCIsIG1vOiBcIlBvXCIsIHR1OiBcIsOadFwiLCB3ZTogXCJTdFwiLCB0aDogXCLEjHRcIiwgZnI6IFwiUMOhXCIsIHNhOiBcIlNvXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJMZWRcIiwgMjogXCLDmm5vXCIsIDM6IFwiQsWZZVwiLCA0OiBcIkR1YlwiLCA1OiBcIkt2xJtcIiwgNjogXCLEjHZuXCIsIDc6IFwixIx2Y1wiLCA4OiBcIlNycFwiLCA5OiBcIlrDocWZXCIsIDEwOiBcIsWYw61qXCIsIDExOiBcIkxpc1wiLCAxMjogXCJQcm9cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiRG5lc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZWxcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwizprPhc+BXCIsIG1vOiBcIs6UzrXPhVwiLCB0dTogXCLOpM+BzrlcIiwgd2U6IFwizqTOtc+EXCIsIHRoOiBcIs6gzrXOvFwiLCBmcjogXCLOoM6xz4FcIiwgc2E6IFwizqPOsc6yXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLOmc6xzr1cIiwgMjogXCLOps61zrJcIiwgMzogXCLOnM6xz4FcIiwgNDogXCLOkc+Az4FcIiwgNTogXCLOnM6xzrlcIiwgNjogXCLOmc6/z4XOvVwiLCA3OiBcIs6Zzr/Phc67XCIsIDg6IFwizpHPhc6zXCIsIDk6IFwizqPOtc+AXCIsIDEwOiBcIs6fzrrPhFwiLCAxMTogXCLOnc6/zrVcIiwgMTI6IFwizpTOtc66XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIs6jzq7OvM61z4HOsVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwia2tcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi0JbQulwiLCBtbzogXCLQlNGBXCIsIHR1OiBcItCh0YFcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQkdGBXCIsIGZyOiBcItCW0LxcIiwgc2E6IFwi0KHQsVwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0prQsNKjXCIsIDI6IFwi0JDSm9C/XCIsIDM6IFwi0J3QsNGDXCIsIDQ6IFwi0KHTmdGDXCIsIDU6IFwi0JzQsNC8XCIsIDY6IFwi0JzQsNGDXCIsIDc6IFwi0KjRltC7XCIsIDg6IFwi0KLQsNC8XCIsIDk6IFwi0prRi9GA0LpcIiwgMTA6IFwi0prQsNC3XCIsIDExOiBcItKa0LDRgFwiLCAxMjogXCLQltC10LvRglwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0JHSr9Cz0ZbQvVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidGhcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi4Lit4LiyXCIsIG1vOiBcIuC4iFwiLCB0dTogXCLguK1cIiwgd2U6IFwi4LieXCIsIHRoOiBcIuC4nuC4pFwiLCBmcjogXCLguKhcIiwgc2E6IFwi4LiqXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLguKEu4LiEXCIsIDI6IFwi4LiBLuC4ni5cIiwgMzogXCLguKHguLUu4LiELlwiLCA0OiBcIuC5gOC4oS7guKIuXCIsIDU6IFwi4LieLuC4hC5cIiwgNjogXCLguKHguLQu4LiiLlwiLCA3OiBcIuC4gS7guIQuXCIsIDg6IFwi4LiqLuC4hC5cIiwgOTogXCLguIEu4LiiLlwiLCAxMDogXCLguJUu4LiELlwiLCAxMTogXCLguJ4u4LiiLlwiLCAxMjogXCLguJgu4LiELlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLguKfguLHguJnguJnguLXguYlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImtvLWtyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi7J28XCIsIG1vOiBcIuyblFwiLCB0dTogXCLtmZRcIiwgd2U6IFwi7IiYXCIsIHRoOiBcIuuqqVwiLCBmcjogXCLquIhcIiwgc2E6IFwi7YagXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIjHsm5RcIiwgMjogXCIy7JuUXCIsIDM6IFwiM+yblFwiLCA0OiBcIjTsm5RcIiwgNTogXCI17JuUXCIsIDY6IFwiNuyblFwiLCA3OiBcIjfsm5RcIiwgODogXCI47JuUXCIsIDk6IFwiOeyblFwiLCAxMDogXCIxMOyblFwiLCAxMTogXCIxMeyblFwiLCAxMjogXCIxMuyblFwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eSBtbSBkZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLsmKTriphcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRhXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O4blwiLCBtbzogXCJNYW5cIiwgdHU6IFwiVGlyXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDuHJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkkgZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJsdFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlNrXCIsIG1vOiBcIlByXCIsIHR1OiBcIkFuXCIsIHdlOiBcIlRyXCIsIHRoOiBcIkt0XCIsIGZyOiBcIlBuXCIsIHNhOiBcIsWgdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTYXVzLlwiLCAyOiBcIlZhcy5cIiwgMzogXCJLb3YuXCIsIDQ6IFwiQmFsLlwiLCA1OiBcIkdlZy5cIiwgNjogXCJCaXLFvi5cIiwgNzogXCJMaWVwLlwiLCA4OiBcIlJ1Z3AuXCIsIDk6IFwiUnVncy5cIiwgMTA6IFwiU2FwbC5cIiwgMTE6IFwiTGFwa3IuXCIsIDEyOiBcIkdydW9kLlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLFoGlhbmllblwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidmlcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJDTlwiLCBtbzogXCJUMlwiLCB0dTogXCJUM1wiLCB3ZTogXCJUNFwiLCB0aDogXCJUNVwiLCBmcjogXCJUNlwiLCBzYTogXCJUN1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJUSEcgMVwiLCAyOiBcIlRIRyAyXCIsIDM6IFwiVEhHIDNcIiwgNDogXCJUSEcgNFwiLCA1OiBcIlRIRyA1XCIsIDY6IFwiVEhHIDZcIiwgNzogXCJUSEcgN1wiLCA4OiBcIlRIRyA4XCIsIDk6IFwiVEhHIDlcIiwgMTA6IFwiVEhHIDEwXCIsIDExOiBcIlRIRyAxMVwiLCAxMjogXCJUSEcgMTJcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSMO0bSBuYXlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiblwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuCmsOCmrOCmv1wiLCBtbzogXCLgprjgp4vgpq5cIiwgdHU6IFwi4Kau4KaZ4KeN4KaX4KayXCIsIHdlOiBcIuCmrOCngeCmp1wiLCB0aDogXCLgpqzgp4PgprngpoNcIiwgZnI6IFwi4Ka24KeB4KaV4KeN4KawXCIsIHNhOiBcIuCmtuCmqOCmv1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLgppzgpr7gpqjgp4FcIiwgMjogXCLgpqvgp4fgpqzgp43gprDgp4FcIiwgMzogXCLgpq7gpr7gprDgp43gpppcIiwgNDogXCLgpo/gpqrgp43gprDgpr/gprJcIiwgNTogXCLgpq7gp4dcIiwgNjogXCLgppzgp4HgpqhcIiwgNzogXCLgppzgp4HgprLgpr7gpodcIiwgODogXCLgpobgppfgprjgp43gpp9cIiwgOTogXCLgprjgp4fgpqrgp43gpp/gp4dcIiwgMTA6IFwi4KaF4KaV4KeN4Kaf4KeLXCIsIDExOiBcIuCmqOCmreCnh1wiLCAxMjogXCLgpqHgpr/gprjgp4dcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4KaG4KacXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJiZ1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcItC90LRcIiwgbW86IFwi0L/QvVwiLCB0dTogXCLQstGCXCIsIHdlOiBcItGB0YBcIiwgdGg6IFwi0YfRglwiLCBmcjogXCLQv9GCXCIsIHNhOiBcItGB0LFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0Y/QvdGDLlwiLCAyOiBcItGE0LXQsi5cIiwgMzogXCLQvNCw0YDRglwiLCA0OiBcItCw0L/RgC5cIiwgNTogXCLQvNCw0LlcIiwgNjogXCLRjtC90LhcIiwgNzogXCLRjtC70LhcIiwgODogXCLQsNCy0LMuXCIsIDk6IFwi0YHQtdC/LlwiLCAxMDogXCLQvtC60YIuXCIsIDExOiBcItC90L7QtS5cIiwgMTI6IFwi0LTQtdC6LlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQtNC90LXRgVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaHJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJOZVwiLCBtbzogXCJQb1wiLCB0dTogXCJVbFwiLCB3ZTogXCJTclwiLCB0aDogXCLEjGVcIiwgZnI6IFwiUGVcIiwgc2E6IFwiU3VcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiU2lqXCIsIDI6IFwiVmVsXCIsIDM6IFwiT8W+dVwiLCA0OiBcIlRyYVwiLCA1OiBcIlN2aVwiLCA2OiBcIkxpcFwiLCA3OiBcIlNycFwiLCA4OiBcIktvbFwiLCA5OiBcIlJ1alwiLCAxMDogXCJMaXNcIiwgMTE6IFwiU3R1XCIsIDEyOiBcIlByb1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eS5cIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiZGFuYXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImFyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcItin2YTYo9it2K9cIiwgbW86IFwi2KfZhNin2KvZhtmK2YZcIiwgdHU6IFwi2KfZhNir2YTYp9ir2KfYoVwiLCB3ZTogXCLYp9mE2KfYsdio2LnYp9ihXCIsIHRoOiBcItin2YTYrtmF2YrYs1wiLCBmcjogXCLYp9mE2KzZhdi52KlcIiwgc2E6IFwi2KfZhNiz2KjYqlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi2YrZhtin2YrYsVwiLCAyOiBcItmB2KjYsdin2YrYsVwiLCAzOiBcItmF2KfYsdizXCIsIDQ6IFwi2KfYqNix2YrZhFwiLCA1OiBcItmF2KfZitmIXCIsIDY6IFwi2YrZiNmG2YrZiFwiLCA3OiBcItmK2YjZhNmK2YhcIiwgODogXCLYo9i62LPYt9izXCIsIDk6IFwi2LPYqNiq2YXYqNixXCIsIDEwOiBcItij2YPYqtmI2KjYsVwiLCAxMTogXCLZhtmI2YHZhdio2LFcIiwgMTI6IFwi2K/Zitiz2YXYqNixXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItin2YTZitmI2YVcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic2FcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlzXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwic3VuXCIsIG1vOiBcIm3DoW5cIiwgdHU6IFwiw75yaVwiLCB3ZTogXCJtacOwXCIsIHRoOiBcImZpbVwiLCBmcjogXCJmw7ZzXCIsIHNhOiBcImxhdVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJqYW5cIiwgMjogXCJmZWJcIiwgMzogXCJtYXJcIiwgNDogXCJhcHJcIiwgNTogXCJtYcOtXCIsIDY6IFwiasO6blwiLCA3OiBcImrDumxcIiwgODogXCLDoWfDulwiLCA5OiBcInNlcFwiLCAxMDogXCJva3RcIiwgMTE6IFwibsOzdlwiLCAxMjogXCJkZXNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiw40gZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0TG9jYWxlT3B0aW9ucyhsb2NhbGU6IHN0cmluZyk6IElNeU9wdGlvbnMge1xyXG4gICAgICAgIGlmIChsb2NhbGUgJiYgdGhpcy5sb2NhbGVzLmhhc093blByb3BlcnR5KGxvY2FsZSkpIHtcclxuICAgICAgICAgICAgLy8gVXNlciBnaXZlbiBsb2NhbGVcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tsb2NhbGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEZWZhdWx0OiBlblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsZXNbXCJlblwiXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIubG9jYWxlLnNlcnZpY2UudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSU15RGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeURhdGVSYW5nZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1vbnRoIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGguaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1vbnRoTGFiZWxzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbW9udGgtbGFiZWxzLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1hcmtlZC1kYXRlcy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1hcmtlZC1kYXRlLmludGVyZmFjZVwiO1xyXG5cclxuY29uc3QgTSA9IFwibVwiO1xyXG5jb25zdCBNTSA9IFwibW1cIjtcclxuY29uc3QgTU1NID0gXCJtbW1cIjtcclxuY29uc3QgREQgPSBcImRkXCI7XHJcbmNvbnN0IFlZWVkgPSBcInl5eXlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFV0aWxTZXJ2aWNlIHtcclxuICAgIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW1wic3VcIiwgXCJtb1wiLCBcInR1XCIsIFwid2VcIiwgXCJ0aFwiLCBcImZyXCIsIFwic2FcIl07XHJcblxyXG4gICAgaXNEYXRlVmFsaWQoZGF0ZVN0cjogc3RyaW5nLCBkYXRlRm9ybWF0OiBzdHJpbmcsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyLCBkaXNhYmxlVW50aWw6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSwgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLCBkaXNhYmxlV2Vla0RheXM6IEFycmF5PHN0cmluZz4sIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlPiwgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscywgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZT4pOiBJTXlEYXRlIHtcclxuICAgICAgICBsZXQgcmV0dXJuRGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICBsZXQgZGF5c0luTW9udGg6IEFycmF5PG51bWJlcj4gPSBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XHJcbiAgICAgICAgbGV0IGlzTW9udGhTdHI6IGJvb2xlYW4gPSBkYXRlRm9ybWF0LmluZGV4T2YoTU1NKSAhPT0gLTE7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvcnM6IEFycmF5PHN0cmluZz4gPSB0aGlzLmdldERhdGVGb3JtYXRTZXBhcmF0b3JzKGRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgICBsZXQgbW9udGg6IG51bWJlciA9IGlzTW9udGhTdHIgPyB0aGlzLnBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgTU1NLCBtb250aExhYmVscykgOiB0aGlzLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgTU0pO1xyXG4gICAgICAgIGlmIChpc01vbnRoU3RyICYmIG1vbnRoTGFiZWxzW21vbnRoXSkge1xyXG4gICAgICAgICAgICBkYXRlRm9ybWF0ID0gdGhpcy5jaGFuZ2VEYXRlRm9ybWF0KGRhdGVGb3JtYXQsIG1vbnRoTGFiZWxzW21vbnRoXS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZVN0ci5sZW5ndGggIT09IGRhdGVGb3JtYXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5pbmRleE9mKHNlcGFyYXRvcnNbMF0pICE9PSBkYXRlU3RyLmluZGV4T2Yoc2VwYXJhdG9yc1swXSkgfHwgZGF0ZUZvcm1hdC5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSAhPT0gZGF0ZVN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzWzFdKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRheTogbnVtYmVyID0gdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIEREKTtcclxuICAgICAgICBsZXQgeWVhcjogbnVtYmVyID0gdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIFlZWVkpO1xyXG5cclxuICAgICAgICBpZiAobW9udGggIT09IC0xICYmIGRheSAhPT0gLTEgJiYgeWVhciAhPT0gLTEpIHtcclxuICAgICAgICAgICAgaWYgKHllYXIgPCBtaW5ZZWFyIHx8IHllYXIgPiBtYXhZZWFyIHx8IG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeWVhciwgbW9udGg6IG1vbnRoLCBkYXk6IGRheX07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkRGF5KGRhdGUsIG1pblllYXIsIG1heFllYXIsIGRpc2FibGVVbnRpbCwgZGlzYWJsZVNpbmNlLCBkaXNhYmxlV2Vla2VuZHMsIGRpc2FibGVXZWVrRGF5cywgZGlzYWJsZURheXMsIGRpc2FibGVEYXRlUmFuZ2VzLCBlbmFibGVEYXlzKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh5ZWFyICUgNDAwID09PSAwIHx8ICh5ZWFyICUgMTAwICE9PSAwICYmIHllYXIgJSA0ID09PSAwKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0luTW9udGhbMV0gPSAyOTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRheSA8IDEgfHwgZGF5ID4gZGF5c0luTW9udGhbbW9udGggLSAxXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFZhbGlkIGRhdGVcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVGb3JtYXRTZXBhcmF0b3JzKGRhdGVGb3JtYXQ6IHN0cmluZyk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBkYXRlRm9ybWF0Lm1hdGNoKC9bXihkbXkpXXsxLH0vZyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRGF0ZUZvcm1hdChkYXRlRm9ybWF0OiBzdHJpbmcsIGxlbjogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbXA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBtcCArPSBNO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdC5yZXBsYWNlKE1NTSwgbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW9udGhMYWJlbFZhbGlkKG1vbnRoTGFiZWw6IHN0cmluZywgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgPSAxOyBrZXkgPD0gMTI7IGtleSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChtb250aExhYmVsLnRvTG93ZXJDYXNlKCkgPT09IG1vbnRoTGFiZWxzW2tleV0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNZZWFyTGFiZWxWYWxpZCh5ZWFyTGFiZWw6IG51bWJlciwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh5ZWFyTGFiZWwgPj0gbWluWWVhciAmJiB5ZWFyTGFiZWwgPD0gbWF4WWVhcikge1xyXG4gICAgICAgICAgICByZXR1cm4geWVhckxhYmVsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVTdHJpbmc6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHBvczogbnVtYmVyID0gdGhpcy5nZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQsIGRhdGVQYXJ0KTtcclxuICAgICAgICBpZiAocG9zICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWU6IHN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKHBvcywgcG9zICsgZGF0ZVBhcnQubGVuZ3RoKTtcclxuICAgICAgICAgICAgaWYgKCEvXlxcZCskLy50ZXN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBtb250aExhYmVsOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGxldCBzdGFydDogbnVtYmVyID0gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICAgICAgICBpZiAoZGF0ZUZvcm1hdC5zdWJzdHIoZGF0ZUZvcm1hdC5sZW5ndGggLSAzKSA9PT0gTU1NKSB7XHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWwgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhzdGFydCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZW5kOiBudW1iZXIgPSBkYXRlU3RyaW5nLmluZGV4T2YoZGF0ZUZvcm1hdC5jaGFyQXQoc3RhcnQgKyBkYXRlUGFydC5sZW5ndGgpLCBzdGFydCk7XHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWwgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNNb250aExhYmVsVmFsaWQobW9udGhMYWJlbCwgbW9udGhMYWJlbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdC5pbmRleE9mKGRhdGVQYXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURlZmF1bHRNb250aChtb250aFN0cmluZzogc3RyaW5nKTogSU15TW9udGgge1xyXG4gICAgICAgIGxldCBtb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICBpZiAobW9udGhTdHJpbmcgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNwbGl0ID0gbW9udGhTdHJpbmcuc3BsaXQobW9udGhTdHJpbmcubWF0Y2goL1teMC05XS8pWzBdKTtcclxuICAgICAgICAgICAgbW9udGgubW9udGhOYnIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFswXSkgOiBwYXJzZUludChzcGxpdFsxXSk7XHJcbiAgICAgICAgICAgIG1vbnRoLnllYXIgPSBzcGxpdFswXS5sZW5ndGggPT09IDIgPyBwYXJzZUludChzcGxpdFsxXSkgOiBwYXJzZUludChzcGxpdFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtb250aDtcclxuICAgIH1cclxuXHJcbiAgICBpc0Rpc2FibGVkRGF5KGRhdGU6IElNeURhdGUsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyLCBkaXNhYmxlVW50aWw6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSwgZGlzYWJsZVdlZWtlbmRzOiBib29sZWFuLCBkaXNhYmxlV2Vla0RheXM6IEFycmF5PHN0cmluZz4sIGRpc2FibGVEYXlzOiBBcnJheTxJTXlEYXRlPiwgZGlzYWJsZURhdGVSYW5nZXM6IEFycmF5PElNeURhdGVSYW5nZT4sIGVuYWJsZURheXM6IEFycmF5PElNeURhdGU+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChsZXQgZSBvZiBlbmFibGVEYXlzKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnllYXIgPT09IGRhdGUueWVhciAmJiBlLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGUuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZG4gPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKGRhdGUueWVhciA8IG1pblllYXIgJiYgZGF0ZS5tb250aCA9PT0gMTIgfHwgZGF0ZS55ZWFyID4gbWF4WWVhciAmJiBkYXRlLm1vbnRoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGVNczogbnVtYmVyID0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJiBkYXRlTXMgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiYgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVTaW5jZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzYWJsZVdlZWtlbmRzKSB7XHJcbiAgICAgICAgICAgIGlmIChkbiA9PT0gMCB8fCBkbiA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXNhYmxlV2Vla0RheXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB3ZCBvZiBkaXNhYmxlV2Vla0RheXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkbiA9PT0gdGhpcy5nZXRXZWVrZGF5SW5kZXgod2QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGQgb2YgZGlzYWJsZURheXMpIHtcclxuICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZCBvZiBkaXNhYmxlRGF0ZVJhbmdlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmJlZ2luKSAmJiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuZW5kKSAmJiBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZC5iZWdpbikgJiYgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTWFya2VkRGF0ZShkYXRlOiBJTXlEYXRlLCBtYXJrZWREYXRlczogQXJyYXk8SU15TWFya2VkRGF0ZXM+LCBtYXJrV2Vla2VuZHM6IElNeU1hcmtlZERhdGUpOiBJTXlNYXJrZWREYXRlIHtcclxuICAgICAgICBmb3IgKGxldCBtZCBvZiBtYXJrZWREYXRlcykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkIG9mIG1kLmRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge21hcmtlZDogdHJ1ZSwgY29sb3I6IG1kLmNvbG9yfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWFya1dlZWtlbmRzICYmIG1hcmtXZWVrZW5kcy5tYXJrZWQpIHtcclxuICAgICAgICAgICAgbGV0IGRheU5iciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICAgICAgICBpZiAoZGF5TmJyID09PSAwIHx8IGRheU5iciA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHttYXJrZWQ6IHRydWUsIGNvbG9yOiBtYXJrV2Vla2VuZHMuY29sb3J9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bWFya2VkOiBmYWxzZSwgY29sb3I6IFwiXCJ9O1xyXG4gICAgfVxyXG5cclxuICAgIGlzSGlnaGxpZ2h0ZWREYXRlKGRhdGU6IElNeURhdGUsIHN1bkhpZ2hsaWdodDogYm9vbGVhbiwgc2F0SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHREYXRlczogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgZGF5TmJyOiBudW1iZXIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgICBpZiAoc3VuSGlnaGxpZ2h0ICYmIGRheU5iciA9PT0gMCB8fCBzYXRIaWdobGlnaHQgJiYgZGF5TmJyID09PSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGhpZ2hsaWdodERhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgKGQuZ2V0RGF5KCkgPT09IDAgPyAtMyA6IDQgLSBkLmdldERheSgpKSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKChkLmdldFRpbWUoKSAtIG5ldyBEYXRlKGQuZ2V0RnVsbFllYXIoKSwgMCwgNCkuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChkYXRlOiBJTXlEYXRlLCBkaXNhYmxlVW50aWw6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2UoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSW5pdGlhbGl6ZWREYXRlKGRhdGU6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZGF0ZS55ZWFyICE9PSAwICYmIGRhdGUubW9udGggIT09IDAgJiYgZGF0ZS5kYXkgIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaXNTYW1lRGF0ZShkMTogSU15RGF0ZSwgZDI6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gZDEueWVhciA9PT0gZDIueWVhciAmJiBkMS5tb250aCA9PT0gZDIubW9udGggJiYgZDEuZGF5ID09PSBkMi5kYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCkuZ2V0VGltZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERheU51bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICByZXR1cm4gZC5nZXREYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrRGF5cygpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrRGF5cztcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrZGF5SW5kZXgod2Q6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtEYXlzLmluZGV4T2Yod2QpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZS50cyIsIi8qXHJcbiAqIFRISVMgSVMgVEVNUE9SQVJZIFRPIFBBVENIIDIuMS4xKyBDb3JlIGJ1Z3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xyXG5pbXBvcnQgeyBfX3BsYXRmb3JtX2Jyb3dzZXJfcHJpdmF0ZV9fIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbnZhciBfX2NvcmVfcHJpdmF0ZV9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb3JlJyk7XHJcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuaWYgKCFfX2NvcmVfcHJpdmF0ZV9fLmhhc093blByb3BlcnR5KCdWaWV3VXRpbHMnKSkge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgX19jb3JlX3ByaXZhdGVfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbn1cclxuXHJcbmlmICghX19jb21waWxlcl9fLl9fY29tcGlsZXJfcHJpdmF0ZV9fKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcclxuICAgICAgICBTZWxlY3Rvck1hdGNoZXI6IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXIsXHJcbiAgICAgICAgQ3NzU2VsZWN0b3I6IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XHJcbmlmIChwYXRjaCkge1xyXG4gICAgX191bml2ZXJzYWxfXy5WaWV3VXRpbHMgPSBfX2NvcmVfcHJpdmF0ZV9fLnZpZXdfdXRpbHM7XHJcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICBfX3VuaXZlcnNhbF9fLlNlbGVjdG9yTWF0Y2hlciA9IF9fY29tcGlsZXJfXy5TZWxlY3Rvck1hdGNoZXJcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG5cdGNvbnN0cnVjdG9yKGFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzLCBwcml2YXRlIGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICB9XHJcbiB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwiLyoqXHJcbiAqIFRoaXMgZmlsZSBhbmQgYG1haW4uYnJvd3Nlci50c2AgYXJlIGlkZW50aWNhbCwgYXQgdGhlIG1vbWVudCghKVxyXG4gKiBCeSBzcGxpdHRpbmcgdGhlc2UsIHlvdSdyZSBhYmxlIHRvIGNyZWF0ZSBsb2dpYywgaW1wb3J0cywgZXRjIHRoYXQgYXJlIFwiUGxhdGZvcm1cIiBzcGVjaWZpYy5cclxuICogSWYgeW91IHdhbnQgeW91ciBjb2RlIHRvIGJlIGNvbXBsZXRlbHkgVW5pdmVyc2FsIGFuZCBkb24ndCBuZWVkIHRoYXRcclxuICogWW91IGNhbiBhbHNvIGp1c3QgaGF2ZSAxIGZpbGUsIHRoYXQgaXMgaW1wb3J0ZWQgaW50byBib3RoXHJcbiAqIGNsaWVudC50cyBhbmQgc2VydmVyLnRzXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTXlEYXRlUGlja2VyTW9kdWxlIH0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlJztcclxuaW1wb3J0IHsgTmF2Q29tcG9uZW50IH0gZnJvbSAnLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250YWN0VXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IFBhZ2VSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQnXHJcblxyXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUsIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtOZzJQYWdpbmF0aW9uTW9kdWxlfSBmcm9tICduZzItcGFnaW5hdGlvbic7XHJcblxyXG4vKipcclxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xyXG4gIGJvb3RzdHJhcDogWyBBcHBDb21wb25lbnQgXSxcclxuICAvKiogT3VyIENvbXBvbmVudHMgKi9cclxuICBkZWNsYXJhdGlvbnM6IFtcclxuXHRBcHBDb21wb25lbnQsXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgTmF2Q29tcG9uZW50LCBcclxuICAgIERyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50LFxyXG4gICAgV29ya3Nob3BzTGlzdENvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wc0NvbXBvbmVudCxcclxuICAgIENvbnRhY3RVc0NvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCxcclxuICAgIFBhZ2VSZWRpcmVjdENvbXBvbmVudCxcclxuICAgIEF1dG9jb21wbGV0ZUNvbXBvbmVudCAgICBcclxuXHRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIC8qKlxyXG4gICAgICogTk9URTogTmVlZHMgdG8gYmUgeW91ciBmaXJzdCBpbXBvcnQgKCEpXHJcbiAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxyXG4gICAgICovXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE15RGF0ZVBpY2tlck1vZHVsZSxcclxuICAgIC8qKlxyXG4gICAgICogdXNpbmcgcm91dGVzXHJcbiAgICAgKi9cclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yUm9vdChbIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyBdKSxcclxuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JDaGlsZCgpLFxyXG4gICAgTmcyUGFnaW5hdGlvbk1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbV29ya3Nob3BSZXBvc2l0b3J5LCBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBDb250YWN0VXNDb21wb25lbnQgfSBmcm9tICcuL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQnXHJcbmltcG9ydCB7IFBhZ2VSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ3dvcmtzaG9wcycsIGNvbXBvbmVudDogV29ya3Nob3BzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy86dGl0bGUvOmlkJywgY29tcG9uZW50OiBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdjb250YWN0JywgY29tcG9uZW50OiBDb250YWN0VXNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwYWdlLXJlZGlyZWN0LzpleHRlcm5hbFVybCcsIGNvbXBvbmVudDogUGFnZVJlZGlyZWN0Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZScsXHJcbiAgaG9zdDogeyAnKGRvY3VtZW50OmNsaWNrKSc6ICdoYW5kbGVDbGljaygkZXZlbnQpJyB9LFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gICAgcHVibGljIHF1ZXJ5ID0gJyc7XHJcbiAgICBwdWJsaWMgY291bnRyaWVzID0gW107XHJcbiAgICBwdWJsaWMgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICBwdWJsaWMgZWxlbWVudFJlZjtcclxuIFxyXG4gICAgY29uc3RydWN0b3IobXlFbGVtZW50OiBFbGVtZW50UmVmLCB3b3Jrc2hvcFJlcG86IFdvcmtzaG9wUmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZiA9IG15RWxlbWVudDtcclxuICAgICAgICBsZXQgbG9jYXRpb25zID0gd29ya3Nob3BSZXBvLmdldExvY2F0aW9ucygpLnRoZW4obG9jID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChsb2NbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5xdWVyeSAhPT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGhpcy5xdWVyeS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIHNlbGVjdChpdGVtKXtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gaXRlbTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KXtcclxuICAgICAgICB2YXIgY2xpY2tlZENvbXBvbmVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB2YXIgaW5zaWRlID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCA9PT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50ID0gY2xpY2tlZENvbXBvbmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH0gd2hpbGUgKGNsaWNrZWRDb21wb25lbnQpO1xyXG4gICAgICAgICBpZighaW5zaWRlKXtcclxuICAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGZyb21EYXRlUGlja2VyT3B0aW9ucztcclxuICBwcml2YXRlIHRvRGF0ZVBpY2tlck9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBmcm9tRGF0ZUxhYmVsOiBzdHJpbmcgPSBcIkZyb20gZGF0ZVwiO1xyXG4gIHByaXZhdGUgdG9EYXRlTGFiZWw6IHN0cmluZyA9IFwiVG8gZGF0ZVwiO1xyXG4gIHByaXZhdGUgcHJldmlvdXNEYXRlO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGcm9tQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRUb0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBwcmV2aW91cyA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICAgIHRoaXMucHJldmlvdXNEYXRlID0geyB5ZWFyOiBwcmV2aW91cy5nZXRGdWxsWWVhcigpLCBtb250aDogcHJldmlvdXMuZ2V0TW9udGgoKSwgZGF5OiBwcmV2aW91cy5nZXREYXRlKCkgfTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mcm9tRGF0ZVBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgbWFya0N1cnJlbnREYXk6IHRydWUsXHJcbiAgICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgbW9udGhTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgZGlzYWJsZVVudGlsOiB0aGlzLnByZXZpb3VzRGF0ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uRnJvbURhdGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgIHZhciBzZWxlY3RlZERhdGUgPSBldmVudC5kYXRlO1xyXG4gICAgdGhpcy50b0RhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxyXG4gICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIGRpc2FibGVVbnRpbDoge1xyXG4gICAgICAgIHllYXI6IHNlbGVjdGVkRGF0ZS55ZWFyLFxyXG4gICAgICAgIG1vbnRoOiBzZWxlY3RlZERhdGUubW9udGgsXHJcbiAgICAgICAgZGF5OiBzZWxlY3RlZERhdGUuZGF5XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEZyb21DaGFuZ2VkLmVtaXQoc2VsZWN0ZWREYXRlKTtcclxuICB9XHJcblxyXG4gIG9uVG9EYXRlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICB2YXIgc2VsZWN0ZWREYXRlID0gZXZlbnQuZGF0ZTtcclxuICAgIHRoaXMuZnJvbURhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkaXNhYmxlVW50aWw6IHRoaXMucHJldmlvdXNEYXRlLFxyXG4gICAgICBkaXNhYmxlU2luY2U6IHtcclxuICAgICAgICB5ZWFyOiBzZWxlY3RlZERhdGUueWVhcixcclxuICAgICAgICBtb250aDogc2VsZWN0ZWREYXRlLm1vbnRoLFxyXG4gICAgICAgIGRheTogc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvQ2hhbmdlZC5lbWl0KHNlbGVjdGVkRGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGRhdGFNb2RlbDogYW55W107XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBASW5wdXQoKSBvcHRpb25OYW1lOiBzdHJpbmc7XHJcbiAgXHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xyXG4gIHByaXZhdGUgc2VsZkNsaWNrOiBib29sZWFuO1xyXG4gIHByaXZhdGUgcGFuZWxPdmVybGF5OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZkNsaWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLnBhbmVsT3ZlcmxheSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbkdsb2JhbCgnZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoIXRoYXQuaXNDb2xsYXBzZWQgJiYgIXRoYXQuc2VsZkNsaWNrICYmICF0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICAgIHRoYXQuaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgXHR0aGlzLnNlbGVjdGlvbkNoYW5nZWQuZW1pdChcImNoYW5nZWRcIik7XHJcbiAgICB9XHJcbiAgICAgIHRoYXQuc2VsZkNsaWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucGFuZWxPdmVybGF5ID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGZDbGljayA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBvdmVybGF5KCkge1xyXG4gICAgdGhpcy5wYW5lbE92ZXJsYXkgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdmktYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGhpZGVOYXZiYXI6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgc2hvd0ZpbHRlcnM6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlRmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9ICF0aGlzLmhpZGVGaWx0ZXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpZGVOYXZiYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlTmF2YmFyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzRHJvcGRvd25Ub2dnbGUuZW1pdCh0aGlzLmhpZGVGaWx0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU5hdmJhcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSAhdGhpcy5oaWRlTmF2YmFyO1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRlRmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlLmVtaXQodGhpcy5oaWRlRmlsdGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSwgSUxvY2F0aW9uLCBJUGhvdG9ncmFwaGVyIH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd3b3Jrc2hvcC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgZnJvbURhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b0RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2NhdGlvbkZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbWluUHJpY2VGaWx0ZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtYXhQcmljZUZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMjtcclxuXHJcbiAgcHVibGljIGNpdGllczogYW55W107XHJcbiAgcHVibGljIGNhdGVnb3JpZXM6IGFueVtdO1xyXG4gIFxyXG4gIC8qKiBhYmVscyBmb3IgZmlsdGVycyAqL1xyXG4gIHB1YmxpYyBjaXR5RHJvcGRvd25MYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBwaG90b2dyYXBoZXJEcm9wZG93bkxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIGNhdGVnb3J5RHJvcGRvd25MYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBmcm9tRGF0ZUxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIHRvRGF0ZUxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgY2hlY2tib3hFbGVtZW50czogTm9kZUxpc3RPZjxFbGVtZW50PjtcclxuXHJcbiAgLyoqIGRhdGUgZmlsdGVycyAqL1xyXG4gIHB1YmxpYyBtaW5Gcm9tRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgbWF4RnJvbURhdGU6IERhdGU7XHJcbiAgcHVibGljIG1pblRvRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgbWF4VG9EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBmcm9tRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgdG9EYXRlOiBEYXRlO1xyXG5cclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5LCBwcml2YXRlIGE6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYTtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZUxvY2F0aW9ucygpO1xyXG4gICAgdGhpcy51cGRhdGVDYXRlZ29yaWVzKCk7XHJcblxyXG4gICAgdGhpcy5jaXR5RHJvcGRvd25MYWJlbCA9IFwiTG9jYXRpb25cIjtcclxuICAgIHRoaXMucGhvdG9ncmFwaGVyRHJvcGRvd25MYWJlbCA9IFwiUGhvdG9ncmFwaGVyXCI7XHJcbiAgICB0aGlzLmNhdGVnb3J5RHJvcGRvd25MYWJlbCA9IFwiQ2F0ZWdvcnlcIjtcclxuICAgIHRoaXMuZnJvbURhdGVMYWJlbCA9IFwiRnJvbVwiO1xyXG4gICAgdGhpcy50b0RhdGVMYWJlbCA9IFwiVG9cIjtcclxuXHJcbiAgICB0aGlzLm1pbkZyb21EYXRlID0gbmV3IERhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUxvY2F0aW9ucygpXHJcbiAge1xyXG4gICAgdGhpcy5jaXRpZXMgPSBbXTtcclxuICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldExvY2F0aW9ucygpLnRoZW4obG9jYXRpb25zID0+IHsgXHJcbiAgICAgIGlmKGxvY2F0aW9ucykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgeCA9IDxJTG9jYXRpb24+bG9jYXRpb25zW2ldO1xyXG4gICAgICAgICAgdGhpcy5jaXRpZXMucHVzaCh7bGFiZWw6eC5uYW1lLCB2YWx1ZTp4LmlkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhdGVnb3JpZXMoKVxyXG4gIHtcclxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0V29ya3Nob3BUeXBlcygpLnRoZW4od1R5cGVzID0+IHsgXHJcbiAgICAgIGlmKHdUeXBlcykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd1R5cGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaCh7bGFiZWw6d1R5cGVzW2ldLCB2YWx1ZTp3VHlwZXNbaV19KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RnJvbURhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSB2YWx1ZTtcclxuXHR0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdGcm9tRGF0ZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLmZyb21EYXRlQ2hhbmdlZC5lbWl0KHRoaXMuZnJvbURhdGUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9EYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLnRvRGF0ZSA9IHZhbHVlO1xyXG5cdHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ1RvRGF0ZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcblx0dGhpcy50b0RhdGVDaGFuZ2VkLmVtaXQodGhpcy50b0RhdGUpO1xyXG4gIH1cclxuICBcclxuICB1cGRhdGVNaW5QcmljZSh2YWx1ZTpudW1iZXIpXHJcbiAge1xyXG4gICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnTWluUHJpY2VGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG4gICAgdGhpcy5taW5QcmljZUZpbHRlckNoYW5nZWQuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHVwZGF0ZU1heFByaWNlKHZhbHVlOm51bWJlcilcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNYXhQcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLm1heFByaWNlRmlsdGVyQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkRmlsdGVycyhpbnB1dE5hbWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICAgIGxldCBzZWxlY3RlZDogc3RyaW5nW10gPSBbXTtcclxuICAgIHRoaXMuY2hlY2tib3hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGlucHV0W25hbWU9JHtpbnB1dE5hbWV9XTpjaGVja2VkYCk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hlY2tib3hFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgeCA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMuY2hlY2tib3hFbGVtZW50c1tpXTtcclxuICAgICAgc2VsZWN0ZWQucHVzaCh4LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZUxvY2F0aW9uTGlzdCh2YWx1ZTogYW55KVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ0xvY2F0aW9uRmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuXHRcclxuICAgIGxldCBsb2NhdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkRmlsdGVycygnbG9jYXRpb24nKTtcclxuICAgIGxldCBsb2NhdGlvbklkTGlzdCA9IFwiXCI7XHJcbiAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgZm9yKGxldCBsb2NhdGlvbiBvZiBsb2NhdGlvbnMpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIWZpcnN0KVxyXG4gICAgICAgICAgICBsb2NhdGlvbklkTGlzdCA9IGxvY2F0aW9uSWRMaXN0ICsgXCIsXCI7XHJcbiAgICAgICAgZmlyc3Q9ZmFsc2U7XHJcbiAgICAgICAgbG9jYXRpb25JZExpc3QgPSBsb2NhdGlvbklkTGlzdCtsb2NhdGlvbjtcclxuICAgIH1cclxuXHQgIFxyXG4gICAgdGhpcy5sb2NhdGlvbkZpbHRlckNoYW5nZWQuZW1pdChsb2NhdGlvbklkTGlzdCk7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZUNhdGVnb3J5TGlzdCh2YWx1ZTogYW55KVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ0NhdGVnb3J5RmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuXHJcbiAgICBsZXQgY2F0ZWdvcmllcyA9IHRoaXMuZ2V0U2VsZWN0ZWRGaWx0ZXJzKCdjYXRlZ29yaWVzJyk7XHJcbiAgICBsZXQgd29ya3Nob3BUeXBlc0xpc3QgPSBcIlwiO1xyXG4gICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgIGZvcihsZXQgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcylcclxuICAgIHtcclxuICAgICAgICBpZighZmlyc3QpXHJcbiAgICAgICAgICAgIHdvcmtzaG9wVHlwZXNMaXN0ID0gd29ya3Nob3BUeXBlc0xpc3QgKyBcIixcIjtcclxuICAgICAgICBmaXJzdD1mYWxzZTtcclxuICAgICAgICB3b3Jrc2hvcFR5cGVzTGlzdCA9IHdvcmtzaG9wVHlwZXNMaXN0K2NhdGVnb3J5O1xyXG4gICAgfVxyXG5cdCAgXHJcbiAgICB0aGlzLmNhdGVnb3J5RmlsdGVyQ2hhbmdlZC5lbWl0KHdvcmtzaG9wVHlwZXNMaXN0KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIi8vIFRoZSBmaWxlIGNvbnRlbnRzIGZvciB0aGUgY3VycmVudCBlbnZpcm9ubWVudCB3aWxsIG92ZXJ3cml0ZSB0aGVzZSBkdXJpbmcgYnVpbGQuXHJcbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cclxuLy8gYHVuZyBidWlsZCAtLWVudj1wcm9kYCB0aGVuIGBlbnZpcm9ubWVudC5wcm9kLnRzYCB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cclxuLy8gVGhlIGxpc3Qgb2Ygd2hpY2ggZW52IG1hcHMgdG8gd2hpY2ggZmlsZSBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXItY2xpLmpzb25gLlxyXG5cclxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xyXG4gIHByb2R1Y3Rpb246IGZhbHNlXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCIvLyBUaGlzIGZpbGUgaW5jbHVkZXMgcG9seWZpbGxzIG5lZWRlZCBieSBBbmd1bGFyIDIgYW5kIGlzIGxvYWRlZCBiZWZvcmVcclxuLy8gdGhlIGFwcC4gWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cclxuaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCc7XHJcblxyXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcG9seWZpbGxzLnRzIiwiLyoqXHJcbiAqIFNlcnZlci1zaWRlIHJvdXRlcy4gT25seSB0aGUgbGlzdGVkIHJvdXRlcyBzdXBwb3J0IGh0bWw1cHVzaHN0YXRlLlxyXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxyXG4gKlxyXG4gKiBJbmRleCAoLykgcm91dGUgZG9lcyBub3QgaGF2ZSB0byBiZSBsaXN0ZWQgaGVyZS5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXHJcbiAqICdob21lJywgJ2Fib3V0J1xyXG4gKiBdO1xyXG4gKiovXHJcbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4naG9tZScsICd3b3Jrc2hvcHMnLCdwaG90b2dyYXBoeS13b3Jrc2hvcC1kZXRhaWxzLzp0aXRsZS86aWQnLCdjb250YWN0JywncGFnZS1yZWRpcmVjdC86ZXh0ZXJuYWxVcmwnXHJcbl07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIucm91dGVzLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm15ZHBcXFwiIFtuZ1N0eWxlXT1cXFwieyd3aWR0aCc6IG9wdHMuc2hvd0lucHV0RmllbGQgPyBvcHRzLndpZHRoIDogbnVsbCwgJ2JvcmRlcic6IG9wdHMuaW5saW5lID8gJ25vbmUnIDogbnVsbH1cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3Rpb25ncm91cFxcXCIgKm5nSWY9XFxcIiFvcHRzLmlubGluZVxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgKm5nSWY9XFxcIm9wdHMuc2hvd0lucHV0RmllbGRcXFwiICNpbnB1dEJveEVsIG5ndHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInNlbGVjdGlvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsSW5wdXRGaWVsZFxcXCIgKGNsaWNrKT1cXFwib3B0cy5vcGVuU2VsZWN0b3JPbklucHV0Q2xpY2smJiFvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvcGVuQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnaW52YWxpZGRhdGUnOiBpbnZhbGlkRGF0ZSYmb3B0cy5pbmRpY2F0ZUludmFsaWREYXRlLCAnaW5wdXRub3RlZGl0YWJsZSc6IG9wdHMub3BlblNlbGVjdG9yT25JbnB1dENsaWNrJiYhb3B0cy5lZGl0YWJsZURhdGVGaWVsZCwgJ3NlbGVjdGlvbmRpc2FibGVkJzogb3B0cy5jb21wb25lbnREaXNhYmxlZH1cXFwiXFxyXFxuICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcInt7cGxhY2Vob2xkZXJ9fVxcXCIgW25nU3R5bGVdPVxcXCJ7J2hlaWdodCc6IG9wdHMuaGVpZ2h0LCAnZm9udC1zaXplJzogb3B0cy5zZWxlY3Rpb25UeHRGb250U2l6ZX1cXFwiIFtuZ01vZGVsXT1cXFwic2VsZWN0aW9uRGF5VHh0XFxcIiAobmdNb2RlbENoYW5nZSk9XFxcIm9uVXNlckRhdGVJbnB1dCgkZXZlbnQpXFxcIiBbdmFsdWVdPVxcXCJzZWxlY3Rpb25EYXlUeHRcXFwiIChrZXl1cCk9XFxcIm9uQ2xvc2VTZWxlY3RvcigkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgICAgIChmb2N1cyk9XFxcIm9wdHMuZWRpdGFibGVEYXRlRmllbGQmJm9uRm9jdXNJbnB1dCgkZXZlbnQpXFxcIiAoYmx1cik9XFxcIm9wdHMuZWRpdGFibGVEYXRlRmllbGQmJm9uQmx1cklucHV0KCRldmVudClcXFwiIFtkaXNhYmxlZF09XFxcIm9wdHMuY29tcG9uZW50RGlzYWJsZWRcXFwiIFtyZWFkb25seV09XFxcIiFvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIGF1dG9jb3JyZWN0PVxcXCJvZmZcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VsYnRuZ3JvdXBcXFwiIFtzdHlsZS5oZWlnaHRdPVxcXCJvcHRzLmhlaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbERlY3JlYXNlRGF0ZVxcXCIgY2xhc3M9XFxcImJ0bmRlY3JlYXNlXFxcIiAqbmdJZj1cXFwib3B0cy5zaG93RGVjcmVhc2VEYXRlQnRuXFxcIiAoY2xpY2spPVxcXCJvbkRlY3JlYXNlQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRuZGVjcmVhc2VlbmFibGVkJzogIW9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5kZWNyZWFzZWRpc2FibGVkJzogb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmxlZnRib3JkZXJyYWRpdXMnOiAhb3B0cy5zaG93SW5wdXRGaWVsZH1cXFwiIFtkaXNhYmxlZF09XFxcIm9wdHMuY29tcG9uZW50RGlzYWJsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXlkcGljb24gaWNvbi1teWRwbGVmdFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxJbmNyZWFzZURhdGVcXFwiIGNsYXNzPVxcXCJidG5pbmNyZWFzZVxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd0luY3JlYXNlRGF0ZUJ0blxcXCIgKGNsaWNrKT1cXFwib25JbmNyZWFzZUJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bmluY3JlYXNlZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRuaW5jcmVhc2VkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0biYmIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcHJpZ2h0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbENsZWFyRGF0ZVxcXCIgY2xhc3M9XFxcImJ0bmNsZWFyXFxcIiAqbmdJZj1cXFwic2VsZWN0aW9uRGF5VHh0Lmxlbmd0aD4wJiZvcHRzLnNob3dDbGVhckRhdGVCdG5cXFwiIChjbGljayk9XFxcInJlbW92ZUJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bmNsZWFyZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRuY2xlYXJkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0luY3JlYXNlRGF0ZUJ0biYmIW9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0biYmIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcHJlbW92ZVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxPcGVuQ2FsZW5kYXJcXFwiIGNsYXNzPVxcXCJidG5waWNrZXJcXFwiIChjbGljayk9XFxcIm9wZW5CdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5waWNrZXJlbmFibGVkJzogIW9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5waWNrZXJkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0NsZWFyRGF0ZUJ0biYmIW9wdHMuc2hvd0luY3JlYXNlRGF0ZUJ0biYmIW9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0biYmIW9wdHMuc2hvd0lucHV0RmllbGR8fHNlbGVjdGlvbkRheVR4dC5sZW5ndGg9PT0wJiYhb3B0cy5zaG93SW5wdXRGaWVsZH1cXFwiIFtkaXNhYmxlZF09XFxcIm9wdHMuY29tcG9uZW50RGlzYWJsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXlkcGljb24gaWNvbi1teWRwY2FsZW5kYXJcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0b3JcXFwiICNzZWxlY3RvckVsIFtuZ1N0eWxlXT1cXFwieyd3aWR0aCc6IG9wdHMuc2VsZWN0b3JXaWR0aCwgJ2hlaWdodCcgOiBvcHRzLnNlbGVjdG9ySGVpZ2h0LCAnYm90dG9tJzogZ2V0U2VsZWN0b3JUb3BQb3NpdGlvbigpfVxcXCIgKm5nSWY9XFxcInNob3dTZWxlY3Rvcnx8b3B0cy5pbmxpbmVcXFwiIFtteWRwZm9jdXNdPVxcXCJvcHRzLmlubGluZT8nMCc6JzEnXFxcIiBbbmdDbGFzc109XFxcInsnaW5saW5lZHAnOiBvcHRzLmlubGluZSwgJ2FsaWduc2VsZWN0b3JyaWdodCc6IG9wdHMuYWxpZ25TZWxlY3RvclJpZ2h0LCAnc2VsZWN0b3JhcnJvdyc6IG9wdHMuc2hvd1NlbGVjdG9yQXJyb3cmJiFvcHRzLmlubGluZSwgJ3NlbGVjdG9yYXJyb3dsZWZ0Jzogb3B0cy5zaG93U2VsZWN0b3JBcnJvdyYmIW9wdHMuYWxpZ25TZWxlY3RvclJpZ2h0JiYhb3B0cy5pbmxpbmUsICdzZWxlY3RvcmFycm93cmlnaHQnOiBvcHRzLnNob3dTZWxlY3RvckFycm93JiZvcHRzLmFsaWduU2VsZWN0b3JSaWdodCYmIW9wdHMuaW5saW5lfVxcXCIgKGtleXVwKT1cXFwib25DbG9zZVNlbGVjdG9yKCRldmVudClcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImZsb2F0OmxlZnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxQcmV2TW9udGhcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwbGVmdFxcXCIgKGNsaWNrKT1cXFwib25QcmV2TW9udGgoKVxcXCIgW2Rpc2FibGVkXT1cXFwicHJldk1vbnRoRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIXByZXZNb250aERpc2FibGVkLCAnaGVhZGVyYnRuZGlzYWJsZWQnOiBwcmV2TW9udGhEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcm1vbnRodHh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVybGFiZWxidG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW25nQ2xhc3NdPVxcXCJ7J21vbnRobGFiZWwnOiBvcHRzLm1vbnRoU2VsZWN0b3J9XFxcIiAoY2xpY2spPVxcXCJvcHRzLm1vbnRoU2VsZWN0b3ImJm9uU2VsZWN0TW9udGhDbGlja2VkKCRldmVudClcXFwiIHRhYmluZGV4PVxcXCJ7e29wdHMubW9udGhTZWxlY3Rvcj8nMCc6Jy0xJ319XFxcIj57e3Zpc2libGVNb250aC5tb250aFR4dH19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbE5leHRNb250aFxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHByaWdodFxcXCIgKGNsaWNrKT1cXFwib25OZXh0TW9udGgoKVxcXCIgW2Rpc2FibGVkXT1cXFwibmV4dE1vbnRoRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIW5leHRNb250aERpc2FibGVkLCAnaGVhZGVyYnRuZGlzYWJsZWQnOiBuZXh0TW9udGhEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XFxcIm9wdHMuc2hvd1RvZGF5QnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJoZWFkZXJ0b2RheWJ0blxcXCIgKGNsaWNrKT1cXFwib25Ub2RheUNsaWNrZWQoKVxcXCIgW2Rpc2FibGVkXT1cXFwiZGlzYWJsZVRvZGF5QnRuXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVydG9kYXlidG5lbmFibGVkJzogIWRpc2FibGVUb2RheUJ0biwgJ2hlYWRlcnRvZGF5YnRuZGlzYWJsZWQnOiBkaXNhYmxlVG9kYXlCdG59XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXlkcGljb24gaWNvbi1teWRwdG9kYXlcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e29wdHMudG9kYXlCdG5UeHR9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmbG9hdDpyaWdodFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbFByZXZZZWFyXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiIChjbGljayk9XFxcIm9uUHJldlllYXIoKVxcXCIgW2Rpc2FibGVkXT1cXFwicHJldlllYXJEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcmJ0bmVuYWJsZWQnOiAhcHJldlllYXJEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogcHJldlllYXJEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcnllYXJ0eHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJsYWJlbGJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBbbmdDbGFzc109XFxcInsneWVhcmxhYmVsJzogb3B0cy55ZWFyU2VsZWN0b3J9XFxcIiAoY2xpY2spPVxcXCJvcHRzLnllYXJTZWxlY3RvciYmb25TZWxlY3RZZWFyQ2xpY2tlZCgkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwie3tvcHRzLnllYXJTZWxlY3Rvcj8nMCc6Jy0xJ319XFxcIj57e3Zpc2libGVNb250aC55ZWFyfX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsTmV4dFllYXJcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwcmlnaHRcXFwiIChjbGljayk9XFxcIm9uTmV4dFllYXIoKVxcXCIgW2Rpc2FibGVkXT1cXFwibmV4dFllYXJEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcmJ0bmVuYWJsZWQnOiAhbmV4dFllYXJEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogbmV4dFllYXJEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImNhbHRhYmxlXFxcIiAqbmdJZj1cXFwiIXNlbGVjdE1vbnRoJiYhc2VsZWN0WWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRoZWFkPjx0cj48dGggY2xhc3M9XFxcIndlZWtkYXl0aXRsZSB3ZWVrZGF5dGl0bGV3ZWVrbmJyXFxcIiAqbmdJZj1cXFwib3B0cy5zaG93V2Vla051bWJlcnMmJm9wdHMuZmlyc3REYXlPZldlZWs9PT0nbW8nXFxcIj4jPC90aD48dGggY2xhc3M9XFxcIndlZWtkYXl0aXRsZVxcXCIgc2NvcGU9XFxcImNvbFxcXCIgKm5nRm9yPVxcXCJsZXQgZCBvZiB3ZWVrRGF5c1xcXCI+e3tkfX08L3RoPjwvdHI+PC90aGVhZD5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB3IG9mIGRhdGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZGF5Y2VsbCBkYXljZWxsd2Vla25iclxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd1dlZWtOdW1iZXJzJiZvcHRzLmZpcnN0RGF5T2ZXZWVrPT09J21vJ1xcXCI+e3t3LndlZWtOYnJ9fTwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImRheWNlbGxcXFwiICpuZ0Zvcj1cXFwibGV0IGQgb2Ygdy53ZWVrXFxcIiBbbmdDbGFzc109XFxcInsnY3Vycm1vbnRoJzpkLmNtbz09PWN1cnJNb250aElkJiYhZC5kaXNhYmxlZCwgJ3NlbGVjdGVkZGF5JzpzZWxlY3RlZERhdGUuZGF5PT09ZC5kYXRlT2JqLmRheSAmJiBzZWxlY3RlZERhdGUubW9udGg9PT1kLmRhdGVPYmoubW9udGggJiYgc2VsZWN0ZWREYXRlLnllYXI9PT1kLmRhdGVPYmoueWVhciAmJiBkLmNtbz09PWN1cnJNb250aElkLCAnZGlzYWJsZWQnOiBkLmRpc2FibGVkLCAndGFibGVzaW5nbGVkYXknOiBkLmNtbz09PWN1cnJNb250aElkJiYhZC5kaXNhYmxlZH1cXFwiIChjbGljayk9XFxcIiFkLmRpc2FibGVkJiZvbkNlbGxDbGlja2VkKGQpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvbkNlbGxLZXlEb3duKCRldmVudCwgZClcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCJkLm1hcmtlZERhdGUubWFya2VkXFxcIiBjbGFzcz1cXFwibWFya2RhdGVcXFwiIFtuZ1N0eWxlXT1cXFwieydiYWNrZ3JvdW5kLWNvbG9yJzogZC5tYXJrZWREYXRlLmNvbG9yfVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZXZhbHVlXFxcIiBbbmdDbGFzc109XFxcInsncHJldm1vbnRoJzpkLmNtbz09PXByZXZNb250aElkLCdjdXJybW9udGgnOmQuY21vPT09Y3Vyck1vbnRoSWQsJ25leHRtb250aCc6ZC5jbW89PT1uZXh0TW9udGhJZCwnaGlnaGxpZ2h0JzpkLmhpZ2hsaWdodH1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XFxcInsnbWFya2N1cnJkYXknOmQuY3VyckRheSYmb3B0cy5tYXJrQ3VycmVudERheSwgJ2RpbWRheSc6IGQuaGlnaGxpZ2h0ICYmIChkLmNtbz09PXByZXZNb250aElkIHx8IGQuY21vPT09bmV4dE1vbnRoSWQgfHwgZC5kaXNhYmxlZCl9XFxcIj57e2QuZGF0ZU9iai5kYXl9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcIm1vbnRodGFibGVcXFwiICpuZ0lmPVxcXCJzZWxlY3RNb250aFxcXCI+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgbXIgb2YgbW9udGhzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwibW9udGhjZWxsIHRhYmxlc2luZ2xlbW9udGhcXFwiIFtuZ0NsYXNzXT1cXFwieydzZWxlY3RlZG1vbnRoJzogbS5zZWxlY3RlZCwgJ2Rpc2FibGVkJzogbS5kaXNhYmxlZH1cXFwiICpuZ0Zvcj1cXFwibGV0IG0gb2YgbXJcXFwiIChjbGljayk9XFxcIiFtLmRpc2FibGVkJiZvbk1vbnRoQ2VsbENsaWNrZWQobSk7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIiAoa2V5ZG93bik9XFxcIm9uTW9udGhDZWxsS2V5RG93bigkZXZlbnQsIG0pXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9udGh2YWx1ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J21hcmtjdXJybW9udGgnOm0uY3Vyck1vbnRoJiZvcHRzLm1hcmtDdXJyZW50TW9udGh9XFxcIj57e20ubmFtZX19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ5ZWFydGFibGVcXFwiICpuZ0lmPVxcXCJzZWxlY3RZZWFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI1XFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0bmNlbGxcXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuIG15ZHBpY29uIGljb24tbXlkcHVwXFxcIiAoY2xpY2spPVxcXCJvblByZXZZZWFycygkZXZlbnQsIHllYXJzWzBdWzBdLnllYXIpXFxcIiBbZGlzYWJsZWRdPVxcXCJwcmV2WWVhcnNEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J3llYXJjaGFuZ2VidG5lbmFibGVkJzogIXByZXZZZWFyc0Rpc2FibGVkLCAneWVhcmNoYW5nZWJ0bmRpc2FibGVkJzogcHJldlllYXJzRGlzYWJsZWR9XFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCB5ciBvZiB5ZWFyc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInllYXJjZWxsIHRhYmxlc2luZ2xleWVhclxcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlbGVjdGVkeWVhcic6IHkuc2VsZWN0ZWQsICdkaXNhYmxlZCc6IHkuZGlzYWJsZWR9XFxcIiAqbmdGb3I9XFxcImxldCB5IG9mIHlyXFxcIiAoY2xpY2spPVxcXCIheS5kaXNhYmxlZCYmb25ZZWFyQ2VsbENsaWNrZWQoeSk7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIiAoa2V5ZG93bik9XFxcIm9uWWVhckNlbGxLZXlEb3duKCRldmVudCwgeSlcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ5ZWFydmFsdWVcXFwiIFtuZ0NsYXNzXT1cXFwieydtYXJrY3VycnllYXInOnkuY3VyclllYXImJm9wdHMubWFya0N1cnJlbnRZZWFyfVxcXCI+e3t5LnllYXJ9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjVcXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuY2VsbFxcXCIgKGNsaWNrKT1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG4gbXlkcGljb24gaWNvbi1teWRwZG93blxcXCIgKGNsaWNrKT1cXFwib25OZXh0WWVhcnMoJGV2ZW50LCB5ZWFyc1swXVswXS55ZWFyKVxcXCIgW2Rpc2FibGVkXT1cXFwibmV4dFllYXJzRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieyd5ZWFyY2hhbmdlYnRuZW5hYmxlZCc6ICFuZXh0WWVhcnNEaXNhYmxlZCwgJ3llYXJjaGFuZ2VidG5kaXNhYmxlZCc6IG5leHRZZWFyc0Rpc2FibGVkfVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm15ZHAge1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwLFxcclxcbi5teWRwIC5zZWxlY3Rpb25ncm91cCxcXHJcXG4ubXlkcCAuc2VsZWN0aW9uLFxcclxcbi5teWRwIC5zZWxlY3RvcixcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmNhbHRhYmxlLFxcclxcbi5teWRwIC5tb250aHRhYmxlLFxcclxcbi5teWRwIC55ZWFydGFibGUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmNhbHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg2KSB0ZDpmaXJzdC1jaGlsZCxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNCkgdGQ6Zmlyc3QtY2hpbGQsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNykgdGQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNikgdGQ6bGFzdC1jaGlsZCxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNCkgdGQ6bGFzdC1jaGlsZCxcXHJcXG4ubXlkcCAueWVhcnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg3KSB0ZDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRubGVmdGJvcmRlcnJhZGl1cyB7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3Ige1xcclxcbiAgICBtYXJnaW4tdG9wOiAycHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNlbGVjdG9yZmFkZWluIDAuMXM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzZWxlY3RvcmZhZGVpbiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3I6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQUREOEU2O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2VsZWN0b3JmYWRlaW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNlbGVjdG9yZmFkZWluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3cge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzphZnRlcixcXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpiZWZvcmUge1xcclxcbiAgICBib3R0b206IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzphZnRlciB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93OmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0NDQztcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAxMXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93OmZvY3VzOmJlZm9yZSB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNBREQ4RTY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93bGVmdDphZnRlcixcXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvd2xlZnQ6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dyaWdodDphZnRlcixcXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvd3JpZ2h0OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDg2JTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmFsaWduc2VsZWN0b3JyaWdodCB7XFxyXFxuICAgIHJpZ2h0OiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0aW9uZ3JvdXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0aW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaW52YWxpZGRhdGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFERURFO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCA6Oi1tcy1jbGVhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxidG5ncm91cCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgd2lkdGg6IDElO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICBmb250LXNpemU6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXIsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZSxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2Uge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAyNnB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG91dGxpbmU6IDA7XFxyXFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxyXFxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5sZWZ0Ym9yZGVyIHtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyZW5hYmxlZCxcXHJcXG4ubXlkcCAuYnRuY2xlYXJlbmFibGVkLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZWVuYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlZW5hYmxlZCxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG5lbmFibGVkLFxcclxcbi5teWRwIC5oZWFkZXJidG5lbmFibGVkLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuZW5hYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbmRpc2FibGVkLFxcclxcbi5teWRwIC5idG5waWNrZXJkaXNhYmxlZCxcXHJcXG4ubXlkcCAuYnRuY2xlYXJkaXNhYmxlZCxcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2VkaXNhYmxlZCxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2VkaXNhYmxlZCxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG5kaXNhYmxlZCxcXHJcXG4ubXlkcCAuaGVhZGVyYnRuZGlzYWJsZWQsXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5kaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNjU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rpb25kaXNhYmxlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXIsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZSxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2UsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIgdGQge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHRkOm50aC1jaGlsZCgxKSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHRkOm50aC1jaGlsZCgyKSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMykge1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSxcXHJcXG4ubXlkcCAueWVhcnRhYmxlIHtcXHJcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmNhbHRhYmxlLFxcclxcbi5teWRwIC5tb250aHRhYmxlLFxcclxcbi5teWRwIC55ZWFydGFibGUsXFxyXFxuLm15ZHAgLndlZWtkYXl0aXRsZSxcXHJcXG4ubXlkcCAuZGF5Y2VsbCxcXHJcXG4ubXlkcCAubW9udGhjZWxsLFxcclxcbi5teWRwIC55ZWFyY2VsbCB7XFxyXFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuICAgIGNvbG9yOiAjMDAzMzY2O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAud2Vla2RheXRpdGxlLFxcclxcbi5teWRwIC5kYXljZWxsLFxcclxcbi5teWRwIC5tb250aGNlbGwsXFxyXFxuLm15ZHAgLnllYXJjZWxsIHtcXHJcXG4gICAgcGFkZGluZzogNHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIG1heC13aWR0aDogMzZweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLndlZWtkYXl0aXRsZXdlZWtuYnIge1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0JCQjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm1vbnRoY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC55ZWFyY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kYXljZWxsIC5kYXRldmFsdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGF5Y2VsbCAuZGF0ZXZhbHVlIHNwYW4ge1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGF5Y2VsbHdlZWtuYnIge1xcclxcbiAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNDQ0M7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pbmxpbmVkcCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnByZXZtb250aCxcXHJcXG4ubXlkcCAubmV4dG1vbnRoIHtcXHJcXG4gICAgY29sb3I6ICNDQ0M7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kaXNhYmxlZCB7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcclxcbiAgICBjb2xvcjogI0NDQztcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZCRUZFRjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhpZ2hsaWdodCB7XFxyXFxuICAgIGNvbG9yOiAjQzMwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGltZGF5IHtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY3Vycm1vbnRoIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm1hcmtkYXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogNHB4O1xcclxcbiAgICBoZWlnaHQ6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubWFya2N1cnJkYXksXFxyXFxuLm15ZHAgLm1hcmtjdXJybW9udGgsXFxyXFxuLm15ZHAgLm1hcmtjdXJyeWVhciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0ZWRkYXkgLmRhdGV2YWx1ZSxcXHJcXG4ubXlkcCAuc2VsZWN0ZWRtb250aCAubW9udGh2YWx1ZSxcXHJcXG4ubXlkcCAuc2VsZWN0ZWR5ZWFyIC55ZWFydmFsdWUge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4RUJGRkY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmNlbGwge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG4sXFxyXFxuLm15ZHAgLmhlYWRlcmxhYmVsYnRuLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG4ge1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmxhYmVsYnRuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5teWRwLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXIsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZSxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2UsXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bixcXHJcXG4ubXlkcCAuaGVhZGVybW9udGh0eHQsXFxyXFxuLm15ZHAgLmhlYWRlcnllYXJ0eHQsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuIHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDg0cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lciB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcm1vbnRodHh0LFxcclxcbi5teWRwIC5oZWFkZXJ5ZWFydHh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgIG1heC13aWR0aDogNDBweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmNsZWFyOmZvY3VzLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZTpmb2N1cyxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2U6Zm9jdXMsXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcjpmb2N1cyxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG46Zm9jdXMge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjQUREOEU2O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuOmZvY3VzLFxcclxcbi5teWRwIC5tb250aGxhYmVsOmZvY3VzLFxcclxcbi5teWRwIC55ZWFybGFiZWw6Zm9jdXMsXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG46Zm9jdXMge1xcclxcbiAgICBjb2xvcjogI0FERDhFNjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGw6Zm9jdXMsXFxyXFxuLm15ZHAgLm1vbnRoY2VsbDpmb2N1cyxcXHJcXG4ubXlkcCAueWVhcmNlbGw6Zm9jdXMge1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI0NDQztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGNhbGVuZGFyLFxcclxcbi5teWRwIC5pY29uLW15ZHByZW1vdmUge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBsZWZ0LFxcclxcbi5teWRwIC5pY29uLW15ZHByaWdodCxcXHJcXG4ubXlkcCAuaWNvbi1teWRwdXAsXFxyXFxuLm15ZHAgLmljb24tbXlkcGRvd24ge1xcclxcbiAgICBjb2xvcjogIzIyMjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UgLmljb24tbXlkcGxlZnQsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlIC5pY29uLW15ZHByaWdodCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcHRvZGF5IHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgdGFibGUge1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIHRhYmxlIHRkIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgdGFibGUsXFxyXFxuLm15ZHAgdGgsXFxyXFxuLm15ZHAgdGQge1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXJlbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5idG5jbGVhcmVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2VlbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bmVuYWJsZWQ6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFNkU2O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAudGFibGVzaW5nbGVkYXk6aG92ZXIsXFxyXFxuLm15ZHAgLnRhYmxlc2luZ2xlbW9udGg6aG92ZXIsXFxyXFxuLm15ZHAgLnRhYmxlc2luZ2xleWVhcjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tb250aGxhYmVsLFxcclxcbi5teWRwIC55ZWFybGFiZWwsXFxyXFxuLm15ZHAgLmlucHV0bm90ZWRpdGFibGUsXFxyXFxuLm15ZHAgLmRheWNlbGwsXFxyXFxuLm15ZHAgLm1vbnRoY2VsbCxcXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG5lbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAubW9udGhsYWJlbDpob3ZlcixcXHJcXG4ubXlkcCAueWVhcmxhYmVsOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ215ZGF0ZXBpY2tlcic7XFxyXFxuICAgIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTtiYXNlNjQsQUFFQUFBQVBBSUFBQXdCd1IxTlZRaUNNSlhrQUFBRDhBQUFBVkU5VEx6SStJRWhOQUFBQlVBQUFBRlpqYldGdzZVS2Nmd0FBQWFnQUFBSEVZM1owSUFiVi93UUFBQXo4QUFBQUlHWndaMjJLa1pCWkFBQU5IQUFBQzNCbllYTndBQUFBRUFBQURQUUFBQUFJWjJ4NVpxYm43eWNBQUFOc0FBQUZYR2hsWVdRTlgwYkxBQUFJeUFBQUFEWm9hR1ZoQnp3RFdRQUFDUUFBQUFBa2FHMTBlQlhCLy84QUFBa2tBQUFBSUd4dlkyRUdOQVRFQUFBSlJBQUFBQkp0WVhod0FYZ01PZ0FBQ1ZnQUFBQWdibUZ0WlpLVUZnTUFBQWw0QUFBQy9YQnZjM1I5TnVabEFBQU1lQUFBQUhwd2NtVnc1VUVydkFBQUdJd0FBQUNHQUFFQUFBQUtBREFBUGdBQ2JHRjBiZ0FPUkVaTVZBQWFBQVFBQUFBQUFBQUFBUUFBQUFRQUFBQUFBQUFBQVFBQUFBRnNhV2RoQUFnQUFBQUJBQUFBQVFBRUFBUUFBQUFCQUFnQUFRQUdBQUFBQVFBQUFBRUN1QUdRQUFVQUFBSjZBcndBQUFDTUFub0N2QUFBQWVBQU1RRUNBQUFDQUFVREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRkJtUldRQVFPZ0E2QVlEVXY5cUFGb0RVZ0NXQUFBQUFRQUFBQUFBQUFBQUFBVUFBQUFEQUFBQUxBQUFBQVFBQUFGZ0FBRUFBQUFBQUZvQUF3QUJBQUFBTEFBREFBb0FBQUZnQUFRQUxnQUFBQVFBQkFBQkFBRG9Cdi8vQUFEb0FQLy9BQUFBQVFBRUFBQUFBUUFDQUFNQUJBQUZBQVlBQndBQUFRWUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQURBQUFBQUFBWkFBQUFBQUFBQUFIQUFEb0FBQUE2QUFBQUFBQkFBRG9BUUFBNkFFQUFBQUNBQURvQWdBQTZBSUFBQUFEQUFEb0F3QUE2QU1BQUFBRUFBRG9CQUFBNkFRQUFBQUZBQURvQlFBQTZBVUFBQUFHQUFEb0JnQUE2QVlBQUFBSEFBRUFBQUFBQVVFQ2ZRQU9BQXEzQUFBQVpoUUJCUlVyQVJRUEFRWWlKalVSTkQ0Qkh3RVdBVUVLK2dzY0ZoWWNDL29LQVY0T0Mvb0xGZzRCOUE4VUFnejZDZ0FBQVFBQUFBQUJad0o4QUEwQUYwQVVBQUVBQVFGSEFBRUFBVzhBQUFCbUZ4TUNCUllyQVJFVUJpSXZBU1kwUHdFMk1oWUJaUlFnQ2ZvS0N2b0xIQmdDV1A0TURoWUwrZ3NjQy9vTEZnQUFBQUFGQUFEL2FnT2hBMUlBRkFBWUFDZ0FPQUJjQUxkQUVDb2FBZ29GTWlJQ0Jnb05BUUFCQTBkTHNBcFFXRUEvRGd3Q0NnVUdCZ3BsQUFJRUFRUUNBVzBBQVFBRUFRQnJBQUFEQkFBRGF3Z0JCZ0FFQWdZRVh3Y0JCUVVMV0EwQkN3c01TQUFEQXdsWUFBa0pEUWxKRzBCQURnd0NDZ1VHQlFvR2JRQUNCQUVFQWdGdEFBRUFCQUVBYXdBQUF3UUFBMnNJQVFZQUJBSUdCRjhIQVFVRkMxZ05BUXNMREVnQUF3TUpXQUFKQ1EwSlNWbEFHRnRaVmxOUVQweEpSa1EvUENZbUppUVJGUlFYRWc4RkhTc0pBUVlpTHdFbU5EOEJOaklmQVRjMk1oOEJGaFFCSVJFaE56VTBKaXNCSWdZZEFSUVdPd0V5TmlVMU5DWXJBU0lHSFFFVUZqc0JNalkzRVJRR0l5RWlKalVSTkRZN0FUVTBOanNCTWhZZEFUTTFORFk3QVRJV0J4VXpNaFlDMS83aUJRNEdvUVVGR2dVT0JudjNCZzRHR1FYOWF3TVMvTzdYQ2dna0NBb0tDQ1FJQ2dHc0NnZ2pDQW9LQ0NNSUN0Y3NIUHp1SFNvcUhVZzBKU1FsTk5ZMkpDTWxOZ0ZISFNvQk9QN2lCUVdoQmc0RkdnVUZlL2dGQlJvRkR2NXpBanhyb1FnS0NnaWhDQW9LQ0tFSUNnb0lvUWdLQ2l6OU5SMHFLaDBDeXgwcU5pVTBOQ1UyTmlVME5DVTJLZ0FBQUFBUEFBRC9hZ09oQTFJQUF3QUhBQXNBRHdBVEFCY0FHd0FmQUNNQU13QTNBRHNBUHdCUEFITUFtRUNWUVNVQ0hSSkpMU1FERXgwQ1J5RWZBaDBUQ1IxVUd3RVRHUmNOQXdrSUV3bGZHQllNQXdnVkVRY0RCUVFJQlY0VUVBWURCQThMQXdNQkFBUUJYaG9CRWhJZVdDQUJIaDRNU0E0S0FnTUFBQnhZQUJ3Y0RSeEpjbkJ0YW1kbVkyQmRXMVpUVFV4RlJEOCtQVHc3T2prNE56WTFOREV2S1NjaklpRWdIeDRkSEJzYUdSZ1hGaFVVRXhJUkVSRVJFUkVSRVJBaUJSMHJGek0xSXhjek5TTW5NelVqRnpNMUl5Y3pOU01CTXpVakp6TTFJd0V6TlNNbk16VWpBelUwSmljaklnWUhGUlFXTnpNeU5nRXpOU01uTXpVakZ6TTFJemMxTkNZbkl5SUdGeFVVRmpjek1qWTNFUlFHSXlFaUpqVVJORFk3QVRVME5qc0JNaFlkQVRNMU5EWTdBVElXQnhVek1oWkhvYUhGc3JMRm9hSEZzckxGb2FFQm03T3oxckt5QWF5aG9kYXpzOFFNQmlRSENnRU1CaVFIQ2dHYm9hSFdzN1BXb2FFU0NnZ2pCd3dCQ2dnakNBclhMQno4N2gwcUtoMUlOQ1VrSlRUV05pUWpKVFlCUngwcVQ2R2hvU1N5c3JJa29mM0VvZnFoL2NTaEpMSUJNS0VIQ2dFTUJxRUhEQUVLL2lheUpLR2hvV3VoQndvQkRBYWhCd3dCQ2l6OU5SMHFLaDBDeXgwcU5pVTBOQ1UyTmlVME5DVTJLZ0FBQUFILy93QUFBanNCeVFBT0FCRkFEZ0FCQUFGdkFBQUFaaFV5QWdVV0t5VVVCaWNoSWk0QlB3RTJNaDhCRmdJN0ZBLytEQThVQWd6NkNoNEsrZ3FyRGhZQkZCNEwrZ29LK2dzQUFBQUJBQUFBQUFJOEFlMEFEZ0FYUUJRQUFRQUJBVWNBQVFBQmJ3QUFBR1kxRkFJRkZpc0JGQThCQmlJdkFTWTBOak1oTWhZQ093cjZDeHdMK2dzV0RnSDBEaFlCeVE0TCtnc0wrZ3NjRmhZQUFBRUFBUC92QXRRQ2hnQWtBQjVBR3lJWkVBY0VBQUlCUndNQkFnQUNid0VCQUFCbUZCd1VGQVFGR0NzbEZBOEJCaUl2QVFjR0lpOEJKalEvQVNjbU5EOEJOaklmQVRjMk1oOEJGaFFQQVJjV0F0UVBUQkFzRUtTa0VDd1FUQkFRcEtRUUVFd1FMQkNrcEJBc0VFd1BENlNrRDNBV0VFd1BENldsRHc5TUVDd1FwS1FRTEJCTUVCQ2twQkFRVEE4dUQ2U2tEd0FCQUFBQUFRQUFiZHljelY4UFBQVUFDd1BvQUFBQUFOVXNnWlVBQUFBQTFTeUJsZi8vLzJvRDZBTlNBQUFBQ0FBQ0FBQUFBQUFBQUFFQUFBTlMvMm9BQUFQby8vLy8vZ1BvQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFJQStnQUFBRmxBQUFCWlFBQUErZ0FBQU9nQUFBQ08vLy9BanNBQUFNUkFBQUFBQUFBQUNJQVNnRW9BaFlDUEFKa0FxNEFBQUFCQUFBQUNBQjBBQThBQUFBQUFBSUFSQUJVQUhNQUFBQ3BDM0FBQUFBQUFBQUFFZ0RlQUFFQUFBQUFBQUFBTlFBQUFBRUFBQUFBQUFFQURBQTFBQUVBQUFBQUFBSUFCd0JCQUFFQUFBQUFBQU1BREFCSUFBRUFBQUFBQUFRQURBQlVBQUVBQUFBQUFBVUFDd0JnQUFFQUFBQUFBQVlBREFCckFBRUFBQUFBQUFvQUt3QjNBQUVBQUFBQUFBc0FFd0NpQUFNQUFRUUpBQUFBYWdDMUFBTUFBUVFKQUFFQUdBRWZBQU1BQVFRSkFBSUFEZ0UzQUFNQUFRUUpBQU1BR0FGRkFBTUFBUVFKQUFRQUdBRmRBQU1BQVFRSkFBVUFGZ0YxQUFNQUFRUUpBQVlBR0FHTEFBTUFBUVFKQUFvQVZnR2pBQU1BQVFRSkFBc0FKZ0g1UTI5d2VYSnBaMmgwSUNoREtTQXlNREUzSUdKNUlHOXlhV2RwYm1Gc0lHRjFkR2h2Y25NZ1FDQm1iMjUwWld4c2J5NWpiMjF0ZVdSaGRHVndhV05yWlhKU1pXZDFiR0Z5Ylhsa1lYUmxjR2xqYTJWeWJYbGtZWFJsY0dsamEyVnlWbVZ5YzJsdmJpQXhMakJ0ZVdSaGRHVndhV05yWlhKSFpXNWxjbUYwWldRZ1lua2djM1puTW5SMFppQm1jbTl0SUVadmJuUmxiR3h2SUhCeWIycGxZM1F1YUhSMGNEb3ZMMlp2Ym5SbGJHeHZMbU52YlFCREFHOEFjQUI1QUhJQWFRQm5BR2dBZEFBZ0FDZ0FRd0FwQUNBQU1nQXdBREVBTndBZ0FHSUFlUUFnQUc4QWNnQnBBR2NBYVFCdUFHRUFiQUFnQUdFQWRRQjBBR2dBYndCeUFITUFJQUJBQUNBQVpnQnZBRzRBZEFCbEFHd0FiQUJ2QUM0QVl3QnZBRzBBYlFCNUFHUUFZUUIwQUdVQWNBQnBBR01BYXdCbEFISUFVZ0JsQUdjQWRRQnNBR0VBY2dCdEFIa0FaQUJoQUhRQVpRQndBR2tBWXdCckFHVUFjZ0J0QUhrQVpBQmhBSFFBWlFCd0FHa0FZd0JyQUdVQWNnQldBR1VBY2dCekFHa0Fid0J1QUNBQU1RQXVBREFBYlFCNUFHUUFZUUIwQUdVQWNBQnBBR01BYXdCbEFISUFSd0JsQUc0QVpRQnlBR0VBZEFCbEFHUUFJQUJpQUhrQUlBQnpBSFlBWndBeUFIUUFkQUJtQUNBQVpnQnlBRzhBYlFBZ0FFWUFid0J1QUhRQVpRQnNBR3dBYndBZ0FIQUFjZ0J2QUdvQVpRQmpBSFFBTGdCb0FIUUFkQUJ3QURvQUx3QXZBR1lBYndCdUFIUUFaUUJzQUd3QWJ3QXVBR01BYndCdEFBQUFBQUlBQUFBQUFBQUFDZ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUNBRUNBUU1CQkFFRkFRWUJCd0VJQVFrQUNXMTVaSEJ5YVdkb2RBaHRlV1J3YkdWbWRBbHRlV1J3ZEc5a1lYa01iWGxrY0dOaGJHVnVaR0Z5Qm0xNVpIQjFjQWh0ZVdSd1pHOTNiZ3B0ZVdSd2NtVnRiM1psQUFBQUFBQUJBQUgvL3dBUEFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBWUFCZ0FHQUFZQTFML2FnTlMvMnF3QUN3Z3NBQlZXRVZaSUNCTHVBQU9VVXV3QmxOYVdMQTBHN0FvV1dCbUlJcFZXTEFDSldHNUNBQUlBR05qSTJJYklTR3dBRm13QUVNalJMSUFBUUJEWUVJdHNBRXNzQ0JnWmkyd0Fpd2daQ0N3d0ZDd0JDWmFzaWdCQ2tORlkwVlNXMWdoSXlFYmlsZ2dzRkJRV0NHd1FGa2JJTEE0VUZnaHNEaFpXU0N4QVFwRFJXTkZZV1N3S0ZCWUliRUJDa05GWTBVZ3NEQlFXQ0d3TUZrYklMREFVRmdnWmlDS2ltRWdzQXBRV0dBYklMQWdVRmdoc0FwZ0d5Q3dObEJZSWJBMllCdGdXVmxaRzdBQksxbFpJN0FBVUZobFdWa3RzQU1zSUVVZ3NBUWxZV1Fnc0FWRFVGaXdCU05Dc0FZalFoc2hJVm13QVdBdHNBUXNJeUVqSVNCa3NRVmlRaUN3QmlOQ3NRRUtRMFZqc1FFS1E3QUJZRVZqc0FNcUlTQ3dCa01naWlDS3NBRXJzVEFGSmJBRUpsRllZRkFiWVZKWldDTlpJU0N3UUZOWXNBRXJHeUd3UUZranNBQlFXR1ZaTGJBRkxMQUhReXV5QUFJQVEyQkNMYkFHTExBSEkwSWpJTEFBSTBKaHNBSmlackFCWTdBQllMQUZLaTJ3Qnl3Z0lFVWdzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUVTd0FXQXRzQWdzc2djTEFFTkZRaW9oc2dBQkFFTmdRaTJ3Q1N5d0FFTWpSTElBQVFCRFlFSXRzQW9zSUNCRklMQUJLeU93QUVPd0JDVmdJRVdLSTJFZ1pDQ3dJRkJZSWJBQUc3QXdVRml3SUJ1d1FGbFpJN0FBVUZobFdiQURKU05oUkVTd0FXQXRzQXNzSUNCRklMQUJLeU93QUVPd0JDVmdJRVdLSTJFZ1pMQWtVRml3QUJ1d1FGa2pzQUJRV0dWWnNBTWxJMkZFUkxBQllDMndEQ3dnc0FBalFySUxDZ05GV0NFYkl5RlpLaUV0c0Ewc3NRSUNSYkJrWVVRdHNBNHNzQUZnSUNDd0RFTktzQUJRV0NDd0RDTkNXYkFOUTBxd0FGSllJTEFOSTBKWkxiQVBMQ0N3RUdKbXNBRmpJTGdFQUdPS0kyR3dEa05nSUlwZ0lMQU9JMElqTGJBUUxFdFVXTEVFWkVSWkpMQU5aU040TGJBUkxFdFJXRXRUV0xFRVpFUlpHeUZaSkxBVFpTTjRMYkFTTExFQUQwTlZXTEVQRDBPd0FXRkNzQThyV2JBQVE3QUNKVUt4REFJbFFyRU5BaVZDc0FFV0l5Q3dBeVZRV0xFQkFFTmdzQVFsUW9xS0lJb2pZYkFPS2lFanNBRmhJSW9qWWJBT0tpRWJzUUVBUTJDd0FpVkNzQUlsWWJBT0tpRlpzQXhEUjdBTlEwZGdzQUppSUxBQVVGaXdRR0JaWnJBQll5Q3dDME5qdUFRQVlpQ3dBRkJZc0VCZ1dXYXdBV05nc1FBQUV5TkVzQUZEc0FBK3NnRUJBVU5nUWkyd0V5d0FzUUFDUlZSWXNBOGpRaUJGc0FzalFyQUtJN0FCWUVJZ1lMQUJZYlVRRUFFQURnQkNRb3Bnc1JJR0s3QnlLeHNpV1Myd0ZDeXhBQk1yTGJBVkxMRUJFeXN0c0JZc3NRSVRLeTJ3Rnl5eEF4TXJMYkFZTExFRUV5c3RzQmtzc1FVVEt5MndHaXl4QmhNckxiQWJMTEVIRXlzdHNCd3NzUWdUS3kyd0hTeXhDUk1yTGJBZUxBQ3dEU3V4QUFKRlZGaXdEeU5DSUVXd0N5TkNzQW9qc0FGZ1FpQmdzQUZodFJBUUFRQU9BRUpDaW1DeEVnWXJzSElyR3lKWkxiQWZMTEVBSGlzdHNDQXNzUUVlS3kyd0lTeXhBaDRyTGJBaUxMRURIaXN0c0NNc3NRUWVLeTJ3SkN5eEJSNHJMYkFsTExFR0hpc3RzQ1lzc1FjZUt5MndKeXl4Q0I0ckxiQW9MTEVKSGlzdHNDa3NJRHl3QVdBdHNDb3NJR0N3RUdBZ1F5T3dBV0JEc0FJbFliQUJZTEFwS2lFdHNDc3NzQ29yc0NvcUxiQXNMQ0FnUnlBZ3NBdERZN2dFQUdJZ3NBQlFXTEJBWUZsbXNBRmpZQ05oT0NNZ2lsVllJRWNnSUxBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlkyQWpZVGdiSVZrdHNDMHNBTEVBQWtWVVdMQUJGckFzS3JBQkZUQWJJbGt0c0M0c0FMQU5LN0VBQWtWVVdMQUJGckFzS3JBQkZUQWJJbGt0c0M4c0lEV3dBV0F0c0RBc0FMQUJSV080QkFCaUlMQUFVRml3UUdCWlpyQUJZN0FCSzdBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlk3QUJLN0FBRnJRQUFBQUFBRVErSXppeEx3RVZLaTJ3TVN3Z1BDQkhJTEFMUTJPNEJBQmlJTEFBVUZpd1FHQlpackFCWTJDd0FFTmhPQzJ3TWl3dUZ6d3RzRE1zSUR3Z1J5Q3dDME5qdUFRQVlpQ3dBRkJZc0VCZ1dXYXdBV05nc0FCRFliQUJRMk00TGJBMExMRUNBQllsSUM0Z1I3QUFJMEt3QWlWSmlvcEhJMGNqWVNCWVloc2hXYkFCSTBLeU13RUJGUlFxTGJBMUxMQUFGckFFSmJBRUpVY2pSeU5oc0FsREsyV0tMaU1nSUR5S09DMndOaXl3QUJhd0JDV3dCQ1VnTGtjalJ5TmhJTEFFSTBLd0NVTXJJTEJnVUZnZ3NFQlJXTE1DSUFNZ0c3TUNKZ01hV1VKQ0l5Q3dDRU1naWlOSEkwY2pZU05HWUxBRVE3QUNZaUN3QUZCWXNFQmdXV2F3QVdOZ0lMQUJLeUNLaW1FZ3NBSkRZR1Fqc0FORFlXUlFXTEFDUTJFYnNBTkRZRm13QXlXd0FtSWdzQUJRV0xCQVlGbG1zQUZqWVNNZ0lMQUVKaU5HWVRnYkk3QUlRMGF3QWlXd0NFTkhJMGNqWVdBZ3NBUkRzQUppSUxBQVVGaXdRR0JaWnJBQlkyQWpJTEFCS3lPd0JFTmdzQUVyc0FVbFliQUZKYkFDWWlDd0FGQllzRUJnV1dhd0FXT3dCQ1poSUxBRUpXQmtJN0FESldCa1VGZ2hHeU1oV1NNZ0lMQUVKaU5HWVRoWkxiQTNMTEFBRmlBZ0lMQUZKaUF1UnlOSEkyRWpQRGd0c0Rnc3NBQVdJTEFJSTBJZ0lDQkdJMGV3QVNzallUZ3RzRGtzc0FBV3NBTWxzQUlsUnlOSEkyR3dBRlJZTGlBOEl5RWJzQUlsc0FJbFJ5TkhJMkVnc0FVbHNBUWxSeU5ISTJHd0JpV3dCU1ZKc0FJbFlia0lBQWdBWTJNaklGaGlHeUZaWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUNNdUl5QWdQSW80SXlGWkxiQTZMTEFBRmlDd0NFTWdMa2NqUnlOaElHQ3dJR0Jtc0FKaUlMQUFVRml3UUdCWlpyQUJZeU1nSUR5S09DMndPeXdqSUM1R3NBSWxSbEpZSUR4WkxyRXJBUlFyTGJBOExDTWdMa2F3QWlWR1VGZ2dQRmt1c1NzQkZDc3RzRDBzSXlBdVJyQUNKVVpTV0NBOFdTTWdMa2F3QWlWR1VGZ2dQRmt1c1NzQkZDc3RzRDRzc0RVckl5QXVSckFDSlVaU1dDQThXUzZ4S3dFVUt5MndQeXl3Tml1S0lDQThzQVFqUW9vNEl5QXVSckFDSlVaU1dDQThXUzZ4S3dFVUs3QUVReTZ3S3lzdHNFQXNzQUFXc0FRbHNBUW1JQzVISTBjalliQUpReXNqSUR3Z0xpTTRzU3NCRkNzdHNFRXNzUWdFSlVLd0FCYXdCQ1d3QkNVZ0xrY2pSeU5oSUxBRUkwS3dDVU1ySUxCZ1VGZ2dzRUJSV0xNQ0lBTWdHN01DSmdNYVdVSkNJeUJIc0FSRHNBSmlJTEFBVUZpd1FHQlpackFCWTJBZ3NBRXJJSXFLWVNDd0FrTmdaQ093QTBOaFpGQllzQUpEWVJ1d0EwTmdXYkFESmJBQ1lpQ3dBRkJZc0VCZ1dXYXdBV05oc0FJbFJtRTRJeUE4SXpnYklTQWdSaU5Ic0FFckkyRTRJVm14S3dFVUt5MndRaXl3TlNzdXNTc0JGQ3N0c0VNc3NEWXJJU01nSUR5d0JDTkNJeml4S3dFVUs3QUVReTZ3S3lzdHNFUXNzQUFWSUVld0FDTkNzZ0FCQVJVVUV5NndNU290c0VVc3NBQVZJRWV3QUNOQ3NnQUJBUlVVRXk2d01Tb3RzRVlzc1FBQkZCT3dNaW90c0Vjc3NEUXFMYkJJTExBQUZrVWpJQzRnUm9vallUaXhLd0VVS3kyd1NTeXdDQ05Dc0VnckxiQktMTElBQUVFckxiQkxMTElBQVVFckxiQk1MTElCQUVFckxiQk5MTElCQVVFckxiQk9MTElBQUVJckxiQlBMTElBQVVJckxiQlFMTElCQUVJckxiQlJMTElCQVVJckxiQlNMTElBQUQ0ckxiQlRMTElBQVQ0ckxiQlVMTElCQUQ0ckxiQlZMTElCQVQ0ckxiQldMTElBQUVBckxiQlhMTElBQVVBckxiQllMTElCQUVBckxiQlpMTElCQVVBckxiQmFMTElBQUVNckxiQmJMTElBQVVNckxiQmNMTElCQUVNckxiQmRMTElCQVVNckxiQmVMTElBQUQ4ckxiQmZMTElBQVQ4ckxiQmdMTElCQUQ4ckxiQmhMTElCQVQ4ckxiQmlMTEEzS3k2eEt3RVVLeTJ3WXl5d055dXdPeXN0c0dRc3NEY3JzRHdyTGJCbExMQUFGckEzSzdBOUt5MndaaXl3T0NzdXNTc0JGQ3N0c0djc3NEZ3JzRHNyTGJCb0xMQTRLN0E4S3kyd2FTeXdPQ3V3UFNzdHNHb3NzRGtyTHJFckFSUXJMYkJyTExBNUs3QTdLeTJ3YkN5d09TdXdQQ3N0c0cwc3NEa3JzRDByTGJCdUxMQTZLeTZ4S3dFVUt5MndieXl3T2l1d095c3RzSEFzc0RvcnNEd3JMYkJ4TExBNks3QTlLeTJ3Y2l5ekNRUUNBMFZZSVJzaklWbENLN0FJWmJBREpGQjRzQUVWTUMwQVM3Z0F5RkpZc1FFQmpsbXdBYmtJQUFnQVkzQ3hBQVZDc2dBQkFDcXhBQVZDc3dvQ0FRZ3FzUUFGUXJNT0FBRUlLckVBQmtLNkFzQUFBUUFKS3JFQUIwSzZBRUFBQVFBSktyRURBRVN4SkFHSVVWaXdRSWhZc1FOa1JMRW1BWWhSV0xvSWdBQUJCRUNJWTFSWXNRTUFSRmxaV1ZtekRBSUJEQ3E0QWYrRnNBU05zUUlBUkFBQScpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubXlkcGljb24ge1xcclxcbiAgICBmb250LWZhbWlseTogJ215ZGF0ZXBpY2tlcic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcHJpZ2h0OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwMFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBsZWZ0OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwMVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHB0b2RheTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDJcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwY2FsZW5kYXI6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAzXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcHVwOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwNFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBkb3duOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwNVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHByZW1vdmU6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODA2XFxcIjtcXHJcXG59XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN1Z2dlc3Rpb25zIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOXJlbTsgfVxcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmZpbHRlci1pbnB1dCB7XFxuICBjb2xvcjogIzMzMzMzMzsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuY29udGFjdC11cyB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL2NvbnRhY3QuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgbWFyZ2luLXRvcDogNnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG4gIC5jb250YWN0LXVzIGlucHV0IHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxcbiAgICAuY29udGFjdC11cyBpbnB1dDpyZXF1aXJlZCB7XFxuICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLmNvbnRhY3QtdXMgaDEge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAuY29udGFjdC11cyAubWVzc2FnZSB7XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IH1cXG4gIC5jb250YWN0LXVzIC5tZXNzYWdlLFxcbiAgLmNvbnRhY3QtdXMgLnN1YmplY3Qge1xcbiAgICB3aWR0aDogNjRyZW07IH1cXG5cXG4uc3RhdGljLWluZm8ge1xcbiAgZm9udC1zaXplOiAyLjNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICB3aWR0aDogNjByZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuZm9ybS1ncm91cCAuYWxlcnQge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLm5hbWUtZ3JvdXAsXFxuLm1haWwtbnVtYmVyLWdyb3VwIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLm1lc3NhZ2UtYm94IC5hbGVydCxcXG4uc3ViamVjdC1ib3ggLmFsZXJ0IHtcXG4gIHdpZHRoOiA2MHJlbTsgfVxcblxcbiNtZXNzYWdlIHtcXG4gIGhlaWdodDogMjByZW07XFxuICBmb250LXNpemU6IDEuOHJlbTsgfVxcblxcbi5uZy12YWxpZFtyZXF1aXJlZF0sXFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcXG4gIC8qIGdyZWVuICovIH1cXG5cXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xcbiAgLyogcmVkICovIH1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICB3aWR0aDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTsgfVxcbiAgLnN1Ym1pdC1idG46ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgY3Vyc29yOiBhdXRvOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmRhdGUtcGlja2VyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciBpbnB1dCB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAuMnJlbTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGxhYmVsIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZy10b3A6IC40cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IGdyYXk7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgLmZyb20tZGF0ZSxcXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgLnRvLWRhdGUge1xcbiAgICB3aWR0aDogMTMuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcXG4gICAgaGVpZ2h0OiAzLjRyZW07XFxuICAgIGJvcmRlcjogLjJweCBzb2xpZCAjNDI2NzcxO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC5mcm9tLWRhdGUgaW5wdXQsXFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLnRvLWRhdGUgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgaGVpZ2h0OiAzLjRyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZyb20tZGF0ZSxcXG4gIC50by1kYXRlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaGlkZS1kcm9wZG93biB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRyb3Bkb3duLWxpc3Qge1xcbiAgei1pbmRleDogOTk7XFxuICBwYWRkaW5nOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuN3B4IGdyZXk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzE1NDI0RTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4uZHJvcGRvd24tY29udGFpbmVyIHtcXG4gIHdpZHRoOiA5cmVtOyB9XFxuICAuZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uZGF0YS1saXN0IGlucHV0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBtYXJnaW4tcmlnaHQ6IC44cmVtO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uZGF0YS1saXN0IHNwYW4ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaGVybyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udmlldy1hbGwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyNjE4MUQ7IH1cXG5cXG4ubWFpbi1wYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuLnZpZXctYWxsLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5zdWItaGVhZGluZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHJlbTsgfVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgdG9wOiAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XFxuICB3aWR0aDogMzByZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IGluaXRpYWw7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEud3MtaGVhZGluZyB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnSHVybWVHZW9tZXRyaWNTYW5zMy1SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcblxcbiN3b3Jrc2hvcHMge1xcbiAgcGFkZGluZy10b3A6IDVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgdG9wOiAzMCU7IH1cXG4gIC5idG4ge1xcbiAgICB0b3A6IDNyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMy44cmVtOyB9XFxuICBoZWFkZXIge1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgLmJ0biB7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRvcC1iYXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDb2lueScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5uYXYtbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmZhLWJhcnMge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IC40cmVtO1xcbiAgcGFkZGluZy1yaWdodDogLjRyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG5cXG4uZmlsdGVyLWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLm5hdmJhci10b2dnbGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbm5hdiB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBoZWlnaHQ6IDZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuICBuYXYgaW1nIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMS41cmVtO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgbmF2IC5uYXZiYXItbmF2IGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBuYXYgdWwge1xcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgbmF2IHtcXG4gICAgaGVpZ2h0OiA1cmVtOyB9XFxuICAgIG5hdiB1bCB7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5maWx0ZXItaGVhZGVyIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAycmVtOyB9XFxuICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07IH1cXG4gIC5oaWRlTmF2YmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5hdmJhci1oZWFkZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItbmF2ID4gbGkge1xcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9IH1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTU1cHgpIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcXG4gIG5hdiB1bCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuaGlkZU5hdmJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTsgfVxcbiAgLm5hdmJhci1oZWFkZXIge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYXZiYXItdG9nZ2xlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAubmF2YmFyLW5hdiB7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDcuNXB4OyB9XFxuICAubmF2YmFyLW5hdiA+IGxpIHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLm5hdmJhci1uYXYgPiBsaSA+IGEge1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7IH1cXG4gIC5jb2xsYXBzZS5pbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXFxuLnByb2ZpbGUtaW1nIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMTJyZW07XFxuICAvKmJvcmRlci1yYWRpdXM6IDUwJTsqL1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXG4gIC8qYm9yZGVyOiAzcHggc29saWQgIzE1NDI0RTsqLyB9XFxuXFxuLnByb2ZpbGUtcGhvdG8ge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ucGhvdG9ncmFwaGVyLW5hbWUgaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogIzczNjU2QTsgfVxcblxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24gaDQge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5kZXRhaWwtbG9jYXRpb24ge1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi53ZWJzaXRlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgKi9cXG5kaXYudGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi50YWIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAgIGRpdi50YWIgYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjOyovXFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3MzY1NkE7IH1cXG5cXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXG4udGFiY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzMCwgMjMzLCAwLjU3KTsgfVxcblxcbi5kZXRhaWwtdGFicyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjUlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogNHJlbTsgfVxcblxcbi5kYXktd3JhcHBlcixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtOyB9XFxuXFxuLmRheS13cmFwcGVyIC5sb2NhdGlvbixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIGg0IHtcXG4gIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIHAge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC40cmVtOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIGgzIHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuI0dhbGxlcnkgaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI4cmVtO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgyMCUpO1xcbiAgICAgICAgICBmaWx0ZXI6IHNlcGlhKDIwJSk7IH1cXG5cXG4ud3NkLW5hbWUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBjb2xvcjogIzczNjU2QTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmhpZ2hsaWdodHMge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgd2lkdGg6IDMwJTsgfVxcbiAgLmhpZ2hsaWdodHMgYSB7XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAuaGlnaGxpZ2h0cyBkaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAgIC5oaWdobGlnaHRzIGRpdiBpIHtcXG4gICAgICBjb2xvcjogIzczNjU2QTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud29ya3Nob3AtbGlzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3MtcGFnZXMgL2RlZXAvIHVsLm5nMi1wYWdpbmF0aW9uIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG4gIC53cy1wYWdlcyAvZGVlcC8gdWwubmcyLXBhZ2luYXRpb24gYTpob3ZlciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTsgfVxcblxcbi53cy1wYWdlcyAvZGVlcC8gdWwubmcyLXBhZ2luYXRpb24gbGkuY3VycmVudCB7XFxuICBiYWNrZ3JvdW5kOiAjNzM2NTZBO1xcbiAgYm9yZGVyLXJhZGl1czogMjAlOyB9XFxuXFxuLmVudGl0eSB7XFxuICB3aWR0aDogMzByZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDJyZW07XFxuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMC4ycmVtIDByZW0gIzg4ODg4ODsgfVxcbiAgLmVudGl0eSBpbWcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuXFxuLmlubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctYm90dG9tOiAycmVtOyB9XFxuXFxuaDEubmFtZSB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6ICMyNjE4MUQ7XFxuICBmb250LWZhbWlseTogJ0h1cm1lR2VvbWV0cmljU2FuczMtUmVndWxhcicsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcblxcbi5wcmljZSB7XFxuICBjb2xvcjogIzU5NEI1MDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMXJlbTtcXG4gIGJvdHRvbTogMnJlbTsgfVxcblxcbmhyIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1jb2xvcjogIzU5NEI1MDtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi5kYXRlIHtcXG4gIGNvbG9yOiAjNTk0QjUwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTsgfVxcblxcbi5sb2NhdGlvbiB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgb3BhY2l0eTogMC42OyB9XFxuXFxuLnRydW5jYXRlIHtcXG4gIHdpZHRoOiAyOHJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5lbnRpdHkgLmltYWdlIHtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgd2lkdGg6IDIyLjVyZW07IH1cXG4gIGgxLm5hbWUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmlsdGVycyxcXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZmlsdGVycyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5MHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcXG4gIGxlZnQ6IDVyZW07IH1cXG5cXG4ubGlzdCB7XFxuICB0b3A6IDEwcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZmlsdGVycyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1NDI0RTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gIC5saXN0IHtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5oaWRlRmlsdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8aW5wdXQgaWQ9XFxcImNvdW50cnlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmaWx0ZXItaW5wdXRcXFwiIFsobmdNb2RlbCldPXF1ZXJ5IChrZXl1cCk9ZmlsdGVyKCkgdmFsdWU9XFxcIlR5cGUgYSBsb2NhdGlvblxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdWdnZXN0aW9uc1xcXCIgKm5nSWY9XFxcImZpbHRlcmVkTGlzdC5sZW5ndGggPiAwXFxcIj5cXHJcXG4gICAgICAgIDx1bCAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGZpbHRlcmVkTGlzdFxcXCIgPlxcclxcbiAgICAgICAgICAgIDxzcGFuID5cXHJcXG4gICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2VsZWN0KGl0ZW0pXFxcIj57e2l0ZW19fTwvYT5cXHJcXG4gICAgICAgICAgICA8L3NwYW4+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFjdC11c1xcXCI+XFxyXFxuICAgIDxoMT5MZXQncyBjbGljayB0b2dldGhlciE8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0aWMtaW5mb1xcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5oZWxsb0BwaXhlbGF0ZWRwbGFuZXQuY29tPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1waG9uZS1zcXVhcmVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+NDI1LTk3OS04ODM4PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKVxcXCIgbmFtZT1cXFwiY29udGFjdC1mb3JtXFxcIiAjY29udGFjdEZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZmlyc3QtbmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZuYW1lXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiZm5hbWVcXFwiIG5hbWU9XFxcImZuYW1lXFxcIiAjZmlyc3RuYW1lPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRnVsbCBuYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XFxcImZpcnN0bmFtZS52YWxpZCB8fCBmaXJzdG5hbWUucHJpc3RpbmVcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWUgaXMgcmVxdWlyZWRcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsLW51bWJlci1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZW1haWxcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJlbWFpbElkXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgI2VtYWlsPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWwgYWRkcmVzc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCJlbWFpbC52YWxpZCB8fCBlbWFpbC5wcmlzdGluZVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWwgYWRkcmVzcyBpcyByZXF1aXJlZFxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgc3ViamVjdC1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1YmplY3RcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJzdWJqZWN0VGV4dFxcXCIgbmFtZT1cXFwic3ViamVjdFxcXCIgI3N1YmplY3Q9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3ViamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XFxcInN1YmplY3QudmFsaWQgfHwgc3ViamVjdC5wcmlzdGluZVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBTdWJqZWN0IGlzIHJlcXVpcmVkXFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWVzc2FnZS1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJlcXVpcmVkIHJvd3M9XFxcIjRcXFwiIGNvbHM9XFxcIjUwXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBmb3JtPVxcXCJjb250YWN0LWZvcm1cXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICNtZXNzYWdlPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSG93IGNhbiB3ZSBoZWxwIHlvdT9cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlVGV4dFxcXCIgbmFtZT1cXFwibWVzc2FnZVxcXCIgI21lc3NhZ2U9XFxcIm5nTW9kZWxcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVxcXCJtZXNzYWdlLnZhbGlkIHx8IG1lc3NhZ2UucHJpc3RpbmVcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZSBpcyByZXF1aXJlZFxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZm9ybT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwic3VibWl0LWJ0biBidG4gYnRuLXN1Y2Nlc3NcXFwiIFtkaXNhYmxlZF09XFxcIiFjb250YWN0Rm9ybS5mb3JtLnZhbGlkXFxcIj5TdWJtaXQ8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZGF0ZS1waWNrZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZnJvbS1kYXRlXFxcIj5cXHJcXG4gICAgICAgIDxteS1kYXRlLXBpY2tlciAoZGF0ZUNoYW5nZWQpPVxcXCJvbkZyb21EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBuYW1lPVxcXCJmcm9tLWRhdGVcXFwiIFtwbGFjZWhvbGRlcl09XFxcImZyb21EYXRlTGFiZWxcXFwiIFtvcHRpb25zXT1cXFwiZnJvbURhdGVQaWNrZXJPcHRpb25zXFxcIj48L215LWRhdGUtcGlja2VyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG8tZGF0ZVxcXCI+XFxyXFxuICAgICAgIDxteS1kYXRlLXBpY2tlciAoZGF0ZUNoYW5nZWQpPVxcXCJvblRvRGF0ZUNoYW5nZWQoJGV2ZW50KVxcXCIgbmFtZT1cXFwidG8tZGF0ZVxcXCIgW3BsYWNlaG9sZGVyXT1cXFwidG9EYXRlTGFiZWxcXFwiIFtvcHRpb25zXT1cXFwidG9EYXRlUGlja2VyT3B0aW9uc1xcXCI+PC9teS1kYXRlLXBpY2tlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250YWluZXJcXFwiPlxcclxcbiAgICA8YnV0dG9uIChjbGljayk9XFxcInRvZ2dsZURyb3Bkb3duKClcXFwiPjxzcGFuPnt7YnV0dG9uTGFiZWx9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd25cXFwiPjwvaT5cXHJcXG48L2J1dHRvbj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbGlzdFxcXCIgKGNsaWNrKT1cXFwib3ZlcmxheSgpXFxcIiBbY2xhc3MuaGlkZS1kcm9wZG93bl09XFxcImlzQ29sbGFwc2VkXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGEtbGlzdFxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0YSBvZiBkYXRhTW9kZWw7XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIG5hbWU9XFxcInt7b3B0aW9uTmFtZX19XFxcIiB2YWx1ZT1cXFwie3tkYXRhLnZhbHVlfX1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXY+e3tkYXRhLmxhYmVsfX08L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYWluLXBhZ2UtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPG5hdmktYmFyIFtzaG93RmlsdGVyc109XFxcImZhbHNlXFxcIj48L25hdmktYmFyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwibWFzdGhlYWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnQtaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbi1oZWFkaW5nXFxcIiBpZD1cXFwiaG9tZUhlYWRpbmdcXFwiPlBpeGVsYXRlZCBQbGFuZXQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwic3ViLWhlYWRpbmdcXFwiPkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9va2luZyBhdCBpdHMgbGF5b3V0LjwvZGl2PiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXFxcIiBocmVmPVxcXCIjd29ya3Nob3BzXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIlVwY29taW5nRXZlbnRzQ2xpY2tcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIkhvbWVQYWdlSW50ZXJhY3Rpb25cXFwiPlVwY29taW5nIFdvcmtzaG9wczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2hlYWRlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGlkPVxcXCJ3b3Jrc2hvcHNcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ3cy1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBXb3Jrc2hvcHNcXHJcXG4gICAgICAgIDwvaDE+XFxyXFxuICAgICAgICA8d29ya3Nob3BzLWxpc3Q+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZXctYWxsLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3dvcmtzaG9wc1xcXCIgY2xhc3M9XFxcInZpZXctYWxsXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIlZpZXdBbGxFdmVudHNDbGlja1xcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiSG9tZVBhZ2VJbnRlcmFjdGlvblxcXCI+PHNwYW4+VmlldyBhbGw8L3NwYW4+ICA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdiBjbGFzcz1cXFwibmF2LWNvbnRhaW5lclxcXCI+XFxyXFxuICA8YSBocmVmPVxcXCJcXFwiICBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Ib21lUGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiBzcmM9XFxcIi9hc3NldHMvaW1nL2ljb24ucG5nXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIj5cXHJcXG4gIDwvYT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICA8YnV0dG9uICpuZ0lmPVxcXCJzaG93RmlsdGVyc1xcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiZmlsdGVyLWhlYWRlciBidG5cXFwiIChjbGljayk9XFxcInRvZ2dsZUZpbHRlcigpXFxcIj5cXHJcXG4gICAgICAgICAgPGRpdj5GaWx0ZXJzIDxpIGNsYXNzPVxcXCJmYSBmYS1maWx0ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9kaXY+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIm5hdmJhci10b2dnbGVcXFwiIChjbGljayk9XFxcInRvZ2dsZU5hdmJhcigpXFxcIj5cXHJcXG4gICAgICA8ZGl2PjxpIGNsYXNzPVxcXCJmYSBmYS1iYXJzXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG5cXHJcXG4gIDwvZGl2PlxcclxcblxcclxcbiAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWNvbGxhcHNlXFxcIiBbbmdDbGFzc109XFxcInsnaGlkZU5hdmJhcic6IGhpZGVOYXZiYXJ9XFxcIj5cXHJcXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgIDxsaSBjbGFzcz1cXFwiYWN0aXZlXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIkdvVG9Xb3Jrc2hvcHNQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj48YSBocmVmPVxcXCIvd29ya3Nob3BzXFxcIj5Xb3Jrc2hvcHM8L2E+PC9saT5cXHJcXG4gICAgICA8bGk+PGEgaHJlZj1cXFwiI1xcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQWJvdXRQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj5BYm91dDwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCIvY29udGFjdFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQ29udGFjdFBhZ2VFdmVudFxcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiTmF2QmFySW50ZXJhY3Rpb25cXFwiPkNvbnRhY3Q8L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcblxcdDxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImxpc3RcXFwiPlxcclxcblxcdFxcdFJlZGlyZWN0aW5nIHRvIGFuIGV4dGVybmFsIGxpbmsuLi5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2aS1iYXI+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgW3NyY109XFxcInRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlSW1hZ2VVcmwod29ya3Nob3BEZXRhaWxzLmltYWdlTGluaylcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwid3NkLW5hbWVcXFwiPnt7d29ya3Nob3BEZXRhaWxzLm5hbWV9fTwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImRldGFpbHMtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGV0YWlsLXRhYnNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFiXFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ0YWJsaW5rcyBhY3RpdmVcXFwiIChjbGljayk9XFxcIm9wZW5UYWJzKCRldmVudCwgMClcXFwiPkRlc2NyaXB0aW9uPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGFibGlua3NcXFwiIChjbGljayk9XFxcIm9wZW5UYWJzKCRldmVudCwgMSlcXFwiPkl0aW5lcmFyeTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRhYmxpbmtzXFxcIiAoY2xpY2spPVxcXCJvcGVuVGFicygkZXZlbnQsIDIpXFxcIj5HYWxsZXJ5PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGFibGlua3NcXFwiIChjbGljayk9XFxcIm9wZW5UYWJzKCRldmVudCwgMylcXFwiPlBob3RvZ3JhcGhlcnM8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwiRGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+RGVzY3JpcHRpb248L2gzPlxcclxcbiAgICAgICAgICAgIDxwPnt7d29ya3Nob3BEZXRhaWxzLmRlc2NyaXB0aW9ufX08L3A+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcIkl0aW5lcmFyeVxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5JdGluZXJhcnk8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRheS13cmFwcGVyXFxcIiAqbmdGb3I9XFxcImxldCBkYXRhIG9mIHdvcmtzaG9wRGV0YWlscy5pdGluZXJhcnk7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg1PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGF5IHt7ZGF0YS5kYXl9fSAtIDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJsb2NhdGlvblxcXCI+e3tkYXRhLmxvY2F0aW9ufX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDU+XFxyXFxuICAgICAgICAgICAgICAgIDxwPnt7ZGF0YS5jb250ZW50fX08L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcIkdhbGxlcnlcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tIDxpbWcgY2xhc3M9XFxcImltYWdlXFxcIiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiB3b3Jrc2hvcERldGFpbHNbMF0uZ2FsbGVyeTtcXFwiIFtzcmNdPVxcXCJpbWFnZVxcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIgLz4gLS0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcIlBob3RvZ3JhcGhlclxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5QaG90b2dyYXBoZXJzPC9oMz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwaG90b2dyYXBoZXItaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IHBob3RvZ3JhcGhlciBvZiB3b3Jrc2hvcERldGFpbHMucGhvdG9ncmFwaGVycztcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLXBob3RvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XFxcInByb2ZpbGUtaW1nXFxcIiBbc3JjXT1cXFwidGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLnJlc29sdmVJbWFnZVVybChwaG90b2dyYXBoZXIucHJvZmlsZVBob3RvTGluaylcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8aDQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5maXJzdE5hbWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7cGhvdG9ncmFwaGVyLmxhc3ROYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvaDQ+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbC1sb2NhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uQnlMb2NhdGlvbklkKHBob3RvZ3JhcGhlci5sb2NhdGlvbklkKT8ubmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid2Vic2l0ZS1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcInt7cGhvdG9ncmFwaGVyPy53ZWJzaXRlTGlua319XFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWV4dGVybmFsLWxpbmtcXFwiPjwvaT4gV2Vic2l0ZVxcclxcbiAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8cD57e3Bob3RvZ3JhcGhlci5tb3JlSW5mb3JtYXRpb259fTwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiaGlnaGxpZ2h0c1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3c2QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPldvcmtzaG9wIExpbms8L2g0PlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcInt7d29ya3Nob3BEZXRhaWxzLmxpbmt9fVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPjxpIGNsYXNzPVxcXCJmYSBmYS1saW5rXFxcIj48L2k+IFdvcmtzaG9wIGxpbmtcXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aDQgY2xhc3M9XFxcImhpZ2hsaWdodC1oZWFkaW5nc1xcXCI+TG9jYXRpb248L2g0PlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1tYXAtbWFya2VyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+e3t0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMuZ2V0TG9jYXRpb25CeUxvY2F0aW9uSWQod29ya3Nob3BEZXRhaWxzLmxvY2F0aW9uSWQpPy5uYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1wcmljZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPlByaWNlIFJhbmdlPC9oND5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdXNkXFxcIj48L2k+IHt7d29ya3Nob3BEZXRhaWxzLm1pbkNvc3R9fSAtIHt7d29ya3Nob3BEZXRhaWxzLm1heENvc3R9fVxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3c2QtZGF0ZXNcXFwiPlxcclxcbiAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwiaGlnaGxpZ2h0LWhlYWRpbmdzXFxcIj5EYXRlczwvaDQ+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZXMtaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGRldGFpbCBvZiB3b3Jrc2hvcERldGFpbHMubXVsdGlXb3Jrc2hvcERldGFpbHM7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tkZXRhaWwuc3RhcnREYXRlfX0gLSB7e2RldGFpbC5lbmREYXRlfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIndvcmtzaG9wLWxpc3RcXFwiPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcImVudGl0eVxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0YSBvZiBhc3luY0RhdGEgfCBhc3luYyB8IHBhZ2luYXRlOiB7IGlkOiAnc2VydmVyJywgaXRlbXNQZXJQYWdlOiBpdGVtc1BlclBhZ2UsIGN1cnJlbnRQYWdlOiBwYWdlLCB0b3RhbEl0ZW1zOiB0b3RhbCB9XFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbm5lclxcXCIgKGNsaWNrKT1cXFwibG9hZFdvcmtzaG9wRGV0YWlscyhkYXRhLndvcmtzaG9wSWQsIGRhdGEubmFtZSlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJpbWFnZVxcXCIgW3NyY109XFxcInRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlSW1hZ2VVcmwoZGF0YS5pbWFnZUxpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm5hbWUgdHJ1bmNhdGVcXFwiIHRpdGxlPVxcXCJ7eyBkYXRhLm5hbWUgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAge3sgZGF0YS5uYW1lIH19XFxyXFxuICAgICAgICAgICAgICAgIDwvaDE+XFxyXFxuICAgICAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibG9jYXRpb25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuZm9ybWF0TG9jYXRpb24oZGF0YS5sb2NhdGlvbklkKX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3RoaXMuZm9ybWF0RGF0ZShkYXRhLnN0YXJ0RGF0ZUZpcnN0KX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPi08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cXFwiZGF0YS5zdGFydERhdGVGaXJzdCAhPSBkYXRhLmVuZERhdGVGaXJzdFxcXCI+IHt7dGhpcy5mb3JtYXREYXRlKGRhdGEuZW5kRGF0ZUZpcnN0KX19IDwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0ID09IGRhdGEubWF4Q29zdFxcXCI+e3tkYXRhLmNvc3RDdXJyZW5jeX19IHt7ZGF0YS5taW5Db3N0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJpY2VcXFwiICpuZ0lmPVxcXCJkYXRhLm1pbkNvc3QgPCBkYXRhLm1heENvc3RcXFwiPnt7ZGF0YS5jb3N0Q3VycmVuY3l9fSB7e2RhdGEubWluQ29zdH19LXt7ZGF0YS5tYXhDb3N0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgKm5nSWY9XFxcIml0ZW1zUGVyUGFnZSA+IDRcXFwiIGNsYXNzPVxcXCJ3cy1wYWdlc1xcXCI+IFxcclxcbiAgICAgICAgPHBhZ2luYXRpb24tY29udHJvbHMgKHBhZ2VDaGFuZ2UpPVxcXCJnZXRXb3Jrc2hvcHNEYXRhKHF1ZXJ5UGF0aCwkZXZlbnQsIGl0ZW1zUGVyUGFnZSlcXFwiIGlkPVxcXCJzZXJ2ZXJcXFwiPjwvcGFnaW5hdGlvbi1jb250cm9scz5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcbjxuYXZpLWJhciAgW3Nob3dGaWx0ZXJzXT1cXFwidHJ1ZVxcXCIgKGZpbHRlcnNEcm9wZG93blRvZ2dsZSk9XFxcInRvZ2dsZUZpbHRlckRyb3Bkb3duKCRldmVudClcXFwiPjwvbmF2aS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZmlsdGVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVGaWx0ZXInOiBoaWRlRmlsdGVyfVxcXCIgaWQ9XFxcImZpbHRlcnNcXFwiPlxcclxcbiAgICAgICAgPHdvcmtzaG9wLWZpbHRlciAobWluUHJpY2VGaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TWluUHJpY2UoJGV2ZW50KVxcXCIgKG1heFByaWNlRmlsdGVyQ2hhbmdlZCk9XFxcInNldE1heFByaWNlKCRldmVudClcXFwiIChmcm9tRGF0ZUNoYW5nZWQpPVxcXCJzZXRGcm9tRGF0ZSgkZXZlbnQpXFxcIiAodG9EYXRlQ2hhbmdlZCk9XFxcInNldFRvRGF0ZSgkZXZlbnQpXFxcIiAobG9jYXRpb25GaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TG9jYXRpb25JZExpc3QoJGV2ZW50KVxcXCIgKGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCk9XFxcInNldENhdGVnb3J5TGlzdCgkZXZlbnQpXFxcIj48L3dvcmtzaG9wLWZpbHRlcj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibGlzdFxcXCI+XFxyXFxuICAgICAgICA8d29ya3Nob3BzLWxpc3Q+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvaHR0cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIlxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1wYWdpbmF0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLXBhZ2luYXRpb25cIlxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlXCJcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmF1dG9jb21wbGV0ZS1maWx0ZXIsXFxuLmRyb3Bkb3duLWZpbHRlcixcXG4ucHJpY2UtZmlsdGVyLFxcbi5kYXRlLXBpY2tlcixcXG4uZ2V0LWxpc3QtYnRuIHtcXG4gIC8qdG9wOjIwJTsqL1xcbiAgbGVmdDogM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyptYXJnaW4tcmlnaHQ6IDNyZW07Ki8gfVxcblxcbio6Zm9jdXMge1xcbiAgb3V0bGluZTogMDsgfVxcblxcbi5wcmljZS1maWx0ZXIge1xcbiAgbWFyZ2luLXRvcDogMS42cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG4gIC5wcmljZS1maWx0ZXIgaW5wdXQge1xcbiAgICBvdXRsaW5lOiAuMnB4IHNvbGlkICMyNjE4MUQ7XFxuICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBoZWlnaHQ6IDMuNHJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgY29sb3I6ICMyNjE4MUQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTsgfVxcbiAgICAucHJpY2UtZmlsdGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzI2MTgxRDsgfVxcbiAgICAucHJpY2UtZmlsdGVyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMyNjE4MUQ7IH1cXG4gICAgLnByaWNlLWZpbHRlciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMjYxODFEOyB9XFxuXFxuLmhpZGUtZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5nZXQtbGlzdC1idG4ge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAzLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2NTZBO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kcm9wZG93bi1maWx0ZXIsXFxuICAucHJpY2UtZmlsdGVyLFxcbiAgLmRhdGUtcGlja2VyLFxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAucHJpY2UtZmlsdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gICAgLnByaWNlLWZpbHRlciBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTsgfVxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDUwJTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJmaWx0ZXJzLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImF1dG9jb21wbGV0ZS1maWx0ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxhdXRvY29tcGxldGU+PC9hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1maWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPGRyb3Bkb3duIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlQ2F0ZWdvcnlMaXN0KCRldmVudClcXFwiIFtkYXRhTW9kZWxdPVxcXCJjYXRlZ29yaWVzXFxcIiBbYnV0dG9uTGFiZWxdPVxcXCJjYXRlZ29yeURyb3Bkb3duTGFiZWxcXFwiIFtvcHRpb25OYW1lXT1cXFwiJ2NhdGVnb3JpZXMnXFxcIj48L2Ryb3Bkb3duPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicHJpY2UtZmlsdGVyXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCAjbWluUHJpY2VJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMTAwXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWluLiBwcmljZVxcXCIgKGJsdXIpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uaW5wdXQpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uY2hhbmdlKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIvPlxcclxcbiAgICAgICAgPGlucHV0ICNtYXhQcmljZUlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBzdGVwPVxcXCIxMDBcXFwiIHBsYWNlaG9sZGVyPVxcXCJNYXguIHByaWNlXFxcIiAoYmx1cik9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIiAob25pbnB1dCk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIiAob25jaGFuZ2UpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIi8+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZS1waWNrZXJcXFwiPlxcclxcbiAgICAgICAgIDxkYXRlLXBpY2tlciAoc2VsZWN0ZWRGcm9tQ2hhbmdlZCk9XFxcImdldEZyb21EYXRlKCRldmVudClcXFwiIChzZWxlY3RlZFRvQ2hhbmdlZCk9XFxcImdldFRvRGF0ZSgkZXZlbnQpXFxcIj48L2RhdGUtcGlja2VyPiBcXHJcXG4gICAgPC9kaXY+IFxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJnZXQtbGlzdC1idG5cXFwiIChjbGljayk9XFxcImdldFJlc3VsdCgpXFxcIj48c3Bhbj5GaWx0ZXI8L3NwYW4+ICA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsdGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYnV0dG9uPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9