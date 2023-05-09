import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>Test Component</p>
    <h3>{{name}}</h3>
    <h3>{{3+3}}</h3>
    <h3>{{name.length}}</h3>
  `,
  styles: [`
    
  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  public name  = "John Wick"

  ngOnInit(): void {
  }

}
