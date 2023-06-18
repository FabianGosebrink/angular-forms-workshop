import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpService } from '../services/http.service';
import { provideMock } from '../testing/auto-mock';
import { PokemonNameValidator } from './async-pokemon-validator';

describe('PokemonNameValidator (async)', () => {
  let service: PokemonNameValidator;
  let httpService: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMock(HttpService)],
    });

    httpService = TestBed.inject(HttpService);
    service = TestBed.inject(PokemonNameValidator);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('nameAlreadyTaken', () => {
    it('should call correct url', waitForAsync(() => {
      const spy = spyOn(httpService, 'get').and.returnValue(of(null));
      const formControl = new FormControl<string>('someValue');
      const validatorFn = service.nameAlreadyTaken();
      const result$ = validatorFn(
        formControl
      ) as Observable<ValidationErrors | null>;

      result$.subscribe((result) => {
        expect(spy).toHaveBeenCalledOnceWith(
          `https://pokeapi.co/api/v2/pokemon/someValue`
        );
      });

      // emit valuechanges event
      formControl.enable();
    }));

    it('should return null if name is not taken already', waitForAsync(() => {
      spyOn(httpService, 'get').and.returnValue(of(null));

      const formControl = new FormControl<string>('someValue');
      const validatorFn = service.nameAlreadyTaken();
      const result$ = validatorFn(
        formControl
      ) as Observable<ValidationErrors | null>;

      result$.subscribe((result) => {
        expect(result).toBeNull();
      });

      // emit valuechanges event
      formControl.enable();
    }));

    it('should return object if name is taken already', waitForAsync(() => {
      spyOn(httpService, 'get').and.returnValue(of('something'));

      const formControl = new FormControl<string>('someValue');
      const validatorFn = service.nameAlreadyTaken();
      const result$ = validatorFn(
        formControl
      ) as Observable<ValidationErrors | null>;

      result$.subscribe((result) => {
        expect(result).not.toBeNull();
      });

      // emit valuechanges event
      formControl.enable();
    }));

    it('should wait 500ms before sending the request', fakeAsync(() => {
      const spy = spyOn(httpService, 'get').and.returnValue(of(null));

      const formControl = new FormControl<string>('someValue');
      const validatorFn = service.nameAlreadyTaken();
      const result$ = validatorFn(
        formControl
      ) as Observable<ValidationErrors | null>;

      result$.subscribe((result) => {
        expect(result).toBeNull();
      });

      // emit valuechanges event
      formControl.enable();

      tick(250);

      expect(spy).not.toHaveBeenCalled();

      tick(240);

      expect(spy).not.toHaveBeenCalled();

      tick(10);

      expect(spy).toHaveBeenCalled();
    }));
  });
});
