import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  titre= new FormControl('');
  prix = new FormControl('');

  constructor() {}

  ngOnInit() : void {}

  onSubmit(form: NgForm) {
    console.table(this.titre.value);
  }

}
