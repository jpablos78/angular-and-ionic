import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeIonicComponent } from './home-ionic/home-ionic.component';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeIonicComponent,
    HomeDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
