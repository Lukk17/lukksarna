import {Component, OnInit} from '@angular/core';
import {ResizeService} from "../service/resize.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private resizeService: ResizeService) {
  }

  public expanded;

  ngOnInit() {
    this.expanded = this.resizeService.expanded;
  }


  changeExpanded() {
    this.expanded = !this.expanded;
    this.resizeService.changeExpanded(this.expanded);
  }
}
