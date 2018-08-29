import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the PaginaBPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-pagina-b',
    templateUrl: 'pagina-b.html',
})
export class PaginaBPage {
    //bolsa: any      //prueba;
    //todo: object;
    todo: any;
    resultado;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //this.bolsa = this.navParams.get("caja");                                    //prueba
        this.todo = this.navParams.get("todo");

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PaginaBPage');
        this.resultado = parseFloat(this.todo.va1) + parseFloat(this.todo.va2);
        //this.resultado = parseFloat(this.bolsa.va1) + parseFloat(this.bolsa.va2);   //prueba
    }

}
