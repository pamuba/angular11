import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let emp of employees">
      <li>{{emp.name}}</li>
    </ul>
  `,
  styles: [`

  `]
})
export class EmployeeListComponent implements OnInit {

  public employees:any = []
  constructor(private _empService:EmpService) { }

  ngOnInit(): void {
    this._empService.getEmployees()
      .subscribe(data => this.employees = data)
  }

}
