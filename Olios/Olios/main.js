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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-listing/product-listing.component */ "./src/app/product-listing/product-listing.component.ts");






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'product', component: _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_5__["ProductListingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main class=\"main\" id=\"main\">\r\n    <router-outlet></router-outlet>\r\n</main>"

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
        this.title = 'Olios';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-listing/product-listing.component */ "./src/app/product-listing/product-listing.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_9__["ProductListingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <div class=\"logo\">\n        <a routerLink=\"/home\"><img src=\"assets/img/logo.png\"></a>\n    </div>\n\n    <nav class=\"menu\">\n        <ul>\n            <li>\n                <a routerLink=\"/home\" routerLinkActive=\"active\"><img src=\"assets/img/icon-home.png\"></a>\n            </li>\n            <li>\n                <a routerLink=\"/product\" routerLinkActive=\"active\"><img src=\"assets/img/icon-cart.png\"></a>\n            </li>\n            <li>\n                <a (click)=\"openSearch(isToggleSearch)\"><img src=\"assets/img/icon-search.png\"></a>\n            </li>\n        </ul>\n    </nav>\n\n    <div class=\"in-icon\">\n        <a routerLink=\"/home\"><img src=\"assets/img/icon-in.png\"></a>\n    </div>\n</header>\n\n<div class=\"search-wrapper\" [class.active]=\"isToggleSearch\">\n    <div class=\"search-input\">\n        <input type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search\">\n        <p>Type product that you are looking for {{searchText}}</p>\n    </div>\n    <div class=\"search-result\" *ngIf=\"searchText\">\n        <ul>\n            <li>\n                <img src=\"assets/img/product-1.png\">\n                <span>Red Seat</span>\n            </li>\n            <li>\n                <img src=\"assets/img/product-3.png\">\n                <span>Blue Seat</span>\n            </li>\n        </ul>\n        <p class=\"search-count\">2 Searched Result</p>\n    </div>\n</div>\n\n<div class=\"icon-toggle\" (click)=\"toggleClass(isToggle)\" [class.is-active]=\"isToggle\">\n    <span></span>\n</div>\n\n<nav class=\"main-menu\" [class.active]=\"isToggle\">\n    <ul>\n        <li>\n            <a routerLink=\"/home\">\n                <span>Living Room</span>\n                <img src=\"assets/img/icon-1.png\">\n            </a>\n        </li>\n        <li>\n            <a routerLink=\"/home\">\n                <span>Office</span>\n                <img src=\"assets/img/icon-2.png\">\n            </a>\n        </li>\n        <li>\n            <a routerLink=\"/home\">\n                <span>For Kids</span>\n                <img src=\"assets/img/icon-3.png\">\n            </a>\n        </li>\n        <li>\n            <a routerLink=\"/home\">\n                <span>Kicthed</span>\n                <img src=\"assets/img/icon-4.png\">\n            </a>\n        </li>\n        <li>\n            <a routerLink=\"/home\">\n                <span>Accesories</span>\n                <img src=\"assets/img/icon-5.png\">\n            </a>\n        </li>\n    </ul>\n    <div class=\"show-all-category\">\n        <a routerLink=\"/home\">Show All Categories</a>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isToggle = false;
        this.isToggleSearch = false;
    };
    HeaderComponent.prototype.toggleClass = function (value) {
        this.isToggle = !value;
    };
    HeaderComponent.prototype.openSearch = function (value) {
        this.isToggleSearch = !value;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-title {\r\n    margin-top: 95px;\r\n    text-align: center;\r\n}\r\n.logo-title span {\r\n    font-size: 112px;\r\n    font-weight: 300;\r\n    line-height: 112px;\r\n}\r\n.logo-title p {\r\n    font-size: 20px;\r\n    line-height: 20px;\r\n    font-weight: 300;\r\n    letter-spacing: 3px;\r\n    margin: 10px 0 30px 0;\r\n}\r\n.btn-primary {\r\n    color: #FFF;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    padding: 12px 30px;\r\n    text-align: center;\r\n    border-radius: 50px;\r\n    text-transform: uppercase;\r\n    background-color: #0023ff;\r\n}\r\n.hero-home {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 95px;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    background: url('home-hero.png') no-repeat bottom center;\r\n    background-size: cover;\r\n}\r\n.hero-home img {\r\n    max-height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWix5REFBMEU7SUFDMUUsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoiYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tdGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogOTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9nby10aXRsZSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExMnB4O1xyXG59XHJcbi5sb2dvLXRpdGxlIHAge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMTBweCAwIDMwcHggMDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDEycHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjNmZjtcclxufVxyXG4uaGVyby1ob21lIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDk1cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9ob21lLWhlcm8ucG5nXCIpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uaGVyby1ob21lIGltZyB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-title\">\r\n    <span>OLIOS</span>\r\n    <p>NEWEST FURNITURE SHOP</p>\r\n    <button routerLink=\"/product\" type=\"button\" class=\"btn-primary\">View More</button>\r\n</div>\r\n<div class=\"hero-home\"></div>"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/product-listing/product-listing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-listing/product-listing.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    padding: 44px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.page-header .page-title span {\r\n    font-size: 40px;\r\n    line-height: 40px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-header .page-category span {\r\n    font-size: 12px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    color: #c1c1c1;\r\n    font-weight: bold;\r\n    letter-spacing: 0.5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.page-header .page-category img {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-left: 15px;\r\n}\r\n\r\n.page-listing .top {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.page-listing .top,\r\n.page-listing .bottom,\r\n.page-listing .bottom .row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.page-listing .col .col-inner {\r\n    padding: 18px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    background-color: #fff;\r\n    box-shadow: 0 0 25px -15px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.page-listing .col-2 {\r\n    width: 25%;\r\n    padding-right: 25px;\r\n}\r\n\r\n.page-listing .col-10 {\r\n    width: 75%;\r\n}\r\n\r\n.product-image {\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.product-info {\r\n    margin-top: 25px;\r\n}\r\n\r\n.product-info .product-name {\r\n    font-size: 30px;\r\n    display: block;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.product-info p {\r\n    color: #a8a8a8;\r\n    font-size: 13px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.product-info .price {\r\n    color: #0023ff;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    display: block;\r\n    line-height: 16px;\r\n}\r\n\r\n.col-side2side .col-inner {\r\n    font-size: 0;\r\n}\r\n\r\n.col-side2side .product-image {\r\n    width: 50%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.col-side2side .product-info {\r\n    width: 50%;\r\n    padding-left: 20px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.page-listing .col-10 .col-8 {\r\n    width: 70%;\r\n}\r\n\r\n.page-listing .col-10 .col-4 {\r\n    width: 30%;\r\n    padding-left: 25px;\r\n}\r\n\r\n.show-more {\r\n    margin-top: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.show-more a {\r\n    color: #0023ff;\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9kdWN0LWxpc3RpbmcvcHJvZHVjdC1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFHaEIsY0FBYztJQUdkLG9CQUFvQjtJQUdwQiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVEOzs7SUFLSSxjQUFjO0lBRWQsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFHYixjQUFjO0lBRWQsZ0JBQWdCO0lBR2hCLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFFdkIsOENBQThDO0NBQ2pEOztBQUVEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FDN0IiLCJmaWxlIjoiYXBwL3Byb2R1Y3QtbGlzdGluZy9wcm9kdWN0LWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA0NHB4IDA7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XHJcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucGFnZS1oZWFkZXIgLnBhZ2UtdGl0bGUgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5wYWdlLWhlYWRlciAucGFnZS1jYXRlZ29yeSBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogI2MxYzFjMTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIC5wYWdlLWNhdGVnb3J5IGltZyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5wYWdlLWxpc3RpbmcgLnRvcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4ucGFnZS1saXN0aW5nIC50b3AsXHJcbi5wYWdlLWxpc3RpbmcgLmJvdHRvbSxcclxuLnBhZ2UtbGlzdGluZyAuYm90dG9tIC5yb3cge1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ucGFnZS1saXN0aW5nIC5jb2wgLmNvbC1pbm5lciB7XHJcbiAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDI1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ucGFnZS1saXN0aW5nIC5jb2wtMiB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5cclxuLnBhZ2UtbGlzdGluZyAuY29sLTEwIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWluZm8gLnByb2R1Y3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIHAge1xyXG4gICAgY29sb3I6ICNhOGE4YTg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbmZvIC5wcmljZSB7XHJcbiAgICBjb2xvcjogIzAwMjNmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmNvbC1zaWRlMnNpZGUgLmNvbC1pbm5lciB7XHJcbiAgICBmb250LXNpemU6IDA7XHJcbn1cclxuXHJcbi5jb2wtc2lkZTJzaWRlIC5wcm9kdWN0LWltYWdlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29sLXNpZGUyc2lkZSAucHJvZHVjdC1pbmZvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucGFnZS1saXN0aW5nIC5jb2wtMTAgLmNvbC04IHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbi5wYWdlLWxpc3RpbmcgLmNvbC0xMCAuY29sLTQge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG5cclxuLnNob3ctbW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zaG93LW1vcmUgYSB7XHJcbiAgICBjb2xvcjogIzAwMjNmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-listing/product-listing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-listing/product-listing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"page-header\">\n    <div class=\"page-title\">\n      <span>Products</span>\n    </div>\n    <div class=\"page-category\">\n      <span>Living Room</span>\n      <img src=\"assets/img/icon-1.png\">\n    </div>\n  </div>\n\n  <div class=\"page-listing\">\n    <div class=\"top\">\n      <div class=\"col col-2\">\n        <div class=\"col-inner\">\n          <div class=\"product-image\">\n            <img src=\"assets/img/product-1.png\">\n          </div>\n          <div class=\"product-info\">\n            <span class=\"product-name\">Red Seat</span>\n            <p>Lorem ipsum dolor sit amet</p>\n            <span class=\"price\">$45</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col col-10 col-side2side\">\n        <div class=\"col-inner\">\n          <div class=\"product-image\">\n            <img src=\"assets/img/product-2.png\">\n          </div>\n          <div class=\"product-info\">\n            <span class=\"product-name\">White Table</span>\n            <p>Lorem ipsum dolor sit amet</p>\n            <span class=\"price\">$450</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"bottom\">\n      <div class=\"col col-2\">\n        <div class=\"col-inner\">\n          <div class=\"product-image\">\n            <img src=\"assets/img/product-3.png\">\n          </div>\n          <div class=\"product-info\">\n            <span class=\"product-name\">Blue Seat</span>\n            <p>Lorem ipsum dolor sit amet</p>\n            <span class=\"price\">$35</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col col-10\">\n        <div class=\"row\">\n          <div class=\"col col-8 col-side2side\">\n            <div class=\"col-inner\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/product-4.png\">\n              </div>\n              <div class=\"product-info\">\n                <span class=\"product-name\">Morden Bed</span>\n                <p>Lorem ipsum dolor sit amet</p>\n                <span class=\"price\">$120</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col col-4\">\n            <div class=\"col-inner\">\n              <div class=\"product-image\">\n                <img src=\"assets/img/product-5.png\">\n              </div>\n              <div class=\"product-info\">\n                <span class=\"product-name\">Dark Seat</span>\n                <p>Lorem ipsum dolor sit amet</p>\n                <span class=\"price\">$50</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"show-more\">\n    <a routerLink=\"/product\" >Show More Products</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-listing/product-listing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-listing/product-listing.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListingComponent", function() { return ProductListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductListingComponent = /** @class */ (function () {
    function ProductListingComponent() {
    }
    ProductListingComponent.prototype.ngOnInit = function () {
    };
    ProductListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-listing',
            template: __webpack_require__(/*! ./product-listing.component.html */ "./src/app/product-listing/product-listing.component.html"),
            styles: [__webpack_require__(/*! ./product-listing.component.css */ "./src/app/product-listing/product-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductListingComponent);
    return ProductListingComponent;
}());



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

module.exports = __webpack_require__(/*! E:\Work\rnd\angular\Olios\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map