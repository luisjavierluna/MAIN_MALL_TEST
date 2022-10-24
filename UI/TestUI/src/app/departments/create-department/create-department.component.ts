import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(
    private departmentService: DepartmentsService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(department: department){
    this.departmentService.add(department)
    .subscribe({
      next: () => {this.router.navigate(['/departments'])}
    })
  }
}
