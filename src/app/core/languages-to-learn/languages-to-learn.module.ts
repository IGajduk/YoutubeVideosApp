import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanguagesToLearnPage } from './languages-to-learn.page';

const routes: Routes = [
  {
    path: '',
    component: LanguagesToLearnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LanguagesToLearnPage]
})
export class LanguagesToLearnPageModule {}
