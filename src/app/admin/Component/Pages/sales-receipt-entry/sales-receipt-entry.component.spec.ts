import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReceiptEntryComponent } from './sales-receipt-entry.component';

describe('SalesReceiptEntryComponent', () => {
  let component: SalesReceiptEntryComponent;
  let fixture: ComponentFixture<SalesReceiptEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReceiptEntryComponent]
    });
    fixture = TestBed.createComponent(SalesReceiptEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
