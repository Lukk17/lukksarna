import {Component, OnInit} from '@angular/core';
import {ResizeService} from './service/resize.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'lukksarna';
    public expanded;

    constructor(private resizeService: ResizeService) {
    }

    ngOnInit(): void {
        this.expanded = this.resizeService.expanded.subscribe(expanded => {
            this.expanded = expanded;
        });
    }

}
