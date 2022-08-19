import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingHelperComponent } from './pricing-helper.component';

describe('PricingHelperComponent', () => {
  let component: PricingHelperComponent;
  let fixture: ComponentFixture<PricingHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
