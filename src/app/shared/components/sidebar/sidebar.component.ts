import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {MenuItem} from '../../../interfaces/menu-item.interface';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatIconButton,
    MatDividerModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() toggleSidenav = new EventEmitter<void>();
  @Input() isExpanded: boolean = true;
  @Input() navigationItems: MenuItem[] = [];
  @Input() currentPage: string = "Donors";


  onToggleClick(): void {
    this.toggleSidenav.emit();
  }

}
