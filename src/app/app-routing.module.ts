import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {WorkComponent} from './work/work.component';
import {CertComponent} from './cert/cert.component';
import {EduComponent} from './edu/edu.component';
import {HobbyComponent} from './hobby/hobby.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectComponent} from './project/project.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', component: OverviewComponent},
    {path: 'work', component: WorkComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'cert', component: CertComponent},
    {path: 'edu', component: EduComponent},
    {path: 'hobby', component: HobbyComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
