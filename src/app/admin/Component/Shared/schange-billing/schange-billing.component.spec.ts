import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchangeBillingComponent } from './schange-billing.component';

describe('SchangeBillingComponent', () => {
  let component: SchangeBillingComponent;
  let fixture: ComponentFixture<SchangeBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchangeBillingComponent]
    });
    fixture = TestBed.createComponent(SchangeBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
