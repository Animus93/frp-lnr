import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Inews } from 'src/app/interfaces/Inews.interface';
import { NewsService } from 'src/app/services/news.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.css']
})
export class NewsItemPageComponent {
  // params: any = null;

  constructor(private router: ActivatedRoute, private _location: Location, private newsService: NewsService, public loader: LoaderService) { }

  //   ngOnInit() {
  //    this.params = this.router.routerState.snapshot.root.queryParams
  //   }

  id: number = Number(this.router.snapshot.paramMap.get('id'));
  NewsItem$: Observable<Inews> = this.newsService.getNewsItem(this.id);

  backClicked() {
    this._location.back();
  }

}
