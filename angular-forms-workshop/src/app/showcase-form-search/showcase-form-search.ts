import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, } from 'rxjs';
import { HttpService } from './../services/http.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-showcase-form-search',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
  templateUrl: './showcase-form-search.html',
  styleUrl: './showcase-form-search.scss',
})
export class ShowcaseFormSearch {
  myControl = new FormControl<string>('');

  private readonly http = inject(HttpService);

  filteredOptions = toSignal(this.myControl.valueChanges.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    filter((value) => !!value),
    switchMap((value) =>
      this.http.get(`https://api.cdnjs.com/libraries?search=${value}`)
    ),
    map((result: any) => {
      const allResults = result.results as any[];

      if (!allResults.length) {
        return [];
      }
      return allResults.map((x) => x.name);
    }),
    catchError(() => of([]))
  ));
}

