(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_films__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/films */ "./src/app/pages/films.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _pages_bookmarks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/bookmarks */ "./src/app/pages/bookmarks.ts");
/* harmony import */ var _pages_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/tags */ "./src/app/pages/tags.ts");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/search */ "./src/app/pages/search.ts");









const routes = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    },
    {
        path: 'bookmarks',
        component: _pages_bookmarks__WEBPACK_IMPORTED_MODULE_4__["BookmarksComponent"]
    },
    {
        path: 'search',
        component: _pages_search__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"]
    },
    {
        path: 'film/:slug',
        component: _pages_films__WEBPACK_IMPORTED_MODULE_2__["FilmsComponent"]
    },
    {
        path: 'actor/:slug',
        component: _pages_films__WEBPACK_IMPORTED_MODULE_2__["FilmsComponent"]
    },
    {
        path: 'user/:slug',
        component: _pages_films__WEBPACK_IMPORTED_MODULE_2__["FilmsComponent"]
    },
    {
        path: 'tag/:slug',
        component: _pages_tags__WEBPACK_IMPORTED_MODULE_5__["TagsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, appUser, dropdownToggle, switchTab, subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appUser", function() { return appUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownToggle", function() { return dropdownToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTab", function() { return switchTab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppComponent {
    constructor() {
        this.title = 'app';
        this.user = {};
        this.user = {
            avatar: '',
            name: 'Andy Riot'
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();
const appUser = {
    avatar: 'assets/ava.svg',
    name: 'Andy Riot'
};
function dropdownToggle(ev) {
    ev.preventDefault();
    ev.target.closest('.dropdown').querySelector('.dropdown-content').classList.toggle('show');
}
function switchTab(ev) {
    ev.preventDefault();
    ev.target.parentElement.querySelector('.tab-menu-item.active').classList.remove('active');
    ev.target.classList.add('active');
    document.getElementById(ev.target.parentElement.dataset.tabs).querySelector('.tab-content.show').classList.remove('show');
    document.getElementById(ev.target.dataset.target).classList.add('show');
}
function subscribe(ev) {
    console.log(ev.target);
}


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/header */ "./src/app/parts/header.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _pages_bookmarks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/bookmarks */ "./src/app/pages/bookmarks.ts");
/* harmony import */ var _pages_films__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/films */ "./src/app/pages/films.ts");
/* harmony import */ var _pages_tags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/tags */ "./src/app/pages/tags.ts");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/search */ "./src/app/pages/search.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_parts_header__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _pages__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
        _pages_bookmarks__WEBPACK_IMPORTED_MODULE_7__["BookmarksComponent"],
        _pages_films__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"],
        _pages_tags__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"],
        _pages_search__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
                ],
                declarations: [
                    _parts_header__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _pages__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                    _pages_bookmarks__WEBPACK_IMPORTED_MODULE_7__["BookmarksComponent"],
                    _pages_films__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"],
                    _pages_tags__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"],
                    _pages_search__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_router_router_l"], _parts_header__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _pages__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
    _pages_bookmarks__WEBPACK_IMPORTED_MODULE_7__["BookmarksComponent"],
    _pages_films__WEBPACK_IMPORTED_MODULE_8__["FilmsComponent"],
    _pages_tags__WEBPACK_IMPORTED_MODULE_9__["TagsComponent"],
    _pages_search__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/pages/bookmarks.ts":
/*!************************************!*\
  !*** ./src/app/pages/bookmarks.ts ***!
  \************************************/
/*! exports provided: BookmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarksComponent", function() { return BookmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
// BookmarksComponent




function BookmarksComponent_b_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("You have nothing here (\u2022_\u2022)");
} }
const _c0 = function (a1) { return ["/film", a1]; };
function BookmarksComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bookmark_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, bookmark_r13.uri))("title", bookmark_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + bookmark_r13.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", bookmark_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", bookmark_r13.title, ", ", bookmark_r13.originalTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", bookmark_r13.country, ", ", bookmark_r13.year, "");
} }
function BookmarksComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BookmarksComponent_div_4_div_1_Template, 7, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.bookmarks);
} }
class BookmarksComponent {
    constructor() {
        this.bookmarks = [];
    }
    ngOnInit() {
    }
}
BookmarksComponent.ɵfac = function BookmarksComponent_Factory(t) { return new (t || BookmarksComponent)(); };
BookmarksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BookmarksComponent, selectors: [["app-bookmarks"]], decls: 5, vars: 3, consts: [[1, "container", "index-wrap"], [2, "color", "black"], [4, "ngIf"], ["class", "film-card", 4, "ngFor", "ngForOf"], [1, "film-card"], [1, "film-card__link", 3, "routerLink", "title"], [3, "src", "alt"]], template: function BookmarksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BookmarksComponent_b_3_Template, 2, 1, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BookmarksComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Bookmarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.bookmarks || ctx.bookmarks.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookmarks && ctx.bookmarks[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bookmarks',
                templateUrl: './bookmarks.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/films.ts":
/*!********************************!*\
  !*** ./src/app/pages/films.ts ***!
  \********************************/
/*! exports provided: FilmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsComponent", function() { return FilmsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function FilmsComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.film["originalTitle"] || "");
} }
function FilmsComponent_div_10_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/tag/", f_r5, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r5);
} }
function FilmsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilmsComponent_div_10_span_1_Template, 3, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.film["tags"]["ru"]);
} }
function FilmsComponent_h3_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0412 \u0433\u043B\u0430\u0432\u043D\u044B\u0445 \u0440\u043E\u043B\u044F\u0445:");
} }
function FilmsComponent_ul_25_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const actor_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", actor_r7.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actor_r7.name.ru);
} }
function FilmsComponent_ul_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FilmsComponent_ul_25_li_1_Template, 3, 2, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.film["actors"]);
} }
class FilmsComponent {
    constructor(router, http) {
        this.http = http;
        this.film = {};
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].proxy + 'http://filmapi.andy-riot.com.ua';
        this.slug = '';
        this.slug = router.url.slice(6);
        this.film = this.http.get('assets/db.json').subscribe((films) => {
            films.forEach((film) => {
                // @ts-ignore
                if (film.slug === this.slug) {
                    this.film = film;
                }
            });
        });
    }
    ngOnInit() {
    }
    toggleDescription(ev) {
        ev.preventDefault();
        const el = document.getElementById(ev.target.dataset.target);
        el.classList.toggle('fadeInDown');
        el.classList.toggle('fadeOutUp');
        if (!el.classList.contains('hidden')) {
            scrollTo(0, 0);
            setTimeout(() => el.classList.add('hidden'), 1000);
        }
        else {
            // scrollTo(0, 0);
            el.classList.remove('hidden');
            scrollTo(0, el.getBoundingClientRect().top - 30);
        }
    }
    switchTab(ev) {
        Object(_app_component__WEBPACK_IMPORTED_MODULE_2__["switchTab"])(ev);
    }
    subscribe(ev) {
        Object(_app_component__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(ev);
    }
}
FilmsComponent.ɵfac = function FilmsComponent_Factory(t) { return new (t || FilmsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
FilmsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilmsComponent, selectors: [["app-films"]], decls: 64, vars: 36, consts: [["id", "body-bg", 1, "parallax", "pure"], [1, "p-box"], [1, "p-img"], [1, "container", "film-wrap"], [1, "film-wrap_film-header"], [1, "film-wrap_film-header_film-title", "animated", "fadeInRight"], ["class", "film-wrap_film-header_film-title-original animated fadeIn", 4, "ngIf"], [1, "film-wrap_film-header_film-info", "animated", "fadeInUp"], [1, "film-wrap_film-header_film-info_left-col"], ["class", "film-wrap_film-header_film-info__type", 4, "ngIf"], [1, "film-wrap_film-header_film-info__year"], [1, "film-wrap_film-header_film-info__watch"], ["data-fancybox", "", "href", "https://youtu.be/cElcLipGNIA", 1, "play"], [1, "film-wrap_film-header_film-more"], ["href", "#", "data-target", "film-more", 1, "film-wrap_film-header_film-more__link", 3, "click"], ["id", "film-more", 1, "content", "index-wrap", "animated", "fadeOutUp", "hidden"], [1, "short-info"], [1, "poster", 3, "src", "alt"], [1, "button"], ["class", "actors", 4, "ngIf"], ["class", "actors-list", 4, "ngIf"], [1, "full-info"], ["data-tabs", "film-content", 1, "tab-menu"], ["href", "#", "data-target", "description", 1, "tab-menu-item", "active", 3, "click"], ["href", "#", "data-target", "reviews", 1, "tab-menu-item", 3, "click"], ["href", "#", "data-target", "premiers", 1, "tab-menu-item", 3, "click"], ["href", "#", "data-target", "actors", 1, "tab-menu-item", 3, "click"], ["href", "#", "data-target", "rewards", 1, "tab-menu-item", 3, "click"], ["href", "#", "data-target", "facts", 1, "tab-menu-item", 3, "click"], ["href", "#", "data-target", "sites", 1, "tab-menu-item", 3, "click"], ["href", "#", 1, "bookmark__add", 3, "title"], [1, "full-content"], ["id", "film-content", 1, "tabs-content"], ["id", "description", 1, "tab-content", "show", 3, "innerHTML"], ["id", "reviews", 1, "tab-content", 3, "innerHTML"], ["id", "premiers", 1, "tab-content", 3, "innerHTML"], ["id", "actors", 1, "tab-content", 3, "innerHTML"], ["id", "rewards", 1, "tab-content", 3, "innerHTML"], ["id", "facts", 1, "tab-content", 3, "innerHTML"], ["id", "sites", 1, "tab-content", 3, "innerHTML"], [1, "col-220"], [1, "subscribe"], [1, "subscribe__title"], [1, "subscribe-form"], ["type", "text", 1, "subscribe__input", 3, "placeholder"], [1, "button", "subscribe__button", 3, "click"], [1, "pics"], ["target", "_blank", "rel", "nofollow", 1, "picture", 3, "href"], ["alt", "", 1, "background", 3, "src"], [1, "film-wrap_film-header_film-title-original", "animated", "fadeIn"], [1, "film-wrap_film-header_film-info__type"], [4, "ngFor", "ngForOf"], [1, "tag", 3, "href"], [1, "actors"], [1, "actors-list"], ["class", "actors-list-item", 4, "ngFor", "ngForOf"], [1, "actors-list-item"], [1, "actors-list-item__link", 3, "routerLink"]], template: function FilmsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FilmsComponent_small_7_Template, 2, 1, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilmsComponent_div_10_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_17_listener($event) { return ctx.toggleDescription($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FilmsComponent_h3_24_Template, 2, 1, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FilmsComponent_ul_25_Template, 2, 1, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_28_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_30_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_32_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_34_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_36_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_38_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_a_click_40_listener($event) { return ctx.switchTab($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilmsComponent_Template_button_click_58_listener($event) { return ctx.subscribe($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image:url('assets/", ctx.film["logo"], "');");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.film["title"]["ru"] || "\u041D\u0435\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.film["originalTitle"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.film["tags"]["ru"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.film["country"]["ru"] || "", ", ", ctx.film["year"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u0440\u0435\u0439\u043B\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + ctx.film["icon"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.film["title"]["ru"] || "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0411\u0443\u0434\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.film["actors"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.film["actors"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0420\u0435\u0446\u0435\u043D\u0437\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041F\u0440\u0435\u043C\u044C\u0435\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0410\u043A\u0442\u0451\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041D\u0430\u0433\u0440\u0430\u0434\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0424\u0430\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0421\u0430\u0439\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Add to Bookmarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["description"].ru || "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["reviews"].ru || "\u0420\u0438\u0446\u0435\u043D\u0437\u0438\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["premiers"].ru || "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0435\u043C\u044C\u0435\u0440 \u043F\u0443\u0441\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["actors"].ru || "\u0421\u043F\u0438\u0441\u043E\u043A \u0430\u043A\u0442\u0451\u0440\u043E\u0432 \u043F\u0443\u0441\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["rewards"].ru || "\u041F\u043E\u043A\u0430 \u0447\u0442\u043E \u043D\u0435\u0442 \u043D\u0430\u0433\u0440\u0430\u0434", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["facts"].ru || "\u0424\u0430\u043A\u0442\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.film["sites"].ru || "\u0421\u0430\u0439\u0442\u044B \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "\u0412\u0430\u0448 Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/pics/01.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/pics/01.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".film-wrap[_ngcontent-%COMP%] {\n  margin-top: 20%;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 5px;\n  padding: 0 15px 15px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-title[_ngcontent-%COMP%] {\n  font-family: Playfair Display, Serif, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 64px;\n  margin-bottom: 7px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-title-original[_ngcontent-%COMP%] {\n  color: #787878;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 20px;\n  line-height: 23px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 39px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info__type[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info__year[_ngcontent-%COMP%] {\n  margin-right: 33px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more__link[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  padding-right: 46px;\n  position: relative;\n  text-decoration: none;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more__link[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: #fff;\n  border-radius: 50%;\n  height: 31px;\n  right: 0;\n  position: absolute;\n  top: -6px;\n  width: 31px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more__link[_ngcontent-%COMP%]:after {\n  content: url('triangle.svg');\n  right: 11px;\n  position: absolute;\n  top: -1px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 108px;\n  padding: 43px 50px;\n  position: relative;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .poster[_ngcontent-%COMP%] {\n  margin-top: -80px;\n  width: 183px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .button[_ngcontent-%COMP%] {\n  background: #FF8F27;\n  border: 0;\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  font-size: 14px;\n  justify-content: center;\n  line-height: 16px;\n  margin-bottom: 31px;\n  margin-top: 16px;\n  padding: 10px 44px;\n  width: 183px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > h3.actors[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  flex: none;\n  font-family: Roboto, sans-serif;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 900;\n  line-height: 150%;\n  margin: 0 10px;\n  order: 0;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .actors-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 10px;\n  max-width: 174px;\n  padding: 0;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .actors-list[_ngcontent-%COMP%]    > .actors-list-item[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 130%;\n  margin-bottom: 5px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%] {\n  flex: 100%;\n  padding-left: 45px;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%] {\n  align-items: baseline;\n  display: flex;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%]    > .tabs-content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-right: 78px;\n  line-height: 1.4;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%]    > .tabs-content[_ngcontent-%COMP%]    > .tab-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]   .bookmark__add[_ngcontent-%COMP%] {\n  position: static;\n}\n.col-220[_ngcontent-%COMP%] {\n  min-width: 220px;\n  width: 220px;\n}\n@media (max-width: 1200px) {\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .poster[_ngcontent-%COMP%] {\n    margin-top: -40px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%] {\n    padding-left: 20px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%]    > .tabs-content[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n}\n@media (max-width: 992px) {\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%] {\n    margin-top: 65px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .actors-list[_ngcontent-%COMP%]    > .actors-list-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%]    > .tabs-content[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media (max-width: 768px) {\n  .film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%] {\n    flex-flow: column;\n    line-height: 2.5;\n    width: 100%;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info__watch[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info__type[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info_left-col[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info__year[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .film-wrap_film-header[_ngcontent-%COMP%]    > .film-wrap_film-header_film-info[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more[_ngcontent-%COMP%]    > .film-wrap_film-header_film-more__link[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media (max-width: 576px) {\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .poster[_ngcontent-%COMP%], .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .actors[_ngcontent-%COMP%], .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .short-info[_ngcontent-%COMP%]    > .actors-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  .film-wrap[_ngcontent-%COMP%]    > .index-wrap[_ngcontent-%COMP%]    > .full-info[_ngcontent-%COMP%]    > .full-content[_ngcontent-%COMP%]    > .col-220[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXHNpdGVzXFxiYXRtYW4vc3JjXFxhcHBcXHBhZ2VzXFxmaWxtcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9maWxtcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FEQ0U7RUFDRSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRENJO0VBQ0UsZ0RBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ0ROO0FER007RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNEUjtBREdRO0VBQ0Usa0JBQUE7QUNEVjtBRElRO0VBQ0Usa0JBQUE7QUNGVjtBRFVRO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDUlY7QURVVTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDUlo7QURXVTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ1RaO0FEZ0JFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDZEo7QURpQk07RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNmUjtBRGtCTTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNoQlI7QURtQk07RUFDRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtBQ2pCUjtBRG9CTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2xCUjtBRG9CUTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNsQlY7QUR1Qkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNyQk47QUR1Qk07RUFDRSxxQkFBQTtFQUNBLGFBQUE7QUNyQlI7QUR1QlE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ3JCVjtBRHdCWTtFQUNFLFNBQUE7QUN0QmQ7QUQ0Qk07RUFDRSxnQkFBQTtBQzFCUjtBRGdDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQzdCRjtBRGdDQTtFQUVJO0lBQ0Usa0JBQUE7RUM5Qko7RURpQ007SUFDRSxpQkFBQTtFQy9CUjtFRG1DSTtJQUNFLGtCQUFBO0VDakNOO0VEb0NRO0lBQ0Usa0JBQUE7RUNsQ1Y7QUFDRjtBRHlDQTtFQUVJO0lBQ0UsZ0JBQUE7RUN4Q0o7RUQ0Q1E7SUFDRSxlQUFBO0VDMUNWO0VEaURRO0lBQ0UsZUFBQTtFQy9DVjtBQUNGO0FEc0RBO0VBSVE7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtFQ3ZEUjtFRHlEUTtJQUNFLGlCQUFBO0VDdkRWO0VEMERRO0lBQ0UsZUFBQTtFQ3hEVjtFRDJEUTtJQUNFLGtCQUFBO0VDekRWO0VEOERRO0lBQ0UsYUFBQTtFQzVEVjtFRG9FTTtJQUNFLGVBQUE7RUNsRVI7QUFDRjtBRHdFQTtFQUVJO0lBQ0UsZUFBQTtFQ3ZFSjtFRHlFSTtJQUNFLFdBQUE7RUN2RU47RUR5RU07SUFDRSxXQUFBO0VDdkVSO0VEMEVNO0lBQ0UsYUFBQTtFQ3hFUjtFRDRFSTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDMUVOO0VENkVRO0lBQ0UsV0FBQTtFQzNFVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsbXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxtLXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IDIwJTtcclxuXHJcbiAgJiA+ICZfZmlsbS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMTVweDtcclxuXHJcbiAgICAmID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLXRpdGxlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFNlcmlmLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS10aXRsZS1vcmlnaW5hbCB7XHJcbiAgICAgIGNvbG9yOiAjNzg3ODc4O1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzOXB4O1xyXG5cclxuICAgICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICYgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mb19fdHlwZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm9fX3llYXIge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX193YXRjaCB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLW1vcmUge1xyXG4gICAgICAgICYgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZV9fbGluayB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogNDZweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzFweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzFweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvdHJpYW5nbGUuc3ZnJyk7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAuaW5kZXgtd3JhcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTA4cHg7XHJcbiAgICBwYWRkaW5nOiA0M3B4IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJiA+IC5zaG9ydC1pbmZvIHtcclxuICAgICAgJiA+IC5wb3N0ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxODNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IC5idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjhGMjc7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzFweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDRweDtcclxuICAgICAgICB3aWR0aDogMTgzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiBoMy5hY3RvcnMge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBvcmRlcjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IC5hY3RvcnMtbGlzdCB7XHJcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNzRweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAmID4gLmFjdG9ycy1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgPiAuZnVsbC1pbmZvIHtcclxuICAgICAgZmxleDogMTAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG5cclxuICAgICAgJiA+IC5mdWxsLWNvbnRlbnQge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAmID4gLnRhYnMtY29udGVudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDc4cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG5cclxuICAgICAgICAgICYgPiAudGFiLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAmIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJiAuYm9va21hcmtfX2FkZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNvbC0yMjAge1xyXG4gIG1pbi13aWR0aDogMjIwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmZpbG0td3JhcCB7XHJcbiAgICAmID4gLmluZGV4LXdyYXAge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblxyXG4gICAgICAmID4gLnNob3J0LWluZm8ge1xyXG4gICAgICAgICYgPiAucG9zdGVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IC5mdWxsLWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuXHJcbiAgICAgICAgJiA+IC5mdWxsLWNvbnRlbnQge1xyXG4gICAgICAgICAgJiA+IC50YWJzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuZmlsbS13cmFwIHtcclxuICAgICYgPiAuaW5kZXgtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDY1cHg7XHJcblxyXG4gICAgICAmID4gLnNob3J0LWluZm8ge1xyXG4gICAgICAgICYgPiAuYWN0b3JzLWxpc3Qge1xyXG4gICAgICAgICAgJiA+IC5hY3RvcnMtbGlzdC1pdGVtIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJiA+IC5mdWxsLWluZm8ge1xyXG4gICAgICAgICYgPiAuZnVsbC1jb250ZW50IHtcclxuICAgICAgICAgICYgPiAudGFicy1jb250ZW50IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZpbG0td3JhcCB7XHJcbiAgICAmID4gJl9maWxtLWhlYWRlciB7XHJcbiAgICAgICYgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mbyB7XHJcbiAgICAgICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sIHtcclxuICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICYgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mb19fd2F0Y2gge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm9fX3R5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX195ZWFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1tb3JlIHtcclxuICAgICAgICAgICYgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZV9fbGluayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiA+IC5pbmRleC13cmFwIHtcclxuICAgICAgJiA+IC5mdWxsLWluZm8ge1xyXG4gICAgICAgICYgPiAuZnVsbC1jb250ZW50IHtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5maWxtLXdyYXAge1xyXG4gICAgJiA+IC5pbmRleC13cmFwIHtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgJiA+IC5zaG9ydC1pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgJiA+IC5wb3N0ZXIsICYgPiAuYnV0dG9uIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiA+IC5hY3RvcnMsICYgPiAuYWN0b3JzLWxpc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYgPiAuZnVsbC1pbmZvIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgJiA+IC5mdWxsLWNvbnRlbnQge1xyXG4gICAgICAgICAgJiA+IC5jb2wtMjIwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5maWxtLXdyYXAge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG4uZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDE1cHggMTVweDtcbn1cbi5maWxtLXdyYXAgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksIFNlcmlmLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS10aXRsZS1vcmlnaW5hbCB7XG4gIGNvbG9yOiAjNzg3ODc4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG59XG4uZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzOXB4O1xufVxuLmZpbG0td3JhcCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXIgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mbyA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5maWxtLXdyYXAgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm8gPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mb19sZWZ0LWNvbCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX190eXBlIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmZpbG0td3JhcCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXIgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mbyA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm9fX3llYXIge1xuICBtYXJnaW4tcmlnaHQ6IDMzcHg7XG59XG4uZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLW1vcmUgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZV9fbGluayB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgcGFkZGluZy1yaWdodDogNDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLW1vcmUgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZV9fbGluazpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogMzFweDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNnB4O1xuICB3aWR0aDogMzFweDtcbn1cbi5maWxtLXdyYXAgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm8gPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZSA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1tb3JlX19saW5rOmFmdGVyIHtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL3RyaWFuZ2xlLnN2Z1wiKTtcbiAgcmlnaHQ6IDExcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMXB4O1xufVxuLmZpbG0td3JhcCA+IC5pbmRleC13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAxMDhweDtcbiAgcGFkZGluZzogNDNweCA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuc2hvcnQtaW5mbyA+IC5wb3N0ZXIge1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgd2lkdGg6IDE4M3B4O1xufVxuLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0ZGOEYyNztcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMxcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDEwcHggNDRweDtcbiAgd2lkdGg6IDE4M3B4O1xufVxuLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiBoMy5hY3RvcnMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBmbGV4OiBub25lO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBvcmRlcjogMDtcbn1cbi5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5zaG9ydC1pbmZvID4gLmFjdG9ycy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXgtd2lkdGg6IDE3NHB4O1xuICBwYWRkaW5nOiAwO1xufVxuLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAuYWN0b3JzLWxpc3QgPiAuYWN0b3JzLWxpc3QtaXRlbSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5mdWxsLWluZm8ge1xuICBmbGV4OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG59XG4uZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuZnVsbC1pbmZvID4gLmZ1bGwtY29udGVudCB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5mdWxsLWluZm8gPiAuZnVsbC1jb250ZW50ID4gLnRhYnMtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA3OHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLmZ1bGwtaW5mbyA+IC5mdWxsLWNvbnRlbnQgPiAudGFicy1jb250ZW50ID4gLnRhYi1jb250ZW50IHAge1xuICBtYXJnaW46IDA7XG59XG4uZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuZnVsbC1pbmZvIC5ib29rbWFya19fYWRkIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbn1cblxuLmNvbC0yMjAge1xuICBtaW4td2lkdGg6IDIyMHB4O1xuICB3aWR0aDogMjIwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwIHtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAucG9zdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcbiAgfVxuICAuZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuZnVsbC1pbmZvIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLmZ1bGwtaW5mbyA+IC5mdWxsLWNvbnRlbnQgPiAudGFicy1jb250ZW50IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZmlsbS13cmFwID4gLmluZGV4LXdyYXAge1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAuYWN0b3JzLWxpc3QgPiAuYWN0b3JzLWxpc3QtaXRlbSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIC5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5mdWxsLWluZm8gPiAuZnVsbC1jb250ZW50ID4gLnRhYnMtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZpbG0td3JhcCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXIgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mbyA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sIHtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBsaW5lLWhlaWdodDogMi41O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5maWxtLXdyYXAgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm8gPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mb19sZWZ0LWNvbCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX193YXRjaCB7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXIgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mbyA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvX2xlZnQtY29sID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm9fX3R5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuZmlsbS13cmFwID4gLmZpbG0td3JhcF9maWxtLWhlYWRlciA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1pbmZvID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm9fbGVmdC1jb2wgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0taW5mb19feWVhciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5maWxtLXdyYXAgPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyID4gLmZpbG0td3JhcF9maWxtLWhlYWRlcl9maWxtLWluZm8gPiAuZmlsbS13cmFwX2ZpbG0taGVhZGVyX2ZpbG0tbW9yZSA+IC5maWxtLXdyYXBfZmlsbS1oZWFkZXJfZmlsbS1tb3JlX19saW5rIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5mdWxsLWluZm8gPiAuZnVsbC1jb250ZW50IHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuZmlsbS13cmFwID4gLmluZGV4LXdyYXAge1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAuZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuc2hvcnQtaW5mbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAucG9zdGVyLCAuZmlsbS13cmFwID4gLmluZGV4LXdyYXAgPiAuc2hvcnQtaW5mbyA+IC5idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5maWxtLXdyYXAgPiAuaW5kZXgtd3JhcCA+IC5zaG9ydC1pbmZvID4gLmFjdG9ycywgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLnNob3J0LWluZm8gPiAuYWN0b3JzLWxpc3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLmZ1bGwtaW5mbyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmZpbG0td3JhcCA+IC5pbmRleC13cmFwID4gLmZ1bGwtaW5mbyA+IC5mdWxsLWNvbnRlbnQgPiAuY29sLTIyMCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilmsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-films',
                templateUrl: './films.html',
                styleUrls: ['./films.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/film", a1]; };
function IndexComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, film_r9["slug"]))("title", film_r9["title"]["ru"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Add to Bookmarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + film_r9.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", film_r9.title.ru);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", film_r9.title.ru, ", ", film_r9.originalTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", film_r9.country.ru, ", ", film_r9.year, "");
} }
class IndexComponent {
    constructor(http) {
        this.http = http;
        this.films = [];
        this.http.get('assets/db.json').subscribe((films) => {
            this.films = films;
            // console.log(films)
        });
        // console.log(this.films)
    }
}
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], decls: 5, vars: 1, consts: [["id", "body-bg", 1, "parallax", "pure"], [1, "p-box"], [1, "p-img", 2, "background-image", "url('assets/bg.jpg')"], [1, "container", "index-wrap"], ["class", "film-card", 4, "ngFor", "ngForOf"], [1, "film-card"], [1, "film-card__link", 3, "routerLink", "title"], [1, "bookmark__add", 3, "title"], [3, "src", "alt"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, IndexComponent_div_4_Template, 8, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.films);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.html',
                styleUrls: ['./index.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/search.ts":
/*!*********************************!*\
  !*** ./src/app/pages/search.ts ***!
  \*********************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function SearchComponent_b_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("You have nothing here (\u2022_\u2022)");
} }
const _c0 = function (a1) { return ["/film", a1]; };
function SearchComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const film_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, film_r17.uri))("title", film_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/" + film_r17.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", film_r17.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", film_r17.title, ", ", film_r17.originalTitle || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", film_r17.country, ", ", film_r17.year, "");
} }
function SearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_7_div_1_Template, 7, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.found);
} }
class SearchComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.search = '';
        this.found = [];
        // @ts-ignore
        this.search = route.queryParams._value.search;
        // todo : api search
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 8, vars: 4, consts: [[1, "container", "index-wrap"], [2, "color", "black"], [4, "ngIf"], ["class", "film-card", 4, "ngFor", "ngForOf"], [1, "film-card"], [1, "film-card__link", 3, "routerLink", "title"], [3, "src", "alt"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_b_6_Template, 2, 1, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u041F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \"" + ctx.search + "\":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.found || ctx.found.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.found && ctx.found[0]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.html',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/tags.ts":
/*!*******************************!*\
  !*** ./src/app/pages/tags.ts ***!
  \*******************************/
/*! exports provided: TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TagsComponent {
    constructor() {
        this.film = {};
    }
    ngOnInit() {
    }
}
TagsComponent.ɵfac = function TagsComponent_Factory(t) { return new (t || TagsComponent)(); };
TagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagsComponent, selectors: [["app-tags"]], decls: 0, vars: 0, template: function TagsComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tags',
                templateUrl: './tags.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parts/header.ts":
/*!*********************************!*\
  !*** ./src/app/parts/header.ts ***!
  \*********************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");




const _c0 = function () { return ["/search"]; };
class HeaderComponent {
    constructor() {
        this.searchValue = '';
        this.user = _app_component__WEBPACK_IMPORTED_MODULE_1__["appUser"];
    }
    ngOnInit() {
    }
    dropdownToggle(ev) {
        Object(_app_component__WEBPACK_IMPORTED_MODULE_1__["dropdownToggle"])(ev);
    }
    changeLanguage(lang) { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 31, vars: 13, consts: [[1, "container", "header"], [1, "header_logo"], ["href", "/", "id", "logo"], [1, "header_search", 3, "action"], ["for", "search", 1, "header_search__label"], ["id", "search", "name", "search", 1, "header_search__input", 3, "value", "placeholder"], ["type", "submit", 1, "header_search__button"], ["width", "20", "height", "21", "viewBox", "0 0 20 21", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M8.80757 0.0393677C3.95121 0.0393677 0 3.99058 0 8.84694C0 13.7036 3.95121 17.6545 8.80757 17.6545C13.6642 17.6545 17.6151 13.7036 17.6151 8.84694C17.6151 3.99058 13.6642 0.0393677 8.80757 0.0393677ZM8.80757 16.0285C4.84769 16.0285 1.62601 12.8069 1.62601 8.84698C1.62601 4.8871 4.84769 1.66538 8.80757 1.66538C12.7675 1.66538 15.9891 4.88706 15.9891 8.84694C15.9891 12.8068 12.7675 16.0285 8.80757 16.0285Z", "fill", "#AEAEAE"], ["d", "M19.7618 18.6515L15.1005 13.9903C14.7829 13.6727 14.2685 13.6727 13.9509 13.9903C13.6333 14.3076 13.6333 14.8226 13.9509 15.1399L18.6122 19.8011C18.771 19.9599 18.9788 20.0393 19.187 20.0393C19.3948 20.0393 19.6029 19.9599 19.7618 19.8011C20.0794 19.4838 20.0794 18.9689 19.7618 18.6515Z", "fill", "#AEAEAE"], [1, "header_user"], ["href", "/bookmarks", "id", "bookmarks", 1, "header_user__bookmarks"], ["width", "13", "height", "18", "viewBox", "0 0 13 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12.1645 0.589722H1.00014C0.769564 0.589722 0.582398 0.776724 0.582398 1.00746V16.6529C0.582072 16.9663 0.757162 17.2535 1.03587 17.3968C1.31474 17.5399 1.65024 17.5149 1.90464 17.332L6.58232 13.9789L11.2602 17.3319C11.5147 17.5145 11.8499 17.5393 12.1286 17.3962C12.4071 17.253 12.5824 16.966 12.5824 16.6529V1.00746C12.5824 0.776724 12.3952 0.589722 12.1645 0.589722ZM11.7468 16.6527L6.82594 13.1253C6.68039 13.021 6.48457 13.021 6.33918 13.1253L1.4182 16.6529V1.4252H11.7468V16.6527Z", "fill", "white"], [1, "header_user__profile", "dropdown", "dropdown-right-bottom"], ["href", "#", "id", "profile", 1, "dropdown-toggle", 3, "click"], [3, "src", "alt"], [1, "dropdown-content"], [1, "sub-dropdown", "dropdown", "dropdown-left-top"], [1, "dropdown-toggle", "on-hover", 3, "title", "click"], [3, "title"], ["href", "/logout", "id", "logout", 3, "title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u0438\u043D\u043E\u041F\u0443\u043B\u044C\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener($event) { return ctx.dropdownToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_20_listener($event) { return ctx.dropdownToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "RU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "UA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.searchValue)("placeholder", "\u0424\u0438\u043B\u044C\u043C\u044B, \u0441\u0435\u0440\u0438\u0430\u043B\u044B, \u0430\u043A\u0442\u0451\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user["avatar"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.user["name"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "\u042F\u0437\u044B\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u042F\u0437\u044B\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "\u0412\u044B\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("\u0412\u044B\u0439\u0442\u0438");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.html'
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    proxy: 'https://cors-anywhere.herokuapp.com/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
/* Parallax */
document.addEventListener('mousemove', parallaxDE);
document.addEventListener('scroll', parallaxDE);
document.addEventListener('scroll', parallaxPure);
document.addEventListener('scroll', parallaxFade);
function parallaxDE(e) {
    document.querySelectorAll('.parallax.de .p-text').forEach(p => {
        // @ts-ignore
        p.style.transform = 'translate(' + ((window.innerWidth / 2 - e.pageX) / 10) + 'px,'
            + (p.parentElement.clientHeight / 2 + ((window.innerHeight / 2 - e.pageY) / 10)) + 'px)';
    });
}
function parallaxPure() {
    document.querySelectorAll('.parallax.pure .p-img').forEach(img => {
        // @ts-ignore
        if (img.dataset.scale === 'out') {
            // @ts-ignore
            img.style.bottom = img.getBoundingClientRect().top + 'px';
            // @ts-ignore
        }
        else if (img.dataset.scale === 'in') {
            // @ts-ignore
            img.style.bottom = img.getBoundingClientRect().top * -1 + 'px';
        }
        else {
            // @ts-ignore
            img.style.top = (img.getBoundingClientRect().top / -1) + 'px';
        }
    });
}
function parallaxFade() {
    document.querySelectorAll('.parallax .p-img').forEach(img => {
        if (img.classList.contains('p-fade')) {
            // @ts-ignore
            img.style.opacity = (
            // @ts-ignore
            img.closest('.parallax').classList.contains('pure') && !img.dataset.scale ? 1 : 1.4) - Math.abs(img.getBoundingClientRect().top / window.innerHeight) + '';
        }
    });
}
/* Parallax END */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\sites\batman\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map