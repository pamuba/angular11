import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `
    <div [ngSwitch]="color">
        <div [style.color]="color" *ngSwitchCase="'red'">You picked red color</div>
        <div [style.color]="color" *ngSwitchCase="'blue'">You picked blue color</div>
        <div [style.color]="color" *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick Again</div>
    </div>
    <hr>
    <div *ngFor="let color of colors; index as i, last as l">
      <h2 [style.color]="color">{{i+1}}. {{color}} {{l}}</h2>
    </div>
  `,
  styles: [`
  `]
})
export class DirectivesComponent implements OnInit {

  public color = 'dsd'
  public colors = ["red", "green", "blue", "yellow"]
  constructor() { }

  ngOnInit(): void {
  }

}
