import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoolPage } from './pool';

@NgModule({
  declarations: [
    PoolPage,
  ],
  imports: [
    IonicPageModule.forChild(PoolPage),
  ],
  exports:[PoolPage]
})
export class PoolPageModule {}
