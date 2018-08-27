import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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
    n1: number;     // varible global
    n2: number;     // 
    resultado: number;
    resultado2: number;
    resultado3: number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.n1 = parseFloat(this.navParams.get("va1"));  //va1 viene de sifunciona.ts
        this.n2 = parseFloat(this.navParams.get("va2"));  //va2 viene de sifunciona.ts
        this.resultado = this.n1 + this.n2;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PaginaAPage');
        this.resultado2 = this.n1 + this.n2;
    }
    suma() {
         this.resultado3 = ( this.n1 + this.n2);
    }
}
