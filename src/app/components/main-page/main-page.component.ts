import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  showElement = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPercentage =
      (window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    if (scrollPercentage >= 10) {
      this.showElement = true;
    } else {
      this.showElement = false;
    }
  }
}
