import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './../services/http.service';
import { HttpServiceMock } from './../services/http.service-mock';

import { SimpleFormSearchComponent } from './simple-form-search.component';

describe('SimpleFormSearchComponent', () => {
  let component: SimpleFormSearchComponent;
  let fixture: ComponentFixture<SimpleFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormSearchComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        { provide: HttpService, useClass: HttpServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
