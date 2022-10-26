import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { area } from 'src/app/models/area';
import { subarea } from 'src/app/models/subarea';
import { AreasService } from '../areas.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css']
})
export class EditAreaComponent implements OnInit {

  constructor(
    private areasService: AreasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  areaToEdit: area = {id: 0, name: '', departmentId: 0, departmentName: ''}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.areasService.getById(params['id'])
      .subscribe({
        next: area => {this.areaToEdit = area},
        error: error => {console.log(error)}
      })
    })
  }

  saveChanges(area: area){
    this.areasService.edit(this.areaToEdit.id, area)
    .subscribe({
      next: () => {this.router.navigate(['/areas'])}
    })
  }

}
