import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the VerperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verperfil',
  templateUrl: 'verperfil.html',
})
//aqui llegan datos de lisper.ts
export class VerperfilPage { 
persona;                                            //definir arreglo persona
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.persona = this.navParams.get("Data");  /*llenar el arreglo persona con los datos del arreglo Data
                                                   que viene de lisper.ts*/ 
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad VerperfilPage');     // Esto  es opcional solo sirve para mostrar con F12
  }

}
