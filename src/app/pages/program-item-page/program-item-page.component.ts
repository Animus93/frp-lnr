import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Iprograms } from 'src/app/interfaces/Iprograms.interfaces';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-program-item-page',
  templateUrl: './program-item-page.component.html',
  styleUrls: ['./program-item-page.component.css']
})
export class ProgramItemPageComponent {
  // params: any = null;

constructor(private router: ActivatedRoute, private _location: Location, private programsService: ProgramsService){}
  // ngOnInit() {
  //  this.params = this.router.routerState.snapshot.root.queryParams
  // }

  id: number = Number(this.router.snapshot.paramMap.get('id'));
  programsItem$: Observable<Iprograms> = this.programsService.getProgramsItem(this.id);

  backClicked() {
    this._location.back();
  }
}
