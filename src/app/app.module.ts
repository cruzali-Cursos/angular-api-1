import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { GestionRoutingModule } from './pages/gestion/gestion-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GestionRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
