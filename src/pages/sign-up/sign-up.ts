import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  constructor(public nav: NavController) {}

  // go to forgot password page
  forgotPwd() {
    this.nav.push('ForgotPasswordPage');
  }

  // process sign up
  signUp() {
    // add our sign up code here
    this.nav.push('MainTabsPage');
  }
}
