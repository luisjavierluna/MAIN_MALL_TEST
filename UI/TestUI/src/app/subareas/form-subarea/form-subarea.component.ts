import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AreasService } from 'src/app/areas/areas.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { area } from 'src/app/models/area';
import { department } from 'src/app/models/department';
import { subarea } from 'src/app/models/subarea';

@Component({
  selector: 'app-form-subarea',
  templateUrl: './form-subarea.component.html',
  styleUrls: ['./form-subarea.component.css']
})
export class FormSubareaComponent implements OnInit {

  constructor(private formBuiolder: FormBuilder,
    private departmentsService: DepartmentsService,
    private areasService: AreasService) { }

  @Output()
  onSubmit: EventEmitter<subarea> = new EventEmitter<subarea>()

  form: FormGroup = this.formBuiolder.group({})
  departmentsSelectListOptions: department[] = []
  areasSelectListOptions: area[] = []

  ngOnInit(): void {
    this.getAllDepartments()
    this.getAllAreas()

    this.form = this.formBuiolder.group({
      name: '',
      areaId: '',
      departmentId: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: response => {this.departmentsSelectListOptions = response}
    })
  }

  getAllAreas(){
    this.areasService.getAll()
    .subscribe({
      next: response => {this.areasSelectListOptions = response}
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

}
