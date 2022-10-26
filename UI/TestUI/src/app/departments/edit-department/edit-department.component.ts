import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { area } from 'src/app/models/area';
import { department } from 'src/app/models/department';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

  constructor(
    private departmensService: DepartmentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  departmentToEdit: department = {id: 0, name: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.departmensService.getById(params['id'])
      .subscribe({
        next: department => {this.departmentToEdit = department},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(departmen: department){
    this.departmensService.edit(this.departmentToEdit.id, departmen)
    .subscribe({
      next: () => {this.router.navigate(['/departments'])}
    })
  }

}
