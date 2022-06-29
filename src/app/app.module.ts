import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Opdracht1cComponent } from './opdracht1c/opdracht1c.component';

@NgModule({
  declarations: [
    AppComponent,
    Opdracht1cComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Opdracht1cComponent]
})
export class AppModule { }
