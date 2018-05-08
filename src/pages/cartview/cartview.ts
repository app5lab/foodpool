import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';


/**
 * Generated class for the CartviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartview',
  templateUrl: 'cartview.html',
})
export class CartviewPage  {
 items: any[]=[];
 tot: any=0;
  nav: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartviewPage');
 this.items=JSON.parse(localStorage.getItem('cart'));
 this.tot=localStorage.getItem('total_price');
    
  }
  checkoutt(){
    this.navCtrl.push('CheckoutPage');
  }



}
