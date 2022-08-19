import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavRoastersComponent } from './fav-roasters.component';

describe('FavRoastersComponent', () => {
  let component: FavRoastersComponent;
  let fixture: ComponentFixture<FavRoastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavRoastersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavRoastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
