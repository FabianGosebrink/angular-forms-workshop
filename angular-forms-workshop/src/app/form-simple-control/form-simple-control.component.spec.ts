import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material/material.module';
import { FormSimpleControlComponent } from './form-simple-control.component';

describe('FormSimpleControlComponent', () => {
  let component: FormSimpleControlComponent;
  let fixture: ComponentFixture<FormSimpleControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
      declarations: [FormSimpleControlComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSimpleControlComponent);
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

      const input = fixture.debugElement.query(By.css('input'));
      expect(input.nativeElement.value).toEqual('setValue');
    });
  });
});
