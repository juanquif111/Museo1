import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

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
import {RegperPage} from '../pages/regper/regper'
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
        RegperPage

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
        RegperPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
