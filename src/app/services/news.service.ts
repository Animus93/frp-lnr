import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inews } from '../interfaces/Inews.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  dbLink = 'https://64e3280abac46e480e784598.mockapi.io/fmpt-lnr/v1/'

  getNews(): Observable<Inews[]> {
    return this.http.get<Inews[]>(`${this.dbLink}/news`)
  }
  getNewsItem(id: number) {
    return this.http.get<Inews>(`${this.dbLink}/news/${id}`);
  }
}
