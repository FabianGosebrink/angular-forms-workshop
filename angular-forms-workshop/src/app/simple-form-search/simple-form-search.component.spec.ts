import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormSearchComponent } from './simple-form-search.component';

describe('SimpleFormSearchComponent', () => {
  let component: SimpleFormSearchComponent;
  let fixture: ComponentFixture<SimpleFormSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SimpleFormSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleFormSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
