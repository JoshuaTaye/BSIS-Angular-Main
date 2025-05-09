import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  imports: [CommonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss'
})
export class DatepickerComponent {
  @Input() placeholder: string = 'Choose a date';
  @Input() value: Date | null = null;
  @Output() valueChange = new EventEmitter<Date | null>();

  onDateChange(date: Date | null) {
    this.value = date;
    this.valueChange.emit(date);
  }

}
