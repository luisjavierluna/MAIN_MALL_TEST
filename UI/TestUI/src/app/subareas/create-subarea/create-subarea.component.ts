import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { subarea, subareaCreationDTO } from 'src/app/models/subarea';
import { SubareasService } from '../subareas.service';

@Component({
  selector: 'app-create-subarea',
  templateUrl: './create-subarea.component.html',
  styleUrls: ['./create-subarea.component.css']
})
export class CreateSubareaComponent implements OnInit {

  constructor(
    private subareasService: SubareasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(subarea: subareaCreationDTO){
    this.subareasService.add(subarea)
    .subscribe({
      next: () => {this.router.navigate(['/subareas'])}
    })
  }

}
