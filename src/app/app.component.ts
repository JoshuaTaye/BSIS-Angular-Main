import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CommonModule, NgClass} from '@angular/common';
import {MenuItem} from './interfaces/menu-item.interface';
import { MatDividerModule } from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatChipSelectionChange} from '@angular/material/chips';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NgClass,
    HeaderComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    SidebarComponent,
    MatDividerModule,
    MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BSIS-Frontend';
  headerTitle: string = "HOME";
  rightMenu: string = "Donor Clinic";
  isMobile: boolean = false;
  @ViewChild('drawer') drawer!: MatSidenav;
  exampleButtonDisabled = false;
  isSidenavExpanded = true;


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


  toggleSidenav(): void {
    this.isSidenavExpanded = !this.isSidenavExpanded;
  }

  // private checkScreenSize(): void {
  //   this.isMobile = window.innerWidth <= 768;
  // }
  currentPage: string = "Donors";


  currentNavItems: MenuItem[] = [
    // {
    //   isSeparator: true,
    //   text: ''
    // },
    {text: 'DONORS RECORDS'},
    { icon: 'person', text: 'Manage Donors', route: '/home' },
    { icon: 'group', text: 'Duplicate Donors', route: '/find-donors' },
    {
      isSeparator: true,
      text: ''
    },
    {text: 'DONORS CLINIC'},
    { icon: 'inventory_2', text: 'Manage Donation Batches', route: '/blood-stock' },
    {
      isSeparator: true,
      text: ''
    },
    {text: 'POST DONATION'},
    { icon: 'health_and_safety', text: 'Donor Counseling', route: '/blood-stock' },
    {
      isSeparator: true,
      text: ''
    },
    {text: 'DONOR COMMUNICATIONS'},
    { icon: 'outbox', text: 'View / Export Donor List', route: '/blood-stock' },
    {
      isSeparator: true,
      text: ''
    },
    {text: 'DONOR APPOINTMENT'},
    { icon: 'event_available', text: 'Manage Donor Appointment', route: '/blood-stock' },
  ];
  logSomething(): void {
    console.log('Custom button clicked!');
    this.exampleButtonDisabled = !this.exampleButtonDisabled;
  }
  logChipRemoval(chipLabel: string): void {
    console.log(`Chip removed: ${chipLabel}`);
  }

  onChipSelect(event: MatChipSelectionChange): void {
    console.log(`Chip selection changed: Label - ${event.source.value}, Selected - ${event.selected}`);
  }

}

