import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
// import { HttpModule } from '@angular/http';
import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';

import { AddPlayListComponent } from './add-play-list/add-play-list.component';
import { GlobalException } from "src/app/GloabalException";
import { DisplayPlayListComponent } from './display-play-list/display-play-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    
    AddPlayListComponent,
    
    DisplayPlayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{provide: ErrorHandler, useClass: GlobalException}],
  bootstrap: [AppComponent]
})
export class AppModule { }
