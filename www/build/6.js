webpackJsonp([6],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolPageModule", function() { return PoolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pool__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PoolPageModule = (function () {
    function PoolPageModule() {
    }
    PoolPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pool__["a" /* PoolPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pool__["a" /* PoolPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__pool__["a" /* PoolPage */]]
        })
    ], PoolPageModule);
    return PoolPageModule;
}());

//# sourceMappingURL=pool.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_pool_pool__ = __webpack_require__(196);
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
 * Generated class for the PoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PoolPage = (function () {
    function PoolPage(navCtrl, navParams, placeService, app, alert, poolProvider, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.app = app;
        this.alert = alert;
        this.poolProvider = poolProvider;
        this.modal = modal;
        this.updateAvaialblePools();
        this.updateMyPools();
    }
    PoolPage.prototype.updateAvaialblePools = function () {
        var _this = this;
        this.poolProvider.getAvailablePools().subscribe(function (res) {
            _this.available_pools = res['_body'];
            _this.available_pools = JSON.parse(_this.available_pools)['result'];
        }, function (err) {
            console.log(err, 'sdfghj');
        });
    };
    PoolPage.prototype.updateMyPools = function () {
        var _this = this;
        this.poolProvider.getMyPools().subscribe(function (res) {
            _this.my_pools = res['_body'];
            _this.my_pools = JSON.parse(_this.my_pools)['result'];
        }, function (err) {
            console.log(err, 'sdfghj');
        });
    };
    PoolPage.prototype.createPool = function () {
        var _this = this;
        var model = this.modal.create('AddPoolPage');
        model.onDidDismiss(function (data) {
            _this.updateMyPools();
        });
        model.present();
    };
    PoolPage.prototype.subpool = function () {
        this.navCtrl.push('SubpoolPage');
    };
    PoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pool',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\pool\pool.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary"  hideBackButton="true">\n\n    <button  ion-button class="nav-button" (click)="selectLocation()">\n\n      {{ currentLocation }}\n\n      <ion-icon name="ios-arrow-down" class="text-md"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button  ion-button (click)="goToBookmarks()">\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </button>\n\n      <button  ion-button (click)="goToSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" common-bg">\n\n\n\n\n\n  \n\n  <!--- Available pools STARTS HERE -->\n\n  <ion-list class="list-no-border">\n\n    <h2>Available pools</h2>\n\n    <ion-card *ngFor="let item of available_pools" (click)="subpool()">\n\n      <div scroll="false" class="container">\n\n        <div class="fill div1">\n\n          <!-- <img src={{item.wide_image}}> -->\n\n\n\n          <img src="https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg">\n\n        </div>\n\n        <p id="only" class="div2">\n\n          Deals\n\n        </p>\n\n        <p id="only" class="div3">\n\n          45 min\n\n        </p>\n\n        <div style="height:120px;width:100%;"></div>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{item.logo_url}}">\n\n          </ion-avatar>\n\n          <h2>{{item.title}}</h2>\n\n          <h2>Persons: {{item.persons}}</h2>\n\n          <p>{{item.timing}}</p>\n\n        </ion-item>\n\n  \n\n        <ion-card-content>\n\n          <p>{{item.cuisines}}</p>\n\n        </ion-card-content>\n\n        \n\n \n\n      </div>\n\n  \n\n    </ion-card>\n\n\n\n  <!--- Available pools ENDS HERE -->\n\n\n\n  <!--- MY pools STARTS HERE -->\n\n\n\n\n\n    <h2>My pools</h2>\n\n    <ion-card *ngFor="let item of my_pools">\n\n      <div scroll="false" class="container" (click)="subpool()">\n\n        <div  class="fill div1">\n\n          <!-- <img src={{item.wide_image}}> -->\n\n\n\n          <img  src="https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg">\n\n        </div>\n\n        <p id="only" class="div2">\n\n          Deals\n\n        </p>\n\n        <p id="only" class="div3">\n\n          45 min\n\n        </p>\n\n        <div style="height:120px;width:100%;"></div>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{item.logo_url}}">\n\n          </ion-avatar>\n\n          <h2>{{item.title}}</h2>\n\n          <h2>Persons: {{item.persons}}</h2>\n\n          <p>{{item.timing}}</p>\n\n        </ion-item>\n\n  \n\n        <ion-card-content>\n\n          <p>{{item.cuisines}}</p>\n\n        </ion-card-content>\n\n        \n\n \n\n      </div>\n\n  \n\n    </ion-card>\n\n\n\n  <!--- MY pools END HERE -->\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-list>\n\n  <ion-fab right bottom #fab2>\n\n    <button ion-fab color="danger" (click) = "createPool()" ><ion-icon name="md-checkmark"></ion-icon></button> \n\n  </ion-fab>    \n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\pool\pool.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__providers_pool_pool__["a" /* PoolProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_pool_pool__["a" /* PoolProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _g || Object])
    ], PoolPage);
    return PoolPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=pool.js.map

/***/ })

});
//# sourceMappingURL=6.js.map