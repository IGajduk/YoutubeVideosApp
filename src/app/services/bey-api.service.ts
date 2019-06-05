import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeyApiService {
host = 'https://bey.academy/wp-content/themes/academy/ajax.php?api_action=';
  constructor(
      private http: HttpClient
  ) { }
  getAvailableLanguages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}get_languages_list`);
  }
  getAvailableLanguagesCategories(lang: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.host}get_cats&language=${lang}`);
}
  getVideos(query: {}): Observable<any> {
  return this.http.get<any>(`${this.host}get_records&language=ru&current-language-categories=3&relative-language-categories=8`);
}

}
