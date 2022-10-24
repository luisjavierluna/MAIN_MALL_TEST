import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { area } from 'src/app/models/area';
import { department } from 'src/app/models/department';

@Component({
  selector: 'app-form-area',
  templateUrl: './form-area.component.html',
  styleUrls: ['./form-area.component.css']
})
export class FormAreaComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private departmentsService: DepartmentsService) { }

  @Output()
  onSubmit: EventEmitter<area> = new EventEmitter<area>()

  form: FormGroup = this.formBuilder.group({})
  departmentsSelectListOptions: department[] = []

  ngOnInit(): void {
    this.getAllDepartments()

    this.form = this.formBuilder.group({
      name: '',
      departmentId: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: response => { this.departmentsSelectListOptions = response}
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

}
