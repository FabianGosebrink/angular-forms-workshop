import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormControl } from './showcase-form-control';

describe('ShowcaseFormControl', () => {
  let component: ShowcaseFormControl;
  let fixture: ComponentFixture<ShowcaseFormControl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseFormControl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseFormControl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
