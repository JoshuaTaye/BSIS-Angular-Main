import {Component, inject, ViewChild} from '@angular/core';
import {HeaderComponent} from './shared/components/header/header.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CommonModule} from '@angular/common';
import {MenuItem} from './interfaces/menu-item.interface';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipSelectionChange} from '@angular/material/chips';
import {IconService} from './shared/components/icons/icon.service';
import {RouterOutlet} from '@angular/router';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {NavItemsStore} from './shared/stores/navigation-items.store';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    RouterOutlet,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BSIS-Frontend';
  constructor(private iconService: IconService) {}
  headerTitle: string = "HOME";
  rightMenu: string = "Donor Clinic";
  isMobile: boolean = false;
  @ViewChild('drawer') drawer!: MatSidenav;
  exampleButtonDisabled = false;
  isSidenavExpanded = true;

  readonly currentNavItems = inject(NavItemsStore);
  ngOnInit(): void {
    const homeNavItems: MenuItem[] = [
      {text: 'DONOR COMMUNICATIONS'},
      { icon: 'outbox', text: 'View / Export Donor List', route: '/blood-stock' },
      {
        isSeparator: true,
        text: ''
      },
      {text: 'DONOR APPOINTMENT'},
      { icon: 'event_available', text: 'Manage Donor Appointment', route: '/blood-stock' },
    ];
    this.currentNavItems.setNavItems(homeNavItems);
  }

  rangeStart: Date | null = null;
  rangeEnd: Date | null = null;


  handleStartDateChange(date: Date | null) {
    this.rangeStart = date;
    console.log('Start Date:', this.rangeStart);
  }

  handleEndDateChange(date: Date | null) {
    this.rangeEnd = date;
    console.log('End Date:', this.rangeEnd);
  }
  tabLabelsApp: string[] = [
    "sth",
    "sth 2"
  ]

  toggleSidenav(): void {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  // private checkScreenSize(): void {
  //   this.isMobile = window.innerWidth <= 768;
  // }
  currentPage: string = "Donors";



  logSomething(): void {
    console.log('Custom button clicked!');
    // this.exampleButtonDisabled = !this.exampleButtonDisabled;
  }
  logChipRemoval(chipLabel: string): void {
    console.log(`Chip removed: ${chipLabel}`);
  }

  onChipSelect(event: MatChipSelectionChange): void {
    console.log(`Chip selection changed: Label - ${event.source.value}, Selected - ${event.selected}`);
  }

}

