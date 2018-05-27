import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {
  public user: any;
  
  constructor(public nav: NavController) {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }

  logout() {
    localStorage.removeItem('user');

    this.nav.setRoot('LoginPage');
  }
}
