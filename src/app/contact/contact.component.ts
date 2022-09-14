import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import * as awesom from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message = "";
  contactForm: any;
  email: any;
  social: any;
  constructor(private _translationLoaderService: TranslationLoaderService, private formBuilder: FormBuilder) {
    this._translationLoaderService.loadTranslations(english, french);
  
  }

  ngOnInit(): void {
    this.email = awesom.faMailBulk;
    this.social = awesom.faHandshake
  }

  send() {
    this.contactForm = this.formBuilder.group({
      msg: [this.message],
    });
    console.log(this.contactForm)
  }
}
