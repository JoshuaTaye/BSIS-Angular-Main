import {Component, Input} from '@angular/core';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-input-field',
  imports: [
    MatFormFieldModule,
    MatInput,
    CommonModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() multiline: boolean = false;
  @Input() value: string = '';
}
