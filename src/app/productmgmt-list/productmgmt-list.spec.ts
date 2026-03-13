import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductmgmtList } from './productmgmt-list';

describe('ProductmgmtList', () => {
  let component: ProductmgmtList;
  let fixture: ComponentFixture<ProductmgmtList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductmgmtList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductmgmtList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
