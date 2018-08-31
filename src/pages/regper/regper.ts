import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular'; //importar libreria que permite la navegacion en la app
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'//importar libreria que permite validar los formularios
import {LoadingController} from 'ionic-angular';  // libreria para mostrar ventana de cargando espere un momento
import {ConectarProvider} from '../../providers/conectar/conectar';//importar provider conectar.ts que permite conectar con el servidor
import {AlertController} from 'ionic-angular'; //importa libreria de angular para mostrar alertas

/**
 * Generated class for the RegperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-regper',
    templateUrl: 'regper.html',
})
export class RegperPage {
    miventana: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private cosValFor: FormBuilder, private controlCarga: LoadingController, private conectar: ConectarProvider, private alerta: AlertController) { //crear instancias de clases/crear instancia  privete cosValFor Construir Validar Formulario que es una instancia de FormBuilder
        this.iniciarFormulario();
    }
    RegPersona: FormGroup;     // crear un objeto RegPersona de tipo FormGroup

    iniciarFormulario() {
        this.RegPersona = this.cosValFor.group({
            tipo: ['', [Validators.required]],                                                          //array de validadores
            fecha: ['', [Validators.required]],                                                          //array de validadores
            numero: ['', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],                   //Que variable quiere, como quiere que inicie, que validaciones se quieren ingresando una expresion irregular con Validators.pattern
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],  //array de validadores
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚ ÜñÑ]{2,30}$/)]],//array de validadores
            telefono: ['', [Validators.required, Validators.pattern(/^[+0-9]{5,20}$/)]],                //array de validadores
            correo: ['', [Validators.required, Validators.email, Validators.minLength(10)]]             //array de validadores
        }
        );

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegperPage');
    }
    regPer() {
        //crear ventana
        this.miventana = this.controlCarga.create({
            content: "Por favor espera se esta procesanso su solicitud...",
        });
        //mostrar ventana con mensaje
        this.miventana.present();

        //mostrar en linea de comandos
        //console.table(this.RegPersona.value);
        //
        //consumir el provider
        let estado = this.conectar.enviarAlServidor(this.RegPersona.value);   // llena la variable estado con el resultado de llamar al metodo enviarAlServidor(persona) de la clase ConectarProvider en el archivo conectar.ts
        //
        estado.subscribe(data => { //lo que me va a responder mi servidor  ,
            //console.log(data);
            let res: any = data;
            this.miventana.dismiss();
            if (res.success == "ok") {    //si es ok en registro php se muestra esto.
                this.mostrarAlerta("Positivo", "El usuario fue registrado perfectamente");
            } else {                      //si no se muestra esto
                this.mostrarAlerta("Error #7", "En el sistema ya esta registrada esta cedula");
                this.iniciarFormulario();
            }
        },
            err => {
                this.miventana.dismiss();
                this.mostrarAlerta("Error #6", "No existe conexion con el servidor.Verifique la conexión");
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


