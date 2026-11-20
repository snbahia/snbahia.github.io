import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { projectsEn, PortfolioProject } from '../api/projectsEn';
import { projectsFr } from '../api/projectsFr';

type Project = PortfolioProject & { galleryIsDisplayed: boolean };

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnDestroy {
  projects = this.localizedProjects();
  private languageSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.languageSubscription = translate.onLangChange.subscribe(() => {
      this.projects = this.localizedProjects();
    });
  }

  private localizedProjects() {
    const source: PortfolioProject[] = this.translate.currentLang === 'fr' ? projectsFr : projectsEn;
    return source.map(project => ({ ...project, detailIsDisplayed: false, galleryIsDisplayed: false }));
  }

  detailOnClick(project: Project): void {
    project.detailIsDisplayed = !project.detailIsDisplayed;
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
}
