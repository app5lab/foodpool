import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import {PlaceService} from '../../services/place-service';

import { Http, RequestOptions,Headers } from '@angular/http';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HTTP } from '@ionic-native/http'
/**
 * Generated class for the PoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {
  public currentLocation = 'Lahore, Pakistan';

  public slides = [
    {
      src: 'assets/img/bugger.jpg'
    },
    {
      src: 'assets/img/drink.jpg'
    },
    {
      src: 'assets/img/entree.jpg'
    }
  ];
  user: any = {
    "username": "liam_349@berry.io",
    "password": "123456"
  }
  public popularPlaces: any;
  public restaurants: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,  public placeService: PlaceService, public app: App, private http: Http, public alert: AlertController, hg: RequestOptions, hp: HTTP) {
   let headers = new Headers( { 'Content-Type': 'application/json' } )
    let options = new RequestOptions( { withCredentials: true, headers: headers } )

    this.http.post('http://localhost:3000/query', {query: "SELECT * FROM foodpool.pool;" },options).subscribe(res => {
      this.restaurants;
    }, err => console.log(err,'sdfghj'))
  }

  open_r(item){
    this.navCtrl.push('PlaceDetailPage', {detail: item})
  }

  // go to select location page
  selectLocation() {
    this.navCtrl.push('SelectLocationPage');
  }

  // go to places
  viewPlaces() {
    this.app.getRootNav().push('PlacesPage');
  }

  // view a place
  viewPlace(id) {
    this.app.getRootNav().push('PlaceDetailPage', {id: id});
  }

  // go to search page
  goToSearch() {
    this.app.getRootNav().push('SearchPage');
  }

  // go to bookmarks page
  goToBookmarks() {
    this.app.getRootNav().push('BookmarksPage');
  }

  // view map
  goToMap() {
    this.app.getRootNav().push('MapPage');
  }

  // view nearby page
  goToNearBy() {
    this.app.getRootNav().push('NearbyPage');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad PoolPage');
  }

}
