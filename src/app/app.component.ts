import { Component, OnInit } from '@angular/core';

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

  articles = [
    {id: 1, titreArticle: "Velo", prixArticle: 250, altImg: "", urlImg: "https://placehold.co/400x250", dispo: true},
    {id: 1, titreArticle: "Voiture", prixArticle: 150000, altImg: "", urlImg: "https://placehold.co/400x250", dispo: true},
    {id: 1, titreArticle: "TV", prixArticle: 3500, altImg: "", urlImg: "https://placehold.co/400x250", dispo: true},
  ] ;
  constructor() {}

  ngOnInit(): void {
    // activer lors de l'intialison de componenement
    console.log('Içi ngOnInit');
  }

  onAfficheMsg(arg: string) {
      return this.message = 'Vous avez voté pour : ' + arg;
  }
}
