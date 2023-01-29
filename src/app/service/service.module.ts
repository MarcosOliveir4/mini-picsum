import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicsumService } from './picsum.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [PicsumService],
})
export class ServiceModule {}
