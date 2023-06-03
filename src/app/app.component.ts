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

  constructor() {}

  ngOnInit(): void {
    // activer lors de l'intialison de componenement
    console.log('Içi ngOnInit');
  }
}
