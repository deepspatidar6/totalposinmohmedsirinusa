import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryScanningManagementComponent } from './inventory-scanning-management.component';

describe('InventoryScanningManagementComponent', () => {
  let component: InventoryScanningManagementComponent;
  let fixture: ComponentFixture<InventoryScanningManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryScanningManagementComponent]
    });
    fixture = TestBed.createComponent(InventoryScanningManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
