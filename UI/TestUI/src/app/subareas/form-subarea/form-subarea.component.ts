import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AreasService } from 'src/app/areas/areas.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { area } from 'src/app/models/area';
import { department } from 'src/app/models/department';
import { subarea, subareaCreationDTO } from 'src/app/models/subarea';

@Component({
  selector: 'app-form-subarea',
  templateUrl: './form-subarea.component.html',
  styleUrls: ['./form-subarea.component.css']
})
export class FormSubareaComponent implements OnInit {

  constructor(private formBuiolder: FormBuilder,
    private departmentsService: DepartmentsService,
    private areasService: AreasService) { }
  
  @Input()
  subareaToEditParam: subarea = {id: 0, name: '', areaId: 0, areaName: '', departmentId: 0, departmentName: '', image: ''}
  
  @Output()
  onSubmit: EventEmitter<subareaCreationDTO> = new EventEmitter<subareaCreationDTO>()

  subareaImageChanged = false

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
      departmentId: '',
      image: ''
    })
  }

  getAllDepartments(){
    this.departmentsService.getAll()
    .subscribe({
      next: response => {
        setTimeout(() => {
          this.departmentsSelectListOptions = response
          this.setArea(this.subareaToEditParam.areaId)
        }, 500);
      }
    })
  }

  getAllAreas(){
    this.areasService.getAll()
    .subscribe({
      next: response => {this.areas = response}
    })
  }

  
  selectedFile(file: any){
    this.subareaImageChanged = true
    this.form.get('image')?.setValue(file)
  }

  saveChanges(){
    if(!this.subareaImageChanged){
      this.form.patchValue({'image': null})
    }

    this.onSubmit.emit(this.form.value)
  }

  setArea(departmentIdparam: number){
    setTimeout(() => {
      this.areasSelectListOptions = []
      
      departmentIdparam = this.form.value.departmentId
  
      this.areas.forEach(area => {
        if(area.departmentId == departmentIdparam){
          this.areasSelectListOptions.push(area)
        }
      });
    }, 500);
  }

}
