import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';
import { IndexAreasComponent } from './areas/index-areas/index-areas.component';
import { IndexSubareasComponent } from './subareas/index-subareas/index-subareas.component';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { CreateAreaComponent } from './areas/create-area/create-area.component';
import { CreateSubareaComponent } from './subareas/create-subarea/create-subarea.component';
import { EditSubareaComponent } from './subareas/edit-subarea/edit-subarea.component';
import { EditAreaComponent } from './areas/edit-area/edit-area.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';


const routes: Routes = [
  {path: 'departments', component: IndexDepartmentComponent},
  {path: 'departments/create', component: CreateDepartmentComponent},
  {path: 'departments/edit/:id', component: EditDepartmentComponent},
  {path: 'areas', component: IndexAreasComponent},
  {path: 'areas/create', component: CreateAreaComponent},
  {path: 'areas/edit/:id', component: EditAreaComponent},
  {path: 'subareas', component: IndexSubareasComponent},
  {path: 'subareas/create', component: CreateSubareaComponent},
  {path: 'subareas/edit/:id', component: EditSubareaComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
