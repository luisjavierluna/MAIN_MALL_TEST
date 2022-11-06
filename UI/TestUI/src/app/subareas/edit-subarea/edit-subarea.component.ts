import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { department } from 'src/app/models/department';
import { subarea, subareaCreationDTO } from 'src/app/models/subarea';
import { SubareasService } from '../subareas.service';

@Component({
  selector: 'app-edit-subarea',
  templateUrl: './edit-subarea.component.html',
  styleUrls: ['./edit-subarea.component.css']
})
export class EditSubareaComponent implements OnInit {

  constructor(
    private subareasService: SubareasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  subareaToEdit: subarea = {id: 0, name: '', areaId: 0, areaName: '', departmentId: 0, departmentName: '', image: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.subareasService.getById(params['id'])
      .subscribe({
        next: subarea => {this.subareaToEdit = subarea},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(subarea: subareaCreationDTO){
    this.subareasService.edit(this.subareaToEdit.id, subarea)
    .subscribe({
      next: () => {this.router.navigate(['/subareas'])}
    })
  }
  
}
