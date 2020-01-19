import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {WorkComponent} from "./work/work.component";
import {CertComponent} from "./cert/cert.component";
import {EduComponent} from "./edu/edu.component";
import {HobbyComponent} from "./hobby/hobby.component";

const routes: Routes = [
  {path: '', redirectTo: "/overview", pathMatch: "full"},
  {path: 'overview', component: OverviewComponent},
  {path: 'work', component: WorkComponent},
  {path: 'cert', component: CertComponent},
  {path: 'edu', component: EduComponent},
  {path: 'hobby', component: HobbyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
