import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
@ViewChild('loader')loader: ElementRef;
  constructor(
      private rend: Renderer2,
      private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.subject.subscribe(res => {
      if (res === 1) {
        this.showLoader();
        console.log(res);
      } else if (res === 2) {
        this.hideLoader();
        console.log(res);
      }
    });
  }
  hideLoader() {
    this.rend.setStyle(this.loader.nativeElement, 'display', 'none');
  }
  showLoader() {
    this.rend.setStyle(this.loader.nativeElement, 'display', 'flex');
  }
}
