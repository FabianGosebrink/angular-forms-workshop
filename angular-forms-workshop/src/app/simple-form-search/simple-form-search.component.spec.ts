import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { provideMock } from '../testing/auto-mock';
import { HttpService } from './../services/http.service';
import { SimpleFormSearchComponent } from './simple-form-search.component';

describe('SimpleFormSearchComponent', () => {
  let component: SimpleFormSearchComponent;
  let fixture: ComponentFixture<SimpleFormSearchComponent>;
  let service: HttpService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormSearchComponent, NoopAnimationsModule],
      providers: [provideMock(HttpService)],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFormSearchComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire request after 500 seconds', fakeAsync(() => {
    // arrange
    const spy = spyOn(service, 'get').and.returnValue(
      of({ results: [{ name: 'package-1' }, { name: 'package-2' }] }) as any
    );

    component.filteredOptions.subscribe((result) => {
      expect(result).toEqual(['package-1', 'package-2']);
    });

    // act
    component.myControl.setValue('some-search-value');
    tick(500);

    // assert
    expect(spy).toHaveBeenCalledWith(
      'https://api.cdnjs.com/libraries?search=some-search-value'
    );
  }));
});
