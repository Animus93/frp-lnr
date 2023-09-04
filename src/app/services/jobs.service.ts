import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IJobs } from '../interfaces/Ijobs.interface';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }
  dbLink = 'https://64f5787e2b07270f705d404b.mockapi.io/frp-lnr/v2/'

  getJobs(): Observable<IJobs[]> {
    return this.http.get<IJobs[]>(`${this.dbLink}/jobs`)
  }
  // getJobsItem(id: number) {
  //   return this.http.get<IJobs>(`${this.dbLink}/jobs/${id}`);
  // }
}
