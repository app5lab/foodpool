webpackJsonp([24],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		279,
		23
	],
	"../pages/add-review/add-review.module": [
		280,
		22
	],
	"../pages/bookmarks/bookmarks.module": [
		281,
		21
	],
	"../pages/cartview/cartview.module": [
		282,
		20
	],
	"../pages/checkout/checkout.module": [
		283,
		19
	],
	"../pages/collections/collections.module": [
		284,
		18
	],
	"../pages/feed/feed.module": [
		285,
		17
	],
	"../pages/filters/filters.module": [
		286,
		16
	],
	"../pages/forgot-password/forgot-password.module": [
		287,
		15
	],
	"../pages/home/home.module": [
		288,
		14
	],
	"../pages/login/login.module": [
		289,
		13
	],
	"../pages/main-tabs/main-tabs.module": [
		290,
		12
	],
	"../pages/map/map.module": [
		291,
		11
	],
	"../pages/menu/menu.module": [
		292,
		10
	],
	"../pages/nearby/nearby.module": [
		293,
		9
	],
	"../pages/photos/photos.module": [
		294,
		8
	],
	"../pages/place-detail/place-detail.module": [
		295,
		7
	],
	"../pages/places/places.module": [
		296,
		6
	],
	"../pages/pool/pool.module": [
		297,
		5
	],
	"../pages/reviews/reviews.module": [
		298,
		4
	],
	"../pages/search/search.module": [
		299,
		3
	],
	"../pages/select-location/select-location.module": [
		300,
		2
	],
	"../pages/sign-up/sign-up.module": [
		301,
		1
	],
	"../pages/user/user.module": [
		302,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_places__ = __webpack_require__(250);
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_reviews__ = __webpack_require__(252);
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

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_collections__ = __webpack_require__(251);
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

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_place_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_collection_service__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_review_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import services






// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
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
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-review/add-review.module#AddReviewPageModule', name: 'AddReviewPage', segment: 'add-review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bookmarks/bookmarks.module#BookmarksPageModule', name: 'BookmarksPage', segment: 'bookmarks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cartview/cartview.module#CartviewPageModule', name: 'CartviewPage', segment: 'cartview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/collections/collections.module#CollectionsPageModule', name: 'CollectionsPage', segment: 'collections', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filters/filters.module#FiltersPageModule', name: 'FiltersPage', segment: 'filters', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main-tabs/main-tabs.module#MainTabsPageModule', name: 'MainTabsPage', segment: 'main-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby/nearby.module#NearbyPageModule', name: 'NearbyPage', segment: 'nearby', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photos/photos.module#PhotosPageModule', name: 'PhotosPage', segment: 'photos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/place-detail/place-detail.module#PlaceDetailPageModule', name: 'PlaceDetailPage', segment: 'place-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/places/places.module#PlacesPageModule', name: 'PlacesPage', segment: 'places', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pool/pool.module#PoolPageModule', name: 'PoolPage', segment: 'pool', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-location/select-location.module#SelectLocationPageModule', name: 'SelectLocationPage', segment: 'select-location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__services_place_service__["a" /* PlaceService */],
                __WEBPACK_IMPORTED_MODULE_7__services_collection_service__["a" /* CollectionService */],
                __WEBPACK_IMPORTED_MODULE_8__services_review_service__["a" /* ReviewService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__["a" /* HTTP */],
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

/***/ 250:
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

/***/ 251:
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

/***/ 252:
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

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__ = __webpack_require__(18);
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
            this.nav.setRoot('LoginPage');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular_navigation_nav_controller__["a" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map