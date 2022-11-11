import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {OverviewComponent} from './overview/overview.component';
import {WorkComponent} from './work/work.component';
import {CertComponent} from './cert/cert.component';
import {EduComponent} from './edu/edu.component';
import {HobbyComponent} from './hobby/hobby.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectComponent} from './project/project.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        OverviewComponent,
        WorkComponent,
        CertComponent,
        EduComponent,
        HobbyComponent,
        SkillsComponent,
        ProjectComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
