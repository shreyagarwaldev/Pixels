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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(21);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angulartics2__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angulartics2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angulartics2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__(130);
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
        if (!startDate) {
            startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        if (!endDate) {
            endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        var url = "/workshops/" + page + "?startDate=" + startDate + "&endDate=" + endDate;
        if (minPrice) {
            url += "&minPrice=" + minPrice;
        }
        if (maxPrice) {
            url += "&maxPrice=" + maxPrice;
        }
        if (locations) {
            url += "&locations=" + locations;
        }
        if (categories) {
            url += "&categories=" + categories;
        }
        return url;
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
        if (minPrice) {
            this.minPriceValue = minPrice;
        }
        else {
            this.minPriceValue = null;
        }
        if (maxPrice) {
            this.maxPriceValue = maxPrice;
        }
        else {
            this.maxPriceValue = null;
        }
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
                var flag = true;
                for (var i = 0; i < loc.length; i++) {
                    if (loc[i].id === +locations) {
                        flag = false;
                        _this.autocompleteChildComp.select(loc[i].name);
                    }
                }
                if (flag) {
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
        var _this = this;
        this.angulartics2.eventTrack.next({ action: 'LocationFilterEvent', properties: { category: 'WorkshopFilterComponent' } });
        var flag = true;
        this.workshopRepository.getLocations().then(function (loc) {
            for (var i = 0; i < loc.length; i++) {
                if (loc[i].name === value) {
                    flag = false;
                    _this.locationFilterChanged.emit(loc[i].id);
                }
            }
        });
        if (flag) {
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
        var today = new Date();
        if (!this.startDate) {
            this.startDate = today.getFullYear().toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        if (!this.endDate) {
            this.endDate = (today.getFullYear() + 10).toString() + "/" + (today.getMonth() + 1).toString() + "/" + today.getDate().toString();
        }
        this.workshopsFilterChildComp.setValuesFromParameters(this.minPrice, this.maxPrice, this.categoryList, this.locationIdList, this.startDate, this.endDate);
    };
    WorkshopsComponent.prototype.ngOnInit = function () {
        this.setParameters();
        this.updateUrl();
    };
    WorkshopsComponent.prototype.createUrl = function () {
        var url = "/workshops/" + this.pageNumber + "?startDate=" + this.startDate + "&endDate=" + this.endDate;
        if (this.minPrice) {
            url += "&minPrice=" + this.minPrice;
        }
        if (this.maxPrice) {
            url += "&maxPrice=" + this.maxPrice;
        }
        if (this.locationIdList) {
            url += "&locations=" + this.locationIdList;
        }
        if (this.categoryList) {
            url += "&categories=" + this.categoryList;
        }
        return url;
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
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
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
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
        }
    };
    WorkshopsComponent.prototype.setLocationIdList = function (locationIdList) {
        if (locationIdList != this.locationIdList) {
            this.locationIdList = locationIdList;
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
        }
    };
    WorkshopsComponent.prototype.setCategoryList = function (category) {
        if (category != this.categoryList) {
            this.categoryList = category;
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
        }
    };
    WorkshopsComponent.prototype.setMinPrice = function (minPrice) {
        if (this.minPrice != minPrice) {
            this.minPrice = minPrice;
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
        }
    };
    WorkshopsComponent.prototype.setMaxPrice = function (maxPrice) {
        if (this.maxPrice != maxPrice) {
            this.maxPrice = maxPrice;
            this.pageNumber = 1;
            this.router.navigateByUrl(this.createUrl());
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
var __universal__ = __webpack_require__(105);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(106);
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

module.exports = ".suggestions {\n  z-index: 99;\n  width: auto;\n  background-color: white;\n  box-shadow: 0 0 0.7px grey;\n  position: absolute;\n  color: #15424E;\n  text-align: left;\n  left: 0; }\n  .suggestions ul {\n    padding: 0;\n    margin: 1rem;\n    max-height: 30rem;\n    overflow: scroll; }\n  .suggestions li {\n    list-style: none;\n    cursor: pointer;\n    padding: .5rem;\n    white-space: nowrap;\n    width: auto; }\n\n.dropdown-container {\n  margin: 1.4rem 1rem 1rem 0;\n  height: 3.6rem;\n  width: 13.5rem; }\n  .dropdown-container button {\n    width: 100%;\n    height: 6rem;\n    border: none;\n    background-color: transparent; }\n\n.filter-input {\n  color: #333333;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  border: none;\n  padding-left: .5rem; }\n\n@media (max-width: 955px) {\n  .suggestions {\n    margin-left: 1rem;\n    width: 100%; }\n    .suggestions li {\n      white-space: inherit; }\n  .filter-input {\n    width: 70%; }\n  .dropdown-container {\n    margin: 0;\n    width: 100%; } }\n"

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

module.exports = ".hero {\n  width: 100%; }\n\n.header {\n  background-image: url(\"https://pixelatedplanetcdn.azureedge.net/img/yosemite.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n.view-all {\n  font-size: 2rem;\n  text-decoration: none;\n  color: #26181D; }\n\n.main-page-container {\n  height: 100%;\n  min-height: 100%; }\n\n.view-all-container {\n  text-align: center; }\n\n.main-heading {\n  font-size: 7rem;\n  color: white; }\n\n.sub-heading {\n  opacity: 1;\n  color: white;\n  top: 1rem;\n  position: relative; }\n\n.content {\n  position: relative;\n  top: 10rem; }\n\nheader {\n  position: absolute;\n  top: 30%;\n  width: 100%; }\n\n.btn {\n  color: white;\n  background-color: #26181D;\n  top: 3rem;\n  position: relative;\n  border: none;\n  border-radius: 300px;\n  width: 30rem;\n  font-size: 2rem;\n  cursor: initial;\n  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif; }\n\nh1.ws-heading {\n  color: #26181D;\n  text-align: center;\n  font-family: 'HurmeGeometricSans3-Regular', Helvetica, Arial, sans-serif; }\n\n#workshops {\n  padding-top: 5rem; }\n\n@media (max-width: 955px) {\n  .main-heading {\n    font-size: 4.5rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 25rem;\n    font-size: 2.2rem; } }\n\n@media (max-width: 400px) {\n  .main-heading {\n    font-size: 3.8rem; }\n  header {\n    top: 30%; }\n  .btn {\n    top: 3rem;\n    width: 18rem;\n    font-size: 1.6rem; } }\n"

/***/ },
/* 74 */
/***/ function(module, exports) {

module.exports = ".top-bar-title {\n  font-family: 'Coiny', cursive;\n  font-size: 22px;\n  color: #ffffff; }\n\n.nav-menu a {\n  color: #ffffff; }\n\n.company-icon {\n  float: left;\n  margin-left: 2rem;\n  margin-top: 1.1rem;\n  text-decoration: none; }\n\n.company-name {\n  display: inline-block;\n  padding-top: 1rem;\n  margin-left: .5rem;\n  color: white; }\n\n.fa-bars {\n  border: 1px solid white;\n  padding-left: .4rem;\n  padding-right: .4rem;\n  border-radius: 4px; }\n\n.filter-header {\n  display: none; }\n\n.navbar-toggle {\n  display: none; }\n\nnav {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  height: 6rem;\n  background-color: #26181D;\n  border: none;\n  font-size: 1.2rem; }\n  nav img {\n    width: 3rem;\n    height: 3rem; }\n  nav .navbar-nav a {\n    background-color: transparent;\n    color: white; }\n  nav ul {\n    margin-top: .4rem;\n    font-size: 1.16rem;\n    font-family: 'Comfortaa', cursive; }\n\n@media (max-width: 955px) {\n  nav {\n    height: 5rem; }\n    nav ul {\n      width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white; }\n  .filter-header {\n    display: inline-block;\n    color: white;\n    margin-top: 1rem;\n    padding-left: 1rem;\n    background: transparent;\n    margin-left: 2rem; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .hideNavbar {\n    display: none; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-nav > li {\n    float: none !important; } }\n\n@media (min-width: 955px) and (max-width: 1140px) {\n  nav ul {\n    width: 100%; }\n  .hideNavbar {\n    display: none; }\n  .navbar-collapse {\n    background-color: #26181D;\n    text-align: center;\n    border-top: 1px solid transparent;\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n    width: 100%;\n    position: absolute;\n    top: 5rem; }\n  .navbar-header {\n    float: none;\n    width: 100%; }\n  .navbar-toggle {\n    display: block;\n    padding-bottom: 0;\n    color: white;\n    margin-top: 1.5rem;\n    float: right; }\n  .navbar-collapse.collapse {\n    display: none !important; }\n  .navbar-nav {\n    float: none !important;\n    margin-top: 7.5px; }\n  .navbar-nav > li {\n    float: none !important; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .collapse.in {\n    display: block !important; } }\n"

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

module.exports = ".detail-img {\n  height: 40rem;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.profile-img {\n  width: 12rem;\n  height: 12rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 2rem; }\n\n.profile-photo {\n  float: left; }\n\n.photographer-name h1 {\n  font-size: 2.5rem;\n  color: #73656A; }\n\n.photographer-information h4 {\n  margin-top: 0; }\n\n.detail-location {\n  color: #73656A;\n  opacity: 0.8;\n  margin-bottom: .5rem; }\n\n.website-link {\n  text-decoration: none;\n  margin-bottom: 1rem; }\n\n/* Style the tab */\ndiv.tab {\n  overflow: hidden;\n  margin-top: 5rem;\n  width: 100%; }\n  div.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n    border-bottom: 3px solid transparent;\n    font-size: 2rem;\n    color: #73656A; }\n    div.tab button.active {\n      border-bottom: 3px solid #73656A; }\n\n/* Style the tab content */\n.tabcontent {\n  border-top: none;\n  text-align: left;\n  padding-left: 2rem;\n  height: 40rem;\n  overflow: scroll;\n  width: 100%;\n  background-color: rgba(239, 230, 233, 0.1); }\n\n.detail-tabs {\n  text-align: center;\n  width: 65%;\n  margin-left: 4rem;\n  left: 0; }\n\n.details-container {\n  position: relative; }\n\n.day-wrapper,\n.photographer-information {\n  padding-top: 2rem; }\n\n.day-wrapper .location,\n.photographer-information h4 {\n  color: #73656A; }\n\n#Description p {\n  padding-top: 2rem;\n  margin-right: .4rem; }\n\n#Description h3 {\n  margin-top: 5%; }\n\n#Gallery {\n  text-align: center; }\n  #Gallery img {\n    display: inline-block;\n    vertical-align: middle;\n    width: 35rem;\n    height: 28rem;\n    margin: 2rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-filter: sepia(20%);\n            filter: sepia(20%); }\n\n.modal-image {\n  position: absolute;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.wsd-name {\n  font-size: 3.5rem;\n  color: #73656A;\n  text-align: center;\n  margin-top: 3rem;\n  font-weight: 500; }\n\n.highlights {\n  position: absolute;\n  display: inline-block;\n  margin-top: 10rem;\n  padding-left: 5rem;\n  width: 25%;\n  top: 0;\n  right: 0; }\n  .highlights a {\n    color: #73656A; }\n  .highlights div {\n    font-size: 2rem;\n    font-weight: 300;\n    color: #73656A; }\n    .highlights div i {\n      color: #73656A; }\n\n.image-modal {\n  position: fixed;\n  z-index: 1;\n  /* padding-top: 5rem; */\n  left: 0;\n  top: 5rem;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.9); }\n\n/* Modal Content */\n.image-modal-content {\n  margin: 0;\n  padding: 0;\n  position: relative; }\n\n.hide-modal {\n  display: none; }\n\n/* The Close Button */\n.close {\n  color: white;\n  opacity: 1;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  font-size: 35px;\n  font-weight: bold;\n  z-index: 99; }\n\n.close:hover,\n.close:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer; }\n\n.hideImage {\n  display: none; }\n\n.cursor {\n  cursor: pointer; }\n\n/* Next & previous buttons */\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none; }\n\n/* Position the \"next button\" to the right */\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px; }\n\n.prev {\n  left: 0; }\n\n.slides {\n  text-align: center;\n  position: relative;\n  height: 100%;\n  line-height: 100%; }\n\n/* On hover, add a black background color with a little bit see-through */\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n  text-decoration: none; }\n\n.active {\n  opacity: 1; }\n\n.gallery-image.hover-shadow {\n  transition: 0.3s; }\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n@media (max-width: 955px) {\n  #Gallery {\n    padding-left: 0; }\n    #Gallery img {\n      width: 28rem;\n      height: 20rem; }\n  div.tab {\n    text-align: center; }\n    div.tab button {\n      width: 50%;\n      display: block;\n      margin: auto; }\n  .tabContent {\n    text-align: center; }\n    .tabContent p {\n      text-align: justify;\n      padding: 2rem; }\n  .detail-tabs {\n    padding: 0 2rem;\n    display: inline-block;\n    width: 100%;\n    margin-left: 0; }\n  .highlights {\n    margin-top: 2rem;\n    width: 100%;\n    text-align: center;\n    padding-left: 0;\n    position: inherit; } }\n"

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

module.exports = "<div class=\"main-page-container\">\r\n    <navi-bar [showFilters]=\"false\"></navi-bar>\r\n    <div class=\"header\">\r\n        <header class=\"masthead\">\r\n            <div class=\"header-content\">\r\n                <div class=\"header-content-inner\">\r\n                    <div class=\"main-heading\" id=\"homeHeading\">Pixelated Planet</div>\r\n                    <!-- <div class=\"sub-heading\">It is a long established fact that a reader will be distracted by the readable content of a page when\r\n                        looking at its layout.</div> -->\r\n                    <a class=\"btn btn-default btn-lg\" href=\"#workshops\" angulartics2On=\"click\" angularticsEvent=\"UpcomingEventsClick\" angularticsCategory=\"HomePageInteraction\">Upcoming Workshops</a>\r\n                </div>\r\n            </div>\r\n        </header>\r\n    </div>\r\n\r\n    <section id=\"workshops\">\r\n        <h1 class=\"ws-heading\">\r\n            Workshops\r\n        </h1>\r\n        <workshops-list></workshops-list>\r\n        <div class=\"view-all-container\">\r\n            <a href=\"/workshops\" class=\"view-all\" angulartics2On=\"click\" angularticsEvent=\"ViewAllEventsClick\" angularticsCategory=\"HomePageInteraction\"><span>View all</span>  <i class=\"fa fa-arrow-circle-right\" aria-hidden=\"true\"></i></a>\r\n        </div>\r\n    </section>\r\n\r\n    <div class=\"footer\">\r\n        <footer></footer>\r\n    </div>\r\n</div>"

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

module.exports = "<navi-bar></navi-bar>\r\n\r\n<div class=\"header-img\">\r\n    <img class=\"detail-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(workshopDetails.imageLink)\" alt=\"workshop image\"\r\n    />\r\n</div>\r\n\r\n<div class=\"wsd-name\">{{workshopDetails.name}}</div>\r\n\r\n<div class=\"details-container\">\r\n    <div>\r\n        <div class=\"detail-tabs\">\r\n\r\n            <!--Tab headings-->\r\n            <div class=\"tab\">\r\n                <button class=\"tablinks\" *ngFor=\"let tab of tabs; let i=index;\" [ngClass]=\"{'active': tab.showTab}\" (click)=\"openTabs(i)\">{{tab.label}}</button>\r\n            </div>\r\n\r\n            <!--Description tab-->\r\n            <div id=\"{{tabs[0].label}}\" [hidden]=\"!tabs[0].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[0].label}}</h3>\r\n                <p [innerHTML]=\"workshopDetails.description\"></p>\r\n            </div>\r\n\r\n            <!--Gallery tab-->\r\n            <div id=\"{{tabs[1].label}}\" [hidden]=\"!tabs[1].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[1].label}}</h3>\r\n                <img class=\"gallery-image hover-shadow cursor\" *ngFor=\"let image of imagesLink;let i = index\" [src]=\"image.imageLink\" alt=\"workshop image\"\r\n                    (click)=\"openModal(i+1)\" />\r\n            </div>\r\n\r\n            <!--Photographer tab-->\r\n            <div id=\"{{tabs[2].label}}\" [hidden]=\"!tabs[2].showTab\" class=\"tabcontent\">\r\n                <h3>{{tabs[2].label}}</h3>\r\n                <div class=\"photographer-information\" *ngFor=\"let photographer of workshopDetails.photographers;\">\r\n                    <div class=\"profile-photo\">\r\n                        <img class=\"profile-img\" [src]=\"this.workshopRepository.globalConstants.resolveImageUrl(photographer.profilePhotoLink)\" alt=\"workshop image\"\r\n                        />\r\n                    </div>\r\n                    <h4>\r\n                        <span>{{photographer.firstName}}</span>\r\n                        <span>{{photographer.lastName}}</span>\r\n                    </h4>\r\n                    <div class=\"detail-location\">\r\n                        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\r\n                        <span>{{photographer.locationName}}</span>\r\n                    </div>\r\n                    <div class=\"website-link\">\r\n                        <a href=\"{{photographer?.websiteLink}}\" target=\"_blank\"><i class=\"fa fa-external-link\"></i> Website</a>\r\n                    </div>\r\n                    <p [innerHTML]=\"photographer.moreInformation\"></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Workshop highlights-->\r\n        <div class=\"highlights\">\r\n            <div class=\"wsd-link\">\r\n                <h4 class=\"highlight-headings\">Workshop Link</h4>\r\n                <a href=\"{{workshopDetails.link}}\" target=\"_blank\"><i class=\"fa fa-link\"></i> Workshop link\r\n        </a>\r\n            </div>\r\n            <div class=\"wsd-location\">\r\n                <h4 class=\"highlight-headings\">Location</h4>\r\n                <i class=\"fa fa-map-marker\"></i>\r\n                <span>{{workshopDetails.locationName}}</span>\r\n            </div>\r\n            <div class=\"wsd-price\">\r\n                <h4 class=\"highlight-headings\">Price Range</h4>\r\n                <i class=\"fa fa-usd\"></i> <span *ngIf=\"workshopDetails.minCost !== workshopDetails.maxCost\">{{workshopDetails.minCost}} - </span>{{workshopDetails.maxCost}}\r\n            </div>\r\n            <div class=\"wsd-dates\">\r\n                <h4 class=\"highlight-headings\">Dates</h4>\r\n                <div class=\"dates-information\" *ngFor=\"let detail of workshopDetails.multiWorkshopDetails;\">\r\n                    <div>\r\n                        <i class=\"fa fa-calendar\"></i>\r\n                        <span>{{this.formatDate(detail.startDate)}} - {{this.formatDate(detail.endDate)}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Image gallery modal-->\r\n        <div id=\"myModal\" [ngClass]=\"{'hide-modal': hideModal}\" class=\"image-modal\">\r\n            <span class=\"close cursor\" (click)=\"closeModal()\">&times;</span>\r\n            <div class=\"image-modal-content\">\r\n\r\n                <div *ngFor=\"let image of imagesLink;let i = index\" class=\"slides\" [ngClass]=\"{'hideImage': image.hideImage}\">\r\n                    <img [src]=\"image.imageLink\" class=\"modal-image\">\r\n                </div>\r\n            </div>\r\n\r\n            <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n            <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"footer\">\r\n            <footer></footer>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = __webpack_require__(22);


/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */
/***/ function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTczNGYyNDFjMTgzNjY5MTQ4OTEiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiIiwid2VicGFjazovLy8uL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL2RpcmVjdGl2ZXMvbXktZGF0ZS1waWNrZXIuZm9jdXMuZGlyZWN0aXZlLnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9pbnRlcmZhY2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvc2VydmljZXMvbXktZGF0ZS1waWNrZXIubG9jYWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2RhdGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L21hdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9vYmplY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWdleHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zeW1ib2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5nMi1wYWdpbmF0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL2VtcHR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzlEQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUl4QztJQWNJO1FBSFEsZ0JBQVcsR0FBK0IsRUFBRSxDQUFDO1FBQzdDLG9CQUFlLEdBQThCLEVBQUUsQ0FBQztRQUlwRCxJQUFJLENBQUMs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TyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsR0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdC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RSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTtnQkFDbkYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUMxSSxVQUFVLEVBQUUsY0FBYztnQkFDMUIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCxTQUFTLEVBQUUsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFDO2dCQUMxRSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDakksVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQztnQkFDakYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzVJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsUUFBUTtnQkFDckIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUM7Z0JBQ2pGLFdBQVcsRUFBRSxFQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUMzSSxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUN4RixXQUFXLEVBQUUsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQztnQkFDeEksVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxVQUFVO2dCQUN2QixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQztnQkFDeEYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsT0FBTztnQkFDcEIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7Z0JBQ3hGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUN4SSxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFO2dCQUNuRixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDMUksVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDMUYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzVJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsUUFBUTtnQkFDckIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUU7Z0JBQ25GLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO2dCQUM1SSxVQUFVLEVBQUUsYUFBYTtnQkFDekIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUM5RSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtnQkFDeEosVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxRQUFRO2dCQUNyQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBQztnQkFDMUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQ2pJLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsSUFBSTtnQkFDakIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7Z0JBQ3hGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUMxSSxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDO2dCQUNqRixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRTtnQkFDaEssVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQztnQkFDakYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUU7Z0JBQ3JLLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixXQUFXLEVBQUUsU0FBUztnQkFDdEIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUM7Z0JBQzdGLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFO2dCQUM1SixVQUFVLEVBQUUsWUFBWTtnQkFDeEIsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDO2dCQUNqRixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtnQkFDbkosVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFLEVBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBQztnQkFDakYsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzFJLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixXQUFXLEVBQUUsT0FBTztnQkFDcEIsY0FBYyxFQUFFLElBQUk7Z0JBQ3BCLFlBQVksRUFBRSxJQUFJO2FBQ3JCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFNBQVMsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7Z0JBQ2xILFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFO2dCQUNySyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsV0FBVyxFQUFFLE9BQU87Z0JBQ3BCLGNBQWMsRUFBRSxJQUFJO2dCQUNwQixZQUFZLEVBQUUsSUFBSTthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDRixTQUFTLEVBQUUsRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDO2dCQUN4RixXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDMUksVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFdBQVcsRUFBRSxPQUFPO2dCQUNwQixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsWUFBWSxFQUFFLElBQUk7YUFDckI7U0FDSixDQUFDO0lBVU4sQ0FBQztJQVJHLHdDQUFnQixHQUFoQixVQUFpQixNQUFjO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsb0JBQW9CO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFDRCxjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTNVTDtRQUFDLGdGQUFVLEVBQUU7O3FCQUFBO0lBNFViLG9CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvVXlDO0FBUTFDLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNkLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQztBQUNoQixJQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDbEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUdwQjtJQUFBO1FBQ0ksYUFBUSxHQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBdU96RSxDQUFDO0lBck9HLGlDQUFXLEdBQVgsVUFBWSxPQUFlLEVBQUUsVUFBa0IsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLFlBQXFCLEVBQUUsWUFBcUIsRUFBRSxlQUF3QixFQUFFLGVBQThCLEVBQUUsV0FBMkIsRUFBRSxpQkFBc0MsRUFBRSxXQUEyQixFQUFFLFVBQTBCO1FBQ25ULElBQUksVUFBVSxHQUFZLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUN0RCxJQUFJLFdBQVcsR0FBa0IsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2xGLElBQUksVUFBVSxHQUFZLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxVQUFVLEdBQWtCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6RSxJQUFJLEtBQUssR0FBVyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hKLEVBQUUsQ0FBQyxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2SixNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNwRSxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2RSxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEIsQ0FBQztZQUVELElBQUksSUFBSSxHQUFZLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsQ0FBQztZQUV6RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2SixNQUFNLENBQUMsVUFBVSxDQUFDO1lBQ3RCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QixDQUFDO1lBRUQsYUFBYTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELDZDQUF1QixHQUF2QixVQUF3QixVQUFrQjtRQUN0QyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsc0NBQWdCLEdBQWhCLFVBQWlCLFVBQWtCLEVBQUUsR0FBVztRQUM1QyxJQUFJLEVBQUUsR0FBVyxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMzQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFVBQWtCLEVBQUUsV0FBMkI7UUFDN0QsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNmLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixTQUFpQixFQUFFLE9BQWUsRUFBRSxPQUFlO1FBQ2hFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxPQUFPLElBQUksU0FBUyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELHlDQUFtQixHQUFuQixVQUFvQixVQUFrQixFQUFFLFVBQWtCLEVBQUUsUUFBZ0I7UUFDeEUsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5RCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxLQUFLLEdBQVcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELDRDQUFzQixHQUF0QixVQUF1QixVQUFrQixFQUFFLFVBQWtCLEVBQUUsUUFBZ0IsRUFBRSxXQUEyQjtRQUN4RyxJQUFJLFVBQVUsR0FBVyxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQVcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRCxVQUFVLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLEdBQUcsR0FBVyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RixVQUFVLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsVUFBa0IsRUFBRSxRQUFnQjtRQUNqRCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLFdBQW1CO1FBQ2pDLElBQUksS0FBSyxHQUFhLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FBQztRQUMzRCxFQUFFLENBQUMsQ0FBQyxXQUFXLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakYsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsSUFBYSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsWUFBcUIsRUFBRSxZQUFxQixFQUFFLGVBQXdCLEVBQUUsZUFBOEIsRUFBRSxXQUEyQixFQUFFLGlCQUFzQyxFQUFFLFVBQTBCO1FBQ2xRLEdBQUcsQ0FBQyxDQUFVLFVBQVUsRUFBVix5QkFBVSxFQUFWLHdCQUFVLEVBQVYsSUFBVSxDQUFDO1lBQXBCLElBQUksQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdkUsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1NBQ0o7UUFFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdGLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLENBQVcsVUFBZSxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLENBQUM7Z0JBQTFCLElBQUksRUFBRTtnQkFDUCxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7YUFDSjtRQUNMLENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBVSxVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsQ0FBQztZQUFyQixJQUFJLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKO1FBRUQsR0FBRyxDQUFDLENBQVUsVUFBaUIsRUFBakIsdUNBQWlCLEVBQWpCLCtCQUFpQixFQUFqQixJQUFpQixDQUFDO1lBQTNCLElBQUksQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25LLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztTQUNKO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLElBQWEsRUFBRSxXQUFrQyxFQUFFLFlBQTJCO1FBQ3ZGLEdBQUcsQ0FBQyxDQUFXLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxDQUFDO1lBQXRCLElBQUksRUFBRTtZQUNQLEdBQUcsQ0FBQyxDQUFVLFVBQVEsRUFBUixPQUFFLENBQUMsS0FBSyxFQUFSLGNBQVEsRUFBUixJQUFRLENBQUM7Z0JBQWxCLElBQUksQ0FBQztnQkFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZFLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUMsQ0FBQztnQkFDM0MsQ0FBQzthQUNKO1NBQ0o7UUFDRCxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSyxFQUFDLENBQUM7WUFDckQsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsdUNBQWlCLEdBQWpCLFVBQWtCLElBQWEsRUFBRSxZQUFxQixFQUFFLFlBQXFCLEVBQUUsY0FBOEI7UUFDekcsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLElBQUksTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQVUsVUFBYyxFQUFkLGlDQUFjLEVBQWQsNEJBQWMsRUFBZCxJQUFjLENBQUM7WUFBeEIsSUFBSSxDQUFDO1lBQ04sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7U0FDSjtRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxJQUFhO1FBQ3ZCLElBQUksQ0FBQyxHQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxtREFBNkIsR0FBN0IsVUFBOEIsSUFBYSxFQUFFLFlBQXFCO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoSSxDQUFDO0lBRUQsbURBQTZCLEdBQTdCLFVBQThCLElBQWEsRUFBRSxZQUFxQjtRQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEksQ0FBQztJQUVELHVDQUFpQixHQUFqQixVQUFrQixJQUFhO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLEVBQVcsRUFBRSxFQUFXO1FBQy9CLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQztJQUM3RSxDQUFDO0lBRUQsMkNBQXFCLEdBQXJCLFVBQXNCLElBQWE7UUFDL0IsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMvRSxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLElBQWE7UUFDdEIsSUFBSSxDQUFDLEdBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixFQUFVO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBeE9MO1FBQUMsZ0ZBQVUsRUFBRTs7bUJBQUE7SUF5T2Isa0JBQUM7QUFBRCxDQUFDOzs7Ozs7O0FDdlBEOztHQUVHO0FBRUgsb0JBQW9CO0FBQ3BCLElBQUksWUFBWSxHQUFRLG1CQUFPLENBQUMsR0FBbUIsQ0FBQyxDQUFDO0FBRXJELElBQUksZ0JBQWdCLEdBQVEsbUJBQU8sQ0FBQyxDQUFlLENBQUMsQ0FBQztBQUNyRCxJQUFJLEtBQUssR0FBWSxLQUFLLENBQUM7QUFFM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hELEtBQUssR0FBRyxJQUFJLENBQUM7SUFDYixnQkFBZ0IsQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0FBQzdELENBQUM7QUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDckMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLENBQUMsWUFBWSxDQUFDLENBQUMsb0JBQW9CLEdBQUc7UUFDbEMsZUFBZSxFQUFFLFlBQVksQ0FBQyxlQUFlO1FBQzdDLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztLQUN4QztBQUNMLENBQUM7QUFFRCxJQUFJLGFBQWEsR0FBUSxtQkFBTyxDQUFDLEdBQTRDLENBQUMsQ0FBQztBQUMvRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ1IsYUFBYSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7SUFDdEQsYUFBYSxDQUFDLFdBQVcsR0FBRyxZQUFZLENBQUMsV0FBVztJQUNwRCxhQUFhLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlO0FBQ2hFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJ5RDtBQUNqQjtBQUM4QztBQU92RjtJQUVDLHNCQUFZLDJCQUF3RCxFQUFVLHlCQUFvRDtRQUFwRCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQy9ILElBQUksQ0FBQyxlQUFlLEdBQUcseUJBQXlCLENBQUM7SUFDbkQsQ0FBQztJQVRIO1FBQUMsK0VBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlDQUFtQztZQUNuQyxpQ0FBa0M7U0FDbkMsQ0FBQzs7b0JBQUE7SUFNRDs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7OztBQUVxQztBQUNZO0FBQ1I7QUFFRTtBQUNBO0FBQ1Q7QUFDZ0I7QUFDd0Q7QUFDckQ7QUFDMEI7QUFDRztBQUNqQjtBQUNFO0FBQ2tCO0FBQ1o7QUFDVztBQUNSO0FBQ0Y7QUFDckI7QUFDQTtBQUNHO0FBQ3dDO0FBQ3ZCO0FBRUU7QUFDSDtBQUNGO0FBQ3JCO0FBRXBEOztHQUVHO0FBMENIO0lBQUE7SUFFQSxDQUFDO0lBM0NEO1FBQUMsOEVBQVEsQ0FBQztZQUNSLHlCQUF5QjtZQUN6QixTQUFTLEVBQUUsQ0FBRSxvRUFBWSxDQUFFO1lBQzNCLHFCQUFxQjtZQUNyQixZQUFZLEVBQUU7Z0JBQ2Ysb0VBQVk7Z0JBQ1QsMkVBQWE7Z0JBQ2IsOEVBQVk7Z0JBQ1osa0dBQWlCO2dCQUNqQixnR0FBbUI7Z0JBQ25CLDRHQUF1QjtnQkFDdkIsd0dBQXNCO2dCQUN0QiwyRkFBa0I7Z0JBQ2xCLDZGQUFrQjtnQkFDbEIsK0dBQXdCO2dCQUN4QixzR0FBcUI7Z0JBQ3JCLG9HQUFxQjtnQkFDckIsK0VBQWM7Z0JBQ2QsK0VBQWM7Z0JBQ2QsMEhBQTJCO2dCQUMzQixrRkFBZTtnQkFDZixtR0FBZ0I7YUFDbEI7WUFDQSxPQUFPLEVBQUU7Z0JBQ1A7OzttQkFHRztnQkFDSCxtRUFBZTtnQkFDZiwyREFBVztnQkFDWCwrSEFBa0I7Z0JBQ2xCOzttQkFFRztnQkFDSCw2REFBWSxDQUFDLE9BQU8sQ0FBQywyREFBTSxDQUFDO2dCQUM1QixpRUFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBRSwwRUFBMkIsQ0FBRSxDQUFDO2dCQUMzRCxpRUFBa0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdCLG9FQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRSxDQUFDLG1HQUFrQixFQUFFLDhHQUF5QixDQUFDO1NBQzNELENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRnFEO0FBQ0c7QUFDQTtBQUNXO0FBQ29CO0FBQ2xCO0FBQ1M7QUFDb0I7QUFDdkI7QUFFckUsSUFBTSxNQUFNLEdBQVc7SUFDNUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSwyRUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDekQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw4RUFBYyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLDBGQUFrQixFQUFFO0lBQ2hFLEVBQUUsSUFBSSxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsRUFBRSw4R0FBd0IsRUFBRTtJQUN4RixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLDRGQUFrQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLDRCQUE0QixFQUFFLFNBQVMsRUFBRSxxR0FBcUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQzNGLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsOEVBQWMsRUFBRSxTQUFTLEVBQUMsTUFBTSxFQUFDO0lBQzNELEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSx5SEFBMkIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ3hGLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsa0dBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztJQUN4RSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRTtJQUNqRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTtDQUNuQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCa0c7QUFTcEc7SUFRRSwyQkFBb0IsUUFBa0IsRUFBVSxPQUFtQjtRQUEvQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU56RCxxQkFBZ0IsR0FBRyxJQUFJLDJEQUFZLEVBQUUsQ0FBQztRQU85QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztRQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFDLEtBQVU7WUFDekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUNELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBYyxHQUFkO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBcENEO1FBQUMsMkVBQUssRUFBRTs7d0RBQUE7SUFDUjtRQUFDLDRFQUFNLEVBQUU7OytEQUFBO0lBVFg7UUFBQywrRUFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsaUNBQTZDO1lBQzdDLGlDQUE2QztTQUM5QyxDQUFDOzt5QkFBQTtJQXlDRix3QkFBQzs7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Dd0M7QUFRekM7SUFDSTtJQUNBLENBQUM7SUFSTDtRQUFDLCtFQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixpQ0FBc0M7WUFDdEMsaUNBQXNDO1NBQ3pDLENBQUM7O3VCQUFBO0lBS0Y7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYc0U7QUFPdEU7SUFPSTtRQUpVLDBCQUFxQixHQUFHLElBQUksMkRBQVksRUFBRSxDQUFDO1FBS2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDTCxDQUFDO0lBdEJEO1FBQUMsNEVBQU0sRUFBRTs7K0RBQUE7SUFDVDtRQUFDLDJFQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQywyRUFBSyxFQUFFOztrREFBQTtJQVZaO1FBQUMsK0VBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLGlDQUFzQztZQUN0QyxpQ0FBc0M7U0FDekMsQ0FBQzs7b0JBQUE7SUE0QkY7QUFBQTs7Ozs7Ozs7QUNsQ0E7QUFBQSxtRkFBbUY7QUFDbkYsOEZBQThGO0FBQzlGLDBFQUEwRTtBQUMxRSwrRUFBK0U7QUFFeEUsSUFBTSxXQUFXLEdBQUc7SUFDekIsVUFBVSxFQUFFLEtBQUs7Q0FDbEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xtQztBQUNWO0FBQ0E7QUFDRTtBQUNDO0FBQ0U7QUFDTDtBQUNGO0FBQ0U7QUFDRjtBQUNDO0FBQ0M7QUFDSDtBQUNBO0FBQ0k7QUFFQTs7Ozs7Ozs7QUNsQjVCO0FBQUE7Ozs7Ozs7Ozs7SUFVSTtBQUNHLElBQU0sTUFBTSxHQUFhO0lBQ2hDLE1BQU0sRUFBRSxXQUFXLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMseUNBQXlDLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLGVBQWU7Q0FDbkosQ0FBQzs7Ozs7OztBQ2JGLG1EQUFtRCx3RkFBd0Ysa1RBQWtULDhLQUE4SyxxQ0FBcUMsYUFBYSxnQkFBZ0IsOERBQThELGtxQkFBa3FCLDBJQUEwSSxzVUFBc1UscUtBQXFLLG9WQUFvViwwTEFBMEwsNlJBQTZSLHNRQUFzUSxpT0FBaU8sZ0dBQWdHLHdGQUF3Rix3U0FBd1MsMGFBQTBhLCtFQUErRSwwS0FBMEssaUNBQWlDLDZFQUE2RSw2QkFBNkIsS0FBSyx1QkFBdUIsOFJBQThSLCtFQUErRSwrUUFBK1EscUZBQXFGLGtIQUFrSCxrQkFBa0IsMlhBQTJYLDZFQUE2RSx5S0FBeUssK0JBQStCLDJFQUEyRSw0QkFBNEIsS0FBSyxtQkFBbUIsMlJBQTJSLDZFQUE2RSwrWUFBK1ksR0FBRyxxTkFBcU4sV0FBVywyRkFBMkYsOFFBQThRLDJDQUEyQyxnTEFBZ0wsdUNBQXVDLDJFQUEyRSx3SEFBd0gsc0RBQXNELGtJQUFrSSxLQUFLLGVBQWUsa1dBQWtXLG9EQUFvRCx1RUFBdUUseUpBQXlKLG1EQUFtRCxLQUFLLFFBQVEsK2ZBQStmLHVGQUF1RixpTUFBaU0sbURBQW1ELHNFQUFzRSx1SkFBdUosZ0RBQWdELEtBQUssUUFBUSxrWUFBa1ksdUZBQXVGLDJJOzs7Ozs7QUNBejJVLHlCQUF5Qix5QkFBeUIsOEJBQThCLDJCQUEyQixLQUFLLGlCQUFpQiwrQkFBK0Isa0RBQWtELG1CQUFtQixrQkFBa0IsS0FBSyw0R0FBNEcsMkJBQTJCLEtBQUssdUJBQXVCLG1DQUFtQyxLQUFLLG9FQUFvRSxtQ0FBbUMsS0FBSyxtTEFBbUwsdUNBQXVDLEtBQUssZ0xBQWdMLHdDQUF3QyxLQUFLLDBCQUEwQixtQ0FBbUMsS0FBSyxvQ0FBb0Msb0NBQW9DLHVDQUF1QyxLQUFLLHlCQUF5Qix3QkFBd0IsMEJBQTBCLDJCQUEyQixtQkFBbUIsK0JBQStCLHFCQUFxQiwrQ0FBK0MsK0NBQStDLEtBQUssK0JBQStCLGtDQUFrQyxzQkFBc0IsS0FBSywyQ0FBMkMsY0FBYyx1QkFBdUIsU0FBUyxZQUFZLHVCQUF1QixTQUFTLEtBQUssbUNBQW1DLGNBQWMsdUJBQXVCLFNBQVMsWUFBWSx1QkFBdUIsU0FBUyxLQUFLLDhCQUE4Qiw0QkFBNEIseUJBQXlCLG1CQUFtQixLQUFLLG9FQUFvRSxxQkFBcUIsa0NBQWtDLHVCQUF1QixrQkFBa0IsaUJBQWlCLDJCQUEyQixLQUFLLG9DQUFvQyw2Q0FBNkMscUNBQXFDLDJCQUEyQiwyQkFBMkIsS0FBSyxxQ0FBcUMsNkNBQTZDLGtDQUFrQywyQkFBMkIsMkJBQTJCLEtBQUssMkNBQTJDLHFDQUFxQyxLQUFLLDRFQUE0RSxtQkFBbUIsS0FBSyw4RUFBOEUsa0JBQWtCLEtBQUssbUNBQW1DLG9CQUFvQixLQUFLLCtCQUErQiwyQkFBMkIsdUJBQXVCLHFCQUFxQiwwQkFBMEIsK0JBQStCLEtBQUssMEJBQTBCLG9CQUFvQixzQkFBc0IsK0JBQStCLDRCQUE0QiwyQkFBMkIseUJBQXlCLGdDQUFnQyw0QkFBNEIsMEJBQTBCLHFCQUFxQixvQkFBb0IsS0FBSyw0QkFBNEIsa0NBQWtDLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLDRCQUE0QiwyQkFBMkIsK0JBQStCLDRCQUE0QixrQkFBa0IsNEJBQTRCLHFCQUFxQixLQUFLLDRGQUE0RixxQkFBcUIsb0JBQW9CLHFCQUFxQixtQkFBbUIsbUJBQW1CLHNCQUFzQiwrQkFBK0IsS0FBSyw4QkFBOEIsb0NBQW9DLEtBQUsscU5BQXFOLHdCQUF3QixLQUFLLHlQQUF5UCw0QkFBNEIsc0JBQXNCLEtBQUssa0NBQWtDLCtCQUErQixLQUFLLHNIQUFzSCx5QkFBeUIsS0FBSyx1QkFBdUIsb0JBQW9CLHFCQUFxQixrQ0FBa0MsS0FBSywwQkFBMEIsK0JBQStCLHFCQUFxQix1QkFBdUIsS0FBSyx1Q0FBdUMsMEJBQTBCLEtBQUssdUNBQXVDLDJCQUEyQixLQUFLLHVDQUF1QywyQkFBMkIsS0FBSyxvRUFBb0UsNEJBQTRCLG9CQUFvQixrQ0FBa0MsK0JBQStCLHdCQUF3QixLQUFLLHdKQUF3SixrQ0FBa0MsdUJBQXVCLHlCQUF5QixLQUFLLHlGQUF5RixxQkFBcUIsMkJBQTJCLEtBQUssNkJBQTZCLCtCQUErQix3QkFBd0IsNEJBQTRCLCtCQUErQix3QkFBd0IseUJBQXlCLDRCQUE0QixLQUFLLG9DQUFvQyxvQkFBb0IscUNBQXFDLEtBQUssMEJBQTBCLGtDQUFrQyx5QkFBeUIsNEJBQTRCLEtBQUsseUJBQXlCLGtDQUFrQyxtQkFBbUIsS0FBSyxtQ0FBbUMsa0NBQWtDLCtCQUErQixLQUFLLHdDQUF3QywrQkFBK0IsS0FBSywrQkFBK0Isd0JBQXdCLHFDQUFxQyx3QkFBd0Isb0JBQW9CLEtBQUsseUJBQXlCLDJCQUEyQix5QkFBeUIsS0FBSywrQ0FBK0Msb0JBQW9CLEtBQUsseUJBQXlCLG1DQUFtQyxvQkFBb0IsNEJBQTRCLEtBQUssMEJBQTBCLHVCQUF1QixLQUFLLHVCQUF1QixxQkFBcUIsS0FBSywwQkFBMEIsa0NBQWtDLDRCQUE0QixLQUFLLHlCQUF5QiwyQkFBMkIsbUJBQW1CLG9CQUFvQiwyQkFBMkIsS0FBSyw2RUFBNkUsbUNBQW1DLEtBQUssK0dBQStHLHFCQUFxQixrQ0FBa0MsMkJBQTJCLEtBQUssOEJBQThCLGtDQUFrQyw0QkFBNEIsK0JBQStCLEtBQUssa0NBQWtDLDJCQUEyQixrQ0FBa0MsS0FBSyw2RUFBNkUsNEJBQTRCLHFCQUFxQixxQkFBcUIsS0FBSywwQkFBMEIsb0JBQW9CLEtBQUssK0JBQStCLHdCQUF3QixzQkFBc0Isd0JBQXdCLEtBQUsseUNBQXlDLCtCQUErQixLQUFLLHVOQUF1TixvQkFBb0IsS0FBSywrQkFBK0IsdUJBQXVCLHdCQUF3QixxQkFBcUIsd0JBQXdCLHdCQUF3Qix5QkFBeUIsNEJBQTRCLEtBQUssd0NBQXdDLGtCQUFrQixLQUFLLHdEQUF3RCwyQkFBMkIsNEJBQTRCLCtCQUErQix3QkFBd0IscUJBQXFCLG9CQUFvQix3QkFBd0IseUJBQXlCLDRCQUE0QixLQUFLLG9KQUFvSiw0QkFBNEIsS0FBSyxzSEFBc0gsdUJBQXVCLHNCQUFzQixLQUFLLG1GQUFtRixnQ0FBZ0MsS0FBSyw2REFBNkQsd0JBQXdCLEtBQUssd0dBQXdHLG9CQUFvQix3QkFBd0IsS0FBSyxrRkFBa0Ysd0JBQXdCLEtBQUssK0JBQStCLG9CQUFvQix3QkFBd0IsS0FBSyxxQkFBcUIsdUJBQXVCLDBCQUEwQixLQUFLLHdCQUF3QixtQkFBbUIsS0FBSywrQ0FBK0MscUJBQXFCLEtBQUssdUxBQXVMLGtDQUFrQyxLQUFLLHdHQUF3RywrQkFBK0IsS0FBSyx3SUFBd0ksd0JBQXdCLEtBQUssb0lBQW9JLG9CQUFvQixLQUFLLG9CQUFvQixvQ0FBb0MsZ0RBQWdELDY0UUFBNjRRLDRCQUE0QiwyQkFBMkIsS0FBSyx5QkFBeUIsb0NBQW9DLDJCQUEyQiw0QkFBNEIsNkJBQTZCLDZCQUE2Qiw0Q0FBNEMsMkNBQTJDLEtBQUssc0NBQXNDLDRCQUE0QixLQUFLLHFDQUFxQyw0QkFBNEIsS0FBSyxzQ0FBc0MsNEJBQTRCLEtBQUsseUNBQXlDLDRCQUE0QixLQUFLLG1DQUFtQyw0QkFBNEIsS0FBSyxxQ0FBcUMsNEJBQTRCLEtBQUssdUNBQXVDLDRCQUE0QixLQUFLLEs7Ozs7OztBQ0E5c25CLDRCQUE0Qix1QkFBdUIsa0NBQWtDLEVBQUUsaUJBQWlCLGtCQUFrQixnQkFBZ0IseUJBQXlCLHlCQUF5QixFQUFFLEc7Ozs7OztBQ0E5TCxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQiw0QkFBNEIsK0JBQStCLHVCQUF1QixtQkFBbUIscUJBQXFCLFlBQVksRUFBRSxxQkFBcUIsaUJBQWlCLG1CQUFtQix3QkFBd0IsdUJBQXVCLEVBQUUscUJBQXFCLHVCQUF1QixzQkFBc0IscUJBQXFCLDBCQUEwQixrQkFBa0IsRUFBRSx5QkFBeUIsK0JBQStCLG1CQUFtQixtQkFBbUIsRUFBRSxnQ0FBZ0Msa0JBQWtCLG1CQUFtQixtQkFBbUIsb0NBQW9DLEVBQUUsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixpQkFBaUIsd0JBQXdCLEVBQUUsK0JBQStCLGtCQUFrQix3QkFBd0Isa0JBQWtCLEVBQUUsdUJBQXVCLDZCQUE2QixFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSx5QkFBeUIsZ0JBQWdCLGtCQUFrQixFQUFFLEVBQUUsRzs7Ozs7O0FDQXRoQywrQkFBK0IsaUJBQWlCLGdCQUFnQixFQUFFLGlCQUFpQixzQkFBc0IsdUJBQXVCLEVBQUUsdUJBQXVCLG1CQUFtQixvQkFBb0Isd0JBQXdCLEVBQUUsa0NBQWtDLHNCQUFzQixFQUFFLG9CQUFvQix3QkFBd0IscUJBQXFCLEVBQUUsMEJBQTBCLG9CQUFvQiwwQkFBMEIsRUFBRSxtREFBbUQsbUJBQW1CLEVBQUUsa0JBQWtCLHNCQUFzQixnQkFBZ0IsbUJBQW1CLHFCQUFxQix3QkFBd0IsRUFBRSxtQkFBbUIsdUJBQXVCLDBCQUEwQixFQUFFLGlCQUFpQixpQkFBaUIscUJBQXFCLEVBQUUsd0JBQXdCLHFCQUFxQixpQkFBaUIsZ0JBQWdCLEVBQUUsc0NBQXNDLHlCQUF5Qix5QkFBeUIsa0JBQWtCLEVBQUUsK0NBQStDLGlCQUFpQixFQUFFLHFCQUFxQixnQkFBZ0IsZUFBZSx3QkFBd0IsdUJBQXVCLGFBQWEsY0FBYyxpQkFBaUIsK0JBQStCLGtDQUFrQyx1QkFBdUIsRUFBRSw4QkFBOEIseUJBQXlCLGVBQWUsRUFBRSxzQ0FBc0MsdUJBQXVCLHNCQUFzQixFQUFFLHdDQUF3Qyw0QkFBNEIscUJBQXFCLG1CQUFtQixFQUFFLGNBQWMsa0JBQWtCLHNCQUFzQixFQUFFLDhDQUE4QyxtQ0FBbUMsaUJBQWlCLDJCQUEyQixtQ0FBbUMsZUFBZSxpQkFBaUIsaUJBQWlCLHFCQUFxQixpQkFBaUIsd0JBQXdCLEVBQUUsMEJBQTBCLDZCQUE2QixrQkFBa0IsbUJBQW1CLEVBQUUsK0JBQStCLG1CQUFtQixrQkFBa0IsRUFBRSxpQkFBaUIsa0JBQWtCLEVBQUUsMEVBQTBFLGlCQUFpQixtQkFBbUIsRUFBRSxpQkFBaUIsdUJBQXVCLEVBQUUsRUFBRSxHOzs7Ozs7QUNBbG9FLDBDQUEwQyx5QkFBeUIseUJBQXlCLGtCQUFrQixFQUFFLGtDQUFrQyxtQkFBbUIsa0JBQWtCLGdCQUFnQix5QkFBeUIsb0NBQW9DLG1CQUFtQix3QkFBd0IsRUFBRSwrREFBK0QscUJBQXFCLEVBQUUsMERBQTBELHFCQUFxQixFQUFFLGlEQUFpRCxxQkFBcUIsRUFBRSxrQ0FBa0MsdUJBQXVCLHlCQUF5Qix3QkFBd0Isa0JBQWtCLEVBQUUsMkVBQTJFLHFCQUFxQix5QkFBeUIsaUNBQWlDLHFCQUFxQixFQUFFLDJGQUEyRixxQkFBcUIsa0JBQWtCLHVCQUF1QiwyQkFBMkIsc0NBQXNDLHFCQUFxQixFQUFFLCtCQUErQiw0QkFBNEIsNEJBQTRCLDRCQUE0QixFQUFFLCtFQUErRSwyQkFBMkIsOEJBQThCLG1CQUFtQixFQUFFLEVBQUUsRzs7Ozs7O0FDQXAxQyxrQ0FBa0Msa0JBQWtCLEVBQUUsb0JBQW9CLGdCQUFnQixrQ0FBa0MsaUJBQWlCLDRCQUE0QiwrQkFBK0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsRUFBRSx5QkFBeUIsbUJBQW1CLHVCQUF1QixFQUFFLGdDQUFnQyxrQkFBa0IsbUJBQW1CLDhCQUE4QixpQ0FBaUMscUJBQXFCLHFCQUFxQix5QkFBeUIsRUFBRSxnQkFBZ0IscUJBQXFCLG9CQUFvQixtQkFBbUIsd0JBQXdCLEVBQUUscUJBQXFCLDZCQUE2Qix3QkFBd0IsRUFBRSwrQkFBK0IseUJBQXlCLHFCQUFxQixrQkFBa0IsdUJBQXVCLEVBQUUsa0NBQWtDLG1CQUFtQixxQkFBcUIsdUJBQXVCLEVBQUUsb0JBQW9CLHlCQUF5QixpQkFBaUIsd0JBQXdCLEVBQUUsRUFBRSxHOzs7Ozs7QUNBOS9CLDRCQUE0Qix1QkFBdUIsa0NBQWtDLEVBQUUsaUJBQWlCLGtCQUFrQixnQkFBZ0IseUJBQXlCLHlCQUF5QixFQUFFLEc7Ozs7OztBQ0E5TCwyQkFBMkIsdUJBQXVCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLGtDQUFrQyxFQUFFLGdDQUFnQyxxQkFBcUIsb0JBQW9CLDBCQUEwQixFQUFFLGVBQWUsNEJBQTRCLHNCQUFzQixFQUFFLCtCQUErQiw2QkFBNkIscUJBQXFCLEVBQUUsRUFBRSxHOzs7Ozs7QUNBeFkseUJBQXlCLGdCQUFnQixFQUFFLGFBQWEseUZBQXlGLGlDQUFpQywyQkFBMkIsaUJBQWlCLGdCQUFnQix1QkFBdUIsRUFBRSxlQUFlLG9CQUFvQiwwQkFBMEIsbUJBQW1CLEVBQUUsMEJBQTBCLGlCQUFpQixxQkFBcUIsRUFBRSx5QkFBeUIsdUJBQXVCLEVBQUUsbUJBQW1CLG9CQUFvQixpQkFBaUIsRUFBRSxrQkFBa0IsZUFBZSxpQkFBaUIsY0FBYyx1QkFBdUIsRUFBRSxjQUFjLHVCQUF1QixlQUFlLEVBQUUsWUFBWSx1QkFBdUIsYUFBYSxnQkFBZ0IsRUFBRSxVQUFVLGlCQUFpQiw4QkFBOEIsY0FBYyx1QkFBdUIsaUJBQWlCLHlCQUF5QixpQkFBaUIsb0JBQW9CLG9CQUFvQixrRUFBa0UsRUFBRSxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2RUFBNkUsRUFBRSxnQkFBZ0Isc0JBQXNCLEVBQUUsK0JBQStCLG1CQUFtQix3QkFBd0IsRUFBRSxZQUFZLGVBQWUsRUFBRSxVQUFVLGdCQUFnQixtQkFBbUIsd0JBQXdCLEVBQUUsRUFBRSwrQkFBK0IsbUJBQW1CLHdCQUF3QixFQUFFLFlBQVksZUFBZSxFQUFFLFVBQVUsZ0JBQWdCLG1CQUFtQix3QkFBd0IsRUFBRSxFQUFFLEc7Ozs7OztBQ0FyL0Msa0NBQWtDLGtDQUFrQyxvQkFBb0IsbUJBQW1CLEVBQUUsaUJBQWlCLG1CQUFtQixFQUFFLG1CQUFtQixnQkFBZ0Isc0JBQXNCLHVCQUF1QiwwQkFBMEIsRUFBRSxtQkFBbUIsMEJBQTBCLHNCQUFzQix1QkFBdUIsaUJBQWlCLEVBQUUsY0FBYyw0QkFBNEIsd0JBQXdCLHlCQUF5Qix1QkFBdUIsRUFBRSxvQkFBb0Isa0JBQWtCLEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLFNBQVMsb0JBQW9CLGNBQWMsZ0JBQWdCLFdBQVcsWUFBWSxpQkFBaUIsaUJBQWlCLDhCQUE4QixpQkFBaUIsc0JBQXNCLEVBQUUsYUFBYSxrQkFBa0IsbUJBQW1CLEVBQUUsdUJBQXVCLG9DQUFvQyxtQkFBbUIsRUFBRSxZQUFZLHdCQUF3Qix5QkFBeUIsd0NBQXdDLEVBQUUsK0JBQStCLFNBQVMsbUJBQW1CLEVBQUUsY0FBYyxvQkFBb0IsRUFBRSxvQkFBb0IscUJBQXFCLHdCQUF3QixtQkFBbUIsRUFBRSxvQkFBb0IsNEJBQTRCLG1CQUFtQix1QkFBdUIseUJBQXlCLDhCQUE4Qix3QkFBd0IsRUFBRSxzQkFBc0IsZ0NBQWdDLHlCQUF5Qix3Q0FBd0MseURBQXlELGtCQUFrQix5QkFBeUIsZ0JBQWdCLEVBQUUsaUJBQWlCLG9CQUFvQixFQUFFLG9CQUFvQixrQkFBa0Isa0JBQWtCLEVBQUUsc0JBQXNCLDZCQUE2QixFQUFFLEVBQUUsdURBQXVELFlBQVksa0JBQWtCLEVBQUUsaUJBQWlCLG9CQUFvQixFQUFFLHNCQUFzQixnQ0FBZ0MseUJBQXlCLHdDQUF3Qyx5REFBeUQsa0JBQWtCLHlCQUF5QixnQkFBZ0IsRUFBRSxvQkFBb0Isa0JBQWtCLGtCQUFrQixFQUFFLG9CQUFvQixxQkFBcUIsd0JBQXdCLG1CQUFtQix5QkFBeUIsbUJBQW1CLEVBQUUsK0JBQStCLCtCQUErQixFQUFFLGlCQUFpQiw2QkFBNkIsd0JBQXdCLEVBQUUsc0JBQXNCLDZCQUE2QixFQUFFLDBCQUEwQix3QkFBd0IsMkJBQTJCLEVBQUUsa0JBQWtCLGdDQUFnQyxFQUFFLEVBQUUsRzs7Ozs7O0FDQXRpRiw0QkFBNEIsdUJBQXVCLGtDQUFrQyxFQUFFLGlCQUFpQixrQkFBa0IsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsRUFBRSxHOzs7Ozs7QUNBOUwsNEJBQTRCLHVCQUF1QixrQ0FBa0MsRUFBRSxpQkFBaUIsa0JBQWtCLGdCQUFnQix5QkFBeUIseUJBQXlCLEVBQUUsRzs7Ozs7O0FDQTlMLCtCQUErQixrQkFBa0IsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsRUFBRSxrQkFBa0IsaUJBQWlCLGtCQUFrQix5QkFBeUIseUJBQXlCLHVCQUF1QixFQUFFLG9CQUFvQixnQkFBZ0IsRUFBRSwyQkFBMkIsc0JBQXNCLG1CQUFtQixFQUFFLGtDQUFrQyxrQkFBa0IsRUFBRSxzQkFBc0IsbUJBQW1CLGlCQUFpQix5QkFBeUIsRUFBRSxtQkFBbUIsMEJBQTBCLHdCQUF3QixFQUFFLGtDQUFrQyxxQkFBcUIscUJBQXFCLGdCQUFnQixFQUFFLG9CQUFvQixnQ0FBZ0MsbUJBQW1CLG9CQUFvQixzQkFBc0IseUJBQXlCLHVCQUF1QiwyQ0FBMkMsc0JBQXNCLHFCQUFxQixFQUFFLDZCQUE2Qix5Q0FBeUMsRUFBRSw4Q0FBOEMscUJBQXFCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHFCQUFxQixnQkFBZ0IsK0NBQStDLEVBQUUsa0JBQWtCLHVCQUF1QixlQUFlLHNCQUFzQixZQUFZLEVBQUUsd0JBQXdCLHVCQUF1QixFQUFFLDhDQUE4QyxzQkFBc0IsRUFBRSwyREFBMkQsbUJBQW1CLEVBQUUsb0JBQW9CLHNCQUFzQix3QkFBd0IsRUFBRSxxQkFBcUIsbUJBQW1CLEVBQUUsY0FBYyx1QkFBdUIsRUFBRSxrQkFBa0IsNEJBQTRCLDZCQUE2QixtQkFBbUIsb0JBQW9CLG1CQUFtQiwyQkFBMkIsMkJBQTJCLGlDQUFpQyxpQ0FBaUMsRUFBRSxrQkFBa0IsdUJBQXVCLGlCQUFpQixZQUFZLGFBQWEsV0FBVyxjQUFjLEVBQUUsZUFBZSxzQkFBc0IsbUJBQW1CLHVCQUF1QixxQkFBcUIscUJBQXFCLEVBQUUsaUJBQWlCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHVCQUF1QixlQUFlLFdBQVcsYUFBYSxFQUFFLG1CQUFtQixxQkFBcUIsRUFBRSxxQkFBcUIsc0JBQXNCLHVCQUF1QixxQkFBcUIsRUFBRSx5QkFBeUIsdUJBQXVCLEVBQUUsa0JBQWtCLG9CQUFvQixlQUFlLHlCQUF5QixlQUFlLGNBQWMsZ0JBQWdCLGlCQUFpQixtQkFBbUIseUNBQXlDLEVBQUUsK0NBQStDLGNBQWMsZUFBZSx1QkFBdUIsRUFBRSxpQkFBaUIsa0JBQWtCLEVBQUUsb0NBQW9DLGlCQUFpQixlQUFlLHVCQUF1QixjQUFjLGdCQUFnQixvQkFBb0Isc0JBQXNCLGdCQUFnQixFQUFFLGlDQUFpQyxnQkFBZ0IsMEJBQTBCLG9CQUFvQixFQUFFLGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGtEQUFrRCxvQkFBb0IsdUJBQXVCLGFBQWEsZ0JBQWdCLGtCQUFrQixzQkFBc0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsMEJBQTBCLCtCQUErQiwyQkFBMkIsMkJBQTJCLDJCQUEyQiw4QkFBOEIsRUFBRSw0REFBNEQsYUFBYSwrQkFBK0IsRUFBRSxXQUFXLFlBQVksRUFBRSxhQUFhLHVCQUF1Qix1QkFBdUIsaUJBQWlCLHNCQUFzQixFQUFFLDJHQUEyRyx5Q0FBeUMsMEJBQTBCLEVBQUUsYUFBYSxlQUFlLEVBQUUsaUNBQWlDLHFCQUFxQixFQUFFLHlCQUF5QixpRkFBaUYsRUFBRSwrQkFBK0IsY0FBYyxzQkFBc0IsRUFBRSxvQkFBb0IscUJBQXFCLHNCQUFzQixFQUFFLGFBQWEseUJBQXlCLEVBQUUsc0JBQXNCLG1CQUFtQix1QkFBdUIscUJBQXFCLEVBQUUsaUJBQWlCLHlCQUF5QixFQUFFLHFCQUFxQiw0QkFBNEIsc0JBQXNCLEVBQUUsa0JBQWtCLHNCQUFzQiw0QkFBNEIsa0JBQWtCLHFCQUFxQixFQUFFLGlCQUFpQix1QkFBdUIsa0JBQWtCLHlCQUF5QixzQkFBc0Isd0JBQXdCLEVBQUUsRUFBRSxHOzs7Ozs7QUNBbnBKLDBHQUEwRyxlQUFlLHVCQUF1QixpQkFBaUIseUJBQXlCLHlCQUF5QixrQkFBa0IsRUFBRSwwQkFBMEIsbUJBQW1CLEVBQUUsYUFBYSxlQUFlLEVBQUUsbUJBQW1CLHVCQUF1QixFQUFFLHlCQUF5QixrQ0FBa0MscUJBQXFCLGdCQUFnQixxQkFBcUIseUJBQXlCLDhCQUE4QixxQkFBcUIseUJBQXlCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLEVBQUUsb0JBQW9CLGtCQUFrQixFQUFFLHdCQUF3Qix5QkFBeUIseUJBQXlCLGtCQUFrQixFQUFFLG1CQUFtQixrQkFBa0IsaUJBQWlCLG1CQUFtQixpQkFBaUIsOEJBQThCLGlCQUFpQix1QkFBdUIsRUFBRSwrQkFBK0Isd0JBQXdCLHFCQUFxQix5QkFBeUIsRUFBRSwyRUFBMkUsY0FBYyxxQkFBcUIsRUFBRSxtQkFBbUIseUJBQXlCLEVBQUUsMkJBQTJCLG1CQUFtQix1QkFBdUIsNEJBQTRCLEVBQUUsbUJBQW1CLDRCQUE0QixpQkFBaUIsdUJBQXVCLEVBQUUsc0JBQXNCLHdCQUF3QixFQUFFLDBCQUEwQixrQkFBa0IsY0FBYyx5QkFBeUIsdUJBQXVCLEVBQUUsRUFBRSxHOzs7Ozs7QUNBdmdELGtDQUFrQyx1QkFBdUIsRUFBRSxzQkFBc0IscUJBQXFCLEVBQUUsNEJBQTRCLHNCQUFzQiwwQkFBMEIseUJBQXlCLDJCQUEyQiw0QkFBNEIsbUNBQW1DLEVBQUUsZ0NBQWdDLDhCQUE4Qix1QkFBdUIsb0JBQW9CLHFCQUFxQixFQUFFLHdDQUF3Qyw2QkFBNkIsRUFBRSxhQUFhLGlCQUFpQiwwQkFBMEIsaUJBQWlCLDhDQUE4QyxFQUFFLG9CQUFvQiw2QkFBNkIsbUJBQW1CLG9CQUFvQiwwQkFBMEIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsaUNBQWlDLEVBQUUsaUJBQWlCLDZCQUE2QixtQkFBbUIsb0JBQW9CLDBCQUEwQiwyQkFBMkIsMkJBQTJCLGlDQUFpQyxpQ0FBaUMsRUFBRSxlQUFlLDRCQUE0QixFQUFFLFlBQVksdUJBQXVCLHVCQUF1Qix5QkFBeUIsRUFBRSxhQUFhLGtCQUFrQixvQkFBb0IsbUJBQW1CLDZFQUE2RSxzQkFBc0IsRUFBRSxZQUFZLG1CQUFtQixxQkFBcUIsdUJBQXVCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLEVBQUUsUUFBUSxpQkFBaUIsdUJBQXVCLDBCQUEwQixpQkFBaUIscUJBQXFCLHlCQUF5QixFQUFFLFdBQVcsbUJBQW1CLHFCQUFxQix1QkFBdUIsRUFBRSxlQUFlLG1CQUFtQix5QkFBeUIsaUJBQWlCLEVBQUUsZUFBZSxpQkFBaUIsd0JBQXdCLHFCQUFxQiw0QkFBNEIsRUFBRSxtQkFBbUIsa0JBQWtCLG1CQUFtQix1QkFBdUIsMEJBQTBCLEVBQUUsd0JBQXdCLHNCQUFzQixFQUFFLHVCQUF1QixzQkFBc0Isd0JBQXdCLHVCQUF1QixFQUFFLG9CQUFvQixvQkFBb0IsbUJBQW1CLEVBQUUsZUFBZSx3QkFBd0IsaUJBQWlCLEVBQUUsZ0NBQWdDLDhCQUE4QixpQkFBaUIsRUFBRSwrQkFBK0IsYUFBYSxrQkFBa0IsdUJBQXVCLEVBQUUsc0JBQXNCLHNCQUFzQiw0QkFBNEIsb0JBQW9CLEVBQUUsYUFBYSx3QkFBd0IsbUJBQW1CLEVBQUUsRUFBRSxHOzs7Ozs7QUNBbGpGLG9DQUFvQyx1QkFBdUIsWUFBWSxnQkFBZ0IsRUFBRSxjQUFjLG9CQUFvQixpQkFBaUIsa0NBQWtDLGlCQUFpQixpQkFBaUIsMEJBQTBCLGVBQWUsRUFBRSxXQUFXLGVBQWUsdUJBQXVCLEVBQUUsNkNBQTZDLDRCQUE0QixpQkFBaUIsRUFBRSx5REFBeUQsa0NBQWtDLEVBQUUsK0JBQStCLGNBQWMsc0JBQXNCLGdDQUFnQyxtQkFBbUIsa0JBQWtCLGdCQUFnQiwyQkFBMkIsY0FBYyxrQkFBa0Isd0NBQXdDLHlEQUF5RCxFQUFFLFdBQVcsZ0JBQWdCLHlCQUF5QixFQUFFLGlCQUFpQixvQkFBb0IsRUFBRSxhQUFhLHlCQUF5QixnQkFBZ0IsRUFBRSxFQUFFLEc7Ozs7OztBQ0FwN0IsbUI7Ozs7OztBQ0FBLDJEQUEyRCxnQ0FBZ0MscUJBQXFCLEtBQUssNkRBQTZELHNDQUFzQyxLQUFLLGVBQWUsMkJBQTJCLEtBQUssQzs7Ozs7O0FDQTVRLCtsRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGtXQUFrVyxNQUFNLCtDOzs7Ozs7QUNBeFcscWpCQUFxakIsK3lFQUEreUUsZUFBZSxtTjs7Ozs7O0FDQW4zRix1aUI7Ozs7OztBQ0FBLHFIQUFxSCxhQUFhLGlSQUFpUixLQUFLLFlBQVksK0I7Ozs7OztBQ0FwYSw4WTs7Ozs7O0FDQUEsaUxBQWlMLGdGOzs7Ozs7QUNBakwsKzdDOzs7Ozs7QUNBQSxtMUJBQW0xQix5QkFBeUIsMGtCOzs7Ozs7QUNBNTJCLDZXOzs7Ozs7QUNBQSwyNURBQTI1RCxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsa0xBQWtMLE1BQU0sTUFBTSxNQUFNLE1BQU0sZUFBZSxpR0FBaUcsTUFBTSxNQUFNLE1BQU0sTUFBTSxlQUFlLCtIQUErSCxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsbUdBQW1HLE1BQU0sTUFBTSxNQUFNLE1BQU0sZUFBZSxvM0tBQW8zSyxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsNklBQTZJLE1BQU0sTUFBTSxNQUFNLE1BQU0sZUFBZSx3akVBQXdqRSxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsK2tDQUEra0MsTUFBTSxNQUFNLE1BQU0sTUFBTSxlQUFlLHFHQUFxRyxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsNkdBQTZHLE1BQU0sTUFBTSxNQUFNLE1BQU0sZUFBZSwrR0FBK0csTUFBTSxNQUFNLE1BQU0sTUFBTSxlQUFlLHlIQUF5SCxNQUFNLE1BQU0sTUFBTSxNQUFNLGVBQWUsd0ZBQXdGLE1BQU0sTUFBTSxNQUFNLE1BQU0sZUFBZSwrd0I7Ozs7OztBQ0E1a1ksZ3VHQUFndUcsNDhOQUE0OE4sMENBQTBDLCtoRkFBK2hGLHNFQUFzRSw4R0FBOEcsZ0hBQWdILGlNQUFpTSwrQ0FBK0MscU9BQXFPLDREQUE0RCw4REFBOEQsd0NBQXdDLG9VQUFvVSw2K0hBQTYrSCx3OUQ7Ozs7OztBQ0FqOGpCLG9SQUFvUixzQkFBc0IscVBBQXFQLGFBQWEsZ0JBQWdCLHNCQUFzQiw2QkFBNkIsV0FBVyxxR0FBcUcsZUFBZSxnRkFBZ0YsZUFBZSxvS0FBb0ssZUFBZSxnRkFBZ0YsZUFBZSwyR0FBMkcsa05BQWtOLGVBQWUsZ0ZBQWdGLGVBQWUsNEhBQTRILGtXQUFrVyx3QkFBd0IsMkNBQTJDLHVCQUF1QixrTkFBa04sMkJBQTJCLGlJQUFpSSwyQkFBMkIsaWRBQWlkLHNCQUFzQixxU0FBcVMsOEJBQThCLGlRQUFpUSx5QkFBeUIsWUFBWSx5QkFBeUIsK09BQStPLGdJQUFnSSxtQ0FBbUMsS0FBSyxpQ0FBaUMsOExBQThMLHdCQUF3QixzR0FBc0csd0hBQXdILDhDQUE4Qyw2QkFBNkIseU1BQXlNLHdFQUF3RSwrSjs7Ozs7O0FDQTV2SixrOUM7Ozs7OztBQ0FBLHVzQkFBdXNCLGFBQWEsaUNBQWlDLGFBQWEsZ09BQWdPLG1CQUFtQixxSEFBcUgsc0NBQXNDLDRMQUE0TCxvQ0FBb0MsNEhBQTRILG1CQUFtQixHQUFHLGNBQWMsMkZBQTJGLG1CQUFtQixHQUFHLGNBQWMsR0FBRyxjQUFjLHNOQUFzTiw0QkFBNEIsNlFBQTZRLGtDQUFrQyxvQ0FBb0MscUNBQXFDLE1BQU0saUZBQWlGLDhDQUE4QyxvYzs7Ozs7O0FDQS80RSx1TUFBdU0seUJBQXlCLHlyQjs7Ozs7Ozs7QUNBaE8sOEM7Ozs7OztBQ0FBLDBDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsdUU7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSx5RDs7Ozs7O0FDQUEsd0M7Ozs7OztBQ0FBLDhDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsaUQ7Ozs7OztBQ0FBLDRDOzs7Ozs7QUNBQSw2Qzs7Ozs7O0FDQUEsK0M7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSxvRDs7Ozs7O0FDQUEsa0Q7Ozs7OztBQ0FBLGdEOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsNEM7Ozs7OztBQ0FBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7O0FDQUEsZ0Q7Ozs7OztBQ0FBLG9DOzs7Ozs7QUNBQSwyQzs7Ozs7O0FDQUEsaUM7Ozs7OztBQ0FBLGlDOzs7Ozs7QUNBQSxzRDs7Ozs7O0FDQUEsb0Q7Ozs7OztBQ0FBLGlEOzs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLHNEIiwiZmlsZSI6InNlcnZlci5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNzM0ZjI0MWMxODM2NjkxNDg5MSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtJTG9jYXRpb24sIElQaG90b2dyYXBoZXJ9IGZyb20gJy4uL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5XHJcbntcclxuICAgIHByaXZhdGUgY2RuQmFzZVVybDtcclxuICAgIHByaXZhdGUgc2VydmljZUJhc2VVcmw7XHJcbiAgICBwcml2YXRlIHBpeGVsYXRlZFBsYW5ldEFQSVVybDtcclxuICAgIHByaXZhdGUgbG9jYXRpb25zVXJsO1xyXG4gICAgcHJpdmF0ZSB3b3Jrc2hvcFR5cGVzVXJsO1xyXG4gICAgcHJpdmF0ZSBwaG90b2dyYXBoZXJzVXJsO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbnM6SUxvY2F0aW9uW107XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wVHlwZXM6c3RyaW5nW107XHJcbiAgICBwcml2YXRlIHBob3RvZ3JhcGhlcnM6SVBob3RvZ3JhcGhlcltdO1xyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbk1hcDoge1trZXk6IG51bWJlcl06IElMb2NhdGlvbn0gPSB7fTtcclxuICAgIHByaXZhdGUgbG9jYXRpb25NYXBOYW1lOntba2V5OiBzdHJpbmddOiBJTG9jYXRpb259ID0ge307XHJcblxyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2RuQmFzZVVybCA9IGBodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0YDtcclxuICAgICAgICB0aGlzLnNlcnZpY2VCYXNlVXJsID0gYGh0dHBzOi8vcGl4ZWxhdGVkcGxhbmV0c2VydmljZS5henVyZXdlYnNpdGVzLm5ldGA7XHJcbiAgICAgICAgdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmwgPSBgJHt0aGlzLnNlcnZpY2VCYXNlVXJsfS9hcGkvUGl4ZWxhdGVkYDtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Mb2NhdGlvbnNgO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BUeXBlc1VybCA9IGAke3RoaXMucGl4ZWxhdGVkUGxhbmV0QVBJVXJsfS9Xb3Jrc2hvcFR5cGVzYDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UGl4ZWxhdGVkUGxhbmV0QVBJVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5waXhlbGF0ZWRQbGFuZXRBUElVcmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9uc1VybCgpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXb3Jrc2hvcFR5cGVzVXJsKClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53b3Jrc2hvcFR5cGVzVXJsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNvbHZlSW1hZ2VVcmwocGF0aDpzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2RuQmFzZVVybCArIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc29sdmVMb2NhbEltYWdlVXJsKHBhdGg6c3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBcIi9hc3NldHNcIiArIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldExvY2F0aW9ucygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0V29ya3Nob3BUeXBlcygpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud29ya3Nob3BUeXBlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TG9jYXRpb25zKGxvY2F0aW9uczpJTG9jYXRpb25bXSlcclxuICAgIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvY2F0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbG9jYXRpb24gPSA8SUxvY2F0aW9uPmxvY2F0aW9uc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbk1hcFtsb2NhdGlvbi5pZF0gPSBsb2NhdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbk1hcE5hbWVbbG9jYXRpb24ubmFtZV0gPSBsb2NhdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9jYXRpb25zID0gbG9jYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXM6c3RyaW5nW10pXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFR5cGVzID0gd29ya3Nob3BUeXBlcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9Qcm9taXNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknO1xyXG5cclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NoYXJlZC9nbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYXRpb24ge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV29ya3Nob3BPdmVydmlldyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXIsXHJcbiAgICB3b3Jrc2hvcFR5cGU6IHN0cmluZyxcclxuICAgIG51bWJlck9mV29ya3Nob3BzOiBudW1iZXIsXHJcbiAgICBzdGFydERhdGVGaXJzdD86IERhdGUsXHJcbiAgICBlbmREYXRlRmlyc3Q/OiBEYXRlLFxyXG4gICAgbWluQ29zdD86IG51bWJlcixcclxuICAgIG1heENvc3Q/OiBudW1iZXIsXHJcbiAgICBjb3N0Q3VycmVuY3k/OiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBpbWFnZUxpbms6IHN0cmluZyxcclxuICAgIGxvY2F0aW9uSWQ6IG51bWJlcixcclxuICAgIGxvY2F0aW9uTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wRHRvIHtcclxuICAgIHdvcmtzaG9wczogSVdvcmtzaG9wT3ZlcnZpZXdbXSxcclxuICAgIHRvdGFsOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGhvdG9ncmFwaGVyIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBwcm9maWxlUGhvdG9MaW5rOiBzdHJpbmc7XHJcbiAgICB3ZWJzaXRlTGluazogc3RyaW5nO1xyXG4gICAgbG9jYXRpb25JZD86IG51bWJlcjtcclxuICAgIGxvY2F0aW9uTmFtZTogc3RyaW5nO1xyXG4gICAgbW9yZUluZm86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTXVsdGlXb3Jrc2hvcERldGFpbHMge1xyXG4gICAgc3RhcnREYXRlOiBEYXRlO1xyXG4gICAgZW5kRGF0ZTogRGF0ZTtcclxuICAgIGNvc3Q/OiBudW1iZXI7XHJcbiAgICBsaW5rOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVdvcmtzaG9wRGV0YWlscyB7XHJcbiAgICB3b3Jrc2hvcElkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaXRpbmVyYXJ5OiBJSXRpbmVyYXJ5W107XHJcbiAgICBhZGR0aW9uYWxJbmZvcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2VMaW5rOiBzdHJpbmc7XHJcbiAgICBsaW5rPzogc3RyaW5nO1xyXG4gICAgbG9jYXRpb25JZDogbnVtYmVyO1xyXG4gICAgbG9jYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgICB3b3Jrc2hvcFR5cGU6IHN0cmluZztcclxuICAgIG11bHRpV29ya3Nob3BEZXRhaWxzOiBJTXVsdGlXb3Jrc2hvcERldGFpbHNbXTtcclxuICAgIG1pbkNvc3Q6IG51bWJlcjtcclxuICAgIG1heENvc3Q6IG51bWJlcjtcclxuICAgIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElJdGluZXJhcnkge1xyXG4gICAgZGF5OiBudW1iZXI7XHJcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gICAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcFJlcG9zaXRvcnkge1xyXG5cclxuICAgIHB1YmxpYyBnbG9iYWxDb25zdGFudHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk6IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmdldFdvcmtzaG9wVHlwZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3Jrc2hvcE92ZXJ2aWV3KHBhdGg6IHN0cmluZywgcGFnZTogbnVtYmVyLCBpdGVtc1BlclBhZ2U6IG51bWJlcik6IFByb21pc2U8SVdvcmtzaG9wRHRvPiB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gYCR7cGF0aH0mcGFnZU51bWJlcj0ke3BhZ2V9Jm51bWJlck9mUmVzdWx0cz0ke2l0ZW1zUGVyUGFnZX1gO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHF1ZXJ5KVxyXG4gICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldExvY2F0aW9uc0ludGVybmFsKCk6IFByb21pc2U8SUxvY2F0aW9uW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRMb2NhdGlvbnNVcmwoKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgSUxvY2F0aW9uW107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2F0aW9ucygpOiBQcm9taXNlPElMb2NhdGlvbltdPiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRMb2NhdGlvbnMoKTtcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExvY2F0aW9uc0ludGVybmFsKCkudGhlbihsb2NhdGlvbnMgPT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzLnNldExvY2F0aW9ucyhsb2NhdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9ucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRXb3Jrc2hvcFR5cGVzSW50ZXJuYWwoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFdvcmtzaG9wVHlwZXNVcmwoKSlcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCkgYXMgc3RyaW5nW107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wVHlwZXMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nbG9iYWxDb25zdGFudHMuZ2V0V29ya3Nob3BUeXBlcygpO1xyXG4gICAgICAgIGlmKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCBmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHdUeXBlcyA9IHRoaXMuZ2V0V29ya3Nob3BUeXBlc0ludGVybmFsKCkudGhlbih3b3Jrc2hvcFR5cGVzID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdsb2JhbENvbnN0YW50cy5zZXRXb3Jrc2hvcFR5cGVzKHdvcmtzaG9wVHlwZXMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdvcmtzaG9wVHlwZXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gd1R5cGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3Jrc2hvcERldGFpbHMod29ya3Nob3BJZDogc3RyaW5nKTogUHJvbWlzZTxJV29ya3Nob3BEZXRhaWxzPiB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke3RoaXMuZ2xvYmFsQ29uc3RhbnRzLmdldFBpeGVsYXRlZFBsYW5ldEFQSVVybCgpfS9Xb3Jrc2hvcERldGFpbHM/d29ya3Nob3BJZD0ke3dvcmtzaG9wSWR9YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPElXb3Jrc2hvcERldGFpbHM+cmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvd29ya3Nob3BzL3dvcmtzaG9wUmVwb3NpdG9yeS50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXJ0aWNzMlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXJ0aWNzMlwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5LCBJV29ya3Nob3BPdmVydmlldyB9IGZyb20gJy4uL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnd29ya3Nob3BzLWxpc3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzTGlzdENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgYWN0aXZlUGFnZTogbnVtYmVyO1xyXG5cclxuICAgIHF1ZXJ5UGF0aDogc3RyaW5nO1xyXG4gICAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgYXN5bmNEYXRhOiBJV29ya3Nob3BPdmVydmlld1tdO1xyXG4gICAgcGFnZTogbnVtYmVyID0gMTtcclxuICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICBwYWdlTnVtYmVyczogbnVtYmVyW107XHJcbiAgICBsb2FkaW5nOiBib29sZWFuO1xyXG4gICAgd29ya3Nob3BzOiBJV29ya3Nob3BPdmVydmlld1tdO1xyXG5cclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBhbnk7XHJcbiAgICBwcml2YXRlIGNkUmVmOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsIHByaXZhdGUgd29ya3Nob3BSZXBvc2l0b3J5OiBXb3Jrc2hvcFJlcG9zaXRvcnksIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSByb3V0ZTpBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gICAgICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYW5ndWxhcnRpY3MyO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BzID0gW107XHJcbiAgICAgICAgdGhpcy5jZFJlZiA9IGNkUmVmO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNhbml0aXplVXJsKHVybDogc3RyaW5nKSA6IFNhZmVVcmwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgICB2YXIgbW9udGhOYW1lcyA9IFtcclxuICAgICAgICAgICAgXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIixcclxuICAgICAgICAgICAgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIixcclxuICAgICAgICAgICAgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIixcclxuICAgICAgICAgICAgXCJOb3ZcIiwgXCJEZWNcIlxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIGRhdGVWYWwgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICB2YXIgZGF5ID0gZGF0ZVZhbC5nZXREYXRlKCk7XHJcbiAgICAgICAgdmFyIG1vbnRoSW5kZXggPSBkYXRlVmFsLmdldE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIHllYXIgPSBkYXRlVmFsLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBgJHttb250aE5hbWVzW21vbnRoSW5kZXhdfSAke2RheX0gJHt5ZWFyfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V29ya3Nob3BzRGF0YShwYXRoOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgd3NQZXJQYWdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdHZXRXb3Jrc2hvcHNFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcHNMaXN0Q29tcG9uZW50JyB9IH0pO1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5xdWVyeVBhdGggPSBwYXRoO1xyXG4gICAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gd3NQZXJQYWdlO1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldFdvcmtzaG9wT3ZlcnZpZXcocGF0aCwgcGFnZSwgd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVycyA9IEFycmF5KE1hdGguY2VpbChyZXMudG90YWwgLyB3c1BlclBhZ2UpKS5maWxsKDApLm1hcCgoeCwgaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3luY0RhdGEgPSByZXMud29ya3Nob3BzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlV29ya3Nob3BEZXRhaWxzVXJsKHdvcmtzaG9wSWQ6IHN0cmluZywgd29ya3Nob3BOYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHdvcmtzaG9wTmFtZSA9IHdvcmtzaG9wTmFtZS5yZXBsYWNlKC9bICgpJiNdL2csIFwiLVwiKTtcclxuICAgICAgICByZXR1cm4gYC9waG90b2dyYXBoeS13b3Jrc2hvcC1kZXRhaWxzLyR7d29ya3Nob3BOYW1lfS8ke3dvcmtzaG9wSWR9YDtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQYWdlTGluayhwYWdlTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVVybChwYWdlTnVtYmVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlVXJsKHBhZ2UgOiBudW1iZXIpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbG9jYXRpb25zOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGNhdGVnb3JpZXM6IHN0cmluZztcclxuICAgICAgICBsZXQgc3RhcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgbGV0IGVuZERhdGU6IHN0cmluZztcclxuICAgICAgICBsZXQgbWluUHJpY2U6IHN0cmluZztcclxuICAgICAgICBsZXQgbWF4UHJpY2U6IHN0cmluZztcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbG9jYXRpb25zID0gcGFyYW1zWydsb2NhdGlvbnMnXTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBwYXJhbXNbJ2NhdGVnb3JpZXMnXTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZSA9IHBhcmFtc1snc3RhcnREYXRlJ107XHJcbiAgICAgICAgICAgICAgICBlbmREYXRlID0gcGFyYW1zWydlbmREYXRlJ107XHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZSA9IHBhcmFtc1snbWluUHJpY2UnXTtcclxuICAgICAgICAgICAgICAgIG1heFByaWNlID0gcGFyYW1zWydtYXhQcmljZSddO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgaWYoIXN0YXJ0RGF0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgIHN0YXJ0RGF0ZSA9IGAke3RvZGF5LmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFlbmREYXRlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgIGVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBgL3dvcmtzaG9wcy8ke3BhZ2V9P3N0YXJ0RGF0ZT0ke3N0YXJ0RGF0ZX0mZW5kRGF0ZT0ke2VuZERhdGV9YDtcclxuICAgICAgICBpZihtaW5QcmljZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbWluUHJpY2U9JHttaW5QcmljZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgaWYobWF4UHJpY2UpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJm1heFByaWNlPSR7bWF4UHJpY2V9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmKGxvY2F0aW9ucylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbG9jYXRpb25zPSR7bG9jYXRpb25zfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZihjYXRlZ29yaWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZjYXRlZ29yaWVzPSR7Y2F0ZWdvcmllc31gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Fib3V0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Fib3V0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSB9IGZyb20gJy4uL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlJyxcclxuICAgIGhvc3Q6IHsgJyhkb2N1bWVudDpjbGljayknOiAnaGFuZGxlQ2xpY2soJGV2ZW50KScgfSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbXBvbmVudCB7XHJcbiAgICBcclxuICAgIHB1YmxpYyBxdWVyeSA9ICcnO1xyXG4gICAgcHVibGljIGNvdW50cmllcyA9IFtdO1xyXG4gICAgcHVibGljIGZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgcHVibGljIGVsZW1lbnRSZWY7XHJcbiAgICBwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5O1xyXG5cclxuICAgIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG15RWxlbWVudDogRWxlbWVudFJlZiwgd29ya3Nob3BSZXBvOiBXb3Jrc2hvcFJlcG9zaXRvcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRSZWYgPSBteUVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkgPSB3b3Jrc2hvcFJlcG87XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy53b3Jrc2hvcFJlcG9zaXRvcnkuZ2V0TG9jYXRpb25zKCkudGhlbihsb2MgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxvYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudHJpZXMucHVzaChsb2NbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucXVlcnkgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSB0aGlzLmNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRoaXMucXVlcnkudG9Mb3dlckNhc2UoKSkgPiAtMTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0KGl0ZW0pIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5ID0gaXRlbTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGNsaWNrZWRDb21wb25lbnQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgdmFyIGluc2lkZSA9IGZhbHNlO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaWYgKGNsaWNrZWRDb21wb25lbnQgPT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbnNpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNsaWNrZWRDb21wb25lbnQgPSBjbGlja2VkQ29tcG9uZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfSB3aGlsZSAoY2xpY2tlZENvbXBvbmVudCk7XHJcbiAgICAgICAgaWYgKCFpbnNpZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZExpc3QgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGhpcy5xdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC11cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udGFjdC11cy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250YWN0VXNDb21wb25lbnQge1xyXG5cclxuICBzdWJtaXR0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBmbmFtZTogc3RyaW5nO1xyXG4gIHN1YmplY3RUZXh0OiBzdHJpbmc7XHJcbiAgbWVzc2FnZVRleHQ6IHN0cmluZztcclxuICBlbWFpbElkOiBzdHJpbmc7XHJcbiAgc2hvd01lc3NhZ2VCb3g6IGJvb2xlYW47XHJcbiAgc3VibWl0TWVzc2FnZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgZmllbGRzOiBzdHJpbmc7XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93TWVzc2FnZUJveCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoaWRlTWVzc2FnZWJveCgpIHtcclxuICAgIHRoaXMuc2hvd01lc3NhZ2VCb3ggPSBmYWxzZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnN1Ym1pdE1lc3NhZ2UgPSBcIk1lc3NhZ2Ugc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVwiO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlciB9IGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLmNvbXBvbmVudCdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS1waWNrZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQge1xyXG4gIHByaXZhdGUgZnJvbURhdGVQaWNrZXJPcHRpb25zO1xyXG4gIHByaXZhdGUgdG9EYXRlUGlja2VyT3B0aW9ucztcclxuICBwcml2YXRlIGZyb21EYXRlTGFiZWw6IHN0cmluZyA9IFwiRnJvbSBkYXRlXCI7XHJcbiAgcHJpdmF0ZSB0b0RhdGVMYWJlbDogc3RyaW5nID0gXCJUbyBkYXRlXCI7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c0RhdGU7XHJcbiAgcHJpdmF0ZSBzZWxGcm9tRGF0ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2VsVG9EYXRlOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZEZyb21DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZFRvQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHByZXZpb3VzID0gbmV3IERhdGUoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSwgY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEsIGN1cnJlbnREYXRlLmdldERhdGUoKSAtIDEpO1xyXG4gICAgdGhpcy5wcmV2aW91c0RhdGUgPSB7IHllYXI6IHByZXZpb3VzLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBwcmV2aW91cy5nZXRNb250aCgpLCBkYXk6IHByZXZpb3VzLmdldERhdGUoKSB9O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldFRvRGF0ZShtaWxpc2Vjb25kczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG1pbGlzZWNvbmRzKTtcclxuICAgIHRoaXMuc2VsVG9EYXRlID0gZGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsMTApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEZyb21EYXRlKG1pbGlzZWNvbmRzOiBudW1iZXIpIHtcclxuICAgIGxldCBkYXRlID0gbmV3IERhdGUobWlsaXNlY29uZHMpO1xyXG4gICAgdGhpcy5zZWxGcm9tRGF0ZSA9IGRhdGUudG9JU09TdHJpbmcoKS5zbGljZSgwLDEwKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mcm9tRGF0ZVBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICAgIGRhdGVGb3JtYXQ6ICd5eXl5LW1tLWRkJyxcclxuICAgICAgbWFya0N1cnJlbnREYXk6IHRydWUsXHJcbiAgICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgbW9udGhTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgZGlzYWJsZVVudGlsOiB0aGlzLnByZXZpb3VzRGF0ZVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnRvRGF0ZVBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGF0ZUZvcm1hdDogJ3l5eXktbW0tZGQnLFxyXG4gICAgICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxyXG4gICAgICAgIHllYXJTZWxlY3RvcjogdHJ1ZSxcclxuICAgICAgICBtb250aFNlbGVjdG9yOiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVVbnRpbDogdGhpcy5wcmV2aW91c0RhdGVcclxuICAgICAgfTtcclxuICB9XHJcblxyXG4gIG9uRnJvbURhdGVDaGFuZ2VkKGV2ZW50OiBhbnkpIHtcclxuICAgIHZhciBzZWxlY3RlZERhdGUgPSBldmVudC5kYXRlO1xyXG4gICAgdGhpcy50b0RhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkYXRlRm9ybWF0OiAneXl5eS1tbS1kZCcsXHJcbiAgICAgIG1hcmtDdXJyZW50RGF5OiB0cnVlLFxyXG4gICAgICB5ZWFyU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIG1vbnRoU2VsZWN0b3I6IHRydWUsXHJcbiAgICAgIGRpc2FibGVVbnRpbDoge1xyXG4gICAgICAgIHllYXI6IHNlbGVjdGVkRGF0ZS55ZWFyLFxyXG4gICAgICAgIG1vbnRoOiBzZWxlY3RlZERhdGUubW9udGgsXHJcbiAgICAgICAgZGF5OiBzZWxlY3RlZERhdGUuZGF5XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZEZyb21DaGFuZ2VkLmVtaXQoc2VsZWN0ZWREYXRlKTtcclxuICB9XHJcblxyXG4gIG9uVG9EYXRlQ2hhbmdlZChldmVudDogYW55KSB7XHJcbiAgICB2YXIgc2VsZWN0ZWREYXRlID0gZXZlbnQuZGF0ZTtcclxuICAgIHRoaXMuZnJvbURhdGVQaWNrZXJPcHRpb25zID0ge1xyXG4gICAgICBkaXNhYmxlVW50aWw6IHRoaXMucHJldmlvdXNEYXRlLFxyXG4gICAgICBkaXNhYmxlU2luY2U6IHtcclxuICAgICAgICB5ZWFyOiBzZWxlY3RlZERhdGUueWVhcixcclxuICAgICAgICBtb250aDogc2VsZWN0ZWREYXRlLm1vbnRoLFxyXG4gICAgICAgIGRheTogc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZWxlY3RlZFRvQ2hhbmdlZC5lbWl0KHNlbGVjdGVkRGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RhdGUtcGlja2VyL2RhdGUtcGlja2VyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZXJyb3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZXJyb3IuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnXHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWhvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuQFZpZXdDaGlsZChXb3Jrc2hvcHNMaXN0Q29tcG9uZW50KSB3b3Jrc2hvcHNMaXN0Q2hpbGRDb21wOldvcmtzaG9wc0xpc3RDb21wb25lbnQ7XHJcblxyXG4gIHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzIDogR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdGxldCBzdGFydERhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0bGV0IGVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcblx0XHRsZXQgcXVlcnkgPSBgJHt0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRQaXhlbGF0ZWRQbGFuZXRBUElVcmwoKX0vV29ya3Nob3BzP3N0YXJ0RGF0ZUZpbHRlcj0ke3N0YXJ0RGF0ZX0mZW5kRGF0ZUZpbHRlcj0ke2VuZERhdGV9YDtcclxuXHRcdHRoaXMud29ya3Nob3BzTGlzdENoaWxkQ29tcC5nZXRXb3Jrc2hvcHNEYXRhKHF1ZXJ5LCAxLCA0KTtcclxuICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHtMb2NhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50LmNzcyddICAgIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZVJlZGlyZWN0Q29tcG9uZW50IHsgXHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIHByaXZhdGUgYW5ndWxhcnRpY3MyOiBhbnlcclxuICAgIHByaXZhdGUgdGltZXI6YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG5cdFx0YW5ndWxhcnRpY3MyOiBBbmd1bGFydGljczIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbixcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTpOZ1pvbmUpIHtcclxuXHRcdFx0dGhpcy5hbmd1bGFydGljczIgPSBhbmd1bGFydGljczI7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmc7XHJcblx0XHR0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgdXJsID0gcGFyYW1zWydleHRlcm5hbFVybCddO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdOYXZpZ2F0ZVRvRXh0ZXJuYWxVcmwnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnTmF2aWdhdGlvbkV2ZW50JyB9fSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gT2JzZXJ2YWJsZS5pbnRlcnZhbCg1MDAwKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICAgICAgbmV4dChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgVVJMIChBc3N1bWVzIHRoZSB1cmwgaXMgaHR0cDovLyBvciBodHRwczovL1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdvQmFjaygpIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcGFnZS1yZWRpcmVjdC9wYWdlLXJlZGlyZWN0LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByaXZhY3lDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdvcmtzaG9wUmVwb3NpdG9yeSwgSVdvcmtzaG9wRGV0YWlscyB9IGZyb20gJy4uL3NlcnZpY2VzL3dvcmtzaG9wcy93b3Jrc2hvcFJlcG9zaXRvcnknXHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUltYWdlT2JqZWN0IHtcclxuICAgIGltYWdlTGluazogc3RyaW5nO1xyXG4gICAgaGlkZUltYWdlOiBib29sZWFuXHJcbn1cclxuXHJcbmludGVyZmFjZSBJVGFicyB7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgc2hvd1RhYjogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQge1xyXG4gICAgd29ya3Nob3BEZXRhaWxzOiBJV29ya3Nob3BEZXRhaWxzO1xyXG4gICAgaW1hZ2VzTGluazogSUltYWdlT2JqZWN0W107XHJcbiAgICBoaWRlTW9kYWw6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHNsaWRlSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBwcml2YXRlIHRhYnM6IElUYWJzW107XHJcblxyXG4gICAgcHJpdmF0ZSBwcmV2aW91c0FjdGl2ZVRhYjogSVRhYnM7XHJcbiAgICBwcml2YXRlIHRhYmNvbnRlbnQ6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnQ+O1xyXG4gICAgcHJpdmF0ZSB0YWJMaW5rczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSB3b3Jrc2hvcFJlcG9zaXRvcnk6IFdvcmtzaG9wUmVwb3NpdG9yeSxcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcclxuICAgICAgICB0aGlzLndvcmtzaG9wRGV0YWlscyA9IDxhbnk+e307XHJcbiAgICAgICAgdGhpcy5oaWRlTW9kYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2xpZGVJbmRleCA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTW9kYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2V0SW1nRGF0YSgpO1xyXG4gICAgICAgIGxldCB3b3Jrc2hvcElkOiBzdHJpbmc7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgd29ya3Nob3BJZCA9IHBhcmFtc1snaWQnXTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldFdvcmtzaG9wRGV0YWlsKHdvcmtzaG9wSWQpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRhYnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmtzaG9wRGV0YWlsKHdvcmtzaG9wSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMud29ya3Nob3BSZXBvc2l0b3J5LmdldFdvcmtzaG9wRGV0YWlscyh3b3Jrc2hvcElkKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud29ya3Nob3BEZXRhaWxzID0gZGF0YTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmhpZGVNb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNsaWRlKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBwbHVzU2xpZGVzKG4pIHtcclxuICAgICAgICB0aGlzLnNob3dTbGlkZXModGhpcy5zbGlkZUluZGV4ICs9IG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRTbGlkZShuKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGVzKHRoaXMuc2xpZGVJbmRleCA9IG4pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTbGlkZXMobikge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsSW1hZ2VzID0gdGhpcy5pbWFnZXNMaW5rLmxlbmd0aDtcclxuICAgICAgICBpZiAobiA+IHRvdGFsSW1hZ2VzKSB7IHRoaXMuc2xpZGVJbmRleCA9IDEgfVxyXG4gICAgICAgIGlmIChuIDwgMSkgeyB0aGlzLnNsaWRlSW5kZXggPSB0b3RhbEltYWdlcyAtIDEgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWxJbWFnZXM7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlc0xpbmtbaV0uaGlkZUltYWdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbWFnZXNMaW5rW3RoaXMuc2xpZGVJbmRleCAtIDFdLmhpZGVJbWFnZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRJbWdEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaW1hZ2VzTGluayA9IFt7XHJcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9SaWNrSHVsYmVydC9oZHIuanBnXCIsXHJcbiAgICAgICAgICAgIGhpZGVJbWFnZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbWFnZUxpbms6IFwiYXNzZXRzL2ltZy93b3Jrc2hvcHMvVGltVm9sbG1lci9wZXJ1LmpwZ1wiLFxyXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL1JpY2tIdWxiZXJ0L3VyYmFuLmpwZ1wiLFxyXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL0NyYWlnTWMvdGV0b25zLmpwZ1wiLFxyXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW1hZ2VMaW5rOiBcImFzc2V0cy9pbWcvd29ya3Nob3BzL0thdGhsZWVuUmVlZGVyL09PQS5qcGdcIixcclxuICAgICAgICAgICAgaGlkZUltYWdlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGltYWdlTGluazogXCJhc3NldHMvaW1nL3dvcmtzaG9wcy9SaWNrSHVsYmVydC9jaGljYWdvLmpwZ1wiLFxyXG4gICAgICAgICAgICBoaWRlSW1hZ2U6IHRydWVcclxuICAgICAgICB9XVxyXG4gICAgfVxyXG5cclxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHZhciBtb250aE5hbWVzID0gW1xyXG4gICAgICAgICAgICBcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLCBcIkRlY1wiXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgZGF0ZVZhbCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIHZhciBkYXkgPSBkYXRlVmFsLmdldERhdGUoKTtcclxuICAgICAgICB2YXIgbW9udGhJbmRleCA9IGRhdGVWYWwuZ2V0TW9udGgoKTtcclxuICAgICAgICB2YXIgeWVhciA9IGRhdGVWYWwuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGAke21vbnRoTmFtZXNbbW9udGhJbmRleF19ICR7ZGF5fSAke3llYXJ9YDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaW5pdGlhbGl6ZVRhYnMoKSB7XHJcbiAgICAgICAgdGhpcy50YWJzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgc2hvd1RhYjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiR2FsbGVyeVwiLFxyXG4gICAgICAgICAgICAgICAgc2hvd1RhYjogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUGhvdG9ncmFwaGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgc2hvd1RhYjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2ZVRhYiA9IHRoaXMudGFic1swXTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiLnNob3dUYWIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5UYWJzKHRhYk51bWJlcjogbnVtYmVyKSB7ICBcclxuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiLnNob3dUYWIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRhYnNbdGFiTnVtYmVyXS5zaG93VGFiID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzQWN0aXZlVGFiID0gdGhpcy50YWJzW3RhYk51bWJlcl07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWRldGFpbHMvd29ya3Nob3AtZGV0YWlscy5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5LCBJTG9jYXRpb24sIElQaG90b2dyYXBoZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5J1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczIgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknXHJcbmltcG9ydCB7IEF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4uL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vZGF0ZS1waWNrZXIvZGF0ZS1waWNrZXIuY29tcG9uZW50J1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd3b3Jrc2hvcC1maWx0ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BGaWx0ZXJDb21wb25lbnQge1xyXG5cclxuICBAT3V0cHV0KCkgZnJvbURhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSB0b0RhdGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBsb2NhdGlvbkZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgbWluUHJpY2VGaWx0ZXJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBtYXhQcmljZUZpbHRlckNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGFwcGx5RmlsdGVycyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBcclxuICBwcml2YXRlIGFuZ3VsYXJ0aWNzMjogQW5ndWxhcnRpY3MyO1xyXG5cclxuICBwdWJsaWMgY2l0aWVzOiBhbnlbXTtcclxuICBwdWJsaWMgY2F0ZWdvcmllczogYW55W107XHJcblxyXG4gIC8vIHByaWNlIHZhbHVlc1xyXG4gIHByaXZhdGUgbWluUHJpY2VWYWx1ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgbWF4UHJpY2VWYWx1ZTogbnVtYmVyO1xyXG4gIFxyXG4gIC8qKiBsYWJlbHMgZm9yIGZpbHRlcnMgKi9cclxuICBwdWJsaWMgY2l0eURyb3Bkb3duTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgcGhvdG9ncmFwaGVyRHJvcGRvd25MYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBjYXRlZ29yeURyb3Bkb3duTGFiZWw6IHN0cmluZztcclxuICBwdWJsaWMgZnJvbURhdGVMYWJlbDogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b0RhdGVMYWJlbDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGNoZWNrYm94RWxlbWVudHM6IE5vZGVMaXN0T2Y8RWxlbWVudD47XHJcblxyXG4gIC8qKiBkYXRlIGZpbHRlcnMgKi9cclxuICBwdWJsaWMgbWluRnJvbURhdGU6IERhdGU7XHJcbiAgcHVibGljIG1heEZyb21EYXRlOiBEYXRlO1xyXG4gIHB1YmxpYyBtaW5Ub0RhdGU6IERhdGU7XHJcbiAgcHVibGljIG1heFRvRGF0ZTogRGF0ZTtcclxuICBwdWJsaWMgZnJvbURhdGU6IERhdGU7XHJcbiAgcHVibGljIHRvRGF0ZTogRGF0ZTtcclxuXHJcbiAgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHM6R2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICBwcml2YXRlIHdvcmtzaG9wUmVwbyA6IFdvcmtzaG9wUmVwb3NpdG9yeTtcclxuXHJcbiAgcHVibGljIHNob3dGaWx0ZXI6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoQXV0b2NvbXBsZXRlQ29tcG9uZW50KSBhdXRvY29tcGxldGVDaGlsZENvbXA6QXV0b2NvbXBsZXRlQ29tcG9uZW50O1xyXG4gIEBWaWV3Q2hpbGQoRGF0ZVBpY2tlckNvbXBvbmVudCkgZGF0ZVBpY2tlckNoaWxkQ29tcDpEYXRlUGlja2VyQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdvcmtzaG9wUmVwb3NpdG9yeTogV29ya3Nob3BSZXBvc2l0b3J5LCBwcml2YXRlIGE6IEFuZ3VsYXJ0aWNzMiwgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5Okdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkpIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyID0gYTtcclxuICAgIHRoaXMuZ2xvYmFsQ29uc3RhbnRzID0gZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuICAgIHRoaXMud29ya3Nob3BSZXBvID0gd29ya3Nob3BSZXBvc2l0b3J5O1xyXG4gICAgXHJcbiAgICB0aGlzLnVwZGF0ZUNhdGVnb3JpZXMoKTtcclxuICAgIFxyXG4gICAgdGhpcy5jaXR5RHJvcGRvd25MYWJlbCA9IFwiTG9jYXRpb25cIjtcclxuICAgIHRoaXMucGhvdG9ncmFwaGVyRHJvcGRvd25MYWJlbCA9IFwiUGhvdG9ncmFwaGVyXCI7XHJcbiAgICB0aGlzLmNhdGVnb3J5RHJvcGRvd25MYWJlbCA9IFwiQ2F0ZWdvcnlcIjtcclxuICAgIHRoaXMuZnJvbURhdGVMYWJlbCA9IFwiRnJvbVwiO1xyXG4gICAgdGhpcy50b0RhdGVMYWJlbCA9IFwiVG9cIjtcclxuXHJcbiAgICB0aGlzLm1pbkZyb21EYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHRoaXMuc2hvd0ZpbHRlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZXNGcm9tUGFyYW1ldGVycyhtaW5QcmljZTpudW1iZXIsIG1heFByaWNlOm51bWJlciwgY2F0ZWdvcmllczpzdHJpbmcsIGxvY2F0aW9uczpzdHJpbmcsIHN0YXJ0RGF0ZTpzdHJpbmcsIGVuZERhdGU6c3RyaW5nKVxyXG4gIHtcclxuICAgIGlmKG1pblByaWNlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWluUHJpY2VWYWx1ZSA9IG1pblByaWNlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubWluUHJpY2VWYWx1ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYobWF4UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXhQcmljZVZhbHVlID0gbWF4UHJpY2U7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5tYXhQcmljZVZhbHVlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZihlbmREYXRlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZGF0ZVBpY2tlckNoaWxkQ29tcC5zZXRUb0RhdGUoRGF0ZS5wYXJzZShlbmREYXRlKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldFRvRGF0ZShudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZihzdGFydERhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldEZyb21EYXRlKERhdGUucGFyc2Uoc3RhcnREYXRlKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kYXRlUGlja2VyQ2hpbGRDb21wLnNldEZyb21EYXRlKG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKGxvY2F0aW9ucylcclxuICAgIHtcclxuICAgICAgICB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRMb2NhdGlvbnMoKS50aGVuKGxvYyA9PiB7XHJcbiAgICAgICAgICAgIGxldCBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxvYy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihsb2NbaV0uaWQgPT09ICtsb2NhdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlQ2hpbGRDb21wLnNlbGVjdChsb2NbaV0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihmbGFnKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGlsZENvbXAuc2VsZWN0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVDaGlsZENvbXAuc2VsZWN0KFwiXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2F0ZWdvcmllcygpXHJcbiAge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gW107XHJcbiAgICB0aGlzLndvcmtzaG9wUmVwby5nZXRXb3Jrc2hvcFR5cGVzKCkudGhlbih3VHlwZXMgPT4ge1xyXG4gICAgICAgIGlmKHdUeXBlcykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goe2xhYmVsOndUeXBlc1tpXSwgdmFsdWU6d1R5cGVzW2ldfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZyb21EYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gdmFsdWU7XHJcblx0dGhpcy5hbmd1bGFydGljczIuZXZlbnRUcmFjay5uZXh0KHsgYWN0aW9uOiAnRnJvbURhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG4gICAgdGhpcy5mcm9tRGF0ZUNoYW5nZWQuZW1pdCh0aGlzLmZyb21EYXRlKTtcclxuICB9XHJcblxyXG4gIGdldFRvRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy50b0RhdGUgPSB2YWx1ZTtcclxuXHR0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdUb0RhdGVGaWx0ZXJFdmVudCcsIHByb3BlcnRpZXM6IHsgY2F0ZWdvcnk6ICdXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCcgfX0pO1xyXG5cdHRoaXMudG9EYXRlQ2hhbmdlZC5lbWl0KHRoaXMudG9EYXRlKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgIHRoaXMuYXBwbHlGaWx0ZXJzLmVtaXQodHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG4gIHVwZGF0ZU1pblByaWNlKHZhbHVlOm51bWJlcilcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdNaW5QcmljZUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLm1pblByaWNlRmlsdGVyQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdXBkYXRlTWF4UHJpY2UodmFsdWU6bnVtYmVyKVxyXG4gIHtcclxuICAgIHRoaXMuYW5ndWxhcnRpY3MyLmV2ZW50VHJhY2submV4dCh7IGFjdGlvbjogJ01heFByaWNlRmlsdGVyRXZlbnQnLCBwcm9wZXJ0aWVzOiB7IGNhdGVnb3J5OiAnV29ya3Nob3BGaWx0ZXJDb21wb25lbnQnIH19KTtcclxuICAgIHRoaXMubWF4UHJpY2VGaWx0ZXJDaGFuZ2VkLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRGaWx0ZXJzKGlucHV0TmFtZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHNlbGVjdGVkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgdGhpcy5jaGVja2JveEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbbmFtZT0ke2lucHV0TmFtZX1dOmNoZWNrZWRgKTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGVja2JveEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciB4ID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5jaGVja2JveEVsZW1lbnRzW2ldO1xyXG4gICAgICBzZWxlY3RlZC5wdXNoKHgudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZWxlY3RlZDtcclxuICB9XHJcbiAgXHJcbiAgdXBkYXRlTG9jYXRpb24odmFsdWU6IGFueSlcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdMb2NhdGlvbkZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICB0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nZXRMb2NhdGlvbnMoKS50aGVuKGxvYyA9PiB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxvYy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGxvY1tpXS5uYW1lID09PSB2YWx1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbkZpbHRlckNoYW5nZWQuZW1pdChsb2NbaV0uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoZmxhZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uRmlsdGVyQ2hhbmdlZC5lbWl0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB1cGRhdGVDYXRlZ29yeUxpc3QodmFsdWU6IHN0cmluZylcclxuICB7XHJcbiAgICB0aGlzLmFuZ3VsYXJ0aWNzMi5ldmVudFRyYWNrLm5leHQoeyBhY3Rpb246ICdDYXRlZ29yeUZpbHRlckV2ZW50JywgcHJvcGVydGllczogeyBjYXRlZ29yeTogJ1dvcmtzaG9wRmlsdGVyQ29tcG9uZW50JyB9fSk7XHJcbiAgICB0aGlzLmNhdGVnb3J5RmlsdGVyQ2hhbmdlZC5lbWl0KHZhbHVlKTtcclxuICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wLWZpbHRlci93b3Jrc2hvcC1maWx0ZXIuY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFdvcmtzaG9wc0xpc3RDb21wb25lbnQgfSBmcm9tICcuLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnXHJcbmltcG9ydCB7IFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQnXHJcbmltcG9ydCB7IEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnkgfSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3dvcmtzaG9wcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc2hvcHMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgV29ya3Nob3BzQ29tcG9uZW50IHtcclxuXHRwcml2YXRlIHF1ZXJ5OiBzdHJpbmc7XHJcblx0cHJpdmF0ZSBzdGFydERhdGU6IHN0cmluZztcclxuXHRwcml2YXRlIGVuZERhdGU6IHN0cmluZztcclxuXHRwcml2YXRlIGxvY2F0aW9uSWRMaXN0OnN0cmluZztcclxuXHRwcml2YXRlIGNhdGVnb3J5TGlzdDpzdHJpbmc7XHJcblx0cHJpdmF0ZSBtaW5QcmljZTpudW1iZXI7XHJcblx0cHJpdmF0ZSBtYXhQcmljZTpudW1iZXI7XHJcbiAgICBwcml2YXRlIGhpZGVGaWx0ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHBhZ2VOdW1iZXI6IG51bWJlcjtcclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSB3b3Jrc2hvcHNQZXJQYWdlOiBudW1iZXIgPSA4O1x0XHJcblx0XHJcblx0cHJpdmF0ZSBnbG9iYWxDb25zdGFudHM6R2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHRcclxuXHRAVmlld0NoaWxkKFdvcmtzaG9wc0xpc3RDb21wb25lbnQpIHdvcmtzaG9wc0xpc3RDaGlsZENvbXA6V29ya3Nob3BzTGlzdENvbXBvbmVudDtcclxuXHRAVmlld0NoaWxkKFdvcmtzaG9wRmlsdGVyQ29tcG9uZW50KSB3b3Jrc2hvcHNGaWx0ZXJDaGlsZENvbXA6V29ya3Nob3BGaWx0ZXJDb21wb25lbnQ7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTpHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5LCBwcml2YXRlIHJvdXRlOkFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpXHJcblx0e1xyXG5cdFx0dGhpcy5nbG9iYWxDb25zdGFudHMgPSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5O1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZihldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFyYW1ldGVycygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVVybCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUZpbHRlckRyb3Bkb3duKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSBldmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0UGFyYW1ldGVycygpIHtcclxuICAgICAgICB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gcGFyYW1zWydwYWdlTnVtYmVyJ107XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb25JZExpc3QgPSBwYXJhbXNbJ2xvY2F0aW9ucyddO1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdCA9IHBhcmFtc1snY2F0ZWdvcmllcyddO1xyXG4gICAgICAgICAgICB0aGlzLm1pblByaWNlID0gcGFyYW1zWydtaW5QcmljZSddO1xyXG4gICAgICAgICAgICB0aGlzLm1heFByaWNlID0gcGFyYW1zWydtYXhQcmljZSddO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHBhcmFtc1snc3RhcnREYXRlJ107XHJcbiAgICAgICAgICAgIHRoaXMuZW5kRGF0ZSA9IHBhcmFtc1snZW5kRGF0ZSddO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGlmKCF0aGlzLnN0YXJ0RGF0ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gYCR7dG9kYXkuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS8keyh0b2RheS5nZXRNb250aCgpKzEpLnRvU3RyaW5nKCl9LyR7dG9kYXkuZ2V0RGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIXRoaXMuZW5kRGF0ZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBgJHsodG9kYXkuZ2V0RnVsbFllYXIoKSsxMCkudG9TdHJpbmcoKX0vJHsodG9kYXkuZ2V0TW9udGgoKSsxKS50b1N0cmluZygpfS8ke3RvZGF5LmdldERhdGUoKS50b1N0cmluZygpfWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud29ya3Nob3BzRmlsdGVyQ2hpbGRDb21wLnNldFZhbHVlc0Zyb21QYXJhbWV0ZXJzKHRoaXMubWluUHJpY2UsIHRoaXMubWF4UHJpY2UsIHRoaXMuY2F0ZWdvcnlMaXN0LCB0aGlzLmxvY2F0aW9uSWRMaXN0LCB0aGlzLnN0YXJ0RGF0ZSwgdGhpcy5lbmREYXRlKTtcclxuICAgIH1cclxuXHRcclxuXHRuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcnMoKTtcclxuXHRcdHRoaXMudXBkYXRlVXJsKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVVybCgpIDogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdXJsID0gYC93b3Jrc2hvcHMvJHt0aGlzLnBhZ2VOdW1iZXJ9P3N0YXJ0RGF0ZT0ke3RoaXMuc3RhcnREYXRlfSZlbmREYXRlPSR7dGhpcy5lbmREYXRlfWA7XHJcbiAgICAgICAgaWYodGhpcy5taW5QcmljZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXJsICs9IGAmbWluUHJpY2U9JHt0aGlzLm1pblByaWNlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1heFByaWNlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZtYXhQcmljZT0ke3RoaXMubWF4UHJpY2V9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubG9jYXRpb25JZExpc3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVybCArPSBgJmxvY2F0aW9ucz0ke3RoaXMubG9jYXRpb25JZExpc3R9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2F0ZWdvcnlMaXN0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gYCZjYXRlZ29yaWVzPSR7dGhpcy5jYXRlZ29yeUxpc3R9YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cdFxyXG5cdHVwZGF0ZVVybCgpXHJcblx0e1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBgJHt0aGlzLmdsb2JhbENvbnN0YW50cy5nZXRQaXhlbGF0ZWRQbGFuZXRBUElVcmwoKX0vV29ya3Nob3BzP3N0YXJ0RGF0ZUZpbHRlcj0ke3RoaXMuc3RhcnREYXRlfSZlbmREYXRlRmlsdGVyPSR7dGhpcy5lbmREYXRlfWA7XHJcblx0XHRpZih0aGlzLmxvY2F0aW9uSWRMaXN0ICE9IG51bGwgJiYgdGhpcy5sb2NhdGlvbklkTGlzdCAhPSBcIlwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0mbG9jYXRpb25JZEZpbHRlcj0ke3RoaXMubG9jYXRpb25JZExpc3R9YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5jYXRlZ29yeUxpc3QgIT0gbnVsbCAmJiB0aGlzLmNhdGVnb3J5TGlzdCAhPSBcIlwiKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLnF1ZXJ5ID0gYCR7dGhpcy5xdWVyeX0md29ya3Nob3BUeXBlPSR7dGhpcy5jYXRlZ29yeUxpc3R9YDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5taW5QcmljZSA+IDApXHJcblx0XHR7XHJcblx0XHRcdHRoaXMucXVlcnkgPSBgJHt0aGlzLnF1ZXJ5fSZtaW5QcmljZT0ke3RoaXMubWluUHJpY2UudG9TdHJpbmcoKX1gO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZih0aGlzLm1heFByaWNlID4gMClcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5xdWVyeSA9IGAke3RoaXMucXVlcnl9Jm1heFByaWNlPSR7dGhpcy5tYXhQcmljZS50b1N0cmluZygpfWA7XHJcblx0XHR9XHJcbiAgICAgICAgXHJcblx0XHRpZih0aGlzLnF1ZXJ5ICYmIHRoaXMucGFnZU51bWJlcikge1xyXG5cdFx0XHR0aGlzLndvcmtzaG9wc0xpc3RDaGlsZENvbXAuZ2V0V29ya3Nob3BzRGF0YSh0aGlzLnF1ZXJ5LCB0aGlzLnBhZ2VOdW1iZXIsIHRoaXMud29ya3Nob3BzUGVyUGFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuICAgIHNldEZyb21EYXRlKGZyb21EYXRlOiBhbnkpXHJcblx0e1xyXG4gICAgICAgIGxldCBwcmV2aW91c1N0YXJ0RGF0ZSA9IHRoaXMuc3RhcnREYXRlO1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlID0gYCR7ZnJvbURhdGUueWVhcn0vJHtmcm9tRGF0ZS5tb250aH0vJHtmcm9tRGF0ZS5kYXl9YDtcclxuXHRcdGlmKHRoaXMuc3RhcnREYXRlID09IFwiMC8wLzBcIilcclxuXHRcdHtcclxuXHRcdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dGhpcy5zdGFydERhdGUgPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0fVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByZXZpb3VzU3RhcnREYXRlICE9PSB0aGlzLnN0YXJ0RGF0ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcblx0XHQgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmNyZWF0ZVVybCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdHRvZ2dsZUZpbHRlcigpIHtcclxuXHRcdHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcblx0fVxyXG5cdFxyXG5cdHNldFRvRGF0ZSh0b0RhdGU6IGFueSlcclxuXHR7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzRW5kRGF0ZSA9IHRoaXMuZW5kRGF0ZTtcclxuICAgICAgICB0aGlzLmVuZERhdGUgPSBgJHt0b0RhdGUueWVhcn0vJHt0b0RhdGUubW9udGh9LyR7dG9EYXRlLmRheX1gO1xyXG5cdFx0aWYodGhpcy5lbmREYXRlID09IFwiMC8wLzBcIilcclxuXHRcdHtcclxuXHRcdFx0dmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dGhpcy5lbmREYXRlID0gYCR7KHRvZGF5LmdldEZ1bGxZZWFyKCkrMTApLnRvU3RyaW5nKCl9LyR7KHRvZGF5LmdldE1vbnRoKCkrMSkudG9TdHJpbmcoKX0vJHt0b2RheS5nZXREYXRlKCkudG9TdHJpbmcoKX1gO1xyXG5cdFx0fVxyXG5cclxuICAgICAgICBpZihwcmV2aW91c0VuZERhdGUgIT0gdGhpcy5lbmREYXRlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuXHRcdCAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY3JlYXRlVXJsKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHRcclxuXHRzZXRMb2NhdGlvbklkTGlzdChsb2NhdGlvbklkTGlzdDogYW55KVxyXG5cdHtcclxuICAgICAgICBpZihsb2NhdGlvbklkTGlzdCAhPSB0aGlzLmxvY2F0aW9uSWRMaXN0KVxyXG4gICAgICAgIHtcclxuXHRcdCAgICB0aGlzLmxvY2F0aW9uSWRMaXN0ID0gbG9jYXRpb25JZExpc3Q7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZU51bWJlciA9IDE7XHJcblx0XHQgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLmNyZWF0ZVVybCgpKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cdFxyXG5cdHNldENhdGVnb3J5TGlzdChjYXRlZ29yeTogc3RyaW5nKVxyXG5cdHtcclxuICAgICAgICBpZihjYXRlZ29yeSAhPSB0aGlzLmNhdGVnb3J5TGlzdClcclxuICAgICAgICB7XHJcblx0XHQgICAgdGhpcy5jYXRlZ29yeUxpc3QgPSBjYXRlZ29yeTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuXHRcdCAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY3JlYXRlVXJsKCkpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0c2V0TWluUHJpY2UobWluUHJpY2U6IG51bWJlcilcclxuXHR7XHJcbiAgICAgICAgaWYodGhpcy5taW5QcmljZSAhPSBtaW5QcmljZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWluUHJpY2UgPSBtaW5QcmljZTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuXHRcdCAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY3JlYXRlVXJsKCkpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblx0XHJcblx0c2V0TWF4UHJpY2UobWF4UHJpY2U6IG51bWJlcilcclxuXHR7XHJcbiAgICAgICAgaWYodGhpcy5tYXhQcmljZSAhPSBtYXhQcmljZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4UHJpY2UgPSBtYXhQcmljZTtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcclxuXHRcdCAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMuY3JlYXRlVXJsKCkpO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogdGhlIHBvbHlmaWxscyBtdXN0IGJlIHRoZSBmaXJzdCB0aGluZyBpbXBvcnRlZFxyXG4gKi9cclxuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XHJcbmltcG9ydCAnLi9fXzIuMS4xLndvcmthcm91bmQudHMnOyAvLyB0ZW1wb3JhcnkgdW50aWwgMi4xLjEgdGhpbmdzIGFyZSBwYXRjaGVkIGluIENvcmVcclxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgY29tcHJlc3Npb24gZnJvbSAnY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgeyBjcmVhdGVFbmdpbmUgfSBmcm9tICdhbmd1bGFyMi1leHByZXNzLWVuZ2luZSc7XHJcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5ub2RlLm1vZHVsZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xyXG5cclxuLy8gQXBwXHJcblxyXG5jb25zdCBhcHAgID0gZXhwcmVzcygpO1xyXG5jb25zdCBST09UID0gcGF0aC5qb2luKHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuLicpKTtcclxuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDIwMDtcclxuXHJcbi8qKlxyXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xyXG4gKi9cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICBlbmFibGVQcm9kTW9kZSgpO1xyXG59XHJcblxyXG4vKipcclxuICogRXhwcmVzcyBWaWV3XHJcbiAqL1xyXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xyXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihST09ULCAnY2xpZW50JykpO1xyXG5hcHAuc2V0KCd2aWV3IGVuZ2luZScsICdodG1sJyk7XHJcblxyXG4vKipcclxuICogRW5hYmxlIGNvbXByZXNzaW9uXHJcbiAqL1xyXG5hcHAudXNlKGNvbXByZXNzaW9uKCkpO1xyXG5cclxuLyoqXHJcbiAqIHNlcnZlIHN0YXRpYyBmaWxlc1xyXG4gKi9cclxuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XHJcblxyXG4vKipcclxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcclxuICovXHJcbi8vIGFwcC51c2UoJy9hcGknLCBhcGkpO1xyXG5cclxuLyoqXHJcbiAqIGJvb3RzdHJhcCB1bml2ZXJzYWwgYXBwXHJcbiAqIEBwYXJhbSByZXFcclxuICogQHBhcmFtIHJlc1xyXG4gKi9cclxuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XHJcbiAgcmVzLnJlbmRlcignaW5kZXgnLCB7XHJcbiAgICByZXEsXHJcbiAgICByZXMsXHJcbiAgICBuZ01vZHVsZTogQXBwTW9kdWxlLFxyXG4gICAgcHJlYm9vdDogZmFsc2UsXHJcbiAgICBiYXNlVXJsOiAnLycsXHJcbiAgICByZXF1ZXN0VXJsOiByZXEub3JpZ2luYWxVcmwsXHJcbiAgICBvcmlnaW5Vcmw6IHJlcS5ob3N0bmFtZVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogdXNlIHVuaXZlcnNhbCBmb3Igc3BlY2lmaWMgcm91dGVzXHJcbiAqL1xyXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xyXG5yb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XHJcbiAgYXBwLmdldChgLyR7cm91dGV9YCwgbmdBcHApO1xyXG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBpZiB5b3Ugd2FudCB0byB1c2UgdW5pdmVyc2FsIGZvciBhbGwgcm91dGVzLCB5b3UgY2FuIHVzZSB0aGUgJyonIHdpbGRjYXJkXHJcbiAqL1xyXG5cclxuYXBwLmdldCgnKicsIGZ1bmN0aW9uIChyZXE6IGFueSwgcmVzOiBhbnkpIHtcclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XHJcbiAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHBvam8sIG51bGwsIDIpO1xyXG4gIHJlcy5zdGF0dXMoNDA0KS5zZW5kKGpzb24pO1xyXG59KTtcclxuXHJcbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnRzIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlciwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogXCJbbXlkcGZvY3VzXVwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAgIEBJbnB1dChcIm15ZHBmb2N1c1wiKSB2YWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7fVxyXG5cclxuICAgIC8vIEZvY3VzIHRvIGVsZW1lbnQ6IGlmIHZhbHVlIDAgPSBkb24ndCBzZXQgZm9jdXMsIDEgPSBzZXQgZm9jdXNcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmludm9rZUVsZW1lbnRNZXRob2QodGhpcy5lbC5uYXRpdmVFbGVtZW50LCBcImZvY3VzXCIsIFtdKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9kaXJlY3RpdmVzL215LWRhdGUtcGlja2VyLmZvY3VzLmRpcmVjdGl2ZS50cyIsImV4cG9ydCAqIGZyb20gXCIuL215LWRhdGUuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWRhdGUtcmFuZ2UuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWRheS1sYWJlbHMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW1vbnRoLWxhYmVscy5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbW9udGguaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWNhbGVuZGFyLWRheS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXItbW9udGguaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWNhbGVuZGFyLXllYXIuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LXdlZWsuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LW9wdGlvbnMuaW50ZXJmYWNlXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL215LWxvY2FsZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktZGF0ZS1tb2RlbC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktaW5wdXQtZmllbGQtY2hhbmdlZC5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktaW5wdXQtZm9jdXMtYmx1ci5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktd2Vla2RheS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktY2FsZW5kYXItdmlldy1jaGFuZ2VkLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tYXJrZWQtZGF0ZS5pbnRlcmZhY2VcIjtcclxuZXhwb3J0ICogZnJvbSBcIi4vbXktbWFya2VkLWRhdGVzLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1kZWZhdWx0LW1vbnRoLmludGVyZmFjZVwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9teS1zZWxlY3Rvci5pbnRlcmZhY2VcIjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvaW50ZXJmYWNlcy9pbmRleC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiwgUmVuZGVyZXIsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBJTXlEYXRlLCBJTXlEYXRlUmFuZ2UsIElNeU1vbnRoLCBJTXlDYWxlbmRhckRheSwgSU15Q2FsZW5kYXJNb250aCwgSU15Q2FsZW5kYXJZZWFyLCBJTXlXZWVrLCBJTXlEYXlMYWJlbHMsIElNeU1vbnRoTGFiZWxzLCBJTXlPcHRpb25zLCBJTXlEYXRlTW9kZWwsIElNeUlucHV0RmllbGRDaGFuZ2VkLCBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkLCBJTXlJbnB1dEZvY3VzQmx1ciwgSU15TWFya2VkRGF0ZXMsIElNeU1hcmtlZERhdGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2luZGV4XCI7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci5sb2NhbGUuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLnV0aWwuc2VydmljZVwiO1xyXG5cclxuLy8gd2VicGFjazFfXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuY29uc3QgbXlEcFN0eWxlczogc3RyaW5nID0gcmVxdWlyZShcIi4vbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzc1wiKTtcclxuY29uc3QgbXlEcFRwbDogc3RyaW5nID0gcmVxdWlyZShcIi4vbXktZGF0ZS1waWNrZXIuY29tcG9uZW50Lmh0bWxcIik7XHJcbi8vIHdlYnBhY2syX1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ZRFBfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTXlEYXRlUGlja2VyKSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5lbnVtIENhbFRvZ2dsZSB7T3BlbiA9IDEsIENsb3NlQnlEYXRlU2VsID0gMiwgQ2xvc2VCeUNhbEJ0biA9IDMsIENsb3NlQnlPdXRDbGljayA9IDQsIENsb3NlQnlFc2MgPSA1LCBDbG9zZUJ5QXBpID0gNn1cclxuZW51bSBZZWFyIHttaW4gPSAxMTAwLCBtYXggPSA5MTAwfVxyXG5lbnVtIElucHV0Rm9jdXNCbHVyIHtmb2N1cyA9IDEsIGJsdXIgPSAyfVxyXG5lbnVtIEtleUNvZGUge2VudGVyID0gMTMsIGVzYyA9IDI3LCBzcGFjZSA9IDMyfVxyXG5lbnVtIE1vbnRoSWQge3ByZXYgPSAxLCBjdXJyID0gMiwgbmV4dCA9IDN9XHJcblxyXG5jb25zdCBNTSA9IFwibW1cIjtcclxuY29uc3QgTU1NID0gXCJtbW1cIjtcclxuY29uc3QgREQgPSBcImRkXCI7XHJcbmNvbnN0IFlZWVkgPSBcInl5eXlcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibXktZGF0ZS1waWNrZXJcIixcclxuICAgIGV4cG9ydEFzOiBcIm15ZGF0ZXBpY2tlclwiLFxyXG4gICAgc3R5bGVzOiBbbXlEcFN0eWxlc10sXHJcbiAgICB0ZW1wbGF0ZTogbXlEcFRwbCxcclxuICAgIHByb3ZpZGVyczogW0xvY2FsZVNlcnZpY2UsIFV0aWxTZXJ2aWNlLCBNWURQX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNeURhdGVQaWNrZXIgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICAgIEBJbnB1dCgpIG9wdGlvbnM6IElNeU9wdGlvbnM7XHJcbiAgICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGRlZmF1bHRNb250aDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlbGVjdG9yOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeURhdGVNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeURhdGVNb2RlbD4oKTtcclxuICAgIEBPdXRwdXQoKSBpbnB1dEZpZWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+KCk7XHJcbiAgICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPigpO1xyXG4gICAgQE91dHB1dCgpIGNhbGVuZGFyVG9nZ2xlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gICAgQE91dHB1dCgpIGlucHV0Rm9jdXNCbHVyOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGb2N1c0JsdXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4oKTtcclxuICAgIEBWaWV3Q2hpbGQoXCJzZWxlY3RvckVsXCIpIHNlbGVjdG9yRWw6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKFwiaW5wdXRCb3hFbFwiKSBpbnB1dEJveEVsOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICBzaG93U2VsZWN0b3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHZpc2libGVNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6IFwiXCIsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgIHNlbGVjdGVkTW9udGg6IElNeU1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgICBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XHJcbiAgICB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgICBtb250aHM6IEFycmF5PEFycmF5PElNeUNhbGVuZGFyTW9udGg+PiA9IFtdO1xyXG4gICAgeWVhcnM6IEFycmF5PEFycmF5PElNeUNhbGVuZGFyWWVhcj4+ID0gW107XHJcbiAgICBzZWxlY3Rpb25EYXlUeHQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZGlzYWJsZVRvZGF5QnRuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBkYXlJZHg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgc2VsZWN0TW9udGg6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlbGVjdFllYXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcmV2TW9udGhEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbmV4dE1vbnRoRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByZXZZZWFyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG5leHRZZWFyRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByZXZZZWFyc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBuZXh0WWVhcnNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgICBjdXJyTW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5jdXJyO1xyXG4gICAgbmV4dE1vbnRoSWQ6IG51bWJlciA9IE1vbnRoSWQubmV4dDtcclxuXHJcbiAgICAvLyBEZWZhdWx0IG9wdGlvbnNcclxuICAgIG9wdHM6IElNeU9wdGlvbnMgPSB7XHJcbiAgICAgICAgZGF5TGFiZWxzOiA8SU15RGF5TGFiZWxzPiB7fSxcclxuICAgICAgICBtb250aExhYmVsczogPElNeU1vbnRoTGFiZWxzPiB7fSxcclxuICAgICAgICBkYXRlRm9ybWF0OiA8c3RyaW5nPiBcIlwiLFxyXG4gICAgICAgIHNob3dUb2RheUJ0bjogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgdG9kYXlCdG5UeHQ6IDxzdHJpbmc+IFwiXCIsXHJcbiAgICAgICAgZmlyc3REYXlPZldlZWs6IDxzdHJpbmc+IFwiXCIsXHJcbiAgICAgICAgc2F0SGlnaGxpZ2h0OiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgc3VuSGlnaGxpZ2h0OiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBoaWdobGlnaHREYXRlczogPEFycmF5PElNeURhdGU+PiBbXSxcclxuICAgICAgICBtYXJrQ3VycmVudERheTogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgbWFya0N1cnJlbnRNb250aDogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgbWFya0N1cnJlbnRZZWFyOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBkaXNhYmxlVW50aWw6IDxJTXlEYXRlPiB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXHJcbiAgICAgICAgZGlzYWJsZVNpbmNlOiA8SU15RGF0ZT4ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxyXG4gICAgICAgIGRpc2FibGVEYXlzOiA8QXJyYXk8SU15RGF0ZT4+IFtdLFxyXG4gICAgICAgIGVuYWJsZURheXM6IDxBcnJheTxJTXlEYXRlPj4gW10sXHJcbiAgICAgICAgbWFya0RhdGVzOiA8QXJyYXk8SU15TWFya2VkRGF0ZXM+PiBbXSxcclxuICAgICAgICBtYXJrV2Vla2VuZHM6IDxJTXlNYXJrZWREYXRlPiB7fSxcclxuICAgICAgICBkaXNhYmxlRGF0ZVJhbmdlczogPEFycmF5PElNeURhdGVSYW5nZT4+IFtdLFxyXG4gICAgICAgIGRpc2FibGVXZWVrZW5kczogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGRpc2FibGVXZWVrZGF5czogPEFycmF5PHN0cmluZz4+IFtdLFxyXG4gICAgICAgIHNob3dXZWVrTnVtYmVyczogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGhlaWdodDogPHN0cmluZz4gXCIzNHB4XCIsXHJcbiAgICAgICAgd2lkdGg6IDxzdHJpbmc+IFwiMTAwJVwiLFxyXG4gICAgICAgIHNlbGVjdGlvblR4dEZvbnRTaXplOiA8c3RyaW5nPiBcIjE0cHhcIixcclxuICAgICAgICBzZWxlY3RvckhlaWdodDogPHN0cmluZz4gXCIyMzJweFwiLFxyXG4gICAgICAgIHNlbGVjdG9yV2lkdGg6IDxzdHJpbmc+IFwiMjUycHhcIixcclxuICAgICAgICBhbGxvd0Rlc2VsZWN0RGF0ZTogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGlubGluZTogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIHNob3dDbGVhckRhdGVCdG46IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIHNob3dEZWNyZWFzZURhdGVCdG46IDxib29sZWFuPiBmYWxzZSxcclxuICAgICAgICBzaG93SW5jcmVhc2VEYXRlQnRuOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgYWxpZ25TZWxlY3RvclJpZ2h0OiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgb3BlblNlbGVjdG9yVG9wT2ZJbnB1dDogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIGluZGljYXRlSW52YWxpZERhdGU6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGVkaXRhYmxlRGF0ZUZpZWxkOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtb250aFNlbGVjdG9yOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICB5ZWFyU2VsZWN0b3I6IDxib29sZWFuPiB0cnVlLFxyXG4gICAgICAgIGRpc2FibGVIZWFkZXJCdXR0b25zOiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBtaW5ZZWFyOiA8bnVtYmVyPiBZZWFyLm1pbixcclxuICAgICAgICBtYXhZZWFyOiA8bnVtYmVyPiBZZWFyLm1heCxcclxuICAgICAgICBjb21wb25lbnREaXNhYmxlZDogPGJvb2xlYW4+IGZhbHNlLFxyXG4gICAgICAgIHNob3dTZWxlY3RvckFycm93OiA8Ym9vbGVhbj4gdHJ1ZSxcclxuICAgICAgICBzaG93SW5wdXRGaWVsZDogPGJvb2xlYW4+IHRydWUsXHJcbiAgICAgICAgb3BlblNlbGVjdG9yT25JbnB1dENsaWNrOiA8Ym9vbGVhbj4gZmFsc2UsXHJcbiAgICAgICAgYXJpYUxhYmVsSW5wdXRGaWVsZDogPHN0cmluZz4gXCJEYXRlIGlucHV0IGZpZWxkXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsQ2xlYXJEYXRlOiA8c3RyaW5nPiBcIkNsZWFyIERhdGVcIixcclxuICAgICAgICBhcmlhTGFiZWxEZWNyZWFzZURhdGU6IDxzdHJpbmc+IFwiRGVjcmVhc2UgRGF0ZVwiLFxyXG4gICAgICAgIGFyaWFMYWJlbEluY3JlYXNlRGF0ZTogPHN0cmluZz4gXCJJbmNyZWFzZSBEYXRlXCIsXHJcbiAgICAgICAgYXJpYUxhYmVsT3BlbkNhbGVuZGFyOiA8c3RyaW5nPiBcIk9wZW4gQ2FsZW5kYXJcIixcclxuICAgICAgICBhcmlhTGFiZWxQcmV2TW9udGg6IDxzdHJpbmc+IFwiUHJldmlvdXMgTW9udGhcIixcclxuICAgICAgICBhcmlhTGFiZWxOZXh0TW9udGg6IDxzdHJpbmc+IFwiTmV4dCBNb250aFwiLFxyXG4gICAgICAgIGFyaWFMYWJlbFByZXZZZWFyOiA8c3RyaW5nPiBcIlByZXZpb3VzIFllYXJcIixcclxuICAgICAgICBhcmlhTGFiZWxOZXh0WWVhcjogPHN0cmluZz4gXCJOZXh0IFllYXJcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbTogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsb2NhbGVTZXJ2aWNlOiBMb2NhbGVTZXJ2aWNlLCBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbkdsb2JhbChcImRvY3VtZW50XCIsIFwiY2xpY2tcIiwgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yICYmIGV2ZW50LnRhcmdldCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5T3V0Q2xpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMubW9udGhTZWxlY3RvciB8fCB0aGlzLm9wdHMueWVhclNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyU2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2NhbGVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvcHRzOiBJTXlPcHRpb25zID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICAgICAgKDxJTXlPcHRpb25zPnRoaXMub3B0cylba10gPSBvcHRzW2tdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgKDxJTXlPcHRpb25zPnRoaXMub3B0cylba10gPSB0aGlzLm9wdGlvbnNba107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRzLm1pblllYXIgPCBZZWFyLm1pbikge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMubWluWWVhciA9IFllYXIubWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5vcHRzLm1heFllYXIgPiBZZWFyLm1heCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdHMubWF4WWVhciA9IFllYXIubWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdG9yVG9wUG9zaXRpb24oKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRzLm9wZW5TZWxlY3RvclRvcE9mSW5wdXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLm9mZnNldEhlaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRNb250aFllYXJTZWxlY3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RNb250aCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0WWVhciA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2VsZWN0TW9udGhDbGlja2VkKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gIXRoaXMuc2VsZWN0TW9udGg7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE1vbnRoKSB7XHJcbiAgICAgICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5tb250aHMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkgKz0gMykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdzogQXJyYXk8SU15Q2FsZW5kYXJNb250aD4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSBpOyBqIDwgaSArIDM7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1vbnRoOiBqLCBkYXk6IHRoaXMuZGF5c0luTW9udGgoaiwgdGhpcy52aXNpYmxlTW9udGgueWVhcil9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKHt5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyLCBtb250aDogaiwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93LnB1c2goe25icjogaiwgbmFtZTogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW2pdLCBjdXJyTW9udGg6IGogPT09IHRvZGF5Lm1vbnRoICYmIHRoaXMudmlzaWJsZU1vbnRoLnllYXIgPT09IHRvZGF5LnllYXIsIHNlbGVjdGVkOiBqID09PSB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGlzYWJsZWQ6IGRpc2FibGVkfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Nb250aENlbGxDbGlja2VkKGNlbGw6IElNeUNhbGVuZGFyTW9udGgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWM6IGJvb2xlYW4gPSBjZWxsLm5iciAhPT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnI7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KGNlbGwubmJyKSwgbW9udGhOYnI6IGNlbGwubmJyLCB5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIoY2VsbC5uYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIG1jKTtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvckVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogSU15Q2FsZW5kYXJNb250aCkge1xyXG4gICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uTW9udGhDZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZWxlY3RZZWFyQ2xpY2tlZChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RZZWFyID0gIXRoaXMuc2VsZWN0WWVhcjtcclxuICAgICAgICB0aGlzLnNlbGVjdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdFllYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVllYXJzKHRoaXMudmlzaWJsZU1vbnRoLnllYXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblllYXJDZWxsQ2xpY2tlZChjZWxsOiBJTXlDYWxlbmRhclllYXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgeWM6IGJvb2xlYW4gPSBjZWxsLnllYXIgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXI7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0LCBtb250aE5icjogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHllYXI6IGNlbGwueWVhcn07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBjZWxsLnllYXIsIHljKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFllYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yRWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IElNeUNhbGVuZGFyWWVhcikge1xyXG4gICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5lbnRlciB8fCBldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLnNwYWNlKSAmJiAhY2VsbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uWWVhckNlbGxDbGlja2VkKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByZXZZZWFycyhldmVudDogYW55LCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhcnMoeWVhciAtIDI1KTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5leHRZZWFycyhldmVudDogYW55LCB5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlWWVhcnMoeWVhciArIDI1KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVllYXJzKHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMueWVhcnMubGVuZ3RoID0gMDtcclxuICAgICAgICBsZXQgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHllYXI7IGkgPD0gMjAgKyB5ZWFyOyBpICs9IDUpIHtcclxuICAgICAgICAgICAgbGV0IHJvdzogQXJyYXk8SU15Q2FsZW5kYXJZZWFyPiA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGkgKyA1OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXNhYmxlZDogYm9vbGVhbiA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IGosIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBqKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpXHJcbiAgICAgICAgICAgICAgICAgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogaiwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBtaW5NYXg6IGJvb2xlYW4gPSBqIDwgdGhpcy5vcHRzLm1pblllYXIgfHwgaiA+IHRoaXMub3B0cy5tYXhZZWFyO1xyXG4gICAgICAgICAgICAgICAgcm93LnB1c2goe3llYXI6IGosIGN1cnJZZWFyOiBqID09PSB0b2RheS55ZWFyLCBzZWxlY3RlZDogaiA9PT0gdGhpcy52aXNpYmxlTW9udGgueWVhciwgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IG1pbk1heH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMueWVhcnMucHVzaChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZXZZZWFyc0Rpc2FibGVkID0gdGhpcy55ZWFyc1swXVswXS55ZWFyIDw9IHRoaXMub3B0cy5taW5ZZWFyIHx8IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IHRoaXMueWVhcnNbMF1bMF0ueWVhciAtIDEsIG1vbnRoOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnllYXJzWzBdWzBdLnllYXIgLSAxKX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICAgIHRoaXMubmV4dFllYXJzRGlzYWJsZWQgPSB0aGlzLnllYXJzWzRdWzRdLnllYXIgPj0gdGhpcy5vcHRzLm1heFllYXIgfHwgdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogdGhpcy55ZWFyc1s0XVs0XS55ZWFyICsgMSwgbW9udGg6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCBkYXk6IDF9LCB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVzZXJEYXRlSW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnZhbGlkSW5wdXRGaWVsZENoYW5nZWQodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQodmFsdWUsIHRoaXMub3B0cy5kYXRlRm9ybWF0LCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMubW9udGhMYWJlbHMsIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuICAgICAgICAgICAgaWYgKGRhdGUuZGF5ICE9PSAwICYmIGRhdGUubW9udGggIT09IDAgJiYgZGF0ZS55ZWFyICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdERhdGUoZGF0ZSwgQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW52YWxpZElucHV0RmllbGRDaGFuZ2VkKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZvY3VzSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7cmVhc29uOiBJbnB1dEZvY3VzQmx1ci5mb2N1cywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1cklucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHtyZWFzb246IElucHV0Rm9jdXNCbHVyLmJsdXIsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsb3NlU2VsZWN0b3IoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVzYyAmJiB0aGlzLnNob3dTZWxlY3RvciAmJiAhdGhpcy5vcHRzLmlubGluZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlFc2MpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnZhbGlkSW5wdXRGaWVsZENoYW5nZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSB2YWx1ZS5sZW5ndGggPiAwO1xyXG4gICAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7dmFsdWU6IHZhbHVlLCBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdmFsaWQ6IGZhbHNlfSk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RvZGF5RGlzYWJsZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlVG9kYXlCdG4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkodGhpcy5nZXRUb2RheSgpLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICAgICAgbGV0IHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXRXZWVrRGF5cygpO1xyXG4gICAgICAgIHRoaXMuaXNUb2RheURpc2FibGVkKCk7XHJcbiAgICAgICAgdGhpcy5kYXlJZHggPSB3ZWVrRGF5cy5pbmRleE9mKHRoaXMub3B0cy5maXJzdERheU9mV2Vlayk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF5SWR4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSB0aGlzLmRheUlkeDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrRGF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZWVrRGF5cy5wdXNoKHRoaXMub3B0cy5kYXlMYWJlbHNbd2Vla0RheXNbaWR4XV0pO1xyXG4gICAgICAgICAgICAgICAgaWR4ID0gd2Vla0RheXNbaWR4XSA9PT0gXCJzYVwiID8gMCA6IGlkeCArIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmICh2YWx1ZVtcImRhdGVcIl0gfHwgdmFsdWVbXCJqc2RhdGVcIl0gfHwgdmFsdWVbXCJmb3JtYXR0ZWRcIl0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdmFsdWVbXCJkYXRlXCJdID8gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVtcImRhdGVcIl0pIDogdmFsdWVbXCJqc2RhdGVcIl0gPyB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHRoaXMuanNEYXRlVG9NeURhdGUodmFsdWVbXCJqc2RhdGVcIl0pKSA6IHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWVbXCJmb3JtYXR0ZWRcIl0pO1xyXG4gICAgICAgICAgICBsZXQgY3ZjOiBib29sZWFuID0gdGhpcy52aXNpYmxlTW9udGgueWVhciAhPT0gdGhpcy5zZWxlY3RlZERhdGUueWVhciB8fCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciAhPT0gdGhpcy5zZWxlY3RlZERhdGUubW9udGg7XHJcbiAgICAgICAgICAgIGlmIChjdmMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbdGhpcy5zZWxlY3RlZERhdGUubW9udGhdLCBtb250aE5icjogdGhpcy5zZWxlY3RlZERhdGUubW9udGgsIHllYXI6IHRoaXMuc2VsZWN0ZWREYXRlLnllYXJ9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoLCB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyLCBjdmMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5vcHRzLmlubGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMub3B0cy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJzZWxlY3RvclwiKSkge1xyXG4gICAgICAgICAgICBsZXQgczogYW55ID0gY2hhbmdlc1tcInNlbGVjdG9yXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocy5vcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNlbGVjdG9yKENhbFRvZ2dsZS5PcGVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZVNlbGVjdG9yKENhbFRvZ2dsZS5DbG9zZUJ5QXBpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcInBsYWNlaG9sZGVyXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzW1wicGxhY2Vob2xkZXJcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoXCJsb2NhbGVcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBjaGFuZ2VzW1wibG9jYWxlXCJdLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwiZGlzYWJsZWRcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGNoYW5nZXNbXCJkaXNhYmxlZFwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eShcIm9wdGlvbnNcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gY2hhbmdlc1tcIm9wdGlvbnNcIl0uY3VycmVudFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53ZWVrRGF5cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIGxldCBkbUNoYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdE1vbnRoXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBkbTogYW55ID0gY2hhbmdlc1tcImRlZmF1bHRNb250aFwiXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG0gPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgICAgICAgICAgIGRtID0gZG0uZGVmTW9udGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRtICE9PSBudWxsICYmIGRtICE9PSB1bmRlZmluZWQgJiYgZG0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMucGFyc2VTZWxlY3RlZE1vbnRoKGRtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHttb250aFR4dDogXCJcIiwgbW9udGhOYnI6IDAsIHllYXI6IDB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRtQ2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KFwic2VsRGF0ZVwiKSkge1xyXG4gICAgICAgICAgICBsZXQgc2Q6IGFueSA9IGNoYW5nZXNbXCJzZWxEYXRlXCJdO1xyXG4gICAgICAgICAgICBpZiAoc2QuY3VycmVudFZhbHVlICE9PSBudWxsICYmIHNkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHNkLmN1cnJlbnRWYWx1ZSAhPT0gXCJcIiAmJiBPYmplY3Qua2V5cyhzZC5jdXJyZW50VmFsdWUpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHNkLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IodGhpcy5nZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRG8gbm90IGNsZWFyIG9uIGluaXRcclxuICAgICAgICAgICAgICAgIGlmICghc2QuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52aXNpYmxlTW9udGgueWVhciA9PT0gMCAmJiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciA9PT0gMCB8fCBkbUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQgPSB0aGlzLm9wdHMubW9udGhMYWJlbHNbdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnJdO1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBSZW1vdmUgZGF0ZSBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWNyZWFzZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRGVjcmVhc2UgZGF0ZSBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VJbmNyZWFzZURhdGUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbmNyZWFzZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5jcmVhc2UgZGF0ZSBidXR0b24gY2xpY2tlZFxyXG4gICAgICAgIHRoaXMuZGVjcmVhc2VJbmNyZWFzZURhdGUoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE9wZW4gc2VsZWN0b3IgYnV0dG9uIGNsaWNrZWRcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9ICF0aGlzLnNob3dTZWxlY3RvcjtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3BlblNlbGVjdG9yKENhbFRvZ2dsZS5PcGVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VTZWxlY3RvcihDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5TZWxlY3RvcihyZWFzb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KHJlYXNvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VTZWxlY3RvcihyZWFzb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChyZWFzb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZpc2libGVNb250aCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBTZXRzIHZpc2libGUgbW9udGggb2YgY2FsZW5kYXJcclxuICAgICAgICBsZXQgeTogbnVtYmVyID0gMCwgbTogbnVtYmVyID0gMDtcclxuICAgICAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9udGgueWVhciA9PT0gMCAmJiB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnIgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICAgICAgICAgIHkgPSB0b2RheS55ZWFyO1xyXG4gICAgICAgICAgICAgICAgbSA9IHRvZGF5Lm1vbnRoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyO1xyXG4gICAgICAgICAgICAgICAgbSA9IHRoaXMuc2VsZWN0ZWRNb250aC5tb250aE5icjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWREYXRlLnllYXI7XHJcbiAgICAgICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttXSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgY3VycmVudCBtb250aFxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvblByZXZNb250aCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBQcmV2aW91cyBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcblxyXG4gICAgICAgIGxldCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5leHRNb250aCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZXh0IG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICAgICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcclxuXHJcbiAgICAgICAgbGV0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBsZXQgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeX07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUHJldlllYXIoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGgueWVhci0tO1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZXh0WWVhcigpOiB2b2lkIHtcclxuICAgICAgICAvLyBOZXh0IHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXIrKztcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG9kYXlDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRvZGF5IGJ1dHRvbiBjbGlja2VkXHJcbiAgICAgICAgbGV0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZSh0b2RheSwgQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcclxuICAgICAgICBpZiAodGhpcy5vcHRzLmlubGluZSAmJiB0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RvZGF5Lm1vbnRoXSwgbW9udGhOYnI6IHRvZGF5Lm1vbnRoLCB5ZWFyOiB0b2RheS55ZWFyfTtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRvZGF5Lm1vbnRoLCB0b2RheS55ZWFyLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBDZWxsIGNsaWNrZWQgb24gdGhlIGNhbGVuZGFyXHJcbiAgICAgICAgaWYgKGNlbGwuY21vID09PSB0aGlzLnByZXZNb250aElkKSB7XHJcbiAgICAgICAgICAgIC8vIFByZXZpb3VzIG1vbnRoIGRheVxyXG4gICAgICAgICAgICB0aGlzLm9uUHJldk1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLmN1cnJNb250aElkKSB7XHJcbiAgICAgICAgICAgIC8vIEN1cnJlbnQgbW9udGggZGF5IC0gaWYgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkIGNsZWFyIGl0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdHMuYWxsb3dEZXNlbGVjdERhdGUgJiYgdGhpcy51dGlsU2VydmljZS5pc1NhbWVEYXRlKGNlbGwuZGF0ZU9iaiwgdGhpcy5zZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3REYXRlKGNlbGwuZGF0ZU9iaiwgQ2FsVG9nZ2xlLkNsb3NlQnlEYXRlU2VsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCkge1xyXG4gICAgICAgICAgICAvLyBOZXh0IG1vbnRoIGRheVxyXG4gICAgICAgICAgICB0aGlzLm9uTmV4dE1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXRNb250aFllYXJTZWxlY3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IGFueSkge1xyXG4gICAgICAgIC8vIENlbGwga2V5Ym9hcmQgaGFuZGxpbmdcclxuICAgICAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNlbGxDbGlja2VkKGNlbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGVhckRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gQ2xlYXJzIHRoZSBkYXRlIGFuZCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9O1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7ZGF0ZTogZGF0ZSwganNkYXRlOiBudWxsLCBmb3JtYXR0ZWQ6IFwiXCIsIGVwb2M6IDB9KTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0lucHV0Qm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVhc2VJbmNyZWFzZURhdGUoZGVjcmVhc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICAvLyBEZWNyZWFzZXMgb3IgaW5jcmVhc2VzIHRoZSBkYXRlIGRlcGVuZGluZyBvbiB0aGUgcGFyYW1ldGVyXHJcbiAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcclxuICAgICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShkYXRlKSkge1xyXG4gICAgICAgICAgICBsZXQgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KTtcclxuICAgICAgICAgICAgZC5zZXREYXRlKGRlY3JlYXNlID8gZC5nZXREYXRlKCkgLSAxIDogZC5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICAgICAgZGF0ZSA9IHt5ZWFyOiBkLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkLmdldE1vbnRoKCkgKyAxLCBkYXk6IGQuZ2V0RGF0ZSgpfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlLCBDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0RGF0ZShkYXRlOiBJTXlEYXRlLCBjbG9zZVJlYXNvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRGF0ZSBzZWxlY3RlZCwgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgICAgICBsZXQgZGF0ZU1vZGVsOiBJTXlEYXRlTW9kZWwgPSB0aGlzLmdldERhdGVNb2RlbChkYXRlKTtcclxuICAgICAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoZGF0ZU1vZGVsKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IoZGF0ZU1vZGVsKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoY2xvc2VSZWFzb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0lucHV0Qm94KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Rm9jdXNUb0lucHV0Qm94KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5vcHRzLmlubGluZSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRCb3hFbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8gVXBkYXRlcyBkYXRlIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZGF0ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IGNsZWFyID8gXCJcIiA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoe3ZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiAhY2xlYXJ9KTtcclxuICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0ZU1vZGVsKGRhdGU6IElNeURhdGUpOiBJTXlEYXRlTW9kZWwge1xyXG4gICAgICAgIC8vIENyZWF0ZXMgYSBkYXRlIG1vZGVsIG9iamVjdCBmcm9tIHRoZSBnaXZlbiBwYXJhbWV0ZXJcclxuICAgICAgICByZXR1cm4ge2RhdGU6IGRhdGUsIGpzZGF0ZTogdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLCBmb3JtYXR0ZWQ6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKSwgZXBvYzogTWF0aC5yb3VuZCh0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSAvIDEwMDAuMCl9O1xyXG4gICAgfVxyXG5cclxuICAgIHByZVplcm8odmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsKSA8IDEwID8gXCIwXCIgKyB2YWwgOiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0RGF0ZSh2YWw6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gUmV0dXJucyBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcsIGlmIG1tbSBpcyBwYXJ0IG9mIGRhdGVGb3JtYXQgcmV0dXJucyBtb250aCBhcyBhIHN0cmluZ1xyXG4gICAgICAgIGxldCBmb3JtYXR0ZWQ6IHN0cmluZyA9IHRoaXMub3B0cy5kYXRlRm9ybWF0LnJlcGxhY2UoWVlZWSwgdmFsLnllYXIpLnJlcGxhY2UoREQsIHRoaXMucHJlWmVybyh2YWwuZGF5KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0cy5kYXRlRm9ybWF0LmluZGV4T2YoTU1NKSAhPT0gLTEgPyBmb3JtYXR0ZWQucmVwbGFjZShNTU0sIHRoaXMubW9udGhUZXh0KHZhbC5tb250aCkpIDogZm9ybWF0dGVkLnJlcGxhY2UoTU0sIHRoaXMucHJlWmVybyh2YWwubW9udGgpKTtcclxuICAgIH1cclxuXHJcbiAgICBtb250aFRleHQobTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV07XHJcbiAgICB9XHJcblxyXG4gICAgbW9udGhTdGFydElkeCh5OiBudW1iZXIsIG06IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgLy8gTW9udGggc3RhcnQgaW5kZXhcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXREYXRlKDEpO1xyXG4gICAgICAgIGQuc2V0TW9udGgobSAtIDEpO1xyXG4gICAgICAgIGQuc2V0RnVsbFllYXIoeSk7XHJcbiAgICAgICAgbGV0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xyXG4gICAgICAgIHJldHVybiBpZHggPj0gNyA/IGlkeCAtIDcgOiBpZHg7XHJcbiAgICB9XHJcblxyXG4gICAgZGF5c0luTW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHksIG0sIDApLmdldERhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcclxuICAgICAgICBsZXQgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5LCBtLCAxKTtcclxuICAgICAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRheXNJbk1vbnRoKGQuZ2V0TW9udGgoKSArIDEsIGQuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDdXJyRGF5KGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIsIGNtbzogbnVtYmVyLCB0b2RheTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcclxuICAgICAgICByZXR1cm4gZCA9PT0gdG9kYXkuZGF5ICYmIG0gPT09IHRvZGF5Lm1vbnRoICYmIHkgPT09IHRvZGF5LnllYXIgJiYgY21vID09PSB0aGlzLmN1cnJNb250aElkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRvZGF5KCk6IElNeURhdGUge1xyXG4gICAgICAgIGxldCBkYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICByZXR1cm4ge3llYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSArIDEsIGRheTogZGF0ZS5nZXREYXRlKCl9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLmdldFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vIEdldCB3ZWVrZGF5OiBzdSwgbW8sIHR1LCB3ZSAuLi5cclxuICAgICAgICBsZXQgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtEYXlzKCk7XHJcbiAgICAgICAgcmV0dXJuIHdlZWtEYXlzW3RoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcclxuICAgICAgICAvLyBDcmVhdGVzIGEgZGF0ZSBvYmplY3QgZnJvbSBnaXZlbiB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCAwLCAwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdW5kYXlJZHgoKTogbnVtYmVyIHtcclxuICAgICAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF5SWR4ID4gMCA/IDcgLSB0aGlzLmRheUlkeCA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVDYWxlbmRhcihtOiBudW1iZXIsIHk6IG51bWJlciwgbm90aWZ5Q2hhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIGxldCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICBsZXQgbW9udGhTdGFydDogbnVtYmVyID0gdGhpcy5tb250aFN0YXJ0SWR4KHksIG0pO1xyXG4gICAgICAgIGxldCBkSW5UaGlzTTogbnVtYmVyID0gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcclxuICAgICAgICBsZXQgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xyXG5cclxuICAgICAgICBsZXQgZGF5TmJyOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIGxldCBjbW86IG51bWJlciA9IHRoaXMucHJldk1vbnRoSWQ7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHdlZWs6IEFycmF5PElNeUNhbGVuZGFyRGF5PiA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRmlyc3Qgd2Vla1xyXG4gICAgICAgICAgICAgICAgbGV0IHBtID0gZEluUHJldk0gLSBtb250aFN0YXJ0ICsgMTtcclxuICAgICAgICAgICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IG0gPT09IDEgPyB5IC0gMSA6IHksIG1vbnRoOiBtID09PSAxID8gMTIgOiBtIC0gMSwgZGF5OiBqfTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLnN1bkhpZ2hsaWdodCwgdGhpcy5vcHRzLnNhdEhpZ2hsaWdodCwgdGhpcy5vcHRzLmhpZ2hsaWdodERhdGVzKX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNtbyA9IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICAgICAgICAgICAgICAvLyBDdXJyZW50IG1vbnRoXHJcbiAgICAgICAgICAgICAgICBsZXQgZGF5c0xlZnQ6IG51bWJlciA9IDcgLSB3ZWVrLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF5c0xlZnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRheU5icn07XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vlay5wdXNoKHtkYXRlT2JqOiBkYXRlLCBjbW86IGNtbywgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoZGF5TmJyLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIsIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsIHRoaXMub3B0cy5kaXNhYmxlV2Vla2RheXMsIHRoaXMub3B0cy5kaXNhYmxlRGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLCB0aGlzLm9wdHMuZW5hYmxlRGF5cyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHQ6IHRoaXMudXRpbFNlcnZpY2UuaXNIaWdobGlnaHRlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLnN1bkhpZ2hsaWdodCwgdGhpcy5vcHRzLnNhdEhpZ2hsaWdodCwgdGhpcy5vcHRzLmhpZ2hsaWdodERhdGVzKX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5leHQgbW9udGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5TmJyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogY21vID09PSB0aGlzLm5leHRNb250aElkICYmIG0gPT09IDEyID8geSArIDEgOiB5LCBtb250aDogY21vID09PSB0aGlzLmN1cnJNb250aElkID8gbSA6IGNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCAmJiBtIDwgMTIgPyBtICsgMSA6IDEsIGRheTogZGF5TmJyfTtcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrLnB1c2goe2RhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhciwgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSwgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcywgdGhpcy5vcHRzLmRpc2FibGVXZWVrZGF5cywgdGhpcy5vcHRzLmRpc2FibGVEYXlzLCB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsIHRoaXMub3B0cy5lbmFibGVEYXlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy51dGlsU2VydmljZS5pc0hpZ2hsaWdodGVkRGF0ZShkYXRlLCB0aGlzLm9wdHMuc3VuSGlnaGxpZ2h0LCB0aGlzLm9wdHMuc2F0SGlnaGxpZ2h0LCB0aGlzLm9wdHMuaGlnaGxpZ2h0RGF0ZXMpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5TmJyKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHdlZWtOYnI6IG51bWJlciA9IHRoaXMub3B0cy5zaG93V2Vla051bWJlcnMgICYmIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gXCJtb1wiID8gdGhpcy51dGlsU2VydmljZS5nZXRXZWVrTnVtYmVyKHdlZWtbMF0uZGF0ZU9iaikgOiAwO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVzLnB1c2goe3dlZWs6IHdlZWssIHdlZWtOYnI6IHdlZWtOYnJ9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICAgICAgaWYgKG5vdGlmeUNoYW5nZSkge1xyXG4gICAgICAgICAgICAvLyBOb3RpZnkgcGFyZW50XHJcbiAgICAgICAgICAgIHRoaXMuY2FsZW5kYXJWaWV3Q2hhbmdlZC5lbWl0KHt5ZWFyOiB5LCBtb250aDogbSwgZmlyc3Q6IHtudW1iZXI6IDEsIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7eWVhcjogeSwgbW9udGg6IG0sIGRheTogMX0pfSwgbGFzdDoge251bWJlcjogZEluVGhpc00sIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZEluVGhpc019KX19KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VTZWxlY3RlZERhdGUoc2VsRGF0ZTogYW55KTogSU15RGF0ZSB7XHJcbiAgICAgICAgLy8gUGFyc2UgZGF0ZSB2YWx1ZSAtIGl0IGNhbiBiZSBzdHJpbmcgb3IgSU15RGF0ZSBvYmplY3RcclxuICAgICAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgICBpZiAodHlwZW9mIHNlbERhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbGV0IHNkOiBzdHJpbmcgPSA8c3RyaW5nPiBzZWxEYXRlO1xyXG4gICAgICAgICAgICBsZXQgZGY6IHN0cmluZyA9IHRoaXMub3B0cy5kYXRlRm9ybWF0O1xyXG5cclxuICAgICAgICAgICAgZGF0ZS5tb250aCA9IGRmLmluZGV4T2YoTU1NKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgID8gdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRmLCBzZCwgTU1NLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMudXRpbFNlcnZpY2UucGFyc2VEYXRlUGFydE51bWJlcihkZiwgc2QsIE1NKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkZi5pbmRleE9mKE1NTSkgIT09IC0xICYmIHRoaXMub3B0cy5tb250aExhYmVsc1tkYXRlLm1vbnRoXSkge1xyXG4gICAgICAgICAgICAgICAgZGYgPSB0aGlzLnV0aWxTZXJ2aWNlLmNoYW5nZURhdGVGb3JtYXQoZGYsIHRoaXMub3B0cy5tb250aExhYmVsc1tkYXRlLm1vbnRoXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkYXRlLmRheSA9IHRoaXMudXRpbFNlcnZpY2UucGFyc2VEYXRlUGFydE51bWJlcihkZiwgc2QsIEREKTtcclxuICAgICAgICAgICAgZGF0ZS55ZWFyID0gdGhpcy51dGlsU2VydmljZS5wYXJzZURhdGVQYXJ0TnVtYmVyKGRmLCBzZCwgWVlZWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBzZWxEYXRlID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBzZWxEYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBqc0RhdGVUb015RGF0ZShkYXRlOiBEYXRlKTogSU15RGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHt5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpfTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51dGlsU2VydmljZS5wYXJzZURlZmF1bHRNb250aChtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtOiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBkcG06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgZHB5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGRubTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBkbnk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5vcHRzLmRpc2FibGVIZWFkZXJCdXR0b25zKSB7XHJcbiAgICAgICAgICAgIGRwbSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe3llYXI6IG0gPT09IDEgPyB5IC0gMSA6IHksIG1vbnRoOiBtID09PSAxID8gMTIgOiBtIC0gMSwgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KX0sIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICAgICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHt5ZWFyOiB5IC0gMSwgbW9udGg6IG0sIGRheTogdGhpcy5kYXlzSW5Nb250aChtLCB5IC0gMSl9LCB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKTtcclxuICAgICAgICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7eWVhcjogbSA9PT0gMTIgPyB5ICsgMSA6IHksIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICAgICAgICAgIGRueSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldk1vbnRoRGlzYWJsZWQgPSBtID09PSAxICYmIHkgPT09IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRwbTtcclxuICAgICAgICB0aGlzLnByZXZZZWFyRGlzYWJsZWQgPSB5IC0gMSA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRweTtcclxuICAgICAgICB0aGlzLm5leHRNb250aERpc2FibGVkID0gbSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIgfHwgZG5tO1xyXG4gICAgICAgIHRoaXMubmV4dFllYXJEaXNhYmxlZCA9IHkgKyAxID4gdGhpcy5vcHRzLm1heFllYXIgfHwgZG55O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTXlEYXRlUGlja2VyIH0gZnJvbSBcIi4vbXktZGF0ZS1waWNrZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZvY3VzRGlyZWN0aXZlIH0gZnJvbSBcIi4vZGlyZWN0aXZlcy9teS1kYXRlLXBpY2tlci5mb2N1cy5kaXJlY3RpdmVcIjtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtNeURhdGVQaWNrZXIsIEZvY3VzRGlyZWN0aXZlXSxcclxuICAgIGV4cG9ydHM6IFtNeURhdGVQaWNrZXIsIEZvY3VzRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTXlEYXRlUGlja2VyTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIubW9kdWxlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IElNeUxvY2FsZXMsIElNeU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pbmRleFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxlU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvY2FsZXM6IElNeUxvY2FsZXMgPSB7XHJcbiAgICAgICAgXCJlblwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlN1blwiLCBtbzogXCJNb25cIiwgdHU6IFwiVHVlXCIsIHdlOiBcIldlZFwiLCB0aDogXCJUaHVcIiwgZnI6IFwiRnJpXCIsIHNhOiBcIlNhdFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYXlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcIm1tL2RkL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVG9kYXlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJoZVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIteo15BcIiwgbW86IFwi16nXoFwiLCB0dTogXCLXqdecXCIsIHdlOiBcIteo15FcIiwgdGg6IFwi15fXnlwiLCBmcjogXCLXqdeZXCIsIHNhOiBcItep15FcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi15nXoNeVXCIsIDI6IFwi16TXkdeoXCIsIDM6IFwi157XqNelXCIsIDQ6IFwi15DXpNeoXCIsIDU6IFwi157XkNeZXCIsIDY6IFwi15nXldegXCIsIDc6IFwi15nXldecXCIsIDg6IFwi15DXldeSXCIsIDk6IFwi16HXpNeYXCIsIDEwOiBcIteQ15XXp1wiLCAxMTogXCLXoNeV15FcIiwgMTI6IFwi15PXpteeXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIteU15nXldedXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiamFcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLml6VcIiwgbW86IFwi5pyIXCIsIHR1OiBcIueBq1wiLCB3ZTogXCLmsLRcIiwgdGg6IFwi5pyoXCIsIGZyOiBcIumHkVwiLCBzYTogXCLlnJ9cIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCLvvJHmnIhcIiwgMjogXCLvvJLmnIhcIiwgMzogXCLvvJPmnIhcIiwgNDogXCLvvJTmnIhcIiwgNTogXCLvvJXmnIhcIiwgNjogXCLvvJbmnIhcIiwgNzogXCLvvJfmnIhcIiwgODogXCLvvJjmnIhcIiwgOTogXCLvvJnmnIhcIiwgMTA6IFwi77yR77yQ5pyIXCIsIDExOiBcIu+8ke+8keaciFwiLCAxMjogXCLvvJHvvJLmnIhcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS5tbS5kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLku4rml6VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIkRpbVwiLCBtbzogXCJMdW5cIiwgdHU6IFwiTWFyXCIsIHdlOiBcIk1lclwiLCB0aDogXCJKZXVcIiwgZnI6IFwiVmVuXCIsIHNhOiBcIlNhbVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkphblwiLCAyOiBcIkbDqXZcIiwgMzogXCJNYXJcIiwgNDogXCJBdnJcIiwgNTogXCJNYWlcIiwgNjogXCJKdWluXCIsIDc6IFwiSnVpbFwiLCA4OiBcIkFvw7tcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEw6ljXCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiQXVqb3VyZCdodWlcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJmaVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlN1XCIsIG1vOiBcIk1hXCIsIHR1OiBcIlRpXCIsIHdlOiBcIktlXCIsIHRoOiBcIlRvXCIsIGZyOiBcIlBlXCIsIHNhOiBcIkxhXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogezE6IFwiVGFtXCIsIDI6IFwiSGVsXCIsIDM6IFwiTWFhXCIsIDQ6IFwiSHVoXCIsIDU6IFwiVG91XCIsIDY6IFwiS2VzXCIsIDc6IFwiSGVpXCIsIDg6IFwiRWxvXCIsIDk6IFwiU3l5XCIsIDEwOiBcIkxva1wiLCAxMTogXCJNYXJcIiwgMTI6IFwiSm91XCJ9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiVMOkbsOkw6RuXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZXNcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJEb1wiLCBtbzogXCJMdVwiLCB0dTogXCJNYVwiLCB3ZTogXCJNaVwiLCB0aDogXCJKdVwiLCBmcjogXCJWaVwiLCBzYTogXCJTYVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkVuZVwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFiclwiLCA1OiBcIk1heVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkFnb1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPY3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRpY1wifSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhveVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImh1XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiVmFzXCIsIG1vOiBcIkjDqXRcIiwgdHU6IFwiS2VkZFwiLCB3ZTogXCJTemVcIiwgdGg6IFwiQ3PDvFwiLCBmcjogXCJQw6luXCIsIHNhOiBcIlN6b1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNw6FyXCIsIDQ6IFwiw4FwclwiLCA1OiBcIk3DoWpcIiwgNjogXCJKw7puXCIsIDc6IFwiSsO6bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlN6ZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiTWFcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInN2XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU8O2blwiLCBtbzogXCJNw6VuXCIsIHR1OiBcIlRpc1wiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7ZyXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1halwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJZGFnXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibmxcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJab25cIiwgbW86IFwiTWFhXCIsIHR1OiBcIkRpblwiLCB3ZTogXCJXb2VcIiwgdGg6IFwiRG9uXCIsIGZyOiBcIlZyaVwiLCBzYTogXCJaYXRcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWVpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIlZhbmRhYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJydVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcItCS0YFcIiwgbW86IFwi0J/QvVwiLCB0dTogXCLQktGCXCIsIHdlOiBcItCh0YBcIiwgdGg6IFwi0KfRglwiLCBmcjogXCLQn9GCXCIsIHNhOiBcItCh0LFcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi0K/QvdCyXCIsIDI6IFwi0KTQtdCyXCIsIDM6IFwi0JzQsNGA0YJcIiwgNDogXCLQkNC/0YBcIiwgNTogXCLQnNCw0LlcIiwgNjogXCLQmNGO0L3RjFwiLCA3OiBcItCY0Y7Qu9GMXCIsIDg6IFwi0JDQstCzXCIsIDk6IFwi0KHQtdC90YJcIiwgMTA6IFwi0J7QutGCXCIsIDExOiBcItCd0L7Rj1wiLCAxMjogXCLQlNC10LpcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0KHQtdCz0L7QtNC90Y9cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInVrXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi0J3QtFwiLCBtbzogXCLQn9C9XCIsIHR1OiBcItCS0YJcIiwgd2U6IFwi0KHRgFwiLCB0aDogXCLQp9GCXCIsIGZyOiBcItCf0YJcIiwgc2E6IFwi0KHQsVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLQodGW0YdcIiwgMjogXCLQm9GO0YJcIiwgMzogXCLQkdC10YBcIiwgNDogXCLQmtCy0ZZcIiwgNTogXCLQotGA0LBcIiwgNjogXCLQp9C10YBcIiwgNzogXCLQm9C40L9cIiwgODogXCLQodC10YBcIiwgOTogXCLQktC10YBcIiwgMTA6IFwi0JbQvtCyXCIsIDExOiBcItCb0LjRgVwiLCAxMjogXCLQk9GA0YNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0KHRjNC+0LPQvtC00L3RllwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibm9cIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTw7huXCIsIG1vOiBcIk1hblwiLCB0dTogXCJUaXJcIiwgd2U6IFwiT25zXCIsIHRoOiBcIlRvclwiLCBmcjogXCJGcmVcIiwgc2E6IFwiTMO4clwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBdWdcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiSSBkYWdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ0clwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlBhelwiLCBtbzogXCJQenRcIiwgdHU6IFwiU2FsXCIsIHdlOiBcIsOHYXJcIiwgdGg6IFwiUGVyXCIsIGZyOiBcIkN1bVwiLCBzYTogXCJDbXRcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiT2NhXCIsIDI6IFwixZ51YlwiLCAzOiBcIk1hclwiLCA0OiBcIk5pc1wiLCA1OiBcIk1heVwiLCA2OiBcIkhhelwiLCA3OiBcIlRlbVwiLCA4OiBcIkHEn3VcIiwgOTogXCJFeWxcIiwgMTA6IFwiRWtpXCIsIDExOiBcIkthc1wiLCAxMjogXCJBcmFcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiQnVnw7xuXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicHQtYnJcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJEb21cIiwgbW86IFwiU2VnXCIsIHR1OiBcIlRlclwiLCB3ZTogXCJRdWFcIiwgdGg6IFwiUXVpXCIsIGZyOiBcIlNleFwiLCBzYTogXCJTYWJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmV2XCIsIDM6IFwiTWFyXCIsIDQ6IFwiQWJyXCIsIDU6IFwiTWFpXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdvXCIsIDk6IFwiU2V0XCIsIDEwOiBcIk91dFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGV6XCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkhvamVcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwic3VcIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImRlXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiU29cIiwgbW86IFwiTW9cIiwgdHU6IFwiRGlcIiwgd2U6IFwiTWlcIiwgdGg6IFwiRG9cIiwgZnI6IFwiRnJcIiwgc2E6IFwiU2FcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTcOkclwiLCA0OiBcIkFwclwiLCA1OiBcIk1haVwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlelwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJIZXV0ZVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaXRcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiRG9tXCIsIG1vOiBcIkx1blwiLCB0dTogXCJNYXJcIiwgd2U6IFwiTWVyXCIsIHRoOiBcIkdpb1wiLCBmcjogXCJWZW5cIiwgc2E6IFwiU2FiXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJHZW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWdcIiwgNjogXCJHaXVcIiwgNzogXCJMdWdcIiwgODogXCJBZ29cIiwgOTogXCJTZXRcIiwgMTA6IFwiT3R0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEaWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkL21tL3l5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiT2dnaVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaXQtY2hcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiRG9tXCIsIG1vOiBcIkx1blwiLCB0dTogXCJNYXJcIiwgd2U6IFwiTWVyXCIsIHRoOiBcIkdpb1wiLCBmcjogXCJWZW5cIiwgc2E6IFwiU2FiXCIgfSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJHZW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNYWdcIiwgNjogXCJHaXVcIiwgNzogXCJMdWdcIiwgODogXCJBZ29cIiwgOTogXCJTZXRcIiwgMTA6IFwiT3R0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEaWNcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiT2dnaVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicGxcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiTmllXCIsIG1vOiBcIlBvblwiLCB0dTogXCJXdG9cIiwgd2U6IFwixZpyb1wiLCB0aDogXCJDendcIiwgZnI6IFwiUGnEhVwiLCBzYTogXCJTb2JcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlN0eVwiLCAyOiBcIkx1dFwiLCAzOiBcIk1hclwiLCA0OiBcIkt3aVwiLCA1OiBcIk1halwiLCA2OiBcIkN6ZVwiLCA3OiBcIkxpcFwiLCA4OiBcIlNpZVwiLCA5OiBcIldyelwiLCAxMDogXCJQYcW6XCIsIDExOiBcIkxpc1wiLCAxMjogXCJHcnVcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiRHppc2lhalwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm15XCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwi4YCQ4YCU4YCE4YC64YC54YCC4YCU4YC94YCxXCIsIG1vOiBcIuGAkOGAlOGAhOGAuuGAueGAnOGArFwiLCB0dTogXCLhgKHhgIThgLrhgLnhgILhgKtcIiwgd2U6IFwi4YCX4YCv4YCS4YC54YCT4YCf4YCw4YC4XCIsIHRoOiBcIuGAgOGAvOGAnuGAleGAkOGAseGAuFwiLCBmcjogXCLhgJ7hgLHhgKzhgIDhgLzhgKxcIiwgc2E6IFwi4YCF4YCU4YCxXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIuGAh+GAlOGAuuGAlOGAneGAq+GAm+GArlwiLCAyOiBcIuGAluGAseGAluGAseGArOGAuuGAneGAq+GAm+GArlwiLCAzOiBcIuGAmeGAkOGAulwiLCA0OiBcIuGAp+GAleGAvOGArlwiLCA1OiBcIuGAmeGAsVwiLCA2OiBcIuGAh+GAveGAlOGAulwiLCA3OiBcIuGAh+GAsOGAnOGAreGAr+GAhOGAulwiLCA4OiBcIuGAqeGAguGAr+GAkOGAulwiLCA5OiBcIuGAheGAgOGAuuGAkOGAhOGAuuGAmOGArFwiLCAxMDogXCLhgKHhgLHhgKzhgIDhgLrhgJDhgK3hgK/hgJjhgKxcIiwgMTE6IFwi4YCU4YCt4YCv4YCd4YCE4YC64YCY4YCsXCIsIDEyOiBcIuGAkuGAruGAh+GAhOGAuuGAmOGArFwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLhgJrhgJThgLHhgLdcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJza1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZVwiLCBtbzogXCJQb1wiLCB0dTogXCJVdFwiLCB3ZTogXCJTdFwiLCB0aDogXCLFoHRcIiwgZnI6IFwiUGlcIiwgc2E6IFwiU29cIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk3DoWpcIiwgNjogXCJKw7puXCIsIDc6IFwiSsO6bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJEbmVzXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2xcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHsgc3U6IFwiTmVkXCIsIG1vOiBcIlBvblwiLCB0dTogXCJUb3JcIiwgd2U6IFwiU3JlXCIsIHRoOiBcIsSMZXRcIiwgZnI6IFwiUGV0XCIsIHNhOiBcIlNvYlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWFqXCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXZnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9rdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC4gbW0uIHl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwiRGFuZXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJ6aC1jblwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuaXpVwiLCBtbzogXCLkuIBcIiwgdHU6IFwi5LqMXCIsIHdlOiBcIuS4iVwiLCB0aDogXCLlm5tcIiwgZnI6IFwi5LqUXCIsIHNhOiBcIuWFrVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCIx5pyIXCIsIDI6IFwiMuaciFwiLCAzOiBcIjPmnIhcIiwgNDogXCI05pyIXCIsIDU6IFwiNeaciFwiLCA2OiBcIjbmnIhcIiwgNzogXCI35pyIXCIsIDg6IFwiOOaciFwiLCA5OiBcIjnmnIhcIiwgMTA6IFwiMTDmnIhcIiwgMTE6IFwiMTHmnIhcIiwgMTI6IFwiMTLmnIhcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi5LuK5aSpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwicm9cIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJkdVwiLCBtbzogXCJsdVwiLCB0dTogXCJtYVwiLCB3ZTogXCJtaVwiLCB0aDogXCJqb1wiLCBmcjogXCJ2aVwiLCBzYTogXCJzYVwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCJpYW5cIiwgMjogXCJmZWJcIiwgMzogXCJtYXJ0XCIsIDQ6IFwiYXByXCIsIDU6IFwibWFpXCIsIDY6IFwiaXVuXCIsIDc6IFwiaXVsXCIsIDg6IFwiYXVnXCIsIDk6IFwic2VwdFwiLCAxMDogXCJvY3RcIiwgMTE6IFwibm92XCIsIDEyOiBcImRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJBc3TEg3ppXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiY2FcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJkZ1wiLCBtbzogXCJkbFwiLCB0dTogXCJkdFwiLCB3ZTogXCJkY1wiLCB0aDogXCJkalwiLCBmcjogXCJkdlwiLCBzYTogXCJkc1wifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsxOiBcIkdlblwiLCAyOiBcIkZlYnJcIiwgMzogXCJNYXLDp1wiLCA0OiBcIkFiclwiLCA1OiBcIk1haWdcIiwgNjogXCJKdW55XCIsIDc6IFwiSnVsXCIsIDg6IFwiQWdcIiwgOTogXCJTZXRcIiwgMTA6IFwiT2N0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXNcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQubW0ueXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJBdnVpXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiaWRcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJNaW5cIiwgbW86IFwiU2VuXCIsIHR1OiBcIlNlbFwiLCB3ZTogXCJSYWJcIiwgdGg6IFwiS2FtXCIsIGZyOiBcIkp1bVwiLCBzYTogXCJTYWJcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7MTogXCJKYW5cIiwgMjogXCJGZWJcIiwgMzogXCJNYXJcIiwgNDogXCJBcHJcIiwgNTogXCJNZWlcIiwgNjogXCJKdW5cIiwgNzogXCJKdWxcIiwgODogXCJBZ3NcIiwgOTogXCJTZXBcIiwgMTA6IFwiT2t0XCIsIDExOiBcIk5vdlwiLCAxMjogXCJEZXNcIn0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJIYXJpIGluaVwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZW4tYXVcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTdW5cIiwgbW86IFwiTW9uXCIsIHR1OiBcIlR1ZVwiLCB3ZTogXCJXZWRcIiwgdGg6IFwiVGh1XCIsIGZyOiBcIkZyaVwiLCBzYTogXCJTYXRcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiSmFuXCIsIDI6IFwiRmViXCIsIDM6IFwiTWFyXCIsIDQ6IFwiQXByXCIsIDU6IFwiTWF5XCIsIDY6IFwiSnVuXCIsIDc6IFwiSnVsXCIsIDg6IFwiQXVnXCIsIDk6IFwiU2VwXCIsIDEwOiBcIk9jdFwiLCAxMTogXCJOb3ZcIiwgMTI6IFwiRGVjXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIlRvZGF5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhbS1ldFwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuGKpeGIkeGLtVwiLCBtbzogXCLhiLDhip5cIiwgdHU6IFwi4Yib4Yqt4Yiw4YqeXCIsIHdlOiBcIuGIqOGJoeGLlVwiLCB0aDogXCLhiJDhiJnhiLVcIiwgZnI6IFwi4YuT4Yit4YmlXCIsIHNhOiBcIuGJheGLs+GInFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCLhjIPhipXhi6lcIiwgMjogXCLhjYzhiaXhiKlcIiwgMzogXCLhiJvhiK3hib1cIiwgNDogXCLhiqThjZXhiKhcIiwgNTogXCLhiJzhi61cIiwgNjogXCLhjIHhipVcIiwgNzogXCLhjIHhiIvhi61cIiwgODogXCLhiqbhjIjhiLVcIiwgOTogXCLhiLThjZXhibRcIiwgMTA6IFwi4Yqm4Yqt4YmwXCIsIDExOiBcIuGKluGJrOGInVwiLCAxMjogXCLhi7LhiLThiJ1cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4Yub4YisXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjc1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCJOZVwiLCBtbzogXCJQb1wiLCB0dTogXCLDmnRcIiwgd2U6IFwiU3RcIiwgdGg6IFwixIx0XCIsIGZyOiBcIlDDoVwiLCBzYTogXCJTb1wiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiTGVkXCIsIDI6IFwiw5pub1wiLCAzOiBcIkLFmWVcIiwgNDogXCJEdWJcIiwgNTogXCJLdsSbXCIsIDY6IFwixIx2blwiLCA3OiBcIsSMdmNcIiwgODogXCJTcnBcIiwgOTogXCJaw6HFmVwiLCAxMDogXCLFmMOtalwiLCAxMTogXCJMaXNcIiwgMTI6IFwiUHJvXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkRuZXNcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImVsXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIs6az4XPgVwiLCBtbzogXCLOlM61z4VcIiwgdHU6IFwizqTPgc65XCIsIHdlOiBcIs6kzrXPhFwiLCB0aDogXCLOoM61zrxcIiwgZnI6IFwizqDOsc+BXCIsIHNhOiBcIs6jzrHOslwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwizpnOsc69XCIsIDI6IFwizqbOtc6yXCIsIDM6IFwizpzOsc+BXCIsIDQ6IFwizpHPgM+BXCIsIDU6IFwizpzOsc65XCIsIDY6IFwizpnOv8+Fzr1cIiwgNzogXCLOmc6/z4XOu1wiLCA4OiBcIs6Rz4XOs1wiLCA5OiBcIs6jzrXPgFwiLCAxMDogXCLOn866z4RcIiwgMTE6IFwizp3Ov861XCIsIDEyOiBcIs6UzrXOulwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQvbW0veXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLOo86uzrzOtc+BzrFcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImtrXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcItCW0LpcIiwgbW86IFwi0JTRgVwiLCB0dTogXCLQodGBXCIsIHdlOiBcItCh0YBcIiwgdGg6IFwi0JHRgVwiLCBmcjogXCLQltC8XCIsIHNhOiBcItCh0LFcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItKa0LDSo1wiLCAyOiBcItCQ0pvQv1wiLCAzOiBcItCd0LDRg1wiLCA0OiBcItCh05nRg1wiLCA1OiBcItCc0LDQvFwiLCA2OiBcItCc0LDRg1wiLCA3OiBcItCo0ZbQu1wiLCA4OiBcItCi0LDQvFwiLCA5OiBcItKa0YvRgNC6XCIsIDEwOiBcItKa0LDQt1wiLCAxMTogXCLSmtCw0YBcIiwgMTI6IFwi0JbQtdC70YJcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcItCR0q/Qs9GW0L1cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInRoXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7IHN1OiBcIuC4reC4slwiLCBtbzogXCLguIhcIiwgdHU6IFwi4LitXCIsIHdlOiBcIuC4nlwiLCB0aDogXCLguJ7guKRcIiwgZnI6IFwi4LioXCIsIHNhOiBcIuC4qlwiIH0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4LihLuC4hFwiLCAyOiBcIuC4gS7guJ4uXCIsIDM6IFwi4Lih4Li1LuC4hC5cIiwgNDogXCLguYDguKEu4LiiLlwiLCA1OiBcIuC4ni7guIQuXCIsIDY6IFwi4Lih4Li0LuC4oi5cIiwgNzogXCLguIEu4LiELlwiLCA4OiBcIuC4qi7guIQuXCIsIDk6IFwi4LiBLuC4oi5cIiwgMTA6IFwi4LiVLuC4hC5cIiwgMTE6IFwi4LieLuC4oi5cIiwgMTI6IFwi4LiYLuC4hC5cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi4Lin4Lix4LiZ4LiZ4Li14LmJXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJrby1rclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIuydvFwiLCBtbzogXCLsm5RcIiwgdHU6IFwi7ZmUXCIsIHdlOiBcIuyImFwiLCB0aDogXCLrqqlcIiwgZnI6IFwi6riIXCIsIHNhOiBcIu2GoFwifSxcclxuICAgICAgICAgICAgbW9udGhMYWJlbHM6IHsgMTogXCIx7JuUXCIsIDI6IFwiMuyblFwiLCAzOiBcIjPsm5RcIiwgNDogXCI07JuUXCIsIDU6IFwiNeyblFwiLCA2OiBcIjbsm5RcIiwgNzogXCI37JuUXCIsIDg6IFwiOOyblFwiLCA5OiBcIjnsm5RcIiwgMTA6IFwiMTDsm5RcIiwgMTE6IFwiMTHsm5RcIiwgMTI6IFwiMTLsm5RcIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXkgbW0gZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi7Jik64qYXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJkYVwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcIlPDuG5cIiwgbW86IFwiTWFuXCIsIHR1OiBcIlRpclwiLCB3ZTogXCJPbnNcIiwgdGg6IFwiVG9yXCIsIGZyOiBcIkZyZVwiLCBzYTogXCJMw7hyXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIkphblwiLCAyOiBcIkZlYlwiLCAzOiBcIk1hclwiLCA0OiBcIkFwclwiLCA1OiBcIk1halwiLCA2OiBcIkp1blwiLCA3OiBcIkp1bFwiLCA4OiBcIkF1Z1wiLCA5OiBcIlNlcFwiLCAxMDogXCJPa3RcIiwgMTE6IFwiTm92XCIsIDEyOiBcIkRlY1wiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCJJIGRhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJtb1wiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibHRcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCJTa1wiLCBtbzogXCJQclwiLCB0dTogXCJBblwiLCB3ZTogXCJUclwiLCB0aDogXCJLdFwiLCBmcjogXCJQblwiLCBzYTogXCLFoHRcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiU2F1cy5cIiwgMjogXCJWYXMuXCIsIDM6IFwiS292LlwiLCA0OiBcIkJhbC5cIiwgNTogXCJHZWcuXCIsIDY6IFwiQmlyxb4uXCIsIDc6IFwiTGllcC5cIiwgODogXCJSdWdwLlwiLCA5OiBcIlJ1Z3MuXCIsIDEwOiBcIlNhcGwuXCIsIDExOiBcIkxhcGtyLlwiLCAxMjogXCJHcnVvZC5cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcInl5eXktbW0tZGRcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwixaBpYW5pZW5cIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInZpXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiQ05cIiwgbW86IFwiVDJcIiwgdHU6IFwiVDNcIiwgd2U6IFwiVDRcIiwgdGg6IFwiVDVcIiwgZnI6IFwiVDZcIiwgc2E6IFwiVDdcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiVEhHIDFcIiwgMjogXCJUSEcgMlwiLCAzOiBcIlRIRyAzXCIsIDQ6IFwiVEhHIDRcIiwgNTogXCJUSEcgNVwiLCA2OiBcIlRIRyA2XCIsIDc6IFwiVEhHIDdcIiwgODogXCJUSEcgOFwiLCA5OiBcIlRIRyA5XCIsIDEwOiBcIlRIRyAxMFwiLCAxMTogXCJUSEcgMTFcIiwgMTI6IFwiVEhHIDEyXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC9tbS95eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIkjDtG0gbmF5XCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcIm1vXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYm5cIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLgprDgpqzgpr9cIiwgbW86IFwi4Ka44KeL4KauXCIsIHR1OiBcIuCmruCmmeCnjeCml+CmslwiLCB3ZTogXCLgpqzgp4HgpqdcIiwgdGg6IFwi4Kas4KeD4Ka54KaDXCIsIGZyOiBcIuCmtuCngeCmleCnjeCmsFwiLCBzYTogXCLgprbgpqjgpr9cIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwi4Kac4Ka+4Kao4KeBXCIsIDI6IFwi4Kar4KeH4Kas4KeN4Kaw4KeBXCIsIDM6IFwi4Kau4Ka+4Kaw4KeN4KaaXCIsIDQ6IFwi4KaP4Kaq4KeN4Kaw4Ka/4KayXCIsIDU6IFwi4Kau4KeHXCIsIDY6IFwi4Kac4KeB4KaoXCIsIDc6IFwi4Kac4KeB4Kay4Ka+4KaHXCIsIDg6IFwi4KaG4KaX4Ka44KeN4KafXCIsIDk6IFwi4Ka44KeH4Kaq4KeN4Kaf4KeHXCIsIDEwOiBcIuCmheCmleCnjeCmn+Cni1wiLCAxMTogXCLgpqjgpq3gp4dcIiwgMTI6IFwi4Kah4Ka/4Ka44KeHXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIuCmhuCmnFwiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiYmdcIjoge1xyXG4gICAgICAgICAgICBkYXlMYWJlbHM6IHtzdTogXCLQvdC0XCIsIG1vOiBcItC/0L1cIiwgdHU6IFwi0LLRglwiLCB3ZTogXCLRgdGAXCIsIHRoOiBcItGH0YJcIiwgZnI6IFwi0L/RglwiLCBzYTogXCLRgdCxXCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItGP0L3Rgy5cIiwgMjogXCLRhNC10LIuXCIsIDM6IFwi0LzQsNGA0YJcIiwgNDogXCLQsNC/0YAuXCIsIDU6IFwi0LzQsNC5XCIsIDY6IFwi0Y7QvdC4XCIsIDc6IFwi0Y7Qu9C4XCIsIDg6IFwi0LDQstCzLlwiLCA5OiBcItGB0LXQvy5cIiwgMTA6IFwi0L7QutGCLlwiLCAxMTogXCLQvdC+0LUuXCIsIDEyOiBcItC00LXQui5cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXlcIixcclxuICAgICAgICAgICAgdG9kYXlCdG5UeHQ6IFwi0LTQvdC10YFcIixcclxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IFwibW9cIixcclxuICAgICAgICAgICAgc3VuSGlnaGxpZ2h0OiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImhyXCI6IHtcclxuICAgICAgICAgICAgZGF5TGFiZWxzOiB7c3U6IFwiTmVcIiwgbW86IFwiUG9cIiwgdHU6IFwiVWxcIiwgd2U6IFwiU3JcIiwgdGg6IFwixIxlXCIsIGZyOiBcIlBlXCIsIHNhOiBcIlN1XCJ9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcIlNpalwiLCAyOiBcIlZlbFwiLCAzOiBcIk/FvnVcIiwgNDogXCJUcmFcIiwgNTogXCJTdmlcIiwgNjogXCJMaXBcIiwgNzogXCJTcnBcIiwgODogXCJLb2xcIiwgOTogXCJSdWpcIiwgMTA6IFwiTGlzXCIsIDExOiBcIlN0dVwiLCAxMjogXCJQcm9cIiB9LFxyXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcImRkLm1tLnl5eXkuXCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcImRhbmFzXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInN1XCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJhclwiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczogeyBzdTogXCLYp9mE2KPYrdivXCIsIG1vOiBcItin2YTYp9ir2YbZitmGXCIsIHR1OiBcItin2YTYq9mE2KfYq9in2KFcIiwgd2U6IFwi2KfZhNin2LHYqNi52KfYoVwiLCB0aDogXCLYp9mE2K7ZhdmK2LNcIiwgZnI6IFwi2KfZhNis2YXYudipXCIsIHNhOiBcItin2YTYs9io2KpcIiB9LFxyXG4gICAgICAgICAgICBtb250aExhYmVsczogeyAxOiBcItmK2YbYp9mK2LFcIiwgMjogXCLZgdio2LHYp9mK2LFcIiwgMzogXCLZhdin2LHYs1wiLCA0OiBcItin2KjYsdmK2YRcIiwgNTogXCLZhdin2YrZiFwiLCA2OiBcItmK2YjZhtmK2YhcIiwgNzogXCLZitmI2YTZitmIXCIsIDg6IFwi2KPYutiz2LfYs1wiLCA5OiBcItiz2KjYqtmF2KjYsVwiLCAxMDogXCLYo9mD2KrZiNio2LFcIiwgMTE6IFwi2YbZiNmB2YXYqNixXCIsIDEyOiBcItiv2YrYs9mF2KjYsVwiIH0sXHJcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwieXl5eS1tbS1kZFwiLFxyXG4gICAgICAgICAgICB0b2RheUJ0blR4dDogXCLYp9mE2YrZiNmFXCIsXHJcbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiBcInNhXCIsXHJcbiAgICAgICAgICAgIHN1bkhpZ2hsaWdodDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJpc1wiOiB7XHJcbiAgICAgICAgICAgIGRheUxhYmVsczoge3N1OiBcInN1blwiLCBtbzogXCJtw6FuXCIsIHR1OiBcIsO+cmlcIiwgd2U6IFwibWnDsFwiLCB0aDogXCJmaW1cIiwgZnI6IFwiZsO2c1wiLCBzYTogXCJsYXVcIn0sXHJcbiAgICAgICAgICAgIG1vbnRoTGFiZWxzOiB7IDE6IFwiamFuXCIsIDI6IFwiZmViXCIsIDM6IFwibWFyXCIsIDQ6IFwiYXByXCIsIDU6IFwibWHDrVwiLCA2OiBcImrDum5cIiwgNzogXCJqw7psXCIsIDg6IFwiw6Fnw7pcIiwgOTogXCJzZXBcIiwgMTA6IFwib2t0XCIsIDExOiBcIm7Ds3ZcIiwgMTI6IFwiZGVzXCIgfSxcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcbiAgICAgICAgICAgIHRvZGF5QnRuVHh0OiBcIsONIGRhZ1wiLFxyXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogXCJzdVwiLFxyXG4gICAgICAgICAgICBzdW5IaWdobGlnaHQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldExvY2FsZU9wdGlvbnMobG9jYWxlOiBzdHJpbmcpOiBJTXlPcHRpb25zIHtcclxuICAgICAgICBpZiAobG9jYWxlICYmIHRoaXMubG9jYWxlcy5oYXNPd25Qcm9wZXJ0eShsb2NhbGUpKSB7XHJcbiAgICAgICAgICAgIC8vIFVzZXIgZ2l2ZW4gbG9jYWxlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsZXNbbG9jYWxlXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGVmYXVsdDogZW5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbGVzW1wiZW5cIl07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL3NlcnZpY2VzL215LWRhdGUtcGlja2VyLmxvY2FsZS5zZXJ2aWNlLnRzIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IElNeURhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1kYXRlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlEYXRlUmFuZ2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1kYXRlLXJhbmdlLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlNb250aCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1vbnRoLmludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBJTXlNb250aExhYmVscyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL215LW1vbnRoLWxhYmVscy5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgSU15TWFya2VkRGF0ZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tYXJrZWQtZGF0ZXMuaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IElNeU1hcmtlZERhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9teS1tYXJrZWQtZGF0ZS5pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IE0gPSBcIm1cIjtcclxuY29uc3QgTU0gPSBcIm1tXCI7XHJcbmNvbnN0IE1NTSA9IFwibW1tXCI7XHJcbmNvbnN0IEREID0gXCJkZFwiO1xyXG5jb25zdCBZWVlZID0gXCJ5eXl5XCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsU2VydmljZSB7XHJcbiAgICB3ZWVrRGF5czogQXJyYXk8c3RyaW5nPiA9IFtcInN1XCIsIFwibW9cIiwgXCJ0dVwiLCBcIndlXCIsIFwidGhcIiwgXCJmclwiLCBcInNhXCJdO1xyXG5cclxuICAgIGlzRGF0ZVZhbGlkKGRhdGVTdHI6IHN0cmluZywgZGF0ZUZvcm1hdDogc3RyaW5nLCBtaW5ZZWFyOiBudW1iZXIsIG1heFllYXI6IG51bWJlciwgZGlzYWJsZVVudGlsOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUsIGRpc2FibGVXZWVrZW5kczogYm9vbGVhbiwgZGlzYWJsZVdlZWtEYXlzOiBBcnJheTxzdHJpbmc+LCBkaXNhYmxlRGF5czogQXJyYXk8SU15RGF0ZT4sIGRpc2FibGVEYXRlUmFuZ2VzOiBBcnJheTxJTXlEYXRlUmFuZ2U+LCBtb250aExhYmVsczogSU15TW9udGhMYWJlbHMsIGVuYWJsZURheXM6IEFycmF5PElNeURhdGU+KTogSU15RGF0ZSB7XHJcbiAgICAgICAgbGV0IHJldHVybkRhdGU6IElNeURhdGUgPSB7ZGF5OiAwLCBtb250aDogMCwgeWVhcjogMH07XHJcbiAgICAgICAgbGV0IGRheXNJbk1vbnRoOiBBcnJheTxudW1iZXI+ID0gWzMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xyXG4gICAgICAgIGxldCBpc01vbnRoU3RyOiBib29sZWFuID0gZGF0ZUZvcm1hdC5pbmRleE9mKE1NTSkgIT09IC0xO1xyXG4gICAgICAgIGxldCBzZXBhcmF0b3JzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5nZXREYXRlRm9ybWF0U2VwYXJhdG9ycyhkYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICAgbGV0IG1vbnRoOiBudW1iZXIgPSBpc01vbnRoU3RyID8gdGhpcy5wYXJzZURhdGVQYXJ0TW9udGhOYW1lKGRhdGVGb3JtYXQsIGRhdGVTdHIsIE1NTSwgbW9udGhMYWJlbHMpIDogdGhpcy5wYXJzZURhdGVQYXJ0TnVtYmVyKGRhdGVGb3JtYXQsIGRhdGVTdHIsIE1NKTtcclxuICAgICAgICBpZiAoaXNNb250aFN0ciAmJiBtb250aExhYmVsc1ttb250aF0pIHtcclxuICAgICAgICAgICAgZGF0ZUZvcm1hdCA9IHRoaXMuY2hhbmdlRGF0ZUZvcm1hdChkYXRlRm9ybWF0LCBtb250aExhYmVsc1ttb250aF0ubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGVTdHIubGVuZ3RoICE9PSBkYXRlRm9ybWF0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGVGb3JtYXQuaW5kZXhPZihzZXBhcmF0b3JzWzBdKSAhPT0gZGF0ZVN0ci5pbmRleE9mKHNlcGFyYXRvcnNbMF0pIHx8IGRhdGVGb3JtYXQubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1sxXSkgIT09IGRhdGVTdHIubGFzdEluZGV4T2Yoc2VwYXJhdG9yc1sxXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXk6IG51bWJlciA9IHRoaXMucGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0LCBkYXRlU3RyLCBERCk7XHJcbiAgICAgICAgbGV0IHllYXI6IG51bWJlciA9IHRoaXMucGFyc2VEYXRlUGFydE51bWJlcihkYXRlRm9ybWF0LCBkYXRlU3RyLCBZWVlZKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoICE9PSAtMSAmJiBkYXkgIT09IC0xICYmIHllYXIgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIGlmICh5ZWFyIDwgbWluWWVhciB8fCB5ZWFyID4gbWF4WWVhciB8fCBtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldHVybkRhdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IHllYXIsIG1vbnRoOiBtb250aCwgZGF5OiBkYXl9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZERheShkYXRlLCBtaW5ZZWFyLCBtYXhZZWFyLCBkaXNhYmxlVW50aWwsIGRpc2FibGVTaW5jZSwgZGlzYWJsZVdlZWtlbmRzLCBkaXNhYmxlV2Vla0RheXMsIGRpc2FibGVEYXlzLCBkaXNhYmxlRGF0ZVJhbmdlcywgZW5hYmxlRGF5cykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoeWVhciAlIDQwMCA9PT0gMCB8fCAoeWVhciAlIDEwMCAhPT0gMCAmJiB5ZWFyICUgNCA9PT0gMCkpIHtcclxuICAgICAgICAgICAgICAgIGRheXNJbk1vbnRoWzFdID0gMjk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChkYXkgPCAxIHx8IGRheSA+IGRheXNJbk1vbnRoW21vbnRoIC0gMV0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5EYXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBWYWxpZCBkYXRlXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlRm9ybWF0U2VwYXJhdG9ycyhkYXRlRm9ybWF0OiBzdHJpbmcpOiBBcnJheTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gZGF0ZUZvcm1hdC5tYXRjaCgvW14oZG15KV17MSx9L2cpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZURhdGVGb3JtYXQoZGF0ZUZvcm1hdDogc3RyaW5nLCBsZW46IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG1wOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgbXAgKz0gTTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQucmVwbGFjZShNTU0sIG1wKTtcclxuICAgIH1cclxuXHJcbiAgICBpc01vbnRoTGFiZWxWYWxpZChtb250aExhYmVsOiBzdHJpbmcsIG1vbnRoTGFiZWxzOiBJTXlNb250aExhYmVscyk6IG51bWJlciB7XHJcbiAgICAgICAgZm9yIChsZXQga2V5ID0gMTsga2V5IDw9IDEyOyBrZXkrKykge1xyXG4gICAgICAgICAgICBpZiAobW9udGhMYWJlbC50b0xvd2VyQ2FzZSgpID09PSBtb250aExhYmVsc1trZXldLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGlzWWVhckxhYmVsVmFsaWQoeWVhckxhYmVsOiBudW1iZXIsIG1pblllYXI6IG51bWJlciwgbWF4WWVhcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAoeWVhckxhYmVsID49IG1pblllYXIgJiYgeWVhckxhYmVsIDw9IG1heFllYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHllYXJMYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRGF0ZVBhcnROdW1iZXIoZGF0ZUZvcm1hdDogc3RyaW5nLCBkYXRlU3RyaW5nOiBzdHJpbmcsIGRhdGVQYXJ0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBwb3M6IG51bWJlciA9IHRoaXMuZ2V0RGF0ZVBhcnRJbmRleChkYXRlRm9ybWF0LCBkYXRlUGFydCk7XHJcbiAgICAgICAgaWYgKHBvcyAhPT0gLTEpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cmluZyhwb3MsIHBvcyArIGRhdGVQYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGlmICghL15cXGQrJC8udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VEYXRlUGFydE1vbnRoTmFtZShkYXRlRm9ybWF0OiBzdHJpbmcsIGRhdGVTdHJpbmc6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZywgbW9udGhMYWJlbHM6IElNeU1vbnRoTGFiZWxzKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgbW9udGhMYWJlbDogc3RyaW5nID0gXCJcIjtcclxuICAgICAgICBsZXQgc3RhcnQ6IG51bWJlciA9IGRhdGVGb3JtYXQuaW5kZXhPZihkYXRlUGFydCk7XHJcbiAgICAgICAgaWYgKGRhdGVGb3JtYXQuc3Vic3RyKGRhdGVGb3JtYXQubGVuZ3RoIC0gMykgPT09IE1NTSkge1xyXG4gICAgICAgICAgICBtb250aExhYmVsID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcoc3RhcnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGVuZDogbnVtYmVyID0gZGF0ZVN0cmluZy5pbmRleE9mKGRhdGVGb3JtYXQuY2hhckF0KHN0YXJ0ICsgZGF0ZVBhcnQubGVuZ3RoKSwgc3RhcnQpO1xyXG4gICAgICAgICAgICBtb250aExhYmVsID0gZGF0ZVN0cmluZy5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTW9udGhMYWJlbFZhbGlkKG1vbnRoTGFiZWwsIG1vbnRoTGFiZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlUGFydEluZGV4KGRhdGVGb3JtYXQ6IHN0cmluZywgZGF0ZVBhcnQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGVGb3JtYXQuaW5kZXhPZihkYXRlUGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VEZWZhdWx0TW9udGgobW9udGhTdHJpbmc6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgICAgICBsZXQgbW9udGg6IElNeU1vbnRoID0ge21vbnRoVHh0OiBcIlwiLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgICAgICAgaWYgKG1vbnRoU3RyaW5nICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzcGxpdCA9IG1vbnRoU3RyaW5nLnNwbGl0KG1vbnRoU3RyaW5nLm1hdGNoKC9bXjAtOV0vKVswXSk7XHJcbiAgICAgICAgICAgIG1vbnRoLm1vbnRoTmJyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMF0pIDogcGFyc2VJbnQoc3BsaXRbMV0pO1xyXG4gICAgICAgICAgICBtb250aC55ZWFyID0gc3BsaXRbMF0ubGVuZ3RoID09PSAyID8gcGFyc2VJbnQoc3BsaXRbMV0pIDogcGFyc2VJbnQoc3BsaXRbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbW9udGg7XHJcbiAgICB9XHJcblxyXG4gICAgaXNEaXNhYmxlZERheShkYXRlOiBJTXlEYXRlLCBtaW5ZZWFyOiBudW1iZXIsIG1heFllYXI6IG51bWJlciwgZGlzYWJsZVVudGlsOiBJTXlEYXRlLCBkaXNhYmxlU2luY2U6IElNeURhdGUsIGRpc2FibGVXZWVrZW5kczogYm9vbGVhbiwgZGlzYWJsZVdlZWtEYXlzOiBBcnJheTxzdHJpbmc+LCBkaXNhYmxlRGF5czogQXJyYXk8SU15RGF0ZT4sIGRpc2FibGVEYXRlUmFuZ2VzOiBBcnJheTxJTXlEYXRlUmFuZ2U+LCBlbmFibGVEYXlzOiBBcnJheTxJTXlEYXRlPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGUgb2YgZW5hYmxlRGF5cykge1xyXG4gICAgICAgICAgICBpZiAoZS55ZWFyID09PSBkYXRlLnllYXIgJiYgZS5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBlLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRuID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRlLnllYXIgPCBtaW5ZZWFyICYmIGRhdGUubW9udGggPT09IDEyIHx8IGRhdGUueWVhciA+IG1heFllYXIgJiYgZGF0ZS5tb250aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXRlTXM6IG51bWJlciA9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVVbnRpbCkgJiYgZGF0ZU1zIDw9IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRpc2FibGVVbnRpbCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkRGF0ZShkaXNhYmxlU2luY2UpICYmIGRhdGVNcyA+PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlU2luY2UpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRpc2FibGVXZWVrZW5kcykge1xyXG4gICAgICAgICAgICBpZiAoZG4gPT09IDAgfHwgZG4gPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGlzYWJsZVdlZWtEYXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgd2Qgb2YgZGlzYWJsZVdlZWtEYXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG4gPT09IHRoaXMuZ2V0V2Vla2RheUluZGV4KHdkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBkIG9mIGRpc2FibGVEYXlzKSB7XHJcbiAgICAgICAgICAgIGlmIChkLnllYXIgPT09IGRhdGUueWVhciAmJiBkLm1vbnRoID09PSBkYXRlLm1vbnRoICYmIGQuZGF5ID09PSBkYXRlLmRheSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGQgb2YgZGlzYWJsZURhdGVSYW5nZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZERhdGUoZC5iZWdpbikgJiYgdGhpcy5pc0luaXRpYWxpemVkRGF0ZShkLmVuZCkgJiYgZGF0ZU1zID49IHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGQuYmVnaW4pICYmIGRhdGVNcyA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkLmVuZCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc01hcmtlZERhdGUoZGF0ZTogSU15RGF0ZSwgbWFya2VkRGF0ZXM6IEFycmF5PElNeU1hcmtlZERhdGVzPiwgbWFya1dlZWtlbmRzOiBJTXlNYXJrZWREYXRlKTogSU15TWFya2VkRGF0ZSB7XHJcbiAgICAgICAgZm9yIChsZXQgbWQgb2YgbWFya2VkRGF0ZXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZCBvZiBtZC5kYXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGQueWVhciA9PT0gZGF0ZS55ZWFyICYmIGQubW9udGggPT09IGRhdGUubW9udGggJiYgZC5kYXkgPT09IGRhdGUuZGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHttYXJrZWQ6IHRydWUsIGNvbG9yOiBtZC5jb2xvcn07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hcmtXZWVrZW5kcyAmJiBtYXJrV2Vla2VuZHMubWFya2VkKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXlOYnIgPSB0aGlzLmdldERheU51bWJlcihkYXRlKTtcclxuICAgICAgICAgICAgaWYgKGRheU5iciA9PT0gMCB8fCBkYXlOYnIgPT09IDYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7bWFya2VkOiB0cnVlLCBjb2xvcjogbWFya1dlZWtlbmRzLmNvbG9yfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge21hcmtlZDogZmFsc2UsIGNvbG9yOiBcIlwifTtcclxuICAgIH1cclxuXHJcbiAgICBpc0hpZ2hsaWdodGVkRGF0ZShkYXRlOiBJTXlEYXRlLCBzdW5IaWdobGlnaHQ6IGJvb2xlYW4sIHNhdEhpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0RGF0ZXM6IEFycmF5PElNeURhdGU+KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGRheU5icjogbnVtYmVyID0gdGhpcy5nZXREYXlOdW1iZXIoZGF0ZSk7XHJcbiAgICAgICAgaWYgKHN1bkhpZ2hsaWdodCAmJiBkYXlOYnIgPT09IDAgfHwgc2F0SGlnaGxpZ2h0ICYmIGRheU5iciA9PT0gNikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZCBvZiBoaWdobGlnaHREYXRlcykge1xyXG4gICAgICAgICAgICBpZiAoZC55ZWFyID09PSBkYXRlLnllYXIgJiYgZC5tb250aCA9PT0gZGF0ZS5tb250aCAmJiBkLmRheSA9PT0gZGF0ZS5kYXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRXZWVrTnVtYmVyKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBkOiBEYXRlID0gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIChkLmdldERheSgpID09PSAwID8gLTMgOiA0IC0gZC5nZXREYXkoKSkpO1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCgoZC5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkLmdldEZ1bGxZZWFyKCksIDAsIDQpLmdldFRpbWUoKSkgLyA4NjQwMDAwMCkgLyA3KSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoZGF0ZTogSU15RGF0ZSwgZGlzYWJsZVVudGlsOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbml0aWFsaXplZERhdGUoZGlzYWJsZVVudGlsKSAmJiB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSA8PSB0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkaXNhYmxlVW50aWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVNpbmNlKGRhdGU6IElNeURhdGUsIGRpc2FibGVTaW5jZTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5pdGlhbGl6ZWREYXRlKGRpc2FibGVTaW5jZSkgJiYgdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZSkgPj0gdGhpcy5nZXRUaW1lSW5NaWxsaXNlY29uZHMoZGlzYWJsZVNpbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0luaXRpYWxpemVkRGF0ZShkYXRlOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGUueWVhciAhPT0gMCAmJiBkYXRlLm1vbnRoICE9PSAwICYmIGRhdGUuZGF5ICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU2FtZURhdGUoZDE6IElNeURhdGUsIGQyOiBJTXlEYXRlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGQxLnllYXIgPT09IGQyLnllYXIgJiYgZDEubW9udGggPT09IGQyLm1vbnRoICYmIGQxLmRheSA9PT0gZDIuZGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoIC0gMSwgZGF0ZS5kYXksIDAsIDAsIDAsIDApLmdldFRpbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXlOdW1iZXIoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGQ6IERhdGUgPSBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIGQuZ2V0RGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2Vla0RheXMoKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla0RheXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2Vla2RheUluZGV4KHdkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrRGF5cy5pbmRleE9mKHdkKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9zZXJ2aWNlcy9teS1kYXRlLXBpY2tlci51dGlsLnNlcnZpY2UudHMiLCIvKlxyXG4gKiBUSElTIElTIFRFTVBPUkFSWSBUTyBQQVRDSCAyLjEuMSsgQ29yZSBidWdzXHJcbiAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxubGV0IF9fY29tcGlsZXJfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29tcGlsZXInKTtcclxuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG52YXIgX19jb3JlX3ByaXZhdGVfXzogYW55ID0gcmVxdWlyZSgnQGFuZ3VsYXIvY29yZScpO1xyXG5sZXQgcGF0Y2g6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbmlmICghX19jb3JlX3ByaXZhdGVfXy5oYXNPd25Qcm9wZXJ0eSgnVmlld1V0aWxzJykpIHtcclxuICAgIHBhdGNoID0gdHJ1ZTtcclxuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xyXG59XHJcblxyXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xyXG4gICAgcGF0Y2ggPSB0cnVlO1xyXG4gICAgKF9fY29tcGlsZXJfXykuX19jb21waWxlcl9wcml2YXRlX18gPSB7XHJcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxyXG4gICAgICAgIENzc1NlbGVjdG9yOiBfX2NvbXBpbGVyX18uQ3NzU2VsZWN0b3JcclxuICAgIH1cclxufVxyXG5cclxudmFyIF9fdW5pdmVyc2FsX186IGFueSA9IHJlcXVpcmUoJ2FuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfXycpO1xyXG5pZiAocGF0Y2gpIHtcclxuICAgIF9fdW5pdmVyc2FsX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xyXG4gICAgX191bml2ZXJzYWxfXy5Dc3NTZWxlY3RvciA9IF9fY29tcGlsZXJfXy5Dc3NTZWxlY3RvclxyXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsImltcG9ydCB7IEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy9zaGFyZWQvZ2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHM6R2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeTtcclxuXHRjb25zdHJ1Y3Rvcihhbmd1bGFydGljczJHb29nbGVBbmFseXRpY3M6IEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcywgcHJpdmF0ZSBnbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5OiBHbG9iYWxDb25zdGFudHNSZXBvc2l0b3J5KSB7XHJcbiAgICB0aGlzLmdsb2JhbENvbnN0YW50cyA9IGdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnk7XHJcbiAgfVxyXG4gfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcclxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXHJcbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XHJcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxyXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSAnLi9hcHAucm91dGVzJztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE15RGF0ZVBpY2tlck1vZHVsZSB9IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9teWRhdGVwaWNrZXIvc3JjL215LWRhdGUtcGlja2VyL215LWRhdGUtcGlja2VyLm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdkNvbXBvbmVudCB9IGZyb20gJy4vbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcHMtbGlzdC93b3Jrc2hvcHMtbGlzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vd29ya3Nob3AtZmlsdGVyL3dvcmtzaG9wLWZpbHRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BSZXBvc2l0b3J5IH0gZnJvbSAnLi9zZXJ2aWNlcy93b3Jrc2hvcHMvd29ya3Nob3BSZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgR2xvYmFsQ29uc3RhbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvc2hhcmVkL2dsb2JhbENvbnN0YW50c1JlcG9zaXRvcnknO1xyXG5pbXBvcnQgeyBQYWdlUmVkaXJlY3RDb21wb25lbnQgfSBmcm9tICcuL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBdXRvY29tcGxldGVDb21wb25lbnQgfSBmcm9tICcuL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBBYm91dENvbXBvbmVudCB9IGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2Vycm9yL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXJtc0FuZENvbmRpdGlvbnNDb21wb25lbnQgfSBmcm9tICcuL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByaXZhY3lDb21wb25lbnQgfSBmcm9tICcuL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudCdcclxuXHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSwgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZzJQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnbmcyLXBhZ2luYXRpb24nO1xyXG5cclxuLyoqXHJcbiAqIFRvcC1sZXZlbCBOZ01vZHVsZSBcImNvbnRhaW5lclwiXHJcbiAqL1xyXG5ATmdNb2R1bGUoe1xyXG4gIC8qKiBSb290IEFwcCBDb21wb25lbnQgKi9cclxuICBib290c3RyYXA6IFsgQXBwQ29tcG9uZW50IF0sXHJcbiAgLyoqIE91ciBDb21wb25lbnRzICovXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcblx0QXBwQ29tcG9uZW50LFxyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIE5hdkNvbXBvbmVudCwgXHJcbiAgICBEcm9wZG93bkNvbXBvbmVudCxcclxuICAgIERhdGVQaWNrZXJDb21wb25lbnQsXHJcbiAgICBXb3Jrc2hvcEZpbHRlckNvbXBvbmVudCxcclxuICAgIFdvcmtzaG9wc0xpc3RDb21wb25lbnQsXHJcbiAgICBXb3Jrc2hvcHNDb21wb25lbnQsXHJcbiAgICBDb250YWN0VXNDb21wb25lbnQsXHJcbiAgICBXb3Jrc2hvcERldGFpbHNDb21wb25lbnQsXHJcbiAgICBQYWdlUmVkaXJlY3RDb21wb25lbnQsXHJcbiAgICBBdXRvY29tcGxldGVDb21wb25lbnQsXHJcbiAgICBBYm91dENvbXBvbmVudCxcclxuICAgIEVycm9yQ29tcG9uZW50LFxyXG4gICAgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50LFxyXG4gICAgRm9vdGVyQ29tcG9uZW50LFxyXG4gICAgUHJpdmFjeUNvbXBvbmVudFxyXG5cdF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgLyoqXHJcbiAgICAgKiBOT1RFOiBOZWVkcyB0byBiZSB5b3VyIGZpcnN0IGltcG9ydCAoISlcclxuICAgICAqIE5vZGVNb2R1bGUsIE5vZGVIdHRwTW9kdWxlLCBOb2RlSnNvbnBNb2R1bGUgYXJlIGluY2x1ZGVkXHJcbiAgICAgKi9cclxuICAgIFVuaXZlcnNhbE1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTXlEYXRlUGlja2VyTW9kdWxlLFxyXG4gICAgLyoqXHJcbiAgICAgKiB1c2luZyByb3V0ZXNcclxuICAgICAqL1xyXG4gICAgUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKSxcclxuICAgIEFuZ3VsYXJ0aWNzMk1vZHVsZS5mb3JSb290KFsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIF0pLFxyXG4gICAgQW5ndWxhcnRpY3MyTW9kdWxlLmZvckNoaWxkKCksXHJcbiAgICBOZzJQYWdpbmF0aW9uTW9kdWxlXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtXb3Jrc2hvcFJlcG9zaXRvcnksIEdsb2JhbENvbnN0YW50c1JlcG9zaXRvcnldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5ub2RlLm1vZHVsZS50cyIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gIGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0Q29tcG9uZW50IH0gIGZyb20gJy4vYWJvdXQvYWJvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRXJyb3JDb21wb25lbnQgfSAgZnJvbSAnLi9lcnJvci9lcnJvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXb3Jrc2hvcHNDb21wb25lbnQgfSBmcm9tICcuL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi93b3Jrc2hvcC1kZXRhaWxzL3dvcmtzaG9wLWRldGFpbHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGFjdFVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGFnZVJlZGlyZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVybXNBbmRDb25kaXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcml2YWN5Q29tcG9uZW50IH0gZnJvbSAnLi9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQnXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgeyBwYXRoOiAnJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gIHsgcGF0aDogJ2Fib3V0JywgY29tcG9uZW50OiBBYm91dENvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICd3b3Jrc2hvcHMvOnBhZ2VOdW1iZXInLCBjb21wb25lbnQ6IFdvcmtzaG9wc0NvbXBvbmVudCB9LFxyXG4gIHsgcGF0aDogJ3Bob3RvZ3JhcGh5LXdvcmtzaG9wLWRldGFpbHMvOnRpdGxlLzppZCcsIGNvbXBvbmVudDogV29ya3Nob3BEZXRhaWxzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAnY29udGFjdCcsIGNvbXBvbmVudDogQ29udGFjdFVzQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiAncGFnZS1yZWRpcmVjdC86ZXh0ZXJuYWxVcmwnLCBjb21wb25lbnQ6IFBhZ2VSZWRpcmVjdENvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICB7IHBhdGg6ICc0MDQnLCBjb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LCBwYXRoTWF0Y2g6J2Z1bGwnfSxcclxuICB7IHBhdGg6ICd0ZXJtc2FuZGNvbmRpdGlvbnMnLCBjb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbXBvbmVudCwgcGF0aE1hdGNoOiAnZnVsbCd9LFxyXG4gIHsgcGF0aDogJ3ByaXZhY3lwb2xpY3knLCBjb21wb25lbnQ6IFByaXZhY3lDb21wb25lbnQsIHBhdGhNYXRjaDogJ2Z1bGwnfSxcclxuICB7IHBhdGg6ICd3b3Jrc2hvcHMnLCByZWRpcmVjdFRvOiAnL3dvcmtzaG9wcy8xJyB9LFxyXG4gIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy80MDQnIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2FwcC5yb3V0ZXMudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkcm9wZG93bicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBkYXRhTW9kZWw6IGFueVtdO1xyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25DaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBpc0NvbGxhcHNlZDogYm9vbGVhbjtcclxuICBidXR0b25MYWJlbDogc3RyaW5nO1xyXG4gIHByaXZhdGUgcGFuZWxPdmVybGF5OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlciwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuICAgIHRoaXMucGFuZWxPdmVybGF5ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYnV0dG9uTGFiZWwgPSBcIlNlbGVjdCBjYXRlZ29yeVwiO1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW5HbG9iYWwoJ2RvY3VtZW50JywgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF0aGF0LmlzQ29sbGFwc2VkICYmIHRoaXMucGFuZWxPdmVybGF5KSB7XHJcbiAgICAgICAgdGhhdC5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VkLmVtaXQodGhpcy5idXR0b25MYWJlbCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wYW5lbE92ZXJsYXkgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0VmFsdWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5idXR0b25MYWJlbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRHJvcGRvd24oKSB7XHJcbiAgICBpZiAoIXRoaXMucGFuZWxPdmVybGF5KSB7XHJcbiAgICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG92ZXJsYXkoKSB7XHJcbiAgICB0aGlzLnBhbmVsT3ZlcmxheSA9IHRydWU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZHJvcGRvd24tbWVudS9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Zvb3RlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Zvb3Rlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRm9vdGVyQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2aS1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9uYXZiYXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaGlkZUZpbHRlcjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgaGlkZU5hdmJhcjogYm9vbGVhbjtcclxuICAgIEBPdXRwdXQoKSBmaWx0ZXJzRHJvcGRvd25Ub2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBASW5wdXQoKSBzaG93RmlsdGVyczogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHNob3dOYW1lOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZUZpbHRlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5oaWRlTmF2YmFyID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRvZ2dsZUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSAhdGhpcy5oaWRlRmlsdGVyO1xyXG4gICAgICAgIGlmICghdGhpcy5oaWRlTmF2YmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZU5hdmJhciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyc0Ryb3Bkb3duVG9nZ2xlLmVtaXQodGhpcy5oaWRlRmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVOYXZiYXIoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlTmF2YmFyID0gIXRoaXMuaGlkZU5hdmJhcjtcclxuICAgICAgICBpZiAoIXRoaXMuaGlkZUZpbHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVGaWx0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnNEcm9wZG93blRvZ2dsZS5lbWl0KHRoaXMuaGlkZUZpbHRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCIvLyBUaGUgZmlsZSBjb250ZW50cyBmb3IgdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQgd2lsbCBvdmVyd3JpdGUgdGhlc2UgZHVyaW5nIGJ1aWxkLlxyXG4vLyBUaGUgYnVpbGQgc3lzdGVtIGRlZmF1bHRzIHRvIHRoZSBkZXYgZW52aXJvbm1lbnQgd2hpY2ggdXNlcyBgZW52aXJvbm1lbnQudHNgLCBidXQgaWYgeW91IGRvXHJcbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXHJcbi8vIFRoZSBsaXN0IG9mIHdoaWNoIGVudiBtYXBzIHRvIHdoaWNoIGZpbGUgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLWNsaS5qc29uYC5cclxuXHJcbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcclxuICBwcm9kdWN0aW9uOiBmYWxzZVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXHJcbi8vIHRoZSBhcHAuIFlvdSBjYW4gYWRkIHlvdXIgb3duIGV4dHJhIHBvbHlmaWxscyB0byB0aGlzIGZpbGUuXHJcbmltcG9ydCAnYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxscyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L2Z1bmN0aW9uJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9udW1iZXInO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvZGF0ZSc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XHJcbmltcG9ydCAnY29yZS1qcy9lczYvbWFwJztcclxuaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnO1xyXG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xyXG5cclxuaW1wb3J0ICdjb3JlLWpzL2VzNy9yZWZsZWN0JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxyXG4gKiBTZXJ2ZXItc2lkZSByb3V0ZXMuIE9ubHkgdGhlIGxpc3RlZCByb3V0ZXMgc3VwcG9ydCBodG1sNXB1c2hzdGF0ZS5cclxuICogSGFzIHRvIG1hdGNoIGNsaWVudCBzaWRlIHJvdXRlcy5cclxuICpcclxuICogSW5kZXggKC8pIHJvdXRlIGRvZXMgbm90IGhhdmUgdG8gYmUgbGlzdGVkIGhlcmUuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xyXG4gKiAnaG9tZScsICdhYm91dCdcclxuICogXTtcclxuICoqL1xyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcclxuJ2hvbWUnLCAnd29ya3Nob3BzJywnYWJvdXQnLCAnNDA0JywgJyoqJywncGhvdG9ncmFwaHktd29ya3Nob3AtZGV0YWlscy86dGl0bGUvOmlkJywnY29udGFjdCcsJ3BhZ2UtcmVkaXJlY3QvJywgJ3Rlcm1zYW5kY29uZGl0aW9ucycsICdwcml2YWN5cG9saWN5J1xyXG5dO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyLnJvdXRlcy50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJteWRwXFxcIiBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNob3dJbnB1dEZpZWxkID8gb3B0cy53aWR0aCA6IG51bGwsICdib3JkZXInOiBvcHRzLmlubGluZSA/ICdub25lJyA6IG51bGx9XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic2VsZWN0aW9uZ3JvdXBcXFwiICpuZ0lmPVxcXCIhb3B0cy5pbmxpbmVcXFwiPlxcclxcbiAgICAgICAgPGlucHV0ICpuZ0lmPVxcXCJvcHRzLnNob3dJbnB1dEZpZWxkXFxcIiAjaW5wdXRCb3hFbCBuZ3R5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJzZWxlY3Rpb25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbElucHV0RmllbGRcXFwiIChjbGljayk9XFxcIm9wdHMub3BlblNlbGVjdG9yT25JbnB1dENsaWNrJiYhb3B0cy5lZGl0YWJsZURhdGVGaWVsZCYmb3BlbkJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2ludmFsaWRkYXRlJzogaW52YWxpZERhdGUmJm9wdHMuaW5kaWNhdGVJbnZhbGlkRGF0ZSwgJ2lucHV0bm90ZWRpdGFibGUnOiBvcHRzLm9wZW5TZWxlY3Rvck9uSW5wdXRDbGljayYmIW9wdHMuZWRpdGFibGVEYXRlRmllbGQsICdzZWxlY3Rpb25kaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWR9XFxcIlxcclxcbiAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJ7e3BsYWNlaG9sZGVyfX1cXFwiIFtuZ1N0eWxlXT1cXFwieydoZWlnaHQnOiBvcHRzLmhlaWdodCwgJ2ZvbnQtc2l6ZSc6IG9wdHMuc2VsZWN0aW9uVHh0Rm9udFNpemV9XFxcIiBbbmdNb2RlbF09XFxcInNlbGVjdGlvbkRheVR4dFxcXCIgKG5nTW9kZWxDaGFuZ2UpPVxcXCJvblVzZXJEYXRlSW5wdXQoJGV2ZW50KVxcXCIgW3ZhbHVlXT1cXFwic2VsZWN0aW9uRGF5VHh0XFxcIiAoa2V5dXApPVxcXCJvbkNsb3NlU2VsZWN0b3IoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAgICAoZm9jdXMpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkZvY3VzSW5wdXQoJGV2ZW50KVxcXCIgKGJsdXIpPVxcXCJvcHRzLmVkaXRhYmxlRGF0ZUZpZWxkJiZvbkJsdXJJbnB1dCgkZXZlbnQpXFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIiBbcmVhZG9ubHldPVxcXCIhb3B0cy5lZGl0YWJsZURhdGVGaWVsZFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBhdXRvY29ycmVjdD1cXFwib2ZmXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNlbGJ0bmdyb3VwXFxcIiBbc3R5bGUuaGVpZ2h0XT1cXFwib3B0cy5oZWlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxEZWNyZWFzZURhdGVcXFwiIGNsYXNzPVxcXCJidG5kZWNyZWFzZVxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd0RlY3JlYXNlRGF0ZUJ0blxcXCIgKGNsaWNrKT1cXFwib25EZWNyZWFzZUJ0bkNsaWNrZWQoKVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2J0bmRlY3JlYXNlZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRuZGVjcmVhc2VkaXNhYmxlZCc6IG9wdHMuY29tcG9uZW50RGlzYWJsZWQsICdidG5sZWZ0Ym9yZGVycmFkaXVzJzogIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsSW5jcmVhc2VEYXRlXFxcIiBjbGFzcz1cXFwiYnRuaW5jcmVhc2VcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dJbmNyZWFzZURhdGVCdG5cXFwiIChjbGljayk9XFxcIm9uSW5jcmVhc2VCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5pbmNyZWFzZWVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmluY3JlYXNlZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByaWdodFxcXCI+PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxDbGVhckRhdGVcXFwiIGNsYXNzPVxcXCJidG5jbGVhclxcXCIgKm5nSWY9XFxcInNlbGVjdGlvbkRheVR4dC5sZW5ndGg+MCYmb3B0cy5zaG93Q2xlYXJEYXRlQnRuXFxcIiAoY2xpY2spPVxcXCJyZW1vdmVCdG5DbGlja2VkKClcXFwiIFtuZ0NsYXNzXT1cXFwieydidG5jbGVhcmVuYWJsZWQnOiAhb3B0cy5jb21wb25lbnREaXNhYmxlZCwgJ2J0bmNsZWFyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfVxcXCIgW2Rpc2FibGVkXT1cXFwib3B0cy5jb21wb25lbnREaXNhYmxlZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJteWRwaWNvbiBpY29uLW15ZHByZW1vdmVcXFwiPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsT3BlbkNhbGVuZGFyXFxcIiBjbGFzcz1cXFwiYnRucGlja2VyXFxcIiAoY2xpY2spPVxcXCJvcGVuQnRuQ2xpY2tlZCgpXFxcIiBbbmdDbGFzc109XFxcInsnYnRucGlja2VyZW5hYmxlZCc6ICFvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRucGlja2VyZGlzYWJsZWQnOiBvcHRzLmNvbXBvbmVudERpc2FibGVkLCAnYnRubGVmdGJvcmRlcnJhZGl1cyc6ICFvcHRzLnNob3dDbGVhckRhdGVCdG4mJiFvcHRzLnNob3dJbmNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dEZWNyZWFzZURhdGVCdG4mJiFvcHRzLnNob3dJbnB1dEZpZWxkfHxzZWxlY3Rpb25EYXlUeHQubGVuZ3RoPT09MCYmIW9wdHMuc2hvd0lucHV0RmllbGR9XFxcIiBbZGlzYWJsZWRdPVxcXCJvcHRzLmNvbXBvbmVudERpc2FibGVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcGNhbGVuZGFyXFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInNlbGVjdG9yXFxcIiAjc2VsZWN0b3JFbCBbbmdTdHlsZV09XFxcInsnd2lkdGgnOiBvcHRzLnNlbGVjdG9yV2lkdGgsICdoZWlnaHQnIDogb3B0cy5zZWxlY3RvckhlaWdodCwgJ2JvdHRvbSc6IGdldFNlbGVjdG9yVG9wUG9zaXRpb24oKX1cXFwiICpuZ0lmPVxcXCJzaG93U2VsZWN0b3J8fG9wdHMuaW5saW5lXFxcIiBbbXlkcGZvY3VzXT1cXFwib3B0cy5pbmxpbmU/JzAnOicxJ1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2lubGluZWRwJzogb3B0cy5pbmxpbmUsICdhbGlnbnNlbGVjdG9ycmlnaHQnOiBvcHRzLmFsaWduU2VsZWN0b3JSaWdodCwgJ3NlbGVjdG9yYXJyb3cnOiBvcHRzLnNob3dTZWxlY3RvckFycm93JiYhb3B0cy5pbmxpbmUsICdzZWxlY3RvcmFycm93bGVmdCc6IG9wdHMuc2hvd1NlbGVjdG9yQXJyb3cmJiFvcHRzLmFsaWduU2VsZWN0b3JSaWdodCYmIW9wdHMuaW5saW5lLCAnc2VsZWN0b3JhcnJvd3JpZ2h0Jzogb3B0cy5zaG93U2VsZWN0b3JBcnJvdyYmb3B0cy5hbGlnblNlbGVjdG9yUmlnaHQmJiFvcHRzLmlubGluZX1cXFwiIChrZXl1cCk9XFxcIm9uQ2xvc2VTZWxlY3RvcigkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmbG9hdDpsZWZ0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJidG5jZWxsXFxcIj48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgW2F0dHIuYXJpYS1sYWJlbF09XFxcIm9wdHMuYXJpYUxhYmVsUHJldk1vbnRoXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcGxlZnRcXFwiIChjbGljayk9XFxcIm9uUHJldk1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFwcmV2TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogcHJldk1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJtb250aHR4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImhlYWRlcmxhYmVsYnRuXFxcIiB0eXBlPVxcXCJidXR0b25cXFwiIFtuZ0NsYXNzXT1cXFwieydtb250aGxhYmVsJzogb3B0cy5tb250aFNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy5tb250aFNlbGVjdG9yJiZvblNlbGVjdE1vbnRoQ2xpY2tlZCgkZXZlbnQpXFxcIiB0YWJpbmRleD1cXFwie3tvcHRzLm1vbnRoU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgubW9udGhUeHR9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxOZXh0TW9udGhcXFwiIGNsYXNzPVxcXCJoZWFkZXJidG4gbXlkcGljb24gaWNvbi1teWRwcmlnaHRcXFwiIChjbGljayk9XFxcIm9uTmV4dE1vbnRoKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRNb250aERpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsnaGVhZGVyYnRuZW5hYmxlZCc6ICFuZXh0TW9udGhEaXNhYmxlZCwgJ2hlYWRlcmJ0bmRpc2FibGVkJzogbmV4dE1vbnRoRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVxcXCJvcHRzLnNob3dUb2RheUJ0blxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiaGVhZGVydG9kYXlidG5cXFwiIChjbGljayk9XFxcIm9uVG9kYXlDbGlja2VkKClcXFwiIFtkaXNhYmxlZF09XFxcImRpc2FibGVUb2RheUJ0blxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hlYWRlcnRvZGF5YnRuZW5hYmxlZCc6ICFkaXNhYmxlVG9kYXlCdG4sICdoZWFkZXJ0b2RheWJ0bmRpc2FibGVkJzogZGlzYWJsZVRvZGF5QnRufVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm15ZHBpY29uIGljb24tbXlkcHRvZGF5XFxcIj48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tvcHRzLnRvZGF5QnRuVHh0fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cXFwiZmxvYXQ6cmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlcmJ0bmNlbGxcXFwiPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cXFwib3B0cy5hcmlhTGFiZWxQcmV2WWVhclxcXCIgY2xhc3M9XFxcImhlYWRlcmJ0biBteWRwaWNvbiBpY29uLW15ZHBsZWZ0XFxcIiAoY2xpY2spPVxcXCJvblByZXZZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcInByZXZZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIXByZXZZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IHByZXZZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJ5ZWFydHh0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiaGVhZGVybGFiZWxidG5cXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgW25nQ2xhc3NdPVxcXCJ7J3llYXJsYWJlbCc6IG9wdHMueWVhclNlbGVjdG9yfVxcXCIgKGNsaWNrKT1cXFwib3B0cy55ZWFyU2VsZWN0b3ImJm9uU2VsZWN0WWVhckNsaWNrZWQoJGV2ZW50KVxcXCIgdGFiaW5kZXg9XFxcInt7b3B0cy55ZWFyU2VsZWN0b3I/JzAnOictMSd9fVxcXCI+e3t2aXNpYmxlTW9udGgueWVhcn19PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyYnRuY2VsbFxcXCI+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIFthdHRyLmFyaWEtbGFiZWxdPVxcXCJvcHRzLmFyaWFMYWJlbE5leHRZZWFyXFxcIiBjbGFzcz1cXFwiaGVhZGVyYnRuIG15ZHBpY29uIGljb24tbXlkcHJpZ2h0XFxcIiAoY2xpY2spPVxcXCJvbk5leHRZZWFyKClcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieydoZWFkZXJidG5lbmFibGVkJzogIW5leHRZZWFyRGlzYWJsZWQsICdoZWFkZXJidG5kaXNhYmxlZCc6IG5leHRZZWFyRGlzYWJsZWR9XFxcIj48L2J1dHRvbj48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJjYWx0YWJsZVxcXCIgKm5nSWY9XFxcIiFzZWxlY3RNb250aCYmIXNlbGVjdFllYXJcXFwiPlxcclxcbiAgICAgICAgICAgIDx0aGVhZD48dHI+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGUgd2Vla2RheXRpdGxld2Vla25iclxcXCIgKm5nSWY9XFxcIm9wdHMuc2hvd1dlZWtOdW1iZXJzJiZvcHRzLmZpcnN0RGF5T2ZXZWVrPT09J21vJ1xcXCI+IzwvdGg+PHRoIGNsYXNzPVxcXCJ3ZWVrZGF5dGl0bGVcXFwiIHNjb3BlPVxcXCJjb2xcXFwiICpuZ0Zvcj1cXFwibGV0IGQgb2Ygd2Vla0RheXNcXFwiPnt7ZH19PC90aD48L3RyPjwvdGhlYWQ+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgdyBvZiBkYXRlc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImRheWNlbGwgZGF5Y2VsbHdlZWtuYnJcXFwiICpuZ0lmPVxcXCJvcHRzLnNob3dXZWVrTnVtYmVycyYmb3B0cy5maXJzdERheU9mV2Vlaz09PSdtbydcXFwiPnt7dy53ZWVrTmJyfX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJkYXljZWxsXFxcIiAqbmdGb3I9XFxcImxldCBkIG9mIHcud2Vla1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2N1cnJtb250aCc6ZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWQsICdzZWxlY3RlZGRheSc6c2VsZWN0ZWREYXRlLmRheT09PWQuZGF0ZU9iai5kYXkgJiYgc2VsZWN0ZWREYXRlLm1vbnRoPT09ZC5kYXRlT2JqLm1vbnRoICYmIHNlbGVjdGVkRGF0ZS55ZWFyPT09ZC5kYXRlT2JqLnllYXIgJiYgZC5jbW89PT1jdXJyTW9udGhJZCwgJ2Rpc2FibGVkJzogZC5kaXNhYmxlZCwgJ3RhYmxlc2luZ2xlZGF5JzogZC5jbW89PT1jdXJyTW9udGhJZCYmIWQuZGlzYWJsZWR9XFxcIiAoY2xpY2spPVxcXCIhZC5kaXNhYmxlZCYmb25DZWxsQ2xpY2tlZChkKTskZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiIChrZXlkb3duKT1cXFwib25DZWxsS2V5RG93bigkZXZlbnQsIGQpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cXFwiZC5tYXJrZWREYXRlLm1hcmtlZFxcXCIgY2xhc3M9XFxcIm1hcmtkYXRlXFxcIiBbbmdTdHlsZV09XFxcInsnYmFja2dyb3VuZC1jb2xvcic6IGQubWFya2VkRGF0ZS5jb2xvcn1cXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGV2YWx1ZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J3ByZXZtb250aCc6ZC5jbW89PT1wcmV2TW9udGhJZCwnY3Vycm1vbnRoJzpkLmNtbz09PWN1cnJNb250aElkLCduZXh0bW9udGgnOmQuY21vPT09bmV4dE1vbnRoSWQsJ2hpZ2hsaWdodCc6ZC5oaWdobGlnaHR9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVxcXCJ7J21hcmtjdXJyZGF5JzpkLmN1cnJEYXkmJm9wdHMubWFya0N1cnJlbnREYXksICdkaW1kYXknOiBkLmhpZ2hsaWdodCAmJiAoZC5jbW89PT1wcmV2TW9udGhJZCB8fCBkLmNtbz09PW5leHRNb250aElkIHx8IGQuZGlzYWJsZWQpfVxcXCI+e3tkLmRhdGVPYmouZGF5fX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJtb250aHRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0TW9udGhcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG4gICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IG1yIG9mIG1vbnRoc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcIm1vbnRoY2VsbCB0YWJsZXNpbmdsZW1vbnRoXFxcIiBbbmdDbGFzc109XFxcInsnc2VsZWN0ZWRtb250aCc6IG0uc2VsZWN0ZWQsICdkaXNhYmxlZCc6IG0uZGlzYWJsZWR9XFxcIiAqbmdGb3I9XFxcImxldCBtIG9mIG1yXFxcIiAoY2xpY2spPVxcXCIhbS5kaXNhYmxlZCYmb25Nb250aENlbGxDbGlja2VkKG0pOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvbk1vbnRoQ2VsbEtleURvd24oJGV2ZW50LCBtKVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vbnRodmFsdWVcXFwiIFtuZ0NsYXNzXT1cXFwieydtYXJrY3Vycm1vbnRoJzptLmN1cnJNb250aCYmb3B0cy5tYXJrQ3VycmVudE1vbnRofVxcXCI+e3ttLm5hbWV9fTwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwieWVhcnRhYmxlXFxcIiAqbmdJZj1cXFwic2VsZWN0WWVhclxcXCI+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCIgY2xhc3M9XFxcInllYXJjaGFuZ2VidG5jZWxsXFxcIiAoY2xpY2spPVxcXCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0biBteWRwaWNvbiBpY29uLW15ZHB1cFxcXCIgKGNsaWNrKT1cXFwib25QcmV2WWVhcnMoJGV2ZW50LCB5ZWFyc1swXVswXS55ZWFyKVxcXCIgW2Rpc2FibGVkXT1cXFwicHJldlllYXJzRGlzYWJsZWRcXFwiIFtuZ0NsYXNzXT1cXFwieyd5ZWFyY2hhbmdlYnRuZW5hYmxlZCc6ICFwcmV2WWVhcnNEaXNhYmxlZCwgJ3llYXJjaGFuZ2VidG5kaXNhYmxlZCc6IHByZXZZZWFyc0Rpc2FibGVkfVxcXCI+PC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVxcXCJsZXQgeXIgb2YgeWVhcnNcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ5ZWFyY2VsbCB0YWJsZXNpbmdsZXllYXJcXFwiIFtuZ0NsYXNzXT1cXFwieydzZWxlY3RlZHllYXInOiB5LnNlbGVjdGVkLCAnZGlzYWJsZWQnOiB5LmRpc2FibGVkfVxcXCIgKm5nRm9yPVxcXCJsZXQgeSBvZiB5clxcXCIgKGNsaWNrKT1cXFwiIXkuZGlzYWJsZWQmJm9uWWVhckNlbGxDbGlja2VkKHkpOyRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCIgKGtleWRvd24pPVxcXCJvblllYXJDZWxsS2V5RG93bigkZXZlbnQsIHkpXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwieWVhcnZhbHVlXFxcIiBbbmdDbGFzc109XFxcInsnbWFya2N1cnJ5ZWFyJzp5LmN1cnJZZWFyJiZvcHRzLm1hcmtDdXJyZW50WWVhcn1cXFwiPnt7eS55ZWFyfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI1XFxcIiBjbGFzcz1cXFwieWVhcmNoYW5nZWJ0bmNlbGxcXFwiIChjbGljayk9XFxcIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJ5ZWFyY2hhbmdlYnRuIG15ZHBpY29uIGljb24tbXlkcGRvd25cXFwiIChjbGljayk9XFxcIm9uTmV4dFllYXJzKCRldmVudCwgeWVhcnNbMF1bMF0ueWVhcilcXFwiIFtkaXNhYmxlZF09XFxcIm5leHRZZWFyc0Rpc2FibGVkXFxcIiBbbmdDbGFzc109XFxcInsneWVhcmNoYW5nZWJ0bmVuYWJsZWQnOiAhbmV4dFllYXJzRGlzYWJsZWQsICd5ZWFyY2hhbmdlYnRuZGlzYWJsZWQnOiBuZXh0WWVhcnNEaXNhYmxlZH1cXFwiPjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbXlkYXRlcGlja2VyL3NyYy9teS1kYXRlLXBpY2tlci9teS1kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5teWRwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwICoge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCxcXHJcXG4ubXlkcCAuc2VsZWN0aW9uZ3JvdXAsXFxyXFxuLm15ZHAgLnNlbGVjdGlvbixcXHJcXG4ubXlkcCAuc2VsZWN0b3IsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSxcXHJcXG4ubXlkcCAueWVhcnRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNikgdGQ6Zmlyc3QtY2hpbGQsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmZpcnN0LWNoaWxkLFxcclxcbi5teWRwIC55ZWFydGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDcpIHRkOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDYpIHRkOmxhc3QtY2hpbGQsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUgdGJvZHkgdHI6bnRoLWNoaWxkKDQpIHRkOmxhc3QtY2hpbGQsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB0Ym9keSB0cjpudGgtY2hpbGQoNykgdGQ6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5waWNrZXIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmxlZnRib3JkZXJyYWRpdXMge1xcclxcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzZWxlY3RvcmZhZGVpbiAwLjFzO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2VsZWN0b3JmYWRlaW4gMC4xcztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yOmZvY3VzIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0FERDhFNjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNlbGVjdG9yZmFkZWluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzZWxlY3RvcmZhZGVpbiB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YmVmb3JlIHtcXHJcXG4gICAgYm90dG9tOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3c6YWZ0ZXIge1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNGQUZBRkE7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpiZWZvcmUge1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjA0LCAyMDQsIDIwNCwgMCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNDQ0M7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMTFweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvdzpmb2N1czpiZWZvcmUge1xcclxcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjQUREOEU2O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0b3JhcnJvd2xlZnQ6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dsZWZ0OmJlZm9yZSB7XFxyXFxuICAgIGxlZnQ6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3RvcmFycm93cmlnaHQ6YWZ0ZXIsXFxyXFxuLm15ZHAgLnNlbGVjdG9yYXJyb3dyaWdodDpiZWZvcmUge1xcclxcbiAgICBsZWZ0OiA4NiU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5hbGlnbnNlbGVjdG9ycmlnaHQge1xcclxcbiAgICByaWdodDogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbmdyb3VwIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItc3BhY2luZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGlvbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmludmFsaWRkYXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxREVERTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgOjotbXMtY2xlYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsYnRuZ3JvdXAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIHdpZHRoOiAxJTtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgZm9udC1zaXplOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMjZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBvdXRsaW5lOiAwO1xcclxcbiAgICBmb250OiBpbmhlcml0O1xcclxcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRubGVmdGJvcmRlciB7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0NDQztcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bnBpY2tlcmVuYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyZW5hYmxlZCxcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2VlbmFibGVkLFxcclxcbi5teWRwIC5idG5pbmNyZWFzZWVuYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZW5hYmxlZCxcXHJcXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZCxcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5zZWxlY3Rpb25kaXNhYmxlZCxcXHJcXG4ubXlkcCAuYnRucGlja2VyZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmNsZWFyZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuZGlzYWJsZWQsXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bmRpc2FibGVkLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbiAgICBvcGFjaXR5OiAwLjY1O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuc2VsZWN0aW9uZGlzYWJsZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyIHRkIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBsaW5lLWhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMSkge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlciB0ZDpudGgtY2hpbGQoMikge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXIgdGQ6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuY2FsdGFibGUsXFxyXFxuLm15ZHAgLm1vbnRodGFibGUsXFxyXFxuLm15ZHAgLnllYXJ0YWJsZSB7XFxyXFxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5jYWx0YWJsZSxcXHJcXG4ubXlkcCAubW9udGh0YWJsZSxcXHJcXG4ubXlkcCAueWVhcnRhYmxlLFxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGUsXFxyXFxuLm15ZHAgLmRheWNlbGwsXFxyXFxuLm15ZHAgLm1vbnRoY2VsbCxcXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcclxcbiAgICBjb2xvcjogIzAwMzM2NjtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLndlZWtkYXl0aXRsZSxcXHJcXG4ubXlkcCAuZGF5Y2VsbCxcXHJcXG4ubXlkcCAubW9udGhjZWxsLFxcclxcbi5teWRwIC55ZWFyY2VsbCB7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAud2Vla2RheXRpdGxlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgICBtYXgtd2lkdGg6IDM2cHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC53ZWVrZGF5dGl0bGV3ZWVrbmJyIHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNCQkI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tb250aGNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAueWVhcmNlbGwge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbiAgICB3aWR0aDogMjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGF5Y2VsbCAuZGF0ZXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGwgLmRhdGV2YWx1ZSBzcGFuIHtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRheWNlbGx3ZWVrbmJyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjQ0NDO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaW5saW5lZHAge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0xcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5wcmV2bW9udGgsXFxyXFxuLm15ZHAgLm5leHRtb250aCB7XFxyXFxuICAgIGNvbG9yOiAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuZGlzYWJsZWQge1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXHJcXG4gICAgY29sb3I6ICNDQ0M7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQkVGRUY7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oaWdobGlnaHQge1xcclxcbiAgICBjb2xvcjogI0MzMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmRpbWRheSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmN1cnJtb250aCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNkY2RjY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5tYXJrZGF0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm1hcmtjdXJyZGF5LFxcclxcbi5teWRwIC5tYXJrY3Vycm1vbnRoLFxcclxcbi5teWRwIC5tYXJrY3VycnllYXIge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnNlbGVjdGVkZGF5IC5kYXRldmFsdWUsXFxyXFxuLm15ZHAgLnNlbGVjdGVkbW9udGggLm1vbnRodmFsdWUsXFxyXFxuLm15ZHAgLnNlbGVjdGVkeWVhciAueWVhcnZhbHVlIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEVCRkZGO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJidG5jZWxsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnllYXJjaGFuZ2VidG5jZWxsIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuLFxcclxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0bixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAyMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJsYWJlbGJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCxcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyLFxcclxcbi5teWRwIC5idG5jbGVhcixcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2UsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlLFxcclxcbi5teWRwIC5oZWFkZXJidG4sXFxyXFxuLm15ZHAgLmhlYWRlcm1vbnRodHh0LFxcclxcbi5teWRwIC5oZWFkZXJ5ZWFydHh0LFxcclxcbi5teWRwIC5oZWFkZXJ0b2RheWJ0bixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0biB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG4ge1xcclxcbiAgICBwYWRkaW5nOiAwIDRweDtcXHJcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICBoZWlnaHQ6IDIycHg7XFxyXFxuICAgIG1pbi13aWR0aDogNjBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA4NHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5oZWFkZXJtb250aHR4dCxcXHJcXG4ubXlkcCAuaGVhZGVyeWVhcnR4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5idG5jbGVhcjpmb2N1cyxcXHJcXG4ubXlkcCAuYnRuZGVjcmVhc2U6Zm9jdXMsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlOmZvY3VzLFxcclxcbi5teWRwIC5idG5waWNrZXI6Zm9jdXMsXFxyXFxuLm15ZHAgLmhlYWRlcnRvZGF5YnRuOmZvY3VzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0FERDhFNjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmhlYWRlcmJ0bjpmb2N1cyxcXHJcXG4ubXlkcCAubW9udGhsYWJlbDpmb2N1cyxcXHJcXG4ubXlkcCAueWVhcmxhYmVsOmZvY3VzLFxcclxcbi5teWRwIC55ZWFyY2hhbmdlYnRuOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6ICNBREQ4RTY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5kYXljZWxsOmZvY3VzLFxcclxcbi5teWRwIC5tb250aGNlbGw6Zm9jdXMsXFxyXFxuLm15ZHAgLnllYXJjZWxsOmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNDQ0M7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHBjYWxlbmRhcixcXHJcXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwbGVmdCxcXHJcXG4ubXlkcCAuaWNvbi1teWRwcmlnaHQsXFxyXFxuLm15ZHAgLmljb24tbXlkcHVwLFxcclxcbi5teWRwIC5pY29uLW15ZHBkb3duIHtcXHJcXG4gICAgY29sb3I6ICMyMjI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmJ0bmRlY3JlYXNlIC5pY29uLW15ZHBsZWZ0LFxcclxcbi5teWRwIC5idG5pbmNyZWFzZSAuaWNvbi1teWRwcmlnaHQge1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHB0b2RheSB7XFxyXFxuICAgIGNvbG9yOiAjMjIyO1xcclxcbiAgICBmb250LXNpemU6IDExcHg7XFxyXFxufVxcclxcblxcclxcbi5teWRwIHRhYmxlIHtcXHJcXG4gICAgZGlzcGxheTogdGFibGU7XFxyXFxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCB0YWJsZSB0ZCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5teWRwIHRhYmxlLFxcclxcbi5teWRwIHRoLFxcclxcbi5teWRwIHRkIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuYnRucGlja2VyZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuYnRuY2xlYXJlbmFibGVkOmhvdmVyLFxcclxcbi5teWRwIC5idG5kZWNyZWFzZWVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLmJ0bmluY3JlYXNlZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAuaGVhZGVydG9kYXlidG5lbmFibGVkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLnRhYmxlc2luZ2xlZGF5OmhvdmVyLFxcclxcbi5teWRwIC50YWJsZXNpbmdsZW1vbnRoOmhvdmVyLFxcclxcbi5teWRwIC50YWJsZXNpbmdsZXllYXI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAubW9udGhsYWJlbCxcXHJcXG4ubXlkcCAueWVhcmxhYmVsLFxcclxcbi5teWRwIC5pbnB1dG5vdGVkaXRhYmxlLFxcclxcbi5teWRwIC5kYXljZWxsLFxcclxcbi5teWRwIC5tb250aGNlbGwsXFxyXFxuLm15ZHAgLnllYXJjZWxsIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaGVhZGVyYnRuZW5hYmxlZDpob3ZlcixcXHJcXG4ubXlkcCAueWVhcmNoYW5nZWJ0bmVuYWJsZWQ6aG92ZXIsXFxyXFxuLm15ZHAgLm1vbnRobGFiZWw6aG92ZXIsXFxyXFxuLm15ZHAgLnllYXJsYWJlbDpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcclxcbiAgICBzcmM6IHVybCgnZGF0YTphcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07YmFzZTY0LEFBRUFBQUFQQUlBQUF3QndSMU5WUWlDTUpYa0FBQUQ4QUFBQVZFOVRMekkrSUVoTkFBQUJVQUFBQUZaamJXRnc2VUtjZndBQUFhZ0FBQUhFWTNaMElBYlYvd1FBQUF6OEFBQUFJR1p3WjIyS2taQlpBQUFOSEFBQUMzQm5ZWE53QUFBQUVBQUFEUFFBQUFBSVoyeDVacWJuN3ljQUFBTnNBQUFGWEdobFlXUU5YMGJMQUFBSXlBQUFBRFpvYUdWaEJ6d0RXUUFBQ1FBQUFBQWthRzEwZUJYQi8vOEFBQWtrQUFBQUlHeHZZMkVHTkFURUFBQUpSQUFBQUJKdFlYaHdBWGdNT2dBQUNWZ0FBQUFnYm1GdFpaS1VGZ01BQUFsNEFBQUMvWEJ2YzNSOU51WmxBQUFNZUFBQUFIcHdjbVZ3NVVFcnZBQUFHSXdBQUFDR0FBRUFBQUFLQURBQVBnQUNiR0YwYmdBT1JFWk1WQUFhQUFRQUFBQUFBQUFBQVFBQUFBUUFBQUFBQUFBQUFRQUFBQUZzYVdkaEFBZ0FBQUFCQUFBQUFRQUVBQVFBQUFBQkFBZ0FBUUFHQUFBQUFRQUFBQUVDdUFHUUFBVUFBQUo2QXJ3QUFBQ01Bbm9DdkFBQUFlQUFNUUVDQUFBQ0FBVURBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUZCbVJXUUFRT2dBNkFZRFV2OXFBRm9EVWdDV0FBQUFBUUFBQUFBQUFBQUFBQVVBQUFBREFBQUFMQUFBQUFRQUFBRmdBQUVBQUFBQUFGb0FBd0FCQUFBQUxBQURBQW9BQUFGZ0FBUUFMZ0FBQUFRQUJBQUJBQURvQnYvL0FBRG9BUC8vQUFBQUFRQUVBQUFBQVFBQ0FBTUFCQUFGQUFZQUJ3QUFBUVlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFEQUFBQUFBQVpBQUFBQUFBQUFBSEFBRG9BQUFBNkFBQUFBQUJBQURvQVFBQTZBRUFBQUFDQUFEb0FnQUE2QUlBQUFBREFBRG9Bd0FBNkFNQUFBQUVBQURvQkFBQTZBUUFBQUFGQUFEb0JRQUE2QVVBQUFBR0FBRG9CZ0FBNkFZQUFBQUhBQUVBQUFBQUFVRUNmUUFPQUFxM0FBQUFaaFFCQlJVckFSUVBBUVlpSmpVUk5ENEJId0VXQVVFSytnc2NGaFljQy9vS0FWNE9DL29MRmc0QjlBOFVBZ3o2Q2dBQUFRQUFBQUFCWndKOEFBMEFGMEFVQUFFQUFRRkhBQUVBQVc4QUFBQm1GeE1DQlJZckFSRVVCaUl2QVNZMFB3RTJNaFlCWlJRZ0Nmb0tDdm9MSEJnQ1dQNE1EaFlMK2dzY0Mvb0xGZ0FBQUFBRkFBRC9hZ09oQTFJQUZBQVlBQ2dBT0FCY0FMZEFFQ29hQWdvRk1pSUNCZ29OQVFBQkEwZExzQXBRV0VBL0Rnd0NDZ1VHQmdwbEFBSUVBUVFDQVcwQUFRQUVBUUJyQUFBREJBQURhd2dCQmdBRUFnWUVYd2NCQlFVTFdBMEJDd3NNU0FBREF3bFlBQWtKRFFsSkcwQkFEZ3dDQ2dVR0JRb0diUUFDQkFFRUFnRnRBQUVBQkFFQWF3QUFBd1FBQTJzSUFRWUFCQUlHQkY4SEFRVUZDMWdOQVFzTERFZ0FBd01KV0FBSkNRMEpTVmxBR0Z0WlZsTlFUMHhKUmtRL1BDWW1KaVFSRlJRWEVnOEZIU3NKQVFZaUx3RW1ORDhCTmpJZkFUYzJNaDhCRmhRQklSRWhOelUwSmlzQklnWWRBUlFXT3dFeU5pVTFOQ1lyQVNJR0hRRVVGanNCTWpZM0VSUUdJeUVpSmpVUk5EWTdBVFUwTmpzQk1oWWRBVE0xTkRZN0FUSVdCeFV6TWhZQzEvN2lCUTRHb1FVRkdnVU9CbnYzQmc0R0dRWDlhd01TL083WENnZ2tDQW9LQ0NRSUNnR3NDZ2dqQ0FvS0NDTUlDdGNzSFB6dUhTb3FIVWcwSlNRbE5OWTJKQ01sTmdGSEhTb0JPUDdpQlFXaEJnNEZHZ1VGZS9nRkJSb0ZEdjV6QWp4cm9RZ0tDZ2loQ0FvS0NLRUlDZ29Jb1FnS0NpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBQVBBQUQvYWdPaEExSUFBd0FIQUFzQUR3QVRBQmNBR3dBZkFDTUFNd0EzQURzQVB3QlBBSE1BbUVDVlFTVUNIUkpKTFNRREV4MENSeUVmQWgwVENSMVVHd0VUR1JjTkF3a0lFd2xmR0JZTUF3Z1ZFUWNEQlFRSUJWNFVFQVlEQkE4TEF3TUJBQVFCWGhvQkVoSWVXQ0FCSGg0TVNBNEtBZ01BQUJ4WUFCd2NEUnhKY25CdGFtZG1ZMkJkVzFaVFRVeEZSRDgrUFR3N09qazROelkxTkRFdktTY2pJaUVnSHg0ZEhCc2FHUmdYRmhVVUV4SVJFUkVSRVJFUkVSQWlCUjByRnpNMUl4Y3pOU01uTXpVakZ6TTFJeWN6TlNNQk16VWpKek0xSXdFek5TTW5NelVqQXpVMEppY2pJZ1lIRlJRV056TXlOZ0V6TlNNbk16VWpGek0xSXpjMU5DWW5JeUlHRnhVVUZqY3pNalkzRVJRR0l5RWlKalVSTkRZN0FUVTBOanNCTWhZZEFUTTFORFk3QVRJV0J4VXpNaFpIb2FIRnNyTEZvYUhGc3JMRm9hRUJtN096MXJLeUFheWhvZGF6czhRTUJpUUhDZ0VNQmlRSENnR2JvYUhXczdQV29hRVNDZ2dqQnd3QkNnZ2pDQXJYTEJ6ODdoMHFLaDFJTkNVa0pUVFdOaVFqSlRZQlJ4MHFUNkdob1NTeXNySWtvZjNFb2ZxaC9jU2hKTElCTUtFSENnRU1CcUVIREFFSy9pYXlKS0dob1d1aEJ3b0JEQWFoQnd3QkNpejlOUjBxS2gwQ3l4MHFOaVUwTkNVMk5pVTBOQ1UyS2dBQUFBSC8vd0FBQWpzQnlRQU9BQkZBRGdBQkFBRnZBQUFBWmhVeUFnVVdLeVVVQmljaElpNEJQd0UyTWg4QkZnSTdGQS8rREE4VUFnejZDaDRLK2dxckRoWUJGQjRMK2dvSytnc0FBQUFCQUFBQUFBSThBZTBBRGdBWFFCUUFBUUFCQVVjQUFRQUJid0FBQUdZMUZBSUZGaXNCRkE4QkJpSXZBU1kwTmpNaE1oWUNPd3I2Q3h3TCtnc1dEZ0gwRGhZQnlRNEwrZ3NMK2dzY0ZoWUFBQUVBQVAvdkF0UUNoZ0FrQUI1QUd5SVpFQWNFQUFJQlJ3TUJBZ0FDYndFQkFBQm1GQndVRkFRRkdDc2xGQThCQmlJdkFRY0dJaThCSmpRL0FTY21ORDhCTmpJZkFUYzJNaDhCRmhRUEFSY1dBdFFQVEJBc0VLU2tFQ3dRVEJBUXBLUVFFRXdRTEJDa3BCQXNFRXdQRDZTa0QzQVdFRXdQRDZXbER3OU1FQ3dRcEtRUUxCQk1FQkNrcEJBUVRBOHVENlNrRHdBQkFBQUFBUUFBYmR5Y3pWOFBQUFVBQ3dQb0FBQUFBTlVzZ1pVQUFBQUExU3lCbGYvLy8yb0Q2QU5TQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU5TLzJvQUFBUG8vLy8vL2dQb0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFBSUErZ0FBQUZsQUFBQlpRQUFBK2dBQUFPZ0FBQUNPLy8vQWpzQUFBTVJBQUFBQUFBQUFDSUFTZ0VvQWhZQ1BBSmtBcTRBQUFBQkFBQUFDQUIwQUE4QUFBQUFBQUlBUkFCVUFITUFBQUNwQzNBQUFBQUFBQUFBRWdEZUFBRUFBQUFBQUFBQU5RQUFBQUVBQUFBQUFBRUFEQUExQUFFQUFBQUFBQUlBQndCQkFBRUFBQUFBQUFNQURBQklBQUVBQUFBQUFBUUFEQUJVQUFFQUFBQUFBQVVBQ3dCZ0FBRUFBQUFBQUFZQURBQnJBQUVBQUFBQUFBb0FLd0IzQUFFQUFBQUFBQXNBRXdDaUFBTUFBUVFKQUFBQWFnQzFBQU1BQVFRSkFBRUFHQUVmQUFNQUFRUUpBQUlBRGdFM0FBTUFBUVFKQUFNQUdBRkZBQU1BQVFRSkFBUUFHQUZkQUFNQUFRUUpBQVVBRmdGMUFBTUFBUVFKQUFZQUdBR0xBQU1BQVFRSkFBb0FWZ0dqQUFNQUFRUUpBQXNBSmdINVEyOXdlWEpwWjJoMElDaERLU0F5TURFM0lHSjVJRzl5YVdkcGJtRnNJR0YxZEdodmNuTWdRQ0JtYjI1MFpXeHNieTVqYjIxdGVXUmhkR1Z3YVdOclpYSlNaV2QxYkdGeWJYbGtZWFJsY0dsamEyVnliWGxrWVhSbGNHbGphMlZ5Vm1WeWMybHZiaUF4TGpCdGVXUmhkR1Z3YVdOclpYSkhaVzVsY21GMFpXUWdZbmtnYzNabk1uUjBaaUJtY205dElFWnZiblJsYkd4dklIQnliMnBsWTNRdWFIUjBjRG92TDJadmJuUmxiR3h2TG1OdmJRQkRBRzhBY0FCNUFISUFhUUJuQUdnQWRBQWdBQ2dBUXdBcEFDQUFNZ0F3QURFQU53QWdBR0lBZVFBZ0FHOEFjZ0JwQUdjQWFRQnVBR0VBYkFBZ0FHRUFkUUIwQUdnQWJ3QnlBSE1BSUFCQUFDQUFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFDNEFZd0J2QUcwQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBVWdCbEFHY0FkUUJzQUdFQWNnQnRBSGtBWkFCaEFIUUFaUUJ3QUdrQVl3QnJBR1VBY2dCdEFIa0FaQUJoQUhRQVpRQndBR2tBWXdCckFHVUFjZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURBQWJRQjVBR1FBWVFCMEFHVUFjQUJwQUdNQWF3QmxBSElBUndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJ6QUhZQVp3QXlBSFFBZEFCbUFDQUFaZ0J5QUc4QWJRQWdBRVlBYndCdUFIUUFaUUJzQUd3QWJ3QWdBSEFBY2dCdkFHb0FaUUJqQUhRQUxnQm9BSFFBZEFCd0FEb0FMd0F2QUdZQWJ3QnVBSFFBWlFCc0FHd0Fid0F1QUdNQWJ3QnRBQUFBQUFJQUFBQUFBQUFBQ2dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDQUVDQVFNQkJBRUZBUVlCQndFSUFRa0FDVzE1WkhCeWFXZG9kQWh0ZVdSd2JHVm1kQWx0ZVdSd2RHOWtZWGtNYlhsa2NHTmhiR1Z1WkdGeUJtMTVaSEIxY0FodGVXUndaRzkzYmdwdGVXUndjbVZ0YjNabEFBQUFBQUFCQUFILy93QVBBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlBQmdBR0FBWUExTC9hZ05TLzJxd0FDd2dzQUJWV0VWWklDQkx1QUFPVVV1d0JsTmFXTEEwRzdBb1dXQm1JSXBWV0xBQ0pXRzVDQUFJQUdOakkySWJJU0d3QUZtd0FFTWpSTElBQVFCRFlFSXRzQUVzc0NCZ1ppMndBaXdnWkNDd3dGQ3dCQ1phc2lnQkNrTkZZMFZTVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDeEFRcERSV05GWVdTd0tGQllJYkVCQ2tORlkwVWdzREJRV0NHd01Ga2JJTERBVUZnZ1ppQ0tpbUVnc0FwUVdHQWJJTEFnVUZnaHNBcGdHeUN3TmxCWUliQTJZQnRnV1ZsWkc3QUJLMWxaSTdBQVVGaGxXVmt0c0FNc0lFVWdzQVFsWVdRZ3NBVkRVRml3QlNOQ3NBWWpRaHNoSVZtd0FXQXRzQVFzSXlFaklTQmtzUVZpUWlDd0JpTkNzUUVLUTBWanNRRUtRN0FCWUVWanNBTXFJU0N3QmtNZ2lpQ0tzQUVyc1RBRkpiQUVKbEZZWUZBYllWSlpXQ05aSVNDd1FGTllzQUVyR3lHd1FGa2pzQUJRV0dWWkxiQUZMTEFIUXl1eUFBSUFRMkJDTGJBR0xMQUhJMElqSUxBQUkwSmhzQUppWnJBQlk3QUJZTEFGS2kyd0J5d2dJRVVnc0F0RFk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallFU3dBV0F0c0Fnc3NnY0xBRU5GUWlvaHNnQUJBRU5nUWkyd0NTeXdBRU1qUkxJQUFRQkRZRUl0c0Fvc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaQ0N3SUZCWUliQUFHN0F3VUZpd0lCdXdRRmxaSTdBQVVGaGxXYkFESlNOaFJFU3dBV0F0c0Fzc0lDQkZJTEFCS3lPd0FFT3dCQ1ZnSUVXS0kyRWdaTEFrVUZpd0FCdXdRRmtqc0FCUVdHVlpzQU1sSTJGRVJMQUJZQzJ3REN3Z3NBQWpRcklMQ2dORldDRWJJeUZaS2lFdHNBMHNzUUlDUmJCa1lVUXRzQTRzc0FGZ0lDQ3dERU5Lc0FCUVdDQ3dEQ05DV2JBTlEwcXdBRkpZSUxBTkkwSlpMYkFQTENDd0VHSm1zQUZqSUxnRUFHT0tJMkd3RGtOZ0lJcGdJTEFPSTBJakxiQVFMRXRVV0xFRVpFUlpKTEFOWlNONExiQVJMRXRSV0V0VFdMRUVaRVJaR3lGWkpMQVRaU040TGJBU0xMRUFEME5WV0xFUEQwT3dBV0ZDc0E4cldiQUFRN0FDSlVLeERBSWxRckVOQWlWQ3NBRVdJeUN3QXlWUVdMRUJBRU5nc0FRbFFvcUtJSW9qWWJBT0tpRWpzQUZoSUlvalliQU9LaUVic1FFQVEyQ3dBaVZDc0FJbFliQU9LaUZac0F4RFI3QU5RMGRnc0FKaUlMQUFVRml3UUdCWlpyQUJZeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndFeXdBc1FBQ1JWUllzQThqUWlCRnNBc2pRckFLSTdBQllFSWdZTEFCWWJVUUVBRUFEZ0JDUW9wZ3NSSUdLN0J5S3hzaVdTMndGQ3l4QUJNckxiQVZMTEVCRXlzdHNCWXNzUUlUS3kyd0Z5eXhBeE1yTGJBWUxMRUVFeXN0c0Jrc3NRVVRLeTJ3R2l5eEJoTXJMYkFiTExFSEV5c3RzQndzc1FnVEt5MndIU3l4Q1JNckxiQWVMQUN3RFN1eEFBSkZWRml3RHlOQ0lFV3dDeU5Dc0FvanNBRmdRaUJnc0FGaHRSQVFBUUFPQUVKQ2ltQ3hFZ1lyc0hJckd5SlpMYkFmTExFQUhpc3RzQ0Fzc1FFZUt5MndJU3l4QWg0ckxiQWlMTEVESGlzdHNDTXNzUVFlS3kyd0pDeXhCUjRyTGJBbExMRUdIaXN0c0NZc3NRY2VLeTJ3Snl5eENCNHJMYkFvTExFSkhpc3RzQ2tzSUR5d0FXQXRzQ29zSUdDd0VHQWdReU93QVdCRHNBSWxZYkFCWUxBcEtpRXRzQ3Nzc0NvcnNDb3FMYkFzTENBZ1J5QWdzQXREWTdnRUFHSWdzQUJRV0xCQVlGbG1zQUZqWUNOaE9DTWdpbFZZSUVjZ0lMQUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZMkFqWVRnYklWa3RzQzBzQUxFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDNHNBTEFOSzdFQUFrVlVXTEFCRnJBc0tyQUJGVEFiSWxrdHNDOHNJRFd3QVdBdHNEQXNBTEFCUldPNEJBQmlJTEFBVUZpd1FHQlpackFCWTdBQks3QUxRMk80QkFCaUlMQUFVRml3UUdCWlpyQUJZN0FCSzdBQUZyUUFBQUFBQUVRK0l6aXhMd0VWS2kyd01Td2dQQ0JISUxBTFEyTzRCQUJpSUxBQVVGaXdRR0JaWnJBQlkyQ3dBRU5oT0Myd01pd3VGend0c0RNc0lEd2dSeUN3QzBOanVBUUFZaUN3QUZCWXNFQmdXV2F3QVdOZ3NBQkRZYkFCUTJNNExiQTBMTEVDQUJZbElDNGdSN0FBSTBLd0FpVkppb3BISTBjallTQllZaHNoV2JBQkkwS3lNd0VCRlJRcUxiQTFMTEFBRnJBRUpiQUVKVWNqUnlOaHNBbERLMldLTGlNZ0lEeUtPQzJ3Tml5d0FCYXdCQ1d3QkNVZ0xrY2pSeU5oSUxBRUkwS3dDVU1ySUxCZ1VGZ2dzRUJSV0xNQ0lBTWdHN01DSmdNYVdVSkNJeUN3Q0VNZ2lpTkhJMGNqWVNOR1lMQUVRN0FDWWlDd0FGQllzRUJnV1dhd0FXTmdJTEFCS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dBbUlnc0FCUVdMQkFZRmxtc0FGallTTWdJTEFFSmlOR1lUZ2JJN0FJUTBhd0FpV3dDRU5ISTBjallXQWdzQVJEc0FKaUlMQUFVRml3UUdCWlpyQUJZMkFqSUxBQkt5T3dCRU5nc0FFcnNBVWxZYkFGSmJBQ1lpQ3dBRkJZc0VCZ1dXYXdBV093QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkEzTExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNEZ3NzQUFXSUxBSUkwSWdJQ0JHSTBld0FTc2pZVGd0c0Rrc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYmtJQUFnQVkyTWpJRmhpR3lGWlk3Z0VBR0lnc0FCUVdMQkFZRmxtc0FGallDTXVJeUFnUElvNEl5RlpMYkE2TExBQUZpQ3dDRU1nTGtjalJ5TmhJR0N3SUdCbXNBSmlJTEFBVUZpd1FHQlpackFCWXlNZ0lEeUtPQzJ3T3l3aklDNUdzQUlsUmxKWUlEeFpMckVyQVJRckxiQThMQ01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Qwc0l5QXVSckFDSlVaU1dDQThXU01nTGthd0FpVkdVRmdnUEZrdXNTc0JGQ3N0c0Q0c3NEVXJJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLeTJ3UHl5d05pdUtJQ0E4c0FRalFvbzRJeUF1UnJBQ0pVWlNXQ0E4V1M2eEt3RVVLN0FFUXk2d0t5c3RzRUFzc0FBV3NBUWxzQVFtSUM1SEkwY2pZYkFKUXlzaklEd2dMaU00c1NzQkZDc3RzRUVzc1FnRUpVS3dBQmF3QkNXd0JDVWdMa2NqUnlOaElMQUVJMEt3Q1VNcklMQmdVRmdnc0VCUldMTUNJQU1nRzdNQ0pnTWFXVUpDSXlCSHNBUkRzQUppSUxBQVVGaXdRR0JaWnJBQlkyQWdzQUVySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQUNZaUN3QUZCWXNFQmdXV2F3QVdOaHNBSWxSbUU0SXlBOEl6Z2JJU0FnUmlOSHNBRXJJMkU0SVZteEt3RVVLeTJ3UWl5d05Tc3VzU3NCRkNzdHNFTXNzRFlySVNNZ0lEeXdCQ05DSXppeEt3RVVLN0FFUXk2d0t5c3RzRVFzc0FBVklFZXdBQ05Dc2dBQkFSVVVFeTZ3TVNvdHNFVXNzQUFWSUVld0FDTkNzZ0FCQVJVVUV5NndNU290c0VZc3NRQUJGQk93TWlvdHNFY3NzRFFxTGJCSUxMQUFGa1VqSUM0Z1Jvb2pZVGl4S3dFVUt5MndTU3l3Q0NOQ3NFZ3JMYkJLTExJQUFFRXJMYkJMTExJQUFVRXJMYkJNTExJQkFFRXJMYkJOTExJQkFVRXJMYkJPTExJQUFFSXJMYkJQTExJQUFVSXJMYkJRTExJQkFFSXJMYkJSTExJQkFVSXJMYkJTTExJQUFENHJMYkJUTExJQUFUNHJMYkJVTExJQkFENHJMYkJWTExJQkFUNHJMYkJXTExJQUFFQXJMYkJYTExJQUFVQXJMYkJZTExJQkFFQXJMYkJaTExJQkFVQXJMYkJhTExJQUFFTXJMYkJiTExJQUFVTXJMYkJjTExJQkFFTXJMYkJkTExJQkFVTXJMYkJlTExJQUFEOHJMYkJmTExJQUFUOHJMYkJnTExJQkFEOHJMYkJoTExJQkFUOHJMYkJpTExBM0t5NnhLd0VVS3kyd1l5eXdOeXV3T3lzdHNHUXNzRGNyc0R3ckxiQmxMTEFBRnJBM0s3QTlLeTJ3Wml5d09Dc3VzU3NCRkNzdHNHY3NzRGdyc0RzckxiQm9MTEE0SzdBOEt5MndhU3l3T0N1d1BTc3RzR29zc0RrckxyRXJBUlFyTGJCckxMQTVLN0E3S3kyd2JDeXdPU3V3UENzdHNHMHNzRGtyc0QwckxiQnVMTEE2S3k2eEt3RVVLeTJ3Ynl5d09pdXdPeXN0c0hBc3NEb3JzRHdyTGJCeExMQTZLN0E5S3kyd2NpeXpDUVFDQTBWWUlSc2pJVmxDSzdBSVpiQURKRkI0c0FFVk1DMEFTN2dBeUZKWXNRRUJqbG13QWJrSUFBZ0FZM0N4QUFWQ3NnQUJBQ3F4QUFWQ3N3b0NBUWdxc1FBRlFyTU9BQUVJS3JFQUJrSzZBc0FBQVFBSktyRUFCMEs2QUVBQUFRQUpLckVEQUVTeEpBR0lVVml3UUloWXNRTmtSTEVtQVloUldMb0lnQUFCQkVDSVkxUllzUU1BUkZsWldWbXpEQUlCRENxNEFmK0ZzQVNOc1FJQVJBQUEnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLm15ZHBpY29uIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdteWRhdGVwaWNrZXInO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHByaWdodDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwbGVmdDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDFcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwdG9kYXk6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXFxlODAyXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm15ZHAgLmljb24tbXlkcGNhbGVuZGFyOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwM1xcXCI7XFxyXFxufVxcclxcblxcclxcbi5teWRwIC5pY29uLW15ZHB1cDpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwZG93bjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGU4MDVcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubXlkcCAuaWNvbi1teWRwcmVtb3ZlOmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZTgwNlxcXCI7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L215ZGF0ZXBpY2tlci9zcmMvbXktZGF0ZS1waWNrZXIvbXktZGF0ZS1waWNrZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAxMHJlbSAwcmVtIDEwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnN1Z2dlc3Rpb25zIHtcXG4gIHotaW5kZXg6IDk5O1xcbiAgd2lkdGg6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjdweCBncmV5O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICMxNTQyNEU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGVmdDogMDsgfVxcbiAgLnN1Z2dlc3Rpb25zIHVsIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBtYXgtaGVpZ2h0OiAzMHJlbTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgfVxcbiAgLnN1Z2dlc3Rpb25zIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgd2lkdGg6IGF1dG87IH1cXG5cXG4uZHJvcGRvd24tY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMS40cmVtIDFyZW0gMXJlbSAwO1xcbiAgaGVpZ2h0OiAzLjZyZW07XFxuICB3aWR0aDogMTMuNXJlbTsgfVxcbiAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2cmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmZpbHRlci1pbnB1dCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLnN1Z2dlc3Rpb25zIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5zdWdnZXN0aW9ucyBsaSB7XFxuICAgICAgd2hpdGUtc3BhY2U6IGluaGVyaXQ7IH1cXG4gIC5maWx0ZXItaW5wdXQge1xcbiAgICB3aWR0aDogNzAlOyB9XFxuICAuZHJvcGRvd24tY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250YWN0LXVzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmNvbnRhY3QtdXMge1xcbiAgbWFyZ2luLXRvcDogMTByZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5jb250YWN0LXVzIGlucHV0IHtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuOHJlbTsgfVxcbiAgICAuY29udGFjdC11cyBpbnB1dDpyZXF1aXJlZCB7XFxuICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLmNvbnRhY3QtdXMgaDEge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTtcXG4gICAgY29sb3I6ICMyNjE4MUQ7IH1cXG4gIC5jb250YWN0LXVzIC5tZXNzYWdlIHtcXG4gICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcbiAgLmNvbnRhY3QtdXMgLm1lc3NhZ2UsXFxuICAuY29udGFjdC11cyAuc3ViamVjdCB7XFxuICAgIHdpZHRoOiA2NHJlbTsgfVxcblxcbi5zdGF0aWMtaW5mbyB7XFxuICBmb250LXNpemU6IDIuM3JlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6ICMyNjE4MUQ7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuXFxuLmZvcm0tZ3JvdXAge1xcbiAgd2lkdGg6IDYwcmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmZvcm0tZ3JvdXAgLmFsZXJ0IHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgfVxcblxcbi5uYW1lLWdyb3VwLFxcbi5tYWlsLW51bWJlci1ncm91cCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5tZXNzYWdlLWJveCAuYWxlcnQsXFxuLnN1YmplY3QtYm94IC5hbGVydCB7XFxuICB3aWR0aDogNjByZW07IH1cXG5cXG4ubWVzc2FnZS1kaWFsb2cge1xcbiAgaGVpZ2h0OiAyMCU7XFxuICB3aWR0aDogMzAlO1xcbiAgYmFja2dyb3VuZDogIzI2MTgxRDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNDUlO1xcbiAgbGVmdDogMzUlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAuN3B4IGdyZXk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgfVxcbiAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgICAubWVzc2FnZS1kaWFsb2cgLndyYXBwZXIgLnRleHQge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07IH1cXG4gICAgLm1lc3NhZ2UtZGlhbG9nIC53cmFwcGVyIC5vay1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICM3MzY1NkE7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHdpZHRoOiAzMCU7IH1cXG5cXG4jbWVzc2FnZSB7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07IH1cXG5cXG4ubmctdmFsaWRbcmVxdWlyZWRdLFxcbi5uZy12YWxpZC5yZXF1aXJlZCB7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM0MkE5NDg7XFxuICAvKiBncmVlbiAqLyB9XFxuXFxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcXG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcXG4gIC8qIHJlZCAqLyB9XFxuXFxuLnN1Ym1pdC1idG4ge1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVyZW07IH1cXG4gIC5zdWJtaXQtYnRuOmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgY29sb3I6ICNhYWE7XFxuICAgIGN1cnNvcjogYXV0bzsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZvcm0td3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuZm9ybS1ncm91cCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmFtZS1ncm91cCxcXG4gIC5zdWJqZWN0LWJveCxcXG4gIC5tZXNzYWdlLWJveCxcXG4gIC5tYWlsLW51bWJlci1ncm91cCB7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbjogMnJlbTsgfVxcbiAgLmNvbnRhY3QtdXMge1xcbiAgICBtYXJnaW4tdG9wOiA1cmVtOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuZGF0ZS1waWNrZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IC4ycmVtOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5kYXRlLXBpY2tlci1jb250YWluZXIgbGFiZWwge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nLXRvcDogLjRyZW07XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBjb2xvcjogZ3JheTsgfVxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAuZnJvbS1kYXRlLFxcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSB7XFxuICAgIHdpZHRoOiAxMy41cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMS40cmVtIDFyZW0gMCAxcmVtO1xcbiAgICBoZWlnaHQ6IDMuNnJlbTsgfVxcbiAgICAuZGF0ZS1waWNrZXItY29udGFpbmVyIC5mcm9tLWRhdGUgaW5wdXQsXFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLnRvLWRhdGUgaW5wdXQge1xcbiAgICAgIHdpZHRoOiAxMHJlbTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAgIC5kYXRlLXBpY2tlci1jb250YWluZXIgLmZyb20tZGF0ZSxcXG4gICAgLmRhdGUtcGlja2VyLWNvbnRhaW5lciAudG8tZGF0ZSB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICB3aWR0aDogNzAlOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5oaWRlLWRyb3Bkb3duIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZHJvcGRvd24tbGlzdCB7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBhZGRpbmc6IDEuNXJlbSAwIDEuNXJlbSAzcmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMC43cHggZ3JleTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjMTU0MjRFO1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi5kcm9wZG93bi1jb250YWluZXIge1xcbiAgd2lkdGg6IDEzLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG4gIC5kcm9wZG93bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMS40cmVtIDFyZW0gMXJlbSAwO1xcbiAgICBjb2xvcjogIzI2MTgxRDtcXG4gICAgaGVpZ2h0OiAzLjZyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcblxcbi5kYXRhLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgLmRhdGEtbGlzdCBzcGFuIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5kcm9wZG93bi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07IH1cXG4gICAgLmRyb3Bkb3duLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICAgIHdpZHRoOiA3MCU7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIGhlaWdodDogMy42cmVtOyB9XFxuICAuZHJvcGRvd24tbGlzdCB7XFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Ryb3Bkb3duLW1lbnUvZHJvcGRvd24tbWVudS5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogNXJlbSAyMHJlbSAwcmVtIDIwcmVtOyB9XFxuXFxuLmRldGFpbC1pbWcge1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLW8tb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZvb3RlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyJSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDNEM0QzOyB9XFxuICAuZm9vdGVyIHNwYW4sXFxuICAuZm9vdGVyIGEge1xcbiAgICBjb2xvcjogIzczNjU2QTtcXG4gICAgcGFkZGluZzogMCAxJTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcbiAgLmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5mb290ZXIgYSwgLmZvb3RlciBzcGFuIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuaGVybyB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udmlldy1hbGwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyNjE4MUQ7IH1cXG5cXG4ubWFpbi1wYWdlLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlOyB9XFxuXFxuLnZpZXctYWxsLWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG4gIGZvbnQtc2l6ZTogN3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5zdWItaGVhZGluZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxMHJlbTsgfVxcblxcbmhlYWRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmJ0biB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYxODFEO1xcbiAgdG9wOiAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMzAwcHg7XFxuICB3aWR0aDogMzByZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjdXJzb3I6IGluaXRpYWw7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuaDEud3MtaGVhZGluZyB7XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnSHVybWVHZW9tZXRyaWNTYW5zMy1SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgfVxcblxcbiN3b3Jrc2hvcHMge1xcbiAgcGFkZGluZy10b3A6IDVyZW07IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIC5tYWluLWhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDQuNXJlbTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgdG9wOiAzMCU7IH1cXG4gIC5idG4ge1xcbiAgICB0b3A6IDNyZW07XFxuICAgIHdpZHRoOiAyNXJlbTtcXG4gICAgZm9udC1zaXplOiAyLjJyZW07IH0gfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xcbiAgLm1haW4taGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogMy44cmVtOyB9XFxuICBoZWFkZXIge1xcbiAgICB0b3A6IDMwJTsgfVxcbiAgLmJ0biB7XFxuICAgIHRvcDogM3JlbTtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBmb250LXNpemU6IDEuNnJlbTsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLnRvcC1iYXItdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdDb2lueScsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBjb2xvcjogI2ZmZmZmZjsgfVxcblxcbi5uYXYtbWVudSBhIHtcXG4gIGNvbG9yOiAjZmZmZmZmOyB9XFxuXFxuLmNvbXBhbnktaWNvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMS4xcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmNvbXBhbnktbmFtZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5mYS1iYXJzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiAuNHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IC40cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4OyB9XFxuXFxuLmZpbHRlci1oZWFkZXIge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5uYXZiYXItdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5uYXYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogOTk5O1xcbiAgaGVpZ2h0OiA2cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XFxuICBuYXYgaW1nIHtcXG4gICAgd2lkdGg6IDNyZW07XFxuICAgIGhlaWdodDogM3JlbTsgfVxcbiAgbmF2IC5uYXZiYXItbmF2IGEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICBuYXYgdWwge1xcbiAgICBtYXJnaW4tdG9wOiAuNHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjE2cmVtO1xcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYScsIGN1cnNpdmU7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gIG5hdiB7XFxuICAgIGhlaWdodDogNXJlbTsgfVxcbiAgICBuYXYgdWwge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmF2YmFyLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAuZmlsdGVyLWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tbGVmdDogMnJlbTsgfVxcbiAgLm5hdmJhci1jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1cmVtOyB9XFxuICAuaGlkZU5hdmJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmF2YmFyLW5hdiA+IGxpIHtcXG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDk1NXB4KSBhbmQgKG1heC13aWR0aDogMTE0MHB4KSB7XFxuICBuYXYgdWwge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmhpZGVOYXZiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAubmF2YmFyLWNvbGxhcHNlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MTgxRDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDVyZW07IH1cXG4gIC5uYXZiYXItaGVhZGVyIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubmF2YmFyLXRvZ2dsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIGZsb2F0OiByaWdodDsgfVxcbiAgLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLm5hdmJhci1uYXYge1xcbiAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tdG9wOiA3LjVweDsgfVxcbiAgLm5hdmJhci1uYXYgPiBsaSB7XFxuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IH1cXG4gIC5uYXZiYXItbmF2ID4gbGkgPiBhIHtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XFxuICAuY29sbGFwc2UuaW4ge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiA1cmVtIDEwcmVtIDByZW0gMTByZW07IH1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDQwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIuY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDVyZW0gMTByZW0gMHJlbSAxMHJlbTsgfVxcblxcbi5kZXRhaWwtaW1nIHtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5kZXRhaWwtaW1nIHtcXG4gIGhlaWdodDogNDByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cXG4ucHJvZmlsZS1pbWcge1xcbiAgd2lkdGg6IDEycmVtO1xcbiAgaGVpZ2h0OiAxMnJlbTtcXG4gIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07IH1cXG5cXG4ucHJvZmlsZS1waG90byB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi5waG90b2dyYXBoZXItbmFtZSBoMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuLnBob3RvZ3JhcGhlci1pbmZvcm1hdGlvbiBoNCB7XFxuICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLmRldGFpbC1sb2NhdGlvbiB7XFxuICBjb2xvcjogIzczNjU2QTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtOyB9XFxuXFxuLndlYnNpdGUtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuXFxuLyogU3R5bGUgdGhlIHRhYiAqL1xcbmRpdi50YWIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgZGl2LnRhYiBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY29sb3I6ICM3MzY1NkE7IH1cXG4gICAgZGl2LnRhYiBidXR0b24uYWN0aXZlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzczNjU2QTsgfVxcblxcbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xcbi50YWJjb250ZW50IHtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgaGVpZ2h0OiA0MHJlbTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM5LCAyMzAsIDIzMywgMC4xKTsgfVxcblxcbi5kZXRhaWwtdGFicyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNjUlO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICBsZWZ0OiAwOyB9XFxuXFxuLmRldGFpbHMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5kYXktd3JhcHBlcixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIHtcXG4gIHBhZGRpbmctdG9wOiAycmVtOyB9XFxuXFxuLmRheS13cmFwcGVyIC5sb2NhdGlvbixcXG4ucGhvdG9ncmFwaGVyLWluZm9ybWF0aW9uIGg0IHtcXG4gIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIHAge1xcbiAgcGFkZGluZy10b3A6IDJyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC40cmVtOyB9XFxuXFxuI0Rlc2NyaXB0aW9uIGgzIHtcXG4gIG1hcmdpbi10b3A6IDUlOyB9XFxuXFxuI0dhbGxlcnkge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAjR2FsbGVyeSBpbWcge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICAgIHdpZHRoOiAzNXJlbTtcXG4gICAgaGVpZ2h0OiAyOHJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgyMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogc2VwaWEoMjAlKTsgfVxcblxcbi5tb2RhbC1pbWFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IGF1dG87XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7IH1cXG5cXG4ud3NkLW5hbWUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBjb2xvcjogIzczNjU2QTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmhpZ2hsaWdodHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogMTByZW07XFxuICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICB3aWR0aDogMjUlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7IH1cXG4gIC5oaWdobGlnaHRzIGEge1xcbiAgICBjb2xvcjogIzczNjU2QTsgfVxcbiAgLmhpZ2hsaWdodHMgZGl2IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBjb2xvcjogIzczNjU2QTsgfVxcbiAgICAuaGlnaGxpZ2h0cyBkaXYgaSB7XFxuICAgICAgY29sb3I6ICM3MzY1NkE7IH1cXG5cXG4uaW1hZ2UtbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIC8qIHBhZGRpbmctdG9wOiA1cmVtOyAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7IH1cXG5cXG4vKiBNb2RhbCBDb250ZW50ICovXFxuLmltYWdlLW1vZGFsLWNvbnRlbnQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5oaWRlLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwcHg7XFxuICByaWdodDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgei1pbmRleDogOTk7IH1cXG5cXG4uY2xvc2U6aG92ZXIsXFxuLmNsb3NlOmZvY3VzIHtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmhpZGVJbWFnZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmN1cnNvciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiBOZXh0ICYgcHJldmlvdXMgYnV0dG9ucyAqL1xcbi5wcmV2LFxcbi5uZXh0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogLTUwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHRyYW5zaXRpb246IDAuNnMgZWFzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbi8qIFBvc2l0aW9uIHRoZSBcXFwibmV4dCBidXR0b25cXFwiIHRvIHRoZSByaWdodCAqL1xcbi5uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7IH1cXG5cXG4ucHJldiB7XFxuICBsZWZ0OiAwOyB9XFxuXFxuLnNsaWRlcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMTAwJTsgfVxcblxcbi8qIE9uIGhvdmVyLCBhZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHdpdGggYSBsaXR0bGUgYml0IHNlZS10aHJvdWdoICovXFxuLnByZXY6aG92ZXIsXFxuLm5leHQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuXFxuLmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAxOyB9XFxuXFxuLmdhbGxlcnktaW1hZ2UuaG92ZXItc2hhZG93IHtcXG4gIHRyYW5zaXRpb246IDAuM3M7IH1cXG5cXG4uaG92ZXItc2hhZG93OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogOTU1cHgpIHtcXG4gICNHYWxsZXJ5IHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwOyB9XFxuICAgICNHYWxsZXJ5IGltZyB7XFxuICAgICAgd2lkdGg6IDI4cmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07IH1cXG4gIGRpdi50YWIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgZGl2LnRhYiBidXR0b24ge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgbWFyZ2luOiBhdXRvOyB9XFxuICAudGFiQ29udGVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAudGFiQ29udGVudCBwIHtcXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICAgIHBhZGRpbmc6IDJyZW07IH1cXG4gIC5kZXRhaWwtdGFicyB7XFxuICAgIHBhZGRpbmc6IDAgMnJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXG4gIC5oaWdobGlnaHRzIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwb3NpdGlvbjogaW5oZXJpdDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmF1dG9jb21wbGV0ZS1maWx0ZXIsXFxuLmRyb3Bkb3duLWZpbHRlcixcXG4ucHJpY2UtZmlsdGVyLFxcbi5kYXRlLXBpY2tlcixcXG4uZ2V0LWxpc3QtYnRuIHtcXG4gIGxlZnQ6IDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5hdXRvY29tcGxldGUtZmlsdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuKjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwOyB9XFxuXFxuLnByaWNlLWZpbHRlciB7XFxuICBtYXJnaW4tdG9wOiAxLjRyZW07IH1cXG4gIC5wcmljZS1maWx0ZXIgaW5wdXQge1xcbiAgICBvdXRsaW5lOiAuMnB4IHNvbGlkICMyNjE4MUQ7XFxuICAgIHdpZHRoOiAxMy41cmVtO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGhlaWdodDogMy42cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogIzI2MTgxRDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG5cXG4uaGlkZS1kcm9wZG93biB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmZpbHRlcnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLmdldC1saXN0LWJ0biB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgaGVpZ2h0OiAzLjdyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2NTZBO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZmlsdGVycy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZHJvcGRvd24tZmlsdGVyLFxcbiAgLnByaWNlLWZpbHRlcixcXG4gIC5kYXRlLXBpY2tlcixcXG4gIC5nZXQtbGlzdC1idG4ge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgLnByaWNlLWZpbHRlciB7XFxuICAgIG1hcmdpbi10b3A6IDEuNHJlbTsgfVxcbiAgICAucHJpY2UtZmlsdGVyIGlucHV0IHtcXG4gICAgICB3aWR0aDogNzAlO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbjogMS40cmVtIGF1dG87IH1cXG4gIC5nZXQtbGlzdC1idG4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07IH1cXG4gIC5kcm9wZG93bi1maWx0ZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDsgfVxcbiAgLmF1dG9jb21wbGV0ZS1maWx0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbGVmdDogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEuNXJlbSAwOyB9IH1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndvcmtzaG9wLWxpc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLndzLXBhZ2VzIC9kZWVwLyB7XFxuICBtYXJnaW4tdG9wOiAzcmVtOyB9XFxuICAud3MtcGFnZXMgL2RlZXAvIHVsIGxpIHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDFyZW07IH1cXG4gICAgLndzLXBhZ2VzIC9kZWVwLyB1bCBsaSBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICMyMjIyMjI7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgLndzLXBhZ2VzIC9kZWVwLyB1bCBsaSBhOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwJTsgfVxcblxcbi5lbnRpdHkge1xcbiAgd2lkdGg6IDMwcmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAycmVtO1xcbiAgYm94LXNoYWRvdzogMHJlbSAwcmVtIDAuMnJlbSAwcmVtICM4ODg4ODg7IH1cXG4gIC5lbnRpdHkgb2JqZWN0IHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgd2lkdGg6IDMwcmVtO1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICAtby1vYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIC13ZWJraXQtZmlsdGVyOiBzZXBpYSgyMCUpO1xcbiAgICAgICAgICAgIGZpbHRlcjogc2VwaWEoMjAlKTsgfVxcbiAgLmVudGl0eSBpbWcge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMjByZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIC1vLW9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgLXdlYmtpdC1maWx0ZXI6IHNlcGlhKDIwJSk7XFxuICAgICAgICAgICAgZmlsdGVyOiBzZXBpYSgyMCUpOyB9XFxuICAuZW50aXR5IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4uaW5uZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZy1ib3R0b206IDJyZW07IH1cXG5cXG5oMS5uYW1lIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogIzI2MTgxRDtcXG4gIGZvbnQtZmFtaWx5OiAnSHVybWVHZW9tZXRyaWNTYW5zMy1SZWd1bGFyJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuXFxuLnByaWNlIHtcXG4gIGNvbG9yOiAjNTk0QjUwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgYm90dG9tOiAycmVtOyB9XFxuXFxuaHIge1xcbiAgd2lkdGg6IDEwcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTk0QjUwO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IC41cmVtOyB9XFxuXFxuLmRhdGUge1xcbiAgY29sb3I6ICM1OTRCNTA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGNvbG9yOiAjMjYxODFEO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBvcGFjaXR5OiAwLjY7IH1cXG5cXG4udHJ1bmNhdGUge1xcbiAgd2lkdGg6IDI4cmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcblxcbi5wYWdlLW51bWJlcnMge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGNvbG9yOiAjNzM2NTZBO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAucGFnZS1udW1iZXJzIHNwYW4ge1xcbiAgICBtYXJnaW46IDAgLjVyZW07IH1cXG4gIC5wYWdlLW51bWJlcnMgLmZhIHtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gICAgbWFyZ2luLXRvcDogLTJweDsgfVxcblxcbi5uby1yZXN1bHQtbXNnIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjNzM2NTZBOyB9XFxuXFxuLmRpc2FibGVkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG5cXG5hLmFjdGl2ZS1wYWdlLnBhZ2UtbnVtYmVycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzM2NTZBO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk1NXB4KSB7XFxuICAuZW50aXR5IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC13aWR0aDogMzByZW07IH1cXG4gICAgLmVudGl0eSAuaW1hZ2Uge1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgaDEubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICBtYXJnaW46IGF1dG87IH0gfVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy1saXN0L3dvcmtzaG9wcy1saXN0LmNvbXBvbmVudC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLmZpbHRlcnMsXFxuLmxpc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLmZpbHRlcnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogOTByZW07XFxuICBwYWRkaW5nLWJvdHRvbTogLjNyZW07XFxuICBsZWZ0OiA1cmVtOyB9XFxuXFxuLmxpc3Qge1xcbiAgdG9wOiAxMHJlbTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgfVxcblxcbi53cy1jb250YWluZXIgbmF2Lm5hdmJhci5uYXZiYXItZGVmYXVsdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTsgfVxcblxcbi53cy1jb250YWluZXIgLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2IC5hY3RpdmUgYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA5NTVweCkge1xcbiAgLmZpbHRlcnMge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjE4MUQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDk5O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XFxuICAubGlzdCB7XFxuICAgIHRvcDogNXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaGlkZUZpbHRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMDsgfSB9XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzL3dvcmtzaG9wcy5jb21wb25lbnQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLndzLWNvbnRhaW5lciBuYXYubmF2YmFyLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndzLWNvbnRhaW5lciAubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXYgLmFjdGl2ZSBhIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcmVtO1xcclxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9wYWdlLXJlZGlyZWN0L3BhZ2UtcmVkaXJlY3QuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhciBbc2hvd05hbWVdPVxcXCJ0cnVlXFxcIj4+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgc3JjPVxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxoMj5BYm91dCBVczwvaDI+XFxyXFxuICAgIFBpeGVsYXRlZFBsYW5ldCBlbmFibGVzIGFzcGlyaW5nIHBob3RvZ3JhcGhlcnMgdG8gZmluZCB3b3Jrc2hvcHMgYW5kIHNlbWluYXJzIGFsbCBhcm91bmQgdGhlIHdvcmxkIGJlaW5nIGNvbmR1Y3RlZCBieSBwZW9wbGVcXHJcXG4gICAgc3VjY2Vzc2Z1bCBpbiB0aGUgZmllbGQgb2YgcGhvdG9ncmFwaHkuIE9uIHRoZSBvdGhlciBoYW5kLCB3ZSBwcm92aWRlIGEgcGxhdGZvcm0gZm9yIHBob3RvZ3JhcGhlcnMgdG8gc2hvd2Nhc2UgdGhlaXJcXHJcXG4gICAgcGhvdG9ncmFwaHkgd29ya3Nob3BzIGFuZCByZWFjaCBpbnRlcmVzdGVkIGZvbGtzLlxcclxcbiAgICA8aDI+RkFRczwvaDI+XFxyXFxuICAgIDxiPkRvIHlvdSBoYXZlIHdvcmtzaG9wcyBvZiBhbGwgZ2VucmVzPzwvYj5cXHJcXG4gICAgPGJyLz4gT2YgY291cnNlISBZb3UgY2FuIGZpbmQgZXZlcnl0aGluZyBmcm9tIExhbmRzY2FwZSBhbmQgRm9vZCBwaG90b2dyYXBoeSB0byBUaW1lbGFwc2UgYW5kIE5pZ2h0IFNreSBwaG90b2dyYXBoeSB3b3Jrc2hvcHMuXFxyXFxuICAgIDxici8+PGJyLz5cXHJcXG4gICAgPGI+RG9lcyBQaXhlbGF0ZWRQbGFuZXQgYWxsb3cgbWUgdG8gcmVnaXN0ZXIgZm9yIHdvcmtzaG9wcz88L2I+XFxyXFxuICAgIDxici8+IEFzIG9mIG5vdywgd2UgYWltIHRvIGJyaW5nIGFsbCBwaG90b2dyYXBoeSB3b3Jrc2hvcHMgaW4gb25lIHBsYWNlLiBBZnRlciBmaW5kaW5nIHRoZSB3b3Jrc2hvcCB5b3UgbGlrZSwgd2Ugd2lsbFxcclxcbiAgICByZWRpcmVjdCB5b3UgdGhlIHBob3RvZ3JhcGhlcidzIHdlYnNpdGUgZm9yIHJlZ2lzdHJhdGlvbi9wYXltZW50LlxcclxcbiAgICA8YnIvPjxici8+XFxyXFxuICAgIDxiPkRvZXMgUGl4ZWxhdGVkUGxhbmV0IGNoYXJnZSBtZSBmb3IgZmluZGluZyB3b3Jrc2hvcHM/PC9iPlxcclxcbiAgICA8YnIvPiBOby4gQWxsIGluZm9ybWF0aW9uIG9uIG91ciB3ZWJzaXRlIGlmIGZyZWVseSBhY2Nlc3NpYmxlLiBObyBoaWRkZW4gY29zdHMuXFxyXFxuICAgIDxici8+PGJyLz5cXHJcXG4gICAgPGI+SSBhbSBhIHBob3RvZ3JhcGhlci4gQ2FuIEkgc2hvd2Nhc2UgbXkgd29ya3Nob3BzIG9uIHlvdXIgd2Vic2l0ZT88L2I+XFxyXFxuICAgIDxici8+IFdlIGNhcmVmdWxseSBzZWxlY3QgcGhvdG9ncmFwaGVycyBiYXNlZCBvbiB0aGVpciBwb3J0Zm9saW9zIHRvIGtlZXAgcXVhbGl0eSBvZiB3b3Jrc2hvcHMgaGlnaC4gUGxlYXNlIGVtYWlsIHVzXFxyXFxuICAgIGF0IGhlbGxvQHRoZXBpeGVsYXRlZHBsYW5ldC5jb20gaW4gb3JkZXIgdG8gZ2V0IGluIHRvdWNoIHdpdGggdXMhXFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gICAgPGZvb3Rlcj48L2Zvb3Rlcj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1jb250YWluZXJcXFwiPlxcclxcbiAgICA8aW5wdXQgaWQ9XFxcImNvdW50cnlcXFwiIHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmaWx0ZXItaW5wdXRcXFwiIFsobmdNb2RlbCldPXF1ZXJ5IChrZXl1cCk9ZmlsdGVyKCkgcGxhY2Vob2xkZXI9XFxcIlR5cGUgYSBsb2NhdGlvblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInN1Z2dlc3Rpb25zXFxcIiAqbmdJZj1cXFwiZmlsdGVyZWRMaXN0Lmxlbmd0aCA+IDBcXFwiPlxcclxcbiAgICAgICAgPHVsPlxcclxcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBpdGVtIG9mIGZpbHRlcmVkTGlzdFxcXCIgKGNsaWNrKT1cXFwic2VsZWN0KGl0ZW0pXFxcIj57e2l0ZW19fTwvbGk+XFxyXFxuICAgICAgICA8L3VsPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyIFtzaG93TmFtZV09XFxcInRydWVcXFwiPj48L25hdmktYmFyPlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRhY3QtdXNcXFwiPlxcclxcbiAgICA8aDE+TGV0J3MgY2xpY2sgdG9nZXRoZXIhPC9oMT5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwic3RhdGljLWluZm9cXFwiPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZW52ZWxvcGVcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPHNwYW4+aGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbTwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGhvbmUtc3F1YXJlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxzcGFuPjQyNS05NzktODgzODwvc3Bhbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS13cmFwcGVyXFxcIj5cXHJcXG4gICAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XFxcIm9uU3VibWl0KCk7IGNvbnRhY3RGb3JtLnJlc2V0KClcXFwiIG5hbWU9XFxcImNvbnRhY3QtZm9ybVxcXCIgI2NvbnRhY3RGb3JtPVxcXCJuZ0Zvcm1cXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hbWUtZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIGZpcnN0LW5hbWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJmbmFtZVxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImZuYW1lXFxcIiBuYW1lPVxcXCJmbmFtZVxcXCIgI2ZpcnN0bmFtZT1cXFwibmdNb2RlbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZ1bGwgbmFtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKGZpcnN0bmFtZS52YWxpZCB8fCBmaXJzdG5hbWUucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG5hbWVcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtYWlsLW51bWJlci1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJlbWFpbFxcXCIgcmVxdWlyZWQgWyhuZ01vZGVsKV09XFxcImVtYWlsSWRcXFwiIG5hbWU9XFxcImVtYWlsXFxcIiAjZW1haWw9XFxcIm5nTW9kZWxcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBhZGRyZXNzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEoZW1haWwudmFsaWQgfHwgZW1haWwucHJpc3RpbmUpXFxcIiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIGVtYWlsIGFkZHJlc3NcXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHN1YmplY3QtYm94XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJzdWJqZWN0XFxcIiByZXF1aXJlZCBbKG5nTW9kZWwpXT1cXFwic3ViamVjdFRleHRcXFwiIG5hbWU9XFxcInN1YmplY3RcXFwiICNzdWJqZWN0PVxcXCJuZ01vZGVsXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XFxcIlN1YmplY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVxcXCIhKHN1YmplY3QudmFsaWQgfHwgc3ViamVjdC5wcmlzdGluZSlcXFwiIGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgSW52YWxpZCBzdWJqZWN0XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgbWVzc2FnZS1ib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcIm1lc3NhZ2VcXFwiIHJlcXVpcmVkIHJvd3M9XFxcIjRcXFwiIGNvbHM9XFxcIjUwXFxcIiBuYW1lPVxcXCJtZXNzYWdlXFxcIiBmb3JtPVxcXCJjb250YWN0LWZvcm1cXFwiIFsobmdNb2RlbCldPVxcXCJtZXNzYWdlVGV4dFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICNtZXNzYWdlPVxcXCJuZ01vZGVsXFxcIiBwbGFjZWhvbGRlcj1cXFwiSG93IGNhbiB3ZSBoZWxwIHlvdT9cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XFxcIiEobWVzc2FnZS52YWxpZCB8fCBtZXNzYWdlLnByaXN0aW5lKVxcXCIgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICBJbnZhbGlkIG1lc3NhZ2VcXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJzdWJtaXQtYnRuIGJ0biBidG4tc3VjY2Vzc1xcXCIgW2Rpc2FibGVkXT1cXFwiIWNvbnRhY3RGb3JtLmZvcm0udmFsaWQgfHwgaW52YWxpZERldGFpbHNcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9mb3JtPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibWVzc2FnZS1kaWFsb2dcXFwiICpuZ0lmPVxcXCJzdWJtaXR0ZWQgJiYgc2hvd01lc3NhZ2VCb3hcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3JhcHBlclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGV4dFxcXCI+e3tzdWJtaXRNZXNzYWdlfX08L2Rpdj5cXHJcXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJvay1idG4gYnRuXFxcIiAoY2xpY2spPVxcXCJoaWRlTWVzc2FnZWJveCgpXFxcIj5vazwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXHJcXG4gICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRhdGUtcGlja2VyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZyb20tZGF0ZVxcXCI+XFxyXFxuICAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Gcm9tRGF0ZUNoYW5nZWQoJGV2ZW50KVxcXCIgbmFtZT1cXFwiZnJvbS1kYXRlXFxcIiBbcGxhY2Vob2xkZXJdPVxcXCJmcm9tRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcImZyb21EYXRlUGlja2VyT3B0aW9uc1xcXCIgW3NlbERhdGVdPVxcXCJzZWxGcm9tRGF0ZVxcXCI+PC9teS1kYXRlLXBpY2tlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvLWRhdGVcXFwiPlxcclxcbiAgICAgICA8bXktZGF0ZS1waWNrZXIgKGRhdGVDaGFuZ2VkKT1cXFwib25Ub0RhdGVDaGFuZ2VkKCRldmVudClcXFwiIG5hbWU9XFxcInRvLWRhdGVcXFwiIFtwbGFjZWhvbGRlcl09XFxcInRvRGF0ZUxhYmVsXFxcIiBbb3B0aW9uc109XFxcInRvRGF0ZVBpY2tlck9wdGlvbnNcXFwiIFtzZWxEYXRlXT1cXFwic2VsVG9EYXRlXFxcIj48L215LWRhdGUtcGlja2VyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9kYXRlLXBpY2tlci9kYXRlLXBpY2tlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxidXR0b24gKGNsaWNrKT1cXFwidG9nZ2xlRHJvcGRvd24oKVxcXCI+XFxyXFxuICAgICAgICA8c3Bhbj57e2J1dHRvbkxhYmVsfX08L3NwYW4+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtY2hldnJvbi1kb3duXFxcIj48L2k+XFxyXFxuICAgIDwvYnV0dG9uPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1saXN0XFxcIiAoY2xpY2spPVxcXCJvdmVybGF5KClcXFwiIFtjbGFzcy5oaWRlLWRyb3Bkb3duXT1cXFwiaXNDb2xsYXBzZWRcXFwiPlxcclxcbiAgICAgICAgPGRpdiAoY2xpY2spPVxcXCJzZWxlY3RWYWx1ZShkYXRhLmxhYmVsKVxcXCIgY2xhc3M9XFxcImRhdGEtbGlzdFxcXCIgKm5nRm9yPVxcXCJsZXQgZGF0YSBvZiBkYXRhTW9kZWw7XFxcIj57e2RhdGEubGFiZWx9fTwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9kcm9wZG93bi1tZW51L2Ryb3Bkb3duLW1lbnUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2aS1iYXI+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgc3JjPVxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXHJcXG4gICAgPGgxPjQwNCAtIFBhZ2UgTm90IEZvdW5kPC9oMT5cXHJcXG4gICAgPGgzPk9vcHMsIHlvdSBsYW5kZWQgaW4gYSBiYWQgcGxhY2UuIExldCdzIGdldCBvdXQgb2YgaGVyZSBxdWlja2x5IGJlZm9yZSBhbnkgYmFkIGd1eXMgY29tZSBhcm91bmQhPC9oMz5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgIDxhIGhyZWY9XFxcIi90ZXJtc2FuZGNvbmRpdGlvbnNcXFwiPlRlcm1zIGFuZCBjb25kaXRpb25zPC9hPlxcclxcbiAgICA8YSBocmVmPVxcXCIvcHJpdmFjeXBvbGljeVxcXCI+UHJpdmFjeSBQb2xpY3k8L2E+XFxyXFxuICAgIDxzcGFuPiZjb3B5OyAyMDE3IFBpeGVsYXRlZCBQbGFuZXQ8L3NwYW4+XFxyXFxuICAgIDxhIGhyZWY9XFxcIi9jb250YWN0XFxcIj5Db250YWN0PC9hPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJtYWluLXBhZ2UtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPG5hdmktYmFyIFtzaG93RmlsdGVyc109XFxcImZhbHNlXFxcIj48L25hdmktYmFyPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcclxcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwibWFzdGhlYWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlci1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWNvbnRlbnQtaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFpbi1oZWFkaW5nXFxcIiBpZD1cXFwiaG9tZUhlYWRpbmdcXFwiPlBpeGVsYXRlZCBQbGFuZXQ8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cXFwic3ViLWhlYWRpbmdcXFwiPkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9va2luZyBhdCBpdHMgbGF5b3V0LjwvZGl2PiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXFxcIiBocmVmPVxcXCIjd29ya3Nob3BzXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIlVwY29taW5nRXZlbnRzQ2xpY2tcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIkhvbWVQYWdlSW50ZXJhY3Rpb25cXFwiPlVwY29taW5nIFdvcmtzaG9wczwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2hlYWRlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxzZWN0aW9uIGlkPVxcXCJ3b3Jrc2hvcHNcXFwiPlxcclxcbiAgICAgICAgPGgxIGNsYXNzPVxcXCJ3cy1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBXb3Jrc2hvcHNcXHJcXG4gICAgICAgIDwvaDE+XFxyXFxuICAgICAgICA8d29ya3Nob3BzLWxpc3Q+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZpZXctYWxsLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgaHJlZj1cXFwiL3dvcmtzaG9wc1xcXCIgY2xhc3M9XFxcInZpZXctYWxsXFxcIiBhbmd1bGFydGljczJPbj1cXFwiY2xpY2tcXFwiIGFuZ3VsYXJ0aWNzRXZlbnQ9XFxcIlZpZXdBbGxFdmVudHNDbGlja1xcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiSG9tZVBhZ2VJbnRlcmFjdGlvblxcXCI+PHNwYW4+VmlldyBhbGw8L3NwYW4+ICA8aSBjbGFzcz1cXFwiZmEgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxyXFxuICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8bmF2IGNsYXNzPVxcXCJuYXYtY29udGFpbmVyXFxcIj5cXHJcXG4gIDxhIGhyZWY9XFxcIlxcXCIgY2xhc3M9XFxcImNvbXBhbnktaWNvblxcXCIgIGFuZ3VsYXJ0aWNzMk9uPVxcXCJjbGlja1xcXCIgYW5ndWxhcnRpY3NFdmVudD1cXFwiR29Ub0hvbWVQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIHNyYz1cXFwiL2Fzc2V0cy9pbWcvaWNvbi5wbmdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiPlxcclxcbiAgICA8c3BhbiAqbmdJZj1cXFwic2hvd05hbWVcXFwiIGNsYXNzPVxcXCJjb21wYW55LW5hbWVcXFwiPlBpeGVsYXRlZCBQbGFuZXQ8L3NwYW4+XFxyXFxuICA8L2E+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXHJcXG4gICAgPGJ1dHRvbiAqbmdJZj1cXFwic2hvd0ZpbHRlcnNcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImZpbHRlci1oZWFkZXIgYnRuXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVGaWx0ZXIoKVxcXCI+XFxyXFxuICAgICAgICAgIDxkaXY+RmlsdGVycyA8aSBjbGFzcz1cXFwiZmEgZmEtZmlsdGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvZGl2PlxcclxcbiAgICA8L2J1dHRvbj5cXHJcXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVOYXZiYXIoKVxcXCI+XFxyXFxuICAgICAgPGRpdj48aSBjbGFzcz1cXFwiZmEgZmEtYmFyc1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2Rpdj5cXHJcXG4gICAgPC9idXR0b24+XFxyXFxuXFxyXFxuICA8L2Rpdj5cXHJcXG5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1jb2xsYXBzZVxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGVOYXZiYXInOiBoaWRlTmF2YmFyfVxcXCI+XFxyXFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICA8bGkgY2xhc3M9XFxcImFjdGl2ZVxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvV29ya3Nob3BzUGFnZUV2ZW50XFxcIiBhbmd1bGFydGljc0NhdGVnb3J5PVxcXCJOYXZCYXJJbnRlcmFjdGlvblxcXCI+PGEgaHJlZj1cXFwiL3dvcmtzaG9wc1xcXCI+V09SS1NIT1BTPC9hPjwvbGk+XFxyXFxuICAgICAgPGxpPjxhIGhyZWY9XFxcIi9hYm91dFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQWJvdXRQYWdlRXZlbnRcXFwiIGFuZ3VsYXJ0aWNzQ2F0ZWdvcnk9XFxcIk5hdkJhckludGVyYWN0aW9uXFxcIj5BQk9VVDwvYT48L2xpPlxcclxcbiAgICAgIDxsaT48YSBocmVmPVxcXCIvY29udGFjdFxcXCIgYW5ndWxhcnRpY3MyT249XFxcImNsaWNrXFxcIiBhbmd1bGFydGljc0V2ZW50PVxcXCJHb1RvQ29udGFjdFBhZ2VFdmVudFxcXCIgYW5ndWxhcnRpY3NDYXRlZ29yeT1cXFwiTmF2QmFySW50ZXJhY3Rpb25cXFwiPkNPTlRBQ1Q8L2E+PC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gIDwvZGl2PlxcclxcbjwvbmF2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcblxcdDxuYXZpLWJhcj48L25hdmktYmFyPlxcclxcblxcdDxkaXYgY2xhc3M9XFxcImxpc3RcXFwiPlxcclxcbiAgICAgICAgPGJyLz48YnIvPjxici8+XFxyXFxuICAgICAgICA8YnIvPjxici8+PGJyLz5cXHJcXG4gICAgICAgIDxici8+PGJyLz48YnIvPlxcclxcblxcdFxcdFJlZGlyZWN0aW5nIHRvIGFuIGV4dGVybmFsIGxpbmsgaW4gNSBzZWNvbmRzLi4uIElmIHlvdSB3b3VsZCByYXRoZXIgbm90IGxlYXZlIHVzLCA8YSBzdHlsZT1cXFwiY3Vyc29yOmhhbmRcXFwiIChjbGljayk9XFxcImdvQmFjaygpXFxcIj5jbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+LlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3BhZ2UtcmVkaXJlY3QvcGFnZS1yZWRpcmVjdC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxuYXZpLWJhciBbc2hvd05hbWVdPVxcXCJ0cnVlXFxcIj4+PC9uYXZpLWJhcj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJoZWFkZXItaW1nXFxcIj5cXHJcXG4gICAgPGltZyBjbGFzcz1cXFwiZGV0YWlsLWltZ1xcXCIgc3JjPVxcXCJodHRwczovL3BpeGVsYXRlZHBsYW5ldGNkbi5henVyZWVkZ2UubmV0L2ltZy95b3NlbWl0ZS5qcGdcXFwiIGFsdD1cXFwid29ya3Nob3AgaW1hZ2VcXFwiIC8+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxyXFxuICAgIDxoMj5Qcml2YWN5IFBvbGljeTwvaDI+XFxyXFxuPGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5UaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpciAnUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24nIChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLiBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWQgb24gaXRzIG93biBvciB3aXRoIG90aGVyIGluZm9ybWF0aW9uIHRvIGlkZW50aWZ5LCBjb250YWN0LCBvciBsb2NhdGUgYSBzaW5nbGUgcGVyc29uLCBvciB0byBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXIgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGUgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGggb3VyIHdlYnNpdGUuPGJyPjwvZGl2PjxzcGFuIGlkPSdpbmZvQ28nPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0IGZyb20gdGhlIHBlb3BsZSB0aGF0IHZpc2l0IG91ciBibG9nLCB3ZWJzaXRlIG9yIGFwcD88L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldoZW4gb3JkZXJpbmcgb3IgcmVnaXN0ZXJpbmcgb24gb3VyIHNpdGUsIGFzIGFwcHJvcHJpYXRlLCB5b3UgbWF5IGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcywgcGhvbmUgbnVtYmVyICBvciBvdGhlciBkZXRhaWxzIHRvIGhlbHAgeW91IHdpdGggeW91ciBleHBlcmllbmNlLjwvZGl2Pjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5XaGVuIGRvIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24/PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBjb2xsZWN0IGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IGZpbGwgb3V0IGEgZm9ybSBvciBlbnRlciBpbmZvcm1hdGlvbiBvbiBvdXIgc2l0ZS48L2Rpdj48YnI+UHJvdmlkZSB1cyB3aXRoIGZlZWRiYWNrIG9uIG91ciBwcm9kdWN0cyBvciBzZXJ2aWNlcyAgPHNwYW4gaWQ9J2luZm9Vcyc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5Ib3cgZG8gd2UgdXNlIHlvdXIgaW5mb3JtYXRpb24/IDwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+IFdlIG1heSB1c2UgdGhlIGluZm9ybWF0aW9uIHdlIGNvbGxlY3QgZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIsIG1ha2UgYSBwdXJjaGFzZSwgc2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXIsIHJlc3BvbmQgdG8gYSBzdXJ2ZXkgb3IgbWFya2V0aW5nIGNvbW11bmljYXRpb24sIHN1cmYgdGhlIHdlYnNpdGUsIG9yIHVzZSBjZXJ0YWluIG90aGVyIHNpdGUgZmVhdHVyZXMgaW4gdGhlIGZvbGxvd2luZyB3YXlzOjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gcGVyc29uYWxpemUgeW91ciBleHBlcmllbmNlIGFuZCB0byBhbGxvdyB1cyB0byBkZWxpdmVyIHRoZSB0eXBlIG9mIGNvbnRlbnQgYW5kIHByb2R1Y3Qgb2ZmZXJpbmdzIGluIHdoaWNoIHlvdSBhcmUgbW9zdCBpbnRlcmVzdGVkLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IFRvIGltcHJvdmUgb3VyIHdlYnNpdGUgaW4gb3JkZXIgdG8gYmV0dGVyIHNlcnZlIHlvdS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBUbyBhbGxvdyB1cyB0byBiZXR0ZXIgc2VydmljZSB5b3UgaW4gcmVzcG9uZGluZyB0byB5b3VyIGN1c3RvbWVyIHNlcnZpY2UgcmVxdWVzdHMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gYXNrIGZvciByYXRpbmdzIGFuZCByZXZpZXdzIG9mIHNlcnZpY2VzIG9yIHByb2R1Y3RzPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gVG8gZm9sbG93IHVwIHdpdGggdGhlbSBhZnRlciBjb3JyZXNwb25kZW5jZSAobGl2ZSBjaGF0LCBlbWFpbCBvciBwaG9uZSBpbnF1aXJpZXMpPC9kaXY+PHNwYW4gaWQ9J2luZm9Qcm8nPjwvc3Bhbj48YnI+PGRpdiBjbGFzcz0nZ3JheVRleHQnPjxzdHJvbmc+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIG9ubHkgcHJvdmlkZSBhcnRpY2xlcyBhbmQgaW5mb3JtYXRpb24uIFdlIG5ldmVyIGFzayBmb3IgY3JlZGl0IGNhcmQgbnVtYmVycy48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPllvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGUgYnkgYSBsaW1pdGVkIG51bWJlciBvZiBwZXJzb25zIHdobyBoYXZlIHNwZWNpYWwgYWNjZXNzIHJpZ2h0cyB0byBzdWNoIHN5c3RlbXMsIGFuZCBhcmUgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZS9jcmVkaXQgaW5mb3JtYXRpb24geW91IHN1cHBseSBpcyBlbmNyeXB0ZWQgdmlhIFNlY3VyZSBTb2NrZXQgTGF5ZXIgKFNTTCkgdGVjaG5vbG9neS4gPC9kaXY+PGJyPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5BbGwgdHJhbnNhY3Rpb25zIGFyZSBwcm9jZXNzZWQgdGhyb3VnaCBhIGdhdGV3YXkgcHJvdmlkZXIgYW5kIGFyZSBub3Qgc3RvcmVkIG9yIHByb2Nlc3NlZCBvbiBvdXIgc2VydmVycy48L2Rpdj48c3BhbiBpZD0nY29Vcyc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5EbyB3ZSB1c2UgJ2Nvb2tpZXMnPzwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgZG8gbm90IHVzZSBjb29raWVzIGZvciB0cmFja2luZyBwdXJwb3NlcyA8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5Zb3UgY2FuIGNob29zZSB0byBoYXZlIHlvdXIgY29tcHV0ZXIgd2FybiB5b3UgZWFjaCB0aW1lIGEgY29va2llIGlzIGJlaW5nIHNlbnQsIG9yIHlvdSBjYW4gY2hvb3NlIHRvIHR1cm4gb2ZmIGFsbCBjb29raWVzLiBZb3UgZG8gdGhpcyB0aHJvdWdoIHlvdXIgYnJvd3NlciBzZXR0aW5ncy4gU2luY2UgYnJvd3NlciBpcyBhIGxpdHRsZSBkaWZmZXJlbnQsIGxvb2sgYXQgeW91ciBicm93c2VyJ3MgSGVscCBNZW51IHRvIGxlYXJuIHRoZSBjb3JyZWN0IHdheSB0byBtb2RpZnkgeW91ciBjb29raWVzLjxicj48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5JZiB5b3UgdHVybiBjb29raWVzIG9mZiwgU29tZSBvZiB0aGUgZmVhdHVyZXMgdGhhdCBtYWtlIHlvdXIgc2l0ZSBleHBlcmllbmNlIG1vcmUgZWZmaWNpZW50IG1heSBub3QgZnVuY3Rpb24gcHJvcGVybHkudGhhdCBtYWtlIHlvdXIgc2l0ZSBleHBlcmllbmNlIG1vcmUgZWZmaWNpZW50IGFuZCBtYXkgbm90IGZ1bmN0aW9uIHByb3Blcmx5LjwvZGl2Pjxicj48c3BhbiBpZD0ndHJEaSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBkbyBub3Qgc2VsbCwgdHJhZGUsIG9yIG90aGVyd2lzZSB0cmFuc2ZlciB0byBvdXRzaWRlIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi48L2Rpdj48c3BhbiBpZD0ndHJMaSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdncmF5VGV4dCc+PHN0cm9uZz5UaGlyZC1wYXJ0eSBsaW5rczwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+T2NjYXNpb25hbGx5LCBhdCBvdXIgZGlzY3JldGlvbiwgd2UgbWF5IGluY2x1ZGUgb3Igb2ZmZXIgdGhpcmQtcGFydHkgcHJvZHVjdHMgb3Igc2VydmljZXMgb24gb3VyIHdlYnNpdGUuIFRoZXNlIHRoaXJkLXBhcnR5IHNpdGVzIGhhdmUgc2VwYXJhdGUgYW5kIGluZGVwZW5kZW50IHByaXZhY3kgcG9saWNpZXMuIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0IHRoZSBpbnRlZ3JpdHkgb2Ygb3VyIHNpdGUgYW5kIHdlbGNvbWUgYW55IGZlZWRiYWNrIGFib3V0IHRoZXNlIHNpdGVzLjwvZGl2PjxzcGFuIGlkPSdnb29BZCc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5Hb29nbGU8L3N0cm9uZz48L2Rpdj48YnIgLz48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkdvb2dsZSdzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5IEdvb2dsZSdzIEFkdmVydGlzaW5nIFByaW5jaXBsZXMuIFRoZXkgYXJlIHB1dCBpbiBwbGFjZSB0byBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW4gPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHVzZSBHb29nbGUgQWRTZW5zZSBBZHZlcnRpc2luZyBvbiBvdXIgd2Vic2l0ZS48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5Hb29nbGUsIGFzIGEgdGhpcmQtcGFydHkgdmVuZG9yLCB1c2VzIGNvb2tpZXMgdG8gc2VydmUgYWRzIG9uIG91ciBzaXRlLiBHb29nbGUncyB1c2Ugb2YgdGhlIERBUlQgY29va2llIGVuYWJsZXMgaXQgdG8gc2VydmUgYWRzIHRvIG91ciB1c2VycyBiYXNlZCBvbiBwcmV2aW91cyB2aXNpdHMgdG8gb3VyIHNpdGUgYW5kIG90aGVyIHNpdGVzIG9uIHRoZSBJbnRlcm5ldC4gVXNlcnMgbWF5IG9wdC1vdXQgb2YgdGhlIHVzZSBvZiB0aGUgREFSVCBjb29raWUgYnkgdmlzaXRpbmcgdGhlIEdvb2dsZSBBZCBhbmQgQ29udGVudCBOZXR3b3JrIHByaXZhY3kgcG9saWN5Ljxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj48c3Ryb25nPldlIGhhdmUgaW1wbGVtZW50ZWQgdGhlIGZvbGxvd2luZzo8L3N0cm9uZz48L2Rpdj48YnI+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSwgYWxvbmcgd2l0aCB0aGlyZC1wYXJ0eSB2ZW5kb3JzIHN1Y2ggYXMgR29vZ2xlIHVzZSBmaXJzdC1wYXJ0eSBjb29raWVzIChzdWNoIGFzIHRoZSBHb29nbGUgQW5hbHl0aWNzIGNvb2tpZXMpIGFuZCB0aGlyZC1wYXJ0eSBjb29raWVzIChzdWNoIGFzIHRoZSBEb3VibGVDbGljayBjb29raWUpIG9yIG90aGVyIHRoaXJkLXBhcnR5IGlkZW50aWZpZXJzIHRvZ2V0aGVyIDxkaXYgY2xhc3M9J2lubmVyVGV4dCc+YW5hbHl6ZSB3ZWJzaXRlIHVzYWdlPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5PcHRpbmcgb3V0Ojwvc3Ryb25nPjxicj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIFVzZXJzIGNhbiBzZXQgcHJlZmVyZW5jZXMgZm9yIGhvdyBHb29nbGUgYWR2ZXJ0aXNlcyB0byB5b3UgdXNpbmcgdGhlIEdvb2dsZSBBZCBTZXR0aW5ncyBwYWdlLiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIG9wdCBvdXQgYnkgdmlzaXRpbmcgdGhlIE5ldHdvcmsgQWR2ZXJ0aXNpbmcgSW5pdGlhdGl2ZSBPcHQgT3V0IHBhZ2Ugb3IgYnkgdXNpbmcgdGhlIEdvb2dsZSBBbmFseXRpY3MgT3B0IE91dCBCcm93c2VyIGFkZCBvbi48L2Rpdj48c3BhbiBpZD0nY2FsT3BwYSc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5DYWxPUFBBIGlzIHRoZSBmaXJzdCBzdGF0ZSBsYXcgaW4gdGhlIG5hdGlvbiB0byByZXF1aXJlIGNvbW1lcmNpYWwgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuICBUaGUgbGF3J3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnkgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZyBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzIHRvIHBvc3QgYSBjb25zcGljdW91cyBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmQgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gIFNlZSBtb3JlIGF0OiBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWY8YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L3N0cm9uZz48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5Vc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5PbmNlIHRoaXMgcHJpdmFjeSBwb2xpY3kgaXMgY3JlYXRlZCwgd2Ugd2lsbCBhZGQgYSBsaW5rIHRvIGl0IG9uIG91ciBob21lIHBhZ2Ugb3IgYXMgYSBtaW5pbXVtLCBvbiB0aGUgZmlyc3Qgc2lnbmlmaWNhbnQgcGFnZSBhZnRlciBlbnRlcmluZyBvdXIgd2Vic2l0ZS48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5PdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCAnUHJpdmFjeScgYW5kIGNhbiBlYXNpbHkgYmUgZm91bmQgb24gdGhlIHBhZ2Ugc3BlY2lmaWVkIGFib3ZlLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPllvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE9uIG91ciBQcml2YWN5IFBvbGljeSBQYWdlPGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Q2FuIGNoYW5nZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uOjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IEJ5IGxvZ2dpbmcgaW4gdG8geW91ciBhY2NvdW50PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz48YnI+PHN0cm9uZz5Ib3cgZG9lcyBvdXIgc2l0ZSBoYW5kbGUgRG8gTm90IFRyYWNrIHNpZ25hbHM/PC9zdHJvbmc+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+V2UgaG9ub3IgRG8gTm90IFRyYWNrIHNpZ25hbHMgYW5kIERvIE5vdCBUcmFjaywgcGxhbnQgY29va2llcywgb3IgdXNlIGFkdmVydGlzaW5nIHdoZW4gYSBEbyBOb3QgVHJhY2sgKEROVCkgYnJvd3NlciBtZWNoYW5pc20gaXMgaW4gcGxhY2UuIDwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PGJyPjxzdHJvbmc+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvc3Ryb25nPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkl0J3MgYWxzbyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmc8L2Rpdj48c3BhbiBpZD0nY29wcEFjdCc+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PHN0cm9uZz5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbidzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuICBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJyBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdCBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4ncyBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLjxicj48YnI+PC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5XZSBkbyBub3Qgc3BlY2lmaWNhbGx5IG1hcmtldCB0byBjaGlsZHJlbiB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPkRvIHdlIGxldCB0aGlyZC1wYXJ0aWVzLCBpbmNsdWRpbmcgYWQgbmV0d29ya3Mgb3IgcGx1Zy1pbnMgY29sbGVjdCBQSUkgZnJvbSBjaGlsZHJlbiB1bmRlciAxMz88L2Rpdj48c3BhbiBpZD0nZnRjRmlwJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz48c3Ryb25nPkZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzPC9zdHJvbmc+PC9kaXY+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5UaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5IGxhdyBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQgdGhlIGNvbmNlcHRzIHRoZXkgaW5jbHVkZSBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50IHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmcgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzIGNyaXRpY2FsIHRvIGNvbXBseSB3aXRoIHRoZSB2YXJpb3VzIHByaXZhY3kgbGF3cyB0aGF0IHByb3RlY3QgcGVyc29uYWwgaW5mb3JtYXRpb24uPGJyPjxicj48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxzdHJvbmc+SW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGUgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjo8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPldlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWw8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBXaXRoaW4gMSBidXNpbmVzcyBkYXk8L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj5XZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSB0aGUgcmlnaHQgdG8gbGVnYWxseSBwdXJzdWUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSBjb2xsZWN0b3JzIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seSB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdCBpbmRpdmlkdWFscyBoYXZlIHJlY291cnNlIHRvIGNvdXJ0cyBvciBnb3Zlcm5tZW50IGFnZW5jaWVzIHRvIGludmVzdGlnYXRlIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLjwvZGl2PjxzcGFuIGlkPSdjYW5TcGFtJz48L3NwYW4+PGJyPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz48c3Ryb25nPkNBTiBTUEFNIEFjdDwvc3Ryb25nPjwvZGl2PjxiciAvPjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+VGhlIENBTi1TUEFNIEFjdCBpcyBhIGxhdyB0aGF0IHNldHMgdGhlIHJ1bGVzIGZvciBjb21tZXJjaWFsIGVtYWlsLCBlc3RhYmxpc2hlcyByZXF1aXJlbWVudHMgZm9yIGNvbW1lcmNpYWwgbWVzc2FnZXMsIGdpdmVzIHJlY2lwaWVudHMgdGhlIHJpZ2h0IHRvIGhhdmUgZW1haWxzIHN0b3BwZWQgZnJvbSBiZWluZyBzZW50IHRvIHRoZW0sIGFuZCBzcGVsbHMgb3V0IHRvdWdoIHBlbmFsdGllcyBmb3IgdmlvbGF0aW9ucy48YnI+PGJyPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PHN0cm9uZz5XZSBjb2xsZWN0IHlvdXIgZW1haWwgYWRkcmVzcyBpbiBvcmRlciB0bzo8L3N0cm9uZz48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPjxicj48c3Ryb25nPlRvIGJlIGluIGFjY29yZGFuY2Ugd2l0aCBDQU5TUEFNLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvc3Ryb25nPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE5vdCB1c2UgZmFsc2Ugb3IgbWlzbGVhZGluZyBzdWJqZWN0cyBvciBlbWFpbCBhZGRyZXNzZXMuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gSWRlbnRpZnkgdGhlIG1lc3NhZ2UgYXMgYW4gYWR2ZXJ0aXNlbWVudCBpbiBzb21lIHJlYXNvbmFibGUgd2F5LjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IEluY2x1ZGUgdGhlIHBoeXNpY2FsIGFkZHJlc3Mgb2Ygb3VyIGJ1c2luZXNzIG9yIHNpdGUgaGVhZHF1YXJ0ZXJzLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7Jm5ic3A7IDxzdHJvbmc+JmJ1bGw7PC9zdHJvbmc+IE1vbml0b3IgdGhpcmQtcGFydHkgZW1haWwgbWFya2V0aW5nIHNlcnZpY2VzIGZvciBjb21wbGlhbmNlLCBpZiBvbmUgaXMgdXNlZC48L2Rpdj48ZGl2IGNsYXNzPSdpbm5lclRleHQnPiZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOyA8c3Ryb25nPiZidWxsOzwvc3Ryb25nPiBIb25vciBvcHQtb3V0L3Vuc3Vic2NyaWJlIHJlcXVlc3RzIHF1aWNrbHkuPC9kaXY+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz4mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDsgPHN0cm9uZz4mYnVsbDs8L3N0cm9uZz4gQWxsb3cgdXNlcnMgdG8gdW5zdWJzY3JpYmUgYnkgdXNpbmcgdGhlIGxpbmsgYXQgdGhlIGJvdHRvbSBvZiBlYWNoIGVtYWlsLjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+PHN0cm9uZz48YnI+SWYgYXQgYW55IHRpbWUgeW91IHdvdWxkIGxpa2UgdG8gdW5zdWJzY3JpYmUgZnJvbSByZWNlaXZpbmcgZnV0dXJlIGVtYWlscywgeW91IGNhbiBlbWFpbCB1cyBhdDwvc3Ryb25nPjwvZGl2PjxkaXYgY2xhc3M9J2lubmVyVGV4dCc+aGVsbG9AdGhlcGl4ZWxhdGVkcGxhbmV0LmNvbSBhbmQgd2Ugd2lsbCBwcm9tcHRseSByZW1vdmUgeW91IGZyb20gPHN0cm9uZz5BTEw8L3N0cm9uZz4gY29ycmVzcG9uZGVuY2UuPC9kaXY+PGJyPjxicj48c3Ryb25nPjxkaXYgY2xhc3M9J2JsdWVUZXh0Jz5QaG90b2dyYXBoZXJzPC9kaXY+PC9zdHJvbmc+PGJyIC8+PGRpdiBjbGFzcz0naW5uZXJUZXh0Jz5BbGwgcGhvdG9ncmFwaGVycyBmZWF0dXJlZCBpbiBvdXIgd2Vic2l0ZSB3aWxsaW5nbHkgYWdyZWUgdG8gdXMgc2hvd2luZyBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciB3b3Jrc2hvcHMgb24gdGhlIHdlYnNpdGUgYW5kIHVzZSBkYXRhIGZyb20gdGhlaXIgd2Vic2l0ZXMuPC9kaXY+PHNwYW4gaWQ9J291ckNvbic+PC9zcGFuPjxicj48ZGl2IGNsYXNzPSdibHVlVGV4dCc+PGJyPkxhc3QgRWRpdGVkIG9uIDIwMTctMDktMTc8L2Rpdj48L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyIFtzaG93TmFtZV09XFxcInRydWVcXFwiPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIHNyYz1cXFwiaHR0cHM6Ly9waXhlbGF0ZWRwbGFuZXRjZG4uYXp1cmVlZGdlLm5ldC9pbWcveW9zZW1pdGUuanBnXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcclxcbiAgICA8aDI+VGVybXMgYW5kIGNvbmRpdGlvbnM8L2gyPjxici8+XFxyXFxuICAgIDxici8+XFxyXFxuPGI+T1ZFUlZJRVc8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblRoaXMgd2Vic2l0ZSBpcyBvcGVyYXRlZCBieSBUaGUgUGl4ZWxhdGVkIFBsYW5ldC4gVGhyb3VnaG91dCB0aGUgc2l0ZSwgdGhlIHRlcm1zIOKAnHdl4oCdLCDigJx1c+KAnSBhbmQg4oCcb3Vy4oCdIHJlZmVyIHRvIFRoZSBQaXhlbGF0ZWQgUGxhbmV0LiBUaGUgUGl4ZWxhdGVkIFBsYW5ldCBvZmZlcnMgdGhpcyB3ZWJzaXRlLCBpbmNsdWRpbmcgYWxsIGluZm9ybWF0aW9uLCB0b29scyBhbmQgc2VydmljZXMgYXZhaWxhYmxlIGZyb20gdGhpcyBzaXRlIHRvIHlvdSwgdGhlIHVzZXIsIGNvbmRpdGlvbmVkIHVwb24geW91ciBhY2NlcHRhbmNlIG9mIGFsbCB0ZXJtcywgY29uZGl0aW9ucywgcG9saWNpZXMgYW5kIG5vdGljZXMgc3RhdGVkIGhlcmUuPGJyLz5cXHJcXG48YnIvPlxcclxcbkJ5IHZpc2l0aW5nIG91ciBzaXRlIGFuZC8gb3IgcHVyY2hhc2luZyBzb21ldGhpbmcgZnJvbSB1cywgeW91IGVuZ2FnZSBpbiBvdXIg4oCcU2VydmljZeKAnSBhbmQgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlIGZvbGxvd2luZyB0ZXJtcyBhbmQgY29uZGl0aW9ucyAo4oCcVGVybXMgb2YgU2VydmljZeKAnSwg4oCcVGVybXPigJ0pLCBpbmNsdWRpbmcgdGhvc2UgYWRkaXRpb25hbCB0ZXJtcyBhbmQgY29uZGl0aW9ucyBhbmQgcG9saWNpZXMgcmVmZXJlbmNlZCBoZXJlaW4gYW5kL29yIGF2YWlsYWJsZSBieSBoeXBlcmxpbmsuIFRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYXBwbHkgIHRvIGFsbCB1c2VycyBvZiB0aGUgc2l0ZSwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB1c2VycyB3aG8gYXJlIGJyb3dzZXJzLCB2ZW5kb3JzLCBjdXN0b21lcnMsIG1lcmNoYW50cywgYW5kLyBvciBjb250cmlidXRvcnMgb2YgY29udGVudC48YnIvPlxcclxcbjxici8+XFxyXFxuUGxlYXNlIHJlYWQgdGhlc2UgVGVybXMgb2YgU2VydmljZSBjYXJlZnVsbHkgYmVmb3JlIGFjY2Vzc2luZyBvciB1c2luZyBvdXIgd2Vic2l0ZS4gQnkgYWNjZXNzaW5nIG9yIHVzaW5nIGFueSBwYXJ0IG9mIHRoZSBzaXRlLCB5b3UgYWdyZWUgdG8gYmUgYm91bmQgYnkgdGhlc2UgVGVybXMgb2YgU2VydmljZS4gSWYgeW91IGRvIG5vdCBhZ3JlZSB0byBhbGwgdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoaXMgYWdyZWVtZW50LCB0aGVuIHlvdSBtYXkgbm90IGFjY2VzcyB0aGUgd2Vic2l0ZSBvciB1c2UgYW55IHNlcnZpY2VzLiBJZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGFyZSBjb25zaWRlcmVkIGFuIG9mZmVyLCBhY2NlcHRhbmNlIGlzIGV4cHJlc3NseSBsaW1pdGVkIHRvIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UuPGJyLz5cXHJcXG48YnIvPlxcclxcbkFueSBuZXcgZmVhdHVyZXMgb3IgdG9vbHMgd2hpY2ggYXJlIGFkZGVkIHRvIHRoZSBjdXJyZW50IHN0b3JlIHNoYWxsIGFsc28gYmUgc3ViamVjdCB0byB0aGUgVGVybXMgb2YgU2VydmljZS4gWW91IGNhbiByZXZpZXcgdGhlIG1vc3QgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBUZXJtcyBvZiBTZXJ2aWNlIGF0IGFueSB0aW1lIG9uIHRoaXMgcGFnZS4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdXBkYXRlLCBjaGFuZ2Ugb3IgcmVwbGFjZSBhbnkgcGFydCBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGJ5IHBvc3RpbmcgdXBkYXRlcyBhbmQvb3IgY2hhbmdlcyB0byBvdXIgd2Vic2l0ZS4gSXQgaXMgeW91ciByZXNwb25zaWJpbGl0eSB0byBjaGVjayB0aGlzIHBhZ2UgcGVyaW9kaWNhbGx5IGZvciBjaGFuZ2VzLiBZb3VyIGNvbnRpbnVlZCB1c2Ugb2Ygb3IgYWNjZXNzIHRvIHRoZSB3ZWJzaXRlIGZvbGxvd2luZyB0aGUgcG9zdGluZyBvZiBhbnkgY2hhbmdlcyBjb25zdGl0dXRlcyBhY2NlcHRhbmNlIG9mIHRob3NlIGNoYW5nZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMSAtIE9OTElORSBTVE9SRSBURVJNUzwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuQnkgYWdyZWVpbmcgdG8gdGhlc2UgVGVybXMgb2YgU2VydmljZSwgeW91IHJlcHJlc2VudCB0aGF0IHlvdSBhcmUgYXQgbGVhc3QgdGhlIGFnZSBvZiBtYWpvcml0eSBpbiB5b3VyIHN0YXRlIG9yIHByb3ZpbmNlIG9mIHJlc2lkZW5jZSwgb3IgdGhhdCB5b3UgYXJlIHRoZSBhZ2Ugb2YgbWFqb3JpdHkgaW4geW91ciBzdGF0ZSBvciBwcm92aW5jZSBvZiByZXNpZGVuY2UgYW5kIHlvdSBoYXZlIGdpdmVuIHVzIHlvdXIgY29uc2VudCB0byBhbGxvdyBhbnkgb2YgeW91ciBtaW5vciBkZXBlbmRlbnRzIHRvIHVzZSB0aGlzIHNpdGUuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBtYXkgbm90IHVzZSBvdXIgcHJvZHVjdHMgZm9yIGFueSBpbGxlZ2FsIG9yIHVuYXV0aG9yaXplZCBwdXJwb3NlIG5vciBtYXkgeW91LCBpbiB0aGUgdXNlIG9mIHRoZSBTZXJ2aWNlLCB2aW9sYXRlIGFueSBsYXdzIGluIHlvdXIganVyaXNkaWN0aW9uIChpbmNsdWRpbmcgYnV0IG5vdCBsaW1pdGVkIHRvIGNvcHlyaWdodCBsYXdzKS48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IG11c3Qgbm90IHRyYW5zbWl0IGFueSB3b3JtcyBvciB2aXJ1c2VzIG9yIGFueSBjb2RlIG9mIGEgZGVzdHJ1Y3RpdmUgbmF0dXJlLjxici8+XFxyXFxuPGJyLz5cXHJcXG5BIGJyZWFjaCBvciB2aW9sYXRpb24gb2YgYW55IG9mIHRoZSBUZXJtcyB3aWxsIHJlc3VsdCBpbiBhbiBpbW1lZGlhdGUgdGVybWluYXRpb24gb2YgeW91ciBTZXJ2aWNlcy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDIgLSBHRU5FUkFMIENPTkRJVElPTlM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHJlZnVzZSBzZXJ2aWNlIHRvIGFueW9uZSBmb3IgYW55IHJlYXNvbiBhdCBhbnkgdGltZS48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IHVuZGVyc3RhbmQgdGhhdCB5b3VyIGNvbnRlbnQgKG5vdCBpbmNsdWRpbmcgY3JlZGl0IGNhcmQgaW5mb3JtYXRpb24pLCBtYXkgYmUgdHJhbnNmZXJyZWQgdW5lbmNyeXB0ZWQgYW5kIGludm9sdmUgKGEpIHRyYW5zbWlzc2lvbnMgb3ZlciB2YXJpb3VzIG5ldHdvcmtzOyBhbmQgKGIpIGNoYW5nZXMgdG8gY29uZm9ybSBhbmQgYWRhcHQgdG8gdGVjaG5pY2FsIHJlcXVpcmVtZW50cyBvZiBjb25uZWN0aW5nIG5ldHdvcmtzIG9yIGRldmljZXMuIENyZWRpdCBjYXJkIGluZm9ybWF0aW9uIGlzIGFsd2F5cyBlbmNyeXB0ZWQgZHVyaW5nIHRyYW5zZmVyIG92ZXIgbmV0d29ya3MuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhZ3JlZSBub3QgdG8gcmVwcm9kdWNlLCBkdXBsaWNhdGUsIGNvcHksIHNlbGwsIHJlc2VsbCBvciBleHBsb2l0IGFueSBwb3J0aW9uIG9mIHRoZSBTZXJ2aWNlLCB1c2Ugb2YgdGhlIFNlcnZpY2UsIG9yIGFjY2VzcyB0byB0aGUgU2VydmljZSBvciBhbnkgY29udGFjdCBvbiB0aGUgd2Vic2l0ZSB0aHJvdWdoIHdoaWNoIHRoZSBzZXJ2aWNlIGlzIHByb3ZpZGVkLCB3aXRob3V0IGV4cHJlc3Mgd3JpdHRlbiBwZXJtaXNzaW9uIGJ5IHVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGUgaGVhZGluZ3MgdXNlZCBpbiB0aGlzIGFncmVlbWVudCBhcmUgaW5jbHVkZWQgZm9yIGNvbnZlbmllbmNlIG9ubHkgYW5kIHdpbGwgbm90IGxpbWl0IG9yIG90aGVyd2lzZSBhZmZlY3QgdGhlc2UgVGVybXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAzIC0gQUNDVVJBQ1ksIENPTVBMRVRFTkVTUyBBTkQgVElNRUxJTkVTUyBPRiBJTkZPUk1BVElPTjwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgYXJlIG5vdCByZXNwb25zaWJsZSBpZiBpbmZvcm1hdGlvbiBtYWRlIGF2YWlsYWJsZSBvbiB0aGlzIHNpdGUgaXMgbm90IGFjY3VyYXRlLCBjb21wbGV0ZSBvciBjdXJyZW50LiBUaGUgbWF0ZXJpYWwgb24gdGhpcyBzaXRlIGlzIHByb3ZpZGVkIGZvciBnZW5lcmFsIGluZm9ybWF0aW9uIG9ubHkgYW5kIHNob3VsZCBub3QgYmUgcmVsaWVkIHVwb24gb3IgdXNlZCBhcyB0aGUgc29sZSBiYXNpcyBmb3IgbWFraW5nIGRlY2lzaW9ucyB3aXRob3V0IGNvbnN1bHRpbmcgcHJpbWFyeSwgbW9yZSBhY2N1cmF0ZSwgbW9yZSBjb21wbGV0ZSBvciBtb3JlIHRpbWVseSBzb3VyY2VzIG9mIGluZm9ybWF0aW9uLiBBbnkgcmVsaWFuY2Ugb24gdGhlIG1hdGVyaWFsIG9uIHRoaXMgc2l0ZSBpcyBhdCB5b3VyIG93biByaXNrLjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGlzIHNpdGUgbWF5IGNvbnRhaW4gY2VydGFpbiBoaXN0b3JpY2FsIGluZm9ybWF0aW9uLiBIaXN0b3JpY2FsIGluZm9ybWF0aW9uLCBuZWNlc3NhcmlseSwgaXMgbm90IGN1cnJlbnQgYW5kIGlzIHByb3ZpZGVkIGZvciB5b3VyIHJlZmVyZW5jZSBvbmx5LiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIHRoaXMgc2l0ZSBhdCBhbnkgdGltZSwgYnV0IHdlIGhhdmUgbm8gb2JsaWdhdGlvbiB0byB1cGRhdGUgYW55IGluZm9ybWF0aW9uIG9uIG91ciBzaXRlLiBZb3UgYWdyZWUgdGhhdCBpdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIG1vbml0b3IgY2hhbmdlcyB0byBvdXIgc2l0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDQgLSBNT0RJRklDQVRJT05TIFRPIFRIRSBTRVJWSUNFIEFORCBQUklDRVM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblByaWNlcyBmb3Igb3VyIHByb2R1Y3RzIGFyZSBzdWJqZWN0IHRvIGNoYW5nZSB3aXRob3V0IG5vdGljZS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgYXQgYW55IHRpbWUgdG8gbW9kaWZ5IG9yIGRpc2NvbnRpbnVlIHRoZSBTZXJ2aWNlIChvciBhbnkgcGFydCBvciBjb250ZW50IHRoZXJlb2YpIHdpdGhvdXQgbm90aWNlIGF0IGFueSB0aW1lLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBzaGFsbCBub3QgYmUgbGlhYmxlIHRvIHlvdSBvciB0byBhbnkgdGhpcmQtcGFydHkgZm9yIGFueSBtb2RpZmljYXRpb24sIHByaWNlIGNoYW5nZSwgc3VzcGVuc2lvbiBvciBkaXNjb250aW51YW5jZSBvZiB0aGUgU2VydmljZS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDUgLSBQUk9EVUNUUyBPUiBTRVJWSUNFUyAoaWYgYXBwbGljYWJsZSk8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbkNlcnRhaW4gcHJvZHVjdHMgb3Igc2VydmljZXMgbWF5IGJlIGF2YWlsYWJsZSBleGNsdXNpdmVseSBvbmxpbmUgdGhyb3VnaCB0aGUgd2Vic2l0ZS4gVGhlc2UgcHJvZHVjdHMgb3Igc2VydmljZXMgbWF5IGhhdmUgbGltaXRlZCBxdWFudGl0aWVzIGFuZCBhcmUgc3ViamVjdCB0byByZXR1cm4gb3IgZXhjaGFuZ2Ugb25seSBhY2NvcmRpbmcgdG8gb3VyIFJldHVybiBQb2xpY3kuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIGhhdmUgbWFkZSBldmVyeSBlZmZvcnQgdG8gZGlzcGxheSBhcyBhY2N1cmF0ZWx5IGFzIHBvc3NpYmxlIHRoZSBjb2xvcnMgYW5kIGltYWdlcyBvZiBvdXIgcHJvZHVjdHMgdGhhdCBhcHBlYXIgYXQgdGhlIHN0b3JlLiBXZSBjYW5ub3QgZ3VhcmFudGVlIHRoYXQgeW91ciBjb21wdXRlciBtb25pdG9yJ3MgZGlzcGxheSBvZiBhbnkgY29sb3Igd2lsbCBiZSBhY2N1cmF0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgcmVzZXJ2ZSB0aGUgcmlnaHQsIGJ1dCBhcmUgbm90IG9ibGlnYXRlZCwgdG8gbGltaXQgdGhlIHNhbGVzIG9mIG91ciBwcm9kdWN0cyBvciBTZXJ2aWNlcyB0byBhbnkgcGVyc29uLCBnZW9ncmFwaGljIHJlZ2lvbiBvciBqdXJpc2RpY3Rpb24uIFdlIG1heSBleGVyY2lzZSB0aGlzIHJpZ2h0IG9uIGEgY2FzZS1ieS1jYXNlIGJhc2lzLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBsaW1pdCB0aGUgcXVhbnRpdGllcyBvZiBhbnkgcHJvZHVjdHMgb3Igc2VydmljZXMgdGhhdCB3ZSBvZmZlci4gQWxsIGRlc2NyaXB0aW9ucyBvZiBwcm9kdWN0cyBvciBwcm9kdWN0IHByaWNpbmcgYXJlIHN1YmplY3QgdG8gY2hhbmdlIGF0IGFueXRpbWUgd2l0aG91dCBub3RpY2UsIGF0IHRoZSBzb2xlIGRpc2NyZXRpb24gb2YgdXMuIFdlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIGRpc2NvbnRpbnVlIGFueSBwcm9kdWN0IGF0IGFueSB0aW1lLiBBbnkgb2ZmZXIgZm9yIGFueSBwcm9kdWN0IG9yIHNlcnZpY2UgbWFkZSBvbiB0aGlzIHNpdGUgaXMgdm9pZCB3aGVyZSBwcm9oaWJpdGVkLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBkbyBub3Qgd2FycmFudCB0aGF0IHRoZSBxdWFsaXR5IG9mIGFueSBwcm9kdWN0cywgc2VydmljZXMsIGluZm9ybWF0aW9uLCBvciBvdGhlciBtYXRlcmlhbCBwdXJjaGFzZWQgb3Igb2J0YWluZWQgYnkgeW91IHdpbGwgbWVldCB5b3VyIGV4cGVjdGF0aW9ucywgb3IgdGhhdCBhbnkgZXJyb3JzIGluIHRoZSBTZXJ2aWNlIHdpbGwgYmUgY29ycmVjdGVkLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gNiAtIEFDQ1VSQUNZIE9GIEJJTExJTkcgQU5EIEFDQ09VTlQgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0IHRvIHJlZnVzZSBhbnkgb3JkZXIgeW91IHBsYWNlIHdpdGggdXMuIFdlIG1heSwgaW4gb3VyIHNvbGUgZGlzY3JldGlvbiwgbGltaXQgb3IgY2FuY2VsIHF1YW50aXRpZXMgcHVyY2hhc2VkIHBlciBwZXJzb24sIHBlciBob3VzZWhvbGQgb3IgcGVyIG9yZGVyLiBUaGVzZSByZXN0cmljdGlvbnMgbWF5IGluY2x1ZGUgb3JkZXJzIHBsYWNlZCBieSBvciB1bmRlciB0aGUgc2FtZSBjdXN0b21lciBhY2NvdW50LCB0aGUgc2FtZSBjcmVkaXQgY2FyZCwgYW5kL29yIG9yZGVycyB0aGF0IHVzZSB0aGUgc2FtZSBiaWxsaW5nIGFuZC9vciBzaGlwcGluZyBhZGRyZXNzLiBJbiB0aGUgZXZlbnQgdGhhdCB3ZSBtYWtlIGEgY2hhbmdlIHRvIG9yIGNhbmNlbCBhbiBvcmRlciwgd2UgbWF5IGF0dGVtcHQgdG8gbm90aWZ5IHlvdSBieSBjb250YWN0aW5nIHRoZSBlLW1haWwgYW5kL29yIGJpbGxpbmcgYWRkcmVzcy9waG9uZSBudW1iZXIgcHJvdmlkZWQgYXQgdGhlIHRpbWUgdGhlIG9yZGVyIHdhcyBtYWRlLiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBsaW1pdCBvciBwcm9oaWJpdCBvcmRlcnMgdGhhdCwgaW4gb3VyIHNvbGUganVkZ21lbnQsIGFwcGVhciB0byBiZSBwbGFjZWQgYnkgZGVhbGVycywgcmVzZWxsZXJzIG9yIGRpc3RyaWJ1dG9ycy48YnIvPlxcclxcbjxici8+XFxyXFxuWW91IGFncmVlIHRvIHByb3ZpZGUgY3VycmVudCwgY29tcGxldGUgYW5kIGFjY3VyYXRlIHB1cmNoYXNlIGFuZCBhY2NvdW50IGluZm9ybWF0aW9uIGZvciBhbGwgcHVyY2hhc2VzIG1hZGUgYXQgb3VyIHN0b3JlLiBZb3UgYWdyZWUgdG8gcHJvbXB0bHkgdXBkYXRlIHlvdXIgYWNjb3VudCBhbmQgb3RoZXIgaW5mb3JtYXRpb24sIGluY2x1ZGluZyB5b3VyIGVtYWlsIGFkZHJlc3MgYW5kIGNyZWRpdCBjYXJkIG51bWJlcnMgYW5kIGV4cGlyYXRpb24gZGF0ZXMsIHNvIHRoYXQgd2UgY2FuIGNvbXBsZXRlIHlvdXIgdHJhbnNhY3Rpb25zIGFuZCBjb250YWN0IHlvdSBhcyBuZWVkZWQuPGJyLz5cXHJcXG48YnIvPlxcclxcbkZvciBtb3JlIGRldGFpbCwgcGxlYXNlIHJldmlldyBvdXIgUmV0dXJucyBQb2xpY3kuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiA3IC0gT1BUSU9OQUwgVE9PTFM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbldlIG1heSBwcm92aWRlIHlvdSB3aXRoIGFjY2VzcyB0byB0aGlyZC1wYXJ0eSB0b29scyBvdmVyIHdoaWNoIHdlIG5laXRoZXIgbW9uaXRvciBub3IgaGF2ZSBhbnkgY29udHJvbCBub3IgaW5wdXQuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhY2tub3dsZWRnZSBhbmQgYWdyZWUgdGhhdCB3ZSBwcm92aWRlIGFjY2VzcyB0byBzdWNoIHRvb2xzIOKAnWFzIGlz4oCdIGFuZCDigJxhcyBhdmFpbGFibGXigJ0gd2l0aG91dCBhbnkgd2FycmFudGllcywgcmVwcmVzZW50YXRpb25zIG9yIGNvbmRpdGlvbnMgb2YgYW55IGtpbmQgYW5kIHdpdGhvdXQgYW55IGVuZG9yc2VtZW50LiBXZSBzaGFsbCBoYXZlIG5vIGxpYWJpbGl0eSB3aGF0c29ldmVyIGFyaXNpbmcgZnJvbSBvciByZWxhdGluZyB0byB5b3VyIHVzZSBvZiBvcHRpb25hbCB0aGlyZC1wYXJ0eSB0b29scy48YnIvPlxcclxcbjxici8+XFxyXFxuQW55IHVzZSBieSB5b3Ugb2Ygb3B0aW9uYWwgdG9vbHMgb2ZmZXJlZCB0aHJvdWdoIHRoZSBzaXRlIGlzIGVudGlyZWx5IGF0IHlvdXIgb3duIHJpc2sgYW5kIGRpc2NyZXRpb24gYW5kIHlvdSBzaG91bGQgZW5zdXJlIHRoYXQgeW91IGFyZSBmYW1pbGlhciB3aXRoIGFuZCBhcHByb3ZlIG9mIHRoZSB0ZXJtcyBvbiB3aGljaCB0b29scyBhcmUgcHJvdmlkZWQgYnkgdGhlIHJlbGV2YW50IHRoaXJkLXBhcnR5IHByb3ZpZGVyKHMpLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBtYXkgYWxzbywgaW4gdGhlIGZ1dHVyZSwgb2ZmZXIgbmV3IHNlcnZpY2VzIGFuZC9vciBmZWF0dXJlcyB0aHJvdWdoIHRoZSB3ZWJzaXRlIChpbmNsdWRpbmcsIHRoZSByZWxlYXNlIG9mIG5ldyB0b29scyBhbmQgcmVzb3VyY2VzKS4gU3VjaCBuZXcgZmVhdHVyZXMgYW5kL29yIHNlcnZpY2VzIHNoYWxsIGFsc28gYmUgc3ViamVjdCB0byB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gOCAtIFRISVJELVBBUlRZIExJTktTPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5DZXJ0YWluIGNvbnRlbnQsIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyBhdmFpbGFibGUgdmlhIG91ciBTZXJ2aWNlIG1heSBpbmNsdWRlIG1hdGVyaWFscyBmcm9tIHRoaXJkLXBhcnRpZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcblRoaXJkLXBhcnR5IGxpbmtzIG9uIHRoaXMgc2l0ZSBtYXkgZGlyZWN0IHlvdSB0byB0aGlyZC1wYXJ0eSB3ZWJzaXRlcyB0aGF0IGFyZSBub3QgYWZmaWxpYXRlZCB3aXRoIHVzLiBXZSBhcmUgbm90IHJlc3BvbnNpYmxlIGZvciBleGFtaW5pbmcgb3IgZXZhbHVhdGluZyB0aGUgY29udGVudCBvciBhY2N1cmFjeSBhbmQgd2UgZG8gbm90IHdhcnJhbnQgYW5kIHdpbGwgbm90IGhhdmUgYW55IGxpYWJpbGl0eSBvciByZXNwb25zaWJpbGl0eSBmb3IgYW55IHRoaXJkLXBhcnR5IG1hdGVyaWFscyBvciB3ZWJzaXRlcywgb3IgZm9yIGFueSBvdGhlciBtYXRlcmlhbHMsIHByb2R1Y3RzLCBvciBzZXJ2aWNlcyBvZiB0aGlyZC1wYXJ0aWVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG5XZSBhcmUgbm90IGxpYWJsZSBmb3IgYW55IGhhcm0gb3IgZGFtYWdlcyByZWxhdGVkIHRvIHRoZSBwdXJjaGFzZSBvciB1c2Ugb2YgZ29vZHMsIHNlcnZpY2VzLCByZXNvdXJjZXMsIGNvbnRlbnQsIG9yIGFueSBvdGhlciB0cmFuc2FjdGlvbnMgbWFkZSBpbiBjb25uZWN0aW9uIHdpdGggYW55IHRoaXJkLXBhcnR5IHdlYnNpdGVzLiBQbGVhc2UgcmV2aWV3IGNhcmVmdWxseSB0aGUgdGhpcmQtcGFydHkncyBwb2xpY2llcyBhbmQgcHJhY3RpY2VzIGFuZCBtYWtlIHN1cmUgeW91IHVuZGVyc3RhbmQgdGhlbSBiZWZvcmUgeW91IGVuZ2FnZSBpbiBhbnkgdHJhbnNhY3Rpb24uIENvbXBsYWludHMsIGNsYWltcywgY29uY2VybnMsIG9yIHF1ZXN0aW9ucyByZWdhcmRpbmcgdGhpcmQtcGFydHkgcHJvZHVjdHMgc2hvdWxkIGJlIGRpcmVjdGVkIHRvIHRoZSB0aGlyZC1wYXJ0eS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDkgLSBVU0VSIENPTU1FTlRTLCBGRUVEQkFDSyBBTkQgT1RIRVIgU1VCTUlTU0lPTlM8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbklmLCBhdCBvdXIgcmVxdWVzdCwgeW91IHNlbmQgY2VydGFpbiBzcGVjaWZpYyBzdWJtaXNzaW9ucyAoZm9yIGV4YW1wbGUgY29udGVzdCBlbnRyaWVzKSBvciB3aXRob3V0IGEgcmVxdWVzdCBmcm9tIHVzIHlvdSBzZW5kIGNyZWF0aXZlIGlkZWFzLCBzdWdnZXN0aW9ucywgcHJvcG9zYWxzLCBwbGFucywgb3Igb3RoZXIgbWF0ZXJpYWxzLCB3aGV0aGVyIG9ubGluZSwgYnkgZW1haWwsIGJ5IHBvc3RhbCBtYWlsLCBvciBvdGhlcndpc2UgKGNvbGxlY3RpdmVseSwgJ2NvbW1lbnRzJyksIHlvdSBhZ3JlZSB0aGF0IHdlIG1heSwgYXQgYW55IHRpbWUsIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGVkaXQsIGNvcHksIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHRyYW5zbGF0ZSBhbmQgb3RoZXJ3aXNlIHVzZSBpbiBhbnkgbWVkaXVtIGFueSBjb21tZW50cyB0aGF0IHlvdSBmb3J3YXJkIHRvIHVzLiBXZSBhcmUgYW5kIHNoYWxsIGJlIHVuZGVyIG5vIG9ibGlnYXRpb24gKDEpIHRvIG1haW50YWluIGFueSBjb21tZW50cyBpbiBjb25maWRlbmNlOyAoMikgdG8gcGF5IGNvbXBlbnNhdGlvbiBmb3IgYW55IGNvbW1lbnRzOyBvciAoMykgdG8gcmVzcG9uZCB0byBhbnkgY29tbWVudHMuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIG1heSwgYnV0IGhhdmUgbm8gb2JsaWdhdGlvbiB0bywgbW9uaXRvciwgZWRpdCBvciByZW1vdmUgY29udGVudCB0aGF0IHdlIGRldGVybWluZSBpbiBvdXIgc29sZSBkaXNjcmV0aW9uIGFyZSB1bmxhd2Z1bCwgb2ZmZW5zaXZlLCB0aHJlYXRlbmluZywgbGliZWxvdXMsIGRlZmFtYXRvcnksIHBvcm5vZ3JhcGhpYywgb2JzY2VuZSBvciBvdGhlcndpc2Ugb2JqZWN0aW9uYWJsZSBvciB2aW9sYXRlcyBhbnkgcGFydHnigJlzIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLjxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgYWdyZWUgdGhhdCB5b3VyIGNvbW1lbnRzIHdpbGwgbm90IHZpb2xhdGUgYW55IHJpZ2h0IG9mIGFueSB0aGlyZC1wYXJ0eSwgaW5jbHVkaW5nIGNvcHlyaWdodCwgdHJhZGVtYXJrLCBwcml2YWN5LCBwZXJzb25hbGl0eSBvciBvdGhlciBwZXJzb25hbCBvciBwcm9wcmlldGFyeSByaWdodC4gWW91IGZ1cnRoZXIgYWdyZWUgdGhhdCB5b3VyIGNvbW1lbnRzIHdpbGwgbm90IGNvbnRhaW4gbGliZWxvdXMgb3Igb3RoZXJ3aXNlIHVubGF3ZnVsLCBhYnVzaXZlIG9yIG9ic2NlbmUgbWF0ZXJpYWwsIG9yIGNvbnRhaW4gYW55IGNvbXB1dGVyIHZpcnVzIG9yIG90aGVyIG1hbHdhcmUgdGhhdCBjb3VsZCBpbiBhbnkgd2F5IGFmZmVjdCB0aGUgb3BlcmF0aW9uIG9mIHRoZSBTZXJ2aWNlIG9yIGFueSByZWxhdGVkIHdlYnNpdGUuIFlvdSBtYXkgbm90IHVzZSBhIGZhbHNlIGUtbWFpbCBhZGRyZXNzLCBwcmV0ZW5kIHRvIGJlIHNvbWVvbmUgb3RoZXIgdGhhbiB5b3Vyc2VsZiwgb3Igb3RoZXJ3aXNlIG1pc2xlYWQgdXMgb3IgdGhpcmQtcGFydGllcyBhcyB0byB0aGUgb3JpZ2luIG9mIGFueSBjb21tZW50cy4gWW91IGFyZSBzb2xlbHkgcmVzcG9uc2libGUgZm9yIGFueSBjb21tZW50cyB5b3UgbWFrZSBhbmQgdGhlaXIgYWNjdXJhY3kuIFdlIHRha2Ugbm8gcmVzcG9uc2liaWxpdHkgYW5kIGFzc3VtZSBubyBsaWFiaWxpdHkgZm9yIGFueSBjb21tZW50cyBwb3N0ZWQgYnkgeW91IG9yIGFueSB0aGlyZC1wYXJ0eS48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEwIC0gUEVSU09OQUwgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbllvdXIgc3VibWlzc2lvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiB0aHJvdWdoIHRoZSBzdG9yZSBpcyBnb3Zlcm5lZCBieSBvdXIgUHJpdmFjeSBQb2xpY3kuIFRvIHZpZXcgb3VyIFByaXZhY3kgUG9saWN5Ljxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTEgLSBFUlJPUlMsIElOQUNDVVJBQ0lFUyBBTkQgT01JU1NJT05TPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5PY2Nhc2lvbmFsbHkgdGhlcmUgbWF5IGJlIGluZm9ybWF0aW9uIG9uIG91ciBzaXRlIG9yIGluIHRoZSBTZXJ2aWNlIHRoYXQgY29udGFpbnMgdHlwb2dyYXBoaWNhbCBlcnJvcnMsIGluYWNjdXJhY2llcyBvciBvbWlzc2lvbnMgdGhhdCBtYXkgcmVsYXRlIHRvIHByb2R1Y3QgZGVzY3JpcHRpb25zLCBwcmljaW5nLCBwcm9tb3Rpb25zLCBvZmZlcnMsIHByb2R1Y3Qgc2hpcHBpbmcgY2hhcmdlcywgdHJhbnNpdCB0aW1lcyBhbmQgYXZhaWxhYmlsaXR5LiBXZSByZXNlcnZlIHRoZSByaWdodCB0byBjb3JyZWN0IGFueSBlcnJvcnMsIGluYWNjdXJhY2llcyBvciBvbWlzc2lvbnMsIGFuZCB0byBjaGFuZ2Ugb3IgdXBkYXRlIGluZm9ybWF0aW9uIG9yIGNhbmNlbCBvcmRlcnMgaWYgYW55IGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUgaXMgaW5hY2N1cmF0ZSBhdCBhbnkgdGltZSB3aXRob3V0IHByaW9yIG5vdGljZSAoaW5jbHVkaW5nIGFmdGVyIHlvdSBoYXZlIHN1Ym1pdHRlZCB5b3VyIG9yZGVyKS48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgdW5kZXJ0YWtlIG5vIG9ibGlnYXRpb24gdG8gdXBkYXRlLCBhbWVuZCBvciBjbGFyaWZ5IGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIHByaWNpbmcgaW5mb3JtYXRpb24sIGV4Y2VwdCBhcyByZXF1aXJlZCBieSBsYXcuIE5vIHNwZWNpZmllZCB1cGRhdGUgb3IgcmVmcmVzaCBkYXRlIGFwcGxpZWQgaW4gdGhlIFNlcnZpY2Ugb3Igb24gYW55IHJlbGF0ZWQgd2Vic2l0ZSwgc2hvdWxkIGJlIHRha2VuIHRvIGluZGljYXRlIHRoYXQgYWxsIGluZm9ybWF0aW9uIGluIHRoZSBTZXJ2aWNlIG9yIG9uIGFueSByZWxhdGVkIHdlYnNpdGUgaGFzIGJlZW4gbW9kaWZpZWQgb3IgdXBkYXRlZC48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEyIC0gUFJPSElCSVRFRCBVU0VTPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5JbiBhZGRpdGlvbiB0byBvdGhlciBwcm9oaWJpdGlvbnMgYXMgc2V0IGZvcnRoIGluIHRoZSBUZXJtcyBvZiBTZXJ2aWNlLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyB0aGUgc2l0ZSBvciBpdHMgY29udGVudDogKGEpIGZvciBhbnkgdW5sYXdmdWwgcHVycG9zZTsgKGIpIHRvIHNvbGljaXQgb3RoZXJzIHRvIHBlcmZvcm0gb3IgcGFydGljaXBhdGUgaW4gYW55IHVubGF3ZnVsIGFjdHM7IChjKSB0byB2aW9sYXRlIGFueSBpbnRlcm5hdGlvbmFsLCBmZWRlcmFsLCBwcm92aW5jaWFsIG9yIHN0YXRlIHJlZ3VsYXRpb25zLCBydWxlcywgbGF3cywgb3IgbG9jYWwgb3JkaW5hbmNlczsgKGQpIHRvIGluZnJpbmdlIHVwb24gb3IgdmlvbGF0ZSBvdXIgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvciB0aGUgaW50ZWxsZWN0dWFsIHByb3BlcnR5IHJpZ2h0cyBvZiBvdGhlcnM7IChlKSB0byBoYXJhc3MsIGFidXNlLCBpbnN1bHQsIGhhcm0sIGRlZmFtZSwgc2xhbmRlciwgZGlzcGFyYWdlLCBpbnRpbWlkYXRlLCBvciBkaXNjcmltaW5hdGUgYmFzZWQgb24gZ2VuZGVyLCBzZXh1YWwgb3JpZW50YXRpb24sIHJlbGlnaW9uLCBldGhuaWNpdHksIHJhY2UsIGFnZSwgbmF0aW9uYWwgb3JpZ2luLCBvciBkaXNhYmlsaXR5OyAoZikgdG8gc3VibWl0IGZhbHNlIG9yIG1pc2xlYWRpbmcgaW5mb3JtYXRpb247IChnKSB0byB1cGxvYWQgb3IgdHJhbnNtaXQgdmlydXNlcyBvciBhbnkgb3RoZXIgdHlwZSBvZiBtYWxpY2lvdXMgY29kZSB0aGF0IHdpbGwgb3IgbWF5IGJlIHVzZWQgaW4gYW55IHdheSB0aGF0IHdpbGwgYWZmZWN0IHRoZSBmdW5jdGlvbmFsaXR5IG9yIG9wZXJhdGlvbiBvZiB0aGUgU2VydmljZSBvciBvZiBhbnkgcmVsYXRlZCB3ZWJzaXRlLCBvdGhlciB3ZWJzaXRlcywgb3IgdGhlIEludGVybmV0OyAoaCkgdG8gY29sbGVjdCBvciB0cmFjayB0aGUgcGVyc29uYWwgaW5mb3JtYXRpb24gb2Ygb3RoZXJzOyAoaSkgdG8gc3BhbSwgcGhpc2gsIHBoYXJtLCBwcmV0ZXh0LCBzcGlkZXIsIGNyYXdsLCBvciBzY3JhcGU7IChqKSBmb3IgYW55IG9ic2NlbmUgb3IgaW1tb3JhbCBwdXJwb3NlOyBvciAoaykgdG8gaW50ZXJmZXJlIHdpdGggb3IgY2lyY3VtdmVudCB0aGUgc2VjdXJpdHkgZmVhdHVyZXMgb2YgdGhlIFNlcnZpY2Ugb3IgYW55IHJlbGF0ZWQgd2Vic2l0ZSwgb3RoZXIgd2Vic2l0ZXMsIG9yIHRoZSBJbnRlcm5ldC4gV2UgcmVzZXJ2ZSB0aGUgcmlnaHQgdG8gdGVybWluYXRlIHlvdXIgdXNlIG9mIHRoZSBTZXJ2aWNlIG9yIGFueSByZWxhdGVkIHdlYnNpdGUgZm9yIHZpb2xhdGluZyBhbnkgb2YgdGhlIHByb2hpYml0ZWQgdXNlcy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDEzIC0gRElTQ0xBSU1FUiBPRiBXQVJSQU5USUVTOyBMSU1JVEFUSU9OIE9GIExJQUJJTElUWTwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuV2UgZG8gbm90IGd1YXJhbnRlZSwgcmVwcmVzZW50IG9yIHdhcnJhbnQgdGhhdCB5b3VyIHVzZSBvZiBvdXIgc2VydmljZSB3aWxsIGJlIHVuaW50ZXJydXB0ZWQsIHRpbWVseSwgc2VjdXJlIG9yIGVycm9yLWZyZWUuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIGRvIG5vdCB3YXJyYW50IHRoYXQgdGhlIHJlc3VsdHMgdGhhdCBtYXkgYmUgb2J0YWluZWQgZnJvbSB0aGUgdXNlIG9mIHRoZSBzZXJ2aWNlIHdpbGwgYmUgYWNjdXJhdGUgb3IgcmVsaWFibGUuPGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBhZ3JlZSB0aGF0IGZyb20gdGltZSB0byB0aW1lIHdlIG1heSByZW1vdmUgdGhlIHNlcnZpY2UgZm9yIGluZGVmaW5pdGUgcGVyaW9kcyBvZiB0aW1lIG9yIGNhbmNlbCB0aGUgc2VydmljZSBhdCBhbnkgdGltZSwgd2l0aG91dCBub3RpY2UgdG8geW91Ljxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgZXhwcmVzc2x5IGFncmVlIHRoYXQgeW91ciB1c2Ugb2YsIG9yIGluYWJpbGl0eSB0byB1c2UsIHRoZSBzZXJ2aWNlIGlzIGF0IHlvdXIgc29sZSByaXNrLiBUaGUgc2VydmljZSBhbmQgYWxsIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcyBkZWxpdmVyZWQgdG8geW91IHRocm91Z2ggdGhlIHNlcnZpY2UgYXJlIChleGNlcHQgYXMgZXhwcmVzc2x5IHN0YXRlZCBieSB1cykgcHJvdmlkZWQgJ2FzIGlzJyBhbmQgJ2FzIGF2YWlsYWJsZScgZm9yIHlvdXIgdXNlLCB3aXRob3V0IGFueSByZXByZXNlbnRhdGlvbiwgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIGFueSBraW5kLCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLCBpbmNsdWRpbmcgYWxsIGltcGxpZWQgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgbWVyY2hhbnRhYmxlIHF1YWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhciBwdXJwb3NlLCBkdXJhYmlsaXR5LCB0aXRsZSwgYW5kIG5vbi1pbmZyaW5nZW1lbnQuPGJyLz5cXHJcXG48YnIvPlxcclxcbkluIG5vIGNhc2Ugc2hhbGwgVGhlIFBpeGVsYXRlZCBQbGFuZXQsIG91ciBkaXJlY3RvcnMsIG9mZmljZXJzLCBlbXBsb3llZXMsIGFmZmlsaWF0ZXMsIGFnZW50cywgY29udHJhY3RvcnMsIGludGVybnMsIHN1cHBsaWVycywgc2VydmljZSBwcm92aWRlcnMgb3IgbGljZW5zb3JzIGJlIGxpYWJsZSBmb3IgYW55IGluanVyeSwgbG9zcywgY2xhaW0sIG9yIGFueSBkaXJlY3QsIGluZGlyZWN0LCBpbmNpZGVudGFsLCBwdW5pdGl2ZSwgc3BlY2lhbCwgb3IgY29uc2VxdWVudGlhbCBkYW1hZ2VzIG9mIGFueSBraW5kLCBpbmNsdWRpbmcsIHdpdGhvdXQgbGltaXRhdGlvbiBsb3N0IHByb2ZpdHMsIGxvc3QgcmV2ZW51ZSwgbG9zdCBzYXZpbmdzLCBsb3NzIG9mIGRhdGEsIHJlcGxhY2VtZW50IGNvc3RzLCBvciBhbnkgc2ltaWxhciBkYW1hZ2VzLCB3aGV0aGVyIGJhc2VkIGluIGNvbnRyYWN0LCB0b3J0IChpbmNsdWRpbmcgbmVnbGlnZW5jZSksIHN0cmljdCBsaWFiaWxpdHkgb3Igb3RoZXJ3aXNlLCBhcmlzaW5nIGZyb20geW91ciB1c2Ugb2YgYW55IG9mIHRoZSBzZXJ2aWNlIG9yIGFueSBwcm9kdWN0cyBwcm9jdXJlZCB1c2luZyB0aGUgc2VydmljZSwgb3IgZm9yIGFueSBvdGhlciBjbGFpbSByZWxhdGVkIGluIGFueSB3YXkgdG8geW91ciB1c2Ugb2YgdGhlIHNlcnZpY2Ugb3IgYW55IHByb2R1Y3QsIGluY2x1ZGluZywgYnV0IG5vdCBsaW1pdGVkIHRvLCBhbnkgZXJyb3JzIG9yIG9taXNzaW9ucyBpbiBhbnkgY29udGVudCwgb3IgYW55IGxvc3Mgb3IgZGFtYWdlIG9mIGFueSBraW5kIGluY3VycmVkIGFzIGEgcmVzdWx0IG9mIHRoZSB1c2Ugb2YgdGhlIHNlcnZpY2Ugb3IgYW55IGNvbnRlbnQgKG9yIHByb2R1Y3QpIHBvc3RlZCwgdHJhbnNtaXR0ZWQsIG9yIG90aGVyd2lzZSBtYWRlIGF2YWlsYWJsZSB2aWEgdGhlIHNlcnZpY2UsIGV2ZW4gaWYgYWR2aXNlZCBvZiB0aGVpciBwb3NzaWJpbGl0eS4gQmVjYXVzZSBzb21lIHN0YXRlcyBvciBqdXJpc2RpY3Rpb25zIGRvIG5vdCBhbGxvdyB0aGUgZXhjbHVzaW9uIG9yIHRoZSBsaW1pdGF0aW9uIG9mIGxpYWJpbGl0eSBmb3IgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIGluIHN1Y2ggc3RhdGVzIG9yIGp1cmlzZGljdGlvbnMsIG91ciBsaWFiaWxpdHkgc2hhbGwgYmUgbGltaXRlZCB0byB0aGUgbWF4aW11bSBleHRlbnQgcGVybWl0dGVkIGJ5IGxhdy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDE0IC0gSU5ERU1OSUZJQ0FUSU9OPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5Zb3UgYWdyZWUgdG8gaW5kZW1uaWZ5LCBkZWZlbmQgYW5kIGhvbGQgaGFybWxlc3MgVGhlIFBpeGVsYXRlZCBQbGFuZXQgYW5kIG91ciBwYXJlbnQsIHN1YnNpZGlhcmllcywgYWZmaWxpYXRlcywgcGFydG5lcnMsIG9mZmljZXJzLCBkaXJlY3RvcnMsIGFnZW50cywgY29udHJhY3RvcnMsIGxpY2Vuc29ycywgc2VydmljZSBwcm92aWRlcnMsIHN1YmNvbnRyYWN0b3JzLCBzdXBwbGllcnMsIGludGVybnMgYW5kIGVtcGxveWVlcywgaGFybWxlc3MgZnJvbSBhbnkgY2xhaW0gb3IgZGVtYW5kLCBpbmNsdWRpbmcgcmVhc29uYWJsZSBhdHRvcm5leXPigJkgZmVlcywgbWFkZSBieSBhbnkgdGhpcmQtcGFydHkgZHVlIHRvIG9yIGFyaXNpbmcgb3V0IG9mIHlvdXIgYnJlYWNoIG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2Ugb3IgdGhlIGRvY3VtZW50cyB0aGV5IGluY29ycG9yYXRlIGJ5IHJlZmVyZW5jZSwgb3IgeW91ciB2aW9sYXRpb24gb2YgYW55IGxhdyBvciB0aGUgcmlnaHRzIG9mIGEgdGhpcmQtcGFydHkuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAxNSAtIFNFVkVSQUJJTElUWTwvYj48YnIvPlxcclxcbjxici8+XFxyXFxuSW4gdGhlIGV2ZW50IHRoYXQgYW55IHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGlzIGRldGVybWluZWQgdG8gYmUgdW5sYXdmdWwsIHZvaWQgb3IgdW5lbmZvcmNlYWJsZSwgc3VjaCBwcm92aXNpb24gc2hhbGwgbm9uZXRoZWxlc3MgYmUgZW5mb3JjZWFibGUgdG8gdGhlIGZ1bGxlc3QgZXh0ZW50IHBlcm1pdHRlZCBieSBhcHBsaWNhYmxlIGxhdywgYW5kIHRoZSB1bmVuZm9yY2VhYmxlIHBvcnRpb24gc2hhbGwgYmUgZGVlbWVkIHRvIGJlIHNldmVyZWQgZnJvbSB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLCBzdWNoIGRldGVybWluYXRpb24gc2hhbGwgbm90IGFmZmVjdCB0aGUgdmFsaWRpdHkgYW5kIGVuZm9yY2VhYmlsaXR5IG9mIGFueSBvdGhlciByZW1haW5pbmcgcHJvdmlzaW9ucy48YnIvPlxcclxcbjxici8+XFxyXFxuPGJyLz5cXHJcXG48Yj5TRUNUSU9OIDE2IC0gVEVSTUlOQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblRoZSBvYmxpZ2F0aW9ucyBhbmQgbGlhYmlsaXRpZXMgb2YgdGhlIHBhcnRpZXMgaW5jdXJyZWQgcHJpb3IgdG8gdGhlIHRlcm1pbmF0aW9uIGRhdGUgc2hhbGwgc3Vydml2ZSB0aGUgdGVybWluYXRpb24gb2YgdGhpcyBhZ3JlZW1lbnQgZm9yIGFsbCBwdXJwb3Nlcy48YnIvPlxcclxcbjxici8+XFxyXFxuVGhlc2UgVGVybXMgb2YgU2VydmljZSBhcmUgZWZmZWN0aXZlIHVubGVzcyBhbmQgdW50aWwgdGVybWluYXRlZCBieSBlaXRoZXIgeW91IG9yIHVzLiBZb3UgbWF5IHRlcm1pbmF0ZSB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGF0IGFueSB0aW1lIGJ5IG5vdGlmeWluZyB1cyB0aGF0IHlvdSBubyBsb25nZXIgd2lzaCB0byB1c2Ugb3VyIFNlcnZpY2VzLCBvciB3aGVuIHlvdSBjZWFzZSB1c2luZyBvdXIgc2l0ZS48YnIvPlxcclxcbjxici8+XFxyXFxuSWYgaW4gb3VyIHNvbGUganVkZ21lbnQgeW91IGZhaWwsIG9yIHdlIHN1c3BlY3QgdGhhdCB5b3UgaGF2ZSBmYWlsZWQsIHRvIGNvbXBseSB3aXRoIGFueSB0ZXJtIG9yIHByb3Zpc2lvbiBvZiB0aGVzZSBUZXJtcyBvZiBTZXJ2aWNlLCB3ZSBhbHNvIG1heSB0ZXJtaW5hdGUgdGhpcyBhZ3JlZW1lbnQgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UgYW5kIHlvdSB3aWxsIHJlbWFpbiBsaWFibGUgZm9yIGFsbCBhbW91bnRzIGR1ZSB1cCB0byBhbmQgaW5jbHVkaW5nIHRoZSBkYXRlIG9mIHRlcm1pbmF0aW9uOyBhbmQvb3IgYWNjb3JkaW5nbHkgbWF5IGRlbnkgeW91IGFjY2VzcyB0byBvdXIgU2VydmljZXMgKG9yIGFueSBwYXJ0IHRoZXJlb2YpLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTcgLSBFTlRJUkUgQUdSRUVNRU5UPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGUgZmFpbHVyZSBvZiB1cyB0byBleGVyY2lzZSBvciBlbmZvcmNlIGFueSByaWdodCBvciBwcm92aXNpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBzaGFsbCBub3QgY29uc3RpdHV0ZSBhIHdhaXZlciBvZiBzdWNoIHJpZ2h0IG9yIHByb3Zpc2lvbi48YnIvPlxcclxcbjxici8+XFxyXFxuVGhlc2UgVGVybXMgb2YgU2VydmljZSBhbmQgYW55IHBvbGljaWVzIG9yIG9wZXJhdGluZyBydWxlcyBwb3N0ZWQgYnkgdXMgb24gdGhpcyBzaXRlIG9yIGluIHJlc3BlY3QgdG8gVGhlIFNlcnZpY2UgY29uc3RpdHV0ZXMgdGhlIGVudGlyZSBhZ3JlZW1lbnQgYW5kIHVuZGVyc3RhbmRpbmcgYmV0d2VlbiB5b3UgYW5kIHVzIGFuZCBnb3Zlcm4geW91ciB1c2Ugb2YgdGhlIFNlcnZpY2UsIHN1cGVyc2VkaW5nIGFueSBwcmlvciBvciBjb250ZW1wb3JhbmVvdXMgYWdyZWVtZW50cywgY29tbXVuaWNhdGlvbnMgYW5kIHByb3Bvc2Fscywgd2hldGhlciBvcmFsIG9yIHdyaXR0ZW4sIGJldHdlZW4geW91IGFuZCB1cyAoaW5jbHVkaW5nLCBidXQgbm90IGxpbWl0ZWQgdG8sIGFueSBwcmlvciB2ZXJzaW9ucyBvZiB0aGUgVGVybXMgb2YgU2VydmljZSkuPGJyLz5cXHJcXG48YnIvPlxcclxcbkFueSBhbWJpZ3VpdGllcyBpbiB0aGUgaW50ZXJwcmV0YXRpb24gb2YgdGhlc2UgVGVybXMgb2YgU2VydmljZSBzaGFsbCBub3QgYmUgY29uc3RydWVkIGFnYWluc3QgdGhlIGRyYWZ0aW5nIHBhcnR5Ljxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTggLSBHT1ZFUk5JTkcgTEFXPC9iPjxici8+XFxyXFxuPGJyLz5cXHJcXG5UaGVzZSBUZXJtcyBvZiBTZXJ2aWNlIGFuZCBhbnkgc2VwYXJhdGUgYWdyZWVtZW50cyB3aGVyZWJ5IHdlIHByb3ZpZGUgeW91IFNlcnZpY2VzIHNoYWxsIGJlIGdvdmVybmVkIGJ5IGFuZCBjb25zdHJ1ZWQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBsYXdzIG9mIDI1MTUgNHRoIEF2ZSwgU2VhdHRsZSwgV0EsIDk4MTIxLCBVbml0ZWQgU3RhdGVzLjxici8+XFxyXFxuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxiPlNFQ1RJT04gMTkgLSBDSEFOR0VTIFRPIFRFUk1TIE9GIFNFUlZJQ0U8L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcbllvdSBjYW4gcmV2aWV3IHRoZSBtb3N0IGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgVGVybXMgb2YgU2VydmljZSBhdCBhbnkgdGltZSBhdCB0aGlzIHBhZ2UuPGJyLz5cXHJcXG48YnIvPlxcclxcbldlIHJlc2VydmUgdGhlIHJpZ2h0LCBhdCBvdXIgc29sZSBkaXNjcmV0aW9uLCB0byB1cGRhdGUsIGNoYW5nZSBvciByZXBsYWNlIGFueSBwYXJ0IG9mIHRoZXNlIFRlcm1zIG9mIFNlcnZpY2UgYnkgcG9zdGluZyB1cGRhdGVzIGFuZCBjaGFuZ2VzIHRvIG91ciB3ZWJzaXRlLiBJdCBpcyB5b3VyIHJlc3BvbnNpYmlsaXR5IHRvIGNoZWNrIG91ciB3ZWJzaXRlIHBlcmlvZGljYWxseSBmb3IgY2hhbmdlcy4gWW91ciBjb250aW51ZWQgdXNlIG9mIG9yIGFjY2VzcyB0byBvdXIgd2Vic2l0ZSBvciB0aGUgU2VydmljZSBmb2xsb3dpbmcgdGhlIHBvc3Rpbmcgb2YgYW55IGNoYW5nZXMgdG8gdGhlc2UgVGVybXMgb2YgU2VydmljZSBjb25zdGl0dXRlcyBhY2NlcHRhbmNlIG9mIHRob3NlIGNoYW5nZXMuPGJyLz5cXHJcXG48YnIvPlxcclxcbjxici8+XFxyXFxuPGI+U0VDVElPTiAyMCAtIENPTlRBQ1QgSU5GT1JNQVRJT048L2I+PGJyLz5cXHJcXG48YnIvPlxcclxcblF1ZXN0aW9ucyBhYm91dCB0aGUgVGVybXMgb2YgU2VydmljZSBzaG91bGQgYmUgc2VudCB0byB1cyBhdCBoZWxsb0B0aGVwaXhlbGF0ZWRwbGFuZXQuY29tLjxici8+PGJyLz5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPG5hdmktYmFyPjwvbmF2aS1iYXI+XFxyXFxuXFxyXFxuPGRpdiBjbGFzcz1cXFwiaGVhZGVyLWltZ1xcXCI+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImRldGFpbC1pbWdcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKHdvcmtzaG9wRGV0YWlscy5pbWFnZUxpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIlxcclxcbiAgICAvPlxcclxcbjwvZGl2PlxcclxcblxcclxcbjxkaXYgY2xhc3M9XFxcIndzZC1uYW1lXFxcIj57e3dvcmtzaG9wRGV0YWlscy5uYW1lfX08L2Rpdj5cXHJcXG5cXHJcXG48ZGl2IGNsYXNzPVxcXCJkZXRhaWxzLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkZXRhaWwtdGFic1xcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLVRhYiBoZWFkaW5ncy0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRhYmxpbmtzXFxcIiAqbmdGb3I9XFxcImxldCB0YWIgb2YgdGFiczsgbGV0IGk9aW5kZXg7XFxcIiBbbmdDbGFzc109XFxcInsnYWN0aXZlJzogdGFiLnNob3dUYWJ9XFxcIiAoY2xpY2spPVxcXCJvcGVuVGFicyhpKVxcXCI+e3t0YWIubGFiZWx9fTwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1EZXNjcmlwdGlvbiB0YWItLT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJ7e3RhYnNbMF0ubGFiZWx9fVxcXCIgW2hpZGRlbl09XFxcIiF0YWJzWzBdLnNob3dUYWJcXFwiIGNsYXNzPVxcXCJ0YWJjb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgzPnt7dGFic1swXS5sYWJlbH19PC9oMz5cXHJcXG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF09XFxcIndvcmtzaG9wRGV0YWlscy5kZXNjcmlwdGlvblxcXCI+PC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1HYWxsZXJ5IHRhYi0tPlxcclxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInt7dGFic1sxXS5sYWJlbH19XFxcIiBbaGlkZGVuXT1cXFwiIXRhYnNbMV0uc2hvd1RhYlxcXCIgY2xhc3M9XFxcInRhYmNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aDM+e3t0YWJzWzFdLmxhYmVsfX08L2gzPlxcclxcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJnYWxsZXJ5LWltYWdlIGhvdmVyLXNoYWRvdyBjdXJzb3JcXFwiICpuZ0Zvcj1cXFwibGV0IGltYWdlIG9mIGltYWdlc0xpbms7bGV0IGkgPSBpbmRleFxcXCIgW3NyY109XFxcImltYWdlLmltYWdlTGlua1xcXCIgYWx0PVxcXCJ3b3Jrc2hvcCBpbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XFxcIm9wZW5Nb2RhbChpKzEpXFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS1QaG90b2dyYXBoZXIgdGFiLS0+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwie3t0YWJzWzJdLmxhYmVsfX1cXFwiIFtoaWRkZW5dPVxcXCIhdGFic1syXS5zaG93VGFiXFxcIiBjbGFzcz1cXFwidGFiY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMz57e3RhYnNbMl0ubGFiZWx9fTwvaDM+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBob3RvZ3JhcGhlci1pbmZvcm1hdGlvblxcXCIgKm5nRm9yPVxcXCJsZXQgcGhvdG9ncmFwaGVyIG9mIHdvcmtzaG9wRGV0YWlscy5waG90b2dyYXBoZXJzO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9maWxlLXBob3RvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVxcXCJwcm9maWxlLWltZ1xcXCIgW3NyY109XFxcInRoaXMud29ya3Nob3BSZXBvc2l0b3J5Lmdsb2JhbENvbnN0YW50cy5yZXNvbHZlSW1hZ2VVcmwocGhvdG9ncmFwaGVyLnByb2ZpbGVQaG90b0xpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxoND5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5maXJzdE5hbWV9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3Bob3RvZ3JhcGhlci5sYXN0TmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRldGFpbC1sb2NhdGlvblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3twaG90b2dyYXBoZXIubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndlYnNpdGUtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwie3twaG90b2dyYXBoZXI/LndlYnNpdGVMaW5rfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtZXh0ZXJuYWwtbGlua1xcXCI+PC9pPiBXZWJzaXRlPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXT1cXFwicGhvdG9ncmFwaGVyLm1vcmVJbmZvcm1hdGlvblxcXCI+PC9wPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPCEtLVdvcmtzaG9wIGhpZ2hsaWdodHMtLT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImhpZ2hsaWdodHNcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIndzZC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPldvcmtzaG9wIExpbms8L2g0PlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJ7e3dvcmtzaG9wRGV0YWlscy5saW5rfX1cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48aSBjbGFzcz1cXFwiZmEgZmEtbGlua1xcXCI+PC9pPiBXb3Jrc2hvcCBsaW5rXFxyXFxuICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkxvY2F0aW9uPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLW1hcC1tYXJrZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4+e3t3b3Jrc2hvcERldGFpbHMubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLXByaWNlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPlByaWNlIFJhbmdlPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVzZFxcXCI+PC9pPiA8c3BhbiAqbmdJZj1cXFwid29ya3Nob3BEZXRhaWxzLm1pbkNvc3QgIT09IHdvcmtzaG9wRGV0YWlscy5tYXhDb3N0XFxcIj57e3dvcmtzaG9wRGV0YWlscy5taW5Db3N0fX0gLSA8L3NwYW4+e3t3b3Jrc2hvcERldGFpbHMubWF4Q29zdH19XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwid3NkLWRhdGVzXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVxcXCJoaWdobGlnaHQtaGVhZGluZ3NcXFwiPkRhdGVzPC9oND5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZGF0ZXMtaW5mb3JtYXRpb25cXFwiICpuZ0Zvcj1cXFwibGV0IGRldGFpbCBvZiB3b3Jrc2hvcERldGFpbHMubXVsdGlXb3Jrc2hvcERldGFpbHM7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNhbGVuZGFyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3t0aGlzLmZvcm1hdERhdGUoZGV0YWlsLnN0YXJ0RGF0ZSl9fSAtIHt7dGhpcy5mb3JtYXREYXRlKGRldGFpbC5lbmREYXRlKX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8IS0tSW1hZ2UgZ2FsbGVyeSBtb2RhbC0tPlxcclxcbiAgICAgICAgPGRpdiBpZD1cXFwibXlNb2RhbFxcXCIgW25nQ2xhc3NdPVxcXCJ7J2hpZGUtbW9kYWwnOiBoaWRlTW9kYWx9XFxcIiBjbGFzcz1cXFwiaW1hZ2UtbW9kYWxcXFwiPlxcclxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjbG9zZSBjdXJzb3JcXFwiIChjbGljayk9XFxcImNsb3NlTW9kYWwoKVxcXCI+JnRpbWVzOzwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZS1tb2RhbC1jb250ZW50XFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XFxcImxldCBpbWFnZSBvZiBpbWFnZXNMaW5rO2xldCBpID0gaW5kZXhcXFwiIGNsYXNzPVxcXCJzbGlkZXNcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRlSW1hZ2UnOiBpbWFnZS5oaWRlSW1hZ2V9XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgW3NyY109XFxcImltYWdlLmltYWdlTGlua1xcXCIgY2xhc3M9XFxcIm1vZGFsLWltYWdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInByZXZcXFwiIChjbGljayk9XFxcInBsdXNTbGlkZXMoLTEpXFxcIj4mIzEwMDk0OzwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwibmV4dFxcXCIgKGNsaWNrKT1cXFwicGx1c1NsaWRlcygxKVxcXCI+JiMxMDA5NTs8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgIDxmb290ZXI+PC9mb290ZXI+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3AtZGV0YWlscy93b3Jrc2hvcC1kZXRhaWxzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZmlsdGVycy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1maWx0ZXJcXFwiPlxcclxcbiAgICAgICAgPGRyb3Bkb3duIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlQ2F0ZWdvcnlMaXN0KCRldmVudClcXFwiIFtkYXRhTW9kZWxdPVxcXCJjYXRlZ29yaWVzXFxcIj48L2Ryb3Bkb3duPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiYXV0b2NvbXBsZXRlLWZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8YXV0b2NvbXBsZXRlIChzZWxlY3Rpb25DaGFuZ2VkKT1cXFwidXBkYXRlTG9jYXRpb24oJGV2ZW50KVxcXCI+PC9hdXRvY29tcGxldGU+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkYXRlLXBpY2tlclxcXCI+XFxyXFxuICAgICAgICA8ZGF0ZS1waWNrZXIgKHNlbGVjdGVkRnJvbUNoYW5nZWQpPVxcXCJnZXRGcm9tRGF0ZSgkZXZlbnQpXFxcIiAoc2VsZWN0ZWRUb0NoYW5nZWQpPVxcXCJnZXRUb0RhdGUoJGV2ZW50KVxcXCI+PC9kYXRlLXBpY2tlcj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByaWNlLWZpbHRlclxcXCI+XFxyXFxuICAgICAgICA8aW5wdXQgI21pblByaWNlSW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHN0ZXA9XFxcIjEwMFxcXCIgcGxhY2Vob2xkZXI9XFxcIk1pbi4gcHJpY2VcXFwiIChibHVyKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiXFxyXFxuICAgICAgICAgICAgKG9uaW5wdXQpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCIgKG9uY2hhbmdlKT1cXFwidXBkYXRlTWluUHJpY2UobWluUHJpY2VJbnB1dC52YWx1ZSlcXFwiIChjaGFuZ2UpPVxcXCJ1cGRhdGVNaW5QcmljZShtaW5QcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICBbdmFsdWVdPVxcXCJtaW5QcmljZVZhbHVlXFxcIlxcclxcbiAgICAgICAgLz5cXHJcXG4gICAgICAgIDxpbnB1dCAjbWF4UHJpY2VJbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIG1pbj1cXFwiMFxcXCIgc3RlcD1cXFwiMTAwXFxcIiBwbGFjZWhvbGRlcj1cXFwiTWF4LiBwcmljZVxcXCIgKGJsdXIpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCJcXHJcXG4gICAgICAgICAgICAob25pbnB1dCk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIiAob25jaGFuZ2UpPVxcXCJ1cGRhdGVNYXhQcmljZShtYXhQcmljZUlucHV0LnZhbHVlKVxcXCIgKGNoYW5nZSk9XFxcInVwZGF0ZU1heFByaWNlKG1heFByaWNlSW5wdXQudmFsdWUpXFxcIlxcclxcbiAgICAgICAgICAgIFt2YWx1ZV09XFxcIm1heFByaWNlVmFsdWVcXFwiXFxyXFxuICAgICAgICAvPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ2V0LWxpc3QtYnRuXFxcIiAoY2xpY2spPVxcXCJ0b2dnbGVGaWx0ZXIoKVxcXCI+PHNwYW4+RmlsdGVyPC9zcGFuPiAgPGkgY2xhc3M9XFxcImZhIGZhLWZpbHRlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48L2J1dHRvbj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FwcC93b3Jrc2hvcC1maWx0ZXIvd29ya3Nob3AtZmlsdGVyLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwid29ya3Nob3AtbGlzdFxcXCI+XFxyXFxuICAgIDxkaXYgKm5nSWY9XFxcImFzeW5jRGF0YT8ubGVuZ3RoID4gMFxcXCI+XFxyXFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwiZW50aXR5XFxcIiAqbmdGb3I9XFxcImxldCBkYXRhIG9mIGFzeW5jRGF0YVxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgW2hyZWZdPVxcXCJjcmVhdGVXb3Jrc2hvcERldGFpbHNVcmwoZGF0YS53b3Jrc2hvcElkLCBkYXRhLm5hbWUpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5uZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBjbGFzcz1cXFwiaW1hZ2VcXFwiIFtkYXRhXT1cXFwidGhpcy5zYW5pdGl6ZVVybCh0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUltYWdlVXJsKGRhdGEuaW1hZ2VMaW5rKSlcXFwiIHR5cGU9XFxcImltYWdlL3BuZ1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwiaW1hZ2VcXFwiIFtzcmNdPVxcXCJ0aGlzLndvcmtzaG9wUmVwb3NpdG9yeS5nbG9iYWxDb25zdGFudHMucmVzb2x2ZUxvY2FsSW1hZ2VVcmwoZGF0YS5pbWFnZUxpbmspXFxcIiBhbHQ9XFxcIndvcmtzaG9wIGltYWdlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XFxcIm5hbWUgdHJ1bmNhdGVcXFwiIHRpdGxlPVxcXCJ7eyBkYXRhLm5hbWUgfX1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGRhdGEubmFtZSB9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxvY2F0aW9uXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWFwLW1hcmtlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e2RhdGEubG9jYXRpb25OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRhdGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGhpcy5mb3JtYXREYXRlKGRhdGEuc3RhcnREYXRlRmlyc3QpfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPi08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XFxcImRhdGEuc3RhcnREYXRlRmlyc3QgIT0gZGF0YS5lbmREYXRlRmlyc3RcXFwiPiB7e3RoaXMuZm9ybWF0RGF0ZShkYXRhLmVuZERhdGVGaXJzdCl9fSA8L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0ID09IGRhdGEubWF4Q29zdFxcXCI+e3tkYXRhLmNvc3RDdXJyZW5jeX19IHt7ZGF0YS5taW5Db3N0fX08L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByaWNlXFxcIiAqbmdJZj1cXFwiZGF0YS5taW5Db3N0IDwgZGF0YS5tYXhDb3N0XFxcIj57e2RhdGEuY29zdEN1cnJlbmN5fX0ge3tkYXRhLm1pbkNvc3R9fS17e2RhdGEubWF4Q29zdH19PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxkaXYgKm5nSWY9XFxcIml0ZW1zUGVyUGFnZSA+IDRcXFwiIGNsYXNzPVxcXCJ3cy1wYWdlc1xcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgKm5nSWY9XFxcInBhZ2VOdW1iZXJzXFxcIiBbbmdDbGFzc109XFxcInsnZGlzYWJsZWQnOiBhY3RpdmVQYWdlIDw9MSB9XFxcIiBbaHJlZl09XFxcImNyZWF0ZVBhZ2VMaW5rKGFjdGl2ZVBhZ2UtMSlcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGV2cm9uLWxlZnRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tbGVmdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT48c3Bhbj5QcmV2aW91czwvc3Bhbj48L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2UtbnVtYmVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2FjdGl2ZS1wYWdlJzogYWN0aXZlUGFnZSA9PSBwYWdlfVxcXCIgKm5nRm9yPVxcXCJsZXQgcGFnZSBvZiBwYWdlTnVtYmVycztcXFwiIFtocmVmXT1cXFwiY3JlYXRlUGFnZUxpbmsocGFnZSlcXFwiPnt7cGFnZX19PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdlLW51bWJlcnNcXFwiICpuZ0lmPVxcXCJwYWdlTnVtYmVyc1xcXCIgW25nQ2xhc3NdPVxcXCJ7J2Rpc2FibGVkJzogYWN0aXZlUGFnZSA9PSBwYWdlTnVtYmVycy5sZW5ndGggfVxcXCIgW2hyZWZdPVxcXCJjcmVhdGVQYWdlTGluayhhY3RpdmVQYWdlLTErMilcXFwiPjxzcGFuPk5leHQ8L3NwYW4+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNoZXZyb24td3JhcHBlclxcXCI+PGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWNoZXZyb24tcmlnaHRcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+PC9zcGFuPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwibm8tcmVzdWx0LW1zZ1xcXCIgKm5nSWY9XFxcImFzeW5jRGF0YT8ubGVuZ3RoID09IDBcXFwiPlxcclxcbiAgICAgICAgU29ycnksIHdlIGZvdW5kIDAgcmVzdWx0cy4gUGxlYXNlIHRyeSBkaWZmZXJlbnQgZmlsdGVycy5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvd29ya3Nob3BzLWxpc3Qvd29ya3Nob3BzLWxpc3QuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ3cy1jb250YWluZXJcXFwiPlxcclxcbiAgICA8bmF2aS1iYXIgW3Nob3dGaWx0ZXJzXT1cXFwidHJ1ZVxcXCIgKGZpbHRlcnNEcm9wZG93blRvZ2dsZSk9XFxcInRvZ2dsZUZpbHRlckRyb3Bkb3duKCRldmVudClcXFwiPjwvbmF2aS1iYXI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImZpbHRlcnNcXFwiIFtuZ0NsYXNzXT1cXFwieydoaWRlRmlsdGVyJzogaGlkZUZpbHRlcn1cXFwiIGlkPVxcXCJmaWx0ZXJzXFxcIj5cXHJcXG4gICAgICAgIDx3b3Jrc2hvcC1maWx0ZXIgKG1pblByaWNlRmlsdGVyQ2hhbmdlZCk9XFxcInNldE1pblByaWNlKCRldmVudClcXFwiIChtYXhQcmljZUZpbHRlckNoYW5nZWQpPVxcXCJzZXRNYXhQcmljZSgkZXZlbnQpXFxcIiAoZnJvbURhdGVDaGFuZ2VkKT1cXFwic2V0RnJvbURhdGUoJGV2ZW50KVxcXCJcXHJcXG4gICAgICAgICAgICAodG9EYXRlQ2hhbmdlZCk9XFxcInNldFRvRGF0ZSgkZXZlbnQpXFxcIiAobG9jYXRpb25GaWx0ZXJDaGFuZ2VkKT1cXFwic2V0TG9jYXRpb25JZExpc3QoJGV2ZW50KVxcXCIgKGNhdGVnb3J5RmlsdGVyQ2hhbmdlZCk9XFxcInNldENhdGVnb3J5TGlzdCgkZXZlbnQpXFxcIlxcclxcbiAgICAgICAgICAgIChhcHBseUZpbHRlcnMpPVxcXCJ0b2dnbGVGaWx0ZXIoJGV2ZW50KVxcXCI+PC93b3Jrc2hvcC1maWx0ZXI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibGlzdFxcXCI+XFxyXFxuICAgICAgICAgICAgPHdvcmtzaG9wcy1saXN0IFthY3RpdmVQYWdlXT1cXFwicGFnZU51bWJlclxcXCI+PC93b3Jrc2hvcHMtbGlzdD5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Zm9vdGVyPjwvZm9vdGVyPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL3dvcmtzaG9wcy93b3Jrc2hvcHMuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbXBpbGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29tcGlsZXJcIlxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2h0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9odHRwXCJcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLWV4cHJlc3MtZW5naW5lXCJcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIlxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2FycmF5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvYXJyYXlcIlxuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L2RhdGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9kYXRlXCJcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXBcIlxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9tYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L29iamVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9wYXJzZS1mbG9hdFwiXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcmVnZXhwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcmVnZXhwXCJcbi8vIG1vZHVsZSBpZCA9IDExOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N0cmluZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiXG4vLyBtb2R1bGUgaWQgPSAxMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3ltYm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3ltYm9sXCJcbi8vIG1vZHVsZSBpZCA9IDEyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImV4cHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5nMi1wYWdpbmF0aW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibmcyLXBhZ2luYXRpb25cIlxuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqc1wiXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9lbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29ic2VydmFibGUvZW1wdHlcIlxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIlxuLy8gbW9kdWxlIGlkID0gMTI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL2RvXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIlxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJ4anMvYWRkL29wZXJhdG9yL3RvUHJvbWlzZVwiXG4vLyBtb2R1bGUgaWQgPSAxMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIlxuLy8gbW9kdWxlIGlkID0gMTM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=