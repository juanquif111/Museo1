import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {VerperfilPage} from '../verperfil/verperfil';

/**
 * Generated class for the LisperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lisper',
    templateUrl: 'lisper.html',
})
export class LisperPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LisperPage');
    }
    numero;
    edificio;
   
    consultar() {
        let estado = this.acceso.traerListPer(this.numero);
        estado.subscribe(data => {
            // let respuesta:any = data;  // any comportese como un objeto con atributos
            //this.edificio = respuesta.results;
            //**console.log(data);
            this.ejecutar(data);   // cree un metodo 
        }, err => {
            console.log(err);
        });  //consuma este servicio

    }
    ejecutar(LaRespuestaDelServidor) {   // 
        this.edificio = LaRespuestaDelServidor.results;   //results es una variable por defecto de la pagina de json
    }
    IrverPerfil(persona) {
        this.navCtrl.push(VerperfilPage, {Data: persona});    // Encapsule a persona en Data y lo envia a verperfil.ts
    }

}
