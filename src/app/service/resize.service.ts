import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class ResizeService {

  expanded = new Subject<boolean>();

  changeExpanded(expanded: boolean) {
    this.expanded.next(expanded);
  }
}
