import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv',
  template: `
  <input #myVal type="text"/>
  <input type="text"/>
  <button (click)="logMessage(myVal.value)">Click</button>
  <hr>
  <input [(ngModel)]="name" type="text"/>
  {{name}}
  `,
  styles: [`
  `]
})
export class TrvComponent implements OnInit {

  public name = "Initial"
  constructor() { }

  ngOnInit(): void {
  }
  logMessage(val:any){
    console.log(val)
  }

}
