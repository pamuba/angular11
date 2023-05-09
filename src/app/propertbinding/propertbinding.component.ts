import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertbinding',
  template: `
    <h2 [style.color]="condt ? 'red': 'blue'">Propety Binding</h2>
    <h2 [class]="condt ? classbinding : clr">Class Binding</h2>
    <h2 class="success">Class Binding</h2>
    <input [id]="myId" type="text" value="Angular" />
    <input [disabled]="false" id="{{myId}}" type="text" value="Angular" />
    <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Angular" />
  `,
  styles: [`
  .success{
    color:green
  }
  .red{
    color:red
  }
  `]
})
export class PropertbindingComponent implements OnInit {

  public classbinding = "success"
  public clr = 'red'
  public myId = "theID"
  constructor() { }
  public isDisabled = true
  public condt = false
  ngOnInit(): void {
  }

}
