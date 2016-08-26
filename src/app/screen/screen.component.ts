import {Component, OnInit, OnDestroy, Input, EventEmitter} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {VideoService} from "../video.service";
import {VideoListingsComponent} from "../main/video-listings/video-listings.component";

@Component({
    selector: 'app-screen',
    templateUrl: 'screen.component.html',
    styleUrls: ['screen.component.scss'],
    providers: [VideoListingsComponent]
})
export class ScreenComponent implements OnInit, OnDestroy {

    subscription:Subscription;
    videoServiceDataUpdateSubscription:Subscription;
    videoNid:number;
    @Input() selectedScreenVideo:any;
    partialVideoUrl="http://www.popsugar.com/video.mp4?q=fc/video/redirector&size=720&nid=";
    selectedScreenVideoUrl:string;

    constructor(
        private screenViewActivatedRoute:ActivatedRoute,
        private videoService:VideoService) {
    }

    ngOnInit() {
        this.videoServiceDataUpdateSubscription = this.videoService.videoDataUpdate.subscribe(
            (selectedScreenVideo:any) => {
                this.selectedScreenVideo = this.videoService.getVideoObjectFromNid(this.videoNid);
                this.selectedScreenVideoUrl = this.partialVideoUrl+this.selectedScreenVideo.nid;
            }
        );

        this.subscription = this.screenViewActivatedRoute.params.subscribe(
            (params:any) => {
                this.videoNid = params['nid'];
                this.selectedScreenVideo = this.videoService.getVideoObjectFromNid(this.videoNid);
                this.selectedScreenVideoUrl = this.partialVideoUrl+this.videoNid;
            }
        );

    }

    onSelectedScreenVideo(selectedScreenVideo) {
        this.selectedScreenVideo = selectedScreenVideo;
        this.videoNid = selectedScreenVideo.nid;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.videoServiceDataUpdateSubscription.unsubscribe();
    }
}
