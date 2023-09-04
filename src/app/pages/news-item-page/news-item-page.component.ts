import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.css']
})
export class NewsItemPageComponent {
  params: any = null;

  constructor(private router: Router, private _location: Location){}

    ngOnInit() {
     this.params = this.router.routerState.snapshot.root.queryParams
    }
    
    backClicked() {
      this._location.back();
    }
  
}
