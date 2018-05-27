import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoolProvider } from '../../providers/pool/pool';

/**
 * Generated class for the AddPoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-pool',
  templateUrl: 'add-pool.html',
})
export class AddPoolPage {
  newPool: any = {
    name: '',
    persons: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public poolProvider: PoolProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPoolPage');
  }

  addPool() {
    console.log(this.newPool);
    this.poolProvider.addPool(this.newPool.name, this.newPool.persons).subscribe( res => {
        
    }, err => {

    });

    this.navCtrl.pop();
    
  }

  cancel() {
    this.navCtrl.pop();
  }

}
