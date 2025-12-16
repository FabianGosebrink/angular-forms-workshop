import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseFormSearch } from './showcase-form-search';

describe('ShowcaseFormSearch', () => {
  let component: ShowcaseFormSearch;
  let fixture: ComponentFixture<ShowcaseFormSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseFormSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseFormSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
