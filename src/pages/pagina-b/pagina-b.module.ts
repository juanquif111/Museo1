import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaBPage } from './pagina-b';

@NgModule({
  declarations: [
    PaginaBPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaBPage),
  ],
})
export class PaginaBPageModule {}
