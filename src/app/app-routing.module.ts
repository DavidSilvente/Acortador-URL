import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaEnlaceAcortadoComponent } from './pagina-enlace-acortado/pagina-enlace-acortado.component';
import { UrlShortenerComponent } from './url-shortener/url-shortener.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { UrlsComponent } from './urls/urls.component';

const routes: Routes = [
  { path: '', component: UrlShortenerComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'stats', component: EstadisticasComponent },
  { path: 'url', component: UrlsComponent },
  { path: 'acortado', component: PaginaEnlaceAcortadoComponent },
  { path: ':shortUrl', component: PaginaEnlaceAcortadoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
