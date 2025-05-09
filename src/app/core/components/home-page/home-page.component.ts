import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {HeaderComponent} from '../../../shared/components/header/header.component';
import {NgForOf} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home-page',
  imports: [
    NgForOf,
    MatIconModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  navItems  = [
    {name: 'Donors', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Components', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Testing', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Labelling', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Inventory', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Reports', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'MobileClinic', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'BloodBanks', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},
    {name: 'Settings', description:'Manage donor records, donation batches, and donor communications', route: '/donors'},

  ];
}
