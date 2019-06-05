import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'languages-to-learn', loadChildren: './core/languages-to-learn/languages-to-learn.module#LanguagesToLearnPageModule' },
  { path: 'playlist', loadChildren: './core/playlist/playlist.module#PlaylistPageModule' },
  { path: 'player', loadChildren: './core/player/player.module#PlayerPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
