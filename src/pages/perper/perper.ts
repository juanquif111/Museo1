import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ActuperPage} from '../actuper/actuper';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController} from 'ionic-angular';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';


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
        public toastCtrl: ToastController, public alertCtrl: AlertController, private transfer: FileTransfer,
        public loadingCtrl: LoadingController
    ) {
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
    info;
    ruta= "http://192.168.0.223/flas11/";
    cargarFoto() {
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b>"
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {id: this.persona.id, type: 'Cliente'};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
        this.info = "Procesando";
        fileTransfer.upload(this.imageURI, this.ruta + 'Controller/SubirFoto.php', options)
            .then((data) => {
                this.actualizar(data);
                // this.info = JSON.stringify(data)+" -> Lo que llega";
                loader.dismiss();
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.info = " -> Error de Comunicación";
                // Puede Colocar una alerta de que existe un problema con el servidor
            });
    }
    actualizar(data) {
        if (data.response != "no") {
            this.imageURI = this.ruta + "img/" + JSON.parse(data.response).success;
            this.info = "La imagen fue cargada";
            // Puede Colocar una alerta de que la imagen fue cargada
        } else {
            // Puede Colocar una alerta de que la imagen NO fue cargada
            this.info = "La imagen no fue cargada";
        }
    }


}
