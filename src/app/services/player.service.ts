import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  videoId: string;
  subject = new Subject<any>();
  constructor() {
    this.subject.subscribe(res => this.videoId = res );
  }
  getId() {
    return this.videoId;
  }
}
