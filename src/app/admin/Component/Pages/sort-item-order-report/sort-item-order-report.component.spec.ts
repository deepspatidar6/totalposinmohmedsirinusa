import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItemOrderReportComponent } from './sort-item-order-report.component';

describe('SortItemOrderReportComponent', () => {
  let component: SortItemOrderReportComponent;
  let fixture: ComponentFixture<SortItemOrderReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortItemOrderReportComponent]
    });
    fixture = TestBed.createComponent(SortItemOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
