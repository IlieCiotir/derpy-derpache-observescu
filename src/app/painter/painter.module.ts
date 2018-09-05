import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainterComponent } from './painter.component';
import { DrawingModule } from '../drawing/drawing.module';
import { GooglyEyeModule } from '../googly-eye/googly-eye.module';

@NgModule({
  imports: [
    CommonModule,
    DrawingModule,
    GooglyEyeModule
  ],
  declarations: [PainterComponent],
  exports: [PainterComponent]
})
export class PainterModule { }
