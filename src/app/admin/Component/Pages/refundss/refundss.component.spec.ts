import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundssComponent } from './refundss.component';

describe('RefundssComponent', () => {
  let component: RefundssComponent;
  let fixture: ComponentFixture<RefundssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefundssComponent]
    });
    fixture = TestBed.createComponent(RefundssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
