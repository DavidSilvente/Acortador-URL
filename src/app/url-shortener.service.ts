import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  private apiUrl = 'http://localhost:3000'; // URL del backend

  constructor(private http: HttpClient) {}

  shortenUrl(originalUrl: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/shorten`, { originalUrl });
  }

  saveUrl(shortUrl: string, originalUrl: string): void {
    const urls = this.getUrls();
    urls.push({ shortUrl, originalUrl });
    localStorage.setItem('shortUrls', JSON.stringify(urls));
  }

  getUrls(): { shortUrl: string, originalUrl: string }[] {
    const urls = localStorage.getItem('shortUrls');
    return urls ? JSON.parse(urls) : [];
  }

}
