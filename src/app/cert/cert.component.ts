import {Component, OnInit} from '@angular/core';
import {ResizeService} from '../service/resize.service';
import {Cert} from './cert.model';

@Component({
    selector: 'app-cert',
    templateUrl: './cert.component.html',
    styleUrls: ['./cert.component.css']
})
export class CertComponent implements OnInit {

    public certs;

    constructor(private resizeService: ResizeService) {
        this.certs = [
            new Cert('11.2022', 'Kubernetes and Docker', 'Udemy',
                'https://www.udemy.com/certificate/UC-771b7d4e-25a5-4382-b40b-3e6195f58015/',
                '../../assets/img/kubernetes-cert.jpg',
                false),
            new Cert('03.2021', 'Angular', 'Udemy',
                'https://www.udemy.com/certificate/UC-a0b9cc3f-19e7-4a16-9383-9e9226edfe5d/',
                '../../assets/img/angular-cert.jpg',
                false),
            new Cert('03.2021', 'Python', 'Udemy',
                'https://www.udemy.com/certificate/UC-87284de7-244d-444a-afb8-8dec6b4dc780/',
                '../../assets/img/python-cert.jpg',
                false),
            new Cert('04.2020', 'Microservices', 'Udemy',
                'https://www.udemy.com/certificate/UC-cf3d201c-36d8-48bd-b0b9-c41a45351785/',
                '../../assets/img/microservices-cert.jpg',
                false),
            new Cert('12.2019', 'Test Driven Development', 'Bottega IT Minds',
                '',
                '../../assets/img/TDD.jpeg',
                false),
            new Cert('11.2019', 'Security PWNing Conference', 'PWN security conference',
                '',
                '../../assets/img/PWNing2019.jpg',
                false),
            new Cert('02.2018', 'Java Developer Bootcamp', 'Coderslab',
                '',
                '../../assets/img/coderslab.jpg',
                false)
        ];
    }

    public expanded;

    ngOnInit() {
        this.expanded = this.resizeService.expanded;
    }


    changeExpanded(obj) {
        obj.expanded = !obj.expanded;
        // this.expanded = !this.expanded;
        // this.resizeService.changeExpanded(this.expanded);
    }


}

export class Certificate {
    name: String;
}
