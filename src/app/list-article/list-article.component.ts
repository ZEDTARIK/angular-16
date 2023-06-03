import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  message: string = '';
  articles: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // activer lors de l'intialison de componenement
    this.articles = this.dataService.ListArticles;
  }

  onAfficheMsg(arg: string) {
      return this.message = 'Vous avez voté pour : ' + arg;
  }

}
