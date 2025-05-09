import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-tabs',
  imports: [CommonModule, MatTabsModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() tabLabels: string[] = [];
  @Input() tabContents: string[] = [];

}
