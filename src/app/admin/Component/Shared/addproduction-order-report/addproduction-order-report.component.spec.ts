import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductionOrderReportComponent } from './addproduction-order-report.component';

describe('AddproductionOrderReportComponent', () => {
  let component: AddproductionOrderReportComponent;
  let fixture: ComponentFixture<AddproductionOrderReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproductionOrderReportComponent]
    });
    fixture = TestBed.createComponent(AddproductionOrderReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
