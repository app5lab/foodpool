webpackJsonp([5],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoolPageModule", function() { return PoolPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pool__ = __webpack_require__(321);
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(196);
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
    function PoolPage(navCtrl, navParams, placeService, app, http, alert, hg, hp) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.placeService = placeService;
        this.app = app;
        this.http = http;
        this.alert = alert;
        this.currentLocation = 'Lahore, Pakistan';
        this.slides = [
            {
                src: 'assets/img/bugger.jpg'
            },
            {
                src: 'assets/img/drink.jpg'
            },
            {
                src: 'assets/img/entree.jpg'
            }
        ];
        this.user = {
            "username": "liam_349@berry.io",
            "password": "123456"
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.http.post('http://localhost:3000/query', { query: "SELECT * FROM foodpool.pool;" }, options).subscribe(function (res) {
            _this.restaurants;
        }, function (err) { return console.log(err, 'sdfghj'); });
    }
    PoolPage.prototype.open_r = function (item) {
        this.navCtrl.push('PlaceDetailPage', { detail: item });
    };
    // go to select location page
    PoolPage.prototype.selectLocation = function () {
        this.navCtrl.push('SelectLocationPage');
    };
    // go to places
    PoolPage.prototype.viewPlaces = function () {
        this.app.getRootNav().push('PlacesPage');
    };
    // view a place
    PoolPage.prototype.viewPlace = function (id) {
        this.app.getRootNav().push('PlaceDetailPage', { id: id });
    };
    // go to search page
    PoolPage.prototype.goToSearch = function () {
        this.app.getRootNav().push('SearchPage');
    };
    // go to bookmarks page
    PoolPage.prototype.goToBookmarks = function () {
        this.app.getRootNav().push('BookmarksPage');
    };
    // view map
    PoolPage.prototype.goToMap = function () {
        this.app.getRootNav().push('MapPage');
    };
    // view nearby page
    PoolPage.prototype.goToNearBy = function () {
        this.app.getRootNav().push('NearbyPage');
    };
    PoolPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PoolPage');
    };
    PoolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pool',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\pool\pool.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary"  hideBackButton="true">\n\n    <button  ion-button class="nav-button" (click)="selectLocation()">\n\n      {{ currentLocation }}\n\n      <ion-icon name="ios-arrow-down" class="text-md"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button  ion-button (click)="goToBookmarks()">\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </button>\n\n      <button  ion-button (click)="goToSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" common-bg">\n\n\n\n  \n\n  <ion-list class="list-no-border">\n\n    <h1>Available pools</h1>\n\n\n\n\n\n\n\n    <ion-card *ngFor="let item of restaurants">\n\n      <div scroll="false" class="container" (click)="open_r(item)">\n\n        <div class="fill div1">\n\n          <!-- <img src={{item.wide_image}}> -->\n\n\n\n          <img src="https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg">\n\n        </div>\n\n        <p id="only" class="div2">\n\n          Deals\n\n        </p>\n\n        <p id="only" class="div3">\n\n          45 min\n\n        </p>\n\n        <div style="height:120px;width:100%;"></div>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{item.logo_url}}">\n\n          </ion-avatar>\n\n          <h2>{{item.title}}</h2>\n\n          <p>{{item.timing}}</p>\n\n        </ion-item>\n\n  \n\n        <ion-card-content>\n\n          <p>{{item.cuisines}}</p>\n\n        </ion-card-content>\n\n        \n\n \n\n      </div>\n\n  \n\n    </ion-card>\n\n  </ion-list>\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\pool\pool.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], PoolPage);
    return PoolPage;
}());

//# sourceMappingURL=pool.js.map

/***/ })

});
//# sourceMappingURL=5.js.map