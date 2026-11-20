import { AppModule } from '../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('offers email and LinkedIn without publishing a phone number', () => {
    const contact: HTMLElement = fixture.nativeElement;
    expect(contact.querySelector('a[href="mailto:snbahia@gmail.com"]')).not.toBeNull();
    expect(contact.querySelector('a[href="https://www.linkedin.com/in/salwanbahia/"]')).not.toBeNull();
    expect(contact.querySelector('a[href^="tel:"]')).toBeNull();
    expect(contact.textContent).not.toContain('613-276-5644');
  });
});
