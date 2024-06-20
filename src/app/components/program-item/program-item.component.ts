import { Component, Input } from '@angular/core';
import { Iprograms } from 'src/app/interfaces/Iprograms.interfaces';


@Component({
  selector: 'app-program-item',
  templateUrl: './program-item.component.html',
  styleUrls: ['./program-item.component.css']
})
export class ProgramItemComponent {
  @Input() programItem?: Iprograms;
  getImg(): string {
    return `url(${this.programItem?.img})`
  }
}
