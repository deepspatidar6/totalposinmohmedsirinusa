import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrderBookReportComponent } from './purchase-order-book-report.component';

describe('PurchaseOrderBookReportComponent', () => {
  let component: PurchaseOrderBookReportComponent;
  let fixture: ComponentFixture<PurchaseOrderBookReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchaseOrderBookReportComponent]
    });
    fixture = TestBed.createComponent(PurchaseOrderBookReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
