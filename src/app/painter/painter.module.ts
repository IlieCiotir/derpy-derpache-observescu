import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainterComponent } from './painter.component';
import { DrawingModule } from '../drawing/drawing.module';

@NgModule({
  imports: [
    CommonModule,
    DrawingModule
  ],
  declarations: [PainterComponent],
  exports: [PainterComponent]
})
export class PainterModule { }
