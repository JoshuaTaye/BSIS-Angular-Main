import {Component, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';
import { AlertsComponent } from "./components/alerts/alerts.component";
import { TableComponent } from "./components/table/table.component";
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {CommonModule, NgClass} from '@angular/common';
import {MenuItem} from './interfaces/menu-item.interface';
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { CheckboxComponent } from "./components/checkbox/checkbox.component";
import { RadiobuttonComponent } from "./components/radiobutton/radiobutton.component";
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import {InputFieldComponent} from './components/input-field/input-field.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule,
    NgClass,
    HeaderComponent, MatSidenavModule, MatSidenavModule,
    MatIconModule, MatButtonModule, MatToolbarModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BSIS-Frontend';
  headerTitle: string = "HOME";
  rightMenu: string = "Donor Clinic";
  isMobile: boolean = false;
  @ViewChild('drawer') drawer!: MatSidenav;

  isSidenavExpanded = true;

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
}
