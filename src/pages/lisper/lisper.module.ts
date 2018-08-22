import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LisperPage } from './lisper';

@NgModule({
  declarations: [
    LisperPage,
  ],
  imports: [
    IonicPageModule.forChild(LisperPage),
  ],
})
export class LisperPageModule {}
