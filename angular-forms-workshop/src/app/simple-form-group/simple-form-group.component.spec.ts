import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleFormGroupComponent } from './simple-form-group.component';

describe('SimpleFormGroupComponent', () => {
  let component: SimpleFormGroupComponent;
  let fixture: ComponentFixture<SimpleFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleFormGroupComponent, NoopAnimationsModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
