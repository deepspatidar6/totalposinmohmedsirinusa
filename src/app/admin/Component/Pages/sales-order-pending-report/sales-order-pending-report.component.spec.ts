import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOrderPendingReportComponent } from './sales-order-pending-report.component';

describe('SalesOrderPendingReportComponent', () => {
  let component: SalesOrderPendingReportComponent;
  let fixture: ComponentFixture<SalesOrderPendingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesOrderPendingReportComponent]
    });
    fixture = TestBed.createComponent(SalesOrderPendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
