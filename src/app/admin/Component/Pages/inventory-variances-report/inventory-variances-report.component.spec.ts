import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryVariancesReportComponent } from './inventory-variances-report.component';

describe('InventoryVariancesReportComponent', () => {
  let component: InventoryVariancesReportComponent;
  let fixture: ComponentFixture<InventoryVariancesReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryVariancesReportComponent]
    });
    fixture = TestBed.createComponent(InventoryVariancesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
