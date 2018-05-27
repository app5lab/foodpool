webpackJsonp([1],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubpoolPageModule", function() { return SubpoolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subpool__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubpoolPageModule = (function () {
    function SubpoolPageModule() {
    }
    SubpoolPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subpool__["a" /* SubpoolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subpool__["a" /* SubpoolPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__subpool__["a" /* SubpoolPage */]]
        })
    ], SubpoolPageModule);
    return SubpoolPageModule;
}());

//# sourceMappingURL=subpool.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubpoolPage; });
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


/**
 * Generated class for the SubpoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubpoolPage = (function () {
    function SubpoolPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubpoolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubpoolPage');
    };
    SubpoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subpool',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\subpool\subpool.html"*/'<!--\n\n  Generated template for the SubpoolPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>subpool</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="assets/img/user/mike.png">\n\n          </ion-avatar>\n\n          <h2>New Pizza</h2>\n\n          \n\n        </ion-item>\n\n      \n\n        <img src="https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg">\n\n      \n\n        <ion-card-content>\n\n          <p>BBQ Pizza</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>Total Price:</ion-label>\n\n                    <ion-label>Rs 750/-</ion-label>\n\n                   \n\n                  </ion-item>\n\n            </ion-col>\n\n         </ion-row>\n\n\n\n         <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                  <ion-label>No of persons:</ion-label>\n\n                  <ion-label>5</ion-label>\n\n                 \n\n                </ion-item>\n\n          </ion-col>\n\n         </ion-row>\n\n\n\n         <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>Per Person:</ion-label>\n\n                    <ion-label>Rs 150/-</ion-label>\n\n                   \n\n                  </ion-item>\n\n            </ion-col>\n\n         </ion-row>\n\n\n\n          <ion-row>\n\n              <ion-col>\n\n                  <ion-item>\n\n                      <ion-label>Items in deal:</ion-label>\n\n                      <ion-label>5</ion-label>\n\n                     \n\n                    </ion-item>\n\n              </ion-col>\n\n         </ion-row>\n\n\n\n         \n\n         <ion-row>\n\n            <ion-col>\n\n                <ion-item>\n\n                    <ion-label>Distribution:</ion-label>\n\n                    <ion-label>1 item/person</ion-label>\n\n                   \n\n                  </ion-item>\n\n            </ion-col>\n\n       </ion-row>\n\n       <p style="margin-left:30%">\n\n          <button ion-button color="danger" medium>Confirm Deal</button>\n\n      </p>\n\n\n\n      </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\subpool\subpool.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubpoolPage);
    return SubpoolPage;
}());

//# sourceMappingURL=subpool.js.map

/***/ })

});
//# sourceMappingURL=1.js.map