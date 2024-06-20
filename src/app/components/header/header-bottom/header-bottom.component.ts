import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent {
  constructor(public menu: MenuService,public notification: NotificationService, private router: Router) { }
  @Input() mobile: boolean = false

  // async goTo (fragment: string) {
  //   await this.router.navigateByUrl('frp-lnr#')
  //     this.router.navigateByUrl('frp-lnr#' + fragment)
  // }
}
