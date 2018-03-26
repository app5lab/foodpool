import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import {PlaceDetailPage} from '../place-detail/place-detail';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
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
    this.nav.push(PlaceDetailPage, {id: id});
  }
}
