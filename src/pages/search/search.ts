import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public searches = [
    {
      id: 1,
      name: "New York City, NY, USA"
    }
  ]

  constructor(public nav:NavController) {}
}
