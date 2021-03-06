webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
    }
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ForgotPasswordPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="secondary" >\n    <ion-title>Forgot Password?</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="forgot-password">\n  <ion-list class="list-form">\n\n    <ion-item class="margin-top">\n      <ion-input type="text" placeholder="Email"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button  ion-button color="secondary"  block>SUBMIT</button>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/forgot-password/forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collections_collections__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(216);
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
        this.tabHome = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tabCollections = __WEBPACK_IMPORTED_MODULE_3__collections_collections__["a" /* CollectionsPage */];
        this.tabFeed = __WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */];
        this.tabAccount = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
    }
    MainTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main-tabs',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/main-tabs/main-tabs.html"*/'<!--\n  Generated template for the MainTabsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-tabs color="primary" selectedIndex="0">\n  <ion-tab tabIcon="home" tabTitle="Home" [root]="tabHome"></ion-tab>\n  <ion-tab tabIcon="albums" tabTitle="Collections" [root]="tabCollections"></ion-tab>\n  <ion-tab tabIcon="paper" tabTitle="Feed" [root]="tabFeed"></ion-tab>\n  <ion-tab tabIcon="contact" tabTitle="Account" [root]="tabAccount"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/main-tabs/main-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], MainTabsPage);
    return MainTabsPage;
}());

//# sourceMappingURL=main-tabs.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__place_detail_place_detail__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(108);
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
var PlacesPage = (function () {
    function PlacesPage(nav, placeService, app, modalCtrl) {
        this.nav = nav;
        this.placeService = placeService;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.places = placeService.getAll();
    }
    // get working hours in today
    PlacesPage.prototype.getWorkingHours = function (hours) {
        var d = new Date();
        var currentDay = {
            from: null,
            to: null
        };
        var currentWeekDay = {};
        switch (d.getDay()) {
            case 0:
                currentDay = hours.sunday;
                currentWeekDay = 'Sun';
                break;
            case 1:
                currentDay = hours.monday;
                currentWeekDay = 'Mon';
                break;
            case 2:
                currentDay = hours.tuesday;
                currentWeekDay = 'Tue';
                break;
            case 3:
                currentDay = hours.wednesday;
                currentWeekDay = 'Wed';
                break;
            case 4:
                currentDay = hours.thursday;
                currentWeekDay = 'Thu';
                break;
            case 5:
                currentDay = hours.friday;
                currentWeekDay = 'Fri';
                break;
            case 6:
                currentDay = hours.saturday;
                currentWeekDay = 'Sat';
                break;
        }
        return currentWeekDay + ' ' + currentDay.from + 'h to ' + currentDay.to + 'h';
    };
    // get limit elements for arr
    PlacesPage.prototype.limitArray = function (arr, limit) {
        var tmpArr = [];
        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }
        return tmpArr;
    };
    // show filters
    PlacesPage.prototype.showFilters = function () {
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* FiltersPage */]);
        filterModal.present();
    };
    // view a place
    PlacesPage.prototype.viewPlace = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__place_detail_place_detail__["a" /* PlaceDetailPage */], { id: id });
    };
    // go to search page
    PlacesPage.prototype.goToSearch = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/places/places.html"*/'<!--\n  Generated template for the PlacesPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Places</ion-title>\n\n    <ion-buttons end>\n      <button  ion-button (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button  ion-button (click)="showFilters()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" common-bg">\n  <ion-card *ngFor="let place of places" (click)="viewPlace(place.id)">\n    <ion-card-header>\n      <!-- title -->\n      <div>\n        <span class="strong">{{ place.name }}</span>\n        <span class="rating pull-right">{{ place.rating }}</span>\n      </div>\n\n      <!--sub title-->\n      <div class="uppercase text-sm secondary">\n        {{ place.district }}, {{ place.city }}\n      </div>\n\n      <!-- extra info -->\n      <div class="text-sm secondary" padding-bottom>\n        {{ place.num_reviews }} Reviews &bull;\n        {{ place.num_bookmarks }} Bookmarks &bull;\n        {{ place.num_check_in }} Been There\n      </div>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4 class="secondary">Cuisines</ion-col>\n          <ion-col width-66>{{ place.cuisines }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4 class="secondary">Cost</ion-col>\n          <ion-col width-66>{{ place.cost }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4 class="secondary">Hours</ion-col>\n          <ion-col width-66>{{ getWorkingHours(place.working_hours) }}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col width-25 *ngFor="let photo of limitArray(place.photos, 4)">\n            <img class="round" src="{{ photo.thumb }}" alt="">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/places/places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var MapPage = (function () {
    function MapPage(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    MapPage.prototype.initializeMap = function () {
        var minZoomLevel = 12;
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: minZoomLevel,
            center: new google.maps.LatLng(38.50, -90.50),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/map/map.html"*/'<!--\n  Generated template for the MapPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_reviews__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewService = (function () {
    function ReviewService() {
        this.reviews = __WEBPACK_IMPORTED_MODULE_1__mock_reviews__["a" /* REVIEWS */];
    }
    ReviewService.prototype.getAll = function () {
        return this.reviews;
    };
    ReviewService.prototype.getItem = function (id) {
        for (var i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].id === parseInt(id)) {
                return this.reviews[i];
            }
        }
        return null;
    };
    ReviewService.prototype.remove = function (item) {
        this.reviews.splice(this.reviews.indexOf(item), 1);
    };
    ReviewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ReviewService);
    return ReviewService;
}());

//# sourceMappingURL=review-service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var SearchPage = (function () {
    function SearchPage(nav) {
        this.nav = nav;
        this.searches = [
            {
                id: 1,
                name: "New York City, NY, USA"
            }
        ];
    }
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="search-form">\n    <ion-icon name="ios-search"></ion-icon>\n    <ion-input type="text" placeholder="Restaurant, cuisine or dish..."></ion-input>\n  </div>\n\n  <div class="common-bg secondary" padding>\n    SUGGESTIONS\n  </div>\n\n  <div *ngFor="let search of searches" padding>\n    {{ search.name }}\n  </div>\n\n  <div class="common-bg secondary" padding>\n    RECENT SEARCHES\n  </div>\n\n  <div *ngFor="let search of searches" padding>\n    {{ search.name }}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_tabs_main_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(218);
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
var LoginPage = (function () {
    function LoginPage(nav, facebook, http, hp, alert) {
        this.nav = nav;
        this.facebook = facebook;
        this.http = http;
        this.hp = hp;
        this.alert = alert;
        this.user = {
            "username": "liam_349@berry.io",
            "password": "123456"
        };
    }
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.login_via_email = function () {
        var _this = this;
        this.hp.post('http://localhost:3000/users/auth', this.user, {}).then(function (res) {
            console.log(res);
            if (res.data.id != null) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_tabs_main_tabs__["a" /* MainTabsPage */]);
            }
            else {
                _this.alert.create({ title: res.error, buttons: [{ text: 'OK' }] }).present();
            }
        });
        // this.http.post('http://localhost:3000/users/auth', this.user).subscribe(res => {
        //   console.log(res)
        //   if(res.json().id != null)
        //   {
        //     this.nav.setRoot(MainTabsPage)
        //   }
        //   else{
        //     this.alert.create({title:res.json().error,buttons:[{text:'OK'}]}).present()
        //   }
        // }, err => console.log(err))
    };
    // process login
    LoginPage.prototype.fblogin = function () {
        var _this = this;
        var permission_set = ['email',
            'public_profile',
            'read_custom_friendlists',
            'user_about_me',
            'user_birthday',
            'user_education_history',
            'user_friends',
            'user_hometown',
            'user_location',
            'user_relationship_details',
            'user_relationships',
            'user_religion_politics',
            'user_work_history',
            'user_actions.books',
            'user_actions.fitness',
            'user_actions.music',
            'user_actions.news',
            'user_actions.video',
            'user_games_activity',
            'user_likes',
            'user_photos',
            'user_posts',
            'user_tagged_places',
            'user_videos',
            'user_website'];
        this.facebook.login(permission_set)
            .then(function (response) {
            _this.facebook.api('me?fields=id,name,email,address,friends,location,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userData = { locations: profile['location'], email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], address: profile['address'], friends: profile['friends'] };
                console.log(JSON.stringify(_this.userData));
                console.log(_this.userData);
            });
        });
    };
    // go to sign up page
    LoginPage.prototype.signUp = function () {
        // add our sign up code here
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Login</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="signUp()" class="light">Sign up</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login">\n  <ion-slides autoplay=3000 loop=true style="height:70%;width:100%;" zoom>\n  \n    <ion-slide style="background-color:black;">\n      <img src="assets/img/fp1.jpg" alt="">\n    </ion-slide>\n  \n    <ion-slide style="background-color:red;">\n      <img src="assets/img/fp2.jpg" alt="">\n    </ion-slide>\n  \n    <ion-slide>\n      <img src="assets/img/fp3.jpg" alt="">      \n    </ion-slide>\n  \n  </ion-slides>\n  <br>\n  <br><br>\n\n  <input [(ngModel)]="user.email" placeholder="Username" />\n  <input [(ngModel)]="user.password" placeholder="Password" />\n  <button (click)="login_via_email()">Login via Email</button>\n  <button ion-button (click)="fblogin()" round color="facebook" block class="margin-bottom" style="width:95%;text-align:center;">Login via Facebook</button>\n  <ion-card *ngIf="userData">\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n    <img [src]="userData.picture" />\n    <ion-card-content>\n      <p>id: {{ userData.id }}</p>\n      \n      <p>Email: {{ userData.email }}</p>\n      <p>First Name: {{ userData.first_name }}</p>\n      <p>Friends: {{ userData.friends }}</p>\n      <p>Location: {{ userData.locations }}</p>\n      <p>Address: {{ userData.address }}</p>\n      \n      \n      \n    </ion-card-content>\n  </ion-card>\n  <!-- <button ion-button color="googleplus" block class="margin-top">Login via Google+</button>\n\n  <div text-center class="margin-top-20 secondary">OR LOGIN USING EMAIL</div>\n\n  <ion-list class="list-form">\n\n    <ion-item class="margin-top">\n      <ion-input type="text" placeholder="Email or username"></ion-input>\n    </ion-item>\n\n    <ion-item class="margin-top">\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="secondary" block (click)="login()">LOGIN</button>\n\n  <div text-center class="margin-top-20 secondary" (click)="forgotPwd()">Forgot password?</div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__ = __webpack_require__(104);
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
var SignUpPage = (function () {
    function SignUpPage(nav) {
        this.nav = nav;
    }
    // go to forgot password page
    SignUpPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    // process sign up
    SignUpPage.prototype.signUp = function () {
        // add our sign up code here
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__main_tabs_main_tabs__["a" /* MainTabsPage */]);
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="secondary" >\n    <ion-title>SignUp</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="sign-up">\n  <button  ion-button color="facebook" block class="margin-bottom">Sign up via Facebook</button>\n  <button  ion-button color="googleplus" block class="margin-top">Sign up Google+</button>\n\n  <div text-center class="margin-top-20 secondary">OR SIGN UP USING EMAIL</div>\n\n  <ion-list class="list-form">\n\n    <ion-item class="margin-top">\n      <ion-input type="text" placeholder="Name"></ion-input>\n    </ion-item>\n\n    <ion-item class="margin-top">\n      <ion-input type="text" placeholder="Email or username"></ion-input>\n    </ion-item>\n\n    <ion-item class="margin-top">\n      <ion-input type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button  ion-button color="secondary"  block (click)="signUp()">SIGN UP</button>\n\n  <div text-center class="margin-top-20 secondary" (click)="forgotPwd()">Forgot password?</div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/sign-up/sign-up.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_location_select_location__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__places_places__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__place_detail_place_detail__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bookmarks_bookmarks__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nearby_nearby__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_alert_alert_controller__ = __webpack_require__(47);
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
    function HomePage(nav, placeService, app, http, alert, hg) {
        //this.popularPlaces = placeService.getAll();
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
        http.get('http://localhost:3000/feed').subscribe(function (res) {
            console.log(res);
            // if ( res.json().id != null )
            // {
            //   console.log(res.json());
            // }
            // else
            // {
            //   this.alert.create( { title: res.json().error, buttons: [{ text: 'OK' }] } ).present()
            // }
        }, function (err) { return console.log(err); });
        this.restaurants = [];
    }
    // go to select location page
    HomePage.prototype.selectLocation = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__select_location_select_location__["a" /* SelectLocationPage */]);
    };
    // go to places
    HomePage.prototype.viewPlaces = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__places_places__["a" /* PlacesPage */]);
    };
    // view a place
    HomePage.prototype.viewPlace = function (id) {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__place_detail_place_detail__["a" /* PlaceDetailPage */], { id: id });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    // go to bookmarks page
    HomePage.prototype.goToBookmarks = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_7__bookmarks_bookmarks__["a" /* BookmarksPage */]);
    };
    // view map
    HomePage.prototype.goToMap = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    // view nearby page
    HomePage.prototype.goToNearBy = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__nearby_nearby__["a" /* NearbyPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar color="primary"  hideBackButton="true">\n    <button  ion-button class="nav-button" (click)="selectLocation()">\n      {{ currentLocation }}\n      <ion-icon name="ios-arrow-down" class="text-md"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button  ion-button (click)="goToBookmarks()">\n        <ion-icon name="bookmark"></ion-icon>\n      </button>\n      <button  ion-button (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" common-bg">\n\n  \n  <ion-list class="list-no-border">\n  \n    <ion-card *ngFor="let item of restaurants">\n      <div>\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{item.restaurant.image}}">\n          </ion-avatar>\n          <h2>{{item.restaurant.name}}</h2>\n          <p>November 5, 2018</p>\n        </ion-item>\n  \n        <ion-card-content>\n          <p>{{item.text}}</p>\n        </ion-card-content>\n  \n        <img src="{{item.image}}">\n  \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>12 Likes</div>\n            </button>\n          </ion-col>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>4 Comments</div>\n            </button>\n          </ion-col>\n          <ion-col center text-center>\n            <ion-note>\n              11h ago\n            </ion-note>\n          </ion-col>\n        </ion-row>\n      </div>\n  \n    </ion-card>\n  </ion-list>\n\n  <!-- Slider\n  <ion-slides pager class="pager-inner">\n\n    <ion-slide *ngFor="let slide of slides">\n      <img src="{{ slide.src }}" alt="">\n    </ion-slide>\n\n  </ion-slides>\n\n  <div padding>\n    <ion-item padding color="light"  class="no-border" (click)="goToNearBy()">\n      <ion-icon name="pin"></ion-icon>\n      Nearby\n      <ion-icon name="arrow-forward" color="secondary"  class="pull-right"></ion-icon>\n    </ion-item>\n\n    <div text-center margin-top margin-bottom class="secondary">\n      Here are 6 ways to think about your next meal\n    </div>\n\n    <ion-grid class="grid-no-padding">\n\n      <ion-row>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">Breakfast</ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">Delivery</ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">Lunch</ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">Dinner</ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">Take out</ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item class="no-border" (click)="viewPlaces()">See All</ion-item>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n    <ion-item class="margin-top no-border light-bg" (click)="goToNearBy()">\n      <ion-icon name="pin"></ion-icon>\n      All places in {{ currentLocation }}\n      <ion-icon name="arrow-forward" color="secondary"  class="pull-right"></ion-icon>\n    </ion-item>\n\n  </div>\n\n  <div text-center class="secondary margin-top margin-bottom">\n    Popular nearby\n  </div>\n\n  <div class="light-bg card" margin-bottom>\n    <ion-grid>\n      <ion-row wrap>\n        <ion-col class="rlt" col-4 *ngFor="let place of popularPlaces" (click)="viewPlace(place.id)">\n          <img class="round" src="{{ place.photos[0].thumb }}" alt="">\n          <div class="item-rating">{{ place.rating }}</div>\n          <div class="text-md strong">{{ place.name }}</div>\n          <div class="text-sm secondary">{{ place.district }}</div>\n          <div class="text-sm secondary">{{ place.cuisines }}</div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class="block-footer" padding text-right (click)="viewPlaces()">\n      <span ion-text color="primary" >See more ></span>\n    </div>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_11_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* RequestOptions */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var SelectLocationPage = (function () {
    function SelectLocationPage(nav) {
        this.nav = nav;
        this.searches = [
            {
                id: 1,
                name: "New York City, NY, USA"
            }
        ];
    }
    SelectLocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-location',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/select-location/select-location.html"*/'<!--\n  Generated template for the SelectLocationPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Select Location</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding class="common-bg">\n    Auto-detect current location\n    <ion-icon class="pull-right" ios="ios-locate-outline" md="md-locate"></ion-icon>\n  </div>\n\n  <div class="search-form">\n    <ion-icon name="ios-search"></ion-icon>\n    <ion-input type="text" placeholder="Start typing your locations..."></ion-input>\n  </div>\n\n  <div class="common-bg secondary" padding>\n    RECENT SEARCHES\n  </div>\n\n  <div *ngFor="let search of searches" padding>\n    {{ search.name }}\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/select-location/select-location.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SelectLocationPage);
    return SelectLocationPage;
}());

//# sourceMappingURL=select-location.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
            selector: 'page-filters',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/filters/filters.html"*/'<!--\n  Generated template for the FiltersPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-toolbar color="primary" >\n  <ion-title>\n    Filters\n  </ion-title>\n  <ion-buttons start>\n    <button  ion-button (click)="dismiss()">\n      <ion-icon name="close"></ion-icon>\n    </button>\n  </ion-buttons>\n  <ion-buttons end>\n    <button  ion-button (click)="dismiss()">\n      Apply\n    </button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content class=" common-bg">\n  <div text-center margin-top margin-bottom class="secondary">SORT BY</div>\n  <ion-grid class="light-bg">\n    <ion-row text-center>\n      <ion-col col-3 *ngFor="let sort of sorts" [class]="sort.active" (click)="chooseSort(sort)">\n        <ion-icon name="{{ sort.icon }}" class="text-lg"></ion-icon>\n        <ion-icon name="ios-arrow-round-up" class="text-lg" [hidden]="!sort.sortDirection || !sort.sortAsc"></ion-icon>\n        <ion-icon name="ios-arrow-round-down" class="text-lg" [hidden]="!sort.sortDirection || sort.sortAsc"></ion-icon>\n        <div>{{ sort.name }}</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div text-center margin-top margin-bottom class="secondary">QUICK FILTERS</div>\n  <ion-grid class="light-bg">\n    <ion-row text-center>\n      <ion-col>\n        <ion-checkbox color="secondary"  checked="true"></ion-checkbox>\n        <div>Open now</div>\n      </ion-col>\n      <ion-col>\n        <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n        <div>Rate 3.5+</div>\n      </ion-col>\n      <ion-col>\n        <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n        <div>Bookmarked</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div text-center margin-top margin-bottom class="secondary">COST</div>\n  <ion-grid class="light-bg">\n    <ion-row text-center>\n      <ion-col>\n        <ion-icon name="logo-usd"></ion-icon>\n        <div>0-10</div>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="logo-usd"></ion-icon>\n        <div>10-20</div>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="logo-usd"></ion-icon>\n        <div>20-30</div>\n      </ion-col>\n      <ion-col>\n        <ion-icon name="logo-usd"></ion-icon>\n        <div>30+</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div text-center margin-top margin-bottom class="secondary">MORE FIlTERS</div>\n  <ion-list padding-bottom class="text-light">\n\n    <ion-item>\n      <ion-label>Online booking</ion-label>\n      <ion-checkbox color="secondary"  checked="true"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Creadit cards</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Happy hours</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Wifi</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Alcohol served</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Sport bars</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Live music</ion-label>\n      <ion-checkbox color="secondary"  checked="false"></ion-checkbox>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/filters/filters.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ViewController */]])
    ], FiltersPage);
    return FiltersPage;
}());

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
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
var MenuPage = (function () {
    function MenuPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        // get first place for example
        this.place = placeService.getItem(1);
    }
    MenuPage.prototype.add = function (item) {
        console.log(item);
        item.qty = item.qty + 1;
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item-group *ngFor="let category of place.menu">\n\n    <ion-item-divider bgColor class="strong uppercase">{{ category.name }}</ion-item-divider>\n    <ion-item *ngFor="let item of category.items" (click)="add(item)">\n      <span>{{ item.name }}</span>\n      <span class="badge" *ngIf="item.qty != 0">\n        <ion-badge item-end>{{item.qty}}</ion-badge>\n      </span>\n      <span class="pull-right">{{ item.price | currency:\'USD\':true }}</span>\n      <button ion-button color="primary" class="pull-down custom">Customize</button>        \n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
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
var PhotosPage = (function () {
    function PhotosPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        // get first place for example
        this.place = placeService.getItem(1);
    }
    PhotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-photos',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/photos/photos.html"*/'<!--\n  Generated template for the PhotosPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Photos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row wrap>\n      <ion-col class="rlt" col-4 *ngFor="let photo of place.photos" (click)="viewPlace(place.id)">\n        <img class="round" src="{{ photo.thumb }}" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/photos/photos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], PhotosPage);
    return PhotosPage;
}());

//# sourceMappingURL=photos.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service__ = __webpack_require__(107);
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
var ReviewsPage = (function () {
    function ReviewsPage(nav, reviewService) {
        this.nav = nav;
        this.reviewService = reviewService;
        // feed
        this.reviews = reviewService.getAll();
    }
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/reviews/reviews.html"*/'<!--\n  Generated template for the ReviewsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Reviews</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" feed common-bg">\n  <ion-list class="list-no-border">\n\n    <ion-item *ngFor="let review of reviews" text-wrap class="margin-bottom">\n      <div>\n        <div class="item-header">\n          <img src="{{ review.author.profile_picture}}" class="pull-left item-avatar profile-picture" alt="">\n          <div class="pull-left">\n            <h3>{{ review.author.username }}</h3>\n            <div class="secondary uppercase text-sm">{{ review.author.num_reviews }} Reviews, {{\n              review.author.num_folowers }} Follower\n            </div>\n          </div>\n        </div>\n        <div class="clear"></div>\n      </div>\n\n      <div>\n        <div class="pull-left secondary text-sm">{{ review.time }}</div>\n        <div class="pull-right secondary text-sm">\n          RATED\n          <span class="rating">\n            {{ review.rating }}\n          </span>\n        </div>\n\n        <div class="clear"></div>\n      </div>\n\n      <div class="text-sm" margin-top>\n        {{ review.text }}\n      </div>\n\n      <div class="post-images">\n        <img *ngFor="let photo of review.photos" src="{{ photo.thumb }}">\n      </div>\n\n      <div>\n        <div class="pull-left action-buttons">\n          <ion-icon name="md-heart-outline" color="danger"  [hidden]="!review.liked"></ion-icon>\n          <ion-icon name="md-heart-outline" color="secondary"  [hidden]="review.liked"></ion-icon>\n          <ion-icon name="ios-chatboxes-outline" color="danger"  [hidden]="!review.commented"></ion-icon>\n          <ion-icon name="ios-chatboxes-outline" color="secondary"  [hidden]="review.commented"></ion-icon>\n          <ion-icon name="md-share" color="secondary" ></ion-icon>\n        </div>\n\n        <div class="pull-right uppercase secondary text-sm">\n          {{ review.num_likes }} likes &bull;\n          {{ review.num_comments }} comments\n        </div>\n\n        <div class="clear"></div>\n      </div>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/reviews/reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_review_service__["a" /* ReviewService */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__ = __webpack_require__(41);
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
var BookmarksPage = (function () {
    function BookmarksPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        this.places = placeService.getAll();
    }
    // view a place
    BookmarksPage.prototype.viewPlace = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__["a" /* PlaceDetailPage */], { id: id });
    };
    BookmarksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmarks',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/bookmarks/bookmarks.html"*/'<!--\n  Generated template for the BookmarksPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Bookmarks</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bookmarks">\n\n  <div class="search-form">\n    <ion-icon name="ios-search"></ion-icon>\n    <ion-input type="text" placeholder="Type to filter by location"></ion-input>\n  </div>\n\n  <!-- list of places -->\n  <ion-list class="list-full-border">\n    <ion-item *ngFor="let place of places">\n      <ion-avatar item-left>\n        <img src="{{ place.photos[0].thumb }}">\n      </ion-avatar>\n\n      <div>\n        <div>{{ place.name }}</div>\n        <div class="secondary uppercase text-sm">{{ place.district }}, {{ place.city }}</div>\n      </div>\n\n      <ion-icon name="call" color="favorite"  item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/bookmarks/bookmarks.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], BookmarksPage);
    return BookmarksPage;
}());

//# sourceMappingURL=bookmarks.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NearbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var NearbyPage = (function () {
    function NearbyPage(nav, platform) {
        this.nav = nav;
        this.platform = platform;
    }
    NearbyPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    NearbyPage.prototype.initializeMap = function () {
        var minZoomLevel = 18;
        this.map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: minZoomLevel,
            center: new google.maps.LatLng(31.451101, 74.291664),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    };
    NearbyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nearby',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/nearby/nearby.html"*/'<!--\n  Generated template for the NearbyPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n	<ion-navbar color="primary" >\n	  <ion-title>Nearby</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/nearby/nearby.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], NearbyPage);
    return NearbyPage;
}());

//# sourceMappingURL=nearby.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_collection_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__places_places__ = __webpack_require__(105);
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
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__places_places__["a" /* PlacesPage */]);
    };
    CollectionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collections',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/collections/collections.html"*/'<!--\n  Generated template for the CollectionsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Collections</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="collections">\n  <ion-list>\n    <ion-item class="margin-top" *ngFor="let collection of collections"\n              [ngStyle]="{\'background-image\': \'url(\' + collection.background + \')\'}">\n      <div class="item-info">\n        <ion-icon class="bookmark-icon" name="bookmark" color="primary"  [hidden]="!collection.bookmarked"\n                  (click)="addBookMark(collection)"></ion-icon>\n        <ion-icon class="bookmark-icon" name="bookmark-outline" color="light"  [hidden]="collection.bookmarked"\n                  (click)="addBookMark(collection)"></ion-icon>\n        <div class="text-sm light" (click)="goToCollection(collection.id)">{{ collection.num_places }} PLACE &bull; {{\n          collection.num_bookmarks }} BOOKMARKS\n        </div>\n        <h3 class="light" (click)="goToCollection(collection.id)">{{ collection.name }}</h3>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/collections/collections.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_collection_service__["a" /* CollectionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], CollectionsPage);
    return CollectionsPage;
}());

//# sourceMappingURL=collections.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_collections__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionService = (function () {
    function CollectionService() {
        this.collections = __WEBPACK_IMPORTED_MODULE_1__mock_collections__["a" /* COLLECTIONS */];
    }
    CollectionService.prototype.getAll = function () {
        return this.collections;
    };
    CollectionService.prototype.getItem = function (id) {
        for (var i = 0; i < this.collections.length; i++) {
            if (this.collections[i].id === parseInt(id)) {
                return this.collections[i];
            }
        }
        return null;
    };
    CollectionService.prototype.remove = function (item) {
        this.collections.splice(this.collections.indexOf(item), 1);
    };
    CollectionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CollectionService);
    return CollectionService;
}());

//# sourceMappingURL=collection-service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import data from '../../data.json'
// import data from '../../data.json';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var FeedPage = (function () {
    function FeedPage(nav, reviewService) {
        this.nav = nav;
        this.reviewService = reviewService;
        // feed
        this.reviews = reviewService.getAll();
        // console.log(data) 
        this.posts = [];
    }
    // view a place
    FeedPage.prototype.viewPlace = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail__["a" /* PlaceDetailPage */], { id: id });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/feed/feed.html"*/'<!--\n  Generated template for the FeedPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Feed</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" common-bg">\n\n  <div class="button-set set-2">\n    <button ion-button color="primary">\n      Local Feed\n    </button>\n    <button ion-button color="light">\n      My Feed\n    </button>\n  </div>\n\n  <ion-list class="list-no-border">\n\n    <ion-card *ngFor="let item of posts">\n      <div>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{item.restaurant.image}}">\n        </ion-avatar>\n        <h2>{{item.restaurant.name}}</h2>\n        <p>November 5, 2018</p>\n      </ion-item>\n\n      <ion-card-content>\n        <p>{{item.text}}</p>\n      </ion-card-content>\n\n      <img src="{{item.image}}">\n\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="thumbs-up"></ion-icon>\n            <div>12 Likes</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-left clear small>\n            <ion-icon name="text"></ion-icon>\n            <div>4 Comments</div>\n          </button>\n        </ion-col>\n        <ion-col center text-center>\n          <ion-note>\n            11h ago\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      </div>\n\n    </ion-card>\n    <!-- \n    <ion-item *ngFor="let review of reviews" text-wrap class="margin-bottom">\n      <div class="item-header border-bottom" (click)="viewPlace(review.place.id)">\n        <img src="{{ review.place.photo}}" class="pull-left item-avatar" alt="">\n        <div class="pull-left">\n          <h3>{{ review.place.name }}</h3>\n          <div class="secondary uppercase text-sm">{{ review.place.district }}, {{ review.place.city }}</div>\n        </div>\n        <div class="clear"></div>\n      </div>\n      <div>\n        <div class="item-header">\n          <img src="{{ review.author.profile_picture}}" class="pull-left item-avatar profile-picture" alt="">\n          <div class="pull-left">\n            <h3>{{ review.author.username }}</h3>\n            <div class="secondary uppercase text-sm">{{ review.author.num_reviews }} Reviews, {{\n              review.author.num_folowers }} Follower\n            </div>\n          </div>\n        </div>\n        <div class="clear"></div>\n      </div>\n\n      <div>\n        <div class="pull-left secondary text-sm">{{ review.time }}</div>\n        <div class="pull-right secondary text-sm">\n          RATED\n          <span class="rating">\n            {{ review.rating }}\n          </span>\n        </div>\n\n        <div class="clear"></div>\n      </div>\n\n      <div class="text-sm" margin-top>\n        {{ review.text }}\n      </div>\n\n      <div class="post-images">\n        <img *ngFor="let photo of review.photos" src="{{ photo.thumb }}">\n      </div>\n\n      <div>\n        <div class="pull-left action-buttons">\n          <ion-icon name="md-heart-outline" color="danger"  [hidden]="!review.liked"></ion-icon>\n          <ion-icon name="md-heart-outline" color="secondary"  [hidden]="review.liked"></ion-icon>\n          <ion-icon name="ios-chatboxes-outline" color="danger"  [hidden]="!review.commented"></ion-icon>\n          <ion-icon name="ios-chatboxes-outline" color="secondary"  [hidden]="review.commented"></ion-icon>\n          <ion-icon name="md-share" color="secondary" ></ion-icon>\n        </div>\n\n        <div class="pull-right uppercase secondary text-sm">\n          {{ review.num_likes }} likes &bull;\n          {{ review.num_comments }} comments\n        </div>\n\n        <div class="clear"></div>\n      </div>\n\n    </ion-item> -->\n\n\n\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/feed/feed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_review_service__["a" /* ReviewService */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var AccountPage = (function () {
    function AccountPage(nav) {
        this.nav = nav;
    }
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Account</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- username-->\n  <ion-item class="no-border">\n    <ion-avatar item-left>\n      <img src="assets/img/user/mike.png" alt="">\n    </ion-avatar>\n    <span class="strong">Hassan Ali</span>\n    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n  </ion-item>\n\n  <!-- Profile -->\n  <ion-item-group>\n\n    <ion-item-divider bgColor>PROFILE</ion-item-divider>\n    <ion-item>\n      <ion-icon name="md-create"></ion-icon>\n      Edit profile\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-share"></ion-icon>\n      Connected accounts\n    </ion-item>\n    <ion-item>\n      <ion-icon name="timer"></ion-icon>\n      Recent viewed\n    </ion-item>\n    <ion-item>\n      <ion-icon name="pricetags"></ion-icon>\n      Saved Offers\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- Other -->\n  <ion-item-group>\n    <ion-item-divider bgColor>OTHERS</ion-item-divider>\n    <ion-item>\n      <ion-icon name="podium"></ion-icon>\n      Leaderboard\n    </ion-item>\n    <ion-item>\n      <ion-icon name="person-add"></ion-icon>\n      Find foodies\n    </ion-item>\n    <ion-item>\n      <ion-icon name="home"></ion-icon>\n      Suggest a restaurant\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-share"></ion-icon>\n      Invite friend\n    </ion-item>\n    <ion-item>\n      <ion-icon name="send"></ion-icon>\n      Send feedback\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-information-circle"></ion-icon>\n      About\n    </ion-item>\n    <ion-item>\n      <ion-icon name="star"></ion-icon>\n      Rate us\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-exit"></ion-icon>\n      Sign out\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_place_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_collection_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_review_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_review_add_review__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bookmarks_bookmarks__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_collections_collections__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_feed_feed__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_filters_filters__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_main_tabs_main_tabs__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_nearby_nearby__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_photos_photos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_place_detail_place_detail__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_places_places__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_reviews_reviews__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_search_search__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_select_location_select_location__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_sign_up_sign_up__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_user_user__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_http__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_http__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import services




// end import services
// import pages























// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_nearby_nearby__["a" /* NearbyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_photos_photos__["a" /* PhotosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_select_location_select_location__["a" /* SelectLocationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_user_user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_31__angular_http__["b" /* HttpModule */],
                // HTTP,
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    platforms: {
                        android: {
                            tabsPlacement: 'top',
                            tabsLayout: 'title-hide'
                        },
                        windows: {
                            tabsLayout: 'title-hide'
                        }
                    }
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_review_add_review__["a" /* AddReviewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bookmarks_bookmarks__["a" /* BookmarksPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_collections_collections__["a" /* CollectionsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_feed_feed__["a" /* FeedPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_filters_filters__["a" /* FiltersPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_main_tabs_main_tabs__["a" /* MainTabsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_nearby_nearby__["a" /* NearbyPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_photos_photos__["a" /* PhotosPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_place_detail_place_detail__["a" /* PlaceDetailPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_places_places__["a" /* PlacesPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_reviews_reviews__["a" /* ReviewsPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_select_location_select_location__["a" /* SelectLocationPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_user_user__["a" /* UserPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_7__services_collection_service__["a" /* CollectionService */],
                __WEBPACK_IMPORTED_MODULE_8__services_review_service__["a" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_http__["a" /* HTTP */]
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

/*
 {
 platforms: {
 android: {
 tabbarLayout: 'title-hide'
 },
 windows: {
 tabbarLayout: 'title-hide'
 }
 }
 }
 */
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import pages


var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //  this.rootPage = MainTabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        console.log(localStorage);
        if (!(localStorage.getItem('is_logged_in') == "true")) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_controller__["a" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PLACES; });
var PLACES = [
    {
        id: 1,
        name: "Patzeria Perfect Pizza",
        district: "Theater District",
        city: "New York City",
        website: "http://daoduythanh.com",
        phone: "+84988888888",
        num_reviews: 30,
        num_photos: 32,
        num_bookmarks: 27,
        num_check_in: 1316,
        num_votes: 232,
        bookmarked: false,
        address: "231W 46th street, New York",
        rating: 4.1,
        cuisines: "Pizza",
        cost: 20,
        accepted_card: 1,
        accepted_cash: 1,
        highlights: ['Breakfast', 'Takeaway available'],
        working_hours: {
            monday: {
                from: 7,
                to: 24
            },
            tuesday: {
                from: 7,
                to: 24
            },
            wednesday: {
                from: 7,
                to: 24
            },
            thursday: {
                from: 7,
                to: 24
            },
            friday: {
                from: 7,
                to: 24
            },
            saturday: {
                from: 7,
                to: 24
            },
            sunday: {
                from: 7,
                to: 24
            }
        },
        menu: [
            {
                id: 1,
                name: "Soup",
                items: [
                    {
                        id: 1,
                        name: "Pasta Fagioli Soup",
                        price: 350,
                        qty: 0
                    },
                    {
                        id: 2,
                        name: "3 Bean Chili Soup with Sour Cream",
                        price: 450,
                        qty: 0
                    },
                    {
                        id: 3,
                        name: "Soup of the day",
                        price: 400,
                        qty: 0
                    }
                ]
            },
            {
                id: 2,
                name: "Salad",
                items: [
                    {
                        id: 4,
                        name: "Small Ceasar Salad",
                        price: 200,
                        qty: 0
                    },
                    {
                        id: 5,
                        name: "Ceasar Salad with Grilled Steak",
                        price: 799,
                        qty: 0
                    },
                    {
                        id: 6,
                        name: "Ceasar Salad",
                        price: 250,
                        qty: 0
                    }
                ]
            },
            {
                id: 3,
                name: "Pizza",
                items: [
                    {
                        id: 7,
                        name: "Neopolitan Pizza",
                        price: 300,
                        qty: 0
                    },
                    {
                        id: 8,
                        name: "Sicilian Slice Pie",
                        price: 400,
                        qty: 0
                    },
                    {
                        id: 9,
                        name: "Sicilian Pizza",
                        price: 999,
                        qty: 0
                    }
                ]
            }
        ],
        reviews: [
            {
                id: 1,
                username: "Cowntown Foodie",
                profile_picture: "assets/img/user/adam.jpg",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            },
            {
                id: 2,
                username: "Christian Do",
                profile_picture: "assets/img/user/ben.png",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            }
        ],
        photos: [
            {
                thumb: "assets/img/menu/r1_thumb.jpg",
                full_size: "assets/img/menu/r1.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r2_thumb.jpg",
                full_size: "assets/img/menu/r2.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r3_thumb.jpg",
                full_size: "assets/img/menu/r3.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r4_thumb.jpg",
                full_size: "assets/img/menu/r4.jpg",
                description: ""
            }
        ]
    },
    {
        id: 2,
        name: "Lombardi's Pizza",
        district: "Nolita",
        city: "New York City",
        website: "http://daoduythanh.com",
        phone: "+84988888888",
        num_reviews: 193,
        num_photos: 32,
        num_bookmarks: 27,
        num_check_in: 1316,
        num_votes: 232,
        bookmarked: false,
        address: "231W 46th street, New York",
        rating: 4.1,
        cuisines: "Pizza",
        cost: 20,
        accepted_card: 1,
        accepted_cash: 1,
        highlights: ['Breakfast', 'Takeaway available'],
        working_hours: {
            monday: {
                from: 7,
                to: 24
            },
            tuesday: {
                from: 7,
                to: 24
            },
            wednesday: {
                from: 7,
                to: 24
            },
            thursday: {
                from: 7,
                to: 24
            },
            friday: {
                from: 7,
                to: 24
            },
            saturday: {
                from: 7,
                to: 24
            },
            sunday: {
                from: 7,
                to: 24
            }
        },
        menu: [
            {
                id: 1,
                name: "Soup",
                items: [
                    {
                        id: 1,
                        name: "Pasta Fagioli Soup",
                        price: 4.95
                    },
                    {
                        id: 2,
                        name: "3 Bean Chili Soup with Sour Cream",
                        price: 5.95
                    },
                    {
                        id: 3,
                        name: "Soup of the day",
                        price: 4.95
                    }
                ]
            },
            {
                id: 2,
                name: "Salad",
                items: [
                    {
                        id: 4,
                        name: "Small Ceasar Salad",
                        price: 6.95
                    },
                    {
                        id: 5,
                        name: "Ceasar Salad with Grilled Steak",
                        price: 13.95
                    },
                    {
                        id: 6,
                        name: "Ceasar Salad"
                    }
                ]
            },
            {
                id: 3,
                name: "Pizza",
                items: [
                    {
                        id: 7,
                        name: "Neopolitan Pizza",
                        price: 3
                    },
                    {
                        id: 8,
                        name: "Sicilian Slice Pie",
                        price: 4
                    },
                    {
                        id: 9,
                        name: "Sicilian Pizza",
                        price: 28
                    }
                ]
            }
        ],
        reviews: [
            {
                id: 1,
                username: "Cowntown Foodie",
                profile_picture: "assets/img/user/adam.jpg",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            },
            {
                id: 2,
                username: "Christian Do",
                profile_picture: "assets/img/user/ben.png",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            }
        ],
        photos: [
            {
                thumb: "assets/img/menu/r4_thumb.jpg",
                full_size: "assets/img/menu/r4.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r5_thumb.jpg",
                full_size: "assets/img/menu/r5.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r6_thumb.jpg",
                full_size: "assets/img/menu/r6.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r7_thumb.jpg",
                full_size: "assets/img/menu/r7.jpg",
                description: ""
            }
        ]
    },
    {
        id: 3,
        name: "Domino Pizza",
        district: "Nolita",
        city: "New York City",
        website: "http://daoduythanh.com",
        phone: "+84988888888",
        num_reviews: 193,
        num_photos: 32,
        num_bookmarks: 27,
        num_check_in: 1316,
        num_votes: 232,
        bookmarked: false,
        address: "231W 46th street, New York",
        rating: 4.5,
        cuisines: "Pizza",
        cost: 20,
        accepted_card: 1,
        accepted_cash: 1,
        highlights: ['Breakfast', 'Takeaway available'],
        working_hours: {
            monday: {
                from: 7,
                to: 24
            },
            tuesday: {
                from: 7,
                to: 24
            },
            wednesday: {
                from: 7,
                to: 24
            },
            thursday: {
                from: 7,
                to: 24
            },
            friday: {
                from: 7,
                to: 24
            },
            saturday: {
                from: 7,
                to: 24
            },
            sunday: {
                from: 7,
                to: 24
            }
        },
        menu: [
            {
                id: 1,
                name: "Soup",
                items: [
                    {
                        id: 1,
                        name: "Pasta Fagioli Soup",
                        price: 4.95
                    },
                    {
                        id: 2,
                        name: "3 Bean Chili Soup with Sour Cream",
                        price: 5.95
                    },
                    {
                        id: 3,
                        name: "Soup of the day",
                        price: 4.95
                    }
                ]
            },
            {
                id: 2,
                name: "Salad",
                items: [
                    {
                        id: 4,
                        name: "Small Ceasar Salad",
                        price: 6.95
                    },
                    {
                        id: 5,
                        name: "Ceasar Salad with Grilled Steak",
                        price: 13.95
                    },
                    {
                        id: 6,
                        name: "Ceasar Salad"
                    }
                ]
            },
            {
                id: 3,
                name: "Pizza",
                items: [
                    {
                        id: 7,
                        name: "Neopolitan Pizza",
                        price: 3
                    },
                    {
                        id: 8,
                        name: "Sicilian Slice Pie",
                        price: 4
                    },
                    {
                        id: 9,
                        name: "Sicilian Pizza",
                        price: 28
                    }
                ]
            }
        ],
        reviews: [
            {
                id: 1,
                username: "Cowntown Foodie",
                profile_picture: "assets/img/user/adam.jpg",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            },
            {
                id: 2,
                username: "Christian Do",
                profile_picture: "assets/img/user/ben.png",
                rating: 4.5,
                comment: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!"
            }
        ],
        photos: [
            {
                thumb: "assets/img/menu/r6_thumb.jpg",
                full_size: "assets/img/menu/r6.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r2_thumb.jpg",
                full_size: "assets/img/menu/r2.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r1_thumb.jpg",
                full_size: "assets/img/menu/r1.jpg",
                description: ""
            },
            {
                thumb: "assets/img/menu/r4_thumb.jpg",
                full_size: "assets/img/menu/r4.jpg",
                description: ""
            }
        ]
    }
];
//# sourceMappingURL=mock-places.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REVIEWS; });
var REVIEWS = [
    {
        id: 1,
        rating: 4.5,
        text: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!",
        time: "2 hours ago",
        liked: false,
        commented: true,
        num_likes: 0,
        num_comments: 0,
        photos: [
            {
                thumb: "assets/img/menu/r1_thumb.jpg",
                full_size: "assets/img/menu/r1.jpg"
            }
        ],
        author: {
            id: 1,
            username: "Cowntown Foodie",
            profile_picture: "assets/img/user/adam.jpg",
            num_reviews: 50,
            num_folowers: 111
        },
        place: {
            id: 1,
            name: "Patzeria Perfect Pizza",
            district: "Theater District",
            city: "New York City",
            photo: "assets/img/menu/r1_thumb.jpg",
        }
    },
    {
        id: 2,
        rating: 3.5,
        text: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!",
        time: "2 hours ago",
        liked: false,
        commented: true,
        num_likes: 0,
        num_comments: 0,
        photos: [
            {
                thumb: "assets/img/menu/r2_thumb.jpg",
                full_size: "assets/img/menu/r2.jpg"
            }
        ],
        author: {
            id: 1,
            username: "Benzema",
            profile_picture: "assets/img/user/ben.png",
            num_reviews: 50,
            num_folowers: 111
        },
        place: {
            id: 1,
            name: "Patzeria Perfect Pizza",
            district: "Theater District",
            city: "New York City",
            photo: "assets/img/menu/r2_thumb.jpg",
        }
    },
    {
        id: 3,
        rating: 4.5,
        text: "We know there's plenty more to do, but we've never been this excited about an app update. Go ahead – take it for a spin, and yes, never have a bad meal!",
        time: "2 hours ago",
        liked: false,
        commented: true,
        num_likes: 0,
        num_comments: 0,
        photos: [
            {
                thumb: "assets/img/menu/r3_thumb.jpg",
                full_size: "assets/img/menu/r3.jpg"
            }
        ],
        author: {
            id: 1,
            username: "Benzema",
            profile_picture: "assets/img/user/max.png",
            num_reviews: 50,
            num_folowers: 111
        },
        place: {
            id: 1,
            name: "Patzeria Perfect Pizza",
            district: "Theater District",
            city: "New York City",
            photo: "assets/img/menu/r3_thumb.jpg",
        }
    }
];
//# sourceMappingURL=mock-reviews.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLLECTIONS; });
/**
 * Created by succe on 09-Jul-16.
 */
var COLLECTIONS = [
    {
        id: 1,
        name: "Trending this Week",
        num_places: 30,
        num_bookmarks: 6268,
        background: "assets/img/menu/r1.jpg",
        places: [1, 2, 3, 4]
    },
    {
        id: 2,
        name: "Ramen",
        num_places: 30,
        num_bookmarks: 6268,
        background: "assets/img/menu/r2.jpg",
        places: [1, 2, 3, 4]
    },
    {
        id: 3,
        name: "Pizza",
        num_places: 30,
        num_bookmarks: 6268,
        background: "assets/img/menu/r3.jpg",
        places: [1, 2, 3, 4]
    },
    {
        id: 4,
        name: "Steak",
        num_places: 30,
        num_bookmarks: 6268,
        background: "assets/img/menu/r1.jpg",
        places: [1, 2, 3, 4]
    }
];
//# sourceMappingURL=mock-collections.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var AddReviewPage = (function () {
    function AddReviewPage(nav) {
        this.nav = nav;
    }
    AddReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-review',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/add-review/add-review.html"*/'<!--\n  Generated template for the AddReviewPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n	  <ion-title>AddReview</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="add-review">\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/add-review/add-review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddReviewPage);
    return AddReviewPage;
}());

//# sourceMappingURL=add-review.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
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
var UserPage = (function () {
    function UserPage(nav) {
        this.nav = nav;
    }
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n	  <ion-title>User</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding class="user">\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/user/user.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_places__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlaceService = (function () {
    function PlaceService() {
        this.places = __WEBPACK_IMPORTED_MODULE_1__mock_places__["a" /* PLACES */];
    }
    PlaceService.prototype.getAll = function () {
        return this.places;
    };
    PlaceService.prototype.getItem = function (id) {
        for (var i = 0; i < this.places.length; i++) {
            if (this.places[i].id === parseInt(id)) {
                return this.places[i];
            }
        }
        return null;
    };
    PlaceService.prototype.remove = function (item) {
        this.places.splice(this.places.indexOf(item), 1);
    };
    PlaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlaceService);
    return PlaceService;
}());

//# sourceMappingURL=place-service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photos_photos__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reviews_reviews__ = __webpack_require__(210);
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
var PlaceDetailPage = (function () {
    function PlaceDetailPage(nav, placeService) {
        this.nav = nav;
        this.placeService = placeService;
        // get first place for example
        this.place = placeService.getItem(1);
        // get working hours
        this.workingHour = this.getWorkingHours(this.place.working_hours);
    }
    // get working hours in today
    PlaceDetailPage.prototype.getWorkingHours = function (hours) {
        var d = new Date();
        var currentDay = {
            from: null,
            to: null
        };
        var availableNow = false;
        switch (d.getDay()) {
            case 0:
                currentDay = hours.sunday;
                break;
            case 1:
                currentDay = hours.monday;
                break;
            case 2:
                currentDay = hours.tuesday;
                break;
            case 3:
                currentDay = hours.wednesday;
                break;
            case 4:
                currentDay = hours.thursday;
                break;
            case 5:
                currentDay = hours.friday;
                break;
            case 6:
                currentDay = hours.saturday;
                break;
        }
        availableNow = ((d.getHours() >= currentDay.from) && (d.getHours() <= currentDay.to));
        return {
            available: availableNow,
            from: currentDay.from,
            to: currentDay.to
        };
    };
    // get limit elements for arr
    PlaceDetailPage.prototype.limitArray = function (arr, limit) {
        var tmpArr = [];
        for (var i = 0; i < limit; i++) {
            tmpArr.push(arr[i]);
        }
        return tmpArr;
    };
    // add bookmark
    PlaceDetailPage.prototype.addBookMark = function (place) {
        place.bookmarked = !place.bookmarked;
    };
    // go to map
    PlaceDetailPage.prototype.goToMap = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */]);
    };
    // to to menu page
    PlaceDetailPage.prototype.goToMenu = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    // go to photos
    PlaceDetailPage.prototype.goToPhotos = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__photos_photos__["a" /* PhotosPage */]);
    };
    // go to reviews
    PlaceDetailPage.prototype.goToReviews = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__reviews_reviews__["a" /* ReviewsPage */]);
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-detail',template:/*ion-inline-start:"/Users/Hassan/Downloads/foodpool/src/pages/place-detail/place-detail.html"*/'<!--\n  Generated template for the PlaceDetailPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>Place Detail</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <ion-icon name="md-share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class=" common-bg rlt">\n\n  <!-- content top -->\n  <div class="bg-image" [ngStyle]="{\'background-image\': \'url(\' + place.photos[0].full_size + \')\'}">\n\n    <div class="bg-overlay" padding>\n      <div>\n        <div class="pull-left">\n          <h3>{{ place.name}}</h3>\n          <span>{{ place.district }}, {{ place.city }}</span>\n        </div>\n\n        <div class="pull-right" text-right>\n          <div class="rating">{{ place.rating }}</div>\n          <div>{{ place.num_votes }} votes</div>\n        </div>\n\n        <div class="clear"></div>\n      </div>\n\n      <div margin-top>\n        <ion-badge color="favorite"  [hidden]="!workingHour.available">OPEN NOW</ion-badge>\n        <ion-badge color="primary"  [hidden]="workingHour.available">CLOSE NOW</ion-badge>\n        {{ workingHour.from }}h to {{ workingHour.to }}h\n        <div>\n          {{ place.num_reviews }} Reviews &bull;\n          {{ place.num_photos }} Photos\n        </div>\n      </div>\n\n      <div class="line" margin-top margin-bottom></div>\n      <div margin-bottom>\n        <a href="tel:{{ place.phone }}" class="btn-round">\n          <ion-icon name="call" color="favorite" ></ion-icon>\n        </a>\n        <div class="btn-round" (click)="addBookMark(place)">\n          <ion-icon name="bookmark" color="primary"  [hidden]="!place.bookmarked"></ion-icon>\n          <ion-icon name="bookmark" [hidden]="place.bookmarked"></ion-icon>\n        </div>\n        <div class="btn-round" (click)="goToMap()">\n          <ion-icon name="pin"></ion-icon>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--address-->\n  <div padding class="light-bg">\n    <div class="strong">Address</div>\n    <span>{{ place.address }}</span>\n\n    <p>\n      <a href="{{ place.website }}" ion-text color="primary" >\n        Website\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon>\n      </a>\n    </p>\n  </div>\n  <div class="block-footer" padding text-right (click)="goToMap()">\n    <span ion-text color="primary" >Map & Directions</span>\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n  </div>\n\n  <!-- menu -->\n  <div padding class="light-bg margin-top-20">\n    <div class="strong">MAIN MENU</div>\n    <div class="menu-title">\n      {{ place.menu[0].name }}\n    </div>\n    <div *ngFor="let item of place.menu[0].items">\n      <span>{{ item.name }}</span>\n      <span class="pull-right">{{ item.price | currency:\'USD\':true }}</span>\n    </div>\n  </div>\n  <div class="block-footer" padding text-right (click)="goToMenu()">\n    <span ion-text color="primary" >See Menu</span>\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n  </div>\n\n  <!-- photos -->\n  <div padding class="light-bg margin-top-20">\n    <div class="strong">Photos</div>\n\n    <ion-grid class="grid-no-padding">\n      <ion-row>\n        <ion-col width-25 *ngFor="let photo of limitArray(place.photos, 4)">\n          <img class="round" src="{{ photo.thumb }}" alt="">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <button  ion-button color="favorite"  block>\n      Add photo\n    </button>\n  </div>\n  <div class="block-footer" padding text-right (click)="goToPhotos()">\n    <span ion-text color="primary" >See All Photos</span>\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n  </div>\n\n  <!-- Reviews -->\n  <div padding class="light-bg margin-top-20">\n    <div class="strong">Reviews</div>\n    <div margin-top class="secondary">RECENT REVIEWS</div>\n    <ion-list class="list-no-border">\n      <ion-item *ngFor="let review of place.reviews" text-wrap>\n        <ion-avatar item-left>\n          <img src="{{ review.profile_picture }}" alt="">\n        </ion-avatar>\n        <div class="strong">{{ review.username }}</div>\n        <div class="text-sm">\n          <span class="strong">RATED</span>\n          <span class="rating">{{ review.rating }}</span>\n          {{ review.comment }}\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class="block-footer" padding text-right (click)="goToReviews()">\n    <span ion-text color="primary" >Read All Review({{ place.num_reviews }})</span>\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n  </div>\n\n  <!-- Other info -->\n  <div padding class="light-bg margin-top-20">\n    <span class="strong">Hours</span>\n    <ion-badge color="favorite"  [hidden]="!workingHour.available">OPEN NOW</ion-badge>\n    <ion-badge color="primary"  [hidden]="workingHour.available">CLOSE NOW</ion-badge>\n    <div class="strong">\n      {{ workingHour.from }}h to {{ workingHour.to }}h\n    </div>\n    <span ion-text color="primary" >View All Days</span>\n\n    <div class="strong" margin-top>Cuisines</div>\n    <div>{{ place.cuisines }}</div>\n\n    <div class="strong" margin-top>Cost</div>\n    <div>{{ place.cost | currency:\'USD\':true }}</div>\n\n    <div>\n      <ion-icon name="card"></ion-icon>\n      <span *ngIf="place.accepted_card && place.accepted_cash">Cash & card accepted</span>\n      <span *ngIf="place.accepted_card && !place.placeaccepted_cash">Card accepted</span>\n      <span *ngIf="!place.accepted_card && place.accepted_cash">Cash accepted</span>\n    </div>\n\n    <div class="strong" margin-top>Highlights</div>\n    <div *ngFor="let item of place.highlights">\n      <ion-icon name="checkmark-circle" color="favorite" ></ion-icon>\n      {{ item }}\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Hassan/Downloads/foodpool/src/pages/place-detail/place-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map