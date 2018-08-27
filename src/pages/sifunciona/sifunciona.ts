import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {PaginaAPage} from '../pagina-a/pagina-a';
import {PaginaBPage} from '../pagina-b/pagina-b';
/**
 * Generated class for the SifuncionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sifunciona',
    templateUrl: 'sifunciona.html',
})
export class SifuncionaPage {
    numero1: number;       // variable global
    numero2: number;       // variable global
    //caja = {va1: this.numero1, va2: this.numero2};                                   //prueba

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }
    irPaginaA() {
        //console.table({va1: this.numero1, va2: this.numero2});                         //prueba
        this.navCtrl.push(PaginaAPage, {va1: this.numero1, va2: this.numero2});
    }
    irPaginaB() {
        //this.navCtrl.push(PaginaBPage, {bolsa: this.caja});                              //prueba
        //this.navCtrl.push(PaginaBPage, {bolsa: {va1: this.numero1, va2: this.numero2}}); //prueba
        this.navCtrl.push(PaginaBPage, {todo: {va1: this.numero1, va2: this.numero2}});
    }


}
