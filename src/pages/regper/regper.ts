import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular'; //importar libreria que permite la navegacion en la app
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'//importar libreria que permite validar los formularios

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private cosValFor: FormBuilder) { //crear instancia  privete cosValFor Construir Validar Formulario que es una instancia de FormBuilder
        this.iniciarFormulario();
    }
    RegPersona: FormGroup;     // crear un objeto RegPersona de tipo FormGroup

    iniciarFormulario() {
        this.RegPersona = this.cosValFor.group({  
            tipo: ['', [Validators.required]],                                                          //array de validadores
            fecha:['', [Validators.required]],                                                          //array de validadores
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
        console.table(this.RegPersona.value);
    }

}
