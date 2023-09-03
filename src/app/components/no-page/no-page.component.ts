import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-no-page',
  templateUrl: './no-page.component.html',
  styleUrls: ['./no-page.component.css'],
})
export class NoPageComponent {
  constructor(public notification: NotificationService) {}
  audio: any;
  interval: any;

  ngOnInit() {
    this.limitView();
  }

  limitView() {
    this.interval = setInterval(() => {
      this.switchVisibility();
    }, 2000);
  }

  switchVisibility() {
    this.notification.swithcVisible();
    clearInterval(this.interval);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
