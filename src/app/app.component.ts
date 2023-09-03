import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public menu: MenuService, public notification: NotificationService){}
  title = 'frp-lnr';
}
