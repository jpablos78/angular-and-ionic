import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';
import components from './m-component';

//const component = (window.innerWidth <= 360) ? HomeIonicComponent : HomeComponent;

const routes: Routes = [
  /*{
    path: '',
    component: (window.innerWidth <= 360) ? HomeIonicComponent : HomeComponent
  },*/

  {
    path: '',
    redirectTo: 'home-component',
    pathMatch: 'full'
  },

  {
    path: 'home-component',
    //component: (window.innerWidth <= 360) ? HomeIonicComponent : HomeComponent
    component: HomeComponent,
    children: [
      //{ path: '', redirectTo: 'HomeDesktopComponent', pathMatch: 'full' },
      { path: 'desk', component: HomeDesktopComponent },
      { path: 'mov', component: HomeIonicComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
