import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs/operators';
import { HttpService } from '../services/http.service';

export interface NpmResponse {
  name: string;
  latest: string;
}

@Component({
  selector: 'app-form-simple-search',
  templateUrl: './form-simple-search.component.html',
  styleUrls: ['./form-simple-search.component.css'],
})
export class FormSimpleSearchComponent implements OnInit {
  myControl = new FormControl<NpmResponse>(null);
  filteredOptions: Observable<NpmResponse[]>;

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
        const allResults = result.results as NpmResponse[];

        if (!allResults.length) {
          return [];
        }

        return allResults;
      }),
      catchError(() => of([]))
    );
  }

  displayFn(response: NpmResponse): string {
    return response?.name ? response.name : '';
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
  }
}
