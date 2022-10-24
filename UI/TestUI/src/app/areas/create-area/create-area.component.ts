import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { area } from 'src/app/models/area';
import { AreasService } from '../areas.service';

@Component({
  selector: 'app-create-area',
  templateUrl: './create-area.component.html',
  styleUrls: ['./create-area.component.css']
})
export class CreateAreaComponent implements OnInit {

  constructor(
    private areasService: AreasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveChanges(area: area){
    this.areasService.add(area)
    .subscribe({
      next: () => {this.router.navigate(['/areas'])}
    })
  }

}
