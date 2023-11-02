import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {
  constructor(private _location: Location, public newsService: NewsService, public loader: LoaderService) { }
  private subscriptions$: Subscription = new Subscription();
  ngOnInit() {
    this.loader.swhoLoader()
    this.getData()
  }

  getData() {
    if (sessionStorage.getItem('savedData1')) {
      const data = JSON.parse(sessionStorage.getItem('savedData1') || '');
      if (data.length > 0) {
        this.newsService.setNewsState(data)
      }
      this.loader.hideLoader()
      return
    }
    const fetch$ = this.newsService.getNews().subscribe(data => {
      console.log('fetch')
      this.newsService.setNewsState(data.reverse())
      sessionStorage.setItem('savedData1', JSON.stringify(data))
      this.loader.hideLoader()
    })
    this.subscriptions$.add(fetch$)
  }
  backClicked() {
    this._location.back();
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
