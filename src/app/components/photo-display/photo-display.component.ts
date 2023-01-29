import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.scss'],
})
export class PhotoDisplayComponent {
  @Input() urlImage!: string;
  @Input() alt!: string;
}
