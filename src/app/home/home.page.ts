import {Component, OnInit, ViewChild} from '@angular/core';
import {LanguagesISpeakComponent} from '../core/languages-i-speak/languages-i-speak.component';
import {LoadingService} from '../services/loading.service';
import {BeyApiService} from '../services/bey-api.service';
import {PlaylistBeyApi} from '../models/PlaylistBeyApi';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('languagesISpeak') languagesISpeak: LanguagesISpeakComponent;

  textHeaderMain = 'Language Learning Simplified';
  textUnderHeaderText = 'Famous people as teachers and movie scenes as lessons!';
  textBtnUnderHeaderText = 'I SPEAK ENGLISH';


constructor(
    private loadingService: LoadingService,
    private beyApiService: BeyApiService
) {
}
ngOnInit(): void {
  this.beyApiService.getAvailableLanguages().subscribe((res) => {
    console.log(res);
  });
  this.beyApiService.getAvailableLanguagesCategories('en').subscribe((res) => {
    console.log(res);
  });
  this.beyApiService.getVideos({}).subscribe((res: PlaylistBeyApi) => {
    for (let post in res.data.posts) {
      console.log(res.data.posts[post]);
    }
  });
}

  showLanguagesMenu() {
    this.languagesISpeak.openPicker();
  }
}
