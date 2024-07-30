import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrl: './urls.component.css'
})
export class UrlsComponent implements OnInit{

  savedUrls: { shortUrl: string, originalUrl: string }[] = [];
  dropdownUrl: string | null = null;

  constructor(private urlShortenerService: UrlShortenerService) {}

  ngOnInit() {
    this.savedUrls = this.urlShortenerService.getUrls();
  }

  toggleDropdown(url: { shortUrl: string }) {
    this.dropdownUrl = this.dropdownUrl === url.shortUrl ? null : url.shortUrl;
  }

  copyUrl(url: { shortUrl: string }) {
    const fullUrl = `http://localhost:3000/${url.shortUrl}`;
    navigator.clipboard.writeText(fullUrl).then(() => {
      console.log('URL copiada al portapapeles');
      this.dropdownUrl = null;
    }).catch(err => {
      console.error('Error al copiar la URL: ', err);
    });
  }

  deleteUrl(url: { shortUrl: string }) {
    this.savedUrls = this.savedUrls.filter(u => u.shortUrl !== url.shortUrl);
    localStorage.setItem('shortUrls', JSON.stringify(this.savedUrls));
    this.dropdownUrl = null;
  }

}
