import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollingModule } from '@angular/cdk/scrolling'; // Virtual Scroll
import { DragDropModule } from '@angular/cdk/drag-drop'

import { AppComponent } from './app.component';
import { VirtualComponent } from './virtual/virtual.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragComponent } from './drag/drag.component';
import { PaisesComponent } from './paises/paises.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
