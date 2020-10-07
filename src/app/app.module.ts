import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PComponenteComponent } from './p-componente/p-componente.component';
import { SComponenteComponent } from './s-componente/s-componente.component';
import { ApiComponent } from './api/api.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PComponenteComponent,
    SComponenteComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
