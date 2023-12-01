import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupwiseOutstandingReportComponent } from './groupwise-outstanding-report.component';

describe('GroupwiseOutstandingReportComponent', () => {
  let component: GroupwiseOutstandingReportComponent;
  let fixture: ComponentFixture<GroupwiseOutstandingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupwiseOutstandingReportComponent]
    });
    fixture = TestBed.createComponent(GroupwiseOutstandingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
