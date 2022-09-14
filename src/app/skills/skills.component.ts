import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Python",percent:90,remark:'excellent'}, {name:"Angular",percent:90,remark:'excellent'},{name:"Java",percent:80,remark:'very-good'},{name:"SQL",percent:70,remark:'good'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"Office",percent:90,remark:'excellent'},{name:"Jira",percent:80,remark:'very-good'},{name:"SolidWorks",percent:70,remark:'good'},{name:"Linux",percent:70,remark:'good'}],
    methodologies:[{name:"Agile",percent:90,remark:'excellent'},{name:"Scrum",percent:90,remark:'excellent'},{name:"Waterfall",percent:60,remark:'decent'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
