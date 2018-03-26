import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {MainTabsPage} from '../main-tabs/main-tabs';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  constructor(public nav: NavController) {}

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }

  // process sign up
  signUp() {
    // add our sign up code here
    this.nav.push(MainTabsPage);
  }
}
