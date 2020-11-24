import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MenuMobileComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
