import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// Exercise the real component tree so missing providers and startup errors fail here.
describe('Portfolio interactions', () => {
  let fixture: ComponentFixture<AppComponent>;
  let page: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    page = fixture.nativeElement;
  });

  it('renders personal content and resolves every navigation fragment', () => {
    expect(page.textContent).toContain('Salwan Bahia');
    expect(page.textContent).toContain('Swarm Robotics Thesis');
    page.querySelectorAll('nav a[href^="#"]').forEach(link => {
      expect(page.querySelector(link.getAttribute('href') as string)).not.toBeNull();
    });
  });

  it('opens the mobile menu, closes on navigation, and supports Escape', () => {
    const toggle = page.querySelector('.navbar-toggler') as HTMLButtonElement;
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    const contact = page.querySelector('a[href="#contact"]') as HTMLAnchorElement;
    // Test the menu handler without navigating Karma's own runner iframe.
    contact.addEventListener('click', event => event.preventDefault());
    contact.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('expands project details and images independently', () => {
    const card = page.querySelector('#project-teamTraveler') as HTMLElement;
    const buttons = card.querySelectorAll('button');
    buttons[0].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('false');
    buttons[1].click();
    fixture.detectChanges();
    expect((card.querySelector('.project-gallery') as HTMLElement).hidden).toBe(false);
    expect(card.querySelectorAll('.project-gallery img').length).toBe(2);
    buttons[0].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
  });

  it('renders new projects without empty image or gallery controls and preserves earlier roles', () => {
    const project = page.querySelector('#project-gen-ai-email') as HTMLElement;
    expect(project.textContent).toContain('Outlook');
    expect(project.querySelector('img')).toBeNull();
    expect(project.querySelector('button')).toBeNull();
    expect(page.textContent).toContain('Trade Lifecycle Renovation');
    expect(page.textContent).toContain('Department of National Defence');
    expect(page.textContent).toContain('Canada Revenue Agency');
    expect(page.textContent).toContain('University of Texas at Austin');
    expect(page.querySelector('.skill-percent')).toBeNull();
  });

  it('shows short role summaries and expands the full accomplishments', () => {
    const role = page.querySelector('.experience-list > li') as HTMLElement;
    const highlight = role.querySelector('.experience-highlight') as HTMLElement;
    const details = role.querySelector('[id^="experience-details-"]') as HTMLElement;
    const button = role.querySelector('button') as HTMLButtonElement;
    expect(highlight.textContent).toContain('Trade validation');
    expect(details.hidden).toBe(true);
    button.click();
    fixture.detectChanges();
    expect(details.hidden).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(details.querySelectorAll('.experience-points li').length).toBe(3);
    expect(details.textContent).toContain('10,000+');
    button.click();
    fixture.detectChanges();
    expect(details.hidden).toBe(true);
    button.click();
    fixture.detectChanges();
    (page.querySelectorAll('.experience-toggle')[1] as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(details.hidden).toBe(true);
    expect(page.querySelectorAll('.experience-card.is-open').length).toBe(1);
    expect(page.textContent).not.toContain('Formula SAE');
    expect(page.textContent).not.toContain('MealCare');
    expect((page.querySelector('#about') as HTMLElement).textContent).not.toContain('Morgan Stanley');
  });

  it('groups government placements while preserving role details', () => {
    const roles = page.querySelectorAll('.experience-list > li');
    expect(roles.length).toBe(4);
    const government = roles[3] as HTMLElement;
    expect(government.querySelector('.role-company')!.textContent).toContain('Government of Canada');
    const details = government.querySelector('[id^="experience-details-"]') as HTMLElement;
    expect(details.hidden).toBe(true);
    (government.querySelector('button') as HTMLButtonElement).click();
    fixture.detectChanges();
    expect(details.hidden).toBe(false);
    expect(details.querySelectorAll('.experience-subrole').length).toBe(3);
    expect(details.textContent).toContain('IT Student');
    expect(details.textContent).toContain('Student Programmer');
    expect(details.textContent).toContain('Student Analyst');
    expect(details.textContent).toContain('Department of National Defence');
    expect(details.textContent).toContain('Canada Revenue Agency');
    expect(details.querySelectorAll('.experience-subrole .experience-points li').length).toBe(6);
  });

});
