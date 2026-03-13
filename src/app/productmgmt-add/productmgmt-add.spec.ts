import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmgmtAdd } from './productmgmt-add';

describe('ProductmgmtAdd', () => {
  let component: ProductmgmtAdd;
  let fixture: ComponentFixture<ProductmgmtAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductmgmtAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmgmtAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
