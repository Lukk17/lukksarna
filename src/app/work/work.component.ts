import {Component, OnInit} from '@angular/core';
import {ResizeService} from '../service/resize.service';
import {Company} from './company.model';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

    public companies;
    public expanded;

    constructor(private resizeService: ResizeService) {
        this.companies = [
            new Company('01.2022 - Current', 'Luxoft', 'Poland',
                'Java Developer', true),
            new Company('07.2020 - 12.2021', 'C&F', 'Poland',
                'Java Developer', false),
            new Company('07.2018 - 07.2020', 'Samsung', 'Warsaw (PL)',
                'Junior Java Developer', false),
            new Company('03.2018 - 06.2018', 'Amelco', 'London (UK)',
                'Junior Java Developer', false),
        ];
    }

    ngOnInit() {
        this.expanded = this.resizeService.expanded;
    }

    changeExpanded(obj) {
        obj.expanded = !obj.expanded;
    }
}
