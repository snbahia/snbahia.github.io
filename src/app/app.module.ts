import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { ReferencesComponent } from './references/references.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CurriculumVitaeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    HeaderComponent,
    ReferencesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TranslateModule.forRoot(),
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
