import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaEnlaceAcortadoComponent } from './pagina-enlace-acortado/pagina-enlace-acortado.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';

const routes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: ':shortUrl', component: PaginaEnlaceAcortadoComponent },
  { path: 'acortado', component: PaginaEnlaceAcortadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
