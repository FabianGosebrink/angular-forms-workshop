import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleFormControlComponent } from './simple-form-control.component';

describe('SimpleFormControlComponent', () => {
  let component: SimpleFormControlComponent;
  let fixture: ComponentFixture<SimpleFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormControlComponent, NoopAnimationsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial value', () => {
    expect(component.myFirstControl?.value).toBe('my first value');
  });

  describe('setValue', () => {
    it('should set value when method is called', () => {
      expect(component.myFirstControl?.value).toBe('my first value');

      component.setValue();

      expect(component.myFirstControl?.value).toBe('setValue');

      fixture.detectChanges();

      const input = fixture.debugElement.query(By.css('input'));
      expect(input.nativeElement.value).toEqual('setValue');
    });
  });
});
