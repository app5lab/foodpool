import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartviewPage } from './cartview';

@NgModule({
  declarations: [
    CartviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CartviewPage),
  ],
})
export class CartviewPageModule {}
