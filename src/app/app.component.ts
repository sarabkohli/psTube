import {Component} from '@angular/core';
import {HttpService} from "./http.service";
import {VideoService} from "./video.service";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'app works!';
    apiVideoData:any;
    headerUrl = "/app/shared/images/popsugar-header.png";


    constructor(private httpService:HttpService, private videoService:VideoService) {
    }

    ngOnInit() {
        this.apiVideoData = this.videoService.getVideoData();
    }
}
