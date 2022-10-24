import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { department } from 'src/app/models/department';

@Component({
  selector: 'app-form-department',
  templateUrl: './form-department.component.html',
  styleUrls: ['./form-department.component.css']
})
export class FormDepartmentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Output()
  onSubmit: EventEmitter<department> = new EventEmitter<department>();

  form: FormGroup = this.formBuilder.group({})

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ''
    })
  }

  saveChanges(){
    this.onSubmit.emit(this.form.value)
  }

}
