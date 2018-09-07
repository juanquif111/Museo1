import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActuperPage} from '../actuper/actuper';
import {ConectarProvider} from '../../providers/conectar/conectar';


@IonicPage()
@Component({
    selector: 'page-perper',
    templateUrl: 'perper.html',
})
export class PerperPage {
    persona;
    calidad;
    imageURI;

    constructor(public navCtrl: NavController, public navParams: NavParams, private camara: Camera, private conecta: ConectarProvider,
        public toastCtrl: ToastController, public alertCtrl: AlertController) {
        this.persona = this.navParams.get("per");  // coje el parametro per enviado desde bus-per.ts y lo guarda en variable persona.
        this.calidad = 50;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PerperPage');
    }


    cam() {
        let options: CameraOptions = {
            destinationType: this.camara.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: this.calidad
        }
        this.camara.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }
    SD() {
        let options: CameraOptions = {
            destinationType: 1,
            sourceType: 0,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            mediaType: 0,
            correctOrientation: true,
            saveToPhotoAlbum: true,
            encodingType: 0
        }
        this.camara.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }
    irActuPer() {
        this.navCtrl.push(ActuperPage, {per: this.persona});
    }
    showConfirm() {
        const confirm = this.alertCtrl.create({
            title: 'confirmación su solicitud?',
            message: 'Esta seguro de eliminar al usuario ' + this.persona.nombre + ' ?',
            buttons: [
                {
                    text: 'Confirmar',
                    handler: () => {
                        let estado = this.conecta.servidorEliminar(this.persona);
                        estado.subscribe(data => {
                            let res: any = data;
                            if (res.success == "ok") {
                                this.presentToast("El usuario " + this.persona.nombre + " " + this.persona.apellido + " ha sido eliminado satisfactoriamente");
                                this.navCtrl.popToRoot();
                            } else {
                                this.presentToast('NO se puede eliminar el usuario');
                            }
                        }, err => {
                            this.presentToast('Hay un problema con el servidor');
                        });
                    }
                },
                {
                    text: 'Cancelar',
                    handler: () => {

                    }
                }
            ]
        });
        confirm.present();
    }

    presentToast(men) {
        const toast = this.toastCtrl.create({
            message: men,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }


}
