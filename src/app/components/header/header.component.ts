import {Component, HostListener} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  settingsOpen = false;
  userMenuOpen = false;
  @HostListener('document:click', ['$event.target'])
  onClick(target: HTMLElement) {
    if (!target.closest('.dropdown')){
      this.userMenuOpen = false;
      this.settingsOpen = false;
    }
  }

  toggleSettings() {
    this.settingsOpen = !this.settingsOpen;
    this.userMenuOpen = false;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.settingsOpen = false;
  }
}
