import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.css']
})
export class JobsPageComponent {
  constructor(private _location: Location){}
  backClicked() {
    this._location.back();
  }
}
