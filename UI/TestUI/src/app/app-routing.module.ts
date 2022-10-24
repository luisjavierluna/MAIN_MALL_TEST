import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';
import { IndexAreasComponent } from './areas/index-areas/index-areas.component';
import { IndexSubareasComponent } from './subareas/index-subareas/index-subareas.component';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { CreateAreaComponent } from './areas/create-area/create-area.component';
import { CreateSubareaComponent } from './subareas/create-subarea/create-subarea.component';


const routes: Routes = [
  {path: 'departments', component: IndexDepartmentComponent},
  {path: 'departments/create', component: CreateDepartmentComponent},
  {path: 'areas', component: IndexAreasComponent},
  {path: 'areas/create', component: CreateAreaComponent},
  {path: 'subareas', component: IndexSubareasComponent},
  {path: 'subareas/create', component: CreateSubareaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
