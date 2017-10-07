webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"home.module"
	],
	"app/products/products.module": [
		"../../../../../src/app/products/products.module.ts",
		"products.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header-top></app-header-top>\n<app-header-bottom></app-header-bottom>\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <h2 [routerLink]=\"['/product/box']\">Click here to go to product page</h2> -->\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_component_page_not_found_component_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_top_header_top_component__ = __webpack_require__("../../../../../src/app/header-top/header-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_bottom_header_bottom_component__ = __webpack_require__("../../../../../src/app/header-bottom/header-bottom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_bottom_header_products_card_header_products_card_component__ = __webpack_require__("../../../../../src/app/header-bottom/header-products-card/header-products-card.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Bootstrap

//Angular Fire Base




//routing Components

//importing the Services
//components





//services


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__page_not_found_component_page_not_found_component_component__["a" /* PageNotFoundComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_top_header_top_component__["a" /* HeaderTopComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_bottom_header_bottom_component__["a" /* HeaderBottomComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_bottom_header_products_card_header_products_card_component__["a" /* HeaderProductsCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuthModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_window_service__["a" /* WindowService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_component_page_not_found_component_component__ = __webpack_require__("../../../../../src/app/page-not-found-component/page-not-found-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//components

//importing the Child Routes
// import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'products', loadChildren: 'app/products/products.module#ProductsModule' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_component_page_not_found_component_component__["a" /* PageNotFoundComponentComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                enableTracing: false,
            })
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-wrapper {\n    border-top: 1px solid #eee;\n    background-color: #333;\n    color: #c6c7cb;\n    /* To be removed after implementation of footer content */\n    height: 200px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\n  <div class=\"container-fluid\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-bottom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 480px) {\n  .nm-pull-right {\n    float: right;\n  }\n  ul li.mobile-search-products-list-item {\n    display: none;\n  }\n  .header-bottom-wrapper {\n    height: 68px;\n    border-bottom: 1px solid #eee;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n  }\n  img {\n    height: 50%;\n  }\n  ul {\n    list-style-type: none;\n    margin-bottom: 0;\n    color: #777;\n    font-size: 14px;\n    margin-left: auto;\n  }\n  ul li {\n    display: inline;\n    padding-left: 15px;\n    padding-right: 15px;\n    transition: visibility 0s, opacity 0.2s, top 0.2s ease-in;\n    cursor: pointer;\n    position: relative;\n  }\n  ul li:hover {\n    color: #6daf29;\n  }\n  input[type='text'] {\n    outline: none;\n    right: 0;\n    height: auto;\n    padding: 6px 30px 6px 8px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    transition: all 0.4s ease-in;\n    opacity: 0;\n    width: 0;\n  }\n  .expand input[type='text'] {\n    opacity: 1;\n    width: 200px;\n  }\n  li .fa.fa-search {\n    position: absolute;\n    top: 0;\n    right: 14px;\n  }\n  .fa-caret-down:before {\n    content: \"\\F0D7\";\n    margin-left: 6px;\n  }\n  .products {\n    position: relative;\n    display: inline-block;\n  }\n  .products-card {\n    transition: 0.4s all ease-in;\n    visibility: hidden;\n    opacity: 0;\n    top: 54px;\n    left: -100px;\n    right: -20px;\n    height: 50vh;\n  }\n  .products-card.open {\n    visibility: visible;\n    opacity: 1;\n    top: 44px;\n  }\n  .fa.fa-bars {\n    display: none;\n  }\n}\n\n@media only screen and (max-width: 479px) {\n  .products-card {\n    left: 2px;\n    right: 2px;\n  }\n  .home-icon-list-item,\n  .fa.fa-home,\n  .fa.fa-caret-down {\n    display: none;\n  }\n  .nm-pull-right {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    z-index: 50;\n    background: rgba(0, 0, 0, 0.9);\n    color: white;\n    left: -100vw;\n    margin-bottom: 0;\n    padding: 0;\n    transition: 0.2s left ease-in-out;\n    overflow-y: auto;\n  }\n  .nm-pull-right.open {\n    left: 0;\n  }\n  .mobile-search-products {\n    margin: 0px auto;\n  }\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    list-style-type: none;\n  }\n  li {\n    font-size: 14px;\n    color: #c6c7cb;\n    border-bottom: 1px solid #3a3a3a;\n    padding: 5px 0 10px 0;\n    margin: 8px 30px;\n    font-weight: 700;\n  }\n  .search-box {\n    display: none;\n  }\n  .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n\n  .logo {\n    width: 60%;\n    padding: 10px;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-bottom.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-bottom-wrapper\">\n  <div class=\"container\">\n    <img src=\"http://pimg.tradeindia.com/51432/7/template_photo_1.jpg\" alt=\"saaskin logo\" class=\"logo\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\" (click)=\"mobileOpenMenu($event)\"></i>\n    <ul class=\"nm-pull-right\" #msm>\n      <li class=\"mobile-search-products-list-item\"><input type=\"text\" class=\"form-control mobile-search-products\" placeholder=\"Search Products\"></li>\n      <li class=\"home-icon-list-item\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i></li>\n      <li>Company Profile</li>\n      <li class=\"products-dropdown\">\n        <div class=\"products\" (click)=\"onClickOurProductsButton($event)\">\n          <span>Our Products</span><i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </div>\n        <app-header-products-card class=\"products-card\" #pc></app-header-products-card>\n      </li>\n      <li class=\"search-box\" #sb>\n        <input type=\"text\">\n        <i class=\"fa fa-search\" aria-hidden=\"true\" (click)=\"toggleSearchBox($event)\"></i>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-bottom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderBottomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_window_service__ = __webpack_require__("../../../../../src/app/services/window.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_products_card_header_products_card_component__ = __webpack_require__("../../../../../src/app/header-bottom/header-products-card/header-products-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderBottomComponent = (function () {
    function HeaderBottomComponent(window, router) {
        this.window = window;
        this.router = router;
    }
    HeaderBottomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSwipeHandlers();
        this.router.events.subscribe(function (routerEvent) {
            _this.hideProductsCard();
        });
    };
    HeaderBottomComponent.prototype.hideProductsCard = function () {
        var classes = Array.from(this.productCardE.nativeElement.classList);
        if (classes.indexOf('open') > -1) {
            this.productCardE.nativeElement.classList.remove('open');
        }
    };
    HeaderBottomComponent.prototype.onDocumentClick = function (event) {
        if (!this.hasSomeParentTheClass(event.target, 'search-box')) {
            this.searchBox.nativeElement.classList.remove('expand');
        }
        if (!this.hasSomeParentTheClass(event.target, 'products-dropdown')) {
            this.productCardE.nativeElement.classList.remove('open');
        }
        if (!this.hasSomeParentTheClass(event.target, 'nm-pull-right') && !this.hasSomeParentTheClass(event.target, 'fa-bars')) {
            this.mobileSideMenu.nativeElement.classList.remove('open');
        }
    };
    HeaderBottomComponent.prototype.toggleSearchBox = function (event) {
        var classes = Array.from(this.searchBox.nativeElement.classList);
        if (classes.indexOf('expand') > -1) {
            this.searchBox.nativeElement.classList.remove('expand');
        }
        else {
            this.searchBox.nativeElement.classList.add('expand');
        }
    };
    HeaderBottomComponent.prototype.hasSomeParentTheClass = function (element, classname) {
        if (element.className.split(' ').indexOf(classname) > -1)
            return true;
        return element.parentNode && element.parentNode != document && this.hasSomeParentTheClass(element.parentNode, classname);
    };
    HeaderBottomComponent.prototype.onClickOurProductsButton = function (event) {
        this.toggleProductsCard(event);
        this.productCard.focusOnSearchBox();
    };
    HeaderBottomComponent.prototype.toggleProductsCard = function (event) {
        var classes = Array.from(this.productCardE.nativeElement.classList);
        if (classes.indexOf('open') > -1) {
            this.productCardE.nativeElement.classList.remove('open');
        }
        else {
            this.productCardE.nativeElement.classList.add('open');
        }
    };
    // Mobile Methods
    HeaderBottomComponent.prototype.mobileOpenMenu = function (event) {
        var classes = Array.from(this.mobileSideMenu.nativeElement.classList);
        if (classes.indexOf('open') > -1) {
            this.mobileSideMenu.nativeElement.classList.remove('open');
        }
        else {
            this.mobileSideMenu.nativeElement.classList.add('open');
        }
    };
    HeaderBottomComponent.prototype.onSwipeHandlers = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__(document).on("swipeleft", function () {
            console.log("Swipe Happening!");
        });
    };
    return HeaderBottomComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sb'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], HeaderBottomComponent.prototype, "searchBox", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pc', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], HeaderBottomComponent.prototype, "productCardE", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('pc'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__header_products_card_header_products_card_component__["a" /* HeaderProductsCardComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__header_products_card_header_products_card_component__["a" /* HeaderProductsCardComponent */]) === "function" && _c || Object)
], HeaderBottomComponent.prototype, "productCard", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('msm'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _d || Object)
], HeaderBottomComponent.prototype, "mobileSideMenu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeaderBottomComponent.prototype, "onDocumentClick", null);
HeaderBottomComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header-bottom',
        template: __webpack_require__("../../../../../src/app/header-bottom/header-bottom.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-bottom/header-bottom.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_window_service__["a" /* WindowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_window_service__["a" /* WindowService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], HeaderBottomComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=header-bottom.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-products-card/header-products-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media only screen and (min-width: 480px) {\n    :host {\n        display: inline-block;\n        position: absolute;\n        z-index: 1;\n    }\n    \n    .card {\n        background: white;\n        /* 4dp shadow */\n        box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2);\n        padding-bottom: 10px;\n        border-radius: 4px;\n        color: #777;\n        overflow-y: auto;\n        height: 60vh;\n    }\n    \n    ul {\n        list-style-type: none;\n        padding: 0;\n    }\n    \n    .category {\n        font-weight: 700;\n        font-size: 16px;\n        padding-top: 10px;\n    }\n    \n    ul li a {\n        color: #7b7b7b;\n    }\n    \n    li {\n        padding: 2px 20px;\n        border-bottom: 1px solid #f3f3f3;\n    }\n    \n    li:not(.category):hover {\n        background: #efefef;\n    }\n    \n    .searchbox {\n        width: 100%;\n        border-bottom: 1px solid #f3f3f3;\n        border-top: 0;\n        border-left: 0;\n        border-right: 0;\n        border-bottom-left-radius: 0;\n        border-bottom-right-radius: 0;\n        color: #777;\n    }\n}\n\n@media only screen and (max-width: 479px) {\n    .searchbox {\n        display: none;\n    }\n\n    ul {\n        padding: 0;\n        margin: 0;\n        list-style-type: none;\n    }\n\n    li {\n        font-size: 14px;\n        color: #c6c7cb;\n        border-bottom: 1px solid #3a3a3a;\n        padding: 5px 0 10px 0;\n        margin: 8px 30px;\n        font-weight: 500;\n    }\n\n    .category {\n        font-weight: 700;\n    }\n\n    a {\n        color: #c6c7cb;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-products-card/header-products-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <input type=\"text\" placeholder=\"Search Products\" class=\"form-control searchbox\" #sb>\n  <ul *ngFor=\"let category of categoryViseProducts\">\n    <li class=\"category\">{{category.category}}</li>\n    <li *ngFor=\"let product of category.products\">\n      <a [routerLink]=\"product.navigateTo\">{{product.product}}</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header-bottom/header-products-card/header-products-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderProductsCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderProductsCardComponent = (function () {
    function HeaderProductsCardComponent() {
    }
    HeaderProductsCardComponent.prototype.ngOnInit = function () {
        this.initProducts();
    };
    HeaderProductsCardComponent.prototype.focusOnSearchBox = function () {
        this.searchBox.nativeElement.focus();
    };
    HeaderProductsCardComponent.prototype.initProducts = function () {
        this.categoryViseProducts = [{
                category: "Precision Machined",
                products: [{
                        "product": "PP Medical Sleeve",
                        "navigateTo": "http://www.saaskin.com/pp-medical-sleeve-2320864.html"
                    }, {
                        "product": "Vespel Rotor Seal",
                        "navigateTo": "http://www.saaskin.com/vespel-rotor-seal-2320865.html"
                    }, {
                        "product": "Peek Ferrule",
                        "navigateTo": "http://www.saaskin.com/peek-ferrule-2320866.html"
                    }, {
                        "product": "Magnesium Machined Part",
                        "navigateTo": "http://www.saaskin.com/magnesium-machined-part-2320860.html"
                    }, {
                        "product": "Magnesium Antenna Part",
                        "navigateTo": "http://www.saaskin.com/magnesium-antenna-part-2320861.html"
                    }, {
                        "product": "Delrin Aerospace Part",
                        "navigateTo": "http://www.saaskin.com/delrin-aerospace-part-2403380.html"
                    }, {
                        "product": "Delrin Adapter",
                        "navigateTo": "http://www.saaskin.com/delrin-adapter-2403383.html"
                    }, {
                        "product": "Aluminium TBM Ring",
                        "navigateTo": "http://www.saaskin.com/aluminium-tbm-ring-2403462.html"
                    }, {
                        "product": "Peek Machined",
                        "navigateTo": "http://www.saaskin.com/peek-machined-2403385.html"
                    }, {
                        "product": "Aerospace Aluminium Interlock",
                        "navigateTo": "http://www.saaskin.com/aerospace-aluminium-interlock-2403472.html"
                    }, {
                        "product": "Aluminium Tyre Building Part",
                        "navigateTo": "http://www.saaskin.com/aluminium-tyre-building-part-2811104.html"
                    }, {
                        "product": "G10 Defence Part",
                        "navigateTo": "http://www.saaskin.com/g10-defence-part-3224826.html"
                    }, {
                        "product": "Brass Fittings",
                        "navigateTo": "http://www.saaskin.com/brass-fittings-3224816.html"
                    }, {
                        "product": "Brass Turned Parts",
                        "navigateTo": "http://www.saaskin.com/brass-turned-parts-3224819.html"
                    }, {
                        "product": "Peek Fitting",
                        "navigateTo": "http://www.saaskin.com/peek-fitting-3224831.html"
                    }, {
                        "product": "CNC Defence Component",
                        "navigateTo": "http://www.saaskin.com/cnc-defence-component-3224839.html"
                    }, {
                        "product": "MS Stud",
                        "navigateTo": "http://www.saaskin.com/ms-stud-3224865.html"
                    }, {
                        "product": "Aerospace Shaft",
                        "navigateTo": "http://www.saaskin.com/aerospace-shaft-3224867.html"
                    }, {
                        "product": "SS Medical Tube",
                        "navigateTo": "http://www.saaskin.com/ss-medical-tube-3224897.html"
                    }, {
                        "product": "Hydrualic Manifold Assembly",
                        "navigateTo": "http://www.saaskin.com/hydrualic-manifold-assembly-3439186.html"
                    }, {
                        "product": "SS Rings",
                        "navigateTo": "http://www.saaskin.com/ss-rings-3224903.html"
                    }, {
                        "product": "Aerospace Assembly",
                        "navigateTo": "http://www.saaskin.com/aerospace-assembly-3439190.html"
                    }, {
                        "product": "Aluminium Suspension Hook",
                        "navigateTo": "http://www.saaskin.com/aluminium-suspension-hook-3224906.html"
                    }, {
                        "product": "Cashew  Machine Blade",
                        "navigateTo": "http://www.saaskin.com/cashew-machine-blade-3224907.html"
                    }, {
                        "product": "Hydraulic Valve Manifold",
                        "navigateTo": "http://www.saaskin.com/hydraulic-valve-manifold-3224914.html"
                    }, {
                        "product": "HPLC Analytical Seals",
                        "navigateTo": "http://www.saaskin.com/hplc-analytical-seals-3224916.html"
                    }, {
                        "product": "SS Medical handle",
                        "navigateTo": "http://www.saaskin.com/ss-medical-handle-3225065.html"
                    }, {
                        "product": "Aluminium Jaw",
                        "navigateTo": "http://www.saaskin.com/aluminium-jaw-3225068.html"
                    }, {
                        "product": "Aluminium Medical Lever",
                        "navigateTo": "http://www.saaskin.com/aluminium-medical-lever-3225071.html"
                    }, {
                        "product": "Machine Building Levers",
                        "navigateTo": "http://www.saaskin.com/machine-building-levers-3225073.html"
                    }, {
                        "product": "Aluminium Manifold",
                        "navigateTo": "http://www.saaskin.com/aluminium-manifold-3225075.html"
                    }, {
                        "product": "Aluminium Infusion Pump Part",
                        "navigateTo": "http://www.saaskin.com/aluminium-infusion-pump-part-3225081.html"
                    }, {
                        "product": "Aluminium Medical Body",
                        "navigateTo": "http://www.saaskin.com/aluminium-medical-body-3225088.html"
                    }, {
                        "product": "Aluminum Valve Block",
                        "navigateTo": "http://www.saaskin.com/aluminum-valve-block-3225092.html"
                    }, {
                        "product": "Aluminum Housing Drum",
                        "navigateTo": "http://www.saaskin.com/aluminum-housing-drum-3225096.html"
                    }, {
                        "product": "Aluminium Pole Clamp",
                        "navigateTo": "http://www.saaskin.com/aluminium-pole-clamp-3225099.html"
                    }, {
                        "product": "Manifold Block",
                        "navigateTo": "http://www.saaskin.com/manifold-block-3235860.html"
                    }, {
                        "product": "Aluminium Aerospace Component",
                        "navigateTo": "http://www.saaskin.com/aluminium-aerospace-component-3235862.html"
                    }, {
                        "product": "Defence Aluminium Extrusion",
                        "navigateTo": "http://www.saaskin.com/defence-aluminium-extrusion-3235864.html"
                    }, {
                        "product": "Aluminium Electronic Board",
                        "navigateTo": "http://www.saaskin.com/aluminium-electronic-board-3235866.html"
                    }, {
                        "product": "Aluminium Fixture",
                        "navigateTo": "http://www.saaskin.com/aluminium-fixture-3235871.html"
                    }, {
                        "product": "Aluminium Frame",
                        "navigateTo": "http://www.saaskin.com/aluminium-frame-3235872.html"
                    }, {
                        "product": "Aluminium Masked Anodized Part",
                        "navigateTo": "http://www.saaskin.com/aluminium-masked-anodized-part-3235874.html"
                    }, {
                        "product": "Aluminium Pulley",
                        "navigateTo": "http://www.saaskin.com/aluminium-pulley-3235875.html"
                    }, {
                        "product": "Aerospace Milling Part",
                        "navigateTo": "http://www.saaskin.com/aerospace-milling-part-3235877.html"
                    }, {
                        "product": "Aluminium Milling Component",
                        "navigateTo": "http://www.saaskin.com/aluminium-milling-component-3235878.html"
                    }, {
                        "product": "Electronic Aluminium CNC Part",
                        "navigateTo": "http://www.saaskin.com/electronic-aluminium-cnc-part-3235881.html"
                    }, {
                        "product": "Aluminium Side Cover",
                        "navigateTo": "http://www.saaskin.com/aluminium-side-cover-3235884.html"
                    }, {
                        "product": "Aluminium Support Plate",
                        "navigateTo": "http://www.saaskin.com/aluminium-support-plate-3235886.html"
                    }, {
                        "product": "Aluminium Top Plate",
                        "navigateTo": "http://www.saaskin.com/aluminium-top-plate-3235888.html"
                    }, {
                        "product": "Aluminium Handle",
                        "navigateTo": "http://www.saaskin.com/aluminium-handle-3438679.html"
                    }, {
                        "product": "Aluminium Timer Cam",
                        "navigateTo": "http://www.saaskin.com/aluminium-timer-cam-3438987.html"
                    }, {
                        "product": "Aluminium Stepped Block",
                        "navigateTo": "http://www.saaskin.com/aluminium-stepped-block-3438989.html"
                    }, {
                        "product": "Aluminium Rings",
                        "navigateTo": "http://www.saaskin.com/aluminium-rings-3438990.html"
                    }, {
                        "product": "Aluminium Plasma Coated Tray",
                        "navigateTo": "http://www.saaskin.com/aluminium-plasma-coated-tray-3438991.html"
                    }, {
                        "product": "Aluminium Medical Plate",
                        "navigateTo": "http://www.saaskin.com/aluminium-medical-plate-3438993.html"
                    }, {
                        "product": "Aluminium Housing",
                        "navigateTo": "http://www.saaskin.com/aluminium-housing-3438994.html"
                    }, {
                        "product": "Aluminium Helicoil Flange",
                        "navigateTo": "http://www.saaskin.com/aluminium-helicoil-flange-3438995.html"
                    }, {
                        "product": "Aluminium Hammock Buckle",
                        "navigateTo": "http://www.saaskin.com/aluminium-hammock-buckle-3438996.html"
                    }, {
                        "product": "Aluminium Flange",
                        "navigateTo": "http://www.saaskin.com/aluminium-flange-3438997.html"
                    }, {
                        "product": "Aluminium Filter Blocks",
                        "navigateTo": "http://www.saaskin.com/aluminium-filter-blocks-3438998.html"
                    }, {
                        "product": "Aluminium Engraved Part",
                        "navigateTo": "http://www.saaskin.com/aluminium-engraved-part-3439000.html"
                    }, {
                        "product": "Aluminium Electronic Base Plate",
                        "navigateTo": "http://www.saaskin.com/aluminium-electronic-base-plate-3439001.html"
                    }, {
                        "product": "Aluminium Electrical Parts",
                        "navigateTo": "http://www.saaskin.com/aluminium-electrical-parts-3439002.html"
                    }, {
                        "product": "Aluminium Defence Part",
                        "navigateTo": "http://www.saaskin.com/aluminium-defence-part-3439003.html"
                    }, {
                        "product": "Aluminium Clamp",
                        "navigateTo": "http://www.saaskin.com/aluminium-clamp-3439005.html"
                    }, {
                        "product": "Aluminium Casing",
                        "navigateTo": "http://www.saaskin.com/aluminium-casing-3439007.html"
                    }, {
                        "product": "Aluminium Bracket",
                        "navigateTo": "http://www.saaskin.com/aluminium-bracket-3439008.html"
                    }, {
                        "product": "Aluminium Anodized Parts",
                        "navigateTo": "http://www.saaskin.com/aluminium-anodized-parts-3439009.html"
                    }, {
                        "product": "Aluminium Analytical Cap",
                        "navigateTo": "http://www.saaskin.com/aluminium-analytical-cap-3439010.html"
                    }, {
                        "product": "Aerospace Aluminium Frame",
                        "navigateTo": "http://www.saaskin.com/aerospace-aluminium-frame-3439024.html"
                    }, {
                        "product": "Brass Gear",
                        "navigateTo": "http://www.saaskin.com/brass-gear-3439039.html"
                    }, {
                        "product": "Brass Seat",
                        "navigateTo": "http://www.saaskin.com/brass-seat-3439041.html"
                    }, {
                        "product": "Brass Shaft",
                        "navigateTo": "http://www.saaskin.com/brass-shaft-3439042.html"
                    }, {
                        "product": "Brass Valve",
                        "navigateTo": "http://www.saaskin.com/brass-valve-3439044.html"
                    }, {
                        "product": "Delrin Medical Knob",
                        "navigateTo": "http://www.saaskin.com/delrin-medical-knob-3439045.html"
                    }, {
                        "product": "Band Saw Blade",
                        "navigateTo": "http://www.saaskin.com/band-saw-blade-3439049.html"
                    }, {
                        "product": "Circualr Saw Blade",
                        "navigateTo": "http://www.saaskin.com/circualr-saw-blade-3439053.html"
                    }, {
                        "product": "CNC Aerospace Turned Parts",
                        "navigateTo": "http://www.saaskin.com/cnc-aerospace-turned-parts-3439055.html"
                    }, {
                        "product": "CNC Turned Part",
                        "navigateTo": "http://www.saaskin.com/cnc-turned-part-3439060.html"
                    }, {
                        "product": "Collet",
                        "navigateTo": "http://www.saaskin.com/collet-3439064.html"
                    }, {
                        "product": "Copper Gasket",
                        "navigateTo": "http://www.saaskin.com/copper-gasket-3439075.html"
                    }, {
                        "product": "Copper Washer",
                        "navigateTo": "http://www.saaskin.com/copper-washer-3439076.html"
                    }, {
                        "product": "Defence TItanium Shaft",
                        "navigateTo": "http://www.saaskin.com/defence-titanium-shaft-3439078.html"
                    }, {
                        "product": "HSS Blades",
                        "navigateTo": "http://www.saaskin.com/hss-blades-3439080.html"
                    }, {
                        "product": "Industrial Knives",
                        "navigateTo": "http://www.saaskin.com/industrial-knives-3439081.html"
                    }, {
                        "product": "Magnetic Knife",
                        "navigateTo": "http://www.saaskin.com/magnetic-knife-3439082.html"
                    }, {
                        "product": "MS Threaded Part",
                        "navigateTo": "http://www.saaskin.com/ms-threaded-part-3439083.html"
                    }, {
                        "product": "Pin",
                        "navigateTo": "http://www.saaskin.com/pin-3439085.html"
                    }, {
                        "product": "Precision Machined Parts",
                        "navigateTo": "http://www.saaskin.com/precision-machined-parts-3439086.html"
                    }, {
                        "product": "Shearing Blades",
                        "navigateTo": "http://www.saaskin.com/shearing-blades-3439094.html"
                    }, {
                        "product": "SS Analytical cylinder",
                        "navigateTo": "http://www.saaskin.com/ss-analytical-cylinder-3439104.html"
                    }, {
                        "product": "SS HPLC Fittings",
                        "navigateTo": "http://www.saaskin.com/ss-hplc-fittings-3439113.html"
                    }, {
                        "product": "SS Medical Part",
                        "navigateTo": "http://www.saaskin.com/ss-medical-part-3439116.html"
                    }, {
                        "product": "SS Plunger Sleeve",
                        "navigateTo": "http://www.saaskin.com/ss-plunger-sleeve-3439120.html"
                    }, {
                        "product": "Suspension Machined Parts",
                        "navigateTo": "http://www.saaskin.com/suspension-machined-parts-3439126.html"
                    }, {
                        "product": "Terminal Swage Assembly",
                        "navigateTo": "http://www.saaskin.com/terminal-swage-assembly-3439128.html"
                    }, {
                        "product": "Terminal Swage Stud",
                        "navigateTo": "http://www.saaskin.com/terminal-swage-stud-3439131.html"
                    }]
            }, {
                category: "Sheet Metal",
                products: [{
                        "product": "Electronic Assembly",
                        "navigateTo": "http://www.saaskin.com/electronic-assembly-2320869.html"
                    }, {
                        "product": "Control Panel",
                        "navigateTo": "http://www.saaskin.com/control-panel-4056506.html"
                    }, {
                        "product": "Electrical Cabinet",
                        "navigateTo": "http://www.saaskin.com/electrical-cabinet-4056510.html"
                    }, {
                        "product": "Electronic Cabinet",
                        "navigateTo": "http://www.saaskin.com/electronic-cabinet-4056512.html"
                    }, {
                        "product": "Metal Box",
                        "navigateTo": "http://www.saaskin.com/metal-box-4056513.html"
                    }, {
                        "product": "Metal Cabinet",
                        "navigateTo": "http://www.saaskin.com/metal-cabinet-4056524.html"
                    }, {
                        "product": "Metal Enclosures",
                        "navigateTo": "http://www.saaskin.com/metal-enclosures-4056525.html"
                    }, {
                        "product": "Metal Frame",
                        "navigateTo": "http://www.saaskin.com/metal-frame-4056532.html"
                    }, {
                        "product": "Metal Panel",
                        "navigateTo": "http://www.saaskin.com/metal-panel-4056565.html"
                    }, {
                        "product": "Metal Rack",
                        "navigateTo": "http://www.saaskin.com/metal-rack-4056593.html"
                    }, {
                        "product": "Mounting Panel",
                        "navigateTo": "http://www.saaskin.com/mounting-panel-4056613.html"
                    }, {
                        "product": "Sheet Metal Fabrication",
                        "navigateTo": "http://www.saaskin.com/sheet-metal-fabrication-4056623.html"
                    }, {
                        "product": "Sheet Metal Tray",
                        "navigateTo": "http://www.saaskin.com/sheet-metal-tray-4056630.html"
                    }, {
                        "product": "Stabilizer Cabinet",
                        "navigateTo": "http://www.saaskin.com/stabilizer-cabinet-4056632.html"
                    }, {
                        "product": "System Enclosures",
                        "navigateTo": "http://www.saaskin.com/system-enclosures-4056637.html"
                    }, {
                        "product": "Terminal Boxes",
                        "navigateTo": "http://www.saaskin.com/terminal-boxes-4056643.html"
                    }, {
                        "product": "UPS Cabinet",
                        "navigateTo": "http://www.saaskin.com/ups-cabinet-4056645.html"
                    }]
            }, {
                category: "Dies and Molds",
                products: [{
                        "product": "Aluminium Sleeve",
                        "navigateTo": "http://www.saaskin.com/aluminium-sleeve-2320872.html"
                    }, {
                        "product": "Sheet Metal Part",
                        "navigateTo": "http://www.saaskin.com/sheet-metal-part-2320875.html"
                    }, {
                        "product": "Rubber Bellow",
                        "navigateTo": "http://www.saaskin.com/rubber-bellow-2320882.html"
                    }, {
                        "product": "Rubber Grommet",
                        "navigateTo": "http://www.saaskin.com/rubber-grommet-2403334.html"
                    }, {
                        "product": "Rubber Washer",
                        "navigateTo": "http://www.saaskin.com/rubber-washer-2403340.html"
                    }, {
                        "product": "Rubber Gaskets",
                        "navigateTo": "http://www.saaskin.com/rubber-gaskets-2403341.html"
                    }, {
                        "product": "Rubber Pad Protomold",
                        "navigateTo": "http://www.saaskin.com/rubber-pad-protomold-3224909.html"
                    }, {
                        "product": "Tranmission Gasket",
                        "navigateTo": "http://www.saaskin.com/tranmission-gasket-3224912.html"
                    }, {
                        "product": "SS Name Plates",
                        "navigateTo": "http://www.saaskin.com/ss-name-plates-3224891.html"
                    }, {
                        "product": "Cosmetic Caps",
                        "navigateTo": "http://www.saaskin.com/cosmetic-caps-3409440.html"
                    }, {
                        "product": "Cosmetic Sleeve",
                        "navigateTo": "http://www.saaskin.com/cosmetic-sleeve-3409442.html"
                    }, {
                        "product": "SS Deep Draw Shield",
                        "navigateTo": "http://www.saaskin.com/ss-deep-draw-shield-3410480.html"
                    }, {
                        "product": "Sheet Metal Parts",
                        "navigateTo": "http://www.saaskin.com/sheet-metal-parts-3410485.html"
                    }, {
                        "product": "Aluminium Caps",
                        "navigateTo": "http://www.saaskin.com/aluminium-caps-3410580.html"
                    }, {
                        "product": "SS Deep Draw Components",
                        "navigateTo": "http://www.saaskin.com/ss-deep-draw-components-3410606.html"
                    }, {
                        "product": "Brass Bush",
                        "navigateTo": "http://www.saaskin.com/brass-bush-3439265.html"
                    }, {
                        "product": "Copper Annealed Washer",
                        "navigateTo": "http://www.saaskin.com/copper-annealed-washer-3439266.html"
                    }, {
                        "product": "Copper Thin Washer",
                        "navigateTo": "http://www.saaskin.com/copper-thin-washer-3439269.html"
                    }, {
                        "product": "Copper Washer",
                        "navigateTo": "http://www.saaskin.com/copper-washer-3439268.html"
                    }, {
                        "product": "Copper Press Part",
                        "navigateTo": "http://www.saaskin.com/copper-press-part-3439271.html"
                    }, {
                        "product": "Deep Draw Components",
                        "navigateTo": "http://www.saaskin.com/deep-draw-components-3439291.html"
                    }, {
                        "product": "Deep Draw Die",
                        "navigateTo": "http://www.saaskin.com/deep-draw-die-3439292.html"
                    }, {
                        "product": "Defence Lid Parts",
                        "navigateTo": "http://www.saaskin.com/defence-lid-parts-3439293.html"
                    }, {
                        "product": "Medical Vial Tray",
                        "navigateTo": "http://www.saaskin.com/medical-vial-tray-3439298.html"
                    }, {
                        "product": "MS Rings",
                        "navigateTo": "http://www.saaskin.com/ms-rings-3439299.html"
                    }, {
                        "product": "Plastic Junction box Protomold",
                        "navigateTo": "http://www.saaskin.com/plastic-junction-box-protomold-3439300.html"
                    }, {
                        "product": "Press Component",
                        "navigateTo": "http://www.saaskin.com/press-component-3439301.html"
                    }, {
                        "product": "SS Cylinder Liner",
                        "navigateTo": "http://www.saaskin.com/ss-cylinder-liner-3439304.html"
                    }, {
                        "product": "Stamped Part",
                        "navigateTo": "http://www.saaskin.com/stamped-part-3439309.html"
                    }, {
                        "product": "Washing Machine Plastic Insert Mold",
                        "navigateTo": "http://www.saaskin.com/washing-machine-plastic-insert-mold-3439312.html"
                    }]
            }, {
                category: "Solenoid Products",
                products: [{
                        "product": "Bobbin Parts",
                        "navigateTo": "http://www.saaskin.com/bobbin-parts-2403449.html"
                    }, {
                        "product": "Bobbin Winding Parts",
                        "navigateTo": "http://www.saaskin.com/bobbin-winding-parts-2403450.html"
                    }, {
                        "product": "Special Solenoid Accessories",
                        "navigateTo": "http://www.saaskin.com/special-solenoid-accessories-2403457.html"
                    }, {
                        "product": "Push Solenoid",
                        "navigateTo": "http://www.saaskin.com/push-solenoid-2436194.html"
                    }, {
                        "product": "Pull Type Solenoid",
                        "navigateTo": "http://www.saaskin.com/pull-type-solenoid-2436228.html"
                    }, {
                        "product": "Solenoid Coils",
                        "navigateTo": "http://www.saaskin.com/solenoid-coils-2979206.html"
                    }, {
                        "product": "Solenoid Coil",
                        "navigateTo": "http://www.saaskin.com/solenoid-coil-2979221.html"
                    }, {
                        "product": "C Frame Solenoid",
                        "navigateTo": "http://www.saaskin.com/c-frame-solenoid-2979225.html"
                    }, {
                        "product": "D Frame Solenoids",
                        "navigateTo": "http://www.saaskin.com/d-frame-solenoids-2979228.html"
                    }, {
                        "product": "Linear Solenoid",
                        "navigateTo": "http://www.saaskin.com/linear-solenoid-2979229.html"
                    }, {
                        "product": "Rotary Solenoid",
                        "navigateTo": "http://www.saaskin.com/rotary-solenoid-2979231.html"
                    }, {
                        "product": "Tubular Solenoid",
                        "navigateTo": "http://www.saaskin.com/tubular-solenoid-2979234.html"
                    }, {
                        "product": "Speed Governor Solenoids",
                        "navigateTo": "http://www.saaskin.com/speed-governor-solenoids-2979237.html"
                    }, {
                        "product": "Latching Solenoid",
                        "navigateTo": "http://www.saaskin.com/latching-solenoid-2979239.html"
                    }, {
                        "product": "Solenoid Actutator",
                        "navigateTo": "http://www.saaskin.com/solenoid-actutator-2979240.html"
                    }, {
                        "product": "Cold Advanced Solenoid",
                        "navigateTo": "http://www.saaskin.com/cold-advanced-solenoid-2979242.html"
                    }, {
                        "product": "Throttle Solenoid",
                        "navigateTo": "http://www.saaskin.com/throttle-solenoid-2979252.html"
                    }, {
                        "product": "Customized Solenoid",
                        "navigateTo": "http://www.saaskin.com/customized-solenoid-3439505.html"
                    }, {
                        "product": "Frame Type Solenoids",
                        "navigateTo": "http://www.saaskin.com/frame-type-solenoids-3439507.html"
                    }, {
                        "product": "Solenoid Coil Plunger",
                        "navigateTo": "http://www.saaskin.com/solenoid-coil-plunger-3439509.html"
                    }, {
                        "product": "EGR Solenoid Coil",
                        "navigateTo": "http://www.saaskin.com/egr-solenoid-coil-3439511.html"
                    }, {
                        "product": "Speed Sensor",
                        "navigateTo": "http://www.saaskin.com/speed-sensor-3439514.html"
                    }, {
                        "product": "Speed Solenoid",
                        "navigateTo": "http://www.saaskin.com/speed-solenoid-3439517.html"
                    }, {
                        "product": "Speed Solenoids",
                        "navigateTo": "http://www.saaskin.com/speed-solenoids-3439519.html"
                    }, {
                        "product": "Steering Solenoid",
                        "navigateTo": "http://www.saaskin.com/steering-solenoid-3439523.html"
                    }]
            }];
    };
    return HeaderProductsCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('sb'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], HeaderProductsCardComponent.prototype, "searchBox", void 0);
HeaderProductsCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header-products-card',
        template: __webpack_require__("../../../../../src/app/header-bottom/header-products-card/header-products-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-bottom/header-products-card/header-products-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderProductsCardComponent);

var _a;
//# sourceMappingURL=header-products-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-top/header-top.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-top-wrapper {\n    height: 30px;\n    border-bottom: 1px solid #eee;\n    color: #eeeeee;\n    background: #6daf29;\n    font-size: 12px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n\n.pull-right ul {\n    list-style-type: none;\n    margin-bottom: 0;\n    font-size: 12px;\n    padding: 0;\n}\n\n.pull-right ul li {\n    display: inline;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-left: 1px solid #eee;\n}\n\n.pull-right ul li:first-child {\n    border-left: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-top/header-top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-top-wrapper\">\n  <div class=\"container\">\n    <div class=\"pull-left\">\n\n    </div>\n    <div class=\"pull-right\">\n      <ul>\n        <li>+91 9762 542 738</li>\n        <li>Send Enquiry</li>\n        <li>Send SMS</li>\n        <li>Call Us Free</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header-top/header-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderTopComponent = (function () {
    function HeaderTopComponent() {
    }
    HeaderTopComponent.prototype.ngOnInit = function () {
    };
    return HeaderTopComponent;
}());
HeaderTopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header-top',
        template: __webpack_require__("../../../../../src/app/header-top/header-top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-top/header-top.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderTopComponent);

//# sourceMappingURL=header-top.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found-component/page-not-found-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponentComponent = (function () {
    function PageNotFoundComponentComponent() {
    }
    PageNotFoundComponentComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponentComponent;
}());
PageNotFoundComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found-component',
        template: "\n  <h2>Page not found</h2>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponentComponent);

//# sourceMappingURL=page-not-found-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowService;
}());
WindowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WindowService);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCQfH5WDyoBlxFZ9Kp7FdXG-KJX7Qj-c-U',
        authDomain: 'fir-8d8ad.firebaseapp.com',
        databaseURL: 'https://fir-8d8ad.firebaseio.com',
        projectId: 'fir-8d8ad',
        storageBucket: 'fir-8d8ad.appspot.com',
        messagingSenderId: '733966203244'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map