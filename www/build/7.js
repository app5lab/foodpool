webpackJsonp([7],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesPageModule", function() { return PlacesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__places__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlacesPageModule = (function () {
    function PlacesPageModule() {
    }
    PlacesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__places__["a" /* PlacesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__places__["a" /* PlacesPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__places__["a" /* PlacesPage */]]
        })
    ], PlacesPageModule);
    return PlacesPageModule;
}());

//# sourceMappingURL=places.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(195);
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
        var filterModal = this.modalCtrl.create('FiltersPage');
        filterModal.present();
    };
    // view a place
    PlacesPage.prototype.viewPlace = function (id) {
        this.nav.push('PlaceDetailPage', { id: id });
    };
    // go to search page
    PlacesPage.prototype.goToSearch = function () {
        this.app.getRootNav().push('SearchPage');
    };
    PlacesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-places',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\places\places.html"*/'<!--\n\n  Generated template for the PlacesPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Places</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button  ion-button (click)="goToSearch()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button  ion-button (click)="showFilters()">\n\n        <ion-icon name="options"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" common-bg">\n\n  <ion-card *ngFor="let place of places" (click)="viewPlace(place.id)">\n\n    <ion-card-header>\n\n      <!-- title -->\n\n      <div>\n\n        <span class="strong">{{ place.name }}</span>\n\n        <span class="rating pull-right">{{ place.rating }}</span>\n\n      </div>\n\n\n\n      <!--sub title-->\n\n      <div class="uppercase text-sm secondary">\n\n        {{ place.district }}, {{ place.city }}\n\n      </div>\n\n\n\n      <!-- extra info -->\n\n      <div class="text-sm secondary" padding-bottom>\n\n        {{ place.num_reviews }} Reviews &bull;\n\n        {{ place.num_bookmarks }} Bookmarks &bull;\n\n        {{ place.num_check_in }} Been There\n\n      </div>\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col col-4 class="secondary">Cuisines</ion-col>\n\n          <ion-col width-66>{{ place.cuisines }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4 class="secondary">Cost</ion-col>\n\n          <ion-col width-66>{{ place.cost }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-4 class="secondary">Hours</ion-col>\n\n          <ion-col width-66>{{ getWorkingHours(place.working_hours) }}</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col width-25 *ngFor="let photo of limitArray(place.photos, 4)">\n\n            <img class="round" src="{{ photo.thumb }}" alt="">\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\places\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], PlacesPage);
    return PlacesPage;
}());

//# sourceMappingURL=places.js.map

/***/ })

});
//# sourceMappingURL=7.js.map