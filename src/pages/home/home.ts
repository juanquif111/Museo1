import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';
import {CienciasPage} from '../ciencias/ciencias';
import {HumanidadesPage} from '../humanidades/humanidades';
import {SistemasPage} from '../sistemas/sistemas';

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



}
