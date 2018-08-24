import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaAPage } from './pagina-a';

@NgModule({
  declarations: [
    PaginaAPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaAPage),
  ],
})
export class PaginaAPageModule {}
