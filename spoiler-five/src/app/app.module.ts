import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavbarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
