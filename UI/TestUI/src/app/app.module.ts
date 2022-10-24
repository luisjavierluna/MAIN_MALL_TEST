import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MegaMenuItemsComponent } from './header-menu/mega-menu-items/mega-menu-items.component';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';
import { IndexAreasComponent } from './areas/index-areas/index-areas.component';
import { IndexSubareasComponent } from './subareas/index-subareas/index-subareas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MegaMenuItemsComponent,
    IndexDepartmentComponent,
    IndexAreasComponent,
    IndexSubareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
