import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PlaceService} from '../../services/place-service';
import {MenuPage} from '../menu/menu';
import {MapPage} from '../map/map';
import {PhotosPage} from '../photos/photos';
import {ReviewsPage} from '../reviews/reviews';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Http, RequestOptions, Headers } from '@angular/http';
import { CartviewPage } from '../cartview/cartview';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-place-detail',
  templateUrl: 'place-detail.html'
})
export class PlaceDetailPage {
  public place:any;
  public categorized: any []= []
  public workingHour:any;
  objectKeys = Object.keys;
  open:any = -1
  constructor( public nav: NavController, public placeService: PlaceService, params: NavParams, private http: Http) {
    // get first place for example
    this.place = placeService.getItem(1);
    var detail = params.get('detail');
    let headers = new Headers( { 'Content-Type': 'application/json' } )
    let options = new RequestOptions( { withCredentials: true, headers: headers } )

    http.post( 'http://localhost:3000/products', { "restaurant_id": detail.id }, options ).subscribe( res =>
    {
      this.categorized = res.json();
      console.log( this.categorized )
      
    }, err => console.log( err ), () =>{
      var items = []
      items = JSON.parse(localStorage.getItem('cart'))
      this.objectKeys(this.categorized).forEach(categories => {
        var keys = this.objectKeys(this.categorized[categories]);
        keys.forEach(key => {
          var temp=items.find(x => {return x.id == key})
          if(temp != null)
             this.categorized[categories][key].item.forEach(food => {
               if(food.variation_name==temp.variation_name)
                  food.qty=temp.qty

             });
        })
      });
    })
    console.log(detail);
    console.log(this.place);
    

    this.place.name = detail.title;
    this.place.menu = this.categorized;
    // get working hours
    this.workingHour = this.getWorkingHours(this.place.working_hours);
  }
  add_to_cart(item){
  
    item.qty = item.qty +1
    var items = []
    if(localStorage.getItem('cart') == null){
      items.push(item)
      localStorage.setItem('cart',JSON.stringify(items));
    }
    else{
      items = JSON.parse(localStorage.getItem('cart'))
      console.log(items.find(x => {return x.id === item.id}));
      var i =items.find(x => {return x.id === item.id})
      if(i == null)
        items.push(item);
      else
        items.find(x => {return x.id === item.id}).qty = items.find(x => {return x.id === item.id}).qty +1; 
      localStorage.setItem('cart',JSON.stringify(items));      
    }
  }
  toggleSection(i) {
    this.categorized[i].open = !this.categorized[i].open;
    if(this.categorized[i].open == false){
      for (const key in this.categorized[i]) {
          this.categorized[i][key];
        if ( key != 'open')
          this.categorized[i][key].open = false;
      }
    }
  }
 
  toggleItem(i) {
    i.open = !i.open;
  }

  add ( item )
  {
    console.log( item );
    item.qty = item.qty + 1;
  }

  customize(item,e : Event){
    console.log('custom');
    e.preventDefault();
    e.stopPropagation()
  }

  // get working hours in today
  getWorkingHours(hours) {
    var d = new Date();
    var currentDay = {
      from: null,
      to: null
    };
    var availableNow = false;

    switch (d.getDay()) {
      case 0:
        currentDay = hours.sunday;
        break;
      case 1:
        currentDay = hours.monday;
        break;
      case 2:
        currentDay = hours.tuesday;
        break;
      case 3:
        currentDay = hours.wednesday;
        break;
      case 4:
        currentDay = hours.thursday;
        break;
      case 5:
        currentDay = hours.friday;
        break;
      case 6:
        currentDay = hours.saturday;
        break;
    }

    availableNow = ((d.getHours() >= currentDay.from) && (d.getHours() <= currentDay.to));

    return {
      available: availableNow,
      from: currentDay.from,
      to: currentDay.to
    }
  }

  // get limit elements for arr
  limitArray(arr, limit) {
    var tmpArr = [];

    for (var i = 0; i < limit; i++) {
      tmpArr.push(arr[i]);
    }

    return tmpArr;
  }

  // add bookmark
  addBookMark(place) {
    place.bookmarked = !place.bookmarked;
  }

  // go to map
  goToMap() {
    this.nav.push(MapPage);
  }

  // to to menu page
  goToMenu() {
    this.nav.push(MenuPage);
  }

  // go to photos
  goToPhotos() {
    this.nav.push(PhotosPage);
  }

  // go to reviews
  goToReviews() {
    this.nav.push(ReviewsPage);
  }

  viewcart(){
    this.nav.push(CartviewPage);
  }
}
