import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiemahasiswaComponent } from './piemahasiswa/piemahasiswa.component';
import { PiekelasComponent } from './piekelas/piekelas.component';

@NgModule({
  declarations: [
    AppComponent,
    PiemahasiswaComponent,
    PiekelasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
