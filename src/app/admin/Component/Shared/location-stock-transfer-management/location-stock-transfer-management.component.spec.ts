import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStockTransferManagementComponent } from './location-stock-transfer-management.component';

describe('LocationStockTransferManagementComponent', () => {
  let component: LocationStockTransferManagementComponent;
  let fixture: ComponentFixture<LocationStockTransferManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationStockTransferManagementComponent]
    });
    fixture = TestBed.createComponent(LocationStockTransferManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
