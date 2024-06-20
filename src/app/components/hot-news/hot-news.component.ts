import { Component } from '@angular/core';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent {
  constructor(public newsService: NewsService) { }

}