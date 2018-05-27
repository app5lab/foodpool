import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import {PlaceService} from '../../services/place-service';

import { AlertController } from 'ionic-angular/components/alert/alert-controller';


import { PoolProvider } from '../../providers/pool/pool';

/**
 * Generated class for the PoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pool',
  templateUrl: 'pool.html',
})
export class PoolPage {
  public my_pools: any;
  public available_pools: any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,  
              public placeService: PlaceService, 
              public app: App, 
              public alert: AlertController, 
              public poolProvider: PoolProvider,
              public modal: ModalController
            ) 
    {
      this.updateAvaialblePools();    
      this.updateMyPools();
    }

  updateAvaialblePools() {
    this.poolProvider.getAvailablePools().subscribe(
      res => {
        this.available_pools = res['_body'];
        this.available_pools = JSON.parse(this.available_pools)['result']
      },
      err => {
        console.log(err,'sdfghj')
      }
    )
  }

  updateMyPools() {
    this.poolProvider.getMyPools().subscribe(
      res => {
        this.my_pools = res['_body'];
        this.my_pools = JSON.parse(this.my_pools)['result']
      },
      err => {
        console.log(err,'sdfghj')
      }
    )
  }


  createPool() {
    let model = this.modal.create('AddPoolPage')
    model.onDidDismiss(data => {
      this.updateMyPools();  
    });
    model.present()
  }
subpool(){
  this.navCtrl.push('SubpoolPage')
}

}
