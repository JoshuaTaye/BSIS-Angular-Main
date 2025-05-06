import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-date-range-picker',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss'
})
export class DateRangePickerComponent {
  @Input() label: string = 'Enter Date Range';
  @Input() startDate: Date | null = null;
  @Input() endDate: Date | null = null;

  @Output() startDateChange = new EventEmitter<Date | null>();
  @Output() endDateChange = new EventEmitter<Date | null>();

  onStartDateChange(date: Date | null){
    this.startDate = date;
    this.startDateChange.emit(this.startDate);
  }

  onEndDateChange(date: Date | null){
    this.endDate = date;
    this.endDateChange.emit(this.endDate);
  }
}
