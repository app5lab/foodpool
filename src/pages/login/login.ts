import {Component} from '@angular/core';
import {NavController, IonicPage, ToastController} from 'ionic-angular';
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
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  userData: any;
  constructor( public nav: NavController, public toast: ToastController, private facebook: Facebook, private http: Http, public hp : HTTP, public alert: AlertController) {}
  // go to forgot password page
  forgotPwd() {
    this.nav.push('ForgotPasswordPage');
  }

  user: any = {
    "username": "",
    "password": ""
  }
  login_via_email() {
    let headers = new Headers( { 'Content-Type': 'application/json' } );
    let options = new RequestOptions( { withCredentials: true , headers: headers } );
    this.user = {
      username: this.user.email,
      password: this.user.password
    }

    this.http.post('http://localhost:3000/users/auth', this.user,options).subscribe(res => {
      localStorage.removeItem('user');

      if(res.json().id != null)
      {
        localStorage.setItem('user', JSON.stringify(res.json()))
        
        this.nav.setRoot('MainTabsPage')
      }
      else{
        let errConfig = {  
        message: 'Error loging in',
        duration: 3000,
        position: 'top'
      };
        let t = this.toast.create(errConfig);
        t.present();
      }
    }, err => {
      let errConfig = {  
        message: 'Error loging in',
        duration: 3000,
        position: 'top'
      };
        let t = this.toast.create(errConfig);
        t.present();

    })
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
    this.nav.push('SignUpPage');
  }
}
