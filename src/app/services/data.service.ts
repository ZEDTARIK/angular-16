import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ListArticles = [
    {id: 1, titreArticle: "Velo", prixArticle: 250, altImg: "", urlImg: "https://placehold.co/400x250", dispo: true},
    {id: 1, titreArticle: "Voiture", prixArticle: 150000, altImg: "", urlImg: "https://placehold.co/400x250", dispo: false},
    {id: 1, titreArticle: "TV", prixArticle: 3500, altImg: "", urlImg: "https://placehold.co/400x250", dispo: true},
  ] ;

  constructor() { }
}
