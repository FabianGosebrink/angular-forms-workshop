import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleControlComponent } from './form-simple-control.component';

describe('FormSimpleControlComponent', () => {
  let component: FormSimpleControlComponent;
  let fixture: ComponentFixture<FormSimpleControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSimpleControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
