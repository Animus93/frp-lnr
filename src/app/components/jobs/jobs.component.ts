import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IJobs } from 'src/app/interfaces/Ijobs.interface';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  constructor(private jobsService: JobsService){}
  jobs$: Observable<IJobs[]> = this.jobsService.getJobs()
}
