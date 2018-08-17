import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the HemerotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-hemeroteca',
    templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
    numero1;
    numero2;
    resultado1;
    resultado2;
    resultado3;
    resultado4;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }
    suma() {
        this.resultado1 = "La suma de" + this.numero1 + "+" +
            this.numero2 + "=" + (parseFloat(this.numero1) + parseFloat(this.numero2));
    }
    resta() {
        this.resultado2 = "La resta de" + this.numero1 + "-" +
            this.numero2 + "=" + (parseFloat(this.numero1) - parseFloat(this.numero2));
    }
    multiplica() {
        this.resultado3 = "La multiplicación de" + this.numero1 + "x" +
            this.numero2 + "=" + (parseFloat(this.numero1) * parseFloat(this.numero2));
    }

}
