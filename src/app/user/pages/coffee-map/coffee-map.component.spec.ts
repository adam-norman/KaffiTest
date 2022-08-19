import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeMapComponent } from './coffee-map.component';

describe('CoffeeMapComponent', () => {
  let component: CoffeeMapComponent;
  let fixture: ComponentFixture<CoffeeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
