import { Component } from '@angular/core';
import { ProgramsService } from 'src/app/services/programs.service';
import { Subscription } from 'rxjs';
import { Iprograms } from 'src/app/interfaces/Iprograms.interfaces';


@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent {
  constructor(private programsService: ProgramsService) { }
  private subscriptions$: Subscription = new Subscription();

  dataPrograms?: Iprograms[];

  ngOnInit() {
    this.getData()
  }

  getData() {
    if (sessionStorage.getItem('savedData')) {
      const data = JSON.parse(sessionStorage.getItem('savedData') || '');
      if (data.length > 0) {
        this.dataPrograms = data
      }
      return
    }
    const programs$ = this.programsService.getPrograms().subscribe(data => {
      this.dataPrograms = data
      sessionStorage.setItem('savedData', JSON.stringify(data))
    })
    this.subscriptions$.add(programs$)
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

}
// export class ProgramsComponent {
//   constructor(private programsService: ProgramsService){}
//   programs$: Observable<Iprograms[]> = this.programsService.getPrograms()
//   }
