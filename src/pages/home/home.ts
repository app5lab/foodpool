import {Component} from '@angular/core';
import {App, NavController, IonicPage} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import { Http, RequestOptions,Headers } from '@angular/http';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HTTP } from '@ionic-native/http'


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // current location
  public currentLocation = 'Lahore, Pakistan';


  // list slides for slider
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

  // list popular places
  public popularPlaces: any;
  public restaurants: any;


  constructor( public nav: NavController, public placeService: PlaceService, public app: App, private http: Http, public alert: AlertController, hg: RequestOptions, hp: HTTP) {
    //this.popularPlaces = placeService.getAll();

    let headers = new Headers( { 'Content-Type': 'application/json' } )
    let options = new RequestOptions( { withCredentials: true, headers: headers } )
 
    
    
    http.get( 'http://localhost:3000/feed',options).subscribe( res =>
    {
      console.log(res);
      
      console.log( res.json() )
      this.restaurants = res.json()      
      
    }, err => console.log( err ) )
  }

  open_r(item){
    this.nav.push('PlaceDetailPage', {detail: item})
  }

  // go to select location page
  selectLocation() {
    this.nav.push('SelectLocationPage');
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
}
