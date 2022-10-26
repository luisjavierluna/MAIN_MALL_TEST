import { Component, OnInit } from '@angular/core';
import { area } from '../models/area';
import { department, menuDepartment } from '../models/department';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  headerMenuDepartments: menuDepartment[] = [
    {
      id: 1,
      name: 'Computer', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 2,
      name: 'Consoles', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 3,
      name: 'Videogames', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 4,
      name: 'Components', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 5,
      name: 'Accessories', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
    {
      id: 6,
      name: 'Workstations', 
      areas: [
        {id: 1, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 2, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 3, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
        {id: 4, name: 'PCs', subareas: [{id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}, {id:1, name: 'Laptop 1'}]},
      ]
    },
  ]

  ngOnInit(): void {
  }

}
