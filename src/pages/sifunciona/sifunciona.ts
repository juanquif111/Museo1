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
    num1;
    num2;
    

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }
    irPaginaA() {
        this.navCtrl.push(PaginaAPage, {n1: this.num1, n2: this.num2});
    }
    irPaginaB() {
        this.navCtrl.push(PaginaBPage);
    }


}
