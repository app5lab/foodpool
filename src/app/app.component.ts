import {Component, ViewChild} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

// import pages
import {LoginPage} from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MainTabsPage } from '../pages/main-tabs/main-tabs';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { PlaceDetailPage } from '../pages/place-detail/place-detail';
import { MapPage } from '../pages/map/map';

@Component({
  template: '<ion-nav #myNav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  @ViewChild( 'myNav' ) nav: NavController;

  public rootPage:any;
  ngOnInit() {
    console.log( localStorage )
    if ( !( localStorage.getItem( 'is_logged_in' ) == "true" ) )
    {
      this.nav.setRoot( LoginPage )
    }

  }
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    
    //  this.rootPage = MainTabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide()
    });
  }
}
