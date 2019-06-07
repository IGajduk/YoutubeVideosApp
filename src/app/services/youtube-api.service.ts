import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiYoutubeVideoResponse} from '../models/ApiYoutubeVideoResponse';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {
  apiKey = 'AIzaSyAOeuWCU4ta22o0MJl6kllcgO3j7-heIBc';
  constructor(
      private httpClient: HttpClient,
  ) { }
getVideoById(listId): Observable<ApiYoutubeVideoResponse> {
  return this.httpClient.get<ApiYoutubeVideoResponse>(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${listId}&key=${this.apiKey}`
      // `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=5qk1wBynjH4&key=AIzaSyAURMLbKPCyDAgUHzZT6UtERdn6hPW38wk`
  );
}
}
