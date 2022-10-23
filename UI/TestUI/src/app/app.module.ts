import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MegaMenuItemsComponent } from './header-menu/mega-menu-items/mega-menu-items.component';
import { IndexDepartmentComponent } from './departments/index-department/index-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MegaMenuItemsComponent,
    IndexDepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
