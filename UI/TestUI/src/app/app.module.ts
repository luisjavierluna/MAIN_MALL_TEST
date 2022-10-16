import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MegaMenuItemsComponent } from './header-menu/mega-menu-items/mega-menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    MegaMenuItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
