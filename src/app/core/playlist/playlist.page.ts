import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApiYoutubeVideoResponse} from '../../models/ApiYoutubeVideoResponse';
import {YoutubeAPIService} from '../../services/youtube-api.service';
import { Storage } from '@ionic/storage';
import {LoadingService} from '../../services/loading.service';
import {PlayerService} from '../../services/player.service';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  data = false;
  videosIds = ['gKM15TaKLUI', 'h3pJZSTQqIg', 'KnLNG0WnGsI', 'C8KV0mzqTXY'];
  videosToShow: ApiYoutubeVideoResponse[] = [];
  constructor(
      private router: Router,
      private YTAPIServise: YoutubeAPIService,
      private storage: Storage,
      private loadingService: LoadingService,
      private playerService: PlayerService
  ) { }

  ngOnInit() {
    this.getVideosObjects();
  }
  ionViewDidEnter() {
        this.loadingService.subject.next(2);
        setTimeout(() => {
          this.data = !!this.videosToShow;
        }, 1000);
  }
  getVideosObjects() {
    for ( let id of this.videosIds) {
      this.YTAPIServise.getVideoById(id).subscribe((res: ApiYoutubeVideoResponse) => {
        this.videosToShow.push(res);
      });
    }
  }
  openVideo(id) {
      this.storage.set('videoId', id);
      this.playerService.subject.next(id);
      this.loadingService.subject.next(1);
      this.router.navigateByUrl('/player');
  }
}
