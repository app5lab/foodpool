import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import services
import {PlaceService} from '../services/place-service';
import {CollectionService} from '../services/collection-service';
import {ReviewService} from '../services/review-service';
import { Facebook } from '@ionic-native/facebook';
// end import services

// import pages
import {AccountPage} from '../pages/account/account';
import {AddReviewPage} from '../pages/add-review/add-review';
import {BookmarksPage} from '../pages/bookmarks/bookmarks';
import {CollectionsPage} from '../pages/collections/collections';
import {FeedPage} from '../pages/feed/feed';
import {FiltersPage} from '../pages/filters/filters';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {MainTabsPage} from '../pages/main-tabs/main-tabs';
import {MapPage} from '../pages/map/map';
import {MenuPage} from '../pages/menu/menu';
import {NearbyPage} from '../pages/nearby/nearby';
import {PhotosPage} from '../pages/photos/photos';
import {PlaceDetailPage} from '../pages/place-detail/place-detail';
import {PlacesPage} from '../pages/places/places';
import {ReviewsPage} from '../pages/reviews/reviews';
import {SearchPage} from '../pages/search/search';
import {SelectLocationPage} from '../pages/select-location/select-location';
import {SignUpPage} from '../pages/sign-up/sign-up';
import {UserPage} from '../pages/user/user';
import { HttpModule } from '@angular/http';
import {HTTP} from '@ionic-native/http';
import { CartviewPage } from '../pages/cartview/cartview';
import { CheckoutPage } from '../pages/checkout/checkout';
import { PoolPage } from '../pages/pool/pool';
// end import pages


@NgModule({
  declarations: [
    MyApp,
   
    // HTTP
  ],
  imports: [
    HttpModule,
    // HTTP,
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        platforms: {
          android: {
            tabsPlacement: 'top',
            tabsLayout: 'title-hide'
          },
          windows: {
            tabsLayout: 'title-hide'
          }
        }
      }
    )
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    // HTTP,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlaceService,
    CollectionService,
    ReviewService,
    Facebook,
    HTTP,
    /* import services */
  ]
})
export class AppModule {
}
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
