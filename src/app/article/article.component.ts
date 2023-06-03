import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  titreArticle: string = "Titre de l'article";
  prixArticle: number = 250.99;
  altImg: string = "Alternative Titre de l'article";
  urlImg: string = "https://placehold.co/300x250";
  constructor() {}

  ngOnInit(): void {}
}
