import { Component, Input } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { UrlShortenerService } from '../url-shortener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {

  @Input() longUrl: string = '';

  constructor(private urlShortenerService: UrlShortenerService, private router: Router, private navigationService: NavigationService) {}

  goToAcortado() {
    this.navigationService.navigateToRoute('/acortado');
  }

  shortenUrl() {
    if (this.longUrl) {
      this.urlShortenerService.shortenUrl(this.longUrl).subscribe(
        (response) => {
          this.router.navigate(['/acortado'], { queryParams: { shortUrl: response.shortUrl } });
        },
        (error) => {
          console.error('Error acortando la URL', error);
        }
      );
    }
  }
}
