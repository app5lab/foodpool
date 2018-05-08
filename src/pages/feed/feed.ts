import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';
import {ReviewService} from '../../services/review-service';

// import data from '../../data.json'
// import data from '../../data.json';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  public reviews: any;
  public posts: any;

  constructor(public nav: NavController, public reviewService: ReviewService) {
    // feed
    this.reviews = reviewService.getAll();
    // console.log(data) 
    this.posts = [];

  }

  // view a place
  viewPlace(id) {
    this.nav.push('PlaceDetailPage', {id: id});
  }
}
