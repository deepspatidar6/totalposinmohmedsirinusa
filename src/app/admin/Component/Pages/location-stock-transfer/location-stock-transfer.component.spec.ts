import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationStockTransferComponent } from './location-stock-transfer.component';

describe('LocationStockTransferComponent', () => {
  let component: LocationStockTransferComponent;
  let fixture: ComponentFixture<LocationStockTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationStockTransferComponent]
    });
    fixture = TestBed.createComponent(LocationStockTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
