import { Component } from '@angular/core';
import { Inews } from 'src/app/interfaces/Inews.interface';
import { Observable, Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent {
  constructor(private newsService: NewsService) { }
  private subscriptions$: Subscription = new Subscription();

  dataNews?: Inews[];

  ngOnInit() {
    this.getData()
  }

  getData() {
    if (sessionStorage.getItem('savedData1')) {
      const data = JSON.parse(sessionStorage.getItem('savedData1') || '');
      if (data.length > 0) {
        this.dataNews = data
      }
      return
    }
    const fetch$ = this.newsService.getNews().subscribe(data => {
      console.log('fetch news')
      this.dataNews = data
      sessionStorage.setItem('savedData1', JSON.stringify(data))
    })
    this.subscriptions$.add(fetch$)
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

}
// export class HotNewsComponent {
//   constructor(private newsService: NewsService) { }
//   news$: Observable<Inews[]> = this.newsService.getNews()

// }
