import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  public place: any;
  constructor(public nav: NavController, public placeService: PlaceService) {
    // get first place for example
    this.place = placeService.getItem(1);
  }
  add(item){
    console.log(item);
    item.qty = item.qty + 1;
  }
}
