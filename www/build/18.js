webpackJsonp([18],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsPageModule", function() { return CollectionsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collections__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CollectionsPageModule = (function () {
    function CollectionsPageModule() {
    }
    CollectionsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__collections__["a" /* CollectionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__collections__["a" /* CollectionsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__collections__["a" /* CollectionsPage */]]
        })
    ], CollectionsPageModule);
    return CollectionsPageModule;
}());

//# sourceMappingURL=collections.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__(198);
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
var CollectionsPage = (function () {
    function CollectionsPage(nav, collectionService, app) {
        this.nav = nav;
        this.collectionService = collectionService;
        this.app = app;
        // set sample data
        this.collections = collectionService.getAll();
    }
    // add bookmark
    CollectionsPage.prototype.addBookMark = function (collection) {
        collection.bookmarked = !collection.bookmarked;
    };
    // view a collection
    CollectionsPage.prototype.goToCollection = function (id) {
        this.app.getRootNav().push('PlacesPage');
    };
    CollectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collections',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\collections\collections.html"*/'<!--\n\n  Generated template for the CollectionsPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Collections</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="collections">\n\n  <ion-list>\n\n    <ion-item class="margin-top" *ngFor="let collection of collections"\n\n              [ngStyle]="{\'background-image\': \'url(\' + collection.background + \')\'}">\n\n      <div class="item-info">\n\n        <ion-icon class="bookmark-icon" name="bookmark" color="primary"  [hidden]="!collection.bookmarked"\n\n                  (click)="addBookMark(collection)"></ion-icon>\n\n        <ion-icon class="bookmark-icon" name="bookmark-outline" color="light"  [hidden]="collection.bookmarked"\n\n                  (click)="addBookMark(collection)"></ion-icon>\n\n        <div class="text-sm light" (click)="goToCollection(collection.id)">{{ collection.num_places }} PLACE &bull; {{\n\n          collection.num_bookmarks }} BOOKMARKS\n\n        </div>\n\n        <h3 class="light" (click)="goToCollection(collection.id)">{{ collection.name }}</h3>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\collections\collections.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], CollectionsPage);
    return CollectionsPage;
}());

//# sourceMappingURL=collections.js.map

/***/ })

});
//# sourceMappingURL=18.js.map