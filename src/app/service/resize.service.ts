import {Injectable} from "@angular/core";
import {AppComponent} from "../app.component";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ResizeService {

  expanded = new Subject<boolean>();

  changeExpanded(expanded: boolean) {
    this.expanded.next(expanded);
  }
}
