import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusPerPage } from './bus-per';

@NgModule({
  declarations: [
    BusPerPage,
  ],
  imports: [
    IonicPageModule.forChild(BusPerPage),
  ],
})
export class BusPerPageModule {}
