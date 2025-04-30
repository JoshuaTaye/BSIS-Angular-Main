import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MenuComponent} from '../menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MenuItem} from '../../interfaces/menu-item.interface';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
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
  isMainMenuOpen: boolean = false;
  isUserMenuOpen: boolean = false;

  readonly headerMenuItems: MenuItem[] = [
    { icon: 'home', text: 'Home', link: '/home' }, // Example link
    { icon: 'group', text: 'Donors', link: '/donors' },
    { icon: 'filter_alt', text: 'Components', link: '/components' },
    { icon: 'science', text: 'Testing', link: '/testing' },
    { icon: 'barcode_reader', text: 'Labelling', link: '/labelling' },
    { icon: 'bloodtype', text: 'Inventory', link: '/inventory' },
    { icon: 'analytics', text: 'Reports', link: '/reports' },
    { icon: 'local_hospital', text: 'Mobile Clinic', link: '/mobile-clinic' },
    { icon: 'apartment', text: 'Blood Banks', link: '/blood-banks' },
    // {
    //   isSeparator: true,
    //   text: ''
    // },
    { icon: 'settings', text: 'Settings',
      // action: () => this.handleSettingsClick()
    }
  ];

  readonly userProfileMenuItems: MenuItem[] = [
    { icon: 'person', text: 'Account Settings', link: '/profile'},
    { icon: 'logout', text: 'Logout'
    }
  ];


}
