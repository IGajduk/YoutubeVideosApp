import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {LoadingComponent} from './loading.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [
    LoadingComponent
  ],
  declarations: [
      LoadingComponent
  ]
})
export class LoadingPageModule {}
