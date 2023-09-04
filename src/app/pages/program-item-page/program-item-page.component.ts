import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-item-page',
  templateUrl: './program-item-page.component.html',
  styleUrls: ['./program-item-page.component.css']
})
export class ProgramItemPageComponent {
  params: any = null;

constructor(private router: Router, private _location: Location){}
  ngOnInit() {
   this.params = this.router.routerState.snapshot.root.queryParams
  }
  backClicked() {
    this._location.back();
  }
}
