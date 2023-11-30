import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStockSummaryReportComponent } from './add-stock-summary-report.component';

describe('AddStockSummaryReportComponent', () => {
  let component: AddStockSummaryReportComponent;
  let fixture: ComponentFixture<AddStockSummaryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStockSummaryReportComponent]
    });
    fixture = TestBed.createComponent(AddStockSummaryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
