import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-frame',
    templateUrl: 'frame.component.html',
    styleUrls: ['frame.component.scss'],
})
export class FrameComponent {
    @Input() frameVideo:any;
    @Output() onFrameVideoSelected = new EventEmitter();

    onSelect(videoSelected:any) {
        this.onFrameVideoSelected.emit(videoSelected);
    }
}
