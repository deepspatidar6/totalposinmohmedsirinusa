import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbillingComponent } from './sbilling.component';

describe('SbillingComponent', () => {
  let component: SbillingComponent;
  let fixture: ComponentFixture<SbillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SbillingComponent]
    });
    fixture = TestBed.createComponent(SbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
