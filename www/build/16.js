webpackJsonp([16],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPageModule", function() { return FiltersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FiltersPageModule = (function () {
    function FiltersPageModule() {
    }
    FiltersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__filters__["a" /* FiltersPage */]]
        })
    ], FiltersPageModule);
    return FiltersPageModule;
}());

//# sourceMappingURL=filters.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
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
var FiltersPage = (function () {
    function FiltersPage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        this.sorts = [
            {
                id: 1,
                icon: "ios-pin-outline",
                name: "Distance",
                active: "active",
                sortDirection: false,
                sortAsc: false
            },
            {
                id: 2,
                icon: "star-outline",
                name: "Rating",
                active: "",
                sortDirection: true,
                sortAsc: false
            },
            {
                id: 3,
                icon: "logo-usd",
                name: "Cost",
                active: "",
                sortDirection: true,
                sortAsc: true
            },
            {
                id: 4,
                icon: "md-heart-outline",
                name: "Popularity",
                active: "",
                sortDirection: false,
                sortAsc: false
            }
        ];
    }
    // choose sort by...
    FiltersPage.prototype.chooseSort = function (sort) {
        // if this sort already active
        if (sort.active === 'active') {
            // toggle sort direction
            sort.sortAsc = !sort.sortAsc;
        }
        else {
            for (var i = 0; i < this.sorts.length; i++) {
                if (this.sorts[i].id == sort.id) {
                    this.sorts[i].active = 'active';
                }
                else {
                    this.sorts[i].active = '';
                }
            }
        }
    };
    // hide modal
    FiltersPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    FiltersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-filters',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\filters\filters.html"*/'<!--\n\n  Generated template for the FiltersPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-toolbar color="primary" >\n\n  <ion-title>\n\n    Filters\n\n  </ion-title>\n\n  <ion-buttons start>\n\n    <button  ion-button (click)="dismiss()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </ion-buttons>\n\n  <ion-buttons end>\n\n    <button  ion-button (click)="dismiss()">\n\n      Apply\n\n    </button>\n\n  </ion-buttons>\n\n</ion-toolbar>\n\n\n\n<ion-content class=" common-bg">\n\n  <div text-center margin-top margin-bottom class="secondary">SORT BY</div>\n\n  <ion-grid class="light-bg">\n\n    <ion-row text-center>\n\n      <ion-col col-3 *ngFor="let sort of sorts" [class]="sort.active" (click)="chooseSort(sort)">\n\n        <ion-icon name="{{ sort.icon }}" class="text-lg"></ion-icon>\n\n        <ion-icon name="ios-arrow-round-up" class="text-lg" [hidden]="!sort.sortDirection || !sort.sortAsc"></ion-icon>\n\n        <ion-icon name="ios-arrow-round-down" class="text-lg" [hidden]="!sort.sortDirection || sort.sortAsc"></ion-icon>\n\n        <div>{{ sort.name }}</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div text-center margin-top margin-bottom class="secondary">QUICK FILTERS</div>\n\n  <ion-grid class="light-bg">\n\n    <ion-row text-center>\n\n      <ion-col>\n\n        <ion-checkbox color="secondary"  checked="true"></ion-checkbox>\n\n        <div>Open now</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n        <div>Rate 3.5+</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n        <div>Bookmarked</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <div text-center margin-top margin-bottom class="secondary">COST</div>\n\n  <ion-grid class="light-bg">\n\n    <ion-row text-center>\n\n      <ion-col>\n\n        <ion-icon name="logo-usd"></ion-icon>\n\n        <div>0-10</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon name="logo-usd"></ion-icon>\n\n        <div>10-20</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon name="logo-usd"></ion-icon>\n\n        <div>20-30</div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <ion-icon name="logo-usd"></ion-icon>\n\n        <div>30+</div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div text-center margin-top margin-bottom class="secondary">MORE FIlTERS</div>\n\n  <ion-list padding-bottom class="text-light">\n\n\n\n    <ion-item>\n\n      <ion-label>Online booking</ion-label>\n\n      <ion-checkbox color="secondary"  checked="true"></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Creadit cards</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Happy hours</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Wifi</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Alcohol served</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Sport bars</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Live music</ion-label>\n\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n\n    </ion-item>\n\n\n\n\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\filters\filters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ })

});
//# sourceMappingURL=16.js.map