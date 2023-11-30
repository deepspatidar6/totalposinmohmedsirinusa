import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowMovingInventoryReportComponent } from './slow-moving-inventory-report.component';

describe('SlowMovingInventoryReportComponent', () => {
  let component: SlowMovingInventoryReportComponent;
  let fixture: ComponentFixture<SlowMovingInventoryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlowMovingInventoryReportComponent]
    });
    fixture = TestBed.createComponent(SlowMovingInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
