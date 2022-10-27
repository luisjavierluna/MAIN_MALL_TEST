import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments/departments.service';
import { area } from '../models/area';
import { department, menuDepartment } from '../models/department';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private departmentsService: DepartmentsService) { }

  headerMenuDepartments: menuDepartment[] = []

  ngOnInit(): void {
    this.getAllMenuDepartments()
  }

  getAllMenuDepartments(){
    this.departmentsService.getAllMenuDepartments()
    .subscribe({
      next: response => {this.headerMenuDepartments = response}
    })
  }

}
