import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  constructor(private _location: Location) { }
  backClicked() {
    this._location.back();
  }
}
