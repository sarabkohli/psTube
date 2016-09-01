import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
    private urlEndpoint = "http://popsugar.dev11.onsugar.com/api2?psdemo=true&types=video&limit=20&video_type=1";
    private params:Array<any>;

    constructor(private http:Http) {
        this.http = http;
    }

    getParams() {
        return this.params;
    };

    setParams(params: Array<any>) {
        this.params = params;
    };

    getData() {
        let paramsUrl = "";
        if (this.params !== undefined && this.params.length) {
            for (var key in this.params) {
                paramsUrl = paramsUrl + '&' + key + this.params[key];
            }
        }

        return this.http.get(this.urlEndpoint + paramsUrl)
            .map((response:Response) => response.json());
    };
}
