import { Component } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
})
export class UrlShortenerComponent {
  longUrl: string = '';
  shortUrl: string | null = null;

  constructor(private urlShortenerService: UrlShortenerService, private router: Router) {}

  setLongUrl(url: string) {
    this.longUrl = url;
  }

  shortenUrl() {
    if (this.longUrl) {
      this.urlShortenerService.shortenUrl(this.longUrl).subscribe(
        (response) => {
          this.shortUrl = response.shortUrl;
          this.router.navigate(['/acortado'], { queryParams: { shortUrl: this.shortUrl } });
          this.urlShortenerService.saveUrl(this.shortUrl!, this.longUrl);

        },
        (error) => {
          console.error('Error acortando la URL', error);
        }
      );
    }
  }
}
