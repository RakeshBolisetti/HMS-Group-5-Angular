import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourNotFourNotFoundComponent } from './four-not-four-not-found.component';

describe('FourNotFourNotFoundComponent', () => {
  let component: FourNotFourNotFoundComponent;
  let fixture: ComponentFixture<FourNotFourNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourNotFourNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourNotFourNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
