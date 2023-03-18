import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleFormArrayComponent } from './simple-form-array.component';

describe('SimpleFormArrayComponent', () => {
  let component: SimpleFormArrayComponent;
  let fixture: ComponentFixture<SimpleFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormArrayComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
