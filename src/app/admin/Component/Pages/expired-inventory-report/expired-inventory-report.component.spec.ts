import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredInventoryReportComponent } from './expired-inventory-report.component';

describe('ExpiredInventoryReportComponent', () => {
  let component: ExpiredInventoryReportComponent;
  let fixture: ComponentFixture<ExpiredInventoryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiredInventoryReportComponent]
    });
    fixture = TestBed.createComponent(ExpiredInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
