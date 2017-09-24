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
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
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
    GlobalConstantsRepository.prototype.createWorkshopsUrl = function (page, startDate, endDate, minPrice, maxPrice, locations, categories) {
        var url = "/workshops/" + page + "?startDate=" + startDate + "&endDate=" + endDate;
        url += minPrice ? "&minPrice=" + minPrice : "";
        url += maxPrice ? "&maxPrice=" + maxPrice : "";
        url += locations ? "&locations=" + locations : "";
        url += categories ? "&categories=" + categories : "";
        return url;
    };
    GlobalConstantsRepository.prototype.getDefaultStartDate = function () {
        var today = new Date();
        return today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
    };
    GlobalConstantsRepository.prototype.getDefaultEndDate = function () {
        var today = new Date();
        return (today.getFullYear() + 3).toString() + "/12/31";
    };
    GlobalConstantsRepository.prototype.getWorkshopTypesUrl = function () {
        return this.workshopTypesUrl;
    };
    GlobalConstantsRepository.prototype.resolveImageUrl = function (path) {
        return this.cdnBaseUrl + path;
    };
    GlobalConstantsRepository.prototype.resolveLocalImageUrl = function (path) {
        return "/assets" + path;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_empty__ = __webpack_require__(129);
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
            .toPromise()
            .then(function (response) {
            return response.json();
        });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
    function WorkshopsListComponent(angulartics2, workshopRepository, router, cdRef, route, sanitizer) {
        this.workshopRepository = workshopRepository;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.page = 1;
        this.angulartics2 = angulartics2;
        this.workshops = [];
        this.cdRef = cdRef;
    }
    WorkshopsListComponent.prototype.ngOnInit = function () {
    };
    WorkshopsListComponent.prototype.sanitizeUrl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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
    WorkshopsListComponent.prototype.getWorkshopsData = function (path, page, wsPerPage) {
        var _this = this;
        this.angulartics2.eventTrack.next({ action: 'GetWorkshopsEvent', properties: { category: 'WorkshopsListComponent' } });
        this.loading = true;
        this.queryPath = path;
        this.itemsPerPage = wsPerPage;
        this.workshopRepository.getWorkshopOverview(path, page, wsPerPage)
            .then(function (res) {
            _this.pageNumbers = Array(Math.ceil(res.total / wsPerPage)).fill(0).map(function (x, i) { return i + 1; });
            _this.page = page;
            _this.loading = false;
            _this.asyncData = res.workshops;
        });
        this.cdRef.detectChanges();
    };
    WorkshopsListComponent.prototype.createWorkshopDetailsUrl = function (workshopId, workshopName) {
        workshopName = workshopName.replace(/[ ()&#]/g, "-");
        return "/photography-workshop-details/" + workshopName + "/" + workshopId;
    };
    WorkshopsListComponent.prototype.createPageLink = function (pageNumber) {
        return this.createUrl(pageNumber);
    };
    WorkshopsListComponent.prototype.createUrl = function (page) {
        var locations;
        var categories;
        var startDate;
        var endDate;
        var minPrice;
        var maxPrice;
        this.route.queryParams.subscribe(function (params) {
            locations = params['locations'];
            categories = params['categories'];
            startDate = params['startDate'];
            endDate = params['endDate'];
            minPrice = params['minPrice'];
            maxPrice = params['maxPrice'];
        });
        var today = new Date();
        startDate = !startDate ? this.workshopRepository.globalConstants.getDefaultStartDate() : startDate;
        endDate = !endDate ? this.workshopRepository.globalConstants.getDefaultEndDate() : endDate;
        return this.workshopRepository.globalConstants.createWorkshopsUrl(page, startDate, endDate, minPrice, maxPrice, locations, categories);
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angulartics2__["Angulartics2"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["ActivatedRoute"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]) === 'function' && _f) || Object])
    ], WorkshopsListComponent);
    return WorkshopsListComponent;
    var _a, _b, _c, _d, _e, _f;
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
            template: __webpack_require__(83),
            styles: [__webpack_require__(66)]
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/autocomplete.component.js.map

/***/ },
/* 9 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/contact-us.component.js.map

/***/ },
/* 10 */
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
    DatePickerComponent.prototype.setToDate = function (miliseconds) {
        var date = new Date(miliseconds);
        this.selToDate = date.toISOString().slice(0, 10);
    };
    DatePickerComponent.prototype.setFromDate = function (miliseconds) {
        var date = new Date(miliseconds);
        this.selFromDate = date.toISOString().slice(0, 10);
    };
    DatePickerComponent.prototype.ngOnInit = function () {
        this.fromDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            markCurrentDay: true,
            yearSelector: true,
            monthSelector: true,
            disableUntil: this.previousDate
        };
        this.toDatePickerOptions = {
            dateFormat: 'yyyy-mm-dd',
            markCurrentDay: true,
            yearSelector: true,
            monthSelector: true,
            disableUntil: this.previousDate
        };
    };
    DatePickerComponent.prototype.onFromDateChanged = function (event) {
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/date-picker.component.js.map

/***/ },
/* 11 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/error.component.js.map

/***/ },
/* 12 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/home.component.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(128);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/page-redirect.component.js.map

/***/ },
/* 14 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/privacy-policy.component.js.map

/***/ },
/* 15 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/terms-and-conditions.component.js.map

/***/ },
/* 16 */
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
            _this.getImgData();
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
        var _this = this;
        this.imagesLink = [];
        this.workshopDetails.images.forEach(function (imagePath) {
            var imgObj = {};
            imgObj.imageLink = _this.workshopRepository.globalConstants.resolveLocalImageUrl(imagePath);
            imgObj.hideImage = true;
            _this.imagesLink.push(imgObj);
        });
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-details.component.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__autocomplete_autocomplete_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__date_picker_date_picker_component__ = __webpack_require__(10);
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
    WorkshopFilterComponent.prototype.setValuesFromParameters = function (minPrice, maxPrice, categories, locations, startDate, endDate) {
        var _this = this;
        this.minPriceValue = minPrice || null;
        this.maxPriceValue = maxPrice || null;
        if (endDate) {
            this.datePickerChildComp.setToDate(Date.parse(endDate));
        }
        else {
            this.datePickerChildComp.setToDate(null);
        }
        if (startDate) {
            this.datePickerChildComp.setFromDate(Date.parse(startDate));
        }
        else {
            this.datePickerChildComp.setFromDate(null);
        }
        if (locations) {
            this.workshopRepository.getLocations().then(function (loc) {
                var locationFound = false;
                loc.forEach(function (location) {
                    if (location.id === +locations) {
                        locationFound = true;
                        _this.autocompleteChildComp.select(location.name);
                    }
                });
                if (!locationFound) {
                    _this.autocompleteChildComp.select("");
                }
            });
        }
        else {
            this.autocompleteChildComp.select("");
        }
    };
    WorkshopFilterComponent.prototype.updateCategories = function () {
        var _this = this;
        this.categories = [];
        this.workshopRepo.getWorkshopTypes().then(function (wTypes) {
            wTypes.forEach(function (workshopType) {
                _this.categories.push({ label: workshopType, value: workshopType });
            });
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
        var _this = this;
        this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        var locationFound = false;
        this.workshopRepository.getLocations().then(function (loc) {
            loc.forEach(function (location) {
                if (location.name === value) {
                    locationFound = true;
                    _this.locationFilterChanged.emit(location.id);
                }
            });
        });
        if (!locationFound) {
            this.locationFilterChanged.emit(null);
        }
    };
    WorkshopFilterComponent.prototype.updateCategoryList = function (value) {
        this.angulartics2.eventTrack.next({ action: 'CategoryFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        this.categoryFilterChanged.emit(value);
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]) === 'function' && _a) || Object)
    ], WorkshopFilterComponent.prototype, "autocompleteChildComp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__date_picker_date_picker_component__["a" /* DatePickerComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__date_picker_date_picker_component__["a" /* DatePickerComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__date_picker_date_picker_component__["a" /* DatePickerComponent */]) === 'function' && _b) || Object)
    ], WorkshopFilterComponent.prototype, "datePickerChildComp", void 0);
    WorkshopFilterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'workshop-filter',
            template: __webpack_require__(97),
            styles: [__webpack_require__(78)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_workshops_workshopRepository__["a" /* WorkshopRepository */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angulartics2__["Angulartics2"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _e) || Object])
    ], WorkshopFilterComponent);
    return WorkshopFilterComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshop-filter.component.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workshop_filter_workshop_filter_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_globalConstantsRepository__ = __webpack_require__(1);
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
    function WorkshopsComponent(globalConstantsRepository, route, router) {
        var _this = this;
        this.globalConstantsRepository = globalConstantsRepository;
        this.route = route;
        this.router = router;
        this.workshopsPerPage = 8;
        this.globalConstants = globalConstantsRepository;
        this.hideFilter = true;
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["NavigationEnd"]) {
                _this.setParameters();
                _this.updateUrl();
            }
        });
    }
    WorkshopsComponent.prototype.toggleFilterDropdown = function (event) {
        this.hideFilter = event;
    };
    WorkshopsComponent.prototype.setParameters = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageNumber = params['pageNumber'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.locationIdList = params['locations'];
            _this.categoryList = params['categories'];
            _this.minPrice = params['minPrice'];
            _this.maxPrice = params['maxPrice'];
            _this.startDate = params['startDate'];
            _this.endDate = params['endDate'];
        });
        this.startDate = !this.startDate ? this.globalConstants.getDefaultStartDate() : this.startDate;
        this.endDate = !this.endDate ? this.globalConstants.getDefaultEndDate() : this.endDate;
        this.workshopsFilterChildComp.setValuesFromParameters(this.minPrice, this.maxPrice, this.categoryList, this.locationIdList, this.startDate, this.endDate);
    };
    WorkshopsComponent.prototype.ngOnInit = function () {
        this.setParameters();
        this.updateUrl();
    };
    WorkshopsComponent.prototype.createUrl = function () {
        var url = "/workshops/" + this.pageNumber + "?startDate=" + this.startDate + "&endDate=" + this.endDate;
        url += this.minPrice ? "&minPrice=" + this.minPrice : "";
        url += this.maxPrice ? "&maxPrice=" + this.maxPrice : "";
        url += this.locationIdList ? "&locations=" + this.locationIdList : "";
        url += this.categoryList ? "&categories=" + this.categoryList : "";
        return url;
    };
    WorkshopsComponent.prototype.updateUrl = function () {
        this.query = this.globalConstants.getPixelatedPlanetAPIUrl() + "/Workshops?startDateFilter=" + this.startDate + "&endDateFilter=" + this.endDate;
        this.query += this.locationIdList && this.locationIdList != "" ? "&locationIdFilter=" + this.locationIdList : "";
        this.query += this.categoryList && this.categoryList != "" ? "&workshopType=" + this.categoryList : "";
        this.query += this.minPrice && this.minPrice > 0 ? "&minPrice=" + this.minPrice.toString() : "";
        this.query += this.maxPrice && this.maxPrice > 0 ? "&maxPrice=" + this.maxPrice.toString() : "";
        if (this.query && this.pageNumber) {
            this.workshopsListChildComp.getWorkshopsData(this.query, this.pageNumber, this.workshopsPerPage);
        }
    };
    WorkshopsComponent.prototype.performNav = function () {
        this.pageNumber = 1;
        this.router.navigateByUrl(this.globalConstants.createWorkshopsUrl(this.pageNumber, this.startDate, this.endDate, this.minPrice, this.maxPrice, this.locationIdList, this.categoryList));
        ;
    };
    WorkshopsComponent.prototype.setFromDate = function (fromDate) {
        var previousStartDate = this.startDate;
        this.startDate = fromDate.year + "/" + fromDate.month + "/" + fromDate.day;
        if (this.startDate == "0/0/0") {
            this.startDate = this.globalConstants.getDefaultStartDate();
        }
        if (previousStartDate !== this.startDate) {
            this.performNav();
        }
    };
    WorkshopsComponent.prototype.toggleFilter = function () {
        this.hideFilter = true;
    };
    WorkshopsComponent.prototype.setToDate = function (toDate) {
        var previousEndDate = this.endDate;
        this.endDate = toDate.year + "/" + toDate.month + "/" + toDate.day;
        if (this.endDate == "0/0/0") {
            this.endDate = this.globalConstants.getDefaultEndDate();
        }
        if (previousEndDate != this.endDate) {
            this.performNav();
        }
    };
    WorkshopsComponent.prototype.setLocationIdList = function (locationIdList) {
        if (locationIdList != this.locationIdList) {
            this.locationIdList = locationIdList;
            this.performNav();
        }
    };
    WorkshopsComponent.prototype.setCategoryList = function (category) {
        if (category != this.categoryList) {
            this.categoryList = category;
            this.performNav();
        }
    };
    WorkshopsComponent.prototype.setMinPrice = function (minPrice) {
        if (this.minPrice != minPrice) {
            this.minPrice = minPrice;
            this.performNav();
        }
    };
    WorkshopsComponent.prototype.setMaxPrice = function (maxPrice) {
        if (this.maxPrice != maxPrice) {
            this.maxPrice = maxPrice;
            this.performNav();
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__workshops_list_workshops_list_component__["a" /* WorkshopsListComponent */]) === 'function' && _a) || Object)
    ], WorkshopsComponent.prototype, "workshopsListChildComp", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__workshop_filter_workshop_filter_component__["a" /* WorkshopFilterComponent */]), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__workshop_filter_workshop_filter_component__["a" /* WorkshopFilterComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__workshop_filter_workshop_filter_component__["a" /* WorkshopFilterComponent */]) === 'function' && _b) || Object)
    ], WorkshopsComponent.prototype, "workshopsFilterChildComp", void 0);
    WorkshopsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(99),
            styles: [__webpack_require__(80)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_shared_globalConstantsRepository__["a" /* GlobalConstantsRepository */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _e) || Object])
    ], WorkshopsComponent);
    return WorkshopsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/workshops.component.js.map

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports) {

module.exports = require("@angular/common");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(56);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/server.js.map

/***/ },
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__my_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_date_range_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__my_date_range_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__my_day_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__my_month_labels_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__my_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__my_calendar_day_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__my_calendar_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__my_calendar_year_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_week_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__my_week_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_options_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__my_options_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_locale_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__my_locale_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_date_model_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__my_date_model_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__my_input_field_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__my_input_focus_blur_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__my_weekday_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__my_weekday_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__my_calendar_view_changed_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__my_marked_date_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__my_marked_dates_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_default_month_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__my_default_month_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__my_selector_interface__ = __webpack_require__(47);
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
/* 30 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-day.interface.js.map

/***/ },
/* 31 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-month.interface.js.map

/***/ },
/* 32 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-view-changed.interface.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-calendar-year.interface.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-model.interface.js.map

/***/ },
/* 35 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-range.interface.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date.interface.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-day-labels.interface.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-default-month.interface.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-field-changed.interface.js.map

/***/ },
/* 40 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-input-focus-blur.interface.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-locale.interface.js.map

/***/ },
/* 42 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-date.interface.js.map

/***/ },
/* 43 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-marked-dates.interface.js.map

/***/ },
/* 44 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month-labels.interface.js.map

/***/ },
/* 45 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-month.interface.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-options.interface.js.map

/***/ },
/* 47 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-selector.interface.js.map

/***/ },
/* 48 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-week.interface.js.map

/***/ },
/* 49 */
/***/ function(module, exports) {

//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-weekday.interface.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_index__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_my_date_picker_locale_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_my_date_picker_util_service__ = __webpack_require__(53);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/my-date-picker.component.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_date_picker_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_my_date_picker_focus_directive__ = __webpack_require__(28);
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
/* 52 */
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
/* 53 */
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
/* 54 */
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
var __universal__ = __webpack_require__(106);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/__2.1.1.workaround.js.map

/***/ },
/* 55 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.component.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_mydatepicker_src_my_date_picker_my_date_picker_module__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__workshops_list_workshops_list_component__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__workshop_filter_workshop_filter_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__workshops_workshops_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__contact_us_contact_us_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__workshop_details_workshop_details_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_workshops_workshopRepository__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_shared_globalConstantsRepository__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__page_redirect_page_redirect_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__autocomplete_autocomplete_component__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_about_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__error_error_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__privacy_policy_privacy_policy_component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__dropdown_menu_dropdown_menu_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__date_picker_date_picker_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_pagination__ = __webpack_require__(126);
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_error_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workshops_workshops_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workshop_details_workshop_details_component__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_us_contact_us_component__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_redirect_page_redirect_component__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__terms_and_conditions_terms_and_conditions_component__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__privacy_policy_privacy_policy_component__ = __webpack_require__(14);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/app.routes.js.map

/***/ },
/* 58 */
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
        this.panelOverlay = false;
    }
    DropdownComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buttonLabel = "Select category";
        var that = this;
        this.renderer.listenGlobal('document', 'click', function (event) {
            if (!that.isCollapsed && _this.panelOverlay) {
                that.isCollapsed = true;
                _this.selectionChanged.emit(_this.buttonLabel);
            }
            _this.panelOverlay = false;
        });
    };
    DropdownComponent.prototype.selectValue = function (value) {
        this.buttonLabel = value;
    };
    DropdownComponent.prototype.toggleDropdown = function () {
        if (!this.panelOverlay) {
            this.isCollapsed = !this.isCollapsed;
        }
    };
    DropdownComponent.prototype.overlay = function () {
        this.panelOverlay = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], DropdownComponent.prototype, "dataModel", void 0);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/dropdown-menu.component.js.map

/***/ },
/* 59 */
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/footer.component.js.map

/***/ },
/* 60 */
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], NavComponent.prototype, "showName", void 0);
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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/navbar.component.js.map

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
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/environment.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
















//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/polyfills.js.map

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
    'home', 'workshops', 'about', '404', '**', 'photography-workshop-details/:title/:id', 'contact', 'page-redirect/', 'termsandconditions', 'privacypolicy'
];
//# sourceMappingURL=C:/Users/Shrey/Source/Pixels/src/server.routes.js.map

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = "<div class=\"mydp\" [ngStyle]=\"{'width': opts.showInputField ? opts.width : null, 'border': opts.inline ? 'none' : null}\">\r\n    <div class=\"selectiongroup\" *ngIf=\"!opts.inline\">\r\n        <input *ngIf=\"opts.showInputField\" #inputBoxEl ngtype=\"text\" class=\"selection\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"opts.openSelectorOnInputClick&&!opts.editableDateField&&openBtnClicked()\" [ngClass]=\"{'invaliddate': invalidDate&&opts.indicateInvalidDate, 'inputnoteditable': opts.openSelectorOnInputClick&&!opts.editableDateField, 'selectiondisabled': opts.componentDisabled}\"\r\n               placeholder=\"{{placeholder}}\" [ngStyle]=\"{'height': opts.height, 'font-size': opts.selectionTxtFontSize}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\" (keyup)=\"onCloseSelector($event)\"\r\n               (focus)=\"opts.editableDateField&&onFocusInput($event)\" (blur)=\"opts.editableDateField&&onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" [readonly]=\"!opts.editableDateField\" autocomplete=\"off\" spellcheck=\"false\" autocorrect=\"off\">\r\n        <div class=\"selbtngroup\" [style.height]=\"opts.height\">\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelDecreaseDate\" class=\"btndecrease\" *ngIf=\"opts.showDecreaseDateBtn\" (click)=\"onDecreaseBtnClicked()\" [ngClass]=\"{'btndecreaseenabled': !opts.componentDisabled, 'btndecreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpleft\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelIncreaseDate\" class=\"btnincrease\" *ngIf=\"opts.showIncreaseDateBtn\" (click)=\"onIncreaseBtnClicked()\" [ngClass]=\"{'btnincreaseenabled': !opts.componentDisabled, 'btnincreasedisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpright\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelClearDate\" class=\"btnclear\" *ngIf=\"selectionDayTxt.length>0&&opts.showClearDateBtn\" (click)=\"removeBtnClicked()\" [ngClass]=\"{'btnclearenabled': !opts.componentDisabled, 'btncleardisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpremove\"></span>\r\n            </button>\r\n            <button type=\"button\" [attr.aria-label]=\"opts.ariaLabelOpenCalendar\" class=\"btnpicker\" (click)=\"openBtnClicked()\" [ngClass]=\"{'btnpickerenabled': !opts.componentDisabled, 'btnpickerdisabled': opts.componentDisabled, 'btnleftborderradius': !opts.showClearDateBtn&&!opts.showIncreaseDateBtn&&!opts.showDecreaseDateBtn&&!opts.showInputField||selectionDayTxt.length===0&&!opts.showInputField}\" [disabled]=\"opts.componentDisabled\">\r\n                <span class=\"mydpicon icon-mydpcalendar\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class=\"selector\" #selectorEl [ngStyle]=\"{'width': opts.selectorWidth, 'height' : opts.selectorHeight, 'bottom': getSelectorTopPosition()}\" *ngIf=\"showSelector||opts.inline\" [mydpfocus]=\"opts.inline?'0':'1'\" [ngClass]=\"{'inlinedp': opts.inline, 'alignselectorright': opts.alignSelectorRight, 'selectorarrow': opts.showSelectorArrow&&!opts.inline, 'selectorarrowleft': opts.showSelectorArrow&&!opts.alignSelectorRight&&!opts.inline, 'selectorarrowright': opts.showSelectorArrow&&opts.alignSelectorRight&&!opts.inline}\" (keyup)=\"onCloseSelector($event)\" tabindex=\"0\">\r\n        <table class=\"header\">\r\n            <tr>\r\n                <td>\r\n                    <div style=\"float:left\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevMonth\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button></div>\r\n                        <div class=\"headermonthtxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'monthlabel': opts.monthSelector}\" (click)=\"opts.monthSelector&&onSelectMonthClicked($event)\" tabindex=\"{{opts.monthSelector?'0':'-1'}}\">{{visibleMonth.monthTxt}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextMonth\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <button *ngIf=\"opts.showTodayBtn\" type=\"button\" class=\"headertodaybtn\" (click)=\"onTodayClicked()\" [disabled]=\"disableTodayBtn\" [ngClass]=\"{'headertodaybtnenabled': !disableTodayBtn, 'headertodaybtndisabled': disableTodayBtn}\">\r\n                        <span class=\"mydpicon icon-mydptoday\"></span>\r\n                        <span>{{opts.todayBtnTxt}}</span>\r\n                    </button>\r\n                </td>\r\n                <td>\r\n                    <div style=\"float:right\">\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelPrevYear\" class=\"headerbtn mydpicon icon-mydpleft\" (click)=\"onPrevYear()\" [disabled]=\"prevYearDisabled\" [ngClass]=\"{'headerbtnenabled': !prevYearDisabled, 'headerbtndisabled': prevYearDisabled}\"></button></div>\r\n                        <div class=\"headeryeartxt\">\r\n                            <button class=\"headerlabelbtn\" type=\"button\" [ngClass]=\"{'yearlabel': opts.yearSelector}\" (click)=\"opts.yearSelector&&onSelectYearClicked($event)\" tabindex=\"{{opts.yearSelector?'0':'-1'}}\">{{visibleMonth.year}}</button>\r\n                        </div>\r\n                        <div class=\"headerbtncell\"><button type=\"button\" [attr.aria-label]=\"opts.ariaLabelNextYear\" class=\"headerbtn mydpicon icon-mydpright\" (click)=\"onNextYear()\" [disabled]=\"nextYearDisabled\" [ngClass]=\"{'headerbtnenabled': !nextYearDisabled, 'headerbtndisabled': nextYearDisabled}\"></button></div>\r\n                    </div>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n        <table class=\"caltable\" *ngIf=\"!selectMonth&&!selectYear\">\r\n            <thead><tr><th class=\"weekdaytitle weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"weekdaytitle\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let w of dates\">\r\n                    <td class=\"daycell daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n                    <td class=\"daycell\" *ngFor=\"let d of w.week\" [ngClass]=\"{'currmonth':d.cmo===currMonthId&&!d.disabled, 'selectedday':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\" (click)=\"!d.disabled&&onCellClicked(d);$event.stopPropagation()\" (keydown)=\"onCellKeyDown($event, d)\" tabindex=\"0\">\r\n                        <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n                        <div class=\"datevalue\" [ngClass]=\"{'prevmonth':d.cmo===prevMonthId,'currmonth':d.cmo===currMonthId,'nextmonth':d.cmo===nextMonthId,'highlight':d.highlight}\">\r\n                            <span [ngClass]=\"{'markcurrday':d.currDay&&opts.markCurrentDay, 'dimday': d.highlight && (d.cmo===prevMonthId || d.cmo===nextMonthId || d.disabled)}\">{{d.dateObj.day}}</span>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"monthtable\" *ngIf=\"selectMonth\">\r\n            <tbody>\r\n                <tr *ngFor=\"let mr of months\">\r\n                    <td class=\"monthcell tablesinglemonth\" [ngClass]=\"{'selectedmonth': m.selected, 'disabled': m.disabled}\" *ngFor=\"let m of mr\" (click)=\"!m.disabled&&onMonthCellClicked(m);$event.stopPropagation()\" (keydown)=\"onMonthCellKeyDown($event, m)\" tabindex=\"0\">\r\n                        <div class=\"monthvalue\" [ngClass]=\"{'markcurrmonth':m.currMonth&&opts.markCurrentMonth}\">{{m.name}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <table class=\"yeartable\" *ngIf=\"selectYear\">\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpup\" (click)=\"onPrevYears($event, years[0][0].year)\" [disabled]=\"prevYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !prevYearsDisabled, 'yearchangebtndisabled': prevYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngFor=\"let yr of years\">\r\n                    <td class=\"yearcell tablesingleyear\" [ngClass]=\"{'selectedyear': y.selected, 'disabled': y.disabled}\" *ngFor=\"let y of yr\" (click)=\"!y.disabled&&onYearCellClicked(y);$event.stopPropagation()\" (keydown)=\"onYearCellKeyDown($event, y)\" tabindex=\"0\">\r\n                        <div class=\"yearvalue\" [ngClass]=\"{'markcurryear':y.currYear&&opts.markCurrentYear}\">{{y.year}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"5\" class=\"yearchangebtncell\" (click)=\"$event.stopPropagation()\">\r\n                        <button type=\"button\" class=\"yearchangebtn mydpicon icon-mydpdown\" (click)=\"onNextYears($event, years[0][0].year)\" [disabled]=\"nextYearsDisabled\" [ngClass]=\"{'yearchangebtnenabled': !nextYearsDisabled, 'yearchangebtndisabled': nextYearsDisabled}\"></button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = ".mydp {\r\n    line-height: 1.1;\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.mydp * {\r\n    box-sizing: border-box;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.mydp,\r\n.mydp .selectiongroup,\r\n.mydp .selection,\r\n.mydp .selector,\r\n.mydp .headertodaybtn {\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .header {\r\n    border-radius: 4px 4px 0 0;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:first-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:first-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:first-child {\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .caltable tbody tr:nth-child(6) td:last-child,\r\n.mydp .monthtable tbody tr:nth-child(4) td:last-child,\r\n.mydp .yeartable tbody tr:nth-child(7) td:last-child {\r\n    border-bottom-right-radius: 4px;\r\n}\r\n\r\n.mydp .btnpicker {\r\n    border-radius: 0 4px 4px 0;\r\n}\r\n\r\n.mydp .btnleftborderradius {\r\n    border-top-left-radius: 4px;\r\n    border-bottom-left-radius: 4px;\r\n}\r\n\r\n.mydp .selector {\r\n    margin-top: 2px;\r\n    margin-left: -1px;\r\n    position: absolute;\r\n    padding: 0;\r\n    border: 1px solid #CCC;\r\n    z-index: 100;\r\n    -webkit-animation: selectorfadein 0.1s;\r\n            animation: selectorfadein 0.1s;\r\n}\r\n\r\n.mydp .selector:focus {\r\n    border: 1px solid #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n@-webkit-keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes selectorfadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.mydp .selectorarrow {\r\n    background: #FAFAFA;\r\n    margin-top: 12px;\r\n    padding: 0;\r\n}\r\n\r\n.mydp .selectorarrow:after,\r\n.mydp .selectorarrow:before {\r\n    bottom: 100%;\r\n    border: solid transparent;\r\n    content: \" \";\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n}\r\n\r\n.mydp .selectorarrow:after {\r\n    border-color: rgba(250, 250, 250, 0);\r\n    border-bottom-color: #FAFAFA;\r\n    border-width: 10px;\r\n    margin-left: -10px;\r\n}\r\n\r\n.mydp .selectorarrow:before {\r\n    border-color: rgba(204, 204, 204, 0);\r\n    border-bottom-color: #CCC;\r\n    border-width: 11px;\r\n    margin-left: -11px;\r\n}\r\n\r\n.mydp .selectorarrow:focus:before {\r\n    border-bottom-color: #ADD8E6;\r\n}\r\n\r\n.mydp .selectorarrowleft:after,\r\n.mydp .selectorarrowleft:before {\r\n    left: 24px;\r\n}\r\n\r\n.mydp .selectorarrowright:after,\r\n.mydp .selectorarrowright:before {\r\n    left: 86%;\r\n}\r\n\r\n.mydp .alignselectorright {\r\n    right: -1px;\r\n}\r\n\r\n.mydp .selectiongroup {\r\n    position: relative;\r\n    display: table;\r\n    border: none;\r\n    border-spacing: 0;\r\n    background-color: #FFF;\r\n}\r\n\r\n.mydp .selection {\r\n    width: 100%;\r\n    outline: none;\r\n    background-color: #FFF;\r\n    display: table-cell;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    padding-left: 6px;\r\n    border: none;\r\n    color: #555;\r\n}\r\n\r\n.mydp .invaliddate {\r\n    background-color: #F1DEDE;\r\n}\r\n\r\n.mydp ::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n.mydp .selbtngroup {\r\n    position: relative;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    width: 1%;\r\n    display: table-cell;\r\n    font-size: 0;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease {\r\n    height: 100%;\r\n    width: 26px;\r\n    border: none;\r\n    padding: 0;\r\n    outline: 0;\r\n    font: inherit;\r\n    -moz-user-select: none;\r\n}\r\n\r\n.mydp .btnleftborder {\r\n    border-left: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpickerenabled,\r\n.mydp .btnclearenabled,\r\n.mydp .btndecreaseenabled,\r\n.mydp .btnincreaseenabled,\r\n.mydp .headertodaybtnenabled,\r\n.mydp .headerbtnenabled,\r\n.mydp .yearchangebtnenabled {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .selectiondisabled,\r\n.mydp .btnpickerdisabled,\r\n.mydp .btncleardisabled,\r\n.mydp .btndecreasedisabled,\r\n.mydp .btnincreasedisabled,\r\n.mydp .headertodaybtndisabled,\r\n.mydp .headerbtndisabled,\r\n.mydp .yearchangebtndisabled {\r\n    cursor: not-allowed;\r\n    opacity: 0.65;\r\n}\r\n\r\n.mydp .selectiondisabled {\r\n    background-color: #EEE;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headertodaybtn {\r\n    background: #FFF;\r\n}\r\n\r\n.mydp .header {\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .header td {\r\n    vertical-align: middle;\r\n    border: none;\r\n    line-height: 0;\r\n}\r\n\r\n.mydp .header td:nth-child(1) {\r\n    padding-left: 4px;\r\n}\r\n\r\n.mydp .header td:nth-child(2) {\r\n    text-align: center;\r\n}\r\n\r\n.mydp .header td:nth-child(3) {\r\n    padding-right: 4px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    height: calc(100% - 30px);\r\n    background-color: #FFF;\r\n    font-size: 14px;\r\n}\r\n\r\n.mydp .caltable,\r\n.mydp .monthtable,\r\n.mydp .yeartable,\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    border-collapse: collapse;\r\n    color: #003366;\r\n    line-height: 1.1;\r\n}\r\n\r\n.mydp .weekdaytitle,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    padding: 4px;\r\n    text-align: center;\r\n}\r\n\r\n.mydp .weekdaytitle {\r\n    background-color: #DDD;\r\n    font-size: 11px;\r\n    font-weight: normal;\r\n    vertical-align: middle;\r\n    max-width: 36px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .weekdaytitleweeknbr {\r\n    width: 20px;\r\n    border-right: 1px solid #BBB;\r\n}\r\n\r\n.mydp .monthcell {\r\n    background-color: #FAFAFA;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .yearcell {\r\n    background-color: #FAFAFA;\r\n    width: 20%;\r\n}\r\n\r\n.mydp .daycell .datevalue {\r\n    background-color: inherit;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycell .datevalue span {\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .daycellweeknbr {\r\n    font-size: 10px;\r\n    border-right: 1px solid #CCC;\r\n    cursor: default;\r\n    color: #000;\r\n}\r\n\r\n.mydp .inlinedp {\r\n    position: relative;\r\n    margin-top: -1px;\r\n}\r\n\r\n.mydp .prevmonth,\r\n.mydp .nextmonth {\r\n    color: #CCC;\r\n}\r\n\r\n.mydp .disabled {\r\n    cursor: default !important;\r\n    color: #CCC;\r\n    background: #FBEFEF;\r\n}\r\n\r\n.mydp .highlight {\r\n    color: #C30000;\r\n}\r\n\r\n.mydp .dimday {\r\n    opacity: 0.5;\r\n}\r\n\r\n.mydp .currmonth {\r\n    background-color: #F6F6F6;\r\n    font-weight: normal;\r\n}\r\n\r\n.mydp .markdate {\r\n    position: absolute;\r\n    width: 4px;\r\n    height: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.mydp .markcurrday,\r\n.mydp .markcurrmonth,\r\n.mydp .markcurryear {\r\n    text-decoration: underline;\r\n}\r\n\r\n.mydp .selectedday .datevalue,\r\n.mydp .selectedmonth .monthvalue,\r\n.mydp .selectedyear .yearvalue {\r\n    border: none;\r\n    background-color: #8EBFFF;\r\n    border-radius: 2px;\r\n}\r\n\r\n.mydp .headerbtncell {\r\n    background-color: #FAFAFA;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}\r\n\r\n.mydp .yearchangebtncell {\r\n    text-align: center;\r\n    background-color: #FAFAFA;\r\n}\r\n\r\n.mydp .headerbtn,\r\n.mydp .headerlabelbtn,\r\n.mydp .yearchangebtn {\r\n    background: #FAFAFA;\r\n    border: none;\r\n    height: 22px;\r\n}\r\n\r\n.mydp .headerbtn {\r\n    width: 16px;\r\n}\r\n\r\n.mydp .headerlabelbtn {\r\n    font-size: 14px;\r\n    outline: none;\r\n    cursor: default;\r\n}\r\n\r\n.mydp,\r\n.mydp .headertodaybtn {\r\n    border: 1px solid #CCC;\r\n}\r\n\r\n.mydp .btnpicker,\r\n.mydp .btnclear,\r\n.mydp .btndecrease,\r\n.mydp .btnincrease,\r\n.mydp .headerbtn,\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt,\r\n.mydp .headertodaybtn,\r\n.mydp .yearchangebtn {\r\n    color: #000;\r\n}\r\n\r\n.mydp .headertodaybtn {\r\n    padding: 0 4px;\r\n    font-size: 11px;\r\n    height: 22px;\r\n    min-width: 60px;\r\n    max-width: 84px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp button::-moz-focus-inner {\r\n    border: 0;\r\n}\r\n\r\n.mydp .headermonthtxt,\r\n.mydp .headeryeartxt {\r\n    text-align: center;\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    font-size: 14px;\r\n    height: 26px;\r\n    width: 40px;\r\n    max-width: 40px;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.mydp .btnclear:focus,\r\n.mydp .btndecrease:focus,\r\n.mydp .btnincrease:focus,\r\n.mydp .btnpicker:focus,\r\n.mydp .headertodaybtn:focus {\r\n    background: #ADD8E6;\r\n}\r\n\r\n.mydp .headerbtn:focus,\r\n.mydp .monthlabel:focus,\r\n.mydp .yearlabel:focus,\r\n.mydp .yearchangebtn:focus {\r\n    color: #ADD8E6;\r\n    outline: none;\r\n}\r\n\r\n.mydp .daycell:focus,\r\n.mydp .monthcell:focus,\r\n.mydp .yearcell:focus {\r\n    outline: 1px solid #CCC;\r\n}\r\n\r\n.mydp .icon-mydpcalendar,\r\n.mydp .icon-mydpremove {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydpleft,\r\n.mydp .icon-mydpright,\r\n.mydp .icon-mydpup,\r\n.mydp .icon-mydpdown {\r\n    color: #222;\r\n    font-size: 20px;\r\n}\r\n\r\n.mydp .btndecrease .icon-mydpleft,\r\n.mydp .btnincrease .icon-mydpright {\r\n    font-size: 16px;\r\n}\r\n\r\n.mydp .icon-mydptoday {\r\n    color: #222;\r\n    font-size: 11px;\r\n}\r\n\r\n.mydp table {\r\n    display: table;\r\n    border-spacing: 0;\r\n}\r\n\r\n.mydp table td {\r\n    padding: 0;\r\n}\r\n\r\n.mydp table,\r\n.mydp th,\r\n.mydp td {\r\n    border: none;\r\n}\r\n\r\n.mydp .btnpickerenabled:hover,\r\n.mydp .btnclearenabled:hover,\r\n.mydp .btndecreaseenabled:hover,\r\n.mydp .btnincreaseenabled:hover,\r\n.mydp .headertodaybtnenabled:hover {\r\n    background-color: #E6E6E6;\r\n}\r\n\r\n.mydp .tablesingleday:hover,\r\n.mydp .tablesinglemonth:hover,\r\n.mydp .tablesingleyear:hover {\r\n    background-color: #DDD;\r\n}\r\n\r\n.mydp .monthlabel,\r\n.mydp .yearlabel,\r\n.mydp .inputnoteditable,\r\n.mydp .daycell,\r\n.mydp .monthcell,\r\n.mydp .yearcell {\r\n    cursor: pointer;\r\n}\r\n\r\n.mydp .headerbtnenabled:hover,\r\n.mydp .yearchangebtnenabled:hover,\r\n.mydp .monthlabel:hover,\r\n.mydp .yearlabel:hover {\r\n    color: #777;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'mydatepicker';\r\n    src: url('data:application/octet-stream;base64,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') format('truetype');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n\r\n.mydp .mydpicon {\r\n    font-family: 'mydatepicker';\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    font-variant: normal;\r\n    text-transform: none;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.mydp .icon-mydpright:before {\r\n    content: \"\\e800\";\r\n}\r\n\r\n.mydp .icon-mydpleft:before {\r\n    content: \"\\e801\";\r\n}\r\n\r\n.mydp .icon-mydptoday:before {\r\n    content: \"\\e802\";\r\n}\r\n\r\n.mydp .icon-mydpcalendar:before {\r\n    content: \"\\e803\";\r\n}\r\n\r\n.mydp .icon-mydpup:before {\r\n    content: \"\\e804\";\r\n}\r\n\r\n.mydp .icon-mydpdown:before {\r\n    content: \"\\e805\";\r\n}\r\n\r\n.mydp .icon-mydpremove:before {\r\n    content: \"\\e806\";\r\n}\r\n"

/***/ },
/* 66 */
/***/ function(module, exports) {

module.exports = ".content {\n  position: relative;\n  margin: 5rem 10rem 0rem 10rem; }\n\n.detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n"

/***/ },
/* 67 */
/***/ function(module, exports) {

module.exports = ".suggestions {\n  z-index: 99;\n  width: auto;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left;\n  left: 0; }\n  .suggestions ul {\n    padding: 0;\n    margin: 1rem;\n    max-height: 30rem;\n    overflow: auto; }\n  .suggestions li {\n    list-style: none;\n    cursor: pointer;\n    padding: .5rem;\n    white-space: nowrap;\n    width: auto; }\n\n.dropdown-container {\n  margin: 1.4rem 1rem 1rem 0;\n  height: 3.6rem;\n  width: 13.5rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.filter-input {\n  color: #333333;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  border: none;\n  padding-left: .5rem; }\n\n@media (max-width: 955px) {\n  .suggestions {\n    margin-left: 1rem;\n    width: 100%; }\n    .suggestions li {\n      white-space: inherit; }\n  .filter-input {\n    width: 70%; }\n  .dropdown-container {\n    margin: 0;\n    width: 100%; } }\n"

/***/ },
/* 68 */
/***/ function(module, exports) {

module.exports = ".contact-us {\n  height: 100%;\n  width: 100%; }\n\n.contact-us {\n  margin-top: 10rem;\n  text-align: center; }\n  .contact-us input {\n    height: 5rem;\n    padding: 1rem;\n    font-size: 1.8rem; }\n    .contact-us input:required {\n      outline: none; }\n  .contact-us h1 {\n    font-size: 4.5rem;\n    color: #26181D; }\n  .contact-us .message {\n    height: 20rem;\n    vertical-align: top; }\n  .contact-us .message,\n  .contact-us .subject {\n    width: 64rem; }\n\n.static-info {\n  font-size: 2.3rem;\n  width: 100%;\n  color: #26181D;\n  margin-top: 2rem;\n  margin-bottom: 2rem; }\n\n.form-wrapper {\n  text-align: center;\n  display: inline-block; }\n\n.form-group {\n  width: 60rem;\n  text-align: left; }\n  .form-group .alert {\n    width: inherit;\n    padding: 0;\n    margin: 0; }\n\n.name-group,\n.mail-number-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.message-box .alert,\n.subject-box .alert {\n  width: 60rem; }\n\n.message-dialog {\n  height: 20%;\n  width: 30%;\n  background: #26181D;\n  position: absolute;\n  top: 45%;\n  left: 35%;\n  color: white;\n  box-shadow: 0 0 0.7px grey;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .message-dialog .wrapper {\n    position: relative;\n    top: 30%; }\n    .message-dialog .wrapper .text {\n      display: block;\n      padding: 1rem; }\n    .message-dialog .wrapper .ok-btn {\n      background: #73656A;\n      color: white;\n      width: 30%; }\n\n#message {\n  height: 20rem;\n  font-size: 1.8rem; }\n\n.ng-valid[required],\n.ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.submit-btn {\n  width: 25rem;\n  margin-top: 2rem;\n  height: 4rem;\n  margin-bottom: 5rem; }\n  .submit-btn:disabled {\n    background-color: #eee;\n    color: #aaa;\n    cursor: auto; }\n\n@media (max-width: 955px) {\n  .form-wrapper {\n    width: 100%; }\n  .form-group {\n    width: 100%; }\n  .name-group,\n  .subject-box,\n  .message-box,\n  .mail-number-group {\n    width: 90%;\n    margin: 2rem; }\n  .contact-us {\n    margin-top: 5rem; } }\n"

/***/ },
/* 69 */
/***/ function(module, exports) {

module.exports = ".date-picker-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .date-picker-container input {\n    height: 3rem;\n    width: 8rem;\n    border: 0;\n    text-align: center;\n    background-color: transparent;\n    color: white;\n    margin-top: .2rem; }\n    .date-picker-container input::-webkit-input-placeholder {\n      color: white; }\n    .date-picker-container input:-ms-input-placeholder {\n      color: white; }\n    .date-picker-container input::placeholder {\n      color: white; }\n  .date-picker-container label {\n    font-weight: 600;\n    padding-top: .4rem;\n    font-size: 1.5rem;\n    color: gray; }\n  .date-picker-container .from-date,\n  .date-picker-container .to-date {\n    width: 13.5rem;\n    text-align: center;\n    margin: 1.4rem 1rem 0 1rem;\n    height: 3.6rem; }\n    .date-picker-container .from-date input,\n    .date-picker-container .to-date input {\n      width: 10rem;\n      border: 0;\n      height: 3.6rem;\n      text-align: center;\n      background-color: transparent;\n      color: white; }\n\n@media (max-width: 955px) {\n  .date-picker-container {\n    margin-bottom: 1.5rem;\n    display: inline-block; }\n    .date-picker-container .from-date,\n    .date-picker-container .to-date {\n      position: relative;\n      display: inline-block;\n      width: 70%; } }\n"

/***/ },
/* 70 */
/***/ function(module, exports) {

module.exports = ".hide-dropdown {\n  display: none; }\n\n.dropdown-list {\n  z-index: 99;\n  padding: 1.5rem 0 1.5rem 3rem;\n  width: 15rem;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left; }\n\n.dropdown-container {\n  width: 13.5rem;\n  margin-right: 2rem; }\n  .dropdown-container button {\n    width: 100%;\n    border: none;\n    background-color: white;\n    margin: 1.4rem 1rem 1rem 0;\n    color: #26181D;\n    height: 3.6rem;\n    border-radius: 5px; }\n\n.data-list {\n  list-style: none;\n  cursor: pointer;\n  padding: .5rem;\n  white-space: nowrap; }\n  .data-list span {\n    vertical-align: middle;\n    font-size: 1.5rem; }\n\n@media (max-width: 955px) {\n  .dropdown-container {\n    display: block;\n    width: 100%;\n    margin-top: 1rem; }\n    .dropdown-container button {\n      width: 70%;\n      margin: auto;\n      height: 3.6rem; }\n  .dropdown-list {\n    padding-left: 3rem;\n    width: 90%;\n    margin-left: 1rem; } }\n"

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

module.exports = ".hero {\n  width: 100%; }\n\n.header {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n.view-all {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #26181D; }\n\n.main-page-container {\n  height: 100%;\n  min-height: 100%; }\n\n.view-all-container {\n  text-align: center;\n  margin-top: 5rem; }\n\n.main-heading {\n  font-size: 8rem;\n  color: white;\n  font-family: 'Comfortaa', cursive; }\n\n.chevron-down {\n  text-decoration: none;\n  position: absolute;\n  bottom: 5rem;\n  font-size: 4rem;\n  color: white; }\n\n.sub-heading {\n  opacity: 1;\n  color: white;\n  top: 1rem;\n  position: relative; }\n\n.content {\n  position: relative;\n  top: 10rem; }\n\nheader {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.btn {\n  color: white;\n  background-color: #26181D;\n  top: 3rem;\n  position: relative;\n  border: none;\n  border-radius: 300px;\n  width: 30rem;\n  font-size: 2rem;\n  padding: 1rem;\n  cursor: initial;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\nh1.ws-heading {\n  color: #26181D;\n  text-align: center;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif;\n  font-size: 2.5rem;\n  margin-bottom: 2rem; }\n\n#workshops {\n  padding-top: 5rem; }\n\n@media (max-width: 955px) {\n  .main-heading {\n    font-size: 4.5rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: auto;\n    font-size: 2.2rem; } }\n\n@media (max-width: 400px) {\n  .main-heading {\n    font-size: 3.8rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: auto;\n    font-size: 1.6rem; } }\n"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = ".top-bar-title {\n  font-family: 'Coiny', cursive;\n  font-size: 22px;\n  color: #ffffff; }\n\n.nav-menu a {\n  color: #ffffff; }\n\n.company-icon {\n  float: left;\n  margin-left: 2rem;\n  margin-top: 1.1rem;\n  text-decoration: none;\n  vertical-align: bottom; }\n\n.company-name {\n  display: block;\n  margin-top: 1rem;\n  margin-left: 4.5rem;\n  color: white;\n  font-size: 1.5rem;\n  font-family: 'Comfortaa', cursive; }\n\n.fa-bars {\n  border: 1px solid white;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  border-radius: 4px; }\n\n.filter-header {\n  display: none; }\n\n.navbar-toggle {\n  display: none; }\n\nnav {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 6rem;\n  background-color: #26181D;\n  border: none;\n  font-size: 1.2rem; }\n  nav img {\n    width: 3rem;\n    height: 3rem;\n    float: left; }\n  nav .navbar-nav a {\n    background-color: transparent;\n    color: white; }\n  nav ul {\n    margin-top: .4rem;\n    font-size: 1.16rem;\n    font-family: 'Comfortaa', cursive; }\n\n@media (max-width: 955px) {\n  nav {\n    height: 5rem; }\n    nav ul {\n      width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white; }\n  .filter-header {\n    display: inline-block;\n    color: white;\n    margin-top: 1rem;\n    padding-left: 1rem;\n    background: transparent;\n    margin-left: 2rem; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .hideNavbar {\n    display: none; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-nav > li {\n    float: none !important; } }\n\n@media (min-width: 955px) and (max-width: 1140px) {\n  nav ul {\n    width: 100%; }\n  .hideNavbar {\n    display: none; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white;\n    margin-top: 1.5rem;\n    float: right; }\n  .navbar-collapse.collapse {\n    display: none !important; }\n  .navbar-nav {\n    float: none !important;\n    margin-top: 7.5px; }\n  .navbar-nav > li {\n    float: none !important; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .collapse.in {\n    display: block !important; } }\n"

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

module.exports = ".detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-img {\n  width: 12rem;\n  height: 12rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 2rem; }\n\n.profile-photo {\n  float: left; }\n\n.photographer-name h1 {\n  font-size: 2.5rem;\n  color: #73656A; }\n\n.photographer-information h4 {\n  margin-top: 0; }\n\n.detail-location {\n  color: #73656A;\n  opacity: 0.8;\n  margin-bottom: .5rem; }\n\n.website-link {\n  text-decoration: none;\n  margin-bottom: 1rem; }\n\n/* Style the tab */\ndiv.tab {\n  overflow: hidden;\n  margin-top: 5rem;\n  width: 100%; }\n  div.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    border-bottom: 3px solid transparent;\n    font-size: 2rem;\n    color: #73656A; }\n    div.tab button.active {\n      border-bottom: 3px solid #73656A; }\n\n/* Style the tab content */\n.tabcontent {\n  border-top: none;\n  text-align: left;\n  padding-left: 2rem;\n  height: 40rem;\n  overflow: auto;\n  width: 100%;\n  background-color: rgba(239, 230, 233, 0.1); }\n\n.detail-tabs {\n  text-align: center;\n  width: 65%;\n  margin-left: 4rem;\n  left: 0; }\n\n.details-container {\n  position: relative; }\n\n.day-wrapper,\n.photographer-information {\n  padding-top: 2rem; }\n\n.day-wrapper .location,\n.photographer-information h4 {\n  color: #73656A; }\n\n#Description p {\n  padding-top: 2rem;\n  margin-right: .4rem; }\n\n#Description h3 {\n  margin-top: 5%; }\n\n#Gallery {\n  text-align: center; }\n  #Gallery img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 35rem;\n    height: 28rem;\n    margin: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.modal-image {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.wsd-name {\n  font-size: 3.5rem;\n  color: #73656A;\n  text-align: center;\n  margin-top: 3rem;\n  font-weight: 500; }\n\n.highlights {\n  position: absolute;\n  display: inline-block;\n  margin-top: 10rem;\n  padding-left: 5rem;\n  width: 25%;\n  top: 0;\n  right: 0; }\n  .highlights a {\n    color: #73656A; }\n  .highlights div {\n    font-size: 2rem;\n    font-weight: 300;\n    color: #73656A; }\n    .highlights div i {\n      color: #73656A; }\n\n.image-modal {\n  position: fixed;\n  z-index: 1;\n  /* padding-top: 5rem; */\n  left: 0;\n  top: 5rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n/* Modal Content */\n.image-modal-content {\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\n.hide-modal {\n  display: none; }\n\n/* The Close Button */\n.close {\n  color: white;\n  opacity: 1;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 35px;\n  font-weight: bold;\n  z-index: 99; }\n\n.close:hover,\n.close:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer; }\n\n.hideImage {\n  display: none; }\n\n.cursor {\n  cursor: pointer; }\n\n/* Next & previous buttons */\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none; }\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.prev {\n  left: 0; }\n\n.slides {\n  text-align: center;\n  position: relative;\n  height: 100%;\n  line-height: 100%; }\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  text-decoration: none; }\n\n.active {\n  opacity: 1; }\n\n.gallery-image.hover-shadow {\n  transition: 0.3s; }\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n@media (max-width: 955px) {\n  #Gallery {\n    padding-left: 0; }\n    #Gallery img {\n      width: 28rem;\n      height: 20rem; }\n  div.tab {\n    text-align: center; }\n    div.tab button {\n      width: 50%;\n      display: block;\n      margin: auto; }\n  .tabContent {\n    text-align: center; }\n    .tabContent p {\n      text-align: justify;\n      padding: 2rem; }\n  .detail-tabs {\n    padding: 0 2rem;\n    display: inline-block;\n    width: 100%;\n    margin-left: 0; }\n  .highlights {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    position: inherit; } }\n"

/***/ },
/* 78 */
/***/ function(module, exports) {

module.exports = ".autocomplete-filter,\n.dropdown-filter,\n.price-filter,\n.date-picker,\n.get-list-btn {\n  left: 3rem;\n  position: relative;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.autocomplete-filter {\n  display: block; }\n\n*:focus {\n  outline: 0; }\n\n.price-filter {\n  margin-top: 1.4rem; }\n  .price-filter input {\n    outline: .2px solid #26181D;\n    width: 13.5rem;\n    border: 0;\n    height: 3.6rem;\n    text-align: center;\n    background-color: white;\n    color: #26181D;\n    margin-right: 1rem;\n    margin-left: 1rem;\n    border-radius: 5px;\n    border: none; }\n\n.hide-dropdown {\n  display: none; }\n\n.filters-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.get-list-btn {\n  display: none;\n  width: 10rem;\n  height: 3.7rem;\n  border: none;\n  background-color: #73656A;\n  color: white;\n  margin-top: 1.5rem; }\n\n@media (max-width: 955px) {\n  .filters-container {\n    display: block;\n    text-align: center; }\n  .dropdown-filter,\n  .price-filter,\n  .date-picker,\n  .get-list-btn {\n    left: 0;\n    display: block; }\n  .price-filter {\n    margin-top: 1.4rem; }\n    .price-filter input {\n      width: 70%;\n      display: block;\n      margin: 1.4rem auto; }\n  .get-list-btn {\n    display: inline-block;\n    width: 70%;\n    margin-top: 2rem; }\n  .dropdown-filter {\n    padding: 1.5rem 0; }\n  .autocomplete-filter {\n    width: 100%;\n    left: 0;\n    text-align: center;\n    margin: 1.5rem 0; } }\n"

/***/ },
/* 79 */
/***/ function(module, exports) {

module.exports = ".workshop-list {\n  text-align: center; }\n\n.ws-pages /deep/ {\n  margin-top: 3rem; }\n  .ws-pages /deep/ ul li {\n    display: inline;\n    background: #dddddd;\n    border-radius: 20%;\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n    padding: 1rem 1rem 1rem 1rem; }\n    .ws-pages /deep/ ul li a {\n      text-decoration: none;\n      color: #222222;\n      width: 100%;\n      height: 100%; }\n      .ws-pages /deep/ ul li a:hover {\n        border-radius: 20%; }\n\n.entity {\n  width: 30rem;\n  display: inline-block;\n  margin: 2rem;\n  box-shadow: 0rem 0rem 0.2rem 0rem #888888; }\n  .entity object {\n    vertical-align: middle;\n    width: 30rem;\n    height: 20rem;\n    margin-bottom: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n  .entity img {\n    vertical-align: middle;\n    width: 30rem;\n    height: 20rem;\n    margin-bottom: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n  .entity a {\n    text-decoration: none; }\n\n.inner {\n  text-align: center;\n  position: relative;\n  padding-bottom: 2rem; }\n\nh1.name {\n  margin-top: 0;\n  font-size: 2rem;\n  color: #26181D;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif;\n  margin-left: 1rem; }\n\n.price {\n  color: #594B50;\n  text-align: left;\n  padding-left: 2rem;\n  position: absolute;\n  right: 1rem;\n  bottom: 2rem; }\n\nhr {\n  width: 10rem;\n  text-align: center;\n  border-color: #594B50;\n  opacity: 0.3;\n  margin-top: 1rem;\n  margin-bottom: .5rem; }\n\n.date {\n  color: #594B50;\n  text-align: left;\n  padding-left: 1rem; }\n\n.location {\n  color: #26181D;\n  padding-bottom: 1rem;\n  opacity: 0.6; }\n\n.truncate {\n  width: 28rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.page-numbers {\n  padding: 1rem;\n  color: #73656A;\n  border-radius: 5px;\n  text-decoration: none; }\n  .page-numbers span {\n    margin: 0 .5rem; }\n  .page-numbers .fa {\n    font-size: 10px;\n    margin-left: -5px;\n    margin-top: -2px; }\n\n.no-result-msg {\n  font-size: 3rem;\n  color: #73656A; }\n\n.disabled {\n  cursor: not-allowed;\n  opacity: 0.5; }\n\na.active-page.page-numbers {\n  background-color: #73656A;\n  color: white; }\n\n@media (max-width: 955px) {\n  .entity {\n    width: auto;\n    max-width: 30rem; }\n    .entity .image {\n      height: 20rem;\n      margin-bottom: 1rem;\n      width: 100%; }\n  h1.name {\n    font-size: 1.8rem;\n    margin: auto; } }\n"

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

module.exports = ".ws-container nav.navbar.navbar-default {\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n.ws-container .navbar-default .navbar-nav .active a {\r\n    background-color: transparent;\r\n}\r\n\r\n.list {\r\n    margin-left: 10rem;\r\n}"

/***/ },
/* 83 */
/***/ function(module, exports) {

module.exports = "<navi-bar [showName]=\"true\">></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>About Us</h2>\r\n    PixelatedPlanet enables aspiring photographers to find workshops and seminars all around the world being conducted by people\r\n    successful in the field of photography. On the other hand, we provide a platform for photographers to showcase their\r\n    photography workshops and reach interested folks.\r\n    <h2>FAQs</h2>\r\n    <b>Do you have workshops of all genres?</b>\r\n    <br/> Of course! You can find everything from Landscape and Food photography to Timelapse and Night Sky photography workshops.\r\n    <br/><br/>\r\n    <b>Does PixelatedPlanet allow me to register for workshops?</b>\r\n    <br/> As of now, we aim to bring all photography workshops in one place. After finding the workshop you like, we will\r\n    redirect you the photographer's website for registration/payment.\r\n    <br/><br/>\r\n    <b>Does PixelatedPlanet charge me for finding workshops?</b>\r\n    <br/> No. All information on our website if freely accessible. No hidden costs.\r\n    <br/><br/>\r\n    <b>I am a photographer. Can I showcase my workshops on your website?</b>\r\n    <br/> We carefully select photographers based on their portfolios to keep quality of workshops high. Please email us\r\n    at hello@thepixelatedplanet.com in order to get in touch with us!\r\n</div>\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 84 */
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },
/* 85 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <input id=\"country\" type=\"text\" class=\"filter-input\" [(ngModel)]=query (keyup)=filter() placeholder=\"Type a location\">\r\n    <div class=\"suggestions\" *ngIf=\"filteredList.length > 0\">\r\n        <ul>\r\n            <li *ngFor=\"let item of filteredList\" (click)=\"select(item)\">{{item}}</li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ },
/* 86 */
/***/ function(module, exports) {

module.exports = "<navi-bar [showName]=\"true\">></navi-bar>\r\n<div class=\"contact-us\">\r\n    <h1>Let's click together!</h1>\r\n    <div class=\"static-info\">\r\n        <div>\r\n            <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n            <span>hello@thepixelatedplanet.com</span>\r\n        </div>\r\n        <div>\r\n            <i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\r\n            <span>425-979-8838</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-wrapper\">\r\n        <form (ngSubmit)=\"onSubmit(); contactForm.reset()\" name=\"contact-form\" #contactForm=\"ngForm\">\r\n            <div class=\"name-group\">\r\n                <div class=\"form-group first-name\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"fname\" required [(ngModel)]=\"fname\" name=\"fname\" #firstname=\"ngModel\" placeholder=\"Full name\">\r\n                    <div *ngIf=\"!(firstname.valid || firstname.pristine)\" class=\"alert alert-danger\">\r\n                        Invalid name\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"mail-number-group\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"emailId\" name=\"email\" #email=\"ngModel\" placeholder=\"Email address\">\r\n                    <div *ngIf=\"!(email.valid || email.pristine)\" class=\"alert alert-danger\">\r\n                        Invalid email address\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group subject-box\">\r\n                <input type=\"text\" class=\"form-control\" id=\"subject\" required [(ngModel)]=\"subjectText\" name=\"subject\" #subject=\"ngModel\"\r\n                    placeholder=\"Subject\">\r\n                <div *ngIf=\"!(subject.valid || subject.pristine)\" class=\"alert alert-danger\">\r\n                    Invalid subject\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group message-box\">\r\n                <textarea class=\"form-control\" id=\"message\" required rows=\"4\" cols=\"50\" name=\"message\" form=\"contact-form\" [(ngModel)]=\"messageText\"\r\n                    #message=\"ngModel\" placeholder=\"How can we help you?\"></textarea>\r\n                <div *ngIf=\"!(message.valid || message.pristine)\" class=\"alert alert-danger\">\r\n                    Invalid message\r\n                </div>\r\n            </div>\r\n            <button type=\"submit\" class=\"submit-btn btn btn-success\" [disabled]=\"!contactForm.form.valid || invalidDetails\">Submit</button>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"message-dialog\" *ngIf=\"submitted && showMessageBox\">\r\n        <div class=\"wrapper\">\r\n            <div class=\"text\">{{submitMessage}}</div>\r\n            <button class=\"ok-btn btn\" (click)=\"hideMessagebox()\">ok</button>\r\n        </div>\r\n    </div>\r\n        <div class=\"footer\">\r\n        <footer></footer>\r\n    </div>\r\n</div>"

/***/ },
/* 87 */
/***/ function(module, exports) {

module.exports = "<div class=\"date-picker-container\">\r\n    <div class=\"from-date\">\r\n        <my-date-picker (dateChanged)=\"onFromDateChanged($event)\" name=\"from-date\" [placeholder]=\"fromDateLabel\" [options]=\"fromDatePickerOptions\" [selDate]=\"selFromDate\"></my-date-picker>\r\n    </div>\r\n    <div class=\"to-date\">\r\n       <my-date-picker (dateChanged)=\"onToDateChanged($event)\" name=\"to-date\" [placeholder]=\"toDateLabel\" [options]=\"toDatePickerOptions\" [selDate]=\"selToDate\"></my-date-picker>\r\n    </div>\r\n</div>"

/***/ },
/* 88 */
/***/ function(module, exports) {

module.exports = "<div class=\"dropdown-container\">\r\n    <button (click)=\"toggleDropdown()\">\r\n        <span>{{buttonLabel}}</span>\r\n        <i class=\"fa fa-chevron-down\"></i>\r\n    </button>\r\n    <div class=\"dropdown-list\" (click)=\"overlay()\" [class.hide-dropdown]=\"isCollapsed\">\r\n        <div (click)=\"selectValue(data.label)\" class=\"data-list\" *ngFor=\"let data of dataModel;\">{{data.label}}</div>\r\n    </div>\r\n</div>"

/***/ },
/* 89 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\"/>\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h1>404 - Page Not Found</h1>\r\n    <h3>Oops, you landed in a bad place. Let's get out of here quickly before any bad guys come around!</h3>\r\n</div>"

/***/ },
/* 90 */
/***/ function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    <a href=\"/termsandconditions\">Terms and conditions</a>\r\n    <a href=\"/privacypolicy\">Privacy Policy</a>\r\n    <span>&copy; 2017 Pixelated Planet</span>\r\n    <a href=\"/contact\">Contact</a>\r\n</div>"

/***/ },
/* 91 */
/***/ function(module, exports) {

module.exports = "<div class=\"main-page-container\">\r\n    <navi-bar [showFilters]=\"false\"></navi-bar>\r\n    <div class=\"header\">\r\n        <header class=\"masthead\">\r\n            <div class=\"header-content\">\r\n                <div class=\"header-content-inner\">\r\n                    <div class=\"main-heading\" id=\"homeHeading\">Pixelated Planet</div>\r\n                    <a class=\"btn btn-default btn-lg\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">Upcoming Workshops</a>\r\n                </div>\r\n            </div>\r\n        </header>\r\n        <a class=\"chevron-down\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">\r\n            <i class=\"fa fa-chevron-circle-down\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n\r\n    <section id=\"workshops\">\r\n        <h1 class=\"ws-heading\">\r\n            WORKSHOPS\r\n        </h1>\r\n        <workshops-list></workshops-list>\r\n        <div class=\"view-all-container\">\r\n            <a href=\"/workshops\" class=\"view-all\" angulartics2On=\"click\" angularticsEvent=\"ViewAllEventsClick\" angularticsCategory=\"HomePageInteraction\"><span>View all</span>  <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </section>\r\n\r\n    <div class=\"footer\">\r\n        <footer></footer>\r\n    </div>\r\n</div>"

/***/ },
/* 92 */
/***/ function(module, exports) {

module.exports = "<nav class=\"nav-container\">\r\n  <a href=\"\" class=\"company-icon\"  angulartics2On=\"click\" angularticsEvent=\"GoToHomePageEvent\" angularticsCategory=\"NavBarInteraction\">\r\n    <img class=\"image\" src=\"/assets/img/icon.png\" alt=\"workshop image\">\r\n    <span *ngIf=\"showName\" class=\"company-name\">Pixelated Planet</span>\r\n  </a>\r\n  <div class=\"navbar-header\">\r\n    <button *ngIf=\"showFilters\" type=\"button\" class=\"filter-header btn\" (click)=\"toggleFilter()\">\r\n          <div>Filters <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n    <button type=\"button\" class=\"navbar-toggle\" (click)=\"toggleNavbar()\">\r\n      <div><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></div>\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <div class=\"navbar-collapse\" [ngClass]=\"{'hideNavbar': hideNavbar}\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"active\" angulartics2On=\"click\" angularticsEvent=\"GoToWorkshopsPageEvent\" angularticsCategory=\"NavBarInteraction\"><a href=\"/workshops\">WORKSHOPS</a></li>\r\n      <li><a href=\"/about\" angulartics2On=\"click\" angularticsEvent=\"GoToAboutPageEvent\" angularticsCategory=\"NavBarInteraction\">ABOUT</a></li>\r\n      <li><a href=\"/contact\" angulartics2On=\"click\" angularticsEvent=\"GoToContactPageEvent\" angularticsCategory=\"NavBarInteraction\">CONTACT</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ },
/* 93 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n\t<navi-bar></navi-bar>\r\n\t<div class=\"list\">\r\n        <br/><br/><br/>\r\n        <br/><br/><br/>\r\n        <br/><br/><br/>\r\n\t\tRedirecting to an external link in 5 seconds... If you would rather not leave us, <a style=\"cursor:hand\" (click)=\"goBack()\">click here to go back</a>.\r\n\t</div>\r\n</div>"

/***/ },
/* 94 */
/***/ function(module, exports) {

module.exports = "<navi-bar [showName]=\"true\">></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>Privacy Policy</h2>\r\n<div class='innerText'>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally Identifiable Information' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.<br></div><span id='infoCo'></span><br><div class='grayText'><strong>What personal information do we collect from the people that visit our blog, website or app?</strong></div><br /><div class='innerText'>When ordering or registering on our site, as appropriate, you may be asked to enter your email address, phone number  or other details to help you with your experience.</div><br><div class='grayText'><strong>When do we collect information?</strong></div><br /><div class='innerText'>We collect information from you when you fill out a form or enter information on our site.</div><br>Provide us with feedback on our products or services  <span id='infoUs'></span><br><div class='grayText'><strong>How do we use your information? </strong></div><br /><div class='innerText'> We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:<br><br></div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To improve our website in order to better serve you.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To allow us to better service you in responding to your customer service requests.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To ask for ratings and reviews of services or products</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> To follow up with them after correspondence (live chat, email or phone inquiries)</div><span id='infoPro'></span><br><div class='grayText'><strong>How do we protect your information?</strong></div><br /><div class='innerText'>We do not use vulnerability scanning and/or scanning to PCI standards.</div><div class='innerText'>We only provide articles and information. We never ask for credit card numbers.</div><div class='innerText'>We use regular Malware Scanning.<br><br></div><div class='innerText'>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. </div><br><div class='innerText'>We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</div><br><div class='innerText'>All transactions are processed through a gateway provider and are not stored or processed on our servers.</div><span id='coUs'></span><br><div class='grayText'><strong>Do we use 'cookies'?</strong></div><br /><div class='innerText'>We do not use cookies for tracking purposes </div><div class='innerText'><br>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser settings. Since browser is a little different, look at your browser's Help Menu to learn the correct way to modify your cookies.<br></div><br><div class='innerText'>If you turn cookies off, Some of the features that make your site experience more efficient may not function properly.that make your site experience more efficient and may not function properly.</div><br><span id='trDi'></span><br><div class='grayText'><strong>Third-party disclosure</strong></div><br /><div class='innerText'>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</div><span id='trLi'></span><br><div class='grayText'><strong>Third-party links</strong></div><br /><div class='innerText'>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</div><span id='gooAd'></span><br><div class='blueText'><strong>Google</strong></div><br /><div class='innerText'>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en <br><br></div><div class='innerText'>We use Google AdSense Advertising on our website.</div><div class='innerText'><br>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.<br></div><div class='innerText'><br><strong>We have implemented the following:</strong></div><br><div class='innerText'>We, along with third-party vendors such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together <div class='innerText'>analyze website usage</div><div class='innerText'><br><strong>Opting out:</strong><br>\r\n                    Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising Initiative Opt Out page or by using the Google Analytics Opt Out Browser add on.</div><span id='calOppa'></span><br><div class='blueText'><strong>California Online Privacy Protection Act</strong></div><br /><div class='innerText'>CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy.  The law's reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. -  See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf<br></div><div class='innerText'><br><strong>According to CalOPPA, we agree to the following:</strong><br></div><div class='innerText'>Users can visit our site anonymously.</div><div class='innerText'>Once this privacy policy is created, we will add a link to it on our home page or as a minimum, on the first significant page after entering our website.<br></div><div class='innerText'>Our Privacy Policy link includes the word 'Privacy' and can easily be found on the page specified above.</div><div class='innerText'><br>You will be notified of any Privacy Policy changes:</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> On our Privacy Policy Page<br></div><div class='innerText'>Can change your personal information:</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> By logging in to your account</div><div class='innerText'><br><strong>How does our site handle Do Not Track signals?</strong><br></div><div class='innerText'>We honor Do Not Track signals and Do Not Track, plant cookies, or use advertising when a Do Not Track (DNT) browser mechanism is in place. </div><div class='innerText'><br><strong>Does our site allow third-party behavioral tracking?</strong><br></div><div class='innerText'>It's also important to note that we allow third-party behavioral tracking</div><span id='coppAct'></span><br><div class='blueText'><strong>COPPA (Children Online Privacy Protection Act)</strong></div><br /><div class='innerText'>When it comes to the collection of personal information from children under the age of 13 years old, the Children's Online Privacy Protection Act (COPPA) puts parents in control.  The Federal Trade Commission, United States' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children's privacy and safety online.<br><br></div><div class='innerText'>We do not specifically market to children under the age of 13 years old.</div><div class='innerText'>Do we let third-parties, including ad networks or plug-ins collect PII from children under 13?</div><span id='ftcFip'></span><br><div class='blueText'><strong>Fair Information Practices</strong></div><br /><div class='innerText'>The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information.<br><br></div><div class='innerText'><strong>In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur:</strong></div><div class='innerText'>We will notify you via email</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Within 1 business day</div><div class='innerText'><br>We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.</div><span id='canSpam'></span><br><div class='blueText'><strong>CAN SPAM Act</strong></div><br /><div class='innerText'>The CAN-SPAM Act is a law that sets the rules for commercial email, establishes requirements for commercial messages, gives recipients the right to have emails stopped from being sent to them, and spells out tough penalties for violations.<br><br></div><div class='innerText'><strong>We collect your email address in order to:</strong></div><div class='innerText'><br><strong>To be in accordance with CANSPAM, we agree to the following:</strong></div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Not use false or misleading subjects or email addresses.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Identify the message as an advertisement in some reasonable way.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Include the physical address of our business or site headquarters.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Monitor third-party email marketing services for compliance, if one is used.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Honor opt-out/unsubscribe requests quickly.</div><div class='innerText'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>&bull;</strong> Allow users to unsubscribe by using the link at the bottom of each email.</div><div class='innerText'><strong><br>If at any time you would like to unsubscribe from receiving future emails, you can email us at</strong></div><div class='innerText'>hello@thepixelatedplanet.com and we will promptly remove you from <strong>ALL</strong> correspondence.</div><br><br><strong><div class='blueText'>Photographers</div></strong><br /><div class='innerText'>All photographers featured in our website willingly agree to us showing information about their workshops on the website and use data from their websites.</div><span id='ourCon'></span><br><div class='blueText'><br>Last Edited on 2017-09-17</div></div>\r\n</div>\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 95 */
/***/ function(module, exports) {

module.exports = "<navi-bar [showName]=\"true\"></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" src=\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\" alt=\"workshop image\" />\r\n</div>\r\n\r\n<div class=\"content\">\r\n    <h2>Terms and conditions</h2><br/>\r\n    <br/>\r\n<b>OVERVIEW</b><br/>\r\n<br/>\r\nThis website is operated by The Pixelated Planet. Throughout the site, the terms “we”, “us” and “our” refer to The Pixelated Planet. The Pixelated Planet offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.<br/>\r\n<br/>\r\nBy visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.<br/>\r\n<br/>\r\nPlease read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br/>\r\n<br/>\r\nAny new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br/>\r\n<br/>\r\n<b>SECTION 1 - ONLINE STORE TERMS</b><br/>\r\n<br/>\r\nBy agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br/>\r\n<br/>\r\nYou may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br/>\r\n<br/>\r\nYou must not transmit any worms or viruses or any code of a destructive nature.<br/>\r\n<br/>\r\nA breach or violation of any of the Terms will result in an immediate termination of your Services.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 2 - GENERAL CONDITIONS</b><br/>\r\n<br/>\r\nWe reserve the right to refuse service to anyone for any reason at any time.<br/>\r\n<br/>\r\nYou understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.<br/>\r\n<br/>\r\nYou agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br/>\r\n<br/>\r\nThe headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</b><br/>\r\n<br/>\r\nWe are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br/>\r\n<br/>\r\nThis site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</b><br/>\r\n<br/>\r\nPrices for our products are subject to change without notice.<br/>\r\n<br/>\r\nWe reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br/>\r\n<br/>\r\nWe shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 5 - PRODUCTS OR SERVICES (if applicable)</b><br/>\r\n<br/>\r\nCertain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.<br/>\r\n<br/>\r\nWe have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.<br/>\r\n<br/>\r\nWe reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br/>\r\n<br/>\r\nWe do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION</b><br/>\r\n<br/>\r\nWe reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail and/or billing address/phone number provided at the time the order was made. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.<br/>\r\n<br/>\r\nYou agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.<br/>\r\n<br/>\r\nFor more detail, please review our Returns Policy.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 7 - OPTIONAL TOOLS</b><br/>\r\n<br/>\r\nWe may provide you with access to third-party tools over which we neither monitor nor have any control nor input.<br/>\r\n<br/>\r\nYou acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br/>\r\n<br/>\r\nAny use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).<br/>\r\n<br/>\r\nWe may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 8 - THIRD-PARTY LINKS</b><br/>\r\n<br/>\r\nCertain content, products and services available via our Service may include materials from third-parties.<br/>\r\n<br/>\r\nThird-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.<br/>\r\n<br/>\r\nWe are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</b><br/>\r\n<br/>\r\nIf, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.<br/>\r\n<br/>\r\nWe may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.<br/>\r\n<br/>\r\nYou agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 10 - PERSONAL INFORMATION</b><br/>\r\n<br/>\r\nYour submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</b><br/>\r\n<br/>\r\nOccasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).<br/>\r\n<br/>\r\nWe undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 12 - PROHIBITED USES</b><br/>\r\n<br/>\r\nIn addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</b><br/>\r\n<br/>\r\nWe do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.<br/>\r\n<br/>\r\nWe do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br/>\r\n<br/>\r\nYou agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.<br/>\r\n<br/>\r\nYou expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br/>\r\n<br/>\r\nIn no case shall The Pixelated Planet, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 14 - INDEMNIFICATION</b><br/>\r\n<br/>\r\nYou agree to indemnify, defend and hold harmless The Pixelated Planet and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 15 - SEVERABILITY</b><br/>\r\n<br/>\r\nIn the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 16 - TERMINATION</b><br/>\r\n<br/>\r\nThe obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br/>\r\n<br/>\r\nThese Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.<br/>\r\n<br/>\r\nIf in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 17 - ENTIRE AGREEMENT</b><br/>\r\n<br/>\r\nThe failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br/>\r\n<br/>\r\nThese Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br/>\r\n<br/>\r\nAny ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 18 - GOVERNING LAW</b><br/>\r\n<br/>\r\nThese Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of 2515 4th Ave, Seattle, WA, 98121, United States.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 19 - CHANGES TO TERMS OF SERVICE</b><br/>\r\n<br/>\r\nYou can review the most current version of the Terms of Service at any time at this page.<br/>\r\n<br/>\r\nWe reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.<br/>\r\n<br/>\r\n<br/>\r\n<b>SECTION 20 - CONTACT INFORMATION</b><br/>\r\n<br/>\r\nQuestions about the Terms of Service should be sent to us at hello@thepixelatedplanet.com.<br/><br/>\r\n</div>\r\n\r\n<div class=\"footer\">\r\n    <footer></footer>\r\n</div>"

/***/ },
/* 96 */
/***/ function(module, exports) {

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(workshopDetails.imageLink)\" alt=\"workshop image\"\r\n    />\r\n</div>\r\n\r\n<div class=\"wsd-name\">{{workshopDetails.name}}</div>\r\n\r\n<div class=\"details-container\">\r\n    <div>\r\n        <div class=\"detail-tabs\">\r\n\r\n            <!--Tab headings-->\r\n            <div class=\"tab\">\r\n                <button class=\"tablinks\" *ngFor=\"let tab of tabs; let i=index;\" [ngClass]=\"{'active': tab.showTab}\" (click)=\"openTabs(i)\">{{tab.label}}</button>\r\n            </div>\r\n\r\n            <!--Description tab-->\r\n            <div id=\"{{tabs[0].label}}\" [hidden]=\"!tabs[0].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[0].label}}</h3>\r\n                <p [innerHTML]=\"workshopDetails.description\"></p>\r\n            </div>\r\n\r\n            <!--Gallery tab-->\r\n            <div id=\"{{tabs[1].label}}\" [hidden]=\"!tabs[1].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[1].label}}</h3>\r\n                <img class=\"gallery-image hover-shadow cursor\" *ngFor=\"let image of imagesLink;let i = index\" [src]=\"image.imageLink\" alt=\"workshop image\"\r\n                    (click)=\"openModal(i+1)\" />\r\n            </div>\r\n\r\n            <!--Photographer tab-->\r\n            <div id=\"{{tabs[2].label}}\" [hidden]=\"!tabs[2].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[2].label}}</h3>\r\n                <div class=\"photographer-information\" *ngFor=\"let photographer of workshopDetails.photographers;\">\r\n                    <div class=\"profile-photo\">\r\n                        <img class=\"profile-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(photographer.profilePhotoLink)\" alt=\"workshop image\"\r\n                        />\r\n                    </div>\r\n                    <h4>\r\n                        <span>{{photographer.firstName}}</span>\r\n                        <span>{{photographer.lastName}}</span>\r\n                    </h4>\r\n                    <div class=\"detail-location\">\r\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                        <span>{{photographer.locationName}}</span>\r\n                    </div>\r\n                    <div class=\"website-link\">\r\n                        <a href=\"{{photographer?.websiteLink}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website</a>\r\n                    </div>\r\n                    <p [innerHTML]=\"photographer.moreInformation\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Workshop highlights-->\r\n        <div class=\"highlights\">\r\n            <div class=\"wsd-link\">\r\n                <h4 class=\"highlight-headings\">Workshop Link</h4>\r\n                <a href=\"{{workshopDetails.link}}\" target=\"_blank\"><i class=\"fa fa-link\"></i> Workshop link\r\n        </a>\r\n            </div>\r\n            <div class=\"wsd-location\">\r\n                <h4 class=\"highlight-headings\">Location</h4>\r\n                <i class=\"fa fa-map-marker\"></i>\r\n                <span>{{workshopDetails.locationName}}</span>\r\n            </div>\r\n            <div class=\"wsd-price\">\r\n                <h4 class=\"highlight-headings\">Price Range</h4>\r\n                <i class=\"fa fa-usd\"></i> <span *ngIf=\"workshopDetails.minCost !== workshopDetails.maxCost\">{{workshopDetails.minCost}} - </span>{{workshopDetails.maxCost}}\r\n            </div>\r\n            <div class=\"wsd-dates\">\r\n                <h4 class=\"highlight-headings\">Dates</h4>\r\n                <div class=\"dates-information\" *ngFor=\"let detail of workshopDetails.multiWorkshopDetails;\">\r\n                    <div>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        <span>{{this.formatDate(detail.startDate)}} - {{this.formatDate(detail.endDate)}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Image gallery modal-->\r\n        <div id=\"myModal\" [ngClass]=\"{'hide-modal': hideModal}\" class=\"image-modal\">\r\n            <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\r\n            <div class=\"image-modal-content\">\r\n\r\n                <div *ngFor=\"let image of imagesLink;let i = index\" class=\"slides\" [ngClass]=\"{'hideImage': image.hideImage}\">\r\n                    <img [src]=\"image.imageLink\" class=\"modal-image\">\r\n                </div>\r\n            </div>\r\n\r\n            <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n            <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n    <div>\r\n        <div class=\"footer\">\r\n            <footer></footer>\r\n        </div>\r\n    </div>"

/***/ },
/* 97 */
/***/ function(module, exports) {

module.exports = "<div class=\"filters-container\">\r\n    <div class=\"dropdown-filter\">\r\n        <dropdown (selectionChanged)=\"updateCategoryList($event)\" [dataModel]=\"categories\"></dropdown>\r\n    </div>\r\n\r\n    <div class=\"autocomplete-filter\">\r\n        <autocomplete (selectionChanged)=\"updateLocation($event)\"></autocomplete>\r\n    </div>\r\n\r\n    <div class=\"date-picker\">\r\n        <date-picker (selectedFromChanged)=\"getFromDate($event)\" (selectedToChanged)=\"getToDate($event)\"></date-picker>\r\n    </div>\r\n\r\n    <div class=\"price-filter\">\r\n        <input #minPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Min. price\" (blur)=\"updateMinPrice(minPriceInput.value)\"\r\n            (oninput)=\"updateMinPrice(minPriceInput.value)\" (onchange)=\"updateMinPrice(minPriceInput.value)\" (change)=\"updateMinPrice(minPriceInput.value)\"\r\n            [value]=\"minPriceValue\"\r\n        />\r\n        <input #maxPriceInput type=\"number\" min=\"0\" step=\"100\" placeholder=\"Max. price\" (blur)=\"updateMaxPrice(maxPriceInput.value)\"\r\n            (oninput)=\"updateMaxPrice(maxPriceInput.value)\" (onchange)=\"updateMaxPrice(maxPriceInput.value)\" (change)=\"updateMaxPrice(maxPriceInput.value)\"\r\n            [value]=\"maxPriceValue\"\r\n        />\r\n    </div>\r\n\r\n    <button class=\"get-list-btn\" (click)=\"toggleFilter()\"><span>Filter</span>  <i class=\"fa fa-filter\" aria-hidden=\"true\"></i></button>\r\n</div>"

/***/ },
/* 98 */
/***/ function(module, exports) {

module.exports = "<div class=\"workshop-list\">\r\n    <div *ngIf=\"asyncData?.length > 0\">\r\n        <article class=\"entity\" *ngFor=\"let data of asyncData\">\r\n            <a [href]=\"createWorkshopDetailsUrl(data.workshopId, data.name)\">\r\n                <div class=\"inner\">\r\n                    <object class=\"image\" [data]=\"this.sanitizeUrl(this.workshopRepository.globalConstants.resolveImageUrl(data.imageLink))\" type=\"image/png\">\r\n                        <img class=\"image\" [src]=\"this.workshopRepository.globalConstants.resolveLocalImageUrl(data.imageLink)\" alt=\"workshop image\" />\r\n                    </object>\r\n                    <h1 class=\"name truncate\" title=\"{{ data.name }}\">\r\n                        {{ data.name }}\r\n                    </h1>\r\n                    <hr>\r\n                    <div class=\"location\">\r\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                        <span>{{data.locationName}}</span>\r\n                    </div>\r\n                    <div class=\"date\">\r\n                        <span>{{this.formatDate(data.startDateFirst)}}</span>\r\n                        <span *ngIf=\"data.startDateFirst != data.endDateFirst\">-</span>\r\n                        <span *ngIf=\"data.startDateFirst != data.endDateFirst\"> {{this.formatDate(data.endDateFirst)}} </span>\r\n                    </div>\r\n                    <div class=\"price\" *ngIf=\"data.minCost == data.maxCost\">{{data.costCurrency}} {{data.minCost}}</div>\r\n                    <div class=\"price\" *ngIf=\"data.minCost < data.maxCost\">{{data.costCurrency}} {{data.minCost}}-{{data.maxCost}}</div>\r\n                </div>\r\n            </a>\r\n        </article>\r\n        <div *ngIf=\"itemsPerPage > 4\" class=\"ws-pages\">\r\n            <a class=\"page-numbers\" *ngIf=\"pageNumbers\" [ngClass]=\"{'disabled': activePage <=1 }\" [href]=\"createPageLink(activePage-1)\">\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i><span>Previous</span></a>\r\n            <a class=\"page-numbers\" [ngClass]=\"{'active-page': activePage == page}\" *ngFor=\"let page of pageNumbers;\" [href]=\"createPageLink(page)\">{{page}}</a>\r\n            <a class=\"page-numbers\" *ngIf=\"pageNumbers\" [ngClass]=\"{'disabled': activePage == pageNumbers.length }\" [href]=\"createPageLink(activePage-1+2)\"><span>Next</span>\r\n            <span class=\"chevron-wrapper\"><i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\r\n            <i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i></span></a>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"no-result-msg\" *ngIf=\"asyncData?.length == 0\">\r\n        Sorry, we found 0 results. Please try different filters.\r\n    </div>\r\n</div>"

/***/ },
/* 99 */
/***/ function(module, exports) {

module.exports = "<div class=\"ws-container\">\r\n    <navi-bar [showFilters]=\"true\" (filtersDropdownToggle)=\"toggleFilterDropdown($event)\"></navi-bar>\r\n    <div class=\"filters\" [ngClass]=\"{'hideFilter': hideFilter}\" id=\"filters\">\r\n        <workshop-filter (minPriceFilterChanged)=\"setMinPrice($event)\" (maxPriceFilterChanged)=\"setMaxPrice($event)\" (fromDateChanged)=\"setFromDate($event)\"\r\n            (toDateChanged)=\"setToDate($event)\" (locationFilterChanged)=\"setLocationIdList($event)\" (categoryFilterChanged)=\"setCategoryList($event)\"\r\n            (applyFilters)=\"toggleFilter($event)\"></workshop-filter>\r\n    </div>\r\n    <div>\r\n        <div class=\"list\">\r\n            <workshops-list [activePage]=\"pageNumber\"></workshops-list>\r\n            <div class=\"footer\">\r\n                <footer></footer>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

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

module.exports = require("@angular/platform-browser");

/***/ },
/* 105 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 108 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 109 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 110 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 111 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 112 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 113 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 114 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 115 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 116 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 118 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 119 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 120 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 121 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 122 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 123 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 124 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 125 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 126 */
/***/ function(module, exports) {

module.exports = require("ng2-pagination");

/***/ },
/* 127 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 128 */
/***/ function(module, exports) {

module.exports = require("rxjs");

/***/ },
/* 129 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/observable/empty");

/***/ },
/* 130 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/catch");

/***/ },
/* 131 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ },
/* 132 */
/***/ function(module, exports) {

module.exports = require("rxjs/add/operator/toPromise");

/***/ },
/* 133 */,
/* 134 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU3NzY4M2JiZTZmNDZhZTdmZWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIubG9jYWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbXByZXNzaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1pbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZzItcGFnaW5hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUl4QztJQWNJO1FBSFEsZ0JBQVcsR0FBK0IsRUFBRSxDQUFDO1FBQzdDLG9CQUFlLEdBQThCLEVBQUUsQ0FBQztRQUlwRCxJQUFJLENBQUMs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QVEsSUFBSSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBQzFILENBQUM7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbFMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoTyxDQUFDO0lBRUQs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bUIsR0FBRyxjQUFjLEdBQUcsY0FBYyxzTkFBc04sNEJBQTRCLDZRQUE2USxrQ0FBa0Msb0NBQW9DLHFDQUFxQyxNQUFNLGlGQUFpRiw4Q0FBOEMsb2M7Ozs7OztBQ0EvNEUsdU1BQXVNLHlCQUF5Qix5ckI7Ozs7Ozs7O0FDQWhPLDhDOzs7Ozs7QUNBQSwwQzs7Ozs7O0FDQUEsc0Q7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSx1RTs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLHlEOzs7Ozs7QUNBQSx3Qzs7Ozs7O0FDQUEsOEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSxpRDs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLDZDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLG9EOzs7Ozs7QUNBQSxrRDs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSw0Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxnRDs7Ozs7O0FDQUEsb0M7Ozs7OztBQ0FBLDJDOzs7Ozs7QUNBQSxpQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLHNEOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLHdEIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTM0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTc3NjgzYmJlNmY0NmFlN2ZlZSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJTG9jYXRpb24sIElQaG90b2dyYXBoZXJ9IGZyb20gJy4uL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5XHJcbntcclxuICAgIHByaXZhdGUgY2RuQmFzZVVybDtcclxuICAgIHByaXZhdGUgc2VydmljZUJhc2VVcmw7XHJcbiAgICBwcml2YXRlIHBpeGVsYXRlZFBsYW5ldEFQSVVybDtcclxuICAgIHByaXZhdGUgbG9jYXRpb25zVXJsO1xyXG4gICAgcHJpdmF0ZSB3b3Jrc2hvcFR5cGVzVXJsO1xyXG4gICAgcHJpdmF0ZSBwaG90b2dyYXBoZXJzVXJsO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbnM6SUxvY2F0aW9uW107XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wVHlwZXM6c3RyaW5nW107XHJcbiAgICBwcml2YXRlIHBob3RvZ3JhcGhlcnM6SVBob3RvZ3JhcGhlcltdO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbk1hcDoge1trZXk6IG51bWJlcl06IElMb2NhdGlvbn0gPSB7fTtcclxuICAgIHByaXZhdGUgbG9jYXRpb25NYXBOYW1lOntba2V5OiBzdHJpbmddOiBJTG9jYXRpb259ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2RuQmFzZVVybCA9IGBodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0YDtcclxuICAgICAgICB0aGlzLnNlcnZpY2VCYXNlVXJsID0gYGh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0c2VydmljZS5henVyZXdlYnNpdGVzLm5ldGA7XHJcbiAgICAgICAgdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmwgPSBgJHt0aGlzLnNlcnZpY2VCYXNlVXJsfS9hcGkvUGl4ZWxhdGVkYDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Mb2NhdGlvbnNgO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BUeXBlc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Xb3Jrc2hvcFR5cGVzYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9uc1VybCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVXb3Jrc2hvcHNVcmwocGFnZTpudW1iZXIsIHN0YXJ0RGF0ZTpzdHJpbmcsIGVuZERhdGU6c3RyaW5nLCBtaW5QcmljZTpudW1iZXIsIG1heFByaWNlOm51bWJlciwgbG9jYXRpb25zOiBzdHJpbmcsIGNhdGVnb3JpZXM6IHN0cmluZykge1xyXG4gICAgICAgIGxldCB1cmwgPSBgL3dvcmtzaG9wcy8ke3BhZ2V9P3N0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZX0mZW5kRGF0ZT0ke2VuZERhdGV9YDtcclxuICAgICAgICB1cmwgKz0gbWluUHJpY2UgPyBgJm1pblByaWNlPSR7bWluUHJpY2V9YCA6IGBgO1xyXG4gICAgICAgIHVybCArPSBtYXhQcmljZSA/IGAmbWF4UHJpY2U9JHttYXhQcmljZX1gIDogYGA7XHJcbiAgICAgICAgdXJsICs9IGxvY2F0aW9ucyA/IGAmbG9jYXRpb25zPSR7bG9jYXRpb25zfWAgOiBgYDtcclxuICAgICAgICB1cmwgKz0gY2F0ZWdvcmllcyA/IGAmY2F0ZWdvcmllcz0ke2NhdGVnb3JpZXN9YCA6IGBgO1xyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXREZWZhdWx0U3RhcnREYXRlKCkge1xyXG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGAke3RvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldERlZmF1bHRFbmREYXRlKCkge1xyXG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIGAkeyh0b2RheS5nZXRGdWxsWWVhcigpKzMpLnRvU3RyaW5nKCl9LzEyLzMxYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V29ya3Nob3BUeXBlc1VybCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ya3Nob3BUeXBlc1VybDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzb2x2ZUltYWdlVXJsKHBhdGg6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNkbkJhc2VVcmwgKyBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlTG9jYWxJbWFnZVVybChwYXRoOnN0cmluZylcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gXCIvYXNzZXRzXCIgKyBwYXRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhdGlvbnMoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvY2F0aW9ucztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldFdvcmtzaG9wVHlwZXMoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmtzaG9wVHlwZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExvY2F0aW9ucyhsb2NhdGlvbnM6SUxvY2F0aW9uW10pXHJcbiAgICB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gPElMb2NhdGlvbj5sb2NhdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25NYXBbbG9jYXRpb24uaWRdID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25NYXBOYW1lW2xvY2F0aW9uLm5hbWVdID0gbG9jYXRpb247XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxvY2F0aW9ucyA9IGxvY2F0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0V29ya3Nob3BUeXBlcyh3b3Jrc2hvcFR5cGVzOnN0cmluZ1tdKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BUeXBlcyA9IHdvcmtzaG9wVHlwZXM7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5LnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5JztcclxuXHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxvY2F0aW9uIHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wT3ZlcnZpZXcge1xyXG4gICAgd29ya3Nob3BJZDogbnVtYmVyLFxyXG4gICAgd29ya3Nob3BUeXBlOiBzdHJpbmcsXHJcbiAgICBudW1iZXJPZldvcmtzaG9wczogbnVtYmVyLFxyXG4gICAgc3RhcnREYXRlRmlyc3Q/OiBEYXRlLFxyXG4gICAgZW5kRGF0ZUZpcnN0PzogRGF0ZSxcclxuICAgIG1pbkNvc3Q/OiBudW1iZXIsXHJcbiAgICBtYXhDb3N0PzogbnVtYmVyLFxyXG4gICAgY29zdEN1cnJlbmN5Pzogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgaW1hZ2VMaW5rOiBzdHJpbmcsXHJcbiAgICBsb2NhdGlvbklkOiBudW1iZXIsXHJcbiAgICBsb2NhdGlvbk5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElXb3Jrc2hvcER0byB7XHJcbiAgICB3b3Jrc2hvcHM6IElXb3Jrc2hvcE92ZXJ2aWV3W10sXHJcbiAgICB0b3RhbDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBob3RvZ3JhcGhlciB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgcHJvZmlsZVBob3RvTGluazogc3RyaW5nO1xyXG4gICAgd2Vic2l0ZUxpbms6IHN0cmluZztcclxuICAgIGxvY2F0aW9uSWQ/OiBudW1iZXI7XHJcbiAgICBsb2NhdGlvbk5hbWU6IHN0cmluZztcclxuICAgIG1vcmVJbmZvOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU11bHRpV29ya3Nob3BEZXRhaWxzIHtcclxuICAgIHN0YXJ0RGF0ZTogRGF0ZTtcclxuICAgIGVuZERhdGU6IERhdGU7XHJcbiAgICBjb3N0PzogbnVtYmVyO1xyXG4gICAgbGluazogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElXb3Jrc2hvcERldGFpbHMge1xyXG4gICAgd29ya3Nob3BJZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGl0aW5lcmFyeTogSUl0aW5lcmFyeVtdO1xyXG4gICAgYWRkdGlvbmFsSW5mb3JtYXRpb246IHN0cmluZztcclxuICAgIGltYWdlTGluazogc3RyaW5nO1xyXG4gICAgbGluaz86IHN0cmluZztcclxuICAgIGxvY2F0aW9uSWQ6IG51bWJlcjtcclxuICAgIGxvY2F0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgd29ya3Nob3BUeXBlOiBzdHJpbmc7XHJcbiAgICBtdWx0aVdvcmtzaG9wRGV0YWlsczogSU11bHRpV29ya3Nob3BEZXRhaWxzW107XHJcbiAgICBtaW5Db3N0OiBudW1iZXI7XHJcbiAgICBtYXhDb3N0OiBudW1iZXI7XHJcbiAgICBjb3N0Q3VycmVuY3k6IHN0cmluZztcclxuICAgIGltYWdlczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUl0aW5lcmFyeSB7XHJcbiAgICBkYXk6IG51bWJlcjtcclxuICAgIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgICBjb250ZW50OiBzdHJpbmc7XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wUmVwb3NpdG9yeSB7XHJcblxyXG4gICAgcHVibGljIGdsb2JhbENvbnN0YW50cztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTogR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSkge1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuZ2V0V29ya3Nob3BUeXBlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wT3ZlcnZpZXcocGF0aDogc3RyaW5nLCBwYWdlOiBudW1iZXIsIGl0ZW1zUGVyUGFnZTogbnVtYmVyKTogUHJvbWlzZTxJV29ya3Nob3BEdG8+IHtcclxuICAgICAgICBsZXQgcXVlcnkgPSBgJHtwYXRofSZwYWdlTnVtYmVyPSR7cGFnZX0mbnVtYmVyT2ZSZXN1bHRzPSR7aXRlbXNQZXJQYWdlfWA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQocXVlcnkpXHJcbiAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYXRpb25zSW50ZXJuYWwoKTogUHJvbWlzZTxJTG9jYXRpb25bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9uc1VybCgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBJTG9jYXRpb25bXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TG9jYXRpb25zKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldExvY2F0aW9ucygpO1xyXG4gICAgICAgIGlmKGRhdGEpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TG9jYXRpb25zSW50ZXJuYWwoKS50aGVuKGxvY2F0aW9ucyA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nbG9iYWxDb25zdGFudHMuc2V0TG9jYXRpb25zKGxvY2F0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbG9jYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFdvcmtzaG9wVHlwZXNJbnRlcm5hbCgpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0V29ya3Nob3BUeXBlc1VybCgpKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BUeXBlcygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRXb3Jrc2hvcFR5cGVzKCk7XHJcbiAgICAgICAgaWYoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgd1R5cGVzID0gdGhpcy5nZXRXb3Jrc2hvcFR5cGVzSW50ZXJuYWwoKS50aGVuKHdvcmtzaG9wVHlwZXMgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzLnNldFdvcmtzaG9wVHlwZXMod29ya3Nob3BUeXBlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd29ya3Nob3BUeXBlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB3VHlwZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkOiBzdHJpbmcpOiBQcm9taXNlPElXb3Jrc2hvcERldGFpbHM+IHtcclxuICAgICAgICBsZXQgdXJsID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wRGV0YWlscz93b3Jrc2hvcElkPSR7d29ya3Nob3BJZH1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8SVdvcmtzaG9wRGV0YWlscz5yZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcnRpY3MyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcnRpY3MyXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnksIElXb3Jrc2hvcE92ZXJ2aWV3IH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd3b3Jrc2hvcHMtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3BzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBhY3RpdmVQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcXVlcnlQYXRoOiBzdHJpbmc7XHJcbiAgICBpdGVtc1BlclBhZ2U6IG51bWJlcjtcclxuXHJcbiAgICBhc3luY0RhdGE6IElXb3Jrc2hvcE92ZXJ2aWV3W107XHJcbiAgICBwYWdlOiBudW1iZXIgPSAxO1xyXG4gICAgdG90YWw6IG51bWJlcjtcclxuICAgIHBhZ2VOdW1iZXJzOiBudW1iZXJbXTtcclxuICAgIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgICB3b3Jrc2hvcHM6IElXb3Jrc2hvcE92ZXJ2aWV3W107XHJcblxyXG4gICAgcHJpdmF0ZSBhbmd1bGFydGljczI6IGFueTtcclxuICAgIHByaXZhdGUgY2RSZWY6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSB3b3Jrc2hvcFJlcG9zaXRvcnk6IFdvcmtzaG9wUmVwb3NpdG9yeSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIgPSBhbmd1bGFydGljczI7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcHMgPSBbXTtcclxuICAgICAgICB0aGlzLmNkUmVmID0gY2RSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2FuaXRpemVVcmwodXJsOiBzdHJpbmcpIDogU2FmZVVybCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHZhciBtb250aE5hbWVzID0gW1xyXG4gICAgICAgICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLCBcIkRlY1wiXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgZGF0ZVZhbCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlVmFsLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGVWYWwuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGVWYWwuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSAke3llYXJ9YDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3Jrc2hvcHNEYXRhKHBhdGg6IHN0cmluZywgcGFnZTogbnVtYmVyLCB3c1BlclBhZ2U6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ0dldFdvcmtzaG9wc0V2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wc0xpc3RDb21wb25lbnQnIH0gfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnF1ZXJ5UGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy5pdGVtc1BlclBhZ2UgPSB3c1BlclBhZ2U7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0V29ya3Nob3BPdmVydmlldyhwYXRoLCBwYWdlLCB3c1BlclBhZ2UpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXJzID0gQXJyYXkoTWF0aC5jZWlsKHJlcy50b3RhbCAvIHdzUGVyUGFnZSkpLmZpbGwoMCkubWFwKCh4LCBpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzeW5jRGF0YSA9IHJlcy53b3Jrc2hvcHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXb3Jrc2hvcERldGFpbHNVcmwod29ya3Nob3BJZDogc3RyaW5nLCB3b3Jrc2hvcE5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgd29ya3Nob3BOYW1lID0gd29ya3Nob3BOYW1lLnJlcGxhY2UoL1sgKCkmI10vZywgXCItXCIpO1xyXG4gICAgICAgIHJldHVybiBgL3Bob3RvZ3JhcGh5LXdvcmtzaG9wLWRldGFpbHMvJHt3b3Jrc2hvcE5hbWV9LyR7d29ya3Nob3BJZH1gO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBhZ2VMaW5rKHBhZ2VOdW1iZXI6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlVXJsKHBhZ2VOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVVcmwocGFnZSA6IG51bWJlcikgOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBsb2NhdGlvbnM6IHN0cmluZztcclxuICAgICAgICBsZXQgY2F0ZWdvcmllczogc3RyaW5nO1xyXG4gICAgICAgIGxldCBzdGFydERhdGU6IHN0cmluZztcclxuICAgICAgICBsZXQgZW5kRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtaW5QcmljZTogc3RyaW5nO1xyXG4gICAgICAgIGxldCBtYXhQcmljZTogc3RyaW5nO1xyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbnMgPSBwYXJhbXNbJ2xvY2F0aW9ucyddO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IHBhcmFtc1snY2F0ZWdvcmllcyddO1xyXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlID0gcGFyYW1zWydzdGFydERhdGUnXTtcclxuICAgICAgICAgICAgICAgIGVuZERhdGUgPSBwYXJhbXNbJ2VuZERhdGUnXTtcclxuICAgICAgICAgICAgICAgIG1pblByaWNlID0gcGFyYW1zWydtaW5QcmljZSddO1xyXG4gICAgICAgICAgICAgICAgbWF4UHJpY2UgPSBwYXJhbXNbJ21heFByaWNlJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAgICAgICBzdGFydERhdGUgPSAhc3RhcnREYXRlID8gdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2xvYmFsQ29uc3RhbnRzLmdldERlZmF1bHRTdGFydERhdGUoKSA6IHN0YXJ0RGF0ZTtcclxuICAgICAgICBlbmREYXRlID0gIWVuZERhdGUgPyB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMuZ2V0RGVmYXVsdEVuZERhdGUoKSA6IGVuZERhdGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMuY3JlYXRlV29ya3Nob3BzVXJsKHBhZ2UsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbWluUHJpY2UsIG1heFByaWNlLCBsb2NhdGlvbnMsIGNhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hYm91dC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZScsXHJcbiAgICBob3N0OiB7ICcoZG9jdW1lbnQ6Y2xpY2spJzogJ2hhbmRsZUNsaWNrKCRldmVudCknIH0sXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVDb21wb25lbnQge1xyXG4gICAgXHJcbiAgICBwdWJsaWMgcXVlcnkgPSAnJztcclxuICAgIHB1YmxpYyBjb3VudHJpZXMgPSBbXTtcclxuICAgIHB1YmxpYyBmaWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSB3b3Jrc2hvcFJlcG9zaXRvcnk6IFdvcmtzaG9wUmVwb3NpdG9yeTtcclxuXHJcbiAgICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihteUVsZW1lbnQ6IEVsZW1lbnRSZWYsIHdvcmtzaG9wUmVwbzogV29ya3Nob3BSZXBvc2l0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gbXlFbGVtZW50O1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5ID0gd29ya3Nob3BSZXBvO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldExvY2F0aW9ucygpLnRoZW4obG9jID0+IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRyaWVzLnB1c2gobG9jW2ldLm5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5ICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gdGhpcy5jb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnF1ZXJ5LnRvTG93ZXJDYXNlKCkpID4gLTE7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhldmVudCkge1xyXG4gICAgICAgIHZhciBjbGlja2VkQ29tcG9uZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHZhciBpbnNpZGUgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkQ29tcG9uZW50ID09PSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaW5zaWRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGlja2VkQ29tcG9uZW50ID0gY2xpY2tlZENvbXBvbmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgIH0gd2hpbGUgKGNsaWNrZWRDb21wb25lbnQpO1xyXG4gICAgICAgIGlmICghaW5zaWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHRoaXMucXVlcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRhY3QtdXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udGFjdFVzQ29tcG9uZW50IHtcclxuXHJcbiAgc3VibWl0dGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZm5hbWU6IHN0cmluZztcclxuICBzdWJqZWN0VGV4dDogc3RyaW5nO1xyXG4gIG1lc3NhZ2VUZXh0OiBzdHJpbmc7XHJcbiAgZW1haWxJZDogc3RyaW5nO1xyXG4gIHNob3dNZXNzYWdlQm94OiBib29sZWFuO1xyXG4gIHN1Ym1pdE1lc3NhZ2U6IHN0cmluZztcclxuICBwcml2YXRlIGZpZWxkczogc3RyaW5nO1xyXG5cclxuICBvblN1Ym1pdCgpIHtcclxuICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2hvd01lc3NhZ2VCb3ggPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGlkZU1lc3NhZ2Vib3goKSB7XHJcbiAgICB0aGlzLnNob3dNZXNzYWdlQm94ID0gZmFsc2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zdWJtaXRNZXNzYWdlID0gXCJNZXNzYWdlIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcIjtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXIgfSBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGUtcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IHtcclxuICBwcml2YXRlIGZyb21EYXRlUGlja2VyT3B0aW9ucztcclxuICBwcml2YXRlIHRvRGF0ZVBpY2tlck9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBmcm9tRGF0ZUxhYmVsOiBzdHJpbmcgPSBcIkZyb20gZGF0ZVwiO1xyXG4gIHByaXZhdGUgdG9EYXRlTGFiZWw6IHN0cmluZyA9IFwiVG8gZGF0ZVwiO1xyXG4gIHByaXZhdGUgcHJldmlvdXNEYXRlO1xyXG4gIHByaXZhdGUgc2VsRnJvbURhdGU6IHN0cmluZztcclxuICBwcml2YXRlIHNlbFRvRGF0ZTogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGcm9tQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRUb0NoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBwcmV2aW91cyA9IG5ldyBEYXRlKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCksIGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxLCBjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICAgIHRoaXMucHJldmlvdXNEYXRlID0geyB5ZWFyOiBwcmV2aW91cy5nZXRGdWxsWWVhcigpLCBtb250aDogcHJldmlvdXMuZ2V0TW9udGgoKSwgZGF5OiBwcmV2aW91cy5nZXREYXRlKCkgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRUb0RhdGUobWlsaXNlY29uZHM6IG51bWJlcikge1xyXG4gICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShtaWxpc2Vjb25kcyk7XHJcbiAgICB0aGlzLnNlbFRvRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGcm9tRGF0ZShtaWxpc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG1pbGlzZWNvbmRzKTtcclxuICAgIHRoaXMuc2VsRnJvbURhdGUgPSBkYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwxMCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxyXG4gICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIGRpc2FibGVVbnRpbDogdGhpcy5wcmV2aW91c0RhdGVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy50b0RhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcclxuICAgICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgICAgbW9udGhTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlVW50aWw6IHRoaXMucHJldmlvdXNEYXRlXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBvbkZyb21EYXRlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICB2YXIgc2VsZWN0ZWREYXRlID0gZXZlbnQuZGF0ZTtcclxuICAgIHRoaXMudG9EYXRlUGlja2VyT3B0aW9ucyA9IHtcclxuICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICBtYXJrQ3VycmVudERheTogdHJ1ZSxcclxuICAgICAgeWVhclNlbGVjdG9yOiB0cnVlLFxyXG4gICAgICBtb250aFNlbGVjdG9yOiB0cnVlLFxyXG4gICAgICBkaXNhYmxlVW50aWw6IHtcclxuICAgICAgICB5ZWFyOiBzZWxlY3RlZERhdGUueWVhcixcclxuICAgICAgICBtb250aDogc2VsZWN0ZWREYXRlLm1vbnRoLFxyXG4gICAgICAgIGRheTogc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWRGcm9tQ2hhbmdlZC5lbWl0KHNlbGVjdGVkRGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblRvRGF0ZUNoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgdmFyIHNlbGVjdGVkRGF0ZSA9IGV2ZW50LmRhdGU7XHJcbiAgICB0aGlzLmZyb21EYXRlUGlja2VyT3B0aW9ucyA9IHtcclxuICAgICAgZGlzYWJsZVVudGlsOiB0aGlzLnByZXZpb3VzRGF0ZSxcclxuICAgICAgZGlzYWJsZVNpbmNlOiB7XHJcbiAgICAgICAgeWVhcjogc2VsZWN0ZWREYXRlLnllYXIsXHJcbiAgICAgICAgbW9udGg6IHNlbGVjdGVkRGF0ZS5tb250aCxcclxuICAgICAgICBkYXk6IHNlbGVjdGVkRGF0ZS5kYXlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMuc2VsZWN0ZWRUb0NoYW5nZWQuZW1pdChzZWxlY3RlZERhdGUpO1xyXG4gIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Vycm9yLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Vycm9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbkBWaWV3Q2hpbGQoV29ya3Nob3BzTGlzdENvbXBvbmVudCkgd29ya3Nob3BzTGlzdENoaWxkQ29tcDpXb3Jrc2hvcHNMaXN0Q29tcG9uZW50O1xyXG5cclxuICBwcml2YXRlIGdsb2JhbENvbnN0YW50cyA6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHRcdHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuXHRcdGxldCBlbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wcz9zdGFydERhdGVGaWx0ZXI9JHtzdGFydERhdGV9JmVuZERhdGVGaWx0ZXI9JHtlbmREYXRlfWA7XHJcblx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YShxdWVyeSwgMSwgNCk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMiB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcbmltcG9ydCB7TG9jYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5jc3MnXSAgICBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VSZWRpcmVjdENvbXBvbmVudCB7IFxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogYW55XHJcbiAgICBwcml2YXRlIHRpbWVyOmFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuXHRcdGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246TG9jYXRpb24sXHJcbiAgICAgICAgcHJpdmF0ZSBuZ1pvbmU6Tmdab25lKSB7XHJcblx0XHRcdHRoaXMuYW5ndWxhcnRpY3MyID0gYW5ndWxhcnRpY3MyO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nO1xyXG5cdFx0dGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgIHVybCA9IHBhcmFtc1snZXh0ZXJuYWxVcmwnXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnTmF2aWdhdGVUb0V4dGVybmFsVXJsJywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ05hdmlnYXRpb25FdmVudCcgfX0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IE9ic2VydmFibGUuaW50ZXJ2YWwoNTAwMCkuc3Vic2NyaWJlKHtcclxuICAgICAgICAgICAgICAgIG5leHQocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbmF2aWdhdGUgdG8gdGhlIFVSTCAoQXNzdW1lcyB0aGUgdXJsIGlzIGh0dHA6Ly8gb3IgaHR0cHM6Ly9cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj11cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnb0JhY2soKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBQcml2YWN5Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcFJlcG9zaXRvcnksIElXb3Jrc2hvcERldGFpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5J1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJbWFnZU9iamVjdCB7XHJcbiAgICBpbWFnZUxpbms6IHN0cmluZztcclxuICAgIGhpZGVJbWFnZTogYm9vbGVhblxyXG59XHJcblxyXG5pbnRlcmZhY2UgSVRhYnMge1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIHNob3dUYWI6IGJvb2xlYW47XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50IHtcclxuICAgIHdvcmtzaG9wRGV0YWlsczogSVdvcmtzaG9wRGV0YWlscztcclxuICAgIGltYWdlc0xpbms6IElJbWFnZU9iamVjdFtdO1xyXG4gICAgaGlkZU1vZGFsOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzbGlkZUluZGV4OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgcHJpdmF0ZSB0YWJzOiBJVGFic1tdO1xyXG5cclxuICAgIHByaXZhdGUgcHJldmlvdXNBY3RpdmVUYWI6IElUYWJzO1xyXG4gICAgcHJpdmF0ZSB0YWJjb250ZW50OiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PjtcclxuICAgIHByaXZhdGUgdGFiTGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcERldGFpbHMgPSA8YW55Pnt9O1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNsaWRlSW5kZXggPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU1vZGFsID0gdHJ1ZTtcclxuICAgICAgICBsZXQgd29ya3Nob3BJZDogc3RyaW5nO1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHdvcmtzaG9wSWQgPSBwYXJhbXNbJ2lkJ107XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXRXb3Jrc2hvcERldGFpbCh3b3Jrc2hvcElkKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3Jrc2hvcERldGFpbCh3b3Jrc2hvcElkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRXb3Jrc2hvcERldGFpbHMod29ya3Nob3BJZClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmtzaG9wRGV0YWlscyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEltZ0RhdGEoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwbHVzU2xpZGVzKG4pIHtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZXModGhpcy5zbGlkZUluZGV4ICs9IG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRTbGlkZShuKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCA9IG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTbGlkZXMobikge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gdGhpcy5pbWFnZXNMaW5rLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IHRvdGFsSW1hZ2VzKSB7IHRoaXMuc2xpZGVJbmRleCA9IDEgfVxyXG4gICAgICAgIGlmIChuIDwgMSkgeyB0aGlzLnNsaWRlSW5kZXggPSB0b3RhbEltYWdlcyAtIDEgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxJbWFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc0xpbmtbaV0uaGlkZUltYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMaW5rW3RoaXMuc2xpZGVJbmRleCAtIDFdLmhpZGVJbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRJbWdEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzTGluayA9IFtdO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BEZXRhaWxzLmltYWdlcy5mb3JFYWNoKCBpbWFnZVBhdGggPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaW1nT2JqID0gPElJbWFnZU9iamVjdD57fTtcclxuICAgICAgICAgICAgaW1nT2JqLmltYWdlTGluayA9IHRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlTG9jYWxJbWFnZVVybChpbWFnZVBhdGgpO1xyXG4gICAgICAgICAgICBpbWdPYmouaGlkZUltYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXNMaW5rLnB1c2goaW1nT2JqKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICB2YXIgbW9udGhOYW1lcyA9IFtcclxuICAgICAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcclxuICAgICAgICAgICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIixcclxuICAgICAgICAgICAgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIixcclxuICAgICAgICAgICAgXCJOb3ZcIiwgXCJEZWNcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGRhdGVWYWwgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZVZhbC5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBkYXRlVmFsLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlVmFsLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBgJHttb250aE5hbWVzW21vbnRoSW5kZXhdfSAke2RheX0gJHt5ZWFyfWA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGluaXRpYWxpemVUYWJzKCkge1xyXG4gICAgICAgIHRoaXMudGFicyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdhbGxlcnlcIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlBob3RvZ3JhcGhlcnNcIixcclxuICAgICAgICAgICAgICAgIHNob3dUYWI6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcblxyXG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYi5zaG93VGFiID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuVGFicyh0YWJOdW1iZXI6IG51bWJlcikgeyAgXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYi5zaG93VGFiID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50YWJzW3RhYk51bWJlcl0uc2hvd1RhYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYiA9IHRoaXMudGFic1t0YWJOdW1iZXJdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSwgSUxvY2F0aW9uLCBJUGhvdG9ncmFwaGVyIH0gZnJvbSAnLi4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSdcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnd29ya3Nob3AtZmlsdGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50IHtcclxuXHJcbiAgQE91dHB1dCgpIGZyb21EYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgdG9EYXRlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbG9jYXRpb25GaWx0ZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBjYXRlZ29yeUZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG1pblByaWNlRmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbWF4UHJpY2VGaWx0ZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBhcHBseUZpbHRlcnMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgXHJcbiAgcHJpdmF0ZSBhbmd1bGFydGljczI6IEFuZ3VsYXJ0aWNzMjtcclxuXHJcbiAgcHVibGljIGNpdGllczogYW55W107XHJcbiAgcHVibGljIGNhdGVnb3JpZXM6IGFueVtdO1xyXG5cclxuICAvLyBwcmljZSB2YWx1ZXNcclxuICBwcml2YXRlIG1pblByaWNlVmFsdWU6IG51bWJlcjtcclxuICBwcml2YXRlIG1heFByaWNlVmFsdWU6IG51bWJlcjtcclxuICBcclxuICAvKiogbGFiZWxzIGZvciBmaWx0ZXJzICovXHJcbiAgcHVibGljIGNpdHlEcm9wZG93bkxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIHBob3RvZ3JhcGhlckRyb3Bkb3duTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgY2F0ZWdvcnlEcm9wZG93bkxhYmVsOiBzdHJpbmc7XHJcbiAgcHVibGljIGZyb21EYXRlTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgdG9EYXRlTGFiZWw6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBjaGVja2JveEVsZW1lbnRzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+O1xyXG5cclxuICAvKiogZGF0ZSBmaWx0ZXJzICovXHJcbiAgcHVibGljIG1pbkZyb21EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBtYXhGcm9tRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgbWluVG9EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBtYXhUb0RhdGU6IERhdGU7XHJcbiAgcHVibGljIGZyb21EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyB0b0RhdGU6IERhdGU7XHJcblxyXG4gIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzOkdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgcHJpdmF0ZSB3b3Jrc2hvcFJlcG8gOiBXb3Jrc2hvcFJlcG9zaXRvcnk7XHJcblxyXG4gIHB1YmxpYyBzaG93RmlsdGVyOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKEF1dG9jb21wbGV0ZUNvbXBvbmVudCkgYXV0b2NvbXBsZXRlQ2hpbGRDb21wOkF1dG9jb21wbGV0ZUNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJDb21wb25lbnQpIGRhdGVQaWNrZXJDaGlsZENvbXA6RGF0ZVBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3b3Jrc2hvcFJlcG9zaXRvcnk6IFdvcmtzaG9wUmVwb3NpdG9yeSwgcHJpdmF0ZSBhOiBBbmd1bGFydGljczIsIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMiA9IGE7XHJcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgICB0aGlzLndvcmtzaG9wUmVwbyA9IHdvcmtzaG9wUmVwb3NpdG9yeTtcclxuICAgIFxyXG4gICAgdGhpcy51cGRhdGVDYXRlZ29yaWVzKCk7XHJcbiAgICBcclxuICAgIHRoaXMuY2l0eURyb3Bkb3duTGFiZWwgPSBcIkxvY2F0aW9uXCI7XHJcbiAgICB0aGlzLnBob3RvZ3JhcGhlckRyb3Bkb3duTGFiZWwgPSBcIlBob3RvZ3JhcGhlclwiO1xyXG4gICAgdGhpcy5jYXRlZ29yeURyb3Bkb3duTGFiZWwgPSBcIkNhdGVnb3J5XCI7XHJcbiAgICB0aGlzLmZyb21EYXRlTGFiZWwgPSBcIkZyb21cIjtcclxuICAgIHRoaXMudG9EYXRlTGFiZWwgPSBcIlRvXCI7XHJcblxyXG4gICAgdGhpcy5taW5Gcm9tRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLnNob3dGaWx0ZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWVzRnJvbVBhcmFtZXRlcnMobWluUHJpY2U6bnVtYmVyLCBtYXhQcmljZTpudW1iZXIsIGNhdGVnb3JpZXM6c3RyaW5nLCBsb2NhdGlvbnM6c3RyaW5nLCBzdGFydERhdGU6c3RyaW5nLCBlbmREYXRlOnN0cmluZylcclxuICB7XHJcbiAgICB0aGlzLm1pblByaWNlVmFsdWUgPSBtaW5QcmljZSB8fCBudWxsO1xyXG4gICAgdGhpcy5tYXhQcmljZVZhbHVlID0gbWF4UHJpY2UgfHwgbnVsbDtcclxuXHJcbiAgICBpZihlbmREYXRlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlckNoaWxkQ29tcC5zZXRUb0RhdGUoRGF0ZS5wYXJzZShlbmREYXRlKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldFRvRGF0ZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzdGFydERhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldEZyb21EYXRlKERhdGUucGFyc2Uoc3RhcnREYXRlKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldEZyb21EYXRlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGxvY2F0aW9ucylcclxuICAgIHtcclxuICAgICAgICB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRMb2NhdGlvbnMoKS50aGVuKGxvYyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbkZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxvYy5mb3JFYWNoKGxvY2F0aW9uID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobG9jYXRpb24uaWQgPT09ICtsb2NhdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGlsZENvbXAuc2VsZWN0KGxvY2F0aW9uLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighbG9jYXRpb25Gb3VuZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZUNoaWxkQ29tcC5zZWxlY3QoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hpbGRDb21wLnNlbGVjdChcIlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUNhdGVnb3JpZXMoKVxyXG4gIHtcclxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgdGhpcy53b3Jrc2hvcFJlcG8uZ2V0V29ya3Nob3BUeXBlcygpLnRoZW4od1R5cGVzID0+IHtcclxuICAgICAgICB3VHlwZXMuZm9yRWFjaCggd29ya3Nob3BUeXBlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5wdXNoKHtsYWJlbDp3b3Jrc2hvcFR5cGUsIHZhbHVlOndvcmtzaG9wVHlwZX0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZyb21EYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gdmFsdWU7XHJcblx0dGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnRnJvbURhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG4gICAgdGhpcy5mcm9tRGF0ZUNoYW5nZWQuZW1pdCh0aGlzLmZyb21EYXRlKTtcclxuICB9XHJcblxyXG4gIGdldFRvRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy50b0RhdGUgPSB2YWx1ZTtcclxuXHR0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdUb0RhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG5cdHRoaXMudG9EYXRlQ2hhbmdlZC5lbWl0KHRoaXMudG9EYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU1pblByaWNlKHZhbHVlOm51bWJlcilcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNaW5QcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLm1pblByaWNlRmlsdGVyQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdXBkYXRlTWF4UHJpY2UodmFsdWU6bnVtYmVyKVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ01heFByaWNlRmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuICAgIHRoaXMubWF4UHJpY2VGaWx0ZXJDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJzKGlucHV0TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5jaGVja2JveEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbbmFtZT0ke2lucHV0TmFtZX1dOmNoZWNrZWRgKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2JveEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB4ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5jaGVja2JveEVsZW1lbnRzW2ldO1xyXG4gICAgICBzZWxlY3RlZC5wdXNoKHgudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxlY3RlZDtcclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlTG9jYXRpb24odmFsdWU6IGFueSlcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdMb2NhdGlvbkZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICBsZXQgbG9jYXRpb25Gb3VuZCA9IGZhbHNlO1xyXG4gICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0TG9jYXRpb25zKCkudGhlbihsb2MgPT4ge1xyXG4gICAgICAgIGxvYy5mb3JFYWNoKGxvY2F0aW9uID0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYobG9jYXRpb24ubmFtZSA9PT0gdmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbkZpbHRlckNoYW5nZWQuZW1pdChsb2NhdGlvbi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmKCFsb2NhdGlvbkZvdW5kKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb25GaWx0ZXJDaGFuZ2VkLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZUNhdGVnb3J5TGlzdCh2YWx1ZTogc3RyaW5nKVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ0NhdGVnb3J5RmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuICAgIHRoaXMuY2F0ZWdvcnlGaWx0ZXJDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBFdmVudCwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV29ya3Nob3BzTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudCdcclxuaW1wb3J0IHsgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3BzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcHNDb21wb25lbnQge1xyXG5cdHByaXZhdGUgcXVlcnk6IHN0cmluZztcclxuXHRwcml2YXRlIHN0YXJ0RGF0ZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgZW5kRGF0ZTogc3RyaW5nO1xyXG5cdHByaXZhdGUgbG9jYXRpb25JZExpc3Q6c3RyaW5nO1xyXG5cdHByaXZhdGUgY2F0ZWdvcnlMaXN0OnN0cmluZztcclxuXHRwcml2YXRlIG1pblByaWNlOm51bWJlcjtcclxuXHRwcml2YXRlIG1heFByaWNlOm51bWJlcjtcclxuICAgIHByaXZhdGUgaGlkZUZpbHRlcjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcGFnZU51bWJlcjogbnVtYmVyO1xyXG5cclxuXHRwcml2YXRlIHJlYWRvbmx5IHdvcmtzaG9wc1BlclBhZ2U6IG51bWJlciA9IDg7XHRcclxuXHRcclxuXHRwcml2YXRlIGdsb2JhbENvbnN0YW50czpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG5cdFxyXG5cdEBWaWV3Q2hpbGQoV29ya3Nob3BzTGlzdENvbXBvbmVudCkgd29ya3Nob3BzTGlzdENoaWxkQ29tcDpXb3Jrc2hvcHNMaXN0Q29tcG9uZW50O1xyXG5cdEBWaWV3Q2hpbGQoV29ya3Nob3BGaWx0ZXJDb21wb25lbnQpIHdvcmtzaG9wc0ZpbHRlckNoaWxkQ29tcDpXb3Jrc2hvcEZpbHRlckNvbXBvbmVudDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnksIHByaXZhdGUgcm91dGU6QWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOlJvdXRlcilcclxuXHR7XHJcblx0XHR0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXJzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmlsdGVyRHJvcGRvd24oZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IGV2ZW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRQYXJhbWV0ZXJzKCkge1xyXG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSBwYXJhbXNbJ3BhZ2VOdW1iZXInXTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZS5xdWVyeVBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbklkTGlzdCA9IHBhcmFtc1snbG9jYXRpb25zJ107XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlMaXN0ID0gcGFyYW1zWydjYXRlZ29yaWVzJ107XHJcbiAgICAgICAgICAgIHRoaXMubWluUHJpY2UgPSBwYXJhbXNbJ21pblByaWNlJ107XHJcbiAgICAgICAgICAgIHRoaXMubWF4UHJpY2UgPSBwYXJhbXNbJ21heFByaWNlJ107XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlID0gcGFyYW1zWydzdGFydERhdGUnXTtcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gcGFyYW1zWydlbmREYXRlJ107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gIXRoaXMuc3RhcnREYXRlID8gdGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0RGVmYXVsdFN0YXJ0RGF0ZSgpIDogdGhpcy5zdGFydERhdGU7XHJcbiAgICAgICAgdGhpcy5lbmREYXRlID0gIXRoaXMuZW5kRGF0ZSA/IHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldERlZmF1bHRFbmREYXRlKCkgOiB0aGlzLmVuZERhdGU7XHJcblxyXG4gICAgICAgIHRoaXMud29ya3Nob3BzRmlsdGVyQ2hpbGRDb21wLnNldFZhbHVlc0Zyb21QYXJhbWV0ZXJzKHRoaXMubWluUHJpY2UsIHRoaXMubWF4UHJpY2UsIHRoaXMuY2F0ZWdvcnlMaXN0LCB0aGlzLmxvY2F0aW9uSWRMaXN0LCB0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKTtcclxuICAgIH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcnMoKTtcclxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVVybCgpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsID0gYC93b3Jrc2hvcHMvJHt0aGlzLnBhZ2VOdW1iZXJ9P3N0YXJ0RGF0ZT0ke3RoaXMuc3RhcnREYXRlfSZlbmREYXRlPSR7dGhpcy5lbmREYXRlfWA7XHJcbiAgICAgICAgdXJsICs9IHRoaXMubWluUHJpY2UgPyBgJm1pblByaWNlPSR7dGhpcy5taW5QcmljZX1gIDogYGA7XHJcbiAgICAgICAgdXJsICs9IHRoaXMubWF4UHJpY2UgPyBgJm1heFByaWNlPSR7dGhpcy5tYXhQcmljZX1gIDogYGA7XHJcbiAgICAgICAgdXJsICs9IHRoaXMubG9jYXRpb25JZExpc3QgPyBgJmxvY2F0aW9ucz0ke3RoaXMubG9jYXRpb25JZExpc3R9YCA6IGBgO1xyXG4gICAgICAgIHVybCArPSB0aGlzLmNhdGVnb3J5TGlzdCA/IGAmY2F0ZWdvcmllcz0ke3RoaXMuY2F0ZWdvcnlMaXN0fWAgOiBgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuXHRcclxuXHR1cGRhdGVVcmwoKVxyXG5cdHtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKCl9L1dvcmtzaG9wcz9zdGFydERhdGVGaWx0ZXI9JHt0aGlzLnN0YXJ0RGF0ZX0mZW5kRGF0ZUZpbHRlcj0ke3RoaXMuZW5kRGF0ZX1gO1xyXG4gICAgICAgIHRoaXMucXVlcnkgKz0gdGhpcy5sb2NhdGlvbklkTGlzdCAmJiB0aGlzLmxvY2F0aW9uSWRMaXN0ICE9IFwiXCIgPyBgJmxvY2F0aW9uSWRGaWx0ZXI9JHt0aGlzLmxvY2F0aW9uSWRMaXN0fWAgOiBgYDtcclxuICAgICAgICB0aGlzLnF1ZXJ5ICs9IHRoaXMuY2F0ZWdvcnlMaXN0ICYmIHRoaXMuY2F0ZWdvcnlMaXN0ICE9IFwiXCIgPyBgJndvcmtzaG9wVHlwZT0ke3RoaXMuY2F0ZWdvcnlMaXN0fWAgOiBgYDtcclxuICAgICAgICB0aGlzLnF1ZXJ5ICs9IHRoaXMubWluUHJpY2UgJiYgdGhpcy5taW5QcmljZSA+IDAgPyBgJm1pblByaWNlPSR7dGhpcy5taW5QcmljZS50b1N0cmluZygpfWAgOiBgYDtcclxuICAgICAgICB0aGlzLnF1ZXJ5ICs9IHRoaXMubWF4UHJpY2UgJiYgdGhpcy5tYXhQcmljZSA+IDAgPyBgJm1heFByaWNlPSR7dGhpcy5tYXhQcmljZS50b1N0cmluZygpfWAgOiBgYDtcclxuICAgICAgICBcclxuXHRcdGlmKHRoaXMucXVlcnkgJiYgdGhpcy5wYWdlTnVtYmVyKSB7XHJcblx0XHRcdHRoaXMud29ya3Nob3BzTGlzdENoaWxkQ29tcC5nZXRXb3Jrc2hvcHNEYXRhKHRoaXMucXVlcnksIHRoaXMucGFnZU51bWJlciwgdGhpcy53b3Jrc2hvcHNQZXJQYWdlKTtcclxuXHRcdH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcGVyZm9ybU5hdigpIHtcclxuICAgICAgICB0aGlzLnBhZ2VOdW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5nbG9iYWxDb25zdGFudHMuY3JlYXRlV29ya3Nob3BzVXJsKHRoaXMucGFnZU51bWJlciwgdGhpcy5zdGFydERhdGUsIHRoaXMuZW5kRGF0ZSwgdGhpcy5taW5QcmljZSwgdGhpcy5tYXhQcmljZSwgdGhpcy5sb2NhdGlvbklkTGlzdCwgdGhpcy5jYXRlZ29yeUxpc3QpKTtcclxuICAgICAgICA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJvbURhdGUoZnJvbURhdGU6IGFueSlcclxuXHR7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzU3RhcnREYXRlID0gdGhpcy5zdGFydERhdGU7XHJcbiAgICAgICAgdGhpcy5zdGFydERhdGUgPSBgJHtmcm9tRGF0ZS55ZWFyfS8ke2Zyb21EYXRlLm1vbnRofS8ke2Zyb21EYXRlLmRheX1gO1xyXG5cdFx0aWYodGhpcy5zdGFydERhdGUgPT0gXCIwLzAvMFwiKVxyXG5cdFx0e1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldERlZmF1bHRTdGFydERhdGUoKTtcclxuXHRcdH1cclxuICAgICAgICBcclxuICAgICAgICBpZihwcmV2aW91c1N0YXJ0RGF0ZSAhPT0gdGhpcy5zdGFydERhdGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICB0aGlzLnBlcmZvcm1OYXYoKTsgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHRvZ2dsZUZpbHRlcigpIHtcclxuXHRcdHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdHNldFRvRGF0ZSh0b0RhdGU6IGFueSlcclxuXHR7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzRW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBgJHt0b0RhdGUueWVhcn0vJHt0b0RhdGUubW9udGh9LyR7dG9EYXRlLmRheX1gO1xyXG5cdFx0aWYodGhpcy5lbmREYXRlID09IFwiMC8wLzBcIilcclxuXHRcdHtcclxuICAgICAgICAgICAgdGhpcy5lbmREYXRlID0gdGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0RGVmYXVsdEVuZERhdGUoKTtcclxuXHRcdH1cclxuXHJcbiAgICAgICAgaWYocHJldmlvdXNFbmREYXRlICE9IHRoaXMuZW5kRGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybU5hdigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRcclxuXHRzZXRMb2NhdGlvbklkTGlzdChsb2NhdGlvbklkTGlzdDogYW55KVxyXG5cdHtcclxuICAgICAgICBpZihsb2NhdGlvbklkTGlzdCAhPSB0aGlzLmxvY2F0aW9uSWRMaXN0KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbklkTGlzdCA9IGxvY2F0aW9uSWRMaXN0O1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1OYXYoKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdFxyXG5cdHNldENhdGVnb3J5TGlzdChjYXRlZ29yeTogc3RyaW5nKVxyXG5cdHtcclxuICAgICAgICBpZihjYXRlZ29yeSAhPSB0aGlzLmNhdGVnb3J5TGlzdClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlMaXN0ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybU5hdigpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0c2V0TWluUHJpY2UobWluUHJpY2U6IG51bWJlcilcclxuXHR7XHJcbiAgICAgICAgaWYodGhpcy5taW5QcmljZSAhPSBtaW5QcmljZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWluUHJpY2UgPSBtaW5QcmljZTtcclxuICAgICAgICAgICAgdGhpcy5wZXJmb3JtTmF2KCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHRcclxuXHRzZXRNYXhQcmljZShtYXhQcmljZTogbnVtYmVyKVxyXG5cdHtcclxuICAgICAgICBpZih0aGlzLm1heFByaWNlICE9IG1heFByaWNlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhQcmljZSA9IG1heFByaWNlO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1OYXYoKTtcclxuICAgICAgICB9XHJcblx0fVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcclxuICovXHJcbmltcG9ydCAnLi9wb2x5ZmlsbHMudHMnO1xyXG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcclxuaW1wb3J0IHsgY3JlYXRlRW5naW5lIH0gZnJvbSAnYW5ndWxhcjItZXhwcmVzcy1lbmdpbmUnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9zZXJ2ZXIucm91dGVzJztcclxuXHJcbi8vIEFwcFxyXG5cclxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcclxuY29uc3QgUk9PVCA9IHBhdGguam9pbihwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4nKSk7XHJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDQyMDA7XHJcblxyXG4vKipcclxuICogZW5hYmxlIHByb2QgbW9kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHNcclxuICovXHJcbmlmIChlbnZpcm9ubWVudC5wcm9kdWN0aW9uKSB7XHJcbiAgZW5hYmxlUHJvZE1vZGUoKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4cHJlc3MgVmlld1xyXG4gKi9cclxuYXBwLmVuZ2luZSgnLmh0bWwnLCBjcmVhdGVFbmdpbmUoe30pKTtcclxuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcclxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xyXG5cclxuLyoqXHJcbiAqIEVuYWJsZSBjb21wcmVzc2lvblxyXG4gKi9cclxuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcclxuXHJcbi8qKlxyXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcclxuICovXHJcbmFwcC51c2UoJy8nLCBleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpLCB7aW5kZXg6IGZhbHNlfSkpO1xyXG5cclxuLyoqXHJcbiAqIHBsYWNlIHlvdXIgYXBpIHJvdXRlcyBoZXJlXHJcbiAqL1xyXG4vLyBhcHAudXNlKCcvYXBpJywgYXBpKTtcclxuXHJcbi8qKlxyXG4gKiBib290c3RyYXAgdW5pdmVyc2FsIGFwcFxyXG4gKiBAcGFyYW0gcmVxXHJcbiAqIEBwYXJhbSByZXNcclxuICovXHJcbmZ1bmN0aW9uIG5nQXBwKHJlcTogYW55LCByZXM6IGFueSkge1xyXG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xyXG4gICAgcmVxLFxyXG4gICAgcmVzLFxyXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcclxuICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgYmFzZVVybDogJy8nLFxyXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxyXG4gICAgb3JpZ2luVXJsOiByZXEuaG9zdG5hbWVcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xyXG4gKi9cclxuYXBwLmdldCgnLycsIG5nQXBwKTtcclxucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xyXG4gIGFwcC5nZXQoYC8ke3JvdXRlfWAsIG5nQXBwKTtcclxuICBhcHAuZ2V0KGAvJHtyb3V0ZX0vKmAsIG5nQXBwKTtcclxufSk7XHJcblxyXG4vKipcclxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxyXG4gKi9cclxuXHJcbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICBjb25zdCBwb2pvID0ge3N0YXR1czogNDA0LCBtZXNzYWdlOiAnTm8gQ29udGVudCd9O1xyXG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcclxuICByZXMuc3RhdHVzKDQwNCkuc2VuZChqc29uKTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci50cyIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyVmlld0luaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6IFwiW215ZHBmb2N1c11cIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBASW5wdXQoXCJteWRwZm9jdXNcIikgdmFsdWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cclxuXHJcbiAgICAvLyBGb2N1cyB0byBlbGVtZW50OiBpZiB2YWx1ZSAwID0gZG9uJ3Qgc2V0IGZvY3VzLCAxID0gc2V0IGZvY3VzXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5pbnZva2VFbGVtZW50TWV0aG9kKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgXCJmb2N1c1wiLCBbXSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmUudHMiLCJleHBvcnQgKiBmcm9tIFwiLi9teS1kYXRlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1kYXRlLXJhbmdlLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1kYXktbGFiZWxzLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tb250aC1sYWJlbHMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW1vbnRoLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci1kYXkuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWNhbGVuZGFyLW1vbnRoLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1jYWxlbmRhci15ZWFyLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS13ZWVrLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1vcHRpb25zLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1sb2NhbGUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWRhdGUtbW9kZWwuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWlucHV0LWZpZWxkLWNoYW5nZWQuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWlucHV0LWZvY3VzLWJsdXIuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LXdlZWtkYXkuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWNhbGVuZGFyLXZpZXctY2hhbmdlZC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbWFya2VkLWRhdGUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW1hcmtlZC1kYXRlcy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGVmYXVsdC1tb250aC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktc2VsZWN0b3IuaW50ZXJmYWNlXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2ludGVyZmFjZXMvaW5kZXgudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFJlbmRlcmVyLCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgSU15RGF0ZSwgSU15RGF0ZVJhbmdlLCBJTXlNb250aCwgSU15Q2FsZW5kYXJEYXksIElNeUNhbGVuZGFyTW9udGgsIElNeUNhbGVuZGFyWWVhciwgSU15V2VlaywgSU15RGF5TGFiZWxzLCBJTXlNb250aExhYmVscywgSU15T3B0aW9ucywgSU15RGF0ZU1vZGVsLCBJTXlJbnB1dEZpZWxkQ2hhbmdlZCwgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZCwgSU15SW5wdXRGb2N1c0JsdXIsIElNeU1hcmtlZERhdGVzLCBJTXlNYXJrZWREYXRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pbmRleFwiO1xyXG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbXktZGF0ZS1waWNrZXIubG9jYWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci51dGlsLnNlcnZpY2VcIjtcclxuXHJcbi8vIHdlYnBhY2sxX1xyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcbmNvbnN0IG15RHBTdHlsZXM6IHN0cmluZyA9IHJlcXVpcmUoXCIuL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5jc3NcIik7XHJcbmNvbnN0IG15RHBUcGw6IHN0cmluZyA9IHJlcXVpcmUoXCIuL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sXCIpO1xyXG4vLyB3ZWJwYWNrMl9cclxuXHJcbmV4cG9ydCBjb25zdCBNWURQX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE15RGF0ZVBpY2tlciksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZW51bSBDYWxUb2dnbGUge09wZW4gPSAxLCBDbG9zZUJ5RGF0ZVNlbCA9IDIsIENsb3NlQnlDYWxCdG4gPSAzLCBDbG9zZUJ5T3V0Q2xpY2sgPSA0LCBDbG9zZUJ5RXNjID0gNSwgQ2xvc2VCeUFwaSA9IDZ9XHJcbmVudW0gWWVhciB7bWluID0gMTEwMCwgbWF4ID0gOTEwMH1cclxuZW51bSBJbnB1dEZvY3VzQmx1ciB7Zm9jdXMgPSAxLCBibHVyID0gMn1cclxuZW51bSBLZXlDb2RlIHtlbnRlciA9IDEzLCBlc2MgPSAyNywgc3BhY2UgPSAzMn1cclxuZW51bSBNb250aElkIHtwcmV2ID0gMSwgY3VyciA9IDIsIG5leHQgPSAzfVxyXG5cclxuY29uc3QgTU0gPSBcIm1tXCI7XHJcbmNvbnN0IE1NTSA9IFwibW1tXCI7XHJcbmNvbnN0IEREID0gXCJkZFwiO1xyXG5jb25zdCBZWVlZID0gXCJ5eXl5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWRhdGUtcGlja2VyXCIsXHJcbiAgICBleHBvcnRBczogXCJteWRhdGVwaWNrZXJcIixcclxuICAgIHN0eWxlczogW215RHBTdHlsZXNdLFxyXG4gICAgdGVtcGxhdGU6IG15RHBUcGwsXHJcbiAgICBwcm92aWRlcnM6IFtMb2NhbGVTZXJ2aWNlLCBVdGlsU2VydmljZSwgTVlEUF9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXlEYXRlUGlja2VyIGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgICBASW5wdXQoKSBvcHRpb25zOiBJTXlPcHRpb25zO1xyXG4gICAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkZWZhdWx0TW9udGg6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlbERhdGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlEYXRlTW9kZWw+KCk7XHJcbiAgICBAT3V0cHV0KCkgaW5wdXRGaWVsZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPigpO1xyXG4gICAgQE91dHB1dCgpIGNhbGVuZGFyVmlld0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15Q2FsZW5kYXJWaWV3Q2hhbmdlZD4oKTtcclxuICAgIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAgIEBPdXRwdXQoKSBpbnB1dEZvY3VzQmx1cjogRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGb2N1c0JsdXI+KCk7XHJcbiAgICBAVmlld0NoaWxkKFwic2VsZWN0b3JFbFwiKSBzZWxlY3RvckVsOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZChcImlucHV0Qm94RWxcIikgaW5wdXRCb3hFbDogRWxlbWVudFJlZjtcclxuXHJcbiAgICBvbkNoYW5nZUNiOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25Ub3VjaGVkQ2I6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgc2hvd1NlbGVjdG9yOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2aXNpYmxlTW9udGg6IElNeU1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgICBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xyXG4gICAgc2VsZWN0ZWREYXRlOiBJTXlEYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xyXG4gICAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGRhdGVzOiBBcnJheTxJTXlXZWVrPiA9IFtdO1xyXG4gICAgbW9udGhzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhck1vbnRoPj4gPSBbXTtcclxuICAgIHllYXJzOiBBcnJheTxBcnJheTxJTXlDYWxlbmRhclllYXI+PiA9IFtdO1xyXG4gICAgc2VsZWN0aW9uRGF5VHh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaW52YWxpZERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRpc2FibGVUb2RheUJ0bjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZGF5SWR4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHNlbGVjdE1vbnRoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZWxlY3RZZWFyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJldk1vbnRoRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5leHRNb250aERpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcmV2WWVhckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBuZXh0WWVhckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcmV2WWVhcnNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbmV4dFllYXJzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcmV2TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5wcmV2O1xyXG4gICAgY3Vyck1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQuY3VycjtcclxuICAgIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgICBvcHRzOiBJTXlPcHRpb25zID0ge1xyXG4gICAgICAgIGRheUxhYmVsczogPElNeURheUxhYmVscz4ge30sXHJcbiAgICAgICAgbW9udGhMYWJlbHM6IDxJTXlNb250aExhYmVscz4ge30sXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogPHN0cmluZz4gXCJcIixcclxuICAgICAgICBzaG93VG9kYXlCdG46IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHRvZGF5QnRuVHh0OiA8c3RyaW5nPiBcIlwiLFxyXG4gICAgICAgIGZpcnN0RGF5T2ZXZWVrOiA8c3RyaW5nPiBcIlwiLFxyXG4gICAgICAgIHNhdEhpZ2hsaWdodDogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIHN1bkhpZ2hsaWdodDogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgaGlnaGxpZ2h0RGF0ZXM6IDxBcnJheTxJTXlEYXRlPj4gW10sXHJcbiAgICAgICAgbWFya0N1cnJlbnREYXk6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1hcmtDdXJyZW50TW9udGg6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG1hcmtDdXJyZW50WWVhcjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgZGlzYWJsZVVudGlsOiA8SU15RGF0ZT4ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxyXG4gICAgICAgIGRpc2FibGVTaW5jZTogPElNeURhdGU+IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfSxcclxuICAgICAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGU+PiBbXSxcclxuICAgICAgICBlbmFibGVEYXlzOiA8QXJyYXk8SU15RGF0ZT4+IFtdLFxyXG4gICAgICAgIG1hcmtEYXRlczogPEFycmF5PElNeU1hcmtlZERhdGVzPj4gW10sXHJcbiAgICAgICAgbWFya1dlZWtlbmRzOiA8SU15TWFya2VkRGF0ZT4ge30sXHJcbiAgICAgICAgZGlzYWJsZURhdGVSYW5nZXM6IDxBcnJheTxJTXlEYXRlUmFuZ2U+PiBbXSxcclxuICAgICAgICBkaXNhYmxlV2Vla2VuZHM6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBkaXNhYmxlV2Vla2RheXM6IDxBcnJheTxzdHJpbmc+PiBbXSxcclxuICAgICAgICBzaG93V2Vla051bWJlcnM6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBoZWlnaHQ6IDxzdHJpbmc+IFwiMzRweFwiLFxyXG4gICAgICAgIHdpZHRoOiA8c3RyaW5nPiBcIjEwMCVcIixcclxuICAgICAgICBzZWxlY3Rpb25UeHRGb250U2l6ZTogPHN0cmluZz4gXCIxNHB4XCIsXHJcbiAgICAgICAgc2VsZWN0b3JIZWlnaHQ6IDxzdHJpbmc+IFwiMjMycHhcIixcclxuICAgICAgICBzZWxlY3RvcldpZHRoOiA8c3RyaW5nPiBcIjI1MnB4XCIsXHJcbiAgICAgICAgYWxsb3dEZXNlbGVjdERhdGU6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBpbmxpbmU6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBzaG93Q2xlYXJEYXRlQnRuOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBzaG93RGVjcmVhc2VEYXRlQnRuOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc2hvd0luY3JlYXNlRGF0ZUJ0bjogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGFsaWduU2VsZWN0b3JSaWdodDogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIG9wZW5TZWxlY3RvclRvcE9mSW5wdXQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBpbmRpY2F0ZUludmFsaWREYXRlOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBlZGl0YWJsZURhdGVGaWVsZDogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgbW9udGhTZWxlY3RvcjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgeWVhclNlbGVjdG9yOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgbWluWWVhcjogPG51bWJlcj4gWWVhci5taW4sXHJcbiAgICAgICAgbWF4WWVhcjogPG51bWJlcj4gWWVhci5tYXgsXHJcbiAgICAgICAgY29tcG9uZW50RGlzYWJsZWQ6IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBzaG93U2VsZWN0b3JBcnJvdzogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgc2hvd0lucHV0RmllbGQ6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIG9wZW5TZWxlY3Rvck9uSW5wdXRDbGljazogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGFyaWFMYWJlbElucHV0RmllbGQ6IDxzdHJpbmc+IFwiRGF0ZSBpbnB1dCBmaWVsZFwiLFxyXG4gICAgICAgIGFyaWFMYWJlbENsZWFyRGF0ZTogPHN0cmluZz4gXCJDbGVhciBEYXRlXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsRGVjcmVhc2VEYXRlOiA8c3RyaW5nPiBcIkRlY3JlYXNlIERhdGVcIixcclxuICAgICAgICBhcmlhTGFiZWxJbmNyZWFzZURhdGU6IDxzdHJpbmc+IFwiSW5jcmVhc2UgRGF0ZVwiLFxyXG4gICAgICAgIGFyaWFMYWJlbE9wZW5DYWxlbmRhcjogPHN0cmluZz4gXCJPcGVuIENhbGVuZGFyXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsUHJldk1vbnRoOiA8c3RyaW5nPiBcIlByZXZpb3VzIE1vbnRoXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsTmV4dE1vbnRoOiA8c3RyaW5nPiBcIk5leHQgTW9udGhcIixcclxuICAgICAgICBhcmlhTGFiZWxQcmV2WWVhcjogPHN0cmluZz4gXCJQcmV2aW91cyBZZWFyXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsTmV4dFllYXI6IDxzdHJpbmc+IFwiTmV4dCBZZWFyXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSwgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgICAgICByZW5kZXJlci5saXN0ZW5HbG9iYWwoXCJkb2N1bWVudFwiLCBcImNsaWNrXCIsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3RvciAmJiBldmVudC50YXJnZXQgJiYgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgIT09IGV2ZW50LnRhcmdldCAmJiAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeU91dENsaWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLm1vbnRoU2VsZWN0b3IgfHwgdGhpcy5vcHRzLnllYXJTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhclNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9jYWxlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3B0czogSU15T3B0aW9ucyA9IHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGVPcHRpb25zKHRoaXMubG9jYWxlKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgICAgICg8SU15T3B0aW9ucz50aGlzLm9wdHMpW2tdID0gb3B0c1trXTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbnMpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgICAgICg8SU15T3B0aW9ucz50aGlzLm9wdHMpW2tdID0gdGhpcy5vcHRpb25zW2tdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyIDwgWWVhci5taW4pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLm1pblllYXIgPSBZZWFyLm1pbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5tYXhZZWFyID4gWWVhci5tYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRzLm1heFllYXIgPSBZZWFyLm1heDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMuY29tcG9uZW50RGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3RvclRvcFBvc2l0aW9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5vcGVuU2VsZWN0b3JUb3BPZklucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0TW9udGhZZWFyU2VsZWN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TW9udGggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdE1vbnRoQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9ICF0aGlzLnNlbGVjdE1vbnRoO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RNb250aCkge1xyXG4gICAgICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9udGhzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3c6IEFycmF5PElNeUNhbGVuZGFyTW9udGg+ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGkgKyAzOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyLCBtb250aDogaiwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKGosIHRoaXMudmlzaWJsZU1vbnRoLnllYXIpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhciwgbW9udGg6IGosIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKHtuYnI6IGosIG5hbWU6IHRoaXMub3B0cy5tb250aExhYmVsc1tqXSwgY3Vyck1vbnRoOiBqID09PSB0b2RheS5tb250aCAmJiB0aGlzLnZpc2libGVNb250aC55ZWFyID09PSB0b2RheS55ZWFyLCBzZWxlY3RlZDogaiA9PT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRpc2FibGVkOiBkaXNhYmxlZH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aHMucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW9udGhDZWxsQ2xpY2tlZChjZWxsOiBJTXlDYWxlbmRhck1vbnRoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG1jOiBib29sZWFuID0gY2VsbC5uYnIgIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChjZWxsLm5iciksIG1vbnRoTmJyOiBjZWxsLm5iciwgeWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhcn07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKGNlbGwubmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBtYyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb250aENlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyTW9udGgpIHtcclxuICAgICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vbk1vbnRoQ2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0WWVhckNsaWNrZWQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9ICF0aGlzLnNlbGVjdFllYXI7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RZZWFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVZZWFycyh0aGlzLnZpc2libGVNb250aC55ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZWFyQ2VsbENsaWNrZWQoY2VsbDogSU15Q2FsZW5kYXJZZWFyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHljOiBib29sZWFuID0gY2VsbC55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLnZpc2libGVNb250aC5tb250aFR4dCwgbW9udGhOYnI6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB5ZWFyOiBjZWxsLnllYXJ9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgY2VsbC55ZWFyLCB5Yyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblllYXJDZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBJTXlDYWxlbmRhclllYXIpIHtcclxuICAgICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vblllYXJDZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmV2WWVhcnMoZXZlbnQ6IGFueSwgeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHllYXIgLSAyNSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0WWVhcnMoZXZlbnQ6IGFueSwgeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHllYXIgKyAyNSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVZZWFycyh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnllYXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSB5ZWFyOyBpIDw9IDIwICsgeWVhcjsgaSArPSA1KSB7XHJcbiAgICAgICAgICAgIGxldCByb3c6IEFycmF5PElNeUNhbGVuZGFyWWVhcj4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGk7IGogPCBpICsgNTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzYWJsZWQ6IGJvb2xlYW4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiBqLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogdGhpcy5kYXlzSW5Nb250aCh0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgail9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKVxyXG4gICAgICAgICAgICAgICAgIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IGosIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWluTWF4OiBib29sZWFuID0gaiA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGogPiB0aGlzLm9wdHMubWF4WWVhcjtcclxuICAgICAgICAgICAgICAgIHJvdy5wdXNoKHt5ZWFyOiBqLCBjdXJyWWVhcjogaiA9PT0gdG9kYXkueWVhciwgc2VsZWN0ZWQ6IGogPT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBtaW5NYXh9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnllYXJzLnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmV2WWVhcnNEaXNhYmxlZCA9IHRoaXMueWVhcnNbMF1bMF0ueWVhciA8PSB0aGlzLm9wdHMubWluWWVhciB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiB0aGlzLnllYXJzWzBdWzBdLnllYXIgLSAxLCBtb250aDogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIGRheTogdGhpcy5kYXlzSW5Nb250aCh0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy55ZWFyc1swXVswXS55ZWFyIC0gMSl9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKTtcclxuICAgICAgICB0aGlzLm5leHRZZWFyc0Rpc2FibGVkID0gdGhpcy55ZWFyc1s0XVs0XS55ZWFyID49IHRoaXMub3B0cy5tYXhZZWFyIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHRoaXMueWVhcnNbNF1bNF0ueWVhciArIDEsIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZElucHV0RmllbGRDaGFuZ2VkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLCB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLm1vbnRoTGFiZWxzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlLmRheSAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUueWVhciAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUsIENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludmFsaWRJbnB1dEZpZWxkQ2hhbmdlZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Gb2N1c0lucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoe3JlYXNvbjogSW5wdXRGb2N1c0JsdXIuZm9jdXMsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJsdXJJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7cmVhc29uOiBJbnB1dEZvY3VzQmx1ci5ibHVyLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbG9zZVNlbGVjdG9yKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lc2MgJiYgdGhpcy5zaG93U2VsZWN0b3IgJiYgIXRoaXMub3B0cy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5RXNjKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW52YWxpZElucHV0RmllbGRDaGFuZ2VkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmludmFsaWREYXRlID0gdmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoe3ZhbHVlOiB2YWx1ZSwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiBmYWxzZX0pO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUb2RheURpc2FibGVkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVRvZGF5QnRuID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KHRoaXMuZ2V0VG9kYXkoKSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucygpO1xyXG4gICAgICAgIGxldCB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla0RheXMoKTtcclxuICAgICAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCgpO1xyXG4gICAgICAgIHRoaXMuZGF5SWR4ID0gd2Vla0RheXMuaW5kZXhPZih0aGlzLm9wdHMuZmlyc3REYXlPZldlZWspO1xyXG4gICAgICAgIGlmICh0aGlzLmRheUlkeCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGlkeDogbnVtYmVyID0gdGhpcy5kYXlJZHg7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla0RheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2Vla0RheXMucHVzaCh0aGlzLm9wdHMuZGF5TGFiZWxzW3dlZWtEYXlzW2lkeF1dKTtcclxuICAgICAgICAgICAgICAgIGlkeCA9IHdlZWtEYXlzW2lkeF0gPT09IFwic2FcIiA/IDAgOiBpZHggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZSAmJiAodmFsdWVbXCJkYXRlXCJdIHx8IHZhbHVlW1wianNkYXRlXCJdIHx8IHZhbHVlW1wiZm9ybWF0dGVkXCJdKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHZhbHVlW1wiZGF0ZVwiXSA/IHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWVbXCJkYXRlXCJdKSA6IHZhbHVlW1wianNkYXRlXCJdID8gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh0aGlzLmpzRGF0ZVRvTXlEYXRlKHZhbHVlW1wianNkYXRlXCJdKSkgOiB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlW1wiZm9ybWF0dGVkXCJdKTtcclxuICAgICAgICAgICAgbGV0IGN2YzogYm9vbGVhbiA9IHRoaXMudmlzaWJsZU1vbnRoLnllYXIgIT09IHRoaXMuc2VsZWN0ZWREYXRlLnllYXIgfHwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIgIT09IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgICAgICAgICBpZiAoY3ZjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RoaXMuc2VsZWN0ZWREYXRlLm1vbnRoXSwgbW9udGhOYnI6IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoLCB5ZWFyOiB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCwgdGhpcy5zZWxlY3RlZERhdGUueWVhciwgY3ZjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9wdHMuaW5saW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYiA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwic2VsZWN0b3JcIikpIHtcclxuICAgICAgICAgICAgbGV0IHM6IGFueSA9IGNoYW5nZXNbXCJzZWxlY3RvclwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcyA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMub3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TZWxlY3RvcihDYWxUb2dnbGUuT3Blbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeUFwaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJwbGFjZWhvbGRlclwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY2hhbmdlc1tcInBsYWNlaG9sZGVyXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwibG9jYWxlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gY2hhbmdlc1tcImxvY2FsZVwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcImRpc2FibGVkXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBjaGFuZ2VzW1wiZGlzYWJsZWRcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJvcHRpb25zXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IGNoYW5nZXNbXCJvcHRpb25zXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2Vla0RheXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnBhcnNlT3B0aW9ucygpO1xyXG5cclxuICAgICAgICBsZXQgZG1DaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRNb250aFwiKSkge1xyXG4gICAgICAgICAgICBsZXQgZG06IGFueSA9IGNoYW5nZXNbXCJkZWZhdWx0TW9udGhcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRtID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBkbSA9IGRtLmRlZk1vbnRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSAhPT0gdW5kZWZpbmVkICYmIGRtICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLnBhcnNlU2VsZWN0ZWRNb250aChkbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkbUNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcInNlbERhdGVcIikpIHtcclxuICAgICAgICAgICAgbGV0IHNkOiBhbnkgPSBjaGFuZ2VzW1wic2VsRGF0ZVwiXTtcclxuICAgICAgICAgICAgaWYgKHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJiBzZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBzZC5jdXJyZW50VmFsdWUgIT09IFwiXCIgJiYgT2JqZWN0LmtleXMoc2QuY3VycmVudFZhbHVlKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShzZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjbGVhciBvbiBpbml0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNkLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmlzaWJsZU1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIgPT09IDAgfHwgZG1DaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0ID0gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyXTtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGRhdGUgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVjcmVhc2VCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIERlY3JlYXNlIGRhdGUgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICB0aGlzLmRlY3JlYXNlSW5jcmVhc2VEYXRlKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5jcmVhc2VCdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluY3JlYXNlIGRhdGUgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICB0aGlzLmRlY3JlYXNlSW5jcmVhc2VEYXRlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBPcGVuIHNlbGVjdG9yIGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSAhdGhpcy5zaG93U2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5TZWxlY3RvcihDYWxUb2dnbGUuT3Blbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlU2VsZWN0b3IoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuU2VsZWN0b3IocmVhc29uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChyZWFzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlU2VsZWN0b3IocmVhc29uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQocmVhc29uKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaXNpYmxlTW9udGgoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IDAsIG06IG51bWJlciA9IDA7XHJcbiAgICAgICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgICAgICAgICB5ID0gdG9kYXkueWVhcjtcclxuICAgICAgICAgICAgICAgIG0gPSB0b2RheS5tb250aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkTW9udGgueWVhcjtcclxuICAgICAgICAgICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyO1xyXG4gICAgICAgICAgICBtID0gdGhpcy5zZWxlY3RlZERhdGUubW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV0sIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGN1cnJlbnQgbW9udGhcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmV2TW9udGgoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgICAgIGxldCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG5cclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0TW9udGgoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmV4dCBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XHJcblxyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByZXZZZWFyKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFByZXZpb3VzIHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTmV4dCB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aC55ZWFyKys7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblRvZGF5Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBUb2RheSBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUodG9kYXksIENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5pbmxpbmUgJiYgdG9kYXkueWVhciAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhciB8fCB0b2RheS5tb250aCAhPT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0b2RheS5tb250aF0sIG1vbnRoTmJyOiB0b2RheS5tb250aCwgeWVhcjogdG9kYXkueWVhcn07XHJcbiAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0b2RheS5tb250aCwgdG9kYXkueWVhciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2VsbENsaWNrZWQoY2VsbDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2VsbCBjbGlja2VkIG9uIHRoZSBjYWxlbmRhclxyXG4gICAgICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5wcmV2TW9udGhJZCkge1xyXG4gICAgICAgICAgICAvLyBQcmV2aW91cyBtb250aCBkYXlcclxuICAgICAgICAgICAgdGhpcy5vblByZXZNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCkge1xyXG4gICAgICAgICAgICAvLyBDdXJyZW50IG1vbnRoIGRheSAtIGlmIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZCBjbGVhciBpdFxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRzLmFsbG93RGVzZWxlY3REYXRlICYmIHRoaXMudXRpbFNlcnZpY2UuaXNTYW1lRGF0ZShjZWxsLmRhdGVPYmosIHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsLmRhdGVPYmosIENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMubmV4dE1vbnRoSWQpIHtcclxuICAgICAgICAgICAgLy8gTmV4dCBtb250aCBkYXlcclxuICAgICAgICAgICAgdGhpcy5vbk5leHRNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyU2VsZWN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DZWxsS2V5RG93bihldmVudDogYW55LCBjZWxsOiBhbnkpIHtcclxuICAgICAgICAvLyBDZWxsIGtleWJvYXJkIGhhbmRsaW5nXHJcbiAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMub25DZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJEYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICAgICAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoe2RhdGU6IGRhdGUsIGpzZGF0ZTogbnVsbCwgZm9ybWF0dGVkOiBcIlwiLCBlcG9jOiAwfSk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNldEZvY3VzVG9JbnB1dEJveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlYXNlSW5jcmVhc2VEYXRlKGRlY3JlYXNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRGVjcmVhc2VzIG9yIGluY3JlYXNlcyB0aGUgZGF0ZSBkZXBlbmRpbmcgb24gdGhlIHBhcmFtZXRlclxyXG4gICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XHJcbiAgICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcclxuICAgICAgICAgICAgbGV0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XHJcbiAgICAgICAgICAgIGQuc2V0RGF0ZShkZWNyZWFzZSA/IGQuZ2V0RGF0ZSgpIC0gMSA6IGQuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgICAgICAgIGRhdGUgPSB7eWVhcjogZC5nZXRGdWxsWWVhcigpLCBtb250aDogZC5nZXRNb250aCgpICsgMSwgZGF5OiBkLmdldERhdGUoKX07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUoZGF0ZSwgQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdERhdGUoZGF0ZTogSU15RGF0ZSwgY2xvc2VSZWFzb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIERhdGUgc2VsZWN0ZWQsIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICAgICAgbGV0IGRhdGVNb2RlbDogSU15RGF0ZU1vZGVsID0gdGhpcy5nZXREYXRlTW9kZWwoZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KGRhdGVNb2RlbCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KGNsb3NlUmVhc29uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNldEZvY3VzVG9JbnB1dEJveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZvY3VzVG9JbnB1dEJveCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0Qm94RWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZURhdGVWYWx1ZShkYXRlOiBJTXlEYXRlLCBjbGVhcjogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIC8vIFVwZGF0ZXMgZGF0ZSB2YWx1ZXNcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBjbGVhciA/IFwiXCIgOiB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHt2YWx1ZTogdGhpcy5zZWxlY3Rpb25EYXlUeHQsIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LCB2YWxpZDogIWNsZWFyfSk7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVNb2RlbChkYXRlOiBJTXlEYXRlKTogSU15RGF0ZU1vZGVsIHtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgZGF0ZSBtb2RlbCBvYmplY3QgZnJvbSB0aGUgZ2l2ZW4gcGFyYW1ldGVyXHJcbiAgICAgICAgcmV0dXJuIHtkYXRlOiBkYXRlLCBqc2RhdGU6IHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSwgZm9ybWF0dGVkOiB0aGlzLmZvcm1hdERhdGUoZGF0ZSksIGVwb2M6IE1hdGgucm91bmQodGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgLyAxMDAwLjApfTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVaZXJvKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBQcmVwZW5kIHplcm8gaWYgc21hbGxlciB0aGFuIDEwXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbCkgPCAxMCA/IFwiMFwiICsgdmFsIDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUodmFsOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFJldHVybnMgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLCBpZiBtbW0gaXMgcGFydCBvZiBkYXRlRm9ybWF0IHJldHVybnMgbW9udGggYXMgYSBzdHJpbmdcclxuICAgICAgICBsZXQgZm9ybWF0dGVkOiBzdHJpbmcgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5yZXBsYWNlKFlZWVksIHZhbC55ZWFyKS5yZXBsYWNlKERELCB0aGlzLnByZVplcm8odmFsLmRheSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5pbmRleE9mKE1NTSkgIT09IC0xID8gZm9ybWF0dGVkLnJlcGxhY2UoTU1NLCB0aGlzLm1vbnRoVGV4dCh2YWwubW9udGgpKSA6IGZvcm1hdHRlZC5yZXBsYWNlKE1NLCB0aGlzLnByZVplcm8odmFsLm1vbnRoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUmV0dXJucyBtb250aCBhcyBhIHRleHRcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gICAgfVxyXG5cclxuICAgIG1vbnRoU3RhcnRJZHgoeTogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0RGF0ZSgxKTtcclxuICAgICAgICBkLnNldE1vbnRoKG0gLSAxKTtcclxuICAgICAgICBkLnNldEZ1bGxZZWFyKHkpO1xyXG4gICAgICAgIGxldCBpZHggPSBkLmdldERheSgpICsgdGhpcy5zdW5kYXlJZHgoKTtcclxuICAgICAgICByZXR1cm4gaWR4ID49IDcgPyBpZHggLSA3IDogaWR4O1xyXG4gICAgfVxyXG5cclxuICAgIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgY3VycmVudCBtb250aFxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBSZXR1cm4gbnVtYmVyIG9mIGRheXMgb2YgdGhlIHByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoeSwgbSwgMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChkLmdldE1vbnRoKCkgKyAxLCBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBDaGVjayBpcyBhIGdpdmVuIGRhdGUgdGhlIHRvZGF5XHJcbiAgICAgICAgcmV0dXJuIGQgPT09IHRvZGF5LmRheSAmJiBtID09PSB0b2RheS5tb250aCAmJiB5ID09PSB0b2RheS55ZWFyICYmIGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcclxuICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIHt5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpfTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2Vla2RheShkYXRlOiBJTXlEYXRlKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXHJcbiAgICAgICAgbGV0IHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXRXZWVrRGF5cygpO1xyXG4gICAgICAgIHJldHVybiB3ZWVrRGF5c1t0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlcyBhIGRhdGUgb2JqZWN0IGZyb20gZ2l2ZW4geWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3VuZGF5SWR4KCk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gSW5kZXggb2YgU3VuZGF5IGRheVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRheUlkeCA+IDAgPyA3IC0gdGhpcy5kYXlJZHggOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgbGV0IG1vbnRoU3RhcnQ6IG51bWJlciA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcclxuICAgICAgICBsZXQgZEluVGhpc006IG51bWJlciA9IHRoaXMuZGF5c0luTW9udGgobSwgeSk7XHJcbiAgICAgICAgbGV0IGRJblByZXZNOiBudW1iZXIgPSB0aGlzLmRheXNJblByZXZNb250aChtLCB5KTtcclxuXHJcbiAgICAgICAgbGV0IGRheU5icjogbnVtYmVyID0gMTtcclxuICAgICAgICBsZXQgY21vOiBudW1iZXIgPSB0aGlzLnByZXZNb250aElkO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3ZWVrOiBBcnJheTxJTXlDYWxlbmRhckRheT4gPSBbXTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vIEZpcnN0IHdlZWtcclxuICAgICAgICAgICAgICAgIGxldCBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XHJcbiAgICAgICAgICAgICAgICAvLyBQcmV2aW91cyBtb250aFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IHBtOyBqIDw9IGRJblByZXZNOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LCBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsIGRheTogan07XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtkYXRlT2JqOiBkYXRlLCBjbW86IGNtbywgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoaiwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHRoaXMub3B0cy5zdW5IaWdobGlnaHQsIHRoaXMub3B0cy5zYXRIaWdobGlnaHQsIHRoaXMub3B0cy5oaWdobGlnaHREYXRlcyl9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjbW8gPSB0aGlzLmN1cnJNb250aElkO1xyXG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudCBtb250aFxyXG4gICAgICAgICAgICAgICAgbGV0IGRheXNMZWZ0OiBudW1iZXIgPSA3IC0gd2Vlay5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkYXlOYnJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIHdlZWsucHVzaCh7ZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSwgdGhpcy5vcHRzLm1pblllYXIsIHRoaXMub3B0cy5tYXhZZWFyLCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLCB0aGlzLm9wdHMuZGlzYWJsZVdlZWtkYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcywgdGhpcy5vcHRzLmVuYWJsZURheXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0OiB0aGlzLnV0aWxTZXJ2aWNlLmlzSGlnaGxpZ2h0ZWREYXRlKGRhdGUsIHRoaXMub3B0cy5zdW5IaWdobGlnaHQsIHRoaXMub3B0cy5zYXRIaWdobGlnaHQsIHRoaXMub3B0cy5oaWdobGlnaHREYXRlcyl9KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgdGhlIHdlZWtzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXlOYnIgPiBkSW5UaGlzTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXh0IG1vbnRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheU5iciA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtbyA9IHRoaXMubmV4dE1vbnRoSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IGNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCAmJiBtID09PSAxMiA/IHkgKyAxIDogeSwgbW9udGg6IGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCA/IG0gOiBjbW8gPT09IHRoaXMubmV4dE1vbnRoSWQgJiYgbSA8IDEyID8gbSArIDEgOiAxLCBkYXk6IGRheU5icn07XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtkYXRlT2JqOiBkYXRlLCBjbW86IGNtbywgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoZGF5TmJyLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLnN1bkhpZ2hsaWdodCwgdGhpcy5vcHRzLnNhdEhpZ2hsaWdodCwgdGhpcy5vcHRzLmhpZ2hsaWdodERhdGVzKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB3ZWVrTmJyOiBudW1iZXIgPSB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICAmJiB0aGlzLm9wdHMuZmlyc3REYXlPZldlZWsgPT09IFwibW9cIiA/IHRoaXMudXRpbFNlcnZpY2UuZ2V0V2Vla051bWJlcih3ZWVrWzBdLmRhdGVPYmopIDogMDtcclxuICAgICAgICAgICAgdGhpcy5kYXRlcy5wdXNoKHt3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobSwgeSk7XHJcblxyXG4gICAgICAgIGlmIChub3RpZnlDaGFuZ2UpIHtcclxuICAgICAgICAgICAgLy8gTm90aWZ5IHBhcmVudFxyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyVmlld0NoYW5nZWQuZW1pdCh7eWVhcjogeSwgbW9udGg6IG0sIGZpcnN0OiB7bnVtYmVyOiAxLCB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IDF9KX0sIGxhc3Q6IHtudW1iZXI6IGRJblRoaXNNLCB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRJblRoaXNNfSl9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlU2VsZWN0ZWREYXRlKHNlbERhdGU6IGFueSk6IElNeURhdGUge1xyXG4gICAgICAgIC8vIFBhcnNlIGRhdGUgdmFsdWUgLSBpdCBjYW4gYmUgc3RyaW5nIG9yIElNeURhdGUgb2JqZWN0XHJcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7ZGF5OiAwLCBtb250aDogMCwgeWVhcjogMH07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIGxldCBzZDogc3RyaW5nID0gPHN0cmluZz4gc2VsRGF0ZTtcclxuICAgICAgICAgICAgbGV0IGRmOiBzdHJpbmcgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgICAgICAgICAgIGRhdGUubW9udGggPSBkZi5pbmRleE9mKE1NTSkgIT09IC0xXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMudXRpbFNlcnZpY2UucGFyc2VEYXRlUGFydE1vbnRoTmFtZShkZiwgc2QsIE1NTSwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzKVxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBNTSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGYuaW5kZXhPZihNTU0pICE9PSAtMSAmJiB0aGlzLm9wdHMubW9udGhMYWJlbHNbZGF0ZS5tb250aF0pIHtcclxuICAgICAgICAgICAgICAgIGRmID0gdGhpcy51dGlsU2VydmljZS5jaGFuZ2VEYXRlRm9ybWF0KGRmLCB0aGlzLm9wdHMubW9udGhMYWJlbHNbZGF0ZS5tb250aF0ubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGF0ZS5kYXkgPSB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGYsIHNkLCBERCk7XHJcbiAgICAgICAgICAgIGRhdGUueWVhciA9IHRoaXMudXRpbFNlcnZpY2UucGFyc2VEYXRlUGFydE51bWJlcihkZiwgc2QsIFlZWVkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICAgICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAganNEYXRlVG9NeURhdGUoZGF0ZTogRGF0ZSk6IElNeURhdGUge1xyXG4gICAgICAgIHJldHVybiB7eWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKX07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VTZWxlY3RlZE1vbnRoKG1zOiBzdHJpbmcpOiBJTXlNb250aCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXRpbFNlcnZpY2UucGFyc2VEZWZhdWx0TW9udGgobXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZHBtOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRweTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkbm06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgZG55OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5kaXNhYmxlSGVhZGVyQnV0dG9ucykge1xyXG4gICAgICAgICAgICBkcG0gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LCBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsIGRheTogdGhpcy5kYXlzSW5Nb250aChtID09PSAxID8gMTIgOiBtIC0gMSwgbSA9PT0gMSA/IHkgLSAxIDogeSl9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKTtcclxuICAgICAgICAgICAgZHB5ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7eWVhcjogeSAtIDEsIG1vbnRoOiBtLCBkYXk6IHRoaXMuZGF5c0luTW9udGgobSwgeSAtIDEpfSwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgICAgICAgIGRubSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IG0gPT09IDEyID8geSArIDEgOiB5LCBtb250aDogbSA9PT0gMTIgPyAxIDogbSArIDEsIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgICAgICAgICBkbnkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB5ICsgMSwgbW9udGg6IG0sIGRheTogMX0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZNb250aERpc2FibGVkID0gbSA9PT0gMSAmJiB5ID09PSB0aGlzLm9wdHMubWluWWVhciB8fCBkcG07XHJcbiAgICAgICAgdGhpcy5wcmV2WWVhckRpc2FibGVkID0geSAtIDEgPCB0aGlzLm9wdHMubWluWWVhciB8fCBkcHk7XHJcbiAgICAgICAgdGhpcy5uZXh0TW9udGhEaXNhYmxlZCA9IG0gPT09IDEyICYmIHkgPT09IHRoaXMub3B0cy5tYXhZZWFyIHx8IGRubTtcclxuICAgICAgICB0aGlzLm5leHRZZWFyRGlzYWJsZWQgPSB5ICsgMSA+IHRoaXMub3B0cy5tYXhZZWFyIHx8IGRueTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlciB9IGZyb20gXCIuL215LWRhdGUtcGlja2VyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gXCIuL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbTXlEYXRlUGlja2VyLCBGb2N1c0RpcmVjdGl2ZV0sXHJcbiAgICBleHBvcnRzOiBbTXlEYXRlUGlja2VyLCBGb2N1c0RpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIE15RGF0ZVBpY2tlck1vZHVsZSB7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJTXlMb2NhbGVzLCBJTXlPcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaW5kZXhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2NhbGVzOiBJTXlMb2NhbGVzID0ge1xyXG4gICAgICAgIFwiZW5cIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTdW5cIiwgbW86IFwiTW9uXCIsIHR1OiBcIlR1ZVwiLCB3ZTogXCJXZWRcIiwgdGg6IFwiVGh1XCIsIGZyOiBcIkZyaVwiLCBzYTogXCJTYXRcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWF5XCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJtbS9kZC95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIlRvZGF5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaGVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLXqNeQXCIsIG1vOiBcItep16BcIiwgdHU6IFwi16nXnFwiLCB3ZTogXCLXqNeRXCIsIHRoOiBcIteX155cIiwgZnI6IFwi16nXmVwiLCBzYTogXCLXqdeRXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIteZ16DXlVwiLCAyOiBcItek15HXqFwiLCAzOiBcItee16jXpVwiLCA0OiBcIteQ16TXqFwiLCA1OiBcItee15DXmVwiLCA2OiBcIteZ15XXoFwiLCA3OiBcIteZ15XXnFwiLCA4OiBcIteQ15XXklwiLCA5OiBcIteh16TXmFwiLCAxMDogXCLXkNeV16dcIiwgMTE6IFwi16DXldeRXCIsIDEyOiBcIteT16bXnlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLXlNeZ15XXnVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImphXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi5pelXCIsIG1vOiBcIuaciFwiLCB0dTogXCLngatcIiwgd2U6IFwi5rC0XCIsIHRoOiBcIuacqFwiLCBmcjogXCLph5FcIiwgc2E6IFwi5ZyfXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwi77yR5pyIXCIsIDI6IFwi77yS5pyIXCIsIDM6IFwi77yT5pyIXCIsIDQ6IFwi77yU5pyIXCIsIDU6IFwi77yV5pyIXCIsIDY6IFwi77yW5pyIXCIsIDc6IFwi77yX5pyIXCIsIDg6IFwi77yY5pyIXCIsIDk6IFwi77yZ5pyIXCIsIDEwOiBcIu+8ke+8kOaciFwiLCAxMTogXCLvvJHvvJHmnIhcIiwgMTI6IFwi77yR77yS5pyIXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXkubW0uZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi5LuK5pelXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZnJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJEaW1cIiwgbW86IFwiTHVuXCIsIHR1OiBcIk1hclwiLCB3ZTogXCJNZXJcIiwgdGg6IFwiSmV1XCIsIGZyOiBcIlZlblwiLCBzYTogXCJTYW1cIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJKYW5cIiwgMjogXCJGw6l2XCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXZyXCIsIDU6IFwiTWFpXCIsIDY6IFwiSnVpblwiLCA3OiBcIkp1aWxcIiwgODogXCJBb8O7XCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRMOpY1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkF1am91cmQnaHVpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZmlcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTdVwiLCBtbzogXCJNYVwiLCB0dTogXCJUaVwiLCB3ZTogXCJLZVwiLCB0aDogXCJUb1wiLCBmcjogXCJQZVwiLCBzYTogXCJMYVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIlRhbVwiLCAyOiBcIkhlbFwiLCAzOiBcIk1hYVwiLCA0OiBcIkh1aFwiLCA1OiBcIlRvdVwiLCA2OiBcIktlc1wiLCA3OiBcIkhlaVwiLCA4OiBcIkVsb1wiLCA5OiBcIlN5eVwiLCAxMDogXCJMb2tcIiwgMTE6IFwiTWFyXCIsIDEyOiBcIkpvdVwifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIlTDpG7DpMOkblwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVzXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiRG9cIiwgbW86IFwiTHVcIiwgdHU6IFwiTWFcIiwgd2U6IFwiTWlcIiwgdGg6IFwiSnVcIiwgZnI6IFwiVmlcIiwgc2E6IFwiU2FcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJFbmVcIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBYnJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBZ29cIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEaWNcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJIb3lcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJodVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlZhc1wiLCBtbzogXCJIw6l0XCIsIHR1OiBcIktlZGRcIiwgd2U6IFwiU3plXCIsIHRoOiBcIkNzw7xcIiwgZnI6IFwiUMOpblwiLCBzYTogXCJTem9cIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTcOhclwiLCA0OiBcIsOBcHJcIiwgNTogXCJNw6FqXCIsIDY6IFwiSsO6blwiLCA3OiBcIkrDumxcIiwgODogXCJBdWdcIiwgOTogXCJTemVwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIk1hXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzdlwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlPDtm5cIiwgbW86IFwiTcOlblwiLCB0dTogXCJUaXNcIiwgd2U6IFwiT25zXCIsIHRoOiBcIlRvclwiLCBmcjogXCJGcmVcIiwgc2E6IFwiTMO2clwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWpcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSWRhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5sXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiWm9uXCIsIG1vOiBcIk1hYVwiLCB0dTogXCJEaW5cIiwgd2U6IFwiV29lXCIsIHRoOiBcIkRvblwiLCBmcjogXCJWcmlcIiwgc2E6IFwiWmF0XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1laVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJWYW5kYWFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicnVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLQktGBXCIsIG1vOiBcItCf0L1cIiwgdHU6IFwi0JLRglwiLCB3ZTogXCLQodGAXCIsIHRoOiBcItCn0YJcIiwgZnI6IFwi0J/RglwiLCBzYTogXCLQodCxXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItCv0L3QslwiLCAyOiBcItCk0LXQslwiLCAzOiBcItCc0LDRgNGCXCIsIDQ6IFwi0JDQv9GAXCIsIDU6IFwi0JzQsNC5XCIsIDY6IFwi0JjRjtC90YxcIiwgNzogXCLQmNGO0LvRjFwiLCA4OiBcItCQ0LLQs1wiLCA5OiBcItCh0LXQvdGCXCIsIDEwOiBcItCe0LrRglwiLCAxMTogXCLQndC+0Y9cIiwgMTI6IFwi0JTQtdC6XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItCh0LXQs9C+0LTQvdGPXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ1a1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcItCd0LRcIiwgbW86IFwi0J/QvVwiLCB0dTogXCLQktGCXCIsIHdlOiBcItCh0YBcIiwgdGg6IFwi0KfRglwiLCBmcjogXCLQn9GCXCIsIHNhOiBcItCh0LFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0KHRltGHXCIsIDI6IFwi0JvRjtGCXCIsIDM6IFwi0JHQtdGAXCIsIDQ6IFwi0JrQstGWXCIsIDU6IFwi0KLRgNCwXCIsIDY6IFwi0KfQtdGAXCIsIDc6IFwi0JvQuNC/XCIsIDg6IFwi0KHQtdGAXCIsIDk6IFwi0JLQtdGAXCIsIDEwOiBcItCW0L7QslwiLCAxMTogXCLQm9C40YFcIiwgMTI6IFwi0JPRgNGDXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItCh0YzQvtCz0L7QtNC90ZZcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm5vXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O4blwiLCBtbzogXCJNYW5cIiwgdHU6IFwiVGlyXCIsIHdlOiBcIk9uc1wiLCB0aDogXCJUb3JcIiwgZnI6IFwiRnJlXCIsIHNhOiBcIkzDuHJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVzXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkkgZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwidHJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJQYXpcIiwgbW86IFwiUHp0XCIsIHR1OiBcIlNhbFwiLCB3ZTogXCLDh2FyXCIsIHRoOiBcIlBlclwiLCBmcjogXCJDdW1cIiwgc2E6IFwiQ210XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIk9jYVwiLCAyOiBcIsWedWJcIiwgMzogXCJNYXJcIiwgNDogXCJOaXNcIiwgNTogXCJNYXlcIiwgNjogXCJIYXpcIiwgNzogXCJUZW1cIiwgODogXCJBxJ91XCIsIDk6IFwiRXlsXCIsIDEwOiBcIkVraVwiLCAxMTogXCJLYXNcIiwgMTI6IFwiQXJhXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkJ1Z8O8blwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInB0LWJyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiRG9tXCIsIG1vOiBcIlNlZ1wiLCB0dTogXCJUZXJcIiwgd2U6IFwiUXVhXCIsIHRoOiBcIlF1aVwiLCBmcjogXCJTZXhcIiwgc2E6IFwiU2FiXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZldlwiLCAzOiBcIk1hclwiLCA0OiBcIkFiclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnb1wiLCA5OiBcIlNldFwiLCAxMDogXCJPdXRcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlelwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJIb2plXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkZVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlNvXCIsIG1vOiBcIk1vXCIsIHR1OiBcIkRpXCIsIHdlOiBcIk1pXCIsIHRoOiBcIkRvXCIsIGZyOiBcIkZyXCIsIHNhOiBcIlNhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk3DpHJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXpcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSGV1dGVcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIml0XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIkRvbVwiLCBtbzogXCJMdW5cIiwgdHU6IFwiTWFyXCIsIHdlOiBcIk1lclwiLCB0aDogXCJHaW9cIiwgZnI6IFwiVmVuXCIsIHNhOiBcIlNhYlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiR2VuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFnXCIsIDY6IFwiR2l1XCIsIDc6IFwiTHVnXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2V0XCIsIDEwOiBcIk90dFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGljXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIk9nZ2lcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIml0LWNoXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIkRvbVwiLCBtbzogXCJMdW5cIiwgdHU6IFwiTWFyXCIsIHdlOiBcIk1lclwiLCB0aDogXCJHaW9cIiwgZnI6IFwiVmVuXCIsIHNhOiBcIlNhYlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiR2VuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFnXCIsIDY6IFwiR2l1XCIsIDc6IFwiTHVnXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2V0XCIsIDEwOiBcIk90dFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGljXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIk9nZ2lcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInBsXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5pZVwiLCBtbzogXCJQb25cIiwgdHU6IFwiV3RvXCIsIHdlOiBcIsWacm9cIiwgdGg6IFwiQ3p3XCIsIGZyOiBcIlBpxIVcIiwgc2E6IFwiU29iXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTdHlcIiwgMjogXCJMdXRcIiwgMzogXCJNYXJcIiwgNDogXCJLd2lcIiwgNTogXCJNYWpcIiwgNjogXCJDemVcIiwgNzogXCJMaXBcIiwgODogXCJTaWVcIiwgOTogXCJXcnpcIiwgMTA6IFwiUGHFulwiLCAxMTogXCJMaXNcIiwgMTI6IFwiR3J1XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkR6aXNpYWpcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJteVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuGAkOGAlOGAhOGAuuGAueGAguGAlOGAveGAsVwiLCBtbzogXCLhgJDhgJThgIThgLrhgLnhgJzhgKxcIiwgdHU6IFwi4YCh4YCE4YC64YC54YCC4YCrXCIsIHdlOiBcIuGAl+GAr+GAkuGAueGAk+GAn+GAsOGAuFwiLCB0aDogXCLhgIDhgLzhgJ7hgJXhgJDhgLHhgLhcIiwgZnI6IFwi4YCe4YCx4YCs4YCA4YC84YCsXCIsIHNhOiBcIuGAheGAlOGAsVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLhgIfhgJThgLrhgJThgJ3hgKvhgJvhgK5cIiwgMjogXCLhgJbhgLHhgJbhgLHhgKzhgLrhgJ3hgKvhgJvhgK5cIiwgMzogXCLhgJnhgJDhgLpcIiwgNDogXCLhgKfhgJXhgLzhgK5cIiwgNTogXCLhgJnhgLFcIiwgNjogXCLhgIfhgL3hgJThgLpcIiwgNzogXCLhgIfhgLDhgJzhgK3hgK/hgIThgLpcIiwgODogXCLhgKnhgILhgK/hgJDhgLpcIiwgOTogXCLhgIXhgIDhgLrhgJDhgIThgLrhgJjhgKxcIiwgMTA6IFwi4YCh4YCx4YCs4YCA4YC64YCQ4YCt4YCv4YCY4YCsXCIsIDExOiBcIuGAlOGAreGAr+GAneGAhOGAuuGAmOGArFwiLCAxMjogXCLhgJLhgK7hgIfhgIThgLrhgJjhgKxcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4YCa4YCU4YCx4YC3XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2tcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiTmVcIiwgbW86IFwiUG9cIiwgdHU6IFwiVXRcIiwgd2U6IFwiU3RcIiwgdGg6IFwixaB0XCIsIGZyOiBcIlBpXCIsIHNhOiBcIlNvXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNw6FqXCIsIDY6IFwiSsO6blwiLCA3OiBcIkrDumxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiRG5lc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNsXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIk5lZFwiLCBtbzogXCJQb25cIiwgdHU6IFwiVG9yXCIsIHdlOiBcIlNyZVwiLCB0aDogXCLEjGV0XCIsIGZyOiBcIlBldFwiLCBzYTogXCJTb2JcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1halwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF2Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQuIG1tLiB5eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkRhbmVzXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiemgtY25cIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLml6VcIiwgbW86IFwi5LiAXCIsIHR1OiBcIuS6jFwiLCB3ZTogXCLkuIlcIiwgdGg6IFwi5ZubXCIsIGZyOiBcIuS6lFwiLCBzYTogXCLlha1cIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiMeaciFwiLCAyOiBcIjLmnIhcIiwgMzogXCIz5pyIXCIsIDQ6IFwiNOaciFwiLCA1OiBcIjXmnIhcIiwgNjogXCI25pyIXCIsIDc6IFwiN+aciFwiLCA4OiBcIjjmnIhcIiwgOTogXCI55pyIXCIsIDEwOiBcIjEw5pyIXCIsIDExOiBcIjEx5pyIXCIsIDEyOiBcIjEy5pyIXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuS7iuWkqVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInJvXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiZHVcIiwgbW86IFwibHVcIiwgdHU6IFwibWFcIiwgd2U6IFwibWlcIiwgdGg6IFwiam9cIiwgZnI6IFwidmlcIiwgc2E6IFwic2FcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiaWFuXCIsIDI6IFwiZmViXCIsIDM6IFwibWFydFwiLCA0OiBcImFwclwiLCA1OiBcIm1haVwiLCA2OiBcIml1blwiLCA3OiBcIml1bFwiLCA4OiBcImF1Z1wiLCA5OiBcInNlcHRcIiwgMTA6IFwib2N0XCIsIDExOiBcIm5vdlwiLCAxMjogXCJkZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiQXN0xIN6aVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNhXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiZGdcIiwgbW86IFwiZGxcIiwgdHU6IFwiZHRcIiwgd2U6IFwiZGNcIiwgdGg6IFwiZGpcIiwgZnI6IFwiZHZcIiwgc2E6IFwiZHNcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJHZW5cIiwgMjogXCJGZWJyXCIsIDM6IFwiTWFyw6dcIiwgNDogXCJBYnJcIiwgNTogXCJNYWlnXCIsIDY6IFwiSnVueVwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnXCIsIDk6IFwiU2V0XCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVzXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiQXZ1aVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImlkXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiTWluXCIsIG1vOiBcIlNlblwiLCB0dTogXCJTZWxcIiwgd2U6IFwiUmFiXCIsIHRoOiBcIkthbVwiLCBmcjogXCJKdW1cIiwgc2E6IFwiU2FiXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWVpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdzXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVzXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSGFyaSBpbmlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVuLWF1XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU3VuXCIsIG1vOiBcIk1vblwiLCB0dTogXCJUdWVcIiwgd2U6IFwiV2VkXCIsIHRoOiBcIlRodVwiLCBmcjogXCJGcmlcIiwgc2E6IFwiU2F0XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJUb2RheVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYW0tZXRcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLhiqXhiJHhi7VcIiwgbW86IFwi4Yiw4YqeXCIsIHR1OiBcIuGIm+GKreGIsOGKnlwiLCB3ZTogXCLhiKjhiaHhi5VcIiwgdGg6IFwi4YiQ4YiZ4Yi1XCIsIGZyOiBcIuGLk+GIreGJpVwiLCBzYTogXCLhiYXhi7PhiJxcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4YyD4YqV4YupXCIsIDI6IFwi4Y2M4Yml4YipXCIsIDM6IFwi4Yib4Yit4Ym9XCIsIDQ6IFwi4Yqk4Y2V4YioXCIsIDU6IFwi4Yic4YutXCIsIDY6IFwi4YyB4YqVXCIsIDc6IFwi4YyB4YiL4YutXCIsIDg6IFwi4Yqm4YyI4Yi1XCIsIDk6IFwi4Yi04Y2V4Ym0XCIsIDEwOiBcIuGKpuGKreGJsFwiLCAxMTogXCLhipbhiazhiJ1cIiwgMTI6IFwi4Yuy4Yi04YidXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuGLm+GIrFwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY3NcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiTmVcIiwgbW86IFwiUG9cIiwgdHU6IFwiw5p0XCIsIHdlOiBcIlN0XCIsIHRoOiBcIsSMdFwiLCBmcjogXCJQw6FcIiwgc2E6IFwiU29cIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkxlZFwiLCAyOiBcIsOabm9cIiwgMzogXCJCxZllXCIsIDQ6IFwiRHViXCIsIDU6IFwiS3bEm1wiLCA2OiBcIsSMdm5cIiwgNzogXCLEjHZjXCIsIDg6IFwiU3JwXCIsIDk6IFwiWsOhxZlcIiwgMTA6IFwixZjDrWpcIiwgMTE6IFwiTGlzXCIsIDEyOiBcIlByb1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEbmVzXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJlbFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCLOms+Fz4FcIiwgbW86IFwizpTOtc+FXCIsIHR1OiBcIs6kz4HOuVwiLCB3ZTogXCLOpM61z4RcIiwgdGg6IFwizqDOtc68XCIsIGZyOiBcIs6gzrHPgVwiLCBzYTogXCLOo86xzrJcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIs6ZzrHOvVwiLCAyOiBcIs6mzrXOslwiLCAzOiBcIs6czrHPgVwiLCA0OiBcIs6Rz4DPgVwiLCA1OiBcIs6czrHOuVwiLCA2OiBcIs6Zzr/Phc69XCIsIDc6IFwizpnOv8+FzrtcIiwgODogXCLOkc+FzrNcIiwgOTogXCLOo861z4BcIiwgMTA6IFwizp/Ous+EXCIsIDExOiBcIs6dzr/OtVwiLCAxMjogXCLOlM61zrpcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwizqPOrs68zrXPgc6xXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJra1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCLQltC6XCIsIG1vOiBcItCU0YFcIiwgdHU6IFwi0KHRgVwiLCB3ZTogXCLQodGAXCIsIHRoOiBcItCR0YFcIiwgZnI6IFwi0JbQvFwiLCBzYTogXCLQodCxXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLSmtCw0qNcIiwgMjogXCLQkNKb0L9cIiwgMzogXCLQndCw0YNcIiwgNDogXCLQodOZ0YNcIiwgNTogXCLQnNCw0LxcIiwgNjogXCLQnNCw0YNcIiwgNzogXCLQqNGW0LtcIiwgODogXCLQotCw0LxcIiwgOTogXCLSmtGL0YDQulwiLCAxMDogXCLSmtCw0LdcIiwgMTE6IFwi0prQsNGAXCIsIDEyOiBcItCW0LXQu9GCXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLQkdKv0LPRltC9XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0aFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCLguK3guLJcIiwgbW86IFwi4LiIXCIsIHR1OiBcIuC4rVwiLCB3ZTogXCLguJ5cIiwgdGg6IFwi4Lie4LikXCIsIGZyOiBcIuC4qFwiLCBzYTogXCLguKpcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIuC4oS7guIRcIiwgMjogXCLguIEu4LieLlwiLCAzOiBcIuC4oeC4tS7guIQuXCIsIDQ6IFwi4LmA4LihLuC4oi5cIiwgNTogXCLguJ4u4LiELlwiLCA2OiBcIuC4oeC4tC7guKIuXCIsIDc6IFwi4LiBLuC4hC5cIiwgODogXCLguKou4LiELlwiLCA5OiBcIuC4gS7guKIuXCIsIDEwOiBcIuC4lS7guIQuXCIsIDExOiBcIuC4ni7guKIuXCIsIDEyOiBcIuC4mC7guIQuXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuC4p+C4seC4meC4meC4teC5iVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwia28ta3JcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLsnbxcIiwgbW86IFwi7JuUXCIsIHR1OiBcIu2ZlFwiLCB3ZTogXCLsiJhcIiwgdGg6IFwi66qpXCIsIGZyOiBcIuq4iFwiLCBzYTogXCLthqBcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiMeyblFwiLCAyOiBcIjLsm5RcIiwgMzogXCIz7JuUXCIsIDQ6IFwiNOyblFwiLCA1OiBcIjXsm5RcIiwgNjogXCI27JuUXCIsIDc6IFwiN+yblFwiLCA4OiBcIjjsm5RcIiwgOTogXCI57JuUXCIsIDEwOiBcIjEw7JuUXCIsIDExOiBcIjEx7JuUXCIsIDEyOiBcIjEy7JuUXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5IG1tIGRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuyYpOuKmFwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZGFcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTw7huXCIsIG1vOiBcIk1hblwiLCB0dTogXCJUaXJcIiwgd2U6IFwiT25zXCIsIHRoOiBcIlRvclwiLCBmcjogXCJGcmVcIiwgc2E6IFwiTMO4clwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWpcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSSBkYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImx0XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU2tcIiwgbW86IFwiUHJcIiwgdHU6IFwiQW5cIiwgd2U6IFwiVHJcIiwgdGg6IFwiS3RcIiwgZnI6IFwiUG5cIiwgc2E6IFwixaB0XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlNhdXMuXCIsIDI6IFwiVmFzLlwiLCAzOiBcIktvdi5cIiwgNDogXCJCYWwuXCIsIDU6IFwiR2VnLlwiLCA2OiBcIkJpcsW+LlwiLCA3OiBcIkxpZXAuXCIsIDg6IFwiUnVncC5cIiwgOTogXCJSdWdzLlwiLCAxMDogXCJTYXBsLlwiLCAxMTogXCJMYXBrci5cIiwgMTI6IFwiR3J1b2QuXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJ5eXl5LW1tLWRkXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIsWgaWFuaWVuXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ2aVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkNOXCIsIG1vOiBcIlQyXCIsIHR1OiBcIlQzXCIsIHdlOiBcIlQ0XCIsIHRoOiBcIlQ1XCIsIGZyOiBcIlQ2XCIsIHNhOiBcIlQ3XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlRIRyAxXCIsIDI6IFwiVEhHIDJcIiwgMzogXCJUSEcgM1wiLCA0OiBcIlRIRyA0XCIsIDU6IFwiVEhHIDVcIiwgNjogXCJUSEcgNlwiLCA3OiBcIlRIRyA3XCIsIDg6IFwiVEhHIDhcIiwgOTogXCJUSEcgOVwiLCAxMDogXCJUSEcgMTBcIiwgMTE6IFwiVEhHIDExXCIsIDEyOiBcIlRIRyAxMlwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJIw7RtIG5heVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJuXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi4Kaw4Kas4Ka/XCIsIG1vOiBcIuCmuOCni+CmrlwiLCB0dTogXCLgpq7gppngp43gppfgprJcIiwgd2U6IFwi4Kas4KeB4KanXCIsIHRoOiBcIuCmrOCng+CmueCmg1wiLCBmcjogXCLgprbgp4HgppXgp43gprBcIiwgc2E6IFwi4Ka24Kao4Ka/XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIuCmnOCmvuCmqOCngVwiLCAyOiBcIuCmq+Cnh+CmrOCnjeCmsOCngVwiLCAzOiBcIuCmruCmvuCmsOCnjeCmmlwiLCA0OiBcIuCmj+CmquCnjeCmsOCmv+CmslwiLCA1OiBcIuCmruCnh1wiLCA2OiBcIuCmnOCngeCmqFwiLCA3OiBcIuCmnOCngeCmsuCmvuCmh1wiLCA4OiBcIuCmhuCml+CmuOCnjeCmn1wiLCA5OiBcIuCmuOCnh+CmquCnjeCmn+Cnh1wiLCAxMDogXCLgpoXgppXgp43gpp/gp4tcIiwgMTE6IFwi4Kao4Kat4KeHXCIsIDEyOiBcIuCmoeCmv+CmuOCnh1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLgpobgppxcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImJnXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0L3QtFwiLCBtbzogXCLQv9C9XCIsIHR1OiBcItCy0YJcIiwgd2U6IFwi0YHRgFwiLCB0aDogXCLRh9GCXCIsIGZyOiBcItC/0YJcIiwgc2E6IFwi0YHQsVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLRj9C90YMuXCIsIDI6IFwi0YTQtdCyLlwiLCAzOiBcItC80LDRgNGCXCIsIDQ6IFwi0LDQv9GALlwiLCA1OiBcItC80LDQuVwiLCA2OiBcItGO0L3QuFwiLCA3OiBcItGO0LvQuFwiLCA4OiBcItCw0LLQsy5cIiwgOTogXCLRgdC10L8uXCIsIDEwOiBcItC+0LrRgi5cIiwgMTE6IFwi0L3QvtC1LlwiLCAxMjogXCLQtNC10LouXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItC00L3QtdGBXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIk5lXCIsIG1vOiBcIlBvXCIsIHR1OiBcIlVsXCIsIHdlOiBcIlNyXCIsIHRoOiBcIsSMZVwiLCBmcjogXCJQZVwiLCBzYTogXCJTdVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJTaWpcIiwgMjogXCJWZWxcIiwgMzogXCJPxb51XCIsIDQ6IFwiVHJhXCIsIDU6IFwiU3ZpXCIsIDY6IFwiTGlwXCIsIDc6IFwiU3JwXCIsIDg6IFwiS29sXCIsIDk6IFwiUnVqXCIsIDEwOiBcIkxpc1wiLCAxMTogXCJTdHVcIiwgMTI6IFwiUHJvXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5LlwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJkYW5hc1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYXJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwi2KfZhNij2K3Yr1wiLCBtbzogXCLYp9mE2KfYq9mG2YrZhlwiLCB0dTogXCLYp9mE2KvZhNin2KvYp9ihXCIsIHdlOiBcItin2YTYp9ix2KjYudin2KFcIiwgdGg6IFwi2KfZhNiu2YXZitizXCIsIGZyOiBcItin2YTYrNmF2LnYqVwiLCBzYTogXCLYp9mE2LPYqNiqXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLZitmG2KfZitixXCIsIDI6IFwi2YHYqNix2KfZitixXCIsIDM6IFwi2YXYp9ix2LNcIiwgNDogXCLYp9io2LHZitmEXCIsIDU6IFwi2YXYp9mK2YhcIiwgNjogXCLZitmI2YbZitmIXCIsIDc6IFwi2YrZiNmE2YrZiFwiLCA4OiBcItij2LrYs9i32LNcIiwgOTogXCLYs9io2KrZhdio2LFcIiwgMTA6IFwi2KPZg9iq2YjYqNixXCIsIDExOiBcItmG2YjZgdmF2KjYsVwiLCAxMjogXCLYr9mK2LPZhdio2LFcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi2KfZhNmK2YjZhVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzYVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaXNcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJzdW5cIiwgbW86IFwibcOhblwiLCB0dTogXCLDvnJpXCIsIHdlOiBcIm1pw7BcIiwgdGg6IFwiZmltXCIsIGZyOiBcImbDtnNcIiwgc2E6IFwibGF1XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcImphblwiLCAyOiBcImZlYlwiLCAzOiBcIm1hclwiLCA0OiBcImFwclwiLCA1OiBcIm1hw61cIiwgNjogXCJqw7puXCIsIDc6IFwiasO6bFwiLCA4OiBcIsOhZ8O6XCIsIDk6IFwic2VwXCIsIDEwOiBcIm9rdFwiLCAxMTogXCJuw7N2XCIsIDEyOiBcImRlc1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLDjSBkYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRMb2NhbGVPcHRpb25zKGxvY2FsZTogc3RyaW5nKTogSU15T3B0aW9ucyB7XHJcbiAgICAgICAgaWYgKGxvY2FsZSAmJiB0aGlzLmxvY2FsZXMuaGFzT3duUHJvcGVydHkobG9jYWxlKSkge1xyXG4gICAgICAgICAgICAvLyBVc2VyIGdpdmVuIGxvY2FsZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVzW2xvY2FsZV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlZmF1bHQ6IGVuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxlc1tcImVuXCJdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZS50cyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJTXlEYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktZGF0ZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15RGF0ZVJhbmdlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktZGF0ZS1yYW5nZS5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15TW9udGggfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tb250aC5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15TW9udGhMYWJlbHMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tb250aC1sYWJlbHMuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1hcmtlZERhdGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbWFya2VkLWRhdGVzLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlNYXJrZWREYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbXktbWFya2VkLWRhdGUuaW50ZXJmYWNlXCI7XHJcblxyXG5jb25zdCBNID0gXCJtXCI7XHJcbmNvbnN0IE1NID0gXCJtbVwiO1xyXG5jb25zdCBNTU0gPSBcIm1tbVwiO1xyXG5jb25zdCBERCA9IFwiZGRcIjtcclxuY29uc3QgWVlZWSA9IFwieXl5eVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXRpbFNlcnZpY2Uge1xyXG4gICAgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXCJzdVwiLCBcIm1vXCIsIFwidHVcIiwgXCJ3ZVwiLCBcInRoXCIsIFwiZnJcIiwgXCJzYVwiXTtcclxuXHJcbiAgICBpc0RhdGVWYWxpZChkYXRlU3RyOiBzdHJpbmcsIGRhdGVGb3JtYXQ6IHN0cmluZywgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIsIGRpc2FibGVVbnRpbDogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLCBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sIGRpc2FibGVXZWVrRGF5czogQXJyYXk8c3RyaW5nPiwgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGU+LCBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPiwgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzLCBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlPik6IElNeURhdGUge1xyXG4gICAgICAgIGxldCByZXR1cm5EYXRlOiBJTXlEYXRlID0ge2RheTogMCwgbW9udGg6IDAsIHllYXI6IDB9O1xyXG4gICAgICAgIGxldCBkYXlzSW5Nb250aDogQXJyYXk8bnVtYmVyPiA9IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcclxuICAgICAgICBsZXQgaXNNb250aFN0cjogYm9vbGVhbiA9IGRhdGVGb3JtYXQuaW5kZXhPZihNTU0pICE9PSAtMTtcclxuICAgICAgICBsZXQgc2VwYXJhdG9yczogQXJyYXk8c3RyaW5nPiA9IHRoaXMuZ2V0RGF0ZUZvcm1hdFNlcGFyYXRvcnMoZGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgICAgIGxldCBtb250aDogbnVtYmVyID0gaXNNb250aFN0ciA/IHRoaXMucGFyc2VEYXRlUGFydE1vbnRoTmFtZShkYXRlRm9ybWF0LCBkYXRlU3RyLCBNTU0sIG1vbnRoTGFiZWxzKSA6IHRoaXMucGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0LCBkYXRlU3RyLCBNTSk7XHJcbiAgICAgICAgaWYgKGlzTW9udGhTdHIgJiYgbW9udGhMYWJlbHNbbW9udGhdKSB7XHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQgPSB0aGlzLmNoYW5nZURhdGVGb3JtYXQoZGF0ZUZvcm1hdCwgbW9udGhMYWJlbHNbbW9udGhdLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlU3RyLmxlbmd0aCAhPT0gZGF0ZUZvcm1hdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlRm9ybWF0LmluZGV4T2Yoc2VwYXJhdG9yc1swXSkgIT09IGRhdGVTdHIuaW5kZXhPZihzZXBhcmF0b3JzWzBdKSB8fCBkYXRlRm9ybWF0Lmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbMV0pICE9PSBkYXRlU3RyLmxhc3RJbmRleE9mKHNlcGFyYXRvcnNbMV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF5OiBudW1iZXIgPSB0aGlzLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgREQpO1xyXG4gICAgICAgIGxldCB5ZWFyOiBudW1iZXIgPSB0aGlzLnBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdCwgZGF0ZVN0ciwgWVlZWSk7XHJcblxyXG4gICAgICAgIGlmIChtb250aCAhPT0gLTEgJiYgZGF5ICE9PSAtMSAmJiB5ZWFyICE9PSAtMSkge1xyXG4gICAgICAgICAgICBpZiAoeWVhciA8IG1pblllYXIgfHwgeWVhciA+IG1heFllYXIgfHwgbW9udGggPCAxIHx8IG1vbnRoID4gMTIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIGRheTogZGF5fTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWREYXkoZGF0ZSwgbWluWWVhciwgbWF4WWVhciwgZGlzYWJsZVVudGlsLCBkaXNhYmxlU2luY2UsIGRpc2FibGVXZWVrZW5kcywgZGlzYWJsZVdlZWtEYXlzLCBkaXNhYmxlRGF5cywgZGlzYWJsZURhdGVSYW5nZXMsIGVuYWJsZURheXMpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHllYXIgJSA0MDAgPT09IDAgfHwgKHllYXIgJSAxMDAgIT09IDAgJiYgeWVhciAlIDQgPT09IDApKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzSW5Nb250aFsxXSA9IDI5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiBkYXlzSW5Nb250aFttb250aCAtIDFdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVmFsaWQgZGF0ZVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZUZvcm1hdFNlcGFyYXRvcnMoZGF0ZUZvcm1hdDogc3RyaW5nKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQubWF0Y2goL1teKGRteSldezEsfS9nKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VEYXRlRm9ybWF0KGRhdGVGb3JtYXQ6IHN0cmluZywgbGVuOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBtcDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1wICs9IE07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRlRm9ybWF0LnJlcGxhY2UoTU1NLCBtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNb250aExhYmVsVmFsaWQobW9udGhMYWJlbDogc3RyaW5nLCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMpOiBudW1iZXIge1xyXG4gICAgICAgIGZvciAobGV0IGtleSA9IDE7IGtleSA8PSAxMjsga2V5KyspIHtcclxuICAgICAgICAgICAgaWYgKG1vbnRoTGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gbW9udGhMYWJlbHNba2V5XS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBpc1llYXJMYWJlbFZhbGlkKHllYXJMYWJlbDogbnVtYmVyLCBtaW5ZZWFyOiBudW1iZXIsIG1heFllYXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHllYXJMYWJlbCA+PSBtaW5ZZWFyICYmIHllYXJMYWJlbCA8PSBtYXhZZWFyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB5ZWFyTGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVN0cmluZzogc3RyaW5nLCBkYXRlUGFydDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcG9zOiBudW1iZXIgPSB0aGlzLmdldERhdGVQYXJ0SW5kZXgoZGF0ZUZvcm1hdCwgZGF0ZVBhcnQpO1xyXG4gICAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZTogc3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcocG9zLCBwb3MgKyBkYXRlUGFydC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBpZiAoIS9eXFxkKyQvLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGF0ZVBhcnRNb250aE5hbWUoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IG1vbnRoTGFiZWw6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgbGV0IHN0YXJ0OiBudW1iZXIgPSBkYXRlRm9ybWF0LmluZGV4T2YoZGF0ZVBhcnQpO1xyXG4gICAgICAgIGlmIChkYXRlRm9ybWF0LnN1YnN0cihkYXRlRm9ybWF0Lmxlbmd0aCAtIDMpID09PSBNTU0pIHtcclxuICAgICAgICAgICAgbW9udGhMYWJlbCA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBlbmQ6IG51bWJlciA9IGRhdGVTdHJpbmcuaW5kZXhPZihkYXRlRm9ybWF0LmNoYXJBdChzdGFydCArIGRhdGVQYXJ0Lmxlbmd0aCksIHN0YXJ0KTtcclxuICAgICAgICAgICAgbW9udGhMYWJlbCA9IGRhdGVTdHJpbmcuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pc01vbnRoTGFiZWxWYWxpZChtb250aExhYmVsLCBtb250aExhYmVscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZVBhcnRJbmRleChkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBkYXRlRm9ybWF0LmluZGV4T2YoZGF0ZVBhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGVmYXVsdE1vbnRoKG1vbnRoU3RyaW5nOiBzdHJpbmcpOiBJTXlNb250aCB7XHJcbiAgICAgICAgbGV0IG1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xyXG4gICAgICAgIGlmIChtb250aFN0cmluZyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBsZXQgc3BsaXQgPSBtb250aFN0cmluZy5zcGxpdChtb250aFN0cmluZy5tYXRjaCgvW14wLTldLylbMF0pO1xyXG4gICAgICAgICAgICBtb250aC5tb250aE5iciA9IHNwbGl0WzBdLmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzBdKSA6IHBhcnNlSW50KHNwbGl0WzFdKTtcclxuICAgICAgICAgICAgbW9udGgueWVhciA9IHNwbGl0WzBdLmxlbmd0aCA9PT0gMiA/IHBhcnNlSW50KHNwbGl0WzFdKSA6IHBhcnNlSW50KHNwbGl0WzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRGlzYWJsZWREYXkoZGF0ZTogSU15RGF0ZSwgbWluWWVhcjogbnVtYmVyLCBtYXhZZWFyOiBudW1iZXIsIGRpc2FibGVVbnRpbDogSU15RGF0ZSwgZGlzYWJsZVNpbmNlOiBJTXlEYXRlLCBkaXNhYmxlV2Vla2VuZHM6IGJvb2xlYW4sIGRpc2FibGVXZWVrRGF5czogQXJyYXk8c3RyaW5nPiwgZGlzYWJsZURheXM6IEFycmF5PElNeURhdGU+LCBkaXNhYmxlRGF0ZVJhbmdlczogQXJyYXk8SU15RGF0ZVJhbmdlPiwgZW5hYmxlRGF5czogQXJyYXk8SU15RGF0ZT4pOiBib29sZWFuIHtcclxuICAgICAgICBmb3IgKGxldCBlIG9mIGVuYWJsZURheXMpIHtcclxuICAgICAgICAgICAgaWYgKGUueWVhciA9PT0gZGF0ZS55ZWFyICYmIGUubW9udGggPT09IGRhdGUubW9udGggJiYgZS5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkbiA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG5cclxuICAgICAgICBpZiAoZGF0ZS55ZWFyIDwgbWluWWVhciAmJiBkYXRlLm1vbnRoID09PSAxMiB8fCBkYXRlLnllYXIgPiBtYXhZZWFyICYmIGRhdGUubW9udGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0ZU1zOiBudW1iZXIgPSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlVW50aWwpICYmIGRhdGVNcyA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlVW50aWwpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVNpbmNlKSAmJiBkYXRlTXMgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkaXNhYmxlV2Vla2VuZHMpIHtcclxuICAgICAgICAgICAgaWYgKGRuID09PSAwIHx8IGRuID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpc2FibGVXZWVrRGF5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHdkIG9mIGRpc2FibGVXZWVrRGF5cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRuID09PSB0aGlzLmdldFdlZWtkYXlJbmRleCh3ZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgZCBvZiBkaXNhYmxlRGF5cykge1xyXG4gICAgICAgICAgICBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGRpc2FibGVEYXRlUmFuZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGQuYmVnaW4pICYmIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5lbmQpICYmIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmJlZ2luKSAmJiBkYXRlTXMgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZC5lbmQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYXJrZWREYXRlKGRhdGU6IElNeURhdGUsIG1hcmtlZERhdGVzOiBBcnJheTxJTXlNYXJrZWREYXRlcz4sIG1hcmtXZWVrZW5kczogSU15TWFya2VkRGF0ZSk6IElNeU1hcmtlZERhdGUge1xyXG4gICAgICAgIGZvciAobGV0IG1kIG9mIG1hcmtlZERhdGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGQgb2YgbWQuZGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bWFya2VkOiB0cnVlLCBjb2xvcjogbWQuY29sb3J9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXJrV2Vla2VuZHMgJiYgbWFya1dlZWtlbmRzLm1hcmtlZCkge1xyXG4gICAgICAgICAgICBsZXQgZGF5TmJyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChkYXlOYnIgPT09IDAgfHwgZGF5TmJyID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge21hcmtlZDogdHJ1ZSwgY29sb3I6IG1hcmtXZWVrZW5kcy5jb2xvcn07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHttYXJrZWQ6IGZhbHNlLCBjb2xvcjogXCJcIn07XHJcbiAgICB9XHJcblxyXG4gICAgaXNIaWdobGlnaHRlZERhdGUoZGF0ZTogSU15RGF0ZSwgc3VuSGlnaGxpZ2h0OiBib29sZWFuLCBzYXRIaWdobGlnaHQ6IGJvb2xlYW4sIGhpZ2hsaWdodERhdGVzOiBBcnJheTxJTXlEYXRlPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBkYXlOYnI6IG51bWJlciA9IHRoaXMuZ2V0RGF5TnVtYmVyKGRhdGUpO1xyXG4gICAgICAgIGlmIChzdW5IaWdobGlnaHQgJiYgZGF5TmJyID09PSAwIHx8IHNhdEhpZ2hsaWdodCAmJiBkYXlOYnIgPT09IDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGQgb2YgaGlnaGxpZ2h0RGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2Vla051bWJlcihkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoZC5nZXREYXkoKSA9PT0gMCA/IC0zIDogNCAtIGQuZ2V0RGF5KCkpKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoKGQuZ2V0VGltZSgpIC0gbmV3IERhdGUoZC5nZXRGdWxsWWVhcigpLCAwLCA0KS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKGRhdGU6IElNeURhdGUsIGRpc2FibGVVbnRpbDogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPD0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVVudGlsKTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShkYXRlOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlU2luY2UpICYmIHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVTaW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJbml0aWFsaXplZERhdGUoZGF0ZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkYXRlLnllYXIgIT09IDAgJiYgZGF0ZS5tb250aCAhPT0gMCAmJiBkYXRlLmRheSAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpc1NhbWVEYXRlKGQxOiBJTXlEYXRlLCBkMjogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBkMS55ZWFyID09PSBkMi55ZWFyICYmIGQxLm1vbnRoID09PSBkMi5tb250aCAmJiBkMS5kYXkgPT09IGQyLmRheTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIGRhdGUuZGF5LCAwLCAwLCAwLCAwKS5nZXRUaW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF5TnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBkLmdldERheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtEYXlzKCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtEYXlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdlZWtkYXlJbmRleCh3ZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla0RheXMuaW5kZXhPZih3ZCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIudXRpbC5zZXJ2aWNlLnRzIiwiLypcclxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xyXG4gKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmxldCBfX2NvbXBpbGVyX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyJyk7XHJcbmltcG9ydCB7IF9fcGxhdGZvcm1fYnJvd3Nlcl9wcml2YXRlX18gfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcclxubGV0IHBhdGNoOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XHJcbiAgICBwYXRjaCA9IHRydWU7XHJcbiAgICBfX2NvcmVfcHJpdmF0ZV9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcclxufVxyXG5cclxuaWYgKCFfX2NvbXBpbGVyX18uX19jb21waWxlcl9wcml2YXRlX18pIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIChfX2NvbXBpbGVyX18pLl9fY29tcGlsZXJfcHJpdmF0ZV9fID0ge1xyXG4gICAgICAgIFNlbGVjdG9yTWF0Y2hlcjogX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlcixcclxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBfX3VuaXZlcnNhbF9fOiBhbnkgPSByZXF1aXJlKCdhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX18nKTtcclxuaWYgKHBhdGNoKSB7XHJcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcclxuICAgIF9fdW5pdmVyc2FsX18uQ3NzU2VsZWN0b3IgPSBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcclxuICAgIF9fdW5pdmVyc2FsX18uU2VsZWN0b3JNYXRjaGVyID0gX19jb21waWxlcl9fLlNlbGVjdG9yTWF0Y2hlclxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9fXzIuMS4xLndvcmthcm91bmQudHMiLCJpbXBvcnQgeyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG4gIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzOkdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcblx0Y29uc3RydWN0b3IoYW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzOiBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MsIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTogR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSkge1xyXG4gICAgdGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG4gIH1cclxuIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCIvKipcclxuICogVGhpcyBmaWxlIGFuZCBgbWFpbi5icm93c2VyLnRzYCBhcmUgaWRlbnRpY2FsLCBhdCB0aGUgbW9tZW50KCEpXHJcbiAqIEJ5IHNwbGl0dGluZyB0aGVzZSwgeW91J3JlIGFibGUgdG8gY3JlYXRlIGxvZ2ljLCBpbXBvcnRzLCBldGMgdGhhdCBhcmUgXCJQbGF0Zm9ybVwiIHNwZWNpZmljLlxyXG4gKiBJZiB5b3Ugd2FudCB5b3VyIGNvZGUgdG8gYmUgY29tcGxldGVseSBVbml2ZXJzYWwgYW5kIGRvbid0IG5lZWQgdGhhdFxyXG4gKiBZb3UgY2FuIGFsc28ganVzdCBoYXZlIDEgZmlsZSwgdGhhdCBpcyBpbXBvcnRlZCBpbnRvIGJvdGhcclxuICogY2xpZW50LnRzIGFuZCBzZXJ2ZXIudHNcclxuICovXHJcblxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJy4vYXBwLnJvdXRlcyc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNeURhdGVQaWNrZXJNb2R1bGUgfSBmcm9tICcuLi8uLi9ub2RlX21vZHVsZXMvbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5tb2R1bGUnO1xyXG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL25hdmJhci9uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BzTGlzdENvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeSc7XHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgUGFnZVJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudCdcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcml2YWN5Q29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQnXHJcblxyXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUsIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmcyUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJ25nMi1wYWdpbmF0aW9uJztcclxuXHJcbi8qKlxyXG4gKiBUb3AtbGV2ZWwgTmdNb2R1bGUgXCJjb250YWluZXJcIlxyXG4gKi9cclxuQE5nTW9kdWxlKHtcclxuICAvKiogUm9vdCBBcHAgQ29tcG9uZW50ICovXHJcbiAgYm9vdHN0cmFwOiBbIEFwcENvbXBvbmVudCBdLFxyXG4gIC8qKiBPdXIgQ29tcG9uZW50cyAqL1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG5cdEFwcENvbXBvbmVudCxcclxuICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICBOYXZDb21wb25lbnQsIFxyXG4gICAgRHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQsXHJcbiAgICBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50LFxyXG4gICAgV29ya3Nob3BzQ29tcG9uZW50LFxyXG4gICAgQ29udGFjdFVzQ29tcG9uZW50LFxyXG4gICAgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgUGFnZVJlZGlyZWN0Q29tcG9uZW50LFxyXG4gICAgQXV0b2NvbXBsZXRlQ29tcG9uZW50LFxyXG4gICAgQWJvdXRDb21wb25lbnQsXHJcbiAgICBFcnJvckNvbXBvbmVudCxcclxuICAgIFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCxcclxuICAgIEZvb3RlckNvbXBvbmVudCxcclxuICAgIFByaXZhY3lDb21wb25lbnRcclxuXHRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIC8qKlxyXG4gICAgICogTk9URTogTmVlZHMgdG8gYmUgeW91ciBmaXJzdCBpbXBvcnQgKCEpXHJcbiAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxyXG4gICAgICovXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIE15RGF0ZVBpY2tlck1vZHVsZSxcclxuICAgIC8qKlxyXG4gICAgICogdXNpbmcgcm91dGVzXHJcbiAgICAgKi9cclxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyksXHJcbiAgICBBbmd1bGFydGljczJNb2R1bGUuZm9yUm9vdChbIEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyBdKSxcclxuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JDaGlsZCgpLFxyXG4gICAgTmcyUGFnaW5hdGlvbk1vZHVsZVxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbV29ya3Nob3BSZXBvc2l0b3J5LCBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9ICBmcm9tICcuL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9ICBmcm9tICcuL2Fib3V0L2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yQ29tcG9uZW50IH0gIGZyb20gJy4vZXJyb3IvZXJyb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRhY3RVc0NvbXBvbmVudCB9IGZyb20gJy4vY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2VSZWRpcmVjdENvbXBvbmVudCB9IGZyb20gJy4vcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJpdmFjeUNvbXBvbmVudCB9IGZyb20gJy4vcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gIHsgcGF0aDogJycsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICdhYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgeyBwYXRoOiAnd29ya3Nob3BzLzpwYWdlTnVtYmVyJywgY29tcG9uZW50OiBXb3Jrc2hvcHNDb21wb25lbnQgfSxcclxuICB7IHBhdGg6ICdwaG90b2dyYXBoeS13b3Jrc2hvcC1kZXRhaWxzLzp0aXRsZS86aWQnLCBjb21wb25lbnQ6IFdvcmtzaG9wRGV0YWlsc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ2NvbnRhY3QnLCBjb21wb25lbnQ6IENvbnRhY3RVc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3BhZ2UtcmVkaXJlY3QvOmV4dGVybmFsVXJsJywgY29tcG9uZW50OiBQYWdlUmVkaXJlY3RDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgeyBwYXRoOiAnNDA0JywgY29tcG9uZW50OiBFcnJvckNvbXBvbmVudCwgcGF0aE1hdGNoOidmdWxsJ30sXHJcbiAgeyBwYXRoOiAndGVybXNhbmRjb25kaXRpb25zJywgY29tcG9uZW50OiBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnfSxcclxuICB7IHBhdGg6ICdwcml2YWN5cG9saWN5JywgY29tcG9uZW50OiBQcml2YWN5Q29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJ30sXHJcbiAgeyBwYXRoOiAnd29ya3Nob3BzJywgcmVkaXJlY3RUbzogJy93b3Jrc2hvcHMvMScgfSxcclxuICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvNDA0JyB9XHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAucm91dGVzLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgZGF0YU1vZGVsOiBhbnlbXTtcclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgaXNDb2xsYXBzZWQ6IGJvb2xlYW47XHJcbiAgYnV0dG9uTGFiZWw6IHN0cmluZztcclxuICBwcml2YXRlIHBhbmVsT3ZlcmxheTogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICB0aGlzLnBhbmVsT3ZlcmxheSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbkxhYmVsID0gXCJTZWxlY3QgY2F0ZWdvcnlcIjtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuR2xvYmFsKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdGhhdC5pc0NvbGxhcHNlZCAmJiB0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICAgIHRoYXQuaXNDb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlZC5lbWl0KHRoaXMuYnV0dG9uTGFiZWwpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucGFuZWxPdmVybGF5ID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURyb3Bkb3duKCkge1xyXG4gICAgaWYgKCF0aGlzLnBhbmVsT3ZlcmxheSkge1xyXG4gICAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvdmVybGF5KCkge1xyXG4gICAgdGhpcy5wYW5lbE92ZXJsYXkgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmb290ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9mb290ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdmktYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9uYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdkNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGhpZGVOYXZiYXI6IGJvb2xlYW47XHJcbiAgICBAT3V0cHV0KCkgZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgc2hvd0ZpbHRlcnM6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBzaG93TmFtZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGlkZU5hdmJhciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0b2dnbGVGaWx0ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gIXRoaXMuaGlkZUZpbHRlcjtcclxuICAgICAgICBpZiAoIXRoaXMuaGlkZU5hdmJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVOYXZiYXIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbHRlcnNEcm9wZG93blRvZ2dsZS5lbWl0KHRoaXMuaGlkZUZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTmF2YmFyKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZU5hdmJhciA9ICF0aGlzLmhpZGVOYXZiYXI7XHJcbiAgICAgICAgaWYgKCF0aGlzLmhpZGVGaWx0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlRmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJzRHJvcGRvd25Ub2dnbGUuZW1pdCh0aGlzLmhpZGVGaWx0ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cclxuLy8gVGhlIGJ1aWxkIHN5c3RlbSBkZWZhdWx0cyB0byB0aGUgZGV2IGVudmlyb25tZW50IHdoaWNoIHVzZXMgYGVudmlyb25tZW50LnRzYCwgYnV0IGlmIHlvdSBkb1xyXG4vLyBgdW5nIGJ1aWxkIC0tZW52PXByb2RgIHRoZW4gYGVudmlyb25tZW50LnByb2QudHNgIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxyXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXHJcblxyXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XHJcbiAgcHJvZHVjdGlvbjogZmFsc2VcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIi8vIFRoaXMgZmlsZSBpbmNsdWRlcyBwb2x5ZmlsbHMgbmVlZGVkIGJ5IEFuZ3VsYXIgMiBhbmQgaXMgbG9hZGVkIGJlZm9yZVxyXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxyXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvb2JqZWN0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zdHJpbmcnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWdleHAnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc2V0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0JztcclxuXHJcbmltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wb2x5ZmlsbHMudHMiLCIvKipcclxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXHJcbiAqIEhhcyB0byBtYXRjaCBjbGllbnQgc2lkZSByb3V0ZXMuXHJcbiAqXHJcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuICogJ2hvbWUnLCAnYWJvdXQnXHJcbiAqIF07XHJcbiAqKi9cclxuZXhwb3J0IGNvbnN0IHJvdXRlczogc3RyaW5nW10gPSBbXHJcbidob21lJywgJ3dvcmtzaG9wcycsJ2Fib3V0JywgJzQwNCcsICcqKicsJ3Bob3RvZ3JhcGh5LXdvcmtzaG9wLWRldGFpbHMvOnRpdGxlLzppZCcsJ2NvbnRhY3QnLCdwYWdlLXJlZGlyZWN0LycsICd0ZXJtc2FuZGNvbmRpdGlvbnMnLCAncHJpdmFjeXBvbGljeSdcclxuXTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibXlkcFxcXCIgW25nU3R5bGVdPVxcXCJ7J3dpZHRoJzogb3B0cy5zaG93SW5wdXRGaWVsZCA/IG9wdHMud2lkdGggOiBudWxsLCAnYm9yZGVyJzogb3B0cy5pbmxpbmUgPyAnbm9uZScgOiBudWxsfVxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdGlvbmdyb3VwXFxcIiAqbmdJZj1cXFwiIW9wdHMuaW5saW5lXFxcIj5cXHJcXG4gICAgICAgIDxpbnB1dCAqbmdJZj1cXFwib3B0cy5zaG93SW5wdXRGaWVsZFxcXCIgI2lucHV0Qm94RWwgbmd0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwic2VsZWN0aW9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxJbnB1dEZpZWxkXFxcIiAoY2xpY2spPVxcXCJvcHRzLm9wZW5TZWxlY3Rvck9uSW5wdXRDbGljayYmIW9wdHMuZWRpdGFibGVEYXRlRmllbGQmJm9wZW5CdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydpbnZhbGlkZGF0ZSc6IGludmFsaWREYXRlJiZvcHRzLmluZGljYXRlSW52YWxpZERhdGUsICdpbnB1dG5vdGVkaXRhYmxlJzogb3B0cy5vcGVuU2VsZWN0b3JPbklucHV0Q2xpY2smJiFvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkLCAnc2VsZWN0aW9uZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkfVxcXCJcXHJcXG4gICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3twbGFjZWhvbGRlcn19XFxcIiBbbmdTdHlsZV09XFxcInsnaGVpZ2h0Jzogb3B0cy5oZWlnaHQsICdmb250LXNpemUnOiBvcHRzLnNlbGVjdGlvblR4dEZvbnRTaXplfVxcXCIgW25nTW9kZWxdPVxcXCJzZWxlY3Rpb25EYXlUeHRcXFwiIChuZ01vZGVsQ2hhbmdlKT1cXFwib25Vc2VyRGF0ZUlucHV0KCRldmVudClcXFwiIFt2YWx1ZV09XFxcInNlbGVjdGlvbkRheVR4dFxcXCIgKGtleXVwKT1cXFwib25DbG9zZVNlbGVjdG9yKCRldmVudClcXFwiXFxyXFxuICAgICAgICAgICAgICAgKGZvY3VzKT1cXFwib3B0cy5lZGl0YWJsZURhdGVGaWVsZCYmb25Gb2N1c0lucHV0KCRldmVudClcXFwiIChibHVyKT1cXFwib3B0cy5lZGl0YWJsZURhdGVGaWVsZCYmb25CbHVySW5wdXQoJGV2ZW50KVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCIgW3JlYWRvbmx5XT1cXFwiIW9wdHMuZWRpdGFibGVEYXRlRmllbGRcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgYXV0b2NvcnJlY3Q9XFxcIm9mZlxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWxidG5ncm91cFxcXCIgW3N0eWxlLmhlaWdodF09XFxcIm9wdHMuaGVpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsRGVjcmVhc2VEYXRlXFxcIiBjbGFzcz1cXFwiYnRuZGVjcmVhc2VcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dEZWNyZWFzZURhdGVCdG5cXFwiIChjbGljayk9XFxcIm9uRGVjcmVhc2VCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5kZWNyZWFzZWVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmRlY3JlYXNlZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHBsZWZ0XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbEluY3JlYXNlRGF0ZVxcXCIgY2xhc3M9XFxcImJ0bmluY3JlYXNlXFxcIiAqbmdJZj1cXFwib3B0cy5zaG93SW5jcmVhc2VEYXRlQnRuXFxcIiAoY2xpY2spPVxcXCJvbkluY3JlYXNlQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRuaW5jcmVhc2VlbmFibGVkJzogIW9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5pbmNyZWFzZWRpc2FibGVkJzogb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmxlZnRib3JkZXJyYWRpdXMnOiAhb3B0cy5zaG93RGVjcmVhc2VEYXRlQnRuJiYhb3B0cy5zaG93SW5wdXRGaWVsZH1cXFwiIFtkaXNhYmxlZF09XFxcIm9wdHMuY29tcG9uZW50RGlzYWJsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXlkcGljb24gaWNvbi1teWRwcmlnaHRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsQ2xlYXJEYXRlXFxcIiBjbGFzcz1cXFwiYnRuY2xlYXJcXFwiICpuZ0lmPVxcXCJzZWxlY3Rpb25EYXlUeHQubGVuZ3RoPjAmJm9wdHMuc2hvd0NsZWFyRGF0ZUJ0blxcXCIgKGNsaWNrKT1cXFwicmVtb3ZlQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRuY2xlYXJlbmFibGVkJzogIW9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5jbGVhcmRpc2FibGVkJzogb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmxlZnRib3JkZXJyYWRpdXMnOiAhb3B0cy5zaG93SW5jcmVhc2VEYXRlQnRuJiYhb3B0cy5zaG93RGVjcmVhc2VEYXRlQnRuJiYhb3B0cy5zaG93SW5wdXRGaWVsZH1cXFwiIFtkaXNhYmxlZF09XFxcIm9wdHMuY29tcG9uZW50RGlzYWJsZWRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwibXlkcGljb24gaWNvbi1teWRwcmVtb3ZlXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbE9wZW5DYWxlbmRhclxcXCIgY2xhc3M9XFxcImJ0bnBpY2tlclxcXCIgKGNsaWNrKT1cXFwib3BlbkJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bnBpY2tlcmVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bnBpY2tlcmRpc2FibGVkJzogb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmxlZnRib3JkZXJyYWRpdXMnOiAhb3B0cy5zaG93Q2xlYXJEYXRlQnRuJiYhb3B0cy5zaG93SW5jcmVhc2VEYXRlQnRuJiYhb3B0cy5zaG93RGVjcmVhc2VEYXRlQnRuJiYhb3B0cy5zaG93SW5wdXRGaWVsZHx8c2VsZWN0aW9uRGF5VHh0Lmxlbmd0aD09PTAmJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHBjYWxlbmRhclxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzZWxlY3RvclxcXCIgI3NlbGVjdG9yRWwgW25nU3R5bGVdPVxcXCJ7J3dpZHRoJzogb3B0cy5zZWxlY3RvcldpZHRoLCAnaGVpZ2h0JyA6IG9wdHMuc2VsZWN0b3JIZWlnaHQsICdib3R0b20nOiBnZXRTZWxlY3RvclRvcFBvc2l0aW9uKCl9XFxcIiAqbmdJZj1cXFwic2hvd1NlbGVjdG9yfHxvcHRzLmlubGluZVxcXCIgW215ZHBmb2N1c109XFxcIm9wdHMuaW5saW5lPycwJzonMSdcXFwiIFtuZ0NsYXNzXT1cXFwieydpbmxpbmVkcCc6IG9wdHMuaW5saW5lLCAnYWxpZ25zZWxlY3RvcnJpZ2h0Jzogb3B0cy5hbGlnblNlbGVjdG9yUmlnaHQsICdzZWxlY3RvcmFycm93Jzogb3B0cy5zaG93U2VsZWN0b3JBcnJvdyYmIW9wdHMuaW5saW5lLCAnc2VsZWN0b3JhcnJvd2xlZnQnOiBvcHRzLnNob3dTZWxlY3RvckFycm93JiYhb3B0cy5hbGlnblNlbGVjdG9yUmlnaHQmJiFvcHRzLmlubGluZSwgJ3NlbGVjdG9yYXJyb3dyaWdodCc6IG9wdHMuc2hvd1NlbGVjdG9yQXJyb3cmJm9wdHMuYWxpZ25TZWxlY3RvclJpZ2h0JiYhb3B0cy5pbmxpbmV9XFxcIiAoa2V5dXApPVxcXCJvbkNsb3NlU2VsZWN0b3IoJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiZmxvYXQ6bGVmdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbFByZXZNb250aFxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHBsZWZ0XFxcIiAoY2xpY2spPVxcXCJvblByZXZNb250aCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJwcmV2TW9udGhEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcmJ0bmVuYWJsZWQnOiAhcHJldk1vbnRoRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IHByZXZNb250aERpc2FibGVkfVxcXCI+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVybW9udGh0eHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoZWFkZXJsYWJlbGJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBbbmdDbGFzc109XFxcInsnbW9udGhsYWJlbCc6IG9wdHMubW9udGhTZWxlY3Rvcn1cXFwiIChjbGljayk9XFxcIm9wdHMubW9udGhTZWxlY3RvciYmb25TZWxlY3RNb250aENsaWNrZWQoJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcInt7b3B0cy5tb250aFNlbGVjdG9yPycwJzonLTEnfX1cXFwiPnt7dmlzaWJsZU1vbnRoLm1vbnRoVHh0fX08L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsTmV4dE1vbnRoXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcHJpZ2h0XFxcIiAoY2xpY2spPVxcXCJvbk5leHRNb250aCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJuZXh0TW9udGhEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcmJ0bmVuYWJsZWQnOiAhbmV4dE1vbnRoRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IG5leHRNb250aERpc2FibGVkfVxcXCI+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cXFwib3B0cy5zaG93VG9kYXlCdG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImhlYWRlcnRvZGF5YnRuXFxcIiAoY2xpY2spPVxcXCJvblRvZGF5Q2xpY2tlZCgpXFxcIiBbZGlzYWJsZWRdPVxcXCJkaXNhYmxlVG9kYXlCdG5cXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJ0b2RheWJ0bmVuYWJsZWQnOiAhZGlzYWJsZVRvZGF5QnRuLCAnaGVhZGVydG9kYXlidG5kaXNhYmxlZCc6IGRpc2FibGVUb2RheUJ0bn1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHB0b2RheVxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7b3B0cy50b2RheUJ0blR4dH19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcImZsb2F0OnJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsUHJldlllYXJcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwbGVmdFxcXCIgKGNsaWNrKT1cXFwib25QcmV2WWVhcigpXFxcIiBbZGlzYWJsZWRdPVxcXCJwcmV2WWVhckRpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFwcmV2WWVhckRpc2FibGVkLCAnaGVhZGVyYnRuZGlzYWJsZWQnOiBwcmV2WWVhckRpc2FibGVkfVxcXCI+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyeWVhcnR4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcmxhYmVsYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtuZ0NsYXNzXT1cXFwieyd5ZWFybGFiZWwnOiBvcHRzLnllYXJTZWxlY3Rvcn1cXFwiIChjbGljayk9XFxcIm9wdHMueWVhclNlbGVjdG9yJiZvblNlbGVjdFllYXJDbGlja2VkKCRldmVudClcXFwiIHRhYmluZGV4PVxcXCJ7e29wdHMueWVhclNlbGVjdG9yPycwJzonLTEnfX1cXFwiPnt7dmlzaWJsZU1vbnRoLnllYXJ9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxOZXh0WWVhclxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHByaWdodFxcXCIgKGNsaWNrKT1cXFwib25OZXh0WWVhcigpXFxcIiBbZGlzYWJsZWRdPVxcXCJuZXh0WWVhckRpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFuZXh0WWVhckRpc2FibGVkLCAnaGVhZGVyYnRuZGlzYWJsZWQnOiBuZXh0WWVhckRpc2FibGVkfVxcXCI+PC9idXR0b24+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiY2FsdGFibGVcXFwiICpuZ0lmPVxcXCIhc2VsZWN0TW9udGgmJiFzZWxlY3RZZWFyXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGhlYWQ+PHRyPjx0aCBjbGFzcz1cXFwid2Vla2RheXRpdGxlIHdlZWtkYXl0aXRsZXdlZWtuYnJcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dXZWVrTnVtYmVycyYmb3B0cy5maXJzdERheU9mV2Vlaz09PSdtbydcXFwiPiM8L3RoPjx0aCBjbGFzcz1cXFwid2Vla2RheXRpdGxlXFxcIiBzY29wZT1cXFwiY29sXFxcIiAqbmdGb3I9XFxcImxldCBkIG9mIHdlZWtEYXlzXFxcIj57e2R9fTwvdGg+PC90cj48L3RoZWFkPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHcgb2YgZGF0ZXNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJkYXljZWxsIGRheWNlbGx3ZWVrbmJyXFxcIiAqbmdJZj1cXFwib3B0cy5zaG93V2Vla051bWJlcnMmJm9wdHMuZmlyc3REYXlPZldlZWs9PT0nbW8nXFxcIj57e3cud2Vla05icn19PC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZGF5Y2VsbFxcXCIgKm5nRm9yPVxcXCJsZXQgZCBvZiB3LndlZWtcXFwiIFtuZ0NsYXNzXT1cXFwieydjdXJybW9udGgnOmQuY21vPT09Y3Vyck1vbnRoSWQmJiFkLmRpc2FibGVkLCAnc2VsZWN0ZWRkYXknOnNlbGVjdGVkRGF0ZS5kYXk9PT1kLmRhdGVPYmouZGF5ICYmIHNlbGVjdGVkRGF0ZS5tb250aD09PWQuZGF0ZU9iai5tb250aCAmJiBzZWxlY3RlZERhdGUueWVhcj09PWQuZGF0ZU9iai55ZWFyICYmIGQuY21vPT09Y3Vyck1vbnRoSWQsICdkaXNhYmxlZCc6IGQuZGlzYWJsZWQsICd0YWJsZXNpbmdsZWRheSc6IGQuY21vPT09Y3Vyck1vbnRoSWQmJiFkLmRpc2FibGVkfVxcXCIgKGNsaWNrKT1cXFwiIWQuZGlzYWJsZWQmJm9uQ2VsbENsaWNrZWQoZCk7JGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIiAoa2V5ZG93bik9XFxcIm9uQ2VsbEtleURvd24oJGV2ZW50LCBkKVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcImQubWFya2VkRGF0ZS5tYXJrZWRcXFwiIGNsYXNzPVxcXCJtYXJrZGF0ZVxcXCIgW25nU3R5bGVdPVxcXCJ7J2JhY2tncm91bmQtY29sb3InOiBkLm1hcmtlZERhdGUuY29sb3J9XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkYXRldmFsdWVcXFwiIFtuZ0NsYXNzXT1cXFwieydwcmV2bW9udGgnOmQuY21vPT09cHJldk1vbnRoSWQsJ2N1cnJtb250aCc6ZC5jbW89PT1jdXJyTW9udGhJZCwnbmV4dG1vbnRoJzpkLmNtbz09PW5leHRNb250aElkLCdoaWdobGlnaHQnOmQuaGlnaGxpZ2h0fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cXFwieydtYXJrY3VycmRheSc6ZC5jdXJyRGF5JiZvcHRzLm1hcmtDdXJyZW50RGF5LCAnZGltZGF5JzogZC5oaWdobGlnaHQgJiYgKGQuY21vPT09cHJldk1vbnRoSWQgfHwgZC5jbW89PT1uZXh0TW9udGhJZCB8fCBkLmRpc2FibGVkKX1cXFwiPnt7ZC5kYXRlT2JqLmRheX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwibW9udGh0YWJsZVxcXCIgKm5nSWY9XFxcInNlbGVjdE1vbnRoXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XFxcImxldCBtciBvZiBtb250aHNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJtb250aGNlbGwgdGFibGVzaW5nbGVtb250aFxcXCIgW25nQ2xhc3NdPVxcXCJ7J3NlbGVjdGVkbW9udGgnOiBtLnNlbGVjdGVkLCAnZGlzYWJsZWQnOiBtLmRpc2FibGVkfVxcXCIgKm5nRm9yPVxcXCJsZXQgbSBvZiBtclxcXCIgKGNsaWNrKT1cXFwiIW0uZGlzYWJsZWQmJm9uTW9udGhDZWxsQ2xpY2tlZChtKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChrZXlkb3duKT1cXFwib25Nb250aENlbGxLZXlEb3duKCRldmVudCwgbSlcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb250aHZhbHVlXFxcIiBbbmdDbGFzc109XFxcInsnbWFya2N1cnJtb250aCc6bS5jdXJyTW9udGgmJm9wdHMubWFya0N1cnJlbnRNb250aH1cXFwiPnt7bS5uYW1lfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInllYXJ0YWJsZVxcXCIgKm5nSWY9XFxcInNlbGVjdFllYXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XFxcIjVcXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuY2VsbFxcXCIgKGNsaWNrKT1cXFwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG4gbXlkcGljb24gaWNvbi1teWRwdXBcXFwiIChjbGljayk9XFxcIm9uUHJldlllYXJzKCRldmVudCwgeWVhcnNbMF1bMF0ueWVhcilcXFwiIFtkaXNhYmxlZF09XFxcInByZXZZZWFyc0Rpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsneWVhcmNoYW5nZWJ0bmVuYWJsZWQnOiAhcHJldlllYXJzRGlzYWJsZWQsICd5ZWFyY2hhbmdlYnRuZGlzYWJsZWQnOiBwcmV2WWVhcnNEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IHlyIG9mIHllYXJzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwieWVhcmNlbGwgdGFibGVzaW5nbGV5ZWFyXFxcIiBbbmdDbGFzc109XFxcInsnc2VsZWN0ZWR5ZWFyJzogeS5zZWxlY3RlZCwgJ2Rpc2FibGVkJzogeS5kaXNhYmxlZH1cXFwiICpuZ0Zvcj1cXFwibGV0IHkgb2YgeXJcXFwiIChjbGljayk9XFxcIiF5LmRpc2FibGVkJiZvblllYXJDZWxsQ2xpY2tlZCh5KTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChrZXlkb3duKT1cXFwib25ZZWFyQ2VsbEtleURvd24oJGV2ZW50LCB5KVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInllYXJ2YWx1ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J21hcmtjdXJyeWVhcic6eS5jdXJyWWVhciYmb3B0cy5tYXJrQ3VycmVudFllYXJ9XFxcIj57e3kueWVhcn19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG5jZWxsXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0biBteWRwaWNvbiBpY29uLW15ZHBkb3duXFxcIiAoY2xpY2spPVxcXCJvbk5leHRZZWFycygkZXZlbnQsIHllYXJzWzBdWzBdLnllYXIpXFxcIiBbZGlzYWJsZWRdPVxcXCJuZXh0WWVhcnNEaXNhYmxlZFxcXCIgW25nQ2xhc3NdPVxcXCJ7J3llYXJjaGFuZ2VidG5lbmFibGVkJzogIW5leHRZZWFyc0Rpc2FibGVkLCAneWVhcmNoYW5nZWJ0bmRpc2FibGVkJzogbmV4dFllYXJzRGlzYWJsZWR9XFxcIj48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIubXlkcCB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAqIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAsXFxyXFxuLm15ZHAgLnNlbGVjdGlvbmdyb3VwLFxcclxcbi5teWRwIC5zZWxlY3Rpb24sXFxyXFxuLm15ZHAgLnNlbGVjdG9yLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDYpIHRkOmZpcnN0LWNoaWxkLFxcclxcbi5teWRwIC5tb250aHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg0KSB0ZDpmaXJzdC1jaGlsZCxcXHJcXG4ubXlkcCAueWVhcnRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg3KSB0ZDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmNhbHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg2KSB0ZDpsYXN0LWNoaWxkLFxcclxcbi5teWRwIC5tb250aHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZCg0KSB0ZDpsYXN0LWNoaWxkLFxcclxcbi5teWRwIC55ZWFydGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDcpIHRkOmxhc3QtY2hpbGQge1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5sZWZ0Ym9yZGVycmFkaXVzIHtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2VsZWN0b3JmYWRlaW4gMC4xcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb246IHNlbGVjdG9yZmFkZWluIDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rvcjpmb2N1cyB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNBREQ4RTY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkAtd2Via2l0LWtleWZyYW1lcyBzZWxlY3RvcmZhZGVpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2VsZWN0b3JmYWRlaW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93OmFmdGVyLFxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93OmJlZm9yZSB7XFxyXFxuICAgIGJvdHRvbTogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93OmFmdGVyIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDApO1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDApO1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjQ0NDO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDExcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6Zm9jdXM6YmVmb3JlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0FERDhFNjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dsZWZ0OmFmdGVyLFxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93bGVmdDpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvd3JpZ2h0OmFmdGVyLFxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93cmlnaHQ6YmVmb3JlIHtcXHJcXG4gICAgbGVmdDogODYlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYWxpZ25zZWxlY3RvcnJpZ2h0IHtcXHJcXG4gICAgcmlnaHQ6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rpb25ncm91cCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pbnZhbGlkZGF0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMURFREU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIDo6LW1zLWNsZWFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGJ0bmdyb3VwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICB3aWR0aDogMSU7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcixcXHJcXG4ubXlkcCAuYnRuY2xlYXIsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDI2cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3V0bGluZTogMDtcXHJcXG4gICAgZm9udDogaW5oZXJpdDtcXHJcXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmxlZnRib3JkZXIge1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNDQ0M7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXJlbmFibGVkLFxcclxcbi5teWRwIC5idG5jbGVhcmVuYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlZW5hYmxlZCxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2VlbmFibGVkLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bmVuYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bmVuYWJsZWQsXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5lbmFibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0aW9uZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcmRpc2FibGVkLFxcclxcbi5teWRwIC5idG5jbGVhcmRpc2FibGVkLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZWRpc2FibGVkLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZWRpc2FibGVkLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bmRpc2FibGVkLFxcclxcbi5teWRwIC5oZWFkZXJidG5kaXNhYmxlZCxcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXHJcXG4gICAgb3BhY2l0eTogMC42NTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbmRpc2FibGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcixcXHJcXG4ubXlkcCAuYnRuY2xlYXIsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZSxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZCB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIgdGQ6bnRoLWNoaWxkKDEpIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIgdGQ6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHRkOm50aC1jaGlsZCgzKSB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmNhbHRhYmxlLFxcclxcbi5teWRwIC5tb250aHRhYmxlLFxcclxcbi5teWRwIC55ZWFydGFibGUge1xcclxcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSxcXHJcXG4ubXlkcCAud2Vla2RheXRpdGxlLFxcclxcbi5teWRwIC5kYXljZWxsLFxcclxcbi5teWRwIC5tb250aGNlbGwsXFxyXFxuLm15ZHAgLnllYXJjZWxsIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gICAgY29sb3I6ICMwMDMzNjY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGUsXFxyXFxuLm15ZHAgLmRheWNlbGwsXFxyXFxuLm15ZHAgLm1vbnRoY2VsbCxcXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLndlZWtkYXl0aXRsZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNnB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAud2Vla2RheXRpdGxld2Vla25iciB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQkJCO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubW9udGhjZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnllYXJjZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGwgLmRhdGV2YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kYXljZWxsIC5kYXRldmFsdWUgc3BhbiB7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kYXljZWxsd2Vla25iciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0NDQztcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmlubGluZWRwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAucHJldm1vbnRoLFxcclxcbi5teWRwIC5uZXh0bW9udGgge1xcclxcbiAgICBjb2xvcjogI0NDQztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRpc2FibGVkIHtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIGNvbG9yOiAjQ0NDO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkJFRkVGO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6ICNDMzAwMDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kaW1kYXkge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jdXJybW9udGgge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubWFya2RhdGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiA0cHg7XFxyXFxuICAgIGhlaWdodDogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tYXJrY3VycmRheSxcXHJcXG4ubXlkcCAubWFya2N1cnJtb250aCxcXHJcXG4ubXlkcCAubWFya2N1cnJ5ZWFyIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RlZGRheSAuZGF0ZXZhbHVlLFxcclxcbi5teWRwIC5zZWxlY3RlZG1vbnRoIC5tb250aHZhbHVlLFxcclxcbi5teWRwIC5zZWxlY3RlZHllYXIgLnllYXJ2YWx1ZSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhFQkZGRjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuY2VsbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuY2VsbCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bixcXHJcXG4ubXlkcCAuaGVhZGVybGFiZWxidG4sXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0biB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVybGFiZWxidG4ge1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NDQztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcixcXHJcXG4ubXlkcCAuYnRuY2xlYXIsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZSxcXHJcXG4ubXlkcCAuaGVhZGVyYnRuLFxcclxcbi5teWRwIC5oZWFkZXJtb250aHR4dCxcXHJcXG4ubXlkcCAuaGVhZGVyeWVhcnR4dCxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4sXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG4ge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXHJcXG4gICAgcGFkZGluZzogMCA0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgICBtaW4td2lkdGg6IDYwcHg7XFxyXFxuICAgIG1heC13aWR0aDogODRweDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVybW9udGh0eHQsXFxyXFxuLm15ZHAgLmhlYWRlcnllYXJ0eHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRuY2xlYXI6Zm9jdXMsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlOmZvY3VzLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZTpmb2N1cyxcXHJcXG4ubXlkcCAuYnRucGlja2VyOmZvY3VzLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bjpmb2N1cyB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNBREQ4RTY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG46Zm9jdXMsXFxyXFxuLm15ZHAgLm1vbnRobGFiZWw6Zm9jdXMsXFxyXFxuLm15ZHAgLnllYXJsYWJlbDpmb2N1cyxcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bjpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjQUREOEU2O1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGF5Y2VsbDpmb2N1cyxcXHJcXG4ubXlkcCAubW9udGhjZWxsOmZvY3VzLFxcclxcbi5teWRwIC55ZWFyY2VsbDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwY2FsZW5kYXIsXFxyXFxuLm15ZHAgLmljb24tbXlkcHJlbW92ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGxlZnQsXFxyXFxuLm15ZHAgLmljb24tbXlkcHJpZ2h0LFxcclxcbi5teWRwIC5pY29uLW15ZHB1cCxcXHJcXG4ubXlkcCAuaWNvbi1teWRwZG93biB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5kZWNyZWFzZSAuaWNvbi1teWRwbGVmdCxcXHJcXG4ubXlkcCAuYnRuaW5jcmVhc2UgLmljb24tbXlkcHJpZ2h0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwdG9kYXkge1xcclxcbiAgICBjb2xvcjogIzIyMjtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCB0YWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgdGFibGUgdGQge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCB0YWJsZSxcXHJcXG4ubXlkcCB0aCxcXHJcXG4ubXlkcCB0ZCB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcmVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2VlbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZWVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZW5hYmxlZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC50YWJsZXNpbmdsZWRheTpob3ZlcixcXHJcXG4ubXlkcCAudGFibGVzaW5nbGVtb250aDpob3ZlcixcXHJcXG4ubXlkcCAudGFibGVzaW5nbGV5ZWFyOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm1vbnRobGFiZWwsXFxyXFxuLm15ZHAgLnllYXJsYWJlbCxcXHJcXG4ubXlkcCAuaW5wdXRub3RlZGl0YWJsZSxcXHJcXG4ubXlkcCAuZGF5Y2VsbCxcXHJcXG4ubXlkcCAubW9udGhjZWxsLFxcclxcbi5teWRwIC55ZWFyY2VsbCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bmVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5lbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5tb250aGxhYmVsOmhvdmVyLFxcclxcbi5teWRwIC55ZWFybGFiZWw6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzc3NztcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnbXlkYXRlcGlja2VyJztcXHJcXG4gICAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtO2Jhc2U2NCxBQUVBQUFBUEFJQUFBd0J3UjFOVlFpQ01KWGtBQUFEOEFBQUFWRTlUTHpJK0lFaE5BQUFCVUFBQUFGWmpiV0Z3NlVLY2Z3QUFBYWdBQUFIRVkzWjBJQWJWL3dRQUFBejhBQUFBSUdad1oyMktrWkJaQUFBTkhBQUFDM0JuWVhOd0FBQUFFQUFBRFBRQUFBQUlaMng1WnFibjd5Y0FBQU5zQUFBRlhHaGxZV1FOWDBiTEFBQUl5QUFBQURab2FHVmhCendEV1FBQUNRQUFBQUFrYUcxMGVCWEIvLzhBQUFra0FBQUFJR3h2WTJFR05BVEVBQUFKUkFBQUFCSnRZWGh3QVhnTU9nQUFDVmdBQUFBZ2JtRnRaWktVRmdNQUFBbDRBQUFDL1hCdmMzUjlOdVpsQUFBTWVBQUFBSHB3Y21WdzVVRXJ2QUFBR0l3QUFBQ0dBQUVBQUFBS0FEQUFQZ0FDYkdGMGJnQU9SRVpNVkFBYUFBUUFBQUFBQUFBQUFRQUFBQVFBQUFBQUFBQUFBUUFBQUFGc2FXZGhBQWdBQUFBQkFBQUFBUUFFQUFRQUFBQUJBQWdBQVFBR0FBQUFBUUFBQUFFQ3VBR1FBQVVBQUFKNkFyd0FBQUNNQW5vQ3ZBQUFBZUFBTVFFQ0FBQUNBQVVEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFGQm1SV1FBUU9nQTZBWURVdjlxQUZvRFVnQ1dBQUFBQVFBQUFBQUFBQUFBQUFVQUFBQURBQUFBTEFBQUFBUUFBQUZnQUFFQUFBQUFBRm9BQXdBQkFBQUFMQUFEQUFvQUFBRmdBQVFBTGdBQUFBUUFCQUFCQUFEb0J2Ly9BQURvQVAvL0FBQUFBUUFFQUFBQUFRQUNBQU1BQkFBRkFBWUFCd0FBQVFZQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBREFBQUFBQUFaQUFBQUFBQUFBQUhBQURvQUFBQTZBQUFBQUFCQUFEb0FRQUE2QUVBQUFBQ0FBRG9BZ0FBNkFJQUFBQURBQURvQXdBQTZBTUFBQUFFQUFEb0JBQUE2QVFBQUFBRkFBRG9CUUFBNkFVQUFBQUdBQURvQmdBQTZBWUFBQUFIQUFFQUFBQUFBVUVDZlFBT0FBcTNBQUFBWmhRQkJSVXJBUlFQQVFZaUpqVVJORDRCSHdFV0FVRUsrZ3NjRmhZY0Mvb0tBVjRPQy9vTEZnNEI5QThVQWd6NkNnQUFBUUFBQUFBQlp3SjhBQTBBRjBBVUFBRUFBUUZIQUFFQUFXOEFBQUJtRnhNQ0JSWXJBUkVVQmlJdkFTWTBQd0UyTWhZQlpSUWdDZm9LQ3ZvTEhCZ0NXUDRNRGhZTCtnc2NDL29MRmdBQUFBQUZBQUQvYWdPaEExSUFGQUFZQUNnQU9BQmNBTGRBRUNvYUFnb0ZNaUlDQmdvTkFRQUJBMGRMc0FwUVdFQS9EZ3dDQ2dVR0JncGxBQUlFQVFRQ0FXMEFBUUFFQVFCckFBQURCQUFEYXdnQkJnQUVBZ1lFWHdjQkJRVUxXQTBCQ3dzTVNBQURBd2xZQUFrSkRRbEpHMEJBRGd3Q0NnVUdCUW9HYlFBQ0JBRUVBZ0Z0QUFFQUJBRUFhd0FBQXdRQUEyc0lBUVlBQkFJR0JGOEhBUVVGQzFnTkFRc0xERWdBQXdNSldBQUpDUTBKU1ZsQUdGdFpWbE5RVDB4SlJrUS9QQ1ltSmlRUkZSUVhFZzhGSFNzSkFRWWlMd0VtTkQ4Qk5qSWZBVGMyTWg4QkZoUUJJUkVoTnpVMEppc0JJZ1lkQVJRV093RXlOaVUxTkNZckFTSUdIUUVVRmpzQk1qWTNFUlFHSXlFaUpqVVJORFk3QVRVME5qc0JNaFlkQVRNMU5EWTdBVElXQnhVek1oWUMxLzdpQlE0R29RVUZHZ1VPQm52M0JnNEdHUVg5YXdNUy9PN1hDZ2drQ0FvS0NDUUlDZ0dzQ2dnakNBb0tDQ01JQ3Rjc0hQenVIU29xSFVnMEpTUWxOTlkySkNNbE5nRkhIU29CT1A3aUJRV2hCZzRGR2dVRmUvZ0ZCUm9GRHY1ekFqeHJvUWdLQ2dpaENBb0tDS0VJQ2dvSW9RZ0tDaXo5TlIwcUtoMEN5eDBxTmlVME5DVTJOaVUwTkNVMktnQUFBQUFQQUFEL2FnT2hBMUlBQXdBSEFBc0FEd0FUQUJjQUd3QWZBQ01BTXdBM0FEc0FQd0JQQUhNQW1FQ1ZRU1VDSFJKSkxTUURFeDBDUnlFZkFoMFRDUjFVR3dFVEdSY05Bd2tJRXdsZkdCWU1Bd2dWRVFjREJRUUlCVjRVRUFZREJBOExBd01CQUFRQlhob0JFaEllV0NBQkhoNE1TQTRLQWdNQUFCeFlBQndjRFJ4SmNuQnRhbWRtWTJCZFcxWlRUVXhGUkQ4K1BUdzdPams0TnpZMU5ERXZLU2NqSWlFZ0h4NGRIQnNhR1JnWEZoVVVFeElSRVJFUkVSRVJFUkFpQlIwckZ6TTFJeGN6TlNNbk16VWpGek0xSXljek5TTUJNelVqSnpNMUl3RXpOU01uTXpVakF6VTBKaWNqSWdZSEZSUVdOek15TmdFek5TTW5NelVqRnpNMUl6YzFOQ1luSXlJR0Z4VVVGamN6TWpZM0VSUUdJeUVpSmpVUk5EWTdBVFUwTmpzQk1oWWRBVE0xTkRZN0FUSVdCeFV6TWhaSG9hSEZzckxGb2FIRnNyTEZvYUVCbTdPejFyS3lBYXlob2RhenM4UU1CaVFIQ2dFTUJpUUhDZ0dib2FIV3M3UFdvYUVTQ2dnakJ3d0JDZ2dqQ0FyWExCejg3aDBxS2gxSU5DVWtKVFRXTmlRakpUWUJSeDBxVDZHaG9TU3lzcklrb2YzRW9mcWgvY1NoSkxJQk1LRUhDZ0VNQnFFSERBRUsvaWF5SktHaG9XdWhCd29CREFhaEJ3d0JDaXo5TlIwcUtoMEN5eDBxTmlVME5DVTJOaVUwTkNVMktnQUFBQUgvL3dBQUFqc0J5UUFPQUJGQURnQUJBQUZ2QUFBQVpoVXlBZ1VXS3lVVUJpY2hJaTRCUHdFMk1oOEJGZ0k3RkEvK0RBOFVBZ3o2Q2g0SytncXJEaFlCRkI0TCtnb0srZ3NBQUFBQkFBQUFBQUk4QWUwQURnQVhRQlFBQVFBQkFVY0FBUUFCYndBQUFHWTFGQUlGRmlzQkZBOEJCaUl2QVNZME5qTWhNaFlDT3dyNkN4d0wrZ3NXRGdIMERoWUJ5UTRMK2dzTCtnc2NGaFlBQUFFQUFQL3ZBdFFDaGdBa0FCNUFHeUlaRUFjRUFBSUJSd01CQWdBQ2J3RUJBQUJtRkJ3VUZBUUZHQ3NsRkE4QkJpSXZBUWNHSWk4QkpqUS9BU2NtTkQ4Qk5qSWZBVGMyTWg4QkZoUVBBUmNXQXRRUFRCQXNFS1NrRUN3UVRCQVFwS1FRRUV3UUxCQ2twQkFzRUV3UEQ2U2tEM0FXRUV3UEQ2V2xEdzlNRUN3UXBLUVFMQkJNRUJDa3BCQVFUQTh1RDZTa0R3QUJBQUFBQVFBQWJkeWN6VjhQUFBVQUN3UG9BQUFBQU5Vc2daVUFBQUFBMVN5QmxmLy8vMm9ENkFOU0FBQUFDQUFDQUFBQUFBQUFBQUVBQUFOUy8yb0FBQVBvLy8vLy9nUG9BQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUlBK2dBQUFGbEFBQUJaUUFBQStnQUFBT2dBQUFDTy8vL0Fqc0FBQU1SQUFBQUFBQUFBQ0lBU2dFb0FoWUNQQUprQXE0QUFBQUJBQUFBQ0FCMEFBOEFBQUFBQUFJQVJBQlVBSE1BQUFDcEMzQUFBQUFBQUFBQUVnRGVBQUVBQUFBQUFBQUFOUUFBQUFFQUFBQUFBQUVBREFBMUFBRUFBQUFBQUFJQUJ3QkJBQUVBQUFBQUFBTUFEQUJJQUFFQUFBQUFBQVFBREFCVUFBRUFBQUFBQUFVQUN3QmdBQUVBQUFBQUFBWUFEQUJyQUFFQUFBQUFBQW9BS3dCM0FBRUFBQUFBQUFzQUV3Q2lBQU1BQVFRSkFBQUFhZ0MxQUFNQUFRUUpBQUVBR0FFZkFBTUFBUVFKQUFJQURnRTNBQU1BQVFRSkFBTUFHQUZGQUFNQUFRUUpBQVFBR0FGZEFBTUFBUVFKQUFVQUZnRjFBQU1BQVFRSkFBWUFHQUdMQUFNQUFRUUpBQW9BVmdHakFBTUFBUVFKQUFzQUpnSDVRMjl3ZVhKcFoyaDBJQ2hES1NBeU1ERTNJR0o1SUc5eWFXZHBibUZzSUdGMWRHaHZjbk1nUUNCbWIyNTBaV3hzYnk1amIyMXRlV1JoZEdWd2FXTnJaWEpTWldkMWJHRnliWGxrWVhSbGNHbGphMlZ5Ylhsa1lYUmxjR2xqYTJWeVZtVnljMmx2YmlBeExqQnRlV1JoZEdWd2FXTnJaWEpIWlc1bGNtRjBaV1FnWW5rZ2MzWm5NblIwWmlCbWNtOXRJRVp2Ym5SbGJHeHZJSEJ5YjJwbFkzUXVhSFIwY0RvdkwyWnZiblJsYkd4dkxtTnZiUUJEQUc4QWNBQjVBSElBYVFCbkFHZ0FkQUFnQUNnQVF3QXBBQ0FBTWdBd0FERUFOd0FnQUdJQWVRQWdBRzhBY2dCcEFHY0FhUUJ1QUdFQWJBQWdBR0VBZFFCMEFHZ0Fid0J5QUhNQUlBQkFBQ0FBWmdCdkFHNEFkQUJsQUd3QWJBQnZBQzRBWXdCdkFHMEFiUUI1QUdRQVlRQjBBR1VBY0FCcEFHTUFhd0JsQUhJQVVnQmxBR2NBZFFCc0FHRUFjZ0J0QUhrQVpBQmhBSFFBWlFCd0FHa0FZd0JyQUdVQWNnQnRBSGtBWkFCaEFIUUFaUUJ3QUdrQVl3QnJBR1VBY2dCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFEQUFiUUI1QUdRQVlRQjBBR1VBY0FCcEFHTUFhd0JsQUhJQVJ3QmxBRzRBWlFCeUFHRUFkQUJsQUdRQUlBQmlBSGtBSUFCekFIWUFad0F5QUhRQWRBQm1BQ0FBWmdCeUFHOEFiUUFnQUVZQWJ3QnVBSFFBWlFCc0FHd0Fid0FnQUhBQWNnQnZBR29BWlFCakFIUUFMZ0JvQUhRQWRBQndBRG9BTHdBdkFHWUFid0J1QUhRQVpRQnNBR3dBYndBdUFHTUFid0J0QUFBQUFBSUFBQUFBQUFBQUNnQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQ0FFQ0FRTUJCQUVGQVFZQkJ3RUlBUWtBQ1cxNVpIQnlhV2RvZEFodGVXUndiR1ZtZEFsdGVXUndkRzlrWVhrTWJYbGtjR05oYkdWdVpHRnlCbTE1WkhCMWNBaHRlV1J3Wkc5M2JncHRlV1J3Y21WdGIzWmxBQUFBQUFBQkFBSC8vd0FQQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUJnQUdBQVlBMUwvYWdOUy8ycXdBQ3dnc0FCVldFVlpJQ0JMdUFBT1VVdXdCbE5hV0xBMEc3QW9XV0JtSUlwVldMQUNKV0c1Q0FBSUFHTmpJMkliSVNHd0FGbXdBRU1qUkxJQUFRQkRZRUl0c0FFc3NDQmdaaTJ3QWl3Z1pDQ3d3RkN3QkNaYXNpZ0JDa05GWTBWU1cxZ2hJeUViaWxnZ3NGQlFXQ0d3UUZrYklMQTRVRmdoc0RoWldTQ3hBUXBEUldORllXU3dLRkJZSWJFQkNrTkZZMFVnc0RCUVdDR3dNRmtiSUxEQVVGZ2daaUNLaW1FZ3NBcFFXR0FiSUxBZ1VGZ2hzQXBnR3lDd05sQllJYkEyWUJ0Z1dWbFpHN0FCSzFsWkk3QUFVRmhsV1ZrdHNBTXNJRVVnc0FRbFlXUWdzQVZEVUZpd0JTTkNzQVlqUWhzaElWbXdBV0F0c0FRc0l5RWpJU0Jrc1FWaVFpQ3dCaU5Dc1FFS1EwVmpzUUVLUTdBQllFVmpzQU1xSVNDd0JrTWdpaUNLc0FFcnNUQUZKYkFFSmxGWVlGQWJZVkpaV0NOWklTQ3dRRk5Zc0FFckd5R3dRRmtqc0FCUVdHVlpMYkFGTExBSFF5dXlBQUlBUTJCQ0xiQUdMTEFISTBJaklMQUFJMEpoc0FKaVpyQUJZN0FCWUxBRktpMndCeXdnSUVVZ3NBdERZN2dFQUdJZ3NBQlFXTEJBWUZsbXNBRmpZRVN3QVdBdHNBZ3NzZ2NMQUVORlFpb2hzZ0FCQUVOZ1FpMndDU3l3QUVNalJMSUFBUUJEWUVJdHNBb3NJQ0JGSUxBQkt5T3dBRU93QkNWZ0lFV0tJMkVnWkNDd0lGQllJYkFBRzdBd1VGaXdJQnV3UUZsWkk3QUFVRmhsV2JBREpTTmhSRVN3QVdBdHNBc3NJQ0JGSUxBQkt5T3dBRU93QkNWZ0lFV0tJMkVnWkxBa1VGaXdBQnV3UUZranNBQlFXR1Zac0FNbEkyRkVSTEFCWUMyd0RDd2dzQUFqUXJJTENnTkZXQ0ViSXlGWktpRXRzQTBzc1FJQ1JiQmtZVVF0c0E0c3NBRmdJQ0N3REVOS3NBQlFXQ0N3RENOQ1diQU5RMHF3QUZKWUlMQU5JMEpaTGJBUExDQ3dFR0ptc0FGaklMZ0VBR09LSTJHd0RrTmdJSXBnSUxBT0kwSWpMYkFRTEV0VVdMRUVaRVJaSkxBTlpTTjRMYkFSTEV0UldFdFRXTEVFWkVSWkd5RlpKTEFUWlNONExiQVNMTEVBRDBOVldMRVBEME93QVdGQ3NBOHJXYkFBUTdBQ0pVS3hEQUlsUXJFTkFpVkNzQUVXSXlDd0F5VlFXTEVCQUVOZ3NBUWxRb3FLSUlvalliQU9LaUVqc0FGaElJb2pZYkFPS2lFYnNRRUFRMkN3QWlWQ3NBSWxZYkFPS2lGWnNBeERSN0FOUTBkZ3NBSmlJTEFBVUZpd1FHQlpackFCWXlDd0MwTmp1QVFBWWlDd0FGQllzRUJnV1dhd0FXTmdzUUFBRXlORXNBRkRzQUErc2dFQkFVTmdRaTJ3RXl3QXNRQUNSVlJZc0E4alFpQkZzQXNqUXJBS0k3QUJZRUlnWUxBQlliVVFFQUVBRGdCQ1FvcGdzUklHSzdCeUt4c2lXUzJ3RkN5eEFCTXJMYkFWTExFQkV5c3RzQllzc1FJVEt5MndGeXl4QXhNckxiQVlMTEVFRXlzdHNCa3NzUVVUS3kyd0dpeXhCaE1yTGJBYkxMRUhFeXN0c0J3c3NRZ1RLeTJ3SFN5eENSTXJMYkFlTEFDd0RTdXhBQUpGVkZpd0R5TkNJRVd3Q3lOQ3NBb2pzQUZnUWlCZ3NBRmh0UkFRQVFBT0FFSkNpbUN4RWdZcnNISXJHeUpaTGJBZkxMRUFIaXN0c0NBc3NRRWVLeTJ3SVN5eEFoNHJMYkFpTExFREhpc3RzQ01zc1FRZUt5MndKQ3l4QlI0ckxiQWxMTEVHSGlzdHNDWXNzUWNlS3kyd0p5eXhDQjRyTGJBb0xMRUpIaXN0c0Nrc0lEeXdBV0F0c0Nvc0lHQ3dFR0FnUXlPd0FXQkRzQUlsWWJBQllMQXBLaUV0c0Nzc3NDb3JzQ29xTGJBc0xDQWdSeUFnc0F0RFk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallDTmhPQ01naWxWWUlFY2dJTEFMUTJPNEJBQmlJTEFBVUZpd1FHQlpackFCWTJBallUZ2JJVmt0c0Mwc0FMRUFBa1ZVV0xBQkZyQXNLckFCRlRBYklsa3RzQzRzQUxBTks3RUFBa1ZVV0xBQkZyQXNLckFCRlRBYklsa3RzQzhzSURXd0FXQXRzREFzQUxBQlJXTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlk3QUJLN0FMUTJPNEJBQmlJTEFBVUZpd1FHQlpackFCWTdBQks3QUFGclFBQUFBQUFFUStJeml4THdFVktpMndNU3dnUENCSElMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkN3QUVOaE9DMndNaXd1Rnp3dHNETXNJRHdnUnlDd0MwTmp1QVFBWWlDd0FGQllzRUJnV1dhd0FXTmdzQUJEWWJBQlEyTTRMYkEwTExFQ0FCWWxJQzRnUjdBQUkwS3dBaVZKaW9wSEkwY2pZU0JZWWhzaFdiQUJJMEt5TXdFQkZSUXFMYkExTExBQUZyQUVKYkFFSlVjalJ5TmhzQWxESzJXS0xpTWdJRHlLT0Myd05peXdBQmF3QkNXd0JDVWdMa2NqUnlOaElMQUVJMEt3Q1VNcklMQmdVRmdnc0VCUldMTUNJQU1nRzdNQ0pnTWFXVUpDSXlDd0NFTWdpaU5ISTBjallTTkdZTEFFUTdBQ1lpQ3dBRkJZc0VCZ1dXYXdBV05nSUxBQkt5Q0tpbUVnc0FKRFlHUWpzQU5EWVdSUVdMQUNRMkVic0FORFlGbXdBeVd3QW1JZ3NBQlFXTEJBWUZsbXNBRmpZU01nSUxBRUppTkdZVGdiSTdBSVEwYXdBaVd3Q0VOSEkwY2pZV0Fnc0FSRHNBSmlJTEFBVUZpd1FHQlpackFCWTJBaklMQUJLeU93QkVOZ3NBRXJzQVVsWWJBRkpiQUNZaUN3QUZCWXNFQmdXV2F3QVdPd0JDWmhJTEFFSldCa0k3QURKV0JrVUZnaEd5TWhXU01nSUxBRUppTkdZVGhaTGJBM0xMQUFGaUFnSUxBRkppQXVSeU5ISTJFalBEZ3RzRGdzc0FBV0lMQUlJMElnSUNCR0kwZXdBU3NqWVRndHNEa3NzQUFXc0FNbHNBSWxSeU5ISTJHd0FGUllMaUE4SXlFYnNBSWxzQUlsUnlOSEkyRWdzQVVsc0FRbFJ5TkhJMkd3QmlXd0JTVkpzQUlsWWJrSUFBZ0FZMk1qSUZoaUd5RlpZN2dFQUdJZ3NBQlFXTEJBWUZsbXNBRmpZQ011SXlBZ1BJbzRJeUZaTGJBNkxMQUFGaUN3Q0VNZ0xrY2pSeU5oSUdDd0lHQm1zQUppSUxBQVVGaXdRR0JaWnJBQll5TWdJRHlLT0Myd095d2pJQzVHc0FJbFJsSllJRHhaTHJFckFSUXJMYkE4TENNZ0xrYXdBaVZHVUZnZ1BGa3VzU3NCRkNzdHNEMHNJeUF1UnJBQ0pVWlNXQ0E4V1NNZ0xrYXdBaVZHVUZnZ1BGa3VzU3NCRkNzdHNENHNzRFVySXlBdVJyQUNKVVpTV0NBOFdTNnhLd0VVS3kyd1B5eXdOaXVLSUNBOHNBUWpRb280SXlBdVJyQUNKVVpTV0NBOFdTNnhLd0VVSzdBRVF5NndLeXN0c0VBc3NBQVdzQVFsc0FRbUlDNUhJMGNqWWJBSlF5c2pJRHdnTGlNNHNTc0JGQ3N0c0VFc3NRZ0VKVUt3QUJhd0JDV3dCQ1VnTGtjalJ5TmhJTEFFSTBLd0NVTXJJTEJnVUZnZ3NFQlJXTE1DSUFNZ0c3TUNKZ01hV1VKQ0l5QkhzQVJEc0FKaUlMQUFVRml3UUdCWlpyQUJZMkFnc0FFcklJcUtZU0N3QWtOZ1pDT3dBME5oWkZCWXNBSkRZUnV3QTBOZ1diQURKYkFDWWlDd0FGQllzRUJnV1dhd0FXTmhzQUlsUm1FNEl5QThJemdiSVNBZ1JpTkhzQUVySTJFNElWbXhLd0VVS3kyd1FpeXdOU3N1c1NzQkZDc3RzRU1zc0RZcklTTWdJRHl3QkNOQ0l6aXhLd0VVSzdBRVF5NndLeXN0c0VRc3NBQVZJRWV3QUNOQ3NnQUJBUlVVRXk2d01Tb3RzRVVzc0FBVklFZXdBQ05Dc2dBQkFSVVVFeTZ3TVNvdHNFWXNzUUFCRkJPd01pb3RzRWNzc0RRcUxiQklMTEFBRmtVaklDNGdSb29qWVRpeEt3RVVLeTJ3U1N5d0NDTkNzRWdyTGJCS0xMSUFBRUVyTGJCTExMSUFBVUVyTGJCTUxMSUJBRUVyTGJCTkxMSUJBVUVyTGJCT0xMSUFBRUlyTGJCUExMSUFBVUlyTGJCUUxMSUJBRUlyTGJCUkxMSUJBVUlyTGJCU0xMSUFBRDRyTGJCVExMSUFBVDRyTGJCVUxMSUJBRDRyTGJCVkxMSUJBVDRyTGJCV0xMSUFBRUFyTGJCWExMSUFBVUFyTGJCWUxMSUJBRUFyTGJCWkxMSUJBVUFyTGJCYUxMSUFBRU1yTGJCYkxMSUFBVU1yTGJCY0xMSUJBRU1yTGJCZExMSUJBVU1yTGJCZUxMSUFBRDhyTGJCZkxMSUFBVDhyTGJCZ0xMSUJBRDhyTGJCaExMSUJBVDhyTGJCaUxMQTNLeTZ4S3dFVUt5MndZeXl3Tnl1d095c3RzR1Fzc0RjcnNEd3JMYkJsTExBQUZyQTNLN0E5S3kyd1ppeXdPQ3N1c1NzQkZDc3RzR2Nzc0RncnNEc3JMYkJvTExBNEs3QThLeTJ3YVN5d09DdXdQU3N0c0dvc3NEa3JMckVyQVJRckxiQnJMTEE1SzdBN0t5MndiQ3l3T1N1d1BDc3RzRzBzc0RrcnNEMHJMYkJ1TExBNkt5NnhLd0VVS3kyd2J5eXdPaXV3T3lzdHNIQXNzRG9yc0R3ckxiQnhMTEE2SzdBOUt5MndjaXl6Q1FRQ0EwVllJUnNqSVZsQ0s3QUlaYkFESkZCNHNBRVZNQzBBUzdnQXlGSllzUUVCamxtd0Fia0lBQWdBWTNDeEFBVkNzZ0FCQUNxeEFBVkNzd29DQVFncXNRQUZRck1PQUFFSUtyRUFCa0s2QXNBQUFRQUpLckVBQjBLNkFFQUFBUUFKS3JFREFFU3hKQUdJVVZpd1FJaFlzUU5rUkxFbUFZaFJXTG9JZ0FBQkJFQ0lZMVJZc1FNQVJGbFpXVm16REFJQkRDcTRBZitGc0FTTnNRSUFSQUFBJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5teWRwaWNvbiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnbXlkYXRlcGlja2VyJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwcmlnaHQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAwXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGxlZnQ6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAxXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcHRvZGF5OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwMlxcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBjYWxlbmRhcjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDNcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwdXA6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODA0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGRvd246YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODA1XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcHJlbW92ZTpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDZcXFwiO1xcclxcbn1cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDVyZW0gMTByZW0gMHJlbSAxMHJlbTsgfVxcblxcbi5kZXRhaWwtaW1nIHtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5zdWdnZXN0aW9ucyB7XFxuICB6LWluZGV4OiA5OTtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMC43cHggZ3JleTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjMTU0MjRFO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGxlZnQ6IDA7IH1cXG4gIC5zdWdnZXN0aW9ucyB1bCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgbWF4LWhlaWdodDogMzByZW07XFxuICAgIG92ZXJmbG93OiBhdXRvOyB9XFxuICAuc3VnZ2VzdGlvbnMgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgbWFyZ2luOiAxLjRyZW0gMXJlbSAxcmVtIDA7XFxuICBoZWlnaHQ6IDMuNnJlbTtcXG4gIHdpZHRoOiAxMy41cmVtOyB9XFxuICAuZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDZyZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4uZmlsdGVyLWlucHV0IHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IC41cmVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuc3VnZ2VzdGlvbnMge1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLnN1Z2dlc3Rpb25zIGxpIHtcXG4gICAgICB3aGl0ZS1zcGFjZTogaW5oZXJpdDsgfVxcbiAgLmZpbHRlci1pbnB1dCB7XFxuICAgIHdpZHRoOiA3MCU7IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRhY3QtdXMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY29udGFjdC11cyB7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmNvbnRhY3QtdXMgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtOyB9XFxuICAgIC5jb250YWN0LXVzIGlucHV0OnJlcXVpcmVkIHtcXG4gICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAuY29udGFjdC11cyBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xcbiAgICBjb2xvcjogIzI2MTgxRDsgfVxcbiAgLmNvbnRhY3QtdXMgLm1lc3NhZ2Uge1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyB9XFxuICAuY29udGFjdC11cyAubWVzc2FnZSxcXG4gIC5jb250YWN0LXVzIC5zdWJqZWN0IHtcXG4gICAgd2lkdGg6IDY0cmVtOyB9XFxuXFxuLnN0YXRpYy1pbmZvIHtcXG4gIGZvbnQtc2l6ZTogMi4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtOyB9XFxuXFxuLmZvcm0td3JhcHBlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uZm9ybS1ncm91cCB7XFxuICB3aWR0aDogNjByZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAuZm9ybS1ncm91cCAuYWxlcnQge1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLm5hbWUtZ3JvdXAsXFxuLm1haWwtbnVtYmVyLWdyb3VwIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLm1lc3NhZ2UtYm94IC5hbGVydCxcXG4uc3ViamVjdC1ib3ggLmFsZXJ0IHtcXG4gIHdpZHRoOiA2MHJlbTsgfVxcblxcbi5tZXNzYWdlLWRpYWxvZyB7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHdpZHRoOiAzMCU7XFxuICBiYWNrZ3JvdW5kOiAjMjYxODFEO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0NSU7XFxuICBsZWZ0OiAzNSU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMC43cHggZ3JleTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuICAubWVzc2FnZS1kaWFsb2cgLndyYXBwZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMzAlOyB9XFxuICAgIC5tZXNzYWdlLWRpYWxvZyAud3JhcHBlciAudGV4dCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgcGFkZGluZzogMXJlbTsgfVxcbiAgICAubWVzc2FnZS1kaWFsb2cgLndyYXBwZXIgLm9rLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZDogIzczNjU2QTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgd2lkdGg6IDMwJTsgfVxcblxcbiNtZXNzYWdlIHtcXG4gIGhlaWdodDogMjByZW07XFxuICBmb250LXNpemU6IDEuOHJlbTsgfVxcblxcbi5uZy12YWxpZFtyZXF1aXJlZF0sXFxuLm5nLXZhbGlkLnJlcXVpcmVkIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgIzQyQTk0ODtcXG4gIC8qIGdyZWVuICovIH1cXG5cXG4ubmctaW52YWxpZDpub3QoZm9ybSkge1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xcbiAgLyogcmVkICovIH1cXG5cXG4uc3VibWl0LWJ0biB7XFxuICB3aWR0aDogMjVyZW07XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTsgfVxcbiAgLnN1Ym1pdC1idG46ZGlzYWJsZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBjb2xvcjogI2FhYTtcXG4gICAgY3Vyc29yOiBhdXRvOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZm9ybS13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5mb3JtLWdyb3VwIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5uYW1lLWdyb3VwLFxcbiAgLnN1YmplY3QtYm94LFxcbiAgLm1lc3NhZ2UtYm94LFxcbiAgLm1haWwtbnVtYmVyLWdyb3VwIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luOiAycmVtOyB9XFxuICAuY29udGFjdC11cyB7XFxuICAgIG1hcmdpbi10b3A6IDVyZW07IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5kYXRlLXBpY2tlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogLjJyZW07IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciBsYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiBncmF5OyB9XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC5mcm9tLWRhdGUsXFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC50by1kYXRlIHtcXG4gICAgd2lkdGg6IDEzLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxLjRyZW0gMXJlbSAwIDFyZW07XFxuICAgIGhlaWdodDogMy42cmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLmZyb20tZGF0ZSBpbnB1dCxcXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC50by1kYXRlIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiA3MCU7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmhpZGUtZHJvcGRvd24ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5kcm9wZG93bi1saXN0IHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgcGFkZGluZzogMS41cmVtIDAgMS41cmVtIDNyZW07XFxuICB3aWR0aDogMTVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTMuNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMnJlbTsgfVxcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxLjRyZW0gMXJlbSAxcmVtIDA7XFxuICAgIGNvbG9yOiAjMjYxODFEO1xcbiAgICBoZWlnaHQ6IDMuNnJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuXFxuLmRhdGEtbGlzdCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogLjVyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuZGF0YS1saXN0IHNwYW4ge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTsgfVxcbiAgICAuZHJvcGRvd24tY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDcwJTtcXG4gICAgICBtYXJnaW46IGF1dG87XFxuICAgICAgaGVpZ2h0OiAzLjZyZW07IH1cXG4gIC5kcm9wZG93bi1saXN0IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDIwcmVtIDByZW0gMjByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZm9vdGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIlIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEM0QzRDM7IH1cXG4gIC5mb290ZXIgc3BhbixcXG4gIC5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjNzM2NTZBO1xcbiAgICBwYWRkaW5nOiAwIDElO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XFxuICAuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZvb3RlciBhLCAuZm9vdGVyIHNwYW4ge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oZXJvIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi52aWV3LWFsbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzI2MTgxRDsgfVxcblxcbi5tYWluLXBhZ2UtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cXG5cXG4udmlldy1hbGwtY29udGFpbmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDVyZW07IH1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogOHJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTsgfVxcblxcbi5jaGV2cm9uLWRvd24ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1cmVtO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnN1Yi1oZWFkaW5nIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0b3A6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcmVtOyB9XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICB0b3A6IDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzMDBweDtcXG4gIHdpZHRoOiAzMHJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjdXJzb3I6IGluaXRpYWw7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEud3MtaGVhZGluZyB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnSHVybWVHZW9tZXRyaWNTYW5zMy1SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbiN3b3Jrc2hvcHMge1xcbiAgcGFkZGluZy10b3A6IDVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgdG9wOiAzMCU7IH1cXG4gIC5idG4ge1xcbiAgICB0b3A6IDNyZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBmb250LXNpemU6IDIuMnJlbTsgfSB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAubWFpbi1oZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzLjhyZW07IH1cXG4gIGhlYWRlciB7XFxuICAgIHRvcDogMzAlOyB9XFxuICAuYnRuIHtcXG4gICAgdG9wOiAzcmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjZyZW07IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi50b3AtYmFyLXRpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQ29pbnknLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICNmZmZmZmY7IH1cXG5cXG4ubmF2LW1lbnUgYSB7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5jb21wYW55LWljb24ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMnJlbTtcXG4gIG1hcmdpbi10b3A6IDEuMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cXG5cXG4uY29tcGFueS1uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA0LjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQ29tZm9ydGFhJywgY3Vyc2l2ZTsgfVxcblxcbi5mYS1iYXJzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAuNHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuXFxuLmZpbHRlci1oZWFkZXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5uYXZiYXItdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk5O1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuICBuYXYgaW1nIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIG5hdiAubmF2YmFyLW5hdiBhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgbmF2IHVsIHtcXG4gICAgbWFyZ2luLXRvcDogLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4xNnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnLCBjdXJzaXZlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICBuYXYge1xcbiAgICBoZWlnaHQ6IDVyZW07IH1cXG4gICAgbmF2IHVsIHtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmZpbHRlci1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07IH1cXG4gIC5uYXZiYXItY29sbGFwc2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNXJlbTsgfVxcbiAgLmhpZGVOYXZiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmF2YmFyLWhlYWRlciB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci1uYXYgPiBsaSB7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5NTVweCkgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcbiAgbmF2IHVsIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5oaWRlTmF2YmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtOyB9XFxuICAubmF2YmFyLWhlYWRlciB7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLm5hdmJhci10b2dnbGUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5uYXZiYXItbmF2IHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXRvcDogNy41cHg7IH1cXG4gIC5uYXZiYXItbmF2ID4gbGkge1xcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50OyB9XFxuICAubmF2YmFyLW5hdiA+IGxpID4gYSB7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgfVxcbiAgLmNvbGxhcHNlLmluIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDEwcmVtIDByZW0gMTByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXFxuLnByb2ZpbGUtaW1nIHtcXG4gIHdpZHRoOiAxMnJlbTtcXG4gIGhlaWdodDogMTJyZW07XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luLXJpZ2h0OiAycmVtOyB9XFxuXFxuLnByb2ZpbGUtcGhvdG8ge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4ucGhvdG9ncmFwaGVyLW5hbWUgaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogIzczNjU2QTsgfVxcblxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24gaDQge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5kZXRhaWwtbG9jYXRpb24ge1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTsgfVxcblxcbi53ZWJzaXRlLWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgKi9cXG5kaXYudGFiIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tdG9wOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIGRpdi50YWIgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAgIGRpdi50YWIgYnV0dG9uLmFjdGl2ZSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3MzY1NkE7IH1cXG5cXG4vKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cXG4udGFiY29udGVudCB7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIGhlaWdodDogNDByZW07XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzksIDIzMCwgMjMzLCAwLjEpOyB9XFxuXFxuLmRldGFpbC10YWJzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA2NSU7XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uZGV0YWlscy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmRheS13cmFwcGVyLFxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24ge1xcbiAgcGFkZGluZy10b3A6IDJyZW07IH1cXG5cXG4uZGF5LXdyYXBwZXIgLmxvY2F0aW9uLFxcbi5waG90b2dyYXBoZXItaW5mb3JtYXRpb24gaDQge1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4jRGVzY3JpcHRpb24gcCB7XFxuICBwYWRkaW5nLXRvcDogMnJlbTtcXG4gIG1hcmdpbi1yaWdodDogLjRyZW07IH1cXG5cXG4jRGVzY3JpcHRpb24gaDMge1xcbiAgbWFyZ2luLXRvcDogNSU7IH1cXG5cXG4jR2FsbGVyeSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICNHYWxsZXJ5IGltZyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDM1cmVtO1xcbiAgICBoZWlnaHQ6IDI4cmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuXFxuLm1vZGFsLWltYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDsgfVxcblxcbi53c2QtbmFtZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGNvbG9yOiAjNzM2NTZBO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uaGlnaGxpZ2h0cyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiAxMHJlbTtcXG4gIHBhZGRpbmctbGVmdDogNXJlbTtcXG4gIHdpZHRoOiAyNSU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDsgfVxcbiAgLmhpZ2hsaWdodHMgYSB7XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAuaGlnaGxpZ2h0cyBkaXYge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGNvbG9yOiAjNzM2NTZBOyB9XFxuICAgIC5oaWdobGlnaHRzIGRpdiBpIHtcXG4gICAgICBjb2xvcjogIzczNjU2QTsgfVxcblxcbi5pbWFnZS1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgLyogcGFkZGluZy10b3A6IDVyZW07ICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTsgfVxcblxcbi8qIE1vZGFsIENvbnRlbnQgKi9cXG4uaW1hZ2UtbW9kYWwtY29udGVudCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmhpZGUtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cXG4uY2xvc2Uge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB6LWluZGV4OiA5OTsgfVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6ICM5OTk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uaGlkZUltYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uY3Vyc29yIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qIE5leHQgJiBwcmV2aW91cyBidXR0b25zICovXFxuLnByZXYsXFxuLm5leHQge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBtYXJnaW4tdG9wOiAtNTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuLyogUG9zaXRpb24gdGhlIFxcXCJuZXh0IGJ1dHRvblxcXCIgdG8gdGhlIHJpZ2h0ICovXFxuLm5leHQge1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDsgfVxcblxcbi5wcmV2IHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4uc2xpZGVzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLyogT24gaG92ZXIsIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3Igd2l0aCBhIGxpdHRsZSBiaXQgc2VlLXRocm91Z2ggKi9cXG4ucHJldjpob3ZlcixcXG4ubmV4dDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uYWN0aXZlIHtcXG4gIG9wYWNpdHk6IDE7IH1cXG5cXG4uZ2FsbGVyeS1pbWFnZS5ob3Zlci1zaGFkb3cge1xcbiAgdHJhbnNpdGlvbjogMC4zczsgfVxcblxcbi5ob3Zlci1zaGFkb3c6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgI0dhbGxlcnkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG4gICAgI0dhbGxlcnkgaW1nIHtcXG4gICAgICB3aWR0aDogMjhyZW07XFxuICAgICAgaGVpZ2h0OiAyMHJlbTsgfVxcbiAgZGl2LnRhYiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICBkaXYudGFiIGJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBtYXJnaW46IGF1dG87IH1cXG4gIC50YWJDb250ZW50IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgIC50YWJDb250ZW50IHAge1xcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgICAgcGFkZGluZzogMnJlbTsgfVxcbiAgLmRldGFpbC10YWJzIHtcXG4gICAgcGFkZGluZzogMCAycmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxcbiAgLmhpZ2hsaWdodHMge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBvc2l0aW9uOiBpbmhlcml0OyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuYXV0b2NvbXBsZXRlLWZpbHRlcixcXG4uZHJvcGRvd24tZmlsdGVyLFxcbi5wcmljZS1maWx0ZXIsXFxuLmRhdGUtcGlja2VyLFxcbi5nZXQtbGlzdC1idG4ge1xcbiAgbGVmdDogM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmF1dG9jb21wbGV0ZS1maWx0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4qOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG4ucHJpY2UtZmlsdGVyIHtcXG4gIG1hcmdpbi10b3A6IDEuNHJlbTsgfVxcbiAgLnByaWNlLWZpbHRlciBpbnB1dCB7XFxuICAgIG91dGxpbmU6IC4ycHggc29saWQgIzI2MTgxRDtcXG4gICAgd2lkdGg6IDEzLjVyZW07XFxuICAgIGJvcmRlcjogMDtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiAjMjYxODFEO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5oaWRlLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZmlsdGVycy1jb250YWluZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4uZ2V0LWxpc3QtYnRuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTByZW07XFxuICBoZWlnaHQ6IDMuN3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY1NkE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5maWx0ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kcm9wZG93bi1maWx0ZXIsXFxuICAucHJpY2UtZmlsdGVyLFxcbiAgLmRhdGUtcGlja2VyLFxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAucHJpY2UtZmlsdGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMS40cmVtOyB9XFxuICAgIC5wcmljZS1maWx0ZXIgaW5wdXQge1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luOiAxLjRyZW0gYXV0bzsgfVxcbiAgLmdldC1saXN0LWJ0biB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxcbiAgLmRyb3Bkb3duLWZpbHRlciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwOyB9XFxuICAuYXV0b2NvbXBsZXRlLWZpbHRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS41cmVtIDA7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud29ya3Nob3AtbGlzdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3MtcGFnZXMgL2RlZXAvIHtcXG4gIG1hcmdpbi10b3A6IDNyZW07IH1cXG4gIC53cy1wYWdlcyAvZGVlcC8gdWwgbGkge1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRkZGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gMXJlbTsgfVxcbiAgICAud3MtcGFnZXMgL2RlZXAvIHVsIGxpIGEge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogIzIyMjIyMjtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gICAgICAud3MtcGFnZXMgL2RlZXAvIHVsIGxpIGE6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjAlOyB9XFxuXFxuLmVudGl0eSB7XFxuICB3aWR0aDogMzByZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDJyZW07XFxuICBib3gtc2hhZG93OiAwcmVtIDByZW0gMC4ycmVtIDByZW0gIzg4ODg4ODsgfVxcbiAgLmVudGl0eSBvYmplY3Qge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuICAuZW50aXR5IGltZyB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAtd2Via2l0LWZpbHRlcjogc2VwaWEoMjAlKTtcXG4gICAgICAgICAgICBmaWx0ZXI6IHNlcGlhKDIwJSk7IH1cXG4gIC5lbnRpdHkgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi5pbm5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTsgfVxcblxcbmgxLm5hbWUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiAjMjYxODFEO1xcbiAgZm9udC1mYW1pbHk6ICdIdXJtZUdlb21ldHJpY1NhbnMzLVJlZ3VsYXInLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07IH1cXG5cXG4ucHJpY2Uge1xcbiAgY29sb3I6ICM1OTRCNTA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBib3R0b206IDJyZW07IH1cXG5cXG5ociB7XFxuICB3aWR0aDogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItY29sb3I6ICM1OTRCNTA7XFxuICBvcGFjaXR5OiAwLjM7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07IH1cXG5cXG4uZGF0ZSB7XFxuICBjb2xvcjogIzU5NEI1MDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cXG5cXG4ubG9jYXRpb24ge1xcbiAgY29sb3I6ICMyNjE4MUQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG9wYWNpdHk6IDAuNjsgfVxcblxcbi50cnVuY2F0ZSB7XFxuICB3aWR0aDogMjhyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuXFxuLnBhZ2UtbnVtYmVycyB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgY29sb3I6ICM3MzY1NkE7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5wYWdlLW51bWJlcnMgc3BhbiB7XFxuICAgIG1hcmdpbjogMCAuNXJlbTsgfVxcbiAgLnBhZ2UtbnVtYmVycyAuZmEge1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XFxuXFxuLm5vLXJlc3VsdC1tc2cge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4uZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gIG9wYWNpdHk6IDAuNTsgfVxcblxcbmEuYWN0aXZlLXBhZ2UucGFnZS1udW1iZXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MzY1NkE7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5lbnRpdHkge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LXdpZHRoOiAzMHJlbTsgfVxcbiAgICAuZW50aXR5IC5pbWFnZSB7XFxuICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICBoMS5uYW1lIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIG1hcmdpbjogYXV0bzsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZmlsdGVycyxcXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uZmlsdGVycyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiA5MHJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAuM3JlbTtcXG4gIGxlZnQ6IDVyZW07IH1cXG5cXG4ubGlzdCB7XFxuICB0b3A6IDEwcmVtO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuOyB9XFxuXFxuLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiBub25lOyB9XFxuXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZmlsdGVycyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogOTk7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cXG4gIC5saXN0IHtcXG4gICAgdG9wOiA1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5oaWRlRmlsdGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAwOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcHMvd29ya3Nob3BzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIud3MtY29udGFpbmVyIG5hdi5uYXZiYXIubmF2YmFyLWRlZmF1bHQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3MtY29udGFpbmVyIC5uYXZiYXItZGVmYXVsdCAubmF2YmFyLW5hdiAuYWN0aXZlIGEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTByZW07XFxyXFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyIFtzaG93TmFtZV09XFxcInRydWVcXFwiPj48L25hdmktYmFyPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1pbWdcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJkZXRhaWwtaW1nXFxcIiBzcmM9XFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIgLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGgyPkFib3V0IFVzPC9oMj5cXHJcXG4gICAgUGl4ZWxhdGVkUGxhbmV0IGVuYWJsZXMgYXNwaXJpbmcgcGhvdG9ncmFwaGVycyB0byBmaW5kIHdvcmtzaG9wcyBhbmQgc2VtaW5hcnMgYWxsIGFyb3VuZCB0aGUgd29ybGQgYmVpbmcgY29uZHVjdGVkIGJ5IHBlb3BsZVxcclxcbiAgICBzdWNjZXNzZnVsIGluIHRoZSBmaWVsZCBvZiBwaG90b2dyYXBoeS4gT24gdGhlIG90aGVyIGhhbmQsIHdlIHByb3ZpZGUgYSBwbGF0Zm9ybSBmb3IgcGhvdG9ncmFwaGVycyB0byBzaG93Y2FzZSB0aGVpclxcclxcbiAgICBwaG90b2dyYXBoeSB3b3Jrc2hvcHMgYW5kIHJlYWNoIGludGVyZXN0ZWQgZm9sa3MuXFxyXFxuICAgIDxoMj5GQVFzPC9oMj5cXHJcXG4gICAgPGI+RG8geW91IGhhdmUgd29ya3Nob3BzIG9mIGFsbCBnZW5yZXM/PC9iPlxcclxcbiAgICA8YnIvPiBPZiBjb3Vyc2UhIFlvdSBjYW4gZmluZCBldmVyeXRoaW5nIGZyb20gTGFuZHNjYXBlIGFuZCBGb29kIHBob3RvZ3JhcGh5IHRvIFRpbWVsYXBzZSBhbmQgTmlnaHQgU2t5IHBob3RvZ3JhcGh5IHdvcmtzaG9wcy5cXHJcXG4gICAgPGJyLz48YnIvPlxcclxcbiAgICA8Yj5Eb2VzIFBpeGVsYXRlZFBsYW5ldCBhbGxvdyBtZSB0byByZWdpc3RlciBmb3Igd29ya3Nob3BzPzwvYj5cXHJcXG4gICAgPGJyLz4gQXMgb2Ygbm93LCB3ZSBhaW0gdG8gYnJpbmcgYWxsIHBob3RvZ3JhcGh5IHdvcmtzaG9wcyBpbiBvbmUgcGxhY2UuIEFmdGVyIGZpbmRpbmcgdGhlIHdvcmtzaG9wIHlvdSBsaWtlLCB3ZSB3aWxsXFxyXFxuICAgIHJlZGlyZWN0IHlvdSB0aGUgcGhvdG9ncmFwaGVyJ3Mgd2Vic2l0ZSBmb3IgcmVnaXN0cmF0aW9uL3BheW1lbnQuXFxyXFxuICAgIDxici8+PGJyLz5cXHJcXG4gICAgPGI+RG9lcyBQaXhlbGF0ZWRQbGFuZXQgY2hhcmdlIG1lIGZvciBmaW5kaW5nIHdvcmtzaG9wcz88L2I+XFxyXFxuICAgIDxici8+IE5vLiBBbGwgaW5mb3JtYXRpb24gb24gb3VyIHdlYnNpdGUgaWYgZnJlZWx5IGFjY2Vzc2libGUuIE5vIGhpZGRlbiBjb3N0cy5cXHJcXG4gICAgPGJyLz48YnIvPlxcclxcbiAgICA8Yj5JIGFtIGEgcGhvdG9ncmFwaGVyLiBDYW4gSSBzaG93Y2FzZSBteSB3b3Jrc2hvcHMgb24geW91ciB3ZWJzaXRlPzwvYj5cXHJcXG4gICAgPGJyLz4gV2UgY2FyZWZ1bGx5IHNlbGVjdCBwaG90b2dyYXBoZXJzIGJhc2VkIG9uIHRoZWlyIHBvcnRmb2xpb3MgdG8ga2VlcCBxdWFsaXR5IG9mIHdvcmtzaG9wcyBoaWdoLiBQbGVhc2UgZW1haWwgdXNcXHJcXG4gICAgYXQgaGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbSBpbiBvcmRlciB0byBnZXQgaW4gdG91Y2ggd2l0aCB1cyFcXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxpbnB1dCBpZD1cXFwiY291bnRyeVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZpbHRlci1pbnB1dFxcXCIgWyhuZ01vZGVsKV09cXVlcnkgKGtleXVwKT1maWx0ZXIoKSBwbGFjZWhvbGRlcj1cXFwiVHlwZSBhIGxvY2F0aW9uXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3VnZ2VzdGlvbnNcXFwiICpuZ0lmPVxcXCJmaWx0ZXJlZExpc3QubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8dWw+XFxyXFxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cXFwibGV0IGl0ZW0gb2YgZmlsdGVyZWRMaXN0XFxcIiAoY2xpY2spPVxcXCJzZWxlY3QoaXRlbSlcXFwiPnt7aXRlbX19PC9saT5cXHJcXG4gICAgICAgIDwvdWw+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2aS1iYXIgW3Nob3dOYW1lXT1cXFwidHJ1ZVxcXCI+PjwvbmF2aS1iYXI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGFjdC11c1xcXCI+XFxyXFxuICAgIDxoMT5MZXQncyBjbGljayB0b2dldGhlciE8L2gxPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzdGF0aWMtaW5mb1xcXCI+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1lbnZlbG9wZVxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICA8c3Bhbj5oZWxsb0B0aGVwaXhlbGF0ZWRwbGFuZXQuY29tPC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1waG9uZS1zcXVhcmVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+NDI1LTk3OS04ODM4PC9zcGFuPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cXFwib25TdWJtaXQoKTsgY29udGFjdEZvcm0ucmVzZXQoKVxcXCIgbmFtZT1cXFwiY29udGFjdC1mb3JtXFxcIiAjY29udGFjdEZvcm09XFxcIm5nRm9ybVxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmFtZS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgZmlyc3QtbmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImZuYW1lXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiZm5hbWVcXFwiIG5hbWU9XFxcImZuYW1lXFxcIiAjZmlyc3RuYW1lPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiRnVsbCBuYW1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEoZmlyc3RuYW1lLnZhbGlkIHx8IGZpcnN0bmFtZS5wcmlzdGluZSlcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEludmFsaWQgbmFtZVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1haWwtbnVtYmVyLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwiZW1haWxJZFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiICNlbWFpbD1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVtYWlsIGFkZHJlc3NcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIShlbWFpbC52YWxpZCB8fCBlbWFpbC5wcmlzdGluZSlcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEludmFsaWQgZW1haWwgYWRkcmVzc1xcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgc3ViamVjdC1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcInN1YmplY3RcXFwiIHJlcXVpcmVkIFsobmdNb2RlbCldPVxcXCJzdWJqZWN0VGV4dFxcXCIgbmFtZT1cXFwic3ViamVjdFxcXCIgI3N1YmplY3Q9XFxcIm5nTW9kZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiU3ViamVjdFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEoc3ViamVjdC52YWxpZCB8fCBzdWJqZWN0LnByaXN0aW5lKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIHN1YmplY3RcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cCBtZXNzYWdlLWJveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwibWVzc2FnZVxcXCIgcmVxdWlyZWQgcm93cz1cXFwiNFxcXCIgY29scz1cXFwiNTBcXFwiIG5hbWU9XFxcIm1lc3NhZ2VcXFwiIGZvcm09XFxcImNvbnRhY3QtZm9ybVxcXCIgWyhuZ01vZGVsKV09XFxcIm1lc3NhZ2VUZXh0XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgI21lc3NhZ2U9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJIb3cgY2FuIHdlIGhlbHAgeW91P1xcXCI+PC90ZXh0YXJlYT5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiIShtZXNzYWdlLnZhbGlkIHx8IG1lc3NhZ2UucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIEludmFsaWQgbWVzc2FnZVxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgY2xhc3M9XFxcInN1Ym1pdC1idG4gYnRuIGJ0bi1zdWNjZXNzXFxcIiBbZGlzYWJsZWRdPVxcXCIhY29udGFjdEZvcm0uZm9ybS52YWxpZCB8fCBpbnZhbGlkRGV0YWlsc1xcXCI+U3VibWl0PC9idXR0b24+XFxyXFxuICAgICAgICA8L2Zvcm0+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtZXNzYWdlLWRpYWxvZ1xcXCIgKm5nSWY9XFxcInN1Ym1pdHRlZCAmJiBzaG93TWVzc2FnZUJveFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj57e3N1Ym1pdE1lc3NhZ2V9fTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcIm9rLWJ0biBidG5cXFwiIChjbGljayk9XFxcImhpZGVNZXNzYWdlYm94KClcXFwiPm9rPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZGF0ZS1waWNrZXItY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZnJvbS1kYXRlXFxcIj5cXHJcXG4gICAgICAgIDxteS1kYXRlLXBpY2tlciAoZGF0ZUNoYW5nZWQpPVxcXCJvbkZyb21EYXRlQ2hhbmdlZCgkZXZlbnQpXFxcIiBuYW1lPVxcXCJmcm9tLWRhdGVcXFwiIFtwbGFjZWhvbGRlcl09XFxcImZyb21EYXRlTGFiZWxcXFwiIFtvcHRpb25zXT1cXFwiZnJvbURhdGVQaWNrZXJPcHRpb25zXFxcIiBbc2VsRGF0ZV09XFxcInNlbEZyb21EYXRlXFxcIj48L215LWRhdGUtcGlja2VyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG8tZGF0ZVxcXCI+XFxyXFxuICAgICAgIDxteS1kYXRlLXBpY2tlciAoZGF0ZUNoYW5nZWQpPVxcXCJvblRvRGF0ZUNoYW5nZWQoJGV2ZW50KVxcXCIgbmFtZT1cXFwidG8tZGF0ZVxcXCIgW3BsYWNlaG9sZGVyXT1cXFwidG9EYXRlTGFiZWxcXFwiIFtvcHRpb25zXT1cXFwidG9EYXRlUGlja2VyT3B0aW9uc1xcXCIgW3NlbERhdGVdPVxcXCJzZWxUb0RhdGVcXFwiPjwvbXktZGF0ZS1waWNrZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAoY2xpY2spPVxcXCJ0b2dnbGVEcm9wZG93bigpXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuPnt7YnV0dG9uTGFiZWx9fTwvc3Bhbj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWRvd25cXFwiPjwvaT5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWxpc3RcXFwiIChjbGljayk9XFxcIm92ZXJsYXkoKVxcXCIgW2NsYXNzLmhpZGUtZHJvcGRvd25dPVxcXCJpc0NvbGxhcHNlZFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IChjbGljayk9XFxcInNlbGVjdFZhbHVlKGRhdGEubGFiZWwpXFxcIiBjbGFzcz1cXFwiZGF0YS1saXN0XFxcIiAqbmdGb3I9XFxcImxldCBkYXRhIG9mIGRhdGFNb2RlbDtcXFwiPnt7ZGF0YS5sYWJlbH19PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImhlYWRlci1pbWdcXFwiPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJkZXRhaWwtaW1nXFxcIiBzcmM9XFxcImh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0Y2RuLmF6dXJlZWRnZS5uZXQvaW1nL3lvc2VtaXRlLmpwZ1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCIvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8aDE+NDA0IC0gUGFnZSBOb3QgRm91bmQ8L2gxPlxcclxcbiAgICA8aDM+T29wcywgeW91IGxhbmRlZCBpbiBhIGJhZCBwbGFjZS4gTGV0J3MgZ2V0IG91dCBvZiBoZXJlIHF1aWNrbHkgYmVmb3JlIGFueSBiYWQgZ3V5cyBjb21lIGFyb3VuZCE8L2gzPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gICAgPGEgaHJlZj1cXFwiL3Rlcm1zYW5kY29uZGl0aW9uc1xcXCI+VGVybXMgYW5kIGNvbmRpdGlvbnM8L2E+XFxyXFxuICAgIDxhIGhyZWY9XFxcIi9wcml2YWN5cG9saWN5XFxcIj5Qcml2YWN5IFBvbGljeTwvYT5cXHJcXG4gICAgPHNwYW4+JmNvcHk7IDIwMTcgUGl4ZWxhdGVkIFBsYW5ldDwvc3Bhbj5cXHJcXG4gICAgPGEgaHJlZj1cXFwiL2NvbnRhY3RcXFwiPkNvbnRhY3Q8L2E+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1haW4tcGFnZS1jb250YWluZXJcXFwiPlxcclxcbiAgICA8bmF2aS1iYXIgW3Nob3dGaWx0ZXJzXT1cXFwiZmFsc2VcXFwiPjwvbmF2aS1iYXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVxcXCJtYXN0aGVhZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXItY29udGVudC1pbm5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWluLWhlYWRpbmdcXFwiIGlkPVxcXCJob21lSGVhZGluZ1xcXCI+UGl4ZWxhdGVkIFBsYW5ldDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBidG4tbGdcXFwiIGhyZWY9XFxcIiN3b3Jrc2hvcHNcXFwiIGFuZ3VsYXJ0aWNzMk9uPVxcXCJjbGlja1xcXCIgYW5ndWxhcnRpY3NFdmVudD1cXFwiVXBjb21pbmdFdmVudHNDbGlja1xcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiSG9tZVBhZ2VJbnRlcmFjdGlvblxcXCI+VXBjb21pbmcgV29ya3Nob3BzPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvaGVhZGVyPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcImNoZXZyb24tZG93blxcXCIgaHJlZj1cXFwiI3dvcmtzaG9wc1xcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJVcGNvbWluZ0V2ZW50c0NsaWNrXFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJIb21lUGFnZUludGVyYWN0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1jaXJjbGUtZG93blxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGlkPVxcXCJ3b3Jrc2hvcHNcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ3cy1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBXT1JLU0hPUFNcXHJcXG4gICAgICAgIDwvaDE+XFxyXFxuICAgICAgICA8d29ya3Nob3BzLWxpc3Q+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZXctYWxsLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3dvcmtzaG9wc1xcXCIgY2xhc3M9XFxcInZpZXctYWxsXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIlZpZXdBbGxFdmVudHNDbGlja1xcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiSG9tZVBhZ2VJbnRlcmFjdGlvblxcXCI+PHNwYW4+VmlldyBhbGw8L3NwYW4+ICA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXYtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImNvbXBhbnktaWNvblxcXCIgIGFuZ3VsYXJ0aWNzMk9uPVxcXCJjbGlja1xcXCIgYW5ndWxhcnRpY3NFdmVudD1cXFwiR29Ub0hvbWVQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIHNyYz1cXFwiL2Fzc2V0cy9pbWcvaWNvbi5wbmdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiPlxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwic2hvd05hbWVcXFwiIGNsYXNzPVxcXCJjb21wYW55LW5hbWVcXFwiPlBpeGVsYXRlZCBQbGFuZXQ8L3NwYW4+XFxyXFxuICA8L2E+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAqbmdJZj1cXFwic2hvd0ZpbHRlcnNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImZpbHRlci1oZWFkZXIgYnRuXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVGaWx0ZXIoKVxcXCI+XFxyXFxuICAgICAgICAgIDxkaXY+RmlsdGVycyA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsdGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+XFxyXFxuICAgICAgPGRpdj48aSBjbGFzcz1cXFwiZmEgZmEtYmFyc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVOYXZiYXInOiBoaWRlTmF2YmFyfVxcXCI+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvV29ya3Nob3BzUGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+PGEgaHJlZj1cXFwiL3dvcmtzaG9wc1xcXCI+V09SS1NIT1BTPC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcIi9hYm91dFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQWJvdXRQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj5BQk9VVDwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCIvY29udGFjdFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQ29udGFjdFBhZ2VFdmVudFxcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiTmF2QmFySW50ZXJhY3Rpb25cXFwiPkNPTlRBQ1Q8L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcblxcdDxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImxpc3RcXFwiPlxcclxcbiAgICAgICAgPGJyLz48YnIvPjxici8+XFxyXFxuICAgICAgICA8YnIvPjxici8+PGJyLz5cXHJcXG4gICAgICAgIDxici8+PGJyLz48YnIvPlxcclxcblxcdFxcdFJlZGlyZWN0aW5nIHRvIGFuIGV4dGVybmFsIGxpbmsgaW4gNSBzZWNvbmRzLi4uIElmIHlvdSB3b3VsZCByYXRoZXIgbm90IGxlYXZlIHVzLCA8YSBzdHlsZT1cXFwiY3Vyc29yOmhhbmRcXFwiIChjbGljayk9XFxcImdvQmFjaygpXFxcIj5jbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+LlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhciBbc2hvd05hbWVdPVxcXCJ0cnVlXFxcIj4+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgc3JjPVxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxoMj5Qcml2YWN5IFBvbGljeTwvaDI+XFxyXFxuPGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5UaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpciAnUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24nIChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLiBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWQgb24gaXRzIG93biBvciB3aXRoIG90aGVyIGluZm9ybWF0aW9uIHRvIGlkZW50aWZ5LCBjb250YWN0LCBvciBsb2NhdGUgYSBzaW5nbGUgcGVyc29uLCBvciB0byBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXIgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGUgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGggb3VyIHdlYnNpdGUuPGJyPjwvZGl2PjxzcGFuIGlkPSdpbmZvQ28nPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0IGZyb20gdGhlIHBlb3BsZSB0aGF0IHZpc2l0IG91ciBibG9nLCB3ZWJzaXRlIG9yIGFwcD88L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldoZW4gb3JkZXJpbmcgb3IgcmVnaXN0ZXJpbmcgb24gb3VyIHNpdGUsIGFzIGFwcHJvcHJpYXRlLCB5b3UgbWF5IGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcywgcGhvbmUgbnVtYmVyICBvciBvdGhlciBkZXRhaWxzIHRvIGhlbHAgeW91IHdpdGggeW91ciBleHBlcmllbmNlLjwvZGl2Pjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5XaGVuIGRvIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24/PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IGZpbGwgb3V0IGEgZm9ybSBvciBlbnRlciBpbmZvcm1hdGlvbiBvbiBvdXIgc2l0ZS48L2Rpdj48YnI+UHJvdmlkZSB1cyB3aXRoIGZlZWRiYWNrIG9uIG91ciBwcm9kdWN0cyBvciBzZXJ2aWNlcyAgPHNwYW4gaWQ9J2luZm9Vcyc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5Ib3cgZG8gd2UgdXNlIHlvdXIgaW5mb3JtYXRpb24/IDwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+IFdlIG1heSB1c2UgdGhlIGluZm9ybWF0aW9uIHdlIGNvbGxlY3QgZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIsIG1ha2UgYSBwdXJjaGFzZSwgc2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIsIHJlc3BvbmQgdG8gYSBzdXJ2ZXkgb3IgbWFya2V0aW5nIGNvbW11bmljYXRpb24sIHN1cmYgdGhlIHdlYnNpdGUsIG9yIHVzZSBjZXJ0YWluIG90aGVyIHNpdGUgZmVhdHVyZXMgaW4gdGhlIGZvbGxvd2luZyB3YXlzOjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gcGVyc29uYWxpemUgeW91ciBleHBlcmllbmNlIGFuZCB0byBhbGxvdyB1cyB0byBkZWxpdmVyIHRoZSB0eXBlIG9mIGNvbnRlbnQgYW5kIHByb2R1Y3Qgb2ZmZXJpbmdzIGluIHdoaWNoIHlvdSBhcmUgbW9zdCBpbnRlcmVzdGVkLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IFRvIGltcHJvdmUgb3VyIHdlYnNpdGUgaW4gb3JkZXIgdG8gYmV0dGVyIHNlcnZlIHlvdS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBUbyBhbGxvdyB1cyB0byBiZXR0ZXIgc2VydmljZSB5b3UgaW4gcmVzcG9uZGluZyB0byB5b3VyIGN1c3RvbWVyIHNlcnZpY2UgcmVxdWVzdHMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gYXNrIGZvciByYXRpbmdzIGFuZCByZXZpZXdzIG9mIHNlcnZpY2VzIG9yIHByb2R1Y3RzPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gZm9sbG93IHVwIHdpdGggdGhlbSBhZnRlciBjb3JyZXNwb25kZW5jZSAobGl2ZSBjaGF0LCBlbWFpbCBvciBwaG9uZSBpbnF1aXJpZXMpPC9kaXY+PHNwYW4gaWQ9J2luZm9Qcm8nPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIG9ubHkgcHJvdmlkZSBhcnRpY2xlcyBhbmQgaW5mb3JtYXRpb24uIFdlIG5ldmVyIGFzayBmb3IgY3JlZGl0IGNhcmQgbnVtYmVycy48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPllvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGUgYnkgYSBsaW1pdGVkIG51bWJlciBvZiBwZXJzb25zIHdobyBoYXZlIHNwZWNpYWwgYWNjZXNzIHJpZ2h0cyB0byBzdWNoIHN5c3RlbXMsIGFuZCBhcmUgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZS9jcmVkaXQgaW5mb3JtYXRpb24geW91IHN1cHBseSBpcyBlbmNyeXB0ZWQgdmlhIFNlY3VyZSBTb2NrZXQgTGF5ZXIgKFNTTCkgdGVjaG5vbG9neS4gPC9kaXY+PGJyPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5BbGwgdHJhbnNhY3Rpb25zIGFyZSBwcm9jZXNzZWQgdGhyb3VnaCBhIGdhdGV3YXkgcHJvdmlkZXIgYW5kIGFyZSBub3Qgc3RvcmVkIG9yIHByb2Nlc3NlZCBvbiBvdXIgc2VydmVycy48L2Rpdj48c3BhbiBpZD0nY29Vcyc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5EbyB3ZSB1c2UgJ2Nvb2tpZXMnPzwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgZG8gbm90IHVzZSBjb29raWVzIGZvciB0cmFja2luZyBwdXJwb3NlcyA8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5Zb3UgY2FuIGNob29zZSB0byBoYXZlIHlvdXIgY29tcHV0ZXIgd2FybiB5b3UgZWFjaCB0aW1lIGEgY29va2llIGlzIGJlaW5nIHNlbnQsIG9yIHlvdSBjYW4gY2hvb3NlIHRvIHR1cm4gb2ZmIGFsbCBjb29raWVzLiBZb3UgZG8gdGhpcyB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4gU2luY2UgYnJvd3NlciBpcyBhIGxpdHRsZSBkaWZmZXJlbnQsIGxvb2sgYXQgeW91ciBicm93c2VyJ3MgSGVscCBNZW51IHRvIGxlYXJuIHRoZSBjb3JyZWN0IHdheSB0byBtb2RpZnkgeW91ciBjb29raWVzLjxicj48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5JZiB5b3UgdHVybiBjb29raWVzIG9mZiwgU29tZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBtYWtlIHlvdXIgc2l0ZSBleHBlcmllbmNlIG1vcmUgZWZmaWNpZW50IG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkudGhhdCBtYWtlIHlvdXIgc2l0ZSBleHBlcmllbmNlIG1vcmUgZWZmaWNpZW50IGFuZCBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LjwvZGl2Pjxicj48c3BhbiBpZD0ndHJEaSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBkbyBub3Qgc2VsbCwgdHJhZGUsIG9yIG90aGVyd2lzZSB0cmFuc2ZlciB0byBvdXRzaWRlIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi48L2Rpdj48c3BhbiBpZD0ndHJMaSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5UaGlyZC1wYXJ0eSBsaW5rczwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+T2NjYXNpb25hbGx5LCBhdCBvdXIgZGlzY3JldGlvbiwgd2UgbWF5IGluY2x1ZGUgb3Igb2ZmZXIgdGhpcmQtcGFydHkgcHJvZHVjdHMgb3Igc2VydmljZXMgb24gb3VyIHdlYnNpdGUuIFRoZXNlIHRoaXJkLXBhcnR5IHNpdGVzIGhhdmUgc2VwYXJhdGUgYW5kIGluZGVwZW5kZW50IHByaXZhY3kgcG9saWNpZXMuIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0IHRoZSBpbnRlZ3JpdHkgb2Ygb3VyIHNpdGUgYW5kIHdlbGNvbWUgYW55IGZlZWRiYWNrIGFib3V0IHRoZXNlIHNpdGVzLjwvZGl2PjxzcGFuIGlkPSdnb29BZCc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5Hb29nbGU8L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkdvb2dsZSdzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5IEdvb2dsZSdzIEFkdmVydGlzaW5nIFByaW5jaXBsZXMuIFRoZXkgYXJlIHB1dCBpbiBwbGFjZSB0byBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW4gPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHVzZSBHb29nbGUgQWRTZW5zZSBBZHZlcnRpc2luZyBvbiBvdXIgd2Vic2l0ZS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5Hb29nbGUsIGFzIGEgdGhpcmQtcGFydHkgdmVuZG9yLCB1c2VzIGNvb2tpZXMgdG8gc2VydmUgYWRzIG9uIG91ciBzaXRlLiBHb29nbGUncyB1c2Ugb2YgdGhlIERBUlQgY29va2llIGVuYWJsZXMgaXQgdG8gc2VydmUgYWRzIHRvIG91ciB1c2VycyBiYXNlZCBvbiBwcmV2aW91cyB2aXNpdHMgdG8gb3VyIHNpdGUgYW5kIG90aGVyIHNpdGVzIG9uIHRoZSBJbnRlcm5ldC4gVXNlcnMgbWF5IG9wdC1vdXQgb2YgdGhlIHVzZSBvZiB0aGUgREFSVCBjb29raWUgYnkgdmlzaXRpbmcgdGhlIEdvb2dsZSBBZCBhbmQgQ29udGVudCBOZXR3b3JrIHByaXZhY3kgcG9saWN5Ljxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj48c3Ryb25nPldlIGhhdmUgaW1wbGVtZW50ZWQgdGhlIGZvbGxvd2luZzo8L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSwgYWxvbmcgd2l0aCB0aGlyZC1wYXJ0eSB2ZW5kb3JzIHN1Y2ggYXMgR29vZ2xlIHVzZSBmaXJzdC1wYXJ0eSBjb29raWVzIChzdWNoIGFzIHRoZSBHb29nbGUgQW5hbHl0aWNzIGNvb2tpZXMpIGFuZCB0aGlyZC1wYXJ0eSBjb29raWVzIChzdWNoIGFzIHRoZSBEb3VibGVDbGljayBjb29raWUpIG9yIG90aGVyIHRoaXJkLXBhcnR5IGlkZW50aWZpZXJzIHRvZ2V0aGVyIDxkaXYgY2xhc3M9J2lubmVyVGV4dCc+YW5hbHl6ZSB3ZWJzaXRlIHVzYWdlPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5PcHRpbmcgb3V0Ojwvc3Ryb25nPjxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBzZXQgcHJlZmVyZW5jZXMgZm9yIGhvdyBHb29nbGUgYWR2ZXJ0aXNlcyB0byB5b3UgdXNpbmcgdGhlIEdvb2dsZSBBZCBTZXR0aW5ncyBwYWdlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIG9wdCBvdXQgYnkgdmlzaXRpbmcgdGhlIE5ldHdvcmsgQWR2ZXJ0aXNpbmcgSW5pdGlhdGl2ZSBPcHQgT3V0IHBhZ2Ugb3IgYnkgdXNpbmcgdGhlIEdvb2dsZSBBbmFseXRpY3MgT3B0IE91dCBCcm93c2VyIGFkZCBvbi48L2Rpdj48c3BhbiBpZD0nY2FsT3BwYSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5DYWxPUFBBIGlzIHRoZSBmaXJzdCBzdGF0ZSBsYXcgaW4gdGhlIG5hdGlvbiB0byByZXF1aXJlIGNvbW1lcmNpYWwgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuICBUaGUgbGF3J3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnkgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZyBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzIHRvIHBvc3QgYSBjb25zcGljdW91cyBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmQgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gIFNlZSBtb3JlIGF0OiBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWY8YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L3N0cm9uZz48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5Vc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5PbmNlIHRoaXMgcHJpdmFjeSBwb2xpY3kgaXMgY3JlYXRlZCwgd2Ugd2lsbCBhZGQgYSBsaW5rIHRvIGl0IG9uIG91ciBob21lIHBhZ2Ugb3IgYXMgYSBtaW5pbXVtLCBvbiB0aGUgZmlyc3Qgc2lnbmlmaWNhbnQgcGFnZSBhZnRlciBlbnRlcmluZyBvdXIgd2Vic2l0ZS48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5PdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCAnUHJpdmFjeScgYW5kIGNhbiBlYXNpbHkgYmUgZm91bmQgb24gdGhlIHBhZ2Ugc3BlY2lmaWVkIGFib3ZlLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPllvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE9uIG91ciBQcml2YWN5IFBvbGljeSBQYWdlPGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Q2FuIGNoYW5nZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uOjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IEJ5IGxvZ2dpbmcgaW4gdG8geW91ciBhY2NvdW50PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5Ib3cgZG9lcyBvdXIgc2l0ZSBoYW5kbGUgRG8gTm90IFRyYWNrIHNpZ25hbHM/PC9zdHJvbmc+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgaG9ub3IgRG8gTm90IFRyYWNrIHNpZ25hbHMgYW5kIERvIE5vdCBUcmFjaywgcGxhbnQgY29va2llcywgb3IgdXNlIGFkdmVydGlzaW5nIHdoZW4gYSBEbyBOb3QgVHJhY2sgKEROVCkgYnJvd3NlciBtZWNoYW5pc20gaXMgaW4gcGxhY2UuIDwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPjxzdHJvbmc+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvc3Ryb25nPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkl0J3MgYWxzbyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmc8L2Rpdj48c3BhbiBpZD0nY29wcEFjdCc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuICBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJyBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdCBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4ncyBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBkbyBub3Qgc3BlY2lmaWNhbGx5IG1hcmtldCB0byBjaGlsZHJlbiB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkRvIHdlIGxldCB0aGlyZC1wYXJ0aWVzLCBpbmNsdWRpbmcgYWQgbmV0d29ya3Mgb3IgcGx1Zy1pbnMgY29sbGVjdCBQSUkgZnJvbSBjaGlsZHJlbiB1bmRlciAxMz88L2Rpdj48c3BhbiBpZD0nZnRjRmlwJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz48c3Ryb25nPkZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5UaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5IGxhdyBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQgdGhlIGNvbmNlcHRzIHRoZXkgaW5jbHVkZSBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50IHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmcgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzIGNyaXRpY2FsIHRvIGNvbXBseSB3aXRoIHRoZSB2YXJpb3VzIHByaXZhY3kgbGF3cyB0aGF0IHByb3RlY3QgcGVyc29uYWwgaW5mb3JtYXRpb24uPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxzdHJvbmc+SW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGUgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjo8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWw8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBXaXRoaW4gMSBidXNpbmVzcyBkYXk8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5XZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSB0aGUgcmlnaHQgdG8gbGVnYWxseSBwdXJzdWUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSBjb2xsZWN0b3JzIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seSB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdCBpbmRpdmlkdWFscyBoYXZlIHJlY291cnNlIHRvIGNvdXJ0cyBvciBnb3Zlcm5tZW50IGFnZW5jaWVzIHRvIGludmVzdGlnYXRlIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLjwvZGl2PjxzcGFuIGlkPSdjYW5TcGFtJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz48c3Ryb25nPkNBTiBTUEFNIEFjdDwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+VGhlIENBTi1TUEFNIEFjdCBpcyBhIGxhdyB0aGF0IHNldHMgdGhlIHJ1bGVzIGZvciBjb21tZXJjaWFsIGVtYWlsLCBlc3RhYmxpc2hlcyByZXF1aXJlbWVudHMgZm9yIGNvbW1lcmNpYWwgbWVzc2FnZXMsIGdpdmVzIHJlY2lwaWVudHMgdGhlIHJpZ2h0IHRvIGhhdmUgZW1haWxzIHN0b3BwZWQgZnJvbSBiZWluZyBzZW50IHRvIHRoZW0sIGFuZCBzcGVsbHMgb3V0IHRvdWdoIHBlbmFsdGllcyBmb3IgdmlvbGF0aW9ucy48YnI+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PHN0cm9uZz5XZSBjb2xsZWN0IHlvdXIgZW1haWwgYWRkcmVzcyBpbiBvcmRlciB0bzo8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj48c3Ryb25nPlRvIGJlIGluIGFjY29yZGFuY2Ugd2l0aCBDQU5TUEFNLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvc3Ryb25nPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE5vdCB1c2UgZmFsc2Ugb3IgbWlzbGVhZGluZyBzdWJqZWN0cyBvciBlbWFpbCBhZGRyZXNzZXMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gSWRlbnRpZnkgdGhlIG1lc3NhZ2UgYXMgYW4gYWR2ZXJ0aXNlbWVudCBpbiBzb21lIHJlYXNvbmFibGUgd2F5LjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IEluY2x1ZGUgdGhlIHBoeXNpY2FsIGFkZHJlc3Mgb2Ygb3VyIGJ1c2luZXNzIG9yIHNpdGUgaGVhZHF1YXJ0ZXJzLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE1vbml0b3IgdGhpcmQtcGFydHkgZW1haWwgbWFya2V0aW5nIHNlcnZpY2VzIGZvciBjb21wbGlhbmNlLCBpZiBvbmUgaXMgdXNlZC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBIb25vciBvcHQtb3V0L3Vuc3Vic2NyaWJlIHJlcXVlc3RzIHF1aWNrbHkuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gQWxsb3cgdXNlcnMgdG8gdW5zdWJzY3JpYmUgYnkgdXNpbmcgdGhlIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiBlYWNoIGVtYWlsLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PHN0cm9uZz48YnI+SWYgYXQgYW55IHRpbWUgeW91IHdvdWxkIGxpa2UgdG8gdW5zdWJzY3JpYmUgZnJvbSByZWNlaXZpbmcgZnV0dXJlIGVtYWlscywgeW91IGNhbiBlbWFpbCB1cyBhdDwvc3Ryb25nPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+aGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbSBhbmQgd2Ugd2lsbCBwcm9tcHRseSByZW1vdmUgeW91IGZyb20gPHN0cm9uZz5BTEw8L3N0cm9uZz4gY29ycmVzcG9uZGVuY2UuPC9kaXY+PGJyPjxicj48c3Ryb25nPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz5QaG90b2dyYXBoZXJzPC9kaXY+PC9zdHJvbmc+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5BbGwgcGhvdG9ncmFwaGVycyBmZWF0dXJlZCBpbiBvdXIgd2Vic2l0ZSB3aWxsaW5nbHkgYWdyZWUgdG8gdXMgc2hvd2luZyBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciB3b3Jrc2hvcHMgb24gdGhlIHdlYnNpdGUgYW5kIHVzZSBkYXRhIGZyb20gdGhlaXIgd2Vic2l0ZXMuPC9kaXY+PHNwYW4gaWQ9J291ckNvbic+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PGJyPkxhc3QgRWRpdGVkIG9uIDIwMTctMDktMTc8L2Rpdj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyIFtzaG93TmFtZV09XFxcInRydWVcXFwiPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8aDI+VGVybXMgYW5kIGNvbmRpdGlvbnM8L2gyPjxici8+XFxyXFxuICAgIDxici8+XFxyXFxuPGI+T1ZFUlZJRVc8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblRoaXMgd2Vic2l0ZSBpcyBvcGVyYXRlZCBieSBUaGUgUGl4ZWxhdGVkIFBsYW5ldC4gVGhyb3VnaG91dCB0aGUgc2l0ZSwgdGhlIHRlcm1zIOKAnHdl4oCdLCDigJx1c+KAnSBhbmQg4oCcb3Vy4oCdIHJlZmVyIHRvIFRoZSBQaXhlbGF0ZWQgUGxhbmV0LiBUaGUgUGl4ZWxhdGVkIFBsYW5ldCBvZmZlcnMgdGhpcyB3ZWJzaXRlLCBpbmNsdWRpbmcgYWxsIGluZm9ybWF0aW9uLCB0b29scyBhbmQgc2VydmljZXMgYXZhaWxhYmxlIGZyb20gdGhpcyBzaXRlIHRvIHlvdSwgdGhlIHVzZXIsIGNvbmRpdGlvbmVkIHVwb24geW91ciBhY2NlcHRhbmNlIG9mIGFsbCB0ZXJtcywgY29uZGl0aW9ucywgcG9saWNpZXMgYW5kIG5vdGljZXMgc3RhdGVkIGhlcmUuPGJyLz5cXHJcXG48YnIvPlxcclxcbkJ5IHZpc2l0aW5nIG91ciBzaXRlIGFuZC8gb3IgcHVyY2hhc2luZyBzb21ldGhpbmcgZnJvbSB1cywgeW91IGVuZ2FnZSBpbiBvdXIg4oCcU2VydmljZeKAnSBhbmQgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlIGZvbGxvd2luZyB0ZXJtcyBhbmQgY29uZGl0aW9ucyAo4oCcVGVybXMgb2YgU2VydmljZeKAnSwg4oCcVGVybXPigJ0pLCBpbmNsdWRpbmcgdGhvc2UgYWRkaXRpb25hbCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhbmQgcG9saWNpZXMgcmVmZXJlbmNlZCBoZXJlaW4gYW5kL29yIGF2YWlsYWJsZSBieSBoeXBlcmxpbmsuIFRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYXBwbHkgIHRvIGFsbCB1c2VycyBvZiB0aGUgc2l0ZSwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB1c2VycyB3aG8gYXJlIGJyb3dzZXJzLCB2ZW5kb3JzLCBjdXN0b21lcnMsIG1lcmNoYW50cywgYW5kLyBvciBjb250cmlidXRvcnMgb2YgY29udGVudC48YnIvPlxcclxcbjxici8+XFxyXFxuUGxlYXNlIHJlYWQgdGhlc2UgVGVybXMgb2YgU2VydmljZSBjYXJlZnVsbHkgYmVmb3JlIGFjY2Vzc2luZyBvciB1c2luZyBvdXIgd2Vic2l0ZS4gQnkgYWNjZXNzaW5nIG9yIHVzaW5nIGFueSBwYXJ0IG9mIHRoZSBzaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlc2UgVGVybXMgb2YgU2VydmljZS4gSWYgeW91IGRvIG5vdCBhZ3JlZSB0byBhbGwgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoaXMgYWdyZWVtZW50LCB0aGVuIHlvdSBtYXkgbm90IGFjY2VzcyB0aGUgd2Vic2l0ZSBvciB1c2UgYW55IHNlcnZpY2VzLiBJZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGFyZSBjb25zaWRlcmVkIGFuIG9mZmVyLCBhY2NlcHRhbmNlIGlzIGV4cHJlc3NseSBsaW1pdGVkIHRvIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UuPGJyLz5cXHJcXG48YnIvPlxcclxcbkFueSBuZXcgZmVhdHVyZXMgb3IgdG9vbHMgd2hpY2ggYXJlIGFkZGVkIHRvIHRoZSBjdXJyZW50IHN0b3JlIHNoYWxsIGFsc28gYmUgc3ViamVjdCB0byB0aGUgVGVybXMgb2YgU2VydmljZS4gWW91IGNhbiByZXZpZXcgdGhlIG1vc3QgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBUZXJtcyBvZiBTZXJ2aWNlIGF0IGFueSB0aW1lIG9uIHRoaXMgcGFnZS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdXBkYXRlLCBjaGFuZ2Ugb3IgcmVwbGFjZSBhbnkgcGFydCBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGJ5IHBvc3RpbmcgdXBkYXRlcyBhbmQvb3IgY2hhbmdlcyB0byBvdXIgd2Vic2l0ZS4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBjaGVjayB0aGlzIHBhZ2UgcGVyaW9kaWNhbGx5IGZvciBjaGFuZ2VzLiBZb3VyIGNvbnRpbnVlZCB1c2Ugb2Ygb3IgYWNjZXNzIHRvIHRoZSB3ZWJzaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBhbnkgY2hhbmdlcyBjb25zdGl0dXRlcyBhY2NlcHRhbmNlIG9mIHRob3NlIGNoYW5nZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMSAtIE9OTElORSBTVE9SRSBURVJNUzwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuQnkgYWdyZWVpbmcgdG8gdGhlc2UgVGVybXMgb2YgU2VydmljZSwgeW91IHJlcHJlc2VudCB0aGF0IHlvdSBhcmUgYXQgbGVhc3QgdGhlIGFnZSBvZiBtYWpvcml0eSBpbiB5b3VyIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHJlc2lkZW5jZSwgb3IgdGhhdCB5b3UgYXJlIHRoZSBhZ2Ugb2YgbWFqb3JpdHkgaW4geW91ciBzdGF0ZSBvciBwcm92aW5jZSBvZiByZXNpZGVuY2UgYW5kIHlvdSBoYXZlIGdpdmVuIHVzIHlvdXIgY29uc2VudCB0byBhbGxvdyBhbnkgb2YgeW91ciBtaW5vciBkZXBlbmRlbnRzIHRvIHVzZSB0aGlzIHNpdGUuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBtYXkgbm90IHVzZSBvdXIgcHJvZHVjdHMgZm9yIGFueSBpbGxlZ2FsIG9yIHVuYXV0aG9yaXplZCBwdXJwb3NlIG5vciBtYXkgeW91LCBpbiB0aGUgdXNlIG9mIHRoZSBTZXJ2aWNlLCB2aW9sYXRlIGFueSBsYXdzIGluIHlvdXIganVyaXNkaWN0aW9uIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGNvcHlyaWdodCBsYXdzKS48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IG11c3Qgbm90IHRyYW5zbWl0IGFueSB3b3JtcyBvciB2aXJ1c2VzIG9yIGFueSBjb2RlIG9mIGEgZGVzdHJ1Y3RpdmUgbmF0dXJlLjxici8+XFxyXFxuPGJyLz5cXHJcXG5BIGJyZWFjaCBvciB2aW9sYXRpb24gb2YgYW55IG9mIHRoZSBUZXJtcyB3aWxsIHJlc3VsdCBpbiBhbiBpbW1lZGlhdGUgdGVybWluYXRpb24gb2YgeW91ciBTZXJ2aWNlcy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDIgLSBHRU5FUkFMIENPTkRJVElPTlM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHJlZnVzZSBzZXJ2aWNlIHRvIGFueW9uZSBmb3IgYW55IHJlYXNvbiBhdCBhbnkgdGltZS48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IHVuZGVyc3RhbmQgdGhhdCB5b3VyIGNvbnRlbnQgKG5vdCBpbmNsdWRpbmcgY3JlZGl0IGNhcmQgaW5mb3JtYXRpb24pLCBtYXkgYmUgdHJhbnNmZXJyZWQgdW5lbmNyeXB0ZWQgYW5kIGludm9sdmUgKGEpIHRyYW5zbWlzc2lvbnMgb3ZlciB2YXJpb3VzIG5ldHdvcmtzOyBhbmQgKGIpIGNoYW5nZXMgdG8gY29uZm9ybSBhbmQgYWRhcHQgdG8gdGVjaG5pY2FsIHJlcXVpcmVtZW50cyBvZiBjb25uZWN0aW5nIG5ldHdvcmtzIG9yIGRldmljZXMuIENyZWRpdCBjYXJkIGluZm9ybWF0aW9uIGlzIGFsd2F5cyBlbmNyeXB0ZWQgZHVyaW5nIHRyYW5zZmVyIG92ZXIgbmV0d29ya3MuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhZ3JlZSBub3QgdG8gcmVwcm9kdWNlLCBkdXBsaWNhdGUsIGNvcHksIHNlbGwsIHJlc2VsbCBvciBleHBsb2l0IGFueSBwb3J0aW9uIG9mIHRoZSBTZXJ2aWNlLCB1c2Ugb2YgdGhlIFNlcnZpY2UsIG9yIGFjY2VzcyB0byB0aGUgU2VydmljZSBvciBhbnkgY29udGFjdCBvbiB0aGUgd2Vic2l0ZSB0aHJvdWdoIHdoaWNoIHRoZSBzZXJ2aWNlIGlzIHByb3ZpZGVkLCB3aXRob3V0IGV4cHJlc3Mgd3JpdHRlbiBwZXJtaXNzaW9uIGJ5IHVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGUgaGVhZGluZ3MgdXNlZCBpbiB0aGlzIGFncmVlbWVudCBhcmUgaW5jbHVkZWQgZm9yIGNvbnZlbmllbmNlIG9ubHkgYW5kIHdpbGwgbm90IGxpbWl0IG9yIG90aGVyd2lzZSBhZmZlY3QgdGhlc2UgVGVybXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAzIC0gQUNDVVJBQ1ksIENPTVBMRVRFTkVTUyBBTkQgVElNRUxJTkVTUyBPRiBJTkZPUk1BVElPTjwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgYXJlIG5vdCByZXNwb25zaWJsZSBpZiBpbmZvcm1hdGlvbiBtYWRlIGF2YWlsYWJsZSBvbiB0aGlzIHNpdGUgaXMgbm90IGFjY3VyYXRlLCBjb21wbGV0ZSBvciBjdXJyZW50LiBUaGUgbWF0ZXJpYWwgb24gdGhpcyBzaXRlIGlzIHByb3ZpZGVkIGZvciBnZW5lcmFsIGluZm9ybWF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVsaWVkIHVwb24gb3IgdXNlZCBhcyB0aGUgc29sZSBiYXNpcyBmb3IgbWFraW5nIGRlY2lzaW9ucyB3aXRob3V0IGNvbnN1bHRpbmcgcHJpbWFyeSwgbW9yZSBhY2N1cmF0ZSwgbW9yZSBjb21wbGV0ZSBvciBtb3JlIHRpbWVseSBzb3VyY2VzIG9mIGluZm9ybWF0aW9uLiBBbnkgcmVsaWFuY2Ugb24gdGhlIG1hdGVyaWFsIG9uIHRoaXMgc2l0ZSBpcyBhdCB5b3VyIG93biByaXNrLjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGlzIHNpdGUgbWF5IGNvbnRhaW4gY2VydGFpbiBoaXN0b3JpY2FsIGluZm9ybWF0aW9uLiBIaXN0b3JpY2FsIGluZm9ybWF0aW9uLCBuZWNlc3NhcmlseSwgaXMgbm90IGN1cnJlbnQgYW5kIGlzIHByb3ZpZGVkIGZvciB5b3VyIHJlZmVyZW5jZSBvbmx5LiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2l0ZSBhdCBhbnkgdGltZSwgYnV0IHdlIGhhdmUgbm8gb2JsaWdhdGlvbiB0byB1cGRhdGUgYW55IGluZm9ybWF0aW9uIG9uIG91ciBzaXRlLiBZb3UgYWdyZWUgdGhhdCBpdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIG1vbml0b3IgY2hhbmdlcyB0byBvdXIgc2l0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDQgLSBNT0RJRklDQVRJT05TIFRPIFRIRSBTRVJWSUNFIEFORCBQUklDRVM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblByaWNlcyBmb3Igb3VyIHByb2R1Y3RzIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG5vdGljZS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgYXQgYW55IHRpbWUgdG8gbW9kaWZ5IG9yIGRpc2NvbnRpbnVlIHRoZSBTZXJ2aWNlIChvciBhbnkgcGFydCBvciBjb250ZW50IHRoZXJlb2YpIHdpdGhvdXQgbm90aWNlIGF0IGFueSB0aW1lLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBzaGFsbCBub3QgYmUgbGlhYmxlIHRvIHlvdSBvciB0byBhbnkgdGhpcmQtcGFydHkgZm9yIGFueSBtb2RpZmljYXRpb24sIHByaWNlIGNoYW5nZSwgc3VzcGVuc2lvbiBvciBkaXNjb250aW51YW5jZSBvZiB0aGUgU2VydmljZS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDUgLSBQUk9EVUNUUyBPUiBTRVJWSUNFUyAoaWYgYXBwbGljYWJsZSk8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbkNlcnRhaW4gcHJvZHVjdHMgb3Igc2VydmljZXMgbWF5IGJlIGF2YWlsYWJsZSBleGNsdXNpdmVseSBvbmxpbmUgdGhyb3VnaCB0aGUgd2Vic2l0ZS4gVGhlc2UgcHJvZHVjdHMgb3Igc2VydmljZXMgbWF5IGhhdmUgbGltaXRlZCBxdWFudGl0aWVzIGFuZCBhcmUgc3ViamVjdCB0byByZXR1cm4gb3IgZXhjaGFuZ2Ugb25seSBhY2NvcmRpbmcgdG8gb3VyIFJldHVybiBQb2xpY3kuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIGhhdmUgbWFkZSBldmVyeSBlZmZvcnQgdG8gZGlzcGxheSBhcyBhY2N1cmF0ZWx5IGFzIHBvc3NpYmxlIHRoZSBjb2xvcnMgYW5kIGltYWdlcyBvZiBvdXIgcHJvZHVjdHMgdGhhdCBhcHBlYXIgYXQgdGhlIHN0b3JlLiBXZSBjYW5ub3QgZ3VhcmFudGVlIHRoYXQgeW91ciBjb21wdXRlciBtb25pdG9yJ3MgZGlzcGxheSBvZiBhbnkgY29sb3Igd2lsbCBiZSBhY2N1cmF0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgcmVzZXJ2ZSB0aGUgcmlnaHQsIGJ1dCBhcmUgbm90IG9ibGlnYXRlZCwgdG8gbGltaXQgdGhlIHNhbGVzIG9mIG91ciBwcm9kdWN0cyBvciBTZXJ2aWNlcyB0byBhbnkgcGVyc29uLCBnZW9ncmFwaGljIHJlZ2lvbiBvciBqdXJpc2RpY3Rpb24uIFdlIG1heSBleGVyY2lzZSB0aGlzIHJpZ2h0IG9uIGEgY2FzZS1ieS1jYXNlIGJhc2lzLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBsaW1pdCB0aGUgcXVhbnRpdGllcyBvZiBhbnkgcHJvZHVjdHMgb3Igc2VydmljZXMgdGhhdCB3ZSBvZmZlci4gQWxsIGRlc2NyaXB0aW9ucyBvZiBwcm9kdWN0cyBvciBwcm9kdWN0IHByaWNpbmcgYXJlIHN1YmplY3QgdG8gY2hhbmdlIGF0IGFueXRpbWUgd2l0aG91dCBub3RpY2UsIGF0IHRoZSBzb2xlIGRpc2NyZXRpb24gb2YgdXMuIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIGRpc2NvbnRpbnVlIGFueSBwcm9kdWN0IGF0IGFueSB0aW1lLiBBbnkgb2ZmZXIgZm9yIGFueSBwcm9kdWN0IG9yIHNlcnZpY2UgbWFkZSBvbiB0aGlzIHNpdGUgaXMgdm9pZCB3aGVyZSBwcm9oaWJpdGVkLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBkbyBub3Qgd2FycmFudCB0aGF0IHRoZSBxdWFsaXR5IG9mIGFueSBwcm9kdWN0cywgc2VydmljZXMsIGluZm9ybWF0aW9uLCBvciBvdGhlciBtYXRlcmlhbCBwdXJjaGFzZWQgb3Igb2J0YWluZWQgYnkgeW91IHdpbGwgbWVldCB5b3VyIGV4cGVjdGF0aW9ucywgb3IgdGhhdCBhbnkgZXJyb3JzIGluIHRoZSBTZXJ2aWNlIHdpbGwgYmUgY29ycmVjdGVkLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gNiAtIEFDQ1VSQUNZIE9GIEJJTExJTkcgQU5EIEFDQ09VTlQgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHJlZnVzZSBhbnkgb3JkZXIgeW91IHBsYWNlIHdpdGggdXMuIFdlIG1heSwgaW4gb3VyIHNvbGUgZGlzY3JldGlvbiwgbGltaXQgb3IgY2FuY2VsIHF1YW50aXRpZXMgcHVyY2hhc2VkIHBlciBwZXJzb24sIHBlciBob3VzZWhvbGQgb3IgcGVyIG9yZGVyLiBUaGVzZSByZXN0cmljdGlvbnMgbWF5IGluY2x1ZGUgb3JkZXJzIHBsYWNlZCBieSBvciB1bmRlciB0aGUgc2FtZSBjdXN0b21lciBhY2NvdW50LCB0aGUgc2FtZSBjcmVkaXQgY2FyZCwgYW5kL29yIG9yZGVycyB0aGF0IHVzZSB0aGUgc2FtZSBiaWxsaW5nIGFuZC9vciBzaGlwcGluZyBhZGRyZXNzLiBJbiB0aGUgZXZlbnQgdGhhdCB3ZSBtYWtlIGEgY2hhbmdlIHRvIG9yIGNhbmNlbCBhbiBvcmRlciwgd2UgbWF5IGF0dGVtcHQgdG8gbm90aWZ5IHlvdSBieSBjb250YWN0aW5nIHRoZSBlLW1haWwgYW5kL29yIGJpbGxpbmcgYWRkcmVzcy9waG9uZSBudW1iZXIgcHJvdmlkZWQgYXQgdGhlIHRpbWUgdGhlIG9yZGVyIHdhcyBtYWRlLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBsaW1pdCBvciBwcm9oaWJpdCBvcmRlcnMgdGhhdCwgaW4gb3VyIHNvbGUganVkZ21lbnQsIGFwcGVhciB0byBiZSBwbGFjZWQgYnkgZGVhbGVycywgcmVzZWxsZXJzIG9yIGRpc3RyaWJ1dG9ycy48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IGFncmVlIHRvIHByb3ZpZGUgY3VycmVudCwgY29tcGxldGUgYW5kIGFjY3VyYXRlIHB1cmNoYXNlIGFuZCBhY2NvdW50IGluZm9ybWF0aW9uIGZvciBhbGwgcHVyY2hhc2VzIG1hZGUgYXQgb3VyIHN0b3JlLiBZb3UgYWdyZWUgdG8gcHJvbXB0bHkgdXBkYXRlIHlvdXIgYWNjb3VudCBhbmQgb3RoZXIgaW5mb3JtYXRpb24sIGluY2x1ZGluZyB5b3VyIGVtYWlsIGFkZHJlc3MgYW5kIGNyZWRpdCBjYXJkIG51bWJlcnMgYW5kIGV4cGlyYXRpb24gZGF0ZXMsIHNvIHRoYXQgd2UgY2FuIGNvbXBsZXRlIHlvdXIgdHJhbnNhY3Rpb25zIGFuZCBjb250YWN0IHlvdSBhcyBuZWVkZWQuPGJyLz5cXHJcXG48YnIvPlxcclxcbkZvciBtb3JlIGRldGFpbCwgcGxlYXNlIHJldmlldyBvdXIgUmV0dXJucyBQb2xpY3kuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiA3IC0gT1BUSU9OQUwgVE9PTFM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIG1heSBwcm92aWRlIHlvdSB3aXRoIGFjY2VzcyB0byB0aGlyZC1wYXJ0eSB0b29scyBvdmVyIHdoaWNoIHdlIG5laXRoZXIgbW9uaXRvciBub3IgaGF2ZSBhbnkgY29udHJvbCBub3IgaW5wdXQuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhY2tub3dsZWRnZSBhbmQgYWdyZWUgdGhhdCB3ZSBwcm92aWRlIGFjY2VzcyB0byBzdWNoIHRvb2xzIOKAnWFzIGlz4oCdIGFuZCDigJxhcyBhdmFpbGFibGXigJ0gd2l0aG91dCBhbnkgd2FycmFudGllcywgcmVwcmVzZW50YXRpb25zIG9yIGNvbmRpdGlvbnMgb2YgYW55IGtpbmQgYW5kIHdpdGhvdXQgYW55IGVuZG9yc2VtZW50LiBXZSBzaGFsbCBoYXZlIG5vIGxpYWJpbGl0eSB3aGF0c29ldmVyIGFyaXNpbmcgZnJvbSBvciByZWxhdGluZyB0byB5b3VyIHVzZSBvZiBvcHRpb25hbCB0aGlyZC1wYXJ0eSB0b29scy48YnIvPlxcclxcbjxici8+XFxyXFxuQW55IHVzZSBieSB5b3Ugb2Ygb3B0aW9uYWwgdG9vbHMgb2ZmZXJlZCB0aHJvdWdoIHRoZSBzaXRlIGlzIGVudGlyZWx5IGF0IHlvdXIgb3duIHJpc2sgYW5kIGRpc2NyZXRpb24gYW5kIHlvdSBzaG91bGQgZW5zdXJlIHRoYXQgeW91IGFyZSBmYW1pbGlhciB3aXRoIGFuZCBhcHByb3ZlIG9mIHRoZSB0ZXJtcyBvbiB3aGljaCB0b29scyBhcmUgcHJvdmlkZWQgYnkgdGhlIHJlbGV2YW50IHRoaXJkLXBhcnR5IHByb3ZpZGVyKHMpLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBtYXkgYWxzbywgaW4gdGhlIGZ1dHVyZSwgb2ZmZXIgbmV3IHNlcnZpY2VzIGFuZC9vciBmZWF0dXJlcyB0aHJvdWdoIHRoZSB3ZWJzaXRlIChpbmNsdWRpbmcsIHRoZSByZWxlYXNlIG9mIG5ldyB0b29scyBhbmQgcmVzb3VyY2VzKS4gU3VjaCBuZXcgZmVhdHVyZXMgYW5kL29yIHNlcnZpY2VzIHNoYWxsIGFsc28gYmUgc3ViamVjdCB0byB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gOCAtIFRISVJELVBBUlRZIExJTktTPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5DZXJ0YWluIGNvbnRlbnQsIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyBhdmFpbGFibGUgdmlhIG91ciBTZXJ2aWNlIG1heSBpbmNsdWRlIG1hdGVyaWFscyBmcm9tIHRoaXJkLXBhcnRpZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcblRoaXJkLXBhcnR5IGxpbmtzIG9uIHRoaXMgc2l0ZSBtYXkgZGlyZWN0IHlvdSB0byB0aGlyZC1wYXJ0eSB3ZWJzaXRlcyB0aGF0IGFyZSBub3QgYWZmaWxpYXRlZCB3aXRoIHVzLiBXZSBhcmUgbm90IHJlc3BvbnNpYmxlIGZvciBleGFtaW5pbmcgb3IgZXZhbHVhdGluZyB0aGUgY29udGVudCBvciBhY2N1cmFjeSBhbmQgd2UgZG8gbm90IHdhcnJhbnQgYW5kIHdpbGwgbm90IGhhdmUgYW55IGxpYWJpbGl0eSBvciByZXNwb25zaWJpbGl0eSBmb3IgYW55IHRoaXJkLXBhcnR5IG1hdGVyaWFscyBvciB3ZWJzaXRlcywgb3IgZm9yIGFueSBvdGhlciBtYXRlcmlhbHMsIHByb2R1Y3RzLCBvciBzZXJ2aWNlcyBvZiB0aGlyZC1wYXJ0aWVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBhcmUgbm90IGxpYWJsZSBmb3IgYW55IGhhcm0gb3IgZGFtYWdlcyByZWxhdGVkIHRvIHRoZSBwdXJjaGFzZSBvciB1c2Ugb2YgZ29vZHMsIHNlcnZpY2VzLCByZXNvdXJjZXMsIGNvbnRlbnQsIG9yIGFueSBvdGhlciB0cmFuc2FjdGlvbnMgbWFkZSBpbiBjb25uZWN0aW9uIHdpdGggYW55IHRoaXJkLXBhcnR5IHdlYnNpdGVzLiBQbGVhc2UgcmV2aWV3IGNhcmVmdWxseSB0aGUgdGhpcmQtcGFydHkncyBwb2xpY2llcyBhbmQgcHJhY3RpY2VzIGFuZCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgdGhlbSBiZWZvcmUgeW91IGVuZ2FnZSBpbiBhbnkgdHJhbnNhY3Rpb24uIENvbXBsYWludHMsIGNsYWltcywgY29uY2VybnMsIG9yIHF1ZXN0aW9ucyByZWdhcmRpbmcgdGhpcmQtcGFydHkgcHJvZHVjdHMgc2hvdWxkIGJlIGRpcmVjdGVkIHRvIHRoZSB0aGlyZC1wYXJ0eS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDkgLSBVU0VSIENPTU1FTlRTLCBGRUVEQkFDSyBBTkQgT1RIRVIgU1VCTUlTU0lPTlM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbklmLCBhdCBvdXIgcmVxdWVzdCwgeW91IHNlbmQgY2VydGFpbiBzcGVjaWZpYyBzdWJtaXNzaW9ucyAoZm9yIGV4YW1wbGUgY29udGVzdCBlbnRyaWVzKSBvciB3aXRob3V0IGEgcmVxdWVzdCBmcm9tIHVzIHlvdSBzZW5kIGNyZWF0aXZlIGlkZWFzLCBzdWdnZXN0aW9ucywgcHJvcG9zYWxzLCBwbGFucywgb3Igb3RoZXIgbWF0ZXJpYWxzLCB3aGV0aGVyIG9ubGluZSwgYnkgZW1haWwsIGJ5IHBvc3RhbCBtYWlsLCBvciBvdGhlcndpc2UgKGNvbGxlY3RpdmVseSwgJ2NvbW1lbnRzJyksIHlvdSBhZ3JlZSB0aGF0IHdlIG1heSwgYXQgYW55IHRpbWUsIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGVkaXQsIGNvcHksIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHRyYW5zbGF0ZSBhbmQgb3RoZXJ3aXNlIHVzZSBpbiBhbnkgbWVkaXVtIGFueSBjb21tZW50cyB0aGF0IHlvdSBmb3J3YXJkIHRvIHVzLiBXZSBhcmUgYW5kIHNoYWxsIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gKDEpIHRvIG1haW50YWluIGFueSBjb21tZW50cyBpbiBjb25maWRlbmNlOyAoMikgdG8gcGF5IGNvbXBlbnNhdGlvbiBmb3IgYW55IGNvbW1lbnRzOyBvciAoMykgdG8gcmVzcG9uZCB0byBhbnkgY29tbWVudHMuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIG1heSwgYnV0IGhhdmUgbm8gb2JsaWdhdGlvbiB0bywgbW9uaXRvciwgZWRpdCBvciByZW1vdmUgY29udGVudCB0aGF0IHdlIGRldGVybWluZSBpbiBvdXIgc29sZSBkaXNjcmV0aW9uIGFyZSB1bmxhd2Z1bCwgb2ZmZW5zaXZlLCB0aHJlYXRlbmluZywgbGliZWxvdXMsIGRlZmFtYXRvcnksIHBvcm5vZ3JhcGhpYywgb2JzY2VuZSBvciBvdGhlcndpc2Ugb2JqZWN0aW9uYWJsZSBvciB2aW9sYXRlcyBhbnkgcGFydHnigJlzIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLjxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgYWdyZWUgdGhhdCB5b3VyIGNvbW1lbnRzIHdpbGwgbm90IHZpb2xhdGUgYW55IHJpZ2h0IG9mIGFueSB0aGlyZC1wYXJ0eSwgaW5jbHVkaW5nIGNvcHlyaWdodCwgdHJhZGVtYXJrLCBwcml2YWN5LCBwZXJzb25hbGl0eSBvciBvdGhlciBwZXJzb25hbCBvciBwcm9wcmlldGFyeSByaWdodC4gWW91IGZ1cnRoZXIgYWdyZWUgdGhhdCB5b3VyIGNvbW1lbnRzIHdpbGwgbm90IGNvbnRhaW4gbGliZWxvdXMgb3Igb3RoZXJ3aXNlIHVubGF3ZnVsLCBhYnVzaXZlIG9yIG9ic2NlbmUgbWF0ZXJpYWwsIG9yIGNvbnRhaW4gYW55IGNvbXB1dGVyIHZpcnVzIG9yIG90aGVyIG1hbHdhcmUgdGhhdCBjb3VsZCBpbiBhbnkgd2F5IGFmZmVjdCB0aGUgb3BlcmF0aW9uIG9mIHRoZSBTZXJ2aWNlIG9yIGFueSByZWxhdGVkIHdlYnNpdGUuIFlvdSBtYXkgbm90IHVzZSBhIGZhbHNlIGUtbWFpbCBhZGRyZXNzLCBwcmV0ZW5kIHRvIGJlIHNvbWVvbmUgb3RoZXIgdGhhbiB5b3Vyc2VsZiwgb3Igb3RoZXJ3aXNlIG1pc2xlYWQgdXMgb3IgdGhpcmQtcGFydGllcyBhcyB0byB0aGUgb3JpZ2luIG9mIGFueSBjb21tZW50cy4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGFueSBjb21tZW50cyB5b3UgbWFrZSBhbmQgdGhlaXIgYWNjdXJhY3kuIFdlIHRha2Ugbm8gcmVzcG9uc2liaWxpdHkgYW5kIGFzc3VtZSBubyBsaWFiaWxpdHkgZm9yIGFueSBjb21tZW50cyBwb3N0ZWQgYnkgeW91IG9yIGFueSB0aGlyZC1wYXJ0eS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEwIC0gUEVSU09OQUwgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbllvdXIgc3VibWlzc2lvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiB0aHJvdWdoIHRoZSBzdG9yZSBpcyBnb3Zlcm5lZCBieSBvdXIgUHJpdmFjeSBQb2xpY3kuIFRvIHZpZXcgb3VyIFByaXZhY3kgUG9saWN5Ljxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTEgLSBFUlJPUlMsIElOQUNDVVJBQ0lFUyBBTkQgT01JU1NJT05TPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5PY2Nhc2lvbmFsbHkgdGhlcmUgbWF5IGJlIGluZm9ybWF0aW9uIG9uIG91ciBzaXRlIG9yIGluIHRoZSBTZXJ2aWNlIHRoYXQgY29udGFpbnMgdHlwb2dyYXBoaWNhbCBlcnJvcnMsIGluYWNjdXJhY2llcyBvciBvbWlzc2lvbnMgdGhhdCBtYXkgcmVsYXRlIHRvIHByb2R1Y3QgZGVzY3JpcHRpb25zLCBwcmljaW5nLCBwcm9tb3Rpb25zLCBvZmZlcnMsIHByb2R1Y3Qgc2hpcHBpbmcgY2hhcmdlcywgdHJhbnNpdCB0aW1lcyBhbmQgYXZhaWxhYmlsaXR5LiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBjb3JyZWN0IGFueSBlcnJvcnMsIGluYWNjdXJhY2llcyBvciBvbWlzc2lvbnMsIGFuZCB0byBjaGFuZ2Ugb3IgdXBkYXRlIGluZm9ybWF0aW9uIG9yIGNhbmNlbCBvcmRlcnMgaWYgYW55IGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUgaXMgaW5hY2N1cmF0ZSBhdCBhbnkgdGltZSB3aXRob3V0IHByaW9yIG5vdGljZSAoaW5jbHVkaW5nIGFmdGVyIHlvdSBoYXZlIHN1Ym1pdHRlZCB5b3VyIG9yZGVyKS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgdW5kZXJ0YWtlIG5vIG9ibGlnYXRpb24gdG8gdXBkYXRlLCBhbWVuZCBvciBjbGFyaWZ5IGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIHByaWNpbmcgaW5mb3JtYXRpb24sIGV4Y2VwdCBhcyByZXF1aXJlZCBieSBsYXcuIE5vIHNwZWNpZmllZCB1cGRhdGUgb3IgcmVmcmVzaCBkYXRlIGFwcGxpZWQgaW4gdGhlIFNlcnZpY2Ugb3Igb24gYW55IHJlbGF0ZWQgd2Vic2l0ZSwgc2hvdWxkIGJlIHRha2VuIHRvIGluZGljYXRlIHRoYXQgYWxsIGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUgaGFzIGJlZW4gbW9kaWZpZWQgb3IgdXBkYXRlZC48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEyIC0gUFJPSElCSVRFRCBVU0VTPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5JbiBhZGRpdGlvbiB0byBvdGhlciBwcm9oaWJpdGlvbnMgYXMgc2V0IGZvcnRoIGluIHRoZSBUZXJtcyBvZiBTZXJ2aWNlLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyB0aGUgc2l0ZSBvciBpdHMgY29udGVudDogKGEpIGZvciBhbnkgdW5sYXdmdWwgcHVycG9zZTsgKGIpIHRvIHNvbGljaXQgb3RoZXJzIHRvIHBlcmZvcm0gb3IgcGFydGljaXBhdGUgaW4gYW55IHVubGF3ZnVsIGFjdHM7IChjKSB0byB2aW9sYXRlIGFueSBpbnRlcm5hdGlvbmFsLCBmZWRlcmFsLCBwcm92aW5jaWFsIG9yIHN0YXRlIHJlZ3VsYXRpb25zLCBydWxlcywgbGF3cywgb3IgbG9jYWwgb3JkaW5hbmNlczsgKGQpIHRvIGluZnJpbmdlIHVwb24gb3IgdmlvbGF0ZSBvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvciB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvZiBvdGhlcnM7IChlKSB0byBoYXJhc3MsIGFidXNlLCBpbnN1bHQsIGhhcm0sIGRlZmFtZSwgc2xhbmRlciwgZGlzcGFyYWdlLCBpbnRpbWlkYXRlLCBvciBkaXNjcmltaW5hdGUgYmFzZWQgb24gZ2VuZGVyLCBzZXh1YWwgb3JpZW50YXRpb24sIHJlbGlnaW9uLCBldGhuaWNpdHksIHJhY2UsIGFnZSwgbmF0aW9uYWwgb3JpZ2luLCBvciBkaXNhYmlsaXR5OyAoZikgdG8gc3VibWl0IGZhbHNlIG9yIG1pc2xlYWRpbmcgaW5mb3JtYXRpb247IChnKSB0byB1cGxvYWQgb3IgdHJhbnNtaXQgdmlydXNlcyBvciBhbnkgb3RoZXIgdHlwZSBvZiBtYWxpY2lvdXMgY29kZSB0aGF0IHdpbGwgb3IgbWF5IGJlIHVzZWQgaW4gYW55IHdheSB0aGF0IHdpbGwgYWZmZWN0IHRoZSBmdW5jdGlvbmFsaXR5IG9yIG9wZXJhdGlvbiBvZiB0aGUgU2VydmljZSBvciBvZiBhbnkgcmVsYXRlZCB3ZWJzaXRlLCBvdGhlciB3ZWJzaXRlcywgb3IgdGhlIEludGVybmV0OyAoaCkgdG8gY29sbGVjdCBvciB0cmFjayB0aGUgcGVyc29uYWwgaW5mb3JtYXRpb24gb2Ygb3RoZXJzOyAoaSkgdG8gc3BhbSwgcGhpc2gsIHBoYXJtLCBwcmV0ZXh0LCBzcGlkZXIsIGNyYXdsLCBvciBzY3JhcGU7IChqKSBmb3IgYW55IG9ic2NlbmUgb3IgaW1tb3JhbCBwdXJwb3NlOyBvciAoaykgdG8gaW50ZXJmZXJlIHdpdGggb3IgY2lyY3VtdmVudCB0aGUgc2VjdXJpdHkgZmVhdHVyZXMgb2YgdGhlIFNlcnZpY2Ugb3IgYW55IHJlbGF0ZWQgd2Vic2l0ZSwgb3RoZXIgd2Vic2l0ZXMsIG9yIHRoZSBJbnRlcm5ldC4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdGVybWluYXRlIHlvdXIgdXNlIG9mIHRoZSBTZXJ2aWNlIG9yIGFueSByZWxhdGVkIHdlYnNpdGUgZm9yIHZpb2xhdGluZyBhbnkgb2YgdGhlIHByb2hpYml0ZWQgdXNlcy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEzIC0gRElTQ0xBSU1FUiBPRiBXQVJSQU5USUVTOyBMSU1JVEFUSU9OIE9GIExJQUJJTElUWTwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgZG8gbm90IGd1YXJhbnRlZSwgcmVwcmVzZW50IG9yIHdhcnJhbnQgdGhhdCB5b3VyIHVzZSBvZiBvdXIgc2VydmljZSB3aWxsIGJlIHVuaW50ZXJydXB0ZWQsIHRpbWVseSwgc2VjdXJlIG9yIGVycm9yLWZyZWUuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIGRvIG5vdCB3YXJyYW50IHRoYXQgdGhlIHJlc3VsdHMgdGhhdCBtYXkgYmUgb2J0YWluZWQgZnJvbSB0aGUgdXNlIG9mIHRoZSBzZXJ2aWNlIHdpbGwgYmUgYWNjdXJhdGUgb3IgcmVsaWFibGUuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhZ3JlZSB0aGF0IGZyb20gdGltZSB0byB0aW1lIHdlIG1heSByZW1vdmUgdGhlIHNlcnZpY2UgZm9yIGluZGVmaW5pdGUgcGVyaW9kcyBvZiB0aW1lIG9yIGNhbmNlbCB0aGUgc2VydmljZSBhdCBhbnkgdGltZSwgd2l0aG91dCBub3RpY2UgdG8geW91Ljxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgZXhwcmVzc2x5IGFncmVlIHRoYXQgeW91ciB1c2Ugb2YsIG9yIGluYWJpbGl0eSB0byB1c2UsIHRoZSBzZXJ2aWNlIGlzIGF0IHlvdXIgc29sZSByaXNrLiBUaGUgc2VydmljZSBhbmQgYWxsIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyBkZWxpdmVyZWQgdG8geW91IHRocm91Z2ggdGhlIHNlcnZpY2UgYXJlIChleGNlcHQgYXMgZXhwcmVzc2x5IHN0YXRlZCBieSB1cykgcHJvdmlkZWQgJ2FzIGlzJyBhbmQgJ2FzIGF2YWlsYWJsZScgZm9yIHlvdXIgdXNlLCB3aXRob3V0IGFueSByZXByZXNlbnRhdGlvbiwgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIGFueSBraW5kLCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLCBpbmNsdWRpbmcgYWxsIGltcGxpZWQgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgbWVyY2hhbnRhYmxlIHF1YWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhciBwdXJwb3NlLCBkdXJhYmlsaXR5LCB0aXRsZSwgYW5kIG5vbi1pbmZyaW5nZW1lbnQuPGJyLz5cXHJcXG48YnIvPlxcclxcbkluIG5vIGNhc2Ugc2hhbGwgVGhlIFBpeGVsYXRlZCBQbGFuZXQsIG91ciBkaXJlY3RvcnMsIG9mZmljZXJzLCBlbXBsb3llZXMsIGFmZmlsaWF0ZXMsIGFnZW50cywgY29udHJhY3RvcnMsIGludGVybnMsIHN1cHBsaWVycywgc2VydmljZSBwcm92aWRlcnMgb3IgbGljZW5zb3JzIGJlIGxpYWJsZSBmb3IgYW55IGluanVyeSwgbG9zcywgY2xhaW0sIG9yIGFueSBkaXJlY3QsIGluZGlyZWN0LCBpbmNpZGVudGFsLCBwdW5pdGl2ZSwgc3BlY2lhbCwgb3IgY29uc2VxdWVudGlhbCBkYW1hZ2VzIG9mIGFueSBraW5kLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiBsb3N0IHByb2ZpdHMsIGxvc3QgcmV2ZW51ZSwgbG9zdCBzYXZpbmdzLCBsb3NzIG9mIGRhdGEsIHJlcGxhY2VtZW50IGNvc3RzLCBvciBhbnkgc2ltaWxhciBkYW1hZ2VzLCB3aGV0aGVyIGJhc2VkIGluIGNvbnRyYWN0LCB0b3J0IChpbmNsdWRpbmcgbmVnbGlnZW5jZSksIHN0cmljdCBsaWFiaWxpdHkgb3Igb3RoZXJ3aXNlLCBhcmlzaW5nIGZyb20geW91ciB1c2Ugb2YgYW55IG9mIHRoZSBzZXJ2aWNlIG9yIGFueSBwcm9kdWN0cyBwcm9jdXJlZCB1c2luZyB0aGUgc2VydmljZSwgb3IgZm9yIGFueSBvdGhlciBjbGFpbSByZWxhdGVkIGluIGFueSB3YXkgdG8geW91ciB1c2Ugb2YgdGhlIHNlcnZpY2Ugb3IgYW55IHByb2R1Y3QsIGluY2x1ZGluZywgYnV0IG5vdCBsaW1pdGVkIHRvLCBhbnkgZXJyb3JzIG9yIG9taXNzaW9ucyBpbiBhbnkgY29udGVudCwgb3IgYW55IGxvc3Mgb3IgZGFtYWdlIG9mIGFueSBraW5kIGluY3VycmVkIGFzIGEgcmVzdWx0IG9mIHRoZSB1c2Ugb2YgdGhlIHNlcnZpY2Ugb3IgYW55IGNvbnRlbnQgKG9yIHByb2R1Y3QpIHBvc3RlZCwgdHJhbnNtaXR0ZWQsIG9yIG90aGVyd2lzZSBtYWRlIGF2YWlsYWJsZSB2aWEgdGhlIHNlcnZpY2UsIGV2ZW4gaWYgYWR2aXNlZCBvZiB0aGVpciBwb3NzaWJpbGl0eS4gQmVjYXVzZSBzb21lIHN0YXRlcyBvciBqdXJpc2RpY3Rpb25zIGRvIG5vdCBhbGxvdyB0aGUgZXhjbHVzaW9uIG9yIHRoZSBsaW1pdGF0aW9uIG9mIGxpYWJpbGl0eSBmb3IgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIGluIHN1Y2ggc3RhdGVzIG9yIGp1cmlzZGljdGlvbnMsIG91ciBsaWFiaWxpdHkgc2hhbGwgYmUgbGltaXRlZCB0byB0aGUgbWF4aW11bSBleHRlbnQgcGVybWl0dGVkIGJ5IGxhdy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDE0IC0gSU5ERU1OSUZJQ0FUSU9OPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgYWdyZWUgdG8gaW5kZW1uaWZ5LCBkZWZlbmQgYW5kIGhvbGQgaGFybWxlc3MgVGhlIFBpeGVsYXRlZCBQbGFuZXQgYW5kIG91ciBwYXJlbnQsIHN1YnNpZGlhcmllcywgYWZmaWxpYXRlcywgcGFydG5lcnMsIG9mZmljZXJzLCBkaXJlY3RvcnMsIGFnZW50cywgY29udHJhY3RvcnMsIGxpY2Vuc29ycywgc2VydmljZSBwcm92aWRlcnMsIHN1YmNvbnRyYWN0b3JzLCBzdXBwbGllcnMsIGludGVybnMgYW5kIGVtcGxveWVlcywgaGFybWxlc3MgZnJvbSBhbnkgY2xhaW0gb3IgZGVtYW5kLCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leXPigJkgZmVlcywgbWFkZSBieSBhbnkgdGhpcmQtcGFydHkgZHVlIHRvIG9yIGFyaXNpbmcgb3V0IG9mIHlvdXIgYnJlYWNoIG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2Ugb3IgdGhlIGRvY3VtZW50cyB0aGV5IGluY29ycG9yYXRlIGJ5IHJlZmVyZW5jZSwgb3IgeW91ciB2aW9sYXRpb24gb2YgYW55IGxhdyBvciB0aGUgcmlnaHRzIG9mIGEgdGhpcmQtcGFydHkuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAxNSAtIFNFVkVSQUJJTElUWTwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuSW4gdGhlIGV2ZW50IHRoYXQgYW55IHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGlzIGRldGVybWluZWQgdG8gYmUgdW5sYXdmdWwsIHZvaWQgb3IgdW5lbmZvcmNlYWJsZSwgc3VjaCBwcm92aXNpb24gc2hhbGwgbm9uZXRoZWxlc3MgYmUgZW5mb3JjZWFibGUgdG8gdGhlIGZ1bGxlc3QgZXh0ZW50IHBlcm1pdHRlZCBieSBhcHBsaWNhYmxlIGxhdywgYW5kIHRoZSB1bmVuZm9yY2VhYmxlIHBvcnRpb24gc2hhbGwgYmUgZGVlbWVkIHRvIGJlIHNldmVyZWQgZnJvbSB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLCBzdWNoIGRldGVybWluYXRpb24gc2hhbGwgbm90IGFmZmVjdCB0aGUgdmFsaWRpdHkgYW5kIGVuZm9yY2VhYmlsaXR5IG9mIGFueSBvdGhlciByZW1haW5pbmcgcHJvdmlzaW9ucy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDE2IC0gVEVSTUlOQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblRoZSBvYmxpZ2F0aW9ucyBhbmQgbGlhYmlsaXRpZXMgb2YgdGhlIHBhcnRpZXMgaW5jdXJyZWQgcHJpb3IgdG8gdGhlIHRlcm1pbmF0aW9uIGRhdGUgc2hhbGwgc3Vydml2ZSB0aGUgdGVybWluYXRpb24gb2YgdGhpcyBhZ3JlZW1lbnQgZm9yIGFsbCBwdXJwb3Nlcy48YnIvPlxcclxcbjxici8+XFxyXFxuVGhlc2UgVGVybXMgb2YgU2VydmljZSBhcmUgZWZmZWN0aXZlIHVubGVzcyBhbmQgdW50aWwgdGVybWluYXRlZCBieSBlaXRoZXIgeW91IG9yIHVzLiBZb3UgbWF5IHRlcm1pbmF0ZSB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGF0IGFueSB0aW1lIGJ5IG5vdGlmeWluZyB1cyB0aGF0IHlvdSBubyBsb25nZXIgd2lzaCB0byB1c2Ugb3VyIFNlcnZpY2VzLCBvciB3aGVuIHlvdSBjZWFzZSB1c2luZyBvdXIgc2l0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuSWYgaW4gb3VyIHNvbGUganVkZ21lbnQgeW91IGZhaWwsIG9yIHdlIHN1c3BlY3QgdGhhdCB5b3UgaGF2ZSBmYWlsZWQsIHRvIGNvbXBseSB3aXRoIGFueSB0ZXJtIG9yIHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLCB3ZSBhbHNvIG1heSB0ZXJtaW5hdGUgdGhpcyBhZ3JlZW1lbnQgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UgYW5kIHlvdSB3aWxsIHJlbWFpbiBsaWFibGUgZm9yIGFsbCBhbW91bnRzIGR1ZSB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBkYXRlIG9mIHRlcm1pbmF0aW9uOyBhbmQvb3IgYWNjb3JkaW5nbHkgbWF5IGRlbnkgeW91IGFjY2VzcyB0byBvdXIgU2VydmljZXMgKG9yIGFueSBwYXJ0IHRoZXJlb2YpLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTcgLSBFTlRJUkUgQUdSRUVNRU5UPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGUgZmFpbHVyZSBvZiB1cyB0byBleGVyY2lzZSBvciBlbmZvcmNlIGFueSByaWdodCBvciBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBzaGFsbCBub3QgY29uc3RpdHV0ZSBhIHdhaXZlciBvZiBzdWNoIHJpZ2h0IG9yIHByb3Zpc2lvbi48YnIvPlxcclxcbjxici8+XFxyXFxuVGhlc2UgVGVybXMgb2YgU2VydmljZSBhbmQgYW55IHBvbGljaWVzIG9yIG9wZXJhdGluZyBydWxlcyBwb3N0ZWQgYnkgdXMgb24gdGhpcyBzaXRlIG9yIGluIHJlc3BlY3QgdG8gVGhlIFNlcnZpY2UgY29uc3RpdHV0ZXMgdGhlIGVudGlyZSBhZ3JlZW1lbnQgYW5kIHVuZGVyc3RhbmRpbmcgYmV0d2VlbiB5b3UgYW5kIHVzIGFuZCBnb3Zlcm4geW91ciB1c2Ugb2YgdGhlIFNlcnZpY2UsIHN1cGVyc2VkaW5nIGFueSBwcmlvciBvciBjb250ZW1wb3JhbmVvdXMgYWdyZWVtZW50cywgY29tbXVuaWNhdGlvbnMgYW5kIHByb3Bvc2Fscywgd2hldGhlciBvcmFsIG9yIHdyaXR0ZW4sIGJldHdlZW4geW91IGFuZCB1cyAoaW5jbHVkaW5nLCBidXQgbm90IGxpbWl0ZWQgdG8sIGFueSBwcmlvciB2ZXJzaW9ucyBvZiB0aGUgVGVybXMgb2YgU2VydmljZSkuPGJyLz5cXHJcXG48YnIvPlxcclxcbkFueSBhbWJpZ3VpdGllcyBpbiB0aGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBzaGFsbCBub3QgYmUgY29uc3RydWVkIGFnYWluc3QgdGhlIGRyYWZ0aW5nIHBhcnR5Ljxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTggLSBHT1ZFUk5JTkcgTEFXPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBhbnkgc2VwYXJhdGUgYWdyZWVtZW50cyB3aGVyZWJ5IHdlIHByb3ZpZGUgeW91IFNlcnZpY2VzIHNoYWxsIGJlIGdvdmVybmVkIGJ5IGFuZCBjb25zdHJ1ZWQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBsYXdzIG9mIDI1MTUgNHRoIEF2ZSwgU2VhdHRsZSwgV0EsIDk4MTIxLCBVbml0ZWQgU3RhdGVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTkgLSBDSEFOR0VTIFRPIFRFUk1TIE9GIFNFUlZJQ0U8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBjYW4gcmV2aWV3IHRoZSBtb3N0IGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgVGVybXMgb2YgU2VydmljZSBhdCBhbnkgdGltZSBhdCB0aGlzIHBhZ2UuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byB1cGRhdGUsIGNoYW5nZSBvciByZXBsYWNlIGFueSBwYXJ0IG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYnkgcG9zdGluZyB1cGRhdGVzIGFuZCBjaGFuZ2VzIHRvIG91ciB3ZWJzaXRlLiBJdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIG91ciB3ZWJzaXRlIHBlcmlvZGljYWxseSBmb3IgY2hhbmdlcy4gWW91ciBjb250aW51ZWQgdXNlIG9mIG9yIGFjY2VzcyB0byBvdXIgd2Vic2l0ZSBvciB0aGUgU2VydmljZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgYW55IGNoYW5nZXMgdG8gdGhlc2UgVGVybXMgb2YgU2VydmljZSBjb25zdGl0dXRlcyBhY2NlcHRhbmNlIG9mIHRob3NlIGNoYW5nZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAyMCAtIENPTlRBQ1QgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblF1ZXN0aW9ucyBhYm91dCB0aGUgVGVybXMgb2YgU2VydmljZSBzaG91bGQgYmUgc2VudCB0byB1cyBhdCBoZWxsb0B0aGVwaXhlbGF0ZWRwbGFuZXQuY29tLjxici8+PGJyLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKHdvcmtzaG9wRGV0YWlscy5pbWFnZUxpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIlxcclxcbiAgICAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIndzZC1uYW1lXFxcIj57e3dvcmtzaG9wRGV0YWlscy5uYW1lfX08L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJkZXRhaWxzLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWwtdGFic1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLVRhYiBoZWFkaW5ncy0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRhYmxpbmtzXFxcIiAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFiczsgbGV0IGk9aW5kZXg7XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogdGFiLnNob3dUYWJ9XFxcIiAoY2xpY2spPVxcXCJvcGVuVGFicyhpKVxcXCI+e3t0YWIubGFiZWx9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1EZXNjcmlwdGlvbiB0YWItLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJ7e3RhYnNbMF0ubGFiZWx9fVxcXCIgW2hpZGRlbl09XFxcIiF0YWJzWzBdLnNob3dUYWJcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzPnt7dGFic1swXS5sYWJlbH19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF09XFxcIndvcmtzaG9wRGV0YWlscy5kZXNjcmlwdGlvblxcXCI+PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1HYWxsZXJ5IHRhYi0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInt7dGFic1sxXS5sYWJlbH19XFxcIiBbaGlkZGVuXT1cXFwiIXRhYnNbMV0uc2hvd1RhYlxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDM+e3t0YWJzWzFdLmxhYmVsfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJnYWxsZXJ5LWltYWdlIGhvdmVyLXNoYWRvdyBjdXJzb3JcXFwiICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlc0xpbms7bGV0IGkgPSBpbmRleFxcXCIgW3NyY109XFxcImltYWdlLmltYWdlTGlua1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcIm9wZW5Nb2RhbChpKzEpXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1QaG90b2dyYXBoZXIgdGFiLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzJdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1syXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMz57e3RhYnNbMl0ubGFiZWx9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBob3RvZ3JhcGhlci1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgcGhvdG9ncmFwaGVyIG9mIHdvcmtzaG9wRGV0YWlscy5waG90b2dyYXBoZXJzO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLXBob3RvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlLWltZ1xcXCIgW3NyY109XFxcInRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlSW1hZ2VVcmwocGhvdG9ncmFwaGVyLnByb2ZpbGVQaG90b0xpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5maXJzdE5hbWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5sYXN0TmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbC1sb2NhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twaG90b2dyYXBoZXIubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYnNpdGUtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwie3twaG90b2dyYXBoZXI/LndlYnNpdGVMaW5rfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZXh0ZXJuYWwtbGlua1xcXCI+PC9pPiBXZWJzaXRlPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cXFwicGhvdG9ncmFwaGVyLm1vcmVJbmZvcm1hdGlvblxcXCI+PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPCEtLVdvcmtzaG9wIGhpZ2hsaWdodHMtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZ2hsaWdodHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPldvcmtzaG9wIExpbms8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJ7e3dvcmtzaG9wRGV0YWlscy5saW5rfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua1xcXCI+PC9pPiBXb3Jrc2hvcCBsaW5rXFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkxvY2F0aW9uPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+e3t3b3Jrc2hvcERldGFpbHMubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLXByaWNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPlByaWNlIFJhbmdlPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZFxcXCI+PC9pPiA8c3BhbiAqbmdJZj1cXFwid29ya3Nob3BEZXRhaWxzLm1pbkNvc3QgIT09IHdvcmtzaG9wRGV0YWlscy5tYXhDb3N0XFxcIj57e3dvcmtzaG9wRGV0YWlscy5taW5Db3N0fX0gLSA8L3NwYW4+e3t3b3Jrc2hvcERldGFpbHMubWF4Q29zdH19XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWRhdGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkRhdGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZXMtaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGRldGFpbCBvZiB3b3Jrc2hvcERldGFpbHMubXVsdGlXb3Jrc2hvcERldGFpbHM7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmZvcm1hdERhdGUoZGV0YWlsLnN0YXJ0RGF0ZSl9fSAtIHt7dGhpcy5mb3JtYXREYXRlKGRldGFpbC5lbmREYXRlKX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8IS0tSW1hZ2UgZ2FsbGVyeSBtb2RhbC0tPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGUtbW9kYWwnOiBoaWRlTW9kYWx9XFxcIiBjbGFzcz1cXFwiaW1hZ2UtbW9kYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSBjdXJzb3JcXFwiIChjbGljayk9XFxcImNsb3NlTW9kYWwoKVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZS1tb2RhbC1jb250ZW50XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZXNMaW5rO2xldCBpID0gaW5kZXhcXFwiIGNsYXNzPVxcXCJzbGlkZXNcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRlSW1hZ2UnOiBpbWFnZS5oaWRlSW1hZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcImltYWdlLmltYWdlTGlua1xcXCIgY2xhc3M9XFxcIm1vZGFsLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInByZXZcXFwiIChjbGljayk9XFxcInBsdXNTbGlkZXMoLTEpXFxcIj4mIzEwMDk0OzwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmV4dFxcXCIgKGNsaWNrKT1cXFwicGx1c1NsaWRlcygxKVxcXCI+JiMxMDA5NTs8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVycy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1maWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPGRyb3Bkb3duIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlQ2F0ZWdvcnlMaXN0KCRldmVudClcXFwiIFtkYXRhTW9kZWxdPVxcXCJjYXRlZ29yaWVzXFxcIj48L2Ryb3Bkb3duPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYXV0b2NvbXBsZXRlLWZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8YXV0b2NvbXBsZXRlIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlTG9jYXRpb24oJGV2ZW50KVxcXCI+PC9hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlLXBpY2tlclxcXCI+XFxyXFxuICAgICAgICA8ZGF0ZS1waWNrZXIgKHNlbGVjdGVkRnJvbUNoYW5nZWQpPVxcXCJnZXRGcm9tRGF0ZSgkZXZlbnQpXFxcIiAoc2VsZWN0ZWRUb0NoYW5nZWQpPVxcXCJnZXRUb0RhdGUoJGV2ZW50KVxcXCI+PC9kYXRlLXBpY2tlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgI21pblByaWNlSW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjEwMFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1pbi4gcHJpY2VcXFwiIChibHVyKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiXFxyXFxuICAgICAgICAgICAgKG9uaW5wdXQpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uY2hhbmdlKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICBbdmFsdWVdPVxcXCJtaW5QcmljZVZhbHVlXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgICAgIDxpbnB1dCAjbWF4UHJpY2VJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMTAwXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWF4LiBwcmljZVxcXCIgKGJsdXIpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICAob25pbnB1dCk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIiAob25jaGFuZ2UpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIlxcclxcbiAgICAgICAgICAgIFt2YWx1ZV09XFxcIm1heFByaWNlVmFsdWVcXFwiXFxyXFxuICAgICAgICAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2V0LWxpc3QtYnRuXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVGaWx0ZXIoKVxcXCI+PHNwYW4+RmlsdGVyPC9zcGFuPiAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbHRlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwid29ya3Nob3AtbGlzdFxcXCI+XFxyXFxuICAgIDxkaXYgKm5nSWY9XFxcImFzeW5jRGF0YT8ubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwiZW50aXR5XFxcIiAqbmdGb3I9XFxcImxldCBkYXRhIG9mIGFzeW5jRGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW2hyZWZdPVxcXCJjcmVhdGVXb3Jrc2hvcERldGFpbHNVcmwoZGF0YS53b3Jrc2hvcElkLCBkYXRhLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBjbGFzcz1cXFwiaW1hZ2VcXFwiIFtkYXRhXT1cXFwidGhpcy5zYW5pdGl6ZVVybCh0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKGRhdGEuaW1hZ2VMaW5rKSlcXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUxvY2FsSW1hZ2VVcmwoZGF0YS5pbWFnZUxpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm5hbWUgdHJ1bmNhdGVcXFwiIHRpdGxlPVxcXCJ7eyBkYXRhLm5hbWUgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGEubmFtZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2RhdGEubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy5mb3JtYXREYXRlKGRhdGEuc3RhcnREYXRlRmlyc3QpfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPi08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPiB7e3RoaXMuZm9ybWF0RGF0ZShkYXRhLmVuZERhdGVGaXJzdCl9fSA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0ID09IGRhdGEubWF4Q29zdFxcXCI+e3tkYXRhLmNvc3RDdXJyZW5jeX19IHt7ZGF0YS5taW5Db3N0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0IDwgZGF0YS5tYXhDb3N0XFxcIj57e2RhdGEuY29zdEN1cnJlbmN5fX0ge3tkYXRhLm1pbkNvc3R9fS17e2RhdGEubWF4Q29zdH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcIml0ZW1zUGVyUGFnZSA+IDRcXFwiIGNsYXNzPVxcXCJ3cy1wYWdlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgKm5nSWY9XFxcInBhZ2VOdW1iZXJzXFxcIiBbbmdDbGFzc109XFxcInsnZGlzYWJsZWQnOiBhY3RpdmVQYWdlIDw9MSB9XFxcIiBbaHJlZl09XFxcImNyZWF0ZVBhZ2VMaW5rKGFjdGl2ZVBhZ2UtMSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48c3Bhbj5QcmV2aW91czwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZS1wYWdlJzogYWN0aXZlUGFnZSA9PSBwYWdlfVxcXCIgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlTnVtYmVycztcXFwiIFtocmVmXT1cXFwiY3JlYXRlUGFnZUxpbmsocGFnZSlcXFwiPnt7cGFnZX19PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdlLW51bWJlcnNcXFwiICpuZ0lmPVxcXCJwYWdlTnVtYmVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2Rpc2FibGVkJzogYWN0aXZlUGFnZSA9PSBwYWdlTnVtYmVycy5sZW5ndGggfVxcXCIgW2hyZWZdPVxcXCJjcmVhdGVQYWdlTGluayhhY3RpdmVQYWdlLTErMilcXFwiPjxzcGFuPk5leHQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNoZXZyb24td3JhcHBlclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0LW1zZ1xcXCIgKm5nSWY9XFxcImFzeW5jRGF0YT8ubGVuZ3RoID09IDBcXFwiPlxcclxcbiAgICAgICAgU29ycnksIHdlIGZvdW5kIDAgcmVzdWx0cy4gUGxlYXNlIHRyeSBkaWZmZXJlbnQgZmlsdGVycy5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8bmF2aS1iYXIgW3Nob3dGaWx0ZXJzXT1cXFwidHJ1ZVxcXCIgKGZpbHRlcnNEcm9wZG93blRvZ2dsZSk9XFxcInRvZ2dsZUZpbHRlckRyb3Bkb3duKCRldmVudClcXFwiPjwvbmF2aS1iYXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlcnNcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRlRmlsdGVyJzogaGlkZUZpbHRlcn1cXFwiIGlkPVxcXCJmaWx0ZXJzXFxcIj5cXHJcXG4gICAgICAgIDx3b3Jrc2hvcC1maWx0ZXIgKG1pblByaWNlRmlsdGVyQ2hhbmdlZCk9XFxcInNldE1pblByaWNlKCRldmVudClcXFwiIChtYXhQcmljZUZpbHRlckNoYW5nZWQpPVxcXCJzZXRNYXhQcmljZSgkZXZlbnQpXFxcIiAoZnJvbURhdGVDaGFuZ2VkKT1cXFwic2V0RnJvbURhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAodG9EYXRlQ2hhbmdlZCk9XFxcInNldFRvRGF0ZSgkZXZlbnQpXFxcIiAobG9jYXRpb25GaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TG9jYXRpb25JZExpc3QoJGV2ZW50KVxcXCIgKGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCk9XFxcInNldENhdGVnb3J5TGlzdCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgIChhcHBseUZpbHRlcnMpPVxcXCJ0b2dnbGVGaWx0ZXIoJGV2ZW50KVxcXCI+PC93b3Jrc2hvcC1maWx0ZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgPHdvcmtzaG9wcy1saXN0IFthY3RpdmVQYWdlXT1cXFwicGFnZU51bWJlclxcXCI+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fXCJcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvbXByZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9hcnJheVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCJcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvZnVuY3Rpb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbWFwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCJcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvbnVtYmVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbnVtYmVyXCJcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9vYmplY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIlxuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWludFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSAxMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc2V0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc2V0XCJcbi8vIG1vZHVsZSBpZCA9IDEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zdHJpbmdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIlxuLy8gbW9kdWxlIGlkID0gMTIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczcvcmVmbGVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIlxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDEyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZzItcGFnaW5hdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm5nMi1wYWdpbmF0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anNcIlxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCJcbi8vIG1vZHVsZSBpZCA9IDEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCJcbi8vIG1vZHVsZSBpZCA9IDEzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCJcbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci90b1Byb21pc2VcIlxuLy8gbW9kdWxlIGlkID0gMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=