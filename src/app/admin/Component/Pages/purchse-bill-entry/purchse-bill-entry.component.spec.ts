import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchseBillEntryComponent } from './purchse-bill-entry.component';

describe('PurchseBillEntryComponent', () => {
  let component: PurchseBillEntryComponent;
  let fixture: ComponentFixture<PurchseBillEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchseBillEntryComponent]
    });
    fixture = TestBed.createComponent(PurchseBillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
