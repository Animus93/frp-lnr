import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  visible: Boolean = false;

  swhoLoader(): Boolean {
    return this.visible = true;
  }
  hideLoader(): Boolean {
    return this.visible = false;
  }

  getVisibility(): Boolean {
    return this.visible;
  }
}
