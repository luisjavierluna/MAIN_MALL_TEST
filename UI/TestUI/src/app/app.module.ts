import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MegaMenuItemsComponent } from './header-menu/mega-menu-items/mega-menu-items.component';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';
import { IndexAreasComponent } from './areas/index-areas/index-areas.component';
import { IndexSubareasComponent } from './subareas/index-subareas/index-subareas.component';
import { CreateDepartmentComponent } from './departments/create-department/create-department.component';
import { CreateAreaComponent } from './areas/create-area/create-area.component';
import { CreateSubareaComponent } from './subareas/create-subarea/create-subarea.component';
import { FormSubareaComponent } from './subareas/form-subarea/form-subarea.component';
import { FormAreaComponent } from './areas/form-area/form-area.component';
import { FormDepartmentComponent } from './departments/form-department/form-department.component';
import { EditSubareaComponent } from './subareas/edit-subarea/edit-subarea.component';
import { EditAreaComponent } from './areas/edit-area/edit-area.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MegaMenuItemsComponent,
    IndexDepartmentComponent,
    IndexAreasComponent,
    IndexSubareasComponent,
    CreateDepartmentComponent,
    CreateAreaComponent,
    CreateSubareaComponent,
    FormSubareaComponent,
    FormAreaComponent,
    FormDepartmentComponent,
    EditSubareaComponent,
    EditAreaComponent,
    EditDepartmentComponent,
    InputImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
