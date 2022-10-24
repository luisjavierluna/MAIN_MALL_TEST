import { Component, OnInit } from '@angular/core';
import { area } from 'src/app/models/area';
import { AreasService } from '../areas.service';

@Component({
  selector: 'app-index-areas',
  templateUrl: './index-areas.component.html',
  styleUrls: ['./index-areas.component.css']
})
export class IndexAreasComponent implements OnInit {

  constructor(private areasService: AreasService) { }

  areas: area[] = []

  ngOnInit(): void {
    this.getAll();
  }
  
  getAll(){
    this.areasService.getAll()
    .subscribe({
      next: response => {
        this.areas = response
        console.log(response)
      },
      error: error => console.log(error)
    })
  }
}
