import { Component } from '@angular/core';
import { MenuService } from './services/menu.service';
import { NotificationService } from './services/notification.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public menu: MenuService, public notification: NotificationService, public loader: LoaderService) { }
  title = 'frp-lnr';

  ngOnInit() {
    (function (m, e, t, r, i, k, a) {
      // @ts-ignore
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
      // @ts-ignore
      m[i].l = 1 * new Date();
      for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
      // @ts-ignore
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
    })
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    // @ts-ignore
    ym(94945863, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    });
  }
}
