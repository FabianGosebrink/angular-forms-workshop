import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimpleGroupComponent } from './form-simple-group.component';

describe('FormSimpleGroupComponent', () => {
  let component: FormSimpleGroupComponent;
  let fixture: ComponentFixture<FormSimpleGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSimpleGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
