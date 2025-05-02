import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';


@Component({
  selector: 'app-radiobutton',
  imports: [CommonModule, MatRadioModule],
  templateUrl: './radiobutton.component.html',
  styleUrl: './radiobutton.component.scss'
})
export class RadiobuttonComponent {
  @Input() options: string[] = [];
  @Input() selected: string = '';
  @Input() name: string = '';
  @Input() disabled: boolean = false;

  @Output() selectedChange = new EventEmitter<string>();

  onSelectionChange(value: string) {
    this.selected = value;
    this.selectedChange.emit(this.selected);
  }


}
