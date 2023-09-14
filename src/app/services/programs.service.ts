import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iprograms } from '../interfaces/Iprograms.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(private http: HttpClient) { }
  dbLink = 'https://64e3280abac46e480e784598.mockapi.io/fmpt-lnr/v1/'

  getPrograms(): Observable<Iprograms[]> {
    return this.http.get<Iprograms[]>(`${this.dbLink}/programs`)
  }

  getProgramsItem(id: number) {
    return this.http.get<Iprograms>(`${this.dbLink}/programs/${id}`);
  }

}
