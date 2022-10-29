import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBookingPopupComponent } from './advance-booking-popup.component';

describe('AdvanceBookingPopupComponent', () => {
  let component: AdvanceBookingPopupComponent;
  let fixture: ComponentFixture<AdvanceBookingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceBookingPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceBookingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
