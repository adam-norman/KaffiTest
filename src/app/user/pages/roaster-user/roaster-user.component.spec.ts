import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoasterUserComponent } from './roaster-user.component';

describe('RoasterUserComponent', () => {
  let component: RoasterUserComponent;
  let fixture: ComponentFixture<RoasterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoasterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoasterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
