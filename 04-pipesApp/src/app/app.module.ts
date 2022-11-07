import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';


//Módulos personalizados
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localCol from '@angular/common/locales/es-CO';
import localDe from '@angular/common/locales/de-LI';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localCol );
registerLocaleData( localDe );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue:'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
