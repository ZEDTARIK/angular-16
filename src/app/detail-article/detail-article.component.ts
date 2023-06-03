import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {

  id;
  url: string;
  title: string;


  constructor(
      private dataService: DataService,
      private router:ActivatedRoute
    ) {}


    ngOnInit(): void {
      const id = this.router.snapshot.params["id"];

      this.id = id;
      this.url = this.dataService.getArticleById(id).urlImg;
      this.title = this.dataService.getArticleById(id).titreArticle;
    }

}
