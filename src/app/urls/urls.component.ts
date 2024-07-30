import { Component, OnInit } from '@angular/core';
import { UrlShortenerService } from '../url-shortener.service';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrl: './urls.component.css'
})
export class UrlsComponent implements OnInit{

  savedUrls: { shortUrl: string, originalUrl: string }[] = [];

  constructor(private urlShortenerService: UrlShortenerService) {}

  ngOnInit() {
    this.savedUrls = this.urlShortenerService.getUrls();
  }

}
