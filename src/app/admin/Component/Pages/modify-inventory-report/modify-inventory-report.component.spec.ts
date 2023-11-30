import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyInventoryReportComponent } from './modify-inventory-report.component';

describe('ModifyInventoryReportComponent', () => {
  let component: ModifyInventoryReportComponent;
  let fixture: ComponentFixture<ModifyInventoryReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyInventoryReportComponent]
    });
    fixture = TestBed.createComponent(ModifyInventoryReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
