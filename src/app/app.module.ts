import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaEnlaceAcortadoComponent } from './pagina-enlace-acortado/pagina-enlace-acortado.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { IconoComponent } from './icono/icono.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UrlsComponent } from './urls/urls.component';
import { QrCodeModule } from './qr-code.module';
import { QrCodeComponent } from './qr-code/qr-code.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginaEnlaceAcortadoComponent,
    EnlaceComponent,
    IconoComponent,
    FormComponent,
    UrlShortenerComponent,
    NavbarComponent,
    FooterComponent,
    AyudaComponent,
    EstadisticasComponent,
    UrlsComponent,
    QrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QrCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
