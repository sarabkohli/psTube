import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {MainComponent} from "./main/main.component";
import {VideoListingsComponent} from "./main/video-listings/video-listings.component";
import {FrameComponent} from "./main/video-listings/frame.component";
import {VideoService} from "./video.service";
import {HttpService} from "./http.service";
import {HttpModule} from "@angular/http";
import {ScreenComponent} from "./screen/screen.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        VideoListingsComponent,
        FrameComponent,
        ScreenComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule
    ],
    providers: [VideoService, HttpService],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {

}
