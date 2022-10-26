import { Component, OnInit } from '@angular/core';
import { area } from 'src/app/models/area';
import { department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-index-department',
  templateUrl: './index-department.component.html',
  styleUrls: ['./index-department.component.css']
})
export class IndexDepartmentComponent implements OnInit {

  constructor(private departmentsService: DepartmentsService) { }

  departments: department[] = []

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.departmentsService.getAll()
    .subscribe({
      next: response => {
        this.departments = response
      },
      error: error => console.log(error)
    })
  }

  delete(id: number){
    this.departmentsService.delete(id)
    .subscribe({
      next: () => {this.reloadCurrentPage()}
    })
  }

  reloadCurrentPage(){
    window.location.reload()
  }
}
