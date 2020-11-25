import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {
      path: 'landing', component: LandingPageComponent 
    },
    {
      path: 'home', component: HomeComponent
    },
    {
      path: 'detail', component: DetailComponent
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  