import {Component, OnInit, Input} from '@angular/core';
import {VideoService} from "../video.service";


@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss'],
})

export class MainComponent implements OnInit {
    apiVideoData:any[] = [];
    selectedScreenVideo:any;

    constructor(private videoService:VideoService) {
    }

    onSelectedScreenVideo(selectedScreenVideo:any) {
        this.selectedScreenVideo = selectedScreenVideo;
    }

    ngOnInit() {
        this.apiVideoData = this.videoService.videoData;
    }
}
