import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {CienciasPage} from '../ciencias/ciencias';
import {HumanidadesPage} from '../humanidades/humanidades';
import {SistemasPage} from '../sistemas/sistemas';
import {LisperPage} from '../lisper/lisper';  //importar archivo .ts de pagina*/
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegperPage} from '../regper/regper';
import {BusPerPage} from '../bus-per/bus-per';
import {ActuperPage} from '../actuper/actuper';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }
    irHemeroteca() {
        this.navCtrl.push(HemerotecaPage);

    }
    irCiencias() {
        this.navCtrl.push(CienciasPage);
    }
    irHumanidad() {
        this.navCtrl.push(HumanidadesPage);

    }
    irSistemas() {
        this.navCtrl.push(SistemasPage);
    }
    irLisper() {
        this.navCtrl.push(LisperPage);   //ir a la pagina Lisperpage
    }
    irSifunciona(){
        this.navCtrl.push(SifuncionaPage);
    }
    irRegistroPersona(){
        this.navCtrl.push(RegperPage);
    }
    irBuscarPersona(){
        this.navCtrl.push(BusPerPage);
    }
    irActuPer(){
        this.navCtrl.push(ActuperPage);
    }
}
