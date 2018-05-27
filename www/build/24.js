webpackJsonp([24],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPoolPageModule", function() { return AddPoolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_pool__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddPoolPageModule = (function () {
    function AddPoolPageModule() {
    }
    AddPoolPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_pool__["a" /* AddPoolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_pool__["a" /* AddPoolPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_pool__["a" /* AddPoolPage */]
            ]
        })
    ], AddPoolPageModule);
    return AddPoolPageModule;
}());

//# sourceMappingURL=add-pool.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pool_pool__ = __webpack_require__(196);
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
 * Generated class for the AddPoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddPoolPage = (function () {
    function AddPoolPage(navCtrl, navParams, poolProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.poolProvider = poolProvider;
        this.newPool = {
            name: '',
            persons: ''
        };
    }
    AddPoolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPoolPage');
    };
    AddPoolPage.prototype.addPool = function () {
        console.log(this.newPool);
        this.poolProvider.addPool(this.newPool.name, this.newPool.persons).subscribe(function (res) {
        }, function (err) {
        });
        this.navCtrl.pop();
    };
    AddPoolPage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    AddPoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-pool',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\add-pool\add-pool.html"*/'<!--\n\n  Generated template for the AddPoolPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Add Pool</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-item>\n\n    <ion-label>Name</ion-label>\n\n    <ion-input [(ngModel)]="newPool.name" placeholder="e.g 3 Persons Tacos" ></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label>Persons</ion-label>\n\n      <ion-input [(ngModel)]="newPool.persons" type="number" ></ion-input>\n\n  </ion-item>\n\n  <div class = "button button-block padding"> \n\n    &nbsp;\n\n  </div>\n\n\n\n  <button ion-button outline float-right color="secondary" (click)="addPool()" >Add Pool</button>      \n\n  <button ion-button outline float-right   (click)="cancel()" >Cancel</button>      \n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\add-pool\add-pool.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pool_pool__["a" /* PoolProvider */]])
    ], AddPoolPage);
    return AddPoolPage;
}());

//# sourceMappingURL=add-pool.js.map

/***/ })

});
//# sourceMappingURL=24.js.map