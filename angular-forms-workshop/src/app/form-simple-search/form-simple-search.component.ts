import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

@Component({
  selector: 'app-form-simple-search',
  templateUrl: './form-simple-search.component.html',
  styleUrls: ['./form-simple-search.component.css'],
})
export class FormSimpleSearchComponent implements OnInit {
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
