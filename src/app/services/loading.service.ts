import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  subject = new Subject<any>();
  constructor() {
    setTimeout(() => {
      this.subject.next(2);
        }, 1000);
  }
}
