webpackJsonp([14],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(200);
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
var LoginPage = (function () {
    function LoginPage(nav, toast, facebook, http, hp, alert) {
        this.nav = nav;
        this.toast = toast;
        this.facebook = facebook;
        this.http = http;
        this.hp = hp;
        this.alert = alert;
        this.user = {
            "username": "",
            "password": ""
        };
    }
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push('ForgotPasswordPage');
    };
    LoginPage.prototype.login_via_email = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        this.user = {
            username: this.user.email,
            password: this.user.password
        };
        this.http.post('http://localhost:3000/users/auth', this.user, options).subscribe(function (res) {
            localStorage.removeItem('user');
            if (res.json().id != null) {
                localStorage.setItem('user', JSON.stringify(res.json()));
                _this.nav.setRoot('MainTabsPage');
            }
            else {
                var errConfig = {
                    message: 'Error loging in',
                    duration: 3000,
                    position: 'top'
                };
                var t = _this.toast.create(errConfig);
                t.present();
            }
        }, function (err) {
            var errConfig = {
                message: 'Error loging in',
                duration: 3000,
                position: 'top'
            };
            var t = _this.toast.create(errConfig);
            t.present();
        });
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
        this.nav.push('SignUpPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>Food Pool</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="signUp()" class="light">Sign up</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="login">\n\n  <ion-slides autoplay=3000 loop=true style="height:100%;width:100%;" zoom>\n\n  \n\n    <ion-slide style="background-color:white;" class="fill">\n\n      <img class="fill" src="https://apis.xogrp.com/media-api/images/d2d7c5af-d3e0-4371-8e53-cc9d37b140d6~rs_768.h" alt="">\n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color:white;" class="fill">\n\n      <img  class="fill" src="https://cdn.photographylife.com/wp-content/uploads/2014/06/Camera-Phone-Food-Photography-27.jpg" alt="">\n\n    </ion-slide>\n\n  \n\n    <!-- <ion-slide>\n\n      <img class="fill" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGbvfNeOF-c4Gz2YUXGNfojS8IKmu7XeDUB8Gz5azVq7h3heYz6ghttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAODDlD_pkMIWRltonD2Y7FBgBI5Oz--PccGB9qpZi3Fqq7IDLhttp://veganfamilyrecipes.com/wp-content/uploads/2015/12/thai-biscuit-mini-sandwiches-768x1024.jpg" alt="" class="fill">      \n\n    </ion-slide> -->\n\n  \n\n  </ion-slides>\n\n    <h1 class="h" style="font-family: \'verdana\'; font-size: 45px; color: black;">FoodPool</h1>\n\n  \n\n  <div id=\'one\' style="width: 100%;">\n\n    <div style="margin-left:55px;margin-bottom:10px;">\n\n      <input [(ngModel)]="user.email" placeholder="Username" style="padding: 10px;margin:auto; width: 80%;" />\n\n\n\n    </div>\n\n    <div style="margin-left:55px;">\n\n         <input [(ngModel)]="user.password" placeholder="Password" style="padding: 10px;margin:auto; width: 80%;" />\n\n    </div>\n\n    <div style="text-align: center; padding: 10px;">\n\n           <button ion-button style="width: 80%; " (click)="login_via_email()">Login via Email</button>\n\n    </div>\n\n           <button ion-button (click)="fblogin()" round color="facebook" block class="margin-bottom" style="width:95%;text-align:center;">Login via Facebook</button>\n\n  </div>\n\n  <!-- <ion-card *ngIf="userData">\n\n    <ion-card-header>{{ userData.username }}</ion-card-header>\n\n    <img [src]="userData.picture" />\n\n    <ion-card-content>\n\n      <p>id: {{ userData.id }}</p>\n\n      \n\n      <p>Email: {{ userData.email }}</p>\n\n      <p>First Name: {{ userData.first_name }}</p>\n\n      <p>Friends: {{ userData.friends }}</p>\n\n      <p>Location: {{ userData.locations }}</p>\n\n      <p>Address: {{ userData.address }}</p>\n\n      \n\n      \n\n      \n\n    </ion-card-content>\n\n  </ion-card> -->\n\n  <!-- <button ion-button color="googleplus" block class="margin-top">Login via Google+</button>\n\n\n\n  <div text-center class="margin-top-20 secondary">OR LOGIN USING EMAIL</div>\n\n\n\n  <ion-list class="list-form">\n\n\n\n    <ion-item class="margin-top">\n\n      <ion-input type="text" placeholder="Email or username"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item class="margin-top">\n\n      <ion-input type="password" placeholder="Password"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <button ion-button color="secondary" block (click)="login()">LOGIN</button>\n\n\n\n  <div text-center class="margin-top-20 secondary" (click)="forgotPwd()">Forgot password?</div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=14.js.map