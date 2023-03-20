import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockButtonsComponent } from './block-buttons.component';

describe('BlockButtonsComponent', () => {
  let component: BlockButtonsComponent;
  let fixture: ComponentFixture<BlockButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlockButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
