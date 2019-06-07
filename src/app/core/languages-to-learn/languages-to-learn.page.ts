import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-languages-to-learn',
  templateUrl: './languages-to-learn.page.html',
  styleUrls: ['./languages-to-learn.page.scss'],
})
export class LanguagesToLearnPage implements OnInit {
  iSpeak = 'I SPEAK ENGLISH';
  colorOfButton = 'dark';
  arrOfLanguages = [
  ];
  languagesToLearn: {}[] = [];
  constructor(
      private router: Router,
      private storage: Storage,
      private loadService: LoadingService
  ) { }

  ngOnInit() {
    this.storage.get('langIWantToLearn').then((res => {
      for (let lang in res) {
        this.languagesToLearn.push(res[lang]);
      }
      this.loadService.subject.next(2);
      console.log(this.languagesToLearn);
    }));
    // document.addEventListener('click', (event: any) => {
    //
    // });
  }
  goBack() {
    window.history.back();
  }
  oneLangClick(event) {
    console.log(event.target.children[0].value);
    const eTarList = event.target.classList;
    if (eTarList.contains('one-of-lang-to-learn')) {
      if (eTarList.contains('one-of-lang-to-learn-chose')) {
        eTarList.remove('one-of-lang-to-learn-chose');
      } else {
        eTarList.add('one-of-lang-to-learn-chose');
      }
    }
  }

  goToNextPage() {
    this.router.navigateByUrl('/playlist');
  }

}
