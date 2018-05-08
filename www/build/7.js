webpackJsonp([7],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceDetailPageModule", function() { return PlaceDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_detail__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaceDetailPageModule = (function () {
    function PlaceDetailPageModule() {
    }
    PlaceDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__place_detail__["a" /* PlaceDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place_detail__["a" /* PlaceDetailPage */]),
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__place_detail__["a" /* PlaceDetailPage */]]
        })
    ], PlaceDetailPageModule);
    return PlaceDetailPageModule;
}());

//# sourceMappingURL=place-detail.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_place_service__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(195);
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
    function PlaceDetailPage(nav, placeService, params, http) {
        var _this = this;
        this.nav = nav;
        this.placeService = placeService;
        this.http = http;
        this.categorized = [];
        this.objectKeys = Object.keys;
        this.open = -1;
        this.total_price = 0;
        if (localStorage.getItem('total_price') != null)
            this.total_price = parseInt(localStorage.getItem('total_price'));
        this.place = placeService.getItem(1);
        var detail = params.get('detail');
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ withCredentials: true, headers: headers });
        http.post('http://localhost:3000/products', { "restaurant_id": detail.id }, options).subscribe(function (res) {
            _this.categorized = res.json();
            console.log(_this.categorized);
        }, function (err) { return console.log(err); }, function () {
            var items = [];
            items = JSON.parse(localStorage.getItem('cart'));
            _this.objectKeys(_this.categorized).forEach(function (categories) {
                var keys = _this.objectKeys(_this.categorized[categories]);
                keys.forEach(function (key) {
                    var temp = items.find(function (x) { return x.id == key; });
                    if (temp != null)
                        _this.categorized[categories][key].item.forEach(function (food) {
                            if (food.variation_name == temp.variation_name)
                                food.qty = temp.qty;
                        });
                });
            });
        });
        console.log(detail);
        console.log(this.place);
        this.place.name = detail.title;
        this.place.menu = this.categorized;
        // get working hours
        this.workingHour = this.getWorkingHours(this.place.working_hours);
    }
    PlaceDetailPage.prototype.add_to_cart = function (item) {
        item.qty = item.qty + 1;
        var items = [];
        if (localStorage.getItem('cart') == null) {
            items.push(item);
            localStorage.setItem('cart', JSON.stringify(items));
        }
        else {
            items = JSON.parse(localStorage.getItem('cart'));
            console.log(items.find(function (x) { return x.id === item.id; }));
            var i = items.find(function (x) { return x.id === item.id; });
            if (i == null)
                items.push(item);
            else
                items.find(function (x) { return x.id === item.id; }).qty = items.find(function (x) { return x.id === item.id; }).qty + 1;
            localStorage.setItem('cart', JSON.stringify(items));
        }
        if (localStorage.getItem('total_price') == null) {
            localStorage.setItem('total_price', item.variation_price + '');
        }
        else {
            var temp_price = parseInt(localStorage.getItem('total_price')) + item.variation_price;
            localStorage.setItem('total_price', temp_price + '');
        }
        this.total_price = parseInt(localStorage.getItem('total_price'));
    };
    PlaceDetailPage.prototype.toggleSection = function (i) {
        this.categorized[i].open = !this.categorized[i].open;
        if (this.categorized[i].open == false) {
            for (var key in this.categorized[i]) {
                this.categorized[i][key];
                if (key != 'open')
                    this.categorized[i][key].open = false;
            }
        }
    };
    PlaceDetailPage.prototype.toggleItem = function (i) {
        i.open = !i.open;
    };
    PlaceDetailPage.prototype.add = function (item) {
        console.log(item);
        item.qty = item.qty + 1;
    };
    PlaceDetailPage.prototype.customize = function (item, e) {
        console.log('custom');
        e.preventDefault();
        e.stopPropagation();
    };
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
        this.nav.push('MapPage');
    };
    // to to menu page
    PlaceDetailPage.prototype.goToMenu = function () {
        this.nav.push('MenuPage');
    };
    // go to photos
    PlaceDetailPage.prototype.goToPhotos = function () {
        this.nav.push('PhotosPage');
    };
    // go to reviews
    PlaceDetailPage.prototype.goToReviews = function () {
        this.nav.push('ReviewsPage');
    };
    PlaceDetailPage.prototype.viewcart = function () {
        this.nav.push('CartviewPage');
    };
    PlaceDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-place-detail',template:/*ion-inline-start:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\place-detail\place-detail.html"*/'<ion-header>\n\n  <ion-navbar color="primary" >\n\n    <ion-title>Place Detail</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button>\n\n        <ion-icon name="md-share"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class=" common-bg rlt">\n\n\n\n  <!-- content top -->\n\n  <div class="bg-image" [ngStyle]="{\'background-image\': \'url(\' + place.photos[0].full_size + \')\'}">\n\n\n\n    <div class="bg-overlay" padding>\n\n      <div>\n\n        <div class="pull-left">\n\n          <h3>{{ place.name}}</h3>\n\n          <span>{{ place.district }}, {{ place.city }}</span>\n\n        </div>\n\n\n\n        <div class="pull-right" text-right>\n\n          <div class="rating">{{ place.rating }}</div>\n\n          <div>{{ place.num_votes }} votes</div>\n\n        </div>\n\n\n\n        <div class="clear"></div>\n\n      </div>\n\n\n\n      <div margin-top>\n\n        <ion-badge color="favorite"  [hidden]="!workingHour.available">OPEN NOW</ion-badge>\n\n        <ion-badge color="primary"  [hidden]="workingHour.available">CLOSE NOW</ion-badge>\n\n        {{ workingHour.from }}h to {{ workingHour.to }}h\n\n        <div>\n\n          {{ place.num_reviews }} Reviews &bull;\n\n          {{ place.num_photos }} Photos\n\n        </div>\n\n      </div>\n\n\n\n      <div class="line" margin-top margin-bottom></div>\n\n      <div margin-bottom>\n\n        <a href="tel:{{ place.phone }}" class="btn-round">\n\n          <ion-icon name="call" color="favorite" ></ion-icon>\n\n        </a>\n\n        <div class="btn-round" (click)="addBookMark(place)">\n\n          <ion-icon name="bookmark" color="primary"  [hidden]="!place.bookmarked"></ion-icon>\n\n          <ion-icon name="bookmark" [hidden]="place.bookmarked"></ion-icon>\n\n        </div>\n\n        <div class="btn-round" (click)="goToMap()">\n\n          <ion-icon name="pin"></ion-icon>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n  <!--address-->\n\n  <div padding class="light-bg">\n\n    <div class="strong">Address</div>\n\n    <span>{{ place.address }}</span>\n\n\n\n    <p>\n\n      <a href="{{ place.website }}" ion-text color="primary" >\n\n        Website\n\n        <ion-icon ios="ios-exit" md="md-exit"></ion-icon>\n\n      </a>\n\n    </p>\n\n  </div>\n\n  <div class="block-footer" padding text-right (click)="goToMap()">\n\n    <span ion-text color="primary" >Map & Directions</span>\n\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n\n  </div>\n\n\n\n  <ion-list class="accordion-list">\n\n    <!-- First Level -->\n\n    <ion-list-header *ngFor="let item of objectKeys(categorized);" no-lines no-padding>\n\n      <!-- Toggle Button -->\n\n      <button ion-item (click)="toggleSection(item)" detail-none [ngClass]="{\'section-active\': categorized[item].open, \'section\': !categorized[item].open}">\n\n        <ion-icon item-left name="arrow-forward" *ngIf="!categorized[item].open"></ion-icon>\n\n        <ion-icon item-left name="arrow-down" *ngIf="categorized[item].open"></ion-icon>\n\n        {{ item }}\n\n      </button>\n\n\n\n      <div *ngFor="let product of objectKeys(categorized[item])">\n\n        <div *ngIf="product != \'open\'">\n\n        <ion-list *ngIf="categorized[item].open" no-lines>\n\n          <!-- Second Level -->\n\n          <ion-list-header  no-padding>\n\n            <!-- Toggle Button -->\n\n            <div class="child" ion-item (click)="toggleItem(categorized[item][product])" detail-none>\n\n              <ion-icon item-left name="add"  *ngIf="!categorized[item][product].open"></ion-icon>\n\n              <ion-icon item-left name="close" *ngIf="categorized[item][product].open"></ion-icon>\n\n              {{ categorized[item][product].item[0].name }}\n\n            <p text-wrap text-lowercase >{{ categorized[item][product].item[0].description }}</p>\n\n            </div>\n\n\n\n            <ion-list *ngIf="categorized[item][product].open">\n\n              <!-- Third Level  -->\n\n              <ion-item *ngFor="let final of categorized[item][product].item;" detail-none class="child-item" text-wrap (click)="add_to_cart(final)">\n\n                <h2>{{ final.variation_name }}</h2>\n\n                <!-- <p text-lowercase>{{ final.description }}</p> -->\n\n                <button ion-button outline item-end >Qty {{ final.qty }}</button>                \n\n                <button ion-button outline item-end >Rs.{{ final.variation_price }}</button>\n\n\n\n              </ion-item>\n\n            </ion-list>\n\n    \n\n          </ion-list-header>\n\n        </ion-list>\n\n        </div>        \n\n    </div>\n\n    </ion-list-header>\n\n  </ion-list>\n\n\n\n  <!-- <ion-item-group *ngFor="let category of objectKeys(categorized)">\n\n    <ion-item-divider bgColor class="strong uppercase" style="text-align:center;">{{ category }}</ion-item-divider>\n\n    <ion-item *ngFor="let item of objectKeys(categorized[category])" (click)="add(categorized[category][item].item[0])">\n\n      <span>{{ categorized[category][item].item[0].name }}</span>\n\n       <span class="badge" *ngIf="categorized[category][item].item[0].qty != 0">\n\n        <ion-badge item-end>{{categorized[category][item].item[0].qty}}</ion-badge>\n\n      </span>\n\n      <span class="pull-right">Rs.{{categorized[category][item].item[0].variation_price}}</span>\n\n      <button ion-button color="primary" class="pull-down custom" (click)="customize(item,$event)">Customize</button>\n\n      \n\n    </ion-item>\n\n    \n\n  </ion-item-group> -->\n\n\n\n  <!-- photos -->\n\n  <div padding class="light-bg margin-top-20">\n\n    <div class="strong">Photos</div>\n\n\n\n    <ion-grid class="grid-no-padding">\n\n      <ion-row>\n\n        <ion-col width-25 *ngFor="let photo of limitArray(place.photos, 4)">\n\n          <img class="round" src="{{ photo.thumb }}" alt="">\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <button  ion-button color="favorite"  block>\n\n      Add photo\n\n    </button>\n\n  </div>\n\n  <div class="block-footer" padding text-right (click)="goToPhotos()">\n\n    <span ion-text color="primary" >See All Photos</span>\n\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n\n  </div>\n\n\n\n  <!-- Reviews -->\n\n  <div padding class="light-bg margin-top-20">\n\n    <div class="strong">Reviews</div>\n\n    <div margin-top class="secondary">RECENT REVIEWS</div>\n\n    <ion-list class="list-no-border">\n\n      <ion-item *ngFor="let review of place.reviews" text-wrap>\n\n        <ion-avatar item-left>\n\n          <img src="{{ review.profile_picture }}" alt="">\n\n        </ion-avatar>\n\n        <div class="strong">{{ review.username }}</div>\n\n        <div class="text-sm">\n\n          <span class="strong">RATED</span>\n\n          <span class="rating">{{ review.rating }}</span>\n\n          {{ review.comment }}\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="block-footer" padding text-right (click)="goToReviews()">\n\n    <span ion-text color="primary" >Read All Review({{ place.num_reviews }})</span>\n\n    <ion-icon color="primary"  name="arrow-forward"></ion-icon>\n\n  </div>\n\n\n\n  <!-- Other info -->\n\n  <div padding class="light-bg margin-top-20">\n\n    <span class="strong">Hours</span>\n\n    <ion-badge color="favorite"  [hidden]="!workingHour.available">OPEN NOW</ion-badge>\n\n    <ion-badge color="primary"  [hidden]="workingHour.available">CLOSE NOW</ion-badge>\n\n    <div class="strong">\n\n      {{ workingHour.from }}h to {{ workingHour.to }}h\n\n    </div>\n\n    <span ion-text color="primary" >View All Days</span>\n\n\n\n    <div class="strong" margin-top>Cuisines</div>\n\n    <div>{{ place.cuisines }}</div>\n\n\n\n    <div class="strong" margin-top>Cost</div>\n\n    <div>{{ place.cost | currency:\'USD\':true }}</div>\n\n\n\n    <div>\n\n      <ion-icon name="card"></ion-icon>\n\n      <span *ngIf="place.accepted_card && place.accepted_cash">Cash & card accepted</span>\n\n      <span *ngIf="place.accepted_card && !place.placeaccepted_cash">Card accepted</span>\n\n      <span *ngIf="!place.accepted_card && place.accepted_cash">Cash accepted</span>\n\n    </div>\n\n\n\n    <div class="strong" margin-top>Highlights</div>\n\n    <div *ngFor="let item of place.highlights">\n\n      <ion-icon name="checkmark-circle" color="favorite" ></ion-icon>\n\n      {{ item }}\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-navbar color="primary" (click)="viewcart()">\n\n        <ion-title>View Cart</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button outline item-end style="color:white;">Rs.{{total_price}}</button>            \n\n          </ion-buttons>\n\n      </ion-navbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\tooth\OneDrive\Desktop\foodpool\foodpool\src\pages\place-detail\place-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_place_service__["a" /* PlaceService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], PlaceDetailPage);
    return PlaceDetailPage;
}());

//# sourceMappingURL=place-detail.js.map

/***/ })

});
//# sourceMappingURL=7.js.map