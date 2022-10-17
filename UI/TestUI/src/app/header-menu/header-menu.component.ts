import { Component, OnInit } from '@angular/core';
import { area } from './area';
import { mallDepartment } from './mallDepartments';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }

  mallDepartments: mallDepartment[] = [
    {
      departmenName: 'Computer', 
      departmentAreas: [
        {areaName: 'PCs', subAreas: ['PC 1', 'PC 2', 'PC 3', 'PC 4']},
        {areaName: 'Laptops', subAreas: ['Laptop 1', 'Laptop 2', 'Laptop 3', 'Laptop 4']},
        {areaName: 'PC Gamer', subAreas: ['PC Gamer 1', 'PC Gamer 2', 'PC Gamer 3', 'PC Gamer 4']},
        {areaName: 'PC Gamer', subAreas: ['PC Gamer 1', 'PC Gamer 2', 'PC Gamer 3', 'PC Gamer 4']}
      ]
    },
    {
      departmenName: 'Consoles', 
      departmentAreas: [
        {areaName: 'Nintendo', subAreas: ['Switch 1', 'Switch 2', 'Switch 3', 'Switch 4']},
        {areaName: 'Microsoft', subAreas: ['Xbox Series 1', 'Xbox Series 2', 'Xbox Series 3', 'Xbox Series 4']},
        {areaName: 'Sony', subAreas: ['PlayStation 1', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4']},
        {areaName: 'Sony', subAreas: ['PlayStation 1', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4']},
        {areaName: 'Sony', subAreas: ['PlayStation 1', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4']},
      ]
    },
    {
      departmenName: 'Videogames', 
      departmentAreas: [
        {areaName: 'PlayStation', subAreas: ['The Last of Us', 'The Last of Us Part II', 'The Last of Us Part I', 'Uncharted']},
        {areaName: 'Xbox Series', subAreas: ['Halo Infinite', 'Gears 5', 'Minecraft', 'Fable']},
        {areaName: 'Nintendo Switch', subAreas: ['Splatoon 3', 'Animal Crossing', 'Super Smash Bros', 'The Legend of Zelda']}
      ]
    },
    {
      departmenName: 'Components', 
      departmentAreas: [
        {areaName: 'Microsoft', subAreas: ['Speakers', 'Xbox Controller', 'Component 3', 'Component 4']},
        {areaName: 'Nintendo', subAreas: ['Speakers', 'Switch Controller', 'Component 3', 'Component 4']},
        {areaName: 'Sony', subAreas: ['Speakers', 'PS Controller', 'Component 3', 'Component 4']}
      ]
    },
    {
      departmenName: 'Accessories', 
      departmentAreas: [
        {areaName: 'Accesory A', subAreas: ['Accesory A 1', 'Accesory A 2', 'Accesory A 3', 'Accesory A 4']},
        {areaName: 'Accesory B', subAreas: ['Accesory B 1', 'Accesory B 2', 'Accesory B 3', 'Accesory B 4']},
        {areaName: 'Accesory C', subAreas: ['Accesory C 1', 'Accesory C 2', 'Accesory C 3', 'Accesory C 4']},
      ]
    },
    {
      departmenName: 'Workstations', 
      departmentAreas: [
        {areaName: 'Workstation A', subAreas: ['Workstation A 1', 'Workstation A 2', 'Workstation A 3', 'Workstation A 4']},
        {areaName: 'Workstation B', subAreas: ['Workstation B 1', 'Workstation B 2', 'Workstation B 3', 'Workstation B 4']},
        {areaName: 'Workstation C', subAreas: ['Workstation C 1', 'Workstation C 2', 'Workstation C 3', 'Workstation C 4']},
      ]
    },
  ]

  ngOnInit(): void {
  }

}
