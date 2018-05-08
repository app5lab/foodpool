import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-select-location',
  templateUrl: 'select-location.html'
})
export class SelectLocationPage {
  public searches = [
    {
      id: 1,
      name: "New York City, NY, USA"
    }
  ]

  constructor(public nav:NavController) {}
}
