import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  @Input()
  article: Article;
  constructor() { }

  ngOnInit(): void {
  }

  increaseLike(): void{
    this.article.like++;
  }
}
