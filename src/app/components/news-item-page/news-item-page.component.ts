import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inews } from 'src/app/interfaces/Inews.interface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-item-page',
  templateUrl: './news-item-page.component.html',
  styleUrls: ['./news-item-page.component.css']
})
export class NewsItemPageComponent {
  // constructor(
  //   private route: ActivatedRoute,
  //   private newsService: NewsService
  // ) {}
  params: any = null;

  constructor(private router: Router){}
    ngOnInit() {
      // this.params = this.paramsService.getParams();
     this.params = this.router.routerState.snapshot.root.queryParams
    }
  // id: number = Number(this.route.snapshot.paramMap.get('id'));
  // news$: Observable<Inews> = this.newsService.getNewsItem(this.id);

  
}
