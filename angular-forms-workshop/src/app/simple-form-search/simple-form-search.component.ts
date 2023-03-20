import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-simple-form-search',
  standalone: true,
  templateUrl: './simple-form-search.component.html',
  styleUrls: ['./simple-form-search.component.css'],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
  ],
})
export class SimpleFormSearchComponent {
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      tap(console.log),
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
    );
  }
}
