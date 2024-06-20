import { Component, Input } from '@angular/core';
import { Inews } from 'src/app/interfaces/Inews.interface';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent {
  @Input() newsItem?: Inews;
  // async foo() {
  //   const element = await document.querySelector('.text');
  //   const data = await this.newsItem;
  //   // if(element)
  //   // element.innerHTML = this.newsItem?.text || 'ASD'
  // element?.insertAdjacentHTML('afterbegin', this.newsItem?.text || '12')


  // }
  getImg(): string {
    return `url(${this.newsItem?.img})`
  }
}
