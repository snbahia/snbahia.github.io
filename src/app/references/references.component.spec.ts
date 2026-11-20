import { AppModule } from '../app.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesComponent } from './references.component';

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
