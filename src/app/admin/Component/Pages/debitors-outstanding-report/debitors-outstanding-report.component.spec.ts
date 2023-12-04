import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorsOutstandingReportComponent } from './debitors-outstanding-report.component';

describe('DebitorsOutstandingReportComponent', () => {
  let component: DebitorsOutstandingReportComponent;
  let fixture: ComponentFixture<DebitorsOutstandingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DebitorsOutstandingReportComponent]
    });
    fixture = TestBed.createComponent(DebitorsOutstandingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
