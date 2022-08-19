import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedPricesComponent } from './tracked-prices.component';

describe('TrackedPricesComponent', () => {
  let component: TrackedPricesComponent;
  let fixture: ComponentFixture<TrackedPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackedPricesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
