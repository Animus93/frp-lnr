import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
  public visibility: boolean = false;

  switchVisibility() {
    this.visibility = !this.visibility
  }
}
