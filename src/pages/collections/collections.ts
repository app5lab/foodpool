import {Component} from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {CollectionService} from '../../services/collection-service';
import {PlacesPage} from '../places/places';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-collections',
  templateUrl: 'collections.html'
})
export class CollectionsPage {
  public collections: any;

  constructor(public nav: NavController, public collectionService: CollectionService, public app:App) {
    // set sample data
    this.collections = collectionService.getAll();
  }

  // add bookmark
  addBookMark(collection) {
    collection.bookmarked = !collection.bookmarked;
  }

  // view a collection
  goToCollection(id) {
    this.app.getRootNav().push(PlacesPage);
  }
}
