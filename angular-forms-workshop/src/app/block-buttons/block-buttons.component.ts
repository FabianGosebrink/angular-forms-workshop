import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-block-buttons',
  templateUrl: './block-buttons.component.html',
  styleUrls: ['./block-buttons.component.scss'],
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
