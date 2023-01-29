import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PicsumInterface {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PicsumService {
  private baseUrl = 'https://picsum.photos/v2/list';
  constructor(private http: HttpClient) {}

  public listPhotos(): Observable<PicsumInterface[]> {
    return this.http.get<PicsumInterface[]>(this.baseUrl);
  }
}
