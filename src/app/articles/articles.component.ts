import { Component, OnInit } from '@angular/core';
import {Articles} from '../mock-articles';
import {Article} from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles = Articles;
  selectedArticle: Article;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(article: Article): void{
    this.selectedArticle = article;
  }
}
