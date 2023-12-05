import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchangesBillingComponent } from './schanges-billing.component';

describe('SchangesBillingComponent', () => {
  let component: SchangesBillingComponent;
  let fixture: ComponentFixture<SchangesBillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchangesBillingComponent]
    });
    fixture = TestBed.createComponent(SchangesBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
