import { Component, Input, OnInit } from '@angular/core';
import { area, menuArea } from '../../models/area';

@Component({
  selector: 'app-mega-menu-items',
  templateUrl: './mega-menu-items.component.html',
  styleUrls: ['./mega-menu-items.component.css']
})
export class MegaMenuItemsComponent implements OnInit {

  constructor() { }
  
  @Input()
  departmentAreasParam: menuArea[] = []


  ngOnInit(): void {

  }

}
