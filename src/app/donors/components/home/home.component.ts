import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavItemsStore} from '../../../shared/stores/navigation-items.store';
import {MenuItem} from '../../../interfaces/menu-item.interface';
import {ButtonComponent} from '../../../shared/components/button/button.component';
@Component({
  selector: 'app-home',
  imports: [
    RouterOutlet,
    ButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent {
  readonly navItems = inject(NavItemsStore);
  ngOnInit(): void {
    const donorNavItems: MenuItem[] = [
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
    this.navItems.setNavItems(donorNavItems);
  }
}
