import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {

  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 250.99;

  altImg: string = "Alternative Titre de l'article";
  urlImg: string = "https://placehold.co/200x100";
  totalNbrLike: number = 0;
  comment: string = "mon commentaire";
  dispo: boolean = true;

  // Pass data from Parent to childre using Input
  @Input() titreArticle: string;
  @Input() prixArticle: number;

  // Pass data from Children to Parent using Output  + emet
  @Output() info = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onLike() {
    this.totalNbrLike++;  // increment the total number like
    this.info.emit(this.titreArticle);
  }
}
