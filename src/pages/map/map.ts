import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
declare var google: any;
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  public map: any;

  constructor(public nav: NavController, public platform: Platform) {
  }

  ionViewDidLoad() {
    // init map
    this.initializeMap();
  }

  initializeMap() {
    var minZoomLevel = 19;
    var myLatLng = {lat:31.420671, lng:74.182747}
    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng( myLatLng.lat,myLatLng.lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

   
  }

  get(){
    console.log(
     this.map.getCenter().lat(),
     this.map.getCenter().lng())

  }
  
}
