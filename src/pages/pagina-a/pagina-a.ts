import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaginaAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-a',
  templateUrl: 'pagina-a.html',
})
export class PaginaAPage {
n1;
n2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.n1= this.navParams.get("num1");
      this.n2= this.navParams.get("num2");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaAPage');
  }
/**  suma(){
          this.resultado = "La suma de " + this.num1 + "+" +
            this.num2 + "=" + (parseFloat(this.num1) + parseFloat(this.num2));
  } */
}
