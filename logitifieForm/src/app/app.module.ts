import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogitifieComponent } from './logitifie/logitifie.component';
import { FormComponent } from './form/form.component';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LogitifieComponent,
    FormComponent,
    LogitifieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
