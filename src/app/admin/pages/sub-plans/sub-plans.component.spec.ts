import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPlansComponent } from './sub-plans.component';

describe('SubPlansComponent', () => {
  let component: SubPlansComponent;
  let fixture: ComponentFixture<SubPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
