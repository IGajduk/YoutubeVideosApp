import {Component, OnInit, Renderer2} from '@angular/core';
import { PickerController } from '@ionic/angular';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import {BeyApiService} from '../../services/bey-api.service';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'app-languages-i-speak',
  templateUrl: './languages-i-speak.component.html',
  styleUrls: ['./languages-i-speak.component.scss'],
})
export class LanguagesISpeakComponent implements OnInit {
  pickerGlobal;
  languages: any[] = [];
  currentLangISpeak = 'en';
  objectISpeak = {
    buttons: [{
      text: '',
    },
      ],
    columns: [
      {
        name: 'iSpeak',
        options: []
      },
    ]
  };
  objectIWantToSpeak = {
    buttons: [{
      text: '',
    },
    ],
    columns: [
      {
        name: 'iWantToSpeak',
        options: []
      },
    ]
  };
  nextOnDifferentLang = {
    en: {
      btnTxt: 'NEXT',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    ru: {
      btnTxt: 'ДАЛЕЕ',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    nl: {
      btnTxt: 'Volgende',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    es: {
      btnTxt: 'Siguiente',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    de: {
      btnTxt: 'Nächster',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    ar: {
      btnTxt: 'التالى',

      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    zh: {
      btnTxt: '下一个',
      headerText: 'CHOOSE YOUR LANGUAGE'
    },
    fr: {
      btnTxt: 'Prochain',
      headerText: 'CHOOSE YOUR LANGUAGE'
    }
  };
  constructor(
      private pickerCtrl: PickerController,
      private router: Router,
      private storage: Storage,
      private rend: Renderer2,
      private beyApiService: BeyApiService,
      private loadService: LoadingService,
  ) { }

  ngOnInit() {
    this.storage.get('langISpeak').then((res) => {
        for (let lang in res) {
          this.languages.push(res[lang]);
        }
        this.openPickerISpeak();
    });
    document.addEventListener('ionPickerDidDismiss', () => {
      // loader Start
      this.loadService.subject.next(1);
      this.getVal(this.pickerGlobal);
    });
  }


  async openPickerISpeak() {
    this.objectISpeak.columns[0].options = [];
    for (let i = 0; i < this.languages.length; i++) {
      this.objectISpeak.columns[0].options.push({
        text: this.languages[i].name,
        value: this.languages[i].slug
      });
    }
    const picker = await this.pickerCtrl.create(this.objectISpeak);
    const text = await this.rend.createText(this.nextOnDifferentLang[this.currentLangISpeak].btnTxt);
    const headerText = await document.getElementsByClassName('picker-columns')[0];
    this.rend.setAttribute(headerText, 'data-content', this.nextOnDifferentLang[this.currentLangISpeak].headerText);
    await this.rend.appendChild(document.getElementsByClassName('picker-button')[0], text);
    this.pickerGlobal = picker;
    await picker.present();
  }

  async getVal(pickeros) {
    await pickeros.getColumn('iSpeak').then((res) => {
      this.storage.set('languageISpeakSlug', res.options[res.selectedIndex].value).then((rs) => {
        this.beyApiService.getAvailableLanguagesCategories(rs).subscribe(result => {
          console.log(result);
          for (let lang in result.data['current-language-categories']) {
            if (result.data['current-language-categories'][lang].slug === rs) {
              this.storage.set('languageISpeakText', result.data['current-language-categories'][lang].name).then( name => {
                    console.log(name);
                  }
              );
            }
          }
          this.storage.set('langIWantToLearn', result.data['relative-language-categories']).then(r => {
            this.router.navigateByUrl('/languages-to-learn');
          });
        });
        this.storage.get('languageISpeakSlug').then(r => {
          this.currentLangISpeak = r;
        });
      });
    });
  }
}
