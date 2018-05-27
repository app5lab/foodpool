webpackJsonp([15],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(197);
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
var HomePage = (function () {
    function HomePage(nav, placeService, app, http, alert, hg, hp) {
        //this.popularPlaces = placeService.getAll();
        var _this = this;
        this.nav = nav;
        this.placeService = placeService;
        this.app = app;
        this.http = http;
        this.alert = alert;
        // current location
        this.currentLocation = 'Lahore, Pakistan';
        // list slides for slider
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
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        http.get('http://localhost:3000/feed', options).subscribe(function (res) {
            console.log(res);
            console.log(res.json());
            _this.restaurants = res.json();
        }, function (err) { return console.log(err); });
    }
    HomePage.prototype.open_r = function (item) {
        this.nav.push('PlaceDetailPage', { detail: item });
    };
    // go to select location page
    HomePage.prototype.selectLocation = function () {
        this.nav.push('SelectLocationPage');
    };
    // go to places
    HomePage.prototype.viewPlaces = function () {
        this.app.getRootNav().push('PlacesPage');
    };
    // view a place
    HomePage.prototype.viewPlace = function (id) {
        this.app.getRootNav().push('PlaceDetailPage', { id: id });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.app.getRootNav().push('SearchPage');
    };
    // go to bookmarks page
    HomePage.prototype.goToBookmarks = function () {
        this.app.getRootNav().push('BookmarksPage');
    };
    // view map
    HomePage.prototype.goToMap = function () {
        this.app.getRootNav().push('MapPage');
    };
    // view nearby page
    HomePage.prototype.goToNearBy = function () {
        this.app.getRootNav().push('NearbyPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\home\home.html"*/'<!--\n\n  Generated template for the HomePage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary"  hideBackButton="true">\n\n    <button  ion-button class="nav-button" (click)="selectLocation()">\n\n      {{ currentLocation }}\n\n      <ion-icon name="ios-arrow-down" class="text-md"></ion-icon>\n\n    </button>\n\n    <ion-buttons end>\n\n      <button  ion-button (click)="goToBookmarks()">\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </button>\n\n      <button  ion-button (click)="goToSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" common-bg">\n\n\n\n  \n\n  <ion-list class="list-no-border">\n\n    <h1>Order For Delivery Now</h1>\n\n\n\n    <!-- <div scroll="false">\n\n      <div class="div1">\n\n        <h2>Div 1</h2>\n\n      </div>\n\n      <div class="div2">\n\n        <h2>Div 2</h2>\n\n      </div>\n\n    </div> -->\n\n\n\n    <ion-card *ngFor="let item of restaurants">\n\n      <div scroll="false" class="container" (click)="open_r(item)">\n\n        <div class="fill div1">\n\n          <!-- <img src={{item.wide_image}}> -->\n\n\n\n          <img src="https://www.desi-compile.com/wp-content/uploads/2016/11/indianchat2.jpg">\n\n        </div>\n\n        <p id="only" class="div2">\n\n          Deals\n\n        </p>\n\n        <p id="only" class="div3">\n\n          45 min\n\n        </p>\n\n        <div style="height:120px;width:100%;"></div>\n\n        <ion-item>\n\n          <ion-avatar item-start>\n\n            <img src="{{item.logo_url}}">\n\n          </ion-avatar>\n\n          <h2>{{item.title}}</h2>\n\n          <p>{{item.timing}}</p>\n\n        </ion-item>\n\n  \n\n        <ion-card-content>\n\n          <p>{{item.cuisines}}</p>\n\n        </ion-card-content>\n\n        \n\n        <!-- <ion-row>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="thumbs-up"></ion-icon>\n\n              <div>12 Likes</div>\n\n            </button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button icon-left clear small>\n\n              <ion-icon name="text"></ion-icon>\n\n              <div>4 Comments</div>\n\n            </button>\n\n          </ion-col>\n\n        </ion-row> -->\n\n      </div>\n\n  \n\n    </ion-card>\n\n  </ion-list>\n\n\n\n  <!-- Slider\n\n  <ion-slides pager class="pager-inner">\n\n\n\n    <ion-slide *ngFor="let slide of slides">\n\n      <img src="{{ slide.src }}" alt="">\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n\n\n  <div padding>\n\n    <ion-item padding color="light"  class="no-border" (click)="goToNearBy()">\n\n      <ion-icon name="pin"></ion-icon>\n\n      Nearby\n\n      <ion-icon name="arrow-forward" color="secondary"  class="pull-right"></ion-icon>\n\n    </ion-item>\n\n\n\n    <div text-center margin-top margin-bottom class="secondary">\n\n      Here are 6 ways to think about your next meal\n\n    </div>\n\n\n\n    <ion-grid class="grid-no-padding">\n\n\n\n      <ion-row>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">Breakfast</ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">Delivery</ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">Lunch</ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">Dinner</ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-row>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">Take out</ion-item>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <ion-item class="no-border" (click)="viewPlaces()">See All</ion-item>\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </ion-grid>\n\n\n\n    <ion-item class="margin-top no-border light-bg" (click)="goToNearBy()">\n\n      <ion-icon name="pin"></ion-icon>\n\n      All places in {{ currentLocation }}\n\n      <ion-icon name="arrow-forward" color="secondary"  class="pull-right"></ion-icon>\n\n    </ion-item>\n\n\n\n  </div>\n\n\n\n  <div text-center class="secondary margin-top margin-bottom">\n\n    Popular nearby\n\n  </div>\n\n\n\n  <div class="light-bg card" margin-bottom>\n\n    <ion-grid>\n\n      <ion-row wrap>\n\n        <ion-col class="rlt" col-4 *ngFor="let place of popularPlaces" (click)="viewPlace(place.id)">\n\n          <img class="round" src="{{ place.photos[0].thumb }}" alt="">\n\n          <div class="item-rating">{{ place.rating }}</div>\n\n          <div class="text-md strong">{{ place.name }}</div>\n\n          <div class="text-sm secondary">{{ place.district }}</div>\n\n          <div class="text-sm secondary">{{ place.cuisines }}</div>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <div class="block-footer" padding text-right (click)="viewPlaces()">\n\n      <span ion-text color="primary" >See more ></span>\n\n    </div>\n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map