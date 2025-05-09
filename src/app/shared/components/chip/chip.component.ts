import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatChipListbox, MatChipOption, MatChipSelectionChange} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {NgIf} from '@angular/common';

class MatChipRemoveEvent {
}

@Component({
  selector: 'app-chip',
  imports: [
    MatChipOption,
    MatChipListbox,
    MatIconModule,
    NgIf
  ],
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss'
})
export class ChipComponent {
  @Input() label: string = 'Default Chip';
  @Input() color: 'primary' | 'accent' | 'warn' | undefined = undefined;
  @Input() selected: boolean = false;
  @Input() disabled: boolean = false;
  @Input() removable: boolean = false;
  @Input() selectable: boolean = true;
  @Output() selectionChange = new EventEmitter<MatChipSelectionChange>();
  @Output() removed = new EventEmitter<MatChipRemoveEvent>();

  handleSelectionChange(event: MatChipSelectionChange) {
    this.selected = event.selected;
    this.selectionChange.emit(event);
    console.log('Selection changed in ChipComponent:', event);
  }


  handleRemove(event: MatChipRemoveEvent): void {
    this.removed.emit(event);
    console.log('Removed from ChipComponent:', this.label);
  }


}
