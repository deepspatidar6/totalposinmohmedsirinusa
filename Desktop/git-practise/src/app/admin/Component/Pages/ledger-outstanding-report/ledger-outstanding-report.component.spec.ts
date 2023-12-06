import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerOutstandingReportComponent } from './ledger-outstanding-report.component';

describe('LedgerOutstandingReportComponent', () => {
  let component: LedgerOutstandingReportComponent;
  let fixture: ComponentFixture<LedgerOutstandingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LedgerOutstandingReportComponent]
    });
    fixture = TestBed.createComponent(LedgerOutstandingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
