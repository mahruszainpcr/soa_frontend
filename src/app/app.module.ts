import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiemahasiswaComponent } from './piemahasiswa/piemahasiswa.component';
import { PiekelasComponent } from './piekelas/piekelas.component';

import { DataTablesModule } from 'angular-datatables';
import { BarmatakuliahComponent } from './barmatakuliah/barmatakuliah.component';
@NgModule({
  declarations: [
    AppComponent,
    PiemahasiswaComponent,
    PiekelasComponent,
    BarmatakuliahComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
