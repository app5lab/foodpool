webpackJsonp([5],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewsPageModule = (function () {
    function ReviewsPageModule() {
    }
    ReviewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reviews__["a" /* ReviewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reviews__["a" /* ReviewsPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__reviews__["a" /* ReviewsPage */]]
        })
    ], ReviewsPageModule);
    return ReviewsPageModule;
}());

//# sourceMappingURL=reviews.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_review_service__ = __webpack_require__(198);
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
            selector: 'page-reviews',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\reviews\reviews.html"*/'<!--\n\n  Generated template for the ReviewsPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Reviews</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" feed common-bg">\n\n  <ion-list class="list-no-border">\n\n\n\n    <ion-item *ngFor="let review of reviews" text-wrap class="margin-bottom">\n\n      <div>\n\n        <div class="item-header">\n\n          <img src="{{ review.author.profile_picture}}" class="pull-left item-avatar profile-picture" alt="">\n\n          <div class="pull-left">\n\n            <h3>{{ review.author.username }}</h3>\n\n            <div class="secondary uppercase text-sm">{{ review.author.num_reviews }} Reviews, {{\n\n              review.author.num_folowers }} Follower\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <div class="clear"></div>\n\n      </div>\n\n\n\n      <div>\n\n        <div class="pull-left secondary text-sm">{{ review.time }}</div>\n\n        <div class="pull-right secondary text-sm">\n\n          RATED\n\n          <span class="rating">\n\n            {{ review.rating }}\n\n          </span>\n\n        </div>\n\n\n\n        <div class="clear"></div>\n\n      </div>\n\n\n\n      <div class="text-sm" margin-top>\n\n        {{ review.text }}\n\n      </div>\n\n\n\n      <div class="post-images">\n\n        <img *ngFor="let photo of review.photos" src="{{ photo.thumb }}">\n\n      </div>\n\n\n\n      <div>\n\n        <div class="pull-left action-buttons">\n\n          <ion-icon name="md-heart-outline" color="danger"  [hidden]="!review.liked"></ion-icon>\n\n          <ion-icon name="md-heart-outline" color="secondary"  [hidden]="review.liked"></ion-icon>\n\n          <ion-icon name="ios-chatboxes-outline" color="danger"  [hidden]="!review.commented"></ion-icon>\n\n          <ion-icon name="ios-chatboxes-outline" color="secondary"  [hidden]="review.commented"></ion-icon>\n\n          <ion-icon name="md-share" color="secondary" ></ion-icon>\n\n        </div>\n\n\n\n        <div class="pull-right uppercase secondary text-sm">\n\n          {{ review.num_likes }} likes &bull;\n\n          {{ review.num_comments }} comments\n\n        </div>\n\n\n\n        <div class="clear"></div>\n\n      </div>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\reviews\reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_review_service__["a" /* ReviewService */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ })

});
//# sourceMappingURL=5.js.map