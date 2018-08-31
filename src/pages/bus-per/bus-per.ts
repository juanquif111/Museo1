import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';


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
    item:any=1;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusPerPage');
    }


}
