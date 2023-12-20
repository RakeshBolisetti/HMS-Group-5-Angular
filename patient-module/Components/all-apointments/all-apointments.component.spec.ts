import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApointmentsComponent } from './all-apointments.component';

describe('AllApointmentsComponent', () => {
  let component: AllApointmentsComponent;
  let fixture: ComponentFixture<AllApointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
