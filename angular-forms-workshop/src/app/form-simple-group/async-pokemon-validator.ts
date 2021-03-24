import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  take,
} from 'rxjs/operators';
import { HttpService } from './../services/http.service';

@Injectable({ providedIn: 'root' })
export class PokemonNameValidator {
  constructor(private http: HttpService) {}

  public nameAlreadyTaken(): AsyncValidatorFn {
    return (
      formControl: AbstractControl
    ): Observable<ValidationErrors | null> => {
      const value = formControl.value.trim();

      if (!value) {
        return of(null);
      }

      const url = `https://pokeapi.co/api/v2/pokemon/${value}`;

      return formControl.valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        take(1),
        switchMap(() => this.http.get<any>(url)),
        map((result) => (!!result ? { nameAlreadyTaken: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}
