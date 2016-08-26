import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {VideoService} from "../../video.service";

@Component({
    selector: 'app-video-listings',
    templateUrl: 'video-listings.component.html',
    styleUrls: ['./video-listings.component.scss'],
})
export class VideoListingsComponent implements OnInit {

    constructor(private videoService:VideoService) {};

    @Output() selectedScreenVideo = new EventEmitter();
    @Input() apiVideoData:any;


    ngOnInit() {
        this.apiVideoData = this.videoService.videoData;
        this.videoService.videoDataUpdate.subscribe(
            (videoData:any) => this.apiVideoData = videoData
        );
    }

    onFrameVideoSelected(selectedVideo:any) {
        this.selectedScreenVideo.emit(selectedVideo);
    }
}
