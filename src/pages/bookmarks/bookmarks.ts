import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import { PlaceService } from '../../services/place-service';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html'
})
export class BookmarksPage {
  // list of places
  public places: any;

  constructor(public nav: NavController, public placeService: PlaceService) {
    this.places = placeService.getAll();
  }

  // view a place
  viewPlace(id) {
    this.nav.push('PlaceDetailPage', {id: id});
  }
}
