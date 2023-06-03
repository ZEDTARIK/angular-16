import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app-learn';

  prix1: number = 50;
  prix2: number = 150000;
  prix3: number = 9;

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
