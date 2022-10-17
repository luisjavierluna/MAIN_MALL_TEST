import { Component, Input, OnInit } from '@angular/core';
import { area } from '../area';

@Component({
  selector: 'app-mega-menu-items',
  templateUrl: './mega-menu-items.component.html',
  styleUrls: ['./mega-menu-items.component.css']
})
export class MegaMenuItemsComponent implements OnInit {

  constructor() { }
  
  @Input()
  departmentAreasParam: area[] = []

  departmentAreas: area[] = []

  ngOnInit(): void {
    if(this.departmentAreasParam.length >= 0 
      && this.departmentAreasParam.length !== undefined) {
        this.departmentAreas = this.departmentAreasParam
    }
  }

}
