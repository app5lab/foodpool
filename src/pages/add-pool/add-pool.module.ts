import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPoolPage } from './add-pool';

@NgModule({
  declarations: [
    AddPoolPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPoolPage),
  ],
  exports: [
    AddPoolPage
  ]
})
export class AddPoolPageModule {}
