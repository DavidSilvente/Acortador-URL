import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaEnlaceAcortadoComponent } from './pagina-enlace-acortado/pagina-enlace-acortado.component';
import { BotonComponent } from './boton/boton.component';
import { EnlaceComponent } from './enlace/enlace.component';
import { IconoComponent } from './icono/icono.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaEnlaceAcortadoComponent,
    BotonComponent,
    EnlaceComponent,
    IconoComponent,
    FormComponent,
    UrlShortenerComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
