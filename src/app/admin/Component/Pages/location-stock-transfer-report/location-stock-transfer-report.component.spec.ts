import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStockTransferReportComponent } from './location-stock-transfer-report.component';

describe('LocationStockTransferReportComponent', () => {
  let component: LocationStockTransferReportComponent;
  let fixture: ComponentFixture<LocationStockTransferReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationStockTransferReportComponent]
    });
    fixture = TestBed.createComponent(LocationStockTransferReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
