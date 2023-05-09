import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice:3:6}}</h2>

    <h2>{{5555.678 | number:'3.1-2'}}</h2>

    <h2>{{5555.678 | currency}}</h2>
    <h2>{{5555.678 | currency:'EUR'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'dd-MM-yyyy'}}</h2>
    
  `,
  styles: [`

  `]
})
export class PipesComponent implements OnInit {

  public date = new Date()
  public name = "john WICK"
  constructor() { }

  ngOnInit(): void {
  }

}
