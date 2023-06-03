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
  urlImg: string = "https://placehold.co/200x100";
  totalNbrLike: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onLike() {
    this.totalNbrLike++;  // increment the total number like
  }
}
