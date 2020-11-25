import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LeftNavigationBarComponent } from './left-navigation-bar/left-navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicReproductorComponent } from './music-reproductor/music-reproductor.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavbarComponent,
    LeftNavigationBarComponent,
    HomeComponent,
    MusicReproductorComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
