import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {

  seconds: number = 0;

  constructor() {}

  ngOnInit(): void {
    const compteur = interval(1000);
    compteur.subscribe( {
      next: (value) => this.seconds = value,
      error: (err) => console.error(err),
      complete:() => console.info("complete")
    })
  }


}
