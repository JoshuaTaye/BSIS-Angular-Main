import {Component, Input, ViewChild} from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MenuItem} from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    RouterLink,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  exportAs: 'appMenu'
})
export class MenuComponent {
  @Input() menuItems: MenuItem[] = [];
  @ViewChild("menuPanel") menuPanel!: MatMenu;
  public get menuInstance(): MatMenu{
    return this.menuPanel;
  };

  isDisplayOnly(item: MenuItem): boolean {
    return !item.route && !item.action && !item.isSeparator;
  }


}
