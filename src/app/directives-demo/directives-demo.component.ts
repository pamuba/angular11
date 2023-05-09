import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  template: `
  <!-- <h2 *ngIf="displayNames; else elseBlock">
    Structural Directives
  </h2> -->

  <h2 *ngIf="displayNames; then thenBlock; else elseBlock"></h2>

  <ng-template #thenBlock>
    <h2>
      Structural Directives THEN BLOCK
    </h2>
  </ng-template>

  <ng-template #elseBlock>
    <h2>
      Structural Directives ELSE BLOCK
    </h2>
  </ng-template>
  `,
  styles: [`
  
  `]
})
export class DirectivesDemoComponent implements OnInit {

  public displayNames = false
  constructor() { }

  ngOnInit(): void {
  }

}
