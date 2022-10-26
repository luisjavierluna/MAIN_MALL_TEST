import { Component, OnInit } from '@angular/core';
import { subarea } from 'src/app/models/subarea';
import { SubareasService } from '../subareas.service';

@Component({
  selector: 'app-index-subareas',
  templateUrl: './index-subareas.component.html',
  styleUrls: ['./index-subareas.component.css']
})
export class IndexSubareasComponent implements OnInit {

  constructor(private subareasService: SubareasService) { }

  subareas: subarea[] = []

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.subareasService.getAll()
    .subscribe({
      next: response => {
        this.subareas = response
      },
      error: error => console.log(error)
    })
  }

  delete(id: number){
    this.subareasService.delete(id)
    .subscribe({
      next: () => {this.reloadCurrentPage()}
    })
  }

  reloadCurrentPage(){
    window.location.reload()
  }
}
