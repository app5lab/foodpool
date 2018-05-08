import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionsPage } from './collections';

@NgModule({
  declarations: [
    CollectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionsPage),
  ],
  exports:[CollectionsPage]
})
export class CollectionsPageModule {}
