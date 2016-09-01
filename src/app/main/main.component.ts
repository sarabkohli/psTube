import {Component, OnInit, Input, EventEmitter, OnDestroy} from '@angular/core';
import {VideoService} from "../video.service";
import {Subscription} from "rxjs";


@Component({
    selector: 'app-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss'],
})

export class MainComponent implements OnInit {
    apiVideoData:any[] = [];
    selectedScreenVideo:any;
    heroImageNumber = 0;
    countEmitter = new EventEmitter();
    imageUpdateSubscription:Subscription;
    heroUrl = "http://musthave.dev8.onsugar.com/bundles/app/images/homepage-hero.jpg";

    constructor(private videoService:VideoService) {
    }

    onSelectedScreenVideo(selectedScreenVideo:any) {
        this.selectedScreenVideo = selectedScreenVideo;
    }

    ngOnInit() {
        this.apiVideoData = this.videoService.videoData;
        this.changeHeroImage(this.countEmitter, this.videoService);
        this.imageUpdateSubscription = this.countEmitter.subscribe(
            (heroUrl:string) => {
                this.heroUrl = heroUrl;
            }
        );
    }

    changeHeroImage(eventEmitter, videoService:VideoService) {
        let count=0;
        let heroUrl = "";
        setInterval(function() {
            count++;
            if (typeof videoService.videoData[count%5] !== 'undefined') {
                heroUrl = "http://media2.popsugar-assets.com/files/" + videoService.videoData[count%5].node.images.preview_full;
            }
            else {
                heroUrl = "http://musthave.dev6.onsugar.com/bundles/app/images/homepage-hero.jpg"
            }
            eventEmitter.emit(heroUrl);
        }, 5000);
    };

    ngOnDestroy() {
        this.imageUpdateSubscription.unsubscribe();
    }
}
