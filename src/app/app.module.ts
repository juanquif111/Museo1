import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {Camera, CameraOptions} from '@ionic-native/camera';  //aparece error cuando no se ha instalado el paquete 
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {HemerotecaPage} from '../pages/hemeroteca/hemeroteca';
import {CienciasPage} from '../pages/ciencias/ciencias';
import {HumanidadesPage} from '../pages/humanidades/humanidades';
import {SistemasPage} from '../pages/sistemas/sistemas';
import {LisperPage} from '../pages/lisper/lisper';
import {HttpClientModule} from '@angular/common/http'; // 2. Se debe colocar esta linea
import {ConectarProvider} from '../providers/conectar/conectar';  //  1. Se crea automaticamente al crear el providers
import {VerperfilPage} from '../pages/verperfil/verperfil';
import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {PaginaAPage} from '../pages/pagina-a/pagina-a';
import {PaginaBPage} from '../pages/pagina-b/pagina-b';
import {RegperPage} from '../pages/regper/regper';
import {BusPerPage} from '../pages/bus-per/bus-per';
import {PerperPage} from '../pages/perper/perper';
import {ActuperPage} from '../pages/actuper/actuper';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        LisperPage,
        VerperfilPage,
        SifuncionaPage,
        PaginaAPage,
        PaginaBPage,
        RegperPage,
        BusPerPage,
        PerperPage,
        ActuperPage


    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule   //3. Se debe importar .  ir a conectar.ts
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        LisperPage,
        VerperfilPage,
        SifuncionaPage,
        PaginaAPage,
        PaginaBPage,
        RegperPage,
        BusPerPage,
        PerperPage,
        ActuperPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider,
        Camera,
        FileTransfer,
        //FileUploadOptions,
        FileTransferObject,
        File
    ]
})
export class AppModule {}
