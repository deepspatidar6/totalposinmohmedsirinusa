import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReturnInvoiceUpdatedComponent } from './sales-return-invoice-updated.component';

describe('SalesReturnInvoiceUpdatedComponent', () => {
  let component: SalesReturnInvoiceUpdatedComponent;
  let fixture: ComponentFixture<SalesReturnInvoiceUpdatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReturnInvoiceUpdatedComponent]
    });
    fixture = TestBed.createComponent(SalesReturnInvoiceUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
