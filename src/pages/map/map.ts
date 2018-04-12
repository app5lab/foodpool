import {Component} from '@angular/core';
import {NavController, Platform, NavParams} from 'ionic-angular';
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
callback: any;
  constructor(public nav: NavController, public platform: Platform, public navParams: NavParams) {
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
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true

    });

   

  }

  
ionViewWillEnter() {
  this.callback = this.navParams.get("callback")
}
  get(){
    console.log(
     this.map.getCenter().lat(),
     this.map.getCenter().lng())
     var geocoder = new google.maps.Geocoder;
     var infowindow = new google.maps.InfoWindow;
     this.geocodeLatLng(geocoder, this.map);

  }
  geocodeLatLng(geocoder, map) {
   var that=this;

    var latlng = {lat: parseFloat( this.map.getCenter().lat()), lng: parseFloat( this.map.getCenter().lng())};
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status === 'OK') {
        if (results[0]) {
          // map.setZoom(11);
          // var marker = new google.maps.Marker({
            // position: latlng,
            // map: map
          // });
         
          that.callback(results[0].formatted_address).then(()=>{
            that.nav.pop();
        });
          // infowindow.setContent(results[0].formatted_address);
          // infowindow.open(map, marker);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });}

}
