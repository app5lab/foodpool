import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  test :any="";
  [x: string]: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  myCallbackFunction  (_params)  {
    return new Promise((resolve, reject) => {
        this.test = _params;
        console.log(this.test);
        
        resolve();
    });
   }
  
  map(){
    this.navCtrl.push('MapPage',{callback:this.myCallbackFunction.bind(this)})
   
  }


}
