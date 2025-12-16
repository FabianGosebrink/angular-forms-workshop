import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormArray } from './showcase-form-array';

describe('ShowcaseFormArray', () => {
  let component: ShowcaseFormArray;
  let fixture: ComponentFixture<ShowcaseFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseFormArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseFormArray);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
