import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PainterModule } from './painter/painter.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PainterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
