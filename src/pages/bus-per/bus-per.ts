import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar'
import {PerperPage} from'../perper/perper';


/**
 * Generated class for the BusPerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-bus-per',
    templateUrl: 'bus-per.html',
})
export class BusPerPage {
    item: any = 1;
    criterio = "";
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private conecta: ConectarProvider) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusPerPage');
    }
    presentToast(mensaje) {
        const toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'ok'
        });
        toast.present();
    }
    buscar() {
        if (this.item != 1 && this.criterio == "") {
            this.presentToast("Debe ingresar un dato en filtro");
        } else {
            let busqueda = {item: this.item, criterio: this.criterio}; // creacion de JSON : {item: this.item, criterio: this.criterio}
            console.table(busqueda);
            let estado = this.conecta.servidorBuscar(busqueda);
            estado.subscribe(data => {
                this.cargarVista(data);
                //let datos: any = data;
                //this.edificio = datos.result;
                //console.log(data);
            }, err => {
                console.log(err);
            });
        }
    }

    verifique() {
        this.criterio = '';
        this.presentToast("cambio el criterio de busqueda.!!");
    }
    cargarVista(data) {
        let datos: any = data;
        this.edificio = datos.result;

    }
    verPerfil(persona){
        this.navCtrl.push(PerperPage,{per:persona});  //envia a la pagina PerperPage perper.ts el parametro per.
    }
    
    
}
