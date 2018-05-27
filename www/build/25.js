webpackJsonp([25],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
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
var AccountPage = (function () {
    function AccountPage(nav) {
        this.nav = nav;
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    }
    AccountPage.prototype.logout = function () {
        localStorage.removeItem('user');
        this.nav.setRoot('LoginPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\account\account.html"*/'<!--\n\n  Generated template for the AccountPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Account</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon name="notifications"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- username-->\n\n  <ion-item class="no-border">\n\n    <ion-avatar item-left>\n\n      <img src="assets/img/user/mike.png" alt="">\n\n    </ion-avatar>\n\n    <span class="strong">{{this.user.username}}</span>\n\n    <ion-icon name="ios-arrow-forward" item-right></ion-icon>\n\n  </ion-item>\n\n\n\n  <!-- Profile -->\n\n  <ion-item-group>\n\n\n\n    <ion-item-divider bgColor>PROFILE</ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="md-create"></ion-icon>\n\n      Edit profile\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-share"></ion-icon>\n\n      Connected accounts\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="timer"></ion-icon>\n\n      Recent viewed\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="pricetags"></ion-icon>\n\n      Saved Offers\n\n    </ion-item>\n\n\n\n  </ion-item-group>\n\n\n\n  <!-- Other -->\n\n  <ion-item-group>\n\n    <ion-item-divider bgColor>OTHERS</ion-item-divider>\n\n    <ion-item>\n\n      <ion-icon name="podium"></ion-icon>\n\n      Leaderboard\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="person-add"></ion-icon>\n\n      Find foodies\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="home"></ion-icon>\n\n      Suggest a restaurant\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="md-share"></ion-icon>\n\n      Invite friend\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="send"></ion-icon>\n\n      Send feedback\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="ios-information-circle"></ion-icon>\n\n      About\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="star"></ion-icon>\n\n      Rate us\n\n    </ion-item>\n\n    <ion-item (click)="logout()">\n\n      <ion-icon name="ios-exit"></ion-icon>\n\n      Sign out\n\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=25.js.map