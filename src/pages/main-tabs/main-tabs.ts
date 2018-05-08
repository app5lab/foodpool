import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {
  public tabHome = 'HomePage';
  public tabCollections = 'CollectionsPage';
  public tabFeed = 'FeedPage';
  public tabAccount = 'AccountPage';
public tabPools='PoolPage';
  constructor(public nav: NavController) {}
}
