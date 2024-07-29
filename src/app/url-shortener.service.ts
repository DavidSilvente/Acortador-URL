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

  getOriginalUrl(shortUrl: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${shortUrl}`);
  }

}
