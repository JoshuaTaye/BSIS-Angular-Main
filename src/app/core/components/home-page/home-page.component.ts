import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  imports: [
    NgForOf,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatButton
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  navItems  = [
    {name: 'Donors', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Components', description:'Component Production Laboratory', route: '/donors'},
    {name: 'Testing', description:'Manage TTI and Blood Group Serology Testing', route: '/donors'},
    {name: 'Labelling', description:'Check Components to Print Pack and Discard Labels', route: '/donors'},
    {name: 'Inventory', description:'Manage Blood Bank Inventory, Requests, Transfers and Issues', route: '/donors'},
    {name: 'Reports', description:'View Charts and Export Reports', route: '/donors'},
    {name: 'MobileClinic', description:'Manage Mobile Clinics and Sync Data' ,route: '/donors'},
    {name: 'BloodBanks', description:'Register Blood Banks,  Request Transfer, and View Blood Banks', route: '/donors'},
    {name: 'Settings', description:'Manage Account and System Settings', route: '/donors'},
  ];
}
