import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ReviewService} from '../../services/review-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})
export class ReviewsPage {
  public reviews: any;

  constructor(public nav: NavController, public reviewService: ReviewService) {
    // feed
    this.reviews = reviewService.getAll();
  }
}
