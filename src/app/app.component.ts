import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs'
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {

  seconds="";

  constructor() {}

  ngOnInit(): void {
    const compteur = interval(1000).pipe(
     // filter(value=> value %2 ===0), // retour selement le valeurs paires
      map(value => value %2 === 0 ?
          `${value} est pair` :
          `${value} est impair`
      ),

    );
    compteur.subscribe( {
      next: (value) => this.seconds = value,
      error: (err) => console.error(err),
      complete:() => console.info("complete")
    })
  }


}
