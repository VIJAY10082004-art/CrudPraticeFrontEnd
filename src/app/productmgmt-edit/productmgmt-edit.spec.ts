import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmgmtEdit } from './productmgmt-edit';

describe('ProductmgmtEdit', () => {
  let component: ProductmgmtEdit;
  let fixture: ComponentFixture<ProductmgmtEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductmgmtEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmgmtEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
