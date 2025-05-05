import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MenuComponent} from '../menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MenuItem} from '../../interfaces/menu-item.interface';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MenuComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() headerTitle: string = "Home";
  @Input() rightMenu: string = "SuperUser";
  @Input() mobileNavItems: MenuItem[] = [];

  isMainMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  readonly headerMenuItems: MenuItem[] = [
    { icon: 'home', text: 'Home', route: '/home' },
    { icon: 'group', text: 'Donors', route: '/donors' },
    { icon: 'filter_alt', text: 'Components', route: '/components' },
    { icon: 'science', text: 'Testing', route: '/testing' },
    { icon: 'barcode_reader', text: 'Labelling', route: '/labelling' },
    { icon: 'bloodtype', text: 'Inventory', route: '/inventory' },
    { icon: 'analytics', text: 'Reports', route: '/reports' },
    { icon: 'local_hospital', text: 'Mobile Clinic', route: '/mobile-clinic' },
    { icon: 'apartment', text: 'Blood Banks', route: '/blood-banks' },
    // {
    //   isSeparator: true,
    //   text: ''
    // },
    { icon: 'settings', text: 'Settings',
      // action: () => this.handleSettingsClick()
    }
  ];

  readonly userProfileMenuItems: MenuItem[] = [
    { icon: 'person', text: 'Account Settings', route: '/profile'},
    { icon: 'logout', text: 'Logout'
    }
  ];

  readonly combinedMenuItems: MenuItem[] = [
    { text: 'Navigation', isSeparator: false},
    ...this.headerMenuItems,
    { isSeparator: true, text: '' },
    { text: 'Account', isSeparator: false },
    ...this.userProfileMenuItems
  ];

  get avatarLetter(): string {
    return this.rightMenu.charAt(0).toUpperCase() || "S";
  }

}
