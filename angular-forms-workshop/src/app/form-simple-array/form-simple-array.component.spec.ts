import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleArrayComponent } from './form-simple-array.component';

describe('FormSimpleArrayComponent', () => {
  let component: FormSimpleArrayComponent;
  let fixture: ComponentFixture<FormSimpleArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSimpleArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
