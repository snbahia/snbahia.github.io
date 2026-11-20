import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  @HostListener('document:keydown.escape')
  closeMenu(): void {
    this.menuOpen = false;
  }
}
