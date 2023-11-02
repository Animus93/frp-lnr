import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor(private newsService: NewsService, public loader: LoaderService) { }
  private subscriptions$: Subscription = new Subscription();

  showElement = false;
  // dataNews?: Inews[];

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.loader.swhoLoader()
    if (sessionStorage.getItem('savedData1')) {
      const data = JSON.parse(sessionStorage.getItem('savedData1') || '');
      if (data.length > 0) {
        this.newsService.setNewsState(data)
      }
      this.loader.hideLoader()
      return
    }
    const fetch$ = this.newsService.getNews().subscribe(data => {
      this.newsService.setNewsState(data.reverse())
      sessionStorage.setItem('savedData1', JSON.stringify(data))
      this.loader.hideLoader()
    })
    this.subscriptions$.add(fetch$)
  }


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
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
