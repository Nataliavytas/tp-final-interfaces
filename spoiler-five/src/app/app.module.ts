import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LeftNavigationBarComponent } from './left-navigation-bar/left-navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicReproductorComponent } from './music-reproductor/music-reproductor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { DetailSongComponent } from './detail-song/detail-song.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { DetailPodcastComponent } from './detail-podcast/detail-podcast.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingNavbarComponent,
    LeftNavigationBarComponent,
    HomeComponent,
    MusicReproductorComponent,
    NavBarComponent,
    DetailComponent,
    DetailSongComponent,
    DetailPlaylistComponent,
    DetailPodcastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
