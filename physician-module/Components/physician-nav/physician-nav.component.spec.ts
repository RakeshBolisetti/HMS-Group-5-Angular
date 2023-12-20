import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianNavComponent } from './physician-nav.component';

describe('PhysicianNavComponent', () => {
  let component: PhysicianNavComponent;
  let fixture: ComponentFixture<PhysicianNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicianNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
