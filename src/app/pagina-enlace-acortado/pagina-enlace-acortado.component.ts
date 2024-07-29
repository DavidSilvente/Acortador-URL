import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-pagina-enlace-acortado',
  templateUrl: './pagina-enlace-acortado.component.html',
})
export class PaginaEnlaceAcortadoComponent implements OnInit {
  shortUrl: string | null = null;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {}

  goToAcortado() {
    this.navigationService.navigateToRoute('');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.shortUrl = params['shortUrl'];
    });
  }
}
