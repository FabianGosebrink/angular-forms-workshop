import { Injectable, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
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
  private readonly http = inject(HttpService);

  public nameAlreadyTaken(): AsyncValidatorFn {
    return (
      formControl: AbstractControl<string>
    ): Observable<ValidationErrors | null> => {
      const value = formControl.value.trim();

      if (!value) {
        return of(null);
      }

      const url = `https://pokeapi.co/api/v2/pokemon/`;

      return timer(500).pipe(
        map(() => value),
        distinctUntilChanged(),
        switchMap((value) =>
          this.http.get<unknown>(`${url}${value.toLowerCase()}`)
        ),
        map((result) => (!!result ? { nameAlreadyTaken: true } : null)),
        catchError(() => of(null))
      );
    };
  }
}
