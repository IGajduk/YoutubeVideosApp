import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Storage } from '@ionic/storage';
import {LoadingService} from '../../services/loading.service';
import {PlayerService} from '../../services/player.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {
  @ViewChild('select')select;
  id = this.playerService.getId();
  height = `${document.body.offsetHeight - 22}`;
  width = `${document.body.offsetWidth + 25}`;
  playerVars = {
    cc_lang_pref: 'en',
    controls: 2,
    rel: 0,
    fs: 0,
    version: 3
  };
  private player;
  private ytEvent;

  constructor(
      private rend: Renderer2,
      private storage: Storage,
      private loadService: LoadingService,
      private playerService: PlayerService,
      private screenOrientation: ScreenOrientation
  ) { }

  ngOnInit() {
    this.storage.get('videoId').then((videoId: string) => {
      this.id = videoId;
    });
    // this.screenOrientation.onChange().subscribe(
    //     () => {
    //       console.log("Orientation Changed");
    //     }
    // );
    screen.orientation.addEventListener('change', () => {
      this.loadService.subject.next(1);
      this.player.setSize(document.body.offsetHeight + 25, document.body.offsetWidth - 22);
      const frame = document.getElementsByTagName('iframe');
      frame[0].width = `${document.body.offsetHeight + 15}px`;
      frame[0].height = `${document.body.offsetWidth - 22}px`;
      this.storage.get(`playerStatus`).then((res) => {
        console.log(res);
        if (res === 'paused') {
          frame[0].width = `${document.body.offsetWidth + 15}px`;
          frame[0].height = `${document.body.offsetHeight - 22 - 75}px`;
        }
        this.loadService.subject.next(2);
      });
    });
    window.onpopstate = (event) => {
      console.log('location: ' + document.location + ', state: ' + JSON.stringify(event.state));
      this.storage.get(`playerStatus`).then((playerState) => {
        if (playerState === 1) {
          this.pauseVideo();
        } else if (playerState === 2) {
          this.storage.set('playerStatus', 'paused');
        }
      });
    };
  }

  setSize() {
    this.player.setSize(document.body.clientWidth - 22, document.body.clientHeight + 25);
  }


  onStateChange(event) {
    this.ytEvent = event.data;
    const frame = document.getElementsByTagName('iframe');
    const headerBlock = document.getElementById('player-header');
    console.log(event.data);
    if (event.data === 1) {
      this.showSpeedButton();
      this.storage.set(`playerStatus`, event.data);
      history.pushState({page: 1}, "title 1", `player?id=${this.id}`);
      this.height = `${document.body.offsetHeight - 22}`;
      frame[0].height = `${document.body.offsetHeight}px`;
      this.rend.setStyle(headerBlock, 'display', 'none');
      console.log(this.height, frame[0].height);
    } else if (event.data === 2) {
      history.back();
      const speedButton = document.getElementById('action-menu-btn');
      this.rend.setStyle(speedButton, 'display', 'block');
      this.storage.set(`${this.id}lastsecond`, this.player.getCurrentTime());
      this.storage.set(`playerStatus`, event.data);
      this.height = `${document.body.offsetHeight - 22 - 100}`;
      frame[0].height = `${document.body.offsetHeight - 100}px`;
      console.log(this.height, frame[0].height, 56);
      this.rend.setStyle(headerBlock, 'display', 'block');
    } else if (event.data === 0) {
      this.storage.set(`${this.id}lastsecond`, 0);
      this.height = `${document.body.offsetHeight - 22 - 100}`;
      frame[0].height = `${document.body.offsetHeight - 100}px`;
      this.rend.setStyle(headerBlock, 'display', 'block');
    }  else if (event.data === -1 ) {
    }
  }


  savePlayer(player) {
    this.player = player;
    this.storage.get(`${this.id}lastsecond`).then(res => {
      this.player.loadVideoById({
        videoId: this.id,
        startSeconds: res
      });
    });
    this.loadService.subject.next(2);
    const frame = document.getElementsByTagName('iframe');
    frame[0].width = `${document.body.offsetWidth}px`;
    frame[0].height = `${document.body.offsetHeight}px`;

    this.rend.removeClass(document.getElementsByClassName('playerin')[0], 'playerin');
    const speedButton = document.getElementById('action-menu-btn');
    this.rend.setStyle(speedButton, 'display', 'block');
    setTimeout(() => {

      // this.rend.setStyle(document.getElementsByClassName('videoPreload')[0], 'display', 'none');
    }, 1000);
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  openActionMenu() {
    this.select.open();
  }

  setSpeedOfVideo(event) {
    this.player.setPlaybackRate(+event.target.value);
    this.storage.get(`${this.id}lastsecond`).then(res => {
      this.player.loadVideoById({
        videoId: this.id,
        startSeconds: res
      });
    });
  }

  showSpeedButton() {
    const speedButton = document.getElementById('action-menu-btn');
    this.rend.setStyle(speedButton, 'display', 'block');
    setTimeout(() => {
      const speedBtn = document.getElementById('action-menu-btn');
      this.rend.setStyle(speedBtn, 'display', 'none');
    }, 500);
  }

  showError() {
    console.log('error');
  }
}
