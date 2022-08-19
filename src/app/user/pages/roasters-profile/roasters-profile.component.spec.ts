import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastersProfileComponent } from './roasters-profile.component';

describe('RoastersProfileComponent', () => {
  let component: RoastersProfileComponent;
  let fixture: ComponentFixture<RoastersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoastersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
