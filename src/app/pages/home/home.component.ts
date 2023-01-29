import { Component, OnInit } from '@angular/core';
import { PicsumInterface, PicsumService } from 'src/app/service/picsum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public photoList!: PicsumInterface[];
  constructor(private picsumService: PicsumService) {}

  ngOnInit(): void {
    this.picsumService.listPhotos().subscribe((photos) => {
      this.photoList = photos;
    });
  }
}
