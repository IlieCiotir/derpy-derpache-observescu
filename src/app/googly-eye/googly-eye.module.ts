import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglyEyeComponent } from './googly-eye.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GooglyEyeComponent],
  exports: [GooglyEyeComponent]
})
export class GooglyEyeModule { }
