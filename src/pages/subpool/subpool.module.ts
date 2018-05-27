import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubpoolPage } from './subpool';

@NgModule({
  declarations: [
    SubpoolPage,
  ],
  imports: [
    IonicPageModule.forChild(SubpoolPage),
  ],
  exports:[SubpoolPage]
  
})
export class SubpoolPageModule {}
