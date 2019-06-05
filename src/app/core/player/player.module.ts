import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PlayerPage } from './player.page';
import {LoadingPageModule} from '../loading/loading.module';

const routes: Routes = [
  {
    path: '',
    component: PlayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgxYoutubePlayerModule.forRoot(),
    LoadingPageModule
  ],
  declarations: [PlayerPage]
})
export class PlayerPageModule {
}
