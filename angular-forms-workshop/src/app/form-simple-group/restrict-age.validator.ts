import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Room } from './room';

export class RestrictAgeValidator {
  static restrictAgeValidator(minAge: number): ValidatorFn {
    return (formGroup: AbstractControl) => {
      const ageControl = formGroup.get('age');
      const roomControl = formGroup.get('room');

      if (!ageControl || !roomControl) {
        return null;
      }

      const ageValue = ageControl.value;

      if (!ageValue) {
        return null;
      }

      if (ageValue >= minAge) {
        return null;
      }

      const roomsValue = roomControl.value as Room;

      if (!roomsValue) {
        return null;
      }

      if (roomsValue.value === 'room-2' || roomsValue.value === 'room-3') {
        ageControl.setErrors({ provideMinAge: true });
        return { roomOnlyWith18: true };
      }

      ageControl.setErrors(null);

      return null;
    };
  }
}
