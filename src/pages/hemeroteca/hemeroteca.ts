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
    /* Variables globales*/
    numero1;
    numero2;
    numero3;
    resultado;
    edificio;
    estado;
    ctrl: boolean = true;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }
    suma() {
        this.resultado = "La suma de " + this.numero1 + "+" +
            this.numero2 + "=" + (parseFloat(this.numero1) + parseFloat(this.numero2));
    }
    resta() {
        this.resultado = "La resta de " + this.numero1 + "-" +
            this.numero2 + "=" + (parseFloat(this.numero1) - parseFloat(this.numero2));
    }
    multiplica() {
        this.resultado = "La multiplicación de " + this.numero1 + "x" +
            this.numero2 + "=" + (parseFloat(this.numero1) * parseFloat(this.numero2));
    }
    divida() {
        this.resultado = " La division de " + this.numero1 + "/" +
            this.numero2 + "=" + (parseFloat(this.numero1) / parseFloat(this.numero2));
    }
    cambio(valor) {
        /**   this.estado=false; */
        this.ctrl = valor; /**Variable de trazabilidad*/
        this.tabla();
    }
    /**   Para nostrar la tabla de multiplicar
      tabla() {
        this.edificio = Array();
        for (let i = 1; i <= this.numero2; i++) {
            this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
        }
    }
    */

    tabla() {
        this.estado = true;
        this.edificio = Array();
        for (let i = 1; i <= this.numero2; i++) {
            if ((((this.numero1 * i) % this.numero3) == 0) == this.ctrl) {
                this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
            }
        }
    }


}
