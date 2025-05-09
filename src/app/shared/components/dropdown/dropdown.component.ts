import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-dropdown',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() label: string = 'Select an option';
  @Input() options: string[] = [];
  @Input() selected: string | null = null;
  @Output() selectionChange = new EventEmitter<string>();

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }

}
