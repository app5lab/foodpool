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

import { HttpModule } from '@angular/http';
import {HTTP} from '@ionic-native/http';
import { PoolProvider } from '../providers/pool/pool';
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
    PoolProvider,
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
