webpackJsonp([13],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabsPageModule", function() { return MainTabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_tabs__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainTabsPageModule = (function () {
    function MainTabsPageModule() {
    }
    MainTabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__main_tabs__["a" /* MainTabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__main_tabs__["a" /* MainTabsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_tabs__["a" /* MainTabsPage */]]
        })
    ], MainTabsPageModule);
    return MainTabsPageModule;
}());

//# sourceMappingURL=main-tabs.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MainTabsPage = (function () {
    function MainTabsPage(nav) {
        this.nav = nav;
        this.tabHome = 'HomePage';
        this.tabCollections = 'CollectionsPage';
        this.tabFeed = 'FeedPage';
        this.tabAccount = 'AccountPage';
        this.tabPools = 'PoolPage';
    }
    MainTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tabs',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\main-tabs\main-tabs.html"*/'<!--\n\n  Generated template for the MainTabsPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-tabs color="primary" selectedIndex="0">\n\n  <ion-tab tabIcon="home" tabTitle="Home" [root]="tabHome"></ion-tab>\n\n  <ion-tab tabIcon="contact" tabTitle="Pools" [root]="tabPools"></ion-tab>\n\n  <ion-tab tabIcon="albums" tabTitle="Collections" [root]="tabCollections"></ion-tab>\n\n  <ion-tab tabIcon="paper" tabTitle="Feed" [root]="tabFeed"></ion-tab>\n\n  <ion-tab tabIcon="contact" tabTitle="Account" [root]="tabAccount"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\main-tabs\main-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], MainTabsPage);
    return MainTabsPage;
}());

//# sourceMappingURL=main-tabs.js.map

/***/ })

});
//# sourceMappingURL=13.js.map