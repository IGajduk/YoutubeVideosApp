import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-languages-i-speak',
  templateUrl: './languages-i-speak.component.html',
  styleUrls: ['./languages-i-speak.component.scss'],
})
export class LanguagesISpeakComponent implements OnInit {
  pickerGlobal;
  constructor(
      private pickerCtrl: PickerController,
      private router: Router
  ) { }

  ngOnInit() {
    this.openPicker();
    document.addEventListener('ionPickerDidDismiss', () => {
      this.getVal(this.pickerGlobal);
      this.router.navigateByUrl('/languages-to-learn');
    });
    document.addEventListener('load', (event) => {
      console.log(event);
      if (event.target) {
        console.log(event);
      }
    });
  }

  valueOfPicker() {
    this.openPicker();
  }

  async openPicker() {
    const picker = await this.pickerCtrl.create({
      buttons: [{
        text: 'NEXT',
      }],
      columns: [
        {
          name: 'iSpeak',
          options: [
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            },
            {
              text: 'I SPEAK ENGLISH',
              value: 'I SPEAK ENGLISH'
            }
          ]
        },
      ]
    });
    this.pickerGlobal = picker;
    await picker.present();
  }

  async getVal(pickeros) {
    await pickeros.getColumn('iSpeak').then((res) => {
      console.log(res);
    });
  }
}
