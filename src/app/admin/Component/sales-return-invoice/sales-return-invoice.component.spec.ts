import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnInvoiceComponent } from './sales-return-invoice.component';

describe('SalesReturnInvoiceComponent', () => {
  let component: SalesReturnInvoiceComponent;
  let fixture: ComponentFixture<SalesReturnInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReturnInvoiceComponent]
    });
    fixture = TestBed.createComponent(SalesReturnInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
