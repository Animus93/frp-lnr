import { Component, Input } from '@angular/core';
import { IJobs } from 'src/app/interfaces/Ijobs.interface';

@Component({
  selector: 'app-jobs-item',
  templateUrl: './jobs-item.component.html',
  styleUrls: ['./jobs-item.component.css']
})
export class JobsItemComponent {
  @Input() job?: IJobs;
}
