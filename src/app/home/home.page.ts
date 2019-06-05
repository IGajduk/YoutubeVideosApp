import {Component, OnInit, ViewChild} from '@angular/core';
import {LanguagesISpeakComponent} from '../core/languages-i-speak/languages-i-speak.component';
import {LoadingService} from '../services/loading.service';
import {BeyApiService} from '../services/bey-api.service';
import {PlaylistBeyApi} from '../models/PlaylistBeyApi';
import {CategoriesAndFiltersBeyApi} from '../models/CategoriesAndFiltersBeyApi';
import { Storage } from '@ionic/storage';

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
    private beyApiService: BeyApiService,
    private storage: Storage
) {
}
ngOnInit(): void {
  this.getLang();
  this.storage.get('languageISpeakText').then((name) => {
      if (name === null) {
      } else {
        this.textBtnUnderHeaderText = name;
      }
      }
  );
  // this.storage.set('langISpeak', 'en').then((rs) => {
  //   console.log(rs, 'set');
  //   this.beyApiService.getAvailableLanguagesCategories('en').subscribe((res: CategoriesAndFiltersBeyApi) => {
  //     console.log(res.data['current-language-categories']);
  //     this.storage.set('langISpeak', res.data['current-language-categories']);
  //   });
  // });
  // this.beyApiService.getVideos({}).subscribe((res: PlaylistBeyApi) => {
  //   for (let post in res.data.posts) {
  //     console.log(res.data.posts[post]);
  //   }
  // });
}

getLang() {
  this.storage.get('languageISpeakSlug').then((slug) => {
    if (slug === null) {
      this.storage.set('languageISpeakSlug', 'en').then((rs) => {
        this.beyApiService.getAvailableLanguagesCategories(rs).subscribe((res: CategoriesAndFiltersBeyApi) => {
          this.storage.set('langISpeak', res.data['current-language-categories']);
          this.storage.set('langIWantToLearn', res.data['relative-language-categories']);
        });
      });
    } else {
      this.storage.set('languageISpeakSlug', slug).then((slg) => {
        this.beyApiService.getAvailableLanguagesCategories(slg).subscribe((res: CategoriesAndFiltersBeyApi) => {
          this.storage.set('langISpeak', res.data['current-language-categories']);
          this.storage.set('langIWantToLearn', res.data['relative-language-categories']);
        });
      });
    }
  });
}

  showLanguagesMenu() {
    this.languagesISpeak.openPickerISpeak();
  }
}
