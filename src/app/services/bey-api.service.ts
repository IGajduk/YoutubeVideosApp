import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {PlaylistBeyApi} from '../models/PlaylistBeyApi';
import {CategoriesAndFiltersBeyApi} from '../models/CategoriesAndFiltersBeyApi';
import {LanguagesBeyApi} from '../models/LanguagesBeyApi';

@Injectable({
  providedIn: 'root'
})
export class BeyApiService {
host = 'https://bey.academy/wp-content/themes/academy/ajax.php?api_action=';
  constructor(
      private http: HttpClient
  ) { }
  getAvailableLanguages(): Observable<LanguagesBeyApi> {
    return this.http.get<LanguagesBeyApi>(`${this.host}get_languages_list`);
  }
  getAvailableLanguagesCategories(lang: string): Observable<CategoriesAndFiltersBeyApi> {
    return this.http.get<CategoriesAndFiltersBeyApi>(`${this.host}get_cats&language=${lang}`);
}
  getVideos(query: {}): Observable<PlaylistBeyApi> {
  return this.http.get<PlaylistBeyApi>(`${this.host}get_records&language=ru&current-language-categories=3&relative-language-categories=8`);
}

}
