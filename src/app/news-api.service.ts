import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsApiService {
  baseUrl: string;
  apiKey: string;


  constructor(private http: Http) {
    this.baseUrl = 'https://newsapi.org/v1';
    this.apiKey = '7ac0b85b08624adaa00f7f4f155412e0';
   }

   fetchSources(): Observable<any> {
     return this.http.get(`${this.baseUrl}/sources`)
                     .map(response => response.json());
   }

   fetchArticles(source: string): Observable<any> {
     return this.http.get(`${this.baseUrl}/articles?source=${source}&apiKey=${this.apiKey}`)
                     .map(response => response.json());
   }

}
