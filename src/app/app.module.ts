import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {OverviewComponent} from './overview/overview.component';
import {WorkComponent} from './work/work.component';
import {CertComponent} from './cert/cert.component';
import {EduComponent} from './edu/edu.component';
import {HobbyComponent} from './hobby/hobby.component';
import {SkillsComponent} from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    WorkComponent,
    CertComponent,
    EduComponent,
    HobbyComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
