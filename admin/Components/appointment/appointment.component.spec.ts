import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAppointmentComponent } from './appointment.component';

describe('AppointmentComponent', () => {
  let component: AdminAppointmentComponent;
  let fixture: ComponentFixture<AdminAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
