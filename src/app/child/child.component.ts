import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Data From Parent: {{parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
    <button (click)="fireEvent2()">Send Event2</button>
  `,
  styles: [``]
})
export class ChildComponent implements OnInit {

  @Input() public parentData: any
  @Output() childEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childEvent.emit("Hey Parent")
  }
  fireEvent2(){
    this.childEvent.emit("Hey Parent2")
  }

}
