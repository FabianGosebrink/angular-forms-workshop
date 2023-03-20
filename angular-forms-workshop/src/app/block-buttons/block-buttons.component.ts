import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-block-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule],
  templateUrl: './block-buttons.component.html',
  styleUrls: ['./block-buttons.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BlockButtonsComponent),
      multi: true,
    },
  ],
})
export class BlockButtonsComponent implements ControlValueAccessor {
  internalValue: any;
  disabled: boolean;

  onChanged: any = () => {};
  onTouched: any = () => {};

  setValue(val: any) {
    this.internalValue = val;
    this.onChanged(this.internalValue);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.internalValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
