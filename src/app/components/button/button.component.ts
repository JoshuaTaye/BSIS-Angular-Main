import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {NgSwitch, NgSwitchCase} from '@angular/common';
// type ButtonVariant = "flat" | "stroked";
type ButtonVariant = 'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'mini-fab';

@Component({
  selector: 'app-button',
  imports: [
    MatButton,
    NgSwitchCase,
    NgSwitch,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = "";
  @Input() type: string = "button";
  @Input() disabled: boolean = false;
  @Input() variant: ButtonVariant = "basic";
  @Output() action = new EventEmitter<void>();

  onClick(event: Event): void {
    if (this.disabled) {
      event.stopPropagation();
      return
    }
    this.action.emit();
  }

  // get matButtonAttribute(): string {
  //   switch (this.variant) {
  //     case 'stroked': return 'mat-stroked-button';
  //     case 'flat': return 'mat-flat-button';
  //     default: return 'mat-flat-button'; // 'basic' maps to mat-button
  //   }
  // }
}


