import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalesReturnInvoiceUpdatedComponent } from './addsales-return-invoice-updated.component';

describe('AddsalesReturnInvoiceUpdatedComponent', () => {
  let component: AddsalesReturnInvoiceUpdatedComponent;
  let fixture: ComponentFixture<AddsalesReturnInvoiceUpdatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsalesReturnInvoiceUpdatedComponent]
    });
    fixture = TestBed.createComponent(AddsalesReturnInvoiceUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
