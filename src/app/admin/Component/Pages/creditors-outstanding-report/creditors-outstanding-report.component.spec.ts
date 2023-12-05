import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorsOutstandingReportComponent } from './creditors-outstanding-report.component';

describe('CreditorsOutstandingReportComponent', () => {
  let component: CreditorsOutstandingReportComponent;
  let fixture: ComponentFixture<CreditorsOutstandingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditorsOutstandingReportComponent]
    });
    fixture = TestBed.createComponent(CreditorsOutstandingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
