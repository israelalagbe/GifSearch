(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gif_detail_gif_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gif-detail/gif-detail.component */ "./src/app/gif-detail/gif-detail.component.ts");





var routes = [
    { path: 'gifs', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'gifs/:id', component: _gif_detail_gif_detail_component__WEBPACK_IMPORTED_MODULE_4__["GifDetailComponent"] },
    { path: '', redirectTo: '/gifs', pathMatch: 'full', },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gif-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-field/search-field.component */ "./src/app/search-field/search-field.component.ts");
/* harmony import */ var _results_list_results_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results-list/results-list.component */ "./src/app/results-list/results-list.component.ts");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/gif.service */ "./src/app/services/gif.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gif_detail_gif_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gif-detail/gif-detail.component */ "./src/app/gif-detail/gif-detail.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _search_field_search_field_component__WEBPACK_IMPORTED_MODULE_5__["SearchFieldComponent"],
                _results_list_results_list_component__WEBPACK_IMPORTED_MODULE_6__["ResultsListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _gif_detail_gif_detail_component__WEBPACK_IMPORTED_MODULE_12__["GifDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_services_gif_service__WEBPACK_IMPORTED_MODULE_7__["GifService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/gif-detail/gif-detail.component.html":
/*!******************************************************!*\
  !*** ./src/app/gif-detail/gif-detail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='gif|async;let gif'>\r\n    <h3>Title: {{gif.title}}</h3>\r\n    <h3>URL: {{gif.images.original.url}}</h3>\r\n    <img [src]=\"safeURL(gif.images.original.url)\" />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/gif-detail/gif-detail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/gif-detail/gif-detail.component.ts ***!
  \****************************************************/
/*! exports provided: GifDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifDetailComponent", function() { return GifDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gif.service */ "./src/app/services/gif.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");





var GifDetailComponent = /** @class */ (function () {
    function GifDetailComponent(gifService, route, sanitizer) {
        var _this = this;
        this.gifService = gifService;
        this.route = route;
        this.sanitizer = sanitizer;
        this.route.params.subscribe(function (res) {
            _this.gifId = res.id;
        });
    }
    GifDetailComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.gif = this.gifService.getGif(this.gifId);
                return [2 /*return*/];
            });
        });
    };
    GifDetailComponent.prototype.safeURL = function (oldURL) {
        return this.sanitizer.bypassSecurityTrustUrl(oldURL);
    };
    GifDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            // selector: 'app-root',
            template: __webpack_require__(/*! ./gif-detail.component.html */ "./src/app/gif-detail/gif-detail.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], GifDetailComponent);
    return GifDetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-field></app-search-field>\r\n<app-results-list></app-results-list>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gif.service */ "./src/app/services/gif.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(gifService) {
        this.gifService = gifService;
        this.name = 'Search Field';
        this.keyword = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.search = function (e) {
        e.preventDefault();
        this.gifService.searchGifs(this.keyword);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            // selector: 'app-root',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/results-list/results-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/results-list/results-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n    height: 250px;\r\n    background-color: silver;\r\n    border: 1px solid white;\r\n    position: relative;\r\n    padding: 0;\r\n}\r\n.item img{\r\n    width:100%;\r\n    height: 100%;\r\n    display: block;\r\n    box-shadow: 2px 2px 2px gray;\r\n}\r\n.item img:hover{\r\n    opacity: 0.7;\r\n\r\n}\r\n.item img:active{\r\n    opacity: 0.7;\r\n    box-shadow: 0px 0px 0px black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0cy1saXN0L3Jlc3VsdHMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMtbGlzdC9yZXN1bHRzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLml0ZW0gaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JheTtcclxufVxyXG4uaXRlbSBpbWc6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcblxyXG59XHJcbi5pdGVtIGltZzphY3RpdmV7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCBibGFjaztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/results-list/results-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/results-list/results-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <!-- Implement result list here -->\r\n\r\n    <div class=\"col-lg-4 col-md-4 col-sm-4 item\" *ngFor='let gif of gifs|async' (click)='open(gif)'>\r\n        <img [src]=\"safeURL(gif.images.original.url)\" />\r\n    </div>\r\n    <ng-template #elseTemplate>\r\n        Content displayed if expression returns false\r\n    </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/results-list/results-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/results-list/results-list.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsListComponent", function() { return ResultsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gif.service */ "./src/app/services/gif.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ResultsListComponent = /** @class */ (function () {
    function ResultsListComponent(gifService, sanitizer, router) {
        this.gifService = gifService;
        this.sanitizer = sanitizer;
        this.router = router;
    }
    ResultsListComponent.prototype.ngOnInit = function () {
        this.gifs = this.gifService.getGifs();
    };
    ResultsListComponent.prototype.safeURL = function (oldURL) {
        return this.sanitizer.bypassSecurityTrustUrl(oldURL);
    };
    ResultsListComponent.prototype.open = function (gif) {
        this.router.navigate(['gifs', gif.id]);
    };
    ResultsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results-list',
            template: __webpack_require__(/*! ./results-list.component.html */ "./src/app/results-list/results-list.component.html"),
            styles: [__webpack_require__(/*! ./results-list.component.css */ "./src/app/results-list/results-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResultsListComponent);
    return ResultsListComponent;
}());



/***/ }),

/***/ "./src/app/search-field/search-field.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-field/search-field.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1maWVsZC9zZWFyY2gtZmllbGQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search-field/search-field.component.html":
/*!**********************************************************!*\
  !*** ./src/app/search-field/search-field.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <form class=\"form-horizontal\">\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-10\">\r\n                    <input type=\"text\"\r\n                           name=\"giphy-search\"\r\n                           class=\"form-control\"\r\n                           placeholder=\"type your search here\"\r\n                           [(ngModel)]='keyword'\r\n                    />\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                    <button type=\"submit\" [disabled]='!keyword' class=\"btn btn-default pull-right\" (click)=\"search($event)\">Search</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/search-field/search-field.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-field/search-field.component.ts ***!
  \********************************************************/
/*! exports provided: SearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFieldComponent", function() { return SearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/gif.service */ "./src/app/services/gif.service.ts");



var SearchFieldComponent = /** @class */ (function () {
    function SearchFieldComponent(gifService) {
        this.gifService = gifService;
        this.name = 'Search Field';
        this.keyword = '';
    }
    SearchFieldComponent.prototype.ngOnInit = function () {
    };
    SearchFieldComponent.prototype.search = function (e) {
        e.preventDefault();
        this.gifService.searchGifs(this.keyword);
    };
    SearchFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-field',
            // selector: 'app-root',
            template: __webpack_require__(/*! ./search-field.component.html */ "./src/app/search-field/search-field.component.html"),
            styles: [__webpack_require__(/*! ./search-field.component.css */ "./src/app/search-field/search-field.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_gif_service__WEBPACK_IMPORTED_MODULE_2__["GifService"]])
    ], SearchFieldComponent);
    return SearchFieldComponent;
}());



/***/ }),

/***/ "./src/app/services/gif.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/gif.service.ts ***!
  \*****************************************/
/*! exports provided: GifService, GifServiceMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifService", function() { return GifService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifServiceMock", function() { return GifServiceMock; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock */ "./src/app/services/mock.js");








function gifsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case 'SET_GIFS':
            return action.gifs.slice();
        case 'GET_GIFS':
            return state;
        default:
            return state;
    }
}
var GifService = /** @class */ (function () {
    function GifService(http) {
        this.http = http;
        this.url = 'https://api.giphy.com/v1/gifs';
        this.apiKey = 'deokzgUjxm6QHQdp3H3aca1LSZcCpucc';
        this.store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(gifsReducer);
    }
    GifService.prototype.searchGifs = function (keyword) {
        var _this = this;
        return this.http.get(this.url + "/search?api_key=" + this.apiKey + "&q=" + keyword + "&limit=25&offset=0&rating=Y&lang=en")
            .subscribe(function (response) {
            _this.setGifs(response.data);
        });
    };
    GifService.prototype.setGifs = function (gifs) {
        this.store.dispatch({
            type: 'SET_GIFS',
            gifs: gifs
        });
    };
    GifService.prototype.getGifs = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.store.subscribe(function () {
                observer.next(_this.store.getState());
            });
        });
    };
    GifService.prototype.getGif = function (id) {
        var gif = this.store.getState().find(function (gif) { return gif.id === id; });
        if (gif) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(gif);
        }
        else {
            return this.http.get(this.url + "/" + id + "?api_key=" + this.apiKey + "&lang=en")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
                return response.data;
            }));
        }
    };
    GifService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], GifService);
    return GifService;
}());

var GifServiceMock = /** @class */ (function () {
    function GifServiceMock() {
        this.store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(gifsReducer);
    }
    GifServiceMock.prototype.searchGifs = function (keyword) {
        this.setGifs([
            _mock__WEBPACK_IMPORTED_MODULE_6__["default"]
        ]);
    };
    GifServiceMock.prototype.setGifs = function (gifs) {
        this.store.dispatch({
            type: 'SET_GIFS',
            gifs: gifs
        });
    };
    GifServiceMock.prototype.getGifs = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            _this.store.subscribe(function () {
                observer.next(_this.store.getState());
            });
        });
    };
    GifServiceMock.prototype.getGif = function (id) {
        var gif = this.store.getState().find(function (gif) { return gif.id === id; });
        if (gif) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(gif);
        }
    };
    GifServiceMock = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GifServiceMock);
    return GifServiceMock;
}());



/***/ }),

/***/ "./src/app/services/mock.js":
/*!**********************************!*\
  !*** ./src/app/services/mock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
        type: "gif",
        id: "feqkVgjJpYtjy",
        slug: "eyes-shocked-bird-feqkVgjJpYtjy",
        url: "http://giphy.com/gifs/eyes-shocked-bird-feqkVgjJpYtjy",
        bitly_gif_url: "http://gph.is/XJ200y",
        bitly_url: "http://gph.is/XJ200y",
        embed_url: "http://giphy.com/embed/feqkVgjJpYtjy",
        username: "",
        source: "http://littleanimalgifs.tumblr.com/post/17994517807",
        rating: "g",
        caption: "",
        content_url: "",
        source_tld: "littleanimalgifs.tumblr.com",
        source_post_url: "http://littleanimalgifs.tumblr.com/post/17994517807",
        import_datetime: "2013-03-21 04:03:08",
        trending_datetime: "2014-11-12 06:22:52",
        images: {
            fixed_height: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200.gif",
                width: "445",
                height: "200",
                size: "445432",
                mp4: "http://media0.giphy.com/media/feqkVgjJpYtjy/200.mp4",
                mp4_size: "27279",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/200.webp",
                webp_size: "420734"
            },
            fixed_height_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200_s.gif",
                width: "445",
                height: "200"
            },
            fixed_height_downsampled: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200_d.gif",
                width: "445",
                height: "200",
                size: "183225",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/200_d.webp",
                webp_size: "89516"
            },
            fixed_width: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w.gif",
                width: "200",
                height: "90",
                size: "115885",
                mp4: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w.mp4",
                mp4_size: "31919",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w.webp",
                webp_size: "122600"
            },
            fixed_width_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w_s.gif",
                width: "200",
                height: "90"
            },
            fixed_width_downsampled: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w_d.gif",
                width: "200",
                height: "90",
                size: "83007",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/200w_d.webp",
                webp_size: "26460"
            },
            fixed_height_small: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/100.gif",
                width: "223",
                height: "100",
                size: "445432",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/100.webp",
                webp_size: "129604"
            },
            fixed_height_small_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/100_s.gif",
                width: "223",
                height: "100"
            },
            fixed_width_small: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/100w.gif",
                width: "100",
                height: "45",
                size: "115885",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/100w.webp",
                webp_size: "41620"
            },
            fixed_width_small_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/100w_s.gif",
                width: "100",
                height: "45"
            },
            downsized: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif",
                width: "334",
                height: "150",
                size: "511581"
            },
            downsized_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy_s.gif",
                width: "334",
                height: "150"
            },
            downsized_large: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif",
                width: "334",
                height: "150",
                size: "511581"
            },
            original: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif",
                width: "334",
                height: "150",
                size: "511581",
                frames: "27",
                mp4: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.mp4",
                mp4_size: "97841",
                webp: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.webp",
                webp_size: "270108"
                },
                original_still: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy_s.gif",
                width: "334",
                height: "150"
            }
        },
        title: "Shocked Eyes GIF",
    });

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\JavascriptProjects\Angular Projects\RibiTest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map