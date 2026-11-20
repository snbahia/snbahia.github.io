import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentYear:number;
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'fr']);
    this._translateService.setDefaultLang('en');
    this.currentYear=new Date().getFullYear();
  }

  ngOnInit(): void {
    // The portfolio content is maintained in English.
    document.documentElement.lang = 'en';
    this._translateService.use('en');
  }
}
