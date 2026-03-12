import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeComp } from './bike-comp';

describe('BikeComp', () => {
  let component: BikeComp;
  let fixture: ComponentFixture<BikeComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
