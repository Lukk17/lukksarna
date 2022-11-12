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
import {AmelcoComponent} from './work/responsibilities/amelco/amelco.component';
import {SamsungComponent} from './work/responsibilities/samsung/samsung.component';
import {CfComponent} from './work/responsibilities/cf/cf.component';
import {LuxoftComponent} from './work/responsibilities/luxoft/luxoft.component';

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
        FooterComponent,
        AmelcoComponent,
        SamsungComponent,
        CfComponent,
        LuxoftComponent
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
