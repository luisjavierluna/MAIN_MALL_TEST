import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';
import { IndexAreasComponent } from './areas/index-areas/index-areas.component';
import { IndexSubareasComponent } from './subareas/index-subareas/index-subareas.component';


const routes: Routes = [
  {path: 'departments', component: IndexDepartmentComponent},
  {path: 'areas', component: IndexAreasComponent},
  {path: 'subareas', component: IndexSubareasComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
