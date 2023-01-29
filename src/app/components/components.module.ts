import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDisplayModule } from './photo-display/photo-display.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PhotoDisplayModule],
  exports: [PhotoDisplayModule],
})
export class ComponentsModule {}
