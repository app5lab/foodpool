webpackJsonp([21],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartviewPageModule", function() { return CartviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartview__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartviewPageModule = (function () {
    function CartviewPageModule() {
    }
    CartviewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cartview__["a" /* CartviewPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cartview__["a" /* CartviewPage */]),
            ],
        })
    ], CartviewPageModule);
    return CartviewPageModule;
}());

//# sourceMappingURL=cartview.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartviewPage; });
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
 * Generated class for the CartviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartviewPage = (function () {
    function CartviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.tot = 0;
    }
    CartviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartviewPage');
        this.items = JSON.parse(localStorage.getItem('cart'));
        this.tot = localStorage.getItem('total_price');
    };
    CartviewPage.prototype.checkoutt = function () {
        this.navCtrl.push('CheckoutPage');
    };
    CartviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cartview',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\cartview\cartview.html"*/'<ion-header>\n\n	<ion-navbar color="primary">\n\n	  <ion-title>Cart</ion-title>\n\n	</ion-navbar>\n\n  </ion-header>\n\n\n\n\n\n\n\n<ion-content style="margin-top:5%; padding-top:10%; padding-bottom:30px">\n\n  <div >\n\n    <ion-list >\n\n      <ion-item *ngFor="let item of items">\n\n     <ion-grid>\n\n       <ion-row align-items-center>\n\n         <ion-col col-10>\n\n            <h2 style="padding-top:10px">\n\n                {{item.name}}\n\n              </h2>\n\n              <h6>\n\n                Rs.{{item.variation_price}}\n\n              </h6>\n\n         </ion-col>\n\n         <ion-col>\n\n            <h3 id="qty">x{{item.qty}}</h3>\n\n         </ion-col>\n\n       </ion-row>\n\n       \n\n     </ion-grid>\n\n        \n\n            \n\n      </ion-item>\n\n    \n\n     \n\n</ion-list>\n\n</div>\n\n<div padding style="width:100%;display:flex;">\n\n  \n\n  <h1 style="width:40%">  \n\n    Total Price \n\n  </h1>\n\n  <h1 style="width:50%;text-align:right;margin:0;">\n\n    <b>{{tot}}</b>  \n\n  </h1>\n\n  \n\n</div>\n\n<ion-item style="padding-bottom:5%">\n\n    <ion-icon item-start name="basket"></ion-icon>\n\n	<h4>NET20 (20% off)</h4>\n\n\n\n	<button ion-button clear item-end>View</button>\n\n</ion-item>\n\n\n\n\n\n</ion-content>\n\n\n\n\n\n  <ion-footer  >\n\n	<ion-toolbar  color="primary"  (click)="checkoutt()">\n\n	  <ion-title  style="color:white;" >Proceed to checkout</ion-title>\n\n	</ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\cartview\cartview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CartviewPage);
    return CartviewPage;
}());

//# sourceMappingURL=cartview.js.map

/***/ })

});
//# sourceMappingURL=21.js.map