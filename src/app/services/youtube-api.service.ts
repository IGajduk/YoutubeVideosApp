import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ApiYoutubeVideoResponse} from '../models/ApiYoutubeVideoResponse';

@Injectable({
  providedIn: 'root'
})
export class YoutubeAPIService {
  apiKey = 'AIzaSyAURMLbKPCyDAgUHzZT6UtERdn6hPW38wk';
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
