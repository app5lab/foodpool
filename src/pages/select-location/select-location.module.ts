import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLocationPage } from './select-location';

@NgModule({
  declarations: [
    SelectLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLocationPage),
  ],
  exports:[SelectLocationPage]
})
export class SelectLocationPageModule {}
