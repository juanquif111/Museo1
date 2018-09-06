import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'//importar libreria que permite validar los formularios
import {LoadingController} from 'ionic-angular';  // libreria para mostrar ventana de cargando espere un momento
import {ConectarProvider} from '../../providers/conectar/conectar';//importar provider conectar.ts que permite conectar con el servidor
import {AlertController} from 'ionic-angular'; //importa libreria de angular para mostrar alertas

/**
 * Generated class for the ActuperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-actuper',
    templateUrl: 'actuper.html',
})
export class ActuperPage {
    persona;
    miventana: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private cosValFor: FormBuilder, private controlCarga: LoadingController, private conectar: ConectarProvider, private alerta: AlertController) { //crear instancias de clases/crear instancia  privete cosValFor Construir Validar Formulario que es una instancia de FormBuilder
        this.persona = this.navParams.get("per");
        this.iniciarFormulario();
    }
    ActPersona: FormGroup;     // crear un objeto ActPersona de tipo FormGroup

    iniciarFormulario() {
        /**    this.ActPersona = this.cosValFor.group({
               tipo: ['', [Validators.required]],                                                          //array de validadores
               fecha: ['', [Validators.required]],                                                          //array de validadores
               numero: ['', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],                   //Que variable quiere, como quiere que inicie, que validaciones se quieren ingresando una expresion irregular con Validators.pattern
               nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],  //array de validadores
               apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],//array de validadores
               telefono: ['', [Validators.required, Validators.pattern(/^[+0-9]{5,20}$/)]],                //array de validadores
               correo: ['', [Validators.required, Validators.email, Validators.minLength(10)]]             //array de validadores
           }
           ); */
        this.ActPersona = this.cosValFor.group({
            tipo: [this.persona.tipoID, [Validators.required]],                                                          //array de validadores
            fecha: [this.persona.fecnac, [Validators.required]],                                                          //array de validadores
            numero: [this.persona.CC, [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],                   //Que variable quiere, como quiere que inicie, que validaciones se quieren ingresando una expresion irregular con Validators.pattern
            nombre: [this.persona.nombre, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],  //array de validadores
            apellido: [this.persona.apellido, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],//array de validadores
            telefono: [this.persona.telefono, [Validators.required, Validators.pattern(/^[+0-9]{5,20}$/)]],                //array de validadores
            correo: [this.persona.email, [Validators.required, Validators.email, Validators.minLength(10)]]             //array de validadores
        }
        );

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ActuperPage');
    }


    actPer() {
        //crear ventana
        this.miventana = this.controlCarga.create({
            content: "Por favor espera se esta procesanso su solicitud...",
        });
        //mostrar ventana con mensaje
        this.miventana.present();

        //mostrar en f12 del navegador
        console.table(this.ActPersona.value);
        //
        //consumir el provider
        let perLocal = this.ActPersona.value;
        perLocal.ID = this.persona.ID;
        let estado = this.conectar.servidorActualizar(perLocal);  // Envia los valores que se capturan en el formulario ActPersona que se asiganaron en el parametro perLocal al provider conectar.ts
        estado.subscribe(data => { //lo que me va a responder mi servidor  ,
            //console.log(data);
            let res: any = data;
            this.miventana.dismiss();
            if (res.success == "ok") {    //si es ok en registro php se muestra esto.
                this.mostrarAlerta("Notificacion", "El registro fue modificado con exito");
                this.iniciarFormulario();
            } else {                      //si no se muestra esto
                this.mostrarAlerta("Error #7", "No se ha podido modificar");
            }
        },
            err => {
                this.miventana.dismiss();
                console.log(err);
                this.mostrarAlerta("Error #8", "No existe conexion con el servidor.Verifique la conexión");
            });
    }

    mostrarAlerta(estadoTitulo, estadoMensaje) {
        let alert = this.alerta.create({
            title: estadoTitulo,
            subTitle: estadoMensaje,
            buttons: ['cerrar']
        });
        alert.present();
    }
}

