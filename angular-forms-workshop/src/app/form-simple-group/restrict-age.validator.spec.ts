import { FormControl, FormGroup } from '@angular/forms';
import { RestrictAgeValidator } from './restrict-age.validator';

describe('RestrictAgeValidator', () => {
  describe('restricts age correctly', () => {
    it('should not return null when given age is under the required age', () => {
      const validatorFn = RestrictAgeValidator.restrictAgeValidator(10);

      const formGroup = new FormGroup({
        age: new FormControl(9),
        room: new FormControl({ text: 'room 2', value: 'room-2' }),
      });

      const result = validatorFn(formGroup);

      expect(result).not.toEqual(null);
    });

    it('should return null when given age is above the required age', () => {
      const validatorFn = RestrictAgeValidator.restrictAgeValidator(18);

      const formGroup = new FormGroup({
        age: new FormControl(20),
        room: new FormControl({ text: 'room 2', value: 'room-2' }),
      });

      const result = validatorFn(formGroup);

      expect(result).toEqual(null);
    });
  });
});
