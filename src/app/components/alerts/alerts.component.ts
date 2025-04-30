import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-alerts',
  imports: [CommonModule],
  templateUrl: './alerts.component.html',
  styleUrl: './alerts.component.scss'
})
export class AlertsComponent {
  @Input() type: 'success' | 'warning' | 'error' | 'info'= 'info';
  @Input() message: string = '';

  getcssClass(): string{
    return `alert-${this.type}`;
  }

}
