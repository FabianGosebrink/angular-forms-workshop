import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { RestrictAgeValidator } from './restrict-age.validator';

describe('RestrictAgeValidator', () => {
  describe('restricts age correctly', () => {
    it('should not return null when given age is under the required age', () => {
      const validatorFn = RestrictAgeValidator.restrictAgeValidator(10);

      const formGroup = new UntypedFormGroup({
        age: new UntypedFormControl(9),
        room: new UntypedFormControl({ text: 'room 2', value: 'room-2' }),
      });

      const result = validatorFn(formGroup);

      expect(result).not.toEqual(null);
    });

    it('should return null when given age is above the required age', () => {
      const validatorFn = RestrictAgeValidator.restrictAgeValidator(18);

      const formGroup = new UntypedFormGroup({
        age: new UntypedFormControl(20),
        room: new UntypedFormControl({ text: 'room 2', value: 'room-2' }),
      });

      const result = validatorFn(formGroup);

      expect(result).toEqual(null);
    });
  });
});
