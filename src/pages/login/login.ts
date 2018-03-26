import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {MainTabsPage} from '../main-tabs/main-tabs';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Http, RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { HTTP } from '@ionic-native/http'
import { Headers } from '@angular/http';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
  constructor( public nav: NavController, private facebook: Facebook, private http: Http, public hp : HTTP, public alert: AlertController) {}
  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }

  user: any = {
    "username": "liam_349@berry.io",
    "password": "123456"
  }
  login_via_email() {
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { withCredentials: true , headers: headers } );
    
    this.http.post('http://localhost:3000/users/auth', this.user,options).subscribe(res => {
      console.log(res)
      if(res.json().id != null)
      {
        this.nav.setRoot(MainTabsPage)
      }
      else{
        this.alert.create({title:res.json().error,buttons:[{text:'OK'}]}).present()
      }
    }, err => console.log(err,'sdfghj'))
  } 
  // process login
  fblogin ()
  {

    let permission_set = ['email',
    'public_profile',
    'read_custom_friendlists',
    'user_about_me',
    'user_birthday',
    'user_education_history',
    'user_friends',
    'user_hometown',
    'user_location',
    'user_relationship_details',
    'user_relationships',
    'user_religion_politics',
    'user_work_history',
    'user_actions.books',
    'user_actions.fitness',
    'user_actions.music',
    'user_actions.news',
    'user_actions.video',
    'user_games_activity',
    'user_likes',
    'user_photos',
    'user_posts',
    'user_tagged_places',
    'user_videos',
    'user_website']



    this.facebook.login( permission_set )
      .then( ( response: FacebookLoginResponse ) =>
    {
      this.facebook.api( 'me?fields=id,name,email,address,friends,location,first_name,picture.width(720).height(720).as(picture_large)', [] ).then( profile =>
      {
        this.userData = { locations: profile['location'], email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], address: profile['address'], friends: profile['friends'] }
        console.log(JSON.stringify(this.userData));
        console.log(this.userData);
        
        


      } );
    } );
  }

  // go to sign up page
  signUp() {
    // add our sign up code here
    this.nav.push(SignUpPage);
  }
}
