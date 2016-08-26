import {Injectable, EventEmitter} from '@angular/core';
import {HttpService} from './http.service'


@Injectable()
export class VideoService {
    videoData:any[] = [];
    videoDataUpdate = new EventEmitter();
    constructor(private httpService:HttpService) {};

    getVideoData() {
        return this.httpService.getData().subscribe(
            data => {
                const myArray = [];
                for (let key in data) {
                    myArray.push(data[key]);
                }
                this.videoData = myArray;
                this.videoDataUpdate.emit(this.videoData);
            },
            error => console.log(error)
        );
    }

    getVideoObjectFromNid(nid: number) {
        var filteredArray = this.videoData.filter(function (obj) {
            return obj.nid == nid;
        });
        return filteredArray[0];
    }
}
