import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-languages-to-learn',
  templateUrl: './languages-to-learn.page.html',
  styleUrls: ['./languages-to-learn.page.scss'],
})
export class LanguagesToLearnPage implements OnInit {
  iSpeak = 'I SPEAK ENGLISH'
  colorOfButton = 'dark';
  arrOfLanguages = [

  ];
  constructor(
      private router: Router
  ) { }

  ngOnInit() {
    // document.addEventListener('click', (event: any) => {
    //
    // });
  }

  oneLangClick(event) {
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
