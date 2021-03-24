import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleSearchComponent } from './form-simple-search.component';

describe('FormSimpleSearchComponent', () => {
  let component: FormSimpleSearchComponent;
  let fixture: ComponentFixture<FormSimpleSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSimpleSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
