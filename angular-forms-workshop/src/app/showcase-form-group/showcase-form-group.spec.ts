import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormGroup } from './showcase-form-group';

describe('ShowcaseFormGroup', () => {
  let component: ShowcaseFormGroup;
  let fixture: ComponentFixture<ShowcaseFormGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseFormGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseFormGroup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
