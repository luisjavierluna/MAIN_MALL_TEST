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

  departmentId: number = 0
  areaId: number = 0

  form: FormGroup = this.formBuiolder.group({})
  departmentsSelectListOptions: department[] = []
  areas: area[] = []
  areasSelectListOptions: area[] = []
  
  ngOnInit(): void {
    this.getAllAreas()
    this.getAllDepartments()

    this.form = this.formBuiolder.group({
      name: '',
      areaId: '',
      departmentId: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: response => {
        this.departmentsSelectListOptions = response
        this.setArea(this.departmentId)
      }
    })
  }

  getAllAreas(){
    this.areasService.getAll()
    .subscribe({
      next: response => {this.areas = response}
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

  setArea(departmentIdparam: number){
    this.areasSelectListOptions = []
    
    departmentIdparam = this.form.value.departmentId

    this.areas.forEach(area => {
      if(area.departmentId == departmentIdparam){
        this.areasSelectListOptions.push(area)
      }
    });
  }


}
